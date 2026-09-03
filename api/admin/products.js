import { setCorsHeaders, handleOptions, sendError, readJsonBody } from "../_lib/http.js";
import { requireAdmin } from "../_lib/adminAuth.js";
import {
  loadAuthoritativeProducts,
  updateProductPricing,
  getPricingSource,
  probePricingDatabase
} from "../_lib/productCatalog.js";

function toAdminProductRow(product) {
  return {
    productId: product.productId,
    type: product.type,
    courseId: product.courseId,
    nameZh: product.name.zh,
    nameEn: product.name.en,
    amount: product.amount,
    originalPrice: product.originalPrice,
    currency: product.currency,
    active: product.active
  };
}

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;

  const adminUser = await requireAdmin(req, res);
  if (!adminUser) return;

  if (req.method === "GET") {
    try {
      const products = await loadAuthoritativeProducts({ fresh: true });
      const dbReady = await probePricingDatabase();
      return res.status(200).json({
        products: products.map(toAdminProductRow),
        readOnly: !dbReady,
        canEdit: dbReady,
        pricingSource: getPricingSource(),
        migrationRequired: !dbReady
      });
    } catch (err) {
      console.error("[admin/products] list_error", err?.message || err);
      return sendError(res, "internal_error");
    }
  }

  if (req.method === "PATCH") {
    let body;
    try {
      body = await readJsonBody(req);
    } catch {
      return sendError(res, "invalid_request");
    }

    const productId = typeof body?.productId === "string" ? body.productId.trim() : "";
    if (!productId) {
      return sendError(res, "invalid_request", "productId is required");
    }

    if (body.amount !== undefined) {
      return sendError(res, "invalid_request", "Use price field, not amount");
    }

    const patch = {};
    if (body.price !== undefined) patch.price = body.price;
    if (body.originalPrice !== undefined) patch.originalPrice = body.originalPrice;
    if (body.active !== undefined) patch.active = body.active;

    if (!Object.keys(patch).length) {
      return sendError(res, "invalid_request", "No valid fields to update");
    }

    try {
      const updated = await updateProductPricing(productId, patch);
      return res.status(200).json({
        ok: true,
        product: toAdminProductRow(updated)
      });
    } catch (err) {
      const msg = err?.message || String(err);
      if (msg === "product_not_found") return sendError(res, "product_not_found");
      if (msg === "products_table_missing") {
        return sendError(
          res,
          "internal_error",
          "products table not migrated — run supabase/migrations/20250901120000_create_products.sql"
        );
      }
      if (msg === "invalid_price" || msg === "invalid_original_price") {
        return sendError(res, "invalid_request", msg);
      }
      console.error("[admin/products] patch_error", msg);
      return sendError(res, "internal_error");
    }
  }

  return sendError(res, "method_not_allowed");
}
