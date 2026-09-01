import { setCorsHeaders, handleOptions, getBearerToken, readJsonBody, sendError } from "../_lib/http.js";
import { getSupabaseAdmin, verifyAccessToken } from "../_lib/supabaseAdmin.js";
import {
  normalizeCampusCode,
  hashCampusCode,
  isProgramWindowOpen,
  computeRedemptionExpiresAt,
  toRedeemSuccessPayload
} from "../_lib/campusAccess.js";

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "POST") {
    return sendError(res, "method_not_allowed");
  }

  const accessToken = getBearerToken(req);
  if (!accessToken) {
    return sendError(res, "authentication_required");
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    return sendError(res, "invalid_request");
  }

  const rawCode = body?.code;
  const normalized = normalizeCampusCode(rawCode);
  if (!normalized || normalized.length < 4 || normalized.length > 64) {
    return sendError(res, "invalid_request");
  }

  const authResult = await verifyAccessToken(accessToken);
  if (!authResult.user) {
    return sendError(res, "authentication_required");
  }

  const userId = authResult.user.id;
  const codeHash = hashCampusCode(normalized);
  const now = new Date();

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch {
    return sendError(res, "internal_error");
  }

  const { data: codeRow, error: codeError } = await admin
    .from("campus_codes")
    .select("id, program_id, is_active")
    .eq("code_hash", codeHash)
    .eq("is_active", true)
    .maybeSingle();

  if (codeError) {
    console.error("[campus/redeem] code_lookup_error", codeError.message || codeError);
    return sendError(res, "internal_error");
  }
  if (!codeRow) {
    return sendError(res, "campus_invalid_code");
  }

  const { data: program, error: programError } = await admin
    .from("campus_programs")
    .select("*")
    .eq("id", codeRow.program_id)
    .maybeSingle();

  if (programError) {
    console.error("[campus/redeem] program_lookup_error", programError.message || programError);
    return sendError(res, "internal_error");
  }
  if (!program || program.is_active !== true) {
    return sendError(res, "campus_program_inactive");
  }

  if (program.starts_at) {
    const start = new Date(program.starts_at).getTime();
    if (!Number.isNaN(start) && now.getTime() < start) {
      return sendError(res, "campus_program_not_started");
    }
  }
  if (program.ends_at) {
    const end = new Date(program.ends_at).getTime();
    if (!Number.isNaN(end) && now.getTime() > end) {
      return sendError(res, "campus_program_expired");
    }
  }
  if (!isProgramWindowOpen(program, now)) {
    return sendError(res, "campus_program_inactive");
  }

  const { data: existingRedemption, error: existingError } = await admin
    .from("campus_redemptions")
    .select("id")
    .eq("program_id", program.id)
    .eq("user_id", userId)
    .maybeSingle();

  if (existingError) {
    console.error("[campus/redeem] existing_lookup_error", existingError.message || existingError);
    return sendError(res, "internal_error");
  }
  if (existingRedemption) {
    return sendError(res, "campus_already_redeemed");
  }

  if (program.max_redemptions != null && Number(program.max_redemptions) > 0) {
    const { count, error: countError } = await admin
      .from("campus_redemptions")
      .select("id", { count: "exact", head: true })
      .eq("program_id", program.id);

    if (countError) {
      console.error("[campus/redeem] count_error", countError.message || countError);
      return sendError(res, "internal_error");
    }
    if ((count || 0) >= Number(program.max_redemptions)) {
      return sendError(res, "campus_max_redemptions_reached");
    }
  }

  const redeemedAt = now;
  const expiresAt = computeRedemptionExpiresAt(program, redeemedAt);

  const { data: redemption, error: insertError } = await admin
    .from("campus_redemptions")
    .insert({
      program_id: program.id,
      campus_code_id: codeRow.id,
      user_id: userId,
      redeemed_at: redeemedAt.toISOString(),
      expires_at: expiresAt.toISOString()
    })
    .select("id, redeemed_at, expires_at")
    .single();

  if (insertError) {
    if (insertError.code === "23505") {
      return sendError(res, "campus_already_redeemed");
    }
    console.error("[campus/redeem] insert_error", insertError.message || insertError);
    return sendError(res, "internal_error");
  }

  console.log("[campus/redeem] success", {
    userId,
    programId: program.id,
    redemptionId: redemption.id
  });

  return res.status(200).json({
    success: true,
    redemption: toRedeemSuccessPayload(program, redemption)
  });
}
