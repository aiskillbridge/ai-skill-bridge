import { readFormBody, setCorsHeaders, handleOptions } from "../../_lib/http.js";
import { getEcpayConfig, isPublicHttpsBaseUrl } from "../../_lib/ecpay.js";
import { getSupabaseAdmin } from "../../_lib/supabaseAdmin.js";

/**
 * POST /api/payments/ecpay/result
 *
 * ECPay OrderResultURL (browser POST). Not payment authority.
 * Never mark paid / never grant entitlement here.
 * Accept form body, resolve orderId, then HTTP 303 → SPA GET.
 */
function redirectToOrderResult(res, appBaseUrl, orderId) {
  const base = String(appBaseUrl || "").replace(/\/$/, "");
  const target = orderId
    ? `${base}/?orderId=${encodeURIComponent(orderId)}#order-result`
    : `${base}/#order-result`;
  res.statusCode = 303;
  res.setHeader("Location", target);
  res.setHeader("Cache-Control", "no-store");
  res.end();
}

function resolveAppBaseUrl(req) {
  const ecpay = getEcpayConfig();
  if (ecpay.appBaseUrl && isPublicHttpsBaseUrl(ecpay.appBaseUrl)) {
    return ecpay.appBaseUrl;
  }
  const proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0].trim();
  const host = String(req.headers["x-forwarded-host"] || req.headers.host || "")
    .split(",")[0]
    .trim();
  if (host) return `${proto}://${host}`;
  return "https://ai-skill-bridge-woad.vercel.app";
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  const appBaseUrl = resolveAppBaseUrl(req);

  // GET: allow manual open / refresh without treating as payment.
  if (req.method === "GET") {
    const url = new URL(req.url || "/", "http://localhost");
    const orderId = url.searchParams.get("orderId");
    return redirectToOrderResult(res, appBaseUrl, orderId);
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET, POST, OPTIONS");
    res.end("method_not_allowed");
    return;
  }

  let fields = {};
  try {
    fields = await readFormBody(req);
  } catch (err) {
    console.error("[ecpay/result] body_error", err?.message || err);
    return redirectToOrderResult(res, appBaseUrl, null);
  }

  // Prefer CustomField1 (order UUID set at checkout). Never trust RtnCode here.
  let orderId = String(fields.CustomField1 || "").trim() || null;
  const merchantTradeNo = String(fields.MerchantTradeNo || "").trim();

  if (!orderId && merchantTradeNo) {
    try {
      const admin = getSupabaseAdmin();
      const { data: order } = await admin
        .from("orders")
        .select("id")
        .eq("merchant_trade_no", merchantTradeNo)
        .maybeSingle();
      orderId = order?.id || null;
    } catch (err) {
      console.error("[ecpay/result] lookup_error", err?.message || err);
    }
  }

  console.log("[ecpay/result] browser_return", {
    orderId,
    merchantTradeNo: merchantTradeNo || null,
    rtnCode: fields.RtnCode ? String(fields.RtnCode) : null
  });

  return redirectToOrderResult(res, appBaseUrl, orderId);
}
