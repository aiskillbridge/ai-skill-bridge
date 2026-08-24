import { getProductById } from "../_lib/productCatalog.js";
import { createMerchantTradeNo } from "../_lib/merchantTradeNo.js";
import {
  getBearerToken,
  readJsonBody,
  sendError,
  setCorsHeaders,
  handleOptions,
  toCreateOrderResponse
} from "../_lib/http.js";
import { getSupabaseAdmin, verifyAccessToken } from "../_lib/supabaseAdmin.js";

const DUPLICATE_WINDOW_MS = 60_000;

/**
 * POST /api/orders/create
 * Body: { productId: string }
 * Auth: Authorization: Bearer <supabase_access_token>
 */
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

  const { productId } = body || {};

  if (!productId || typeof productId !== "string") {
    return sendError(res, "invalid_request", "productId is required");
  }

  if (
    body.amount !== undefined ||
    body.currency !== undefined ||
    body.paid !== undefined ||
    body.userId !== undefined ||
    body.email !== undefined ||
    body.status !== undefined
  ) {
    return sendError(res, "invalid_request", "Untrusted payment fields are not accepted");
  }

  const product = getProductById(productId);
  if (!product) {
    return sendError(res, "invalid_product");
  }

  let user;
  try {
    const authResult = await verifyAccessToken(accessToken);
    if (!authResult.user) {
      return sendError(res, "authentication_required");
    }
    user = authResult.user;
  } catch (err) {
    console.error("[orders/create] auth_error", err?.message || err);
    return sendError(res, "internal_error");
  }

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch (err) {
    console.error("[orders/create] config_error", err?.message || err);
    return sendError(res, "internal_error");
  }

  const duplicateSince = new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString();
  const { data: recentOrders, error: recentError } = await admin
    .from("orders")
    .select("id")
    .eq("user_id", user.id)
    .eq("product_id", product.productId)
    .eq("status", "pending")
    .gte("created_at", duplicateSince)
    .limit(1);

  if (recentError) {
    console.error("[orders/create] duplicate_check_error", recentError.message);
    return sendError(res, "internal_error");
  }

  if (recentOrders && recentOrders.length > 0) {
    return sendError(res, "order_conflict", "A pending order for this product was created recently");
  }

  const merchantTradeNo = createMerchantTradeNo();
  const orderRow = {
    user_id: user.id,
    customer_email: user.email || null,
    product_id: product.productId,
    product_type: product.type,
    course_id: product.courseId,
    amount: product.amount,
    currency: "TWD",
    status: "pending",
    payment_provider: "ecpay",
    merchant_trade_no: merchantTradeNo,
    metadata: {
      productName: product.name
    }
  };

  const { data: inserted, error: insertError } = await admin
    .from("orders")
    .insert(orderRow)
    .select("id, merchant_trade_no, product_id, amount, currency, status")
    .single();

  if (insertError) {
    if (insertError.code === "23505") {
      return sendError(res, "order_conflict");
    }
    console.error("[orders/create] insert_error", insertError.message);
    return sendError(res, "internal_error");
  }

  console.log("[orders/create] pending", {
    orderId: inserted.id,
    merchantTradeNo: inserted.merchant_trade_no,
    productId: inserted.product_id,
    status: inserted.status
  });

  return res.status(201).json(toCreateOrderResponse(inserted));
}
