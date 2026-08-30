-- AI Skill Bridge — purchase confirmation email tracking
-- DO NOT run automatically. Review and execute manually in Supabase SQL Editor.
--
-- Purpose: idempotent purchase-confirmation email after verified ECPay paid callback.
-- Email is NOT payment authority. Failure must never roll back paid / entitlement.
-- Do NOT store API keys or provider secrets in this table.

ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS purchase_email_sent_at TIMESTAMPTZ;

ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS purchase_email_last_error TEXT;

ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS purchase_email_attempts INTEGER NOT NULL DEFAULT 0;

COMMENT ON COLUMN public.orders.purchase_email_sent_at IS
  'Set when purchase confirmation email is accepted by the provider (or claimed in-flight). NULL means not successfully sent / retryable after failure clear.';
COMMENT ON COLUMN public.orders.purchase_email_last_error IS
  'Last non-secret email send error code/message for ops. Never store API keys or payment secrets.';
COMMENT ON COLUMN public.orders.purchase_email_attempts IS
  'How many times the server attempted to send the purchase confirmation email.';
