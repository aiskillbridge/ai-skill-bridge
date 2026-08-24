-- AI Skill Bridge — orders table (Phase 5A)
-- DO NOT run automatically. Review and execute manually in Supabase SQL Editor.
--
-- Purpose: secure pending order storage before ECPay integration.
-- Server (service_role) creates orders via /api/orders/create.
-- Users may SELECT their own orders only (RLS). No client INSERT/UPDATE to paid.

-- ---------------------------------------------------------------------------
-- Table
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  customer_email TEXT,

  product_id TEXT NOT NULL,
  product_type TEXT NOT NULL CHECK (product_type IN ('course', 'all-access')),
  course_id TEXT,

  amount INTEGER NOT NULL CHECK (amount > 0),
  currency TEXT NOT NULL DEFAULT 'TWD' CHECK (currency = 'TWD'),

  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'paid', 'failed', 'cancelled', 'refunded')),

  payment_provider TEXT DEFAULT 'ecpay',
  merchant_trade_no TEXT NOT NULL UNIQUE
    CHECK (char_length(merchant_trade_no) BETWEEN 1 AND 20),
  provider_trade_no TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  paid_at TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,

  metadata JSONB,

  CONSTRAINT orders_product_type_course_id_consistency CHECK (
    (product_type = 'course' AND course_id IS NOT NULL)
    OR (product_type = 'all-access' AND course_id IS NULL)
  )
);

COMMENT ON TABLE public.orders IS 'Payment orders — authoritative status from server only.';
COMMENT ON COLUMN public.orders.amount IS 'Integer TWD amount from server product catalog at order creation time.';
COMMENT ON COLUMN public.orders.merchant_trade_no IS 'Unique trade reference for ECPay. Required, 1–20 characters.';
COMMENT ON COLUMN public.orders.metadata IS
  'Optional non-sensitive order context only. MUST NOT store: access tokens, service role keys, ECPay HashKey, ECPay HashIV, credit card data, or sensitive payment provider raw payloads.';

-- ---------------------------------------------------------------------------
-- Indexes
-- ---------------------------------------------------------------------------

CREATE INDEX IF NOT EXISTS orders_user_id_idx ON public.orders (user_id);
CREATE INDEX IF NOT EXISTS orders_status_idx ON public.orders (status);
CREATE INDEX IF NOT EXISTS orders_product_id_idx ON public.orders (product_id);
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON public.orders (created_at DESC);
CREATE INDEX IF NOT EXISTS orders_user_pending_product_idx
  ON public.orders (user_id, product_id, status, created_at DESC);

-- ---------------------------------------------------------------------------
-- updated_at trigger
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.set_orders_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS orders_set_updated_at ON public.orders;
CREATE TRIGGER orders_set_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.set_orders_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Users can read only their own orders.
DROP POLICY IF EXISTS "orders_select_own" ON public.orders;
CREATE POLICY "orders_select_own"
  ON public.orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- No INSERT for authenticated users — orders created by server (service_role) only.
DROP POLICY IF EXISTS "orders_no_client_insert" ON public.orders;
-- (Intentionally no INSERT policy for authenticated/anon.)

-- No UPDATE for authenticated users — payment status updates via server only (Phase 5B).
DROP POLICY IF EXISTS "orders_no_client_update" ON public.orders;
-- (Intentionally no UPDATE policy for authenticated/anon.)

-- No DELETE for authenticated users.
DROP POLICY IF EXISTS "orders_no_client_delete" ON public.orders;
-- (Intentionally no DELETE policy for authenticated/anon.)

-- service_role bypasses RLS by default in Supabase.

-- ---------------------------------------------------------------------------
-- Future entitlement flow (Phase 5B+) — NOT implemented in 5A
-- ---------------------------------------------------------------------------
-- When payment callback confirms success:
--   1. Server updates orders.status = 'paid', paid_at = now()
--   2. Server grants entitlement (e.g. profiles.plan or entitlements table)
--   3. Client refreshes access from Supabase — NOT from localStorage
--
-- all-access paid → profiles.plan = 'premium' (future)
-- single course paid → unlockedCourses / entitlements (future)
-- Creator / Queen special accounts remain separate — never fake paid orders.
