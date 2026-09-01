-- AI Skill Bridge — Campus partnership program (V1.1 Phase 1)
-- DO NOT run automatically. Review and execute manually in Supabase SQL Editor.
--
-- Purpose: independent campus trial entitlement layer.
-- Does NOT modify profiles.plan / unlocked_courses (paid entitlement remains separate).
-- Redeem is server-side only (service_role). Users may SELECT own redemptions only.

-- ---------------------------------------------------------------------------
-- campus_programs
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.campus_programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  name TEXT NOT NULL,
  school_name TEXT NOT NULL,

  access_type TEXT NOT NULL
    CHECK (access_type IN ('all-access', 'courses')),

  course_ids JSONB NOT NULL DEFAULT '[]'::jsonb,

  duration_days INTEGER CHECK (duration_days IS NULL OR duration_days > 0),

  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ,

  max_redemptions INTEGER NOT NULL DEFAULT 0
    CHECK (max_redemptions >= 0),

  is_active BOOLEAN NOT NULL DEFAULT true,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.campus_programs IS
  'Campus partnership programs — entitlement config. Server-only writes.';
COMMENT ON COLUMN public.campus_programs.access_type IS
  'all-access = six premium courses; courses = course_ids JSON array only.';
COMMENT ON COLUMN public.campus_programs.course_ids IS
  'When access_type=courses, JSON array of premium course ids (e.g. ["admissions"]).';
COMMENT ON COLUMN public.campus_programs.max_redemptions IS
  'Maximum successful redemptions across all codes in this program (0 = unlimited).';

CREATE INDEX IF NOT EXISTS campus_programs_active_idx
  ON public.campus_programs (is_active, starts_at, ends_at);

-- ---------------------------------------------------------------------------
-- campus_codes
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.campus_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  program_id UUID NOT NULL
    REFERENCES public.campus_programs(id) ON DELETE RESTRICT,

  code_hash TEXT NOT NULL UNIQUE,
  code_hint TEXT,

  is_active BOOLEAN NOT NULL DEFAULT true,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.campus_codes IS
  'Campus codes stored as SHA-256 hash of normalized code. Never expose plaintext via client APIs.';
COMMENT ON COLUMN public.campus_codes.code_hint IS
  'Optional non-secret hint for admin (e.g. THU-AI-****). Not used for auth.';

CREATE INDEX IF NOT EXISTS campus_codes_program_id_idx
  ON public.campus_codes (program_id);

CREATE INDEX IF NOT EXISTS campus_codes_active_hash_idx
  ON public.campus_codes (code_hash)
  WHERE is_active = true;

-- ---------------------------------------------------------------------------
-- campus_redemptions
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.campus_redemptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  program_id UUID NOT NULL
    REFERENCES public.campus_programs(id) ON DELETE RESTRICT,

  campus_code_id UUID NOT NULL
    REFERENCES public.campus_codes(id) ON DELETE RESTRICT,

  user_id UUID NOT NULL
    REFERENCES auth.users(id) ON DELETE RESTRICT,

  redeemed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT campus_redemptions_program_user_unique UNIQUE (program_id, user_id)
);

COMMENT ON TABLE public.campus_redemptions IS
  'Campus redemption records — never deleted on expiry; inactive when expires_at <= now().';
COMMENT ON COLUMN public.campus_redemptions.expires_at IS
  'Campus access end time. Does not affect paid profiles.unlocked_courses or profiles.plan.';

CREATE INDEX IF NOT EXISTS campus_redemptions_user_id_idx
  ON public.campus_redemptions (user_id, expires_at DESC);

CREATE INDEX IF NOT EXISTS campus_redemptions_program_id_idx
  ON public.campus_redemptions (program_id);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

ALTER TABLE public.campus_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campus_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campus_redemptions ENABLE ROW LEVEL SECURITY;

-- campus_programs: no client policies (server/service_role only)

-- campus_codes: no client policies (server/service_role only)

-- campus_redemptions: users may read own rows only; no client writes
DROP POLICY IF EXISTS campus_redemptions_select_own ON public.campus_redemptions;
CREATE POLICY campus_redemptions_select_own
  ON public.campus_redemptions
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- service_role bypasses RLS by default in Supabase.
