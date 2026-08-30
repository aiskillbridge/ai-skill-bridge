/**
 * Purchase confirmation email — server only.
 *
 * Provider is abstracted behind sendPurchaseConfirmationEmail().
 * Current adapter: Resend HTTP API (TEST MODE without custom domain).
 *
 * Never log or email: HashKey, HashIV, service role, access tokens, card data.
 * Never trust browser-supplied amount / productName.
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getProductById } from "./productCatalog.js";

const SUPPORT_EMAIL = "li19840610@gmail.com";
const DEFAULT_SITE_ORIGIN = "https://ai-skill-bridge-woad.vercel.app";
const IN_FLIGHT_MARKER = "in_flight";

function readEnv(name) {
  const value = process.env[name];
  if (!value || value === "[SENSITIVE]" || value === "{encrypted}") return null;
  return String(value).trim() || null;
}

function isResendDevFrom(from) {
  return Boolean(from && /@resend\.dev\b/i.test(from));
}

/** Live Vercel Production serverless — not local `.env.local` from `vercel env pull`. */
function isVercelProductionDeploy() {
  if (process.env.VERCEL_ENV !== "production") return false;
  // VERCEL_REGION is set on deployed functions; absent in typical local .env.local pulls.
  return Boolean(process.env.VERCEL === "1" && process.env.VERCEL_REGION);
}

/**
 * Whether callback may send purchase confirmation email.
 * Production deploy: production mode + verified custom-domain From only.
 * Test redirect to PURCHASE_EMAIL_TEST_TO: never on Production deploy.
 */
export function evaluatePurchaseEmailPolicy(config = getPurchaseEmailConfig()) {
  const base = {
    provider: config.provider,
    mode: config.mode,
    hasApiKey: Boolean(config.apiKey),
    hasFrom: Boolean(config.from),
    fromIsResendDev: isResendDevFrom(config.from),
    isProductionDeploy: isVercelProductionDeploy(),
    vercelEnv: process.env.VERCEL_ENV || "local"
  };

  if (config.provider !== "resend" || !config.apiKey || !config.from) {
    return {
      ...base,
      enabled: false,
      skipReason: "not_configured",
      allowTestRedirect: false,
      sendToCustomerOnly: false
    };
  }

  if (isVercelProductionDeploy()) {
    // Production: never test mode, never @resend.dev, never TEST_TO redirect.
    if (config.mode !== "production") {
      return {
        ...base,
        enabled: false,
        skipReason: "production_email_disabled_until_custom_domain",
        allowTestRedirect: false,
        sendToCustomerOnly: true
      };
    }
    if (isResendDevFrom(config.from)) {
      return {
        ...base,
        enabled: false,
        skipReason: "production_resend_dev_from_blocked",
        allowTestRedirect: false,
        sendToCustomerOnly: true
      };
    }
    return {
      ...base,
      enabled: true,
      skipReason: null,
      allowTestRedirect: false,
      sendToCustomerOnly: true
    };
  }

  // Local vercel dev, preview, or standalone scripts (non-production deploy).
  if (config.mode === "test") {
    return {
      ...base,
      enabled: true,
      skipReason: null,
      allowTestRedirect: Boolean(config.testTo && config.testTo.includes("@")),
      sendToCustomerOnly: false
    };
  }

  if (config.mode === "production" && !isResendDevFrom(config.from)) {
    return {
      ...base,
      enabled: true,
      skipReason: null,
      allowTestRedirect: false,
      sendToCustomerOnly: true
    };
  }

  return {
    ...base,
    enabled: false,
    skipReason: "email_disabled_in_this_environment",
    allowTestRedirect: false,
    sendToCustomerOnly: false
  };
}

function hydrateEmailEnvFromFile() {
  if (process.env.VERCEL_ENV === "production") return;
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    if (!existsSync(envPath)) return;
    const keys = new Set([
      "EMAIL_PROVIDER",
      "EMAIL_PROVIDER_API_KEY",
      "RESEND_API_KEY",
      "PURCHASE_EMAIL_FROM",
      "PURCHASE_EMAIL_MODE",
      "PURCHASE_EMAIL_TEST_TO",
      "APP_BASE_URL"
    ]);
    for (const line of readFileSync(envPath, "utf8").split(/\n/)) {
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const idx = line.indexOf("=");
      const key = line.slice(0, idx).trim();
      if (!keys.has(key) || process.env[key]) continue;
      let value = line.slice(idx + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!value || value === "[SENSITIVE]" || value === "{encrypted}") continue;
      process.env[key] = value;
    }
  } catch {
    // ignore — production uses Vercel env
  }
}

/**
 * @returns {{
 *   configured: boolean,
 *   provider: string,
 *   mode: 'test' | 'production',
 *   apiKey: string|null,
 *   from: string|null,
 *   testTo: string|null,
 *   siteOrigin: string
 * }}
 */
export function getPurchaseEmailConfig() {
  hydrateEmailEnvFromFile();

  const provider = (readEnv("EMAIL_PROVIDER") || "resend").toLowerCase();
  const apiKey = readEnv("EMAIL_PROVIDER_API_KEY") || readEnv("RESEND_API_KEY");
  const from = readEnv("PURCHASE_EMAIL_FROM");
  const testTo = readEnv("PURCHASE_EMAIL_TEST_TO");
  const modeRaw = (readEnv("PURCHASE_EMAIL_MODE") || "").toLowerCase();

  const fromLooksLikeResendDev = isResendDevFrom(from);
  let mode = modeRaw === "production" ? "production" : "test";
  // Local / non-production: @resend.dev From implies test. Production deploy policy is enforced separately.
  if (!isVercelProductionDeploy() && (fromLooksLikeResendDev || !modeRaw)) {
    mode = "test";
  }
  if (modeRaw === "production" && fromLooksLikeResendDev && !isVercelProductionDeploy()) {
    mode = "test";
  }

  const siteOrigin = (() => {
    const base = readEnv("APP_BASE_URL");
    if (base && /^https:\/\//i.test(base) && !/localhost|127\.0\.0\.1/i.test(base)) {
      return base.replace(/\/$/, "");
    }
    return DEFAULT_SITE_ORIGIN;
  })();

  return {
    configured: Boolean(provider === "resend" && apiKey && from),
    provider,
    mode,
    apiKey,
    from,
    testTo,
    siteOrigin,
    fromIsResendDev: fromLooksLikeResendDev
  };
}

function formatTwdAmount(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return String(amount ?? "");
  return `NT$${Math.trunc(n).toLocaleString("en-US")}`;
}

function resolveProductName(order) {
  if (order.product_type === "all-access" || order.product_id === "all-access") {
    return "AI Skill Bridge 全站通行證";
  }
  const product = getProductById(order.product_id);
  if (product?.name?.zh) return product.name.zh;
  const meta = order.metadata && typeof order.metadata === "object" ? order.metadata : null;
  if (meta?.productName?.zh) return String(meta.productName.zh);
  return order.product_id || "課程商品";
}

function buildLearningUrl(siteOrigin) {
  return `${String(siteOrigin).replace(/\/$/, "")}/#learning`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {object} order
 * @param {{ mode: string, siteOrigin: string, intendedTo: string, deliveredTo: string }} opts
 */
export function buildPurchaseConfirmationContent(order, opts) {
  const productName = resolveProductName(order);
  const amountLabel = formatTwdAmount(order.amount);
  const currency = order.currency || "TWD";
  const orderId = order.id;
  const merchantTradeNo = order.merchant_trade_no || "";
  const paidAt = order.paid_at || new Date().toISOString();
  const learningUrl = buildLearningUrl(opts.siteOrigin);
  const isTest = opts.mode === "test";

  const subject = isTest
    ? "【TEST】AI Skill Bridge｜購買成功通知"
    : "AI Skill Bridge｜購買成功通知";

  const testBanner = isTest
    ? [
        "【測試模式】此信由 AI Skill Bridge 測試寄件設定發出。",
        "目前尚未使用自訂網域正式寄件人；正式客戶廣播寄送需等網域驗證後開啟。",
        opts.intendedTo && opts.deliveredTo && opts.intendedTo !== opts.deliveredTo
          ? `原訂單收件人：${opts.intendedTo}（測試改寄至：${opts.deliveredTo}）`
          : "",
        ""
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  const text = [
    testBanner,
    "AI Skill Bridge",
    "",
    "您的購買已完成",
    "",
    `商品名稱：${productName}`,
    `付款金額：${amountLabel}`,
    `付款幣別：${currency}`,
    `AI Skill Bridge 訂單編號：${orderId}`,
    `MerchantTradeNo：${merchantTradeNo}`,
    `付款成功時間：${paidAt}`,
    "",
    `前往我的學習：${learningUrl}`,
    "",
    `客服：${SUPPORT_EMAIL}`,
    "",
    "此信為 AI Skill Bridge 購買成功通知，不是電子發票或統一發票。"
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f6f7f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#122033;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f7f9;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;padding:28px 24px;">
        ${
          isTest
            ? `<tr><td style="font-size:13px;line-height:1.5;color:#8a5a00;background:#fff8e6;border-radius:8px;padding:12px;padding-bottom:12px;">
              <strong>【測試模式】</strong>此信由測試寄件設定發出。尚未使用自訂網域正式寄件人。
              ${
                opts.intendedTo && opts.deliveredTo && opts.intendedTo !== opts.deliveredTo
                  ? `<br/>原訂單收件人：${escapeHtml(opts.intendedTo)}（測試改寄至：${escapeHtml(opts.deliveredTo)}）`
                  : ""
              }
            </td></tr>`
            : ""
        }
        <tr><td style="font-size:13px;letter-spacing:0.04em;color:#5b6b7c;padding-bottom:8px;">AI Skill Bridge</td></tr>
        <tr><td style="font-size:22px;font-weight:700;padding-bottom:16px;">您的購買已完成</td></tr>
        <tr><td style="font-size:15px;line-height:1.7;padding-bottom:8px;"><strong>商品名稱</strong><br/>${escapeHtml(productName)}</td></tr>
        <tr><td style="font-size:15px;line-height:1.7;padding-bottom:8px;"><strong>付款金額</strong><br/>${escapeHtml(amountLabel)}</td></tr>
        <tr><td style="font-size:15px;line-height:1.7;padding-bottom:8px;"><strong>付款幣別</strong><br/>${escapeHtml(currency)}</td></tr>
        <tr><td style="font-size:15px;line-height:1.7;padding-bottom:8px;"><strong>AI Skill Bridge 訂單編號</strong><br/>${escapeHtml(String(orderId))}</td></tr>
        <tr><td style="font-size:15px;line-height:1.7;padding-bottom:8px;"><strong>MerchantTradeNo</strong><br/>${escapeHtml(String(merchantTradeNo))}</td></tr>
        <tr><td style="font-size:15px;line-height:1.7;padding-bottom:20px;"><strong>付款成功時間</strong><br/>${escapeHtml(String(paidAt))}</td></tr>
        <tr><td style="padding-bottom:24px;">
          <a href="${escapeHtml(learningUrl)}" style="display:inline-block;background:#1e3a8a;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:600;">前往我的學習</a>
        </td></tr>
        <tr><td style="font-size:14px;line-height:1.6;color:#334155;padding-bottom:12px;">客服：<a href="mailto:${SUPPORT_EMAIL}" style="color:#1e3a8a;">${SUPPORT_EMAIL}</a></td></tr>
        <tr><td style="font-size:12px;line-height:1.6;color:#64748b;border-top:1px solid #e2e8f0;padding-top:14px;">此信為 AI Skill Bridge 購買成功通知，不是電子發票或統一發票。</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, text, html, productName, amountLabel, learningUrl };
}

/**
 * Resend adapter. Keep provider-specific code here only.
 */
async function sendViaResend(payload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${payload.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      subject: payload.subject,
      text: payload.text,
      html: payload.html
    })
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const code = body?.name || body?.message || `http_${response.status}`;
    const err = new Error(String(code).slice(0, 180));
    err.code = "email_provider_rejected";
    throw err;
  }
  return { id: body?.id || null };
}

/**
 * Send purchase confirmation using configured provider.
 */
export async function sendPurchaseConfirmationEmail(order, cfg) {
  const content = buildPurchaseConfirmationContent(order, {
    mode: cfg.mode,
    siteOrigin: cfg.siteOrigin,
    intendedTo: cfg.intendedTo,
    deliveredTo: cfg.to
  });

  if (cfg.provider !== "resend") {
    const err = new Error("email_provider_unsupported");
    err.code = "email_provider_unsupported";
    throw err;
  }

  await sendViaResend({
    apiKey: cfg.apiKey,
    from: cfg.from,
    to: cfg.to,
    subject: content.subject,
    text: content.text,
    html: content.html
  });

  return { ok: true, subject: content.subject, productName: content.productName };
}

/**
 * Idempotent send after verified paid + entitlement.
 * Atomic claim via purchase_email_sent_at; clear on failure for retry.
 * Never throws for payment safety.
 */
export async function maybeSendPurchaseConfirmation(admin, paidOrderRef) {
  if (!admin || !paidOrderRef?.id) return { skipped: true, reason: "missing_order" };

  const config = getPurchaseEmailConfig();
  const policy = evaluatePurchaseEmailPolicy(config);

  if (!policy.enabled) {
    console.log("[purchase-email] skipped_policy", {
      orderId: paidOrderRef.id,
      reason: policy.skipReason,
      vercelEnv: policy.vercelEnv,
      mode: config.mode,
      isProductionDeploy: policy.isProductionDeploy
    });
    // Do not touch purchase_email_sent_at — payment is unaffected; email can be sent later.
    return { skipped: true, reason: policy.skipReason || "disabled" };
  }

  const { data: order, error: loadError } = await admin
    .from("orders")
    .select(
      "id, user_id, customer_email, product_id, product_type, course_id, amount, currency, status, merchant_trade_no, paid_at, metadata, purchase_email_sent_at, purchase_email_attempts, purchase_email_last_error"
    )
    .eq("id", paidOrderRef.id)
    .maybeSingle();

  if (loadError) {
    console.error("[purchase-email] load_error", loadError.message);
    return { skipped: true, reason: "load_error" };
  }
  if (!order || order.status !== "paid") {
    return { skipped: true, reason: "not_paid" };
  }

  // Successful prior send: sent_at set and not an in-flight marker.
  if (order.purchase_email_sent_at && order.purchase_email_last_error !== IN_FLIGHT_MARKER) {
    console.log("[purchase-email] already_sent", { orderId: order.id });
    return { skipped: true, reason: "already_sent" };
  }

  // Stuck in_flight: reclaim after 5 minutes.
  if (order.purchase_email_sent_at && order.purchase_email_last_error === IN_FLIGHT_MARKER) {
    const sentMs = Date.parse(order.purchase_email_sent_at);
    if (Number.isFinite(sentMs) && Date.now() - sentMs < 5 * 60 * 1000) {
      console.log("[purchase-email] in_flight", { orderId: order.id });
      return { skipped: true, reason: "in_flight" };
    }
    await admin
      .from("orders")
      .update({
        purchase_email_sent_at: null,
        purchase_email_last_error: "in_flight_timeout"
      })
      .eq("id", order.id)
      .eq("purchase_email_last_error", IN_FLIGHT_MARKER);
  }

  const intendedTo = String(order.customer_email || "").trim();
  if (!intendedTo || !intendedTo.includes("@")) {
    console.warn("[purchase-email] missing_customer_email", { orderId: order.id });
    await admin
      .from("orders")
      .update({
        purchase_email_last_error: "missing_customer_email",
        purchase_email_attempts: (order.purchase_email_attempts || 0) + 1
      })
      .eq("id", order.id)
      .is("purchase_email_sent_at", null);
    return { skipped: true, reason: "missing_customer_email" };
  }

  // TEST redirect only in non-production deploy with explicit test mode policy.
  let deliveredTo = intendedTo;
  if (policy.allowTestRedirect && config.testTo) {
    deliveredTo = config.testTo;
  } else if (config.mode === "test" && policy.isProductionDeploy) {
    console.warn("[purchase-email] production_test_redirect_blocked", { orderId: order.id });
    return { skipped: true, reason: "production_test_redirect_blocked" };
  }

  const claimAt = new Date().toISOString();
  const { data: claimed, error: claimError } = await admin
    .from("orders")
    .update({
      purchase_email_sent_at: claimAt,
      purchase_email_last_error: IN_FLIGHT_MARKER,
      purchase_email_attempts: (order.purchase_email_attempts || 0) + 1
    })
    .eq("id", order.id)
    .eq("status", "paid")
    .is("purchase_email_sent_at", null)
    .select("id")
    .maybeSingle();

  if (claimError) {
    console.error("[purchase-email] claim_error", claimError.message);
    return { skipped: true, reason: "claim_error" };
  }
  if (!claimed) {
    console.log("[purchase-email] claim_missed", { orderId: order.id });
    return { skipped: true, reason: "claim_missed" };
  }

  try {
    await sendPurchaseConfirmationEmail(order, {
      to: deliveredTo,
      intendedTo,
      mode: config.mode,
      siteOrigin: config.siteOrigin,
      apiKey: config.apiKey,
      from: config.from,
      provider: config.provider
    });

    await admin
      .from("orders")
      .update({
        purchase_email_sent_at: new Date().toISOString(),
        purchase_email_last_error: null
      })
      .eq("id", order.id);

    console.log("[purchase-email] sent", {
      orderId: order.id,
      mode: config.mode,
      productId: order.product_id,
      amount: order.amount,
      testRedirect: config.mode === "test" && deliveredTo !== intendedTo
    });
    return { ok: true, mode: config.mode };
  } catch (err) {
    const message = String(err?.message || err?.code || "send_failed").slice(0, 180);
    console.error("[purchase-email] send_failed", {
      orderId: order.id,
      error: message,
      mode: config.mode
    });
    await admin
      .from("orders")
      .update({
        purchase_email_sent_at: null,
        purchase_email_last_error: message
      })
      .eq("id", order.id);
    return { ok: false, error: message };
  }
}
