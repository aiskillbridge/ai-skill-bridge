import { setCorsHeaders, handleOptions } from "../_lib/http.js";
import { getPublicSupabaseConfig } from "../_lib/publicSupabaseConfig.js";

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const { url, anonKey, projectRef } = getPublicSupabaseConfig();
  if (!url || !anonKey || !projectRef) {
    return res.status(503).json({ error: "supabase_public_config_missing" });
  }

  return res.status(200).json({
    supabaseUrl: url,
    supabaseAnonKey: anonKey,
    projectRef
  });
}
