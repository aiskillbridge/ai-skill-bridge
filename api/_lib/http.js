/**
 * Safe API error codes — never expose SQL, stack traces, or secrets to clients.
 */
export const API_ERRORS = Object.freeze({
  method_not_allowed: { status: 405, code: "method_not_allowed" },
  authentication_required: { status: 401, code: "authentication_required" },
  invalid_product: { status: 400, code: "invalid_product" },
  invalid_request: { status: 400, code: "invalid_request" },
  order_not_found: { status: 404, code: "order_not_found" },
  order_conflict: { status: 409, code: "order_conflict" },
  order_not_pending: { status: 409, code: "order_not_pending" },
  payment_not_configured: { status: 503, code: "payment_not_configured" },
  payment_forbidden: { status: 403, code: "payment_forbidden" },
  campus_invalid_code: { status: 404, code: "campus_invalid_code" },
  campus_program_inactive: { status: 403, code: "campus_program_inactive" },
  campus_program_not_started: { status: 403, code: "campus_program_not_started" },
  campus_program_expired: { status: 403, code: "campus_program_expired" },
  campus_already_redeemed: { status: 409, code: "campus_already_redeemed" },
  campus_max_redemptions_reached: { status: 409, code: "campus_max_redemptions_reached" },
  admin_forbidden: { status: 403, code: "admin_forbidden" },
  product_not_found: { status: 404, code: "product_not_found" },
  campus_production_not_enabled: { status: 403, code: "campus_production_not_enabled" },
  internal_error: { status: 500, code: "internal_error" }
});

/**
 * @param {import('http').ServerResponse} res
 * @param {keyof typeof API_ERRORS} key
 * @param {string} [message]
 */
export function sendError(res, key, message) {
  const err = API_ERRORS[key] || API_ERRORS.internal_error;
  return res.status(err.status).json({
    error: err.code,
    ...(message ? { message } : {})
  });
}

/**
 * @param {import('http').IncomingMessage} req
 */
export function getBearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization;
  if (!header || typeof header !== "string") return null;
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : null;
}

/**
 * @param {import('http').IncomingMessage} req
 */
export async function readRawBody(req) {
  if (typeof req.body === "string") return req.body;
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return null;
  }
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        reject(new Error("body_too_large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

export async function readJsonBody(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return req.body;
  }
  const raw = await readRawBody(req);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("invalid_json");
  }
}

/**
 * Parse application/x-www-form-urlencoded (ECPay callbacks).
 */
export async function readFormBody(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    const out = {};
    for (const [key, value] of Object.entries(req.body)) {
      out[key] = value == null ? "" : String(value);
    }
    return out;
  }
  const raw = (await readRawBody(req)) || "";
  const out = {};
  if (!raw) return out;
  for (const part of raw.split("&")) {
    if (!part) continue;
    const idx = part.indexOf("=");
    const key = decodeURIComponent((idx >= 0 ? part.slice(0, idx) : part).replace(/\+/g, " "));
    const value = decodeURIComponent((idx >= 0 ? part.slice(idx + 1) : "").replace(/\+/g, " "));
    out[key] = value;
  }
  return out;
}

/**
 * @param {import('http').ServerResponse} res
 */
export function setCorsHeaders(res, req) {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
}

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export function handleOptions(req, res) {
  if (req.method === "OPTIONS") {
    setCorsHeaders(res, req);
    res.status(204).end();
    return true;
  }
  return false;
}

/**
 * @param {object} order
 */
export function toPublicOrderSummary(order) {
  return {
    orderId: order.id,
    merchantTradeNo: order.merchant_trade_no,
    productId: order.product_id,
    amount: order.amount,
    currency: order.currency,
    status: order.status,
    createdAt: order.created_at,
    paidAt: order.paid_at || null
  };
}

/**
 * @param {object} order
 */
export function toCreateOrderResponse(order) {
  return {
    orderId: order.id,
    merchantTradeNo: order.merchant_trade_no,
    productId: order.product_id,
    amount: order.amount,
    currency: order.currency,
    status: order.status
  };
}
