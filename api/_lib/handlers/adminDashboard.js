import { setCorsHeaders, handleOptions, sendError } from "../http.js";
import { requireAdmin } from "../adminAuth.js";
import { getSupabaseAdmin } from "../supabaseAdmin.js";
import { taipeiDayKey, taipeiMonthKey, toAdminOrderRow } from "../adminFormat.js";
import { EMPTY_DASHBOARD_ORDERS, isOrdersSchemaUnavailable } from "../ordersAdmin.js";

function sumPaidAmount(orders) {
  return (orders || [])
    .filter((o) => o.status === "paid")
    .reduce((sum, o) => sum + Number(o.amount || 0), 0);
}

async function safeCampusStats(admin) {
  try {
    const { count: programCount } = await admin
      .from("campus_programs")
      .select("id", { count: "exact", head: true })
      .eq("is_active", true);

    const { count: redemptionUsers } = await admin
      .from("campus_redemptions")
      .select("user_id", { count: "exact", head: true });

    const nowIso = new Date().toISOString();
    const { count: activeRedemptions } = await admin
      .from("campus_redemptions")
      .select("id", { count: "exact", head: true })
      .gt("expires_at", nowIso);

    const { data: programs } = await admin
      .from("campus_programs")
      .select("id, school_name, name, max_redemptions, is_active")
      .order("created_at", { ascending: false })
      .limit(5);

    const programSummaries = [];
    for (const program of programs || []) {
      const { count: redeemed } = await admin
        .from("campus_redemptions")
        .select("id", { count: "exact", head: true })
        .eq("program_id", program.id);

      const max = Number(program.max_redemptions || 0);
      programSummaries.push({
        programId: program.id,
        schoolName: program.school_name,
        programName: program.name,
        redeemedCount: redeemed || 0,
        maxRedemptions: max,
        remainingCount: max > 0 ? Math.max(max - (redeemed || 0), 0) : null,
        isActive: program.is_active === true
      });
    }

    return {
      configured: true,
      activePrograms: programCount || 0,
      totalRedemptions: redemptionUsers || 0,
      activeRedemptions: activeRedemptions || 0,
      programSummaries
    };
  } catch {
    return {
      configured: false,
      activePrograms: 0,
      totalRedemptions: 0,
      activeRedemptions: 0,
      programSummaries: []
    };
  }
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

  const todayKey = taipeiDayKey();
  const monthKey = taipeiMonthKey();

  const { data: paidOrders, error: paidError } = await admin
    .from("orders")
    .select("amount, status, paid_at")
    .eq("status", "paid");

  if (paidError) {
    if (isOrdersSchemaUnavailable(paidError)) {
      console.warn("[admin/dashboard] orders_table_unavailable", paidError.message || paidError);
      const campus = await safeCampusStats(admin);

      const { count: memberCount, error: memberError } = await admin
        .from("profiles")
        .select("id", { count: "exact", head: true });

      if (memberError) {
        console.warn("[admin/dashboard] profiles_count_error", memberError.message || memberError);
      }

      const { data: profiles, error: profilesError } = await admin
        .from("profiles")
        .select("plan, unlocked_courses");

      let allAccessCount = 0;
      let singleCourseBuyerCount = 0;
      if (!profilesError && profiles) {
        for (const profile of profiles) {
          if (profile.plan === "premium" || profile.plan === "all-access") {
            allAccessCount += 1;
          } else if (Array.isArray(profile.unlocked_courses) && profile.unlocked_courses.length) {
            singleCourseBuyerCount += 1;
          } else if (
            profile.unlocked_courses
            && typeof profile.unlocked_courses === "object"
            && Object.keys(profile.unlocked_courses).length
          ) {
            singleCourseBuyerCount += 1;
          }
        }
      }

      return res.status(200).json({
        ...EMPTY_DASHBOARD_ORDERS,
        ordersAvailable: false,
        members: {
          total: memberCount || 0,
          singleCourseBuyers: singleCourseBuyerCount,
          allAccess: allAccessCount
        },
        campus: {
          users: campus.totalRedemptions,
          activeUsers: campus.activeRedemptions,
          activePrograms: campus.activePrograms,
          configured: campus.configured,
          programSummaries: campus.programSummaries
        }
      });
    }

    console.error("[admin/dashboard] paid_orders_error", paidError.message || paidError);
    return sendError(res, "internal_error");
  }

  let todayRevenue = 0;
  let monthRevenue = 0;
  let todayPaidCount = 0;
  const totalRevenue = sumPaidAmount(paidOrders);
  const totalPaidCount = (paidOrders || []).length;

  for (const order of paidOrders || []) {
    if (!order.paid_at) continue;
    const paidDay = taipeiDayKey(new Date(order.paid_at));
    const paidMonth = taipeiMonthKey(new Date(order.paid_at));
    if (paidDay === todayKey) {
      todayRevenue += Number(order.amount || 0);
      todayPaidCount += 1;
    }
    if (paidMonth === monthKey) {
      monthRevenue += Number(order.amount || 0);
    }
  }

  const { count: memberCount, error: memberError } = await admin
    .from("profiles")
    .select("id", { count: "exact", head: true });

  if (memberError) {
    console.warn("[admin/dashboard] profiles_count_error", memberError.message || memberError);
  }

  const { data: profiles, error: profilesError } = await admin
    .from("profiles")
    .select("plan, unlocked_courses");

  let allAccessCount = 0;
  let singleCourseBuyerCount = 0;
  if (!profilesError && profiles) {
    for (const profile of profiles) {
      if (profile.plan === "premium" || profile.plan === "all-access") {
        allAccessCount += 1;
      } else if (Array.isArray(profile.unlocked_courses) && profile.unlocked_courses.length) {
        singleCourseBuyerCount += 1;
      } else if (
        profile.unlocked_courses
        && typeof profile.unlocked_courses === "object"
        && Object.keys(profile.unlocked_courses).length
      ) {
        singleCourseBuyerCount += 1;
      }
    }
  }

  const { data: recentOrders, error: recentError } = await admin
    .from("orders")
    .select(
      "id, customer_email, product_id, product_type, course_id, amount, currency, status, merchant_trade_no, provider_trade_no, created_at, paid_at, purchase_email_sent_at, purchase_email_last_error, purchase_email_attempts"
    )
    .order("created_at", { ascending: false })
    .limit(10);

  if (recentError) {
    if (isOrdersSchemaUnavailable(recentError)) {
      console.warn("[admin/dashboard] recent_orders_unavailable", recentError.message || recentError);
      const campus = await safeCampusStats(admin);
      return res.status(200).json({
        ...EMPTY_DASHBOARD_ORDERS,
        ordersAvailable: false,
        members: {
          total: memberCount || 0,
          singleCourseBuyers: singleCourseBuyerCount,
          allAccess: allAccessCount
        },
        campus: {
          users: campus.totalRedemptions,
          activeUsers: campus.activeRedemptions,
          activePrograms: campus.activePrograms,
          configured: campus.configured,
          programSummaries: campus.programSummaries
        }
      });
    }

    console.error("[admin/dashboard] recent_orders_error", recentError.message || recentError);
    return sendError(res, "internal_error");
  }

  const campus = await safeCampusStats(admin);

  return res.status(200).json({
    ordersAvailable: true,
    revenue: {
      today: todayRevenue,
      month: monthRevenue,
      total: totalRevenue,
      currency: "TWD"
    },
    orders: {
      todayPaidCount,
      totalPaidCount
    },
    members: {
      total: memberCount || 0,
      singleCourseBuyers: singleCourseBuyerCount,
      allAccess: allAccessCount
    },
    campus: {
      users: campus.totalRedemptions,
      activeUsers: campus.activeRedemptions,
      activePrograms: campus.activePrograms,
      configured: campus.configured,
      programSummaries: campus.programSummaries
    },
    recentOrders: (recentOrders || []).map(toAdminOrderRow)
  });
}
