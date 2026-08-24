import { createClient } from "@supabase/supabase-js";

let adminClient = null;

export function getSupabaseAdmin() {
  if (adminClient) return adminClient;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
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
