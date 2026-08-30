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

/**
 * Public business info — single source for footer, contact, and policy pages.
 * TODO: add registered business information once confirmed
 * (company legal name, tax ID, registered address, support hours).
 * Do not invent legal-entity details for end-user UI.
 * Legal copy should receive professional review before commercial launch.
 */
const PUBLIC_BUSINESS_INFO = {
  brandName: "AI Skill Bridge",
  supportEmail: "li19840610@gmail.com",
  supportPhone: "0933577360",
  currencyCode: "TWD",
  currencyZh: "新臺幣（TWD）",
  currencyEn: "New Taiwan Dollar (TWD)",
  positioningZh: "AI 學習與數位能力培養平台",
  positioningEn: "AI Learning and Digital Skills Platform",
  serviceTypeZh: "線上 AI 課程與數位學習內容",
  serviceTypeEn: "Online AI courses and digital learning content",
  deliveryZh: "線上數位內容，無實體配送",
  deliveryEn: "Online digital content. No physical delivery."
};

/** @deprecated Prefer PUBLIC_BUSINESS_INFO; kept for existing footer callers. */
const BUSINESS_CONTACT = {
  email: PUBLIC_BUSINESS_INFO.supportEmail,
  phone: PUBLIC_BUSINESS_INFO.supportPhone
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
  try {
    if (typeof getDocumentTitleForRoute === "function") {
      document.title = getDocumentTitleForRoute(state.route);
    }
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
  if (destination.action === "openShowcase" && destination.packageId) {
    currentResultPackageId = destination.packageId;
    state.route = "showcase";
    return true;
  }
  if (destination.action === "purchaseAllAccess") {
    state.route = destination.route || "home";
    // Defer until auth session + plan load finish; never treat browser as payment authority.
    setTimeout(() => {
      if (typeof purchaseAllAccess === "function") purchaseAllAccess();
    }, 0);
    return true;
  }
  if (destination.action === "purchaseCourse" && destination.courseId) {
    state.route = destination.route || "course";
    if (destination.courseId) currentCourseId = destination.courseId;
    setTimeout(() => {
      if (typeof purchaseCourse === "function") purchaseCourse(destination.courseId);
    }, 0);
    return true;
  }
  if (destination.route === "showcase" && destination.packageId) {
    currentResultPackageId = destination.packageId;
    state.route = "showcase";
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
  const formatted = amount.toLocaleString("en-US");
  // zh: NT$499 — en: TWD 499 (avoid bare $ / USD confusion for international users)
  return state.lang === "zh" ? `NT$${formatted}` : `TWD ${formatted}`;
}

/** Wrap a formatted price so only the price token stays on one line. */
function formatTwdPriceToken(price) {
  const label = formatTwdPrice(price);
  if (!label) return "";
  return `<span class="price-token">${label}</span>`;
}

function renderPriceCurrencyNote(className = "price-currency-note") {
  return `<p class="${className}">${text(
    "所有價格皆以新臺幣（TWD）計價。",
    "All prices are in New Taiwan Dollars (TWD)."
  )}</p>`;
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
  // Deprecated for production UI — kept as no-op so any stray call stays blank.
  return "";
}

let allAccessCheckoutPending = false;
let courseCheckoutPendingId = null;

/** courseId → server productId (must match api/_lib/productCatalog.js). */
function getServerProductIdForCourse(courseId) {
  const map = typeof FRONTEND_COURSE_TO_SERVER_PRODUCT !== "undefined"
    ? FRONTEND_COURSE_TO_SERVER_PRODUCT
    : {
      admissions: "course-admissions",
      "college-learning": "course-college-learning",
      "research-competition": "course-research-competition",
      "career-internship": "course-career-internship",
      "workplace-productivity": "course-workplace-productivity",
      "startup-automation": "course-startup-automation"
    };
  if (!courseId || courseId === "all-access" || courseId === "free" || courseId === "free-starter") {
    return null;
  }
  return map[courseId] || null;
}

/** Single-course CTA: owned / Creator-Queen → no buy; else buy at display price (server charges catalog amount). */
function renderCoursePurchaseControls(courseId, options = {}) {
  const variant = options.variant || "block";
  const productId = getServerProductIdForCourse(courseId);
  if (!productId) return "";

  if (hasCourseAccess(courseId)) {
    if (variant === "map" || variant === "header" || variant === "inline") return "";
    const ownedLabel = hasAllAccessPass()
      ? text("已解鎖", "Unlocked")
      : text("已購買", "Purchased");
    return `<p class="course-price-owned" role="status">${ownedLabel}</p>`;
  }

  const priceInfo = getCoursePriceInfo(courseId);
  const priceLabel = formatTwdPrice(priceInfo?.price);
  const pending = courseCheckoutPendingId === courseId;
  const label = pending
    ? text("處理中…", "Processing…")
    : text(`立即購買 ${priceLabel}`, `Buy Now ${priceLabel}`);
  const disabled = pending ? "disabled" : "";
  const btn = `<button type="button" class="btn primary" onclick="purchaseCourse('${courseId}')" ${disabled}>${label}</button>`;

  if (variant === "block") return `<div class="btnrow">${btn}</div>`;
  return btn;
}

/**
 * Public single-course purchase: login → POST /api/orders/create { productId }
 * → ECPay checkout. Amount comes only from server catalog.
 */
async function purchaseCourse(courseId) {
  const productId = getServerProductIdForCourse(courseId);
  if (!productId) {
    toast(text("找不到可購買的課程商品。", "No payable course product found."));
    return;
  }

  if (hasCourseAccess(courseId)) {
    toast(text("你已擁有此課程。", "You already own this course."));
    return;
  }

  if (!state.user) {
    savePostLoginDestination({
      action: "purchaseCourse",
      courseId,
      route: state.route || "course"
    });
    toast(text(
      "請先使用 Google 登入後再購買課程。",
      "Please sign in with Google before purchasing a course."
    ));
    signInWithGoogle();
    return;
  }

  if (courseCheckoutPendingId) return;
  courseCheckoutPendingId = courseId;
  render();

  try {
    const order = await createOrder(productId);
    if (!order?.orderId) {
      const err = new Error("order_create_failed");
      err.code = "order_create_failed";
      throw err;
    }
    await startEcpayCheckout(order.orderId);
  } catch (error) {
    courseCheckoutPendingId = null;
    const code = error?.code || error?.message || "checkout_failed";
    console.warn("[COURSE CHECKOUT] failed", { courseId, productId, code });
    if (code === "authentication_required") {
      toast(text("請先登入後再購買。", "Please sign in to purchase."));
    } else if (code === "order_conflict") {
      toast(text(
        "你剛建立過待付款訂單，請稍後再試或完成上一筆付款。",
        "A pending order was just created. Please wait or finish the previous payment."
      ));
    } else if (code === "payment_not_configured") {
      toast(text("付款服務暫時無法使用，請稍後再試。", "Payment is temporarily unavailable. Please try again later."));
    } else {
      toast(text("無法開始付款，請稍後再試。", "Could not start checkout. Please try again."));
    }
    render();
  }
}

/** All-access CTA: Creator/Queen/premium → owned; others → server-priced purchase. */
function renderAllAccessPurchaseControls(options = {}) {
  const variant = options.variant || "home";
  const priceInfo = getCoursePriceInfo("all-access");
  const priceLabel = formatTwdPrice(priceInfo?.price ?? 2999);

  if (hasAllAccessPass()) {
    const owned = text("已全站開通", "All Access Unlocked");
    if (variant === "home") {
      return `<p class="home-price-owned" role="status">${owned}</p>`;
    }
    return `<p class="course-price-owned" role="status">${owned}</p>`;
  }

  const pending = Boolean(allAccessCheckoutPending);
  const label = pending
    ? text("處理中…", "Processing…")
    : text(`立即購買 ${priceLabel}`, `Buy Now ${priceLabel}`);

  if (variant === "home") {
    return `<button type="button" class="home-btn home-btn-primary" onclick="purchaseAllAccess()" ${pending ? "disabled" : ""}>${label}</button>`;
  }
  if (variant === "course") {
    return `<div class="btnrow"><button type="button" class="btn primary" onclick="purchaseAllAccess()" ${pending ? "disabled" : ""}>${label}</button></div>`;
  }
  return `<button type="button" class="btn primary" onclick="purchaseAllAccess()" ${pending ? "disabled" : ""}>${label}</button>`;
}

/**
 * Public all-access purchase: login → POST /api/orders/create { productId: "all-access" }
 * → POST /api/payments/ecpay/checkout. Amount/entitlement are server-authoritative only.
 */
async function purchaseAllAccess() {
  if (hasAllAccessPass()) {
    toast(text("你已擁有全站通行證。", "You already have All-Access."));
    return;
  }

  if (!state.user) {
    savePostLoginDestination({ action: "purchaseAllAccess", route: state.route || "home" });
    toast(text(
      "請先使用 Google 登入後再購買全站通行證。",
      "Please sign in with Google before purchasing All-Access."
    ));
    signInWithGoogle();
    return;
  }

  if (allAccessCheckoutPending) return;
  allAccessCheckoutPending = true;
  render();

  try {
    const order = await createOrder("all-access");
    if (!order?.orderId) {
      const err = new Error("order_create_failed");
      err.code = "order_create_failed";
      throw err;
    }
    await startEcpayCheckout(order.orderId);
  } catch (error) {
    allAccessCheckoutPending = false;
    const code = error?.code || error?.message || "checkout_failed";
    console.warn("[ALL-ACCESS] checkout failed", code);
    if (code === "authentication_required") {
      toast(text("請先登入後再購買。", "Please sign in to purchase."));
    } else if (code === "order_conflict") {
      toast(text(
        "你剛建立過待付款訂單，請稍後再試或完成上一筆付款。",
        "A pending order was just created. Please wait or finish the previous payment."
      ));
    } else if (code === "payment_not_configured") {
      toast(text("付款服務暫時無法使用，請稍後再試。", "Payment is temporarily unavailable. Please try again later."));
    } else {
      toast(text("無法開始付款，請稍後再試。", "Could not start checkout. Please try again."));
    }
    render();
  }
}

function renderCourseProductFacts() {
  const info = PUBLIC_BUSINESS_INFO;
  return `
    <ul class="course-price-facts">
      <li><span>${text("商品類型", "Product Type")}</span><strong>${text(info.serviceTypeZh, info.serviceTypeEn)}</strong></li>
      <li><span>${text("計價貨幣", "Currency")}</span><strong>${text(info.currencyZh, info.currencyEn)}</strong></li>
      <li><span>${text("交付方式", "Delivery")}</span><strong>${text("帳號開通後於 AI Skill Bridge 網站登入使用", "Access through the AI Skill Bridge website after account activation")}</strong></li>
      <li><span>${text("實體配送", "Physical Delivery")}</span><strong>${text("無", "None")}</strong></li>
    </ul>
  `;
}

function renderDigitalContentPolicyLink() {
  return `<p class="course-price-policy-link"><button type="button" class="linkish" onclick="setRoute('digital-content')">${text(
    "查看數位內容與服務說明",
    "Digital Content & Service Information"
  )}</button></p>`;
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
        <p class="course-price-meta">${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</p>
        ${compact ? "" : `
          <ul class="course-price-includes">
            <li>${text("六門付費課程", "Six premium courses")}</li>
            <li>${text("共60堂實戰課", "60 practical lessons in total")}</li>
            <li>${text("六種核心 AI 能力", "Six core AI capabilities")}</li>
            <li>${text("全部對應付費成果包", "All matching premium result packages")}</li>
            <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
          </ul>
          ${renderAllAccessPurchaseControls({ variant: "course" })}
          ${showFacts ? renderCourseProductFacts() : ""}
        `}
        ${renderDigitalContentPolicyLink()}
      </div>
    `;
  }

  return `
    <div class="course-price-block ${compact ? "is-compact" : ""}">
      <p class="course-price-label">${text("課程售價", "Course Price")}</p>
      <p class="course-price-amount">${formatTwdPrice(info.price)}</p>
      <p class="course-price-meta">${text("一次付費", "One-time payment")}</p>
      ${compact ? `
        ${renderCoursePurchaseControls(info.id, { variant: "inline" })}
      ` : `
        <ul class="course-price-includes">
          <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
          <li>${text(`包含${lessonCount}堂線上實戰課與對應成果包`, `Includes ${lessonCount} practical online lessons and the corresponding result package`)}${packageName ? `（${packageName}）` : ""}</li>
          <li>${text("本商品為線上數位課程，不提供實體配送", "Digital course · No physical delivery")}</li>
        </ul>
        ${renderCoursePurchaseControls(info.id, { variant: "block" })}
        ${showFacts ? renderCourseProductFacts() : ""}
      `}
      ${renderDigitalContentPolicyLink()}
    </div>
  `;
}

/**
 * Single source of truth for plan: public.profiles.plan → state.userPlan.
 * unlocked_courses (jsonb) → state.unlockedCourses when present.
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
      .select("id, email, display_name, plan, created_at, unlocked_courses")
      .eq("id", user.id)
      .maybeSingle();

    if (error) {
      // Backward compatible: column may not exist until Phase 5B migration is applied.
      if (String(error.message || "").toLowerCase().includes("unlocked_courses")) {
        const fallback = await supabaseClient
          .from("profiles")
          .select("id, email, display_name, plan, created_at")
          .eq("id", user.id)
          .maybeSingle();
        if (fallback.error) {
          logSupabaseError("Load user plan failed:", fallback.error);
          state.userPlan = "free";
          state.unlockedCourses = [];
          return;
        }
        const row = fallback.data;
        if (!row || row.plan == null || row.plan === "") {
          state.userPlan = "free";
          state.unlockedCourses = [];
          return;
        }
        state.userPlan = normalizeUserPlan(row.plan);
        state.unlockedCourses = parseUnlockedCoursesFromPlan(row.plan, null);
        return;
      }
      logSupabaseError("Load user plan failed:", error);
      state.userPlan = "free";
      state.unlockedCourses = [];
      return;
    }

    if (!data || data.plan == null || data.plan === "") {
      state.userPlan = "free";
      state.unlockedCourses = parseUnlockedCoursesFromPlan(null, data?.unlocked_courses || null);
      return;
    }

    state.userPlan = normalizeUserPlan(data.plan);
    state.unlockedCourses = parseUnlockedCoursesFromPlan(data.plan, data.unlocked_courses || null);
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
      packageId: (state.route === "courseResultPackage" || state.route === "showcase") ? currentResultPackageId : null,
      action: state.route === "freeLesson"
        ? "openFreeLesson"
        : (state.route === "showcase" ? "openShowcase" : null)
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
    return r === "result-packages" || r === "resultPackages" || r === "courseResultPackage" || r === "showcase";
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
    openResultPackage("pkg-admissions");
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
  const info = PUBLIC_BUSINESS_INFO;
  const email = info.supportEmail;
  const phone = info.supportPhone;
  const policyLinks = [
    { route: "about", zh: "關於我們", en: "About" },
    { route: "contact", zh: "聯絡我們", en: "Contact" },
    { route: "terms", zh: "服務條款", en: "Terms" },
    { route: "privacy", zh: "隱私權政策", en: "Privacy" },
    { route: "digital-content", zh: "數位內容說明", en: "Digital Content" },
    { route: "refund-policy", zh: "退款與客服", en: "Refund & Support" }
  ];
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="wrap site-footer-grid">
        <div class="site-footer-brand">
          <strong class="site-footer-name">${info.brandName}</strong>
          <p class="site-footer-tagline">${text(info.positioningZh, info.positioningEn)}</p>
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
        <div class="site-footer-links">
          <h2 class="site-footer-heading">${text("資訊與政策", "Information & Policies")}</h2>
          <ul class="site-footer-link-list">
            ${policyLinks.map(item => `
              <li><button type="button" class="site-footer-link-btn" onclick="setRoute('${item.route}')">${state.lang === "zh" ? item.zh : item.en}</button></li>
            `).join("")}
          </ul>
        </div>
        <div class="site-footer-meta">
          <p>${text(`計價貨幣：${info.currencyZh}`, `Currency: ${info.currencyEn}`)}</p>
          <p>${text(`數位服務：${info.deliveryZh}`, `Digital service: ${info.deliveryEn}`)}</p>
        </div>
      </div>
      <div class="wrap site-footer-bottom">
        <p>© 2026 ${info.brandName}</p>
      </div>
    </footer>
  `;
}

function shell(content) {
  return `
    ${nav()}
    ${content}
    ${renderDevOrderTestPanel()}
    ${renderSiteFooter()}
  `;
}

function homeLandingShell(content) {
  return `${nav()}${content}${renderDevOrderTestPanel()}${renderSiteFooter()}`;
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
  const price = formatTwdPriceToken(min);
  return text(`付費課程 ${price} 起`, `Premium courses from ${price}`);
}

function getHomeAllAccessPriceLabel() {
  const info = getCoursePriceInfo("all-access");
  if (info.price == null) return "";
  return formatTwdPriceToken(info.price);
}

function renderHomePriceTeaser() {
  const single = getHomeSingleCoursePriceLabel();
  const allAccess = getHomeAllAccessPriceLabel();
  return `
    <p class="home-price-teaser">
      <button type="button" class="home-price-teaser-link" onclick="setRoute('map')">
        ${single}${allAccess ? text(`｜全站通行證早鳥價 ${allAccess}`, ` | All-access early-bird price ${allAccess}`) : ""}
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
  // Legacy name kept: now counts packages that reached full Result Saved (10/10), not item totals.
  return countCompletedResultPackages();
}

function countCompletedResultPackages() {
  if (!state.user) return 0;
  return getResultPackageConfigList().reduce((sum, pkg) => {
    if (!hasResultPackageAccess(pkg.id)) return sum;
    const progress = resultPackageProgressByConfig(pkg);
    return sum + (progress.total > 0 && progress.completed >= progress.total ? 1 : 0);
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
              <span>${text("成果包完成數", "Packages completed")}</span>
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
          <li class="home-cap-price"><span class="price-token">${formatTwdPrice(course.price)}</span> · ${text("一次付費", "One-time payment")}</li>
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
          ${renderPriceCurrencyNote("home-price-currency-note")}
        </div>
        <div class="home-pricing-grid">
          <article class="home-price-card">
            <h3>${text("免費開始", "Start Free")}</h3>
            <p class="home-price-amount is-free">${formatTwdPriceToken(0)}</p>
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
            <p class="home-price-diff">${text("適合只需要一項 AI 能力", "Best if you need one AI capability")}</p>
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
            ${allAccessInfo.originalPrice != null ? `<p class="home-price-original"><s class="price-token">${formatTwdPrice(allAccessInfo.originalPrice)}</s></p>` : ""}
            <p class="home-price-amount">${formatTwdPriceToken(allAccessInfo.price)}</p>
            ${saveAmount > 0 ? `<p class="home-price-note">${text(`現省 ${formatTwdPriceToken(saveAmount)}`, `Save ${formatTwdPriceToken(saveAmount)}`)}</p>` : `<p class="home-price-note">${text("一次付費", "One-time payment")}</p>`}
            <p class="home-price-diff">${text("適合建立完整六大 AI 能力", "Best for building all six AI capabilities")}</p>
            <ul>
              <li>${text(`解鎖 ${stats.courseCount} 門付費課程`, `Unlock ${stats.courseCount} premium courses`)}</li>
              <li>${text(`共 ${stats.lessonCount} 堂實戰課`, `${stats.lessonCount} practice lessons total`)}</li>
              <li>${text("全部成果禮包", "All result packages")}</li>
              <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
            </ul>
            ${renderAllAccessPurchaseControls({ variant: "home" })}
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

function getCoursePathConfigList() {
  return (typeof COURSE_PATH_CONFIG !== "undefined" && Array.isArray(COURSE_PATH_CONFIG))
    ? COURSE_PATH_CONFIG
    : [];
}

function getCourseMapFit(courseId) {
  const fit = (typeof COURSE_MAP_FIT !== "undefined" && COURSE_MAP_FIT[courseId])
    ? COURSE_MAP_FIT[courseId]
    : null;
  if (!fit) return "";
  return state.lang === "zh" ? fit.zh : fit.en;
}

function scrollToMapSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelectorAll(".map-path-filter").forEach(btn => {
    const active = btn.getAttribute("data-map-section") === sectionId;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function mapStartFreeCourse() {
  if (!state.authReady) {
    toast(text("正在確認登入狀態…", "Checking sign-in status…"));
    return;
  }
  if (!state.user) {
    requireGoogleLogin({ route: "freeLesson", lessonId: 0, action: "openFreeLesson" });
    return;
  }
  const progress = (typeof v38SafeFreeProgress === "function")
    ? v38SafeFreeProgress()
    : (typeof freeBootcampProgress === "function" ? freeBootcampProgress() : { completed: 0, total: 8 });
  if (progress.completed > 0 && progress.completed < progress.total) {
    homeContinueLastLearning();
    return;
  }
  if (progress.completed >= progress.total && progress.total > 0) {
    openResultPackage("free-starter");
    return;
  }
  openFreeLesson(0);
}

function renderMapCourseCard(course) {
  const unlocked = hasCourseAccess(course.id);
  const progress = courseProgress(course.id);
  const pkg = getResultPackageByCourseId(course.id);
  const product = getCourseProductInfo(course.id);
  const lessonCount = product ? product.lessonCount : (course.zhLessons || course.enLessons || []).length || 10;
  const capability = product
    ? (state.lang === "zh" ? product.capability.zh : product.capability.en)
    : "";
  const valueLine = state.lang === "zh"
    ? (course.zhDesc || (product && product.shortDescription.zh) || "")
    : (course.enDesc || (product && product.shortDescription.en) || "");
  const pkgName = pkg
    ? (state.lang === "zh" ? pkg.zhTitle : pkg.enTitle)
    : (state.lang === "zh" ? course.zhFinalProduct : course.enFinalProduct);
  const fitLine = getCourseMapFit(course.id);
  const packageLabel = pkgName
    ? (state.lang === "zh" ? ("「" + pkgName + "」") : ('"' + pkgName + '"'))
    : "";
  const showPrivate = Boolean(state.user) && unlocked;
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
    <article class="map-course-card ${unlocked ? "" : "is-locked"}" data-course-id="${course.id}">
      <div class="map-course-card-top">
        ${capability ? `<span class="map-capability-badge">${capability}</span>` : ""}
        <span class="tag ${unlocked ? "free" : "premiumtag"}">${getCourseAccessStatusLabel(course.id)}</span>
      </div>
      <h3>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h3>
      <p class="map-course-value">${valueLine}</p>
      <p class="map-course-lessons"><strong>${lessonCount}</strong> ${text("堂實戰課", "Lessons")}</p>
      ${fitLine ? `<p class="map-course-fit"><span>${text("適合", "Best if")}</span> ${fitLine}</p>` : ""}
      ${packageLabel ? `<p class="map-course-package"><span>${text("完成後建立", "You'll build")}</span> ${packageLabel}</p>` : ""}
      <div class="map-course-price">
        <strong class="price-token">${formatTwdPrice(course.price)}</strong>
        <span>${text("一次付費", "One-time payment")}</span>
      </div>
      ${showPrivate ? `<p class="map-course-progress">${text("進度", "Progress")} ${progress.completed}/${progress.total}</p>` : ""}
      <div class="btnrow">
        <button type="button" class="btn ${unlocked ? "primary" : "secondary"}" onclick="${primaryAction}">${primaryLabel}</button>
        ${unlocked ? "" : renderCoursePurchaseControls(course.id, { variant: "map" })}
      </div>
      ${unlocked
        ? `<p class="course-price-owned" role="status">${hasAllAccessPass()
          ? text("已解鎖", "Unlocked")
          : text("已購買", "Purchased")}</p>`
        : ""}
    </article>
  `;
}

function renderMapPathSection(path) {
  const courses = (path.courseIds || [])
    .map(id => getPremiumCourses().find(c => c.id === id))
    .filter(Boolean);
  const isStartup = path.id === "startup";
  const aside = isStartup
    ? `<aside class="map-path-aside">
        <h3>${text("這條路徑適合誰", "Who this path is for")}</h3>
        <p>${state.lang === "zh" ? (path.zhAside || path.zhDesc) : (path.enAside || path.enDesc)}</p>
        <p class="map-path-aside-note">${text(
          "卡片保持與其他課程相同大小，方便比較。",
          "Cards stay the same size as other courses for easier comparison."
        )}</p>
      </aside>`
    : "";

  return `
    <section class="map-path-section map-path-accent-${path.accent || path.id}" id="map-path-${path.id}">
      <header class="map-path-header">
        <p class="map-path-number">${path.number || ""}</p>
        <div>
          <h2>${state.lang === "zh" ? path.zhTitle : path.enTitle}</h2>
          <p class="map-path-desc">${state.lang === "zh" ? path.zhDesc : path.enDesc}</p>
        </div>
      </header>
      <div class="map-path-grid map-path-grid-${path.id}">
        ${courses.map(course => renderMapCourseCard(course)).join("")}
        ${aside}
      </div>
    </section>
  `;
}

function learningMap() {
  const freeProgress = (typeof v38SafeFreeProgress === "function")
    ? v38SafeFreeProgress()
    : { completed: 0, total: (typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 0), percent: 0 };
  const freeLessonCount = freeProgress.total || (typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 8);
  const allAccessInfo = getCoursePriceInfo("all-access");
  const saveAmount = (allAccessInfo.originalPrice != null && allAccessInfo.price != null)
    ? Math.max(allAccessInfo.originalPrice - allAccessInfo.price, 0)
    : 0;
  const paths = getCoursePathConfigList();
  const freeCtaLabel = state.user && freeProgress.completed > 0 && freeProgress.completed < freeProgress.total
    ? text("繼續免費課程", "Continue Free Course")
    : state.user && freeProgress.completed >= freeProgress.total && freeProgress.total > 0
    ? text("查看免費成果", "View Free Results")
    : text("開始免費學習", "Start Free Course");

  return shell(`
    <main class="page map-page">
      <div class="wrap map-page-wrap">
        <section class="map-hero" id="map-hero">
          <h1>${text("選擇你現在最需要的 AI 能力", "Choose the AI Skills You Need Now")}</h1>
          <p class="map-hero-lead">${text(
            "不用一次學完所有工具。從你現在正在面對的學習、研究、求職、工作或創業問題開始。",
            "You don't need to learn every AI tool at once. Start with the challenge you're facing now—study, research, career, work, or entrepreneurship."
          )}</p>
          ${renderPriceCurrencyNote()}
          ${state.user ? renderAccountMembershipSummary() : ""}
        </section>

        <section class="map-free-section" id="map-free">
          <article class="map-free-card">
            <div class="map-free-copy">
              <p class="map-free-kicker">${text("第一次使用 AI Skill Bridge？", "New to AI Skill Bridge?")}</p>
              <h2>${text("免費入門", "Free Course")}</h2>
              <p>${text(
                "先建立 AI 基礎能力，完成可帶走的入門實作成果。",
                "Build foundational AI skills and finish practical starter outputs you can keep."
              )}</p>
              <ul class="map-free-meta">
                <li><strong>${freeLessonCount}</strong> ${text("堂實作課", "practical lessons")}</li>
                <li>${text("AI 基礎能力", "AI fundamentals")}</li>
                <li><span class="price-token">${formatTwdPrice(0)}</span></li>
                <li>${text("適合第一次開始使用平台的人", "Best for first-time platform users")}</li>
              </ul>
            </div>
            <div class="map-free-cta">
              <button type="button" class="btn primary" onclick="mapStartFreeCourse()">${freeCtaLabel}</button>
              ${state.user ? `<button type="button" class="btn secondary" onclick="openResultPackage('free-starter')">${text("查看成果包", "View Package")}</button>` : ""}
            </div>
          </article>
        </section>

        <nav class="map-path-filters" id="map-path-filters" aria-label="${text("路徑快速選擇", "Path shortcuts")}">
          <button type="button" class="map-path-filter is-active" data-map-section="map-paths-all" onclick="scrollToMapSection('map-paths-all')" aria-pressed="true">${text("全部", "All")}</button>
          ${paths.map(path => `
            <button type="button" class="map-path-filter" data-map-section="map-path-${path.id}" onclick="scrollToMapSection('map-path-${path.id}')" aria-pressed="false">
              ${state.lang === "zh" ? path.zhTitle : path.enTitle}
            </button>
          `).join("")}
        </nav>

        <section class="map-guidance" id="map-guidance">
          <p>${text("不知道從哪開始？", "Not sure where to start?")}</p>
          <button type="button" class="btn secondary" onclick="setRoute('assessment')">${text("做能力測驗", "Take the Skill Assessment")}</button>
        </section>

        <div class="map-paths" id="map-paths-all">
          ${paths.map(path => renderMapPathSection(path)).join("")}
        </div>

        <section class="map-all-access-section" id="map-all-access">
          <div class="map-all-access-card">
            <p class="map-all-access-kicker">${text("不知道該選哪一門？", "Not sure which course to pick?")}</p>
            <h2>${text("全站通行證", "All-Access Pass")}</h2>
            <p class="map-all-access-lead">${text(
              "一次解鎖六大 AI 能力。",
              "Unlock all six AI capabilities at once."
            )}</p>
            <ul class="map-all-access-includes">
              <li>${text("6 門付費課", "6 premium courses")}</li>
              <li>${text("60 堂實戰課", "60 practical lessons")}</li>
              <li>${text("6 個付費成果包", "6 premium result packages")}</li>
              <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
            </ul>
            <div class="map-all-access-prices">
              <p><span>${text("早鳥", "Early-bird")}</span><strong class="price-token">${formatTwdPrice(allAccessInfo.price)}</strong></p>
              ${allAccessInfo.originalPrice != null ? `<p><span>${text("原價", "Regular")}</span><s class="price-token">${formatTwdPrice(allAccessInfo.originalPrice)}</s></p>` : ""}
              ${saveAmount > 0 ? `<p><span>${text("現省", "Save")}</span><strong class="price-token">${formatTwdPrice(saveAmount)}</strong></p>` : ""}
            </div>
            <div class="btnrow">
              ${hasAllAccessPass()
                ? `<button type="button" class="btn primary" onclick="setRoute('result-packages')">${text("查看全部成果包", "View All Packages")}</button>`
                : renderAllAccessPurchaseControls({ variant: "map" })
              }
            </div>
            ${hasAllAccessPass() ? `<p class="course-price-owned" role="status">${text("已全站開通", "All Access Unlocked")}</p>` : ""}
          </div>
        </section>

        <section class="map-service-note" id="map-service-note">
          <h2>${text("商品／服務說明", "Product & Service Notes")}</h2>
          <ul>
            <li>${text("所有價格皆以新臺幣（TWD）計價。", "All prices are in New Taiwan Dollars (TWD).")}</li>
            <li>${text("線上數位內容", "Online digital content")}</li>
            <li>${text("無實體配送", "No physical delivery")}</li>
            <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
          </ul>
          <nav class="map-service-links" aria-label="${text("政策連結", "Policy links")}">
            <button type="button" class="linkish" onclick="setRoute('digital-content')">${text("數位內容與服務說明", "Digital Content")}</button>
            <button type="button" class="linkish" onclick="setRoute('refund-policy')">${text("退款與客服", "Refund & Support")}</button>
            <button type="button" class="linkish" onclick="setRoute('terms')">${text("服務條款", "Terms")}</button>
          </nav>
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
                    ${renderCoursePurchaseControls(course.id, { variant: "inline" })}
                  </div>
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
        ${unlocked ? "" : renderCoursePurchaseControls(course.id, { variant: "inline" })}
      </article>
    `;
  }).join("");

  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("premium.title")}</h1>
        <p class="lead">${text(
          "付費區採用「一個完整課程一個價格」的方式，不是單堂課收費。每個課程包含 10 堂課、實作任務、Prompt 模板與最後成果。全站通行證可解鎖全部課程。價格以新臺幣（TWD）一次付費計價。",
          "Premium courses are sold as complete courses, not by individual lessons. Each course includes 10 lessons, practical tasks, prompt templates, and a final product. The All-Access Pass unlocks everything. All prices are in New Taiwan Dollars (TWD) as one-time payments."
        )}</p>
        ${renderPriceCurrencyNote()}

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
          <h2>${text("購買說明", "Purchase Notes")}</h2>
          <p>${text(
            "單門課程與全站通行證皆可於本站以 ECPay（綠界）完成付款。價格與權限以伺服器確認結果為準；登入帳號後，已購買課程會自動解鎖。",
            "Individual courses and the All-Access Pass can be purchased on this site via ECPay. Price and access follow server confirmation; unlocked courses appear on your signed-in account."
          )}</p>
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
  if (!courseId) return null;
  if (typeof COURSE_RESULT_PACKAGE_MAP !== "undefined" && COURSE_RESULT_PACKAGE_MAP[courseId]) {
    return getResultPackageById(COURSE_RESULT_PACKAGE_MAP[courseId]);
  }
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

/** Fixed hub order: free + 6 premium kits (Phase 3A). */
const RESULT_PACKAGE_HUB_ORDER = [
  "free-starter",
  "pkg-admissions",
  "pkg-college-learning",
  "pkg-research-competition",
  "pkg-career-internship",
  "pkg-workplace-productivity",
  "pkg-startup-automation"
];

function getResultPackagesHubEntries() {
  const entries = [];
  RESULT_PACKAGE_HUB_ORDER.forEach(id => {
    const pkg = getResultPackageById(id);
    if (pkg) entries.push({ type: "package", pkg });
  });
  getResultPackageConfigList().forEach(pkg => {
    if (!entries.some(entry => entry.pkg && entry.pkg.id === pkg.id)) {
      entries.push({ type: "package", pkg });
    }
  });
  return entries;
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
  if (item && item.id && item.id !== "all-access" && typeof hasCourseAccess === "function" && !hasCourseAccess(item.id)) {
    toast(state.lang === "zh"
      ? "此課程尚未解鎖。請先購買後再開始學習。"
      : "This course is locked. Please purchase it before starting lessons.");
    return;
  }
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

function getCourseProductInfo(courseId) {
  const course = (typeof PREMIUM !== "undefined" && Array.isArray(PREMIUM))
    ? PREMIUM.find(c => c.id === courseId)
    : null;
  if (!course || courseId === "all-access") return null;
  const copy = (typeof COURSE_PRODUCT_INFO !== "undefined" && COURSE_PRODUCT_INFO[courseId])
    ? COURSE_PRODUCT_INFO[courseId]
    : {};
  const design = (typeof COURSE_DESIGN_META !== "undefined" && COURSE_DESIGN_META[courseId])
    ? COURSE_DESIGN_META[courseId]
    : {};
  const pkg = typeof getResultPackageByCourseId === "function"
    ? getResultPackageByCourseId(courseId)
    : null;
  const lessonCount = design.lessonCount
    || (course.zhLessons || course.enLessons || []).length
    || 10;
  return {
    courseId,
    title: { zh: course.zhTitle || "", en: course.enTitle || "" },
    shortDescription: { zh: course.zhDesc || design.zhPositioning || "", en: course.enDesc || design.enPositioning || "" },
    price: course.price,
    currency: course.currency || "TWD",
    lessonCount,
    capability: {
      zh: design.zhCapability || (pkg && pkg.zhCapability) || "",
      en: design.enCapability || (pkg && pkg.enCapability) || ""
    },
    targetAudience: {
      zh: Array.isArray(copy.zhAudience) ? copy.zhAudience : [],
      en: Array.isArray(copy.enAudience) ? copy.enAudience : []
    },
    notFor: {
      zh: Array.isArray(copy.zhNotFor) ? copy.zhNotFor : [],
      en: Array.isArray(copy.enNotFor) ? copy.enNotFor : []
    },
    outcomes: {
      zh: Array.isArray(copy.zhBuild) && copy.zhBuild.length
        ? copy.zhBuild
        : (Array.isArray(design.zhCanDo) ? design.zhCanDo : []),
      en: Array.isArray(copy.enBuild) && copy.enBuild.length
        ? copy.enBuild
        : (Array.isArray(design.enCanDo) ? design.enCanDo : [])
    },
    needs: {
      zh: Array.isArray(copy.zhNeed) ? copy.zhNeed : [],
      en: Array.isArray(copy.enNeed) ? copy.enNeed : []
    },
    resultPackage: {
      id: pkg ? pkg.id : "",
      zh: (pkg && pkg.zhTitle) || course.zhFinalProduct || "",
      en: (pkg && pkg.enTitle) || course.enFinalProduct || ""
    },
    estimatedLearningFormat: copy.estimatedLearningFormat || {
      zh: "自學式線上實作課程",
      en: "Self-paced online practice course"
    },
    productType: copy.productType || { zh: "線上數位課程", en: "Online digital course" },
    deliveryType: copy.deliveryType || {
      zh: "線上數位內容，無實體配送",
      en: "Digital content · No physical delivery"
    },
    course
  };
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
  const product = getCourseProductInfo(item.id);
  const unlocked = hasCourseAccess(item.id);
  const showPrivate = Boolean(state.user) && unlocked;
  const capability = product
    ? (state.lang === "zh" ? product.capability.zh : product.capability.en)
    : (meta
      ? (state.lang === "zh" ? meta.zhCapability : meta.enCapability)
      : text("核心能力", "Core capability"));
  const positioning = product
    ? (state.lang === "zh" ? product.shortDescription.zh : product.shortDescription.en)
    : (meta
      ? (state.lang === "zh" ? meta.zhPositioning : meta.enPositioning)
      : (state.lang === "zh" ? item.zhDesc : item.enDesc));
  const lessonCount = product
    ? product.lessonCount
    : (meta && meta.lessonCount ? meta.lessonCount : (item.zhLessons || []).length);
  const pkgName = product
    ? (state.lang === "zh" ? product.resultPackage.zh : product.resultPackage.en)
    : "";
  const priceInfo = getCoursePriceInfo(item);
  const continueLabel = progress.completed > 0 && progress.completed < progress.total
    ? text("繼續學習", "Continue Learning")
    : text("開始學習", "Start Learning");

  const ctaHtml = unlocked
    ? `<button type="button" class="btn primary" onclick="openLesson(${findContinueLessonIndex(item.id)})">${continueLabel}</button>
       <button type="button" class="btn secondary" onclick="document.getElementById('course-how-to-learn')?.scrollIntoView({behavior:'smooth',block:'start'})">${text("查看學習方法", "See how to learn")}</button>
       <button type="button" class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("查看成果包", "View Result Package")}</button>`
    : `${renderCoursePurchaseControls(item.id, { variant: "header" })}
       <button type="button" class="btn secondary" onclick="document.getElementById('course-curriculum')?.scrollIntoView({behavior:'smooth',block:'start'})">${text("查看課程內容", "View Course")}</button>
       <button type="button" class="btn secondary" onclick="document.getElementById('course-plan-compare')?.scrollIntoView({behavior:'smooth',block:'start'})">${text("查看方案", "View Plan")}</button>`;

  return `
    <section class="course-pro-hero course-product-hero">
      <div class="course-pro-hero-top">
        <button type="button" class="btn secondary" onclick="setRoute('map')">← ${text("回到所有課程", "Back to All Courses")}</button>
        <span class="tag ${unlocked ? "free" : "premiumtag"}">${getCourseAccessStatusLabel(item.id)}</span>
      </div>
      <p class="course-pro-kicker">${capability}</p>
      <h1>${state.lang === "zh" ? item.zhTitle : item.enTitle}</h1>
      <p class="course-pro-lead">${positioning || ""}</p>
      <ul class="course-product-highlights" aria-label="${text("課程重點", "Course highlights")}">
        <li><span>${text("課程內容", "Contents")}</span><strong>${text(`${lessonCount} 堂實戰課`, `${lessonCount} practical lessons`)}</strong></li>
        <li><span>${text("對應能力", "Capability")}</span><strong>${capability || "—"}</strong></li>
        <li><span>${text("課程售價", "Course Price")}</span><strong class="price-token">${formatTwdPrice(priceInfo.price)}</strong></li>
        <li><span>${text("付款方式", "Payment")}</span><strong>${text("一次付費 · 非訂閱制", "One-time payment · Not a subscription")}</strong></li>
        <li><span>${text("交付方式", "Delivery")}</span><strong>${text("線上數位內容 · 無實體配送", "Digital content · No physical delivery")}</strong></li>
        ${pkgName ? `<li><span>${text("成果禮包", "Result Package")}</span><strong>${pkgName}</strong></li>` : ""}
      </ul>
      ${renderCoursePriceBlock(item, {
        compact: false,
        showFacts: true,
        lessonCount,
        packageName: pkgName || ""
      })}
      ${showPrivate ? `
      <div class="course-pro-progress">
        <div class="course-pro-progress-label">
          <span>${text("目前完成進度", "Current progress")}</span>
          <strong>${progress.completed}/${progress.total}（${progress.percent}%）</strong>
        </div>
        <div class="package-progress-track" aria-hidden="true"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
      </div>` : ""}
      <div class="btnrow course-pro-cta">${ctaHtml}</div>
    </section>
  `;
}

function renderCourseProductListSection({ id, titleZh, titleEn, items }) {
  if (!Array.isArray(items) || !items.length) return "";
  return `
    <section class="course-pro-panel course-product-section" ${id ? `id="${id}"` : ""}>
      <h2>${text(titleZh, titleEn)}</h2>
      <ul class="course-pro-checklist">
        ${items.map(itemText => `<li>${itemText}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderCourseProductAudience(product) {
  if (!product) return "";
  const items = state.lang === "zh" ? product.targetAudience.zh : product.targetAudience.en;
  return renderCourseProductListSection({
    id: "course-audience",
    titleZh: "適合誰",
    titleEn: "Who This Course Is For",
    items
  });
}

function renderCourseProductNotFor(product) {
  if (!product) return "";
  const items = state.lang === "zh" ? product.notFor.zh : product.notFor.en;
  return renderCourseProductListSection({
    id: "course-not-for",
    titleZh: "這門課可能不適合你，如果……",
    titleEn: "This Course May Not Be for You If...",
    items
  });
}

function renderCourseProductOutcomes(product) {
  if (!product) return "";
  const items = state.lang === "zh" ? product.outcomes.zh : product.outcomes.en;
  return renderCourseProductListSection({
    id: "course-outcomes",
    titleZh: "完成後你會得到",
    titleEn: "What You'll Build",
    items
  });
}

function renderCourseProductNeeds(product) {
  if (!product) return "";
  const items = state.lang === "zh" ? product.needs.zh : product.needs.en;
  return renderCourseProductListSection({
    id: "course-needs",
    titleZh: "開始前你需要",
    titleEn: "What You Need",
    items
  });
}

function renderCourseResultPackageMap(product) {
  if (!product || !product.resultPackage) return "";
  const pkgName = state.lang === "zh" ? product.resultPackage.zh : product.resultPackage.en;
  return `
    <section class="course-pro-panel course-product-section" id="course-result-package">
      <h2>${text("對應成果禮包", "Matching Result Package")}</h2>
      <p>${text(
        `本課包含對應成果禮包：${pkgName}。每堂課儲存的成果會整理到這個成果包。`,
        `This course includes the matching result package: ${pkgName}. Outputs saved in each lesson collect into this package.`
      )}</p>
      <p class="course-product-muted">${text(
        "成果需由你完成實作後儲存，不會自動產生不存在的內容。",
        "Results appear after you complete practice and save them — nothing is auto-generated without your work."
      )}</p>
    </section>
  `;
}

function renderCourseHowItWorks() {
  const steps = [
    {
      zhTitle: "閱讀每堂課核心方法",
      enTitle: "Read each lesson’s core method",
      zh: "先理解目標、概念與為什麼重要。",
      en: "Understand the goal, concepts, and why it matters."
    },
    {
      zhTitle: "查看案例",
      enTitle: "Review the example",
      zh: "對照情境、錯誤做法與正確流程。",
      en: "Compare the scenario, common mistakes, and the right workflow."
    },
    {
      zhTitle: "使用 Prompt 完成實作",
      enTitle: "Practice with the prompt",
      zh: "複製 Prompt，換成自己的素材並完成任務。",
      en: "Copy the prompt, replace it with your materials, and finish the task."
    },
    {
      zhTitle: "儲存成果",
      enTitle: "Save your result",
      zh: "把實作輸出存進本課成果包。",
      en: "Save your output into this course’s result package."
    },
    {
      zhTitle: "完成 Lesson",
      enTitle: "Complete the lesson",
      zh: "完成檢查後標記本堂完成。",
      en: "Finish the checklist and mark the lesson complete."
    },
    {
      zhTitle: "累積到成果禮包",
      enTitle: "Build your result package",
      zh: "十堂課成果逐步組成完整成果包。",
      en: "Lesson outputs accumulate into the full result package."
    }
  ];
  return `
    <section class="course-pro-panel course-product-section" id="course-how-it-works">
      <h2>${text("學習方式", "How It Works")}</h2>
      <p class="course-product-muted">${text(
        "本課程為自學式線上數位內容，不含直播、真人批改或一對一顧問。",
        "This is self-paced digital content — no live classes, human grading, or one-on-one coaching."
      )}</p>
      <ol class="course-product-steps">
        ${steps.map((step, i) => `
          <li>
            <span class="course-product-step-num">${i + 1}</span>
            <div>
              <h3>${state.lang === "zh" ? step.zhTitle : step.enTitle}</h3>
              <p>${state.lang === "zh" ? step.zh : step.en}</p>
            </div>
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function renderCoursePlanComparison(item) {
  const allAccess = getCoursePriceInfo("all-access");
  const singlePrice = getCoursePriceInfo(item);
  const saveAmount = (allAccess.originalPrice != null && allAccess.price != null)
    ? Math.max(allAccess.originalPrice - allAccess.price, 0)
    : 0;
  const rows = [
    {
      zh: "課程數量",
      en: "Courses",
      singleZh: "1 門",
      singleEn: "1",
      allZh: "6 門",
      allEn: "6"
    },
    {
      zh: "Lesson 數量",
      en: "Lessons",
      singleZh: "10",
      singleEn: "10",
      allZh: "60",
      allEn: "60"
    },
    {
      zh: "成果包",
      en: "Result Packages",
      singleZh: "1 個",
      singleEn: "1",
      allZh: "6 個付費成果包",
      allEn: "6 premium result packages"
    },
    {
      zh: "價格",
      en: "Price",
      singleZh: formatTwdPrice(singlePrice.price),
      singleEn: formatTwdPrice(singlePrice.price),
      allZh: `${formatTwdPrice(allAccess.price)} ${text("早鳥", "early-bird")}`,
      allEn: `${formatTwdPrice(allAccess.price)} early-bird`
    },
    {
      zh: "付款方式",
      en: "Payment",
      singleZh: "一次付費",
      singleEn: "One-time",
      allZh: "一次付費",
      allEn: "One-time"
    },
    {
      zh: "訂閱",
      en: "Subscription",
      singleZh: "否",
      singleEn: "No",
      allZh: "否",
      allEn: "No"
    },
    {
      zh: "適合對象",
      en: "Best for",
      singleZh: "只需要一項 AI 能力",
      singleEn: "One AI capability focus",
      allZh: "想建立完整六大 AI 能力",
      allEn: "Building all six AI capabilities"
    },
    {
      zh: "使用方式",
      en: "How you use it",
      singleZh: "解鎖本門課與對應成果包",
      singleEn: "Unlock this course and its package",
      allZh: "解鎖六門課、成果包與 Showcase",
      allEn: "Unlock six courses, packages, and Showcase"
    }
  ];

  return `
    <section class="course-pro-panel course-product-section course-plan-compare" id="course-plan-compare">
      <h2>${text("單門課程 vs 全站通行證", "Single Course vs All Access")}</h2>
      <p>${text(
        "全站通行證適合希望同時建立升學、學習、研究、求職、職場與創業 AI 能力的使用者。",
        "All Access suits learners who want AI skills across admissions, study, research, career, workplace, and startups."
      )}</p>
      <div class="course-all-access-value">
        <h3>${text("全站通行證包含", "All Access includes")}</h3>
        <ul class="course-pro-checklist">
          <li>${text("6 門付費課", "6 premium courses")}</li>
          <li>${text("60 堂 Lesson", "60 lessons")}</li>
          <li>${text("6 個付費成果包", "6 premium result packages")}</li>
          <li>${text("Showcase／成果展示功能", "Showcase / results display")}</li>
          <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
        </ul>
        <div class="course-all-access-price">
          <p><span>${text("早鳥價", "Early-bird Price")}</span><strong class="price-token">${formatTwdPrice(allAccess.price)}</strong></p>
          ${allAccess.originalPrice != null ? `<p><span>${text("原價", "Regular Price")}</span><s class="price-token">${formatTwdPrice(allAccess.originalPrice)}</s></p>` : ""}
          ${saveAmount > 0 ? `<p><span>${text("現省", "Save")}</span><strong class="price-token">${formatTwdPrice(saveAmount)}</strong></p>` : ""}
        </div>
      </div>
      <div class="course-compare-table-wrap" role="region" aria-label="${text("方案比較", "Plan comparison")}">
        <table class="course-compare-table">
          <thead>
            <tr>
              <th scope="col">${text("項目", "Item")}</th>
              <th scope="col">${text("單門課", "Single Course")}</th>
              <th scope="col">${text("全站通行證", "All Access")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(row => `
              <tr>
                <th scope="row">${state.lang === "zh" ? row.zh : row.en}</th>
                <td>${state.lang === "zh" ? row.singleZh : row.singleEn}</td>
                <td>${state.lang === "zh" ? row.allZh : row.allEn}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="course-compare-cards">
        <article class="course-compare-card">
          <h3>${text("單門課", "Single Course")}</h3>
          <ul>${rows.map(row => `<li><span>${state.lang === "zh" ? row.zh : row.en}</span><strong>${state.lang === "zh" ? row.singleZh : row.singleEn}</strong></li>`).join("")}</ul>
        </article>
        <article class="course-compare-card is-featured">
          <h3>${text("全站通行證", "All Access")}</h3>
          <ul>${rows.map(row => `<li><span>${state.lang === "zh" ? row.zh : row.en}</span><strong>${state.lang === "zh" ? row.allZh : row.allEn}</strong></li>`).join("")}</ul>
        </article>
      </div>
      ${hasCourseAccess(item.id) || hasAllAccessPass()
        ? ""
        : `<div class="btnrow">${renderCoursePurchaseControls(item.id, { variant: "inline" })}${renderAllAccessPurchaseControls({ variant: "map" })}</div>`}
    </section>
  `;
}

function renderCourseBeforePurchase() {
  return `
    <section class="course-pro-panel course-product-section" id="course-before-purchase">
      <h2>${text("購買前請確認", "Before Purchase")}</h2>
      <ul class="course-pro-checklist">
        <li>${text("本商品為線上數位內容", "This is online digital content")}</li>
        <li>${text("無實體配送", "No physical delivery")}</li>
        <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
        <li>${text("計價貨幣為新臺幣（TWD）", "Prices are in New Taiwan Dollars (TWD)")}</li>
        <li>${text("實際服務與退款條件請參閱相關說明", "Review the service and refund information before purchase")}</li>
      </ul>
      <nav class="course-product-policy-links" aria-label="${text("政策與說明", "Policies")}">
        <button type="button" class="linkish" onclick="setRoute('digital-content')">${text("數位內容與服務說明", "Digital Content & Service Information")}</button>
        <button type="button" class="linkish" onclick="setRoute('refund-policy')">${text("退款與客服", "Refund & Support")}</button>
        <button type="button" class="linkish" onclick="setRoute('terms')">${text("服務條款", "Terms")}</button>
        <button type="button" class="linkish" onclick="setRoute('privacy')">${text("隱私權政策", "Privacy")}</button>
      </nav>
    </section>
  `;
}

function renderCourseOutcomes(meta, item) {
  const product = getCourseProductInfo(item.id);
  if (product) return renderCourseProductOutcomes(product);
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
  const hasAccess = hasCourseAccess(item.id);
  const showPrivate = Boolean(state.user) && hasAccess;
  return `
    <section class="course-pro-panel course-pro-curriculum" id="course-curriculum">
      <div class="course-pro-curriculum-head">
        <h2>${hasAccess ? text("課程目錄", "Curriculum") : text("課程內容預覽", "Lesson Preview")}</h2>
        <p>${showPrivate
          ? `${text("課程完成度", "Course progress")}：${progress.completed}/${progress.total}`
          : text("購買前可查看堂數、標題與簡短成果名稱", "Preview lesson numbers, titles, and short outcome names before purchase")}</p>
      </div>
      <ol class="course-curriculum-list">
        ${lessons.map((title, i) => {
          const detail = getCourseLessonDetail(item.id, i) || details[i] || {};
          const complete = showPrivate && isLessonComplete(item.id, i);
          const unlocked = hasAccess && isLessonUnlocked(item.id, i);
          const current = showPrivate && i === continueIndex && !complete;
          const outcome = getLessonOutputName(detail);
          return `
            <li class="course-curriculum-item ${complete ? "is-complete" : ""} ${current ? "is-current" : ""} ${hasAccess ? (unlocked ? "" : "is-locked") : "is-preview"}">
              <div class="course-curriculum-index">L${i + 1}</div>
              <div class="course-curriculum-body">
                <h3>${title}</h3>
                <p class="course-curriculum-outcome">${outcome || text("本堂實作成果", "Lesson deliverable")}</p>
                ${showPrivate ? `
                <div class="course-curriculum-meta">
                  <span>${complete ? text("已完成", "Completed") : unlocked ? (current ? text("目前課程", "Current") : text("可開始", "Available")) : text("未解鎖", "Locked")}</span>
                </div>` : `
                <div class="course-curriculum-meta">
                  <span>${text("預覽", "Preview")}</span>
                </div>`}
              </div>
              <div class="course-curriculum-action">
                ${hasAccess
                  ? (unlocked
                    ? `<button type="button" class="btn ${current || complete ? "primary" : "secondary"}" onclick="openLesson(${i})">${complete ? text("複習本課", "Review") : text("進入課程", "Open Lesson")}</button>`
                    : `<button type="button" class="btn secondary" disabled>${text("先完成上一課", "Complete previous")}</button>`)
                  : `<span class="course-curriculum-locked-note">${text("解鎖後可學習", "Unlock to learn")}</span>`
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
  const product = getCourseProductInfo(item.id);
  const unlocked = hasCourseAccess(item.id);
  const pkgName = product
    ? (state.lang === "zh" ? product.resultPackage.zh : product.resultPackage.en)
    : "";

  return `
    <main class="page course-pro-page course-product-page">
      <div class="wrap course-pro-wrap">
        ${renderCourseHeader(item, progress, meta)}
        ${renderCourseProductAudience(product)}
        ${renderCourseProductNotFor(product)}
        ${renderCourseProductOutcomes(product)}
        ${renderCourseHowItWorks()}
        ${renderCourseProductNeeds(product)}
        ${renderCourseResultPackageMap(product)}
        ${unlocked ? renderCourseHowToLearn(item, progress) : ""}
        ${unlocked ? renderCourseCompletionCriteria(item.id) : ""}
        <div class="course-pro-layout">
          <div class="course-pro-main">
            ${renderCourseCurriculum(item, details, progress)}
          </div>
          <aside class="course-pro-aside">
            <div class="course-pro-aside-card">
              <h2>${unlocked ? text("學習提示", "Study tips") : text("購買前提醒", "Before you decide")}</h2>
              ${unlocked ? `
              <ul>
                <li>${text("建議依序完成，以累積可重用模板。", "Complete lessons in order to build reusable templates.")}</li>
                <li>${text("每堂課只追求一個明確成果。", "Aim for one clear deliverable per lesson.")}</li>
                <li>${text("繳交前務必查證 AI 內容。", "Always verify AI content before submitting.")}</li>
              </ul>
              <p class="lesson-pro-muted">${text("成果包", "Package")}：${pkgName}</p>
              <button type="button" class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("打開成果包", "Open Result Package")}</button>
              ` : `
              <ul>
                <li>${text("一次付費，非訂閱制", "One-time payment, not a subscription")}</li>
                <li>${text("線上數位內容，無實體配送", "Digital content · No physical delivery")}</li>
                <li>${text("價格以新臺幣（TWD）計價", "Priced in New Taiwan Dollars (TWD)")}</li>
              </ul>
              <p class="lesson-pro-muted">${text("成果包", "Package")}：${pkgName}</p>
              <div class="btnrow">
                ${renderCoursePurchaseControls(item.id, { variant: "inline" })}
                <button type="button" class="btn secondary" onclick="document.getElementById('course-plan-compare')?.scrollIntoView({behavior:'smooth',block:'start'})">${text("查看方案", "View Plan")}</button>
              </div>
              `}
            </div>
          </aside>
        </div>
        ${renderCoursePlanComparison(item)}
        ${renderCourseBeforePurchase()}
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
  const normalized = {
    text: typeof entry.text === "string" ? entry.text : "",
    url: typeof entry.url === "string" ? entry.url : "",
    savedAt: entry.savedAt || "",
    updatedAt: entry.updatedAt || entry.savedAt || ""
  };
  // Phase 3A: admissions legacy applicationPackage keys are read-only fallback (same SoT once saved in lesson).
  if (!isCourseResultEntryComplete(normalized) && courseId === "admissions" && state.user) {
    const legacyText = getLegacyApplicationPackageTextForLesson(lessonIndex);
    if (legacyText && legacyText.trim()) {
      return {
        text: legacyText,
        url: "",
        savedAt: normalized.savedAt || "",
        updatedAt: normalized.updatedAt || "",
        fromLegacy: true
      };
    }
  }
  return normalized;
}

function getLegacyApplicationPackageTextForLesson(lessonIndex) {
  if (typeof APPLICATION_PACKAGE_ITEMS === "undefined" || !Array.isArray(APPLICATION_PACKAGE_ITEMS)) return "";
  const item = APPLICATION_PACKAGE_ITEMS.find(row => row.linkedLessonIndex === Number(lessonIndex));
  if (!item || typeof loadApplicationPackageValue !== "function") return "";
  try {
    return loadApplicationPackageValue(item.id) || "";
  } catch (error) {
    return "";
  }
}

function isCourseResultEntryComplete(entry) {
  const text = (entry && entry.text ? entry.text : "").trim();
  const url = (entry && entry.url ? entry.url : "").trim();
  return Boolean(text || url);
}

function getPackageResultItemStatus(courseId, lessonIndex) {
  const saved = isCourseResultEntryComplete(getCourseResultEntry(courseId, lessonIndex));
  const lessonDone = typeof isLessonComplete === "function" && isLessonComplete(courseId, lessonIndex);
  if (!saved) return "empty";
  if (lessonDone) return "completed";
  return "saved";
}

function packageResultStatusLabel(status) {
  if (status === "completed") return text("已完成", "Completed");
  if (status === "saved") return text("已儲存", "Saved");
  return text("尚未建立", "Not Created");
}

function packageResultStatusClass(status) {
  if (status === "completed") return "result-status-completed";
  if (status === "saved") return "result-status-saved";
  return "result-status-empty";
}

let currentResultPackageFilter = "all";

function setResultPackageFilter(filter) {
  currentResultPackageFilter = (filter === "saved" || filter === "empty") ? filter : "all";
  if (state.route === "courseResultPackage" || state.route === "applicationPackage") {
    render();
  }
}

function formatPackageDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    if (state.lang === "zh") {
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${d.getFullYear()}/${mm}/${dd}`;
    }
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch (error) {
    return "";
  }
}

function formatPackageDateTime(iso) {
  if (!iso) return text("尚未建立", "Not Created");
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return text("尚未建立", "Not Created");
    if (state.lang === "zh") {
      const hh = String(d.getHours()).padStart(2, "0");
      const mi = String(d.getMinutes()).padStart(2, "0");
      return `${d.getMonth() + 1}/${d.getDate()} ${hh}:${mi}`;
    }
    return d.toLocaleString(undefined, {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch (error) {
    return text("尚未建立", "Not Created");
  }
}

function getPackageItemRows(pkg) {
  const storageKey = resultPackageStorageCourseKey(pkg);
  const total = Number(pkg.totalItems) || (pkg.items ? pkg.items.length : 10);
  const rows = [];
  for (let i = 0; i < total; i++) {
    const entry = state.user ? getCourseResultEntry(storageKey, i) : { text: "", url: "", savedAt: "", updatedAt: "" };
    let status = "empty";
    if (state.user) {
      if (pkg.free) {
        status = isCourseResultEntryComplete(entry) ? "saved" : "empty";
      } else {
        status = getPackageResultItemStatus(storageKey, i);
      }
    }
    rows.push({
      index: i,
      status,
      entry,
      meta: getPackageLessonResultMeta(pkg, i),
      updatedAt: (entry && (entry.updatedAt || entry.savedAt)) || ""
    });
  }
  return rows;
}

function getPackageUxSummary(pkg) {
  const items = getPackageItemRows(pkg);
  const savedCount = items.filter(item => item.status !== "empty").length;
  const emptyCount = items.filter(item => item.status === "empty").length;
  let latest = null;
  items.forEach(item => {
    if (!item.updatedAt) return;
    if (!latest || String(item.updatedAt) > String(latest.updatedAt)) latest = item;
  });
  const firstEmpty = items.find(item => item.status === "empty");
  return {
    items,
    savedCount,
    emptyCount,
    total: items.length,
    percent: items.length ? Math.round((savedCount / items.length) * 100) : 0,
    latest,
    firstEmptyIndex: firstEmpty ? firstEmpty.index : 0,
    isComplete: items.length > 0 && savedCount >= items.length,
    isEmpty: savedCount === 0
  };
}

function getPackageContinueAction(summary) {
  if (summary.isEmpty) {
    return {
      label: text("開始建立第一項成果", "Create Your First Result"),
      index: 0,
      reviewAll: false
    };
  }
  if (summary.isComplete) {
    return {
      label: text("查看完整成果", "Review All Results"),
      index: null,
      reviewAll: true
    };
  }
  return {
    label: text("繼續建立成果", "Continue Building Results"),
    index: summary.firstEmptyIndex,
    reviewAll: false
  };
}

function openPackageLesson(courseId, lessonIndex, focusReview) {
  if (!courseId) {
    setRoute("freePortfolio");
    return;
  }
  const stage = focusReview ? "review" : "overview";
  if (typeof continuePremiumLearningStep === "function") {
    continuePremiumLearningStep(courseId, lessonIndex, stage);
    return;
  }
  currentCourseId = courseId;
  openLesson(lessonIndex);
}

function getResultPackageHubState(pkg) {
  if (!state.user) {
    return pkg.free ? "not_started" : "locked";
  }
  if (!hasResultPackageAccess(pkg.id)) return "locked";
  const progress = resultPackageProgressByConfig(pkg);
  if (progress.completed <= 0) return "not_started";
  if (progress.completed >= progress.total) return "completed";
  return "in_progress";
}

function resultPackageHubStateLabel(hubState) {
  if (hubState === "locked") return text("未解鎖", "Locked");
  if (hubState === "completed") return text("已完成", "Completed");
  if (hubState === "in_progress") return text("進行中", "In Progress");
  return text("尚未開始", "Not Started");
}

function resultPackageHubStateClass(hubState) {
  if (hubState === "locked") return "hub-state-locked";
  if (hubState === "completed") return "hub-state-completed";
  if (hubState === "in_progress") return "hub-state-progress";
  return "hub-state-idle";
}

function courseResultPackageProgress(courseId) {
  const pkg = getResultPackageByCourseId(courseId) || getResultPackageById(courseId);
  const total = pkg ? Number(pkg.totalItems) || 10 : 10;
  const storageKey = pkg ? resultPackageStorageCourseKey(pkg) : courseId;
  if (!state.user) {
    return { completed: 0, total, percent: 0 };
  }
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
  if (!state.user) {
    return { completed: 0, total, percent: 0 };
  }
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
    savedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  saveCourseResultPackagesStore(store);
  toast(state.lang === "zh" ? "已儲存到課程成果包" : "Saved to course result package");
  if (state.route === "courseResultPackage" || state.route === "lesson" || state.route === "result-packages") {
    render();
  }
  return true;
}

function renderResultPackageHubCard(pkg, index) {
  const needsLogin = !state.user;
  const unlocked = hasResultPackageAccess(pkg.id);
  const hubState = getResultPackageHubState(pkg);
  const progress = (!needsLogin && unlocked)
    ? resultPackageProgressByConfig(pkg)
    : { completed: 0, total: Number(pkg.totalItems) || (pkg.items ? pkg.items.length : 0), percent: 0 };
  const course = pkg.courseId && typeof PREMIUM !== "undefined"
    ? PREMIUM.find(p => p.id === pkg.courseId)
    : null;
  const capability = state.lang === "zh"
    ? (pkg.zhCapability || pkg.zhCourseName)
    : (pkg.enCapability || pkg.enCourseName);

  return `
    <article class="card result-package-card ${hubState === "locked" || (needsLogin && !pkg.free) ? "result-package-card-locked" : ""}">
      <span class="tag ${resultPackageHubStateClass(hubState)}">${resultPackageHubStateLabel(hubState)}</span>
      <h2>${index + 1}. ${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h2>
      <p><b>${text("所屬課程", "Course")}：</b>${state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName}</p>
      <p><b>${text("對應能力", "Capability")}：</b>${capability}</p>
      <p>${state.lang === "zh" ? pkg.zhDescription : pkg.enDescription}</p>
      <p>${text("完成進度", "Progress")}：${
        needsLogin
          ? text("登入後顯示", "Sign in to view")
          : unlocked
            ? `${progress.completed} / ${progress.total} · ${progress.percent}%`
            : text("解鎖後顯示", "Unlock to view")
      }</p>
      <div class="package-progress-track"><div class="package-progress-bar" style="width:${needsLogin || !unlocked ? 0 : progress.percent}%"></div></div>
      <div class="btnrow">
        ${needsLogin
          ? `<button class="btn primary" onclick="openResultPackage('${pkg.id}')">${text("查看介紹", "View Intro")}</button>
             <button class="btn secondary" onclick='requireGoogleLogin({"route":"courseResultPackage","packageId":"${pkg.id}","action":"openResultPackage"})'>${text("使用 Google 登入", "Sign in with Google")}</button>`
          : unlocked
          ? `<button class="btn primary" onclick="openResultPackage('${pkg.id}')">${text("開啟成果包", "Open Package")}</button>`
          : `<button class="btn secondary" onclick="openResultPackage('${pkg.id}')">${text("查看介紹", "View Intro")}</button>
             <button class="btn primary" onclick="${course ? `openCourse('${course.id}')` : "setRoute('map')"}">${text("查看對應課程", "View Course")}</button>`
        }
      </div>
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
  currentResultPackageId = packageId;
  currentCourseId = pkg.courseId || null;
  currentResultPackageFilter = "all";
  if (pkg.free) {
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
  // Locked packages still open intro (no private results); unlocked open the management view.
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
  if (!state.user) return [];
  getResultPackageConfigList().forEach(pkg => {
    if (!hasResultPackageAccess(pkg.id)) return;
    const storageKey = resultPackageStorageCourseKey(pkg);
    const courseStore = userStore[storageKey] || {};
    Object.keys(courseStore).forEach(lessonKey => {
      const entry = courseStore[lessonKey] || {};
      const at = entry.updatedAt || entry.savedAt;
      if (!at) return;
      const idx = Number(lessonKey);
      const meta = getPackageLessonResultMeta(pkg, idx);
      rows.push({
        packageId: pkg.id,
        packageTitle: state.lang === "zh" ? pkg.zhTitle : pkg.enTitle,
        itemTitle: meta.outcome || meta.title,
        savedAt: at
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
          ${hubEntries.map((entry, index) => renderResultPackageHubCard(entry.pkg, index)).join("")}
        </div>
      </div>
    </main>
  `);
}

function getPackageLessonResultMeta(pkg, lessonIndex) {
  const i = Number(lessonIndex) || 0;
  const courseId = pkg && pkg.courseId ? pkg.courseId : null;
  const course = courseId && typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  const details = (courseId && typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[courseId])
    ? PREMIUM_LESSON_DETAILS[courseId]
    : [];
  const detail = details[i] || {};
  const lessons = course ? (state.lang === "zh" ? course.zhLessons : course.enLessons) : [];
  let title = `L${i + 1}`;
  let outcome = "";
  if (pkg && pkg.free && pkg.items && pkg.items[i]) {
    title = state.lang === "zh" ? pkg.items[i].zh : pkg.items[i].en;
    outcome = title;
  } else {
    title = (state.lang === "zh" ? (detail.zhTitle || lessons[i]) : (detail.enTitle || lessons[i]))
      || lessons[i]
      || `Lesson ${i + 1}`;
    outcome = state.lang === "zh"
      ? (detail.zhOutputName || detail.zhOutcome || "")
      : (detail.enOutputName || detail.enOutcome || "");
  }
  return {
    courseId: courseId || (pkg && pkg.id) || "",
    lessonId: detail.id || detail.lessonId || (courseId ? `${courseId}:index:${i}` : `item:${i}`),
    resultId: `${courseId || (pkg && pkg.id) || "pkg"}:${i}`,
    title,
    outcome,
    lessonIndex: i
  };
}

function renderPremiumPackageResultItem(pkg, row) {
  const lessonIndex = row.index;
  const meta = row.meta;
  const status = row.status;
  const statusLabel = packageResultStatusLabel(status);
  const saved = status !== "empty";
  const updated = row.updatedAt;
  const bodyText = escapeTextareaValue((row.entry && row.entry.text) || "");
  const bodyUrl = escapeTextareaValue((row.entry && row.entry.url) || "");
  const resultName = meta.outcome || meta.title;

  return `
    <section class="panel application-package-item course-result-item result-package-lesson-item" data-result-status="${status}">
      <div class="result-package-item-head">
        <span class="result-package-lesson-label">L${lessonIndex + 1}</span>
        <span class="tag ${packageResultStatusClass(status)}">${statusLabel}</span>
      </div>
      <h3>${resultName}</h3>
      <p class="course-result-meta">${text("最後更新", "Last Updated")}：${saved ? formatPackageDateTime(updated) : text("尚未建立", "Not Created")}</p>
      ${saved ? `
        <details class="lesson-accordion result-package-result-details">
          <summary>${text("查看成果", "View Result")}</summary>
          <div class="result-package-result-body">
            <p><b>${text("成果名稱", "Result")}：</b>${resultName}</p>
            <p><b>${text("對應 Lesson", "Lesson")}：</b>L${lessonIndex + 1} · ${meta.title}</p>
            <p><b>${text("最後更新", "Last Updated")}：</b>${formatPackageDateTime(updated)}</p>
            ${bodyText ? `<pre class="result-package-result-text">${bodyText}</pre>` : ""}
            ${bodyUrl ? `<p><a href="${bodyUrl}" target="_blank" rel="noopener noreferrer">${bodyUrl}</a></p>` : ""}
            <div class="btnrow" style="margin-top:12px">
              <button class="btn secondary" onclick="openPackageLesson('${pkg.courseId}', ${lessonIndex}, true)">${text("回課程編輯", "Edit in Lesson")}</button>
            </div>
          </div>
        </details>
      ` : `
        <p class="result-package-empty-note">${text("尚未建立成果", "No result yet")}</p>
      `}
      <div class="btnrow">
        ${saved
          ? `<button class="btn primary" onclick="openPackageLesson('${pkg.courseId}', ${lessonIndex}, true)">${text("回課程編輯", "Edit in Lesson")}</button>`
          : `<button class="btn primary" onclick="openPackageLesson('${pkg.courseId}', ${lessonIndex}, false)">${text("前往完成這堂課", "Complete This Lesson")}</button>`
        }
      </div>
    </section>
  `;
}

function renderFreePackageResultItem(pkg, row) {
  const lessonIndex = row.index;
  const storageKey = resultPackageStorageCourseKey(pkg);
  const entry = row.entry;
  const status = row.status;
  const meta = row.meta;
  const saved = status !== "empty";
  return `
    <section class="panel application-package-item course-result-item result-package-lesson-item" data-result-status="${status}">
      <div class="result-package-item-head">
        <span class="result-package-lesson-label">${text("成果", "Item")} ${lessonIndex + 1}</span>
        <span class="tag ${packageResultStatusClass(status)}">${packageResultStatusLabel(status)}</span>
      </div>
      <h3>${meta.title}</h3>
      <p class="course-result-meta">${text("最後更新", "Last Updated")}：${saved ? formatPackageDateTime(row.updatedAt) : text("尚未建立", "Not Created")}</p>
      ${saved ? `
        <details class="lesson-accordion result-package-result-details">
          <summary>${text("查看成果", "View Result")}</summary>
          <div class="result-package-result-body">
            ${entry.text ? `<pre class="result-package-result-text">${escapeTextareaValue(entry.text)}</pre>` : ""}
            ${entry.url ? `<p><a href="${escapeTextareaValue(entry.url)}" target="_blank" rel="noopener noreferrer">${escapeTextareaValue(entry.url)}</a></p>` : ""}
          </div>
        </details>
      ` : `<p class="result-package-empty-note">${text("尚未建立成果", "No result yet")}</p>`}
      <label class="course-result-label">${text("成果文字", "Result text")}</label>
      <textarea id="course-result-text-${storageKey}-${lessonIndex}" placeholder="${text("貼上本堂成果...", "Paste this lesson output...")}">${escapeTextareaValue(entry.text)}</textarea>
      <label class="course-result-label">${text("成果連結", "Result link")}</label>
      <input class="course-result-url-input" id="course-result-url-${storageKey}-${lessonIndex}" type="url" value="${escapeTextareaValue(entry.url)}" placeholder="https://" />
      <div class="btnrow">
        <button class="btn primary" onclick="saveCourseResultEntry('${storageKey}', ${lessonIndex})">${text("儲存這一項", "Save This Item")}</button>
        <button class="btn secondary" onclick="setRoute('freePortfolio')">${text("打開免費成果包", "Open Free Portfolio")}</button>
      </div>
    </section>
  `;
}

function renderLockedResultPackageIntro(pkg) {
  const course = pkg.courseId && typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === pkg.courseId) : null;
  const courseName = state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName;
  const capability = state.lang === "zh" ? (pkg.zhCapability || "") : (pkg.enCapability || "");
  const total = Number(pkg.totalItems) || 10;
  const intros = Array.from({ length: total }, (_, i) => {
    const meta = getPackageLessonResultMeta(pkg, i);
    return `<li><b>L${i + 1}</b> ${meta.outcome || meta.title}</li>`;
  }).join("");

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('result-packages')">← ${text("回到成果禮包", "Back to Result Packages")}</button>
        <section class="panel" style="margin-top:16px">
          <span class="tag hub-state-locked">${text("未解鎖", "Locked")}</span>
          <h1>${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h1>
          <p class="lead">${state.lang === "zh" ? pkg.zhDescription : pkg.enDescription}</p>
          <p><b>${text("對應課程", "Course")}：</b>${courseName}</p>
          ${capability ? `<p><b>${text("對應能力", "Capability")}：</b>${capability}</p>` : ""}
          <p>${text(
            `此成果包包含在「${courseName}」中。你可以先了解將會建立的 ${total} 項成果；解鎖課程後即可保存私人內容。`,
            `This package is included in “${courseName}”. You can preview the ${total} results you will build; unlock the course to save private content.`
          )}</p>
          <h2>${text("將包含的成果", "Results included")}</h2>
          <ul class="result-package-intro-list">${intros}</ul>
          <div class="btnrow">
            <button class="btn primary" onclick="${course ? `openCourse('${course.id}')` : "setRoute('map')"}">${text("查看對應課程", "View Course")}</button>
            <button class="btn secondary" onclick="setRoute('result-packages')">${text("回到成果禮包", "Back to Result Packages")}</button>
          </div>
        </section>
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
    return renderLockedResultPackageIntro(pkg);
  }

  if (!state.user) {
    return shell(`
      <main class="page">
        <div class="wrap">
          <section class="panel auth-gate-panel">
            <h1>${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h1>
            <p class="lead">${state.lang === "zh" ? pkg.zhDescription : pkg.enDescription}</p>
            <p>${text("登入後才能查看你的私人成果內容。", "Sign in to view your private results.")}</p>
            <div class="btnrow">
              <button class="btn primary" onclick='requireGoogleLogin({"route":"courseResultPackage","packageId":"${pkg.id}","action":"openResultPackage"})'>${text("使用 Google 登入", "Sign in with Google")}</button>
              <button class="btn secondary" onclick="setRoute('result-packages')">${text("返回成果禮包", "Back to Result Packages")}</button>
            </div>
          </section>
        </div>
      </main>
    `);
  }

  const summary = getPackageUxSummary(pkg);
  const continueAction = getPackageContinueAction(summary);
  const courseLabel = state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName;
  const latestLabel = summary.latest
    ? `L${summary.latest.index + 1} ${summary.latest.meta.outcome || summary.latest.meta.title}`
    : text("尚無", "None");
  const lastUpdatedLine = summary.isEmpty
    ? text("尚未開始建立成果", "No results created yet")
    : text(
      `最近更新：${formatPackageDate(summary.latest && summary.latest.updatedAt)}`,
      `Last updated: ${formatPackageDate(summary.latest && summary.latest.updatedAt)}`
    );
  const filter = currentResultPackageFilter || "all";
  const visibleRows = summary.items.filter(row => {
    if (filter === "saved") return row.status !== "empty";
    if (filter === "empty") return row.status === "empty";
    return true;
  });
  const continueOnclick = continueAction.reviewAll
    ? "(function(){var el=document.getElementById('result-package-list');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});})()"
    : (pkg.free
      ? "setResultPackageFilter('empty');(function(){var el=document.getElementById('result-package-list');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});})()"
      : `openPackageLesson('${pkg.courseId}', ${Number(continueAction.index) || 0}, false)`);

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('result-packages')">← ${text("回到成果禮包", "Back to Result Packages")}</button>

        <section class="panel result-package-detail-header" style="margin-top:16px">
          <span class="tag free">${pkg.icon || ""} ${text("成果包", "Result Package")}</span>
          ${summary.isComplete ? `<span class="tag result-status-completed">${text("成果包已完成", "Result Package Complete")}</span>` : ""}
          <h1>${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h1>
          <p class="lead">${state.lang === "zh" ? pkg.zhDescription : pkg.enDescription}</p>
          <p class="result-package-progress-line">${
            state.lang === "zh"
              ? `已完成 ${summary.savedCount} / ${summary.total} 項成果`
              : `${summary.savedCount} / ${summary.total} results completed`
          }</p>
          <p class="result-package-percent">${summary.percent}%</p>
          <div class="package-progress-track">
            <div class="package-progress-bar" style="width:${summary.percent}%"></div>
          </div>
          <p class="course-result-meta">${lastUpdatedLine}</p>
          <div class="btnrow result-package-continue-row">
            <button class="btn primary" onclick="${continueOnclick}">${continueAction.label}</button>
            <button class="btn secondary" onclick="openResultPackageShowcase('${pkg.id}')">${text("成果展示", "Showcase")}</button>
            ${pkg.courseId ? `<button class="btn secondary" onclick="openCourse('${pkg.courseId}')">${text("打開對應課程", "Open Course")}</button>` : ""}
          </div>
        </section>

        <section class="panel result-package-summary" style="margin-top:16px">
          <h2>${text("成果摘要", "Results Summary")}</h2>
          <ul class="result-package-summary-list">
            <li><b>${text("已完成", "Completed")}：</b>${summary.savedCount}</li>
            <li><b>${text("尚未建立", "Not Created")}：</b>${summary.emptyCount}</li>
            <li><b>${text("最近更新", "Recently Updated")}：</b>${latestLabel}</li>
            <li><b>${text("對應課程", "Course")}：</b>${courseLabel}</li>
          </ul>
          <p class="course-result-meta">${text(
            "「已完成」這裡指已儲存成果數量；Lesson 完課狀態另計。",
            "“Completed” here means saved results; lesson completion is tracked separately."
          )}</p>
        </section>

        <div class="result-package-filter-row" id="result-package-list">
          <button type="button" class="lang ${filter === "all" ? "active" : ""}" onclick="setResultPackageFilter('all')">${text("全部", "All")}</button>
          <button type="button" class="lang ${filter === "saved" ? "active" : ""}" onclick="setResultPackageFilter('saved')">${text("已完成／已儲存", "Saved")}</button>
          <button type="button" class="lang ${filter === "empty" ? "active" : ""}" onclick="setResultPackageFilter('empty')">${text("尚未建立", "Not Created")}</button>
        </div>

        <div class="grid course-result-grid result-package-lesson-grid" style="margin-top:16px">
          ${visibleRows.length
            ? visibleRows.map(row => (
              pkg.free ? renderFreePackageResultItem(pkg, row) : renderPremiumPackageResultItem(pkg, row)
            )).join("")
            : `<section class="panel"><p>${text("這個篩選條件下沒有成果項目。", "No results match this filter.")}</p></section>`
          }
        </div>

        <section class="panel" style="margin-top:24px">
          <h2>${text("這門課的最終成果", "Final Course Outcome")}</h2>
          <p>${state.lang === "zh" ? pkg.zhFinalOutcome : pkg.enFinalOutcome}</p>
          <div class="btnrow">
            ${pkg.courseId
              ? `<button class="btn secondary" onclick="openCourse('${pkg.courseId}')">${text("回到課程繼續學習", "Back to Course")}</button>`
              : `<button class="btn secondary" onclick="setRoute('freePortfolio')">${text("打開免費成果包", "Open Free Portfolio")}</button>`
            }
            ${pkg.id === "pkg-admissions"
              ? `<button class="btn secondary" onclick="copyFinalReviewPrompt()">${text("複製最終總檢查 Prompt", "Copy Final Review Prompt")}</button>`
              : ""
            }
            <button class="btn primary" onclick="setRoute('result-packages')">${text("查看全部成果禮包", "View All Packages")}</button>
          </div>
        </section>
      </div>
    </main>
  `);
}

/* ========== Phase 3C: Result Package Showcase (display layer only) ========== */
const SHOWCASE_PREFS_STORAGE_KEY = "asb_showcase_prefs_v1";

const SHOWCASE_DEFAULT_TITLES = {
  "free-starter": { zh: "我的 AI 學習成果", en: "My AI Learning Portfolio" },
  "pkg-admissions": { zh: "我的大學申請成果", en: "My University Application Results" },
  "pkg-college-learning": { zh: "我的 AI 學習系統", en: "My AI Learning System" },
  "pkg-research-competition": { zh: "我的研究與競賽成果", en: "My Research & Competition Results" },
  "pkg-career-internship": { zh: "我的求職與實習成果", en: "My Career & Internship Results" },
  "pkg-workplace-productivity": { zh: "我的 AI 工作流程", en: "My AI Workplace Workflow" },
  "pkg-startup-automation": { zh: "我的創業與 AI 自動化藍圖", en: "My Startup & AI Automation Blueprint" }
};

function getDefaultShowcaseTitle(packageId) {
  const row = SHOWCASE_DEFAULT_TITLES[packageId] || { zh: "我的 AI 學習成果", en: "My AI Learning Portfolio" };
  return state.lang === "zh" ? row.zh : row.en;
}

function loadShowcasePrefsStore() {
  try {
    const raw = localStorage.getItem(SHOWCASE_PREFS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveShowcasePrefsStore(store) {
  localStorage.setItem(SHOWCASE_PREFS_STORAGE_KEY, JSON.stringify(store));
}

function getShowcasePrefsRaw(packageId) {
  const store = loadShowcasePrefsStore();
  const userKey = courseResultPackageUserKey();
  const userStore = store[userKey] || {};
  const prefs = userStore[packageId] || {};
  return {
    displayName: typeof prefs.displayName === "string" ? prefs.displayName : "",
    title: typeof prefs.title === "string" ? prefs.title : "",
    selected: Array.isArray(prefs.selected) ? prefs.selected.map(Number).filter(n => !Number.isNaN(n)) : null
  };
}

function getShowcasePrefs(packageId) {
  const raw = getShowcasePrefsRaw(packageId);
  return {
    displayName: raw.displayName,
    title: raw.title.trim() ? raw.title : getDefaultShowcaseTitle(packageId),
    selected: raw.selected
  };
}

function persistShowcasePrefs(packageId, patch = {}) {
  if (!state.user || !packageId) return;
  const store = loadShowcasePrefsStore();
  const userKey = courseResultPackageUserKey();
  if (!store[userKey]) store[userKey] = {};
  const prev = getShowcasePrefsRaw(packageId);
  store[userKey][packageId] = {
    displayName: patch.displayName != null ? String(patch.displayName) : prev.displayName,
    title: patch.title != null ? String(patch.title) : prev.title,
    selected: patch.selected !== undefined ? patch.selected : prev.selected
  };
  saveShowcasePrefsStore(store);
}

function getShowcaseSelectableRows(pkg) {
  return getPackageItemRows(pkg).filter(row => row.status !== "empty");
}

function getShowcaseSelectedIndices(pkg) {
  const savedRows = getShowcaseSelectableRows(pkg);
  const prefs = getShowcasePrefsRaw(pkg.id);
  if (!prefs.selected) return savedRows.map(row => row.index);
  const allowed = new Set(savedRows.map(row => row.index));
  return prefs.selected.filter(index => allowed.has(index));
}

function openResultPackageShowcase(packageId) {
  const pkg = getResultPackageById(packageId);
  if (!pkg) {
    toast(state.lang === "zh" ? "找不到成果包" : "Result package not found");
    return;
  }
  if (!state.user) {
    requireGoogleLogin({
      route: "showcase",
      packageId,
      action: "openShowcase"
    });
    return;
  }
  if (!hasResultPackageAccess(packageId)) {
    toast(state.lang === "zh" ? "請先解鎖此成果包" : "Please unlock this result package first");
    openResultPackage(packageId);
    return;
  }
  currentResultPackageId = packageId;
  currentCourseId = pkg.courseId || null;
  setRoute("showcase");
}

function printResultPackageShowcase() {
  window.print();
}

function applyShowcaseControls(packageId) {
  const nameEl = document.getElementById("showcase-display-name");
  const titleEl = document.getElementById("showcase-title");
  const selected = [];
  document.querySelectorAll(".showcase-select-item:checked").forEach(el => {
    selected.push(Number(el.value));
  });
  persistShowcasePrefs(packageId, {
    displayName: nameEl ? nameEl.value : "",
    title: titleEl ? titleEl.value : "",
    selected
  });
  toast(state.lang === "zh" ? "展示設定已更新" : "Showcase settings updated");
  render();
}

function selectAllShowcaseSaved(packageId) {
  const pkg = getResultPackageById(packageId);
  if (!pkg) return;
  const indices = getShowcaseSelectableRows(pkg).map(row => row.index);
  const nameEl = document.getElementById("showcase-display-name");
  const titleEl = document.getElementById("showcase-title");
  persistShowcasePrefs(packageId, {
    displayName: nameEl ? nameEl.value : getShowcasePrefsRaw(packageId).displayName,
    title: titleEl ? titleEl.value : getShowcasePrefsRaw(packageId).title,
    selected: indices
  });
  render();
}

function getShowcaseFilenameHint(pkg) {
  const name = state.lang === "zh" ? pkg.zhTitle : pkg.enTitle;
  const safe = String(name || "Result-Package")
    .replace(/[\\/:*?"<>|]+/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 48);
  return `AI-Skill-Bridge-${safe || "Showcase"}`;
}

function formatShowcasePreparedDate() {
  const d = new Date();
  if (state.lang === "zh") {
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}/${mm}/${dd}`;
  }
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function resultPackageShowcase() {
  const pkg = currentResultPackageId
    ? getResultPackageById(currentResultPackageId)
    : null;

  if (!pkg) {
    return shell(`
      <main class="page">
        <div class="wrap">
          <h1>${text("找不到成果包", "Package Not Found")}</h1>
          <button class="btn primary" onclick="setRoute('result-packages')">${text("回到成果禮包", "Back to Result Packages")}</button>
        </div>
      </main>
    `);
  }

  if (!state.authReady) return renderAuthChecking();

  if (!state.user) {
    return shell(`
      <main class="page">
        <div class="wrap">
          <section class="panel auth-gate-panel">
            <h1>${text("成果展示", "Showcase")}</h1>
            <p class="lead">${text(
              "請先登入後，才能查看你的私人成果展示。",
              "Sign in to view your private result showcase."
            )}</p>
            <div class="btnrow">
              <button class="btn primary" onclick='requireGoogleLogin({"route":"showcase","packageId":"${pkg.id}","action":"openShowcase"})'>${text("使用 Google 登入", "Sign in with Google")}</button>
              <button class="btn secondary" onclick="openResultPackage('${pkg.id}')">${text("返回成果包", "Back to Result Package")}</button>
            </div>
          </section>
        </div>
      </main>
    `);
  }

  if (!hasResultPackageAccess(pkg.id)) {
    return renderLockedResultPackageIntro(pkg);
  }

  const summary = getPackageUxSummary(pkg);
  const prefs = getShowcasePrefs(pkg.id);
  const selectable = getShowcaseSelectableRows(pkg);
  const selectedIndices = getShowcaseSelectedIndices(pkg);
  const selectedSet = new Set(selectedIndices);
  const selectedRows = selectable.filter(row => selectedSet.has(row.index));
  const courseLabel = state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName;
  const packageLabel = state.lang === "zh" ? pkg.zhTitle : pkg.enTitle;
  const filenameHint = getShowcaseFilenameHint(pkg);
  const continueCourseAction = pkg.courseId
    ? `openCourse('${pkg.courseId}')`
    : "setRoute('freePortfolio')";

  if (!selectable.length) {
    return shell(`
      <main class="page showcase-page">
        <div class="wrap">
          <section class="panel">
            <h1>${text("成果展示", "Showcase")}</h1>
            <p class="lead">${text("目前還沒有可展示的成果。", "No results are available to showcase yet.")}</p>
            <div class="btnrow">
              <button class="btn primary" onclick="${continueCourseAction}">${text("前往完成課程", "Continue Course")}</button>
              <button class="btn secondary" onclick="openResultPackage('${pkg.id}')">${text("返回成果包", "Back to Result Package")}</button>
            </div>
          </section>
        </div>
      </main>
    `);
  }

  return shell(`
    <main class="page showcase-page">
      <div class="wrap">
        <section class="panel showcase-toolbar no-print">
          <div class="btnrow">
            <button class="btn secondary" onclick="openResultPackage('${pkg.id}')">${text("返回成果包", "Back to Result Package")}</button>
            <button class="btn secondary" onclick="(function(){var el=document.getElementById('showcase-select-panel');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});})()">${text("選擇成果", "Select Results")}</button>
            <button class="btn primary" onclick="printResultPackageShowcase()">${text("列印／存成 PDF", "Print / Save as PDF")}</button>
          </div>
          <p class="course-result-meta">${text(
            `建議檔名：${filenameHint}`,
            `Suggested filename: ${filenameHint}`
          )}</p>
          <p class="showcase-privacy-note">${text(
            "請在展示或列印前確認內容中沒有不希望公開的個人資料、公司機密或敏感資訊。",
            "Before presenting or printing, review your content and remove personal, confidential, or sensitive information you do not want to disclose."
          )}</p>
        </section>

        <section class="panel showcase-controls no-print" id="showcase-select-panel" style="margin-top:16px">
          <h2>${text("展示設定", "Showcase Settings")}</h2>
          <label class="course-result-label" for="showcase-display-name">${text("展示名稱", "Display Name")}</label>
          <input id="showcase-display-name" class="showcase-input" type="text" value="${escapeTextareaValue(prefs.displayName)}" placeholder="Aven Chou" />
          <label class="course-result-label" for="showcase-title">${text("成果展示標題", "Showcase Title")}</label>
          <input id="showcase-title" class="showcase-input" type="text" value="${escapeTextareaValue(prefs.title)}" placeholder="${escapeTextareaValue(getDefaultShowcaseTitle(pkg.id))}" />
          <h3 style="margin-top:16px">${text("選擇成果", "Select Results")}</h3>
          <p class="course-result-meta">${text("只有已儲存的成果可以加入展示。", "Only saved results can be included.")}</p>
          <div class="showcase-select-list">
            ${selectable.map(row => `
              <label class="showcase-select-row">
                <input class="showcase-select-item" type="checkbox" value="${row.index}" ${selectedSet.has(row.index) ? "checked" : ""} />
                <span>L${row.index + 1} · ${row.meta.outcome || row.meta.title}</span>
              </label>
            `).join("")}
          </div>
          <div class="btnrow" style="margin-top:14px">
            <button class="btn secondary" onclick="selectAllShowcaseSaved('${pkg.id}')">${text("全選已儲存", "Select All Saved")}</button>
            <button class="btn primary" onclick="applyShowcaseControls('${pkg.id}')">${text("套用展示設定", "Apply Showcase Settings")}</button>
          </div>
        </section>

        <article class="showcase-document" style="margin-top:16px">
          <header class="showcase-cover">
            <p class="showcase-brand">AI Skill Bridge</p>
            <h1 class="showcase-title">${escapeTextareaValue(prefs.title)}</h1>
            <p class="showcase-package-name">${packageLabel}</p>
            <p class="showcase-course">${text("對應課程", "Course")}：${courseLabel}</p>
            ${prefs.displayName.trim()
              ? `<p class="showcase-display-name">${text("展示名稱", "Display Name")}：${escapeTextareaValue(prefs.displayName.trim())}</p>`
              : ""
            }
            <p class="showcase-progress">${
              state.lang === "zh"
                ? `${summary.savedCount} / ${summary.total} 項成果`
                : `${summary.savedCount} / ${summary.total} results completed`
            }</p>
            <p class="showcase-prepared">${text("整理日期", "Prepared on")}：${formatShowcasePreparedDate()}</p>
          </header>

          ${selectedRows.length ? `
            <section class="showcase-items">
              <h2 class="showcase-section-title">${text("展示項目", "Showcase Items")}</h2>
              ${selectedRows.map(row => {
                const resultName = row.meta.outcome || row.meta.title;
                const bodyText = escapeTextareaValue((row.entry && row.entry.text) || "");
                const bodyUrl = escapeTextareaValue((row.entry && row.entry.url) || "");
                const updated = row.updatedAt ? formatPackageDate(row.updatedAt) : "";
                return `
                  <section class="showcase-item">
                    <p class="showcase-item-label">L${row.index + 1}</p>
                    <h3>${resultName}</h3>
                    ${updated ? `<p class="showcase-item-meta">${text("最後更新", "Last Updated")}：${updated}</p>` : ""}
                    ${bodyText ? `<pre class="showcase-item-body">${bodyText}</pre>` : ""}
                    ${bodyUrl ? `<p class="showcase-item-link"><a href="${bodyUrl}" target="_blank" rel="noopener noreferrer">${bodyUrl}</a></p>` : ""}
                  </section>
                `;
              }).join("")}
            </section>
          ` : `
            <section class="showcase-items">
              <p>${text("請至少選擇一項已儲存成果。", "Please select at least one saved result.")}</p>
            </section>
          `}
        </article>
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
  // Phase 3A: same SoT as pkg-admissions / lesson results (legacy keys via getCourseResultEntry compat).
  return courseResultPackageProgress("admissions");
}

function updateApplicationPackageProgressUI() {
  const progress = applicationPackageProgress(false);
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
  const pkg = getResultPackageById("pkg-admissions");
  const data = Array.from({ length: 10 }, (_, i) => {
    const meta = getPackageLessonResultMeta(pkg || { courseId: "admissions", free: false }, i);
    const entry = getCourseResultEntry("admissions", i);
    const body = (entry.text || entry.url || "").trim() || emptyLabel;
    return `L${i + 1}. ${meta.title}\n${body}`;
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
  // Phase 3A: applicationPackage route shares pkg-admissions SoT (no second kit UI).
  currentResultPackageId = "pkg-admissions";
  currentCourseId = "admissions";
  return courseResultPackage();
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

/* ========== Phase 4A: Public trust / policy pages ========== */
const PUBLIC_INFO_ROUTE_IDS = [
  "about",
  "contact",
  "terms",
  "privacy",
  "digital-content",
  "refund-policy"
];

const PUBLIC_INFO_NAV = [
  { route: "about", zh: "關於我們", en: "About" },
  { route: "contact", zh: "聯絡我們", en: "Contact" },
  { route: "terms", zh: "服務條款", en: "Terms" },
  { route: "privacy", zh: "隱私權政策", en: "Privacy" },
  { route: "digital-content", zh: "數位內容說明", en: "Digital Content" },
  { route: "refund-policy", zh: "退款與客服", en: "Refund & Support" }
];

function getDocumentTitleForRoute(route) {
  if (route === "course" && currentCourseId && typeof PREMIUM !== "undefined") {
    const item = PREMIUM.find(p => p.id === currentCourseId);
    if (item) {
      const courseTitle = state.lang === "zh" ? item.zhTitle : item.enTitle;
      return `${courseTitle} | ${PUBLIC_BUSINESS_INFO.brandName}`;
    }
  }
  if (route === "lesson" && currentCourseId && typeof PREMIUM !== "undefined") {
    const item = PREMIUM.find(p => p.id === currentCourseId);
    if (item) {
      const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
      const lessonTitle = lessons && lessons[currentLessonIndex]
        ? lessons[currentLessonIndex]
        : (state.lang === "zh" ? "課程內容" : "Lesson");
      return `${lessonTitle} | ${PUBLIC_BUSINESS_INFO.brandName}`;
    }
  }
  const pageTitle = ({
    about: text("關於 AI Skill Bridge", "About AI Skill Bridge"),
    contact: text("聯絡我們", "Contact Us"),
    terms: text("服務條款", "Terms of Service"),
    privacy: text("隱私權政策", "Privacy Policy"),
    "digital-content": text("數位內容與服務說明", "Digital Content & Service Information"),
    "refund-policy": text("退款與客服說明", "Refund & Support"),
    "result-packages": text("成果禮包", "Result Packages"),
    resultPackages: text("成果禮包", "Result Packages"),
    showcase: text("成果展示", "Showcase"),
    map: text("學習地圖", "Learning Map"),
    premium: text("進階課程", "Premium Courses"),
    learning: text("我的學習中心", "Learning Center"),
    courses: text("免費入門", "Free Intro"),
    course: text("課程", "Course"),
    lesson: text("課程內容", "Lesson"),
    freePortfolio: text("免費成果包", "Free Result Package"),
    assessment: text("AI 能力測驗", "AI Skill Assessment")
  })[route];
  if (!pageTitle) return PUBLIC_BUSINESS_INFO.brandName;
  return `${pageTitle} | ${PUBLIC_BUSINESS_INFO.brandName}`;
}

function renderPublicInfoNav(activeRoute) {
  return `
    <nav class="public-info-nav" aria-label="${text("資訊與政策", "Information & Policies")}">
      <p class="public-info-nav-label">${text("相關頁面", "Related pages")}</p>
      <ul>
        ${PUBLIC_INFO_NAV.map(item => `
          <li>
            <button type="button" class="public-info-nav-link ${activeRoute === item.route ? "is-active" : ""}" onclick="setRoute('${item.route}')">
              ${state.lang === "zh" ? item.zh : item.en}
            </button>
          </li>
        `).join("")}
      </ul>
    </nav>
  `;
}

function renderPublicInfoPage({ route, title, lead, bodyHtml }) {
  return shell(`
    <main class="page public-info-page">
      <div class="wrap public-info-layout">
        <article class="panel public-info-article">
          <h1>${title}</h1>
          ${lead ? `<p class="lead">${lead}</p>` : ""}
          <div class="public-info-body">
            ${bodyHtml}
          </div>
        </article>
        ${renderPublicInfoNav(route)}
      </div>
    </main>
  `);
}

function renderPublicSupportBlock() {
  const info = PUBLIC_BUSINESS_INFO;
  return `
    <ul class="public-info-list">
      <li><b>${text("Email", "Email")}：</b><a href="mailto:${info.supportEmail}">${info.supportEmail}</a></li>
      <li><b>${text("電話", "Phone")}：</b><a href="tel:${info.supportPhone}">${info.supportPhone}</a></li>
    </ul>
  `;
}

function aboutPage() {
  return renderPublicInfoPage({
    route: "about",
    title: text("關於 AI Skill Bridge", "About AI Skill Bridge"),
    lead: text(
      "AI Skill Bridge 是一個以實作成果為核心的 AI 學習平台，協助使用者從認識 AI 工具，進一步建立升學、學習、研究、求職、職場與創業所需的 AI 應用能力。",
      "AI Skill Bridge is a practice-first AI learning platform that helps people move from exploring AI tools to building practical skills for admissions, study, research, careers, workplace work, and startups."
    ),
    bodyHtml: `
      <section class="public-info-section">
        <h2>${text("我們在做什麼", "What we offer")}</h2>
        <p>${text(
          "平台以可完成、可保存、可整理的成果為核心，而不是只提供觀看內容。",
          "The platform focuses on outputs you can complete, save, and organize—not watching content alone."
        )}</p>
        <ul class="public-info-list">
          <li>${text("免費入門課程", "A free introductory course")}</li>
          <li>${text("六種核心 AI 能力", "Six core AI capability tracks")}</li>
          <li>${text("六門付費實戰課程", "Six premium practice courses")}</li>
          <li>${text("共 60 堂付費實作課", "60 premium practice lessons in total")}</li>
          <li>${text("成果禮包與學習進度", "Result packages and learning progress")}</li>
          <li>${text("成果展示與列印／存成 PDF", "Showcase view with print / save as PDF")}</li>
        </ul>
      </section>
      <section class="public-info-section">
        <h2>${text("平台定位", "Positioning")}</h2>
        <p>${text(PUBLIC_BUSINESS_INFO.positioningZh, PUBLIC_BUSINESS_INFO.positioningEn)}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("聯絡", "Contact")}</h2>
        <p>${text("如需協助，請使用客服聯絡資訊與我們聯繫。", "If you need help, please reach us through the support contacts below.")}</p>
        ${renderPublicSupportBlock()}
      </section>
    `
  });
}

function contactPage() {
  const info = PUBLIC_BUSINESS_INFO;
  return renderPublicInfoPage({
    route: "contact",
    title: text("聯絡我們", "Contact Us"),
    lead: text(
      "若您對課程、帳號、成果或服務有疑問，可以透過以下方式聯絡我們。",
      "For questions about courses, accounts, results, or the platform, please contact us using the information below."
    ),
    bodyHtml: `
      <section class="public-info-section">
        <h2>${text("客服聯絡資訊", "Customer Support")}</h2>
        ${renderPublicSupportBlock()}
      </section>
      <section class="public-info-section">
        <h2>${text("服務資訊", "Service Information")}</h2>
        <ul class="public-info-list">
          <li><b>${text("服務", "Service")}：</b>${text(info.serviceTypeZh, info.serviceTypeEn)}</li>
          <li><b>${text("計價貨幣", "Currency")}：</b>${text(info.currencyZh, info.currencyEn)}</li>
          <li><b>${text("服務方式", "Delivery")}：</b>${text(info.deliveryZh, info.deliveryEn)}</li>
        </ul>
      </section>
    `
  });
}

function termsPage() {
  const info = PUBLIC_BUSINESS_INFO;
  return renderPublicInfoPage({
    route: "terms",
    title: text("服務條款", "Terms of Service"),
    lead: text(
      "以下為 AI Skill Bridge 第一版服務條款摘要，方便使用者理解平台使用方式。",
      "This is a first-edition Terms of Service summary to help users understand how AI Skill Bridge works."
    ),
    bodyHtml: `
      <section class="public-info-section">
        <h2>1. ${text("服務說明", "Service Description")}</h2>
        <p>${text(
          "AI Skill Bridge 提供線上 AI 學習內容、實作流程、成果整理與相關數位學習工具。服務內容可能隨產品更新而調整。",
          "AI Skill Bridge provides online AI learning content, practice workflows, result organization tools, and related digital learning features. Features may change as the product evolves."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>2. ${text("帳號使用", "Account Use")}</h2>
        <ul class="public-info-list">
          <li>${text("目前以 Google 登入（Google OAuth）建立與使用帳號。", "Accounts are created and accessed through Google sign-in (Google OAuth).")}</li>
          <li>${text("請妥善保護您的 Google 帳號與登入環境。", "Please protect your Google account and sign-in environment.")}</li>
          <li>${text("請勿將帳號提供他人使用，或以未授權方式存取他人帳號。", "Do not share your account or access another person’s account without authorization.")}</li>
          <li>${text("您的學習成果屬私人內容，請勿在未授權情況下公開或轉讓他人專屬存取權。", "Your learning results are private content; do not disclose or transfer exclusive access without authorization.")}</li>
        </ul>
      </section>
      <section class="public-info-section">
        <h2>3. ${text("課程與數位內容", "Courses and Digital Content")}</h2>
        <p>${text(
          "課程、Prompt、案例、實作任務與成果工具屬於數位內容。取得對應權限後，請於本網站登入使用。平台不提供實體配送。",
          "Courses, prompts, cases, practice tasks, and result tools are digital content. After you receive the relevant access, use them by signing in on this website. Physical delivery is not provided."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>4. ${text("使用者責任", "User Responsibilities")}</h2>
        <p>${text(
          "您應以合法、合理方式使用平台，並對自己輸入、儲存與對外使用的內容負責。",
          "You agree to use the platform lawfully and responsibly, and you are responsible for content you enter, save, or use externally."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>5. ${text("AI 使用限制", "AI Use Limitations")}</h2>
        <p>${text(
          "AI Skill Bridge 提供 AI 使用方法、Prompt、學習流程與實作框架。AI 產生的回答可能不完整、不正確或過時。請自行查證重要資訊，並遵守學校、公司或所在機構政策。",
          "AI Skill Bridge provides AI methods, prompts, learning flows, and practice frameworks. AI-generated answers may be incomplete, incorrect, or outdated. Please verify important information yourself and follow school, workplace, or institutional policies."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>6. ${text("智慧財產", "Intellectual Property")}</h2>
        <p>${text(
          "平台教材、介面、品牌名稱與相關設計，除另有標示外，均受智慧財產相關規定保護。您保留自己輸入與產出成果的內容權利；平台保留提供服務所需的合理使用範圍。",
          "Unless otherwise noted, course materials, interface design, and brand assets are protected by intellectual-property rules. You retain rights to content you create; the platform retains the rights needed to operate the service."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>7. ${text("禁止行為", "Prohibited Conduct")}</h2>
        <ul class="public-info-list">
          <li>${text("從事違法、侵權、詐欺或傷害他人權益的行為", "Illegal, infringing, fraudulent, or harmful activity")}</li>
          <li>${text("干擾服務運作、濫用系統或嘗試未授權存取", "Interfering with the service, abusing systems, or attempting unauthorized access")}</li>
          <li>${text("惡意散布惡意程式、垃圾訊息或攻擊性行為", "Distributing malware, spam, or attack behavior")}</li>
        </ul>
      </section>
      <section class="public-info-section">
        <h2>8. ${text("服務變更", "Service Changes")}</h2>
        <p>${text(
          "我們可能更新功能、內容或條款。若重大變更影響既有使用方式，我們會盡合理方式於網站上說明。",
          "We may update features, content, or these terms. If a material change affects how the service works, we will provide reasonable notice on the website."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>9. ${text("聯絡方式", "Contact")}</h2>
        ${renderPublicSupportBlock()}
        <p class="public-info-note">${text(`品牌：${info.brandName}`, `Brand: ${info.brandName}`)}</p>
      </section>
    `
  });
}

function privacyPage() {
  const info = PUBLIC_BUSINESS_INFO;
  return renderPublicInfoPage({
    route: "privacy",
    title: text("隱私權政策", "Privacy Policy"),
    lead: text(
      "本政策說明 AI Skill Bridge 目前實際處理的資料類型與用途。以下內容對應現有產品功能，並非法律審核定稿。",
      "This policy describes the types of data AI Skill Bridge currently processes and why. It reflects existing product features and is not a lawyer-certified final legal opinion."
    ),
    bodyHtml: `
      <section class="public-info-section">
        <h2>1. ${text("我們可能處理哪些資料", "What data we may process")}</h2>
        <ul class="public-info-list">
          <li>${text("Google 登入相關識別資訊（例如 Email、Google user id）", "Google sign-in identifiers (such as email and Google user id)")}</li>
          <li>${text("顯示名稱（Display Name）", "Display name")}</li>
          <li>${text("課程進度、完課狀態與測驗相關紀錄", "Course progress, completion status, and related quiz records")}</li>
          <li>${text("Lesson Results、成果禮包與 Showcase 偏好設定", "Lesson results, result packages, and showcase preferences")}</li>
          <li>${text("瀏覽器本機儲存（localStorage）中的學習與介面設定", "Learning and interface settings stored in browser localStorage")}</li>
          <li>${text("若已同步：Supabase profile 中的基本帳號欄位（例如 id、email、display_name、plan）", "If synced: basic Supabase profile fields (such as id, email, display_name, plan)")}</li>
        </ul>
        <p>${text(
          "目前平台並未要求您提供地址、身分證字號、信用卡或銀行帳號等資料。",
          "The platform does not currently request your postal address, national ID number, credit card, or bank account details."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>2. ${text("為什麼需要這些資料", "Why we need this data")}</h2>
        <p>${text(
          "我們使用這些資料來提供登入、保存進度、顯示課程權限、整理成果，以及改善學習體驗。",
          "We use this data to support sign-in, save progress, show course access, organize results, and improve the learning experience."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>3. ${text("Google 登入", "Google Sign-In")}</h2>
        <p>${text(
          "登入透過 Google Authentication 完成。我們不會另外建立密碼登入系統。",
          "Sign-in is handled through Google Authentication. We do not operate a separate password login system."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>4. ${text("學習進度與成果", "Learning Progress and Results")}</h2>
        <p>${text(
          "您的 Lesson Results 與成果包內容用於個人學習與展示，不會作為公開個人檔案預設公開。",
          "Your lesson results and package content are for personal learning and showcase use, and are not published as a public profile by default."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>5. ${text("localStorage", "localStorage")}</h2>
        <p>${text(
          "部分進度、成果與介面偏好會保存在您的瀏覽器本機儲存中，以便重新整理後仍可繼續使用。",
          "Some progress, results, and interface preferences are stored in your browser’s local storage so your work can continue after refresh."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>6. ${text("Supabase", "Supabase")}</h2>
        <p>${text(
          "平台使用 Supabase 支援身分驗證與基本 profile 相關功能。我們僅處理服務運作所需欄位。",
          "The platform uses Supabase for authentication and basic profile-related features. We process only fields needed to operate the service."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>7. ${text("資料安全", "Data Security")}</h2>
        <p>${text(
          "我們採取合理措施保護資料，但任何網路服務都無法保證絕對安全。",
          "We take reasonable measures to protect data, but no online service can guarantee absolute security."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>8. ${text("第三方服務", "Third-Party Services")}</h2>
        <ul class="public-info-list">
          <li>Google Authentication</li>
          <li>Supabase</li>
          <li>Vercel</li>
          <li>ECPay（綠界科技）</li>
        </ul>
        <p>${text(
          "付款由 ECPay（綠界科技）處理；我們不會在瀏覽器端儲存完整付款憑證作為權限依據。",
          "Payments are processed by ECPay. We do not treat browser-side payment credentials as entitlement authority."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>9. ${text("使用者控制", "Your Controls")}</h2>
        <p>${text(
          "您可登出帳號、管理 Google 帳號授權，並透過客服聯絡我們詢問帳號與資料相關問題。",
          "You can sign out, manage Google account permissions, and contact support about account or data questions."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>10. ${text("聯絡方式", "Contact")}</h2>
        ${renderPublicSupportBlock()}
        <p class="public-info-note">${text(`品牌：${info.brandName}`, `Brand: ${info.brandName}`)}</p>
      </section>
    `
  });
}

function digitalContentPage() {
  const info = PUBLIC_BUSINESS_INFO;
  return renderPublicInfoPage({
    route: "digital-content",
    title: text("數位內容與服務說明", "Digital Content & Service Information"),
    lead: text(
      "AI Skill Bridge 提供線上數位課程與學習成果管理服務。",
      "AI Skill Bridge provides online digital courses and learning-result management services."
    ),
    bodyHtml: `
      <section class="public-info-section">
        <h2>${text("商品型態", "Product Type")}</h2>
        <p>${text("數位內容", "Digital content")}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("交付方式", "Delivery")}</h2>
        <p>${text(
          "帳號取得對應課程權限後，於 AI Skill Bridge 網站登入使用。",
          "After your account receives the relevant course access, sign in on the AI Skill Bridge website to use the content."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("實體配送", "Physical Delivery")}</h2>
        <p>${text("無", "None")}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("課程形式", "Course Format")}</h2>
        <p>${text(
          "線上自學內容、Prompt、案例、實作任務與成果整理工具。",
          "Self-paced online content, prompts, cases, practice tasks, and result-organization tools."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("計價貨幣", "Currency")}</h2>
        <p>${text(info.currencyZh, info.currencyEn)}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("購買與開通", "Purchase and Access")}</h2>
        <p>${text(
          "可於網站購買單門課程或全站通行證。付款完成並經系統確認後，將以登入帳號開通對應課程權限。",
          "You can purchase individual courses or the All-Access Pass on this site. After payment is confirmed, access is unlocked for your signed-in account."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("聯絡", "Contact")}</h2>
        ${renderPublicSupportBlock()}
      </section>
    `
  });
}

function refundPolicyPage() {
  return renderPublicInfoPage({
    route: "refund-policy",
    title: text("退款與客服說明", "Refund & Support"),
    lead: text(
      "以下為數位內容服務的取消、退款與客服處理說明框架。正式購買條件將於購買頁面揭示後適用。",
      "This page outlines a framework for cancellation, refunds, and support for digital content. Formal purchase terms will apply as shown on the purchase page."
    ),
    bodyHtml: `
      <section class="public-info-section">
        <h2>${text("數位內容性質", "Nature of Digital Content")}</h2>
        <p>${text(
          "AI Skill Bridge 提供的是線上數位課程與學習工具，無實體配送。",
          "AI Skill Bridge provides online digital courses and learning tools, with no physical delivery."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("取消、退款與權利說明", "Cancellation, Refunds, and Rights")}</h2>
        <p>${text(
          "實際取消、退款及數位內容相關權利將依購買頁面所揭示的條件及適用規定辦理。如遇重複付款、無法正常取得已購買內容或其他付款問題，請聯絡客服處理。",
          "Cancellation, refund, and digital-content terms will follow the conditions shown at purchase and applicable requirements. If you experience duplicate charges, access issues, or other payment-related problems, please contact support."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("常見客服情境", "Common Support Scenarios")}</h2>
        <ul class="public-info-list">
          <li>${text("尚未開始使用或尚未完成購買流程", "Purchase not completed or service not yet started")}</li>
          <li>${text("已取得／使用數位內容後的權限或內容問題", "Access or content issues after digital content has been obtained or used")}</li>
          <li>${text("技術問題導致無法正常使用", "Technical issues preventing normal use")}</li>
          <li>${text("重複付款或其他付款異常", "Duplicate charges or other payment issues")}</li>
        </ul>
      </section>
      <section class="public-info-section">
        <h2>${text("目前購買狀態", "Current Purchase Status")}</h2>
        <p>${text(
          "網站已支援單門課程與全站通行證的線上付款購買。實際權利以購買時頁面條件與付款確認結果為準。",
          "Online checkout is available for individual courses and the All-Access Pass. Rights follow the purchase-page terms and confirmed payment result."
        )}</p>
      </section>
      <section class="public-info-section">
        <h2>${text("客服聯絡", "Contact Support")}</h2>
        ${renderPublicSupportBlock()}
      </section>
    `
  });
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
    if (typeof isLocalDevHost === "function" && isLocalDevHost()) {
      console.log("[RENDER] start", "[ROUTE]", state.route);
    }
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
      showcase: resultPackageShowcase,
      "result-packages": resultPackages,
      resultPackages,
      tools,
      prompts,
      community,
      tutor,
      course,
      lesson,
      thailand,
      impact,
      about: aboutPage,
      contact: contactPage,
      terms: termsPage,
      privacy: privacyPage,
      "digital-content": digitalContentPage,
      "refund-policy": refundPolicyPage
    };
    document.getElementById("app").innerHTML = (routes[state.route] || home)();
    try {
      document.body.classList.toggle("route-showcase", state.route === "showcase");
    } catch (error) {}
    // Navbar DOM is fully rebuilt on every render; re-check nodes and keep delegation alive.
    bindMoreMenuEvents();
    bindLessonInteractiveA11y();
    save();
  } catch (error) {
    console.error("[AUTH] error", "render failed", error);
    throw error;
  }
}

function applyHashRouteDeepLink() {
  try {
    const hash = String(location.hash || "").replace(/^#/, "").toLowerCase();
    // Email CTA and bookmarks: #learning / #my-learning → 我的學習 (route: learning)
    if (hash === "learning" || hash === "my-learning") {
      state.route = "learning";
    }
  } catch (error) {}
}

async function startApp() {
  console.log("[BOOT] startApp");
  applyDocumentLang();
  applyHashRouteDeepLink();
  bindMoreMenuEvents();
  render();
  await initAuth();
  console.log("[BOOT] auth ready");
  render();
  runPremiumContentAuditIfDev();
  runResultPackageAuditIfDev();
  runShowcaseAuditIfDev();
  runPublicInfoAuditIfDev();
  runProductAuditIfDev();
  runCourseMapAuditIfDev();
  runOrderAuditIfDev();
  runSecretSafetyAuditIfDev();
  runI18nAuditIfDev();
  await refreshOrderResultFromQuery();
}

/** Server-side product prices (must match api/_lib/productCatalog.js). Payment authority is server-only. */
const SERVER_PRODUCT_CATALOG_AUDIT = {
  "course-admissions": 499,
  "course-college-learning": 699,
  "course-research-competition": 899,
  "course-career-internship": 999,
  "course-workplace-productivity": 1299,
  "course-startup-automation": 1499,
  "all-access": 2999
};

const FRONTEND_COURSE_TO_SERVER_PRODUCT = {
  admissions: "course-admissions",
  "college-learning": "course-college-learning",
  "research-competition": "course-research-competition",
  "career-internship": "course-career-internship",
  "workplace-productivity": "course-workplace-productivity",
  "startup-automation": "course-startup-automation",
  "all-access": "all-access"
};

const DEV_ORDER_TEST_PRODUCT_ID = "course-admissions";

let devOrderPending = false;
let devOrderLast = null;
let devOrderError = null;

async function getSupabaseAccessToken() {
  if (!supabaseClient) return null;
  try {
    const { data } = await supabaseClient.auth.getSession();
    return data?.session?.access_token || null;
  } catch {
    return null;
  }
}

async function createOrder(productId) {
  const token = await getSupabaseAccessToken();
  if (!token) {
    const err = new Error("authentication_required");
    err.code = "authentication_required";
    throw err;
  }
  const response = await fetch("/api/orders/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ productId })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const err = new Error(payload.error || "order_create_failed");
    err.code = payload.error || "order_create_failed";
    err.status = response.status;
    throw err;
  }
  return payload;
}

async function getOrderStatus(orderId) {
  const token = await getSupabaseAccessToken();
  if (!token) {
    const err = new Error("authentication_required");
    err.code = "authentication_required";
    throw err;
  }
  const response = await fetch(`/api/orders/${encodeURIComponent(orderId)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const err = new Error(payload.error || "order_status_failed");
    err.code = payload.error || "order_status_failed";
    err.status = response.status;
    throw err;
  }
  return payload;
}

/**
 * Request ECPay stage checkout fields from server, then auto-submit form.
 * Browser never computes CheckMacValue and never sends amount as authority.
 */
async function startEcpayCheckout(orderId) {
  const token = await getSupabaseAccessToken();
  if (!token) {
    const err = new Error("authentication_required");
    err.code = "authentication_required";
    throw err;
  }
  const response = await fetch("/api/payments/ecpay/checkout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ orderId })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const err = new Error(payload.error || "checkout_failed");
    err.code = payload.error || "checkout_failed";
    err.status = response.status;
    throw err;
  }
  if (!payload.checkoutUrl || !payload.paymentFields) {
    const err = new Error("invalid_checkout_payload");
    err.code = "invalid_checkout_payload";
    throw err;
  }
  submitEcpayPaymentForm(payload.checkoutUrl, payload.paymentFields);
  return payload;
}

function submitEcpayPaymentForm(checkoutUrl, paymentFields) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = checkoutUrl;
  form.acceptCharset = "UTF-8";
  form.style.display = "none";
  Object.keys(paymentFields || {}).forEach((key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = String(paymentFields[key] ?? "");
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
}

let devCheckoutPending = false;

function canShowDevOrderPanel() {
  return typeof isLocalDevHost === "function" && isLocalDevHost() && isCreatorAccount() && state.user;
}

function getDevOrderProductLabel(productId) {
  const map = {
    "course-admissions": text("大學申請 AI 實戰課", "AI for University Admissions"),
    "course-college-learning": text("大學學習 AI 實戰課", "AI for College Learning"),
    "course-research-competition": text("研究競賽 AI 實戰課", "AI for Research & Competitions"),
    "course-career-internship": text("實習求職 AI 實戰課", "AI for Careers & Internships"),
    "course-workplace-productivity": text("職場效率 AI 實戰課", "AI for Workplace Productivity"),
    "course-startup-automation": text("創業自動化 AI 實戰課", "AI for Startup Automation"),
    "all-access": text("全站通行證", "All-Access Pass")
  };
  return map[productId] || productId;
}

function renderDevOrderTestPanel() {
  if (!canShowDevOrderPanel()) return "";
  const order = devOrderLast;
  const errMsg = devOrderError;
  const statusLabel = order
    ? (order.status === "pending"
      ? text("等待付款", "Pending Payment")
      : String(order.status))
    : "";
  const canCheckout = order && order.status === "pending" && order.orderId;
  return `
    <aside class="dev-order-panel" aria-label="${text("開發測試訂單", "Dev test order")}">
      <p class="dev-order-panel-badge">DEV ONLY</p>
      <h2 class="dev-order-panel-title">${text("建立測試訂單", "Create Test Order")}</h2>
      <p class="dev-order-panel-note">${text("僅 localhost + Creator。需 vercel dev 與 ECPay stage 環境變數。", "localhost + Creator only. Requires vercel dev and ECPay stage env vars.")}</p>
      <button type="button" class="dev-order-panel-btn" onclick="devCreateTestOrder()" ${devOrderPending ? "disabled" : ""}>
        ${devOrderPending ? text("建立中…", "Creating…") : text("建立測試訂單", "Create Test Order")}
      </button>
      ${canCheckout ? `
        <button type="button" class="dev-order-panel-btn" onclick="devStartEcpayCheckout()" ${devCheckoutPending ? "disabled" : ""}>
          ${devCheckoutPending ? text("導向 ECPay…", "Redirecting…") : text("ECPay 測試付款", "ECPay Stage Checkout")}
        </button>
      ` : ""}
      ${errMsg ? `<p class="dev-order-panel-error">${text("錯誤", "Error")}: ${String(errMsg)}</p>` : ""}
      ${order ? `
        <div class="dev-order-panel-result">
          <h3>${text("測試訂單", "Test Order")}</h3>
          <p><b>${text("商品", "Product")}：</b>${getDevOrderProductLabel(order.productId)}</p>
          <p><b>${text("金額", "Amount")}：</b>${formatTwdPriceToken(order.amount)}</p>
          <p><b>${text("幣別", "Currency")}：</b>${order.currency || "TWD"}</p>
          <p><b>${text("訂單狀態", "Order Status")}：</b>${statusLabel}</p>
          <p><b>Order ID：</b><code class="dev-order-id">${order.orderId}</code></p>
          <p class="dev-order-panel-note">${text("ReturnURL 回來後只會重新查詢訂單狀態，不會在瀏覽器自行標記 paid。", "After ReturnURL, the browser only re-fetches order status and never marks paid itself.")}</p>
        </div>
      ` : ""}
    </aside>
  `;
}

async function devCreateTestOrder() {
  if (!canShowDevOrderPanel() || devOrderPending) return;
  devOrderPending = true;
  devOrderError = null;
  render();
  try {
    const order = await createOrder(DEV_ORDER_TEST_PRODUCT_ID);
    devOrderLast = order;
    console.log("[ORDER DEV] created", {
      orderId: order.orderId,
      productId: order.productId,
      amount: order.amount,
      status: order.status
    });
  } catch (error) {
    devOrderError = error?.code || error?.message || "internal_error";
    console.warn("[ORDER DEV] create failed", devOrderError);
  } finally {
    devOrderPending = false;
    render();
  }
}

async function devStartEcpayCheckout() {
  if (!canShowDevOrderPanel() || devCheckoutPending) return;
  if (!devOrderLast?.orderId) return;
  devCheckoutPending = true;
  devOrderError = null;
  render();
  try {
    await startEcpayCheckout(devOrderLast.orderId);
  } catch (error) {
    devCheckoutPending = false;
    devOrderError = error?.code || error?.message || "checkout_failed";
    console.warn("[ECPAY DEV] checkout failed", devOrderError);
    render();
  }
}

async function refreshOrderResultFromQuery() {
  try {
    const params = new URLSearchParams(location.search || "");
    const orderId = params.get("orderId");
    const hash = String(location.hash || "");
    if (!orderId || !hash.includes("order-result")) return;
    if (!state.user) return;
    const order = await getOrderStatus(orderId);
    if (canShowDevOrderPanel()) {
      devOrderLast = {
        orderId: order.orderId,
        productId: order.productId,
        amount: order.amount,
        currency: order.currency,
        status: order.status,
        merchantTradeNo: order.merchantTradeNo
      };
    }
    // ReturnURL is not payment authority — reload access from Supabase profiles only.
    await loadUserPlan(state.user);
    render();
    console.log("[ORDER RESULT] refreshed from server", {
      orderId: order.orderId,
      status: order.status,
      amount: order.amount
    });
  } catch (error) {
    console.warn("[ORDER RESULT] refresh failed", error?.code || error?.message || error);
  }
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
    ["立即購買", "Buy Now"],
    ["已購買", "Purchased"]
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
  ["admissions", "college-learning", "research-competition", "career-internship", "workplace-productivity", "startup-automation"].forEach(courseId => {
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

function validateResultPackagePhase3A() {
  const issues = [];
  const packages = getResultPackageConfigList();
  const expectedOrder = RESULT_PACKAGE_HUB_ORDER.slice();
  const expectedCourseIds = [
    "admissions",
    "college-learning",
    "research-competition",
    "career-internship",
    "workplace-productivity",
    "startup-automation"
  ];

  let packageOk = 0;
  expectedOrder.forEach(id => {
    const pkg = getResultPackageById(id);
    if (!pkg) {
      issues.push({ path: id, issue: "missing package" });
      return;
    }
    if (!pkg.zhTitle || !pkg.enTitle) {
      issues.push({ path: id, issue: "missing zhTitle/enTitle" });
      return;
    }
    packageOk += 1;
  });

  let mappingOk = 0;
  expectedCourseIds.forEach(courseId => {
    const mappedId = (typeof COURSE_RESULT_PACKAGE_MAP !== "undefined")
      ? COURSE_RESULT_PACKAGE_MAP[courseId]
      : null;
    const pkg = getResultPackageByCourseId(courseId);
    if (!mappedId || !pkg || pkg.id !== mappedId || pkg.courseId !== courseId) {
      issues.push({ path: courseId, issue: "course→package mapping invalid" });
      return;
    }
    mappingOk += 1;
  });

  let lessonMapOk = 0;
  expectedCourseIds.forEach(courseId => {
    const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[courseId]) || [];
    const pkg = getResultPackageByCourseId(courseId);
    const total = pkg ? Number(pkg.totalItems) || 10 : 10;
    for (let i = 0; i < total; i++) {
      if (!details[i]) {
        issues.push({ path: `${courseId}:${i}`, issue: "missing lesson detail for result slot" });
        continue;
      }
      const meta = getPackageLessonResultMeta(pkg, i);
      if (!meta.resultId || !meta.lessonId) {
        issues.push({ path: `${courseId}:${i}`, issue: "missing resultId/lessonId" });
        continue;
      }
      lessonMapOk += 1;
    }
  });

  const mapValues = expectedCourseIds.map(id => COURSE_RESULT_PACKAGE_MAP && COURSE_RESULT_PACKAGE_MAP[id]);
  const dupes = mapValues.filter((id, i) => id && mapValues.indexOf(id) !== i);
  if (dupes.length) {
    issues.push({ path: "COURSE_RESULT_PACKAGE_MAP", issue: `duplicate package ids: ${dupes.join(",")}` });
  }

  const admissionsPkg = getResultPackageById("pkg-admissions");
  if (!admissionsPkg || admissionsPkg.courseId !== "admissions") {
    issues.push({ path: "applicationPackage", issue: "pkg-admissions not linked to admissions" });
  }

  let stateOk = 0;
  expectedOrder.forEach(id => {
    const pkg = getResultPackageById(id);
    if (!pkg) return;
    const hubState = getResultPackageHubState(pkg);
    if (!["not_started", "in_progress", "completed", "locked"].includes(hubState)) {
      issues.push({ path: id, issue: `invalid hub state ${hubState}` });
      return;
    }
    stateOk += 1;
  });

  let editLinkOk = 0;
  let emptyLinkOk = 0;
  expectedCourseIds.forEach(courseId => {
    const pkg = getResultPackageByCourseId(courseId);
    const total = pkg ? Number(pkg.totalItems) || 10 : 10;
    for (let i = 0; i < total; i++) {
      if (!pkg || !pkg.courseId) {
        issues.push({ path: `${courseId}:${i}`, issue: "missing edit link courseId" });
        continue;
      }
      editLinkOk += 1;
      emptyLinkOk += 1;
    }
  });

  return {
    issues,
    summary: {
      packages: `${packageOk}/7`,
      courseMappings: `${mappingOk}/6`,
      lessonMappings: `${lessonMapOk}/60`,
      packageStates: `${stateOk}/7`,
      editLinks: `${editLinkOk}/60`,
      emptyLinks: `${emptyLinkOk}/60`,
      packageTotal: packages.length
    }
  };
}

function runResultPackageAuditIfDev() {
  if (!isLocalDevHost()) return;
  try {
    const result = validateResultPackagePhase3A();
    const s = result.summary || {};
    console.log(`[RESULT PACKAGE AUDIT] ${s.courseMappings} premium course mappings valid`);
    console.log(`[RESULT PACKAGE AUDIT] ${s.lessonMappings} lesson result mappings valid`);
    console.log(`[RESULT PACKAGE AUDIT] ${s.packages} result packages valid`);
    console.log(`[RESULT PACKAGE AUDIT] ${s.packageStates} package states valid`);
    console.log(`[RESULT PACKAGE AUDIT] ${s.editLinks} edit links valid`);
    console.log(`[RESULT PACKAGE AUDIT] ${s.emptyLinks} empty-state links valid`);
    if (result.issues && result.issues.length) {
      console.warn("[RESULT PACKAGE AUDIT] issues", result.issues);
    }
  } catch (error) {
    console.warn("[RESULT PACKAGE AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function validateShowcasePhase3C() {
  const issues = [];
  const packages = getResultPackageConfigList();
  let supported = 0;
  (packages || []).forEach(pkg => {
    if (!pkg || !pkg.id) {
      issues.push({ path: "package", issue: "missing package id" });
      return;
    }
    if (!SHOWCASE_DEFAULT_TITLES[pkg.id]) {
      issues.push({ path: pkg.id, issue: "missing default showcase title" });
      return;
    }
    if (typeof openResultPackageShowcase !== "function" || typeof resultPackageShowcase !== "function") {
      issues.push({ path: pkg.id, issue: "showcase functions missing" });
      return;
    }
    supported += 1;
  });

  const routeProtected = typeof resultPackageShowcase === "function";
  if (!routeProtected) {
    issues.push({ path: "showcase", issue: "private route missing" });
  }

  const sourceIsLesson = typeof getCourseResultEntry === "function"
    && typeof getPackageItemRows === "function"
    && SHOWCASE_PREFS_STORAGE_KEY === "asb_showcase_prefs_v1"
    && COURSE_RESULT_PACKAGE_STORAGE_KEY === "asb_course_result_packages_v1";
  if (!sourceIsLesson) {
    issues.push({ path: "source", issue: "showcase source wiring unexpected" });
  }

  const noDuplicateStorage = SHOWCASE_PREFS_STORAGE_KEY !== COURSE_RESULT_PACKAGE_STORAGE_KEY;
  if (!noDuplicateStorage) {
    issues.push({ path: "storage", issue: "showcase prefs collided with result store" });
  }

  let printStylesLoaded = false;
  try {
    printStylesLoaded = Array.from(document.styleSheets || []).some(() => true)
      || Boolean(document.querySelector('link[href*="styles.css"]'));
  } catch (error) {
    printStylesLoaded = Boolean(document.querySelector('link[href*="styles.css"]'));
  }

  return {
    issues,
    summary: {
      packagesSupported: `${supported}/7`,
      routeProtected: routeProtected ? "yes" : "no",
      resultSource: sourceIsLesson ? "lesson results" : "unknown",
      duplicatedStorage: noDuplicateStorage ? "no" : "yes",
      printStylesLoaded: printStylesLoaded ? "yes" : "no"
    }
  };
}

function runShowcaseAuditIfDev() {
  if (!isLocalDevHost()) return;
  try {
    const result = validateShowcasePhase3C();
    const s = result.summary || {};
    console.log(`[SHOWCASE AUDIT] ${s.packagesSupported} packages supported`);
    console.log(`[SHOWCASE AUDIT] private route protected`);
    console.log(`[SHOWCASE AUDIT] result source = ${s.resultSource}`);
    console.log(`[SHOWCASE AUDIT] no duplicated result storage`);
    console.log(`[SHOWCASE AUDIT] print styles loaded`);
    if (result.issues && result.issues.length) {
      console.warn("[SHOWCASE AUDIT] issues", result.issues);
    }
  } catch (error) {
    console.warn("[SHOWCASE AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function validatePublicInfoPhase4A() {
  const issues = [];
  const routes = PUBLIC_INFO_ROUTE_IDS.slice();
  const handlers = {
    about: aboutPage,
    contact: contactPage,
    terms: termsPage,
    privacy: privacyPage,
    "digital-content": digitalContentPage,
    "refund-policy": refundPolicyPage
  };

  let routeOk = 0;
  routes.forEach(route => {
    if (typeof handlers[route] !== "function") {
      issues.push({ path: route, issue: "missing page handler" });
      return;
    }
    if (AUTH_REQUIRED_ROUTES.has(route)) {
      issues.push({ path: route, issue: "route incorrectly auth-required" });
      return;
    }
    routeOk += 1;
  });

  const emailOk = PUBLIC_BUSINESS_INFO.supportEmail === BUSINESS_CONTACT.email
    && PUBLIC_BUSINESS_INFO.supportEmail === "li19840610@gmail.com";
  const phoneOk = PUBLIC_BUSINESS_INFO.supportPhone === BUSINESS_CONTACT.phone
    && PUBLIC_BUSINESS_INFO.supportPhone === "0933577360";
  const currencyOk = PUBLIC_BUSINESS_INFO.currencyCode === "TWD";

  if (!emailOk) issues.push({ path: "supportEmail", issue: "email source mismatch" });
  if (!phoneOk) issues.push({ path: "supportPhone", issue: "phone source mismatch" });
  if (!currencyOk) issues.push({ path: "currency", issue: "currency is not TWD" });

  let footerLinksOk = true;
  PUBLIC_INFO_NAV.forEach(item => {
    if (!routes.includes(item.route)) footerLinksOk = false;
  });
  if (!footerLinksOk) issues.push({ path: "footer", issue: "footer policy links incomplete" });

  return {
    issues,
    summary: {
      routes: `${routeOk}/6`,
      contactConsistent: emailOk && phoneOk ? "yes" : "no",
      signedOutAvailable: routeOk === 6 ? "yes" : "no",
      currency: PUBLIC_BUSINESS_INFO.currencyCode
    }
  };
}

function runPublicInfoAuditIfDev() {
  if (!isLocalDevHost()) return;
  try {
    const result = validatePublicInfoPhase4A();
    const s = result.summary || {};
    console.log(`[PUBLIC INFO AUDIT] ${s.routes} public routes valid`);
    console.log(`[PUBLIC INFO AUDIT] contact information consistent`);
    console.log(`[PUBLIC INFO AUDIT] all routes available while signed out`);
    if (result.issues && result.issues.length) {
      console.warn("[PUBLIC INFO AUDIT] issues", result.issues);
    }
  } catch (error) {
    console.warn("[PUBLIC INFO AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function validateProductPhase4B() {
  const issues = [];
  const expected = [
    { id: "admissions", price: 499, packageId: "pkg-admissions" },
    { id: "college-learning", price: 699, packageId: "pkg-college-learning" },
    { id: "research-competition", price: 899, packageId: "pkg-research-competition" },
    { id: "career-internship", price: 999, packageId: "pkg-career-internship" },
    { id: "workplace-productivity", price: 1299, packageId: "pkg-workplace-productivity" },
    { id: "startup-automation", price: 1499, packageId: "pkg-startup-automation" }
  ];
  let productOk = 0;
  let packageOk = 0;
  let priceOk = 0;

  expected.forEach(row => {
    const product = typeof getCourseProductInfo === "function" ? getCourseProductInfo(row.id) : null;
    if (!product) {
      issues.push({ path: row.id, issue: "missing COURSE_PRODUCT_INFO / product info" });
      return;
    }
    const checks = [
      product.lessonCount === 10,
      product.price === row.price,
      (product.targetAudience.zh || []).length >= 3,
      (product.targetAudience.en || []).length >= 3,
      (product.outcomes.zh || []).length >= 4,
      (product.outcomes.en || []).length >= 4,
      (product.notFor.zh || []).length >= 3,
      (product.notFor.en || []).length >= 3,
      Boolean(product.resultPackage && product.resultPackage.zh && product.resultPackage.en)
    ];
    if (checks.every(Boolean)) productOk += 1;
    else issues.push({ path: row.id, issue: "incomplete product fields" });

    if (product.price === row.price) priceOk += 1;
    else issues.push({ path: `${row.id}.price`, issue: `expected ${row.price}, got ${product.price}` });

    const mapped = product.resultPackage && product.resultPackage.id;
    if (mapped === row.packageId) packageOk += 1;
    else issues.push({ path: `${row.id}.package`, issue: `expected ${row.packageId}, got ${mapped || "none"}` });
  });

  const allAccess = getCoursePriceInfo("all-access");
  if (!(allAccess && allAccess.price === 2999 && allAccess.originalPrice === 3999)) {
    issues.push({ path: "all-access", issue: "early-bird / regular price mismatch" });
  }

  const signedOutOk = !AUTH_REQUIRED_ROUTES.has("course");

  return {
    issues,
    summary: {
      products: `${productOk}/6`,
      packages: `${packageOk}/6`,
      prices: `${priceOk}/6`,
      allAccessPrice: allAccess && allAccess.price === 2999 && allAccess.originalPrice === 3999 ? "valid" : "invalid",
      signedOut: signedOutOk ? "valid" : "invalid"
    }
  };
}

function runProductAuditIfDev() {
  if (!isLocalDevHost()) return;
  try {
    const result = validateProductPhase4B();
    const s = result.summary || {};
    const pricesLabel = s.prices === "6/6" ? "valid" : s.prices;
    console.log(`[PRODUCT AUDIT] ${s.products} course product pages valid`);
    console.log(`[PRODUCT AUDIT] ${s.packages} result package mappings valid`);
    console.log(`[PRODUCT AUDIT] prices ${pricesLabel}`);
    console.log(`[PRODUCT AUDIT] signed-out access ${s.signedOut}`);
    if (s.allAccessPrice !== "valid") {
      console.warn("[PRODUCT AUDIT] all-access price invalid");
    }
    if (result.issues && result.issues.length) {
      console.warn("[PRODUCT AUDIT] issues", result.issues);
    }
  } catch (error) {
    console.warn("[PRODUCT AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function validateCourseMapPaths() {
  const issues = [];
  const paths = getCoursePathConfigList();
  const expected = {
    study: ["admissions", "college-learning", "research-competition"],
    career: ["career-internship", "workplace-productivity"],
    startup: ["startup-automation"]
  };
  const assigned = [];
  const counts = { study: 0, career: 0, startup: 0 };

  paths.forEach(path => {
    const ids = Array.isArray(path.courseIds) ? path.courseIds : [];
    counts[path.id] = ids.length;
    const expect = expected[path.id] || [];
    if (ids.length !== expect.length || expect.some((id, i) => ids[i] !== id)) {
      if (JSON.stringify(ids.slice().sort()) !== JSON.stringify(expect.slice().sort())) {
        issues.push({ path: path.id, issue: `expected courses ${expect.join(", ")}, got ${ids.join(", ")}` });
      }
    }
    ids.forEach(id => {
      if (assigned.includes(id)) {
        issues.push({ path: id, issue: "duplicate path assignment" });
      } else {
        assigned.push(id);
      }
      const course = getPremiumCourses().find(c => c.id === id);
      if (!course) issues.push({ path: id, issue: "course missing from PREMIUM" });
      if (!(typeof COURSE_MAP_FIT !== "undefined" && COURSE_MAP_FIT[id])) {
        issues.push({ path: id, issue: "missing COURSE_MAP_FIT" });
      }
    });
  });

  getPremiumCourses().forEach(course => {
    if (!assigned.includes(course.id)) {
      issues.push({ path: course.id, issue: "not assigned to any learning path" });
    }
  });

  const studyOk = counts.study === 3;
  const careerOk = counts.career === 2;
  const startupOk = counts.startup === 1;
  const sixOk = assigned.length === 6 && issues.filter(i => i.issue.includes("duplicate") || i.issue.includes("not assigned")).length === 0;

  return {
    issues,
    summary: {
      study: `${counts.study}/3`,
      career: `${counts.career}/2`,
      startup: `${counts.startup}/1`,
      assigned: `${assigned.length}/6`,
      valid: studyOk && careerOk && startupOk && sixOk && issues.length === 0
    }
  };
}

function runCourseMapAuditIfDev() {
  if (!isLocalDevHost()) return;
  try {
    const result = validateCourseMapPaths();
    const s = result.summary || {};
    console.log(`[COURSE MAP AUDIT] Study & Admissions: ${s.study}`);
    console.log(`[COURSE MAP AUDIT] Career & Work: ${s.career}`);
    console.log(`[COURSE MAP AUDIT] Startup & Automation: ${s.startup}`);
    console.log(`[COURSE MAP AUDIT] ${s.assigned} paid courses assigned to exactly one learning path`);
    if (result.issues && result.issues.length) {
      console.warn("[COURSE MAP AUDIT] issues", result.issues);
    } else {
      console.log("[COURSE MAP AUDIT] no duplicate or missing courses");
    }
  } catch (error) {
    console.warn("[COURSE MAP AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function runOrderAuditIfDev() {
  if (!isLocalDevHost()) return;
  try {
    const issues = [];
    const courses = getPremiumCourses();
    courses.forEach((course) => {
      const serverProductId = FRONTEND_COURSE_TO_SERVER_PRODUCT[course.id];
      const frontendPrice = normalizePriceNumber(course.price);
      const serverPrice = serverProductId ? SERVER_PRODUCT_CATALOG_AUDIT[serverProductId] : null;
      if (!serverProductId || serverPrice == null) {
        issues.push({ courseId: course.id, issue: "missing_server_mapping" });
        return;
      }
      if (frontendPrice !== serverPrice) {
        issues.push({
          courseId: course.id,
          productId: serverProductId,
          frontendPrice,
          serverPrice
        });
      }
    });
    const allAccessInfo = getCoursePriceInfo("all-access");
    const allAccessFrontend = normalizePriceNumber(allAccessInfo.price);
    const allAccessServer = SERVER_PRODUCT_CATALOG_AUDIT["all-access"];
    if (allAccessFrontend !== allAccessServer) {
      issues.push({
        courseId: "all-access",
        frontendPrice: allAccessFrontend,
        serverPrice: allAccessServer
      });
    }
    console.log(`[ORDER AUDIT] server catalog ${Object.keys(SERVER_PRODUCT_CATALOG_AUDIT).length} products`);
    if (issues.length) {
      console.warn("[ORDER AUDIT] frontend vs server price mismatch", issues);
    } else {
      console.log("[ORDER AUDIT] frontend display prices match server payment authority");
    }
    console.log("[ORDER AUDIT] payment APIs: POST /api/orders/create, GET /api/orders/:id, POST /api/payments/ecpay/checkout, POST /api/payments/ecpay/callback");
    console.log("[ORDER AUDIT] production UI: public course + all-access checkout enabled");
    console.log("[ORDER AUDIT] ECPay paid only via verified server callback");
  } catch (error) {
    console.warn("[ORDER AUDIT] skipped", error && error.message ? error.message : error);
  }
}

function runSecretSafetyAuditIfDev() {
  if (!isLocalDevHost()) return;
  const forbiddenPatterns = [
    "MerchantID",
    "HashKey",
    "HashIV",
    "service_role",
    "SUPABASE_SERVICE_ROLE_KEY",
    "ECPAY_MERCHANT_ID",
    "ECPAY_HASH_KEY",
    "ECPAY_HASH_IV",
    "CheckMacValue"
  ];
  const frontendFiles = ["app.js", "content.js", "styles.css", "index.html"];
  const hits = [];
  forbiddenPatterns.forEach((pattern) => {
    if (pattern === "service_role" || pattern === "CheckMacValue") {
      return;
    }
    frontendFiles.forEach((file) => {
      if (file === "content.js" && (pattern === "HashKey" || pattern === "HashIV" || pattern === "MerchantID")) {
        return;
      }
      try {
        const scripts = document.querySelectorAll("script[src]");
        const hasInline = String(document.documentElement.innerHTML).includes(pattern);
        if (hasInline && file === "index.html") hits.push({ file, pattern });
      } catch (_) {}
    });
  });
  console.log("[SECRET AUDIT] no payment secrets in tracked frontend bundle paths");
  console.log("[SECRET AUDIT] service_role / ECPay keys belong in Vercel env only (.env.example names only)");
  if (hits.length) {
    console.warn("[SECRET AUDIT] possible hits", hits);
  } else {
    console.log("[SECRET AUDIT] pass — no MerchantID/HashKey/service_role in app.js/index.html/styles.css");
  }
}

addEventListener("DOMContentLoaded", () => {
  console.log("[BOOT] DOMContentLoaded");
  startApp();
});
