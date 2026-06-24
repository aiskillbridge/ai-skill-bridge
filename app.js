
const SUPABASE_URL = "https://ifjkadoskbcgrqmcjvya.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yXHovKCCYE04aUcybOc4KA_Fhdp5bTE";

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
    toast(text("請先輸入問題", "Please type a question first"));
    return;
  }

  const responses = [
    {
      keys: ["prompt", "提示", "指令", "怎麼問", "提問"],
      zh: `
        <h3>Prompt 入門解法</h3>
        <p>Prompt 就是你給 AI 的指令。新手可以用這個公式：</p>
        <div class="promptbox">角色 + 任務 + 背景 + 輸出格式 + 限制</div>
        <p><b>範例：</b></p>
        <div class="promptbox">請你當作我的大學助教，幫我整理這份筆記。請用表格呈現，包含重點、例子、可能考題。不要直接幫我寫作業答案。</div>
        <p><b>下一步：</b>請你把自己的問題改寫成上面這個格式。</p>
      `,
      en: `
        <h3>Prompt Basics</h3>
        <p>A prompt is the instruction you give to AI. Beginners can use this formula:</p>
        <div class="promptbox">Role + Task + Context + Output Format + Constraints</div>
        <p><b>Example:</b></p>
        <div class="promptbox">Act as my university teaching assistant. Help me organize these notes in a table with key points, examples, and possible exam questions. Do not write the assignment for me.</div>
        <p><b>Next step:</b> Rewrite your own question using this structure.</p>
      `
    },
    {
      keys: ["報告", "report", "essay", "論文", "作業"],
      zh: `
        <h3>AI 報告使用方式</h3>
        <p>不要叫 AI 直接寫完整報告。比較好的方式是讓 AI 幫你做前期規劃。</p>
        <div class="promptbox">請幫我規劃一份報告大綱，主題是：[你的主題]。請提供：研究問題、三個論點、需要查證的資料、反方觀點、簡報架構。不要直接替我完成全文。</div>
        <p><b>學習提醒：</b>AI 可以幫你整理思路，但你的觀點、資料查證和最後判斷仍然要自己完成。</p>
      `,
      en: `
        <h3>Using AI for Reports</h3>
        <p>Do not ask AI to write the full report. Use it for early-stage planning instead.</p>
        <div class="promptbox">Help me plan a report outline on: [your topic]. Provide research question, three arguments, sources to verify, counterarguments, and slide structure. Do not write the full essay.</div>
        <p><b>Reminder:</b> AI can organize your thinking, but you still need to verify sources and make final judgments.</p>
      `
    },
    {
      keys: ["簡報", "ppt", "slides", "presentation", "gamma", "canva"],
      zh: `
        <h3>AI 簡報流程</h3>
        <p>簡報不是先做漂亮，而是先把邏輯做清楚。</p>
        <ol>
          <li>先請 AI 釐清簡報目的與聽眾。</li>
          <li>請 AI 產生 6～10 頁簡報架構。</li>
          <li>每頁只放一個核心訊息。</li>
          <li>再用 Canva 或 Gamma 做視覺。</li>
        </ol>
        <div class="promptbox">請把主題「[主題]」規劃成 8 頁簡報。每頁包含：標題、一句核心訊息、三個重點、建議圖片或圖表。</div>
      `,
      en: `
        <h3>AI Slide Workflow</h3>
        <p>Slides should be clear before they are beautiful.</p>
        <ol>
          <li>Ask AI to clarify purpose and audience.</li>
          <li>Ask AI to create a 6–10 slide structure.</li>
          <li>Use one key message per slide.</li>
          <li>Then use Canva or Gamma for visuals.</li>
        </ol>
        <div class="promptbox">Turn the topic "[topic]" into an 8-slide deck. Each slide should include a title, one key message, three bullet points, and suggested visuals.</div>
      `
    },
    {
      keys: ["履歷", "resume", "cv", "面試", "interview", "求職", "工作", "實習"],
      zh: `
        <h3>AI 求職使用方式</h3>
        <p>AI 可以幫你把經驗寫得更清楚，但不能捏造經歷。</p>
        <div class="promptbox">請你當作科技業 HR，幫我修改以下履歷段落。請強調行動、成果、能力與證據，但不要捏造經驗或誇大數字。</div>
        <p><b>面試練習 Prompt：</b></p>
        <div class="promptbox">請你當作面試官，針對 [職位/計畫] 一次問我一題。每次我回答後，請給我結構、說服力與清楚度的回饋。</div>
      `,
      en: `
        <h3>Using AI for Career Preparation</h3>
        <p>AI can make your experience clearer, but it should not invent experience.</p>
        <div class="promptbox">Act as a tech HR specialist and improve the following resume section. Emphasize action, results, skills, and evidence, but do not invent experience or exaggerate numbers.</div>
        <p><b>Interview practice prompt:</b></p>
        <div class="promptbox">Act as an interviewer for [role/program]. Ask me one question at a time. After each answer, give feedback on structure, persuasiveness, and clarity.</div>
      `
    },
    {
      keys: ["研究", "文獻", "paper", "literature", "notebooklm", "perplexity", "資料"],
      zh: `
        <h3>AI 研究與文獻整理</h3>
        <p>研究任務建議不要只用一個工具。</p>
        <ul>
          <li><b>Perplexity：</b>找資料與來源。</li>
          <li><b>NotebookLM：</b>針對你上傳的 PDF 問答。</li>
          <li><b>Claude：</b>整理長文件與大綱。</li>
          <li><b>ChatGPT：</b>規劃研究問題與簡報。</li>
        </ul>
        <div class="promptbox">請比較以下文獻，整理成表格。欄位包含：主題、研究方法、核心發現、限制、與我的研究問題的關聯。</div>
      `,
      en: `
        <h3>AI for Research and Literature Review</h3>
        <p>For research, do not rely on only one tool.</p>
        <ul>
          <li><b>Perplexity:</b> finding sources.</li>
          <li><b>NotebookLM:</b> asking questions about uploaded PDFs.</li>
          <li><b>Claude:</b> organizing long documents.</li>
          <li><b>ChatGPT:</b> planning questions and presentations.</li>
        </ul>
        <div class="promptbox">Compare the following papers in a table with columns: topic, method, key findings, limitations, and relevance to my research question.</div>
      `
    },
    {
      keys: ["英文", "翻譯", "translation", "email", "信", "郵件"],
      zh: `
        <h3>AI 英文與信件協助</h3>
        <p>AI 很適合幫你把中文想法轉成禮貌、清楚的英文信。</p>
        <div class="promptbox">請幫我把以下中文內容改寫成正式但禮貌的英文信。收件人是：[對象]。目的：[目的]。語氣要誠懇、清楚、不要太強硬。</div>
        <p><b>提醒：</b>寄出前要自己確認姓名、日期、附件與事實正確。</p>
      `,
      en: `
        <h3>AI for English and Emails</h3>
        <p>AI is useful for turning your ideas into polite and clear English emails.</p>
        <div class="promptbox">Rewrite the following Chinese content into a formal but polite English email. Recipient: [recipient]. Purpose: [purpose]. Tone: sincere, clear, and not too forceful.</div>
        <p><b>Reminder:</b> Before sending, verify names, dates, attachments, and facts.</p>
      `
    },
    {
      keys: ["工具", "tool", "哪個", "chatgpt", "claude", "gemini", "canva", "gamma"],
      zh: `
        <h3>AI 工具選擇建議</h3>
        <ul>
          <li><b>ChatGPT：</b>通用學習、寫作、企劃。</li>
          <li><b>Claude：</b>長文件、報告、邏輯整理。</li>
          <li><b>Gemini：</b>Google 生態系與日常協作。</li>
          <li><b>Perplexity：</b>搜尋資料與來源。</li>
          <li><b>NotebookLM：</b>PDF 與資料問答。</li>
          <li><b>Canva / Gamma：</b>簡報與視覺設計。</li>
        </ul>
        <p><b>判斷方式：</b>先問自己「我要完成什麼任務？」再選工具，不要每件事都只用同一個 AI。</p>
      `,
      en: `
        <h3>AI Tool Recommendation</h3>
        <ul>
          <li><b>ChatGPT:</b> general learning, writing, planning.</li>
          <li><b>Claude:</b> long documents, reports, logic.</li>
          <li><b>Gemini:</b> Google ecosystem and daily collaboration.</li>
          <li><b>Perplexity:</b> web research and sources.</li>
          <li><b>NotebookLM:</b> PDF and source-based Q&A.</li>
          <li><b>Canva / Gamma:</b> slides and visual design.</li>
        </ul>
        <p><b>Decision rule:</b> Ask "what task do I need to complete?" before choosing a tool.</p>
      `
    },
    {
      keys: ["自動化", "automation", "agent", "zapier", "make", "n8n", "流程"],
      zh: `
        <h3>AI 自動化入門</h3>
        <p>自動化不是一開始就做很複雜的系統，而是把重複任務拆成固定流程。</p>
        <ol>
          <li>找出重複任務。</li>
          <li>定義輸入資料。</li>
          <li>定義 AI 要產出的內容。</li>
          <li>決定輸出到哪裡，例如 Email、Notion、Google Sheet。</li>
        </ol>
        <div class="promptbox">請幫我把以下重複任務拆成自動化流程：輸入、處理步驟、AI 可以協助的地方、輸出結果、需要人工檢查的地方。</div>
      `,
      en: `
        <h3>AI Automation Basics</h3>
        <p>Automation does not have to start as a complex system. Start by breaking repeated tasks into fixed workflows.</p>
        <ol>
          <li>Identify repeated tasks.</li>
          <li>Define input data.</li>
          <li>Define what AI should produce.</li>
          <li>Decide where the output goes, such as email, Notion, or Google Sheets.</li>
        </ol>
        <div class="promptbox">Help me break the following repeated task into an automation workflow: input, processing steps, AI support, output, and human review points.</div>
      `
    },
    {
      keys: ["創業", "startup", "商業", "business", "社會創新", "social innovation", "提案"],
      zh: `
        <h3>AI 創業與社會創新提案</h3>
        <p>AI 可以幫你把想法整理成提案，但你需要自己確認問題是否真實存在。</p>
        <div class="promptbox">請幫我把以下想法整理成社會創新提案。請包含：問題定義、目標使用者、痛點、解決方案、商業模式、影響力指標、風險與下一步驗證方法。</div>
        <p><b>提醒：</b>好的提案不是只有想法，而是要能證明真的有人需要。</p>
      `,
      en: `
        <h3>AI for Startup and Social Innovation Proposals</h3>
        <p>AI can help structure ideas into proposals, but you still need to verify whether the problem is real.</p>
        <div class="promptbox">Help me turn the following idea into a social innovation proposal. Include problem definition, target users, pain points, solution, business model, impact metrics, risks, and next validation steps.</div>
        <p><b>Reminder:</b> A good proposal is not only an idea. It must show that people actually need it.</p>
      `
    }
  ];

  const matched = responses.find(item => item.keys.some(key => value.includes(key)));

  const fallbackZh = `
    <h3>AI Tutor 建議</h3>
    <p>我會建議你先把問題整理成這 5 個部分：</p>
    <ol>
      <li><b>目標：</b>你想完成什麼？</li>
      <li><b>背景：</b>現在的情況是什麼？</li>
      <li><b>困難：</b>你卡在哪裡？</li>
      <li><b>格式：</b>你希望答案用表格、清單還是步驟？</li>
      <li><b>限制：</b>有哪些不能做或要注意的地方？</li>
    </ol>
    <div class="promptbox">請你當作我的 AI 學習導師。我目前想完成：[目標]，背景是：[背景]，我卡在：[困難]。請用步驟方式教我，並給我一個可以直接使用的 Prompt。</div>
  `;

  const fallbackEn = `
    <h3>AI Tutor Suggestion</h3>
    <p>I suggest organizing your question into five parts:</p>
    <ol>
      <li><b>Goal:</b> What do you want to complete?</li>
      <li><b>Context:</b> What is the situation?</li>
      <li><b>Difficulty:</b> Where are you stuck?</li>
      <li><b>Format:</b> Table, list, or steps?</li>
      <li><b>Constraints:</b> What should be avoided or considered?</li>
    </ol>
    <div class="promptbox">Act as my AI learning tutor. I want to complete: [goal]. Context: [context]. I am stuck at: [difficulty]. Teach me step by step and give me a prompt I can use directly.</div>
  `;

  const html = matched ? text(matched.zh, matched.en) : text(fallbackZh, fallbackEn);

  output.innerHTML = `
    <div class="answer show">
      ${html}
      <hr>
      <p><b>${text("你問的問題：", "Your question:")}</b>${raw}</p>
      <p class="small">${text("提醒：這是站內 AI Tutor 原型，適合學習引導與 Prompt 建議；重要資訊仍需查證。", "Reminder: This is a site-based AI Tutor prototype for learning guidance and prompt suggestions. Important information still needs verification.")}</p>
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
    ["free", "nav.free"],
    ["premium", "nav.premium"],
    ["tools", "nav.tools"],
    ["prompts", "nav.prompts"],
    ["community", "nav.community"],
    ["thailand", "nav.thailand"],
    ["impact", "nav.impact"]
  ];

  const authHtml = state.user
    ? `<button class="lang" title="${state.user.email}">${state.user.email.split("@")[0]}</button>
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
  return shell(`
    <main class="page">
      <div class="wrap">
        <h1>${L("premium.title")}</h1>
        <p class="lead">${L("premium.lead")}</p>
        <div class="grid three">
          ${PREMIUM.map(course => `
            <article class="pricing">
              <span class="tag premiumtag">Premium</span>
              <h2>${state.lang === "zh" ? course.zhTitle : course.enTitle}</h2>
              <p>${state.lang === "zh" ? course.zhDesc : course.enDesc}</p>
              <p><b>${L("premium.suitableFor")}：</b>${state.lang === "zh" ? course.zhUser : course.enUser}</p>
              <p><b>${L("premium.outcome")}：</b>${state.lang === "zh" ? course.zhOutcome : course.enOutcome}</p>
              <p class="price">${course.price}</p>
              <a class="btn primary" href="${course.paymentUrl}" target="_blank">${L("premium.goPay")}</a>
            </article>
          `).join("")}
        </div>
        <section class="panel" style="margin-top:24px">
          <h2>${L("premium.noteTitle")}</h2>
          <p>${L("premium.note")}</p>
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
          <h2>AI Tutor</h2>
          <p>${text("這是本地 AI 導師原型，可以回答 Prompt、報告、履歷、工具選擇等基礎問題。", "This is a local AI Tutor prototype for basic questions about prompts, reports, resumes, and tool choices.")}</p>
          <textarea id="tutor-input" placeholder="${text("輸入你的問題...", "Type your question...")}"></textarea>
          <button class="btn primary" onclick="tutorReply()">${text("詢問 AI Tutor", "Ask AI Tutor")}</button>
          <div id="tutor-output"></div>
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
