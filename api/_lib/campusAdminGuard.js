import { sendError } from "./http.js";

/** Production Supabase project — Campus admin writes stay disabled until E2E sign-off. */
const PRODUCTION_SUPABASE_PROJECT_REF = "ifjkadoskbcgrqmcjvya";

/**
 * Campus admin writes are allowed only on local / Test Project setups.
 * Production deployment or Production Supabase URL blocks all writes unless
 * CAMPUS_ADMIN_WRITES=enabled is explicitly set (local test override).
 */
export function isCampusAdminWriteAllowed() {
  if (process.env.CAMPUS_ADMIN_WRITES === "enabled") return true;
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
