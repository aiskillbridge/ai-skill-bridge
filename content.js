
const I18N = {
  zh: {
    nav: {
      home: "首頁",
      courses: "課程地圖",
      free: "免費入門",
      premium: "進階付費",
      tools: "工具導航",
      prompts: "Prompt 範例",
      community: "討論區",
      thailand: "泰國成果",
      impact: "影響力"
    },
    home: {
      eyebrow: "AI 小白也能上手",
      title: "讓不懂 AI 的人，也能一步一步學會使用 AI。",
      lead: "AI Skill Bridge 是一個循序漸進的雙語互動學習平台。免費課程幫助初學者從零開始，進階付費課程依照使用者能力分級，工具導航則讓你一鍵前往最適合的 AI 產品。",
      start: "從免費課程開始",
      tools: "打開 AI 工具導航",
      premium: "查看進階課程",
      progress: "你的學習進度",
      missionTitle: "從看得懂、做得到，到真的用得上。",
      missionText: "這個網站的初衷不是讓已經懂 AI 的人更厲害，而是讓完全不懂 AI 的人也能透過簡單教學、互動練習與工具導航開始使用 AI。",
      freeTitle: "免費入門",
      freeText: "讓 AI 小白從零開始，先學會什麼是 AI、什麼是 Prompt，以及如何用 AI 完成讀書、報告、簡報、履歷與日常任務。",
      premiumTitle: "進階付費",
      premiumText: "提供研究、求職、工作效率、社會創新、創業提案與 AI 自動化等分級進階課程。",
      communityTitle: "學習社群",
      communityText: "讓使用者可以提問、分享 Prompt、討論工具、展示成果，形成互助學習社群。",
      freeLessons: "免費課程",
      aiTools: "AI 工具",
      premiumTracks: "付費路徑",
      languages: "語言"
    },
    courses: {
      title: "課程地圖",
      lead: "課程依照能力分級，從完全不懂 AI 的 Level 0，到學生應用、求職應用、研究應用、創業應用與自動化應用。",
      freePath: "免費入門路徑",
      freePathDesc: "適合完全沒有 AI 基礎的人。從 AI 是什麼、Prompt 是什麼，到如何用 AI 做報告、簡報、筆記與履歷。",
      premiumPath: "進階付費路徑",
      premiumPathDesc: "適合已完成免費課程，想把 AI 用在研究、求職、工作效率、社會創新或創業提案的人。",
      enter: "進入",
      view: "查看",
      levelTitle: "能力分級",
      level0: "完全沒用過 AI",
      level0Goal: "知道 AI 是什麼，會問出第一個有用的問題。",
      level1: "學生與初學者",
      level1Goal: "能用 AI 協助報告、簡報、筆記與考試準備。",
      level2: "求職與工作使用者",
      level2Goal: "能用 AI 修改履歷、準備面試、整理 Email 與會議紀錄。",
      advanced: "進階使用者",
      advancedGoal: "能用 AI 做研究、接案、自動化、創業與社會創新提案。"
    },
    free: {
      title: "免費入門課程",
      lead: "適合完全沒用過 AI、看不懂 Prompt、不知道怎麼開始的人。每一課都包含解釋、互動測驗或練習。",
      complete: "完成本課",
      reveal: "看參考答案",
      practice: "互動練習",
      answerPlaceholder: "請在這裡輸入你的答案或 Prompt...",
      completed: "已完成",
      quiz: "互動測驗"
    },
    premium: {
      title: "進階付費課程",
      lead: "進階課程依照使用者能力與需求分級，從學生、求職者、研究者、工作者到創業與社會創新使用者。這些課程未來可以接 Gumroad、綠界、藍新、Line Pay 或 Stripe 收費。",
      goPay: "前往付款",
      suitableFor: "適合對象",
      outcome: "完成後你會得到",
      noteTitle: "付款連結提醒",
      note: "目前所有付款按鈕先連到 Gumroad 範例網址。正式上線前，只要把 content.js 裡的 paymentUrl 換成自己的收款連結即可。"
    },
    tools: {
      title: "AI 工具導航",
      lead: "這不是單純的工具清單，而是幫初學者判斷：我要做什麼時，應該打開哪一個 AI 工具。",
      open: "開啟網站",
      taskTitle: "依任務推薦工具",
      taskReport: "我要寫報告",
      taskSlides: "我要做簡報",
      taskResearch: "我要做研究",
      taskCareer: "我要找工作",
      taskVisual: "我要做圖像或設計"
    },
    prompts: {
      title: "Prompt 範例庫",
      lead: "這些 Prompt 可以直接複製使用，也可以拿去免費課程做練習。",
      copy: "複製 Prompt",
      copied: "已複製"
    },
    community: {
      title: "討論區與 PPT 式看板",
      lead: "這裡是社群討論區原型。正式上線後，可以串接 Discord、LINE OpenChat、Discourse 或 Circle。",
      boardTitle: "本週討論看板",
      boardQuestion: "我想用 AI 做報告，但不想讓它代替我思考，Prompt 應該怎麼寫？",
      note: "角色 + 任務 + 背景 + 限制 + 查證要求",
      reply: "回覆",
      demo: "展示版功能，正式上線後可串接真正討論區。"
    },
    thailand: {
      title: "泰國 Yunus Center AIT 學習成果區",
      lead: "此區用來記錄青年百億海外圓夢基金計畫 I-3-8「尤點子社企特攻」的學習歷程，並將海外學習轉化為 AI Skill Bridge 的後續行動。",
      journal: "學習紀錄模板",
      daily: "每日反思",
      dailyText: "今天學到什麼？它如何連結 AI、教育與社會創新？",
      field: "場域觀察",
      fieldText: "觀察到什麼組織模式？有哪些做法可以帶回台灣？",
      project: "專案修正",
      projectText: "今天的學習如何讓 AI Skill Bridge 變得更好？",
      action: "行動筆記",
      actionText: "哪些內容可以轉化成網站教材、社群討論或課程？"
    },
    impact: {
      title: "免費入門、付費進階、社群互助、長期影響",
      lead: "AI Skill Bridge 的公益核心是降低 AI 入門門檻；商業模式是用進階付費課程支持平台長期維運。",
      access: "降低門檻",
      accessText: "免費入門課程讓不懂 AI 的人也能開始學。",
      sustainability: "永續營運",
      sustainabilityText: "付費進階課程支持內容製作、平台維護與社群營運。",
      community: "互助學習",
      communityText: "透過討論區讓學習者互相提問、分享與進步。"
    },
    misc: {
      correct: "答對了！",
      wrong: "再想一下。",
      saved: "已儲存",
      copied: "已複製",
      complete: "完成",
      incomplete: "未完成"
    }
  },
  en: {
    nav: {
      home: "Home",
      courses: "Roadmap",
      free: "Free Course",
      premium: "Premium",
      tools: "AI Tools",
      prompts: "Prompts",
      community: "Community",
      thailand: "Thailand",
      impact: "Impact"
    },
    home: {
      eyebrow: "AI for Complete Beginners",
      title: "Helping people who do not understand AI learn it step by step.",
      lead: "AI Skill Bridge is a bilingual interactive learning platform. Free courses help beginners start from zero, premium courses are divided by skill levels, and the AI tool navigator lets users jump directly to the right AI product.",
      start: "Start Free Course",
      tools: "Open AI Tool Navigator",
      premium: "View Premium Courses",
      progress: "Your Learning Progress",
      missionTitle: "From understanding to practice to real-world use.",
      missionText: "This website is not designed only for people who already understand AI. It is built to help complete beginners start using AI through simple explanations, interactive practice, and tool navigation.",
      freeTitle: "Free Beginner Track",
      freeText: "Help AI beginners start from zero by learning what AI is, what prompts are, and how to use AI for study, reports, slides, resumes, and daily tasks.",
      premiumTitle: "Premium Advanced Track",
      premiumText: "Provide advanced courses for research, career development, productivity, social innovation, startup proposals, and AI automation.",
      communityTitle: "Learning Community",
      communityText: "Let users ask questions, share prompts, discuss tools, and showcase results through peer learning.",
      freeLessons: "Free Lessons",
      aiTools: "AI Tools",
      premiumTracks: "Premium Tracks",
      languages: "Languages"
    },
    courses: {
      title: "Course Roadmap",
      lead: "Courses are divided by ability level, from Level 0 for people who do not understand AI to student, career, research, startup, and automation applications.",
      freePath: "Free Beginner Path",
      freePathDesc: "For people with no AI background. Learn what AI is, what prompts are, and how to use AI for reports, slides, notes, and resumes.",
      premiumPath: "Premium Advanced Path",
      premiumPathDesc: "For learners who finished the free course and want to use AI for research, career development, productivity, social innovation, or startup proposals.",
      enter: "Enter",
      view: "View",
      levelTitle: "Skill Levels",
      level0: "Absolute beginners",
      level0Goal: "Understand what AI is and ask the first useful question.",
      level1: "Students and beginners",
      level1Goal: "Use AI for reports, slides, notes, and exam preparation.",
      level2: "Career and workplace users",
      level2Goal: "Use AI for resumes, interviews, emails, and meeting notes.",
      advanced: "Advanced users",
      advancedGoal: "Use AI for research, freelancing, automation, startups, and social innovation proposals."
    },
    free: {
      title: "Free Beginner Course",
      lead: "For people who have never used AI, do not understand prompts, and do not know where to start. Each lesson includes explanation, interactive quiz, or practice.",
      complete: "Complete Lesson",
      reveal: "Reveal Model Answer",
      practice: "Interactive Practice",
      answerPlaceholder: "Type your answer or prompt here...",
      completed: "Completed",
      quiz: "Interactive Quiz"
    },
    premium: {
      title: "Premium Advanced Courses",
      lead: "Premium courses are divided by user ability and needs, from students, job seekers, researchers, workers, to startup and social innovation users. These courses can later connect to Gumroad, ECPay, NewebPay, Line Pay, or Stripe for payment.",
      goPay: "Go to Payment",
      suitableFor: "Suitable For",
      outcome: "Outcome",
      noteTitle: "Payment Link Reminder",
      note: "All payment buttons currently point to a Gumroad sample link. Before launching, replace paymentUrl in content.js with your own checkout links."
    },
    tools: {
      title: "AI Tool Navigator",
      lead: "This is not just a tool list. It helps beginners decide which AI tool to open based on what they want to do.",
      open: "Open Website",
      taskTitle: "Recommended Tools by Task",
      taskReport: "I need to write a report",
      taskSlides: "I need to make slides",
      taskResearch: "I need to do research",
      taskCareer: "I need to find a job",
      taskVisual: "I need visuals or design"
    },
    prompts: {
      title: "Prompt Library",
      lead: "These prompts can be copied directly or used for practice in the free course.",
      copy: "Copy Prompt",
      copied: "Copied"
    },
    community: {
      title: "Discussion Space and PPT-style Board",
      lead: "This is a community discussion prototype. For launch, it can connect to Discord, LINE OpenChat, Discourse, or Circle.",
      boardTitle: "Weekly Discussion Board",
      boardQuestion: "How can I use AI for a report without letting it replace my own thinking?",
      note: "Role + Task + Context + Constraints + Verification",
      reply: "Reply",
      demo: "Demo function. A real discussion system can be connected later."
    },
    thailand: {
      title: "Thailand Yunus Center AIT Learning Documentation",
      lead: "This section documents the Ministry of Education Youth Overseas Dream Fund Program Project I-3-8 and connects overseas learning to AI Skill Bridge's future action.",
      journal: "Learning Journal Template",
      daily: "Daily Reflection",
      dailyText: "What did I learn today? How does it connect to AI, education, and social innovation?",
      field: "Field Observation",
      fieldText: "What organizational model did I observe? What can be adapted to Taiwan?",
      project: "Project Revision",
      projectText: "How can today's learning improve AI Skill Bridge?",
      action: "Action Note",
      actionText: "What can become website content, community discussion, or course material?"
    },
    impact: {
      title: "Free Entry, Premium Growth, Peer Community, Long-Term Impact",
      lead: "AI Skill Bridge lowers the entry barrier to AI learning while using premium courses to support long-term platform sustainability.",
      access: "Access",
      accessText: "Free beginner courses help people who do not understand AI start learning.",
      sustainability: "Sustainability",
      sustainabilityText: "Premium courses support content production, platform maintenance, and community operation.",
      community: "Peer Learning",
      communityText: "The discussion space helps learners ask, share, and improve together."
    },
    misc: {
      correct: "Correct!",
      wrong: "Try again.",
      saved: "Saved",
      copied: "Copied",
      complete: "Complete",
      incomplete: "Incomplete"
    }
  }
};

const LESSONS = [
  {
    id: "ai",
    level: "Level 0",
    zhTitle: "AI 是什麼？先不要想太難",
    enTitle: "What is AI? Start simple.",
    zhText: "AI 可以幫你解釋、整理、規劃、練習與產出初稿，但最後判斷仍然要靠你。你不需要先懂程式，也不需要知道模型原理，先學會怎麼問問題就夠了。",
    enText: "AI can help explain, organize, plan, practice, and draft, but final judgment still belongs to you. You do not need coding or model theory to start. First, learn how to ask useful questions.",
    quiz: {
      zhQ: "ChatGPT 最接近下列哪一種工具？",
      enQ: "Which description best fits ChatGPT?",
      options: [
        { zh: "只能查資料的搜尋引擎", en: "A search engine that only finds information", correct: false },
        { zh: "能依照指令對話、整理與產生內容的 AI 工具", en: "An AI tool that can chat, organize, and generate content based on instructions", correct: true },
        { zh: "只能用來玩遊戲的平台", en: "A platform only for games", correct: false }
      ],
      zhExplain: "ChatGPT 不是單純搜尋引擎，它能依照你的指令產生與整理內容。",
      enExplain: "ChatGPT is not only a search engine. It can generate and organize content based on your instructions."
    }
  },
  {
    id: "ai-can-do",
    level: "Level 0",
    zhTitle: "AI 可以幫你做什麼？",
    enTitle: "What can AI help you do?",
    zhText: "AI 可以協助你整理資料、產生初稿、規劃行程、練習語言、模擬面試、整理簡報與產生想法。它最適合當成輔助工具，而不是替你做所有判斷的人。",
    enText: "AI can help organize information, draft content, plan schedules, practice languages, simulate interviews, structure slides, and generate ideas. It is best used as an assistant, not as a replacement for your judgment.",
    zhTask: "列出三件你希望 AI 幫你完成的日常任務。",
    enTask: "List three daily tasks you want AI to help you complete.",
    zhAnswer: "例：幫我整理上課筆記、幫我規劃讀書計畫、幫我修改英文 Email。",
    enAnswer: "Examples: summarize class notes, plan a study schedule, improve an English email."
  },
  {
    id: "chatgpt-intro",
    level: "Level 0",
    zhTitle: "ChatGPT 是什麼？",
    enTitle: "What is ChatGPT?",
    zhText: "ChatGPT 是一個可以對話、整理、產生文字與協助思考的 AI 工具。你可以把它當作讀書助教、寫作教練、簡報顧問或腦力激盪夥伴。",
    enText: "ChatGPT is an AI tool for conversation, organization, writing, and thinking support. You can use it as a study assistant, writing coach, slide consultant, or brainstorming partner.",
    quiz: {
      zhQ: "使用 ChatGPT 最重要的是什麼？",
      enQ: "What is most important when using ChatGPT?",
      options: [
        { zh: "只打一個很短的問題", en: "Only type a very short question", correct: false },
        { zh: "提供清楚背景、目標和格式", en: "Provide clear context, goals, and format", correct: true },
        { zh: "完全不檢查答案", en: "Never check the answer", correct: false }
      ],
      zhExplain: "背景越清楚，AI 的回答越接近你真正需要的內容。",
      enExplain: "Clearer context helps AI give answers closer to what you actually need."
    }
  },
  {
    id: "claude-intro",
    level: "Level 0",
    zhTitle: "Claude 是什麼？",
    enTitle: "What is Claude?",
    zhText: "Claude 適合處理長文件、寫作潤飾、摘要與邏輯整理。當你需要閱讀長篇文章、報告或資料時，它可以幫助你快速整理結構。",
    enText: "Claude is useful for long documents, writing refinement, summarization, and logical organization. When reading long articles, reports, or materials, it can help you structure the content quickly.",
    zhTask: "請設計一個 Prompt，讓 Claude 幫你整理一篇長文章。",
    enTask: "Design a prompt asking Claude to summarize a long article.",
    zhAnswer: "請幫我整理以下文章，分成：核心主旨、三個重點、重要概念、我需要查證的地方，以及 5 句摘要。",
    enAnswer: "Please organize the following article into: main idea, three key points, important concepts, things I should verify, and a five-sentence summary."
  },
  {
    id: "gemini-intro",
    level: "Level 0",
    zhTitle: "Gemini 是什麼？",
    enTitle: "What is Gemini?",
    zhText: "Gemini 是 Google 的 AI 工具，適合和 Google 生態系一起使用，例如搜尋、文件、圖片理解與日常協作。",
    enText: "Gemini is Google's AI tool. It works well with the Google ecosystem, including search, documents, image understanding, and daily collaboration.",
    quiz: {
      zhQ: "Gemini 最適合搭配哪一類工具使用？",
      enQ: "Which ecosystem does Gemini work especially well with?",
      options: [
        { zh: "Google 生態系", en: "Google ecosystem", correct: true },
        { zh: "只能搭配遊戲平台", en: "Only gaming platforms", correct: false },
        { zh: "只能離線使用", en: "Offline-only tools", correct: false }
      ],
      zhExplain: "Gemini 與 Google 服務整合度高，適合日常學習與工作協作。",
      enExplain: "Gemini integrates well with Google services for everyday learning and work."
    }
  },
  {
    id: "prompt",
    level: "Level 0",
    zhTitle: "Prompt 是什麼？你問得越清楚，AI 越好用",
    enTitle: "What is a prompt? Clearer questions get better answers.",
    zhText: "Prompt 就是你給 AI 的指令。好的 Prompt 會包含角色、任務、背景、格式與限制，這樣 AI 才知道你真正想要什麼。",
    enText: "A prompt is the instruction you give to AI. A good prompt includes role, task, context, format, and constraints so AI understands what you actually need.",
    zhTask: "把「幫我讀書」改寫成一個更清楚的 Prompt。",
    enTask: "Rewrite 'Help me study' into a clearer prompt.",
    zhAnswer: "請你當作我的大學課程助教，幫我整理今天的總體經濟學重點。我的考試範圍是通膨、失業與菲利普曲線。請用條列式整理，並最後出 5 題練習題。",
    enAnswer: "Act as my university teaching assistant. Help me review macroeconomics. My exam covers inflation, unemployment, and the Phillips Curve. Use bullet points and create 5 practice questions at the end."
  },
  {
    id: "good-bad-prompt",
    level: "Level 0",
    zhTitle: "好 Prompt 與壞 Prompt 的差別",
    enTitle: "Good prompts vs. bad prompts.",
    zhText: "壞 Prompt 通常太短、沒有背景、沒有格式要求。好 Prompt 會說明角色、任務、背景、限制與輸出格式。",
    enText: "Bad prompts are usually too short and lack context or output format. Good prompts include role, task, context, constraints, and expected format.",
    quiz: {
      zhQ: "哪一個比較像好 Prompt？",
      enQ: "Which one is closer to a good prompt?",
      options: [
        { zh: "幫我寫", en: "Write it for me", correct: false },
        { zh: "請你當作老師，用表格整理這個主題，並附上三個例子", en: "Act as a teacher, organize this topic in a table, and include three examples", correct: true },
        { zh: "快一點", en: "Be quick", correct: false }
      ],
      zhExplain: "好 Prompt 會讓 AI 明確知道要扮演誰、做什麼、怎麼輸出。",
      enExplain: "A good prompt tells AI who to act as, what to do, and how to format the output."
    }
  },
  {
    id: "role",
    level: "Level 0",
    zhTitle: "給 AI 一個角色，答案會更精準",
    enTitle: "Give AI a role to get better answers.",
    zhText: "角色設定可以讓 AI 用更適合的語氣與專業角度回答。你可以請 AI 當老師、面試官、編輯、研究助理、簡報顧問或職涯教練。",
    enText: "Role setting helps AI answer with a suitable tone and professional perspective. You can ask AI to act as a teacher, interviewer, editor, research assistant, slide consultant, or career coach.",
    quiz: {
      zhQ: "哪一個 Prompt 比較好？",
      enQ: "Which prompt is better?",
      options: [
        { zh: "幫我改履歷", en: "Improve my resume", correct: false },
        { zh: "請你當作科技業 HR，幫我把履歷改得更適合實習申請", en: "Act as a tech HR specialist and improve my resume for an internship application", correct: true },
        { zh: "你知道履歷嗎", en: "Do you know resumes?", correct: false }
      ],
      zhExplain: "好的 Prompt 會加入角色與目的，讓 AI 知道要從哪個角度幫你。",
      enExplain: "A good prompt includes role and purpose so AI knows how to help."
    }
  },
  {
    id: "format",
    level: "Level 0",
    zhTitle: "指定輸出格式：表格、清單、步驟、範例",
    enTitle: "Specify output format: table, list, steps, examples.",
    zhText: "如果你沒有指定格式，AI 可能會給你一大段文字。你可以要求它用表格、條列、三步驟、比較表、範例或檢查清單回答。",
    enText: "If you do not specify a format, AI may give you a long paragraph. You can ask for a table, bullet points, steps, comparison chart, examples, or checklist.",
    zhTask: "把「解釋通膨」改寫成要求 AI 用表格回答的 Prompt。",
    enTask: "Rewrite 'Explain inflation' into a prompt that asks AI to answer in a table.",
    zhAnswer: "請用表格解釋通膨，欄位包含：概念、簡單說明、生活例子、可能影響、我需要注意的重點。",
    enAnswer: "Explain inflation in a table with these columns: concept, simple explanation, everyday example, possible impact, and key point to remember."
  },
  {
    id: "verify",
    level: "Level 0",
    zhTitle: "AI 會出錯：你一定要學會查證",
    enTitle: "AI can be wrong: learn to verify.",
    zhText: "AI 可能會產生錯誤資訊、過時資料或看似合理但其實不存在的引用。重要任務一定要要求 AI 標明不確定處，並自己查證來源。",
    enText: "AI may produce incorrect information, outdated data, or plausible but nonexistent citations. For important tasks, ask AI to identify uncertainty and verify sources yourself.",
    quiz: {
      zhQ: "哪一種使用 AI 的方式最安全？",
      enQ: "Which way of using AI is safest?",
      options: [
        { zh: "AI 說什麼都直接相信", en: "Believe everything AI says", correct: false },
        { zh: "重要資訊要求來源並自行查證", en: "Ask for sources and verify important information", correct: true },
        { zh: "只看答案，不看推理", en: "Only read answers and ignore reasoning", correct: false }
      ],
      zhExplain: "AI 很好用，但不能取代查證與判斷。",
      enExplain: "AI is useful, but it does not replace verification and judgment."
    }
  },
  {
    id: "ai-mistakes",
    level: "Level 0",
    zhTitle: "AI 常見錯誤：幻覺、偏誤與過時資訊",
    enTitle: "Common AI mistakes: hallucination, bias, and outdated information.",
    zhText: "AI 有時候會把錯誤內容講得很像真的，這叫做幻覺。AI 也可能受到資料偏誤影響，或使用過時資訊。越重要的內容，越需要查證。",
    enText: "AI can sometimes present false information confidently. This is called hallucination. AI can also reflect data bias or outdated information. The more important the content, the more you need to verify it.",
    zhTask: "寫一個 Prompt，要求 AI 在回答時標示不確定的地方。",
    enTask: "Write a prompt asking AI to mark uncertain parts in its answer.",
    zhAnswer: "請回答我的問題，並把你不確定或需要查證的地方用「需要查證」標示出來，不要把不確定的內容講成事實。",
    enAnswer: "Answer my question and mark any uncertain or unverifiable parts as 'needs verification'. Do not present uncertain information as fact."
  },
  {
    id: "follow-up",
    level: "Level 0",
    zhTitle: "怎麼跟 AI 對話：追問比第一次提問更重要",
    enTitle: "How to talk to AI: follow-up questions matter.",
    zhText: "很多人只問一次就停下來，但 AI 最好用的方式是持續追問。你可以要求它更簡單、更具體、更像學生能懂，或請它舉例、比較、改寫。",
    enText: "Many users ask once and stop, but AI is most useful when you ask follow-up questions. You can ask it to simplify, be more specific, explain like a student, give examples, compare, or rewrite.",
    quiz: {
      zhQ: "如果 AI 回答太難懂，你應該怎麼做？",
      enQ: "If AI's answer is too difficult, what should you do?",
      options: [
        { zh: "直接放棄", en: "Give up", correct: false },
        { zh: "要求它用更簡單的方式解釋並舉例", en: "Ask it to explain more simply and give examples", correct: true },
        { zh: "把答案全部複製貼上", en: "Copy and paste everything", correct: false }
      ],
      zhExplain: "追問可以讓 AI 的答案更符合你的程度與需求。",
      enExplain: "Follow-up questions help AI adjust to your level and needs."
    }
  },
  {
    id: "study",
    level: "Level 1",
    zhTitle: "用 AI 讀書：整理重點與練習題",
    enTitle: "Use AI for studying: summaries and practice questions.",
    zhText: "AI 可以把課本或筆記整理成重點、幫你出題、用不同難度解釋觀念。最好的方法是讓 AI 幫你練習，而不是只叫它給答案。",
    enText: "AI can summarize notes, generate practice questions, and explain concepts at different difficulty levels. The best approach is to use AI for practice, not just answers.",
    zhTask: "設計一個 Prompt，讓 AI 幫你準備期末考。",
    enTask: "Design a prompt asking AI to help you prepare for a final exam.",
    zhAnswer: "請你當作我的考試教練。以下是我的課程範圍：[貼上範圍]。請幫我整理 10 個必考重點、5 個容易混淆的概念，並出 10 題選擇題和 3 題申論題讓我練習。",
    enAnswer: "Act as my exam coach. Here is my exam scope: [paste scope]. Please organize 10 key points, 5 confusing concepts, 10 multiple-choice questions, and 3 essay questions for practice."
  },
  {
    id: "notes",
    level: "Level 1",
    zhTitle: "AI 筆記法：把雜亂資料變成可讀重點",
    enTitle: "AI note-taking: turn messy information into clear notes.",
    zhText: "你可以把課堂筆記、文章或會議內容交給 AI，請它整理成重點、問題、待查資料和行動清單。這能幫你快速進入複習狀態。",
    enText: "You can give AI class notes, articles, or meeting content and ask it to organize key points, questions, items to verify, and action steps. This helps you review faster.",
    zhTask: "設計一個 Prompt，讓 AI 幫你整理上課筆記。",
    enTask: "Design a prompt asking AI to organize class notes.",
    zhAnswer: "請幫我整理以下課堂筆記，分成：本堂重點、重要名詞、我還不懂的地方、可能考題、下一步複習計畫。",
    enAnswer: "Organize the following class notes into: key points, important terms, unclear parts, possible exam questions, and next review plan."
  },
  {
    id: "exam-prep",
    level: "Level 1",
    zhTitle: "AI 考試準備：從範圍到練習題",
    enTitle: "AI exam preparation: from scope to practice.",
    zhText: "準備考試時，AI 可以把範圍拆成讀書計畫，也可以幫你生成題目。重點是要讓 AI 先問你目前程度，再安排練習。",
    enText: "When preparing for exams, AI can break the scope into a study plan and generate practice questions. The key is to let AI first ask about your current level, then plan practice.",
    quiz: {
      zhQ: "考試準備時，AI 最適合先幫你做什麼？",
      enQ: "When preparing for exams, what should AI help with first?",
      options: [
        { zh: "直接猜考題", en: "Directly guess exam questions", correct: false },
        { zh: "拆解範圍並規劃讀書順序", en: "Break down the scope and plan study order", correct: true },
        { zh: "叫你不要讀書", en: "Tell you not to study", correct: false }
      ],
      zhExplain: "先拆解範圍與安排順序，才能更有效率地複習。",
      enExplain: "Breaking down scope and order makes review more efficient."
    }
  },
  {
    id: "report",
    level: "Level 1",
    zhTitle: "學生怎麼用 AI 做報告，而不是被 AI 取代？",
    enTitle: "How students can use AI for reports without being replaced by AI.",
    zhText: "AI 最適合幫你做前期整理，例如產生大綱、列出觀點、提醒盲點。但你仍然要查證資料、選擇論點、寫出自己的分析。",
    enText: "AI is best for early-stage organization, such as generating outlines, listing viewpoints, and pointing out blind spots. You still need to verify sources, choose arguments, and write your own analysis.",
    zhTask: "設計一個 Prompt，讓 AI 幫你做報告大綱，但不能直接寫完整報告。",
    enTask: "Design a prompt asking AI to create a report outline without writing the full report.",
    zhAnswer: "請你協助我規劃一份大學報告大綱，主題是生成式 AI 對薪資不平等的影響。請只提供架構、可能論點、需要查證的資料方向與反方觀點，不要直接替我完成全文。",
    enAnswer: "Help me plan a university report outline on how generative AI affects wage inequality. Only provide structure, possible arguments, sources to verify, and counterarguments. Do not write the full essay for me."
  },
  {
    id: "research-organize",
    level: "Level 1",
    zhTitle: "AI 研究資料整理：從資料夾到文獻表",
    enTitle: "AI research organization: from folders to literature tables.",
    zhText: "當你有很多文章、PDF 或網頁資料時，可以用 AI 幫你做比較表。欄位可以包含作者、主題、研究方法、重點、限制與可引用方向。",
    enText: "When you have many articles, PDFs, or web sources, AI can help build comparison tables. Columns can include author, topic, method, key findings, limitations, and possible use.",
    zhTask: "設計一個 Prompt，讓 AI 幫你整理三篇文章的比較表。",
    enTask: "Design a prompt asking AI to compare three articles in a table.",
    zhAnswer: "請幫我比較以下三篇文章，整理成表格。欄位包含：文章主題、核心觀點、研究方法、可引用句子、限制、與我的報告主題的關聯。",
    enAnswer: "Compare the following three articles in a table with columns: topic, core argument, method, quotable idea, limitation, and relevance to my report topic."
  },
  {
    id: "slides",
    level: "Level 1",
    zhTitle: "用 AI 做簡報：不是變漂亮，而是先變清楚",
    enTitle: "Use AI for slides: clarity before design.",
    zhText: "簡報最重要的是邏輯。你可以先請 AI 幫你規劃簡報架構，再用 Canva、Gamma 或 PowerPoint 製作視覺。",
    enText: "The most important part of a presentation is logic. You can ask AI to plan the slide structure first, then use Canva, Gamma, or PowerPoint for visuals.",
    zhTask: "請 AI 幫你把一個報告主題改成 8 頁簡報架構。",
    enTask: "Ask AI to turn a report topic into an 8-slide structure.",
    zhAnswer: "請你把主題「AI 對大學生學習方式的影響」規劃成 8 頁簡報。每頁包含：標題、一句核心訊息、三個重點、建議圖片或圖表。",
    enAnswer: "Turn the topic 'The impact of AI on university students' learning methods' into an 8-slide deck. Each slide should include a title, one key message, three bullet points, and suggested visual."
  },
  {
    id: "email",
    level: "Level 1",
    zhTitle: "用 AI 寫信：禮貌、清楚、有目的",
    enTitle: "Use AI for emails: polite, clear, and purposeful.",
    zhText: "寫 Email 時，AI 可以幫你調整語氣、整理重點、避免太情緒化。你要提供收件人、目的、背景、希望對方採取的行動。",
    enText: "AI can help adjust tone, organize key points, and avoid emotional wording in emails. Provide recipient, purpose, context, and desired action.",
    zhTask: "寫一個 Prompt，請 AI 幫你寄信詢問實習證明。",
    enTask: "Write a prompt asking AI to draft an email requesting internship confirmation.",
    zhAnswer: "請幫我寫一封正式但禮貌的英文信給主辦單位。背景：我已錄取教育部海外計畫，學校申請補助需要接待單位提供確認文件。目的：請對方協助開立我將前往見習或實習的證明。語氣要誠懇、清楚、不要太強硬。",
    enAnswer: "Write a formal but polite English email to the organizer. Context: I have been accepted into a Ministry of Education overseas program, and my university scholarship application requires confirmation from the host unit. Purpose: request a document confirming my visit or internship. Tone: sincere, clear, and not too forceful."
  },
  {
    id: "time-management",
    level: "Level 1",
    zhTitle: "AI 時間管理：把壓力變成可執行清單",
    enTitle: "AI time management: turn pressure into action steps.",
    zhText: "當你有很多任務時，可以請 AI 幫你依照期限、重要性與所需時間重新排序，並切成今天可以完成的行動清單。",
    enText: "When you have many tasks, ask AI to sort them by deadline, importance, and required time, then break them into actions you can complete today.",
    zhTask: "設計一個 Prompt，讓 AI 幫你規劃期末考週。",
    enTask: "Design a prompt asking AI to plan your final exam week.",
    zhAnswer: "以下是我這週的任務與期限：[列出任務]。請幫我依重要性與時間排序，安排每天可執行的計畫，並提醒我哪些任務要先完成。",
    enAnswer: "Here are my tasks and deadlines this week: [list tasks]. Sort them by importance and time, create a daily action plan, and remind me which tasks to complete first."
  },
  {
    id: "career",
    level: "Level 2",
    zhTitle: "用 AI 做履歷與面試準備",
    enTitle: "Use AI for resumes and interview preparation.",
    zhText: "AI 可以幫你把經驗改寫得更具體，但不能捏造經歷。好的履歷要強調行動、成果、能力與證據。",
    enText: "AI can make your experience more specific, but it should not invent experience. A good resume emphasizes action, results, skills, and evidence.",
    zhTask: "把「我參加社團活動」改寫成比較適合履歷的句子。",
    enTask: "Rewrite 'I joined club activities' into a resume-ready bullet.",
    zhAnswer: "參與校內社團專案規劃與活動執行，協助完成活動流程設計、現場協調與成效回饋整理，提升團隊溝通與專案管理能力。",
    enAnswer: "Participated in student club project planning and event execution, supporting agenda design, on-site coordination, and feedback analysis while strengthening teamwork and project management skills."
  },
  {
    id: "linkedin",
    level: "Level 2",
    zhTitle: "用 AI 建立 LinkedIn 與個人品牌",
    enTitle: "Use AI to build LinkedIn and personal branding.",
    zhText: "LinkedIn 不只是求職網站，也是展示學習歷程、專案成果和職涯方向的地方。AI 可以幫你把經驗整理成清楚的個人介紹。",
    enText: "LinkedIn is not only a job platform; it is a place to show your learning journey, projects, and career direction. AI can help turn experience into a clear personal profile.",
    zhTask: "寫一個 Prompt，請 AI 幫你產生 LinkedIn About 區塊。",
    enTask: "Write a prompt asking AI to create a LinkedIn About section.",
    zhAnswer: "請根據以下背景，幫我寫一段 LinkedIn About。語氣要專業但不誇張，強調我的學習方向、專案經驗、AI 與社會創新興趣。",
    enAnswer: "Based on the following background, write a LinkedIn About section. Keep the tone professional but not exaggerated, emphasizing my learning direction, project experience, and interests in AI and social innovation."
  },
  {
    id: "cover-letter",
    level: "Level 2",
    zhTitle: "AI 求職信與申請信",
    enTitle: "AI cover letters and application emails.",
    zhText: "求職信或申請信要清楚說明你是誰、為什麼申請、你能帶來什麼，以及你希望對方採取什麼行動。AI 可以幫你把內容變得更有邏輯。",
    enText: "A cover letter or application email should explain who you are, why you are applying, what you can contribute, and what action you hope the recipient will take. AI can help make the message more logical.",
    zhTask: "設計一個 Prompt，讓 AI 幫你寫申請信初稿。",
    enTask: "Design a prompt asking AI to draft an application email.",
    zhAnswer: "請根據以下資訊幫我寫一封申請信：申請對象、我的背景、申請原因、相關經驗、希望對方提供的協助。語氣要正式、清楚、有禮貌。",
    enAnswer: "Write an application email based on: recipient, my background, reason for applying, relevant experience, and requested support. Tone should be formal, clear, and polite."
  },
  {
    id: "meeting-notes",
    level: "Level 2",
    zhTitle: "AI 會議紀錄：從對話到行動",
    enTitle: "AI meeting notes: from conversation to action.",
    zhText: "AI 可以把會議內容整理成決議、待辦、負責人和期限。這能幫助團隊避免開完會卻沒有人知道下一步。",
    enText: "AI can organize meeting content into decisions, tasks, owners, and deadlines. This prevents teams from leaving meetings without clear next steps.",
    quiz: {
      zhQ: "好的會議紀錄最應該包含什麼？",
      enQ: "What should good meeting notes include?",
      options: [
        { zh: "只有一大段逐字稿", en: "Only a long transcript", correct: false },
        { zh: "決議、待辦、負責人與期限", en: "Decisions, tasks, owners, and deadlines", correct: true },
        { zh: "只寫誰遲到", en: "Only who was late", correct: false }
      ],
      zhExplain: "會議紀錄的核心是讓下一步變清楚。",
      enExplain: "The purpose of meeting notes is to make next steps clear."
    }
  },
  {
    id: "workflow",
    level: "Level 2",
    zhTitle: "AI 工作流程：把任務拆成步驟",
    enTitle: "AI workflow: break tasks into steps.",
    zhText: "進階使用 AI 的關鍵不是單次提問，而是工作流程。你可以把一個任務拆成：蒐集資料、整理、產出、檢查、修改。",
    enText: "Advanced AI use is not about one prompt, but about workflow. You can break a task into collecting information, organizing, producing, checking, and revising.",
    zhTask: "把「我要完成一份簡報」拆成 AI 工作流程。",
    enTask: "Break 'I need to finish a presentation' into an AI workflow.",
    zhAnswer: "流程：1. 請 AI 釐清簡報目的。2. 產生大綱。3. 每頁整理重點。4. 產生講稿。5. 檢查邏輯。6. 用 Canva 或 Gamma 做視覺。",
    enAnswer: "Workflow: 1. Ask AI to clarify the presentation purpose. 2. Generate an outline. 3. Organize key points for each slide. 4. Create speaker notes. 5. Check logic. 6. Use Canva or Gamma for visuals."
  },
  {
    id: "tool-choice",
    level: "Level 2",
    zhTitle: "不同任務要用不同 AI 工具",
    enTitle: "Different tasks need different AI tools.",
    zhText: "不是每個問題都只用 ChatGPT。寫作可以用 ChatGPT 或 Claude；研究可以用 Perplexity 或 NotebookLM；簡報可以用 Gamma 或 Canva；圖像可以用 Canva 或影像生成工具。",
    enText: "Not every task should use only ChatGPT. Writing can use ChatGPT or Claude; research can use Perplexity or NotebookLM; slides can use Gamma or Canva; visuals can use Canva or image tools.",
    quiz: {
      zhQ: "如果你有很多 PDF 想要問問題，最適合先試哪個工具？",
      enQ: "If you have many PDFs and want to ask questions about them, which tool is best to try first?",
      options: [
        { zh: "NotebookLM", en: "NotebookLM", correct: true },
        { zh: "只用 Instagram", en: "Only Instagram", correct: false },
        { zh: "只用計算機", en: "Only calculator", correct: false }
      ],
      zhExplain: "NotebookLM 適合針對你上傳的資料進行來源導向問答。",
      enExplain: "NotebookLM is useful for source-grounded Q&A based on uploaded materials."
    }
  }
];

const PREMIUM = [
  {
    id: "admissions",
    price: "NT$499",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "高中生申請大學 AI 實戰課",
    enTitle: "AI University Application Lab for High School Students",
    zhUser: "高二、高三、學測後準備申請大學、整理學習歷程與備審資料的學生",
    enUser: "High school students preparing university applications, learning portfolios, and admissions materials",
    zhOutcome: "完成後你會產出一份完整的大學申請包：科系探索、學習歷程整理、備審架構、自我介紹與面試準備。",
    enOutcome: "You will produce a complete university application package: major exploration, learning portfolio organization, application structure, self-introduction, and interview preparation.",
    zhDesc: "這門課不是教你用 AI 代寫備審，而是教你用 AI 把自己的經驗整理得更清楚、更有邏輯，讓你在申請大學時能說出自己的方向。",
    enDesc: "This course does not teach students to let AI write applications for them. It teaches students how to use AI to organize their own experience clearly and logically for university applications.",
    zhFinalProduct: "大學申請包",
    enFinalProduct: "University Application Package",
    zhLessons: [
      "第1課：用 AI 找出適合自己的科系",
      "第2課：用 AI 分析個人特質與學習優勢",
      "第3課：用 AI 整理高中學習歷程",
      "第4課：用 AI 撰寫學習歷程反思",
      "第5課：用 AI 建立備審資料架構",
      "第6課：用 AI 修改自我介紹",
      "第7課：用 AI 準備大學面試常見題",
      "第8課：用 AI 模擬教授面試",
      "第9課：用 AI 回答科系動機與未來規劃",
      "第10課：完成你的大學申請包"
    ],
    enLessons: [
      "Lesson 1: Use AI to explore suitable university majors",
      "Lesson 2: Use AI to analyze personal strengths and learning advantages",
      "Lesson 3: Use AI to organize high school learning portfolios",
      "Lesson 4: Use AI to write learning reflection drafts",
      "Lesson 5: Use AI to structure application materials",
      "Lesson 6: Use AI to improve self-introduction",
      "Lesson 7: Use AI to prepare common university interview questions",
      "Lesson 8: Use AI to simulate professor interviews",
      "Lesson 9: Use AI to answer motivation and future planning questions",
      "Lesson 10: Complete your university application package"
    ],
    zhValue: [
      "不再不知道備審要寫什麼",
      "把高中經驗整理成有邏輯的故事",
      "面試前可以反覆練習"
    ],
    enValue: [
      "No longer feel lost about application materials",
      "Turn high school experience into a logical story",
      "Practice interviews repeatedly before the real one"
    ]
  },
  {
    id: "college-learning",
    price: "NT$699",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "大學生 AI 學習系統課",
    enTitle: "AI Learning System for University Students",
    zhUser: "大一到大四，想用 AI 提升讀書、報告、簡報、筆記與時間管理效率的大學生",
    enUser: "University students who want to use AI for studying, reports, slides, notes, and time management",
    zhOutcome: "完成後你會建立自己的 AI 大學生存系統，包含讀書流程、筆記流程、報告流程與簡報流程。",
    enOutcome: "You will build your own AI university survival system, including workflows for studying, note-taking, reports, and presentations.",
    zhDesc: "這門課幫助大學生把 AI 變成學習助手，而不是只拿來交作業。重點是建立可以重複使用的學習流程。",
    enDesc: "This course helps university students turn AI into a learning assistant, not just a shortcut for assignments. The focus is building reusable learning workflows.",
    zhFinalProduct: "AI 大學生存系統",
    enFinalProduct: "AI University Survival System",
    zhLessons: [
      "第1課：建立 AI 大學學習觀念",
      "第2課：AI 讀書法與重點整理",
      "第3課：AI 課堂筆記與複習系統",
      "第4課：AI 考試準備與題庫生成",
      "第5課：AI 報告大綱與論點設計",
      "第6課：AI 資料查證與來源判斷",
      "第7課：AI 簡報架構與講稿設計",
      "第8課：AI 團隊合作與分工流程",
      "第9課：AI 時間管理與任務拆解",
      "第10課：建立你的 AI 學習工作流"
    ],
    enLessons: [
      "Lesson 1: Build the right AI learning mindset for university",
      "Lesson 2: AI study method and key-point extraction",
      "Lesson 3: AI class notes and review system",
      "Lesson 4: AI exam preparation and question generation",
      "Lesson 5: AI report outlines and argument design",
      "Lesson 6: AI source verification and evidence checking",
      "Lesson 7: AI slide structure and speaker notes",
      "Lesson 8: AI teamwork and collaboration workflow",
      "Lesson 9: AI time management and task breakdown",
      "Lesson 10: Build your AI learning workflow"
    ],
    zhValue: [
      "每次報告不再從零開始",
      "讀書與考試準備更有系統",
      "建立自己的 AI 學習 SOP"
    ],
    enValue: [
      "Never start reports from zero again",
      "Study and exam preparation become more systematic",
      "Build your personal AI learning SOP"
    ]
  },
  {
    id: "research-competition",
    price: "NT$899",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "大學生研究與競賽 AI 實戰課",
    enTitle: "AI Research and Competition Lab for University Students",
    zhUser: "大學生、專題生、想參加競賽、做研究、做期末專案或整理資料的人",
    enUser: "University students working on projects, competitions, research, final projects, or data organization",
    zhOutcome: "完成後你會產出一份研究或競賽專案包，包含題目、資料整理、研究架構、簡報與提案。",
    enOutcome: "You will produce a research or competition project package, including topic, source organization, research structure, slides, and proposal.",
    zhDesc: "這門課會教你用 AI 協助研究與競賽，但不會讓 AI 取代你的思考。重點是題目釐清、資料整理、查證與呈現。",
    enDesc: "This course teaches students to use AI for research and competitions without replacing their own thinking. The focus is topic clarification, source organization, verification, and presentation.",
    zhFinalProduct: "研究與競賽專案包",
    enFinalProduct: "Research and Competition Project Package",
    zhLessons: [
      "第1課：用 AI 發想研究或競賽題目",
      "第2課：用 AI 縮小題目與設定問題",
      "第3課：用 Perplexity 找資料與來源",
      "第4課：用 NotebookLM 整理 PDF 與文獻",
      "第5課：建立文獻與資料比較表",
      "第6課：用 AI 找出研究缺口與觀點",
      "第7課：用 AI 設計問卷與訪談問題",
      "第8課：用 AI 整理資料與初步分析",
      "第9課：用 AI 製作研究簡報與提案",
      "第10課：完成研究或競賽專案包"
    ],
    enLessons: [
      "Lesson 1: Use AI to generate research or competition topics",
      "Lesson 2: Use AI to narrow topics and define questions",
      "Lesson 3: Use Perplexity to find sources",
      "Lesson 4: Use NotebookLM to organize PDFs and papers",
      "Lesson 5: Build literature and source comparison tables",
      "Lesson 6: Use AI to identify research gaps and viewpoints",
      "Lesson 7: Use AI to design surveys and interview questions",
      "Lesson 8: Use AI to organize data and initial analysis",
      "Lesson 9: Use AI to create research slides and proposals",
      "Lesson 10: Complete your research or competition package"
    ],
    zhValue: [
      "讓專題與競賽不再只靠靈感",
      "資料整理更快且更有條理",
      "簡報與提案更完整"
    ],
    enValue: [
      "Make projects and competitions less dependent on random inspiration",
      "Organize sources faster and more systematically",
      "Create stronger presentations and proposals"
    ]
  },
  {
    id: "career-internship",
    price: "NT$999",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "求職與實習 AI 實戰課",
    enTitle: "AI Career and Internship Lab",
    zhUser: "想找實習、打工、第一份工作、交換計畫、獎學金或海外機會的學生",
    enUser: "Students applying for internships, part-time jobs, first jobs, exchange programs, scholarships, or overseas opportunities",
    zhOutcome: "完成後你會完成一份求職包，包含履歷、自我介紹、LinkedIn、面試題庫、求職信與作品集架構。",
    enOutcome: "You will complete a career package, including resume, self-introduction, LinkedIn profile, interview question bank, application email, and portfolio structure.",
    zhDesc: "這門課不是讓 AI 幫你捏造經歷，而是幫你把真實經驗整理得更具體、更有說服力。",
    enDesc: "This course does not teach AI to invent experience. It helps you organize real experience more specifically and persuasively.",
    zhFinalProduct: "求職與實習申請包",
    enFinalProduct: "Career and Internship Application Package",
    zhLessons: [
      "第1課：用 AI 盤點個人經驗與能力",
      "第2課：用 AI 建立履歷架構",
      "第3課：用 AI 優化履歷描述",
      "第4課：用 STAR 法則整理經驗",
      "第5課：用 AI 建立自我介紹",
      "第6課：用 AI 準備面試題庫",
      "第7課：用 AI 模擬面試與回饋",
      "第8課：用 AI 建立 LinkedIn 個人品牌",
      "第9課：用 AI 撰寫求職信與申請信",
      "第10課：完成你的求職與實習申請包"
    ],
    enLessons: [
      "Lesson 1: Use AI to map personal experience and strengths",
      "Lesson 2: Use AI to build resume structure",
      "Lesson 3: Use AI to improve resume descriptions",
      "Lesson 4: Organize experience with the STAR method",
      "Lesson 5: Use AI to build self-introduction",
      "Lesson 6: Use AI to prepare interview question banks",
      "Lesson 7: Use AI to simulate interviews and feedback",
      "Lesson 8: Use AI to build LinkedIn personal branding",
      "Lesson 9: Use AI to write application emails and cover letters",
      "Lesson 10: Complete your career and internship application package"
    ],
    zhValue: [
      "履歷不再只是流水帳",
      "面試前有明確練習方式",
      "把真實經驗說得更有說服力"
    ],
    enValue: [
      "Your resume becomes more than a timeline",
      "You get a clear interview practice method",
      "You explain real experience more persuasively"
    ]
  },
  {
    id: "workplace-productivity",
    price: "NT$1299",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "職場生產力 AI 工作流課",
    enTitle: "AI Workplace Productivity Workflow Lab",
    zhUser: "想用 AI 處理 Email、會議紀錄、企劃、文件整理、任務管理與日常工作的使用者",
    enUser: "Users who want to use AI for email, meeting notes, proposals, documents, task management, and daily work",
    zhOutcome: "完成後你會建立一套個人 AI 工作流，能更快完成日常行政、企劃、文件與溝通任務。",
    enOutcome: "You will build a personal AI workflow to complete daily admin, planning, document, and communication tasks faster.",
    zhDesc: "這門課把 AI 從聊天工具變成工作系統，讓你知道每一種工作任務要怎麼拆解與交給 AI 協助。",
    enDesc: "This course turns AI from a chat tool into a work system, showing how to break down tasks and use AI in daily work.",
    zhFinalProduct: "個人 AI 工作流系統",
    enFinalProduct: "Personal AI Workflow System",
    zhLessons: [
      "第1課：建立 AI 職場工作觀念",
      "第2課：用 AI 處理 Email 與訊息回覆",
      "第3課：用 AI 整理會議紀錄與待辦",
      "第4課：用 AI 建立 SOP 與流程文件",
      "第5課：用 AI 撰寫企劃書與提案初稿",
      "第6課：用 AI 做週報與工作回顧",
      "第7課：用 AI 整理文件與知識庫",
      "第8課：用 AI 進行任務管理與優先順序排序",
      "第9課：用 AI 協助團隊溝通與協作",
      "第10課：完成你的個人 AI 工作流"
    ],
    enLessons: [
      "Lesson 1: Build the right AI workplace mindset",
      "Lesson 2: Use AI for emails and message replies",
      "Lesson 3: Use AI to organize meeting notes and tasks",
      "Lesson 4: Use AI to create SOPs and process documents",
      "Lesson 5: Use AI to draft proposals and plans",
      "Lesson 6: Use AI for weekly reports and work reviews",
      "Lesson 7: Use AI to organize documents and knowledge bases",
      "Lesson 8: Use AI for task management and prioritization",
      "Lesson 9: Use AI for team communication and collaboration",
      "Lesson 10: Complete your personal AI workflow"
    ],
    zhValue: [
      "減少重複行政工作",
      "把工作任務變成標準流程",
      "提升文件與溝通效率"
    ],
    enValue: [
      "Reduce repetitive admin work",
      "Turn work tasks into standard workflows",
      "Improve document and communication efficiency"
    ]
  },
  {
    id: "startup-automation",
    price: "NT$1499",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "創業與 AI 自動化實戰課",
    enTitle: "AI Startup and Automation Lab",
    zhUser: "想做個人品牌、數位產品、社會創新、創業提案、AI 自動化或 AI Agent 的進階使用者",
    enUser: "Advanced users interested in personal branding, digital products, social innovation, startup proposals, AI automation, or AI agents",
    zhOutcome: "完成後你會完成一份創業提案與一套基礎 AI 自動化流程，包含問題定義、使用者分析、MVP、Pitch Deck 與自動化設計。",
    enOutcome: "You will complete a startup proposal and basic AI automation workflow, including problem definition, user analysis, MVP, pitch deck, and automation design.",
    zhDesc: "這門課適合已經有基礎 AI 能力的人，目標是把 AI 用在產品、服務、創業與自動化流程設計。",
    enDesc: "This course is for users with basic AI skills who want to apply AI to products, services, startups, and automation workflows.",
    zhFinalProduct: "創業提案與 AI 自動化流程",
    enFinalProduct: "Startup Proposal and AI Automation Workflow",
    zhLessons: [
      "第1課：用 AI 進行問題定義",
      "第2課：用 AI 分析目標使用者與痛點",
      "第3課：用 AI 設計訪談問題",
      "第4課：用 AI 建立商業模式草稿",
      "第5課：用 AI 規劃 MVP 與功能優先順序",
      "第6課：用 AI 設計內容行銷與個人品牌",
      "第7課：用 AI 建立 Pitch Deck 架構",
      "第8課：AI 自動化思維與流程拆解",
      "第9課：Zapier、Make 與 AI Agent 概念",
      "第10課：完成創業提案與 AI 自動化流程"
    ],
    enLessons: [
      "Lesson 1: Use AI for problem definition",
      "Lesson 2: Use AI to analyze target users and pain points",
      "Lesson 3: Use AI to design interview questions",
      "Lesson 4: Use AI to draft a business model",
      "Lesson 5: Use AI to plan MVP and feature priorities",
      "Lesson 6: Use AI for content marketing and personal branding",
      "Lesson 7: Use AI to build pitch deck structure",
      "Lesson 8: AI automation mindset and workflow breakdown",
      "Lesson 9: Zapier, Make, and AI Agent concepts",
      "Lesson 10: Complete your startup proposal and AI automation workflow"
    ],
    zhValue: [
      "把想法變成可展示提案",
      "理解 AI 自動化與 Agent 基礎",
      "完成一套能延伸的創業流程"
    ],
    enValue: [
      "Turn ideas into presentable proposals",
      "Understand AI automation and agent basics",
      "Complete a startup workflow that can be expanded"
    ]
  },
  {
    id: "all-access",
    price: "早鳥 NT$2,999｜正式 NT$3,999",
    paymentUrl: "https://gumroad.com/",
    zhTitle: "AI Skill Bridge 全站通行證",
    enTitle: "AI Skill Bridge All-Access Pass",
    zhUser: "想一次解鎖全部 6 個付費課程、60 堂課與未來更新的使用者",
    enUser: "Users who want to unlock all 6 premium courses, 60 lessons, and future updates",
    zhOutcome: "完成後你可以從高中申請、大學學習、研究競賽、求職實習、職場效率到創業自動化完整學習。",
    enOutcome: "You can learn the full path from university applications, university learning, research and competitions, career, workplace productivity, to startup automation.",
    zhDesc: "全站通行證適合想完整走完 AI Skill Bridge 學習路徑的使用者。相比單買 6 個課程，全站方案更划算。",
    enDesc: "The All-Access Pass is for users who want the full AI Skill Bridge learning path. It is more cost-effective than buying all 6 courses separately.",
    zhFinalProduct: "完整 AI 成長路徑",
    enFinalProduct: "Complete AI Growth Path",
    zhLessons: [
      "解鎖：高中生申請大學 AI 實戰課",
      "解鎖：大學生 AI 學習系統課",
      "解鎖：大學生研究與競賽 AI 實戰課",
      "解鎖：求職與實習 AI 實戰課",
      "解鎖：職場生產力 AI 工作流課",
      "解鎖：創業與 AI 自動化實戰課",
      "包含：全部 60 堂付費課",
      "包含：未來新增課程更新",
      "包含：Prompt Tutor 與工具導航",
      "包含：徽章、證書與學習路徑"
    ],
    enLessons: [
      "Unlock: AI University Application Lab",
      "Unlock: AI Learning System for University Students",
      "Unlock: AI Research and Competition Lab",
      "Unlock: AI Career and Internship Lab",
      "Unlock: AI Workplace Productivity Workflow Lab",
      "Unlock: AI Startup and Automation Lab",
      "Includes: all 60 premium lessons",
      "Includes: future course updates",
      "Includes: Prompt Tutor and AI tool navigator",
      "Includes: badges, certificates, and learning path"
    ],
    zhValue: [
      "一次解鎖完整學習路徑",
      "價格比單買全部課程更划算",
      "適合想長期學習 AI 的使用者"
    ],
    enValue: [
      "Unlock the complete learning path",
      "More cost-effective than buying all courses separately",
      "Best for long-term AI learners"
    ]
  }
];

const PREMIUM_LESSON_DETAILS = {
  "admissions": [
    {
      "zhTitle": "第1課：認識大學申請規則與 AI 可以幫你的地方",
      "enTitle": "Lesson 1: Understand University Application Rules and How AI Can Help",
      "zhConcept": "大學申請不是只有填志願。你需要理解第一階段、第二階段、備審資料、面試與科系需求。AI 可以協助你整理資訊、建立準備清單與模擬面試，但不能替你捏造經歷或保證錄取。",
      "enConcept": "University application is not just filling choices. You need to understand stages, application materials, interviews, and major requirements. AI can help organize information and simulate interviews, but it cannot invent experience or guarantee admission.",
      "zhPrompt": "請你擔任高中升學顧問，用高中三年級學生能理解的方式解釋：\n1. 大學申請第一階段是什麼\n2. 第二階段是什麼\n3. 備審資料為什麼重要\n4. 面試通常在看什麼\n5. 我現在應該先準備哪些資料\n請用表格整理，最後給我一份 7 天準備清單。",
      "enPrompt": "Act as a university admissions counselor. Explain: first stage, second stage, why application materials matter, what interviews evaluate, and what I should prepare first. Use a table and give me a 7-day checklist.",
      "zhExample": "如果你想申請資訊管理系，AI 可以幫你列出：需要強調的能力、可能面試題、備審資料應放哪些專案或課程成果。",
      "enExample": "If applying to Information Management, AI can list skills to emphasize, possible interview questions, and projects or outputs to include.",
      "zhPractice": "列出你想申請的 3 個科系，並請 AI 幫你整理每個科系可能重視的能力、備審方向與面試題型。",
      "enPractice": "List 3 target majors and ask AI to summarize abilities, material direction, and interview question types.",
      "zhQuiz": "第一階段通常主要看什麼？A. 面試表現 B. 學測成績與篩選條件 C. 教授喜好。答案：B。",
      "enQuiz": "What does the first stage usually focus on? A. Interview B. Test scores and screening criteria C. Professor preference. Answer: B.",
      "zhOutcome": "完成大學申請流程理解表與 7 天準備清單。",
      "enOutcome": "Complete an application process table and 7-day checklist."
    },
    {
      "zhTitle": "第2課：用 AI 找出最適合自己的科系",
      "enTitle": "Lesson 2: Use AI to Find Suitable Majors",
      "zhConcept": "選科系不能只看熱門、分數或朋友選什麼。你要把興趣、能力、學習經驗、個性與未來方向一起考慮。",
      "enConcept": "Choosing a major should not depend only on popularity, scores, or friends. Consider interests, abilities, learning experiences, personality, and future direction.",
      "zhPrompt": "我是高中三年級學生，請你擔任升學輔導老師。\n我的興趣：\n我的強項科目：\n我的弱項科目：\n我參加過的活動：\n我未來可能想做的工作：\n請推薦 5 個適合我的科系，並用表格比較：適合原因、需要能力、未來職涯、我目前缺少什麼、下一步要查什麼。",
      "enPrompt": "I am a high school senior. Act as an admissions counselor. Based on my interests, subjects, activities, and future jobs, recommend 5 suitable majors and compare fit, abilities, careers, gaps, and next research steps.",
      "zhExample": "興趣是心理學、擅長國文與生物、常參加服務活動的人，可以探索心理、社工、教育、護理、職能治療等方向。",
      "enExample": "A student interested in psychology and service could explore psychology, social work, education, nursing, or occupational therapy.",
      "zhPractice": "完成一份科系探索表，至少比較 5 個科系，並為每個科系寫下你需要進一步查證的 2 件事。",
      "enPractice": "Complete a major exploration table comparing at least 5 majors and write 2 things to verify for each.",
      "zhQuiz": "選科系最不建議只依靠哪一項？A. 興趣 B. 能力 C. 熱門程度。答案：C。",
      "enQuiz": "Which factor should not be used alone? A. Interest B. Ability C. Popularity. Answer: C.",
      "zhOutcome": "完成科系探索表與 3 個優先申請科系清單。",
      "enOutcome": "Complete a major exploration table and 3 priority majors."
    },
    {
      "zhTitle": "第3課：用 AI 整理高中三年的學習歷程素材",
      "enTitle": "Lesson 3: Use AI to Organize Portfolio Materials",
      "zhConcept": "很多學生不是沒有內容，而是不知道怎麼分類。學習歷程素材包含課程成果、社團活動、幹部經驗、競賽、服務、專題、作品與自主學習。",
      "enConcept": "Many students have content but do not know how to classify it. Portfolio materials include course outputs, clubs, leadership, competitions, service, projects, works, and self-learning.",
      "zhPrompt": "請幫我整理高中三年的學習歷程素材。以下是我的經驗：\n（貼上所有經驗）\n請分類成：課程成果、社團活動、幹部經驗、競賽成果、志工服務、自主學習、專題作品。每一項請整理：事件名稱、我做了什麼、學到什麼、可以展現的能力、適合申請哪些科系。",
      "enPrompt": "Help organize my high school portfolio materials. Categorize into course outputs, clubs, leadership, competitions, service, self-learning, and projects. For each, summarize name, actions, learning, abilities, and suitable majors.",
      "zhExample": "一個科展作品不只是比賽成果，也可能展現研究能力、資料整理、問題解決與簡報能力。",
      "enExample": "A science fair project can show research, data organization, problem solving, and presentation ability.",
      "zhPractice": "建立一份素材庫，至少放入 10 個高中經驗，並用 AI 幫你分類與標註能力。",
      "enPractice": "Build a database with at least 10 experiences, then use AI to classify and tag abilities.",
      "zhQuiz": "學習歷程整理第一步是什麼？A. 直接寫自傳 B. 先分類與盤點素材 C. 先做封面。答案：B。",
      "enQuiz": "First step? A. Write autobiography B. Classify materials C. Design cover. Answer: B.",
      "zhOutcome": "完成高中學習歷程素材庫。",
      "enOutcome": "Complete a high school portfolio material database."
    },
    {
      "zhTitle": "第4課：用 STAR 架構寫出有說服力的多元表現",
      "enTitle": "Lesson 4: Use STAR for Strong Activity Descriptions",
      "zhConcept": "多元表現不是列活動名稱，而是說清楚情境、任務、行動與結果。STAR 架構能讓你的經驗變得具體、有邏輯。",
      "enConcept": "Activity descriptions are not just names. Explain situation, task, action, and result. STAR makes experience concrete and logical.",
      "zhPrompt": "請使用 STAR 架構幫我整理以下活動經驗：\n活動名稱：\nSituation 情境：\nTask 任務：\nAction 行動：\nResult 結果：\n請改寫成 300 字以內，適合放進大學申請備審資料的多元表現描述。語氣真誠，不要誇大。",
      "enPrompt": "Use STAR to organize this activity and rewrite it within 300 words for application materials. Keep it sincere and do not exaggerate.",
      "zhExample": "不要只寫「我擔任班長」。要寫你面對什麼班級問題、如何協調、最後改善了什麼。",
      "enExample": "Do not only write 'class leader'. Explain the problem, coordination, and improvement.",
      "zhPractice": "選 3 個活動經驗，各自用 STAR 架構整理，並請 AI 改寫成備審可用版本。",
      "enPractice": "Choose 3 activities, organize each with STAR, and ask AI to rewrite them.",
      "zhQuiz": "STAR 的 R 代表什麼？A. Reason B. Result C. Research。答案：B。",
      "enQuiz": "What does R mean? A. Reason B. Result C. Research. Answer: B.",
      "zhOutcome": "完成 3 則多元表現描述。",
      "enOutcome": "Complete 3 activity descriptions."
    },
    {
      "zhTitle": "第5課：用 AI 產出學習歷程自述初稿",
      "enTitle": "Lesson 5: Use AI to Draft a Learning Autobiography",
      "zhConcept": "學習歷程自述不是人生全部，而是把學習動機、重要經驗、能力成長與申請科系連起來。",
      "enConcept": "A learning autobiography connects learning motivation, important experiences, ability growth, and target major.",
      "zhPrompt": "請你擔任大學申請寫作顧問。我要撰寫學習歷程自述。\n我的目標科系：\n我的重要學習經驗：\n我的活動經驗：\n我想強調的能力：\n我的未來目標：\n請幫我產出自述架構，包含：開頭、學習歷程、能力成長、申請動機、未來規劃。不要捏造內容。",
      "enPrompt": "Act as an application writing consultant. Create a structure for my learning autobiography: opening, learning journey, ability growth, motivation, and future plan. Do not invent content.",
      "zhExample": "申請設計相關科系，可以把美術課作品、社群設計經驗、展覽或自主學習連成一條故事線。",
      "enExample": "For design majors, connect art works, social media design, exhibitions, or self-learning into a storyline.",
      "zhPractice": "用 AI 產生自述架構後，自己補上真實細節，再請 AI 檢查是否太空泛。",
      "enPractice": "Generate a structure with AI, add real details, then ask AI to check vagueness.",
      "zhQuiz": "自述最應避免什麼？A. 真實反思 B. 具體例子 C. 空泛與誇大。答案：C。",
      "enQuiz": "What should be avoided? A. Real reflection B. Examples C. Vagueness and exaggeration. Answer: C.",
      "zhOutcome": "完成學習歷程自述初稿架構。",
      "enOutcome": "Complete a learning autobiography draft structure."
    },
    {
      "zhTitle": "第6課：針對目標科系製作專屬備審資料",
      "enTitle": "Lesson 6: Build Major-Specific Application Materials",
      "zhConcept": "同一份備審資料不能丟給所有科系。不同科系重視的能力不同，AI 可以幫你分析科系需求並調整重點。",
      "enConcept": "One package should not be used for every major. Different majors value different abilities. AI can help analyze requirements and adjust focus.",
      "zhPrompt": "我想申請的科系是：____。\n請分析這個科系可能重視的能力，並根據我的經驗：____，建議備審資料應放哪些內容。\n請分成：必放內容、可加分內容、不建議放的內容、需要補強的內容。",
      "enPrompt": "My target major is ____. Analyze valued abilities and suggest what to include based on my experiences. Divide into must-include, bonus, not recommended, and needs improvement.",
      "zhExample": "申請心理系時，志工服務、觀察紀錄、閱讀心得與人際互動經驗可能比活動數量更重要。",
      "enExample": "For psychology, service, observation notes, reading reflections, and interpersonal experience may matter more than quantity.",
      "zhPractice": "選定一個目標科系，請 AI 做「科系需求 × 我的素材」對照表。",
      "enPractice": "Choose one major and ask AI to create a requirements × materials table.",
      "zhQuiz": "備審為什麼要依科系調整？答案：不同科系重視的能力與證據不同。",
      "enQuiz": "Why adjust by major? Answer: different majors value different abilities and evidence.",
      "zhOutcome": "完成科系專屬備審資料規劃表。",
      "enOutcome": "Complete a major-specific material plan."
    },
    {
      "zhTitle": "第7課：建立大學面試題庫與回答架構",
      "enTitle": "Lesson 7: Build an Interview Question Bank",
      "zhConcept": "面試準備不是背答案，而是建立回答架構。AI 可以生成題庫，幫你練習自我介紹、申請動機、學習歷程與未來規劃。",
      "enConcept": "Interview preparation is not memorizing answers; it is building answer frameworks. AI can generate question banks.",
      "zhPrompt": "請你擔任大學教授。我申請的科系是：____。\n請設計 20 題面試問題，分成：自我介紹、申請動機、學習歷程、科系理解、未來規劃、臨場反應。\n每題請提供回答架構，不要直接替我寫完整答案。",
      "enPrompt": "Act as a professor. Create 20 interview questions for my target major, grouped by self-introduction, motivation, portfolio, major understanding, future plan, and situational response. Provide answer frameworks, not full answers.",
      "zhExample": "問題：為什麼選本系？回答架構：過去經驗 → 對科系理解 → 目前準備 → 未來目標。",
      "enExample": "Question: Why this major? Framework: past experience → understanding → preparation → future goal.",
      "zhPractice": "產生 20 題後，挑出最容易卡住的 5 題，為每題寫下 3 個回答重點。",
      "enPractice": "Generate 20 questions, choose the 5 hardest, and write 3 key points for each.",
      "zhQuiz": "面試最不建議做什麼？A. 建立架構 B. 練習 C. 背 AI 完整答案。答案：C。",
      "enQuiz": "What is not recommended? A. Frameworks B. Practice C. Memorizing AI answers. Answer: C.",
      "zhOutcome": "完成個人面試題庫與回答架構。",
      "enOutcome": "Complete interview question bank and frameworks."
    },
    {
      "zhTitle": "第8課：用 AI 進行模擬面試與回饋修正",
      "enTitle": "Lesson 8: Use AI for Mock Interviews and Feedback",
      "zhConcept": "模擬面試的目的不是得到標準答案，而是練習臨場表達。AI 可以扮演教授並從清楚度、具體性、邏輯與說服力給回饋。",
      "enConcept": "Mock interviews train real-time expression. AI can act as a professor and give feedback on clarity, specificity, logic, and persuasiveness.",
      "zhPrompt": "請你擔任大學教授，針對我申請的科系：____，進行模擬面試。\n規則：一次只問一題；等我回答後再問下一題；每次回答後用清楚度、具體性、邏輯、說服力四項評分；給具體改進建議。",
      "enPrompt": "Act as a professor and conduct a mock interview for my target major. Ask one question at a time, wait for my answer, then rate clarity, specificity, logic, and persuasiveness.",
      "zhExample": "AI 可能指出：回答太抽象、缺少具體例子、沒有連結科系、結尾沒有未來方向。",
      "enExample": "AI may point out abstract answers, lack of examples, weak major connection, or missing future direction.",
      "zhPractice": "完成至少 5 題模擬面試，將 AI 建議整理成「面試改進清單」。",
      "enPractice": "Complete at least 5 mock questions and organize feedback into an improvement checklist.",
      "zhQuiz": "模擬面試最重要的是？答案：根據回饋修正回答並反覆練習。",
      "enQuiz": "Most important? Answer: revise based on feedback and practice repeatedly.",
      "zhOutcome": "完成模擬面試紀錄與改進清單。",
      "enOutcome": "Complete mock interview records and checklist."
    },
    {
      "zhTitle": "第9課：建立你的個人 AI 升學顧問",
      "enTitle": "Lesson 9: Build Your Personal AI Admissions Advisor",
      "zhConcept": "每次問 AI 都重新說明背景很浪費時間。你可以建立固定背景 Prompt，讓 AI 長期根據你的目標科系、經驗與申請狀態回答。",
      "enConcept": "Repeating your background wastes time. Create a reusable background prompt so AI answers based on your majors, experiences, and progress.",
      "zhPrompt": "你是我的專屬升學顧問。請記住以下背景，之後回答都要根據這些資訊：\n我的年級：高中三年級\n目標科系：\n我的優勢：\n我的弱點：\n重要學習歷程：\n目前申請進度：\n請先確認資料是否完整，並問我 5 個需要補充的問題。",
      "enPrompt": "You are my personal admissions advisor. Remember my grade, target majors, strengths, weaknesses, key portfolio experiences, and progress. First check completeness and ask 5 follow-up questions.",
      "zhExample": "可把這段 Prompt 放在 ChatGPT 自訂指令，或存在筆記裡，每次準備備審或面試時使用。",
      "enExample": "Save this prompt in custom instructions or notes and reuse it for materials and interviews.",
      "zhPractice": "建立你的個人升學顧問 Prompt，並用它詢問：我目前最需要補強哪三件事？",
      "enPractice": "Create your advisor prompt and ask: What are the three things I need to improve most?",
      "zhQuiz": "個人 AI 升學顧問最重要的輸入是？答案：真實背景、目標科系與目前進度。",
      "enQuiz": "Most important input? Answer: real background, target majors, and progress.",
      "zhOutcome": "完成個人 AI 升學顧問 Prompt。",
      "enOutcome": "Complete a personal AI admissions advisor prompt."
    },
    {
      "zhTitle": "第10課：完成完整大學申請包",
      "enTitle": "Lesson 10: Complete the Full University Application Package",
      "zhConcept": "最後一課把前面成果整合成可以實際使用的申請包。申請包應呈現清楚故事：我想申請什麼、我為什麼適合、我有哪些證據、我未來想怎麼學。",
      "enConcept": "The final lesson integrates all outputs into a usable package that tells a clear story: what you apply for, why you fit, evidence, and future learning plan.",
      "zhPrompt": "請你擔任大學申請總顧問。請根據我完成的資料檢查申請包是否完整：\n1. 科系探索表\n2. 學習歷程素材庫\n3. 多元表現描述\n4. 學習歷程自述\n5. 科系專屬備審規劃\n6. 面試題庫\n7. 模擬面試紀錄\n8. 個人 AI 升學顧問 Prompt\n請用表格列出：已完成、需要修改、缺少資料、下一步。",
      "enPrompt": "Act as my final application consultant. Review my package: major table, portfolio database, activity descriptions, autobiography, major-specific plan, interview bank, mock records, and advisor prompt. Use a table: completed, revise, missing, next step.",
      "zhExample": "最後檢查時，可能會發現自述有內容但沒連結科系，或面試答案缺少具體例子。",
      "enExample": "Final review may reveal autobiography lacks major connection or interview answers lack examples.",
      "zhPractice": "建立資料夾「我的大學申請包」，放入本課程所有成果，並請 AI 做最後總檢查。",
      "enPractice": "Create a folder 'My University Application Package', add all outputs, and ask AI for final review.",
      "zhQuiz": "完整申請包最重要的是？答案：所有資料共同支持你的申請主軸。",
      "enQuiz": "Most important? Answer: all materials support your application theme.",
      "zhOutcome": "完成完整大學申請包。",
      "enOutcome": "Complete the full university application package."
    }
  ]
};


const TOOLS = [
  { name: "ChatGPT", url: "https://chatgpt.com", zh: "通用學習、寫作、整理、規劃、腦力激盪。", en: "General learning, writing, organization, planning, and brainstorming." },
  { name: "Claude", url: "https://claude.ai", zh: "長文件閱讀、寫作潤飾、報告架構與推理。", en: "Long document reading, writing refinement, report structure, and reasoning." },
  { name: "Gemini", url: "https://gemini.google.com", zh: "Google 生態系、多模態任務與日常協作。", en: "Google ecosystem, multimodal tasks, and daily collaboration." },
  { name: "NotebookLM", url: "https://notebooklm.google.com", zh: "上傳資料後問答、筆記整理、來源導向學習。", en: "Source-grounded Q&A, note organization, and document-based learning." },
  { name: "Perplexity", url: "https://www.perplexity.ai", zh: "網路研究、資料搜尋與來源探索。", en: "Web research, information search, and source discovery." },
  { name: "Elicit", url: "https://elicit.com", zh: "協助搜尋與整理研究文獻。", en: "Helps search and organize academic literature." },
  { name: "Canva", url: "https://www.canva.com", zh: "簡報、海報、社群圖片與視覺設計。", en: "Presentations, posters, social media visuals, and design." },
  { name: "Gamma", url: "https://gamma.app", zh: "快速生成簡報、提案與視覺化頁面。", en: "Quickly generate slides, proposals, and visual pages." },
  { name: "Runway", url: "https://runwayml.com", zh: "AI 影片生成與影像創作工具。", en: "AI video generation and creative media tools." },
  { name: "Pika", url: "https://pika.art", zh: "AI 影片生成與創意短片工具。", en: "AI video generation and creative short-video tools." },
  { name: "Leonardo AI", url: "https://leonardo.ai", zh: "AI 圖像生成與視覺素材製作。", en: "AI image generation and visual asset creation." },
  { name: "LinkedIn", url: "https://www.linkedin.com", zh: "個人品牌、職涯網絡與求職。", en: "Personal branding, career network, and job search." },
  { name: "Zapier", url: "https://zapier.com", zh: "低程式碼自動化工具，串接不同服務。", en: "Low-code automation tool for connecting different services." },
  { name: "Make", url: "https://www.make.com", zh: "視覺化自動化流程設計工具。", en: "Visual automation workflow design tool." }
];

const PROMPTS = [
  { cat: "Study", text: "Explain [concept] in three levels: for a 10-year-old, for a high school student, and for a university student. Give one example for each level." },
  { cat: "Report", text: "Help me create a report outline on [topic]. Include introduction, three main arguments, evidence to verify, counterarguments, and conclusion. Do not write the full essay." },
  { cat: "Resume", text: "Improve the following resume bullet points to emphasize action, results, and skills. Keep everything truthful and do not invent experience." },
  { cat: "Slides", text: "Turn [topic] into an 8-slide presentation. For each slide, provide a title, one key message, three bullet points, and a suggested visual." },
  { cat: "Email", text: "Write a polite and professional email to [recipient]. Context: [context]. Goal: [goal]. Tone: sincere, clear, and not too forceful." },
  { cat: "Research", text: "Compare the following sources in a table with columns: source, main argument, method, evidence, limitation, and relevance to my topic." },
  { cat: "Interview", text: "Act as an interviewer for [role/program]. Ask me one question at a time. After each answer, give feedback on clarity, structure, and persuasiveness." },
  { cat: "Planning", text: "Break this goal into a 7-day action plan. For each day, include task, estimated time, output, and success criteria." }
];
