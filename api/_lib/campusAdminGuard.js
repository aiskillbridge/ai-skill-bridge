import { sendError } from "./http.js";
import { getServerSupabaseProjectRef } from "./publicSupabaseConfig.js";

/** Production Supabase project — Campus admin writes stay disabled until E2E sign-off. */
const PRODUCTION_SUPABASE_PROJECT_REF = "ifjkadoskbcgrqmcjvya";
const TEST_SUPABASE_PROJECT_REF = "kcbzsilnfsrsnfblreve";

/**
 * Campus admin writes are allowed on Test / local non-production Supabase.
 * vercel dev may set VERCEL_ENV=production while still pointing at Test via .env.local —
 * Test project ref wins so campus-test E2E can create programs on localhost:5500.
 */
export function isCampusAdminWriteAllowed() {
  if (process.env.CAMPUS_ADMIN_WRITES === "enabled") return true;
  if (getServerSupabaseProjectRef() === TEST_SUPABASE_PROJECT_REF) return true;
  if (process.env.VERCEL_ENV === "production") return false;

  const url = String(process.env.SUPABASE_URL || "");
  if (url.includes(PRODUCTION_SUPABASE_PROJECT_REF)) return false;

  return true;
}

/**
 * @param {import('http').ServerResponse} res
 * @returns {boolean} true when write is allowed
 */
export function requireCampusAdminWrite(res) {
  if (isCampusAdminWriteAllowed()) return true;
  sendError(res, "campus_production_not_enabled");
  return false;
}
