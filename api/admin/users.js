import { setCorsHeaders, handleOptions, sendError } from "../_lib/http.js";
import { requireAdmin } from "../_lib/adminAuth.js";
import { getSupabaseAdmin } from "../_lib/supabaseAdmin.js";
import { parseCourseIds } from "../_lib/campusAccess.js";

function parseUnlockedCourses(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return [];
}

async function loadCampusByUser(admin, userIds) {
  const map = new Map();
  if (!userIds.length) return map;

  try {
    const { data, error } = await admin
      .from("campus_redemptions")
      .select(`
        user_id,
        expires_at,
        redeemed_at,
        campus_programs (
          school_name,
          name,
          access_type,
          course_ids,
          is_active
        )
      `)
      .in("user_id", userIds);

    if (error || !data) return map;

    const now = Date.now();
    for (const row of data) {
      const program = row.campus_programs;
      if (!program) continue;
      const active = new Date(row.expires_at).getTime() > now && program.is_active === true;
      const entry = {
        schoolName: program.school_name,
        programName: program.name,
        accessType: program.access_type,
        courseIds: parseCourseIds(program.course_ids),
        expiresAt: row.expires_at,
        redeemedAt: row.redeemed_at,
        isActive: active
      };
      const list = map.get(row.user_id) || [];
      list.push(entry);
      map.set(row.user_id, list);
    }
  } catch {
    return map;
  }

  return map;
}

async function loadProgressCounts(admin, userIds) {
  const map = new Map();
  if (!userIds.length) return map;

  try {
    const { data } = await admin
      .from("user_progress")
      .select("user_id, completed")
      .in("user_id", userIds);

    for (const row of data || []) {
      const current = map.get(row.user_id) || { total: 0, completed: 0 };
      current.total += 1;
      if (row.completed) current.completed += 1;
      map.set(row.user_id, current);
    }
  } catch {
    return map;
  }

  return map;
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendError(res, "method_not_allowed");

  const adminUser = await requireAdmin(req, res);
  if (!adminUser) return;

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch {
    return sendError(res, "internal_error");
  }

  const url = new URL(req.url, "http://localhost");
  const email = (url.searchParams.get("email") || "").trim();
  const limit = Math.min(Number(url.searchParams.get("limit") || 100), 200);

  let query = admin
    .from("profiles")
    .select("id, email, display_name, plan, unlocked_courses, created_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (email) {
    query = query.ilike("email", `%${email.replace(/[%_]/g, "")}%`);
  }

  const { data: profiles, error } = await query;
  if (error) {
    console.error("[admin/users] query_error", error.message || error);
    return sendError(res, "internal_error");
  }

  const userIds = (profiles || []).map((p) => p.id);
  const campusMap = await loadCampusByUser(admin, userIds);
  const progressMap = await loadProgressCounts(admin, userIds);

  const users = (profiles || []).map((profile) => {
    const unlocked = parseUnlockedCourses(profile.unlocked_courses);
    const progress = progressMap.get(profile.id) || { total: 0, completed: 0 };
    const campus = campusMap.get(profile.id) || [];
    return {
      userId: profile.id,
      email: profile.email || "",
      displayName: profile.display_name || "",
      joinedAt: profile.created_at,
      plan: profile.plan || "free",
      unlockedCourses: unlocked,
      hasAllAccess: profile.plan === "premium" || profile.plan === "all-access",
      campusEntitlements: campus,
      progressSummary: {
        trackedLessons: progress.total,
        completedLessons: progress.completed
      }
    };
  });

  return res.status(200).json({ users });
}
