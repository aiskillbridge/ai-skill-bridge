import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

let ecpayEnvHydrated = false;

function readEnv(name) {
  const value = process.env[name];
  if (!value || value === "[SENSITIVE]" || value === "{encrypted}") return null;
  return value;
}

function hydrateEcpayEnvFromFile() {
  if (ecpayEnvHydrated) return;
  ecpayEnvHydrated = true;
  if (process.env.VERCEL_ENV === "production") return;

  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  const keys = new Set([
    "ECPAY_MERCHANT_ID",
    "ECPAY_HASH_KEY",
    "ECPAY_HASH_IV",
    "ECPAY_MODE",
    "APP_BASE_URL"
  ]);

  try {
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
    // ignore
  }
}

/**
 * ECPay URL-encode rules (.NET style) used for CheckMacValue.
 * Never log HashKey / HashIV.
 */
export function ecpayDotNetUrlEncode(value) {
  return encodeURIComponent(String(value))
    .toLowerCase()
    .replace(/%2d/g, "-")
    .replace(/%5f/g, "_")
    .replace(/%2e/g, ".")
    .replace(/%21/g, "!")
    .replace(/%2a/g, "*")
    .replace(/%28/g, "(")
    .replace(/%29/g, ")")
    .replace(/%20/g, "+");
}

/**
 * Build CheckMacValue (EncryptType=1 → SHA256).
 * @param {Record<string, string|number>} params
 * @param {string} hashKey
 * @param {string} hashIV
 */
export function generateCheckMacValue(params, hashKey, hashIV) {
  const sortedKeys = Object.keys(params)
    .filter((key) => key !== "CheckMacValue" && params[key] !== undefined && params[key] !== null)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  const raw =
    `HashKey=${hashKey}&` +
    sortedKeys.map((key) => `${key}=${params[key]}`).join("&") +
    `&HashIV=${hashIV}`;

  const encoded = ecpayDotNetUrlEncode(raw);
  return createHash("sha256").update(encoded).digest("hex").toUpperCase();
}

export function verifyCheckMacValue(params, hashKey, hashIV) {
  const provided = String(params.CheckMacValue || "").trim().toUpperCase();
  if (!provided) return false;
  const expected = generateCheckMacValue(params, hashKey, hashIV);
  return provided === expected;
}

export function getEcpayConfig() {
  hydrateEcpayEnvFromFile();

  const merchantId = readEnv("ECPAY_MERCHANT_ID");
  const hashKey = readEnv("ECPAY_HASH_KEY");
  const hashIV = readEnv("ECPAY_HASH_IV");
  const mode = (readEnv("ECPAY_MODE") || "stage").toLowerCase();
  const appBaseUrl = (readEnv("APP_BASE_URL") || "").replace(/\/$/, "");

  if (!merchantId || !hashKey || !hashIV) {
    return {
      configured: false,
      mode,
      merchantId: null,
      hashKey: null,
      hashIV: null,
      appBaseUrl,
      checkoutUrl: null,
      appBaseUrlOk: false
    };
  }

  if (mode === "production") {
    // Phase 5B: refuse production until explicitly enabled later.
    return {
      configured: false,
      mode: "production_blocked",
      merchantId: null,
      hashKey: null,
      hashIV: null,
      appBaseUrl,
      checkoutUrl: null,
      appBaseUrlOk: false
    };
  }

  return {
    configured: true,
    mode: "stage",
    merchantId,
    hashKey,
    hashIV,
    appBaseUrl,
    checkoutUrl: "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5",
    appBaseUrlOk: isPublicHttpsBaseUrl(appBaseUrl)
  };
}

/**
 * ECPay server callback cannot reach localhost / private hosts.
 */
export function isPublicHttpsBaseUrl(url) {
  if (!url || typeof url !== "string") return false;
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  if (parsed.protocol !== "https:") return false;
  const host = parsed.hostname.toLowerCase();
  if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host.endsWith(".local") ||
    host.startsWith("10.") ||
    host.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
  ) {
    return false;
  }
  return true;
}

export function formatMerchantTradeDate(date = new Date()) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}

/**
 * Safe product display name for ECPay ItemName (no secrets).
 */
export function buildItemName(order) {
  const metaName = order?.metadata?.productName;
  if (metaName && typeof metaName === "object") {
    return String(metaName.zh || metaName.en || order.product_id).slice(0, 200);
  }
  return String(order.product_id || "AI Skill Bridge").slice(0, 200);
}
