/**
 * Grant course access only after a verified paid order.
 * Creator / Queen special roles remain email-based and independent.
 *
 * profiles.plan:
 *   - all-access paid → "premium"
 *   - single course → keep "free" (or leave existing premium)
 *
 * profiles.unlocked_courses (jsonb array of course ids):
 *   - append course_id for single-course purchases
 */

function uniqueCourseIds(list) {
  const out = [];
  for (const id of list || []) {
    const value = String(id || "").trim();
    if (value && !out.includes(value)) out.push(value);
  }
  return out;
}

function parseUnlockedCourses(value) {
  if (Array.isArray(value)) return uniqueCourseIds(value);
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return uniqueCourseIds(parsed);
    } catch {
      return uniqueCourseIds(value.split(","));
    }
  }
  return [];
}

/**
 * @param {import('@supabase/supabase-js').SupabaseClient} admin
 * @param {{ user_id: string, product_type: string, course_id: string|null, status: string }} order
 */
export async function grantEntitlementForPaidOrder(admin, order) {
  if (!order || order.status !== "paid") {
    throw new Error("entitlement_requires_paid_order");
  }
  if (!order.user_id) {
    throw new Error("entitlement_missing_user");
  }

  const { data: profile, error: profileError } = await admin
    .from("profiles")
    .select("id, plan, unlocked_courses")
    .eq("id", order.user_id)
    .maybeSingle();

  if (profileError) {
    console.error("[entitlement] profile_read_error", profileError.message);
    throw new Error("entitlement_profile_read_failed");
  }

  if (!profile) {
    // Ensure a row exists so entitlement is durable.
    const insertPayload = {
      id: order.user_id,
      plan: order.product_type === "all-access" ? "premium" : "free",
      unlocked_courses:
        order.product_type === "course" && order.course_id ? [order.course_id] : []
    };
    const { error: insertError } = await admin.from("profiles").insert(insertPayload);
    if (insertError) {
      console.error("[entitlement] profile_insert_error", insertError.message);
      throw new Error("entitlement_profile_insert_failed");
    }
    console.log("[entitlement] granted_new_profile", {
      userId: order.user_id,
      productType: order.product_type,
      courseId: order.course_id || null
    });
    return { ok: true, createdProfile: true };
  }

  const currentPlan = profile.plan || "free";
  const unlocked = parseUnlockedCourses(profile.unlocked_courses);
  const updates = {};

  if (order.product_type === "all-access") {
    if (currentPlan !== "premium") {
      updates.plan = "premium";
    }
  } else if (order.product_type === "course" && order.course_id) {
    if (!unlocked.includes(order.course_id)) {
      updates.unlocked_courses = [...unlocked, order.course_id];
    }
    // Never downgrade premium to free.
    if (!currentPlan || currentPlan === "") {
      updates.plan = "free";
    }
  } else {
    throw new Error("entitlement_unknown_product_type");
  }

  if (Object.keys(updates).length === 0) {
    console.log("[entitlement] already_granted", {
      userId: order.user_id,
      productType: order.product_type,
      courseId: order.course_id || null
    });
    return { ok: true, alreadyGranted: true };
  }

  const { error: updateError } = await admin
    .from("profiles")
    .update(updates)
    .eq("id", order.user_id);

  if (updateError) {
    console.error("[entitlement] profile_update_error", updateError.message);
    throw new Error("entitlement_profile_update_failed");
  }

  console.log("[entitlement] granted", {
    userId: order.user_id,
    productType: order.product_type,
    courseId: order.course_id || null,
    updatedKeys: Object.keys(updates)
  });

  return { ok: true, updatedKeys: Object.keys(updates) };
}
