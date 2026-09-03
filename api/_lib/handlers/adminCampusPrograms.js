import { setCorsHeaders, handleOptions, readJsonBody, sendError } from "../http.js";
import { requireAdmin } from "../adminAuth.js";
import { getSupabaseAdmin } from "../supabaseAdmin.js";
import {
  normalizeCampusCode,
  hashCampusCode,
  parseCourseIds,
  getUnlockedCourseIdsForProgram,
  PREMIUM_COURSE_IDS
} from "../campusAccess.js";
import { buildCodeHint } from "../adminFormat.js";
import { isCampusAdminWriteAllowed, requireCampusAdminWrite } from "../campusAdminGuard.js";

async function listPrograms(admin) {
  const { data: programs, error } = await admin
    .from("campus_programs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    if (String(error.message || "").includes("campus_programs")) {
      return { configured: false, programs: [] };
    }
    throw error;
  }

  const rows = [];
  for (const program of programs || []) {
    const { count: redeemedCount } = await admin
      .from("campus_redemptions")
      .select("id", { count: "exact", head: true })
      .eq("program_id", program.id);

    const nowIso = new Date().toISOString();
    const { count: activeCount } = await admin
      .from("campus_redemptions")
      .select("id", { count: "exact", head: true })
      .eq("program_id", program.id)
      .gt("expires_at", nowIso);

    const { data: codes } = await admin
      .from("campus_codes")
      .select("id, code_hint, is_active, created_at")
      .eq("program_id", program.id)
      .order("created_at", { ascending: false });

    const max = Number(program.max_redemptions || 0);
    rows.push({
      programId: program.id,
      schoolName: program.school_name,
      programName: program.name,
      accessType: program.access_type,
      courseIds: parseCourseIds(program.course_ids),
      accessLabel:
        program.access_type === "all-access"
          ? "全站六門 AI 課程"
          : `指定課程 ${parseCourseIds(program.course_ids).length} 門`,
      durationDays: program.duration_days,
      startsAt: program.starts_at,
      endsAt: program.ends_at,
      maxRedemptions: max,
      redeemedCount: redeemedCount || 0,
      activeStudents: activeCount || 0,
      remainingCount: max > 0 ? Math.max(max - (redeemedCount || 0), 0) : null,
      isActive: program.is_active === true,
      codes: (codes || []).map((code) => ({
        codeId: code.id,
        codeHint: code.code_hint,
        isActive: code.is_active === true,
        createdAt: code.created_at
      })),
      createdAt: program.created_at
    });
  }

  return { configured: true, programs: rows };
}

async function createProgram(admin, body) {
  const schoolName = String(body.schoolName || "").trim();
  const programName = String(body.programName || "").trim();
  const accessType = body.accessType === "courses" ? "courses" : "all-access";
  const durationDays = Number(body.durationDays);
  const maxRedemptions = Number(body.maxRedemptions ?? 0);
  const rawCode = String(body.campusCode || "");
  const normalizedCode = normalizeCampusCode(rawCode);
  const isActive = body.isActive !== false;

  if (!schoolName || !programName || !normalizedCode) {
    return { error: "invalid_request" };
  }
  if (!Number.isFinite(durationDays) || durationDays <= 0) {
    return { error: "invalid_request" };
  }
  if (!Number.isFinite(maxRedemptions) || maxRedemptions < 0) {
    return { error: "invalid_request" };
  }

  let courseIds = [];
  if (accessType === "courses") {
    courseIds = (Array.isArray(body.courseIds) ? body.courseIds : [])
      .map((id) => String(id).trim())
      .filter((id) => PREMIUM_COURSE_IDS.includes(id));
    if (!courseIds.length) {
      return { error: "invalid_request" };
    }
  }

  const startsAt = body.startsAt ? new Date(body.startsAt).toISOString() : new Date().toISOString();
  const endsAt = body.endsAt ? new Date(body.endsAt).toISOString() : null;
  if (endsAt && Number.isNaN(new Date(endsAt).getTime())) {
    return { error: "invalid_request" };
  }

  const codeHash = hashCampusCode(normalizedCode);
  const codeHint = buildCodeHint(normalizedCode);

  const { data: existingCode } = await admin
    .from("campus_codes")
    .select("id")
    .eq("code_hash", codeHash)
    .maybeSingle();

  if (existingCode) {
    return { error: "order_conflict" };
  }

  const { data: program, error: programError } = await admin
    .from("campus_programs")
    .insert({
      name: programName,
      school_name: schoolName,
      access_type: accessType,
      course_ids: courseIds,
      duration_days: durationDays,
      starts_at: startsAt,
      ends_at: endsAt,
      max_redemptions: maxRedemptions,
      is_active: isActive
    })
    .select("*")
    .single();

  if (programError) {
    console.error("[admin/campus/programs] insert_program_error", programError.message || programError);
    return { error: "internal_error" };
  }

  const { error: codeError } = await admin.from("campus_codes").insert({
    program_id: program.id,
    code_hash: codeHash,
    code_hint: codeHint,
    is_active: isActive
  });

  if (codeError) {
    console.error("[admin/campus/programs] insert_code_error", codeError.message || codeError);
    await admin.from("campus_programs").delete().eq("id", program.id);
    return { error: "internal_error" };
  }

  return {
    program: {
      programId: program.id,
      schoolName: program.school_name,
      programName: program.name,
      accessType: program.access_type,
      courseIds: getUnlockedCourseIdsForProgram(program),
      durationDays: program.duration_days,
      startsAt: program.starts_at,
      endsAt: program.ends_at,
      maxRedemptions: program.max_redemptions,
      isActive: program.is_active === true,
      codeHint
    },
    campusCodeOnce: normalizedCode,
    warning: "Campus Code 只在建立時顯示一次，請立即保存。"
  };
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  const adminUser = await requireAdmin(req, res);
  if (!adminUser) return;

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch {
    return sendError(res, "internal_error");
  }

  if (req.method === "GET") {
    try {
      const result = await listPrograms(admin);
      const campusWriteEnabled = isCampusAdminWriteAllowed();
      return res.status(200).json({
        ...result,
        campusWriteEnabled
      });
    } catch (error) {
      console.error("[admin/campus/programs] list_error", error?.message || error);
      return sendError(res, "internal_error");
    }
  }

  if (req.method === "POST") {
    if (!requireCampusAdminWrite(res)) return;

    let body;
    try {
      body = await readJsonBody(req);
    } catch {
      return sendError(res, "invalid_request");
    }

    try {
      const result = await createProgram(admin, body);
      if (result.error) return sendError(res, result.error);
      return res.status(201).json(result);
    } catch (error) {
      console.error("[admin/campus/programs] create_error", error?.message || error);
      return sendError(res, "internal_error");
    }
  }

  return sendError(res, "method_not_allowed");
}
