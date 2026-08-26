import {
  getBearerToken,
  readJsonBody,
  sendError,
  setCorsHeaders,
  handleOptions
} from "../../_lib/http.js";
import { getSupabaseAdmin, verifyAccessToken } from "../../_lib/supabaseAdmin.js";
import {
  getEcpayConfig,
  generateCheckMacValue,
  formatMerchantTradeDate,
  buildItemName
} from "../../_lib/ecpay.js";

/**
 * POST /api/payments/ecpay/checkout
 * Body: { orderId: string }
 * Auth required. Amount always from DB order row.
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

  const { orderId } = body || {};
  if (!orderId || typeof orderId !== "string") {
    return sendError(res, "invalid_request", "orderId is required");
  }

  if (
    body.amount !== undefined ||
    body.TotalAmount !== undefined ||
    body.currency !== undefined ||
    body.CheckMacValue !== undefined ||
    body.HashKey !== undefined ||
    body.HashIV !== undefined
  ) {
    return sendError(res, "invalid_request", "Untrusted payment fields are not accepted");
  }

  const ecpay = getEcpayConfig();
  if (!ecpay.configured) {
    console.error("[ecpay/checkout] payment_not_configured", { mode: ecpay.mode });
    return sendError(res, "payment_not_configured");
  }
  if (!ecpay.appBaseUrlOk) {
    console.error("[ecpay/checkout] missing_public_app_base_url");
    return sendError(
      res,
      "payment_not_configured",
      "APP_BASE_URL must be public https (not localhost)"
    );
  }

  let user;
  try {
    const authResult = await verifyAccessToken(accessToken);
    if (!authResult.user) {
      return sendError(res, "authentication_required");
    }
    user = authResult.user;
  } catch (err) {
    console.error("[ecpay/checkout] auth_error", err?.message || err);
    return sendError(res, "internal_error");
  }

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch (err) {
    console.error("[ecpay/checkout] config_error", err?.message || err);
    return sendError(res, "internal_error");
  }

  const { data: order, error } = await admin
    .from("orders")
    .select("id, user_id, product_id, product_type, course_id, amount, currency, status, merchant_trade_no, metadata")
    .eq("id", orderId)
    .maybeSingle();

  if (error) {
    console.error("[ecpay/checkout] query_error", error.message);
    return sendError(res, "internal_error");
  }

  if (!order || order.user_id !== user.id) {
    return sendError(res, "order_not_found");
  }

  if (order.status !== "pending") {
    return sendError(res, "order_not_pending");
  }

  if (!order.merchant_trade_no || order.currency !== "TWD" || !Number.isInteger(order.amount) || order.amount <= 0) {
    return sendError(res, "invalid_request", "Order is not payable");
  }

  const returnURL = `${ecpay.appBaseUrl}/api/payments/ecpay/callback`;
  const clientBackURL = `${ecpay.appBaseUrl}/?orderId=${encodeURIComponent(order.id)}#order-result`;
  const orderResultURL = clientBackURL;

  const params = {
    MerchantID: ecpay.merchantId,
    MerchantTradeNo: order.merchant_trade_no,
    MerchantTradeDate: formatMerchantTradeDate(),
    PaymentType: "aio",
    TotalAmount: String(order.amount),
    TradeDesc: "AI Skill Bridge course",
    ItemName: buildItemName(order),
    ReturnURL: returnURL,
    ChoosePayment: "ALL",
    EncryptType: "1",
    ClientBackURL: clientBackURL,
    OrderResultURL: orderResultURL,
    CustomField1: order.id
  };

  const checkMacValue = generateCheckMacValue(params, ecpay.hashKey, ecpay.hashIV);
  const paymentFields = {
    ...params,
    CheckMacValue: checkMacValue
  };

  console.log("[ecpay/checkout] prepared", {
    orderId: order.id,
    merchantTradeNo: order.merchant_trade_no,
    amount: order.amount,
    mode: ecpay.mode
  });

  // Never return HashKey / HashIV. CheckMacValue is required by ECPay form POST.
  return res.status(200).json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    status: order.status,
    checkoutUrl: ecpay.checkoutUrl,
    paymentFields
  });
}
