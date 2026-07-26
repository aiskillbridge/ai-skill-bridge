const SUPABASE_URL = "https://ifjkadoskbcgrqmcjvya.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";

/** Central special-account roles. Keys must be lowercase full emails. Never written to profiles.plan. */
const SPECIAL_ACCOUNT_ROLES = {
  "li19840610@gmail.com": {
    role: "creator",
    zhLabel: "創辦人",
    enLabel: "Creator",
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
  progress: JSON.parse(localStorage.getItem("asb_progress") || "{}"),
  notes: JSON.parse(localStorage.getItem("asb_notes") || "{}"),
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

function save() {
  localStorage.setItem("asb_lang", state.lang);
  localStorage.setItem("asb_lesson", state.activeLesson);
  localStorage.setItem("asb_progress", JSON.stringify(state.progress));
  localStorage.setItem("asb_notes", JSON.stringify(state.notes));
  localStorage.setItem("asb_assessment", JSON.stringify(state.assessment));
  localStorage.setItem("asb_favorites", JSON.stringify(state.favorites));
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
          <span class="tag">Auth</span>
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
 * Supabase schema — profiles (run once in SQL Editor):
 *
 * create table if not exists public.profiles (
 *   id uuid primary key references auth.users (id) on delete cascade,
 *   email text,
 *   display_name text,
 *   created_at timestamptz not null default now(),
 *   updated_at timestamptz not null default now()
 * );
 *
 * alter table public.profiles enable row level security;
 *
 * create policy "Users can read own profile"
 *   on public.profiles for select
 *   using (auth.uid() = id);
 *
 * create policy "Users can insert own profile"
 *   on public.profiles for insert
 *   with check (auth.uid() = id);
 *
 * create policy "Users can update own profile"
 *   on public.profiles for update
 *   using (auth.uid() = id)
 *   with check (auth.uid() = id);
 */

async function syncUserProfile(user) {
  if (!supabaseClient || !user?.id) return;

  const { data: authData, error: authError } = await supabaseClient.auth.getUser();
  if (authError || !authData?.user) {
    console.error("Sync profile auth not ready:", authError);
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

  const payload = {
    email: authUser.email || null,
    display_name,
    updated_at: new Date().toISOString()
  };

  const { data: existing, error: selectError } = await supabaseClient
    .from("profiles")
    .select("id")
    .eq("id", authUser.id)
    .maybeSingle();

  if (selectError) {
    console.error("Sync profile select error:", selectError);
    return;
  }

  if (existing?.id) {
    const { data, error } = await supabaseClient
      .from("profiles")
      .update(payload)
      .eq("id", authUser.id)
      .select("id, updated_at");

    if (error) {
      console.error("Sync profile update error:", error);
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
      ...payload
    });

  if (insertError) {
    console.error("Sync profile insert error:", insertError);
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

/**
 * Single source of truth for plan: public.profiles.plan → state.userPlan.
 * Optional profiles.unlocked_courses supports single-course purchases.
 * Never reads plan from localStorage.
 * Special roles (Creator / Queen) are email-based and must not rewrite profiles.plan.
 */
async function loadUserPlan(user) {
  state.userPlan = "free";
  state.unlockedCourses = [];

  if (!supabaseClient || !user?.id) return;

  try {
    let data = null;
    let error = null;

    ({ data, error } = await supabaseClient
      .from("profiles")
      .select("plan, unlocked_courses")
      .eq("id", user.id)
      .maybeSingle());

    if (error) {
      ({ data, error } = await supabaseClient
        .from("profiles")
        .select("plan")
        .eq("id", user.id)
        .maybeSingle());
    }

    if (error) {
      console.warn("Load user plan failed:", error);
      state.userPlan = "free";
      state.unlockedCourses = [];
      return;
    }

    if (!data || data.plan == null || data.plan === "") {
      state.userPlan = "free";
      state.unlockedCourses = parseUnlockedCoursesFromPlan("", data?.unlocked_courses);
      return;
    }

    state.userPlan = normalizeUserPlan(data.plan);
    state.unlockedCourses = parseUnlockedCoursesFromPlan(data.plan, data.unlocked_courses);
  } catch (err) {
    console.warn("Load user plan failed:", err);
    state.userPlan = "free";
    state.unlockedCourses = [];
  }
}

async function handleAuthSession(session) {
  const previousUserId = state.user?.id || null;
  state.user = session?.user || null;
  state.authReady = true;

  if (session?.user) {
    await syncUserProfile(session.user);
    await loadUserPlan(session.user);
    await loadProgressFromSupabase();
    await loadNotesFromSupabase();

    const justSignedIn = previousUserId !== session.user.id;
    if (justSignedIn) {
      const destination = consumePostLoginDestination();
      if (destination) applyPostLoginDestination(destination);
    }
  } else {
    state.userPlan = "free";
    state.unlockedCourses = [];
    state.progress = JSON.parse(localStorage.getItem("asb_progress") || "{}");
    state.notes = JSON.parse(localStorage.getItem("asb_notes") || "{}");
    // Do not clear saved learning data; gated routes will show login UI.
  }

  render();
}

async function initAuth() {
  if (!supabaseClient) {
    state.authReady = true;
    return;
  }

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    await handleAuthSession(session);
  });

  const { data } = await supabaseClient.auth.getSession();
  state.user = data.session?.user || null;

  if (state.user) {
    await syncUserProfile(state.user);
    await loadUserPlan(state.user);
    await loadProgressFromSupabase();
    await loadNotesFromSupabase();
    const destination = consumePostLoginDestination();
    if (destination) applyPostLoginDestination(destination);
  } else {
    state.userPlan = "free";
    state.unlockedCourses = [];
  }
  state.authReady = true;
}

async function signInWithGoogle() {
  if (!supabaseClient) {
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

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + window.location.pathname
    }
  });

  if (error) alert(error.message);
}

async function signOut() {
  clearPostLoginDestination();
  if (!supabaseClient) {
    state.user = null;
    state.userPlan = "free";
    state.unlockedCourses = [];
    state.authReady = true;
    render();
    return;
  }
  await supabaseClient.auth.signOut();
  state.user = null;
  state.userPlan = "free";
  state.unlockedCourses = [];
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

function syncMoreMenuAria(isOpen) {
  const btn = document.getElementById("moreMenuBtn");
  if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function setMoreMenuOpen(willOpen) {
  const menu = document.getElementById("moreMenu");
  if (!menu) return false;
  menu.classList.toggle("open", willOpen);
  syncMoreMenuAria(willOpen);
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
  setMoreMenuOpen(!menu.classList.contains("open"));
}

function closeMoreMenu() {
  setMoreMenuOpen(false);
}

function moreMenuEventElement(target) {
  if (!target) return null;
  if (target.nodeType === 1) return target;
  return target.parentElement || null;
}

function handleMoreMenuDelegatedClick(event) {
  const el = moreMenuEventElement(event.target);
  if (!el || typeof el.closest !== "function") return;

  // Toggle when the More button (or its contents) is clicked.
  if (el.closest("#moreMenuBtn")) {
    toggleMoreMenu(event);
    return;
  }

  // Ignore the synthetic follow-up click from the same mobile tap that opened the menu.
  if (Date.now() < moreMenuIgnoreOutsideUntil) return;

  const menu = document.getElementById("moreMenu");
  if (!menu || !menu.classList.contains("open")) return;

  // Clicks on menu items keep their own handlers; they call closeMoreMenu().
  if (el.closest("#moreMenu") || el.closest(".more-wrap")) return;

  closeMoreMenu();
}

function bindMoreMenuEvents() {
  // Event delegation on document survives every SPA render that replaces navbar HTML.
  // Only bind once; never attach listeners to #moreMenuBtn itself (that node is destroyed on render).
  if (moreMenuDelegatedBound) return;
  document.addEventListener("click", handleMoreMenuDelegatedClick);
  moreMenuDelegatedBound = true;
}

function goApplicationPackage() {
  if (typeof hasCourseAccess === "function" && hasCourseAccess("admissions")) {
    setRoute("applicationPackage");
  } else {
    toast(state.lang === "zh" ? "請先開通「高中生申請大學 AI 實戰課」" : "Please unlock the University Application course first");
    setRoute("premium");
  }
}

function nav() {
  const mainLinks = [
    { route: "home", zh: "首頁", en: "Home" },
    { route: "courses", zh: "免費入門", en: "Free Intro" },
    { route: "map", zh: "課程地圖", en: "Roadmap" },
    { route: "assessment", zh: "能力測驗", en: "Assessment" },
    { route: "learning", zh: "我的學習中心", en: "Learning" },
    { route: "result-packages", zh: "成果禮包", en: "Result Packages" },
    { route: "premium", zh: "進階付費", en: "Premium" }
  ];

  const moreLinks = [
    { route: "freePortfolio", zh: "我的免費成果包", en: "My Free Portfolio" },
    { route: "result-packages", zh: "成果禮包", en: "Result Packages" },
    { action: "goApplicationPackage()", zh: "大學申請包", en: "Application Package" },
    { route: "tools", zh: "AI 工具", en: "AI Tools" },
    { route: "prompts", zh: "Prompt 範例", en: "Prompts" },
    { route: "tutor", zh: "AI Tutor", en: "AI Tutor" },
    { route: "impact", zh: "影響力", en: "Impact" }
  ];

  const mainHtml = mainLinks.map(item => `
    <button class="${state.route === item.route ? "active" : ""}" onclick="setRoute('${item.route}')">
      ${state.lang === "zh" ? item.zh : item.en}
    </button>
  `).join("");

  const filteredMoreLinks = moreLinks.filter(item => {
    if (item.zh === "大學申請包") {
      return typeof hasCourseAccess === "function" && hasCourseAccess("admissions");
    }
    return true;
  });

  const moreHtml = filteredMoreLinks.map(item => `
    <button onclick="${item.action ? item.action : `setRoute('${item.route}')`}; closeMoreMenu();">
      ${state.lang === "zh" ? item.zh : item.en}
    </button>
  `).join("");

  const moreAccountHtml = state.user
    ? `<div class="more-menu-account">${renderAccountIdentity()}
         <p class="more-menu-access">${text("存取權限", "Access")}：${getAccountAccessLabel()}</p>
       </div>`
    : "";

  const authHtml = state.user
    ? `<div class="nav-account">${renderAccountIdentity()}
         <button class="lang" onclick="signOut()">${state.lang === "zh" ? "登出" : "Logout"}</button>
       </div>`
    : `<button class="lang" onclick="signInWithGoogle()">${state.lang === "zh" ? "Google 登入" : "Google Login"}</button>`;

  return `
    <header>
      <div class="nav compact-nav">
        <div class="brand" onclick="setRoute('home')" style="cursor:pointer">
          <span class="logo-badge">AI</span>
          <span>AI Skill Bridge</span>
        </div>

        <div class="nav-main">
          <div class="nav-main-links">
            ${mainHtml}
          </div>
          <div class="more-wrap">
            <button
              type="button"
              id="moreMenuBtn"
              class="lang"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="moreMenu"
            >☰ ${state.lang === "zh" ? "更多" : "More"}</button>
            <div id="moreMenu" class="more-menu" role="menu">
              ${moreAccountHtml}
              ${moreHtml}
            </div>
          </div>
        </div>

        <div class="nav-actions">
          ${authHtml}
          <button class="lang" onclick="toggleLang()">${state.lang === "zh" ? "EN" : "中文"}</button>
        </div>
      </div>
    </header>
  `;
}

function shell(content) {
  return `
    ${nav()}
    ${content}
    <footer class="footer">
      <div class="wrap">
        <p>© 2026 AI Skill Bridge. ${state.lang === "zh" ? "讓不懂 AI 的人也能開始上手。" : "Helping beginners start using AI."}</p>
      </div>
    </footer>
  `;
}

function homeFooter() {
  return `
    <footer class="home-footer">
      <div class="wrap home-footer-grid">
        <div class="home-footer-brand">
          <div class="home-footer-logo"><span>AI</span> AI Skill Bridge</div>
          <p>${text(
            "從學習到創業的 AI 能力養成平台。讓 AI 能力成為每個人都能跨越的橋樑。",
            "An AI skill platform from learning to entrepreneurship. Making AI ability a bridge anyone can cross."
          )}</p>
        </div>
        <div>
          <h4>${text("產品", "Product")}</h4>
          <button type="button" onclick="setRoute('courses')">${text("免費入門", "Free Intro")}</button>
          <button type="button" onclick="setRoute('map')">${text("課程地圖", "Learning Map")}</button>
          <button type="button" onclick="setRoute('premium')">${text("進階課程", "Premium Courses")}</button>
          <button type="button" onclick="setRoute('result-packages')">${text("成果禮包", "Result Packages")}</button>
        </div>
        <div>
          <h4>${text("學習", "Learn")}</h4>
          <button type="button" onclick="setRoute('learning')">${text("我的學習中心", "Learning Center")}</button>
          <button type="button" onclick="setRoute('tools')">${text("AI 工具", "AI Tools")}</button>
          <button type="button" onclick="setRoute('prompts')">${text("Prompt 資源", "Prompt Library")}</button>
          <button type="button" onclick="setRoute('assessment')">${text("能力測驗", "Assessment")}</button>
        </div>
        <div>
          <h4>${text("品牌", "Brand")}</h4>
          <button type="button" onclick="setRoute('impact')">${text("社會影響", "Social Impact")}</button>
          <button type="button" onclick="setRoute('community')">${text("社群與聯絡", "Community & Contact")}</button>
        </div>
      </div>
      <div class="wrap home-footer-bottom">
        <p>© 2026 AI Skill Bridge</p>
        <p class="home-footer-tagline">${text(
          "讓 AI 能力成為每個人都能跨越的橋樑。",
          "Making AI ability a bridge anyone can cross."
        )}</p>
      </div>
    </footer>
  `;
}

function homeLandingShell(content) {
  return `${nav()}${content}${homeFooter()}`;
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
  const amounts = courses.map(c => {
    const match = String(c.price || "").replace(/,/g, "").match(/(\d+)/);
    return match ? Number(match[1]) : null;
  }).filter(n => n != null);
  if (!amounts.length) return text("依課程而定", "Varies by course");
  const min = Math.min(...amounts);
  return text(`價格自 NT$${min.toLocaleString("en-US")} 起`, `From NT$${min.toLocaleString("en-US")}`);
}

function getHomeAllAccessPriceLabel() {
  const allAccess = getAllAccessCourse();
  if (!allAccess || !allAccess.price) return "";
  const price = String(allAccess.price);
  const formal = price.match(/正式\s*(NT\$[\d,]+)/i) || price.match(/Official\s*(NT\$[\d,]+)/i);
  if (formal) return formal[1];
  const any = price.match(/NT\$[\d,]+/g);
  return any && any.length ? any[any.length - 1] : price;
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

function homePrimaryAction() {
  if (!state.authReady) {
    toast(text("正在確認登入狀態…", "Checking sign-in status…"));
    return;
  }
  if (!state.user) {
    requireGoogleLogin({ route: "freeLesson", lessonId: 0, action: "openFreeLesson" });
    return;
  }
  if (hasAllAccessPass()) {
    setRoute("learning");
    return;
  }
  if (homeHasLearningHistory()) {
    homeContinueLastLearning();
    return;
  }
  openFreeLesson(0);
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
  const name = getHomeDisplayName();
  const greet = name ? text(`${name}，`, `${name}, `) : "";

  if (!state.user) {
    return {
      primary: text("使用 Google 登入，免費開始", "Sign in with Google to Start Free"),
      secondary: text("查看完整課程地圖", "View Full Learning Map"),
      note: text("登入後可保存進度與成果。", "Sign in to save progress and results."),
      primaryAction: "homePrimaryAction()"
    };
  }

  if (hasAllAccessPass()) {
    return {
      primary: text("前往我的學習中心", "Go to Learning Center"),
      secondary: text("查看所有成果禮包", "View All Result Packages"),
      note: text(`${greet}你已解鎖完整學習路徑。`, `${greet}your full learning path is unlocked.`),
      primaryAction: "setRoute('learning')",
      secondaryAction: "setRoute('result-packages')"
    };
  }

  if (homeHasLearningHistory()) {
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
      primary: text("繼續上次學習", "Continue Learning"),
      secondary: text("探索進階課程", "Explore Premium Courses"),
      note: `${greet}${detail}`,
      primaryAction: "homeContinueLastLearning()",
      secondaryAction: "setRoute('premium')"
    };
  }

  return {
    primary: text("繼續免費課程", "Continue Free Course"),
    secondary: text("探索進階課程", "Explore Premium Courses"),
    note: text(`${greet}免費課程不需付款，進度會自動保存。`, `${greet}free courses need no payment, and progress is saved.`),
    primaryAction: "openFreeLesson(0)",
    secondaryAction: "setRoute('premium')"
  };
}

function renderHomeHeroPreview() {
  const isPreview = !state.user;
  const stats = getHomePlatformStats();
  const unlocked = isPreview ? 1 : countUnlockedPremiumCourses();
  const completedLessons = isPreview ? 3 : countCompletedLessonsAcrossPlatform();
  const packageItems = isPreview ? 2 : countCompletedResultPackageItems();
  const free = freeBootcampProgress();
  const progressPercent = isPreview ? 38 : (free.total ? free.percent : 0);
  const planLabel = !state.user
    ? text("平台預覽", "Platform Preview")
    : getAccountAccessLabel();
  const accountLine = !state.user
    ? ""
    : `<div class="home-preview-account">${renderAccountIdentity()}</div>`;

  const capabilities = getPremiumCourses().slice(0, 6).map(course => {
    const label = HOME_CAPABILITY_LABELS[course.id] || { zh: course.zhTitle, en: course.enTitle };
    const unlockedCourse = !isPreview && hasCourseAccess(course.id);
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
          ${isPreview ? `<em class="home-preview-badge">${text("平台預覽", "Platform Preview")}</em>` : `<em class="home-preview-badge home-preview-badge-live">${planLabel}</em>`}
        </div>
        ${accountLine}
        <div class="home-preview-body">
          <div class="home-preview-main">
            <p class="home-preview-kicker">${text("目前課程進度", "Current course progress")}</p>
            <h3>${text("免費入門／AI 新手訓練營", "Free Intro / AI Beginner Bootcamp")}</h3>
            <div class="home-preview-track"><div class="home-preview-bar" style="width:${progressPercent}%"></div></div>
            <p class="home-preview-meta">${isPreview ? `3 / ${stats.freeLessonCount || 8}` : `${free.completed} / ${free.total}`} · ${progressPercent}%</p>
            <button type="button" class="home-btn home-btn-primary home-btn-compact" onclick="homePrimaryAction()">${text("繼續學習", "Continue")}</button>
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
  const secondaryAction = cta.secondaryAction || "setRoute('map')";
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
          <button type="button" class="home-text-link" onclick="setRoute('result-packages')">${text("探索成果禮包", "Explore Result Packages")} →</button>
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
  const singlePrice = getHomeSingleCoursePriceLabel();
  const allAccessPrice = getHomeAllAccessPriceLabel();
  return `
    <section class="home-section home-section-alt" id="pricing">
      <div class="wrap">
        <div class="home-section-header">
          <h2>${text("依你的需求選擇開始方式", "Choose how you want to start")}</h2>
          <p class="home-section-lead">${text(
            "先免費上手，再解鎖單一能力，或一次打通完整路徑。",
            "Start free, unlock one capability, or open the full path at once."
          )}</p>
        </div>
        <div class="home-pricing-grid">
          <article class="home-price-card">
            <h3>${text("免費開始", "Start Free")}</h3>
            <p class="home-price-amount">NT$0</p>
            <ul>
              <li>${text("免費入門課程", "Free intro course")}</li>
              <li>${text("免費入門成果包", "Free starter result package")}</li>
              <li>${text("Google 登入保存進度", "Google sign-in saves progress")}</li>
            </ul>
            <button class="home-btn home-btn-secondary" onclick="homePrimaryAction()">${text("免費開始學習", "Start Learning Free")}</button>
          </article>
          <article class="home-price-card">
            <h3>${text("單門能力課程", "Single Capability Course")}</h3>
            <p class="home-price-amount">${singlePrice}</p>
            <ul>
              <li>${text("選擇一種需要的核心能力", "Choose one core capability")}</li>
              <li>${text("10 堂完整實戰課", "10 complete practice lessons")}</li>
              <li>${text("專屬成果禮包", "Dedicated result package")}</li>
            </ul>
            <button class="home-btn home-btn-secondary" onclick="setRoute('premium')">${text("查看單門課程", "View Single Courses")}</button>
          </article>
          <article class="home-price-card home-price-featured">
            <span class="home-price-badge">${text("最完整", "Most complete")}</span>
            <h3>${text("全站通行證", "All-Access Pass")}</h3>
            <p class="home-price-amount">${allAccessPrice || text("查看方案", "See plan")}</p>
            <ul>
              <li>${text(`解鎖 ${stats.courseCount} 門付費課程`, `Unlock ${stats.courseCount} premium courses`)}</li>
              <li>${text(`共 ${stats.lessonCount} 堂實戰課`, `${stats.lessonCount} practice lessons total`)}</li>
              <li>${text("全部成果禮包", "All result packages")}</li>
              <li>${text("未來課程更新", "Future course updates")}</li>
            </ul>
            <button class="home-btn home-btn-primary" onclick="setRoute('premium')">${text("查看全站方案", "View All-Access Plan")}</button>
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
          <button class="home-btn home-btn-primary home-btn-light" onclick="homePrimaryAction()">${text("免費開始學習", "Start Learning Free")}</button>
          <button class="home-btn home-btn-ghost" onclick="setRoute('map')">${text("查看課程地圖", "View Learning Map")}</button>
        </div>
      </div>
    </section>
  `;
}

function home() {
  return homeLandingShell(`
    <main class="home-page">
      ${renderHomeHero()}
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
          <span class="tag free">${text("學習路徑", "Learning Path")}</span>
          <h1>${text("我的學習地圖", "My Learning Map")}</h1>
          <p class="lead">${text(
            "依正式產品架構循序前進：免費入門 → 升學 → 大學學習 → 研究競賽 → 求職 → 職場 → 創業自動化。",
            "Follow the official path: Free intro → Admissions → College learning → Research → Career → Workplace → Startup automation."
          )}</p>
          ${state.user ? renderAccountMembershipSummary() : ""}
        </section>

        <section class="panel map-path-panel">
          <article class="card map-path-card">
            <span class="tag free">${text("免費", "Free")}</span>
            <h2>${text("免費入門／AI 新手訓練營", "Free Intro / AI Beginner Bootcamp")}</h2>
            <p><b>${text("核心能力", "Core ability")}：</b>${text("AI 基礎入門", "AI fundamentals")}</p>
            <p><b>${text("堂數", "Lessons")}：</b>${freeProgress.total || (typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP.length : 0)} ${text("堂", "lessons")}</p>
            <p><b>${text("最終成果包", "Final package")}：</b>${freePkg ? (state.lang === "zh" ? freePkg.zhTitle : freePkg.enTitle) : text("免費入門成果包", "Free Starter Package")}</p>
            <p><b>${text("價格", "Price")}：</b>${text("免費", "Free")}</p>
            <p>${text("學習進度", "Progress")}：${state.user ? `${freeProgress.completed}/${freeProgress.total}（${freeProgress.percent}%）` : text("登入後顯示個人進度", "Sign in to view personal progress")}</p>
            <div class="package-progress-track"><div class="package-progress-bar" style="width:${state.user ? freeProgress.percent : 0}%"></div></div>
            <div class="btnrow">
              <button class="btn primary" onclick="setRoute('courses')">${text("查看課程", "View Course")}</button>
              <button class="btn secondary" onclick="openResultPackage('free-starter')">${text("查看成果包", "View Package")}</button>
            </div>
          </article>

          ${premiumCourses.map((course, index) => {
            const unlocked = hasCourseAccess(course.id);
            const progress = courseProgress(course.id);
            const pkg = getResultPackageByCourseId(course.id);
            const lessonCount = (course.zhLessons || course.enLessons || []).length;
            return `
              <div class="map-path-arrow">↓</div>
              <article class="card map-path-card ${unlocked ? "" : "map-path-card-locked"}">
                <span class="tag ${unlocked ? "free" : "premiumtag"}">${unlocked ? text("已解鎖", "Unlocked") : text("尚未解鎖", "Locked")}</span>
                <h2>${index + 1}. ${state.lang === "zh" ? course.zhTitle : course.enTitle}</h2>
                <p><b>${text("核心能力", "Core ability")}：</b>${pkg ? (state.lang === "zh" ? pkg.zhCapability : pkg.enCapability) : (state.lang === "zh" ? (course.zhOutcome || "") : (course.enOutcome || ""))}</p>
                <p><b>${text("堂數", "Lessons")}：</b>${lessonCount} ${text("堂", "lessons")}</p>
                <p><b>${text("最終成果包", "Final package")}：</b>${pkg ? (state.lang === "zh" ? pkg.zhTitle : pkg.enTitle) : "-"}</p>
                <p><b>${text("價格", "Price")}：</b>${course.price || "-"}</p>
                <p>${text("學習進度", "Progress")}：${progress.completed}/${progress.total}（${progress.percent}%）</p>
                <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
                <div class="btnrow">
                  ${unlocked
                    ? `<button class="btn primary" onclick="openCourse('${course.id}')">${text("查看課程", "View Course")}</button>
                       <button class="btn secondary" onclick="openResultPackage('${pkg ? pkg.id : ""}')">${text("查看成果包", "View Package")}</button>`
                    : `<button class="btn primary" onclick="setRoute('premium')">${text("查看課程", "View Course")}</button>
                       <a class="btn secondary" href="${course.paymentUrl || "#"}" target="_blank" rel="noopener">${text("解鎖此課程", "Unlock Course")}</a>`
                  }
                </div>
              </article>
            `;
          }).join("")}

          ${allAccess ? `
            <div class="map-path-arrow">↓</div>
            <article class="card map-path-card">
              <span class="tag ${hasAllAccessPass() ? "free" : "premiumtag"}">${hasAllAccessPass() ? text("已解鎖", "Unlocked") : "All Access"}</span>
              <h2>${state.lang === "zh" ? allAccess.zhTitle : allAccess.enTitle}</h2>
              <p>${state.lang === "zh" ? allAccess.zhDesc : allAccess.enDesc}</p>
              <p><b>${text("價格", "Price")}：</b>${allAccess.price}</p>
              <div class="btnrow">
                ${hasAllAccessPass()
                  ? `<button class="btn primary" onclick="setRoute('result-packages')">${text("查看全部成果包", "View All Packages")}</button>`
                  : `<a class="btn primary" href="${allAccess.paymentUrl || "#"}" target="_blank" rel="noopener">${text("解鎖全站通行證", "Unlock All-Access")}</a>`
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
          <article class="card"><span class="tag">Progress</span><h3>${completedCount()} / ${LESSONS.length}</h3><p>${text("已完成課程", "Lessons completed")}</p></article>
          <article class="card"><span class="tag">Level</span><h3>${currentLevel()}</h3><p>${text("目前等級", "Current level")}</p></article>
          <article class="card"><span class="tag">Badges</span><h3>${badges.length}</h3><p>${text("已獲得徽章", "Badges earned")}</p></article>
          <article class="card"><span class="tag">Favorites</span><h3>${state.favorites.length}</h3><p>${text("收藏項目", "Saved items")}</p></article>
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
    ? `<button class="btn primary" onclick="openFreeLesson(0)">${text("開始免費課程", "Start Free Course")}</button>`
    : `<button class="btn primary" onclick='requireGoogleLogin({"route":"freeLesson","lessonId":0,"action":"openFreeLesson"})'>${text("使用 Google 登入後開始免費課程", "Sign in with Google to Start")}</button>`;

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
            <span class="tag free">🏆 Certificate</span>
            <h2>${text("AI 新手訓練營結業證書", "AI Beginner Bootcamp Certificate")}</h2>
            <p>${text("恭喜你完成 8 堂免費入門課程。下一步可以進入進階付費課程，開始建立你的大學申請包。", "Congratulations on completing all 8 free lessons. Next, enter the premium course to build your university application package.")}</p>
            <button class="btn primary" onclick="setRoute('premium')">${text("前往進階付費課程", "Go to Premium Course")}</button>
          </section>
        ` : ""}

        <div class="grid two">
          ${FREE_BOOTCAMP.map((lesson, i) => `
            <article class="card">
              <span class="tag ${loggedIn && isFreeLessonComplete(i) ? "free" : "premiumtag"}">${loggedIn && isFreeLessonComplete(i) ? "✓ " + text("已完成", "Completed") : "Free " + (i + 1)}</span>
              <h3>${lesson.title}</h3>
              <p>${lesson.goal}</p>
              <p><b>${text("本課成果", "Output")}：</b>${lesson.output}</p>
              ${loggedIn ? `
                <p><b>${text("測驗", "Quiz")}：</b>${(lesson.quizItems || []).length} ${text("題情境測驗", "scenario questions")}</p>
                <button class="btn primary" onclick="openFreeLesson(${i})">${text("進入本課", "Open Lesson")}</button>
              ` : `
                <button class="btn primary" onclick='requireGoogleLogin({"route":"freeLesson","lessonId":${i},"action":"openFreeLesson"})'>${text("使用 Google 登入後開始免費課程", "Sign in with Google to Start")}</button>
              `}
            </article>
          `).join("")}
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
  const lesson = FREE_BOOTCAMP[index] || FREE_BOOTCAMP[0];

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
          <span class="tag free">Free Lesson ${index + 1}</span>
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
          <h2>Prompt Template</h2>
          <div class="promptbox">${lesson.prompt}</div>
        </section>

        <section class="panel">
          <h2>${text("實作任務", "Practice Task")}</h2>
          <ol>
            ${lesson.task.map(step => `<li>${step}</li>`).join("")}
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
                ${q.options.map((opt, optIndex) => `
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
  return FREE_BOOTCAMP.map((lesson, index) => ({
    id: String(index),
    title: lesson.output || lesson.title,
    lessonTitle: lesson.title,
    value: getFreeOutput(index),
    complete: getFreeOutput(index).trim().length > 0
  }));
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
          <span class="tag free">V37 Dashboard</span>
          <h1>${text("我的免費學習 Dashboard", "My Free Learning Dashboard")}</h1>
          <p class="lead">${text("這裡集中顯示免費課程、成果包、測驗、XP 與結業證書。", "This page tracks free lessons, portfolio outputs, quizzes, XP, and certificate.")}</p>
        </section>

        <section class="panel">
          <h2>${text("學習總覽", "Overview")}</h2>
          <div class="grid four">
            <article class="card"><span class="tag">Lessons</span><h3>${course.completed}/${course.total}</h3><p>${course.percent}%</p></article>
            <article class="card"><span class="tag">Portfolio</span><h3>${portfolio.completed}/${portfolio.total}</h3><p>${portfolio.percent}%</p></article>
            <article class="card"><span class="tag">Quiz</span><h3>${quiz.correct}/${quiz.total}</h3><p>${quiz.percent}%</p></article>
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
          <p>${text("完成免費成果包後，可以進入付費課程建立完整的大學申請包。", "After completing this portfolio, continue to the premium course to build your university application package.")}</p>
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
    const course = premiumCourses.find(c => c.id === last.courseId);
    const progress = courseProgress(last.courseId);
    const lessons = course ? (state.lang === "zh" ? course.zhLessons : course.enLessons) : [];
    const lessonTitle = lessons[last.lessonIndex] || `Lesson ${(last.lessonIndex || 0) + 1}`;
    continueBlock = `
      <p><b>${text("課程", "Course")}：</b>${course ? (state.lang === "zh" ? course.zhTitle : course.enTitle) : last.courseId}</p>
      <p><b>${text("目前 Lesson", "Current lesson")}：</b>${lessonTitle}</p>
      <p><b>${text("課程進度", "Course progress")}：</b>${progress.completed}/${progress.total}（${progress.percent}%）</p>
      <button class="btn primary" onclick="currentCourseId='${last.courseId}'; openLesson(${Number(last.lessonIndex) || 0})">${text("繼續學習", "Continue Learning")}</button>
    `;
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
                  <p>${course.price || ""}</p>
                  <div class="btnrow">
                    <button class="btn secondary" onclick="setRoute('premium')">${text("查看課程", "View Course")}</button>
                    <a class="btn primary" href="${course.paymentUrl || "#"}" target="_blank" rel="noopener">${text("解鎖此課程", "Unlock")}</a>
                  </div>
                </article>
              `).join("")}
            </div>
          ` : ""}
        </section>

        <section class="panel">
          <h2>C. ${text("我的成果", "My Results")}</h2>
          <div class="grid three">
            <article class="card"><span class="tag">Packages</span><h3>${unlockedPackages.length}</h3><p>${text("已解鎖成果包", "Unlocked packages")}</p></article>
            <article class="card"><span class="tag">Items</span><h3>${totalResultItems}</h3><p>${text("已完成成果項目", "Completed result items")}</p></article>
            <article class="card"><span class="tag">Free</span><h3>${freePortfolio.completed}/${freePortfolio.total}</h3><p>${text("免費舊成果包", "Legacy free portfolio")}</p></article>
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
    return `
      <article class="pricing">
        <span class="tag ${unlocked ? "free" : "premiumtag"}">
          ${unlocked ? text("已開通", "Unlocked") : (course.id === "all-access" ? "All Access" : "Premium Course")}
        </span>
        <h2>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h2>
        <p>${state.lang === "zh" ? course.zhDesc : course.enDesc}</p>
        <p><b>${L("premium.suitableFor")}：</b>${state.lang === "zh" ? course.zhUser : course.enUser}</p>
        <p><b>${L("premium.outcome")}：</b>${state.lang === "zh" ? course.zhOutcome : course.enOutcome}</p>
        <p><b>${text("完成作品", "Final Product")}：</b>${state.lang === "zh" ? course.zhFinalProduct : course.enFinalProduct}</p>
        <p class="price">${course.price}</p>

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

        ${
          unlocked
            ? `<button type="button" class="btn primary" onclick="openCourse('${course.id}')">${text("進入已開通課程", "Enter Unlocked Course")}</button>`
            : `<a class="btn primary" href="${course.paymentUrl}" target="_blank">${L("premium.goPay")}</a>`
        }
      </article>
    `;
  }).join("");

  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("premium.title")}</h1>
        <p class="lead">${text(
          "付費區採用「一個完整課程一個價格」的方式，不是單堂課收費。每個課程包含 10 堂課、實作任務、Prompt 模板與最後成果。全站通行證可解鎖全部課程。",
          "Premium courses are sold as complete courses, not by individual lessons. Each course includes 10 lessons, practical tasks, prompt templates, and a final product. The All-Access Pass unlocks everything."
        )}</p>

        ${accessBanner}

        <section class="panel" style="margin-bottom:24px">
          <h2>${text("付費課程總覽", "Premium Course Overview")}</h2>
          <div class="grid three">
            ${PREMIUM.map(course => `
              <article class="card">
                <span class="tag ${hasCourseAccess(course.id) ? "free" : "premiumtag"}">${hasCourseAccess(course.id) ? text("已開通", "Unlocked") : course.price}</span>
                <h3>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h3>
                <p>${state.lang === "zh" ? course.zhFinalProduct : course.enFinalProduct}</p>
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






function openCourse(courseId) {
  currentCourseId = courseId;
  currentLessonIndex = 0;
  state.route = "course";
  window.scrollTo(0, 0);
  render();
}

function isLessonUnlocked(courseId, lessonIndex) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  if (!item) return false;
  if (!item.sequentialUnlock) return true;
  const index = Number(lessonIndex);
  if (index <= 0) return true;
  return isLessonComplete(courseId, index - 1);
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





function course() {
  const item = (typeof PREMIUM !== "undefined" && currentCourseId)
    ? PREMIUM.find(p => p.id === currentCourseId)
    : null;

  if (!item) {
    return shell(`<main class="page"><div class="wrap"><h1>${text("找不到課程", "Course Not Found")}</h1><button class="btn primary" onclick="setRoute('premium')">${text("回到進階付費", "Back to Premium")}</button></div></main>`);
  }

  const lessons = state.lang === "zh" ? item.zhLessons : item.enLessons;
  const progress = courseProgress(item.id);
  const details = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[item.id])
    ? PREMIUM_LESSON_DETAILS[item.id]
    : [];

  const renderLessonCard = (i) => {
    const title = lessons[i] || "";
    const detail = details[i] || {};
    const complete = isLessonComplete(item.id, i);
    const unlocked = isLessonUnlocked(item.id, i);
    const desc = state.lang === "zh" ? (detail.zhValueTip || "") : (detail.enValueTip || "");
    const icon = detail.icon || "";
    const statusTag = complete
      ? `<span class="tag free">${icon ? icon + " " : ""}✓ ${text("已完成", "Completed")}</span>`
      : unlocked
        ? `<span class="tag">${icon ? icon + " " : ""}Lesson ${i + 1}</span>`
        : `<span class="tag premiumtag">${icon ? icon + " " : ""}🔒 ${text("未解鎖", "Locked")}</span>`;

    return `
      <article class="card">
        ${statusTag}
        <h3>${title}</h3>
        ${desc ? `<p>${desc}</p>` : ""}
        ${
          unlocked
            ? `<button type="button" class="btn primary" onclick="openLesson(${i})">${text("進入本課", "Open Lesson")}</button>`
            : `<button type="button" class="btn secondary" disabled>${text("先完成上一課", "Complete previous lesson")}</button>`
        }
      </article>
    `;
  };

  const lessonSections = item.chapters && item.chapters.length
    ? item.chapters.map(ch => {
        const start = Number(ch.start) || 0;
        const count = Number(ch.count) || 0;
        const chapterDone = Array.from({ length: count }, (_, offset) => isLessonComplete(item.id, start + offset)).filter(Boolean).length;
        return `
          <section class="panel" style="margin-top:24px">
            <span class="tag">${ch.icon || ""} ${state.lang === "zh" ? ch.zhTitle : ch.enTitle}</span>
            <h2>${state.lang === "zh" ? ch.zhTitle : ch.enTitle}</h2>
            <p>${text("本章進度", "Chapter progress")}：${chapterDone}/${count}</p>
            <div class="grid two">
              ${Array.from({ length: count }, (_, offset) => renderLessonCard(start + offset)).join("")}
            </div>
          </section>
        `;
      }).join("")
    : `
      <section class="panel" style="margin-top:24px">
        <h2>${text("課程章節", "Course Lessons")}</h2>
        <div class="grid two">
          ${lessons.map((_, i) => renderLessonCard(i)).join("")}
        </div>
      </section>
    `;

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('premium')">← ${text("回到進階付費", "Back to Premium")}</button>
        <section class="panel">
          <span class="tag free">${text("已開通", "Unlocked")}</span>
          <h1>${state.lang === "zh" ? item.zhTitle : item.enTitle}</h1>
          <p class="price">${item.price}</p>
          <p class="lead">${state.lang === "zh" ? item.zhOutcome : item.enOutcome}</p>
          <p><b>${text("課程完成度", "Course Progress")}：</b>${progress.completed}/${progress.total}（${progress.percent}%）</p>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${progress.percent}%"></div></div>
          <div class="btnrow" style="margin-top:16px">
            <button class="btn primary" onclick="openCourseResultPackage('${item.id}')">${text("查看我的成果包", "View My Result Package")}</button>
            ${item.id === "admissions" ? `<button class="btn secondary" onclick="setRoute('applicationPackage')">${text("我的大學申請包", "My Application Package")}</button>` : ""}
          </div>
        </section>
        ${lessonSections}
      </div>
    </main>
  `);
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
























function progressUserKey() {
  return state.user && state.user.email ? state.user.email : "guest";
}

function lessonProgressKey(courseId, lessonIndex) {
  return `asb-lesson-complete-${progressUserKey()}-${courseId}-${Number(lessonIndex)}`;
}

function scoreKey(courseId, lessonIndex, metric) {
  return `asb-score-${progressUserKey()}-${courseId}-${Number(lessonIndex)}-${metric}`;
}

function isLessonComplete(courseId, lessonIndex) {
  try {
    return localStorage.getItem(lessonProgressKey(courseId, lessonIndex)) === "true";
  } catch (error) {
    return false;
  }
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

function courseProgress(courseId) {
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === courseId) : null;
  if (!item) return { completed: 0, total: 0, percent: 0 };
  const lessons = item.zhLessons || item.enLessons || [];
  const completed = lessons.filter((_, i) => isLessonComplete(courseId, i)).length;
  const total = lessons.length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

function getLessonScore(courseId, lessonIndex, metric) {
  try {
    return Number(localStorage.getItem(scoreKey(courseId, lessonIndex, metric)) || 0);
  } catch (error) {
    return 0;
  }
}

function setLessonScore(courseId, lessonIndex, metric, value) {
  try {
    localStorage.setItem(scoreKey(courseId, lessonIndex, metric), String(value));
    updateLessonScoreUI(courseId, lessonIndex);
  } catch (error) {}
}

function lessonScoreAverage(courseId, lessonIndex, metrics) {
  const values = metrics.map(m => getLessonScore(courseId, lessonIndex, m)).filter(v => v > 0);
  if (!values.length) return { avg: 0, total: 0, count: 0 };
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return { avg, total: Math.round(avg * 10), count: values.length };
}

function updateLessonScoreUI(courseId, lessonIndex) {
  const detail = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[courseId])
    ? PREMIUM_LESSON_DETAILS[courseId][lessonIndex]
    : null;
  const metrics = detail ? (state.lang === "zh" ? (detail.zhScorecard || []) : (detail.enScorecard || [])) : [];
  const score = lessonScoreAverage(courseId, lessonIndex, metrics);
  const el = document.getElementById("lesson-score-summary");
  if (el) {
    el.textContent = score.count
      ? `${state.lang === "zh" ? "自我評分" : "Self-score"}：${score.total}/100（${score.avg.toFixed(1)}/10）`
      : `${state.lang === "zh" ? "尚未評分" : "Not scored yet"}`;
  }

  metrics.forEach(metric => {
    const value = getLessonScore(courseId, lessonIndex, metric);
    for (let i = 1; i <= 10; i++) {
      const safeId = `score-${lessonIndex}-${metric}-${i}`;
      const btn = document.getElementById(safeId);
      if (btn) btn.classList.toggle("selected", i === value);
    }
  });
}


function toggleLessonComplete(courseId, lessonIndex) {
  const currentlyComplete = isLessonComplete(courseId, lessonIndex);
  setLessonComplete(courseId, lessonIndex, !currentlyComplete);
}



function savePremiumLessonToPackage(courseId, lessonIndex) {
  if (courseId !== "admissions") {
    toast(state.lang === "zh" ? "目前只有第一階段課程支援同步成果包" : "Package sync is currently available for Stage 1 only");
    return;
  }

  const textarea = document.getElementById(`premium-note-${courseId}-${lessonIndex + 1}`);
  const value = textarea ? textarea.value.trim() : "";
  if (!value) {
    toast(state.lang === "zh" ? "請先在課程筆記寫下你的成果，再同步到大學申請包" : "Write your output in course notes first, then sync it to the application package");
    return;
  }

  const map = ["map", "majors", "portfolio", "activities", "autobiography", "majorSpecific", "interviewBank", "mockInterview", "advisorPrompt", "finalReview"];
  const itemId = map[lessonIndex];
  if (!itemId || typeof applicationPackageKey !== "function") {
    toast(state.lang === "zh" ? "找不到對應的大學申請包欄位" : "No matching application package section found");
    return;
  }

  localStorage.setItem(applicationPackageKey(itemId), value);
  toast(state.lang === "zh" ? "已同步到大學申請包" : "Synced to application package");
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
  const courseDetails = (typeof PREMIUM_LESSON_DETAILS !== "undefined" && PREMIUM_LESSON_DETAILS[item.id])
    ? PREMIUM_LESSON_DETAILS[item.id]
    : [];
  const detail = courseDetails[currentLessonIndex];
  const lessonNo = currentLessonIndex + 1;

  if (detail) {
    const quizItems = state.lang === "zh" ? (detail.zhQuizItems || []) : (detail.enQuizItems || []);
    const practiceText = state.lang === "zh" ? detail.zhPractice : detail.enPractice;
    const practiceSteps = practiceText.split("；").filter(Boolean);
    const checklist = state.lang === "zh" ? (detail.zhDeliverableChecklist || []) : (detail.enDeliverableChecklist || []);
    const scorecard = state.lang === "zh" ? (detail.zhScorecard || []) : (detail.enScorecard || []);
    const chapter = (item.chapters || []).find(ch => {
      const start = Number(ch.start) || 0;
      const count = Number(ch.count) || 0;
      return currentLessonIndex >= start && currentLessonIndex < start + count;
    });
    const chapterLessons = chapter
      ? Array.from({ length: Number(chapter.count) || 0 }, (_, offset) => Number(chapter.start) + offset)
      : [];

    const chapterNav = chapter ? `
          <section class="panel" style="margin-top:24px">
            <span class="tag">${detail.icon || chapter.icon || ""} ${state.lang === "zh" ? chapter.zhTitle : chapter.enTitle}</span>
            <h2>${text("課程導航", "Lesson Navigation")}</h2>
            <p>${text("同一 Chapter 的課程快速切換：", "Jump within this chapter:")}</p>
            <div class="btnrow">
              ${chapterLessons.map(i => {
                const complete = isLessonComplete(item.id, i);
                const unlocked = isLessonUnlocked(item.id, i);
                const active = i === currentLessonIndex;
                if (!unlocked) {
                  return `<button class="btn secondary" disabled>🔒 ${i + 1}</button>`;
                }
                return `<button class="btn ${active ? "primary" : "secondary"}" onclick="openLesson(${i})">${complete ? "✓ " : ""}${i + 1}</button>`;
              }).join("")}
            </div>
          </section>
    ` : "";

    return shell(`
      <main class="page">
        <div class="wrap">
          <button class="btn secondary" onclick="setRoute('course')">← ${text("回到課程首頁", "Back to Course")}</button>

          <section class="panel">
            <span class="tag">${detail.icon || ""} Lesson ${lessonNo}${chapter ? " · " + (state.lang === "zh" ? chapter.zhTitle : chapter.enTitle) : ""}</span>
            <h1>${state.lang === "zh" ? detail.zhTitle : detail.enTitle}</h1>
            <p class="lead">${state.lang === "zh" ? (detail.zhValueTip || text("這一課會幫你完成一個可重用的學習成果。", "This lesson helps you create a reusable learning output.")) : (detail.enValueTip || text("這一課會幫你完成一個可重用的學習成果。", "This lesson helps you create a reusable learning output."))}</p>
          </section>

          ${chapterNav}

          <section class="panel" style="margin-top:24px">
            <h2>${text("本課會完成什麼", "What You Will Complete")}</h2>
            <p><b>${state.lang === "zh" ? detail.zhOutcome : detail.enOutcome}</b></p>
            <p>${state.lang === "zh" ? (detail.zhValueTip || "") : (detail.enValueTip || "")}</p>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("成果完成檢查表", "Deliverable Checklist")}</h2>
            <ul>
              ${checklist.map(x => `<li>□ ${x}</li>`).join("")}
            </ul>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("核心概念", "Core Concept")}</h2>
            <p>${state.lang === "zh" ? detail.zhConcept : detail.enConcept}</p>
          </section>

          ${(detail.zhCaseStudy || detail.enCaseStudy) ? `
          <section class="panel" style="margin-top:24px">
            <span class="tag premiumtag">Case</span>
            <h2>${getCourseCaseStudyTitle(item.id)}</h2>
            <p>${state.lang === "zh" ? detail.zhCaseStudy : detail.enCaseStudy}</p>
          </section>` : ""}

          ${(detail.zhWorkflow || detail.enWorkflow) ? `
          <section class="panel" style="margin-top:24px">
            <h2>${text("AI 操作流程", "AI Workflow")}</h2>
            <ol>
              ${(state.lang === "zh" ? detail.zhWorkflow : detail.enWorkflow).map(step => `<li>${step}</li>`).join("")}
            </ol>
          </section>` : ""}

          ${(detail.zhCommonMistakes || detail.enCommonMistakes) ? `
          <section class="panel" style="margin-top:24px">
            <h2>${text("常見錯誤", "Common Mistakes")}</h2>
            <ul>
              ${(state.lang === "zh" ? detail.zhCommonMistakes : detail.enCommonMistakes).map(item => `<li>${item}</li>`).join("")}
            </ul>
          </section>` : ""}

          ${(detail.zhExcellentExample || detail.enExcellentExample) ? `
          <section class="panel" style="margin-top:24px">
            <h2>${text("優秀作品應該長什麼樣", "What a Strong Output Looks Like")}</h2>
            <p>${state.lang === "zh" ? detail.zhExcellentExample : detail.enExcellentExample}</p>
          </section>` : ""}

          ${(detail.zhCoachPrompt || detail.enCoachPrompt) ? `
          <section class="panel" style="margin-top:24px">
            <h2>${text("AI 教練追問 Prompt", "AI Coach Follow-up Prompt")}</h2>
            <div class="promptbox">${state.lang === "zh" ? detail.zhCoachPrompt : detail.enCoachPrompt}</div>
          </section>` : ""}

          <section class="panel" style="margin-top:24px">
            <h2>Prompt Template</h2>
            <div class="promptbox">${state.lang === "zh" ? detail.zhPrompt : detail.enPrompt}</div>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("範例", "Example")}</h2>
            <p>${state.lang === "zh" ? detail.zhExample : detail.enExample}</p>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("實作任務", "Practice Task")}</h2>
            <ol>
              ${practiceSteps.map(step => `<li>${step}</li>`).join("")}
            </ol>
          </section>

          ${renderLessonResultPackagePanel(item.id, currentLessonIndex, detail)}

          <section class="panel" style="margin-top:24px">
            <h2>${text("AI 專家實作回饋 Prompt", "AI Expert Practice Feedback Prompt")}</h2>
            <p>${text("完成實作後，把成果貼到 AI，使用這段 Prompt 取得評分、診斷、修改建議與下一步行動。", "After completing the task, paste your work into AI and use this prompt to get scoring, diagnosis, revision advice, and next actions.")}</p>
            <div class="promptbox">${state.lang === "zh" ? detail.zhFeedbackPrompt : detail.enFeedbackPrompt}</div>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("自我評分表", "Self-Scorecard")}</h2>
            <p id="lesson-score-summary">${text("尚未評分", "Not scored yet")}</p>
            <div class="scorecard-list">
              ${scorecard.map(metric => `
                <div class="score-row">
                  <strong>${metric}</strong>
                  <div class="score-buttons">
                    ${[1,2,3,4,5,6,7,8,9,10].map(n => `
                      <button
                        id="score-${lessonNo - 1}-${metric}-${n}"
                        class="score-btn ${getLessonScore(item.id, lessonNo - 1, metric) === n ? "selected" : ""}"
                        onclick="setLessonScore('${item.id}', ${lessonNo - 1}, '${metric.replaceAll("'", "\'")}', ${n})"
                      >${n}</button>
                    `).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("小測驗", "Mini Quiz")}</h2>
            <div class="grid">
              ${quizItems.map((q, idx) => `
                <article class="card">
                  <h3>Q${idx + 1}. ${q.q}</h3>
                  <ol type="A">
                    ${q.options.map(opt => `<li>${opt}</li>`).join("")}
                  </ol>
                  <details>
                    <summary>${text("看答案", "Show Answer")}</summary>
                    <p><b>${q.answer}</b></p>
                  </details>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("課程筆記", "Course Notes")}</h2>
            <p>${state.lang === "zh" ? detail.zhNotePrompt : detail.enNotePrompt}</p>
            <textarea id="premium-note-${item.id}-${lessonNo}" placeholder="${text("在這裡寫下你的課程筆記...", "Write your course notes here...")}"></textarea>
            <button class="btn secondary" onclick="localStorage.setItem('premium-note-${item.id}-${lessonNo}', document.getElementById('premium-note-${item.id}-${lessonNo}').value); toast('${state.lang === "zh" ? "課程筆記已儲存" : "Course note saved"}')">${text("儲存課程筆記", "Save Course Notes")}</button>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("課後成果", "Final Output")}</h2>
            <p><b>${state.lang === "zh" ? detail.zhOutcome : detail.enOutcome}</b></p>
            <p>${text("完成後請把成果存進本課「課程成果包」，並標記本課完成以解鎖下一課。", "Save your output to this course result package, then mark the lesson complete to unlock the next one.")}</p>
            <div class="btnrow">
              <button class="btn secondary" onclick="openCourseResultPackage('${item.id}')">${text("查看我的成果包", "View My Result Package")}</button>
              ${lessonNo === 10 ? `<button class="btn primary" onclick="openCourseResultPackage('${item.id}')">${text("查看完整課程成果包", "View Full Course Result Package")}</button>` : ""}
              ${item.id === "admissions" ? `<button class="btn secondary" onclick="setRoute('applicationPackage')">${text("打開我的大學申請包", "Open My Application Package")}</button>` : ""}
            </div>
          </section>

          <section class="panel" style="margin-top:24px">
            <h2>${text("完成本課", "Complete Lesson")}</h2>
            <p>${isLessonComplete(item.id, lessonNo - 1) ? text("你已標記完成這一課。課程完成度已更新。", "You marked this lesson as complete. Course progress has been updated.") : text("完成實作任務、AI 回饋、自我評分與課程筆記後，請標記本課完成。", "After finishing the practice task, AI feedback, self-score, and notes, mark this lesson complete.")}</p>
            <button class="${isLessonComplete(item.id, lessonNo - 1) ? "btn secondary" : "btn primary"}" onclick="toggleLessonComplete('${item.id}', ${lessonNo - 1})">
              ${isLessonComplete(item.id, lessonNo - 1) ? text("取消完成", "Undo Complete") : "✓ " + text("標記本課完成", "Mark Complete")}
            </button>
          </section>

          <div class="btnrow" style="margin-top:24px">
            <button class="btn secondary" onclick="openPrevLesson()">${text("上一課", "Previous")}</button>
            <button class="btn primary" onclick="openNextLesson()">${text("下一課", "Next")}</button>
          </div>
        </div>
      </main>
    `);
  }

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('course')">← ${text("回到課程首頁", "Back to Course")}</button>
        <section class="panel">
          <span class="tag">Lesson ${lessonNo}</span>
          <h1>${fallbackTitle}</h1>
          <p class="lead">${text("這堂課的完整教材會在後續版本補上。", "Full lesson content will be added later.")}</p>
        </section>
      </div>
    </main>
  `);
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

function saveCourseResultEntry(courseId, lessonIndex, options = {}) {
  const pkg = getResultPackageByCourseId(courseId) || getResultPackageById(courseId);
  if (pkg && pkg.free && !state.user) {
    requireGoogleLogin({
      route: "courseResultPackage",
      packageId: pkg.id,
      action: "openResultPackage"
    });
    return;
  }
  if (pkg && !pkg.free && pkg.courseId && !hasCourseAccess(pkg.courseId)) {
    toast(state.lang === "zh" ? "請先解鎖此課程" : "Please unlock this course first");
    return;
  }
  if (!pkg && courseId !== "free-starter" && !hasCourseAccess(courseId)) {
    toast(state.lang === "zh" ? "請先解鎖此課程" : "Please unlock this course first");
    return;
  }

  const storageKey = pkg ? resultPackageStorageCourseKey(pkg) : courseId;
  const textEl = document.getElementById(`course-result-text-${storageKey}-${lessonIndex}`);
  const urlEl = document.getElementById(`course-result-url-${storageKey}-${lessonIndex}`);
  const textValue = textEl ? textEl.value : (options.text || "");
  const url = urlEl ? urlEl.value : (options.url || "");
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
  const outcome = state.lang === "zh" ? (detail.zhOutcome || "") : (detail.enOutcome || "");
  return `
    <section class="panel course-result-save-panel" style="margin-top:24px">
      <span class="tag ${done ? "free" : "premiumtag"}">${done ? text("成果包：已儲存", "Package: Saved") : text("成果包：尚未完成", "Package: Incomplete")}</span>
      <h2>${text("儲存到成果包", "Save to Result Package")}</h2>
      <p>${text("本堂應產出：", "This lesson deliverable:")} <b>${outcome}</b></p>
      <label class="course-result-label">${text("成果文字", "Result text")}</label>
      <textarea id="course-result-text-${courseId}-${lessonIndex}" placeholder="${text("把本堂實作成果貼在這裡...", "Paste this lesson's output here...")}">${escapeTextareaValue(entry.text)}</textarea>
      <label class="course-result-label">${text("成果連結（Google Drive / Notion / Canva / GitHub 等）", "Result link (Google Drive / Notion / Canva / GitHub, etc.)")}</label>
      <input class="course-result-url-input" id="course-result-url-${courseId}-${lessonIndex}" type="url" value="${escapeTextareaValue(entry.url)}" placeholder="https://" />
      <p class="course-result-meta">${text("最後儲存時間", "Last saved")}: ${formatCourseResultSavedAt(entry.savedAt)}</p>
      <div class="btnrow">
        <button class="btn primary" onclick="saveCourseResultEntry('${courseId}', ${lessonIndex})">${text("儲存到成果包", "Save to Result Package")}</button>
        <button class="btn secondary" onclick="openCourseResultPackage('${courseId}')">${text("查看我的成果包", "View My Result Package")}</button>
      </div>
    </section>
  `;
}

function resultPackages() {
  const packages = getResultPackageConfigList();
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
          ${packages.map((pkg, index) => {
            const needsLogin = pkg.free && !state.user;
            const unlocked = hasResultPackageAccess(pkg.id);
            const progress = (!state.user && pkg.free)
              ? { completed: 0, total: Number(pkg.totalItems) || (pkg.items ? pkg.items.length : 0), percent: 0 }
              : resultPackageProgressByConfig(pkg);
            const course = pkg.courseId && typeof PREMIUM !== "undefined"
              ? PREMIUM.find(p => p.id === pkg.courseId)
              : null;
            const price = pkg.free ? text("免費", "Free") : (course ? course.price : "");
            return `
              <article class="card result-package-card ${unlocked && !needsLogin ? "" : "result-package-card-locked"}">
                <span class="tag ${pkg.free || unlocked ? "free" : "premiumtag"}">${resultPackageAccessLabel(pkg.id)}</span>
                <h2>${index}. ${state.lang === "zh" ? pkg.zhTitle : pkg.enTitle}</h2>
                <p><b>${text("所屬課程", "Course")}：</b>${state.lang === "zh" ? pkg.zhCourseName : pkg.enCourseName}</p>
                <p>${state.lang === "zh" ? pkg.zhFinalOutcome : pkg.enFinalOutcome}</p>
                <p>${text("完成進度", "Progress")}：${needsLogin ? text("登入後顯示", "Sign in to view") : `${progress.completed} / ${progress.total}（${progress.percent}%）`}</p>
                <div class="package-progress-track"><div class="package-progress-bar" style="width:${needsLogin ? 0 : progress.percent}%"></div></div>
                <div class="btnrow">
                  ${needsLogin
                    ? `<button class="btn primary" onclick="openResultPackage('${pkg.id}')">${text("查看介紹", "View Intro")}</button>
                       <button class="btn secondary" onclick='requireGoogleLogin({"route":"courseResultPackage","packageId":"${pkg.id}","action":"openResultPackage"})'>${text("使用 Google 登入", "Sign in with Google")}</button>`
                    : unlocked
                    ? `<button class="btn primary" onclick="openResultPackage('${pkg.id}')">${text("查看成果包", "View Package")}</button>`
                    : `<button class="btn secondary" onclick="showResultPackageLockedMessage('${pkg.id}')">${text("已鎖定", "Locked")}</button>
                       <button class="btn secondary" onclick="setRoute('premium')">${text("查看課程", "View Course")}</button>
                       ${course ? `<a class="btn primary" href="${course.paymentUrl || "#"}" target="_blank" rel="noopener">${text("解鎖此課程", "Unlock Course")} · ${price}</a>` : ""}`
                  }
                </div>
                ${!unlocked && !pkg.free ? `<p class="course-result-meta">${text("價格", "Price")}：${price}</p>` : ""}
              </article>
            `;
          }).join("")}
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
            <div class="btnrow">
              <button class="btn secondary" onclick="setRoute('premium')">${text("查看課程", "View Course")}</button>
              ${course ? `<a class="btn primary" href="${course.paymentUrl || "#"}" target="_blank" rel="noopener">${text("解鎖此課程", "Unlock Course")}</a>` : ""}
              <button class="btn secondary" onclick="setRoute('result-packages')">${text("回到成果禮包", "Back to Result Packages")}</button>
            </div>
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
  { id: "map", title: "1. 大學申請準備地圖", desc: "整理第一階段、第二階段、備審與面試準備方向。", placeholder: "貼上你第1課完成的大學申請準備地圖..." },
  { id: "majors", title: "2. 科系探索表", desc: "整理 5 個可能科系與 3 個優先申請科系。", placeholder: "貼上你第2課完成的科系探索表..." },
  { id: "portfolio", title: "3. 學習歷程素材庫", desc: "整理高中三年的課程成果、活動、競賽、服務與專題。", placeholder: "貼上你第3課完成的學習歷程素材庫..." },
  { id: "activities", title: "4. 多元表現描述", desc: "放入 3 則用 STAR 架構完成的多元表現。", placeholder: "貼上你第4課完成的多元表現描述..." },
  { id: "autobiography", title: "5. 學習歷程自述初稿", desc: "整理你的學習主軸、能力成長、申請動機與未來規劃。", placeholder: "貼上你第5課完成的學習歷程自述..." },
  { id: "majorSpecific", title: "6. 科系專屬備審規劃", desc: "整理目標科系需求與你的素材對照。", placeholder: "貼上你第6課完成的科系專屬備審規劃..." },
  { id: "interviewBank", title: "7. 面試題庫與回答架構", desc: "整理 20 題面試題與最重要的回答重點。", placeholder: "貼上你第7課完成的面試題庫..." },
  { id: "mockInterview", title: "8. 模擬面試紀錄", desc: "整理 AI 模擬面試評分與改進清單。", placeholder: "貼上你第8課完成的模擬面試紀錄..." },
  { id: "advisorPrompt", title: "9. 個人 AI 升學顧問 Prompt", desc: "保存你可以重複使用的個人升學顧問 Prompt。", placeholder: "貼上你第9課完成的個人 AI 升學顧問 Prompt..." },
  { id: "finalReview", title: "10. 最終總檢查", desc: "整理 AI 對整份申請包的總檢查與最後修改清單。", placeholder: "貼上你第10課完成的總檢查結果..." }
];

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
    toast(state.lang === "zh" ? "已儲存到大學申請包" : "Saved to application package");

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
  const data = APPLICATION_PACKAGE_ITEMS.map(item => {
    return `${item.title}\n${getApplicationPackageCurrentValue(item.id) || loadApplicationPackageValue(item.id) || "尚未填寫"}`;
  }).join("\n\n---\n\n");

  return `請你擔任大學申請總顧問。以下是我的完整大學申請包：\n\n${data}\n\n請幫我做最終總檢查：\n1. 申請主軸是否清楚\n2. 每份資料是否互相支持\n3. 哪些內容太空泛\n4. 哪些地方和目標科系連結不足\n5. 哪些內容需要補強具體例子\n6. 請列出最優先修改的 5 件事\n7. 請給我一份最後 7 天修改計畫\n\n請不要捏造我的經歷，只根據我提供的內容給建議。`;
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
            <h1>${text("大學申請包尚未開通", "Application Package Locked")}</h1>
            <p class="lead">${text(
              "這個功能屬於「高中生申請大學 AI 實戰課」。開通後，你才能集中儲存 10 堂課成果並產出完整申請資料。",
              "This feature belongs to the University Application premium course. Unlock it to store all 10 lesson outputs and generate a complete application package."
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
          <h1>${text("我的大學申請包", "My University Application Package")}</h1>
          <p class="lead">${text(
            "每一課完成後，把成果貼到對應欄位並儲存。完成 10 個欄位後，你就會得到一份完整的大學申請資料。",
            "After each lesson, paste your result into the matching section and save it. When all 10 sections are complete, you will have a full university application package."
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
            const value = loadApplicationPackageValue(item.id);
            const done = value.trim().length > 0;
            return `
              <section class="panel application-package-item">
                <span id="application-package-status-${item.id}" class="tag ${done ? "free" : "premiumtag"}">${done ? text("已完成", "Completed") : text("尚未填寫", "Empty")}</span>
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <textarea id="application-package-${item.id}" placeholder="${item.placeholder}" oninput="updateApplicationPackageProgressUI()">${escapeTextareaValue(value)}</textarea>
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
          <article class="card"><span class="tag free">Access</span><h3>${L("impact.access")}</h3><p>${L("impact.accessText")}</p></article>
          <article class="card"><span class="tag premiumtag">Sustainability</span><h3>${L("impact.sustainability")}</h3><p>${L("impact.sustainabilityText")}</p></article>
          <article class="card"><span class="tag communitytag">Community</span><h3>${L("impact.community")}</h3><p>${L("impact.communityText")}</p></article>
        </div>
      </div>
    </main>
  `);
}

function render() {
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
  save();
}

async function startApp() {
  bindMoreMenuEvents();
  render();
  await initAuth();
  render();
}

addEventListener("DOMContentLoaded", startApp);
