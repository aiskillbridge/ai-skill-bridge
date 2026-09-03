const TAIPEI_TZ = "Asia/Taipei";

function resolveOrderProductName(order) {
  const meta = order.metadata && typeof order.metadata === "object" ? order.metadata : null;
  if (meta?.productName?.zh) return String(meta.productName.zh);
  if (order.product_id === "all-access") return "全站通行證";
  return order.product_id || "—";
}

export function formatIsoDate(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("zh-TW", { timeZone: TAIPEI_TZ, hour12: false });
}

export function taipeiDayKey(date = new Date()) {
  return date.toLocaleDateString("en-CA", { timeZone: TAIPEI_TZ });
}

export function taipeiMonthKey(date = new Date()) {
  const day = taipeiDayKey(date);
  return day.slice(0, 7);
}

export function toAdminOrderRow(order) {
  const productName = resolveOrderProductName(order);

  let purchaseEmailStatus = "not_sent";
  if (order.purchase_email_sent_at) {
    purchaseEmailStatus = "sent";
  } else if (order.purchase_email_last_error) {
    purchaseEmailStatus = "failed";
  } else if ((order.purchase_email_attempts || 0) > 0) {
    purchaseEmailStatus = "retryable";
  }

  return {
    orderId: order.id,
    customerEmail: order.customer_email || "",
    productId: order.product_id,
    productName,
    productType: order.product_type,
    courseId: order.course_id,
    amount: order.amount,
    currency: order.currency,
    status: order.status,
    merchantTradeNo: order.merchant_trade_no,
    providerTradeNo: order.provider_trade_no || null,
    createdAt: order.created_at,
    paidAt: order.paid_at || null,
    purchaseEmailStatus,
    purchaseEmailSentAt: order.purchase_email_sent_at || null,
    purchaseEmailAttempts: order.purchase_email_attempts || 0
  };
}

export function buildCodeHint(normalizedCode) {
  const code = String(normalizedCode || "").trim();
  if (!code) return "****";
  if (code.length <= 4) return "****";
  const visible = code.slice(0, Math.min(8, code.length - 2));
  return `${visible}****`;
}
