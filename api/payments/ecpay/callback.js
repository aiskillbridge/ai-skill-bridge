import { readFormBody, setCorsHeaders, handleOptions } from "../../_lib/http.js";
import { getSupabaseAdmin } from "../../_lib/supabaseAdmin.js";
import { getEcpayConfig, verifyCheckMacValue } from "../../_lib/ecpay.js";
import { grantEntitlementForPaidOrder } from "../../_lib/entitlement.js";
import { maybeSendPurchaseConfirmation } from "../../_lib/purchaseEmail.js";

async function safeSendPurchaseConfirmation(admin, orderRef) {
  try {
    await maybeSendPurchaseConfirmation(admin, orderRef);
  } catch (err) {
    // Email must never fail the ECPay ACK or roll back paid / entitlement.
    console.error("[ecpay/callback] purchase_email_unexpected", err?.message || err);
  }
}

function sendEcpayAck(res, ok, message = "OK") {
  const body = ok ? `1|${message}` : `0|${message}`;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(body);
}

/**
 * POST /api/payments/ecpay/callback
 * Server-to-server payment result from ECPay (authoritative).
 * Browser ReturnURL / OrderResultURL must NOT mark orders paid.
 */
export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "POST") {
    return sendEcpayAck(res, false, "method_not_allowed");
  }

  const ecpay = getEcpayConfig();
  if (!ecpay.configured) {
    console.error("[ecpay/callback] payment_not_configured", { mode: ecpay.mode });
    return sendEcpayAck(res, false, "not_configured");
  }

  let fields;
  try {
    fields = await readFormBody(req);
  } catch (err) {
    console.error("[ecpay/callback] body_error", err?.message || err);
    return sendEcpayAck(res, false, "invalid_body");
  }

  if (!verifyCheckMacValue(fields, ecpay.hashKey, ecpay.hashIV)) {
    console.error("[ecpay/callback] checkmac_failed", {
      merchantTradeNo: fields.MerchantTradeNo || null
    });
    return sendEcpayAck(res, false, "checkmac_failed");
  }

  if (String(fields.MerchantID || "") !== String(ecpay.merchantId)) {
    console.error("[ecpay/callback] merchant_mismatch");
    return sendEcpayAck(res, false, "merchant_mismatch");
  }

  const merchantTradeNo = String(fields.MerchantTradeNo || "").trim();
  const rtnCode = String(fields.RtnCode || "").trim();
  const tradeAmt = Number.parseInt(String(fields.TradeAmt || ""), 10);
  const providerTradeNo = String(fields.TradeNo || "").trim() || null;

  if (!merchantTradeNo) {
    return sendEcpayAck(res, false, "missing_trade_no");
  }

  let admin;
  try {
    admin = getSupabaseAdmin();
  } catch (err) {
    console.error("[ecpay/callback] config_error", err?.message || err);
    return sendEcpayAck(res, false, "server_config");
  }

  const { data: order, error } = await admin
    .from("orders")
    .select("id, user_id, product_id, product_type, course_id, amount, currency, status, merchant_trade_no, provider_trade_no, paid_at")
    .eq("merchant_trade_no", merchantTradeNo)
    .maybeSingle();

  if (error) {
    console.error("[ecpay/callback] query_error", error.message);
    return sendEcpayAck(res, false, "query_error");
  }

  if (!order) {
    console.error("[ecpay/callback] order_not_found", { merchantTradeNo });
    return sendEcpayAck(res, false, "order_not_found");
  }

  // Idempotent success path: already paid → ensure entitlement, then attempt email if needed.
  if (order.status === "paid") {
    console.log("[ecpay/callback] already_paid", {
      orderId: order.id,
      merchantTradeNo
    });
    try {
      await grantEntitlementForPaidOrder(admin, { ...order, status: "paid" });
      await safeSendPurchaseConfirmation(admin, order);
    } catch (err) {
      console.error("[ecpay/callback] already_paid_followup_error", err?.message || err);
    }
    return sendEcpayAck(res, true, "OK");
  }

  if (order.status !== "pending") {
    console.error("[ecpay/callback] unexpected_status", {
      orderId: order.id,
      status: order.status
    });
    return sendEcpayAck(res, false, "unexpected_status");
  }

  if (!Number.isInteger(tradeAmt) || tradeAmt !== order.amount) {
    console.error("[ecpay/callback] amount_mismatch", {
      orderId: order.id,
      expected: order.amount,
      received: tradeAmt
    });
    return sendEcpayAck(res, false, "amount_mismatch");
  }

  // Payment failed / cancelled / unpaid — keep pending (or mark failed), never unlock.
  if (rtnCode !== "1") {
    const { error: failError } = await admin
      .from("orders")
      .update({
        status: "failed",
        provider_trade_no: providerTradeNo
      })
      .eq("id", order.id)
      .eq("status", "pending");

    if (failError) {
      console.error("[ecpay/callback] fail_update_error", failError.message);
    }

    console.log("[ecpay/callback] payment_not_success", {
      orderId: order.id,
      rtnCode
    });
    // Still ACK so ECPay stops retrying invalid business results after we recorded failure.
    return sendEcpayAck(res, true, "OK");
  }

  const paidAt = new Date().toISOString();
  const { data: updated, error: updateError } = await admin
    .from("orders")
    .update({
      status: "paid",
      paid_at: paidAt,
      provider_trade_no: providerTradeNo,
      payment_provider: "ecpay"
    })
    .eq("id", order.id)
    .eq("status", "pending")
    .select("id, user_id, product_id, product_type, course_id, amount, status, merchant_trade_no, paid_at")
    .maybeSingle();

  if (updateError) {
    console.error("[ecpay/callback] paid_update_error", updateError.message);
    return sendEcpayAck(res, false, "update_error");
  }

  // Race / duplicate callback: another worker already marked paid.
  if (!updated) {
    console.log("[ecpay/callback] concurrent_already_paid", { orderId: order.id });
    await safeSendPurchaseConfirmation(admin, order);
    return sendEcpayAck(res, true, "OK");
  }

  try {
    await grantEntitlementForPaidOrder(admin, updated);
  } catch (err) {
    console.error("[ecpay/callback] entitlement_error", err?.message || err);
    // Order is paid; entitlement can be retried operationally. Still ACK to avoid payment loops.
    // Skip purchase email until entitlement succeeds on a later path / ops retry.
    return sendEcpayAck(res, true, "OK");
  }

  // Purchase confirmation email is best-effort and idempotent. Never affects paid status.
  await safeSendPurchaseConfirmation(admin, updated);

  console.log("[ecpay/callback] paid", {
    orderId: updated.id,
    merchantTradeNo: updated.merchant_trade_no,
    amount: updated.amount,
    productId: updated.product_id
  });

  return sendEcpayAck(res, true, "OK");
}
