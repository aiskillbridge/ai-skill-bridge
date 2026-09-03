import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const PRODUCTION_PROJECT_REF = "ifjkadoskbcgrqmcjvya";
/** Public publishable key — same value historically embedded in admin.js / app.js. */
const PRODUCTION_ANON_KEY_FALLBACK = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";

let localEnvHydrated = false;

function readServerEnv(name) {
  const value = process.env[name];
  if (!value || value === "[SENSITIVE]" || value === "{encrypted}") {
    return null;
  }
  return value;
}

function shouldHydrateSupabaseFromLocalFile() {
  if (process.env.VERCEL_ENV !== "production") return true;
  const vercelUrl = String(process.env.VERCEL_URL || "");
  if (!vercelUrl || vercelUrl.includes("localhost") || vercelUrl.includes("127.0.0.1")) {
    return true;
  }
  return false;
}

/** Load Supabase URL/keys from .env.local for localhost / preview testing. */
export function hydrateLocalEnvFromFile() {
  if (localEnvHydrated) return;
  localEnvHydrated = true;
  if (!shouldHydrateSupabaseFromLocalFile()) return;

  const envPath = resolve(process.cwd(), ".env.local");
  const fallbackEnvPath = resolve(process.cwd(), "..", ".env.local");
  const filePath = existsSync(envPath) ? envPath : (existsSync(fallbackEnvPath) ? fallbackEnvPath : null);
  if (!filePath) return;

  try {
    const text = readFileSync(filePath, "utf8");
    for (const line of text.split(/\n/)) {
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const idx = line.indexOf("=");
      const key = line.slice(0, idx).trim();
      if (
        key !== "SUPABASE_URL" &&
        key !== "SUPABASE_SERVICE_ROLE_KEY" &&
        key !== "SUPABASE_ANON_KEY"
      ) {
        continue;
      }
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
    // Ignore local hydrate failures.
  }
}

export function getServerSupabaseProjectRef() {
  hydrateLocalEnvFromFile();
  const url = readServerEnv("SUPABASE_URL");
  const match = String(url || "").match(/https:\/\/([^.]+)\.supabase\.co/);
  return match ? match[1] : null;
}

/**
 * Browser-safe Supabase config aligned with the API server's project.
 * Anon key is public by design (same as embedded in SPA).
 */
export function getPublicSupabaseConfig() {
  hydrateLocalEnvFromFile();

  const url = readServerEnv("SUPABASE_URL");
  let anonKey = readServerEnv("SUPABASE_ANON_KEY");
  const projectRef = getServerSupabaseProjectRef();

  if (!anonKey && projectRef === PRODUCTION_PROJECT_REF) {
    anonKey = PRODUCTION_ANON_KEY_FALLBACK;
  }

  return {
    url,
    anonKey,
    projectRef
  };
}
