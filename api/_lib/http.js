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
export async function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        reject(new Error("body_too_large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("invalid_json"));
      }
    });
    req.on("error", reject);
  });
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
