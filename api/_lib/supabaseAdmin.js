import { createClient } from "@supabase/supabase-js";
import {
  getServerSupabaseProjectRef,
  hydrateLocalEnvFromFile
} from "./publicSupabaseConfig.js";

let adminClient = null;

/** Vercel Sensitive env pull writes this placeholder — not a usable secret. */
function readServerEnv(name) {
  const value = process.env[name];
  if (!value || value === "[SENSITIVE]" || value === "{encrypted}") {
    return null;
  }
  return value;
}

export { getServerSupabaseProjectRef };

export function getSupabaseAdmin() {
  if (adminClient) return adminClient;

  hydrateLocalEnvFromFile();

  const url = readServerEnv("SUPABASE_URL");
  const serviceRoleKey = readServerEnv("SUPABASE_SERVICE_ROLE_KEY");

  if (!url || !serviceRoleKey) {
    console.error("[supabaseAdmin] missing_supabase_server_config", {
      hasUrl: Boolean(url),
      hasServiceRoleKey: Boolean(serviceRoleKey)
    });
    throw new Error("missing_supabase_server_config");
  }

  adminClient = createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  return adminClient;
}

/**
 * Verify a Supabase access token and return the authenticated user.
 * @param {string} accessToken
 */
export async function verifyAccessToken(accessToken) {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.auth.getUser(accessToken);

  if (error || !data?.user) {
    return { user: null, error: error || new Error("invalid_token") };
  }

  return { user: data.user, error: null };
}
