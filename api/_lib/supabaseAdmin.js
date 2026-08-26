import { createClient } from "@supabase/supabase-js";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

let adminClient = null;
let localEnvHydrated = false;

/** Vercel Sensitive env pull writes this placeholder — not a usable secret. */
function readServerEnv(name) {
  const value = process.env[name];
  if (!value || value === "[SENSITIVE]" || value === "{encrypted}") {
    return null;
  }
  return value;
}

/**
 * vercel env run loads .env.local, but some vercel dev function sandboxes
 * do not inject those keys into process.env. Hydrate once for local only.
 * Never overrides already-set env. Never logs values.
 */
function hydrateLocalEnvFromFile() {
  if (localEnvHydrated) return;
  localEnvHydrated = true;
  if (process.env.VERCEL_ENV === "production") return;
  if (readServerEnv("SUPABASE_URL") && readServerEnv("SUPABASE_SERVICE_ROLE_KEY")) return;

  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  try {
    const text = readFileSync(envPath, "utf8");
    for (const line of text.split(/\n/)) {
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const idx = line.indexOf("=");
      const key = line.slice(0, idx).trim();
      if (key !== "SUPABASE_URL" && key !== "SUPABASE_SERVICE_ROLE_KEY") continue;
      if (process.env[key]) continue;
      let value = line.slice(idx + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!value || value === "[SENSITIVE]" || value === "{encrypted}") continue;
      process.env[key] = value;
    }
  } catch {
    // Ignore local hydrate failures; getSupabaseAdmin will report missing config.
  }
}

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
