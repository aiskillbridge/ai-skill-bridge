import { setCorsHeaders, handleOptions, getBearerToken, sendError } from "../_lib/http.js";
import { getSupabaseAdmin, verifyAccessToken } from "../_lib/supabaseAdmin.js";
import { toPublicCampusRedemption } from "../_lib/campusAccess.js";

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "GET") {
    return sendError(res, "method_not_allowed");
  }

  const accessToken = getBearerToken(req);
  if (!accessToken) {
    return sendError(res, "authentication_required");
  }

  const authResult = await verifyAccessToken(accessToken);
  if (!authResult.user) {
    return sendError(res, "authentication_required");
  }

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch {
    return sendError(res, "internal_error");
  }

  const { data: rows, error } = await admin
    .from("campus_redemptions")
    .select(`
      id,
      program_id,
      redeemed_at,
      expires_at,
      campus_programs (
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
      )
    `)
    .eq("user_id", authResult.user.id)
    .order("redeemed_at", { ascending: false });

  if (error) {
    console.error("[campus/status] lookup_error", error.message || error);
    return sendError(res, "internal_error");
  }

  const now = new Date();
  const redemptions = (rows || [])
    .filter((row) => row.campus_programs)
    .map((row) => toPublicCampusRedemption(row, row.campus_programs, now));

  return res.status(200).json({ redemptions });
}
