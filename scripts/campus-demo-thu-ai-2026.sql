-- AI Skill Bridge — Demo Campus Program (manual setup only)
-- DO NOT run on Production until reviewed.
--
-- Demo program:
--   School: 東海大學
--   Program: AI Skill Bridge Campus Trial 2026
--   Code: THU-AI-2026
--   Access: all-access (six premium courses)
--   Duration: 30 days per redemption
--   Max redemptions: 50
--
-- Code hash = SHA-256("THU-AI-2026") after trim + uppercase.
-- Regenerate: node -e "console.log(require('crypto').createHash('sha256').update('THU-AI-2026').digest('hex'))"

BEGIN;

INSERT INTO public.campus_programs (
  id,
  name,
  school_name,
  access_type,
  course_ids,
  duration_days,
  starts_at,
  ends_at,
  max_redemptions,
  is_active
) VALUES (
  'a1111111-1111-4111-8111-111111111111',
  'AI Skill Bridge Campus Trial 2026',
  '東海大學',
  'all-access',
  '[]'::jsonb,
  30,
  now(),
  NULL,
  50,
  true
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.campus_codes (
  id,
  program_id,
  code_hash,
  code_hint,
  is_active
) VALUES (
  'b2222222-2222-4222-8222-222222222222',
  'a1111111-1111-4111-8111-111111111111',
  '837c051f59e5b3479ebf7966fe43f62e2e9df7bea0556961b8ec33dd64533c21',
  'THU-AI-****',
  true
)
ON CONFLICT (id) DO NOTHING;

COMMIT;

-- Verify (optional):
-- SELECT p.school_name, p.name, c.code_hint, c.is_active
-- FROM public.campus_codes c
-- JOIN public.campus_programs p ON p.id = c.program_id
-- WHERE c.code_hint = 'THU-AI-****';
