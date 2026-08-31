import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getBearerToken, sendError } from "./http.js";
import { verifyAccessToken } from "./supabaseAdmin.js";

let adminEmailsHydrated = false;

/** Load ADMIN_EMAILS from .env.local when not injected into process.env (local vercel dev). */
function hydrateAdminEmailsFromFile() {
  if (adminEmailsHydrated) return;
  adminEmailsHydrated = true;
  if (process.env.ADMIN_EMAILS) return;

  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  try {
    for (const line of readFileSync(envPath, "utf8").split(/\n/)) {
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const idx = line.indexOf("=");
      const key = line.slice(0, idx).trim();
      if (key !== "ADMIN_EMAILS") continue;
      if (process.env.ADMIN_EMAILS) break;
      let value = line.slice(idx + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!value || value === "[SENSITIVE]" || value === "{encrypted}") break;
      process.env.ADMIN_EMAILS = value;
      break;
    }
  } catch {
    // Ignore — getAdminEmailAllowlist will return empty allowlist.
  }
}

/**
 * Server-side admin allowlist from ADMIN_EMAILS (comma-separated).
 * Never expose this list to the browser. Queen is not included unless listed.
 */
export function getAdminEmailAllowlist() {
  hydrateAdminEmailsFromFile();
  const raw = process.env.ADMIN_EMAILS || "";
  return raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email) {
  if (!email) return false;
  const normalized = String(email).trim().toLowerCase();
  const allowlist = getAdminEmailAllowlist();
  return allowlist.length > 0 && allowlist.includes(normalized);
}

/**
 * Verify Supabase JWT and admin allowlist.
 * @returns {Promise<{ user: object, email: string } | null>}
 */
export async function requireAdmin(req, res) {
  const accessToken = getBearerToken(req);
  if (!accessToken) {
    sendError(res, "authentication_required");
    return null;
  }

  const authResult = await verifyAccessToken(accessToken);
  if (!authResult.user?.email) {
    sendError(res, "authentication_required");
    return null;
  }

  const email = authResult.user.email.trim().toLowerCase();
  if (!isAdminEmail(email)) {
    sendError(res, "admin_forbidden");
    return null;
  }

  return { user: authResult.user, email };
}
