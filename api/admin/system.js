import { setCorsHeaders, handleOptions, sendError } from "../_lib/http.js";
import { requireAdmin } from "../_lib/adminAuth.js";
import { getSupabaseAdmin } from "../_lib/supabaseAdmin.js";
import { getEcpayConfig } from "../_lib/ecpay.js";
import {
  evaluatePurchaseEmailPolicy,
  getPurchaseEmailConfig
} from "../_lib/purchaseEmail.js";

function envConfigured(name) {
  const value = process.env[name];
  return Boolean(value && value !== "[SENSITIVE]" && value !== "{encrypted}");
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendError(res, "method_not_allowed");

  const adminUser = await requireAdmin(req, res);
  if (!adminUser) return;

  let supabaseStatus = "error";
  let campusStatus = "not_configured";
  try {
    const admin = getSupabaseAdmin();
    const { error: ordersError } = await admin.from("orders").select("id").limit(1);
    supabaseStatus = ordersError ? "error" : "connected";

    const { error: campusError } = await admin.from("campus_programs").select("id").limit(1);
    campusStatus = campusError ? "not_configured" : "configured";
  } catch {
    supabaseStatus = "error";
  }

  let ecpayMode = "missing";
  let ecpayConfigured = false;
  try {
    const config = getEcpayConfig();
    ecpayMode = config.mode === "production" ? "production" : "stage";
    ecpayConfigured = Boolean(config.merchantId && config.hashKey && config.hashIV);
  } catch {
    ecpayMode = "missing";
    ecpayConfigured = false;
  }

  const emailConfig = getPurchaseEmailConfig();
  const emailPolicy = evaluatePurchaseEmailPolicy(emailConfig);
  let purchaseEmailStatus = "disabled";
  if (emailPolicy.enabled) {
    purchaseEmailStatus = emailConfig.mode === "production" ? "production" : "test";
  } else if (emailConfig.configured && !emailPolicy.enabled) {
    purchaseEmailStatus = "disabled";
  } else if (!emailConfig.configured) {
    purchaseEmailStatus = "disabled";
  }

  const vercelEnv = process.env.VERCEL_ENV || "local";

  return res.status(200).json({
    supabase: { status: supabaseStatus },
    ecpay: {
      mode: ecpayConfigured ? ecpayMode : "missing",
      configured: ecpayConfigured
    },
    purchaseEmail: {
      status: purchaseEmailStatus,
      providerConfigured: Boolean(emailConfig.apiKey),
      mode: emailConfig.mode || "unset"
    },
    campus: { status: campusStatus },
    vercel: { environment: vercelEnv },
    adminAllowlistConfigured: envConfigured("ADMIN_EMAILS")
  });
}
