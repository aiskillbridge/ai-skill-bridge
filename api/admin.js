/**
 * Single Admin Serverless Function (Hobby-safe).
 * External URLs remain /api/admin/* via vercel.json rewrites → ?__route=...
 * Auth is enforced inside each handler — public-config stays unauthenticated.
 */
import { setCorsHeaders, handleOptions, sendError } from "./_lib/http.js";
import adminDashboard from "./_lib/handlers/adminDashboard.js";
import adminOrders from "./_lib/handlers/adminOrders.js";
import adminUsers from "./_lib/handlers/adminUsers.js";
import adminProducts from "./_lib/handlers/adminProducts.js";
import adminSystem from "./_lib/handlers/adminSystem.js";
import adminPublicConfig from "./_lib/handlers/adminPublicConfig.js";
import adminCampusPrograms from "./_lib/handlers/adminCampusPrograms.js";
import adminCampusToggle from "./_lib/handlers/adminCampusToggle.js";

const ROUTES = Object.freeze({
  dashboard: adminDashboard,
  orders: adminOrders,
  users: adminUsers,
  products: adminProducts,
  system: adminSystem,
  "public-config": adminPublicConfig,
  "campus/programs": adminCampusPrograms,
  "campus/toggle": adminCampusToggle
});

function resolveAdminRoute(req) {
  const url = new URL(req.url || "/", "http://localhost");
  const fromQuery = (url.searchParams.get("__route") || "").trim();
  if (fromQuery && Object.prototype.hasOwnProperty.call(ROUTES, fromQuery)) {
    return fromQuery;
  }

  // Fallback if rewrite did not apply (direct path).
  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  const match = pathname.match(/\/api\/admin\/(.+)$/);
  if (match) {
    const route = match[1];
    if (Object.prototype.hasOwnProperty.call(ROUTES, route)) return route;
  }
  return null;
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  const route = resolveAdminRoute(req);
  const routeHandler = route ? ROUTES[route] : null;
  if (!routeHandler) {
    return sendError(res, "not_found");
  }

  return routeHandler(req, res);
}
