#!/usr/bin/env node
/**
 * Local dry-run: send one TEST purchase confirmation email.
 * Does NOT mark orders paid, does NOT grant entitlement, does NOT call ECPay.
 * Never prints secret values — only true/false and error codes.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@supabase/supabase-js";
import {
  getPurchaseEmailConfig,
  evaluatePurchaseEmailPolicy,
  buildPurchaseConfirmationContent,
  sendPurchaseConfirmationEmail
} from "../api/_lib/purchaseEmail.js";

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\n/)) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const idx = line.indexOf("=");
    const key = line.slice(0, idx).trim();
    if (process.env[key]) continue;
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
}

function envSet(name) {
  const v = process.env[name];
  return Boolean(v && String(v).trim() && v !== "[SENSITIVE]" && v !== "{encrypted}");
}

loadEnvLocal();

const envReport = {
  RESEND_API_KEY: envSet("RESEND_API_KEY"),
  EMAIL_PROVIDER_API_KEY: envSet("EMAIL_PROVIDER_API_KEY"),
  EMAIL_PROVIDER: envSet("EMAIL_PROVIDER") || true,
  PURCHASE_EMAIL_FROM: envSet("PURCHASE_EMAIL_FROM"),
  PURCHASE_EMAIL_MODE: process.env.PURCHASE_EMAIL_MODE === "test",
  PURCHASE_EMAIL_TEST_TO: envSet("PURCHASE_EMAIL_TEST_TO"),
  SUPABASE_URL: envSet("SUPABASE_URL"),
  SUPABASE_SERVICE_ROLE_KEY: envSet("SUPABASE_SERVICE_ROLE_KEY")
};

console.log("ENV_CHECK", JSON.stringify(envReport));

const config = getPurchaseEmailConfig();
console.log("EMAIL_CONFIG", JSON.stringify({
  configured: config.configured,
  provider: config.provider,
  mode: config.mode,
  hasFrom: Boolean(config.from),
  hasTestTo: Boolean(config.testTo),
  siteOrigin: config.siteOrigin,
  fromIsResendDev: config.fromIsResendDev
}));

const policy = evaluatePurchaseEmailPolicy(config);
console.log("POLICY", JSON.stringify({
  enabled: policy.enabled,
  skipReason: policy.skipReason,
  allowTestRedirect: policy.allowTestRedirect,
  isProductionDeploy: policy.isProductionDeploy,
  vercelEnv: policy.vercelEnv
}));

// Simulate live Vercel Production deploy with test-mode env (must stay blocked).
const savedRegion = process.env.VERCEL_REGION;
process.env.VERCEL = "1";
process.env.VERCEL_ENV = "production";
process.env.VERCEL_REGION = "hnd1";
const prodBlocked = evaluatePurchaseEmailPolicy(getPurchaseEmailConfig());
if (savedRegion) process.env.VERCEL_REGION = savedRegion;
else delete process.env.VERCEL_REGION;
console.log("PROD_GUARD", JSON.stringify({
  testModeOnProductionBlocked: !prodBlocked.enabled,
  skipReason: prodBlocked.skipReason,
  wouldMisrouteToTestTo: prodBlocked.allowTestRedirect
}));

// --- Migration columns (read-only) ---
let migrationReady = false;
let migrationError = null;
try {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const admin = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await admin
      .from("orders")
      .select("id, purchase_email_sent_at, purchase_email_last_error, purchase_email_attempts")
      .limit(1);
    if (error) {
      migrationError = String(error.message || error.code || "query_failed").slice(0, 120);
    } else {
      migrationReady = true;
    }
  } else {
    migrationError = "supabase_env_missing";
  }
} catch (err) {
  migrationError = String(err?.message || err).slice(0, 120);
}
console.log("MIGRATION", JSON.stringify({ ready: migrationReady, error: migrationError }));

// --- Test mode recipient guard ---
const fakeCustomerEmail = "not-used-in-test-mode@example.invalid";
let testRecipientOk = false;
if (config.mode === "test" && config.testTo && config.testTo.includes("@")) {
  testRecipientOk = true;
}
console.log("TEST_MODE_RECIPIENT", JSON.stringify({
  modeIsTest: config.mode === "test",
  redirectsToTestToOnly: testRecipientOk,
  wouldIgnoreCustomerEmail: config.mode === "test" && testRecipientOk
}));

if (!config.configured) {
  console.log("SEND", JSON.stringify({ ok: false, error: "email_not_configured" }));
  process.exit(1);
}
if (!testRecipientOk) {
  console.log("SEND", JSON.stringify({ ok: false, error: "test_to_missing" }));
  process.exit(1);
}

const mockOrder = {
  id: "00000000-0000-4000-8000-000000000099",
  product_id: "course-admissions",
  product_type: "course",
  course_id: "admissions",
  amount: 499,
  currency: "TWD",
  merchant_trade_no: "TEST-NO-ECPAY-0001",
  paid_at: new Date().toISOString(),
  customer_email: fakeCustomerEmail,
  metadata: { productName: { zh: "大學申請 AI 實戰課" } }
};

const preview = buildPurchaseConfirmationContent(mockOrder, {
  mode: config.mode,
  siteOrigin: config.siteOrigin,
  intendedTo: fakeCustomerEmail,
  deliveredTo: config.testTo
});
console.log("PREVIEW", JSON.stringify({
  subjectIsTest: preview.subject.includes("TEST") || preview.subject.includes("【TEST】"),
  hasDisclaimer: preview.text.includes("不是電子發票"),
  learningUrl: preview.learningUrl
}));

let sendResult = { ok: false, error: null };
try {
  const deliveredTo = config.testTo;
  await sendPurchaseConfirmationEmail(mockOrder, {
    to: deliveredTo,
    intendedTo: fakeCustomerEmail,
    mode: config.mode,
    siteOrigin: config.siteOrigin,
    apiKey: config.apiKey,
    from: config.from,
    provider: config.provider
  });
  sendResult = { ok: true, error: null, deliveredToIsTestTo: deliveredTo === config.testTo };
} catch (err) {
  sendResult = {
    ok: false,
    error: String(err?.code || err?.message || "send_failed").slice(0, 180)
  };
}
console.log("SEND", JSON.stringify(sendResult));

process.exit(sendResult.ok ? 0 : 1);
