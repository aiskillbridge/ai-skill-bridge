/**
 * Campus partnership entitlement helpers (server-side authority).
 * Independent from paid entitlement (profiles.plan / unlocked_courses).
 * Never log plaintext campus codes or service role keys.
 */
import { createHash } from "node:crypto";

/** Six premium course ids (excludes all-access product). */
export const PREMIUM_COURSE_IDS = Object.freeze([
  "admissions",
  "college-learning",
  "research-competition",
  "career-internship",
  "workplace-productivity",
  "startup-automation"
]);

/**
 * @param {string | null | undefined} raw
 */
export function normalizeCampusCode(raw) {
  if (!raw || typeof raw !== "string") return "";
  return raw.trim().toUpperCase();
}

/**
 * SHA-256 hash of normalized code for DB lookup.
 * @param {string} normalizedCode
 */
export function hashCampusCode(normalizedCode) {
  return createHash("sha256").update(normalizedCode, "utf8").digest("hex");
}

/**
 * @param {unknown} value
 * @returns {string[]}
 */
export function parseCourseIds(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.filter((id) => typeof id === "string" && id.trim()).map((id) => id.trim());
  }
  return [];
}

/**
 * @param {Date} [now]
 */
export function nowDate(now) {
  return now instanceof Date && !Number.isNaN(now.getTime()) ? now : new Date();
}

/**
 * Program window: is_active + optional starts_at / ends_at on the program itself.
 * @param {object} program
 * @param {Date} now
 */
export function isProgramWindowOpen(program, now = new Date()) {
  if (!program || program.is_active !== true) return false;
  const ts = nowDate(now).getTime();
  if (program.starts_at) {
    const start = new Date(program.starts_at).getTime();
    if (!Number.isNaN(start) && ts < start) return false;
  }
  if (program.ends_at) {
    const end = new Date(program.ends_at).getTime();
    if (!Number.isNaN(end) && ts > end) return false;
  }
  return true;
}

/**
 * @param {object} program
 * @param {Date} redeemedAt
 * @returns {Date}
 */
export function computeRedemptionExpiresAt(program, redeemedAt) {
  const redeemed = nowDate(redeemedAt);
  let expiresAt = new Date(redeemed.getTime());

  if (program.duration_days != null && Number(program.duration_days) > 0) {
    expiresAt.setUTCDate(expiresAt.getUTCDate() + Number(program.duration_days));
  } else if (program.ends_at) {
    expiresAt = new Date(program.ends_at);
  } else {
    // Fallback: 30 days if neither duration nor program end is set.
    expiresAt.setUTCDate(expiresAt.getUTCDate() + 30);
  }

  if (program.ends_at) {
    const programEnd = new Date(program.ends_at).getTime();
    if (!Number.isNaN(programEnd) && expiresAt.getTime() > programEnd) {
      expiresAt = new Date(programEnd);
    }
  }

  return expiresAt;
}

/**
 * @param {object} redemption
 * @param {object} program
 * @param {Date} now
 */
export function isRedemptionActive(redemption, program, now = new Date()) {
  if (!redemption || !program) return false;
  if (!isProgramWindowOpen(program, now)) return false;
  const expires = new Date(redemption.expires_at).getTime();
  if (Number.isNaN(expires)) return false;
  return expires > nowDate(now).getTime();
}

/**
 * @param {object} program
 * @param {string} courseId
 */
export function programIncludesCourse(program, courseId) {
  if (!program || !courseId) return false;
  if (program.access_type === "all-access") {
    return PREMIUM_COURSE_IDS.includes(courseId);
  }
  if (program.access_type === "courses") {
    return parseCourseIds(program.course_ids).includes(courseId);
  }
  return false;
}

/**
 * @param {object} redemption
 * @param {object} program
 * @param {string} courseId
 * @param {Date} [now]
 */
export function hasActiveCampusAccess(redemption, program, courseId, now = new Date()) {
  if (!isRedemptionActive(redemption, program, now)) return false;
  return programIncludesCourse(program, courseId);
}

/**
 * Resolve unlocked course ids for a program (for API response).
 * @param {object} program
 */
export function getUnlockedCourseIdsForProgram(program) {
  if (!program) return [];
  if (program.access_type === "all-access") return [...PREMIUM_COURSE_IDS];
  return parseCourseIds(program.course_ids).filter((id) => PREMIUM_COURSE_IDS.includes(id));
}

/**
 * @param {object} program
 * @param {string} lang
 */
export function getAccessLabel(program, lang = "zh") {
  if (!program) return "";
  if (program.access_type === "all-access") {
    return lang === "zh" ? "全站六門 AI 課程" : "All six premium AI courses";
  }
  const count = parseCourseIds(program.course_ids).length;
  if (lang === "zh") return `指定課程 ${count} 門`;
  return `${count} selected course${count === 1 ? "" : "s"}`;
}

/**
 * @param {string} iso
 * @param {Date} now
 */
export function getDaysRemaining(iso, now = new Date()) {
  const expires = new Date(iso).getTime();
  if (Number.isNaN(expires)) return 0;
  const diff = expires - nowDate(now).getTime();
  if (diff <= 0) return 0;
  return Math.ceil(diff / (24 * 60 * 60 * 1000));
}

/**
 * @param {object} redemption
 * @param {object} program
 * @param {Date} [now]
 */
export function toPublicCampusRedemption(redemption, program, now = new Date()) {
  const active = isRedemptionActive(redemption, program, now);
  const courseIds = getUnlockedCourseIdsForProgram(program);
  return {
    id: redemption.id,
    programId: program.id,
    programName: program.name,
    schoolName: program.school_name,
    accessType: program.access_type,
    courseIds,
    accessLabelZh: getAccessLabel(program, "zh"),
    accessLabelEn: getAccessLabel(program, "en"),
    redeemedAt: redemption.redeemed_at,
    expiresAt: redemption.expires_at,
    isActive: active,
    status: active ? "active" : "expired",
    daysRemaining: active ? getDaysRemaining(redemption.expires_at, now) : 0
  };
}

/**
 * @param {object} program
 * @param {object} redemption
 */
export function toRedeemSuccessPayload(program, redemption) {
  const courseIds = getUnlockedCourseIdsForProgram(program);
  return {
    programName: program.name,
    schoolName: program.school_name,
    accessType: program.access_type,
    expiresAt: redemption.expires_at,
    unlockedCourseIds: courseIds,
    accessLabelZh: getAccessLabel(program, "zh"),
    accessLabelEn: getAccessLabel(program, "en")
  };
}
