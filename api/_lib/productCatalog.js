/**
 * Server-side authoritative product catalog.
 * Payment amounts MUST come from here — never from the browser.
 */

/** @type {ReadonlyArray<{
 *   productId: string;
 *   type: 'course' | 'all-access';
 *   courseId: string | null;
 *   name: { zh: string; en: string };
 *   amount: number;
 *   currency: 'TWD';
 *   active: boolean;
 * }>} */
export const PRODUCT_CATALOG = Object.freeze([
  {
    productId: "course-admissions",
    type: "course",
    courseId: "admissions",
    name: { zh: "大學申請 AI 實戰課", en: "AI for University Admissions" },
    amount: 499,
    currency: "TWD",
    active: true
  },
  {
    productId: "course-college-learning",
    type: "course",
    courseId: "college-learning",
    name: { zh: "大學學習 AI 實戰課", en: "AI for College Learning" },
    amount: 399,
    currency: "TWD",
    active: true
  },
  {
    productId: "course-research-competition",
    type: "course",
    courseId: "research-competition",
    name: { zh: "研究競賽 AI 實戰課", en: "AI for Research & Competitions" },
    amount: 699,
    currency: "TWD",
    active: true
  },
  {
    productId: "course-career-internship",
    type: "course",
    courseId: "career-internship",
    name: { zh: "實習求職 AI 實戰課", en: "AI for Careers & Internships" },
    amount: 699,
    currency: "TWD",
    active: true
  },
  {
    productId: "course-workplace-productivity",
    type: "course",
    courseId: "workplace-productivity",
    name: { zh: "職場效率 AI 實戰課", en: "AI for Workplace Productivity" },
    amount: 599,
    currency: "TWD",
    active: true
  },
  {
    productId: "course-startup-automation",
    type: "course",
    courseId: "startup-automation",
    name: { zh: "創業自動化 AI 實戰課", en: "AI for Startup Automation" },
    amount: 899,
    currency: "TWD",
    active: true
  },
  {
    productId: "all-access",
    type: "all-access",
    courseId: null,
    name: { zh: "全站通行證", en: "All-Access Pass" },
    amount: 2999,
    currency: "TWD",
    active: true
  }
]);

const catalogById = new Map(PRODUCT_CATALOG.map((p) => [p.productId, p]));

/**
 * @param {string | undefined | null} productId
 */
export function getProductById(productId) {
  if (!productId || typeof productId !== "string") return null;
  const product = catalogById.get(productId.trim());
  if (!product || !product.active) return null;
  return product;
}

export function listActiveProducts() {
  return PRODUCT_CATALOG.filter((p) => p.active);
}

/** Sum of active single-course product amounts (bundle original price). */
export function getPremiumCoursesBundleTotal() {
  return PRODUCT_CATALOG.filter((p) => p.type === "course" && p.active).reduce(
    (sum, p) => sum + p.amount,
    0
  );
}
