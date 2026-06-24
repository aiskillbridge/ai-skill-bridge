
const SUPABASE_URL = "https://ifjkadoskbcgrqmcjvya.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";
let supabaseClient = null;

if (window.supabase && SUPABASE_ANON_KEY !== "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE") {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let state = {
  lang: localStorage.getItem("asb_lang") || "zh",
  route: "home",
  activeLesson: localStorage.getItem("asb_lesson") || "ai",
  progress: JSON.parse(localStorage.getItem("asb_progress") || "{}"),
  user: null,
  profile: null
};

function L(path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], I18N[state.lang]) || path;
}

function save() {
  localStorage.setItem("asb_lang", state.lang);
  localStorage.setItem("asb_lesson", state.activeLesson);
  localStorage.setItem("asb_progress", JSON.stringify(state.progress));
}

function completedCount() {
  return Object.values(state.progress).filter(Boolean).length;
}

function progressPercent() {
  return Math.round((completedCount() / LESSONS.length) * 100);
}

function currentLevel() {
  const done = completedCount();
  if (done === 0) return "Level 0";
  if (done < LESSONS.length) return "Level 0";
  return "Level 1 Ready";
}

function setRoute(route) {
  state.route = route;
  window.scrollTo(0, 0);
  render();
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

async function ensureProfile() {
  if (!supabaseClient || !state.user) return;

  const profilePayload = {
    id: state.user.id,
    email: state.user.email,
    display_name: state.user.user_metadata?.full_name || state.user.email?.split("@")[0] || "",
    plan: "free"
  };

  const { error } = await supabaseClient
    .from("profiles")
    .upsert(profilePayload, { onConflict: "id" });

  if (error) {
    console.error("Profile sync error:", error);
  }
}

async function loadProfile() {
  if (!supabaseClient || !state.user) return;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id,email,display_name,plan,created_at")
    .eq("id", state.user.id)
    .single();

  if (!error && data) {
    state.profile = data;
  }
}

async function loadProgressFromSupabase() {
  if (!supabaseClient || !state.user) return;

  const { data, error } = await supabaseClient
    .from("learning_progress")
    .select("lesson_id, completed")
    .eq("completed", true);

  if (error) {
    console.error("Progress load error:", error);
    return;
  }

  const cloudProgress = {};
  (data || []).forEach(row => {
    cloudProgress[row.lesson_id] = row.completed;
  });

  state.progress = { ...state.progress, ...cloudProgress };
  save();
}

async function saveProgressToSupabase(lessonId) {
  if (!supabaseClient || !state.user) return;

  const { error } = await supabaseClient
    .from("learning_progress")
    .upsert(
      {
        user_id: state.user.id,
        lesson_id: lessonId,
        completed: true
      },
      { onConflict: "user_id,lesson_id" }
    );

  if (error) {
    console.error("Progress save error:", error);
    toast(state.lang === "zh" ? "進度同步失敗，但已暫存在本機。" : "Cloud sync failed, saved locally.");
  }
}

async function completeLesson(lessonId) {
  state.progress[lessonId] = true;
  save();
  await saveProgressToSupabase(lessonId);
  toast(state.lang === "zh" ? "課程已完成，進度已儲存。" : "Lesson completed and progress saved.");
  render();
}

async function initAuth() {
  if (!supabaseClient) return;

  const { data } = await supabaseClient.auth.getSession();
  state.user = data.session?.user || null;

  if (state.user) {
    await ensureProfile();
    await loadProfile();
    await loadProgressFromSupabase();
  }

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    state.user = session?.user || null;
    if (state.user) {
      await ensureProfile();
      await loadProfile();
      await loadProgressFromSupabase();
    } else {
      state.profile = null;
    }
    render();
  });
}

async function signInWithGoogle() {
  if (!supabaseClient) {
    alert(state.lang === "zh" ? "尚未設定 Supabase Publishable Key。" : "Supabase Publishable Key is not configured.");
    return;
  }

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "https://ai-skill-bridge-woad.vercel.app" }
  });

  if (error) alert(error.message);
}

async function signOut() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  state.user = null;
  state.profile = null;
  render();
}

function nav() {
  const items = [
    ["home", "nav.home"],
    ["dashboard", state.lang === "zh" ? "我的進度" : "Dashboard"],
    ["courses", "nav.courses"],
    ["free", "nav.free"],
    ["premium", "nav.premium"],
    ["tools", "nav.tools"],
    ["prompts", "nav.prompts"],
    ["community", "nav.community"]
  ];

  const authHtml = state.user
    ? `<button class="lang" onclick="setRoute('dashboard')" title="${state.user.email}">${(state.profile?.display_name || state.user.email.split("@")[0])}</button><button class="lang" onclick="signOut()">${state.lang === "zh" ? "登出" : "Logout"}</button>`
    : `<button class="lang" onclick="signInWithGoogle()">${state.lang === "zh" ? "Google 登入" : "Google Login"}</button>`;

  return `<header class="topbar"><div class="wrap nav"><button class="brand" onclick="setRoute('home')"><span class="logo">AI</span><span>Skill <span style="color:var(--blue)">Bridge</span></span></button><nav class="navlinks">${items.map(([route, label]) => `<button class="${state.route === route ? "active" : ""}" onclick="setRoute('${route}')">${label.startsWith("nav.") ? L(label) : label}</button>`).join("")}${authHtml}<button class="lang" onclick="toggleLang()">${state.lang === "zh" ? "EN" : "中文"}</button></nav></div></header>`;
}

function shell(content) {
  return `${nav()}${content}<footer class="footer"><div class="wrap"><p>© 2026 AI Skill Bridge. ${state.lang === "zh" ? "讓不懂 AI 的人也能開始上手。" : "Helping beginners start using AI."}</p></div></footer>`;
}

function home() {
  return shell(`<main><section class="hero"><div class="wrap hero-grid"><div><p class="eyebrow">${L("home.eyebrow")}</p><h1>${L("home.title")}</h1><p class="lead">${L("home.lead")}</p>${state.user ? `<div class="card" style="margin:20px 0"><b>${state.lang === "zh" ? "已登入：" : "Signed in as:"}</b> ${state.profile?.display_name || state.user.email}</div>` : `<div class="card" style="margin:20px 0"><b>${state.lang === "zh" ? "會員功能：" : "Member Feature:"}</b> ${state.lang === "zh" ? "登入後可同步學習進度、未來解鎖付費課程。" : "Login will later sync progress and unlock premium courses."}</div>`}<div class="btnrow"><button class="btn primary" onclick="setRoute('free')">${L("home.start")}</button><button class="btn secondary" onclick="setRoute('tools')">${L("home.tools")}</button><button class="btn secondary" onclick="setRoute('premium')">${L("home.premium")}</button>${state.user ? `<button class="btn secondary" onclick="setRoute('dashboard')">${state.lang === "zh" ? "查看我的進度" : "View Dashboard"}</button>` : ""}</div></div><aside class="hero-card"><h2>${L("home.progress")}</h2><div class="progressbar"><div class="progressfill" style="width:${progressPercent()}%"></div></div><p>${progressPercent()}% completed</p><div class="grid two"><div class="card"><b>${LESSONS.length}</b><br>${L("home.freeLessons")}</div><div class="card"><b>${TOOLS.length}</b><br>${L("home.aiTools")}</div><div class="card"><b>${completedCount()}</b><br>${state.lang === "zh" ? "已完成" : "Completed"}</div><div class="card"><b>${state.profile?.plan || "free"}</b><br>${state.lang === "zh" ? "會員方案" : "Plan"}</div></div></aside></div></section></main>`);
}

function dashboard() {
  if (!state.user) {
    return shell(`<main class="page"><div class="wrap"><h1>${state.lang === "zh" ? "我的進度" : "Dashboard"}</h1><p class="lead">${state.lang === "zh" ? "請先登入 Google 帳號，才能查看個人學習進度。" : "Please login with Google to view your learning progress."}</p><button class="btn primary" onclick="signInWithGoogle()">${state.lang === "zh" ? "Google 登入" : "Google Login"}</button></div></main>`);
  }

  return shell(`<main class="page"><div class="wrap"><h1>${state.lang === "zh" ? "我的學習儀表板" : "My Learning Dashboard"}</h1><p class="lead">${state.lang === "zh" ? "這裡會顯示你的會員資料、學習進度和目前等級。" : "Your member profile, course progress, and current level."}</p><div class="grid three"><article class="card"><h3>${state.lang === "zh" ? "會員資料" : "Profile"}</h3><p><b>${state.lang === "zh" ? "名稱" : "Name"}：</b>${state.profile?.display_name || state.user.email}</p><p><b>Email：</b>${state.profile?.email || state.user.email}</p><p><b>${state.lang === "zh" ? "方案" : "Plan"}：</b>${state.profile?.plan || "free"}</p></article><article class="card"><h3>${state.lang === "zh" ? "學習進度" : "Progress"}</h3><div class="progressbar"><div class="progressfill" style="width:${progressPercent()}%"></div></div><p><b>${completedCount()} / ${LESSONS.length}</b> ${state.lang === "zh" ? "課已完成" : "lessons completed"}</p><p>${progressPercent()}% completed</p></article><article class="card"><h3>${state.lang === "zh" ? "目前等級" : "Current Level"}</h3><p class="price">${currentLevel()}</p><p>${state.lang === "zh" ? "完成免費入門課程後，即可進入 Level 1 應用課程。" : "Complete all free lessons to become Level 1 ready."}</p></article></div><section class="panel" style="margin-top:24px"><h2>${state.lang === "zh" ? "課程完成狀態" : "Lesson Status"}</h2><div class="grid three">${LESSONS.map(lesson => `<article class="card"><span class="tag ${state.progress[lesson.id] ? "free" : ""}">${state.progress[lesson.id] ? "✓ Completed" : "Not yet"}</span><h3>${state.lang === "zh" ? lesson.zhTitle : lesson.enTitle}</h3><p>${lesson.level}</p><button class="btn secondary" onclick="state.activeLesson='${lesson.id}';setRoute('free')">${state.lang === "zh" ? "前往課程" : "Open lesson"}</button></article>`).join("")}</div></section></div></main>`);
}

function courses() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("courses.title")}</h1><p class="lead">${L("courses.lead")}</p><div class="grid two"><article class="pricing"><span class="tag free">Free</span><h2>${L("courses.freePath")}</h2><p>${L("courses.freePathDesc")}</p><p class="price">NT$0</p><button class="btn primary" onclick="setRoute('free')">${L("courses.enter")}</button></article><article class="pricing"><span class="tag premiumtag">Premium</span><h2>${L("courses.premiumPath")}</h2><p>${L("courses.premiumPathDesc")}</p><p class="price">NT$499+</p><button class="btn secondary" onclick="setRoute('premium')">${L("courses.view")}</button></article></div></div></main>`);
}

function free() {
  const lesson = LESSONS.find(item => item.id === state.activeLesson) || LESSONS[0];
  return shell(`<main class="page"><div class="wrap"><h1>${L("free.title")}</h1><p class="lead">${L("free.lead")}</p><div class="dashboard"><aside><div class="panel">${LESSONS.map(item => `<button class="sidebtn ${item.id === lesson.id ? "active" : ""}" onclick="state.activeLesson='${item.id}';save();render()"><span>${state.lang === "zh" ? item.zhTitle : item.enTitle}</span><span>${state.progress[item.id] ? "✓" : ""}</span></button>`).join("")}</div></aside><section>${renderLesson(lesson)}</section></div></div></main>`);
}

function renderLesson(lesson) {
  let html = `<article class="lesson"><div class="meta"><span class="tag free">${lesson.level}</span><span class="tag">${state.progress[lesson.id] ? L("free.completed") : L("misc.incomplete")}</span></div><h2>${state.lang === "zh" ? lesson.zhTitle : lesson.enTitle}</h2><p>${state.lang === "zh" ? lesson.zhText : lesson.enText}</p>`;
  if (lesson.quiz) {
    html += `<div class="practice"><h3>${L("free.quiz")}</h3><p><b>${state.lang === "zh" ? lesson.quiz.zhQ : lesson.quiz.enQ}</b></p>${lesson.quiz.options.map((option, index) => `<button class="quiz-option" onclick="answerQuiz('${lesson.id}', ${index}, this)">${state.lang === "zh" ? option.zh : option.en}</button>`).join("")}<div id="fb-${lesson.id}" class="feedback hidden"></div></div>`;
  }
  if (lesson.zhTask) {
    html += `<div class="practice"><h3>${L("free.practice")}</h3><p>${state.lang === "zh" ? lesson.zhTask : lesson.enTask}</p><textarea placeholder="${L("free.answerPlaceholder")}"></textarea><div class="btnrow"><button class="btn secondary" onclick="document.getElementById('ans-${lesson.id}').classList.add('show')">${L("free.reveal")}</button></div><div id="ans-${lesson.id}" class="answer">${state.lang === "zh" ? lesson.zhAnswer : lesson.enAnswer}</div></div>`;
  }
  html += `<button class="btn primary" onclick="completeLesson('${lesson.id}')">${L("free.complete")}</button></article>`;
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

function premium() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("premium.title")}</h1><p class="lead">${L("premium.lead")}</p><div class="grid three">${PREMIUM.map(course => `<article class="pricing"><span class="tag premiumtag">Premium</span><h2>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h2><p><b>${L("premium.suitableFor")}：</b>${state.lang === "zh" ? course.zhUser : course.enUser}</p><p><b>${L("premium.outcome")}：</b>${state.lang === "zh" ? course.zhOutcome : course.enOutcome}</p><p class="price">${course.price}</p><a class="btn primary" href="${course.paymentUrl}" target="_blank">${L("premium.goPay")}</a></article>`).join("")}</div></div></main>`);
}

function tools() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("tools.title")}</h1><p class="lead">${L("tools.lead")}</p><div class="grid three">${TOOLS.map(tool => `<article class="card"><div class="tool-logo">${tool.name[0]}</div><h3>${tool.name}</h3><p>${state.lang === "zh" ? tool.zh : tool.en}</p><a class="btn primary" href="${tool.url}" target="_blank">${L("tools.open")}</a></article>`).join("")}</div></div></main>`);
}

function prompts() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("prompts.title")}</h1><p class="lead">${L("prompts.lead")}</p><div class="grid two">${PROMPTS.map((prompt, index) => `<article class="card"><span class="tag">${prompt.cat}</span><div class="promptbox" id="prompt-${index}">${prompt.text}</div><button class="btn secondary" onclick="copyPrompt('prompt-${index}')">${L("prompts.copy")}</button></article>`).join("")}</div></div></main>`);
}

function copyPrompt(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  toast(L("prompts.copied"));
}

function community() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("community.title")}</h1><p class="lead">${L("community.lead")}</p><div class="slide"><div><p class="eyebrow" style="color:#93c5fd">${L("community.boardTitle")}</p><h3>${L("community.boardQuestion")}</h3></div><div class="sticky-note">${L("community.note")}</div></div></div></main>`);
}

function thailand() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("thailand.title")}</h1><p class="lead">${L("thailand.lead")}</p><section class="panel"><h2>${L("thailand.journal")}</h2><p>${L("thailand.dailyText")}</p></section></div></main>`);
}

function impact() {
  return shell(`<main class="page"><div class="wrap"><h1>${L("impact.title")}</h1><p class="lead">${L("impact.lead")}</p><div class="grid three"><article class="card"><span class="tag free">Access</span><h3>${L("impact.access")}</h3><p>${L("impact.accessText")}</p></article><article class="card"><span class="tag premiumtag">Sustainability</span><h3>${L("impact.sustainability")}</h3><p>${L("impact.sustainabilityText")}</p></article><article class="card"><span class="tag communitytag">Community</span><h3>${L("impact.community")}</h3><p>${L("impact.communityText")}</p></article></div></div></main>`);
}

function render() {
  const routes = { home, dashboard, courses, free, premium, tools, prompts, community, thailand, impact };
  document.getElementById("app").innerHTML = (routes[state.route] || home)();
  save();
}

async function startApp() {
  await initAuth();
  render();
}

addEventListener("DOMContentLoaded", startApp);
