import { setCorsHeaders, handleOptions, sendError } from "./_lib/http.js";
import {
  listPublicProducts,
  getPremiumCoursesBundleTotal,
  getPricingSource
} from "./_lib/productCatalog.js";

/**
 * GET /api/products
 * Public read-only product catalog for frontend pricing display.
 * Payment authority remains server-side via products table + orders.create.
 */
export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  if (req.method !== "GET") {
    return sendError(res, "method_not_allowed");
  }

  try {
    const products = await listPublicProducts();
    const bundleTotal = await getPremiumCoursesBundleTotal();
    const pricingSource = getPricingSource();
    return res.status(200).json({ products, bundleTotal, pricingSource });
  } catch (err) {
    console.error("[products] list_error", err?.message || err);
    return sendError(res, "internal_error");
  }
}
