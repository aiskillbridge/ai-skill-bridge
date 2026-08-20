const SUPABASE_URL = "https://ifjkadoskbcgrqmcjvya.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";

/** Central special-account roles. Keys must be lowercase full emails. Never written to profiles.plan. */
const SPECIAL_ACCOUNT_ROLES = {
  "li19840610@gmail.com": {
    role: "creator",
    zhLabel: "創辦人",
    enLabel: "Founder",
    allAccess: true,
    adminAccess: true
  },
  "zoechen0118@gmail.com": {
    role: "queen",
    zhLabel: "女王",
    enLabel: "Queen",
    allAccess: true,
    adminAccess: false
  }
};

/** Public customer support contact (ECPay seller verification). Single source for footer. */
const BUSINESS_CONTACT = {
  email: "li19840610@gmail.com",
  phone: "0933577360"
};

function normalizeAccountEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function getSpecialAccountRole(user = state.user) {
  if (!user || !user.email) return null;
  return SPECIAL_ACCOUNT_ROLES[normalizeAccountEmail(user.email)] || null;
}

function isCreatorAccount(user = state.user) {
  const account = getSpecialAccountRole(user);
  return Boolean(account && account.role === "creator");
}

function isQueenAccount(user = state.user) {
  const account = getSpecialAccountRole(user);
  return Boolean(account && account.role === "queen");
}

function hasAdminAccess(user = state.user) {
  const account = getSpecialAccountRole(user);
  return Boolean(account && account.adminAccess === true);
}

function hasAllAccess(user = state.user) {
  const account = getSpecialAccountRole(user);
  if (account && account.allAccess === true) return true;
  return state.userPlan === "premium";
}

function getAccountDisplayName(user = state.user) {
  if (!user) return "";
  const meta = user.user_metadata || {};
  const name = meta.display_name || meta.full_name || meta.name || "";
  if (String(name).trim()) return String(name).trim().split(/\s+/)[0];
  const email = user.email || "";
  return email.includes("@") ? email.split("@")[0] : "";
}

function getAccountAccessLabel(user = state.user) {
  if (!user) return text("未登入", "Signed out");
  if (hasAllAccess(user)) return text("全站開通", "Full access");
  if (Array.isArray(state.unlockedCourses) && state.unlockedCourses.length) {
    return text("單門課程", "Single course");
  }
  return text("免費方案", "Free plan");
}

function getAccountPlanLabel(user = state.user) {
  // Special roles are not payment plans — never show plan: creator/queen.
  if (getSpecialAccountRole(user)) return "";
  if (state.userPlan === "premium") return text("全站通行證", "All-Access Pass");
  if (Array.isArray(state.unlockedCourses) && state.unlockedCourses.length) {
    return text("單門課方案", "Single-course plan");
  }
  return text("免費", "Free");
}

function renderAccountRoleBadge(user = state.user) {
  const account = getSpecialAccountRole(user);
  if (!account) return "";
  const label = state.lang === "zh" ? account.zhLabel : account.enLabel;
  const isQueen = account.role === "queen";
  const crown = isQueen
    ? `<span class="account-role-crown" aria-hidden="true">♛</span>`
    : "";
  const className = isQueen
    ? "account-role-badge account-role-badge-queen"
    : "account-role-badge account-role-badge-creator";
  return `<span class="${className}" role="status" aria-label="${label}">${label}${crown ? ` ${crown}` : ""}</span>`;
}

function renderAccountIdentity(user = state.user) {
  if (!user) return "";
  const name = getAccountDisplayName(user);
  const badge = renderAccountRoleBadge(user);
  return `<span class="account-identity"><span class="account-identity-name">${name}</span>${badge ? ` ${badge}` : ""}</span>`;
}

function renderAccountMembershipSummary(user = state.user) {
  if (!user) return "";
  const special = getSpecialAccountRole(user);
  const roleHtml = special
    ? renderAccountRoleBadge(user)
    : text("會員", "Member");
  const planLabel = getAccountPlanLabel(user);
  return `
    <div class="account-membership-summary">
      <p><b>${text("角色", "Role")}：</b>${roleHtml}</p>
      <p><b>${text("存取權限", "Access")}：</b>${getAccountAccessLabel(user)}</p>
      ${planLabel ? `<p><b>${text("方案", "Plan")}：</b>${planLabel}</p>` : ""}
    </div>
  `;
}
let supabaseClient = null;
if (window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let currentCourseId = null;
let currentLessonIndex = 0;
let currentResultPackageId = null;

let state = {
  lang: localStorage.getItem("asb_lang") || "zh",
  route: "home",
  activeLesson: localStorage.getItem("asb_lesson") || "ai",
  // Do not hydrate member progress from global localStorage before auth.
  progress: {},
  notes: {},
  assessment: JSON.parse(localStorage.getItem("asb_assessment") || "null"),
  favorites: JSON.parse(localStorage.getItem("asb_favorites") || "[]"),
  user: null,
  userPlan: "free",
  unlockedCourses: [],
  authReady: false,
  loadingProgress: false
};

const ASSESSMENT_QUESTIONS = [
  {
    id: "q1",
    zh: "你是否曾經使用過 ChatGPT 或其他 AI 工具？",
    en: "Have you used ChatGPT or another AI tool before?",
    options: [
      { zh: "完全沒有", en: "Never", score: 0 },
      { zh: "用過一兩次", en: "Once or twice", score: 1 },
      { zh: "經常使用", en: "Often", score: 2 }
    ]
  },
  {
    id: "q2",
    zh: "你知道 Prompt 是什麼嗎？",
    en: "Do you know what a prompt is?",
    options: [
      { zh: "不知道", en: "No", score: 0 },
      { zh: "大概知道", en: "Somewhat", score: 1 },
      { zh: "知道，也會設計 Prompt", en: "Yes, and I can write prompts", score: 2 }
    ]
  },
  {
    id: "q3",
    zh: "你會要求 AI 用表格、條列或指定格式回答嗎？",
    en: "Can you ask AI to answer in tables, bullet points, or specific formats?",
    options: [
      { zh: "不會", en: "No", score: 0 },
      { zh: "偶爾會", en: "Sometimes", score: 1 },
      { zh: "會，而且常用", en: "Yes, often", score: 2 }
    ]
  },
  {
    id: "q4",
    zh: "你會查證 AI 給你的重要資訊嗎？",
    en: "Do you verify important information from AI?",
    options: [
      { zh: "不會", en: "No", score: 0 },
      { zh: "重要時會", en: "For important tasks", score: 1 },
      { zh: "會，而且知道如何找來源", en: "Yes, and I know how to check sources", score: 2 }
    ]
  },
  {
    id: "q5",
    zh: "你會用 AI 幫忙做報告或簡報架構嗎？",
    en: "Can you use AI to help structure reports or presentations?",
    options: [
      { zh: "不會", en: "No", score: 0 },
      { zh: "會一點", en: "A little", score: 1 },
      { zh: "會，而且有自己的流程", en: "Yes, with my own workflow", score: 2 }
    ]
  },
  {
    id: "q6",
    zh: "你是否知道 ChatGPT、Claude、NotebookLM、Perplexity 分別適合什麼任務？",
    en: "Do you know what ChatGPT, Claude, NotebookLM, and Perplexity are best used for?",
    options: [
      { zh: "不知道", en: "No", score: 0 },
      { zh: "知道一部分", en: "Partly", score: 1 },
      { zh: "知道，也會依任務選工具", en: "Yes, and I choose tools by task", score: 2 }
    ]
  },
  {
    id: "q7",
    zh: "你是否用 AI 修改過履歷、信件或自我介紹？",
    en: "Have you used AI to improve a resume, email, or self-introduction?",
    options: [
      { zh: "沒有", en: "No", score: 0 },
      { zh: "有，但不太熟", en: "Yes, but not confidently", score: 1 },
      { zh: "有，而且能控制語氣與格式", en: "Yes, and I can control tone and format", score: 2 }
    ]
  },
  {
    id: "q8",
    zh: "你能不能把一個大任務拆成多個 AI 小任務？",
    en: "Can you break a large task into smaller AI-assisted steps?",
    options: [
      { zh: "不能", en: "No", score: 0 },
      { zh: "有時候可以", en: "Sometimes", score: 1 },
      { zh: "可以，這是我常用的方法", en: "Yes, it is part of my workflow", score: 2 }
    ]
  }
];

const LEARNING_MAP = [
  {
    level: "Level 0",
    zhTitle: "AI 新手村",
    enTitle: "AI Beginner Village",
    lessonIds: ["ai", "prompt", "role", "format", "verify"],
    badge: "AI Beginner"
  },
  {
    level: "Level 1",
    zhTitle: "AI 學生應用",
    enTitle: "AI for Students",
    lessonIds: ["study", "report", "slides", "email"],
    badge: "AI Student"
  },
  {
    level: "Level 2",
    zhTitle: "AI 求職與工具選擇",
    enTitle: "AI for Career and Tool Choice",
    lessonIds: ["career", "tool-choice"],
    badge: "AI Career Starter"
  }
];

function text(zh, en) {
  return state.lang === "zh" ? zh : en;
}

function L(path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], I18N[state.lang]) || path;
}

function applyDocumentLang() {
  try {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
  } catch (error) {}
}

function closeOpenNavMenus() {
  try {
    if (typeof closeAllNavMenus === "function") closeAllNavMenus();
    else {
      if (typeof setMoreMenuOpen === "function") setMoreMenuOpen(false);
      if (typeof setMobileNavOpen === "function") setMobileNavOpen(false);
      if (typeof closeAccountMenu === "function") closeAccountMenu();
    }
  } catch (error) {}
}

/** Localize FREE_BOOTCAMP lesson fields for the current language. */
function localizeFreeLesson(lesson) {
  if (!lesson) {
    return {
      title: "",
      goal: "",
      concept: "",
      example: "",
      task: [],
      prompt: "",
      feedback: "",
      output: "",
      caseStudy: "",
      commonMistakes: [],
      notePrompt: "",
      quizItems: []
    };
  }
  const en = state.lang === "en";
  const quizItems = (lesson.quizItems || []).map(q => ({
    ...q,
    q: en ? (q.enQ || q.q || "") : (q.q || q.enQ || ""),
    options: en ? (q.enOptions || q.options || []) : (q.options || q.enOptions || []),
    explain: en ? (q.enExplain || q.explain || "") : (q.explain || q.enExplain || "")
  }));
  return {
    title: en ? (lesson.enTitle || lesson.title || "") : (lesson.title || lesson.enTitle || ""),
    goal: en ? (lesson.enGoal || lesson.goal || "") : (lesson.goal || lesson.enGoal || ""),
    concept: en ? (lesson.enConcept || lesson.concept || "") : (lesson.concept || lesson.enConcept || ""),
    example: en ? (lesson.enExample || lesson.example || "") : (lesson.example || lesson.enExample || ""),
    task: en ? (lesson.enTask || lesson.task || []) : (lesson.task || lesson.enTask || []),
    prompt: en ? (lesson.enPrompt || lesson.prompt || "") : (lesson.prompt || lesson.enPrompt || ""),
    feedback: en ? (lesson.enFeedback || lesson.feedback || "") : (lesson.feedback || lesson.enFeedback || ""),
    output: en ? (lesson.enOutput || lesson.output || "") : (lesson.output || lesson.enOutput || ""),
    caseStudy: en ? (lesson.enCaseStudy || lesson.caseStudy || "") : (lesson.caseStudy || lesson.enCaseStudy || ""),
    commonMistakes: en
      ? (lesson.enCommonMistakes || lesson.commonMistakes || [])
      : (lesson.commonMistakes || lesson.enCommonMistakes || []),
    notePrompt: en ? (lesson.enNotePrompt || lesson.notePrompt || "") : (lesson.notePrompt || lesson.enNotePrompt || ""),
    quizItems
  };
}

function localizeValue(value, fallback = "") {
  if (value == null) return fallback;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value === "" ? fallback : value;
  }
  if (typeof value === "object") {
    const preferred = state.lang === "zh" ? value.zh : value.en;
    if (preferred != null && preferred !== "") return preferred;
    const other = state.lang === "zh" ? value.en : value.zh;
    if (other != null && other !== "") {
      if (typeof isLocalDevHost === "function" && isLocalDevHost()) {
        console.warn("[I18N] Missing", state.lang, "translation; falling back");
      }
      return other;
    }
  }
  return fallback;
}

function save() {
  localStorage.setItem("asb_lang", state.lang);
  localStorage.setItem("asb_lesson", state.activeLesson);
  // Only cache progress/notes for the signed-in member; never write guest empties over a cache.
  if (state.user) {
    localStorage.setItem("asb_progress", JSON.stringify(state.progress));
    localStorage.setItem("asb_notes", JSON.stringify(state.notes));
  }
  localStorage.setItem("asb_assessment", JSON.stringify(state.assessment));
  localStorage.setItem("asb_favorites", JSON.stringify(state.favorites));
}

function resetGuestLearningState() {
  state.user = null;
  state.userPlan = "free";
  state.unlockedCourses = [];
  state.progress = {};
  state.notes = {};
  state.loadingProgress = false;
}

function freeBootcampLessonId(index) {
  return `free-bootcamp-${Number(index)}`;
}

/** Dashboard Progress: user_progress via state.progress only (localStorage is cache). */
function dashboardProgress() {
  const total = typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 0;
  if (!state.user) {
    return { completed: 0, total, percent: 0 };
  }
  let completed = 0;
  for (let i = 0; i < total; i++) {
    if (state.progress[freeBootcampLessonId(i)]) completed += 1;
  }
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function completedCount() {
  return Object.values(state.progress).filter(Boolean).length;
}

function progressPercent() {
  const dash = dashboardProgress();
  if (state.user) return dash.percent;
  return Math.round((completedCount() / Math.max(LESSONS.length, 1)) * 100);
}

function currentLevel() {
  const done = completedCount();
  if (done < 5) return "Level 0";
  if (done < 9) return "Level 1";
  return "Level 2";
}

function earnedBadges() {
  return LEARNING_MAP
    .filter(group => group.lessonIds.every(id => state.progress[id]))
    .map(group => group.badge);
}

function earnedCertificates() {
  return earnedBadges().map(badge => `${badge} Completion Certificate`);
}

function recommendedLessons() {
  if (!state.assessment) return ["ai", "prompt", "verify"];
  if (state.assessment.level === "Level 0") return ["ai", "prompt", "role", "format", "verify"];
  if (state.assessment.level === "Level 1") return ["study", "report", "slides", "email"];
  return ["career", "tool-choice"];
}

function setRoute(route) {
  state.route = route;
  window.scrollTo(0, 0);
  if (typeof closeAllNavMenus === "function") closeAllNavMenus();
  render();
}

const POST_LOGIN_DESTINATION_KEY = "asb_post_login_destination_v1";
const AUTH_REQUIRED_ROUTES = new Set(["freeLesson", "freePortfolio", "learning", "free"]);

function isAuthRequiredRoute(route) {
  return AUTH_REQUIRED_ROUTES.has(route);
}

function savePostLoginDestination(destination) {
  try {
    const payload = {
      route: destination.route || null,
      courseId: destination.courseId || null,
      lessonId: destination.lessonId != null ? Number(destination.lessonId) : null,
      packageId: destination.packageId || null,
      action: destination.action || null,
      savedAt: Date.now()
    };
    localStorage.setItem(POST_LOGIN_DESTINATION_KEY, JSON.stringify(payload));
  } catch (error) {}
}

function clearPostLoginDestination() {
  try {
    localStorage.removeItem(POST_LOGIN_DESTINATION_KEY);
  } catch (error) {}
}

function readPostLoginDestination() {
  try {
    const raw = localStorage.getItem(POST_LOGIN_DESTINATION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    // Ignore stale destinations older than 2 hours
    if (parsed.savedAt && Date.now() - Number(parsed.savedAt) > 2 * 60 * 60 * 1000) {
      clearPostLoginDestination();
      return null;
    }
    return parsed;
  } catch (error) {
    return null;
  }
}

function consumePostLoginDestination() {
  const dest = readPostLoginDestination();
  clearPostLoginDestination();
  return dest;
}

function applyPostLoginDestination(destination) {
  if (!destination) return false;
  if (destination.courseId) currentCourseId = destination.courseId;
  if (destination.packageId) currentResultPackageId = destination.packageId;
  if (destination.lessonId != null && !Number.isNaN(Number(destination.lessonId))) {
    state.freeLessonIndex = Number(destination.lessonId);
  }

  if (destination.action === "openFreeLesson") {
    state.route = "freeLesson";
    state.freeLessonIndex = Number(destination.lessonId) || 0;
    return true;
  }
  if (destination.action === "openResultPackage" && destination.packageId) {
    currentResultPackageId = destination.packageId;
    state.route = "courseResultPackage";
    return true;
  }
  if (destination.route) {
    state.route = destination.route;
    return true;
  }
  return false;
}

function requireGoogleLogin(destination = {}) {
  if (state.user) {
    if (destination && (destination.route || destination.action)) {
      applyPostLoginDestination(destination);
      render();
    }
    return true;
  }
  savePostLoginDestination(destination || {});
  toast(state.lang === "zh"
    ? "請先使用 Google 登入後開始免費學習"
    : "Please sign in with Google to start free learning");
  signInWithGoogle();
  return false;
}

function renderAuthChecking() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel auth-gate-panel">
          <span class="tag">${text("登入狀態", "Auth")}</span>
          <h1>${text("正在確認登入狀態…", "Checking sign-in status…")}</h1>
          <p class="lead">${text("請稍候，我們正在確認你的 Google 登入狀態。", "Please wait while we confirm your Google sign-in status.")}</p>
        </section>
      </div>
    </main>
  `);
}

function renderGoogleLoginGate(options = {}) {
  const destination = options.destination || { route: options.route || "courses" };
  const backRoute = options.backRoute || "courses";
  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel auth-gate-panel">
          <span class="tag premiumtag">${text("需要登入", "Sign-in required")}</span>
          <h1>${options.title || text("登入後開始免費學習", "Sign in to start free learning")}</h1>
          <p class="lead">${options.message || text(
            "免費課程不需要付款，但必須使用 Google 登入，才能保存學習進度、測驗結果與成果作品。",
            "Free courses do not require payment, but Google sign-in is required to save progress, quizzes, and outputs."
          )}</p>
          <div class="btnrow">
            <button class="btn primary" onclick='requireGoogleLogin(${JSON.stringify(destination)})'>${text("使用 Google 登入", "Sign in with Google")}</button>
            <button class="btn secondary" onclick="setRoute('${backRoute}')">${options.backLabel || text("返回課程介紹", "Back to Course Intro")}</button>
          </div>
        </section>
      </div>
    </main>
  `);
}

function toggleLang() {
  state.lang = state.lang === "zh" ? "en" : "zh";
  save();
  applyDocumentLang();
  closeOpenNavMenus();
  render();
}

function toast(message) {
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  document.body.appendChild(element);
  setTimeout(() => element.remove(), 1800);
}

/*
 * Supabase profiles columns currently in use:
 *   id, email, display_name, plan, created_at
 * Do not select/write unlocked_courses, updated_at, role, etc.
 */

function logSupabaseError(label, error) {
  if (!error) return;
  console.error(label, {
    code: error.code || null,
    message: error.message || String(error),
    details: error.details || null,
    hint: error.hint || null
  });
}

async function syncUserProfile(user) {
  if (!supabaseClient || !user?.id) return;

  const { data: authData, error: authError } = await supabaseClient.auth.getUser();
  if (authError || !authData?.user) {
    logSupabaseError("Sync profile auth not ready:", authError);
    return;
  }

  const authUser = authData.user.id === user.id ? authData.user : user;
  const meta = authUser.user_metadata || {};
  const display_name =
    meta.display_name ||
    meta.full_name ||
    meta.name ||
    (authUser.email ? authUser.email.split("@")[0] : "") ||
    "User";

  // Existing profiles: never overwrite plan. New profiles only: default plan to free.
  const identityPayload = {
    email: authUser.email || null,
    display_name
  };

  const { data: existing, error: selectError } = await supabaseClient
    .from("profiles")
    .select("id, email, display_name, plan, created_at")
    .eq("id", authUser.id)
    .maybeSingle();

  if (selectError) {
    logSupabaseError("Sync profile select error:", selectError);
    return;
  }

  if (existing?.id) {
    const { data, error } = await supabaseClient
      .from("profiles")
      .update(identityPayload)
      .eq("id", authUser.id)
      .select("id, email, display_name, plan, created_at");

    if (error) {
      logSupabaseError("Sync profile update error:", error);
      return;
    }

    if (!data?.length) {
      console.error("Sync profile update blocked: no rows updated (check RLS policies).");
    }

    return;
  }

  const { error: insertError } = await supabaseClient
    .from("profiles")
    .insert({
      id: authUser.id,
      ...identityPayload,
      plan: "free"
    });

  if (insertError) {
    logSupabaseError("Sync profile insert error:", insertError);
  }
}

function normalizeUserPlan(plan) {
  if (plan === "premium" || plan === "all-access") return "premium";
  return "free";
}

function parseUnlockedCoursesFromPlan(plan, unlockedCoursesField) {
  const ids = [];
  const known = getPremiumCourseIds();
  if (Array.isArray(unlockedCoursesField)) {
    unlockedCoursesField.forEach(id => {
      if (known.includes(id) && !ids.includes(id)) ids.push(id);
    });
  } else if (typeof unlockedCoursesField === "string" && unlockedCoursesField.trim()) {
    try {
      const parsed = JSON.parse(unlockedCoursesField);
      if (Array.isArray(parsed)) {
        parsed.forEach(id => {
          if (known.includes(id) && !ids.includes(id)) ids.push(id);
        });
      }
    } catch (error) {
      unlockedCoursesField.split(",").map(s => s.trim()).forEach(id => {
        if (known.includes(id) && !ids.includes(id)) ids.push(id);
      });
    }
  }

  if (typeof plan === "string" && known.includes(plan) && !ids.includes(plan)) {
    ids.push(plan);
  }
  return ids;
}

function getPremiumCourseIds() {
  if (typeof PREMIUM === "undefined") return [];
  return PREMIUM.map(p => p.id).filter(id => id && id !== "all-access");
}

function getPremiumCourses() {
  if (typeof PREMIUM === "undefined") return [];
  return PREMIUM.filter(p => p && p.id && p.id !== "all-access");
}

function getAllAccessCourse() {
  if (typeof PREMIUM === "undefined") return null;
  return PREMIUM.find(p => p.id === "all-access") || null;
}

function getFreeCourseOffer() {
  if (typeof FREE_COURSE_OFFER !== "undefined" && FREE_COURSE_OFFER) return FREE_COURSE_OFFER;
  return { id: "free", price: 0, currency: "TWD", isFree: true, lessonCount: 8 };
}

function normalizePriceNumber(value) {
  if (value == null || value === "") return null;
  if (typeof value === "number" && Number.isFinite(value)) return Math.round(value);
  const match = String(value).replace(/,/g, "").match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function formatTwdPrice(price) {
  const amount = normalizePriceNumber(price);
  if (amount === 0) return text("免費", "Free");
  if (amount == null || Number.isNaN(amount)) return "";
  return `NT$${amount.toLocaleString("en-US")}`;
}

function getCoursePriceInfo(courseOrId) {
  if (courseOrId === "free" || courseOrId === "free-starter") {
    const free = getFreeCourseOffer();
    return {
      id: "free",
      price: 0,
      originalPrice: null,
      currency: free.currency || "TWD",
      isFree: true,
      course: free
    };
  }
  const course = typeof courseOrId === "object" && courseOrId
    ? courseOrId
    : ((typeof PREMIUM !== "undefined" && PREMIUM.find(p => p.id === courseOrId)) || null);
  if (!course) {
    return { id: "", price: null, originalPrice: null, currency: "TWD", isFree: false, course: null };
  }
  const price = normalizePriceNumber(course.price);
  const originalPrice = normalizePriceNumber(course.originalPrice);
  const isFree = course.isFree === true || price === 0;
  return {
    id: course.id || "",
    price: isFree ? 0 : price,
    originalPrice: originalPrice != null ? originalPrice : null,
    currency: course.currency || "TWD",
    isFree,
    course
  };
}

function getCourseAccessStatusLabel(courseId) {
  if (courseId === "free" || courseId === "free-starter") {
    return text("免費", "Free");
  }
  if (hasAllAccessPass() && courseId !== "all-access") {
    return text("全站已解鎖", "All Access Unlocked");
  }
  if (courseId === "all-access" && hasAllAccessPass()) {
    return text("全站已解鎖", "All Access Unlocked");
  }
  if (hasCourseAccess(courseId)) {
    return text("已解鎖", "Unlocked");
  }
  return text("尚未解鎖", "Locked");
}

function renderPaymentComingSoonNote() {
  return `<p class="course-price-coming-soon">${text("付款功能建置中", "Payment service coming soon")}</p>`;
}

function renderCourseProductFacts() {
  return `
    <ul class="course-price-facts">
      <li><span>${text("商品類型", "Product Type")}</span><strong>${text("線上 AI 教育課程與數位學習內容", "Online AI courses and digital learning content")}</strong></li>
      <li><span>${text("計價貨幣", "Currency")}</span><strong>${text("新臺幣", "New Taiwan Dollar")}</strong></li>
      <li><span>${text("交付方式", "Delivery")}</span><strong>${text("帳號開通後於 AI Skill Bridge 網站登入使用", "Access through the AI Skill Bridge website after account activation")}</strong></li>
      <li><span>${text("實體配送", "Physical Delivery")}</span><strong>${text("無", "None")}</strong></li>
    </ul>
  `;
}

function renderCoursePriceBlock(courseOrId, options = {}) {
  const info = getCoursePriceInfo(courseOrId);
  const compact = Boolean(options.compact);
  const showFacts = options.showFacts !== false && !compact;
  const lessonCount = options.lessonCount != null
    ? options.lessonCount
    : (info.isFree
      ? (info.course && info.course.lessonCount) || 8
      : ((info.course && (info.course.zhLessons || info.course.enLessons)) || []).length || 10);
  const packageName = options.packageName || "";

  if (info.isFree) {
    return `
      <div class="course-price-block is-free ${compact ? "is-compact" : ""}">
        <p class="course-price-label">${text("課程售價", "Course Price")}</p>
        <p class="course-price-amount is-free">${formatTwdPrice(0)}</p>
        <p class="course-price-meta">${text(`${lessonCount}堂實作課`, `${lessonCount} practical lessons`)}</p>
        ${compact ? "" : renderCourseProductFacts()}
      </div>
    `;
  }

  if (info.id === "all-access") {
    const saveAmount = (info.originalPrice != null && info.price != null)
      ? Math.max(info.originalPrice - info.price, 0)
      : 0;
    return `
      <div class="course-price-block is-all-access ${compact ? "is-compact" : ""}">
        <p class="course-price-label">${text("全站通行證", "All-Access Pass")}</p>
        ${info.originalPrice != null ? `<p class="course-price-original"><span>${text("原價", "Regular Price")}</span> <s>${formatTwdPrice(info.originalPrice)}</s></p>` : ""}
        <p class="course-price-amount is-earlybird"><span class="course-price-eyebrow">${text("早鳥價", "Early-bird Price")}</span>${formatTwdPrice(info.price)}</p>
        ${saveAmount > 0 ? `<p class="course-price-save">${text(`現省 ${formatTwdPrice(saveAmount)}`, `Save ${formatTwdPrice(saveAmount)}`)}</p>` : ""}
        <p class="course-price-meta">${text("一次付費，非訂閱制", "One-time payment · Not a subscription")}</p>
        ${compact ? "" : `
          <ul class="course-price-includes">
            <li>${text("六門付費課程", "Six premium courses")}</li>
            <li>${text("共60堂實戰課", "60 practical lessons in total")}</li>
            <li>${text("六種核心 AI 能力", "Six core AI capabilities")}</li>
            <li>${text("全部對應付費成果包", "All matching premium result packages")}</li>
            <li>${text("一次付費，非訂閱制", "One-time payment · Not a subscription")}</li>
          </ul>
          ${renderPaymentComingSoonNote()}
          ${showFacts ? renderCourseProductFacts() : ""}
        `}
      </div>
    `;
  }

  return `
    <div class="course-price-block ${compact ? "is-compact" : ""}">
      <p class="course-price-label">${text("課程售價", "Course Price")}</p>
      <p class="course-price-amount">${formatTwdPrice(info.price)}</p>
      <p class="course-price-meta">${text("一次付費", "One-time payment")}</p>
      ${compact ? "" : `
        <ul class="course-price-includes">
          <li>${text("一次付費，非訂閱制", "One-time payment · Not a subscription")}</li>
          <li>${text(`包含${lessonCount}堂線上實戰課與對應成果包`, `Includes ${lessonCount} practical online lessons and the corresponding result package`)}${packageName ? `（${packageName}）` : ""}</li>
          <li>${text("本商品為線上數位課程，不提供實體配送", "Digital course · No physical delivery")}</li>
        </ul>
        ${renderPaymentComingSoonNote()}
        ${showFacts ? renderCourseProductFacts() : ""}
      `}
    </div>
  `;
}

/**
 * Single source of truth for plan: public.profiles.plan → state.userPlan.
 * unlocked_courses column does not exist yet → state.unlockedCourses stays [].
 * Never reads plan from localStorage.
 * Special roles (Creator / Queen) are email-based and must not rewrite profiles.plan.
 */
async function loadUserPlan(user) {
  state.userPlan = "free";
  state.unlockedCourses = [];

  if (!supabaseClient || !user?.id) return;

  try {
    const { data, error } = await supabaseClient
      .from("profiles")
      .select("id, email, display_name, plan, created_at")
      .eq("id", user.id)
      .maybeSingle();

    if (error) {
      logSupabaseError("Load user plan failed:", error);
      state.userPlan = "free";
      state.unlockedCourses = [];
      return;
    }

    if (!data || data.plan == null || data.plan === "") {
      state.userPlan = "free";
      state.unlockedCourses = [];
      return;
    }

    state.userPlan = normalizeUserPlan(data.plan);
    // No unlocked_courses column in profiles yet; keep empty unless plan itself is a course id.
    state.unlockedCourses = parseUnlockedCoursesFromPlan(data.plan, null);
  } catch (err) {
    logSupabaseError("Load user plan failed:", err);
    state.userPlan = "free";
    state.unlockedCourses = [];
  }
}

let authStateListenerBound = false;

async function handleAuthSession(session, eventName = "session") {
  const previousUserId = state.user?.id || null;
  state.user = session?.user || null;
  state.authReady = true;

  console.log("[AUTH] auth event", eventName);
  console.log("[AUTH] user email", state.user?.email || null);

  if (session?.user) {
    try {
      await syncUserProfile(session.user);
      await loadUserPlan(session.user);
      await loadProgressFromSupabase();
      await loadNotesFromSupabase();
    } catch (error) {
      console.error("[AUTH] error", "post-login sync failed (login still succeeds)", error);
    }

    const justSignedIn = previousUserId !== session.user.id;
    if (justSignedIn) {
      const destination = consumePostLoginDestination();
      if (destination) {
        applyPostLoginDestination(destination);
        console.log("[AUTH] post-login destination applied", destination.route || destination.action || null);
      }
    }
  } else {
    resetGuestLearningState();
    // Do not load global asb_progress / asb_notes into guest UI.
  }

  try {
    render();
  } catch (error) {
    console.error("[AUTH] error", "render after auth session failed", error);
  }
}

async function initAuth() {
  if (!supabaseClient) {
    console.error("[AUTH] error", "supabaseClient is null — window.supabase may not have loaded");
    resetGuestLearningState();
    state.authReady = true;
    return;
  }

  console.log("[AUTH] client ready");

  if (!authStateListenerBound) {
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
      await handleAuthSession(session, event);
    });
    authStateListenerBound = true;
  }

  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) {
      console.error("[AUTH] error", "getSession failed", error);
    }
    state.user = data?.session?.user || null;
    console.log("[AUTH] session loaded", !!data?.session, state.user?.email || null);

    if (state.user) {
      try {
        await syncUserProfile(state.user);
        await loadUserPlan(state.user);
        await loadProgressFromSupabase();
        await loadNotesFromSupabase();
      } catch (syncError) {
        console.error("[AUTH] error", "init sync failed (session still kept)", syncError);
      }
      const destination = consumePostLoginDestination();
      if (destination) {
        applyPostLoginDestination(destination);
        console.log("[AUTH] post-login destination applied", destination.route || destination.action || null);
      }
    } else {
      resetGuestLearningState();
    }
  } catch (error) {
    console.error("[AUTH] error", "initAuth failed", error);
  }

  state.authReady = true;
}

async function signInWithGoogle() {
  console.log("[AUTH] sign-in requested");

  if (!supabaseClient) {
    console.error("[AUTH] error", "sign-in aborted: supabaseClient is null");
    alert(state.lang === "zh" ? "Supabase 尚未載入。" : "Supabase is not loaded.");
    return;
  }

  if (!readPostLoginDestination()) {
    savePostLoginDestination({
      route: state.route,
      courseId: currentCourseId || null,
      lessonId: state.route === "freeLesson" ? state.freeLessonIndex : null,
      packageId: state.route === "courseResultPackage" ? currentResultPackageId : null,
      action: state.route === "freeLesson" ? "openFreeLesson" : null
    });
  }

  const redirectTo = window.location.origin + window.location.pathname;
  console.log("[AUTH] redirectTo", redirectTo);

  try {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });

    if (error) {
      console.error("[AUTH] error", error);
      alert(error.message);
    }
  } catch (error) {
    console.error("[AUTH] error", error);
    alert(error?.message || String(error));
  }
}

async function signOut() {
  clearPostLoginDestination();
  if (!supabaseClient) {
    resetGuestLearningState();
    state.authReady = true;
    render();
    return;
  }
  await supabaseClient.auth.signOut();
  resetGuestLearningState();
  state.authReady = true;
  render();
}

function applyFreeBootcampCacheFromProgress(progress) {
  if (typeof FREE_BOOTCAMP === "undefined") return;
  FREE_BOOTCAMP.forEach((_, index) => {
    const done = !!progress[freeBootcampLessonId(index)];
    localStorage.setItem(freeBootcampKey(`complete-${index}`), done ? "true" : "false");
  });
}

async function upsertUserProgress(lessonId, completed = true) {
  if (!supabaseClient || !state.user || !lessonId) {
    return { ok: false, reason: "auth" };
  }

  const { data: existing, error: selectError } = await supabaseClient
    .from("user_progress")
    .select("id")
    .eq("user_id", state.user.id)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  if (selectError) {
    console.error("Select progress error:", selectError);
    return { ok: false, reason: "select" };
  }

  const payload = {
    completed: !!completed,
    updated_at: new Date().toISOString()
  };

  if (existing?.id) {
    const { error } = await supabaseClient
      .from("user_progress")
      .update(payload)
      .eq("id", existing.id)
      .eq("user_id", state.user.id);

    if (error) {
      console.error("Update progress error:", error);
      return { ok: false, reason: "update" };
    }
  } else {
    const { error } = await supabaseClient
      .from("user_progress")
      .insert({
        user_id: state.user.id,
        lesson_id: lessonId,
        ...payload
      });

    if (error) {
      console.error("Insert progress error:", error);
      return { ok: false, reason: "insert" };
    }
  }

  return { ok: true };
}

/** Push local free-bootcamp cache up to user_progress when cloud row is missing. */
async function migrateFreeBootcampCacheToSupabase() {
  if (!supabaseClient || !state.user || typeof FREE_BOOTCAMP === "undefined") return;

  for (let index = 0; index < FREE_BOOTCAMP.length; index++) {
    const lessonId = freeBootcampLessonId(index);
    const userKey = freeBootcampKey(`complete-${index}`);
    const guestKey = `asb-free-bootcamp-guest-complete-${index}`;
    const localDone =
      localStorage.getItem(userKey) === "true" ||
      localStorage.getItem(guestKey) === "true";
    if (!localDone) continue;
    if (state.progress[lessonId]) continue;

    state.progress[lessonId] = true;
    const result = await upsertUserProgress(lessonId, true);
    if (!result.ok) {
      console.error("Migrate free bootcamp progress failed:", lessonId, result.reason);
    }
  }

  save();
}

async function loadProgressFromSupabase() {
  if (!supabaseClient || !state.user) return;

  const { data, error } = await supabaseClient
    .from("user_progress")
    .select("lesson_id, completed")
    .eq("user_id", state.user.id);

  if (error) {
    console.error("Load progress error:", error);
    return;
  }

  const progress = {};
  (data || []).forEach(row => {
    progress[row.lesson_id] = row.completed;
  });

  // user_progress is the source of truth; localStorage is only a cache.
  state.progress = progress;
  await migrateFreeBootcampCacheToSupabase();
  applyFreeBootcampCacheFromProgress(state.progress);
  save();
}

async function completeLesson(lessonId) {
  if (!state.user) {
    requireGoogleLogin({ route: "free", action: "completeLesson" });
    return;
  }
  state.progress[lessonId] = true;
  save();
  render();

  if (!supabaseClient) {
    toast(text("已儲存在本機。", "Saved locally."));
    return;
  }

  const result = await upsertUserProgress(lessonId, true);
  if (!result.ok) {
    toast(
      result.reason === "select"
        ? text("同步前檢查失敗", "Sync check failed")
        : text("進度更新失敗", "Progress update failed")
    );
    return;
  }

  toast(text("學習進度已同步", "Progress synced"));
}

async function loadNotesFromSupabase() {
  if (!supabaseClient || !state.user) return;

  const { data, error } = await supabaseClient
    .from("user_notes")
    .select("lesson_id, note")
    .eq("user_id", state.user.id);

  if (error) {
    console.warn("Notes table may not exist yet:", error);
    return;
  }

  const notes = {};
  (data || []).forEach(row => {
    notes[row.lesson_id] = row.note;
  });

  state.notes = notes;
  save();
}

async function saveLessonNote(lessonId) {
  const textarea = document.getElementById(`note-${lessonId}`);
  const note = textarea ? textarea.value.trim() : "";
  state.notes[lessonId] = note;
  save();

  if (!state.user || !supabaseClient) {
    toast(text("筆記已儲存在本機", "Note saved locally"));
    return;
  }

  const { data: existing, error: selectError } = await supabaseClient
    .from("user_notes")
    .select("id")
    .eq("user_id", state.user.id)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  if (selectError) {
    console.error("Select note error:", selectError);
    toast(text("筆記同步失敗，請確認 user_notes 已建立", "Note sync failed. Check user_notes table."));
    return;
  }

  if (existing?.id) {
    const { error } = await supabaseClient
      .from("user_notes")
      .update({ note })
      .eq("id", existing.id)
      .eq("user_id", state.user.id);

    if (error) {
      console.error("Update note error:", error);
      toast(text("筆記更新失敗", "Note update failed"));
      return;
    }
  } else {
    const { error } = await supabaseClient
      .from("user_notes")
      .insert({
        user_id: state.user.id,
        lesson_id: lessonId,
        note
      });

    if (error) {
      console.error("Insert note error:", error);
      toast(text("筆記新增失敗", "Note insert failed"));
      return;
    }
  }

  toast(text("筆記已同步", "Note synced"));
}

function toggleFavorite(type, id) {
  const key = `${type}:${id}`;
  if (state.favorites.includes(key)) {
    state.favorites = state.favorites.filter(item => item !== key);
  } else {
    state.favorites.push(key);
  }
  save();
  render();
}

function isFavorite(type, id) {
  return state.favorites.includes(`${type}:${id}`);
}

function submitAssessment() {
  let score = 0;
  let answered = 0;

  ASSESSMENT_QUESTIONS.forEach(question => {
    const selected = document.querySelector(`input[name="${question.id}"]:checked`);
    if (selected) {
      score += Number(selected.value);
      answered++;
    }
  });

  if (answered < ASSESSMENT_QUESTIONS.length) {
    toast(text("請完成所有題目", "Please answer all questions"));
    return;
  }

  let level = "Level 0";
  if (score >= 8 && score < 13) level = "Level 1";
  if (score >= 13) level = "Level 2";

  state.assessment = {
    score,
    level,
    completedAt: new Date().toISOString()
  };

  save();
  render();
}



function tutorReply() {
  const input = document.getElementById("tutor-input");
  const output = document.getElementById("tutor-output");
  const raw = input ? input.value.trim() : "";
  const value = raw.toLowerCase();

  if (!raw) {
    toast(text("請先輸入你想問 AI 的問題", "Please type the question you want to ask AI"));
    return;
  }

  function buildPromptCoachResponse(userQuestion) {
    const question = userQuestion.trim();

    let likelyTaskZh = "一般問題";
    let likelyTaskEn = "general question";
    let suggestedRoleZh = "AI 學習教練";
    let suggestedRoleEn = "AI learning coach";
    let outputFormatZh = "步驟清單";
    let outputFormatEn = "step-by-step list";

    if (value.includes("報告") || value.includes("作業") || value.includes("essay") || value.includes("report")) {
      likelyTaskZh = "報告或作業規劃";
      likelyTaskEn = "report or assignment planning";
      suggestedRoleZh = "大學課程助教";
      suggestedRoleEn = "university teaching assistant";
      outputFormatZh = "大綱 + 重點 + 待查資料";
      outputFormatEn = "outline + key points + sources to verify";
    } else if (value.includes("簡報") || value.includes("ppt") || value.includes("slide")) {
      likelyTaskZh = "簡報規劃";
      likelyTaskEn = "slide planning";
      suggestedRoleZh = "簡報顧問";
      suggestedRoleEn = "presentation consultant";
      outputFormatZh = "每頁標題、核心訊息、三個重點";
      outputFormatEn = "slide title, key message, three bullet points";
    } else if (value.includes("讀書") || value.includes("考試") || value.includes("study") || value.includes("exam")) {
      likelyTaskZh = "讀書與考試準備";
      likelyTaskEn = "study and exam preparation";
      suggestedRoleZh = "考試教練";
      suggestedRoleEn = "exam coach";
      outputFormatZh = "重點整理 + 練習題 + 複習計畫";
      outputFormatEn = "key points + practice questions + review plan";
    } else if (value.includes("履歷") || value.includes("面試") || value.includes("resume") || value.includes("interview")) {
      likelyTaskZh = "履歷或面試準備";
      likelyTaskEn = "resume or interview preparation";
      suggestedRoleZh = "職涯教練";
      suggestedRoleEn = "career coach";
      outputFormatZh = "修改建議 + 範例 + 注意事項";
      outputFormatEn = "revision suggestions + examples + cautions";
    } else if (value.includes("工具") || value.includes("哪個") || value.includes("tool") || value.includes("chatgpt") || value.includes("claude") || value.includes("gemini")) {
      likelyTaskZh = "AI 工具選擇";
      likelyTaskEn = "AI tool selection";
      suggestedRoleZh = "AI 工具顧問";
      suggestedRoleEn = "AI tool advisor";
      outputFormatZh = "工具比較表 + 使用建議";
      outputFormatEn = "tool comparison table + usage recommendation";
    }

    const zh = `
      <h3>我會這樣幫你把問題改成好 Prompt</h3>

      <p><b>你原本想問：</b>${question}</p>

      <p><b>我判斷你的任務類型：</b>${likelyTaskZh}</p>

      <h3>好的 Prompt 公式</h3>
      <div class="promptbox">角色 + 任務 + 背景 + 輸出格式 + 限制 + 追問要求</div>

      <h3>可以直接複製的 Prompt</h3>
      <div class="promptbox">請你當作我的${suggestedRoleZh}。

我現在的問題是：
「${question}」

請你先不要直接給我最終答案。
請先幫我做以下事情：

1. 判斷我的問題真正想完成什麼任務
2. 告訴我這個問題還缺少哪些背景資訊
3. 幫我把問題改寫成一個更清楚的 Prompt
4. 用「${outputFormatZh}」的格式回答
5. 如果有不確定的地方，請標示「需要查證」
6. 最後請問我 3 個追問問題，幫我把需求講得更清楚</div>

      <h3>為什麼這樣問比較好？</h3>
      <ul>
        <li><b>有角色：</b>AI 知道要用什麼角度回答。</li>
        <li><b>有任務：</b>AI 不會亂發散。</li>
        <li><b>有格式：</b>答案會比較好讀。</li>
        <li><b>有查證要求：</b>可以降低錯誤資訊風險。</li>
        <li><b>有追問：</b>AI 會幫你把模糊需求變清楚。</li>
      </ul>

      <h3>下一步</h3>
      <p>把上面的 Prompt 複製到 ChatGPT、Claude 或 Gemini，再把 AI 問你的 3 個追問回答完，通常答案會比直接問原問題好很多。</p>
    `;

    const en = `
      <h3>I would turn your question into a stronger prompt like this</h3>

      <p><b>Your original question:</b> ${question}</p>

      <p><b>Task type:</b> ${likelyTaskEn}</p>

      <h3>Good Prompt Formula</h3>
      <div class="promptbox">Role + Task + Context + Output Format + Constraints + Follow-up Questions</div>

      <h3>Copy-ready Prompt</h3>
      <div class="promptbox">Act as my ${suggestedRoleEn}.

My current question is:
"${question}"

Please do not give me the final answer immediately.
First, do the following:

1. Identify what task I am actually trying to complete
2. Tell me what background information is missing
3. Rewrite my question into a clearer prompt
4. Answer using this format: ${outputFormatEn}
5. If anything is uncertain, mark it as "needs verification"
6. Ask me 3 follow-up questions to make my request clearer</div>

      <h3>Why this works better</h3>
      <ul>
        <li><b>Role:</b> AI knows what perspective to use.</li>
        <li><b>Task:</b> AI stays focused.</li>
        <li><b>Format:</b> The answer is easier to read.</li>
        <li><b>Verification:</b> It reduces the risk of false information.</li>
        <li><b>Follow-up:</b> AI helps clarify vague needs.</li>
      </ul>

      <h3>Next step</h3>
      <p>Copy the prompt above into ChatGPT, Claude, or Gemini, then answer the 3 follow-up questions. The result will usually be much better than asking the original question directly.</p>
    `;

    return text(zh, en);
  }

  output.innerHTML = `
    <div class="answer show">
      ${buildPromptCoachResponse(raw)}
      <hr>
      <h3>${text("快速檢查：你的問題是不是好 Prompt？", "Quick Check: Is your question a good prompt?")}</h3>
      <ul>
        <li>${text("有沒有說明 AI 要扮演什麼角色？", "Did you specify what role AI should play?")}</li>
        <li>${text("有沒有說明你真正要完成的任務？", "Did you explain the actual task?")}</li>
        <li>${text("有沒有提供背景資訊？", "Did you provide context?")}</li>
        <li>${text("有沒有要求輸出格式？", "Did you request an output format?")}</li>
        <li>${text("有沒有提醒 AI 不確定時要標示？", "Did you ask AI to mark uncertainty?")}</li>
      </ul>
      <p class="small">${text("這個 AI Tutor 的定位是 Prompt 教練，不是代替你完成作業，而是教你怎麼把問題問清楚。", "This AI Tutor is a prompt coach. It does not complete work for you; it teaches you how to ask clearer questions.")}</p>
    </div>
  `;
}



let moreMenuIgnoreOutsideUntil = 0;
let moreMenuDelegatedBound = false;
let navEscapeBound = false;

const ONBOARDING_DISMISSED_KEY = "asb_onboarding_dismissed_v1";

/** Shared nav config — desktop and mobile use the same source. */
const MAIN_NAV_ITEMS = [
  { id: "home", route: "home", zh: "首頁", en: "Home" },
  { id: "courses", route: "courses", zh: "免費入門", en: "Free Course" },
  { id: "map", route: "map", zh: "所有課程", en: "All Courses" },
  { id: "result-packages", route: "result-packages", zh: "成果禮包", en: "Result Packages" },
  { id: "learning", route: "learning", zh: "我的學習", en: "My Learning" }
];

const MORE_NAV_GROUPS = [
  {
    id: "learning-tools",
    zh: "學習工具",
    en: "Learning Tools",
    items: [
      { route: "assessment", zh: "能力測驗", en: "Skill Assessment" },
      { route: "tools", zh: "AI 工具", en: "AI Tools" },
      { route: "prompts", zh: "Prompt 範例", en: "Prompt Examples" },
      { route: "tutor", zh: "AI Tutor", en: "AI Tutor" }
    ]
  },
  {
    id: "results-platform",
    zh: "成果與平台",
    en: "Results & Platform",
    items: [
      { route: "freePortfolio", zh: "我的免費成果包", en: "My Free Result Package" },
      { route: "impact", zh: "影響力", en: "Impact" }
    ]
  }
];

const MORE_ACTIVE_ROUTES = new Set([
  "assessment", "tools", "prompts", "tutor", "impact", "freePortfolio", "community"
]);

function isMainNavActive(itemId) {
  const r = state.route;
  if (itemId === "home") return r === "home";
  if (itemId === "courses") return r === "courses" || r === "freeLesson" || r === "free";
  if (itemId === "map") {
    return r === "map" || r === "premium" || r === "course" || r === "lesson" || r === "applicationPackage";
  }
  if (itemId === "result-packages") {
    return r === "result-packages" || r === "resultPackages" || r === "courseResultPackage";
  }
  if (itemId === "learning") return r === "learning" || r === "center";
  return false;
}

function isMoreNavActive() {
  return MORE_ACTIVE_ROUTES.has(state.route);
}

function syncMoreMenuAria(isOpen) {
  const btn = document.getElementById("moreMenuBtn");
  if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function syncMobileNavAria(isOpen) {
  const btn = document.getElementById("mobileNavBtn");
  if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function setMenuVisible(menu, willOpen, openClass) {
  if (!menu) return false;
  menu.classList.toggle(openClass, willOpen);
  if (willOpen) menu.removeAttribute("hidden");
  else menu.setAttribute("hidden", "");
  return true;
}

function setMoreMenuOpen(willOpen) {
  const menu = document.getElementById("moreMenu");
  if (!menu) return false;
  if (willOpen) setMobileNavOpen(false);
  setMenuVisible(menu, willOpen, "open");
  syncMoreMenuAria(willOpen);
  if (willOpen) moreMenuIgnoreOutsideUntil = Date.now() + 400;
  return true;
}

function setAccountMenuOpen(_willOpen) {
  // Account dropdown removed from header; keep no-op for compatibility.
  return false;
}

function setMobileNavOpen(willOpen) {
  const menu = document.getElementById("mobileNavPanel");
  if (!menu) return false;
  if (willOpen) setMoreMenuOpen(false);
  setMenuVisible(menu, willOpen, "is-open");
  menu.classList.toggle("open", willOpen);
  document.body.classList.toggle("asb-mobile-nav-open", willOpen);
  syncMobileNavAria(willOpen);
  if (willOpen) moreMenuIgnoreOutsideUntil = Date.now() + 400;
  return true;
}

function toggleMoreMenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const menu = document.getElementById("moreMenu");
  if (!menu) return;
  setMoreMenuOpen(menu.hasAttribute("hidden") || !menu.classList.contains("open"));
}

function toggleAccountMenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
}

function toggleMobileNav(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const menu = document.getElementById("mobileNavPanel");
  if (!menu) return;
  const willOpen = menu.hasAttribute("hidden") || !menu.classList.contains("is-open");
  setMobileNavOpen(willOpen);
}

function closeMoreMenu() {
  setMoreMenuOpen(false);
}

function closeAccountMenu() {}

function closeMobileNav() {
  setMobileNavOpen(false);
}

function closeAllNavMenus() {
  closeMoreMenu();
  closeMobileNav();
}

function moreMenuEventElement(target) {
  if (!target) return null;
  if (target.nodeType === 1) return target;
  return target.parentElement || null;
}

function handleMoreMenuDelegatedClick(event) {
  const el = moreMenuEventElement(event.target);
  if (!el || typeof el.closest !== "function") return;

  if (el.closest("#moreMenuBtn")) {
    toggleMoreMenu(event);
    return;
  }
  if (el.closest("#mobileNavBtn")) {
    toggleMobileNav(event);
    return;
  }

  if (Date.now() < moreMenuIgnoreOutsideUntil) return;

  const moreOpen = document.getElementById("moreMenu")?.classList.contains("open");
  const mobileOpen = document.getElementById("mobileNavPanel")?.classList.contains("is-open");
  if (!moreOpen && !mobileOpen) return;

  if (el.closest("#moreMenu") || el.closest(".more-wrap")) return;
  if (el.closest("#mobileNavPanel") || el.closest(".mobile-nav-wrap")) return;

  closeAllNavMenus();
}

function handleNavEscape(event) {
  if (event.key === "Escape") closeAllNavMenus();
}

function handleNavResizeClose() {
  closeAllNavMenus();
}

function bindMoreMenuEvents() {
  if (moreMenuDelegatedBound) return;
  document.addEventListener("click", handleMoreMenuDelegatedClick);
  moreMenuDelegatedBound = true;
  if (!navEscapeBound) {
    document.addEventListener("keydown", handleNavEscape);
    window.addEventListener("resize", handleNavResizeClose);
    navEscapeBound = true;
  }
}

function goApplicationPackage() {
  if (typeof hasCourseAccess === "function" && hasCourseAccess("admissions")) {
    setRoute("applicationPackage");
  } else {
    toast(state.lang === "zh" ? "請先開通「高中生申請大學 AI 實戰課」" : "Please unlock the University Application course first");
    setRoute("premium");
  }
}

function renderMoreMenuGroupsHtml(closeFnName) {
  return MORE_NAV_GROUPS.map(group => `
    <div class="more-menu-group">
      <p class="more-menu-group-label">${state.lang === "zh" ? group.zh : group.en}</p>
      ${group.items.map(item => `
        <button type="button" onclick="setRoute('${item.route}'); ${closeFnName}();">
          ${state.lang === "zh" ? item.zh : item.en}
        </button>
      `).join("")}
    </div>
  `).join("");
}

function renderAccountMenuHtml() {
  if (!state.user) return "";
  return `
    <div class="nav-account">
      ${renderAccountIdentity()}
      <button type="button" class="lang" onclick="signOut()">${text("登出", "Sign Out")}</button>
    </div>
  `;
}

function nav() {
  const mainHtml = MAIN_NAV_ITEMS.map(item => `
    <button type="button" class="nav-link-btn ${isMainNavActive(item.id) ? "active" : ""}" onclick="setRoute('${item.route}')">
      ${state.lang === "zh" ? item.zh : item.en}
    </button>
  `).join("");

  const moreGroupsHtml = renderMoreMenuGroupsHtml("closeMoreMenu");
  const mobileMoreGroupsHtml = renderMoreMenuGroupsHtml("closeMobileNav");

  const authHtml = state.user
    ? renderAccountMenuHtml()
    : `<button type="button" class="lang" onclick="signInWithGoogle()">${text("登入", "Sign In")}</button>`;

  return `
    <header>
      <div class="nav compact-nav">
        <div class="brand" onclick="setRoute('home')" style="cursor:pointer" role="link" aria-label="${text("AI Skill Bridge 首頁", "AI Skill Bridge Home")}">
          <span class="logo-badge">AI</span>
          <span>AI Skill Bridge</span>
        </div>

        <nav class="desktop-nav nav-main nav-main-desktop" aria-label="${text("主導覽", "Main navigation")}">
          <div class="nav-main-links">
            ${mainHtml}
          </div>
          <div class="more-wrap">
            <button
              type="button"
              id="moreMenuBtn"
              class="lang nav-link-btn ${isMoreNavActive() ? "active" : ""}"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="moreMenu"
            >${state.lang === "zh" ? "更多" : "More"}</button>
            <div id="moreMenu" class="more-menu more-menu-grouped" role="menu" hidden>
              ${moreGroupsHtml}
            </div>
          </div>
        </nav>

        <div class="nav-actions">
          ${authHtml}
          <button type="button" class="lang" onclick="toggleLang()">${state.lang === "zh" ? "EN" : "中文"}</button>
          <div class="mobile-nav-wrap">
            <button
              type="button"
              id="mobileNavBtn"
              class="lang mobile-nav-btn mobile-nav-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="mobileNavPanel"
            >☰ ${state.lang === "zh" ? "選單" : "Menu"}</button>
            <div id="mobileNavPanel" class="mobile-nav-panel" role="menu" hidden>
              <div class="mobile-nav-main">
                ${MAIN_NAV_ITEMS.map(item => `
                  <button type="button" class="nav-link-btn ${isMainNavActive(item.id) ? "active" : ""}" onclick="setRoute('${item.route}'); closeMobileNav();">
                    ${state.lang === "zh" ? item.zh : item.en}
                  </button>
                `).join("")}
              </div>
              <div class="mobile-nav-more ${isMoreNavActive() ? "is-active-section" : ""}">
                <p class="more-menu-group-label">${state.lang === "zh" ? "更多" : "More"}</p>
                ${mobileMoreGroupsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderSiteFooter() {
  const email = BUSINESS_CONTACT.email;
  const phone = BUSINESS_CONTACT.phone;
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="wrap site-footer-grid">
        <div class="site-footer-brand">
          <strong class="site-footer-name">AI Skill Bridge</strong>
          <p class="site-footer-tagline">${text(
            "線上 AI 教育課程與數位學習平台",
            "Online AI Education & Digital Learning Platform"
          )}</p>
        </div>
        <div class="site-footer-contact">
          <h2 class="site-footer-heading">${text("聯絡我們", "Contact Us")}</h2>
          <p class="site-footer-subheading">${text("客服聯絡資訊", "Customer Support")}</p>
          <p class="site-footer-line">
            ${text("Email：", "Email: ")}<a href="mailto:${email}" class="site-footer-link">${email}</a>
          </p>
          <p class="site-footer-line">
            ${text("電話：", "Phone: ")}<a href="tel:${phone}" class="site-footer-link">${phone}</a>
          </p>
        </div>
        <div class="site-footer-meta">
          <p>${text(
            "商品價格皆以新臺幣（NT$）計價。",
            "All prices are listed in New Taiwan Dollars (NT$)."
          )}</p>
          <p>${text(
            "本平台提供線上數位課程與數位學習內容，無實體配送。",
            "This platform provides online digital courses and learning content. No physical delivery is provided."
          )}</p>
        </div>
      </div>
      <div class="wrap site-footer-bottom">
        <p>© 2026 AI Skill Bridge</p>
      </div>
    </footer>
  `;
}

function shell(content) {
  return `
    ${nav()}
    ${content}
    ${renderSiteFooter()}
  `;
}

function homeLandingShell(content) {
  return `${nav()}${content}${renderSiteFooter()}`;
}

const HOME_CAPABILITY_LABELS = {
  admissions: { zh: "AI 升學能力", en: "AI Admissions Skills" },
  "college-learning": { zh: "AI 學習能力", en: "AI Learning Skills" },
  "research-competition": { zh: "AI 研究能力", en: "AI Research Skills" },
  "career-internship": { zh: "AI 求職能力", en: "AI Career Skills" },
  "workplace-productivity": { zh: "AI 工作能力", en: "AI Workplace Skills" },
  "startup-automation": { zh: "AI 創業能力", en: "AI Startup Skills" }
};

const HOME_AUDIENCE = [
  { courseId: "admissions", zh: "我要準備大學申請", en: "I am preparing university applications" },
  { courseId: "college-learning", zh: "我要提升大學學習效率", en: "I want to study smarter in university" },
  { courseId: "research-competition", zh: "我要完成研究、專題或競賽", en: "I need research, projects, or competitions" },
  { courseId: "career-internship", zh: "我要找實習或工作", en: "I am looking for internships or jobs" },
  { courseId: "workplace-productivity", zh: "我要提升職場效率", en: "I want to work more productively" },
  { courseId: "startup-automation", zh: "我要做產品、創業或自動化", en: "I am building products, startups, or automation" }
];

function getHomeDisplayName() {
  return getAccountDisplayName();
}

function getHomePlatformStats() {
  const premiumCourses = getPremiumCourses();
  const courseCount = premiumCourses.length;
  let lessonCount = 0;
  premiumCourses.forEach(course => {
    const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[course.id])
      ? PREMIUM_LESSON_DETAILS[course.id]
      : null;
    if (Array.isArray(details) && details.length) {
      lessonCount += details.length;
    } else {
      lessonCount += (course.zhLessons || course.enLessons || []).length;
    }
  });
  const packageCount = getResultPackageConfigList().length;
  const freeLessonCount = (typeof FREE_BOOTCAMP !== "undefined") ? FREE_BOOTCAMP.length : 0;
  return { courseCount, lessonCount, packageCount, freeLessonCount };
}

function getHomeSingleCoursePriceLabel() {
  const courses = getPremiumCourses();
  const amounts = courses
    .map(c => normalizePriceNumber(c.price))
    .filter(n => n != null && n > 0);
  if (!amounts.length) return text("依課程而定", "Varies by course");
  const min = Math.min(...amounts);
  return text(`付費課程 ${formatTwdPrice(min)} 起`, `Premium courses from ${formatTwdPrice(min)}`);
}

function getHomeAllAccessPriceLabel() {
  const info = getCoursePriceInfo("all-access");
  if (info.price == null) return "";
  return formatTwdPrice(info.price);
}

function renderHomePriceTeaser() {
  const single = getHomeSingleCoursePriceLabel();
  const allAccess = getHomeAllAccessPriceLabel();
  return `
    <p class="home-price-teaser">
      <button type="button" class="home-price-teaser-link" onclick="setRoute('map')">
        ${single}${allAccess ? text(`｜全站通行證早鳥價 ${allAccess}`, `｜All-access early-bird price ${allAccess}`) : ""}
      </button>
    </p>
  `;
}

function countUnlockedPremiumCourses() {
  return getPremiumCourses().filter(c => hasCourseAccess(c.id)).length;
}

function countCompletedLessonsAcrossPlatform() {
  let completed = 0;
  if (state.user && typeof FREE_BOOTCAMP !== "undefined") {
    for (let i = 0; i < FREE_BOOTCAMP.length; i++) {
      if (isFreeLessonComplete(i)) completed += 1;
    }
  }
  getPremiumCourses().forEach(course => {
    if (!hasCourseAccess(course.id)) return;
    completed += courseProgress(course.id).completed;
  });
  return completed;
}

function countCompletedResultPackageItems() {
  if (!state.user) return 0;
  return getResultPackageConfigList().reduce((sum, pkg) => {
    if (!hasResultPackageAccess(pkg.id)) return sum;
    return sum + resultPackageProgressByConfig(pkg).completed;
  }, 0);
}

function homeHasLearningHistory() {
  if (!state.user) return false;
  const last = getLastStudiedCourse();
  if (last && last.courseId) return true;
  if (countCompletedLessonsAcrossPlatform() > 0) return true;
  return false;
}

function isFreeBootcampComplete() {
  if (!state.user || typeof FREE_BOOTCAMP === "undefined") return false;
  const progress = freeBootcampProgress();
  return progress.total > 0 && progress.completed >= progress.total;
}

function isFreeBootcampStarted() {
  if (!state.user || typeof FREE_BOOTCAMP === "undefined") return false;
  if (freeBootcampProgress().completed > 0) return true;
  const last = getLastStudiedCourse();
  return !!(last && last.courseId === "free-starter");
}

function isOnboardingDismissed() {
  try {
    return localStorage.getItem(ONBOARDING_DISMISSED_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function dismissOnboarding() {
  try {
    localStorage.setItem(ONBOARDING_DISMISSED_KEY, "true");
  } catch (error) {}
  render();
}

function shouldShowOnboarding() {
  if (!state.authReady || !state.user) return false;
  if (isOnboardingDismissed()) return false;
  if (homeHasLearningHistory()) return false;
  if (isFreeBootcampStarted()) return false;
  return true;
}

function startFreeCourseFromOnboarding() {
  dismissOnboarding();
  openFreeLesson(0);
}

/**
 * Single source for homepage primary CTA.
 * Returns: { label, action, variant, note, secondaryLabel, secondaryAction }
 */
function getHomePrimaryAction() {
  const name = getHomeDisplayName();
  const greet = name ? text(`${name}，`, `${name}, `) : "";
  const secondary = {
    secondaryLabel: text("查看成果禮包", "View Result Packages"),
    secondaryAction: "setRoute('result-packages')"
  };

  if (!state.user) {
    return {
      label: text("開始免費學習", "Start Learning Free"),
      action: "homePrimaryAction()",
      variant: "primary",
      note: text("登入後可保存進度與成果。", "Sign in to save progress and results."),
      ...secondary
    };
  }

  if (hasAllAccessPass()) {
    if (homeHasLearningHistory()) {
      return {
        label: text("繼續學習", "Continue Learning"),
        action: "homeContinueLastLearning()",
        variant: "primary",
        note: text(`${greet}你已解鎖完整學習路徑。`, `${greet}your full learning path is unlocked.`),
        ...secondary
      };
    }
    return {
      label: text("選擇一門課程", "Choose a Course"),
      action: "setRoute('map')",
      variant: "primary",
      note: text(`${greet}從所有課程中選擇你目前需要的能力。`, `${greet}choose the capability you need from All Courses.`),
      ...secondary
    };
  }

  if (isFreeBootcampComplete()) {
    return {
      label: text("探索所有課程", "Explore All Courses"),
      action: "setRoute('map')",
      variant: "primary",
      note: text(`${greet}免費課程已完成，下一步可探索所有課程。`, `${greet}free course complete — explore all courses next.`),
      ...secondary
    };
  }

  if (isFreeBootcampStarted() || homeHasLearningHistory()) {
    const last = getLastStudiedCourse();
    let detail = text("繼續你的學習進度。", "Continue where you left off.");
    if (last && last.courseId === "free-starter") {
      const free = freeBootcampProgress();
      detail = text(
        `最近：免費入門 · Lesson ${(Number(last.lessonIndex) || 0) + 1} · 進度 ${free.completed}/${free.total}`,
        `Recent: Free Intro · Lesson ${(Number(last.lessonIndex) || 0) + 1} · ${free.completed}/${free.total}`
      );
    } else if (last && last.courseId) {
      const course = getPremiumCourses().find(c => c.id === last.courseId);
      const progress = courseProgress(last.courseId);
      const title = course ? (state.lang === "zh" ? course.zhTitle : course.enTitle) : last.courseId;
      detail = text(
        `最近：${title} · Lesson ${(Number(last.lessonIndex) || 0) + 1} · ${progress.completed}/${progress.total}`,
        `Recent: ${title} · Lesson ${(Number(last.lessonIndex) || 0) + 1} · ${progress.completed}/${progress.total}`
      );
    }
    return {
      label: text("繼續學習", "Continue Learning"),
      action: "homeContinueLastLearning()",
      variant: "primary",
      note: `${greet}${detail}`,
      ...secondary
    };
  }

  return {
    label: text("開始第一堂課", "Start Lesson 1"),
    action: "openFreeLesson(0)",
    variant: "primary",
    note: text(`${greet}免費課程不需付款，進度會自動保存。`, `${greet}free courses need no payment, and progress is saved.`),
    ...secondary
  };
}

function homePrimaryAction() {
  if (!state.authReady) {
    toast(text("正在確認登入狀態…", "Checking sign-in status…"));
    return;
  }
  if (!state.user) {
    requireGoogleLogin({ route: "freeLesson", lessonId: 0, action: "openFreeLesson" });
    return;
  }
  const cta = getHomePrimaryAction();
  if (cta.action === "homePrimaryAction()") {
    openFreeLesson(0);
    return;
  }
  if (cta.action === "homeContinueLastLearning()") {
    homeContinueLastLearning();
    return;
  }
  if (cta.action === "openFreeLesson(0)") {
    openFreeLesson(0);
    return;
  }
  if (cta.action === "setRoute('map')") {
    setRoute("map");
    return;
  }
  if (cta.action === "setRoute('learning')") {
    setRoute("learning");
  }
}

function homeContinueLastLearning() {
  const last = getLastStudiedCourse();
  if (last && last.courseId === "free-starter") {
    openFreeLesson(Number(last.lessonIndex) || 0);
    return;
  }
  if (last && last.courseId && hasCourseAccess(last.courseId)) {
    currentCourseId = last.courseId;
    openLesson(Number(last.lessonIndex) || 0);
    return;
  }
  if (typeof FREE_BOOTCAMP !== "undefined") {
    for (let i = 0; i < FREE_BOOTCAMP.length; i++) {
      if (!isFreeLessonComplete(i)) {
        openFreeLesson(i);
        return;
      }
    }
  }
  if (isFreeBootcampComplete()) {
    setRoute("map");
    return;
  }
  openFreeLesson(0);
}

function homeOpenCapability(courseId) {
  if (!courseId) {
    setRoute("map");
    return;
  }
  openCourse(courseId);
}

function homeHeroCtaCopy() {
  const cta = getHomePrimaryAction();
  return {
    primary: cta.label,
    secondary: cta.secondaryLabel,
    note: cta.note,
    primaryAction: cta.action,
    secondaryAction: cta.secondaryAction
  };
}

function renderOnboardingCard() {
  if (!shouldShowOnboarding()) return "";
  return `
    <section class="home-onboarding-card" aria-label="${text("新手引導", "Onboarding")}">
      <div class="wrap">
        <div class="home-onboarding-panel">
          <button type="button" class="home-onboarding-close" onclick="dismissOnboarding()" aria-label="${text("關閉", "Close")}">×</button>
          <h2>${text("歡迎來到 AI Skill Bridge", "Welcome to AI Skill Bridge")}</h2>
          <p>${text("你可以按照以下步驟開始：", "Get started in three steps:")}</p>
          <ol>
            <li>${text("完成免費入門課程", "Complete the free foundation course")}</li>
            <li>${text("選擇目前需要的 AI 能力", "Choose the AI skill you need")}</li>
            <li>${text("完成課程並儲存成果", "Finish lessons and save your results")}</li>
          </ol>
          <div class="home-hero-cta">
            <button type="button" class="home-btn home-btn-primary" onclick="startFreeCourseFromOnboarding()">${text("開始免費課程", "Start Free Course")}</button>
            <button type="button" class="home-btn home-btn-secondary" onclick="dismissOnboarding()">${text("稍後再說", "Maybe Later")}</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHomeAssessmentNudge() {
  return `
    <section class="home-assessment-nudge" aria-label="${text("建議第一步：AI 能力測驗", "Recommended first step: AI skill assessment")}">
      <div class="wrap">
        <div class="home-assessment-card">
          <div class="home-assessment-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="28" fill="rgba(30,58,138,0.08)" stroke="rgba(30,58,138,0.22)" stroke-width="2"/>
              <circle cx="32" cy="32" r="16" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="4 3" opacity="0.55"/>
              <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="#2f5bea" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="32" cy="32" r="4" fill="#1e3a8a"/>
              <path d="M32 32 L46 22" stroke="#1e3a8a" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="46" cy="22" r="3" fill="#2f5bea"/>
            </svg>
          </div>
          <div class="home-assessment-copy">
            <span class="home-assessment-badge">
              <span class="home-assessment-badge-num">01</span>
              ${text("建議第一步", "RECOMMENDED FIRST STEP")}
            </span>
            <h2>${text("不知道該從哪門課開始？", "Not sure which course to start with?")}</h2>
            <p class="home-assessment-lead">${text(
              "先完成 AI 能力測驗，了解你目前的能力與需求，取得最適合你的學習路徑建議。",
              "Take the AI skill assessment to understand your current strengths and get a learning path matched to your goals."
            )}</p>
            <p class="home-assessment-note">${text(
              "完成後即可查看推薦能力方向與課程。",
              "See your recommended skills and courses after completing the assessment."
            )}</p>
          </div>
          <div class="home-assessment-action">
            <button type="button" class="home-assessment-cta" onclick="setRoute('assessment')">
              ${text("開始 AI 能力測驗", "Start AI Skill Assessment")}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHomeHeroPreview() {
  const isGuest = !state.user;
  const stats = getHomePlatformStats();
  const free = isGuest
    ? { completed: 0, total: stats.freeLessonCount || (typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 0), percent: 0 }
    : freeBootcampProgress();
  const unlocked = isGuest ? 0 : countUnlockedPremiumCourses();
  const completedLessons = isGuest ? 0 : countCompletedLessonsAcrossPlatform();
  const packageItems = isGuest ? 0 : countCompletedResultPackageItems();
  const progressPercent = isGuest ? 0 : (free.total ? free.percent : 0);
  const planLabel = isGuest
    ? text("訪客", "Guest")
    : getAccountAccessLabel();
  const accountLine = isGuest
    ? ""
    : `<div class="home-preview-account">${renderAccountIdentity()}</div>`;
  const previewCta = isGuest
    ? text("登入後開始", "Sign In to Start")
    : getHomePrimaryAction().label;

  const capabilities = getPremiumCourses().slice(0, 6).map(course => {
    const label = HOME_CAPABILITY_LABELS[course.id] || { zh: course.zhTitle, en: course.enTitle };
    const unlockedCourse = !isGuest && hasCourseAccess(course.id);
    return `
      <li class="${unlockedCourse ? "is-unlocked" : "is-locked"}">
        <span>${state.lang === "zh" ? label.zh : label.en}</span>
        <em>${unlockedCourse ? text("已解鎖", "Unlocked") : text("鎖定", "Locked")}</em>
      </li>
    `;
  }).join("");

  return `
    <aside class="home-hero-visual hp-animate hp-delay" aria-label="${text("產品介面預覽", "Product interface preview")}">
      <div class="home-product-preview">
        <div class="home-preview-chrome">
          <span></span><span></span><span></span>
          <strong>${text("我的學習中心", "Learning Center")}</strong>
          <em class="home-preview-badge">${planLabel}</em>
        </div>
        ${accountLine}
        <div class="home-preview-body">
          <div class="home-preview-main">
            <p class="home-preview-kicker">${text("目前課程進度", "Current course progress")}</p>
            <h3>${text("免費入門／AI 新手訓練營", "Free Intro / AI Beginner Bootcamp")}</h3>
            <div class="home-preview-track"><div class="home-preview-bar" style="width:${progressPercent}%"></div></div>
            <p class="home-preview-meta">${
              isGuest
                ? text("尚未開始", "Not started yet")
                : `${free.completed} / ${free.total} · ${progressPercent}%`
            }</p>
            <button type="button" class="home-btn home-btn-primary home-btn-compact" onclick="homePrimaryAction()">${previewCta}</button>
          </div>
          <div class="home-preview-side">
            <article>
              <span>${text("已解鎖課程", "Unlocked courses")}</span>
              <strong>${unlocked}<small>/${stats.courseCount}</small></strong>
            </article>
            <article>
              <span>${text("已完成 Lesson", "Lessons completed")}</span>
              <strong>${completedLessons}</strong>
            </article>
            <article>
              <span>${text("成果包完成數", "Package items")}</span>
              <strong>${packageItems}</strong>
            </article>
          </div>
        </div>
        <div class="home-preview-caps">
          <p>${text("六大 AI 能力", "Six AI capabilities")}</p>
          <ul>${capabilities}</ul>
        </div>
      </div>
    </aside>
  `;
}

function renderHomeHero() {
  const cta = homeHeroCtaCopy();
  const secondaryAction = cta.secondaryAction || "setRoute('result-packages')";
  return `
    <section class="home-hero">
      <div class="home-hero-glow home-hero-glow-a" aria-hidden="true"></div>
      <div class="home-hero-glow home-hero-glow-b" aria-hidden="true"></div>
      <div class="home-hero-glow home-hero-glow-c" aria-hidden="true"></div>
      <div class="wrap home-hero-grid">
        <div class="home-hero-content hp-animate">
          <p class="home-tagline">${text("從學習到創業的 AI 能力養成平台", "AI skill platform from learning to entrepreneurship")}</p>
          <h1>${text("把 AI 從工具，<br>變成你真正會用的能力", "Turn AI Tools into<br>Skills You Can Actually Use")}</h1>
          <p class="home-lead">${text(
            "從免費入門、大學學習、研究競賽、求職實習、職場效率到創業自動化，建立一套真正能持續使用的 AI 能力系統。",
            "Build practical AI skills across learning, research, career, workplace productivity, and entrepreneurship."
          )}</p>
          <div class="home-hero-cta">
            <button class="home-btn home-btn-primary" onclick="${cta.primaryAction}">${cta.primary}</button>
            <button class="home-btn home-btn-secondary" onclick="${secondaryAction}">${cta.secondary}</button>
          </div>
          ${renderHomePriceTeaser()}
          <p class="home-trust-note">${cta.note}</p>
          <ul class="home-trust-list">
            <li>${text("Google 登入即可開始", "Start with Google sign-in")}</li>
            <li>${text("免費課程不需付款", "Free courses need no payment")}</li>
            <li>${text("學習進度自動保存", "Progress saves automatically")}</li>
          </ul>
        </div>
        ${renderHomeHeroPreview()}
      </div>
    </section>
  `;
}

function renderHomeStats() {
  const stats = getHomePlatformStats();
  const items = [
    { value: text("免費入門課程", "Free intro course"), label: text(`${stats.freeLessonCount} 堂實作課`, `${stats.freeLessonCount} practice lessons`) },
    { value: String(stats.courseCount), label: text("門核心能力課程", "core capability courses") },
    { value: String(stats.lessonCount), label: text("堂付費實戰課", "premium practice lessons") },
    { value: String(stats.packageCount), label: text("個成果禮包", "result packages") },
    { value: text("中／英", "ZH / EN"), label: text("雙語介面", "bilingual interface") },
    { value: "Google", label: text("帳號同步進度", "account syncs progress") }
  ];
  return `
    <section class="home-stats-bar" aria-label="${text("平台資訊", "Platform facts")}">
      <div class="wrap home-stats-bar-grid">
        ${items.map(item => `
          <div class="home-stat-chip">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHomeCapabilities() {
  const cards = getPremiumCourses().map(course => {
    const label = HOME_CAPABILITY_LABELS[course.id] || { zh: course.zhTitle, en: course.enTitle };
    const pkg = getResultPackageByCourseId(course.id);
    const lessonCount = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[course.id])
      ? PREMIUM_LESSON_DETAILS[course.id].length
      : (course.zhLessons || course.enLessons || []).length;
    const unlocked = !!state.user && hasCourseAccess(course.id);
    return `
      <article class="home-cap-card">
        <div class="home-cap-top">
          <span class="home-cap-status ${unlocked ? "is-on" : ""}">${unlocked ? text("已解鎖", "Unlocked") : text("鎖定", "Locked")}</span>
          <h3>${state.lang === "zh" ? label.zh : label.en}</h3>
        </div>
        <p class="home-cap-course">${state.lang === "zh" ? course.zhTitle : course.enTitle}</p>
        <p class="home-cap-desc">${state.lang === "zh" ? (course.zhOutcome || course.zhDesc) : (course.enOutcome || course.enDesc)}</p>
        <ul class="home-cap-meta">
          <li>${lessonCount} ${text("堂課", "lessons")}</li>
          <li>${pkg ? (state.lang === "zh" ? pkg.zhTitle : pkg.enTitle) : (state.lang === "zh" ? course.zhFinalProduct : course.enFinalProduct)}</li>
          <li class="home-cap-price"><span class="price-nowrap">${formatTwdPrice(course.price)}</span> · ${text("一次付費", "One-time payment")}</li>
        </ul>
        <button type="button" class="home-btn home-btn-secondary home-btn-compact" onclick="homeOpenCapability('${course.id}')">${text("查看課程", "View Course")}</button>
      </article>
    `;
  }).join("");

  return `
    <section class="home-section" id="capabilities">
      <div class="wrap">
        <div class="home-section-header">
          <h2>${text("一個平台，建立六種真正可用的 AI 能力", "One platform for six practical AI capabilities")}</h2>
          <p class="home-section-lead">${text(
            "每一門課只專注一種能力。單門課解決一個問題，全站通行證建立完整能力地圖。",
            "Each course focuses on one capability. Buy one to solve one problem, or unlock the full map with All-Access."
          )}</p>
        </div>
        <div class="home-cap-grid">${cards}</div>
      </div>
    </section>
  `;
}

function renderHomeProcess() {
  const steps = [
    {
      n: "01",
      title: text("選擇你現在需要的能力", "Choose the capability you need now"),
      desc: text("先從免費課程開始，再依照升學、學習、研究、求職、職場或創業需求選擇路徑。", "Start with the free course, then choose a path for admissions, learning, research, career, workplace, or startup needs.")
    },
    {
      n: "02",
      title: text("完成每堂課的實作", "Complete each lesson’s practice"),
      desc: text("每堂課包含核心概念、操作流程、Prompt、案例、練習與成果任務。", "Every lesson includes concepts, workflows, prompts, cases, practice, and deliverables.")
    },
    {
      n: "03",
      title: text("建立自己的成果禮包", "Build your own result package"),
      desc: text("將十堂課的成果集中保存，最後組合成可以使用、展示或持續優化的成果包。", "Save all ten lesson outputs and combine them into a usable, showable, improvable package.")
    }
  ];
  return `
    <section class="home-section home-section-alt" id="process">
      <div class="wrap">
        <div class="home-section-header">
          <h2>${text("不是看完影片，而是完成真正的成果", "Not just watching videos — completing real outcomes")}</h2>
        </div>
        <div class="home-process-grid">
          ${steps.map((step, i) => `
            <article class="home-process-card">
              <div class="home-process-num">${step.n}</div>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
              ${i < steps.length - 1 ? '<div class="home-process-line" aria-hidden="true"></div>' : ""}
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHomeResultPackages() {
  const packages = getResultPackageConfigList();
  const featured = packages[0] || null;
  const featuredProgress = featured
    ? ((!state.user && featured.free)
      ? { completed: 0, total: featured.totalItems || 0, percent: 0 }
      : resultPackageProgressByConfig(featured))
    : { completed: 0, total: 0, percent: 0 };

  const list = packages.map(pkg => {
    const unlocked = pkg.free ? true : (!!state.user && hasResultPackageAccess(pkg.id));
    const progress = (!state.user && pkg.free)
      ? { completed: 0, total: pkg.totalItems || 0, percent: 0 }
      : (state.user && hasResultPackageAccess(pkg.id) ? resultPackageProgressByConfig(pkg) : { completed: 0, total: pkg.totalItems || 0, percent: 0 });
    return `
      <button type="button" class="home-pkg-list-item ${unlocked ? "" : "is-locked"}" onclick="openResultPackage('${pkg.id}')">
        <span class="home-pkg-list-title">${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</span>
        <span class="home-pkg-list-meta">
          ${unlocked ? `${progress.completed}/${progress.total}` : text("鎖定", "Locked")}
        </span>
      </button>
    `;
  }).join("");

  return `
    <section class="home-section" id="packages">
      <div class="wrap">
        <div class="home-section-header">
          <h2>${text("學完不只留下進度，而是留下真正的成果", "Finish with real outcomes, not just progress bars")}</h2>
          <p class="home-section-lead">${text(
            "每門課都對應一個成果禮包，將零散練習整理成完整的作品與系統。",
            "Every course maps to a result package that turns scattered practice into a complete system."
          )}</p>
        </div>
        <div class="home-pkg-layout">
          <article class="home-pkg-feature">
            <span class="home-cap-status is-on">${featured && featured.free ? text("免費", "Free") : text("成果禮包", "Result Package")}</span>
            <h3>${featured ? (state.lang === "zh" ? featured.zhTitle : featured.enTitle) : ""}</h3>
            <p>${featured ? (state.lang === "zh" ? featured.zhDescription : featured.enDescription) : ""}</p>
            <div class="home-preview-track"><div class="home-preview-bar" style="width:${featuredProgress.percent}%"></div></div>
            <p class="home-preview-meta">${text("完成進度", "Progress")}：${featuredProgress.completed} / ${featuredProgress.total}</p>
            <div class="home-hero-cta">
              <button class="home-btn home-btn-primary home-btn-compact" onclick="openResultPackage('${featured ? featured.id : "free-starter"}')">${text("查看此成果包", "Open This Package")}</button>
              <button class="home-btn home-btn-secondary home-btn-compact" onclick="setRoute('result-packages')">${text("查看所有成果禮包", "View All Result Packages")}</button>
            </div>
          </article>
          <div class="home-pkg-list">${list}</div>
        </div>
      </div>
    </section>
  `;
}

function renderHomePricing() {
  const stats = getHomePlatformStats();
  const allAccessInfo = getCoursePriceInfo("all-access");
  const saveAmount = (allAccessInfo.originalPrice != null && allAccessInfo.price != null)
    ? Math.max(allAccessInfo.originalPrice - allAccessInfo.price, 0)
    : 0;
  return `
    <section class="home-section home-section-alt" id="pricing">
      <div class="wrap">
        <div class="home-section-header">
          <h2>${text("依你的需求選擇開始方式", "Choose how you want to start")}</h2>
          <p class="home-section-lead">${text(
            "先免費上手，再選擇單門能力課程，或一次打通完整路徑。",
            "Start free, choose one capability course, or open the full path at once."
          )}</p>
        </div>
        <div class="home-pricing-grid">
          <article class="home-price-card">
            <h3>${text("免費開始", "Start Free")}</h3>
            <p class="home-price-amount is-free">${formatTwdPrice(0)}</p>
            <p class="home-price-note">${text("8堂實作課", "8 practical lessons")}</p>
            <ul>
              <li>${text("免費入門課程", "Free intro course")}</li>
              <li>${text("免費入門成果包", "Free starter result package")}</li>
              <li>${text("Google 登入保存進度", "Google sign-in saves progress")}</li>
            </ul>
            <button class="home-btn home-btn-secondary" onclick="homePrimaryAction()">${text("免費開始學習", "Start Learning Free")}</button>
          </article>
          <article class="home-price-card">
            <h3>${text("單門能力課程", "Single Capability Course")}</h3>
            <p class="home-price-amount">${getHomeSingleCoursePriceLabel()}</p>
            <p class="home-price-note">${text("一次付費", "One-time payment")}</p>
            <ul>
              <li>${text("選擇一種需要的核心能力", "Choose one core capability")}</li>
              <li>${text("10 堂完整實戰課", "10 complete practice lessons")}</li>
              <li>${text("專屬成果禮包", "Dedicated result package")}</li>
            </ul>
            <button class="home-btn home-btn-secondary" onclick="setRoute('map')">${text("查看所有課程", "View All Courses")}</button>
          </article>
          <article class="home-price-card home-price-featured">
            <span class="home-price-badge">${text("早鳥價", "Early-bird Price")}</span>
            <h3>${text("全站通行證", "All-Access Pass")}</h3>
            ${allAccessInfo.originalPrice != null ? `<p class="home-price-original"><s>${formatTwdPrice(allAccessInfo.originalPrice)}</s></p>` : ""}
            <p class="home-price-amount">${formatTwdPrice(allAccessInfo.price)}</p>
            ${saveAmount > 0 ? `<p class="home-price-note">${text(`現省 ${formatTwdPrice(saveAmount)}`, `Save ${formatTwdPrice(saveAmount)}`)}</p>` : `<p class="home-price-note">${text("一次付費", "One-time payment")}</p>`}
            <ul>
              <li>${text(`解鎖 ${stats.courseCount} 門付費課程`, `Unlock ${stats.courseCount} premium courses`)}</li>
              <li>${text(`共 ${stats.lessonCount} 堂實戰課`, `${stats.lessonCount} practice lessons total`)}</li>
              <li>${text("全部成果禮包", "All result packages")}</li>
              <li>${text("一次付費，非訂閱制", "One-time payment · Not a subscription")}</li>
            </ul>
            <button class="home-btn home-btn-primary" onclick="setRoute('map')">${text("查看全站方案", "View All-Access Plan")}</button>
            ${renderPaymentComingSoonNote()}
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderHomeAudience() {
  return `
    <section class="home-section" id="audience">
      <div class="wrap">
        <div class="home-section-header">
          <h2>${text("無論你在哪個階段，都有清楚的下一步", "Wherever you are, there is a clear next step")}</h2>
        </div>
        <div class="home-audience-grid">
          ${HOME_AUDIENCE.map(item => `
            <button type="button" class="home-audience-card" onclick="homeOpenCapability('${item.courseId}')">
              <span>${state.lang === "zh" ? item.zh : item.en}</span>
              <em>→</em>
            </button>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHomeFinalCTA() {
  const cta = getHomePrimaryAction();
  return `
    <section class="home-cta-banner">
      <div class="wrap home-cta-inner">
        <div>
          <h2>${text("從今天開始，建立真正屬於你的 AI 能力", "Start today and build AI skills that are truly yours")}</h2>
          <p class="home-section-lead">${text(
            "免費課程不需付款。使用 Google 登入後，即可保存學習進度、測驗與成果。",
            "Free courses need no payment. Sign in with Google to save progress, quizzes, and results."
          )}</p>
        </div>
        <div class="home-hero-cta">
          <button class="home-btn home-btn-primary home-btn-light" onclick="${cta.action}">${cta.label}</button>
          <button class="home-btn home-btn-ghost" onclick="${cta.secondaryAction}">${cta.secondaryLabel}</button>
        </div>
      </div>
    </section>
  `;
}

function home() {
  return homeLandingShell(`
    <main class="home-page">
      ${renderHomeHero()}
      ${renderOnboardingCard()}
      ${renderHomeAssessmentNudge()}
      ${renderHomeStats()}
      ${renderHomeCapabilities()}
      ${renderHomeProcess()}
      ${renderHomeResultPackages()}
      ${renderHomePricing()}
      ${renderHomeAudience()}
      ${renderHomeFinalCTA()}
    </main>
  `);
}


function assessment() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${text("AI 能力測驗", "AI Skill Assessment")}</h1>
        <p class="lead">${text("完成測驗後，系統會判斷你的 AI 等級並推薦學習路徑。", "After the assessment, the system will estimate your AI level and recommend a learning path.")}</p>

        ${
          state.assessment
            ? `<section class="panel">
                <h2>${text("你的測驗結果", "Your Result")}</h2>
                <p><b>${text("等級", "Level")}：</b>${state.assessment.level}</p>
                <p><b>${text("分數", "Score")}：</b>${state.assessment.score} / ${ASSESSMENT_QUESTIONS.length * 2}</p>
                <h3>${text("推薦課程", "Recommended Lessons")}</h3>
                <div class="grid three">
                  ${recommendedLessons().map(id => {
                    const lesson = LESSONS.find(l => l.id === id);
                    if (!lesson) return "";
                    return `<article class="card"><h3>${state.lang === "zh" ? lesson.zhTitle : lesson.enTitle}</h3><button class="btn primary" onclick="state.activeLesson='${lesson.id}';setRoute('courses')">${text("開始學習", "Start")}</button></article>`;
                  }).join("")}
                </div>
                <div class="btnrow"><button class="btn secondary" onclick="state.assessment=null;save();render()">${text("重新測驗", "Retake")}</button></div>
              </section>`
            : `<section class="panel">
                ${ASSESSMENT_QUESTIONS.map((q, idx) => `
                  <div class="practice">
                    <h3>${idx + 1}. ${state.lang === "zh" ? q.zh : q.en}</h3>
                    ${q.options.map((option, optionIndex) => `
                      <label class="quiz-option">
                        <input type="radio" name="${q.id}" value="${option.score}">
                        ${state.lang === "zh" ? option.zh : option.en}
                      </label>
                    `).join("")}
                  </div>
                `).join("")}
                <button class="btn primary" onclick="submitAssessment()">${text("查看結果", "See Result")}</button>
              </section>`
        }
      </div>
    </main>
  `);
}

function learningMap() {
  const freeProgress = (typeof v38SafeFreeProgress === "function")
    ? v38SafeFreeProgress()
    : { completed: 0, total: (typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 0), percent: 0 };
  const freePkg = getResultPackageById("free-starter");
  const premiumCourses = getPremiumCourses();
  const allAccess = getAllAccessCourse();

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("所有課程", "All Courses")}</span>
          <h1>${text("所有課程", "All Courses")}</h1>
          <p class="lead">${text(
            "從免費入門到升學、學習、研究、求職、職場與創業，選擇你目前最需要的 AI 能力路徑。",
            "Choose the AI learning path that matches your current goals, from free foundations to study, research, career, work, and startup skills."
          )}</p>
          ${state.user ? renderAccountMembershipSummary() : ""}
        </section>

        <section class="panel map-path-panel">
          <h2 class="map-section-title">${text("免費入門課程", "Free Foundation Course")}</h2>
          <article class="card map-path-card">
            <span class="tag free">${getCourseAccessStatusLabel("free")}</span>
            <h2>${text("免費入門／AI 新手訓練營", "Free Intro / AI Beginner Bootcamp")}</h2>
            <p class="map-card-desc">${text("先建立正確的 AI 使用方法，完成可帶走的入門實作成果。", "Build solid AI foundations and finish practical starter outputs you can keep.")}</p>
            <p><b>${text("堂數", "Lessons")}：</b>${freeProgress.total || (typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 0)} ${text("堂", "lessons")}</p>
            <p><b>${text("最終成果包", "Final package")}：</b>${freePkg ? (state.lang === "zh" ? freePkg.zhTitle : freePkg.enTitle) : text("免費入門成果包", "Free Starter Package")}</p>
            ${renderCoursePriceBlock("free", { compact: true, lessonCount: freeProgress.total || 8 })}
            <p>${text("學習進度", "Progress")}：${state.user ? `${freeProgress.completed}/${freeProgress.total}（${freeProgress.percent}%）` : text("登入後顯示個人進度", "Sign in to view personal progress")}</p>
            <div class="package-progress-track"><div class="package-progress-bar" style="width:${state.user ? freeProgress.percent : 0}%"></div></div>
            <div class="btnrow">
              <button class="btn primary" onclick="setRoute('courses')">${
                state.user && freeProgress.completed > 0 && freeProgress.completed < freeProgress.total
                  ? text("繼續學習", "Continue Learning")
                  : state.user && freeProgress.completed >= freeProgress.total && freeProgress.total > 0
                  ? text("查看成果", "View Results")
                  : state.user
                  ? text("開始學習", "Start Learning")
                  : text("查看課程", "View Course")
              }</button>
              <button class="btn secondary" onclick="openResultPackage('free-starter')">${text("查看成果包", "View Package")}</button>
            </div>
          </article>

          <h2 class="map-section-title" style="margin-top:28px">${text("六門付費課程", "Six Premium Courses")}</h2>
          ${premiumCourses.map((course, index) => {
            const unlocked = hasCourseAccess(course.id);
            const progress = courseProgress(course.id);
            const pkg = getResultPackageByCourseId(course.id);
            const lessonCount = (course.zhLessons || course.enLessons || []).length;
            const primaryLabel = unlocked
              ? (progress.completed > 0 && progress.completed < progress.total
                ? text("繼續學習", "Continue Learning")
                : progress.completed >= progress.total && progress.total > 0
                ? text("查看成果", "View Results")
                : text("開始學習", "Start Learning"))
              : text("查看課程", "View Course");
            const primaryAction = unlocked
              ? (progress.completed >= progress.total && progress.total > 0 && pkg
                ? `openResultPackage('${pkg.id}')`
                : `openCourse('${course.id}')`)
              : `openCourse('${course.id}')`;
            return `
              ${index === 0 ? "" : `<div class="map-path-arrow">↓</div>`}
              <article class="card map-path-card ${unlocked ? "" : "map-path-card-locked"}">
                <span class="tag ${unlocked ? "free" : "premiumtag"}">${getCourseAccessStatusLabel(course.id)}</span>
                <h2>${index + 1}. ${state.lang === "zh" ? course.zhTitle : course.enTitle}</h2>
                <p class="map-card-desc">${state.lang === "zh" ? course.zhDesc : course.enDesc}</p>
                <p><b>${text("堂數", "Lessons")}：</b>${lessonCount} ${text("堂", "lessons")}</p>
                <p><b>${text("最終成果包", "Final package")}：</b>${pkg ? (state.lang === "zh" ? pkg.zhTitle : pkg.enTitle) : "-"}</p>
                ${renderCoursePriceBlock(course, { compact: true, lessonCount, packageName: pkg ? (state.lang === "zh" ? pkg.zhTitle : pkg.enTitle) : "" })}
                <p>${text("學習進度", "Progress")}：${progress.completed}/${progress.total}（${progress.percent}%）</p>
                <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
                <div class="btnrow">
                  <button class="btn ${unlocked ? "primary" : "secondary"}" onclick="${primaryAction}">${primaryLabel}</button>
                  ${unlocked
                    ? `<button class="btn secondary" onclick="openResultPackage('${pkg ? pkg.id : ""}')">${text("查看成果包", "View Package")}</button>`
                    : ""
                  }
                </div>
                ${unlocked ? "" : renderPaymentComingSoonNote()}
              </article>
            `;
          }).join("")}

          ${allAccess ? `
            <div class="map-path-arrow">↓</div>
            <article class="card map-path-card map-all-access-card">
              <span class="tag ${hasAllAccessPass() ? "free" : "premiumtag"}">${getCourseAccessStatusLabel("all-access")}</span>
              <h2>${state.lang === "zh" ? allAccess.zhTitle : allAccess.enTitle}</h2>
              <p class="map-card-desc">${state.lang === "zh" ? allAccess.zhDesc : allAccess.enDesc}</p>
              ${renderCoursePriceBlock(allAccess, { compact: false, showFacts: false })}
              <div class="btnrow">
                ${hasAllAccessPass()
                  ? `<button class="btn primary" onclick="setRoute('result-packages')">${text("查看全部成果包", "View All Packages")}</button>`
                  : `<button class="btn secondary" onclick="setRoute('premium')">${text("查看課程", "View Course")}</button>`
                }
              </div>
            </article>
          ` : ""}
        </section>
      </div>
    </main>
  `);
}

function center() {
  if (!state.authReady) return renderAuthChecking();
  if (!state.user) {
    return renderGoogleLoginGate({
      destination: { route: "center" },
      backRoute: "home",
      title: text("登入後查看學習中心", "Sign in to view Learning Center"),
      message: text(
        "請先使用 Google 登入，才能查看你的學習進度、課程與成果。",
        "Sign in with Google to view your courses, progress, and results."
      ),
      backLabel: text("返回首頁", "Back to Home")
    });
  }

  const badges = earnedBadges();
  const certs = earnedCertificates();
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${text("我的學習中心", "My Learning Center")}</h1>
        <p class="lead">${state.user.email}</p>

        <div class="grid four">
          <article class="card"><span class="tag">${text("進度", "Progress")}</span><h3>${completedCount()} / ${LESSONS.length}</h3><p>${text("已完成課程", "Lessons completed")}</p></article>
          <article class="card"><span class="tag">${text("等級", "Level")}</span><h3>${currentLevel()}</h3><p>${text("目前等級", "Current level")}</p></article>
          <article class="card"><span class="tag">${text("徽章", "Badges")}</span><h3>${badges.length}</h3><p>${text("已獲得徽章", "Badges earned")}</p></article>
          <article class="card"><span class="tag">${text("收藏", "Favorites")}</span><h3>${state.favorites.length}</h3><p>${text("收藏項目", "Saved items")}</p></article>
        </div>

        <section class="panel" style="margin-top:24px">
          <h2>${text("我的徽章", "My Badges")}</h2>
          ${badges.length ? badges.map(badge => `<span class="tag free">${badge}</span>`).join(" ") : `<p>${text("尚未獲得徽章。完成一個學習階段後即可獲得。", "No badges yet. Complete a learning stage to earn one.")}</p>`}
        </section>

        <section class="panel" style="margin-top:24px">
          <h2>${text("我的證書", "My Certificates")}</h2>
          ${certs.length ? certs.map(cert => `<article class="card" style="margin:12px 0"><h3>${cert}</h3><p>AI Skill Bridge · ${new Date().getFullYear()}</p></article>`).join("") : `<p>${text("尚未取得證書。完成完整階段後會出現。", "No certificates yet. Complete a full stage to receive one.")}</p>`}
        </section>

        <section class="panel" style="margin-top:24px">
          <h2>${text("我的筆記", "My Notes")}</h2>
          ${Object.keys(state.notes).length ? Object.entries(state.notes).map(([lessonId, note]) => {
            const lesson = LESSONS.find(item => item.id === lessonId);
            return `<article class="card" style="margin:12px 0"><h3>${lesson ? (state.lang === "zh" ? lesson.zhTitle : lesson.enTitle) : lessonId}</h3><p>${note || "-"}</p></article>`;
          }).join("") : `<p>${text("你還沒有儲存任何筆記。", "You have not saved any notes yet.")}</p>`}
        </section>
      </div>
    </main>
  `);
}

function free() {
  if (!state.authReady) return renderAuthChecking();
  if (!state.user) {
    // Guests may browse the free-course intro, not the lesson body.
    return courses();
  }

  const lesson = LESSONS.find(item => item.id === state.activeLesson) || LESSONS[0];

  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("free.title")}</h1>
        <p class="lead">${L("free.lead")}</p>
        <div class="dashboard">
          <aside>
            <div class="panel">
              ${LESSONS.map(item => `
                <button class="sidebtn ${item.id === lesson.id ? "active" : ""}" onclick="state.activeLesson='${item.id}';save();render()">
                  <span>${state.lang === "zh" ? item.zhTitle : item.enTitle}</span>
                  <span>${state.progress[item.id] ? "✓" : ""}</span>
                </button>
              `).join("")}
            </div>
          </aside>
          <section>${renderLesson(lesson)}</section>
        </div>
      </div>
    </main>
  `);
}

function renderLesson(lesson) {
  let html = `
    <article class="lesson">
      <div class="meta">
        <span class="tag free">${lesson.level}</span>
        <span class="tag">${state.progress[lesson.id] ? L("free.completed") : L("misc.incomplete")}</span>
        <button class="btn secondary" onclick="toggleFavorite('lesson','${lesson.id}')">${isFavorite("lesson", lesson.id) ? "★" : "☆"} ${text("收藏", "Save")}</button>
      </div>
      <h2>${state.lang === "zh" ? lesson.zhTitle : lesson.enTitle}</h2>
      <p>${state.lang === "zh" ? lesson.zhText : lesson.enText}</p>
  `;

  if (lesson.quiz) {
    html += `
      <div class="practice">
        <h3>${L("free.quiz")}</h3>
        <p><b>${state.lang === "zh" ? lesson.quiz.zhQ : lesson.quiz.enQ}</b></p>
        ${lesson.quiz.options.map((option, index) => `
          <button class="quiz-option" onclick="answerQuiz('${lesson.id}', ${index}, this)">
            ${state.lang === "zh" ? option.zh : option.en}
          </button>
        `).join("")}
        <div id="fb-${lesson.id}" class="feedback hidden"></div>
      </div>
    `;
  }

  if (lesson.zhTask) {
    html += `
      <div class="practice">
        <h3>${L("free.practice")}</h3>
        <p>${state.lang === "zh" ? lesson.zhTask : lesson.enTask}</p>
        <textarea placeholder="${L("free.answerPlaceholder")}"></textarea>
        <div class="btnrow">
          <button class="btn secondary" onclick="document.getElementById('ans-${lesson.id}').classList.add('show')">${L("free.reveal")}</button>
        </div>
        <div id="ans-${lesson.id}" class="answer">${state.lang === "zh" ? lesson.zhAnswer : lesson.enAnswer}</div>
      </div>
    `;
  }

  html += `
      <div class="practice">
        <h3>${text("我的筆記", "My Notes")}</h3>
        <textarea id="note-${lesson.id}" placeholder="${text("今天學到什麼？哪裡還不懂？", "What did you learn today? What is still unclear?")}">${state.notes[lesson.id] || ""}</textarea>
        <button class="btn secondary" onclick="saveLessonNote('${lesson.id}')">${text("儲存筆記", "Save Note")}</button>
      </div>
      <button class="btn primary" onclick="completeLesson('${lesson.id}')">${L("free.complete")}</button>
    </article>
  `;

  return html;
}

function answerQuiz(id, index, button) {
  const lesson = LESSONS.find(item => item.id === id);
  const option = lesson.quiz.options[index];
  button.classList.add(option.correct ? "correct" : "wrong");
  const feedback = document.getElementById("fb-" + id);
  feedback.classList.remove("hidden");
  feedback.textContent = (option.correct ? L("misc.correct") : L("misc.wrong")) + " " + (state.lang === "zh" ? lesson.quiz.zhExplain : lesson.quiz.enExplain);
}








function freeBootcampKey(id) {
  const userPart = state.user && state.user.email ? state.user.email : "guest";
  return `asb-free-bootcamp-${userPart}-${id}`;
}

function getFreeOutput(index) {
  return localStorage.getItem(freeBootcampKey(`output-${index}`)) || "";
}

function saveFreeOutput(index) {
  if (!state.user) {
    requireGoogleLogin({ route: "freeLesson", lessonId: index, action: "openFreeLesson" });
    return;
  }
  const el = document.getElementById(`free-output-${index}`);
  if (!el) return;
  localStorage.setItem(freeBootcampKey(`output-${index}`), el.value);
  toast(state.lang === "zh" ? "免費課成果已儲存" : "Free lesson output saved");
}

function isFreeLessonComplete(index) {
  if (!state.user) return false;
  return !!state.progress[freeBootcampLessonId(index)];
}

async function toggleFreeLessonComplete(index) {
  if (!state.user) {
    requireGoogleLogin({ route: "freeLesson", lessonId: index, action: "openFreeLesson" });
    return;
  }
  const lessonId = freeBootcampLessonId(index);
  const next = !isFreeLessonComplete(index);

  state.progress[lessonId] = next;
  save();
  localStorage.setItem(freeBootcampKey(`complete-${index}`), next ? "true" : "false");
  render();

  if (!supabaseClient) {
    toast(next
      ? (state.lang === "zh" ? "已完成免費課（本機）" : "Free lesson completed (local)")
      : (state.lang === "zh" ? "已取消完成" : "Completion removed"));
    return;
  }

  const result = await upsertUserProgress(lessonId, next);
  if (!result.ok) {
    toast(text("進度同步失敗", "Progress sync failed"));
    return;
  }

  toast(next
    ? (state.lang === "zh" ? "已完成免費課並同步" : "Free lesson completed and synced")
    : (state.lang === "zh" ? "已取消完成並同步" : "Completion removed and synced"));
}

function freeBootcampProgress() {
  const total = FREE_BOOTCAMP.length;
  if (!state.user) return { completed: 0, total, percent: 0 };
  const completed = FREE_BOOTCAMP.filter((_, i) => isFreeLessonComplete(i)).length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

function courses() {
  const loggedIn = !!state.user;
  const progress = freeBootcampProgress();
  const startCta = loggedIn
    ? (progress.completed > 0 && progress.completed < progress.total
      ? `<button class="btn primary" onclick="homeContinueLastLearning()">${text("繼續學習", "Continue Learning")}</button>`
      : progress.completed >= progress.total && progress.total > 0
      ? `<button class="btn primary" onclick="openResultPackage('free-starter')">${text("查看成果", "View Results")}</button>`
      : `<button class="btn primary" onclick="openFreeLesson(0)">${text("開始學習", "Start Learning")}</button>`)
    : `<button class="btn primary" onclick='requireGoogleLogin({"route":"freeLesson","lessonId":0,"action":"openFreeLesson"})'>${text("登入後開始", "Sign In to Start")}</button>`;

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("免費入門", "Free Intro")}</span>
          <h1>${text("AI 新手訓練營", "AI Beginner Bootcamp")}</h1>
          <p class="lead">${text(
            "免費區不是只看內容，而是讓你完成 8 個 AI 實作成果。完成後，你會更適合進入付費的大學申請課程。",
            "The free section is not just reading. You will complete 8 real AI outputs and be ready for the premium application course."
          )}</p>
          <p><b>${text("課程堂數", "Lessons")}：</b>${FREE_BOOTCAMP.length}</p>
          <p><b>${text("適合對象", "Who it’s for")}：</b>${text("完全沒學過 AI、想先上手實作的學習者", "Beginners who want hands-on AI practice first")}</p>
          <p><b>${text("學習成果", "Learning outcomes")}：</b>${text("完成 8 項 AI 實作成果，並建立免費成果包", "Complete 8 AI outputs and build a free portfolio")}</p>
          ${loggedIn ? `
            <h2>${text("完成度", "Progress")}：${progress.completed}/${progress.total}（${progress.percent}%）</h2>
            <div class="package-progress-track">
              <div class="package-progress-bar" style="width:${progress.percent}%"></div>
            </div>
          ` : `
            <p class="auth-gate-hint">${text("免費課程可預覽介紹與 Lesson 標題；登入後才能開始學習並保存進度。", "You can preview the intro and lesson titles. Sign in to start learning and save progress.")}</p>
          `}
          <div class="btnrow" style="margin-top:18px">
            ${startCta}
            ${loggedIn ? `
              <button class="btn secondary" onclick="setRoute('learning')">${text("免費 Dashboard", "Free Dashboard")}</button>
              <button class="btn secondary" onclick="setRoute('freePortfolio')">${text("我的免費成果包", "My Free Portfolio")}</button>
            ` : `
              <button class="btn secondary" onclick="setRoute('learning')">${text("我的學習中心", "My Learning Center")}</button>
            `}
          </div>
        </section>

        ${loggedIn && progress.percent === 100 ? `
          <section class="panel">
            <span class="tag free">🏆 ${text("證書", "Certificate")}</span>
            <h2>${text("AI 新手訓練營結業證書", "AI Beginner Bootcamp Certificate")}</h2>
            <p>${text("恭喜你完成 8 堂免費入門課程。下一步可以進入進階付費課程，開始建立你的大學申請包。", "Congratulations on completing all 8 free lessons. Next, enter the premium course to build your University Application Kit.")}</p>
            <button class="btn primary" onclick="setRoute('premium')">${text("前往進階付費課程", "Go to Premium Course")}</button>
          </section>
        ` : ""}

        <div class="grid two">
          ${FREE_BOOTCAMP.map((raw, i) => {
            const lesson = localizeFreeLesson(raw);
            return `
            <article class="card">
              <span class="tag ${loggedIn && isFreeLessonComplete(i) ? "free" : "premiumtag"}">${loggedIn && isFreeLessonComplete(i) ? "✓ " + text("已完成", "Completed") : text(`免費 ${i + 1}`, `Free ${i + 1}`)}</span>
              <h3>${lesson.title}</h3>
              <p>${lesson.goal}</p>
              <p><b>${text("本課成果", "Output")}：</b>${lesson.output}</p>
              ${loggedIn ? `
                <p><b>${text("測驗", "Quiz")}：</b>${(lesson.quizItems || []).length} ${text("題情境測驗", "scenario questions")}</p>
                <button class="btn primary" onclick="openFreeLesson(${i})">${text("開始學習", "Start Learning")}</button>
              ` : `
                <button class="btn primary" onclick='requireGoogleLogin({"route":"freeLesson","lessonId":${i},"action":"openFreeLesson"})'>${text("登入後開始", "Sign In to Start")}</button>
              `}
            </article>
          `;
          }).join("")}
        </div>
      </div>
    </main>
  `);
}

function openFreeLesson(index) {
  state.freeLessonIndex = Number(index) || 0;
  if (!state.authReady) {
    state.route = "freeLesson";
    window.scrollTo(0, 0);
    render();
    return;
  }
  if (!state.user) {
    savePostLoginDestination({
      route: "freeLesson",
      lessonId: state.freeLessonIndex,
      action: "openFreeLesson"
    });
    state.route = "freeLesson";
    window.scrollTo(0, 0);
    render();
    return;
  }
  state.route = "freeLesson";
  setLastStudiedCourse("free-starter", state.freeLessonIndex);
  window.scrollTo(0, 0);
  render();
}

function freeLesson() {
  const index = Number(state.freeLessonIndex || 0);
  const lesson = localizeFreeLesson(FREE_BOOTCAMP[index] || FREE_BOOTCAMP[0]);

  if (!state.authReady) return renderAuthChecking();
  if (!state.user) {
    return renderGoogleLoginGate({
      destination: { route: "freeLesson", lessonId: index, action: "openFreeLesson" },
      backRoute: "courses",
      title: text("登入後開始免費學習", "Sign in to start free learning"),
      message: text(
        "免費課程不需要付款，但必須使用 Google 登入，才能保存學習進度、測驗結果與成果作品。",
        "Free courses do not require payment, but Google sign-in is required to save progress, quizzes, and outputs."
      )
    });
  }

  const output = getFreeOutput(index);

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('courses')">← ${text("回到免費入門", "Back to Free Intro")}</button>

        <section class="panel">
          <span class="tag free">${text(`免費課 ${index + 1}`, `Free Lesson ${index + 1}`)}</span>
          <h1>${lesson.title}</h1>
          <p class="lead">${lesson.goal}</p>
          <p><b>${text("本課成果", "Output")}：</b>${lesson.output}</p>
        </section>

        <section class="panel">
          <h2>${text("學習重點", "Core Concept")}</h2>
          <p>${lesson.concept}</p>
        </section>

        <section class="panel">
          <h2>${text("範例示範", "Example")}</h2>
          <p>${lesson.example}</p>
        </section>

        <section class="panel">
          <h2>${text("情境案例", "Scenario Case")}</h2>
          <p>${lesson.caseStudy || ""}</p>
        </section>

        <section class="panel">
          <h2>${text("常見錯誤", "Common Mistakes")}</h2>
          <ul>
            ${(lesson.commonMistakes || []).map(item => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="panel">
          <h2>${text("Prompt 範本", "Prompt Template")}</h2>
          <div class="promptbox">${lesson.prompt}</div>
        </section>

        <section class="panel">
          <h2>${text("實作任務", "Practice Task")}</h2>
          <ol>
            ${(lesson.task || []).map(step => `<li>${step}</li>`).join("")}
          </ol>
        </section>

        <section class="panel">
          <h2>${text("AI 實作回饋 Prompt", "AI Feedback Prompt")}</h2>
          <p>${text("完成成果後，把你的成果貼到 AI，使用下面這段 Prompt 請 AI 幫你修改。", "After completing your output, paste it into AI and use this prompt for feedback.")}</p>
          <div class="promptbox">${lesson.feedback}</div>
        </section>


        <section class="panel">
          <h2>${text("課後測驗", "Lesson Quiz")}</h2>
          <p>${text("完成測驗可以累積 XP，也能確認你是否真的理解本課。", "Complete the quiz to earn XP and check your understanding.")}</p>
          ${((lesson.quizItems || []).map((q, qIndex) => {
            const selected = getFreeQuizAnswer(index, qIndex);
            return `
              <article class="card" style="margin:16px 0">
                <h3>Q${qIndex + 1}. ${q.q}</h3>
                ${(q.options || []).map((opt, optIndex) => `
                  <button class="quiz-option ${String(selected) === String(optIndex) ? (optIndex === q.answer ? "correct" : "wrong") : ""}" onclick="setFreeQuizAnswer(${index}, ${qIndex}, ${optIndex})">
                    ${String.fromCharCode(65 + optIndex)}. ${opt}
                  </button>
                `).join("")}
                ${selected !== null && selected !== undefined ? `
                  <p><b>${Number(selected) === q.answer ? "✅ " + text("答對", "Correct") : "❌ " + text("再試一次", "Try again")}</b></p>
                  <p>${q.explain}</p>
                ` : ""}
              </article>
            `;
          }).join(""))}
          <p><b>${text("本課測驗分數", "Quiz score")}：</b>${freeQuizScore(index).correct}/${freeQuizScore(index).total}（${freeQuizScore(index).percent}%）</p>
        </section>

        <section class="panel">
          <h2>${text("課程筆記", "Course Notes")}</h2>
          <p>${lesson.notePrompt || text("請寫下這堂課你學到什麼，以及下一次會如何使用 AI。", "Write what you learned and how you will use AI next time.")}</p>
          <textarea id="free-note-${index}" placeholder="${text("在這裡寫下你的課程筆記...", "Write your course notes here...")}">${localStorage.getItem(freeBootcampKey(`note-${index}`)) || ""}</textarea>
          <button class="btn secondary" onclick="localStorage.setItem(freeBootcampKey('note-${index}'), document.getElementById('free-note-${index}').value); toast('${state.lang === "zh" ? "課程筆記已儲存" : "Course note saved"}')">${text("儲存課程筆記", "Save Notes")}</button>
        </section>

        <section class="panel">
          <h2>${text("保存本課成果", "Save Lesson Output")}</h2>
          <textarea id="free-output-${index}" placeholder="${lesson.output}">${output.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}</textarea>
          <div class="btnrow">
            <button class="btn primary" onclick="saveFreeOutput(${index})">${text("儲存成果", "Save Output")}</button>
            <button class="${isFreeLessonComplete(index) ? "btn secondary" : "btn primary"}" onclick="toggleFreeLessonComplete(${index})">
              ${isFreeLessonComplete(index) ? text("取消完成", "Undo Complete") : "✓ " + text("標記本課完成", "Mark Complete")}
            </button>
          </div>
        </section>

        <section class="panel">
          <h2>${text("下一步", "Next Step")}</h2>
          ${
            index < FREE_BOOTCAMP.length - 1
              ? `<button class="btn primary" onclick="openFreeLesson(${index + 1})">${text("前往下一堂免費課", "Next Free Lesson")}</button>`
              : `<button class="btn primary" onclick="setRoute('premium')">${text("前往進階付費課程", "Go to Premium Course")}</button>`
          }
        </section>
      </div>
    </main>
  `);
}



function freePortfolioItems() {
  return FREE_BOOTCAMP.map((raw, index) => {
    const lesson = localizeFreeLesson(raw);
    return {
      id: String(index),
      title: lesson.output || lesson.title,
      lessonTitle: lesson.title,
      value: getFreeOutput(index),
      complete: getFreeOutput(index).trim().length > 0
    };
  });
}

function freePortfolioProgress() {
  const items = freePortfolioItems();
  const completed = items.filter(item => item.complete).length;
  const total = items.length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

function freeQuizKey(index, qIndex) {
  return freeBootcampKey(`quiz-${index}-${qIndex}`);
}

function getFreeQuizAnswer(index, qIndex) {
  return localStorage.getItem(freeQuizKey(index, qIndex));
}

function setFreeQuizAnswer(index, qIndex, answerIndex) {
  if (!state.user) {
    requireGoogleLogin({ route: "freeLesson", lessonId: index, action: "openFreeLesson" });
    return;
  }
  localStorage.setItem(freeQuizKey(index, qIndex), String(answerIndex));
  render();
}

function freeQuizScore(index) {
  const lesson = FREE_BOOTCAMP[index];
  const quiz = lesson.quizItems || [];
  const correct = quiz.filter((q, qIndex) => Number(getFreeQuizAnswer(index, qIndex)) === q.answer).length;
  return { correct, total: quiz.length, percent: quiz.length ? Math.round((correct / quiz.length) * 100) : 0 };
}

function allFreeQuizProgress() {
  const total = FREE_BOOTCAMP.reduce((sum, lesson) => sum + ((lesson.quizItems || []).length), 0);
  let correct = 0;
  FREE_BOOTCAMP.forEach((lesson, index) => {
    (lesson.quizItems || []).forEach((q, qIndex) => {
      if (Number(getFreeQuizAnswer(index, qIndex)) === q.answer) correct += 1;
    });
  });
  return { correct, total, percent: total ? Math.round((correct / total) * 100) : 0 };
}

function freeCertificateUnlocked() {
  const course = freeBootcampProgress();
  const portfolio = freePortfolioProgress();
  const quiz = allFreeQuizProgress();
  return course.completed === course.total && portfolio.completed === portfolio.total && quiz.correct === quiz.total;
}

function freeDashboard() {
  const course = freeBootcampProgress();
  const portfolio = freePortfolioProgress();
  const quiz = allFreeQuizProgress();
  const unlocked = freeCertificateUnlocked();
  const xp = course.completed * 50 + portfolio.completed * 20 + quiz.correct * 10;
  const level = xp >= 800 ? "AI Builder" : xp >= 500 ? "AI Practitioner" : xp >= 200 ? "AI Explorer" : "AI Beginner";

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("學習儀表板", "Learning Dashboard")}</span>
          <h1>${text("我的免費學習 Dashboard", "My Free Learning Dashboard")}</h1>
          <p class="lead">${text("這裡集中顯示免費課程、成果包、測驗、XP 與結業證書。", "This page tracks free lessons, portfolio outputs, quizzes, XP, and certificate.")}</p>
        </section>

        <section class="panel">
          <h2>${text("學習總覽", "Overview")}</h2>
          <div class="grid four">
            <article class="card"><span class="tag">${text("課程", "Lessons")}</span><h3>${course.completed}/${course.total}</h3><p>${course.percent}%</p></article>
            <article class="card"><span class="tag">${text("成果包", "Portfolio")}</span><h3>${portfolio.completed}/${portfolio.total}</h3><p>${portfolio.percent}%</p></article>
            <article class="card"><span class="tag">${text("測驗", "Quiz")}</span><h3>${quiz.correct}/${quiz.total}</h3><p>${quiz.percent}%</p></article>
            <article class="card"><span class="tag">XP</span><h3>${xp}</h3><p>${level}</p></article>
          </div>
        </section>

        <section class="panel">
          <h2>${text("免費成果包完成度", "Free portfolio progress")}</h2>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${portfolio.percent}%"></div></div>
          <button class="btn primary" onclick="setRoute('freePortfolio')">${text("打開我的免費成果包", "Open Free Portfolio")}</button>
        </section>

        <section class="panel">
          <h2>${text("AI 新手訓練營證書", "AI Beginner Bootcamp Certificate")}</h2>
          ${
            unlocked
              ? `<div class="certificate-card">
                  <h2>AI Skill Bridge</h2>
                  <h3>${text("AI 新手訓練營結業證書", "AI Beginner Bootcamp Certificate")}</h3>
                  <p>${text("恭喜完成 8 堂課、8 項成果與全部課後測驗。", "Congratulations on completing 8 lessons, 8 outputs, and all quizzes.")}</p>
                  <p>${state.user?.email || "AI Skill Bridge Learner"} · ${new Date().toLocaleDateString()}</p>
                </div>`
              : `<p>${text("完成 8 堂課、8 項成果與全部測驗後解鎖。", "Complete 8 lessons, 8 outputs, and all quizzes to unlock.")}</p>`
          }
        </section>
      </div>
    </main>
  `);
}

function freePortfolio() {
  if (!state.authReady) return renderAuthChecking();
  if (!state.user) {
    return renderGoogleLoginGate({
      destination: { route: "freePortfolio" },
      backRoute: "courses",
      title: text("登入後開始免費學習", "Sign in to start free learning"),
      message: text(
        "免費成果包介紹可公開瀏覽，但必須使用 Google 登入後，才能查看、輸入或儲存你的成果內容。",
        "You can browse the free portfolio intro, but Google sign-in is required to view, enter, or save your outputs."
      ),
      backLabel: text("返回課程介紹", "Back to Course Intro")
    });
  }

  const items = freePortfolioItems();
  const progress = freePortfolioProgress();

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("免費成果包", "Free Portfolio")}</span>
          <h1>${text("我的免費成果包", "My Free AI Portfolio")}</h1>
          <p class="lead">${text("這裡集中保存你在 8 堂免費課完成的 AI 實作成果。", "This page collects the 8 outputs from the free bootcamp.")}</p>
          <h2>${text("完成度", "Progress")}：${progress.completed}/${progress.total}（${progress.percent}%）</h2>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
        </section>

        <div class="grid">
          ${items.map((item, index) => `
            <section class="panel">
              <span class="tag ${item.complete ? "free" : "premiumtag"}">${item.complete ? text("已完成", "Completed") : text("尚未完成", "Not completed")}</span>
              <h2>${index + 1}. ${item.title}</h2>
              <p>${item.lessonTitle}</p>
              <textarea id="free-portfolio-${index}" placeholder="${item.title}">${String(item.value || "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}</textarea>
              <button class="btn secondary" onclick="if(!state.user){requireGoogleLogin({route:'freePortfolio'});return;} localStorage.setItem(freeBootcampKey('output-${index}'), document.getElementById('free-portfolio-${index}').value); toast('${state.lang === "zh" ? "成果已儲存" : "Output saved"}'); render();">${text("儲存成果", "Save Output")}</button>
            </section>
          `).join("")}
        </div>

        <section class="panel">
          <h2>${text("下一步", "Next Step")}</h2>
          <p>${text("完成免費成果包後，可以進入付費課程建立完整的大學申請包。", "After completing this portfolio, continue to the premium course to build your University Application Kit.")}</p>
          <button class="btn primary" onclick="setRoute('premium')">${text("查看進階付費課程", "View Premium Courses")}</button>
        </section>
      </div>
    </main>
  `);
}



function v38SafeFreeProgress() {
  if (typeof freeBootcampProgress === "function") return freeBootcampProgress();
  if (typeof FREE_BOOTCAMP !== "undefined") {
    const total = FREE_BOOTCAMP.length;
    let completed = 0;
    for (let i = 0; i < total; i++) {
      try {
        if (typeof isFreeLessonComplete === "function" && isFreeLessonComplete(i)) completed++;
      } catch (e) {}
    }
    return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
  }
  return { completed: 0, total: 0, percent: 0 };
}

function v38SafeFreePortfolioProgress() {
  if (typeof freePortfolioProgress === "function") return freePortfolioProgress();
  if (typeof FREE_BOOTCAMP !== "undefined" && typeof getFreeOutput === "function") {
    const total = FREE_BOOTCAMP.length;
    let completed = 0;
    for (let i = 0; i < total; i++) {
      if ((getFreeOutput(i) || "").trim().length > 0) completed++;
    }
    return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
  }
  return { completed: 0, total: 0, percent: 0 };
}

function v38SafeFreeQuizProgress() {
  if (typeof allFreeQuizProgress === "function") return allFreeQuizProgress();
  return { correct: 0, total: 0, percent: 0 };
}

function v38SafeAdmissionsProgress() {
  if (typeof courseProgress === "function") return courseProgress("admissions");
  return { completed: 0, total: 10, percent: 0 };
}

function v38SafePackageProgress() {
  if (typeof applicationPackageProgress === "function") return applicationPackageProgress(false);
  return { completed: 0, total: 10, percent: 0 };
}

function v38FreeCertificateReady() {
  if (typeof freeCertificateUnlocked === "function") return freeCertificateUnlocked();
  const free = v38SafeFreeProgress();
  const portfolio = v38SafeFreePortfolioProgress();
  const quiz = v38SafeFreeQuizProgress();
  return free.total > 0 && free.completed === free.total && portfolio.completed === portfolio.total && (quiz.total === 0 || quiz.correct === quiz.total);
}


function learning() {
  if (!state.authReady) return renderAuthChecking();
  if (!state.user) {
    return renderGoogleLoginGate({
      destination: { route: "learning" },
      backRoute: "home",
      title: text("登入後查看學習中心", "Sign in to view Learning Center"),
      message: text(
        "請先使用 Google 登入，才能查看你的學習進度、課程與成果。",
        "Sign in with Google to view your courses, progress, and results."
      ),
      backLabel: text("返回首頁", "Back to Home")
    });
  }

  const free = v38SafeFreeProgress();
  const freePortfolio = v38SafeFreePortfolioProgress();
  const premiumCourses = getPremiumCourses();
  const ownedCourses = premiumCourses.filter(c => hasCourseAccess(c.id));
  const recommendCourses = premiumCourses.filter(c => !hasCourseAccess(c.id));
  const last = getLastStudiedCourse();
  const unlockedPackages = getResultPackageConfigList().filter(p => hasResultPackageAccess(p.id));
  const totalResultItems = unlockedPackages.reduce((sum, pkg) => {
    const progress = resultPackageProgressByConfig(pkg);
    return sum + progress.completed;
  }, 0);
  const recentResults = getRecentEditedResults(3);

  let continueBlock = "";
  if (last && last.courseId === "free-starter") {
    continueBlock = `
      <p><b>${text("課程", "Course")}：</b>${text("免費入門", "Free Intro")}</p>
      <p><b>${text("目前進度", "Progress")}：</b>${free.completed}/${free.total}（${free.percent}%）</p>
      <button class="btn primary" onclick="setRoute('courses')">${text("繼續學習", "Continue Learning")}</button>
    `;
  } else if (last && last.courseId) {
    const guidance = getPremiumContinueGuidance(last.courseId, last.lessonIndex);
    if (guidance) {
      const lessonLine = state.lang === "zh"
        ? `第 ${guidance.lessonNo} 課：${guidance.lessonTitle}`
        : `Lesson ${guidance.lessonNo}: ${guidance.lessonTitle}`;
      continueBlock = `
        <div class="learning-continue-guide">
          <p><b>${text("課程", "Course")}：</b>${guidance.courseTitle}</p>
          <p><b>${text("目前 Lesson", "Current lesson")}：</b>${lessonLine}</p>
          <p><b>${text("目前進度", "Current progress")}：</b>${guidance.currentLabel}</p>
          <p><b>${text("下一步", "Next step")}：</b>${guidance.nextLabel}</p>
          <button class="btn primary" onclick="continuePremiumLearningStep('${guidance.courseId}', ${guidance.lessonIndex}, '${guidance.nextTab}')">${text("繼續下一步", "Continue next step")}</button>
        </div>
      `;
    } else {
      continueBlock = `
        <p>${text("找不到對應課程進度。", "Could not find matching course progress.")}</p>
        <button class="btn primary" onclick="setRoute('premium')">${text("查看進階課程", "View premium courses")}</button>
      `;
    }
  } else {
    continueBlock = `
      <p>${text("還沒有最近學習紀錄。建議先從免費入門開始。", "No recent learning yet. Start with the free intro.")}</p>
      <button class="btn primary" onclick="setRoute('courses')">${text("開始免費入門", "Start Free Intro")}</button>
    `;
  }

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("學習中心", "Learning Center")}</span>
          <h1>${text("我的學習中心", "My Learning Center")}</h1>
          <p class="lead">${text("繼續學習、管理已擁有課程，並追蹤你的成果禮包進度。", "Continue learning, manage owned courses, and track your result packages.")}</p>
          ${renderAccountMembershipSummary()}
        </section>

        <section class="panel">
          <h2>A. ${text("繼續學習", "Continue Learning")}</h2>
          ${continueBlock}
        </section>

        <section class="panel">
          <h2>B. ${text("我的課程", "My Courses")}</h2>
          <div class="grid two">
            <article class="card">
              <span class="tag free">${text("免費", "Free")}</span>
              <h3>${text("免費入門／AI 新手訓練營", "Free Intro / AI Beginner Bootcamp")}</h3>
              <p>${text("進度", "Progress")}：${free.completed}/${free.total}（${free.percent}%）</p>
              <div class="package-progress-track"><div class="package-progress-bar" style="width:${free.percent}%"></div></div>
              <div class="btnrow">
                <button class="btn primary" onclick="setRoute('courses')">${text("進入課程", "Open Course")}</button>
                <button class="btn secondary" onclick="openResultPackage('free-starter')">${text("成果包", "Package")}</button>
              </div>
            </article>
            ${ownedCourses.map(course => {
              const progress = courseProgress(course.id);
              const pkg = getResultPackageByCourseId(course.id);
              return `
                <article class="card">
                  <span class="tag free">${text("已擁有", "Owned")}</span>
                  <h3>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h3>
                  <p>${text("進度", "Progress")}：${progress.completed}/${progress.total}（${progress.percent}%）</p>
                  <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
                  <div class="btnrow">
                    <button class="btn primary" onclick="openCourse('${course.id}')">${text("進入課程", "Open Course")}</button>
                    <button class="btn secondary" onclick="openResultPackage('${pkg ? pkg.id : ""}')">${text("成果包", "Package")}</button>
                  </div>
                </article>
              `;
            }).join("")}
          </div>

          ${recommendCourses.length ? `
            <h3 style="margin-top:24px">${text("推薦解鎖", "Recommended Unlocks")}</h3>
            <div class="grid two">
              ${recommendCourses.map(course => `
                <article class="card map-path-card-locked">
                  <span class="tag premiumtag">${text("尚未擁有", "Not owned")}</span>
                  <h3>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h3>
                  ${renderCoursePriceBlock(course, { compact: true })}
                  <div class="btnrow">
                    <button class="btn secondary" onclick="openCourse('${course.id}')">${text("查看課程", "View Course")}</button>
                  </div>
                  ${renderPaymentComingSoonNote()}
                </article>
              `).join("")}
            </div>
          ` : ""}
        </section>

        <section class="panel">
          <h2>C. ${text("我的成果", "My Results")}</h2>
          <div class="grid three">
            <article class="card"><span class="tag">${text("成果包", "Packages")}</span><h3>${unlockedPackages.length}</h3><p>${text("已解鎖成果包", "Unlocked packages")}</p></article>
            <article class="card"><span class="tag">${text("項目", "Items")}</span><h3>${totalResultItems}</h3><p>${text("已完成成果項目", "Completed result items")}</p></article>
            <article class="card"><span class="tag">${text("免費", "Free")}</span><h3>${freePortfolio.completed}/${freePortfolio.total}</h3><p>${text("免費舊成果包", "Legacy free portfolio")}</p></article>
          </div>
          ${recentResults.length ? `
            <h3 style="margin-top:18px">${text("最近編輯的成果", "Recently edited results")}</h3>
            <div class="grid two">
              ${recentResults.map(item => `
                <article class="card">
                  <span class="tag free">${item.packageTitle}</span>
                  <h3>${item.itemTitle}</h3>
                  <p>${text("最後儲存", "Last saved")}：${formatCourseResultSavedAt(item.savedAt)}</p>
                  <button class="btn secondary" onclick="openResultPackage('${item.packageId}')">${text("打開成果包", "Open Package")}</button>
                </article>
              `).join("")}
            </div>
          ` : `<p style="margin-top:12px">${text("尚無最近編輯的成果。", "No recently edited results yet.")}</p>`}
          <div class="btnrow" style="margin-top:16px">
            <button class="btn primary" onclick="setRoute('result-packages')">${text("前往成果禮包", "Go to Result Packages")}</button>
          </div>
        </section>
      </div>
    </main>
  `);
}


function premium() {
  let accessBanner = "";
  if (isCreatorAccount()) {
    accessBanner = `<section class="panel account-access-banner" style="margin-bottom:24px">
        <span class="tag free">${text("創辦人存取", "Creator Access")}</span>
        <h2>${text("創辦人帳號已全站開通", "Creator account has full access")}</h2>
        <div class="account-access-banner-meta">${renderAccountIdentity()}</div>
        <p>${text("你目前擁有全站學習權限與 Creator 管理權限。", "You currently have full learning access and Creator admin access.")}</p>
      </section>`;
  } else if (isQueenAccount()) {
    accessBanner = `<section class="panel account-access-banner" style="margin-bottom:24px">
        <span class="tag free">${text("女王存取", "Queen Access")}</span>
        <h2>${text("女王帳號已全站開通", "Queen account has full access")}</h2>
        <div class="account-access-banner-meta">${renderAccountIdentity()}</div>
        <p>${text("你目前擁有全站學習權限，可使用全部付費課程與成果禮包。", "You currently have full learning access to all premium courses and result packages.")}</p>
      </section>`;
  } else if (hasAllAccessPass()) {
    accessBanner = `<section class="panel account-access-banner" style="margin-bottom:24px">
        <span class="tag free">${text("全站通行證", "All-Access Pass")}</span>
        <h2>${text("全站通行證已開通", "All-Access Pass is active")}</h2>
        <div class="account-access-banner-meta">${renderAccountMembershipSummary()}</div>
      </section>`;
  }

  const courseCards = PREMIUM.map(course => {
    const unlocked = hasCourseAccess(course.id);
    const pkg = getResultPackageByCourseId(course.id);
    const lessonCount = (course.zhLessons || course.enLessons || []).length;
    const progress = course.id === "all-access" ? { completed: 0, total: 0 } : courseProgress(course.id);
    const ctaLabel = unlocked
      ? (course.id === "all-access"
        ? text("查看全部成果包", "View All Packages")
        : (progress.completed > 0
          ? text("繼續學習", "Continue Learning")
          : text("開始學習", "Start Learning")))
      : text("查看課程", "View Course");
    const ctaAction = unlocked
      ? (course.id === "all-access"
        ? "setRoute('result-packages')"
        : `openCourse('${course.id}')`)
      : (course.id === "all-access" ? "setRoute('map')" : `openCourse('${course.id}')`);
    return `
      <article class="pricing">
        <span class="tag ${unlocked ? "free" : "premiumtag"}">
          ${getCourseAccessStatusLabel(course.id)}
        </span>
        <h2>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h2>
        <p>${state.lang === "zh" ? course.zhDesc : course.enDesc}</p>
        <p><b>${L("premium.suitableFor")}：</b>${state.lang === "zh" ? course.zhUser : course.enUser}</p>
        <p><b>${L("premium.outcome")}：</b>${state.lang === "zh" ? course.zhOutcome : course.enOutcome}</p>
        <p><b>${text("完成作品", "Final Product")}：</b>${state.lang === "zh" ? course.zhFinalProduct : course.enFinalProduct}</p>
        ${renderCoursePriceBlock(course, {
          compact: course.id !== "all-access",
          showFacts: course.id === "all-access",
          lessonCount,
          packageName: pkg ? (state.lang === "zh" ? pkg.zhTitle : pkg.enTitle) : ""
        })}

        <div class="practice">
          <h3>${text("課程內容", "Course Lessons")}</h3>
          <ol>
            ${(course.chapters
              ? course.chapters.map(ch => state.lang === "zh" ? ch.zhTitle : ch.enTitle)
              : (state.lang === "zh" ? course.zhLessons : course.enLessons)
            ).map(item => `<li>${item}</li>`).join("")}
          </ol>
        </div>

        <div class="practice">
          <h3>${text("你會感受到的價值", "Value You Will Feel")}</h3>
          <ul>
            ${(state.lang === "zh" ? course.zhValue : course.enValue).map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <button type="button" class="btn ${unlocked ? "primary" : "secondary"}" onclick="${ctaAction}">${ctaLabel}</button>
        ${unlocked ? "" : renderPaymentComingSoonNote()}
      </article>
    `;
  }).join("");

  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("premium.title")}</h1>
        <p class="lead">${text(
          "付費區採用「一個完整課程一個價格」的方式，不是單堂課收費。每個課程包含 10 堂課、實作任務、Prompt 模板與最後成果。全站通行證可解鎖全部課程。價格以新臺幣一次付費計價，付款功能建置中。",
          "Premium courses are sold as complete courses, not by individual lessons. Each course includes 10 lessons, practical tasks, prompt templates, and a final product. The All-Access Pass unlocks everything. Prices are one-time TWD payments; payment service is coming soon."
        )}</p>

        ${accessBanner}

        <section class="panel" style="margin-bottom:24px">
          <h2>${text("付費課程總覽", "Premium Course Overview")}</h2>
          <div class="grid three">
            ${PREMIUM.map(course => `
              <article class="card">
                <span class="tag ${hasCourseAccess(course.id) ? "free" : "premiumtag"}">${getCourseAccessStatusLabel(course.id)}</span>
                <h3>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h3>
                <p>${state.lang === "zh" ? course.zhFinalProduct : course.enFinalProduct}</p>
                ${renderCoursePriceBlock(course, { compact: true })}
              </article>
            `).join("")}
          </div>
        </section>

        <div class="grid two">
          ${courseCards}
        </div>

        <section class="panel" style="margin-top:24px">
          <h2>${L("premium.noteTitle")}</h2>
          <p>${L("premium.note")}</p>
        </section>
      </div>
    </main>
  `);
}

function isCreator() {
  return isCreatorAccount();
}

function hasAllAccessPass() {
  return hasAllAccess();
}

function hasCourseAccess(courseId) {
  if (!courseId) return false;
  if (courseId === "free-starter" || courseId === "free") return true;
  if (hasAllAccess()) return true;
  if (courseId === "all-access") return hasAllAccessPass();
  return Array.isArray(state.unlockedCourses) && state.unlockedCourses.includes(courseId);
}

function getResultPackageConfigList() {
  return (typeof RESULT_PACKAGE_CONFIG !== "undefined" && Array.isArray(RESULT_PACKAGE_CONFIG))
    ? RESULT_PACKAGE_CONFIG
    : [];
}

function getResultPackageById(packageId) {
  return getResultPackageConfigList().find(p => p.id === packageId) || null;
}

function getResultPackageByCourseId(courseId) {
  return getResultPackageConfigList().find(p => p.courseId === courseId) || null;
}

function hasResultPackageAccess(packageId) {
  const pkg = getResultPackageById(packageId);
  if (!pkg) return false;
  if (pkg.free) return true;
  if (!pkg.courseId) return false;
  return hasCourseAccess(pkg.courseId);
}

function resultPackageAccessLabel(packageId) {
  const pkg = getResultPackageById(packageId);
  if (!pkg) return text("尚未解鎖", "Locked");
  if (pkg.free) return text("免費", "Free");
  if (hasResultPackageAccess(packageId)) return text("已解鎖", "Unlocked");
  return text("尚未解鎖", "Locked");
}

function resultPackageStorageCourseKey(pkg) {
  if (!pkg) return "free-starter";
  return pkg.courseId || pkg.id || "free-starter";
}

/* Restored after Accordion refactor accidentally removed these helpers.
 * Post-login home/map/course/lesson render still depends on them; missing
 * definitions caused ReferenceError and made Google login appear broken. */
function progressUserKey() {
  return state.user && state.user.email ? state.user.email : "guest";
}

function lessonProgressKey(courseId, lessonIndex) {
  return `asb-lesson-complete-${progressUserKey()}-${courseId}-${Number(lessonIndex)}`;
}

function isLessonComplete(courseId, lessonIndex) {
  try {
    return localStorage.getItem(lessonProgressKey(courseId, lessonIndex)) === "true";
  } catch (error) {
    return false;
  }
}

function isLessonUnlocked(courseId, lessonIndex) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  if (!item) return false;
  if (!item.sequentialUnlock) return true;
  const index = Number(lessonIndex);
  if (index <= 0) return true;
  return isLessonComplete(courseId, index - 1);
}

function courseProgress(courseId) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  if (!item) return { completed: 0, total: 0, percent: 0 };
  const lessons = item.zhLessons || item.enLessons || [];
  const completed = lessons.filter((_, i) => isLessonComplete(courseId, i)).length;
  const total = lessons.length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

function setLessonComplete(courseId, lessonIndex, value = true) {
  try {
    localStorage.setItem(lessonProgressKey(courseId, lessonIndex), value ? "true" : "false");
    currentCourseId = courseId;
    currentLessonIndex = Number(lessonIndex);
    toast(value ? (state.lang === "zh" ? "已標記本課完成" : "Lesson marked complete") : (state.lang === "zh" ? "已取消完成" : "Completion removed"));
    render();
  } catch (error) {
    toast(state.lang === "zh" ? "更新失敗，請確認瀏覽器允許本機儲存" : "Update failed. Please allow local storage.");
  }
}

function openCourse(courseId) {
  currentCourseId = courseId;
  currentLessonIndex = 0;
  state.route = "course";
  window.scrollTo(0, 0);
  render();
}

function openLesson(index) {
  const item = (typeof PREMIUM !== "undefined" && currentCourseId)
    ? PREMIUM.find(p => p.id === currentCourseId)
    : null;
  const lessonIndex = Number(index);
  if (item && item.sequentialUnlock && !isLessonUnlocked(item.id, lessonIndex)) {
    toast(state.lang === "zh" ? "請先完成上一課再解鎖" : "Complete the previous lesson to unlock this one");
    return;
  }
  currentLessonIndex = lessonIndex;
  if (currentCourseId) setLastStudiedCourse(currentCourseId, lessonIndex);
  state.route = "lesson";
  window.scrollTo(0, 0);
  render();
}

function openNextLesson() {
  const item = (typeof PREMIUM !== "undefined" && currentCourseId)
    ? PREMIUM.find(p => p.id === currentCourseId)
    : null;
  const lessons = item ? (state.lang === "zh" ? item.zhLessons : item.enLessons) : [];
  const max = Math.max(lessons.length - 1, 0);
  const nextIndex = Math.min(Number(currentLessonIndex || 0) + 1, max);
  if (item && item.sequentialUnlock && !isLessonUnlocked(item.id, nextIndex)) {
    toast(state.lang === "zh" ? "請先標記本課完成，才能進入下一課" : "Mark this lesson complete before opening the next one");
    return;
  }
  currentLessonIndex = nextIndex;
  state.route = "lesson";
  window.scrollTo(0, 0);
  render();
}

function openPrevLesson() {
  currentLessonIndex = Math.max(Number(currentLessonIndex || 0) - 1, 0);
  state.route = "lesson";
  window.scrollTo(0, 0);
  render();
}

function getCourseDesignMeta(courseId) {
  if (typeof COURSE_DESIGN_META !== "undefined" && COURSE_DESIGN_META[courseId]) {
    return COURSE_DESIGN_META[courseId];
  }
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  const pkg = typeof RESULT_PACKAGE_CONFIG !== "undefined"
    ? RESULT_PACKAGE_CONFIG.find(p => p.courseId === courseId)
    : null;
  if (!item) return null;
  return {
    zhCapability: pkg ? pkg.zhCapability : (state.lang === "zh" ? item.zhFinalProduct : item.enFinalProduct),
    enCapability: pkg ? pkg.enCapability : item.enFinalProduct,
    zhPositioning: item.zhDesc || "",
    enPositioning: item.enDesc || "",
    difficulty: { zh: "標準", en: "Standard" },
    suggestedHours: { zh: "約 10–15 小時", en: "About 10–15 hours" },
    lessonCount: (item.zhLessons || []).length || 10,
    zhCanDo: Array.isArray(item.zhValue) ? item.zhValue : [],
    enCanDo: Array.isArray(item.enValue) ? item.enValue : [],
    useProLayout: true
  };
}

function splitPracticeTasks(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map(String).map(s => s.trim()).filter(Boolean);
  return String(raw).split(/；|;|\n/).map(s => s.trim()).filter(Boolean);
}

function splitConceptSentences(raw) {
  if (!raw) return [];
  return String(raw)
    .split(/(?<=[。！？.!?])\s*/)
    .map(s => s.trim())
    .filter(Boolean);
}

function deriveCaseBlocksFromText(caseText, outcome, mistakes, workflow) {
  const textValue = String(caseText || "").trim();
  const mistakeList = Array.isArray(mistakes) ? mistakes.filter(Boolean) : [];
  const workflowList = Array.isArray(workflow)
    ? workflow.map(step => (typeof step === "string" ? step : (step && step.do) || "")).filter(Boolean)
    : [];
  if (!textValue && !mistakeList.length && !workflowList.length && !outcome) return null;

  let problem = textValue;
  let wrong = mistakeList[0] || "";
  let right = workflowList.slice(0, 2).join(" ") || "";
  let result = outcome || "";

  if (textValue) {
    const later = textValue.split(/(?:後來|之後|改成|正確做法|正確方法)/);
    if (later.length > 1) {
      problem = later[0].replace(/^情境案例[：:]\s*/, "").trim();
      const rest = later.slice(1).join("後來").trim();
      const resultSplit = rest.split(/(?:這時候|結果|最後|於是他才|才看懂|才理解)/);
      right = (resultSplit[0] || rest).trim();
      if (resultSplit.length > 1) result = resultSplit.slice(1).join("").trim() || result;
    } else {
      problem = textValue.replace(/^情境案例[：:]\s*/, "").trim();
    }
    if (!wrong) {
      const wrongMatch = textValue.match(/(?:卻|但是|只是|一堆|太大|不知道)[^。！？.!?]*[。！？.!?]?/);
      if (wrongMatch) wrong = wrongMatch[0].trim();
    }
  }

  if (!wrong && mistakeList[0]) wrong = mistakeList[0];
  if (!right && workflowList.length) right = workflowList.join(" → ");
  if (!result && outcome) result = outcome;

  return {
    problem: problem || textValue || text("請先理解本課情境。", "Start by understanding this lesson’s scenario."),
    wrong: wrong || text("常見錯誤是直接問 AI 泛問，沒有提供自己的條件與目標。", "A common mistake is asking AI vaguely without your own context and goal."),
    right: right || text("先提供條件與目標，再請 AI 依步驟協助。", "Provide your conditions and goal, then ask AI to help step by step."),
    result: result || text("完成本堂可交付成果。", "Produce this lesson’s deliverable.")
  };
}

function normalizePremiumLessonDetail(courseId, lessonDetail) {
  const raw = lessonDetail && typeof lessonDetail === "object" ? lessonDetail : {};
  const zhConcept = raw.zhConcept || "";
  const enConcept = raw.enConcept || zhConcept;
  const zhOutcome = raw.zhOutputName || raw.zhOutcome || "";
  const enOutcome = raw.enOutputName || raw.enOutcome || zhOutcome;
  const zhChecklist = Array.isArray(raw.zhDeliverableChecklist) ? raw.zhDeliverableChecklist : [];
  const enChecklist = Array.isArray(raw.enDeliverableChecklist) ? raw.enDeliverableChecklist : zhChecklist;
  const zhMistakes = Array.isArray(raw.zhCommonMistakes) ? raw.zhCommonMistakes : [];
  const enMistakes = Array.isArray(raw.enCommonMistakes) ? raw.enCommonMistakes : zhMistakes;
  const zhWorkflow = Array.isArray(raw.zhWorkflow) ? raw.zhWorkflow : [];
  const enWorkflow = Array.isArray(raw.enWorkflow) ? raw.enWorkflow : zhWorkflow;
  const zhScorecard = Array.isArray(raw.zhScorecard) ? raw.zhScorecard : [];
  const enScorecard = Array.isArray(raw.enScorecard) ? raw.enScorecard : zhScorecard;

  const zhObjectives = Array.isArray(raw.zhObjectives) && raw.zhObjectives.length
    ? raw.zhObjectives
    : (zhChecklist.length ? zhChecklist.slice(0, 3) : (zhOutcome ? [zhOutcome] : (raw.zhValueTip ? [raw.zhValueTip] : [])));
  const enObjectives = Array.isArray(raw.enObjectives) && raw.enObjectives.length
    ? raw.enObjectives
    : (enChecklist.length ? enChecklist.slice(0, 3) : (enOutcome ? [enOutcome] : (raw.enValueTip ? [raw.enValueTip] : zhObjectives)));

  const zhWhy = raw.zhWhyItMatters && typeof raw.zhWhyItMatters === "object"
    ? raw.zhWhyItMatters
    : {
        problem: splitConceptSentences(zhConcept)[0] || raw.zhValueTip || zhOutcome || "",
        ineffective: zhMistakes[0] || text("沒有清楚目標與檢查標準，AI 輸出很難真正可用。", "Without a clear goal and checks, AI output is hard to use."),
        solution: raw.zhValueTip || zhOutcome || text("用本課流程產出可檢查、可重用的成果。", "Use this lesson’s workflow to produce a checkable, reusable output.")
      };
  const enWhy = raw.enWhyItMatters && typeof raw.enWhyItMatters === "object"
    ? raw.enWhyItMatters
    : {
        problem: splitConceptSentences(enConcept)[0] || raw.enValueTip || enOutcome || zhWhy.problem,
        ineffective: enMistakes[0] || "Without a clear goal and checks, AI output is hard to use.",
        solution: raw.enValueTip || enOutcome || zhWhy.solution
      };

  const zhConceptBlocks = raw.zhConceptBlocks && typeof raw.zhConceptBlocks === "object"
    ? raw.zhConceptBlocks
    : {
        principles: (() => {
          const sentences = splitConceptSentences(zhConcept).slice(0, 3);
          return sentences.length ? sentences : [zhConcept].filter(Boolean);
        })(),
        terms: [],
        criteria: zhChecklist.slice(0, 3),
        boundaries: zhMistakes.slice(0, 2).map(m => `避免：${m}`)
      };
  const enConceptBlocks = raw.enConceptBlocks && typeof raw.enConceptBlocks === "object"
    ? raw.enConceptBlocks
    : {
        principles: (() => {
          const sentences = splitConceptSentences(enConcept).slice(0, 3);
          return sentences.length ? sentences : [enConcept].filter(Boolean);
        })(),
        terms: [],
        criteria: enChecklist.slice(0, 3),
        boundaries: enMistakes.slice(0, 2).map(m => `Avoid: ${m}`)
      };

  const zhCase = raw.zhCaseStudyBlocks && raw.zhCaseStudyBlocks.problem
    ? raw.zhCaseStudyBlocks
    : deriveCaseBlocksFromText(raw.zhCaseStudy || raw.zhScenario || "", zhOutcome, zhMistakes, zhWorkflow);
  const enCase = raw.enCaseStudyBlocks && raw.enCaseStudyBlocks.problem
    ? raw.enCaseStudyBlocks
    : deriveCaseBlocksFromText(raw.enCaseStudy || raw.enScenario || raw.zhCaseStudy || "", enOutcome, enMistakes, enWorkflow);

  const zhWorkflowSteps = Array.isArray(raw.zhWorkflowSteps) && raw.zhWorkflowSteps.length && typeof raw.zhWorkflowSteps[0] === "object"
    ? raw.zhWorkflowSteps
    : zhWorkflow.map(doText => ({ do: doText, why: "", input: "", output: "", check: "" }));
  const enWorkflowSteps = Array.isArray(raw.enWorkflowSteps) && raw.enWorkflowSteps.length && typeof raw.enWorkflowSteps[0] === "object"
    ? raw.enWorkflowSteps
    : enWorkflow.map(doText => ({ do: doText, why: "", input: "", output: "", check: "" }));

  const zhPromptBody = (raw.zhPromptPack && raw.zhPromptPack.body) || raw.zhPrompt || "";
  const enPromptBody = (raw.enPromptPack && raw.enPromptPack.body) || raw.enPrompt || zhPromptBody;
  const zhPromptPack = raw.zhPromptPack && raw.zhPromptPack.body
    ? raw.zhPromptPack
    : (zhPromptBody ? {
        when: text("完成本課實作時使用", "Use when practicing this lesson"),
        fields: [],
        body: zhPromptBody,
        exampleInput: raw.zhExample || "",
        expected: zhOutcome || text("本堂可交付成果", "This lesson’s deliverable")
      } : null);
  const enPromptPack = raw.enPromptPack && raw.enPromptPack.body
    ? raw.enPromptPack
    : (enPromptBody ? {
        when: "Use when practicing this lesson",
        fields: [],
        body: enPromptBody,
        exampleInput: raw.enExample || raw.zhExample || "",
        expected: enOutcome || "This lesson’s deliverable"
      } : null);

  const zhPracticeTasks = splitPracticeTasks(raw.zhPractice);
  const enPracticeTasks = splitPracticeTasks(raw.enPractice);
  const zhPracticeSteps = Array.isArray(raw.zhPracticeSteps) && raw.zhPracticeSteps.length && typeof raw.zhPracticeSteps[0] === "object"
    ? raw.zhPracticeSteps
    : zhPracticeTasks.map((task, i) => ({
        task,
        standard: zhChecklist[i] || text("可清楚說明做了什麼、為何這樣做", "You can clearly explain what you did and why"),
        mistakes: zhMistakes[i] || "",
        check: text("我是否能向別人重講一遍？", "Could I explain this again to someone else?")
      }));
  const enPracticeSteps = Array.isArray(raw.enPracticeSteps) && raw.enPracticeSteps.length && typeof raw.enPracticeSteps[0] === "object"
    ? raw.enPracticeSteps
    : (enPracticeTasks.length ? enPracticeTasks : zhPracticeTasks).map((task, i) => ({
        task,
        standard: enChecklist[i] || zhChecklist[i] || "You can clearly explain what you did and why",
        mistakes: enMistakes[i] || zhMistakes[i] || "",
        check: "Could I explain this again to someone else?"
      }));

  const zhMistakesDetailed = Array.isArray(raw.zhMistakesDetailed) && raw.zhMistakesDetailed.length
    ? raw.zhMistakesDetailed
    : zhMistakes.map(error => ({
        error,
        why: text("缺少條件、目標或查證步驟", "Missing conditions, goals, or verification"),
        fix: text("先補齊自己的資料，再請 AI 依步驟協助，並回到原始資料查證。", "Provide your own details first, ask AI step by step, and verify against source material.")
      }));
  const enMistakesDetailed = Array.isArray(raw.enMistakesDetailed) && raw.enMistakesDetailed.length
    ? raw.enMistakesDetailed
    : enMistakes.map(error => ({
        error,
        why: "Missing conditions, goals, or verification",
        fix: "Provide your own details first, ask AI step by step, and verify against source material."
      }));

  const zhRubric = Array.isArray(raw.zhRubric) && raw.zhRubric.length
    ? raw.zhRubric
    : zhScorecard.map(name => ({
        name,
        levels: {
          incomplete: text("尚未完成或無法使用", "Incomplete or unusable"),
          basic: text("有產出但結構不清", "Produced but unclear"),
          good: text("結構清楚且可修改", "Clear and revisable"),
          ready: text("可正式使用並納入成果包", "Ready to use and save to package")
        }
      }));
  const enRubric = Array.isArray(raw.enRubric) && raw.enRubric.length
    ? raw.enRubric
    : enScorecard.map(name => ({
        name,
        levels: {
          incomplete: "Incomplete or unusable",
          basic: "Produced but unclear",
          good: "Clear and revisable",
          ready: "Ready to use and save to package"
        }
      }));

  const zhSummary = Array.isArray(raw.zhSummary) && raw.zhSummary.length
    ? raw.zhSummary
    : [
        zhOutcome ? text(`本堂成果：${zhOutcome}`, `Deliverable: ${zhOutcome}`) : "",
        text("先理解目標與界線，再進入案例與方法。", "Understand goals and boundaries before method."),
        text("用 Prompt 完成實作後，務必儲存並自我檢查。", "After prompt practice, save output and self-check.")
      ].filter(Boolean);
  const enSummary = Array.isArray(raw.enSummary) && raw.enSummary.length
    ? raw.enSummary
    : [
        enOutcome ? `Deliverable: ${enOutcome}` : "",
        "Understand goals and boundaries before method.",
        "After prompt practice, save output and self-check."
      ].filter(Boolean);

  return {
    ...raw,
    courseId: courseId || raw.courseId || "",
    estimatedTime: raw.estimatedTime || text("約 40–50 分鐘", "About 40–50 min"),
    difficulty: raw.difficulty || text("標準", "Standard"),
    zhOutputName: zhOutcome || text("本堂成果", "Lesson output"),
    enOutputName: enOutcome || "Lesson output",
    zhObjectives,
    enObjectives,
    zhWhyItMatters: zhWhy,
    enWhyItMatters: enWhy,
    zhConceptBlocks,
    enConceptBlocks,
    zhCaseStudyBlocks: zhCase,
    enCaseStudyBlocks: enCase,
    zhWorkflowSteps,
    enWorkflowSteps,
    zhPromptPack,
    enPromptPack,
    zhPracticeSteps,
    enPracticeSteps,
    zhMistakesDetailed,
    enMistakesDetailed,
    zhRubric,
    enRubric,
    zhSummary,
    enSummary
  };
}

function getCourseLessonDetail(courseId, lessonIndex) {
  const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[courseId])
    ? PREMIUM_LESSON_DETAILS[courseId]
    : [];
  const raw = details[lessonIndex] || null;
  if (!raw) return null;
  return normalizePremiumLessonDetail(courseId, raw);
}

function pickLocalized(detail, zhKey, enKey, fallback = "") {
  if (detail == null) return fallback == null ? "" : fallback;
  // Support passing a { zh, en } object directly.
  if (typeof detail === "object" && zhKey == null && (Object.prototype.hasOwnProperty.call(detail, "zh") || Object.prototype.hasOwnProperty.call(detail, "en"))) {
    return localizeValue(detail, fallback == null ? "" : fallback);
  }
  if (typeof detail !== "object") {
    return detail === "" || detail == null ? (fallback == null ? "" : fallback) : detail;
  }
  const preferredKey = state.lang === "zh" ? zhKey : enKey;
  const otherKey = state.lang === "zh" ? enKey : zhKey;
  let preferred = preferredKey != null ? detail[preferredKey] : undefined;
  let other = otherKey != null ? detail[otherKey] : undefined;
  // Nested { zh, en } values
  if (preferred && typeof preferred === "object" && ("zh" in preferred || "en" in preferred)) {
    preferred = localizeValue(preferred, "");
  }
  if (other && typeof other === "object" && ("zh" in other || "en" in other)) {
    other = localizeValue(other, "");
  }
  if (preferred != null && preferred !== "") return preferred;
  if (other != null && other !== "") {
    if (typeof isLocalDevHost === "function" && isLocalDevHost()) {
      console.warn("[I18N] Missing", state.lang, "translation:", preferredKey || "(value)");
    }
    return other;
  }
  return fallback == null ? "" : fallback;
}

function getLessonOutputName(detail) {
  return pickLocalized(detail, "zhOutputName", "enOutputName", text("本堂成果", "Lesson output"));
}

function getLessonObjectives(detail) {
  const list = pickLocalized(detail, "zhObjectives", "enObjectives", []);
  return Array.isArray(list) ? list.filter(Boolean) : [];
}

function getLessonConceptBlocks(detail) {
  const blocks = pickLocalized(detail, "zhConceptBlocks", "enConceptBlocks", null);
  return blocks && typeof blocks === "object" ? blocks : null;
}

function getLessonCaseBlocks(detail) {
  const blocks = pickLocalized(detail, "zhCaseStudyBlocks", "enCaseStudyBlocks", null);
  return blocks && blocks.problem ? blocks : null;
}

function getLessonWorkflowSteps(detail) {
  const steps = pickLocalized(detail, "zhWorkflowSteps", "enWorkflowSteps", []);
  return Array.isArray(steps) ? steps : [];
}

function getLessonPromptPack(detail) {
  const pack = pickLocalized(detail, "zhPromptPack", "enPromptPack", null);
  return pack && pack.body ? pack : null;
}

function getLessonPracticeSteps(detail) {
  const steps = pickLocalized(detail, "zhPracticeSteps", "enPracticeSteps", []);
  return Array.isArray(steps) ? steps : [];
}

function getLessonMistakesDetailed(detail) {
  const list = pickLocalized(detail, "zhMistakesDetailed", "enMistakesDetailed", []);
  return Array.isArray(list) ? list : [];
}

function getLessonRubric(detail) {
  const list = pickLocalized(detail, "zhRubric", "enRubric", []);
  return Array.isArray(list) ? list : [];
}

function getLessonSummaryPoints(detail) {
  const list = pickLocalized(detail, "zhSummary", "enSummary", []);
  return Array.isArray(list) ? list : [];
}

function getLessonWhyItMatters(detail) {
  const why = pickLocalized(detail, "zhWhyItMatters", "enWhyItMatters", null);
  return why && typeof why === "object" ? why : null;
}

function renderLessonDeliverableChecklist(detail) {
  const list = pickLocalized(detail, "zhDeliverableChecklist", "enDeliverableChecklist", []);
  if (!Array.isArray(list) || !list.length) return "";
  return `
    <section class="lesson-block lesson-deliverable-checklist-block">
      <h2>${text("完成檢查表", "Completion checklist")}</h2>
      <p class="lesson-pro-muted">${text("完成前請自行勾選確認（此表不自動完課）。", "Self-check before finishing (this list does not auto-complete the lesson).")}</p>
      <ul class="lesson-deliverable-checklist">
        ${list.map(item => `<li><span class="lesson-check-box" aria-hidden="true">□</span><span>${item}</span></li>`).join("")}
      </ul>
    </section>
  `;
}

function renderLessonNextStep(detail, item, lessonIndex) {
  const nextHint = pickLocalized(detail, "zhNextStep", "enNextStep", "");
  const lessons = item ? (state.lang === "zh" ? item.zhLessons : item.enLessons) : [];
  const nextIndex = Number(lessonIndex) + 1;
  const nextTitle = lessons && lessons[nextIndex] ? lessons[nextIndex] : "";
  if (!nextHint && !nextTitle) return "";
  return `
    <section class="lesson-block lesson-next-step-block">
      <h2>${text("下一步", "Next step")}</h2>
      ${nextHint ? `<p>${nextHint}</p>` : ""}
      ${nextTitle ? `<p class="lesson-pro-muted">${text("下一堂課", "Next lesson")}：${nextTitle}</p>` : `<p class="lesson-pro-muted">${text("這是本課程最後一堂，完成後可到成果包整理總成果。", "This is the final lesson—finish by organizing outputs in your result package.")}</p>`}
    </section>
  `;
}


function findContinueLessonIndex(courseId) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  const total = item ? (item.zhLessons || []).length : 0;
  for (let i = 0; i < total; i++) {
    if (!isLessonComplete(courseId, i) && isLessonUnlocked(courseId, i)) return i;
  }
  return Math.max(total - 1, 0);
}

function copyTextById(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const value = el.innerText || el.textContent || "";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).then(() => {
      toast(state.lang === "zh" ? "已複製 Prompt" : "Prompt copied");
    }).catch(() => {
      toast(state.lang === "zh" ? "複製失敗" : "Copy failed");
    });
    return;
  }
  toast(state.lang === "zh" ? "無法複製" : "Copy unavailable");
}

function premiumQuizKey(courseId, lessonIndex, qIndex) {
  return `asb_premium_quiz_v1_${courseId}_${lessonIndex}_${qIndex}`;
}

function getPremiumQuizAnswer(courseId, lessonIndex, qIndex) {
  return localStorage.getItem(premiumQuizKey(courseId, lessonIndex, qIndex));
}

function setPremiumQuizAnswer(courseId, lessonIndex, qIndex, answerIndex) {
  localStorage.setItem(premiumQuizKey(courseId, lessonIndex, qIndex), String(answerIndex));
  if (isLessonQuizFullyAnswered(courseId, lessonIndex)) {
    updateLessonFlowState(courseId, lessonIndex, { quizCompleted: true });
  }
  render();
}

function toggleCourseSidebar() {
  const layout = document.querySelector(".course-pro-layout, .lesson-pro-layout");
  if (!layout) return;
  const open = layout.classList.toggle("sidebar-open");
  document.querySelectorAll(".lesson-toc-toggle").forEach(btn => {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function renderCourseHeader(item, progress, meta) {
  const unlocked = hasCourseAccess(item.id);
  const capability = meta
    ? (state.lang === "zh" ? meta.zhCapability : meta.enCapability)
    : text("核心能力", "Core capability");
  const positioning = meta
    ? (state.lang === "zh" ? meta.zhPositioning : meta.enPositioning)
    : (state.lang === "zh" ? item.zhDesc : item.enDesc);
  const difficulty = meta && meta.difficulty
    ? (state.lang === "zh" ? meta.difficulty.zh : meta.difficulty.en)
    : text("依課程而定", "Varies");
  const hours = meta && meta.suggestedHours
    ? (state.lang === "zh" ? meta.suggestedHours.zh : meta.suggestedHours.en)
    : text("依進度而定", "Depends on pace");
  const lessonCount = meta && meta.lessonCount
    ? meta.lessonCount
    : (item.zhLessons || []).length;
  const pkgMeta = getCourseResultPackageMeta(item.id);
  const pkgName = state.lang === "zh" ? (pkgMeta.zhName || item.zhFinalProduct) : (pkgMeta.enName || item.enFinalProduct);
  const resultProgress = courseResultPackageProgress(item.id);
  const continueLabel = progress.completed > 0 && progress.completed < progress.total
    ? text("繼續學習", "Continue Learning")
    : text("開始學習", "Start Learning");

  return `
    <section class="course-pro-hero">
      <div class="course-pro-hero-top">
        <button class="btn secondary" onclick="setRoute('map')">← ${text("回到所有課程", "Back to All Courses")}</button>
        <span class="tag ${unlocked ? "free" : "premiumtag"}">${getCourseAccessStatusLabel(item.id)}</span>
      </div>
      <p class="course-pro-kicker">${capability}</p>
      <h1>${state.lang === "zh" ? item.zhTitle : item.enTitle}</h1>
      <p class="course-pro-lead">${positioning || ""}</p>
      ${renderCoursePriceBlock(item, {
        compact: false,
        showFacts: true,
        lessonCount,
        packageName: pkgName || ""
      })}
      <div class="course-pro-meta-grid">
        <div><span>${text("適合對象", "Who it’s for")}</span><strong>${state.lang === "zh" ? item.zhUser : item.enUser}</strong></div>
        <div><span>${text("難度", "Difficulty")}</span><strong>${difficulty}</strong></div>
        <div><span>${text("課程堂數", "Lessons")}</span><strong>${lessonCount} ${text("堂", "lessons")}</strong></div>
        <div><span>${text("建議總學習時間", "Suggested total time")}</span><strong>${hours}</strong></div>
        <div><span>${text("成果包", "Result package")}</span><strong>${pkgName || text("課程成果包", "Course package")}</strong></div>
        <div><span>${text("已儲存成果", "Saved outputs")}</span><strong>${resultProgress.completed}/${resultProgress.total}</strong></div>
      </div>
      <div class="course-pro-progress">
        <div class="course-pro-progress-label">
          <span>${text("目前完成進度", "Current progress")}</span>
          <strong>${progress.completed}/${progress.total}（${progress.percent}%）</strong>
        </div>
        <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
      </div>
      <div class="btnrow course-pro-cta">
        ${unlocked
          ? `<button class="btn primary" onclick="openLesson(${findContinueLessonIndex(item.id)})">${continueLabel}</button>
             <button class="btn secondary" onclick="document.getElementById('course-how-to-learn')?.scrollIntoView({behavior:'smooth',block:'start'})">${text("查看學習方法", "See how to learn")}</button>
             <button class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("查看成果包", "View Result Package")}</button>`
          : `<button class="btn secondary" onclick="document.getElementById('course-curriculum')?.scrollIntoView({behavior:'smooth',block:'start'})">${text("查看課程", "View Course")}</button>`
        }
      </div>
    </section>
  `;
}

function renderCourseOutcomes(meta, item) {
  const list = meta
    ? (state.lang === "zh" ? meta.zhCanDo : meta.enCanDo)
    : (state.lang === "zh" ? item.zhValue : item.enValue);
  if (!Array.isArray(list) || !list.length) return "";
  return `
    <section class="course-pro-panel">
      <h2>${text("完成這門課後，你可以做到", "After this course, you will be able to")}</h2>
      <ul class="course-pro-checklist">
        ${list.map(itemText => `<li>${itemText}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderCourseCurriculum(item, details, progress) {
  const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
  const continueIndex = findContinueLessonIndex(item.id);
  return `
    <section class="course-pro-panel course-pro-curriculum" id="course-curriculum">
      <div class="course-pro-curriculum-head">
        <h2>${text("課程目錄", "Curriculum")}</h2>
        <p>${text("課程完成度", "Course progress")}：${progress.completed}/${progress.total}</p>
      </div>
      <ol class="course-curriculum-list">
        ${lessons.map((title, i) => {
          const detail = getCourseLessonDetail(item.id, i) || details[i] || {};
          const complete = isLessonComplete(item.id, i);
          const unlocked = isLessonUnlocked(item.id, i);
          const current = i === continueIndex && !complete;
          const outcome = getLessonOutputName(detail);
          const time = detail.estimatedTime || "";
          const diff = detail.difficulty || "";
          return `
            <li class="course-curriculum-item ${complete ? "is-complete" : ""} ${current ? "is-current" : ""} ${unlocked ? "" : "is-locked"}">
              <div class="course-curriculum-index">L${i + 1}</div>
              <div class="course-curriculum-body">
                <h3>${title}</h3>
                <p class="course-curriculum-outcome">${outcome}</p>
                <div class="course-curriculum-meta">
                  ${time ? `<span>${time}</span>` : ""}
                  ${diff ? `<span>${diff}</span>` : ""}
                  <span>${complete ? text("已完成", "Completed") : unlocked ? (current ? text("目前課程", "Current") : text("可開始", "Available")) : text("未解鎖", "Locked")}</span>
                </div>
              </div>
              <div class="course-curriculum-action">
                ${unlocked
                  ? `<button class="btn ${current || complete ? "primary" : "secondary"}" onclick="openLesson(${i})">${complete ? text("複習本課", "Review") : text("進入課程", "Open Lesson")}</button>`
                  : `<button class="btn secondary" disabled>${text("先完成上一課", "Complete previous")}</button>`
                }
              </div>
            </li>
          `;
        }).join("")}
      </ol>
    </section>
  `;
}


function course() {
  const item = (typeof PREMIUM !== "undefined" && currentCourseId)
    ? PREMIUM.find(p => p.id === currentCourseId)
    : null;

  if (!item) {
    return shell(`<main class="page"><div class="wrap"><h1>${text("找不到課程", "Course Not Found")}</h1><button class="btn primary" onclick="setRoute('premium')">${text("回到進階付費", "Back to Premium")}</button></div></main>`);
  }

  return shell(renderPremiumCourseOverview(item));
}

function renderPremiumCourseOverview(item) {
  const progress = courseProgress(item.id);
  const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[item.id])
    ? PREMIUM_LESSON_DETAILS[item.id]
    : [];
  const meta = getCourseDesignMeta(item.id);
  const pkgMeta = getCourseResultPackageMeta(item.id);
  const pkgName = state.lang === "zh" ? pkgMeta.zhName : pkgMeta.enName;

  return `
    <main class="page course-pro-page">
      <div class="wrap course-pro-wrap">
        ${renderCourseHeader(item, progress, meta)}
        ${renderCourseHowToLearn(item, progress)}
        ${renderCourseCompletionCriteria(item.id)}
        ${renderCourseOutcomes(meta, item)}
        <div class="course-pro-layout">
          <div class="course-pro-main">
            ${renderCourseCurriculum(item, details, progress)}
          </div>
          <aside class="course-pro-aside">
            <div class="course-pro-aside-card">
              <h2>${text("學習提示", "Study tips")}</h2>
              <ul>
                <li>${text("建議依序完成，以累積可重用模板。", "Complete lessons in order to build reusable templates.")}</li>
                <li>${text("每堂課只追求一個明確成果。", "Aim for one clear deliverable per lesson.")}</li>
                <li>${text("繳交前務必查證 AI 內容。", "Always verify AI content before submitting.")}</li>
              </ul>
              <p class="lesson-pro-muted">${text("成果包", "Package")}：${pkgName}</p>
              <button class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("打開成果包", "Open Result Package")}</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  `;
}




const LESSON_FLOW_STORAGE_KEY = "asb_lesson_learning_flow_v1";
const LESSON_ONBOARDING_STORAGE_KEY = "asb_lesson_onboarding_seen_v1";
const LESSON_FLOW_STEP_META = [
  {
    id: "overview",
    key: "overviewCompleted",
    weight: 8,
    zh: "先看懂這堂課",
    en: "Understand the Lesson",
    zhBlurb: "目標、概念與為什麼重要",
    enBlurb: "Goals, concepts, and why it matters"
  },
  {
    id: "method",
    key: "scenarioCompleted",
    weight: 10,
    zh: "看案例與方法",
    en: "Review the Example and Method",
    zhBlurb: "情境、做法與操作流程",
    enBlurb: "Example, approach, and workflow"
  },
  {
    id: "practice",
    key: "practiceCompleted",
    weight: 20,
    zh: "使用 Prompt 完成實作",
    en: "Complete the Task with a Prompt",
    zhBlurb: "複製 Prompt 並完成任務",
    enBlurb: "Copy the prompt and finish the task"
  },
  {
    id: "review",
    key: "resultCompleted",
    weight: 10,
    zh: "儲存成果並完成本課",
    en: "Save Your Result and Finish the Lesson",
    zhBlurb: "成果、檢查與標記完成",
    enBlurb: "Result, checklist, and mark complete"
  }
];

function lessonFlowUserKey() {
  if (state.user && state.user.id) return String(state.user.id);
  if (state.user && state.user.email) return String(state.user.email).toLowerCase();
  return progressUserKey();
}

function defaultLessonFlowState() {
  return {
    overviewCompleted: false,
    scenarioCompleted: false,
    practiceCompleted: false,
    resultCompleted: false,
    quizCompleted: false,
    lessonCompleted: false,
    promptOpened: false,
    practiceStarted: false,
    lastActiveStep: "",
    updatedAt: ""
  };
}

function loadLessonFlowStore() {
  try {
    const raw = localStorage.getItem(LESSON_FLOW_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveLessonFlowStore(store) {
  localStorage.setItem(LESSON_FLOW_STORAGE_KEY, JSON.stringify(store));
}

function lessonFlowEntryKey(courseId, lessonIndex) {
  return `${lessonFlowUserKey()}::${courseId || "course"}::${Number(lessonIndex) || 0}`;
}

function getLessonFlowState(courseId = currentCourseId, lessonIndex = currentLessonIndex) {
  const store = loadLessonFlowStore();
  const saved = store[lessonFlowEntryKey(courseId, lessonIndex)] || {};
  const base = defaultLessonFlowState();
  const merged = { ...base, ...saved };
  if (isLessonComplete(courseId, lessonIndex)) {
    merged.lessonCompleted = true;
    merged.overviewCompleted = true;
    merged.scenarioCompleted = true;
    merged.practiceCompleted = true;
    merged.resultCompleted = true;
    merged.quizCompleted = true;
  }
  if (isLessonQuizFullyAnswered(courseId, lessonIndex)) {
    merged.quizCompleted = true;
  }
  const entry = typeof getCourseResultEntry === "function"
    ? getCourseResultEntry(courseId, lessonIndex)
    : null;
  if (entry && typeof isCourseResultEntryComplete === "function" && isCourseResultEntryComplete(entry)) {
    merged.resultCompleted = true;
  }
  return merged;
}

function updateLessonFlowState(courseId, lessonIndex, patch = {}) {
  const store = loadLessonFlowStore();
  const key = lessonFlowEntryKey(courseId, lessonIndex);
  const current = { ...defaultLessonFlowState(), ...(store[key] || {}), ...patch, updatedAt: new Date().toISOString() };
  store[key] = current;
  saveLessonFlowStore(store);
  return current;
}

function isLessonQuizFullyAnswered(courseId, lessonIndex) {
  const detail = getCourseLessonDetail(courseId, lessonIndex) || {};
  const quizItems = pickLocalized(detail, "zhQuizItems", "enQuizItems", []) || [];
  if (!quizItems.length) return true;
  return quizItems.every((_, i) => {
    const v = getPremiumQuizAnswer(courseId, lessonIndex, i);
    return v !== null && v !== undefined && v !== "";
  });
}

function getLessonStepMinutes(detail) {
  const raw = (detail && detail.estimatedTime) || "";
  const match = String(raw).match(/(\d+)/);
  const total = match ? Math.max(Number(match[1]), 20) : 48;
  const weights = LESSON_FLOW_STEP_META.map(step => step.weight);
  const sum = weights.reduce((a, b) => a + b, 0);
  return weights.map(w => Math.max(1, Math.round((total * w) / sum)));
}

const LESSON_QUIZ_FOCUS_KEY = "asb_lesson_quiz_focus_v1";

function lessonQuizFocusStorageId(courseId, lessonIndex) {
  return `${courseId || "course"}:${Number(lessonIndex) || 0}`;
}

function getLessonQuizFocusIndex(courseId, lessonIndex, quizItems) {
  const total = quizItems.length;
  if (!total) return 0;
  try {
    const raw = sessionStorage.getItem(LESSON_QUIZ_FOCUS_KEY);
    const store = raw ? JSON.parse(raw) : {};
    const saved = Number(store[lessonQuizFocusStorageId(courseId, lessonIndex)]);
    if (Number.isFinite(saved) && saved >= 0 && saved < total) return saved;
  } catch (error) {}
  return 0;
}

function setLessonQuizFocusIndex(courseId, lessonIndex, focusIndex) {
  try {
    const raw = sessionStorage.getItem(LESSON_QUIZ_FOCUS_KEY);
    const store = raw ? JSON.parse(raw) : {};
    store[lessonQuizFocusStorageId(courseId, lessonIndex)] = Number(focusIndex) || 0;
    sessionStorage.setItem(LESSON_QUIZ_FOCUS_KEY, JSON.stringify(store));
  } catch (error) {}
}

function advanceLessonQuiz(courseId, lessonIndex, total) {
  const next = Math.min(getLessonQuizFocusIndex(courseId, lessonIndex, Array(total)) + 1, Math.max(total - 1, 0));
  setLessonQuizFocusIndex(courseId, lessonIndex, next);
  render();
}

function getCourseLearningCriteria(courseId) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  const total = item ? (item.zhLessons || []).length : 10;
  let lessonsDone = 0;
  let resultsDone = 0;
  let quizzesDone = 0;
  for (let i = 0; i < total; i++) {
    if (isLessonComplete(courseId, i)) lessonsDone += 1;
    if (isCourseResultEntryComplete(getCourseResultEntry(courseId, i))) resultsDone += 1;
    if (isLessonQuizFullyAnswered(courseId, i)) quizzesDone += 1;
  }
  const pkgProgress = typeof courseResultPackageProgress === "function"
    ? courseResultPackageProgress(courseId)
    : { completed: resultsDone, total, percent: 0 };
  const packageDone = pkgProgress.completed >= pkgProgress.total && pkgProgress.total > 0;
  return {
    total,
    lessonsDone,
    resultsDone,
    quizzesDone,
    packageDone,
    packageProgress: pkgProgress
  };
}

function getPremiumContinueGuidance(courseId, lessonIndex) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  if (!item) return null;
  const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
  const idx = Number(lessonIndex) || 0;
  const flow = getLessonFlowState(courseId, idx);
  let currentLabel = text("尚未開始", "Not started");
  let nextLabel = text("先看懂這堂課", "Understand the lesson");
  let nextTab = "overview";
  if (flow.lessonCompleted || isLessonComplete(courseId, idx)) {
    currentLabel = text("本課已完成", "Lesson completed");
    nextLabel = text("前往下一課或查看成果包", "Go to the next lesson or result package");
    nextTab = "review";
  } else if (!flow.overviewCompleted) {
    currentLabel = text("進行中：先看懂這堂課", "In progress: Understand the Lesson");
    nextLabel = text("閱讀學習目標與核心概念", "Read objectives and core concepts");
    nextTab = "overview";
  } else if (!flow.scenarioCompleted) {
    currentLabel = text("已完成：先看懂這堂課", "Completed: Understand the Lesson");
    nextLabel = text("看案例與方法", "Review scenario and method");
    nextTab = "method";
  } else if (!flow.practiceCompleted) {
    currentLabel = text("已完成：看案例與方法", "Completed: Scenario and Method");
    nextLabel = text("使用 Prompt 完成實作", "Complete the prompt practice");
    nextTab = "practice";
  } else {
    currentLabel = text("已完成：Prompt 實作", "Completed: Prompt Practice");
    nextLabel = text("儲存成果並完成本課", "Save output and complete");
    nextTab = "review";
  }
  return {
    courseId,
    lessonIndex: idx,
    courseTitle: state.lang === "zh" ? item.zhTitle : item.enTitle,
    lessonTitle: lessons[idx] || `Lesson ${idx + 1}`,
    lessonNo: idx + 1,
    currentLabel,
    nextLabel,
    nextTab
  };
}

function continuePremiumLearningStep(courseId, lessonIndex, tabId) {
  currentCourseId = courseId;
  currentLessonIndex = Number(lessonIndex) || 0;
  const stage = resolveLessonStageId(tabId);
  updateLessonFlowState(courseId, currentLessonIndex, {
    lastActiveStep: stage
  });
  try {
    const raw = sessionStorage.getItem(LESSON_TAB_STORAGE_KEY);
    const store = raw ? JSON.parse(raw) : {};
    store[lessonTabStorageId(courseId, currentLessonIndex)] = stage;
    sessionStorage.setItem(LESSON_TAB_STORAGE_KEY, JSON.stringify(store));
  } catch (error) {}
  openLesson(currentLessonIndex);
}

function renderCourseHowToLearn(item, progress) {
  const continueIndex = findContinueLessonIndex(item.id);
  const allDone = progress.total > 0 && progress.completed >= progress.total;
  const hasProgress = progress.completed > 0 || Boolean(getLastStudiedCourse()?.courseId === item.id);
  let cta;
  if (allDone) {
    cta = `<button class="btn primary" onclick="openCourseResultPackage('${item.id}')">${text("查看完整成果包", "View full result package")}</button>`;
  } else if (hasProgress) {
    cta = `<button class="btn primary" onclick="openLesson(${continueIndex})">${text(`繼續第 ${continueIndex + 1} 課`, `Continue Lesson ${continueIndex + 1}`)}</button>`;
  } else {
    cta = `<button class="btn primary" onclick="openLesson(0)">${text("開始第 1 課", "Start Lesson 1")}</button>`;
  }
  const steps = [
    { n: 1, zhTitle: "理解本課重點", enTitle: "Understand the lesson focus", zh: "先閱讀學習目標、核心概念及這堂課的重要性。", en: "Read the objectives, core concepts, and why this lesson matters." },
    { n: 2, zhTitle: "查看案例與方法", enTitle: "Review scenario and method", zh: "理解實際情境、錯誤做法、正確方法與操作流程。", en: "Study the scenario, wrong approach, right method, and workflow." },
    { n: 3, zhTitle: "使用 Prompt 完成實作", enTitle: "Practice with the prompt", zh: "複製 Prompt，替換自己的資料，完成本堂實作任務。", en: "Copy the prompt, replace your details, and finish the practice task." },
    { n: 4, zhTitle: "儲存成果並完成本課", enTitle: "Save output and complete", zh: "把成果存入成果包，完成自我檢查後標記本課完成。", en: "Save to your result package, finish self-check, then mark the lesson complete." }
  ];
  return `
    <section class="course-guide-panel" id="course-how-to-learn">
      <h2>${text("這門課要怎麼學？", "How to Take This Course")}</h2>
      <ol class="course-guide-steps">
        ${steps.map(step => `
          <li>
            <span class="course-guide-step-num">${step.n}</span>
            <div>
              <h3>${state.lang === "zh" ? step.zhTitle : step.enTitle}</h3>
              <p>${state.lang === "zh" ? step.zh : step.en}</p>
            </div>
          </li>
        `).join("")}
      </ol>
      <div class="course-guide-cta">${cta}</div>
    </section>
  `;
}

function renderCourseCompletionCriteria(courseId) {
  const criteria = getCourseLearningCriteria(courseId);
  const packageStatus = criteria.packageDone
    ? text("已完成", "Complete")
    : text("進行中", "In progress");
  const pkgMeta = getCourseResultPackageMeta(courseId);
  const pkgName = state.lang === "zh" ? pkgMeta.zhName : pkgMeta.enName;
  return `
    <section class="course-guide-panel course-criteria-panel">
      <h2>${text("怎樣才算完成這門課？", "How do you complete this course?")}</h2>
      <ol class="course-criteria-list">
        <li>${text(`完成全部 ${criteria.total} 堂課`, `Complete all ${criteria.total} lessons`)}</li>
        <li>${text("每堂至少儲存一份實作成果", "Save at least one output per lesson")}</li>
        <li>${text("完成每堂自我檢查", "Finish each lesson’s self-check")}</li>
        <li>${text(`完成「${pkgName}」`, `Complete “${pkgName}”`)}</li>
      </ol>
      <ul class="course-criteria-status">
        <li><span>${text("已完成課程", "Lessons completed")}</span><strong>${criteria.lessonsDone} / ${criteria.total}</strong></li>
        <li><span>${text("已儲存成果", "Outputs saved")}</span><strong>${criteria.resultsDone} / ${criteria.total}</strong></li>
        <li><span>${text("已完成檢查", "Self-checks done")}</span><strong>${criteria.quizzesDone} / ${criteria.total}</strong></li>
        <li><span>${text("最終成果包", "Final package")}</span><strong>${packageStatus}（${criteria.packageProgress.completed}/${criteria.packageProgress.total}）</strong></li>
      </ul>
    </section>
  `;
}


const LESSON_TAB_STORAGE_KEY = "asb_lesson_active_tab_v1";
const LESSON_TAB_IDS = ["overview", "method", "practice", "review"];
const LESSON_TAB_ALIASES = {
  overview: "overview",
  method: "method",
  practice: "practice",
  review: "review",
  scenario: "method",
  result: "review",
  output: "review"
};

function resolveLessonStageId(tabOrStage) {
  return LESSON_TAB_ALIASES[tabOrStage] || (LESSON_FLOW_STEP_META.some(s => s.id === tabOrStage) ? tabOrStage : "overview");
}

function lessonTabStorageId(courseId, lessonIndex) {
  return `${courseId || "course"}:${Number(lessonIndex) || 0}`;
}

function getFlowStepStatus(flow, stepId, activeStage) {
  const meta = LESSON_FLOW_STEP_META.find(s => s.id === stepId);
  if (!meta) return "todo";
  if (flow[meta.key] || flow.lessonCompleted) return "done";
  if (activeStage === stepId) return "current";
  return "todo";
}

function getRecommendedLessonStage(courseId, lessonIndex) {
  const flow = getLessonFlowState(courseId, lessonIndex);
  if (flow.lessonCompleted || isLessonComplete(courseId, lessonIndex)) return null;
  if (!flow.overviewCompleted) return "overview";
  if (!flow.scenarioCompleted) return "method";
  if (!flow.practiceCompleted) return "practice";
  return "review";
}

function getActiveLessonStage(courseId = currentCourseId, lessonIndex = currentLessonIndex) {
  const flow = getLessonFlowState(courseId, lessonIndex);
  if (flow.lessonCompleted || isLessonComplete(courseId, lessonIndex)) return null;

  const saved = flow.lastActiveStep;
  if (saved && LESSON_FLOW_STEP_META.some(s => s.id === saved)) return saved;

  // Compat: migrate old tab storage into accordion stage
  try {
    const raw = sessionStorage.getItem(LESSON_TAB_STORAGE_KEY);
    const store = raw ? JSON.parse(raw) : {};
    const tab = store[lessonTabStorageId(courseId, lessonIndex)];
    const mapped = tab ? resolveLessonStageId(tab) : "";
    if (mapped && LESSON_FLOW_STEP_META.some(s => s.id === mapped)) {
      updateLessonFlowState(courseId, lessonIndex, { lastActiveStep: mapped });
      return mapped;
    }
  } catch (error) {}

  return getRecommendedLessonStage(courseId, lessonIndex) || "overview";
}

function setLessonStage(stageId, options = {}) {
  const next = resolveLessonStageId(stageId);
  const soft = options === true || Boolean(options && options.softSkipCheck);
  if (soft) {
    const flow = getLessonFlowState(currentCourseId, currentLessonIndex);
    const order = LESSON_FLOW_STEP_META.map(s => s.id);
    const idx = order.indexOf(next);
    if (idx > 0) {
      const prev = LESSON_FLOW_STEP_META[idx - 1];
      if (!flow[prev.key] && !flow.lessonCompleted) {
        toast(text("建議先完成前一個步驟。", "Tip: finish the previous step first."));
      }
    }
  }
  updateLessonFlowState(currentCourseId, currentLessonIndex, { lastActiveStep: next });
  try {
    const raw = sessionStorage.getItem(LESSON_TAB_STORAGE_KEY);
    const store = raw ? JSON.parse(raw) : {};
    store[lessonTabStorageId(currentCourseId, currentLessonIndex)] = next;
    sessionStorage.setItem(LESSON_TAB_STORAGE_KEY, JSON.stringify(store));
  } catch (error) {}
  render();
  const el = document.getElementById(`lesson-stage-${next}`);
  if (el && typeof el.scrollIntoView === "function") {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Backward-compatible alias used by learning-center continue CTA
function setLessonTab(tabId) {
  setLessonStage(tabId, true);
}

function getActiveLessonTab(courseId = currentCourseId, lessonIndex = currentLessonIndex) {
  return getActiveLessonStage(courseId, lessonIndex) || "overview";
}

function dismissLessonOnboarding() {
  try {
    const raw = localStorage.getItem(LESSON_ONBOARDING_STORAGE_KEY);
    const store = raw ? JSON.parse(raw) : {};
    store[lessonFlowUserKey()] = { seenAt: new Date().toISOString() };
    localStorage.setItem(LESSON_ONBOARDING_STORAGE_KEY, JSON.stringify(store));
  } catch (error) {}
  render();
}

function markLessonPromptOpened(courseId = currentCourseId, lessonIndex = currentLessonIndex) {
  updateLessonFlowState(courseId, lessonIndex, { promptOpened: true, practiceStarted: true });
}

function markLessonPracticeStarted(courseId = currentCourseId, lessonIndex = currentLessonIndex) {
  updateLessonFlowState(courseId, lessonIndex, { practiceStarted: true });
}

function advanceLessonFlowStep(fromStepId) {
  const courseId = currentCourseId;
  const lessonIndex = currentLessonIndex;
  const order = LESSON_FLOW_STEP_META.map(s => s.id);
  const idx = order.indexOf(fromStepId);
  const patch = {};
  if (fromStepId === "overview") patch.overviewCompleted = true;
  if (fromStepId === "method") patch.scenarioCompleted = true;
  if (fromStepId === "practice") {
    const flow = getLessonFlowState(courseId, lessonIndex);
    if (!flow.promptOpened && !flow.practiceStarted) {
      toast(text("請先完成實作，再前往儲存成果。", "Please finish practice before saving your output."));
    }
    patch.practiceCompleted = true;
    patch.practiceStarted = true;
  }
  const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : "review";
  patch.lastActiveStep = next;
  updateLessonFlowState(courseId, lessonIndex, patch);
  try {
    const raw = sessionStorage.getItem(LESSON_TAB_STORAGE_KEY);
    const store = raw ? JSON.parse(raw) : {};
    store[lessonTabStorageId(courseId, lessonIndex)] = next;
    sessionStorage.setItem(LESSON_TAB_STORAGE_KEY, JSON.stringify(store));
  } catch (error) {}
  render();
  const el = document.getElementById(`lesson-stage-${next}`);
  if (el && typeof el.scrollIntoView === "function") {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getLessonCompletionGaps(courseId, lessonIndex) {
  const gaps = [];
  const entry = getCourseResultEntry(courseId, lessonIndex);
  if (!isCourseResultEntryComplete(entry)) {
    gaps.push(text("尚未輸入成果（文字或網址至少一項）", "Output is missing (add text or a URL)"));
  }
  if (!isLessonQuizFullyAnswered(courseId, lessonIndex)) {
    gaps.push(text("尚未完成自我檢查", "Self-check is incomplete"));
  }
  return gaps;
}

function completeLessonWithChecks(courseId, lessonIndex) {
  const gaps = getLessonCompletionGaps(courseId, lessonIndex);
  if (gaps.length) {
    updateLessonFlowState(courseId, lessonIndex, {
      lastActiveStep: "review",
      completionGaps: gaps
    });
    toast(gaps[0]);
    render();
    const el = document.querySelector(".lesson-completion-gaps, #lesson-output");
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }
  if (!saveCourseResultEntry(courseId, lessonIndex)) {
    return;
  }
  updateLessonFlowState(courseId, lessonIndex, {
    overviewCompleted: true,
    scenarioCompleted: true,
    practiceCompleted: true,
    resultCompleted: true,
    quizCompleted: true,
    lessonCompleted: true,
    lastActiveStep: "review",
    completionGaps: []
  });
  setLessonComplete(courseId, lessonIndex, true);
}

function getStageStatusLabel(status) {
  if (status === "done") return text("已完成", "Done");
  if (status === "current") return text("目前進行中", "In progress");
  return text("尚未開始", "Not started");
}

function renderLessonPathHint() {
  return `
    <div class="lesson-path-hint">
      <p>${text("依序完成下方四個步驟，就能完成這堂課並將成果存入成果包。", "Complete the four steps below to finish this lesson and save your output.")}</p>
      <details class="lesson-path-hint-details">
        <summary>${text("了解學習方式", "How learning works")}</summary>
        <ol>
          <li>${text("先看懂目標與概念", "Understand goals and concepts")}</li>
          <li>${text("看案例與正確方法", "Review the scenario and method")}</li>
          <li>${text("用 Prompt 完成實作", "Practice with the prompt")}</li>
          <li>${text("儲存成果並完成本課", "Save output and complete")}</li>
        </ol>
      </details>
    </div>
  `;
}

function renderLessonCurrentStepLine(activeStage, flow) {
  if (flow.lessonCompleted) {
    return `<p class="lesson-current-step-line">${text("目前步驟：本課已完成", "Current step: lesson complete")}</p>`;
  }
  const meta = LESSON_FLOW_STEP_META.find(s => s.id === activeStage) || LESSON_FLOW_STEP_META[0];
  return `<p class="lesson-current-step-line">${text("目前步驟", "Current step")}：${state.lang === "zh" ? meta.zh : meta.en}</p>`;
}

function renderLessonStageBody(stageId, item, detail, lessonIndex, flow) {
  if (stageId === "overview") {
    const time = detail.estimatedTime || text("依個人進度", "Self-paced");
    const diff = detail.difficulty || text("標準", "Standard");
    return `
      <div class="lesson-stage-meta-row">
        <span>${text("預估時間", "Time")}：${time}</span>
        <span>${text("難度", "Difficulty")}：${diff}</span>
        <span>${text("本堂成果", "Deliverable")}：${getLessonOutputName(detail)}</span>
      </div>
      ${pickLocalized(detail, "zhValueTip", "enValueTip", "") ? `<p class="lesson-pro-value">${pickLocalized(detail, "zhValueTip", "enValueTip", "")}</p>` : ""}
      ${renderLessonObjectives(detail)}
      ${renderLessonWhyItMatters(detail)}
      ${renderLessonConcept(detail)}
      <div class="lesson-stage-cta">
        <button class="btn primary" type="button" onclick="advanceLessonFlowStep('overview')">${text("我看懂了，繼續看案例", "I understand — continue to scenario")}</button>
      </div>
    `;
  }
  if (stageId === "method") {
    return `
      ${renderLessonScenario(item.id, detail)}
      ${renderLessonWorkflow(detail)}
      ${renderLessonMistakes(detail)}
      <div class="lesson-stage-cta">
        <button class="btn primary" type="button" onclick="advanceLessonFlowStep('method')">${text("我知道怎麼做了，開始實作", "I know what to do — start practice")}</button>
      </div>
    `;
  }
  if (stageId === "practice") {
    return `
      ${renderLessonPrompt(detail, item.id, lessonIndex)}
      ${renderLessonPractice(detail)}
      <div class="lesson-stage-cta">
        <button class="btn primary" type="button" onclick="advanceLessonFlowStep('practice')">${text("我完成實作了，前往儲存成果", "Practice done — save output")}</button>
      </div>
    `;
  }
  const gaps = getLessonCompletionGaps(item.id, lessonIndex);
  return `
    ${renderLessonOutput(item.id, lessonIndex, detail)}
    ${renderLessonDeliverableChecklist(detail)}
    ${renderLessonQuiz(item.id, lessonIndex, detail)}
    ${renderLessonRubric(detail)}
    ${gaps.length ? `<ul class="lesson-completion-gaps">${gaps.map(g => `<li>${g}</li>`).join("")}</ul>` : ""}
    ${renderLessonNextStep(detail, item, lessonIndex)}
    <div class="lesson-stage-cta">
      <button class="btn primary" type="button" onclick="completeLessonWithChecks('${item.id}', ${lessonIndex})">${text("儲存成果並完成本課", "Save output and complete lesson")}</button>
    </div>
  `;
}

function renderLessonAccordionPath(item, detail, lessonIndex, activeStage, flow) {
  const lessonDone = flow.lessonCompleted || isLessonComplete(item.id, lessonIndex);
  return `
    <div class="lesson-path-accordion" role="list">
      ${LESSON_FLOW_STEP_META.map((step, index) => {
        const status = getFlowStepStatus(flow, step.id, activeStage);
        const open = !lessonDone && activeStage === step.id;
        const mark = status === "done" ? "✓" : String(index + 1);
        const skipHint = open && index > 0 && !flow[LESSON_FLOW_STEP_META[index - 1].key] && !lessonDone
          ? `<p class="lesson-skip-hint" role="status">${text("建議先完成前一個步驟。", "Tip: finish the previous step first.")}</p>`
          : "";
        return `
          <section class="lesson-path-stage is-${status} ${open ? "is-open" : ""}" id="lesson-stage-${step.id}" role="listitem">
            <button
              type="button"
              class="lesson-path-stage-header"
              aria-expanded="${open ? "true" : "false"}"
              aria-controls="lesson-stage-body-${step.id}"
              onclick="setLessonStage('${step.id}', true)"
            >
              <span class="lesson-path-stage-mark" aria-hidden="true">${mark}</span>
              <span class="lesson-path-stage-copy">
                <strong>${index + 1}. ${state.lang === "zh" ? step.zh : step.en}</strong>
                <em>${state.lang === "zh" ? step.zhBlurb : step.enBlurb}</em>
              </span>
              <span class="lesson-path-stage-status">${getStageStatusLabel(status)}</span>
              <span class="lesson-path-stage-chevron" aria-hidden="true">${open ? "▾" : "▸"}</span>
            </button>
            ${open ? `
              <div class="lesson-path-stage-body" id="lesson-stage-body-${step.id}">
                ${skipHint}
                ${renderLessonStageBody(step.id, item, detail, lessonIndex, flow)}
              </div>
            ` : ""}
          </section>
        `;
      }).join("")}
    </div>
  `;
}

function renderLessonCompletionCard(item, lessonIndex) {
  const detail = getCourseLessonDetail(item.id, lessonIndex) || {};
  const progress = courseProgress(item.id);
  const remaining = Math.max(progress.total - progress.completed, 0);
  const nextIndex = lessonIndex + 1;
  const isLast = nextIndex >= progress.total;
  return `
    <section class="lesson-complete-card">
      <h2>${text(`第 ${lessonIndex + 1} 課完成`, `Lesson ${lessonIndex + 1} complete`)}</h2>
      <ul class="lesson-complete-meta">
        <li><span>${text("本堂成果", "Deliverable")}</span><strong>${getLessonOutputName(detail)}</strong></li>
        <li><span>${text("儲存狀態", "Save status")}</span><strong>${text("本堂成果已儲存", "Output saved")}</strong></li>
        <li><span>${text("課程進度", "Course progress")}</span><strong>${progress.completed} / ${progress.total}</strong></li>
        <li><span>${text("還剩幾堂", "Remaining")}</span><strong>${remaining}</strong></li>
      </ul>
      <div class="btnrow">
        ${isLast
          ? `<button class="btn primary" onclick="openCourseResultPackage('${item.id}')">${text("查看完整成果包", "View full result package")}</button>`
          : `<button class="btn primary" onclick="openNextLesson()">${text("前往下一課", "Go to next lesson")}</button>`
        }
        <button class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("查看成果包", "View result package")}</button>
      </div>
    </section>
  `;
}

function renderLessonNavigation(item, detail, lessonNo, total, progress) {
  return `
    <section class="lesson-pro-nav">
      <div class="lesson-pro-nav-row">
        <button class="btn secondary" onclick="setRoute('course')">← ${text("返回課程總覽", "Back to Course Overview")}</button>
        <button class="btn secondary lesson-toc-toggle" type="button" onclick="toggleCourseSidebar()" aria-expanded="false">${text("查看課程目錄", "View Curriculum")}</button>
      </div>
      <div class="lesson-pro-nav-status">
        <span>Lesson ${lessonNo} / ${total}</span>
        <span>${text("進度", "Progress")}：${progress.completed}/${progress.total}</span>
      </div>
      <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
      <div class="btnrow lesson-pro-nav-actions">
        <button class="btn secondary" onclick="openPrevLesson()">${text("上一課", "Previous")}</button>
        <button class="btn secondary" onclick="openNextLesson()">${text("下一課", "Next")}</button>
      </div>
    </section>
  `;
}

function renderLessonHeader(detail, lessonNo, activeStage, flow) {
  const title = pickLocalized(detail, "zhTitle", "enTitle", `Lesson ${lessonNo}`);
  const tip = pickLocalized(detail, "zhValueTip", "enValueTip", "");
  return `
    <div class="lesson-pro-header">
      <span class="lesson-pro-eyebrow">Lesson ${lessonNo}</span>
      <h1>${title}</h1>
      ${tip ? `<p class="lesson-pro-value">${tip}</p>` : ""}
      ${renderLessonCurrentStepLine(activeStage, flow)}
    </div>
  `;
}

function renderLessonObjectives(detail) {
  const objectives = getLessonObjectives(detail);
  if (!objectives.length) return "";
  return `
    <section class="lesson-block">
      <h2>${text("本課學習目標", "Learning Objectives")}</h2>
      <ol class="lesson-pro-objectives">
        ${objectives.map(item => `<li>${item}</li>`).join("")}
      </ol>
    </section>
  `;
}

function renderLessonWhyItMatters(detail) {
  const why = getLessonWhyItMatters(detail);
  if (!why) return "";
  return `
    <section class="lesson-block">
      <h2>${text("為什麼這一課重要", "Why This Lesson Matters")}</h2>
      <div class="lesson-pro-why-grid">
        <div><h3>${text("目前問題", "Current problem")}</h3><p>${why.problem || ""}</p></div>
        <div><h3>${text("一般做法為何沒效", "Why usual approaches fail")}</h3><p>${why.ineffective || ""}</p></div>
        <div><h3>${text("本課解法", "This lesson’s solution")}</h3><p>${why.solution || ""}</p></div>
      </div>
    </section>
  `;
}

function renderLessonConcept(detail) {
  const blocks = getLessonConceptBlocks(detail);
  if (!blocks) return "";
  return `
    <section class="lesson-block">
      <h2>${text("核心概念", "Core Concepts")}</h2>
      <div class="lesson-pro-concept-grid">
        <div><h3>${text("核心原則", "Principles")}</h3><ul>${(blocks.principles || []).map(x => `<li>${x}</li>`).join("")}</ul></div>
        <div><h3>${text("關鍵名詞", "Key terms")}</h3><ul>${(blocks.terms || []).map(x => `<li>${x}</li>`).join("")}</ul></div>
        <div><h3>${text("判斷標準", "Criteria")}</h3><ul>${(blocks.criteria || []).map(x => `<li>${x}</li>`).join("")}</ul></div>
        <div><h3>${text("使用界線", "Boundaries")}</h3><ul>${(blocks.boundaries || []).map(x => `<li>${x}</li>`).join("")}</ul></div>
      </div>
    </section>
  `;
}

function renderLessonScenario(courseId, detail) {
  const blocks = getLessonCaseBlocks(detail);
  if (!blocks) return "";
  return `
    <section class="lesson-block lesson-pro-scenario">
      <h2>${getCourseCaseStudyTitle(courseId)}</h2>
      <div class="lesson-scenario-steps">
        <div><span>1</span><h3>${text("情境", "Scenario")}</h3><p>${blocks.problem || ""}</p></div>
        <div><span>2</span><h3>${text("錯誤做法", "Wrong approach")}</h3><p>${blocks.wrong || ""}</p></div>
        <div><span>3</span><h3>${text("正確方法", "Right method")}</h3><p>${blocks.right || ""}</p></div>
        <div><span>4</span><h3>${text("預期成果", "Expected result")}</h3><p>${blocks.result || ""}</p></div>
      </div>
    </section>
  `;
}

function renderLessonWorkflow(detail) {
  const steps = getLessonWorkflowSteps(detail);
  if (!steps.length) return "";
  return `
    <section class="lesson-block">
      <h2>${text("操作流程", "Workflow")}</h2>
      <ol class="lesson-pro-workflow">
        ${steps.map((step, index) => `
          <li>
            <div class="lesson-pro-workflow-index">${index + 1}</div>
            <div>
              <h3>${step.do || ""}</h3>
              ${step.why ? `<p><b>${text("為什麼", "Why")}：</b>${step.why}</p>` : ""}
              ${step.input ? `<p><b>${text("輸入", "Input")}：</b>${step.input}</p>` : ""}
              ${step.output ? `<p><b>${text("應得到", "Expected output")}：</b>${step.output}</p>` : ""}
              ${step.check ? `<p><b>${text("如何檢查", "How to check")}：</b>${step.check}</p>` : ""}
            </div>
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function renderLessonPrompt(detail, courseId, lessonIndex) {
  const pack = getLessonPromptPack(detail);
  if (!pack) return "";
  const promptId = `prompt-${courseId}-${lessonIndex}`;
  const example = pickLocalized(detail, "zhExample", "enExample", "") || pack.exampleInput || "";
  const reminder = pack.revisionReminder
    || text(
      "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。",
      "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review."
    );
  const extensions = Array.isArray(pack.extensions) ? pack.extensions : [];
  return `
    <section class="lesson-block lesson-pro-prompt">
      <h2>${text("Prompt 工作區", "Prompt Workspace")}</h2>
      <p class="lesson-pro-muted"><b>${text("使用時機", "When to use")}：</b>${pack.when || ""}</p>
      ${(pack.fields || []).length ? `<p class="lesson-pro-muted"><b>${text("需要替換的欄位", "Fields to replace")}：</b>${pack.fields.join(" · ")}</p>` : ""}
      <div class="lesson-callout">
        <div class="lesson-callout-head">
          <div>
            <h3>${text("本課主 Prompt", "Main lesson prompt")}</h3>
          </div>
          <button class="btn secondary" type="button" onclick="markLessonPromptOpened('${courseId}', ${lessonIndex}); copyTextById('${promptId}')">${text("複製 Prompt", "Copy Prompt")}</button>
        </div>
        <details class="lesson-accordion" ontoggle="if(this.open){markLessonPromptOpened('${courseId}', ${lessonIndex})}">
          <summary aria-expanded="false">${text("查看完整 Prompt", "View full prompt")}</summary>
          <div class="promptbox" id="${promptId}">${pack.body || ""}</div>
        </details>
        ${example ? `
          <details class="lesson-accordion">
            <summary aria-expanded="false">${text("範例輸入", "Example input")}</summary>
            <p>${example}</p>
          </details>
        ` : ""}
        ${pack.expected ? `
          <details class="lesson-accordion">
            <summary aria-expanded="false">${text("預期輸出", "Expected output")}</summary>
            <p>${pack.expected}</p>
          </details>
        ` : ""}
        ${extensions.map((ext, extIndex) => {
          const extId = `${promptId}-ext-${extIndex}`;
          return `
            <details class="lesson-accordion">
              <summary aria-expanded="false">${ext.title || text("延伸 Prompt", "Extension prompt")}</summary>
              <div class="promptbox" id="${extId}">${ext.body || ""}</div>
              <button class="btn secondary" type="button" onclick="copyTextById('${extId}')">${text("複製延伸 Prompt", "Copy extension")}</button>
            </details>
          `;
        }).join("")}
        <p class="lesson-prompt-reminder">${reminder}</p>
      </div>
    </section>
  `;
}

function renderLessonPractice(detail) {
  const steps = getLessonPracticeSteps(detail);
  if (!steps.length) return "";
  return `
    <section class="lesson-block lesson-pro-practice" id="lesson-practice" onclick="markLessonPracticeStarted()">
      <h2>${text("引導式實作", "Guided Practice")}</h2>
      <ol class="lesson-pro-practice-list">
        ${steps.map((step, index) => `
          <li>
            <h3>${text("步驟", "Step")} ${index + 1}. ${step.task || ""}</h3>
            ${step.standard ? `<p><b>${text("完成標準", "Done standard")}：</b>${step.standard}</p>` : ""}
            ${step.check ? `<p><b>${text("檢查問題", "Check question")}：</b>${step.check}</p>` : ""}
            ${step.mistakes ? `
              <details class="lesson-accordion">
                <summary aria-expanded="false">${text("常見錯誤", "Common mistake")}</summary>
                <p>${step.mistakes}</p>
              </details>
            ` : ""}
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function renderLessonOutput(courseId, lessonIndex, detail) {
  return `
    <section class="lesson-block" id="lesson-output">
      <h2>${text("本堂成果", "Lesson Deliverable")}</h2>
      <p>${text("完成本課後，你應該產出：", "After this lesson, you should produce:")} <b>${getLessonOutputName(detail)}</b></p>
      ${renderLessonResultPackagePanel(courseId, lessonIndex, detail)}
    </section>
  `;
}

function renderLessonQuiz(courseId, lessonIndex, detail) {
  const quizItems = pickLocalized(detail, "zhQuizItems", "enQuizItems", []) || [];
  if (!quizItems.length) return "";
  const focus = getLessonQuizFocusIndex(courseId, lessonIndex, quizItems);
  const q = quizItems[focus];
  const selected = getPremiumQuizAnswer(courseId, lessonIndex, focus);
  const hasSelected = selected !== null && selected !== undefined && selected !== "";
  const correct = Number(selected) === Number(q.answer);
  const answeredCount = quizItems.filter((_, i) => {
    const v = getPremiumQuizAnswer(courseId, lessonIndex, i);
    return v !== null && v !== undefined && v !== "";
  }).length;
  return `
    <section class="lesson-block">
      <h2>${text("自我檢查", "Self-Check")}</h2>
      <p class="lesson-pro-muted">${text("一次一題", "One question at a time")} · ${answeredCount}/${quizItems.length}</p>
      <article class="lesson-pro-quiz-card">
        <h3>Q${focus + 1}. ${q.q}</h3>
        <div class="lesson-pro-quiz-options">
          ${(q.options || []).map((opt, optIndex) => `
            <button type="button" class="quiz-option ${hasSelected && String(selected) === String(optIndex) ? (correct ? "correct" : "wrong") : ""}" onclick="setPremiumQuizAnswer('${courseId}', ${lessonIndex}, ${focus}, ${optIndex})">
              ${String.fromCharCode(65 + optIndex)}. ${opt}
            </button>
          `).join("")}
        </div>
        ${hasSelected ? `<p><b>${correct ? text("正確", "Correct") : text("再想想", "Try again")}</b> ${q.explain || ""}</p>` : ""}
        ${hasSelected && focus < quizItems.length - 1 ? `<button class="btn secondary" type="button" onclick="advanceLessonQuiz('${courseId}', ${lessonIndex}, ${quizItems.length})">${text("下一題", "Next question")}</button>` : ""}
      </article>
    </section>
  `;
}

function renderLessonRubric(detail) {
  const rubric = getLessonRubric(detail);
  if (!rubric.length) return "";
  return `
    <section class="lesson-block">
      <h2>${text("成果評分標準", "Rubric")}</h2>
      <ul class="lesson-rubric-summary">
        ${rubric.map(row => `<li><b>${row.name}</b><span>${text("未完成 → 可以正式使用", "Incomplete → Ready to use")}</span></li>`).join("")}
      </ul>
      <details class="lesson-accordion">
        <summary aria-expanded="false">${text("查看完整評分標準", "View full rubric")}</summary>
        <div class="lesson-pro-rubric">
          ${rubric.map(row => `
            <div>
              <h3>${row.name}</h3>
              <ul>
                <li><b>${text("未完成", "Incomplete")}：</b>${row.levels?.incomplete || ""}</li>
                <li><b>${text("基本完成", "Basic")}：</b>${row.levels?.basic || ""}</li>
                <li><b>${text("良好", "Good")}：</b>${row.levels?.good || ""}</li>
                <li><b>${text("可以正式使用", "Ready")}：</b>${row.levels?.ready || ""}</li>
              </ul>
            </div>
          `).join("")}
        </div>
      </details>
    </section>
  `;
}

function renderLessonMistakes(detail) {
  const mistakes = getLessonMistakesDetailed(detail);
  if (!mistakes.length) return "";
  return `
    <section class="lesson-block lesson-pro-mistakes">
      <h2>${text("常見錯誤與注意事項", "Common Mistakes & Notes")}</h2>
      <details class="lesson-accordion">
        <summary aria-expanded="false">${text("查看常見錯誤詳細說明", "View detailed common mistakes")}</summary>
        <div class="lesson-pro-mistake-list">
          ${mistakes.map(item => `
            <div>
              <p><b>${text("錯誤", "Mistake")}：</b>${item.error || ""}</p>
              ${item.why ? `<p><b>${text("原因", "Why")}：</b>${item.why}</p>` : ""}
              ${item.fix ? `<p><b>${text("改進方式", "Fix")}：</b>${item.fix}</p>` : ""}
            </div>
          `).join("")}
        </div>
      </details>
    </section>
  `;
}

function renderLessonSidebar(item, details, activeIndex) {
  const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
  return `
    <aside class="lesson-pro-sidebar">
      <div class="lesson-pro-sidebar-card">
        <p class="lesson-pro-kicker">${state.lang === "zh" ? item.zhTitle : item.enTitle}</p>
        <h2>${text("課程目錄", "Curriculum")}</h2>
        <ol>
          ${lessons.map((title, i) => {
            const complete = isLessonComplete(item.id, i);
            const unlocked = isLessonUnlocked(item.id, i);
            return `
              <li class="${i === activeIndex ? "is-active" : ""} ${complete ? "is-complete" : ""}">
                <button type="button" ${unlocked ? `onclick="openLesson(${i})"` : "disabled"}>
                  <span>L${i + 1}${complete ? " ✓" : ""}</span>
                  <em>${title.replace(/^第\d+課：/, "").replace(/^Lesson \d+:\s*/, "")}</em>
                </button>
              </li>
            `;
          }).join("")}
        </ol>
        <button class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("查看成果包", "View Result Package")}</button>
      </div>
    </aside>
  `;
}

function renderLessonAccordion(item, detail, lessonIndex, activeStage, flow) {
  return renderLessonAccordionPath(item, detail, lessonIndex, activeStage, flow);
}

function renderLessonAccordionStage(stageId, item, detail, lessonIndex, flow) {
  return renderLessonStageBody(stageId, item, detail, lessonIndex, flow);
}

function completeLessonStage(fromStepId) {
  return advanceLessonFlowStep(fromStepId);
}

function completePremiumLesson(courseId, lessonIndex) {
  return completeLessonWithChecks(courseId, lessonIndex);
}

function saveLessonFlowState(courseId, lessonIndex, patch) {
  return updateLessonFlowState(courseId, lessonIndex, patch);
}

function renderPremiumLessonPage(item, detail, lessonIndex) {
  const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
  const lessonNo = lessonIndex + 1;
  const progress = courseProgress(item.id);
  const flow = getLessonFlowState(item.id, lessonIndex);
  const lessonDone = flow.lessonCompleted || isLessonComplete(item.id, lessonIndex);
  const activeStage = lessonDone ? null : (getActiveLessonStage(item.id, lessonIndex) || "overview");

  return `
    <main class="page lesson-pro-page">
      <div class="wrap lesson-pro-wrap">
        <div class="lesson-pro-layout">
          ${renderLessonSidebar(item, [], lessonIndex)}
          <article class="lesson-pro-content">
            ${renderLessonNavigation(item, detail, lessonNo, lessons.length, progress)}
            ${renderLessonHeader(detail, lessonNo, activeStage || "review", flow)}
            ${lessonDone ? renderLessonCompletionCard(item, lessonIndex) : `
              ${renderLessonPathHint()}
              ${renderLessonAccordion(item, detail, lessonIndex, activeStage, flow)}
            `}
          </article>
        </div>
      </div>
    </main>
  `;
}

function lesson() {
  const item = (typeof PREMIUM !== "undefined" && currentCourseId)
    ? PREMIUM.find(p => p.id === currentCourseId)
    : null;

  if (!item) {
    return shell(`<main class="page"><div class="wrap"><h1>${text("找不到課程", "Course Not Found")}</h1><button class="btn primary" onclick="setRoute('premium')">${text("回到進階付費", "Back to Premium")}</button></div></main>`);
  }

  if (item.sequentialUnlock && !isLessonUnlocked(item.id, currentLessonIndex)) {
    return shell(`
      <main class="page">
        <div class="wrap">
          <button class="btn secondary" onclick="setRoute('course')">← ${text("回到課程首頁", "Back to Course")}</button>
          <section class="panel">
            <span class="tag premiumtag">🔒 ${text("未解鎖", "Locked")}</span>
            <h1>${text("請先完成上一課", "Complete the previous lesson first")}</h1>
            <p class="lead">${text("這門課採循序解鎖。完成上一課並標記完成後，即可開啟本課。", "This course unlocks lessons in order. Mark the previous lesson complete to continue.")}</p>
            <button class="btn primary" onclick="setRoute('course')">${text("回到課程地圖", "Back to Course Map")}</button>
          </section>
        </div>
      </main>
    `);
  }

  const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
  const fallbackTitle = lessons[currentLessonIndex] || lessons[0];
  const detail = getCourseLessonDetail(item.id, currentLessonIndex);
  const lessonNo = currentLessonIndex + 1;

  if (!detail) {
    return shell(`
      <main class="page">
        <div class="wrap">
          <button class="btn secondary" onclick="setRoute('course')">← ${text("回到課程首頁", "Back to Course")}</button>
          <section class="panel">
            <span class="tag">${text(`第 ${lessonNo} 課`, `Lesson ${lessonNo}`)}</span>
            <h1>${fallbackTitle}</h1>
            <p class="lead">${text("這堂課的完整教材會在後續版本補上。", "Full lesson content will be added later.")}</p>
          </section>
        </div>
      </main>
    `);
  }

  return shell(renderPremiumLessonPage(item, detail, currentLessonIndex));
}






const COURSE_RESULT_PACKAGE_STORAGE_KEY = "asb_course_result_packages_v1";

const COURSE_CASE_STUDY_TITLE_FALLBACK = {
  admissions: { zh: "高中生升學情境案例", en: "University Admission Scenario" },
  "college-learning": { zh: "大學生學習情境案例", en: "University Learning Scenario" },
  "research-competition": { zh: "研究、專題與競賽情境案例", en: "Research and Competition Scenario" },
  "career-internship": { zh: "求職與實習情境案例", en: "Career and Internship Scenario" },
  "workplace-productivity": { zh: "職場工作情境案例", en: "Workplace Scenario" },
  "startup-automation": { zh: "創業與自動化情境案例", en: "Entrepreneurship and Automation Scenario" }
};

function getCourseCaseStudyTitle(courseId) {
  const fromContent = (typeof COURSE_CASE_STUDY_LABELS !== "undefined" && COURSE_CASE_STUDY_LABELS[courseId])
    ? COURSE_CASE_STUDY_LABELS[courseId]
    : null;
  const fallback = COURSE_CASE_STUDY_TITLE_FALLBACK[courseId] || { zh: "情境案例", en: "Scenario Case" };
  const label = fromContent || fallback;
  return state.lang === "zh" ? label.zh : label.en;
}

function getCourseResultPackageMeta(courseId) {
  if (typeof COURSE_RESULT_PACKAGE_META !== "undefined" && COURSE_RESULT_PACKAGE_META[courseId]) {
    return COURSE_RESULT_PACKAGE_META[courseId];
  }
  return {
    zhName: "我的課程成果包",
    enName: "My Course Result Package",
    zhPromise: "完成這門課後，你會集中保存 10 堂課成果。",
    enPromise: "After this course, you will keep all 10 lesson outputs in one place.",
    zhFinal: "完成本課 10 堂成果。",
    enFinal: "Complete all 10 lesson outputs."
  };
}

function courseResultPackageUserKey() {
  if (state.user && state.user.id) return String(state.user.id);
  if (state.user && state.user.email) return String(state.user.email);
  return "guest";
}

function loadCourseResultPackagesStore() {
  try {
    const raw = localStorage.getItem(COURSE_RESULT_PACKAGE_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveCourseResultPackagesStore(store) {
  localStorage.setItem(COURSE_RESULT_PACKAGE_STORAGE_KEY, JSON.stringify(store));
}

function getCourseResultEntry(courseId, lessonIndex) {
  const store = loadCourseResultPackagesStore();
  const userKey = courseResultPackageUserKey();
  const lessonKey = String(lessonIndex);
  const entry = (((store[userKey] || {})[courseId] || {})[lessonKey]) || {};
  return {
    text: typeof entry.text === "string" ? entry.text : "",
    url: typeof entry.url === "string" ? entry.url : "",
    savedAt: entry.savedAt || ""
  };
}

function isCourseResultEntryComplete(entry) {
  const text = (entry && entry.text ? entry.text : "").trim();
  const url = (entry && entry.url ? entry.url : "").trim();
  return Boolean(text || url);
}

function courseResultPackageProgress(courseId) {
  const pkg = getResultPackageByCourseId(courseId) || getResultPackageById(courseId);
  const total = pkg ? Number(pkg.totalItems) || 10 : 10;
  const storageKey = pkg ? resultPackageStorageCourseKey(pkg) : courseId;
  let completed = 0;
  for (let i = 0; i < total; i++) {
    if (isCourseResultEntryComplete(getCourseResultEntry(storageKey, i))) completed += 1;
  }
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function resultPackageProgressByConfig(pkg) {
  if (!pkg) return { completed: 0, total: 0, percent: 0 };
  const storageKey = resultPackageStorageCourseKey(pkg);
  const total = Number(pkg.totalItems) || (pkg.items ? pkg.items.length : 10);
  let completed = 0;
  for (let i = 0; i < total; i++) {
    if (isCourseResultEntryComplete(getCourseResultEntry(storageKey, i))) completed += 1;
  }
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function hasApplicationPackageAccess() {
  return typeof hasCourseAccess === "function" && hasCourseAccess("admissions");
}

function applicationPackageAccessLabel() {
  if (hasApplicationPackageAccess()) return text("已解鎖", "Unlocked");
  return text("尚未解鎖", "Locked");
}

function getResultPackagesHubEntries() {
  const packages = getResultPackageConfigList().filter(pkg => pkg.id !== "pkg-admissions");
  const order = [
    "free-starter",
    "pkg-research-competition",
    "pkg-career-internship",
    "pkg-workplace-productivity",
    "pkg-startup-automation",
    "pkg-college-learning"
  ];
  const sorted = [];
  order.forEach(id => {
    const pkg = packages.find(p => p.id === id);
    if (pkg) sorted.push({ type: "package", pkg });
  });
  packages.forEach(pkg => {
    if (!sorted.some(entry => entry.type === "package" && entry.pkg.id === pkg.id)) {
      sorted.push({ type: "package", pkg });
    }
  });
  const freeIndex = sorted.findIndex(entry => entry.type === "package" && entry.pkg.id === "free-starter");
  sorted.splice(freeIndex >= 0 ? freeIndex + 1 : 0, 0, { type: "application-kit" });
  return sorted;
}

function renderApplicationKitHubCard(index) {
  const unlocked = hasApplicationPackageAccess();
  const needsLogin = !state.user;
  const progress = (!needsLogin && unlocked)
    ? applicationPackageProgress(false)
    : { completed: 0, total: APPLICATION_PACKAGE_ITEMS.length, percent: 0 };
  const course = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === "admissions") : null;
  const price = course ? formatTwdPrice(course.price) : "";

  return `
    <article class="card result-package-card ${unlocked && !needsLogin ? "" : "result-package-card-locked"}">
      <span class="tag ${unlocked ? "free" : "premiumtag"}">${applicationPackageAccessLabel()}</span>
      <h2>${index}. ${text("大學申請包", "University Application Kit")}</h2>
      <p><b>${text("主題", "Topics")}：</b>${text("大學申請 · 學習歷程 · 面試準備 · 申請文件", "University apps · Learning portfolio · Interview prep · Application docs")}</p>
      <p><b>${text("所屬課程", "Course")}：</b>${text("高中生申請大學 AI 實戰課", "AI University Application Course")}</p>
      <p>${text(
        "整合申請動機、自傳、學習歷程、面試準備與資料檢查工具，協助你完成完整的大學申請成果。",
        "Create a complete University Application Kit with personal statements, learning portfolios, interview preparation, and application checklists."
      )}</p>
      ${!unlocked && price ? `<p class="course-result-meta">${text("課程售價", "Course Price")}：<span class="price-nowrap">${price}</span> · ${text("一次付費", "One-time payment")}</p>` : ""}
      <p>${text("完成進度", "Progress")}：${needsLogin ? text("登入後顯示", "Sign in to view") : `${progress.completed} / ${progress.total}（${progress.percent}%）`}</p>
      <div class="package-progress-track"><div class="package-progress-bar" style="width:${needsLogin ? 0 : progress.percent}%"></div></div>
      <div class="btnrow">
        ${needsLogin
          ? `<button class="btn primary" onclick='requireGoogleLogin({"route":"applicationPackage"})'>${text("開啟申請包", "Open Application Kit")}</button>`
          : unlocked
          ? `<button class="btn primary" onclick="goApplicationPackage()">${text("開啟申請包", "Open Application Kit")}</button>`
          : `<button class="btn secondary" onclick="goApplicationPackage()">${text("已鎖定", "Locked")}</button>
             <button class="btn secondary" onclick="openCourse('admissions')">${text("查看課程", "View Course")}</button>`
        }
      </div>
      ${!unlocked && !needsLogin ? renderPaymentComingSoonNote() : ""}
      ${!unlocked && !needsLogin ? `<p class="course-result-meta">${text("價格", "Price")}：${price}</p>` : ""}
    </article>
  `;
}

function saveCourseResultEntry(courseId, lessonIndex, options = {}) {
  const pkg = getResultPackageByCourseId(courseId) || getResultPackageById(courseId);
  if (pkg && pkg.free && !state.user) {
    requireGoogleLogin({
      route: "courseResultPackage",
      packageId: pkg.id,
      action: "openResultPackage"
    });
    return false;
  }
  if (pkg && !pkg.free && pkg.courseId && !hasCourseAccess(pkg.courseId)) {
    toast(state.lang === "zh" ? "請先解鎖此課程" : "Please unlock this course first");
    return false;
  }
  if (!pkg && courseId !== "free-starter" && !hasCourseAccess(courseId)) {
    toast(state.lang === "zh" ? "請先解鎖此課程" : "Please unlock this course first");
    return false;
  }

  const storageKey = pkg ? resultPackageStorageCourseKey(pkg) : courseId;
  const textEl = document.getElementById(`course-result-text-${storageKey}-${lessonIndex}`);
  const urlEl = document.getElementById(`course-result-url-${storageKey}-${lessonIndex}`);
  const textValue = textEl ? textEl.value : (options.text || "");
  const url = urlEl ? urlEl.value : (options.url || "");
  if (!String(textValue).trim() && !String(url).trim()) {
    toast(state.lang === "zh" ? "尚未輸入成果，沒有可儲存的內容" : "Nothing to save yet—add result text or a link first");
    return false;
  }
  const store = loadCourseResultPackagesStore();
  const userKey = courseResultPackageUserKey();
  if (!store[userKey]) store[userKey] = {};
  if (!store[userKey][storageKey]) store[userKey][storageKey] = {};
  store[userKey][storageKey][String(lessonIndex)] = {
    text: textValue,
    url,
    savedAt: new Date().toISOString()
  };
  saveCourseResultPackagesStore(store);
  toast(state.lang === "zh" ? "已儲存到課程成果包" : "Saved to course result package");
  if (state.route === "courseResultPackage" || state.route === "lesson" || state.route === "result-packages") {
    render();
  }
  return true;
}

function renderResultPackageHubCard(pkg, index) {
  const needsLogin = pkg.free && !state.user;
  const unlocked = hasResultPackageAccess(pkg.id);
  const progress = (!state.user && pkg.free)
    ? { completed: 0, total: Number(pkg.totalItems) || (pkg.items ? pkg.items.length : 0), percent: 0 }
    : resultPackageProgressByConfig(pkg);
  const course = pkg.courseId && typeof PREMIUM !== "undefined"
    ? PREMIUM.find(p => p.id === pkg.courseId)
    : null;
  const price = pkg.free ? formatTwdPrice(0) : (course ? formatTwdPrice(course.price) : "");

  return `
    <article class="card result-package-card ${unlocked && !needsLogin ? "" : "result-package-card-locked"}">
      <span class="tag ${pkg.free || unlocked ? "free" : "premiumtag"}">${resultPackageAccessLabel(pkg.id)}</span>
      <h2>${index}. ${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h2>
      <p><b>${text("所屬課程", "Course")}：</b>${state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName}</p>
      <p>${state.lang === "zh" ? pkg.zhFinalOutcome : pkg.enFinalOutcome}</p>
      ${!unlocked && !pkg.free && price ? `<p class="course-result-meta">${text("課程售價", "Course Price")}：<span class="price-nowrap">${price}</span> · ${text("一次付費", "One-time payment")}</p>` : ""}
      <p>${text("完成進度", "Progress")}：${needsLogin ? text("登入後顯示", "Sign in to view") : `${progress.completed} / ${progress.total}（${progress.percent}%）`}</p>
      <div class="package-progress-track"><div class="package-progress-bar" style="width:${needsLogin ? 0 : progress.percent}%"></div></div>
      <div class="btnrow">
        ${needsLogin
          ? `<button class="btn primary" onclick="openResultPackage('${pkg.id}')">${text("查看介紹", "View Intro")}</button>
             <button class="btn secondary" onclick='requireGoogleLogin({"route":"courseResultPackage","packageId":"${pkg.id}","action":"openResultPackage"})'>${text("使用 Google 登入", "Sign in with Google")}</button>`
          : unlocked
          ? `<button class="btn primary" onclick="openResultPackage('${pkg.id}')">${text("查看成果包", "View Package")}</button>`
          : `<button class="btn secondary" onclick="showResultPackageLockedMessage('${pkg.id}')">${text("已鎖定", "Locked")}</button>
             <button class="btn secondary" onclick="${course ? `openCourse('${course.id}')` : "setRoute('map')"}">${text("查看課程", "View Course")}</button>`
        }
      </div>
      ${!unlocked && !pkg.free ? renderPaymentComingSoonNote() : ""}
    </article>
  `;
}

function openCourseResultPackage(courseId) {
  const pkg = getResultPackageByCourseId(courseId);
  if (pkg) {
    openResultPackage(pkg.id);
    return;
  }
  if (!(typeof hasCourseAccess === "function" && hasCourseAccess(courseId))) {
    toast(state.lang === "zh" ? "請先開通此課程" : "Please unlock this course first");
    setRoute("premium");
    return;
  }
  currentCourseId = courseId;
  currentResultPackageId = null;
  setRoute("courseResultPackage");
}

function openResultPackage(packageId) {
  const pkg = getResultPackageById(packageId);
  if (!pkg) {
    toast(state.lang === "zh" ? "找不到成果包" : "Result package not found");
    setRoute("result-packages");
    return;
  }
  if (pkg.free) {
    currentResultPackageId = packageId;
    currentCourseId = pkg.courseId || null;
    if (!state.authReady || !state.user) {
      if (!state.user) {
        savePostLoginDestination({
          route: "courseResultPackage",
          packageId,
          action: "openResultPackage"
        });
      }
      setRoute("courseResultPackage");
      return;
    }
    setRoute("courseResultPackage");
    return;
  }
  if (!hasResultPackageAccess(packageId)) {
    showResultPackageLockedMessage(packageId);
    return;
  }
  currentResultPackageId = packageId;
  currentCourseId = pkg.courseId || null;
  setRoute("courseResultPackage");
}

function showResultPackageLockedMessage(packageId) {
  const pkg = getResultPackageById(packageId);
  if (!pkg) return;
  const courseName = state.lang === "zh" ? (pkg.zhCourseName || pkg.zhTitle) : (pkg.enCourseName || pkg.enTitle);
  toast(state.lang === "zh"
    ? `此成果包包含在「${courseName}」中，解鎖課程後即可使用。`
    : `This package is included in “${courseName}”. Unlock the course to use it.`);
}

function formatCourseResultSavedAt(iso) {
  if (!iso) return state.lang === "zh" ? "尚未儲存" : "Not saved yet";
  try {
    return new Date(iso).toLocaleString();
  } catch (error) {
    return iso;
  }
}

function lastStudiedStorageKey() {
  return `asb_last_studied_v1_${courseResultPackageUserKey()}`;
}

function setLastStudiedCourse(courseId, lessonIndex) {
  try {
    localStorage.setItem(lastStudiedStorageKey(), JSON.stringify({
      courseId,
      lessonIndex: Number(lessonIndex) || 0,
      at: new Date().toISOString()
    }));
  } catch (error) {}
}

function getLastStudiedCourse() {
  try {
    const raw = localStorage.getItem(lastStudiedStorageKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && parsed.courseId ? parsed : null;
  } catch (error) {
    return null;
  }
}

function getRecentEditedResults(limit = 3) {
  const store = loadCourseResultPackagesStore();
  const userKey = courseResultPackageUserKey();
  const userStore = store[userKey] || {};
  const rows = [];
  getResultPackageConfigList().forEach(pkg => {
    if (!hasResultPackageAccess(pkg.id)) return;
    const storageKey = resultPackageStorageCourseKey(pkg);
    const courseStore = userStore[storageKey] || {};
    Object.keys(courseStore).forEach(lessonKey => {
      const entry = courseStore[lessonKey] || {};
      if (!entry.savedAt) return;
      const idx = Number(lessonKey);
      let itemTitle = `Item ${idx + 1}`;
      if (pkg.free && pkg.items && pkg.items[idx]) {
        itemTitle = state.lang === "zh" ? pkg.items[idx].zh : pkg.items[idx].en;
      } else if (pkg.courseId && typeof PREMIUM !== "undefined") {
        const course = PREMIUM.find(p => p.id === pkg.courseId);
        const lessons = course ? (state.lang === "zh" ? course.zhLessons : course.enLessons) : [];
        itemTitle = lessons[idx] || itemTitle;
      }
      rows.push({
        packageId: pkg.id,
        packageTitle: state.lang === "zh" ? pkg.zhTitle : pkg.enTitle,
        itemTitle,
        savedAt: entry.savedAt
      });
    });
  });
  rows.sort((a, b) => String(b.savedAt).localeCompare(String(a.savedAt)));
  return rows.slice(0, limit);
}

function renderLessonResultPackagePanel(courseId, lessonIndex, detail) {
  const entry = getCourseResultEntry(courseId, lessonIndex);
  const done = isCourseResultEntryComplete(entry);
  const outcome = (typeof getLessonOutputName === "function")
    ? getLessonOutputName(detail)
    : (state.lang === "zh" ? (detail.zhOutcome || "") : (detail.enOutcome || ""));
  return `
    <section class="panel course-result-save-panel" style="margin-top:16px">
      <span class="tag ${done ? "free" : "premiumtag"}">${done ? text("成果包：已儲存", "Package: Saved") : text("成果包：尚未完成", "Package: Incomplete")}</span>
      <h3>${text("儲存到成果包", "Save to Result Package")}</h3>
      <p>${text("本堂應產出：", "This lesson deliverable:")} <b>${outcome}</b></p>
      <label class="course-result-label">${text("成果文字", "Result text")}</label>
      <textarea id="course-result-text-${courseId}-${lessonIndex}" placeholder="${text("把本堂實作成果貼在這裡...", "Paste this lesson's output here...")}">${escapeTextareaValue(entry.text)}</textarea>
      <label class="course-result-label">${text("成果連結（選填）", "Result link (optional)")}</label>
      <input class="course-result-url-input" id="course-result-url-${courseId}-${lessonIndex}" type="url" value="${escapeTextareaValue(entry.url)}" placeholder="https://" />
      <p class="course-result-meta">${text("最後儲存時間", "Last saved")}: ${formatCourseResultSavedAt(entry.savedAt)}</p>
      <div class="btnrow">
        <button class="btn secondary" onclick="saveCourseResultEntry('${courseId}', ${lessonIndex})">${text("儲存到成果包", "Save to Result Package")}</button>
        <button class="linkish" onclick="openCourseResultPackage('${courseId}')">${text("查看我的成果包", "View My Result Package")}</button>
      </div>
    </section>
  `;
}

function resultPackages() {
  const hubEntries = getResultPackagesHubEntries();
  const membership = state.user ? `
    <section class="panel" style="margin-bottom:24px">
      <h2>${text("帳號存取狀態", "Account Access")}</h2>
      ${renderAccountMembershipSummary()}
    </section>
  ` : "";
  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("成果禮包", "Result Packages")}</span>
          <h1>${text("我的成果禮包", "My Result Packages")}</h1>
          <p class="lead">${text(
            "把每堂課完成的實作成果集中保存，最後組合成可使用、可展示的完整成果包。",
            "Save each lesson output in one place, then combine them into usable showcase packages."
          )}</p>
        </section>

        ${membership}

        <div class="grid three result-package-overview-grid">
          ${hubEntries.map((entry, index) => (
            entry.type === "application-kit"
              ? renderApplicationKitHubCard(index)
              : renderResultPackageHubCard(entry.pkg, index)
          )).join("")}
        </div>
      </div>
    </main>
  `);
}

function courseResultPackage() {
  const pkg = currentResultPackageId
    ? getResultPackageById(currentResultPackageId)
    : (currentCourseId ? getResultPackageByCourseId(currentCourseId) : null);

  if (!pkg) {
    return shell(`<main class="page"><div class="wrap"><h1>${text("找不到成果包", "Package Not Found")}</h1><button class="btn primary" onclick="setRoute('result-packages')">${text("回到成果禮包", "Back to Result Packages")}</button></div></main>`);
  }

  if (pkg.free) {
    if (!state.authReady) return renderAuthChecking();
    if (!state.user) {
      return shell(`
        <main class="page">
          <div class="wrap">
            <section class="panel auth-gate-panel">
              <span class="tag free">${text("免費成果包", "Free Portfolio")}</span>
              <h1>${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h1>
              <p class="lead">${state.lang === "zh" ? pkg.zhDescription : pkg.enDescription}</p>
              <p><b>${text("這門課完成後會得到什麼", "What you will get")}：</b>${state.lang === "zh" ? pkg.zhFinalOutcome : pkg.enFinalOutcome}</p>
              <p>${text(
                "你可以先了解成果包內容。登入後才能查看已輸入內容、輸入或儲存成果。",
                "You can review this package intro first. Sign in to view saved content and enter or save outputs."
              )}</p>
              <div class="btnrow">
                <button class="btn primary" onclick='requireGoogleLogin({"route":"courseResultPackage","packageId":"${pkg.id}","action":"openResultPackage"})'>${text("使用 Google 登入", "Sign in with Google")}</button>
                <button class="btn secondary" onclick="setRoute('result-packages')">${text("返回成果禮包", "Back to Result Packages")}</button>
              </div>
            </section>
          </div>
        </main>
      `);
    }
  }

  if (!hasResultPackageAccess(pkg.id)) {
    const courseName = state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName;
    const course = pkg.courseId && typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === pkg.courseId) : null;
    return shell(`
      <main class="page">
        <div class="wrap">
          <section class="panel">
            <span class="tag premiumtag">${text("尚未解鎖", "Locked")}</span>
            <h1>${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h1>
            <p class="lead">${text(
              `此成果包包含在「${courseName}」中，解鎖課程後即可使用。`,
              `This package is included in “${courseName}”. Unlock the course to use it.`
            )}</p>
            ${course ? renderCoursePriceBlock(course, { compact: true }) : ""}
            <div class="btnrow">
              <button class="btn secondary" onclick="${course ? `openCourse('${course.id}')` : "setRoute('map')"}">${text("查看課程", "View Course")}</button>
              <button class="btn secondary" onclick="setRoute('result-packages')">${text("回到成果禮包", "Back to Result Packages")}</button>
            </div>
            ${renderPaymentComingSoonNote()}
          </section>
        </div>
      </main>
    `);
  }

  const storageKey = resultPackageStorageCourseKey(pkg);
  const progress = resultPackageProgressByConfig(pkg);
  const course = pkg.courseId && typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === pkg.courseId) : null;
  const details = (pkg.courseId && typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[pkg.courseId])
    ? PREMIUM_LESSON_DETAILS[pkg.courseId]
    : [];
  const lessons = course ? (state.lang === "zh" ? course.zhLessons : course.enLessons) : [];
  const total = Number(pkg.totalItems) || (pkg.items ? pkg.items.length : 10);

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('result-packages')">← ${text("回到成果禮包", "Back to Result Packages")}</button>

        <section class="panel" style="margin-top:16px">
          <span class="tag free">${pkg.icon || ""} ${text("我的課程成果包", "My Course Result Package")}</span>
          <h1>${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h1>
          <p class="lead">${state.lang === "zh" ? pkg.zhDescription : pkg.enDescription}</p>
          <p><b>${text("這門課完成後會得到什麼", "What you will get")}：</b>${state.lang === "zh" ? pkg.zhFinalOutcome : pkg.enFinalOutcome}</p>
          <h2>${text("完成進度", "Progress")}：${progress.completed} / ${progress.total}（${progress.percent}%）</h2>
          <div class="package-progress-track">
            <div class="package-progress-bar" style="width:${progress.percent}%"></div>
          </div>
        </section>

        <div class="grid course-result-grid" style="margin-top:24px">
          ${Array.from({ length: total }, (_, i) => {
            const entry = getCourseResultEntry(storageKey, i);
            const done = isCourseResultEntryComplete(entry);
            let title = `Item ${i + 1}`;
            let outcome = "";
            if (pkg.free && pkg.items && pkg.items[i]) {
              title = state.lang === "zh" ? pkg.items[i].zh : pkg.items[i].en;
              outcome = title;
            } else {
              const detail = details[i] || {};
              title = lessons[i] || detail.zhTitle || `Lesson ${i + 1}`;
              outcome = state.lang === "zh" ? (detail.zhOutcome || "") : (detail.enOutcome || "");
            }
            return `
              <section class="panel application-package-item course-result-item">
                <span class="tag ${done ? "free" : "premiumtag"}">${done ? text("已儲存", "Saved") : text("尚未完成", "Incomplete")}</span>
                <h2>${pkg.free ? `${text("成果", "Item")} ${i + 1}` : `Lesson ${i + 1}`}</h2>
                <h3>${title}</h3>
                <p><b>${text("應產出成果", "Deliverable")}:</b> ${outcome}</p>
                <label class="course-result-label">${text("成果文字", "Result text")}</label>
                <textarea id="course-result-text-${storageKey}-${i}" placeholder="${text("貼上本堂成果...", "Paste this lesson output...")}">${escapeTextareaValue(entry.text)}</textarea>
                <label class="course-result-label">${text("成果連結", "Result link")}</label>
                <input class="course-result-url-input" id="course-result-url-${storageKey}-${i}" type="url" value="${escapeTextareaValue(entry.url)}" placeholder="https://" />
                <p class="course-result-meta">${text("最後儲存時間", "Last saved")}: ${formatCourseResultSavedAt(entry.savedAt)}</p>
                <div class="btnrow">
                  <button class="btn primary" onclick="saveCourseResultEntry('${storageKey}', ${i})">${text("儲存這一項", "Save This Item")}</button>
                  ${pkg.free
                    ? `<button class="btn secondary" onclick="setRoute('courses')">${text("前往免費課程", "Open Free Course")}</button>`
                    : `<button class="btn secondary" onclick="currentCourseId='${pkg.courseId}'; openLesson(${i})">${text("前往對應 Lesson", "Open Lesson")}</button>`
                  }
                </div>
              </section>
            `;
          }).join("")}
        </div>

        <section class="panel" style="margin-top:24px">
          <h2>${text("這門課的最終成果", "Final Course Outcome")}</h2>
          <p>${state.lang === "zh" ? pkg.zhFinalOutcome : pkg.enFinalOutcome}</p>
          <div class="btnrow">
            ${pkg.courseId ? `<button class="btn secondary" onclick="openCourse('${pkg.courseId}')">${text("回到課程繼續學習", "Back to Course")}</button>` : `<button class="btn secondary" onclick="setRoute('courses')">${text("回到免費入門", "Back to Free Intro")}</button>`}
            <button class="btn primary" onclick="setRoute('result-packages')">${text("查看全部成果禮包", "View All Packages")}</button>
          </div>
        </section>
      </div>
    </main>
  `);
}

const APPLICATION_PACKAGE_ITEMS = [
  {
    id: "map",
    zhTitle: "1. 大學申請準備地圖",
    enTitle: "1. University Application Preparation Map",
    zhDesc: "整理第一階段、第二階段、備審與面試準備方向。",
    enDesc: "Organize Stage 1, Stage 2, portfolio, and interview prep directions.",
    zhPlaceholder: "貼上你第1課完成的大學申請準備地圖...",
    enPlaceholder: "Paste your Lesson 1 preparation map here...",
    linkedLessonId: "admissions-L1",
    linkedLessonIndex: 0
  },
  {
    id: "majors",
    zhTitle: "2. 科系探索表",
    enTitle: "2. Major Exploration Sheet",
    zhDesc: "整理 5 個可能科系與 3 個優先申請科系。",
    enDesc: "Organize 5 possible majors and 3 priority choices.",
    zhPlaceholder: "貼上你第2課完成的科系探索表...",
    enPlaceholder: "Paste your Lesson 2 major exploration sheet here...",
    linkedLessonId: "admissions-L2",
    linkedLessonIndex: 1
  },
  {
    id: "portfolio",
    zhTitle: "3. 學習歷程素材庫",
    enTitle: "3. Learning Portfolio Material Bank",
    zhDesc: "整理高中三年的課程成果、活動、競賽、服務與專題。",
    enDesc: "Organize coursework, activities, contests, service, and projects from three years of high school.",
    zhPlaceholder: "貼上你第4課完成的學習歷程素材庫...",
    enPlaceholder: "Paste your Lesson 4 material bank here...",
    linkedLessonId: "admissions-L4",
    linkedLessonIndex: 3
  },
  {
    id: "activities",
    zhTitle: "4. 多元表現描述",
    enTitle: "4. Activity Stories (STAR)",
    zhDesc: "放入 3 則用 STAR 架構完成的多元表現。",
    enDesc: "Add 3 STAR-structured activity stories.",
    zhPlaceholder: "貼上你第5課完成的多元表現描述...",
    enPlaceholder: "Paste your Lesson 5 STAR activity stories here...",
    linkedLessonId: "admissions-L5",
    linkedLessonIndex: 4
  },
  {
    id: "autobiography",
    zhTitle: "5. 學習歷程自述初稿",
    enTitle: "5. Learning Statement Draft",
    zhDesc: "整理你的學習主軸、能力成長、申請動機與未來規劃。",
    enDesc: "Organize your learning theme, growth, motivation, and future plan.",
    zhPlaceholder: "貼上你第6課完成的學習歷程自述與申請動機初稿...",
    enPlaceholder: "Paste your Lesson 6 statement and motivation draft here...",
    linkedLessonId: "admissions-L6",
    linkedLessonIndex: 5
  },
  {
    id: "majorSpecific",
    zhTitle: "6. 科系專屬備審規劃",
    enTitle: "6. Major-Specific Portfolio Plan",
    zhDesc: "整理目標科系需求與你的素材對照。",
    enDesc: "Map target-major needs to your materials.",
    zhPlaceholder: "貼上你第7課完成的科系專屬備審規劃表...",
    enPlaceholder: "Paste your Lesson 7 major-specific portfolio plan here...",
    linkedLessonId: "admissions-L7",
    linkedLessonIndex: 6
  },
  {
    id: "interviewBank",
    zhTitle: "7. 面試題庫與回答架構",
    enTitle: "7. Interview Question Bank & Answer Frames",
    zhDesc: "整理 20 題面試題與最重要的回答重點。",
    enDesc: "Organize 20 interview questions and key answer points.",
    zhPlaceholder: "貼上你第8課完成的面試題庫與回答架構...",
    enPlaceholder: "Paste your Lesson 8 interview bank here...",
    linkedLessonId: "admissions-L8",
    linkedLessonIndex: 7
  },
  {
    id: "mockInterview",
    zhTitle: "8. 模擬面試紀錄",
    enTitle: "8. Mock Interview Log",
    zhDesc: "整理 AI 模擬面試評分與改進清單。",
    enDesc: "Organize AI mock-interview scores and improvement notes.",
    zhPlaceholder: "貼上你第9課完成的模擬面試紀錄與改進清單...",
    enPlaceholder: "Paste your Lesson 9 mock interview log here...",
    linkedLessonId: "admissions-L9",
    linkedLessonIndex: 8
  },
  {
    id: "advisorPrompt",
    zhTitle: "9. 個人 AI 升學顧問 Prompt",
    enTitle: "9. Personal AI Admissions Advisor Prompt",
    zhDesc: "保存你可以重複使用的個人升學顧問 Prompt。",
    enDesc: "Save a reusable personal admissions-advisor prompt.",
    zhPlaceholder: "貼上你自訂的個人 AI 升學顧問 Prompt（課程成果包未自動對應此欄）...",
    enPlaceholder: "Paste your custom AI admissions advisor prompt (not auto-linked from lesson outputs)...",
    linkedLessonId: null,
    linkedLessonIndex: null
  },
  {
    id: "finalReview",
    zhTitle: "10. 最終總檢查",
    enTitle: "10. Final Review & Submission Checklist",
    zhDesc: "整理整份申請包的總檢查與最後修改清單。",
    enDesc: "Organize the full-kit review and final revision checklist.",
    zhPlaceholder: "貼上你第10課完成的完整申請資料檢查與送件清單...",
    enPlaceholder: "Paste your Lesson 10 full review and submission checklist here...",
    linkedLessonId: "admissions-L10",
    linkedLessonIndex: 9
  }
];

function getApplicationPackageItemCopy(item) {
  return {
    title: pickLocalized(item, "zhTitle", "enTitle", item.title || ""),
    desc: pickLocalized(item, "zhDesc", "enDesc", item.desc || ""),
    placeholder: pickLocalized(item, "zhPlaceholder", "enPlaceholder", item.placeholder || "")
  };
}

/** Compatibility map: admissions lesson outputs ↔ application package slots (manual paste; no second storage). */
const ADMISSIONS_APPLICATION_PACKAGE_LINKS = APPLICATION_PACKAGE_ITEMS
  .filter(item => item.linkedLessonId)
  .map(item => ({
    packageItemId: item.id,
    lessonId: item.linkedLessonId,
    lessonIndex: item.linkedLessonIndex
  }));

function applicationPackageKey(id) {
  const userPart = state.user && state.user.email ? state.user.email : "guest";
  return `asb-application-package-${userPart}-${id}`;
}

function escapeTextareaValue(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function loadApplicationPackageValue(id) {
  try {
    return localStorage.getItem(applicationPackageKey(id)) || "";
  } catch (error) {
    return "";
  }
}

function getApplicationPackageCurrentValue(id) {
  const el = document.getElementById(`application-package-${id}`);
  if (el) return el.value || "";
  return loadApplicationPackageValue(id);
}

function applicationPackageProgress(useDom = true) {
  const completed = APPLICATION_PACKAGE_ITEMS.filter(item => {
    const value = useDom ? getApplicationPackageCurrentValue(item.id) : loadApplicationPackageValue(item.id);
    return value.trim().length > 0;
  }).length;

  const total = APPLICATION_PACKAGE_ITEMS.length;
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100)
  };
}

function updateApplicationPackageProgressUI() {
  const progress = applicationPackageProgress(true);
  const label = document.getElementById("application-package-progress-label");
  const bar = document.getElementById("application-package-progress-bar");
  const status = document.getElementById("application-package-live-status");

  if (label) label.textContent = `${progress.completed}/${progress.total}（${progress.percent}%）`;
  if (bar) bar.style.width = `${progress.percent}%`;
  if (status) {
    status.textContent = progress.percent === 100
      ? (state.lang === "zh" ? "已完成全部 10 項，可以進行最終總檢查。" : "All 10 sections are complete. You can run the final review.")
      : (state.lang === "zh" ? `還差 ${progress.total - progress.completed} 項完成。` : `${progress.total - progress.completed} sections remaining.`);
  }

  APPLICATION_PACKAGE_ITEMS.forEach(item => {
    const badge = document.getElementById(`application-package-status-${item.id}`);
    const value = getApplicationPackageCurrentValue(item.id);
    if (badge) {
      const done = value.trim().length > 0;
      badge.textContent = done ? (state.lang === "zh" ? "已完成" : "Completed") : (state.lang === "zh" ? "尚未填寫" : "Empty");
      badge.className = `tag ${done ? "free" : "premiumtag"}`;
    }
  });
}

function saveApplicationPackageItem(id, shouldRender = false) {
  const el = document.getElementById(`application-package-${id}`);
  if (!el) return;

  try {
    localStorage.setItem(applicationPackageKey(id), el.value);
    updateApplicationPackageProgressUI();
    toast(state.lang === "zh" ? "已儲存到大學申請包" : "Saved to University Application Kit");

    if (shouldRender) {
      setTimeout(() => render(), 120);
    }
  } catch (error) {
    toast(state.lang === "zh" ? "儲存失敗，請確認瀏覽器允許本機儲存" : "Save failed. Please allow local browser storage.");
  }
}

function saveAllApplicationPackageItems() {
  APPLICATION_PACKAGE_ITEMS.forEach(item => {
    const el = document.getElementById(`application-package-${item.id}`);
    if (el) {
      localStorage.setItem(applicationPackageKey(item.id), el.value);
    }
  });
  updateApplicationPackageProgressUI();
  toast(state.lang === "zh" ? "全部已儲存" : "All sections saved");
}

function clearApplicationPackageItem(id) {
  try {
    localStorage.removeItem(applicationPackageKey(id));
    const el = document.getElementById(`application-package-${id}`);
    if (el) el.value = "";
    updateApplicationPackageProgressUI();
    toast(state.lang === "zh" ? "已清除這一項" : "Section cleared");
  } catch (error) {}
}

function buildFinalReviewPrompt() {
  const emptyLabel = text("尚未填寫", "Empty");
  const data = APPLICATION_PACKAGE_ITEMS.map(item => {
    const copy = getApplicationPackageItemCopy(item);
    return `${copy.title}\n${getApplicationPackageCurrentValue(item.id) || loadApplicationPackageValue(item.id) || emptyLabel}`;
  }).join("\n\n---\n\n");

  return text(
    `請你擔任大學申請總顧問。以下是我的完整大學申請包：\n\n${data}\n\n請幫我做最終總檢查：\n1. 申請主軸是否清楚\n2. 每份資料是否互相支持\n3. 哪些內容太空泛\n4. 哪些地方和目標科系連結不足\n5. 哪些內容需要補強具體例子\n6. 請列出最優先修改的 5 件事\n7. 請給我一份最後 7 天修改計畫\n\n請不要捏造我的經歷，只根據我提供的內容給建議。`,
    `Act as a university application advisor. Here is my complete University Application Kit:\n\n${data}\n\nPlease run a final review:\n1. Is the application theme clear?\n2. Do the sections support each other?\n3. Which parts are too vague?\n4. Where is the major link weak?\n5. Where should I add concrete examples?\n6. List the top 5 priority revisions\n7. Give me a final 7-day revision plan\n\nDo not invent my experience. Advise only from what I provided.`
  );
}

function fallbackCopyText(textToCopy) {
  const temp = document.createElement("textarea");
  temp.value = textToCopy;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.left = "-9999px";
  temp.style.top = "0";
  document.body.appendChild(temp);
  temp.focus();
  temp.select();

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (error) {
    ok = false;
  }

  document.body.removeChild(temp);
  return ok;
}

function showFinalReviewPrompt() {
  const box = document.getElementById("final-review-prompt-box");
  if (!box) return;
  box.value = buildFinalReviewPrompt();
  box.style.display = "block";
  box.focus();
  box.select();
}

function copyFinalReviewPrompt() {
  saveAllApplicationPackageItems();
  const prompt = buildFinalReviewPrompt();

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(prompt).then(() => {
      toast(state.lang === "zh" ? "總檢查 Prompt 已複製" : "Final review prompt copied");
    }).catch(() => {
      const ok = fallbackCopyText(prompt);
      if (ok) {
        toast(state.lang === "zh" ? "總檢查 Prompt 已複製" : "Final review prompt copied");
      } else {
        showFinalReviewPrompt();
        toast(state.lang === "zh" ? "已顯示 Prompt，請手動複製" : "Prompt shown. Please copy manually.");
      }
    });
  } else {
    const ok = fallbackCopyText(prompt);
    if (ok) {
      toast(state.lang === "zh" ? "總檢查 Prompt 已複製" : "Final review prompt copied");
    } else {
      showFinalReviewPrompt();
      toast(state.lang === "zh" ? "已顯示 Prompt，請手動複製" : "Prompt shown. Please copy manually.");
    }
  }
}

function applicationPackage() {
  if (!(typeof hasCourseAccess === "function" && hasCourseAccess("admissions"))) {
    return shell(`
      <main class="page">
        <div class="wrap">
          <section class="panel">
            <span class="tag premiumtag">${text("付費功能", "Premium Feature")}</span>
            <h1>${text("大學申請包尚未開通", "University Application Kit Locked")}</h1>
            <p class="lead">${text(
              "這個功能屬於「高中生申請大學 AI 實戰課」。開通後，你才能集中儲存 10 堂課成果並產出完整申請資料。",
              "This feature belongs to the University Application premium course. Unlock it to store all 10 lesson outputs and generate a complete University Application Kit."
            )}</p>
            <button class="btn primary" onclick="setRoute('premium')">${text("前往進階付費", "Go to Premium")}</button>
          </section>
        </div>
      </main>
    `);
  }

  const progress = applicationPackageProgress(false);

  setTimeout(updateApplicationPackageProgressUI, 0);

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("付費課程成果區", "Premium Course Output")}</span>
          <h1>${text("我的大學申請包", "My University Application Kit")}</h1>
          <p class="lead">${text(
            "每一課完成後，把成果貼到對應欄位並儲存。完成 10 個欄位後，你就會得到一份完整的大學申請資料。",
            "After each lesson, paste your result into the matching section and save it. When all 10 sections are complete, you will have a full university application kit."
          )}</p>

          <h2>${text("完成進度", "Progress")}：<span id="application-package-progress-label">${progress.completed}/${progress.total}（${progress.percent}%）</span></h2>
          <div class="package-progress-track">
            <div id="application-package-progress-bar" class="package-progress-bar" style="width:${progress.percent}%"></div>
          </div>
          <p id="application-package-live-status">${progress.percent === 100 ? text("已完成全部 10 項，可以進行最終總檢查。", "All 10 sections are complete. You can run the final review.") : text(`還差 ${progress.total - progress.completed} 項完成。`, `${progress.total - progress.completed} sections remaining.`)}</p>

          <div class="btnrow" style="margin-top:20px">
            <button class="btn primary" onclick="saveAllApplicationPackageItems()">${text("全部儲存", "Save All")}</button>
            <button class="btn secondary" onclick="copyFinalReviewPrompt()">${text("複製最終總檢查 Prompt", "Copy Final Review Prompt")}</button>
            <button class="btn secondary" onclick="showFinalReviewPrompt()">${text("顯示 Prompt 手動複製", "Show Prompt")}</button>
          </div>
        </section>

        <section class="panel">
          <h2>${text("怎麼使用", "How to Use")}</h2>
          <ol>
            <li>${text("上完一課後，複製該課成果。", "After finishing a lesson, copy that lesson's output.")}</li>
            <li>${text("貼到下面對應欄位，進度會馬上更新。", "Paste it below; progress updates immediately.")}</li>
            <li>${text("按下「儲存這一項」或「全部儲存」。", "Click 'Save This Section' or 'Save All'.")}</li>
            <li>${text("10 個欄位完成後，複製總檢查 Prompt 到 AI 做最後修改。", "After all 10 sections are complete, copy the final review prompt to AI for final revision.")}</li>
          </ol>
        </section>

        <div class="grid">
          ${APPLICATION_PACKAGE_ITEMS.map(item => {
            const copy = getApplicationPackageItemCopy(item);
            const value = loadApplicationPackageValue(item.id);
            const done = value.trim().length > 0;
            return `
              <section class="panel application-package-item">
                <span id="application-package-status-${item.id}" class="tag ${done ? "free" : "premiumtag"}">${done ? text("已完成", "Completed") : text("尚未填寫", "Empty")}</span>
                <h2>${copy.title}</h2>
                <p>${copy.desc}</p>
                <textarea id="application-package-${item.id}" placeholder="${copy.placeholder}" oninput="updateApplicationPackageProgressUI()">${escapeTextareaValue(value)}</textarea>
                <div class="btnrow">
                  <button class="btn secondary" onclick="saveApplicationPackageItem('${item.id}')">${text("儲存這一項", "Save This Section")}</button>
                  <button class="btn secondary" onclick="clearApplicationPackageItem('${item.id}')">${text("清除", "Clear")}</button>
                </div>
              </section>
            `;
          }).join("")}
        </div>

        <section class="panel" style="margin-top:24px">
          <h2>${text("最終總檢查", "Final Review")}</h2>
          <p>${text(
            "完成 10 個欄位後，按下面按鈕複製總檢查 Prompt，貼到 AI，讓 AI 幫你檢查整份申請包。",
            "After completing all 10 sections, copy the final review prompt and paste it into AI to review the full package."
          )}</p>
          <button class="btn primary" onclick="copyFinalReviewPrompt()">${text("複製最終總檢查 Prompt", "Copy Final Review Prompt")}</button>
          <button class="btn secondary" onclick="showFinalReviewPrompt()">${text("顯示 Prompt 手動複製", "Show Prompt")}</button>
          <textarea id="final-review-prompt-box" style="display:none;min-height:320px;margin-top:18px" readonly></textarea>
        </section>
      </div>
    </main>
  `);
}


function tools() {
  const scenarios = [
    [L("tools.taskReport"), ["ChatGPT", "Claude", "NotebookLM"]],
    [L("tools.taskSlides"), ["Canva", "Gamma", "ChatGPT"]],
    [L("tools.taskResearch"), ["Perplexity", "NotebookLM", "Claude"]],
    [L("tools.taskCareer"), ["ChatGPT", "LinkedIn", "Canva"]],
    [L("tools.taskVisual"), ["Canva", "Gamma"]]
  ];

  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("tools.title")}</h1>
        <p class="lead">${L("tools.lead")}</p>
        <section class="panel">
          <h2>${L("tools.taskTitle")}</h2>
          <div class="grid three">
            ${scenarios.map(([title, names]) => `
              <article class="card">
                <h3>${title}</h3>
                <p>${names.map(name => `<span class="tag">${name}</span>`).join(" ")}</p>
              </article>
            `).join("")}
          </div>
        </section>
        <div class="grid three">
          ${TOOLS.map(tool => `
            <article class="card">
              <div class="tool-logo">${tool.name[0]}</div>
              <h3>${tool.name}</h3>
              <p>${state.lang === "zh" ? tool.zh : tool.en}</p>
              <button class="btn secondary" onclick="toggleFavorite('tool','${tool.name}')">${isFavorite("tool", tool.name) ? "★" : "☆"} ${text("收藏", "Save")}</button>
              <a class="btn primary" href="${tool.url}" target="_blank">${L("tools.open")}</a>
            </article>
          `).join("")}
        </div>
      </div>
    </main>
  `);
}

function prompts() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("prompts.title")}</h1>
        <p class="lead">${L("prompts.lead")}</p>
        <div class="grid two">
          ${PROMPTS.map((prompt, index) => `
            <article class="card">
              <span class="tag">${prompt.cat}</span>
              <div class="promptbox" id="prompt-${index}">${prompt.text}</div>
              <button class="btn secondary" onclick="copyPrompt('prompt-${index}')">${L("prompts.copy")}</button>
              <button class="btn secondary" onclick="toggleFavorite('prompt','${index}')">${isFavorite("prompt", String(index)) ? "★" : "☆"} ${text("收藏", "Save")}</button>
            </article>
          `).join("")}
        </div>
      </div>
    </main>
  `);
}

function copyPrompt(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  toast(L("prompts.copied"));
}


function tutor() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${text("AI 提問教練", "Prompt Tutor")}</h1>
        <p class="lead">
          ${text(
            "這裡不是幫你直接完成作業，而是教你怎麼把模糊問題改成清楚、可執行的 AI 指令。輸入你原本想問 AI 的問題，系統會幫你改寫成更好的 Prompt。",
            "This does not complete work for you. It teaches you how to turn vague questions into clear, actionable AI prompts. Type the question you wanted to ask AI, and the system will rewrite it into a stronger prompt."
          )}
        </p>

        <section class="panel">
          <h2>${text("把你的問題改成好 Prompt", "Turn Your Question into a Better Prompt")}</h2>
          <p>${text("範例：我想用 AI 幫我做報告 / 我不知道怎麼問 ChatGPT / 我想用 AI 幫我準備面試", "Examples: I want AI to help me plan a report / I do not know how to ask ChatGPT / I want AI to help me prepare for an interview")}</p>
          <textarea id="tutor-input" placeholder="${text("輸入你想問 AI 的問題...", "Type the question you want to ask AI...")}"></textarea>
          <div class="btnrow">
            <button class="btn primary" onclick="tutorReply()">${text("幫我改成好 Prompt", "Improve My Prompt")}</button>
            <button class="btn secondary" onclick="document.getElementById('tutor-input').value='我想用 AI 幫我做報告，但不知道怎麼問'; tutorReply();">${text("使用範例", "Use Example")}</button>
          </div>
          <div id="tutor-output"></div>
        </section>

        <section class="panel" style="margin-top:24px">
          <h2>${text("好 Prompt 公式", "Good Prompt Formula")}</h2>
          <div class="grid three">
            <article class="card"><h3>1. ${text("角色", "Role")}</h3><p>${text("請 AI 扮演老師、助教、面試官、研究助理等。", "Ask AI to act as a teacher, assistant, interviewer, research assistant, etc.")}</p></article>
            <article class="card"><h3>2. ${text("任務", "Task")}</h3><p>${text("清楚說明你要 AI 幫你完成什麼。", "Clearly state what you want AI to help complete.")}</p></article>
            <article class="card"><h3>3. ${text("背景", "Context")}</h3><p>${text("提供課程、對象、目的、限制或目前狀況。", "Provide course, audience, purpose, constraints, or current situation.")}</p></article>
            <article class="card"><h3>4. ${text("格式", "Format")}</h3><p>${text("要求表格、條列、步驟、範例或檢查清單。", "Request tables, bullets, steps, examples, or checklists.")}</p></article>
            <article class="card"><h3>5. ${text("限制", "Constraints")}</h3><p>${text("說明不要捏造、不要直接完成作業、需要查證。", "Tell AI not to fabricate, not to complete assignments directly, and to verify.")}</p></article>
            <article class="card"><h3>6. ${text("追問", "Follow-up")}</h3><p>${text("請 AI 先問你問題，讓需求更清楚。", "Ask AI to ask follow-up questions first to clarify your needs.")}</p></article>
          </div>
        </section>
      </div>
    </main>
  `);
}


function community() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("community.title")}</h1>
        <p class="lead">${L("community.lead")}</p>
        <div class="slide">
          <div>
            <p class="eyebrow" style="color:#93c5fd">${L("community.boardTitle")}</p>
            <h3>${L("community.boardQuestion")}</h3>
          </div>
          <div class="sticky-note">${L("community.note")}</div>
        </div>
        <section class="panel" style="margin-top:24px">
          <h2>${text("需要 AI 提問協助？", "Need help asking AI?")}</h2>
          <p>${text("AI 提問教練已經獨立成上方選單的小按鍵。", "Prompt Tutor is now available as a separate button in the top navigation.")}</p>
          <button class="btn primary" onclick="setRoute('tutor')">${text("打開 AI 提問教練", "Open Prompt Tutor")}</button>
        </section>
      </div>
    </main>
  `);
}

function thailand() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("thailand.title")}</h1>
        <p class="lead">${L("thailand.lead")}</p>
        <section class="panel">
          <h2>${L("thailand.journal")}</h2>
          <div class="grid four">
            <article class="card"><h3>${L("thailand.daily")}</h3><p>${L("thailand.dailyText")}</p></article>
            <article class="card"><h3>${L("thailand.field")}</h3><p>${L("thailand.fieldText")}</p></article>
            <article class="card"><h3>${L("thailand.project")}</h3><p>${L("thailand.projectText")}</p></article>
            <article class="card"><h3>${L("thailand.action")}</h3><p>${L("thailand.actionText")}</p></article>
          </div>
        </section>
      </div>
    </main>
  `);
}

function impact() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("impact.title")}</h1>
        <p class="lead">${L("impact.lead")}</p>
        <div class="grid three">
          <article class="card"><span class="tag free">${text("近用", "Access")}</span><h3>${L("impact.access")}</h3><p>${L("impact.accessText")}</p></article>
          <article class="card"><span class="tag premiumtag">${text("永續", "Sustainability")}</span><h3>${L("impact.sustainability")}</h3><p>${L("impact.sustainabilityText")}</p></article>
          <article class="card"><span class="tag communitytag">${text("社群", "Community")}</span><h3>${L("impact.community")}</h3><p>${L("impact.communityText")}</p></article>
        </div>
      </div>
    </main>
  `);
}

function bindLessonInteractiveA11y() {
  document.querySelectorAll(".lesson-accordion").forEach(details => {
    const summary = details.querySelector("summary");
    if (!summary) return;
    const sync = () => summary.setAttribute("aria-expanded", details.open ? "true" : "false");
    sync();
    if (details.dataset.boundAccordion === "1") return;
    details.dataset.boundAccordion = "1";
    details.addEventListener("toggle", sync);
  });

  const tablist = document.querySelector(".lesson-pro-tabs");
  if (!tablist || tablist.dataset.boundTabs === "1") return;
  tablist.dataset.boundTabs = "1";
  tablist.addEventListener("keydown", event => {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const current = tabs.indexOf(document.activeElement);
    if (current < 0) return;
    let next = current;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % tabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  });
}

function render() {
  try {
    applyDocumentLang();
    const routes = {
      home,
      freeLesson,
      learning,
      courses,
      freePortfolio,
      assessment,
      map: learningMap,
      center,
      free,
      premium,
      applicationPackage,
      courseResultPackage,
      "result-packages": resultPackages,
      resultPackages,
      tools,
      prompts,
      community,
      tutor,
      course,
      lesson,
      thailand,
      impact
    };
    document.getElementById("app").innerHTML = (routes[state.route] || home)();
    // Navbar DOM is fully rebuilt on every render; re-check nodes and keep delegation alive.
    bindMoreMenuEvents();
    bindLessonInteractiveA11y();
    save();
  } catch (error) {
    console.error("[AUTH] error", "render failed", error);
    throw error;
  }
}

async function startApp() {
  applyDocumentLang();
  bindMoreMenuEvents();
  render();
  await initAuth();
  render();
  runPremiumContentAuditIfDev();
  runI18nAuditIfDev();
}

function isLocalDevHost() {
  try {
    const host = String(location.hostname || "");
    return host === "localhost" || host === "127.0.0.1" || host === "::1";
  } catch (error) {
    return false;
  }
}

function validatePremiumLessonContent(courseId) {
  const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[courseId])
    ? PREMIUM_LESSON_DETAILS[courseId]
    : [];
  const issues = [];
  const promptFingerprints = new Map();
  const outcomeFingerprints = new Map();

  details.forEach((raw, index) => {
    const detail = normalizePremiumLessonDetail(courseId, raw) || {};
    const lessonId = raw.id || raw.lessonKey || `${courseId}-L${index + 1}`;
    const requiredStrings = {
      title: detail.zhTitle || detail.enTitle,
      concept: detail.zhConcept || detail.enConcept,
      outcome: detail.zhOutputName || detail.zhOutcome || detail.enOutcome,
      prompt: (detail.zhPromptPack && detail.zhPromptPack.body) || detail.zhPrompt,
      practice: detail.zhPractice || detail.enPractice,
      nextStep: detail.zhNextStep || detail.enNextStep,
      estimatedTime: detail.estimatedTime,
      difficulty: detail.difficulty
    };
    Object.keys(requiredStrings).forEach(key => {
      if (!String(requiredStrings[key] || "").trim()) {
        issues.push({ lessonId, index, missing: key });
      }
    });
    const objectives = Array.isArray(detail.zhObjectives) ? detail.zhObjectives : [];
    if (objectives.length < 3) issues.push({ lessonId, index, missing: "objectives(>=3)" });
    const checklist = Array.isArray(detail.zhDeliverableChecklist) ? detail.zhDeliverableChecklist : [];
    if (checklist.length < 4) issues.push({ lessonId, index, missing: "checklist(>=4)" });
    const workflow = Array.isArray(detail.zhWorkflow) ? detail.zhWorkflow : [];
    const workflowSteps = Array.isArray(detail.zhWorkflowSteps) ? detail.zhWorkflowSteps : [];
    if (workflow.length < 3 && workflowSteps.length < 3) issues.push({ lessonId, index, missing: "steps(>=3)" });
    const caseBlocks = detail.zhCaseStudyBlocks || {};
    if (!caseBlocks.problem || !caseBlocks.wrong || !caseBlocks.right) {
      issues.push({ lessonId, index, missing: "caseStudyBlocks" });
    }
    if (!(detail.enTitle && detail.enConcept && detail.enPromptPack && detail.enPromptPack.body && detail.enObjectives && detail.enObjectives.length)) {
      issues.push({ lessonId, index, missing: "englishParity" });
    }
    const promptKey = String(requiredStrings.prompt || "").replace(/\s+/g, " ").slice(0, 120);
    if (promptKey) {
      if (promptFingerprints.has(promptKey)) {
        issues.push({ lessonId, index, duplicate: "prompt", with: promptFingerprints.get(promptKey) });
      } else {
        promptFingerprints.set(promptKey, lessonId);
      }
    }
    const outcomeKey = String(requiredStrings.outcome || "").trim();
    if (outcomeKey) {
      if (outcomeFingerprints.has(outcomeKey)) {
        issues.push({ lessonId, index, duplicate: "outcome", with: outcomeFingerprints.get(outcomeKey) });
      } else {
        outcomeFingerprints.set(outcomeKey, lessonId);
      }
    }
  });

  const validCount = details.length - new Set(issues.map(i => i.lessonId)).size;
  return {
    courseId,
    total: details.length,
    validCount: Math.max(validCount, 0),
    issues
  };
}


function auditTranslations() {
  const missing = [];
  const warn = (path, msg) => missing.push({ path, msg });

  // Nav keys
  (MAIN_NAV_ITEMS || []).forEach((item, i) => {
    if (!item.zh || !item.en) warn(`MAIN_NAV_ITEMS[${i}]`, "missing zh/en");
  });
  (MORE_NAV_GROUPS || []).forEach((group, gi) => {
    if (!group.zh || !group.en) warn(`MORE_NAV_GROUPS[${gi}]`, "missing zh/en group label");
    (group.items || []).forEach((item, ii) => {
      if (!item.zh || !item.en) warn(`MORE_NAV_GROUPS[${gi}].items[${ii}]`, "missing zh/en");
    });
  });

  // Lesson flow steps
  (LESSON_FLOW_STEP_META || []).forEach((step, i) => {
    if (!step.zh || !step.en) warn(`LESSON_FLOW_STEP_META[${i}]`, "missing zh/en title");
  });

  // Free bootcamp
  let freeTitleOk = 0;
  if (typeof FREE_BOOTCAMP !== "undefined") {
    FREE_BOOTCAMP.forEach((lesson, i) => {
      const hasZh = !!(lesson.title && lesson.goal && lesson.concept && lesson.prompt && lesson.output);
      const hasEn = !!(lesson.enTitle && lesson.enGoal && lesson.enConcept && lesson.enPrompt && lesson.enOutput);
      if (hasZh && hasEn) freeTitleOk += 1;
      else warn(`FREE_BOOTCAMP[${i}]`, `missing ${!hasZh ? "zh" : ""}${!hasZh && !hasEn ? "/" : ""}${!hasEn ? "en" : ""} core fields`);
      (lesson.quizItems || []).forEach((q, qi) => {
        if (!q.q || !q.enQ) warn(`FREE_BOOTCAMP[${i}].quizItems[${qi}]`, "missing q/enQ");
        if (!Array.isArray(q.options) || !Array.isArray(q.enOptions)) warn(`FREE_BOOTCAMP[${i}].quizItems[${qi}]`, "missing options/enOptions");
      });
    });
  }

  // Premium courses + lessons
  let premiumLessonOk = 0;
  let premiumLessonTotal = 0;
  const courses = (typeof getPremiumCourses === "function") ? getPremiumCourses() : (typeof PREMIUM !== "undefined" ? PREMIUM : []);
  (courses || []).forEach(course => {
    if (!course.zhTitle || !course.enTitle) warn(`PREMIUM[${course.id}]`, "missing zhTitle/enTitle");
    const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[course.id]) || [];
    details.forEach((raw, i) => {
      premiumLessonTotal += 1;
      const detail = (typeof normalizePremiumLessonDetail === "function")
        ? (normalizePremiumLessonDetail(course.id, raw) || raw)
        : raw;
      if (detail.zhTitle && detail.enTitle) premiumLessonOk += 1;
      else warn(`PREMIUM_LESSON_DETAILS.${course.id}[${i}]`, "missing zhTitle/enTitle");
    });
  });

  // Result packages
  const packages = (typeof getResultPackageConfigList === "function")
    ? getResultPackageConfigList()
    : ((typeof RESULT_PACKAGE_CONFIG !== "undefined") ? RESULT_PACKAGE_CONFIG
      : ((typeof RESULT_PACKAGES !== "undefined") ? RESULT_PACKAGES : []));
  (packages || []).forEach((pkg, i) => {
    if (!pkg.zhTitle || !pkg.enTitle) warn(`RESULT_PACKAGE_CONFIG[${pkg.id || i}]`, "missing zhTitle/enTitle");
  });

  // Application package items
  (APPLICATION_PACKAGE_ITEMS || []).forEach((item, i) => {
    if (!item.zhTitle || !item.enTitle) warn(`APPLICATION_PACKAGE_ITEMS[${i}]`, "missing zhTitle/enTitle");
  });

  // Price label smoke test via text()
  const priceKeys = [
    ["免費", "Free"],
    ["課程售價", "Course Price"],
    ["一次付費", "One-time payment"],
    ["早鳥價", "Early-bird Price"],
    ["付款功能建置中", "Payment service coming soon"]
  ];
  priceKeys.forEach(([zh, en], i) => {
    if (!zh || !en) warn(`priceLabels[${i}]`, "empty");
  });

  const freeTotal = (typeof FREE_BOOTCAMP !== "undefined") ? FREE_BOOTCAMP.length : 0;
  const navTotal = (MAIN_NAV_ITEMS || []).length + (MORE_NAV_GROUPS || []).reduce((n, g) => n + 1 + (g.items || []).length, 0);
  const flowTotal = (LESSON_FLOW_STEP_META || []).length;
  const appItems = (APPLICATION_PACKAGE_ITEMS || []).length;
  const pkgTotal = (packages || []).length;
  const interfaceChecked = navTotal + flowTotal + appItems + pkgTotal + priceKeys.length;
  const interfaceGaps = missing.filter(m =>
    !String(m.path).includes("PREMIUM_LESSON") && !String(m.path).includes("FREE_BOOTCAMP")
  ).length;
  const interfaceComplete = interfaceChecked - interfaceGaps;

  return {
    missing,
    summary: {
      freeLessons: `${freeTitleOk}/${freeTotal}`,
      premiumLessons: `${premiumLessonOk}/${premiumLessonTotal}`,
      interfaceKeys: `${interfaceComplete}/${interfaceChecked}`,
      navAndFlow: `${navTotal + flowTotal + appItems} keys checked`,
      interfaceComplete: interfaceGaps === 0
    }
  };
}

function runI18nAuditIfDev() {
  if (typeof isLocalDevHost !== "function" || !isLocalDevHost()) return;
  try {
    const result = auditTranslations();
    const s = result.summary || {};
    console.log(`[I18N AUDIT] ${s.interfaceKeys} interface keys complete`);
    console.log(`[I18N AUDIT] ${s.freeLessons} free bootcamp lessons have zh/en core fields`);
    console.log(`[I18N AUDIT] ${s.premiumLessons} premium lessons have zh/en titles`);
    if (result.missing && result.missing.length) {
      console.warn("[I18N AUDIT] gaps:", result.missing);
    } else {
      console.log("[I18N AUDIT] no missing bilingual fields detected in audited surfaces");
    }
  } catch (error) {
    console.warn("[I18N AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function runPremiumContentAuditIfDev() {
  if (!isLocalDevHost()) return;
  ["admissions", "college-learning", "research-competition", "career-internship"].forEach(courseId => {
    try {
      const result = validatePremiumLessonContent(courseId);
      console.log(`[CONTENT AUDIT] ${courseId}: ${result.validCount}/${result.total} lessons valid`);
      if (result.issues.length) {
        console.warn(`[CONTENT AUDIT] ${courseId} issues`, result.issues);
      }
    } catch (error) {
      console.warn("[CONTENT AUDIT] skipped", courseId, error && error.message ? error.message : error);
    }
  });
}

addEventListener("DOMContentLoaded", startApp);
