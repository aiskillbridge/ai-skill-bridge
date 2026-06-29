
const SUPABASE_URL = "https://ifjkadoskbcgrqmcjvya.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";

const CREATOR_EMAIL = "li19840610@gmail.com";






let supabaseClient = null;
if (window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let currentCourseId = null;
let currentLessonIndex = 0;

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



function toggleMoreMenu(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById("moreMenu");
  if (!menu) return;
  menu.classList.toggle("open");
}

function closeMoreMenu() {
  const menu = document.getElementById("moreMenu");
  if (menu) menu.classList.remove("open");
}

document.addEventListener("click", function(event) {
  const menu = document.getElementById("moreMenu");
  if (!menu) return;
  const wrap = menu.closest(".more-wrap");
  if (wrap && !wrap.contains(event.target)) {
    menu.classList.remove("open");
  }
});


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
    { route: "premium", zh: "進階付費", en: "Premium" }
  ];

  const moreLinks = [
    { route: "freePortfolio", zh: "我的免費成果包", en: "My Free Portfolio" },
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

  const authHtml = state.user
    ? `<button class="lang" title="${state.user.email}">${typeof isCreator === "function" && isCreator() ? "👑 " : ""}${state.user.email.split("@")[0]}</button>
       ${typeof isCreator === "function" && isCreator() ? `<button class="lang">Creator</button>` : ""}
       <button class="lang" onclick="signOut()">${state.lang === "zh" ? "登出" : "Logout"}</button>`
    : `<button class="lang" onclick="signInWithGoogle()">${state.lang === "zh" ? "Google 登入" : "Google Login"}</button>`;

  return `
    <header>
      <div class="nav compact-nav">
        <div class="brand" onclick="setRoute('home')" style="cursor:pointer">
          <span class="logo-badge">AI</span>
          <span>AI Skill Bridge</span>
        </div>

        <div class="nav-main">
          ${mainHtml}
          <div class="more-wrap">
            <button class="lang" onclick="toggleMoreMenu(event)">☰ ${state.lang === "zh" ? "更多" : "More"}</button>
            <div id="moreMenu" class="more-menu">
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

function home() {
  const outcomes = [
    { icon: "📝", title: L("home.outcome1"), desc: L("home.outcome1Desc") },
    { icon: "📊", title: L("home.outcome2"), desc: L("home.outcome2Desc") },
    { icon: "📖", title: L("home.outcome3"), desc: L("home.outcome3Desc") },
    { icon: "🎒", title: L("home.outcome4"), desc: L("home.outcome4Desc") },
    { icon: "💬", title: L("home.outcome5"), desc: L("home.outcome5Desc") }
  ];

  const beforeItems = [L("home.before1"), L("home.before2"), L("home.before3")];
  const afterItems = [L("home.after1"), L("home.after2"), L("home.after3")];

  const features = [
    { icon: "📚", title: L("home.feature1"), desc: L("home.feature1Desc") },
    { icon: "💡", title: L("home.feature2"), desc: L("home.feature2Desc") },
    { icon: "🎒", title: L("home.feature3"), desc: L("home.feature3Desc") },
    { icon: "🤖", title: L("home.feature4"), desc: L("home.feature4Desc") }
  ];

  return shell(`
    <main class="home-page">
      <section class="home-hero">
        <div class="wrap home-hero-grid">
          <div class="home-hero-content">
            <p class="home-eyebrow">${L("home.eyebrow")}</p>
            <h1>${L("home.title")}</h1>
            <p class="lead">${L("home.lead")}</p>
            <p class="home-price-hint">${L("home.priceHint")}</p>
            <div class="btnrow home-hero-cta">
              <button class="btn primary home-btn-lg" onclick="setRoute('courses')">${L("home.start")}</button>
              <button class="btn secondary home-btn-lg" onclick="setRoute('premium')">${L("home.premium")}</button>
            </div>
          </div>
          <aside class="home-hero-visual">
            <div class="home-preview-card">
              <div class="home-preview-header">
                <span class="logo-badge">AI</span>
                <div>
                  <strong>${L("home.previewTitle")}</strong>
                  <small>${L("home.previewSubtitle")}</small>
                </div>
              </div>
              <ul class="home-preview-list">
                ${outcomes.map(item => `
                  <li>
                    <span class="home-preview-check">✓</span>
                    <span>${item.title}</span>
                  </li>
                `).join("")}
              </ul>
              <div class="home-preview-footer">
                <span class="tag premiumtag">${text("NT$499 起", "From NT$499")}</span>
                <button class="btn primary" onclick="setRoute('premium')">${L("home.premium")}</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="home-section">
        <div class="wrap">
          <div class="home-section-header">
            <h2>${L("home.outcomesTitle")}</h2>
            <p class="lead">${L("home.outcomesLead")}</p>
          </div>
          <div class="home-outcomes-grid">
            ${outcomes.map(item => `
              <article class="home-outcome-card">
                <span class="home-outcome-icon">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="home-section home-section-soft">
        <div class="wrap">
          <div class="home-section-header">
            <h2>${L("home.beforeAfterTitle")}</h2>
          </div>
          <div class="home-before-after">
            <div class="home-ba-col home-ba-before">
              <span class="home-ba-label">${L("home.beforeLabel")}</span>
              <ul>
                ${beforeItems.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div class="home-ba-arrow" aria-hidden="true">→</div>
            <div class="home-ba-col home-ba-after">
              <span class="home-ba-label">${L("home.afterLabel")}</span>
              <ul>
                ${afterItems.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="home-section">
        <div class="wrap">
          <div class="home-section-header">
            <h2>${L("home.featuresTitle")}</h2>
            <p class="lead">${L("home.featuresLead")}</p>
          </div>
          <div class="home-features-grid">
            ${features.map(item => `
              <article class="home-feature-card">
                <span class="home-feature-icon">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="home-cta-banner">
        <div class="wrap home-cta-inner">
          <div>
            <h2>${L("home.ctaTitle")}</h2>
            <p class="lead">${L("home.ctaLead")}</p>
          </div>
          <div class="btnrow">
            <button class="btn primary home-btn-lg" onclick="setRoute('courses')">${L("home.ctaStart")}</button>
            <button class="btn secondary home-btn-lg" onclick="setRoute('premium')">${L("home.ctaPremium")}</button>
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
                        <button class="btn secondary" onclick="state.activeLesson='${lesson.id}';setRoute('courses')">${text("前往課程", "Go to Lesson")}</button>
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








function freeBootcampKey(id) {
  const userPart = state.user && state.user.email ? state.user.email : "guest";
  return `asb-free-bootcamp-${userPart}-${id}`;
}

function getFreeOutput(index) {
  return localStorage.getItem(freeBootcampKey(`output-${index}`)) || "";
}

function saveFreeOutput(index) {
  const el = document.getElementById(`free-output-${index}`);
  if (!el) return;
  localStorage.setItem(freeBootcampKey(`output-${index}`), el.value);
  toast(state.lang === "zh" ? "免費課成果已儲存" : "Free lesson output saved");
}

function isFreeLessonComplete(index) {
  return localStorage.getItem(freeBootcampKey(`complete-${index}`)) === "true";
}

function toggleFreeLessonComplete(index) {
  const next = !isFreeLessonComplete(index);
  localStorage.setItem(freeBootcampKey(`complete-${index}`), next ? "true" : "false");
  toast(next ? (state.lang === "zh" ? "已完成免費課" : "Free lesson completed") : (state.lang === "zh" ? "已取消完成" : "Completion removed"));
  render();
}

function freeBootcampProgress() {
  const total = FREE_BOOTCAMP.length;
  const completed = FREE_BOOTCAMP.filter((_, i) => isFreeLessonComplete(i)).length;
  return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
}

function courses() {
  const progress = freeBootcampProgress();

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
          <h2>${text("完成度", "Progress")}：${progress.completed}/${progress.total}（${progress.percent}%）</h2>
          <div class="package-progress-track">
            <div class="package-progress-bar" style="width:${progress.percent}%"></div>
          </div>
          <div class="btnrow" style="margin-top:18px">
            <button class="btn primary" onclick="setRoute('learning')">${text("免費 Dashboard", "Free Dashboard")}</button>
            <button class="btn secondary" onclick="setRoute('freePortfolio')">${text("我的免費成果包", "My Free Portfolio")}</button>
          </div>
        </section>

        ${progress.percent === 100 ? `
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
              <span class="tag ${isFreeLessonComplete(i) ? "free" : "premiumtag"}">${isFreeLessonComplete(i) ? "✓ " + text("已完成", "Completed") : "Free " + (i + 1)}</span>
              <h3>${lesson.title}</h3>
              <p>${lesson.goal}</p>
              <p><b>${text("本課成果", "Output")}：</b>${lesson.output}</p>
              <p><b>${text("測驗", "Quiz")}：</b>${(lesson.quizItems || []).length} ${text("題情境測驗", "scenario questions")}</p>
              <button class="btn primary" onclick="openFreeLesson(${i})">${text("進入本課", "Open Lesson")}</button>
            </article>
          `).join("")}
        </div>
      </div>
    </main>
  `);
}

function openFreeLesson(index) {
  state.route = "freeLesson";
  state.freeLessonIndex = index;
  window.scrollTo(0, 0);
  render();
}

function freeLesson() {
  const index = Number(state.freeLessonIndex || 0);
  const lesson = FREE_BOOTCAMP[index] || FREE_BOOTCAMP[0];
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
              <button class="btn secondary" onclick="document.getElementById('free-output-${index}') ? null : localStorage.setItem(freeBootcampKey('output-${index}'), document.getElementById('free-portfolio-${index}').value); toast('${state.lang === "zh" ? "成果已儲存" : "Output saved"}'); render();">${text("儲存成果", "Save Output")}</button>
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
  const free = v38SafeFreeProgress();
  const freePortfolio = v38SafeFreePortfolioProgress();
  const freeQuiz = v38SafeFreeQuizProgress();
  const admissionsUnlocked = typeof hasCourseAccess === "function" && hasCourseAccess("admissions");
  const admissions = v38SafeAdmissionsProgress();
  const packageProgress = v38SafePackageProgress();
  const item = typeof PREMIUM !== "undefined" ? PREMIUM.find(p => p.id === "admissions") : null;
  const premiumLessons = item ? (state.lang === "zh" ? item.zhLessons : item.enLessons) : [];
  const nextPremiumIndex = premiumLessons.findIndex((_, i) => !(typeof isLessonComplete === "function" && isLessonComplete("admissions", i)));
  const freeReady = free.percent === 100;

  return shell(`
    <main class="page">
      <div class="wrap">
        <section class="panel">
          <span class="tag free">${text("學習中心", "Learning Center")}</span>
          <h1>${text("我的學習中心", "My Learning Center")}</h1>
          <p class="lead">${text("所有學習進度、免費成果包、付費課程與大學申請包都集中在這裡。", "All progress, free portfolio, premium course, and application package are managed here.")}</p>
        </section>

        <section class="panel">
          <h2>${text("下一步", "Next Step")}</h2>
          ${
            !freeReady
              ? `<p>${text("建議先完成免費 AI 新手訓練營。", "Start by completing the free AI beginner bootcamp.")}</p><button class="btn primary" onclick="setRoute('courses')">${text("繼續免費課程", "Continue Free Lessons")}</button>`
              : !admissionsUnlocked
                ? `<p>${text("你已完成免費訓練營。下一步可以開始建立大學申請包。", "You finished the free bootcamp. Next, start building your university application package.")}</p><button class="btn primary" onclick="setRoute('premium')">${text("查看第一階段付費課程", "View Premium Course")}</button>`
                : nextPremiumIndex >= 0
                  ? `<p>${text("建議繼續第一階段付費課程：", "Continue premium course:")} Lesson ${nextPremiumIndex + 1}</p><button class="btn primary" onclick="currentCourseId='admissions'; setTimeout(()=>openLesson(${nextPremiumIndex}), 50);">${text("繼續上課", "Continue Lesson")}</button>`
                  : `<p>${text("你已完成第一階段課程，請整理大學申請包。", "You completed the premium course. Finalize your application package.")}</p><button class="btn primary" onclick="setRoute('applicationPackage')">${text("打開大學申請包", "Open Application Package")}</button>`
          }
        </section>

        <section class="panel">
          <h2>${text("免費入門", "Free Intro")}</h2>
          <p>${text("課程完成度", "Lesson Progress")}：${free.completed}/${free.total}（${free.percent}%）</p>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${free.percent}%"></div></div>
          <p>${text("測驗成績", "Quiz Score")}：${freeQuiz.correct}/${freeQuiz.total}${freeQuiz.total ? `（${freeQuiz.percent}%）` : ""}</p>
          <div class="btnrow">
            <button class="btn primary" onclick="setRoute('courses')">${text("前往免費入門", "Open Free Intro")}</button>
            <button class="btn secondary" onclick="setRoute('freePortfolio')">${text("我的免費成果包", "My Free Portfolio")}</button>
          </div>
        </section>

        <section class="panel">
          <h2>${text("免費成果包", "Free Portfolio")}</h2>
          <p>${text("成果完成度", "Output Progress")}：${freePortfolio.completed}/${freePortfolio.total}（${freePortfolio.percent}%）</p>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${freePortfolio.percent}%"></div></div>
          <div class="grid two" style="margin-top:18px">
            ${(typeof FREE_BOOTCAMP !== "undefined" ? FREE_BOOTCAMP : []).map((lesson, i) => {
              const done = typeof getFreeOutput === "function" && (getFreeOutput(i) || "").trim().length > 0;
              return `<article class="card">
                <span class="tag ${done ? "free" : "premiumtag"}">${done ? "✓ " + text("已完成", "Completed") : "□ " + text("未完成", "Not completed")}</span>
                <h3>${lesson.output || lesson.title}</h3>
                <p>${lesson.title}</p>
              </article>`;
            }).join("")}
          </div>
        </section>

        <section class="panel">
          <h2>${text("第一階段付費課程", "Premium Stage 1")}</h2>
          <span class="tag ${admissionsUnlocked ? "free" : "premiumtag"}">${admissionsUnlocked ? text("已開通", "Unlocked") : text("尚未開通", "Locked")}</span>
          <p>${text("課程完成度", "Course Progress")}：${admissions.completed}/${admissions.total}（${admissions.percent}%）</p>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${admissions.percent}%"></div></div>
          <div class="btnrow">
            ${admissionsUnlocked
              ? `<button class="btn primary" onclick="openCourse('admissions')">${text("進入已開通課程", "Open Course")}</button>`
              : `<button class="btn primary" onclick="setRoute('premium')">${text("前往開通", "Unlock")}</button>`
            }
          </div>
        </section>

        <section class="panel">
          <h2>${text("大學申請包", "University Application Package")}</h2>
          <p>${text("完成度", "Progress")}：${packageProgress.completed}/${packageProgress.total}（${packageProgress.percent}%）</p>
          <div class="package-progress-track"><div class="package-progress-bar" style="width:${packageProgress.percent}%"></div></div>
          ${
            admissionsUnlocked
              ? `<button class="btn secondary" onclick="setRoute('applicationPackage')">${text("打開大學申請包", "Open Application Package")}</button>`
              : `<p>${text("開通第一階段付費課程後可使用。", "Available after unlocking Stage 1 premium course.")}</p>`
          }
        </section>

        <section class="panel">
          <h2>${text("AI 新手訓練營證書", "AI Beginner Bootcamp Certificate")}</h2>
          ${
            v38FreeCertificateReady()
              ? `<div class="certificate-card"><h2>AI Skill Bridge</h2><h3>${text("AI 新手訓練營結業證書", "AI Beginner Bootcamp Certificate")}</h3><p>${state.user?.email || "AI Skill Bridge Learner"}</p><p>${new Date().toLocaleDateString()}</p></div>`
              : `<p>${text("完成免費課程、成果包與測驗後會在這裡解鎖。", "Complete free lessons, portfolio outputs, and quizzes to unlock it here.")}</p>`
          }
        </section>
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


function isCreator() {
  return Boolean(state.user && state.user.email === CREATOR_EMAIL);
}

function hasCourseAccess(courseId) {
  return isCreator();
}






function openCourse(courseId) {
  currentCourseId = courseId;
  currentLessonIndex = 0;
  state.route = "course";
  window.scrollTo(0, 0);
  render();
}

function openLesson(index) {
  currentLessonIndex = Number(index);
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

  return shell(`
    <main class="page">
      <div class="wrap">
        <button class="btn secondary" onclick="setRoute('premium')">← ${text("回到進階付費", "Back to Premium")}</button>
        <section class="panel">
          <span class="tag free">${text("已開通", "Unlocked")}</span>
          <h1>${state.lang === "zh" ? item.zhTitle : item.enTitle}</h1>
          <p class="lead">${state.lang === "zh" ? item.zhOutcome : item.enOutcome}</p><p><b>${text("課程完成度", "Course Progress")}：</b>${courseProgress(item.id).completed}/${courseProgress(item.id).total}（${courseProgress(item.id).percent}%）</p><button class="btn secondary" onclick="setRoute('applicationPackage')">${text("我的大學申請包", "My Application Package")}</button>
        </section>
        <section class="panel" style="margin-top:24px">
          <h2>${text("課程章節", "Course Lessons")}</h2>
          <div class="grid two">
            ${lessons.map((l, i) => `
              <article class="card">
                <span class="tag">Lesson ${i + 1}</span>
                <h3>${l}</h3>
                <button type="button" class="btn primary" onclick="openLesson(${i})">${text("進入本課", "Open Lesson")}</button>
              </article>
            `).join("")}
          </div>
        </section>
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
  currentLessonIndex = Math.min(Number(currentLessonIndex || 0) + 1, max);
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

    return shell(`
      <main class="page">
        <div class="wrap">
          <button class="btn secondary" onclick="setRoute('course')">← ${text("回到課程首頁", "Back to Course")}</button>

          <section class="panel">
            <span class="tag">Lesson ${lessonNo}</span>
            <h1>${state.lang === "zh" ? detail.zhTitle : detail.enTitle}</h1>
            <p class="lead">${text("這一課不只看內容，而是要完成一個可以放進大學申請包的實際成果。", "This lesson is not just reading content; it helps you create a real output for your application package.")}</p>
          </section>

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
            <span class="tag premiumtag">V40</span>
            <h2>${text("高中生情境案例", "Student Scenario Case")}</h2>
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
            <p>${text("完成這個成果後，請放入你的「大學申請包」。10 課完成後，你會得到一份完整申請資料。", "After completing this output, add it to your application package. After 10 lessons, you will have a complete application package.")}</p><button class="btn secondary" onclick="setRoute('applicationPackage')">${text("打開我的大學申請包", "Open My Application Package")}</button>
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
    .replaceAll(">", "&gt;");
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
  save();
}

async function startApp() {
  await initAuth();
  render();
}

addEventListener("DOMContentLoaded", startApp);
