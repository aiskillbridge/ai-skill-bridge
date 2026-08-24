import {
  getBearerToken,
  sendError,
  setCorsHeaders,
  handleOptions,
  toPublicOrderSummary
} from "../_lib/http.js";
import { getSupabaseAdmin, verifyAccessToken } from "../_lib/supabaseAdmin.js";

/**
 * GET /api/orders/:id
 * Auth: Authorization: Bearer <supabase_access_token>
 */
export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "GET") {
    return sendError(res, "method_not_allowed");
  }

  const orderId = req.query?.id;
  if (!orderId || typeof orderId !== "string") {
    return sendError(res, "invalid_request", "Order id is required");
  }

  const accessToken = getBearerToken(req);
  if (!accessToken) {
    return sendError(res, "authentication_required");
  }

  let user;
  try {
    const authResult = await verifyAccessToken(accessToken);
    if (!authResult.user) {
      return sendError(res, "authentication_required");
    }
    user = authResult.user;
  } catch (err) {
    console.error("[orders/status] auth_error", err?.message || err);
    return sendError(res, "internal_error");
  }

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch (err) {
    console.error("[orders/status] config_error", err?.message || err);
    return sendError(res, "internal_error");
  }

  const { data: order, error } = await admin
    .from("orders")
    .select("id, user_id, merchant_trade_no, product_id, amount, currency, status, created_at, paid_at")
    .eq("id", orderId)
    .maybeSingle();

  if (error) {
    console.error("[orders/status] query_error", error.message);
    return sendError(res, "internal_error");
  }

  if (!order || order.user_id !== user.id) {
    return sendError(res, "order_not_found");
  }

  return res.status(200).json(toPublicOrderSummary(order));
}
