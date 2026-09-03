import { setCorsHeaders, handleOptions, readJsonBody, sendError } from "../http.js";
import { requireAdmin } from "../adminAuth.js";
import { getSupabaseAdmin } from "../supabaseAdmin.js";
import { requireCampusAdminWrite } from "../campusAdminGuard.js";

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "PATCH" && req.method !== "POST") {
    return sendError(res, "method_not_allowed");
  }

  const adminUser = await requireAdmin(req, res);
  if (!adminUser) return;

  if (!requireCampusAdminWrite(res)) return;

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    return sendError(res, "invalid_request");
  }

  const programId = String(body.programId || "").trim();
  if (!programId) return sendError(res, "invalid_request");

  if (typeof body.isActive !== "boolean") {
    return sendError(res, "invalid_request");
  }

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch {
    return sendError(res, "internal_error");
  }

  const { data: program, error: updateError } = await admin
    .from("campus_programs")
    .update({ is_active: body.isActive })
    .eq("id", programId)
    .select("id, is_active")
    .maybeSingle();

  if (updateError) {
    console.error("[admin/campus/toggle] program_error", updateError.message || updateError);
    return sendError(res, "internal_error");
  }
  if (!program) return sendError(res, "invalid_request");

  const { error: codeError } = await admin
    .from("campus_codes")
    .update({ is_active: body.isActive })
    .eq("program_id", programId);

  if (codeError) {
    console.warn("[admin/campus/toggle] code_error", codeError.message || codeError);
  }

  return res.status(200).json({
    programId: program.id,
    isActive: program.is_active === true
  });
}
