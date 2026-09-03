/**
 * Authoritative product catalog — reads from Supabase public.products.
 * Falls back to PRODUCT_CATALOG_DEFAULTS when DB is unavailable or empty.
 * Payment amounts MUST come from here — never from the browser.
 */

import { getSupabaseAdmin } from "./supabaseAdmin.js";

/** @type {ReadonlyArray<{
 *   productId: string;
 *   type: 'course' | 'all-access';
 *   courseId: string | null;
 *   name: { zh: string; en: string };
 *   amount: number;
 *   originalPrice: number | null;
 *   currency: 'TWD';
 *   active: boolean;
 *   sortOrder: number;
 * }>} */
export const PRODUCT_CATALOG_DEFAULTS = Object.freeze([
  {
    productId: "course-admissions",
    type: "course",
    courseId: "admissions",
    name: { zh: "大學申請 AI 實戰課", en: "AI for University Admissions" },
    amount: 1099,
    originalPrice: null,
    currency: "TWD",
    active: true,
    sortOrder: 1
  },
  {
    productId: "course-college-learning",
    type: "course",
    courseId: "college-learning",
    name: { zh: "大學學習 AI 實戰課", en: "AI for College Learning" },
    amount: 899,
    originalPrice: null,
    currency: "TWD",
    active: true,
    sortOrder: 2
  },
  {
    productId: "course-research-competition",
    type: "course",
    courseId: "research-competition",
    name: { zh: "研究競賽 AI 實戰課", en: "AI for Research & Competitions" },
    amount: 1499,
    originalPrice: null,
    currency: "TWD",
    active: true,
    sortOrder: 3
  },
  {
    productId: "course-career-internship",
    type: "course",
    courseId: "career-internship",
    name: { zh: "實習求職 AI 實戰課", en: "AI for Careers & Internships" },
    amount: 1499,
    originalPrice: null,
    currency: "TWD",
    active: true,
    sortOrder: 4
  },
  {
    productId: "course-workplace-productivity",
    type: "course",
    courseId: "workplace-productivity",
    name: { zh: "職場效率 AI 實戰課", en: "AI for Workplace Productivity" },
    amount: 1299,
    originalPrice: null,
    currency: "TWD",
    active: true,
    sortOrder: 5
  },
  {
    productId: "course-startup-automation",
    type: "course",
    courseId: "startup-automation",
    name: { zh: "創業自動化 AI 實戰課", en: "AI for Startup Automation" },
    amount: 1799,
    originalPrice: null,
    currency: "TWD",
    active: true,
    sortOrder: 6
  },
  {
    productId: "all-access",
    type: "all-access",
    courseId: null,
    name: { zh: "全站通行證", en: "All-Access Pass" },
    amount: 4499,
    originalPrice: 8094,
    currency: "TWD",
    active: true,
    sortOrder: 7
  }
]);

/** @deprecated Use loadAuthoritativeProducts — kept for static audit references only. */
export const PRODUCT_CATALOG = PRODUCT_CATALOG_DEFAULTS;

const CACHE_TTL_MS = 15_000;

/** @type {{ products: import('./productCatalog.js').Product[] | null; expiresAt: number }} */
let catalogCache = { products: null, expiresAt: 0, source: "unknown" };

/** @returns {"database" | "defaults" | "unknown"} */
export function getPricingSource() {
  return catalogCache.source;
}

export async function probePricingDatabase() {
  try {
    const admin = getSupabaseAdmin();
    const { data, error } = await admin.from("products").select("product_key").limit(1);
    if (error) {
      const code = String(error.code || "");
      if (code === "42P01" || code === "PGRST205") return false;
      throw error;
    }
    return Array.isArray(data) && data.length > 0;
  } catch (err) {
    console.warn("[productCatalog] probe_failed", err?.message || err);
    return false;
  }
}

/**
 * @typedef {{
 *   productId: string;
 *   type: 'course' | 'all-access';
 *   courseId: string | null;
 *   name: { zh: string; en: string };
 *   amount: number;
 *   originalPrice: number | null;
 *   currency: 'TWD';
 *   active: boolean;
 *   sortOrder: number;
 * }} CatalogProduct
 */

/**
 * @param {Record<string, unknown>} row
 * @returns {CatalogProduct}
 */
function rowToProduct(row) {
  return {
    productId: String(row.product_key),
    type: row.product_type,
    courseId: row.course_id || null,
    name: { zh: String(row.name_zh), en: String(row.name_en) },
    amount: Number(row.price),
    originalPrice: row.original_price == null ? null : Number(row.original_price),
    currency: "TWD",
    active: row.active === true,
    sortOrder: Number(row.sort_order) || 0
  };
}

export function invalidateProductCatalogCache() {
  catalogCache = { products: null, expiresAt: 0, source: "unknown" };
}

/**
 * @param {{ fresh?: boolean }} [opts]
 * @returns {Promise<CatalogProduct[]>}
 */
export async function loadAuthoritativeProducts(opts = {}) {
  const fresh = opts.fresh === true;
  if (!fresh && catalogCache.products && Date.now() < catalogCache.expiresAt) {
    return catalogCache.products;
  }

  try {
    const admin = getSupabaseAdmin();
    const { data, error } = await admin
      .from("products")
      .select(
        "product_key, product_type, course_id, name_zh, name_en, price, original_price, currency, active, sort_order"
      )
      .order("sort_order", { ascending: true });

    if (error) throw error;
    if (!data || data.length === 0) throw new Error("products_empty");

    const products = data.map(rowToProduct);
    catalogCache = { products, expiresAt: Date.now() + CACHE_TTL_MS, source: "database" };
    return products;
  } catch (err) {
    console.warn("[productCatalog] using_defaults", err?.message || err);
    const products = PRODUCT_CATALOG_DEFAULTS.map((p) => ({ ...p }));
    catalogCache = { products, expiresAt: Date.now() + CACHE_TTL_MS, source: "defaults" };
    return products;
  }
}

/**
 * Active product for payment — returns null if missing or inactive.
 * @param {string | undefined | null} productId
 */
export async function getProductById(productId) {
  if (!productId || typeof productId !== "string") return null;
  const products = await loadAuthoritativeProducts();
  const product = products.find((p) => p.productId === productId.trim());
  if (!product || !product.active) return null;
  return product;
}

/**
 * Any product by id (including inactive) — Admin read.
 * @param {string} productId
 */
export async function getProductByIdIncludingInactive(productId) {
  if (!productId || typeof productId !== "string") return null;
  const products = await loadAuthoritativeProducts({ fresh: true });
  return products.find((p) => p.productId === productId.trim()) || null;
}

export async function listActiveProducts() {
  const products = await loadAuthoritativeProducts();
  return products.filter((p) => p.active);
}

/** Sum of active single-course product amounts (informational bundle total). */
export async function getPremiumCoursesBundleTotal() {
  const products = await loadAuthoritativeProducts();
  return products
    .filter((p) => p.type === "course" && p.active)
    .reduce((sum, p) => sum + p.amount, 0);
}

/** Public read-only product list for browser pricing display. */
export async function listPublicProducts() {
  const products = await listActiveProducts();
  return products.map((product) => ({
    productId: product.productId,
    courseId: product.courseId,
    type: product.type,
    name: product.name,
    amount: product.amount,
    originalPrice: product.originalPrice,
    currency: product.currency
  }));
}

/**
 * @param {string} productId
 * @param {{ price?: number; originalPrice?: number | null; active?: boolean }} patch
 */
export async function updateProductPricing(productId, patch) {
  const dbReady = await probePricingDatabase();
  if (!dbReady) {
    throw new Error("products_table_missing");
  }

  const admin = getSupabaseAdmin();
  const updateRow = {};

  if (patch.price !== undefined) {
    const price = Number(patch.price);
    if (!Number.isInteger(price) || price <= 0) {
      throw new Error("invalid_price");
    }
    updateRow.price = price;
  }

  if (patch.originalPrice !== undefined) {
    if (patch.originalPrice === null) {
      updateRow.original_price = null;
    } else {
      const originalPrice = Number(patch.originalPrice);
      if (!Number.isInteger(originalPrice) || originalPrice <= 0) {
        throw new Error("invalid_original_price");
      }
      updateRow.original_price = originalPrice;
    }
  }

  if (patch.active !== undefined) {
    updateRow.active = patch.active === true;
  }

  if (!Object.keys(updateRow).length) {
    throw new Error("empty_patch");
  }

  const { data, error } = await admin
    .from("products")
    .update(updateRow)
    .eq("product_key", productId)
    .select(
      "product_key, product_type, course_id, name_zh, name_en, price, original_price, currency, active, sort_order"
    )
    .maybeSingle();

  if (error) {
    const code = String(error.code || "");
    if (code === "42P01" || code === "PGRST205") throw new Error("products_table_missing");
    throw error;
  }
  if (!data) throw new Error("product_not_found");

  invalidateProductCatalogCache();
  return rowToProduct(data);
}
