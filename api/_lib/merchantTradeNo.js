import crypto from "node:crypto";

/**
 * Generate a unique merchant trade number for future ECPay integration.
 * ECPay MerchantTradeNo max length: 20 characters, alphanumeric.
 * Does not include email, userId, or other PII.
 */
export function createMerchantTradeNo() {
  const now = new Date();
  const pad = (n, len = 2) => String(n).padStart(len, "0");
  const ts =
    String(now.getFullYear()).slice(-2) +
    pad(now.getMonth() + 1) +
    pad(now.getDate()) +
    pad(now.getHours()) +
    pad(now.getMinutes()) +
    pad(now.getSeconds());

  const rand = crypto.randomBytes(2).toString("hex").toUpperCase();
  const tradeNo = `ASB${ts}${rand}`;

  return tradeNo.slice(0, 20);
}
