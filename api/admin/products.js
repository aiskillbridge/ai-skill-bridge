import { setCorsHeaders, handleOptions, sendError } from "../_lib/http.js";
import { requireAdmin } from "../_lib/adminAuth.js";
import { PRODUCT_CATALOG } from "../_lib/productCatalog.js";

export default async function handler(req, res) {
  setCorsHeaders(res, req);
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendError(res, "method_not_allowed");

  const adminUser = await requireAdmin(req, res);
  if (!adminUser) return;

  const products = PRODUCT_CATALOG.map((product) => ({
    productId: product.productId,
    type: product.type,
    courseId: product.courseId,
    nameZh: product.name.zh,
    nameEn: product.name.en,
    amount: product.amount,
    currency: product.currency,
    active: product.active
  }));

  return res.status(200).json({ products, readOnly: true });
}
