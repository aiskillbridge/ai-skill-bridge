
const SUPABASE_URL = "https://ifjkadoskbcgrqmcjvya.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";

const CREATOR_EMAIL = "li19840610@gmail.com";

function isCreator() {
  return Boolean(state.user && state.user.email === CREATOR_EMAIL);
}

function hasCourseAccess(courseId) {
  if (isCreator()) return true;
  if (courseId === "all-access") return false;
  return false;
}


let supabaseClient = null;
if (window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let state = {
  lang: localStorage.getItem("asb_lang") || "zh",
  route: "home",
  activeLesson: localStorage.getItem("asb_lesson") || "ai",
  progress: JSON.parse(localStorage.getItem("asb_progress") || "{}"),
  notes: JSON.parse(localStorage.getItem("asb_notes") || "{}"),
  assessment: JSON.parse(localStorage.getItem("asb_assessment") || "null"),
  favorites: JSON.parse(localStorage.getItem("asb_favorites") || "[]"),
  user: null,
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

function completedCount() {
  return Object.values(state.progress).filter(Boolean).length;
}

function progressPercent() {
  return Math.round((completedCount() / LESSONS.length) * 100);
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

async function initAuth() {
  if (!supabaseClient) return;

  const { data } = await supabaseClient.auth.getSession();
  state.user = data.session?.user || null;

  if (state.user) {
    await loadProgressFromSupabase();
    await loadNotesFromSupabase();
  }

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    state.user = session?.user || null;

    if (state.user) {
      await loadProgressFromSupabase();
      await loadNotesFromSupabase();
    } else {
      state.progress = JSON.parse(localStorage.getItem("asb_progress") || "{}");
      state.notes = JSON.parse(localStorage.getItem("asb_notes") || "{}");
    }

    render();
  });
}

async function signInWithGoogle() {
  if (!supabaseClient) {
    alert(state.lang === "zh" ? "Supabase 尚未載入。" : "Supabase is not loaded.");
    return;
  }

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://ai-skill-bridge-woad.vercel.app"
    }
  });

  if (error) alert(error.message);
}

async function signOut() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  state.user = null;
  render();
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

  state.progress = progress;
  save();
}

async function completeLesson(lessonId) {
  state.progress[lessonId] = true;
  save();
  render();

  if (!state.user || !supabaseClient) {
    toast(text("已儲存在本機。登入後可同步進度。", "Saved locally. Login to sync progress."));
    return;
  }

  const { data: existing, error: selectError } = await supabaseClient
    .from("user_progress")
    .select("id")
    .eq("user_id", state.user.id)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  if (selectError) {
    console.error("Select progress error:", selectError);
    toast(text("同步前檢查失敗", "Sync check failed"));
    return;
  }

  if (existing?.id) {
    const { error } = await supabaseClient
      .from("user_progress")
      .update({
        completed: true,
        updated_at: new Date().toISOString()
      })
      .eq("id", existing.id)
      .eq("user_id", state.user.id);

    if (error) {
      console.error("Update progress error:", error);
      toast(text("進度更新失敗", "Progress update failed"));
      return;
    }
  } else {
    const { error } = await supabaseClient
      .from("user_progress")
      .insert({
        user_id: state.user.id,
        lesson_id: lessonId,
        completed: true,
        updated_at: new Date().toISOString()
      });

    if (error) {
      console.error("Insert progress error:", error);
      toast(text("進度新增失敗", "Progress insert failed"));
      return;
    }
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

function nav() {
  const items = [
    ["home", "nav.home"],
    ["courses", "nav.courses"],
    ["assessment", text("能力測驗", "Assessment")],
    ["map", text("學習地圖", "Learning Map")],
    ["center", text("我的學習中心", "My Center")],
    ["tutor", text("AI 提問教練", "Prompt Tutor")],
    ["free", "nav.free"],
    ["premium", "nav.premium"],
    ["tools", "nav.tools"],
    ["prompts", "nav.prompts"],
    ["community", "nav.community"],
    ["thailand", "nav.thailand"],
    ["impact", "nav.impact"]
  ];

  const authHtml = state.user
    ? `<button class="lang" title="${state.user.email}">${isCreator() ? "👑 " : ""}${state.user.email.split("@")[0]}</button>
       ${isCreator() ? `<button class="lang">Creator</button>` : ""}
       <button class="lang" onclick="signOut()">${state.lang === "zh" ? "登出" : "Logout"}</button>`
    : `<button class="lang" onclick="signInWithGoogle()">${state.lang === "zh" ? "Google 登入" : "Google Login"}</button>`;

  return `
    <header class="topbar">
      <div class="wrap nav">
        <button class="brand" onclick="setRoute('home')">
          <span class="logo">AI</span>
          <span>Skill <span style="color:var(--blue)">Bridge</span></span>
        </button>
        <nav class="navlinks">
          ${items.map(([route, key]) => {
            const label = key.includes(".") ? L(key) : key;
            return `<button class="${state.route === route ? "active" : ""}" onclick="setRoute('${route}')">${label}</button>`;
          }).join("")}
          ${authHtml}
          <button class="lang" onclick="toggleLang()">${state.lang === "zh" ? "EN" : "中文"}</button>
        </nav>
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

function home() {
  return shell(`
    <main>
      <section class="hero">
        <div class="wrap hero-grid">
          <div>
            <p class="eyebrow">${L("home.eyebrow")}</p>
            <h1>${L("home.title")}</h1>
            <p class="lead">${L("home.lead")}</p>

            ${
              state.user
                ? `<div class="card" style="margin:20px 0">
                    <b>${state.lang === "zh" ? "已登入：" : "Signed in as:"}</b> ${state.user.email}<br>
                    <b>${state.lang === "zh" ? "目前等級：" : "Current level:"}</b> ${currentLevel()}
                  </div>`
                : `<div class="card" style="margin:20px 0">
                    <b>${state.lang === "zh" ? "會員功能：" : "Member Feature:"}</b>
                    ${state.lang === "zh" ? "登入後可同步學習進度、筆記與未來付費課程。" : "Login syncs progress, notes, and later premium course access."}
                  </div>`
            }

            <div class="btnrow">
              <button class="btn primary" onclick="setRoute('assessment')">${text("開始能力測驗", "Start Assessment")}</button>
              <button class="btn secondary" onclick="setRoute('map')">${text("查看學習地圖", "View Learning Map")}</button>
              <button class="btn secondary" onclick="setRoute('free')">${L("home.start")}</button>
            </div>
          </div>
          <aside class="hero-card">
            <h2>${L("home.progress")}</h2>
            <div class="progressbar"><div class="progressfill" style="width:${progressPercent()}%"></div></div>
            <p>${completedCount()} / ${LESSONS.length} · ${progressPercent()}% completed</p>
            <div class="grid two">
              <div class="card"><b>${LESSONS.length}</b><br>${L("home.freeLessons")}</div>
              <div class="card"><b>${TOOLS.length}</b><br>${L("home.aiTools")}</div>
              <div class="card"><b>${PREMIUM.length}</b><br>${L("home.premiumTracks")}</div>
              <div class="card"><b>${earnedBadges().length}</b><br>${text("徽章", "Badges")}</div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2>${L("home.missionTitle")}</h2>
          <p class="lead">${L("home.missionText")}</p>
          <div class="grid three">
            <article class="card">
              <span class="tag free">Assessment</span>
              <h3>${text("能力測驗", "Assessment")}</h3>
              <p>${text("先判斷使用者目前程度，再推薦下一步課程。", "Identify user level first, then recommend next lessons.")}</p>
            </article>
            <article class="card">
              <span class="tag premiumtag">Map</span>
              <h3>${text("學習地圖", "Learning Map")}</h3>
              <p>${text("讓使用者知道自己在哪裡、下一步該學什麼。", "Show where users are and what they should learn next.")}</p>
            </article>
            <article class="card">
              <span class="tag communitytag">Center</span>
              <h3>${text("個人學習中心", "Learning Center")}</h3>
              <p>${text("整合進度、筆記、徽章、證書與收藏。", "Combine progress, notes, badges, certificates, and favorites.")}</p>
            </article>
          </div>
        </div>
      </section>
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
                    return `<article class="card"><h3>${state.lang === "zh" ? lesson.zhTitle : lesson.enTitle}</h3><button class="btn primary" onclick="state.activeLesson='${lesson.id}';setRoute('free')">${text("開始學習", "Start")}</button></article>`;
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
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${text("我的學習地圖", "My Learning Map")}</h1>
        <p class="lead">${text("依照等級循序學習。完成每個階段後，你會獲得徽章與證書。", "Learn step by step. Completing each stage earns a badge and certificate.")}</p>
        <div class="grid">
          ${LEARNING_MAP.map(group => {
            const total = group.lessonIds.length;
            const done = group.lessonIds.filter(id => state.progress[id]).length;
            const percent = Math.round((done / total) * 100);
            return `
              <section class="panel">
                <span class="tag">${group.level}</span>
                <h2>${state.lang === "zh" ? group.zhTitle : group.enTitle}</h2>
                <div class="progressbar"><div class="progressfill" style="width:${percent}%"></div></div>
                <p>${done} / ${total} · ${percent}%</p>
                <div class="grid three">
                  ${group.lessonIds.map(id => {
                    const lesson = LESSONS.find(item => item.id === id);
                    if (!lesson) return "";
                    return `
                      <article class="card">
                        <span class="tag ${state.progress[id] ? "free" : ""}">${state.progress[id] ? "✓" : "○"}</span>
                        <h3>${state.lang === "zh" ? lesson.zhTitle : lesson.enTitle}</h3>
                        <button class="btn secondary" onclick="state.activeLesson='${lesson.id}';setRoute('free')">${text("前往課程", "Go to Lesson")}</button>
                      </article>
                    `;
                  }).join("")}
                </div>
                <p><b>${text("完成徽章", "Completion Badge")}：</b>${group.badge}</p>
              </section>
            `;
          }).join("")}
        </div>
      </div>
    </main>
  `);
}

function center() {
  const badges = earnedBadges();
  const certs = earnedCertificates();
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${text("我的學習中心", "My Learning Center")}</h1>
        <p class="lead">${state.user ? state.user.email : text("登入後可同步學習紀錄。", "Login to sync your learning records.")}</p>

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

function courses() {
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("courses.title")}</h1>
        <p class="lead">${L("courses.lead")}</p>
        <div class="grid two">
          <article class="pricing">
            <span class="tag free">Free</span>
            <h2>${L("courses.freePath")}</h2>
            <p>${L("courses.freePathDesc")}</p>
            <p class="price">NT$0</p>
            <button class="btn primary" onclick="setRoute('free')">${L("courses.enter")}</button>
          </article>
          <article class="pricing">
            <span class="tag premiumtag">Premium</span>
            <h2>${L("courses.premiumPath")}</h2>
            <p>${L("courses.premiumPathDesc")}</p>
            <p class="price">NT$499+</p>
            <button class="btn secondary" onclick="setRoute('premium')">${L("courses.view")}</button>
          </article>
        </div>
      </div>
    </main>
  `);
}



function premium() {
  const creatorBanner = isCreator()
    ? `<section class="panel" style="margin-bottom:24px">
        <span class="tag free">Creator Access</span>
        <h2>${text("創辦人帳號已全站開通", "Founder account has full access")}</h2>
        <p>${text("你目前使用創辦人 Email 登入，因此 6 個付費課程與全站通行證都會顯示為已解鎖。", "You are signed in with the founder email, so all 6 premium courses and the all-access pass are unlocked.")}</p>
      </section>`
    : "";

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
            ${(state.lang === "zh" ? course.zhLessons : course.enLessons).map(item => `<li>${item}</li>`).join("")}
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
            ? `<button class="btn primary" onclick="toast('${state.lang === "zh" ? "你是創辦人帳號，已開通此課程" : "Founder account: this course is unlocked"}')">${text("進入已開通課程", "Enter Unlocked Course")}</button>`
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

        ${creatorBanner}

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


let currentLessonIndex = 0;

function openLesson(index){
  currentLessonIndex = index;
  setRoute("lesson");
}

function lesson(){
  const item = PREMIUM.find(p => p.id === currentCourseId);
  if(!item){
    return shell(`<main class="page"><div class="wrap"><h1>Lesson Not Found</h1></div></main>`);
  }
  const lessons = state.lang==="zh" ? item.zhLessons : item.enLessons;
  const title = lessons[currentLessonIndex] || "";
  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('course')">← Back</button>
        <h1>${title}</h1>

        <section class="panel">
          <h2>${state.lang==="zh"?"本課重點":"Lesson Objectives"}</h2>
          <ul>
            <li>${state.lang==="zh"?"理解本課核心概念":"Understand the core concept"}</li>
            <li>${state.lang==="zh"?"學習 Prompt 使用方式":"Learn prompt usage"}</li>
            <li>${state.lang==="zh"?"完成實作練習":"Complete a practical exercise"}</li>
          </ul>
        </section>

        <section class="panel">
          <h2>Prompt Template</h2>
          <pre>請你當作我的教練，逐步教我：${title}，並提供範例、練習與回饋。</pre>
        </section>

        <section class="panel">
          <h2>${state.lang==="zh"?"實作任務":"Practice Task"}</h2>
          <p>${state.lang==="zh"?"完成本課後，請將成果整理成一頁筆記。":"Create a one-page summary after finishing this lesson."}</p>
        </section>

        <section class="panel">
          <h2>${state.lang==="zh"?"小測驗":"Quiz"}</h2>
          <p>${state.lang==="zh"?"請用自己的話解釋本課內容。":"Explain the lesson in your own words."}</p>
        </section>

        <button class="btn primary" onclick="openLesson(Math.min(currentLessonIndex+1, lessons.length-1))">
          ${state.lang==="zh"?"下一課":"Next Lesson"}
        </button>
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
    courses,
    assessment,
    map: learningMap,
    center,
    free,
    premium,
    tools,
    prompts,
    community,
    tutor,
    thailand,
    impact
  };
  document.getElementById("app").innerHTML = (routes[state.route] || home)();
  save();
}

async function startApp() {
  await initAuth();
  render();
}

addEventListener("DOMContentLoaded", startApp);
