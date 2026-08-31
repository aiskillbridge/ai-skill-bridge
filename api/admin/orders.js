import { setCorsHeaders, handleOptions, sendError } from "../_lib/http.js";
import { requireAdmin } from "../_lib/adminAuth.js";
import { getSupabaseAdmin } from "../_lib/supabaseAdmin.js";
import { toAdminOrderRow } from "../_lib/adminFormat.js";

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
  const orderId = (url.searchParams.get("orderId") || "").trim();
  const status = (url.searchParams.get("status") || "").trim().toLowerCase();
  const limit = Math.min(Number(url.searchParams.get("limit") || 100), 200);

  let query = admin
    .from("orders")
    .select(
      "id, customer_email, product_id, product_type, course_id, amount, currency, status, merchant_trade_no, provider_trade_no, created_at, paid_at, purchase_email_sent_at, purchase_email_last_error, purchase_email_attempts"
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (email) {
    query = query.ilike("customer_email", `%${email.replace(/[%_]/g, "")}%`);
  }
  if (orderId) {
    query = query.eq("id", orderId);
  }
  if (status && ["paid", "pending", "failed", "cancelled", "refunded"].includes(status)) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    console.error("[admin/orders] query_error", error.message || error);
    return sendError(res, "internal_error");
  }

  return res.status(200).json({
    orders: (data || []).map(toAdminOrderRow)
  });
}
