/**
 * Single Campus Serverless Function (Hobby-safe).
 * External URLs remain /api/campus/status|redeem via vercel.json rewrites.
 * Auth stays inside each handler (Bearer JWT).
 */
import { setCorsHeaders, handleOptions, sendError } from "./_lib/http.js";
import campusStatus from "./_lib/handlers/campusStatus.js";
import campusRedeem from "./_lib/handlers/campusRedeem.js";

const ROUTES = Object.freeze({
  status: campusStatus,
  redeem: campusRedeem
});

function resolveCampusRoute(req) {
  const url = new URL(req.url || "/", "http://localhost");
  const fromQuery = (url.searchParams.get("__route") || "").trim();
  if (fromQuery && Object.prototype.hasOwnProperty.call(ROUTES, fromQuery)) {
    return fromQuery;
  }

  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  const match = pathname.match(/\/api\/campus\/(.+)$/);
  if (match) {
    const route = match[1];
    if (Object.prototype.hasOwnProperty.call(ROUTES, route)) return route;
  }
  return null;
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  const route = resolveCampusRoute(req);
  const routeHandler = route ? ROUTES[route] : null;
  if (!routeHandler) {
    return sendError(res, "not_found");
  }

  return routeHandler(req, res);
}
