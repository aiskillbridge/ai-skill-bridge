-- AI Skill Bridge — Phase 5B entitlement support
-- DO NOT run automatically. Review and execute manually in Supabase SQL Editor.
--
-- Adds profiles.unlocked_courses for single-course purchases after ECPay paid callback.
-- all-access continues to use profiles.plan = 'premium'.
-- Creator / Queen remain email-based special roles (not stored here).

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS unlocked_courses JSONB NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.profiles.unlocked_courses IS
  'JSON array of paid course ids unlocked via verified ECPay paid orders. Never grant from browser/localStorage.';

-- Authenticated users may read their own unlocked_courses via existing profiles SELECT policies.
-- Do not add client UPDATE policy for unlocked_courses / plan payment fields.
-- Payment callback (service_role) is the only writer for paid entitlements.
