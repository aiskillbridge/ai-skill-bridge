/**
 * Detect when the orders table or expected columns are missing (common on campus-test).
 */
export function isOrdersSchemaUnavailable(error) {
  if (!error) return false;
  const message = String(error.message || "").toLowerCase();
  const code = String(error.code || "").toLowerCase();
  if (code === "42p01" || code === "pgrst205") return true;
  if (message.includes("could not find the table")) return true;
  if (message.includes("relation") && message.includes("does not exist")) return true;
  if (message.includes("column") && message.includes("does not exist")) return true;
  return false;
}

export const EMPTY_DASHBOARD_ORDERS = Object.freeze({
  revenue: {
    today: 0,
    month: 0,
    total: 0,
    currency: "TWD"
  },
  orders: {
    todayPaidCount: 0,
    totalPaidCount: 0
  },
  recentOrders: []
});
