const FREE_BOOTCAMP = [
  {
    "title": "AI 到底是什麼？",
    "goal": "用生活化方式理解 AI、生成式 AI 與 ChatGPT 的差異。",
    "concept": "AI 不是魔法，也不是完全取代人類的工具。AI 比較像是一個能根據大量資料產生文字、整理資訊、提出建議的助手。你給的問題越清楚，它越能幫你完成有用的事情。",
    "example": "同一個問題可以請 AI 用不同程度解釋。例如：請用小學生聽得懂的方式解釋 AI；請用高中生版本解釋；請用阿公阿嬤聽得懂的版本解釋。你會發現，好的 AI 使用者不是只問一次，而是會調整對象與目的。",
    "task": [
      "請 AI 分別用小學生、高中生、阿公阿嬤三種版本解釋 AI。",
      "比較三個版本哪一個最清楚。",
      "用自己的話整理一段 100 字 AI 理解筆記。"
    ],
    "prompt": "請你用三種方式解釋什麼是 AI：\n1. 小學生聽得懂的版本\n2. 高中生聽得懂的版本\n3. 阿公阿嬤聽得懂的版本\n最後請用表格比較三種說法的差異，並幫我整理 5 個重點。",
    "feedback": "請你擔任 AI 入門老師。以下是我的 AI 理解筆記：\n（貼上筆記）\n請幫我檢查：\n1. 是否說得清楚\n2. 是否有錯誤觀念\n3. 哪些地方太抽象\n4. 請幫我改成更容易讓同學理解的版本。",
    "output": "我的 AI 理解筆記",
    "quizItems": [
      {
        "q": "如果 AI 的解釋太難懂，最好的做法是？",
        "options": [
          "要求它用更簡單的對象與例子重新說明",
          "直接放棄",
          "把難懂答案全部背起來"
        ],
        "answer": 0,
        "explain": "指定對象和例子，可以讓 AI 重新調整說明方式。",
        "enQ": "If an AI explanation is too hard to understand, what should you do?",
        "enOptions": [
          "Ask it to re-explain with a simpler audience and examples",
          "Give up",
          "Memorize the difficult answer"
        ],
        "enExplain": "Specifying the audience and examples helps AI adjust its explanation."
      },
      {
        "q": "AI 最不應該被當成什麼？",
        "options": [
          "輔助整理工具",
          "永遠正確的權威答案",
          "練習與發想工具"
        ],
        "answer": 1,
        "explain": "AI 會出錯，重要內容仍需要人判斷與查證。",
        "enQ": "What should AI never be treated as?",
        "enOptions": [
          "A helper for organizing information",
          "An always-correct authority",
          "A practice and brainstorming tool"
        ],
        "enExplain": "AI can be wrong; important content still needs human judgment and verification."
      },
      {
        "q": "請 AI 用小學生、高中生、長輩三種版本解釋，是在練習什麼？",
        "options": [
          "讓 AI 產生更多字",
          "調整受眾與表達方式",
          "測試網路速度"
        ],
        "answer": 1,
        "explain": "不同受眾需要不同深度、語氣與例子。",
        "enQ": "Asking for elementary, high-school, and elder versions practices what?",
        "enOptions": [
          "Making AI write more words",
          "Adjusting audience and expression",
          "Testing internet speed"
        ],
        "enExplain": "Different audiences need different depth, tone, and examples."
      },
      {
        "q": "學完本課後，最重要的成果是？",
        "options": [
          "AI 理解筆記",
          "一份付費收據",
          "一篇完全由 AI 代寫的文章"
        ],
        "answer": 0,
        "explain": "本課目標是整理出你自己的 AI 理解筆記。",
        "enQ": "What is the most important outcome of this lesson?",
        "enOptions": [
          "An AI understanding note",
          "A paid receipt",
          "An article fully written by AI"
        ],
        "enExplain": "The goal is to create your own AI understanding note."
      },
      {
        "q": "使用 AI 的第一步通常是？",
        "options": [
          "先把需求說清楚",
          "先複製別人的答案",
          "先關掉電腦"
        ],
        "answer": 0,
        "explain": "清楚需求是 AI 有效回應的基礎。",
        "enQ": "What is usually the first step when using AI?",
        "enOptions": [
          "Clarify your need",
          "Copy someone else’s answer",
          "Turn off the computer"
        ],
        "enExplain": "Clear needs are the foundation of useful AI responses."
      }
    ],
    "caseStudy": "情境案例：小安第一次使用 AI，只問「AI 是什麼？」結果得到一大段看不懂的說明。後來他改問：「請用高中生聽得懂的方式，用三個生活例子解釋 AI，最後用一句話總結。」AI 的回答立刻變得清楚很多。這代表 AI 不是不能教，而是你要告訴它要用什麼程度、什麼格式來教。",
    "commonMistakes": [
      "把 AI 當成一定正確的老師",
      "只問一句很短的問題就期待完美答案",
      "沒有要求 AI 用自己聽得懂的方式說明"
    ],
    "notePrompt": "請寫下：1. 我以前怎麼理解 AI？2. 我現在覺得 AI 最像什麼工具？3. 我會如何向一位完全沒用過 AI 的同學解釋 AI？",
    "enTitle": "What is AI, really?",
    "enGoal": "Understand AI, generative AI, and ChatGPT in everyday language.",
    "enConcept": "AI is not magic, and it is not a full replacement for humans. Think of it as an assistant that can generate text, organize information, and suggest ideas from large amounts of data. The clearer your question, the more useful its help becomes.",
    "enExample": "Ask AI to explain the same topic at different levels—for example, for an elementary student, a high school student, and a grandparent. Good AI users do not ask only once; they adjust the audience and purpose.",
    "enTask": [
      "Ask AI to explain AI for an elementary student, a high school student, and a grandparent.",
      "Compare which version is clearest.",
      "Write a ~100-word AI understanding note in your own words."
    ],
    "enPrompt": "Please explain what AI is in three ways:\n1. An elementary-student version\n2. A high-school-student version\n3. A grandparent-friendly version\nThen compare the three explanations in a table and summarize 5 key points.",
    "enFeedback": "Act as an AI beginner teacher. Here is my AI understanding note:\n(paste note)\nPlease check:\n1. Is it clear?\n2. Are there misconceptions?\n3. Which parts are too abstract?\n4. Rewrite it so classmates can understand it more easily.",
    "enOutput": "My AI Understanding Note",
    "enCaseStudy": "Case: Xiao An first asked “What is AI?” and got a long, hard-to-read answer. He then asked: “Explain AI for a high school student with three everyday examples, and end with one summary sentence.” The answer became much clearer. AI can teach—you just need to tell it the level and format.",
    "enCommonMistakes": [
      "Treating AI as an always-correct teacher",
      "Asking one short question and expecting a perfect answer",
      "Not asking AI to explain in a way you can understand"
    ],
    "enNotePrompt": "Write: 1) How did I used to understand AI? 2) What kind of tool do I think AI is now? 3) How would I explain AI to a classmate who has never used it?"
  },
  {
    "title": "如何正確問 AI 問題？",
    "goal": "學會把模糊問題改成清楚、具體、可執行的 Prompt。",
    "concept": "很多人覺得 AI 不好用，其實是因為問題問得太模糊。好的 Prompt 通常包含：角色、任務、背景、格式、限制條件。你不需要背公式，但要知道怎麼把需求講清楚。",
    "example": "爛 Prompt：幫我寫報告。好 Prompt：請你擔任高中生報告教練，幫我規劃一份關於環境保護的 5 分鐘簡報，對象是高中同學，請分成開場、三個重點、結論，語氣自然。",
    "task": [
      "寫下一句你平常會問 AI 的模糊問題。",
      "把它改寫成包含角色、任務、背景、格式、限制的高品質 Prompt。",
      "請 AI 幫你評分並提出修改建議。"
    ],
    "prompt": "請你擔任 Prompt 教練。我要把下面這句模糊問題改成高品質 Prompt：\n原本問題：＿＿＿＿\n請幫我改寫成包含：角色、任務、背景、輸出格式、限制條件的版本，並說明為什麼改寫後比較好。",
    "feedback": "請你擔任 Prompt 評分老師。以下是我改寫後的 Prompt：\n（貼上 Prompt）\n請從清楚度、完整度、可執行度、限制條件、輸出格式五個面向各給 1-10 分，並告訴我如何修改到 90 分以上。",
    "output": "我的第一個高品質 Prompt",
    "quizItems": [
      {
        "q": "下列哪個 Prompt 最完整？",
        "options": [
          "幫我做簡報",
          "快點給我答案",
          "請擔任簡報教練，幫我為高中同學設計 5 分鐘環保簡報，輸出 3 頁架構與講稿"
        ],
        "answer": 2,
        "explain": "它包含角色、任務、對象、時間與輸出格式。",
        "enQ": "Which prompt is most complete?",
        "enOptions": [
          "Help me make a presentation",
          "Give me the answer quickly",
          "Act as a presentation coach and design a 5-minute eco presentation for high school classmates, with a 3-page structure and script"
        ],
        "enExplain": "It includes role, task, audience, time, and output format."
      },
      {
        "q": "好 Prompt 通常包含哪一組？",
        "options": [
          "角色、任務、背景、格式、限制",
          "心情、天氣、星座",
          "越短越好"
        ],
        "answer": 0,
        "explain": "這五個元素能讓 AI 更精準完成任務。",
        "enQ": "A good prompt usually includes which set?",
        "enOptions": [
          "Role, task, context, format, constraints",
          "Mood, weather, zodiac sign",
          "The shorter the better"
        ],
        "enExplain": "These five elements help AI complete the task more precisely."
      },
      {
        "q": "如果 AI 回答太空泛，最適合怎麼改？",
        "options": [
          "補充背景和格式要求",
          "刪掉問題",
          "完全照抄"
        ],
        "answer": 0,
        "explain": "補充條件能改善回答品質。",
        "enQ": "If AI’s answer is too vague, what should you change?",
        "enOptions": [
          "Add context and format requirements",
          "Delete the question",
          "Copy everything as-is"
        ],
        "enExplain": "Adding conditions improves answer quality."
      },
      {
        "q": "「請你擔任高中英文老師」屬於 Prompt 的哪個元素？",
        "options": [
          "角色",
          "限制",
          "輸出格式"
        ],
        "answer": 0,
        "explain": "這是在設定 AI 的回答角度。",
        "enQ": "“Act as a high-school English teacher” is which prompt element?",
        "enOptions": [
          "Role",
          "Constraint",
          "Output format"
        ],
        "enExplain": "It sets the angle of AI’s response."
      },
      {
        "q": "「請用表格列出」屬於什麼？",
        "options": [
          "輸出格式",
          "情緒表達",
          "登入方式"
        ],
        "answer": 0,
        "explain": "指定輸出格式能讓答案更好整理。",
        "enQ": "“List it in a table” is what?",
        "enOptions": [
          "Output format",
          "Emotional expression",
          "Sign-in method"
        ],
        "enExplain": "Specifying output format makes answers easier to organize."
      }
    ],
    "caseStudy": "情境案例：小美要做環保報告，她一開始只問「幫我寫報告」。AI 直接產出一篇很普通的文章。後來她改成：「請擔任高中報告教練，幫我規劃 5 分鐘環保簡報，對象是高中生，請輸出開場、三個重點、生活案例與結論。」這次 AI 給出的內容就能直接拿來改成簡報架構。",
    "commonMistakes": [
      "只說幫我寫，沒有說明要做什麼",
      "沒有指定角色",
      "沒有指定輸出格式",
      "沒有說明對象與限制"
    ],
    "notePrompt": "請寫下：1. 我最常問 AI 的模糊問題是什麼？2. 我如何把它改成好 Prompt？3. 我的 Prompt 還缺少哪個元素？",
    "enTitle": "How to ask AI the right questions?",
    "enGoal": "Rewrite vague questions into clear, specific, actionable prompts.",
    "enConcept": "Many people think AI is not useful because their questions are too vague. A good prompt usually includes role, task, context, format, and constraints. You do not need to memorize a formula, but you do need to state your need clearly.",
    "enExample": "Weak prompt: Help me write a report. Strong prompt: Act as a high-school presentation coach. Help me plan a 5-minute environmental protection presentation for classmates, with opening, three key points, and conclusion, in a natural tone.",
    "enTask": [
      "Write one vague question you usually ask AI.",
      "Rewrite it into a high-quality prompt with role, task, context, format, and constraints.",
      "Ask AI to score it and suggest improvements."
    ],
    "enPrompt": "Act as a prompt coach. I want to rewrite this vague question into a high-quality prompt:\nOriginal question: ______\nPlease rewrite it to include role, task, context, output format, and constraints, and explain why the rewrite is better.",
    "enFeedback": "Act as a prompt scoring teacher. Here is my rewritten prompt:\n(paste prompt)\nScore clarity, completeness, actionability, constraints, and output format from 1–10 each, and tell me how to reach 90+.",
    "enOutput": "My First High-Quality Prompt",
    "enCaseStudy": "Case: Xiao Mei needed an eco report and first asked “Help me write a report.” AI produced a generic article. She then asked for a 5-minute presentation structure for high school students with opening, three points, a life example, and conclusion. That output could become a real slide outline.",
    "enCommonMistakes": [
      "Saying “help me write” without stating what is needed",
      "Not specifying a role",
      "Not specifying output format",
      "Not stating audience and constraints"
    ],
    "enNotePrompt": "Write: 1) What vague AI question do I ask most often? 2) How did I rewrite it into a good prompt? 3) Which element is still missing?"
  },
  {
    "title": "AI 學習助手：做出讀書計畫",
    "goal": "學會用 AI 把考試內容拆成可執行的讀書計畫。",
    "concept": "AI 很適合幫你拆解學習任務。你可以告訴 AI：考試日期、科目、範圍、每天可用時間、最弱單元，它就能幫你排出讀書計畫。但計畫必須符合你的真實時間，不能太理想化。",
    "example": "如果你 7 天後要考英文，範圍是 3 課單字、2 篇閱讀、1 個文法單元，每天只有 40 分鐘，AI 可以幫你排出每天要讀什麼、怎麼複習、最後一天怎麼測驗。",
    "task": [
      "選一個最近要準備的考試或科目。",
      "列出考試日期、範圍、每天可用時間、最弱單元。",
      "請 AI 幫你產生 7 天讀書計畫。",
      "刪掉不符合你現實時間的安排。"
    ],
    "prompt": "請你擔任我的讀書教練。我要準備的科目是：＿＿＿＿\n考試日期：＿＿＿＿\n考試範圍：＿＿＿＿\n每天可用時間：＿＿＿＿\n我最弱的地方：＿＿＿＿\n請幫我排出 7 天讀書計畫，包含每天任務、複習方式、自我測驗方法。",
    "feedback": "請你擔任讀書計畫檢查老師。以下是我的 AI 讀書計畫：\n（貼上計畫）\n請檢查：\n1. 是否太理想化\n2. 每天任務是否清楚\n3. 是否有複習與測驗\n4. 哪一天可能排太滿\n5. 請幫我改成更容易執行的版本。",
    "output": "我的 AI 讀書計畫",
    "quizItems": [
      {
        "q": "請 AI 排讀書計畫時，哪個資訊最重要？",
        "options": [
          "考試日期與範圍",
          "今天午餐吃什麼",
          "朋友的星座"
        ],
        "answer": 0,
        "explain": "日期與範圍決定讀書計畫的密度和順序。",
        "enQ": "When asking AI for a study plan, which information matters most?",
        "enOptions": [
          "Exam date and scope",
          "What you had for lunch",
          "A friend’s zodiac sign"
        ],
        "enExplain": "Date and scope determine density and order."
      },
      {
        "q": "AI 排出的讀書計畫太滿時，你應該？",
        "options": [
          "照做到崩潰",
          "根據真實時間刪減調整",
          "直接放棄讀書"
        ],
        "answer": 1,
        "explain": "計畫必須符合現實才有用。",
        "enQ": "If AI’s study plan is too packed, you should?",
        "enOptions": [
          "Force yourself until burnout",
          "Cut and adjust based on real time",
          "Quit studying"
        ],
        "enExplain": "A plan only works if it fits reality."
      },
      {
        "q": "好的讀書計畫應該包含？",
        "options": [
          "每天任務、複習方式、自我測驗",
          "只有一句加油",
          "只有科目名稱"
        ],
        "answer": 0,
        "explain": "可執行計畫要包含任務與檢查方式。",
        "enQ": "A good study plan should include?",
        "enOptions": [
          "Daily tasks, review methods, and self-tests",
          "Only a cheer-up sentence",
          "Only the subject name"
        ],
        "enExplain": "Executable plans need tasks and checkpoints."
      },
      {
        "q": "AI 在讀書中最適合扮演什麼角色？",
        "options": [
          "讀書教練",
          "替你考試的人",
          "改變考試日期的人"
        ],
        "answer": 0,
        "explain": "AI 可以協助規劃與練習，但不能替你考試。",
        "enQ": "What role should AI play in studying?",
        "enOptions": [
          "Study coach",
          "Someone who takes the exam for you",
          "Someone who changes the exam date"
        ],
        "enExplain": "AI can help plan and practice, but cannot take the exam for you."
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 讀書計畫",
          "遊戲攻略",
          "購物清單"
        ],
        "answer": 0,
        "explain": "本課要產出一份可執行的 AI 讀書計畫。",
        "enQ": "What is this lesson’s output?",
        "enOptions": [
          "An AI study plan",
          "A game walkthrough",
          "A shopping list"
        ],
        "enExplain": "You should produce an executable AI study plan."
      }
    ],
    "caseStudy": "情境案例：阿哲段考前很焦慮，只跟 AI 說「幫我讀書」。AI 給出很籠統的建議。後來他補上考試日期、範圍、每天能讀 40 分鐘、最弱的是文法，AI 就幫他排出 7 天計畫。阿哲再把太滿的部分刪掉，變成真正能執行的讀書表。",
    "commonMistakes": [
      "沒有告訴 AI 考試日期",
      "沒有提供可用時間",
      "沒有說明弱點",
      "完全照 AI 計畫不做現實調整"
    ],
    "notePrompt": "請寫下：1. 我最近要準備哪個科目？2. 我每天真正能用多少時間？3. AI 幫我排的計畫哪裡需要改得更實際？",
    "enTitle": "AI study assistant: build a study plan",
    "enGoal": "Use AI to break exam content into an actionable study plan.",
    "enConcept": "AI is great at breaking down learning tasks. Tell it the exam date, subject, scope, daily available time, and weakest units, and it can draft a study plan. The plan must match your real schedule—not an idealized one.",
    "enExample": "If your English exam is in 7 days, covering 3 vocabulary lessons, 2 readings, and 1 grammar unit, with only 40 minutes a day, AI can schedule what to study, how to review, and how to self-test on the last day.",
    "enTask": [
      "Choose an upcoming exam or subject.",
      "List exam date, scope, daily available time, and weakest unit.",
      "Ask AI for a 7-day study plan.",
      "Remove anything that does not fit your real schedule."
    ],
    "enPrompt": "Act as my study coach. Subject: ______\nExam date: ______\nExam scope: ______\nDaily available time: ______\nMy weakest area: ______\nCreate a 7-day study plan with daily tasks, review methods, and self-tests.",
    "enFeedback": "Act as a study-plan reviewer. Here is my AI study plan:\n(paste plan)\nPlease check:\n1. Is it too idealistic?\n2. Are daily tasks clear?\n3. Does it include review and testing?\n4. Which day is overloaded?\n5. Rewrite it into a more executable version.",
    "enOutput": "My AI Study Plan",
    "enCaseStudy": "Case: A-Zhe felt anxious before midterms and only said “help me study.” AI gave vague advice. After he added exam date, scope, 40 minutes a day, and grammar as his weak point, AI produced a 7-day plan. He then deleted overloaded parts and made it usable.",
    "enCommonMistakes": [
      "Not telling AI the exam date",
      "Not providing available time",
      "Not stating weak points",
      "Following AI’s plan without adjusting to reality"
    ],
    "enNotePrompt": "Write: 1) Which subject am I preparing for? 2) How much real daily time do I have? 3) Which parts of AI’s plan need to become more realistic?"
  },
  {
    "title": "AI 整理筆記：把內容變成重點",
    "goal": "學會請 AI 幫你整理課文、影片或文章重點。",
    "concept": "AI 可以把長內容整理成重點、表格、心智圖文字版、考前複習版。但你要記得：AI 可能會漏掉或理解錯，所以你需要拿原文對照檢查。",
    "example": "把一篇課文貼給 AI，請它整理成：5 個重點、3 個容易考的問題、10 個關鍵詞、考前 3 分鐘複習版。這樣比單純摘要更適合學習。",
    "task": [
      "選一段課文、筆記或文章。",
      "請 AI 整理成重點、關鍵詞、考題與考前複習版。",
      "自己檢查 AI 是否漏掉重要內容。",
      "整理出一份自己的 AI 重點筆記。"
    ],
    "prompt": "請你擔任我的筆記整理助手。以下是我要整理的內容：\n（貼上內容）\n請幫我整理成：\n1. 5 個核心重點\n2. 10 個關鍵詞\n3. 3 題可能考題\n4. 考前 3 分鐘複習版\n5. 我需要特別注意的易錯觀念",
    "feedback": "請你擔任筆記檢查老師。以下是我的 AI 重點筆記：\n（貼上筆記）\n請檢查：\n1. 重點是否清楚\n2. 是否太長或太短\n3. 是否適合考前複習\n4. 有沒有可能漏掉的重要內容\n5. 請幫我整理成更適合背誦的版本。",
    "output": "我的 AI 重點筆記",
    "quizItems": [
      {
        "q": "AI 整理筆記時，最適合要求哪種格式？",
        "options": [
          "重點、關鍵詞、考題、複習版",
          "一大段沒有分段的文字",
          "隨便回答"
        ],
        "answer": 0,
        "explain": "這些格式更符合學習與複習。",
        "enQ": "When asking AI to organize notes, which format is best?",
        "enOptions": [
          "Key points, keywords, exam questions, review version",
          "One long unseparated block of text",
          "Anything random"
        ],
        "enExplain": "These formats fit learning and review better."
      },
      {
        "q": "AI 筆記完成後，為什麼要對照原文？",
        "options": [
          "避免漏掉或誤解重點",
          "讓字變多",
          "讓 AI 生氣"
        ],
        "answer": 0,
        "explain": "AI 可能漏掉或誤解內容。",
        "enQ": "Why check AI notes against the original?",
        "enOptions": [
          "To avoid missing or misreading key points",
          "To make more words",
          "To make AI angry"
        ],
        "enExplain": "AI may omit or misunderstand content."
      },
      {
        "q": "考前 3 分鐘複習版應該？",
        "options": [
          "短、清楚、抓重點",
          "越長越好",
          "完全沒有重點"
        ],
        "answer": 0,
        "explain": "考前複習需要高密度重點。",
        "enQ": "A 3-minute pre-exam review should be?",
        "enOptions": [
          "Short, clear, and focused",
          "As long as possible",
          "Without any key points"
        ],
        "enExplain": "Pre-exam review needs high-density key points."
      },
      {
        "q": "AI 筆記最適合用來？",
        "options": [
          "輔助整理與複習",
          "取代所有上課",
          "保證考滿分"
        ],
        "answer": 0,
        "explain": "AI 是輔助工具，不是保證成績的工具。",
        "enQ": "AI notes are best used for?",
        "enOptions": [
          "Helping organize and review",
          "Replacing all classes",
          "Guaranteeing a perfect score"
        ],
        "enExplain": "AI is a helper, not a grade guarantee."
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 重點筆記",
          "履歷表",
          "旅遊計畫"
        ],
        "answer": 0,
        "explain": "本課要完成自己的 AI 重點筆記。",
        "enQ": "What is this lesson’s output?",
        "enOptions": [
          "AI key-point notes",
          "A resume",
          "A travel plan"
        ],
        "enExplain": "You should finish your own AI key-point notes."
      }
    ],
    "caseStudy": "情境案例：小萱把一篇很長的歷史課文貼給 AI，只要求摘要，結果得到一段普通文字。後來她要求 AI 整理成 5 個重點、10 個關鍵詞、3 題可能考題、考前 3 分鐘複習版，筆記立刻變得更適合考前複習。",
    "commonMistakes": [
      "只要求摘要，沒有指定學習用途",
      "沒有要求可能考題",
      "沒有檢查 AI 是否漏掉原文重點",
      "把 AI 筆記當成唯一資料來源"
    ],
    "notePrompt": "請寫下：1. 我整理的是哪一份資料？2. AI 幫我整理出的三個重點是什麼？3. 我檢查後發現哪裡需要修正？",
    "enTitle": "AI note organizer: turn content into key points",
    "enGoal": "Ask AI to organize key points from textbooks, videos, or articles.",
    "enConcept": "AI can turn long content into key points, tables, text mind maps, and exam-review versions. Remember: AI may miss or misread details, so always check against the original.",
    "enExample": "Paste a passage and ask for: 5 key points, 3 likely exam questions, 10 keywords, and a 3-minute pre-exam review version. That is more useful for learning than a plain summary.",
    "enTask": [
      "Choose a textbook passage, notes, or article.",
      "Ask AI for key points, keywords, exam questions, and a pre-exam review version.",
      "Check whether AI missed important content.",
      "Create your own AI key-point notes."
    ],
    "enPrompt": "Act as my note-organizing assistant. Here is the content:\n(paste content)\nPlease organize into:\n1. 5 core points\n2. 10 keywords\n3. 3 possible exam questions\n4. A 3-minute pre-exam review version\n5. Easy-to-miss misconceptions I should watch for",
    "enFeedback": "Act as a note reviewer. Here are my AI key-point notes:\n(paste notes)\nPlease check:\n1. Are the points clear?\n2. Too long or too short?\n3. Useful for pre-exam review?\n4. Any likely missing content?\n5. Rewrite into a more memorization-friendly version.",
    "enOutput": "My AI Key-Point Notes",
    "enCaseStudy": "Case: Xiao Xuan pasted a long history passage and only asked for a summary, getting ordinary text. After requesting 5 points, 10 keywords, 3 exam questions, and a 3-minute review version, the notes became much more useful for exam prep.",
    "enCommonMistakes": [
      "Asking only for a summary without a learning purpose",
      "Not requesting possible exam questions",
      "Not checking whether AI missed original key points",
      "Treating AI notes as the only source"
    ],
    "enNotePrompt": "Write: 1) What material did I organize? 2) What three key points did AI produce? 3) After checking, what needed correction?"
  },
  {
    "title": "AI 簡報助手：做出 3 頁簡報草稿",
    "goal": "學會用 AI 建立簡報架構，而不是直接複製一大段文字。",
    "concept": "好的簡報不是把文章貼到投影片上，而是有清楚主題、重點、例子和結論。AI 可以幫你建立簡報架構、每頁標題、重點句與講稿。",
    "example": "主題：我的夢想科系。3 頁簡報可以是：第 1 頁我為什麼對這個科系有興趣；第 2 頁我做過哪些相關準備；第 3 頁我未來想學什麼。",
    "task": [
      "選一個簡報主題，例如我的夢想科系。",
      "請 AI 幫你規劃 3 頁簡報。",
      "每頁只保留 3 個重點。",
      "請 AI 幫你寫 60 秒講稿。"
    ],
    "prompt": "請你擔任簡報教練。我的簡報主題是：＿＿＿＿\n對象是：＿＿＿＿\n時間是：＿＿＿＿分鐘\n請幫我設計 3 頁簡報，每頁包含：標題、3 個重點、可以放的圖片建議、講稿。",
    "feedback": "請你擔任簡報評審。以下是我的 3 頁簡報草稿：\n（貼上內容）\n請檢查：\n1. 主題是否清楚\n2. 每頁是否太多字\n3. 順序是否合理\n4. 哪一頁最弱\n5. 請幫我改成更適合上台報告的版本。",
    "output": "我的第一份 AI 簡報草稿",
    "quizItems": [
      {
        "q": "簡報最先要清楚的是？",
        "options": [
          "主題與邏輯",
          "動畫數量",
          "字體有多花"
        ],
        "answer": 0,
        "explain": "簡報先有清楚邏輯，再談設計。",
        "enQ": "What must a presentation clarify first?",
        "enOptions": [
          "Theme and logic",
          "Number of animations",
          "How fancy the fonts are"
        ],
        "enExplain": "Clear logic comes before design."
      },
      {
        "q": "一頁簡報比較適合？",
        "options": [
          "一個核心訊息與少量重點",
          "整篇文章",
          "完全沒有標題"
        ],
        "answer": 0,
        "explain": "每頁只放一個主訊息更容易理解。",
        "enQ": "One slide is better with?",
        "enOptions": [
          "One core message and a few points",
          "A full article",
          "No title at all"
        ],
        "enExplain": "One main message per page is easier to understand."
      },
      {
        "q": "AI 可以幫簡報做什麼？",
        "options": [
          "架構、重點、圖片建議、講稿",
          "替你上台",
          "保證觀眾都喜歡"
        ],
        "answer": 0,
        "explain": "AI 適合協助規劃簡報內容與講稿。",
        "enQ": "What can AI help with in presentations?",
        "enOptions": [
          "Structure, key points, image ideas, speaking notes",
          "Presenting for you on stage",
          "Guaranteeing the audience likes it"
        ],
        "enExplain": "AI is good at planning content and scripts."
      },
      {
        "q": "簡報講稿的用途是？",
        "options": [
          "幫助上台表達",
          "塞滿投影片",
          "取代練習"
        ],
        "answer": 0,
        "explain": "講稿幫你練習表達，不是拿來塞進投影片。",
        "enQ": "What are speaking notes for?",
        "enOptions": [
          "Helping you present",
          "Filling the slides",
          "Replacing practice"
        ],
        "enExplain": "Scripts support delivery practice, not slide clutter."
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 簡報草稿",
          "大學申請包",
          "餐廳菜單"
        ],
        "answer": 0,
        "explain": "本課要產出 3 頁 AI 簡報草稿。",
        "enQ": "What is this lesson’s output?",
        "enOptions": [
          "An AI presentation draft",
          "A university application kit",
          "A restaurant menu"
        ],
        "enExplain": "You should produce a 3-page AI presentation draft."
      }
    ],
    "caseStudy": "情境案例：小宇做簡報時，把整篇報告塞進投影片，結果每頁都太滿。後來他請 AI 先規劃 3 頁簡報，每頁只放一個主訊息和三個重點，再請 AI 產生 60 秒講稿，簡報變得更清楚。",
    "commonMistakes": [
      "把文章直接貼到投影片",
      "每頁塞太多字",
      "沒有先確認簡報對象與時間",
      "只追求漂亮，忽略邏輯"
    ],
    "notePrompt": "請寫下：1. 我的簡報主題是什麼？2. 每頁核心訊息是什麼？3. 哪一頁最需要刪減文字？",
    "enTitle": "AI presentation helper: draft a 3-page deck",
    "enGoal": "Use AI to build presentation structure—not dump long text onto slides.",
    "enConcept": "A good presentation has a clear theme, key points, examples, and conclusion. AI can help with structure, page titles, key sentences, and speaking notes.",
    "enExample": "Theme: my dream major. A 3-page deck can be: Page 1 why I’m interested; Page 2 preparation I’ve done; Page 3 what I want to learn next.",
    "enTask": [
      "Choose a presentation topic, such as my dream major.",
      "Ask AI to plan a 3-page presentation.",
      "Keep only 3 key points per page.",
      "Ask AI for a 60-second speaking script."
    ],
    "enPrompt": "Act as a presentation coach. My topic is: ______\nAudience: ______\nTime: ______ minutes\nDesign a 3-page presentation. For each page include: title, 3 key points, image suggestions, and speaking notes.",
    "enFeedback": "Act as a presentation reviewer. Here is my 3-page draft:\n(paste content)\nPlease check:\n1. Is the theme clear?\n2. Is there too much text per page?\n3. Is the order logical?\n4. Which page is weakest?\n5. Rewrite it for a live presentation.",
    "enOutput": "My First AI Presentation Draft",
    "enCaseStudy": "Case: Xiao Yu stuffed a whole report into slides and overcrowded every page. After asking AI to plan 3 pages with one main message and three points each, then a 60-second script, the presentation became clearer.",
    "enCommonMistakes": [
      "Pasting articles directly onto slides",
      "Cramming too much text on each page",
      "Not confirming audience and time first",
      "Chasing looks while ignoring logic"
    ],
    "enNotePrompt": "Write: 1) What is my presentation theme? 2) What is each page’s core message? 3) Which page needs the most text cuts?"
  },
  {
    "title": "AI 職涯探索：找到可能方向",
    "goal": "用 AI 初步探索興趣、科系與職業方向。",
    "concept": "AI 不能替你決定未來，但可以幫你整理可能方向。你可以輸入興趣、擅長科目、喜歡的活動、討厭的事情，請 AI 幫你分析可能適合的科系與職業。",
    "example": "如果你喜歡和人互動、擅長國文、常參加服務活動，AI 可能會建議教育、心理、社工、傳播等方向。但你還要自己查課程內容與工作現場。",
    "task": [
      "填寫你的興趣、能力、喜歡科目與不喜歡的事情。",
      "請 AI 推薦 5 個可能科系與 5 個可能職業。",
      "請 AI 分析每個方向需要的能力。",
      "選出 3 個你想進一步了解的方向。"
    ],
    "prompt": "請你擔任生涯探索顧問。我的興趣是：＿＿＿＿\n我擅長的科目是：＿＿＿＿\n我喜歡的活動是：＿＿＿＿\n我不喜歡的事情是：＿＿＿＿\n請推薦 5 個可能科系與 5 個可能職業，並說明適合原因、需要能力、我下一步要查什麼。",
    "feedback": "請你擔任生涯探索老師。以下是我的職涯探索報告：\n（貼上內容）\n請檢查：\n1. 推薦方向是否合理\n2. 哪些方向只是表面適合\n3. 我還需要查哪些資料\n4. 請幫我選出最值得深入了解的 3 個方向。",
    "output": "我的職涯探索報告",
    "quizItems": [
      {
        "q": "職涯探索時，AI 最需要知道什麼？",
        "options": [
          "你的興趣、能力、科目與偏好",
          "你的鞋子尺寸",
          "今天幾點睡"
        ],
        "answer": 0,
        "explain": "個人背景越清楚，建議越貼近。",
        "enQ": "What does AI need most for career exploration?",
        "enOptions": [
          "Your interests, strengths, subjects, and preferences",
          "Your shoe size",
          "What time you slept today"
        ],
        "enExplain": "Clearer personal context leads to better suggestions."
      },
      {
        "q": "AI 推薦科系後，你應該？",
        "options": [
          "查課程與職業內容",
          "直接照單全收",
          "完全不理"
        ],
        "answer": 0,
        "explain": "AI 是探索起點，不是最後答案。",
        "enQ": "After AI recommends majors, you should?",
        "enOptions": [
          "Research courses and career content",
          "Accept everything blindly",
          "Ignore everything"
        ],
        "enExplain": "AI is a starting point, not the final answer."
      },
      {
        "q": "哪種推薦比較可靠？",
        "options": [
          "有說明適合原因與需要能力",
          "只列熱門科系",
          "只說你一定適合"
        ],
        "answer": 0,
        "explain": "有理由和能力分析才有參考價值。",
        "enQ": "Which recommendation is more reliable?",
        "enOptions": [
          "One with reasons and required skills",
          "Only listing popular majors",
          "Saying you are definitely a fit"
        ],
        "enExplain": "Reasons and skill analysis make advice useful."
      },
      {
        "q": "職涯探索最重要的是？",
        "options": [
          "形成下一步查證方向",
          "立刻決定一輩子",
          "只看薪水"
        ],
        "answer": 0,
        "explain": "探索是逐步查證與理解。",
        "enQ": "What matters most in career exploration?",
        "enOptions": [
          "Forming next verification steps",
          "Deciding your whole life immediately",
          "Only looking at salary"
        ],
        "enExplain": "Exploration is gradual research and understanding."
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "職涯探索報告",
          "段考成績單",
          "購物清單"
        ],
        "answer": 0,
        "explain": "本課要完成一份職涯探索報告。",
        "enQ": "What is this lesson’s output?",
        "enOptions": [
          "A career exploration report",
          "A midterm score report",
          "A shopping list"
        ],
        "enExplain": "You should complete a career exploration report."
      }
    ],
    "caseStudy": "情境案例：小庭不知道未來想讀什麼，只說「我不知道要做什麼」。AI 回答很籠統。後來她提供興趣、擅長科目、喜歡活動、不喜歡的事，AI 幫她整理出可能科系、職業、需要能力與下一步查證方向。",
    "commonMistakes": [
      "只問 AI 我適合什麼，沒有提供背景",
      "把 AI 推薦當成最終答案",
      "沒有查科系課程內容",
      "只看職業名稱不看實際工作內容"
    ],
    "notePrompt": "請寫下：1. AI 推薦我的三個方向是什麼？2. 哪個方向我最想深入了解？3. 我下一步要查哪些資料？",
    "enTitle": "AI career exploration: find possible directions",
    "enGoal": "Use AI to explore interests, majors, and career directions at a first-pass level.",
    "enConcept": "AI cannot decide your future, but it can organize possible directions. Share interests, strong subjects, preferred activities, and things you dislike, then ask for possible majors and careers.",
    "enExample": "If you like interacting with people, are strong in language arts, and often join service activities, AI may suggest education, psychology, social work, or communication. You still need to research courses and real job contexts.",
    "enTask": [
      "Fill in your interests, strengths, preferred subjects, and dislikes.",
      "Ask AI for 5 possible majors and 5 possible careers.",
      "Ask AI what skills each direction needs.",
      "Choose 3 directions to explore further."
    ],
    "enPrompt": "Act as a career exploration advisor. My interests: ______\nSubjects I’m good at: ______\nActivities I enjoy: ______\nThings I dislike: ______\nRecommend 5 possible majors and 5 possible careers, with reasons, required skills, and what I should research next.",
    "enFeedback": "Act as a career exploration teacher. Here is my career exploration report:\n(paste content)\nPlease check:\n1. Are the recommendations reasonable?\n2. Which directions only look suitable on the surface?\n3. What else should I research?\n4. Help me pick the top 3 directions worth deeper exploration.",
    "enOutput": "My Career Exploration Report",
    "enCaseStudy": "Case: Xiao Ting only said “I don’t know what to do,” so AI stayed vague. After she shared interests, strengths, activities, and dislikes, AI organized possible majors, careers, required skills, and next research steps.",
    "enCommonMistakes": [
      "Asking what you are suited for without sharing context",
      "Treating AI recommendations as the final answer",
      "Not researching major course content",
      "Looking only at job titles, not actual work"
    ],
    "enNotePrompt": "Write: 1) What three directions did AI recommend? 2) Which one do I most want to explore? 3) What should I research next?"
  },
  {
    "title": "AI 模擬面試：練習回答問題",
    "goal": "學會用 AI 模擬面試，訓練表達、邏輯與具體例子。",
    "concept": "面試練習不是背答案，而是練習把自己的經驗講清楚。AI 可以扮演教授、老師或企業主管，一次問一題，等你回答後再給回饋。",
    "example": "AI 問：請你自我介紹。你回答後，AI 可以從清楚度、具體性、邏輯、說服力評分，並指出哪一句最加分、哪一句要修改。",
    "task": [
      "選擇一個面試情境：大學教授、社團幹部、企業主管。",
      "請 AI 一次問你一題。",
      "至少完成 3 題模擬回答。",
      "整理 AI 給你的改進建議。"
    ],
    "prompt": "請你擔任面試官，情境是：＿＿＿＿\n請一次只問我一題。等我回答後，請從清楚度、具體性、邏輯、說服力四個面向給我 1-10 分，並給我修改建議。請先問第一題。",
    "feedback": "請你擔任面試教練。以下是我的面試回答與 AI 回饋：\n（貼上內容）\n請幫我整理：\n1. 我最常出現的問題\n2. 我最有說服力的一句話\n3. 我需要補強的例子\n4. 下一次模擬面試要練習什麼。",
    "output": "我的 AI 面試紀錄",
    "quizItems": [
      {
        "q": "面試回答最需要避免？",
        "options": [
          "空泛口號",
          "具體例子",
          "清楚結構"
        ],
        "answer": 0,
        "explain": "沒有例子的口號不具說服力。",
        "enQ": "What should interview answers avoid most?",
        "enOptions": [
          "Vague slogans",
          "Concrete examples",
          "Clear structure"
        ],
        "enExplain": "Slogans without examples are not persuasive."
      },
      {
        "q": "AI 模擬面試最好怎麼進行？",
        "options": [
          "一次問一題並給回饋",
          "一次丟 50 題不回答",
          "只看題目不練習"
        ],
        "answer": 0,
        "explain": "一次一題更接近真實練習。",
        "enQ": "How should AI mock interviews work best?",
        "enOptions": [
          "One question at a time with feedback",
          "Dump 50 questions without answering",
          "Only read questions without practicing"
        ],
        "enExplain": "One question at a time is closer to real practice."
      },
      {
        "q": "好的面試回答通常包含？",
        "options": [
          "重點、例子、反思",
          "只有形容詞",
          "完全背稿"
        ],
        "answer": 0,
        "explain": "具體例子和反思能提升說服力。",
        "enQ": "A good interview answer usually includes?",
        "enOptions": [
          "Key points, examples, and reflection",
          "Only adjectives",
          "Fully memorized scripts only"
        ],
        "enExplain": "Concrete examples and reflection improve persuasiveness."
      },
      {
        "q": "AI 回饋後應該？",
        "options": [
          "修改並重練",
          "完全忽略",
          "刪掉問題"
        ],
        "answer": 0,
        "explain": "回饋的價值在於下一次回答變好。",
        "enQ": "After AI feedback, you should?",
        "enOptions": [
          "Revise and practice again",
          "Ignore it completely",
          "Delete the question"
        ],
        "enExplain": "Feedback matters when the next answer improves."
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 面試紀錄",
          "旅遊照片",
          "課表"
        ],
        "answer": 0,
        "explain": "本課要產出面試練習紀錄。",
        "enQ": "What is this lesson’s output?",
        "enOptions": [
          "An AI interview log",
          "Travel photos",
          "A class schedule"
        ],
        "enExplain": "You should produce an interview practice log."
      }
    ],
    "caseStudy": "情境案例：小恩面試自我介紹時只說「我很認真、很負責」。AI 面試官提醒她太空泛，請她補上具體例子。她改成說明自己曾負責社團活動排程、遇到延誤如何協調、最後活動順利完成，回答就變得有說服力。",
    "commonMistakes": [
      "只背標準答案",
      "沒有具體例子",
      "回答太長沒有重點",
      "沒有根據回饋修正"
    ],
    "notePrompt": "請寫下：1. 我最常被 AI 指出的面試問題是什麼？2. 我可以補上的具體例子是什麼？3. 下一次我要練哪一題？",
    "enTitle": "AI mock interview: practice answering questions",
    "enGoal": "Use AI for mock interviews to train clarity, logic, and concrete examples.",
    "enConcept": "Interview practice is not about memorizing answers; it is about explaining your experience clearly. AI can act as a professor, teacher, or manager—ask one question at a time, then give feedback after you answer.",
    "enExample": "AI asks for a self-introduction. After you answer, it can score clarity, concreteness, logic, and persuasiveness, and point out the strongest and weakest sentences.",
    "enTask": [
      "Choose an interview scenario: university professor, club officer, or hiring manager.",
      "Ask AI to ask one question at a time.",
      "Complete at least 3 mock answers.",
      "Organize AI’s improvement suggestions."
    ],
    "enPrompt": "Act as an interviewer. Scenario: ______\nAsk me only one question at a time. After I answer, score clarity, concreteness, logic, and persuasiveness from 1–10 and give revision advice. Start with question 1.",
    "enFeedback": "Act as an interview coach. Here are my answers and AI feedback:\n(paste content)\nPlease summarize:\n1. My most common problems\n2. My most persuasive sentence\n3. Examples I need to strengthen\n4. What to practice in the next mock interview",
    "enOutput": "My AI Interview Log",
    "enCaseStudy": "Case: Xiao En’s self-introduction only said “I’m diligent and responsible.” The AI interviewer said it was too vague and asked for examples. She revised with a club scheduling story, how she handled delays, and the successful outcome—much more persuasive.",
    "enCommonMistakes": [
      "Only memorizing model answers",
      "No concrete examples",
      "Answers that are long and unfocused",
      "Not revising after feedback"
    ],
    "enNotePrompt": "Write: 1) What interview issue does AI point out most often? 2) What concrete example can I add? 3) Which question will I practice next?"
  },
  {
    "title": "AI 專案挑戰：完成一件真實事情",
    "goal": "把前 7 課能力整合，用 AI 完成一個小專案。",
    "concept": "真正會用 AI，不是只會問問題，而是能用 AI 完成一件具體成果。你可以做簡報、讀書計畫、活動企劃、旅行規劃、職涯報告或學習筆記。",
    "example": "專案主題：規劃一場班級讀書會。AI 可以幫你設計流程、分工、時間表、宣傳文案、活動後回饋表。最後你會得到完整企劃。",
    "task": [
      "選一個你真的想完成的小專案。",
      "請 AI 幫你拆解步驟與成果格式。",
      "完成第一版專案成果。",
      "請 AI 給你修改建議，整理成最終版。"
    ],
    "prompt": "請你擔任我的 AI 專案教練。我想完成的小專案是：＿＿＿＿\n請幫我拆解：\n1. 專案目標\n2. 需要完成的步驟\n3. 最終成果格式\n4. 時間安排\n5. 第一版草稿應該長什麼樣子\n請一步一步帶我完成。",
    "feedback": "請你擔任專案評審。以下是我的 AI 專案成果：\n（貼上成果）\n請檢查：\n1. 目標是否清楚\n2. 成果是否完整\n3. 是否真的能執行\n4. 哪些地方需要補強\n5. 請給我一版最終修改清單。",
    "output": "我的 AI 專案成果",
    "quizItems": [
      {
        "q": "AI 專案挑戰最重要的是？",
        "options": [
          "完成一件具體成果",
          "只看教學",
          "讓 AI 捏造內容"
        ],
        "answer": 0,
        "explain": "專案要有可展示的實際成果。",
        "enQ": "What matters most in the AI project challenge?",
        "enOptions": [
          "Finishing one concrete deliverable",
          "Only watching tutorials",
          "Letting AI invent content"
        ],
        "enExplain": "A project needs a real, showable output."
      },
      {
        "q": "專案 Prompt 應包含？",
        "options": [
          "目標、對象、步驟、成果格式、時間限制",
          "只有我想做專案",
          "沒有任何限制"
        ],
        "answer": 0,
        "explain": "清楚條件能讓 AI 協助拆解任務。",
        "enQ": "A project prompt should include?",
        "enOptions": [
          "Goal, audience, steps, deliverable format, time limit",
          "Only “I want to do a project”",
          "No constraints at all"
        ],
        "enExplain": "Clear conditions help AI break down the work."
      },
      {
        "q": "第一版成果完成後應該？",
        "options": [
          "請 AI 評審並修改",
          "立刻停止",
          "完全不檢查"
        ],
        "answer": 0,
        "explain": "修改是讓專案變完整的關鍵。",
        "enQ": "After finishing the first version, you should?",
        "enOptions": [
          "Ask AI to review and revise",
          "Stop immediately",
          "Skip all checking"
        ],
        "enExplain": "Revision is how a project becomes complete."
      },
      {
        "q": "好的 AI 專案成果應該？",
        "options": [
          "能被別人理解與執行",
          "只有標題",
          "完全沒有目的"
        ],
        "answer": 0,
        "explain": "成果要有清楚目標和可執行內容。",
        "enQ": "A good AI project output should be?",
        "enOptions": [
          "Understandable and executable by others",
          "Only a title",
          "Without any purpose"
        ],
        "enExplain": "Outputs need a clear goal and actionable content."
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 專案成果",
          "考卷答案",
          "帳號密碼"
        ],
        "answer": 0,
        "explain": "本課整合前面能力，完成一個 AI 小專案。",
        "enQ": "What is this lesson’s output?",
        "enOptions": [
          "An AI project output",
          "Exam answers",
          "Account passwords"
        ],
        "enExplain": "This lesson integrates earlier skills into one AI mini-project."
      }
    ],
    "caseStudy": "情境案例：小杰想用 AI 做一個真實專案，但只說「我要做企劃」。AI 回答很普通。後來他明確寫出專案目標、使用對象、時間限制與成果格式，AI 就能幫他拆解步驟、做第一版草稿，再進行修改。",
    "commonMistakes": [
      "沒有定義專案目標",
      "沒有說明最後成果格式",
      "只問一次就停止",
      "沒有根據 AI 回饋修改"
    ],
    "notePrompt": "請寫下：1. 我的專案目標是什麼？2. 最終成果要長什麼樣？3. AI 給我的三個修改建議是什麼？",
    "enTitle": "AI project challenge: finish one real thing",
    "enGoal": "Integrate the first 7 lessons and use AI to complete a small real project.",
    "enConcept": "Truly using AI means finishing a concrete deliverable—not only asking questions. You might create a presentation, study plan, event proposal, travel plan, career report, or study notes.",
    "enExample": "Project: plan a class study circle. AI can help with flow, roles, timeline, promo copy, and post-event feedback form. You end with a complete proposal.",
    "enTask": [
      "Choose a small project you actually want to finish.",
      "Ask AI to break down steps and the final deliverable format.",
      "Complete a first-version project output.",
      "Ask AI for revision advice and finalize it."
    ],
    "enPrompt": "Act as my AI project coach. My small project is: ______\nPlease break down:\n1. Project goal\n2. Steps to complete\n3. Final deliverable format\n4. Timeline\n5. What the first draft should look like\nGuide me step by step.",
    "enFeedback": "Act as a project reviewer. Here is my AI project output:\n(paste output)\nPlease check:\n1. Is the goal clear?\n2. Is the deliverable complete?\n3. Is it actually executable?\n4. What needs strengthening?\n5. Give me a final revision checklist.",
    "enOutput": "My AI Project Output",
    "enCaseStudy": "Case: Xiao Jie only said “I want a proposal,” so AI stayed generic. After he defined the goal, audience, time limit, and deliverable format, AI could break down steps, draft v1, and support revisions.",
    "enCommonMistakes": [
      "Not defining the project goal",
      "Not stating the final deliverable format",
      "Stopping after one question",
      "Not revising based on AI feedback"
    ],
    "enNotePrompt": "Write: 1) What is my project goal? 2) What should the final output look like? 3) What three revision suggestions did AI give me?"
  }
];



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
      tagline: "最輕鬆的 AI 精通之路",
      badge: "AI 技能平台",
      title: "真正學會 AI，<br>不是只會問 ChatGPT。",
      lead: "從 Prompt、工作流程、自動化到實戰作品，AI Skill Bridge 幫你建立真正用得上的 AI 能力。",
      trust: "★★★★★ 受到 AI 學習者信任",
      start: "免費開始體驗",
      explore: "查看完整課程",
      dashTitle: "AI Skill Dashboard",
      dashProgress: "學習進度",
      dashProjects: "AI 專案",
      dashPrompts: "Prompt 資料庫",
      dashCertificates: "證書",
      dashCurrent: "目前課程",
      dashXp: "XP 進度",
      dashActivity: "最近動態",
      dashGoal: "今日目標",
      defaultCourse: "AI 基礎入門",
      goalText: "完成 1 堂互動課程",
      activity1: "完成 Prompt 練習",
      activity2: "儲存工作流程模板",
      activity3: "獲得進度徽章",
      buildTitle: "你能做出什麼",
      buildLead: "把 AI 技能變成可用、可分享、可展示的真實成果。",
      build1: "AI 履歷",
      build1Desc: "用 AI 協助結構化，打造針對職位優化的履歷。",
      build2: "AI 簡報",
      build2Desc: "簡報大綱、講稿與視覺敘事流程。",
      build3: "AI 網站",
      build3Desc: "落地頁與作品集網站。",
      build4: "自動化",
      build4Desc: "每週節省數小時的可重複工作流程。",
      build5: "學習筆記",
      build5Desc: "有系統的筆記、摘要與複習素材。",
      build6: "Prompt 資料庫",
      build6Desc: "真正有效的個人 Prompt 資料庫。",
      pathTitle: "學習路徑",
      pathLead: "從第一個 Prompt 到職涯作品集 — 一條清晰路徑。",
      path1: "學習",
      path1Desc: "核心概念與工具",
      path2: "練習",
      path2Desc: "互動式練習",
      path3: "專案",
      path3Desc: "動手做專案",
      path4: "作品集",
      path4Desc: "展示你的作品",
      path5: "職涯",
      path5Desc: "自信地應用所學",
      featTitle: "為真正學會而設計",
      featLead: "從好奇到上手，你需要的一切都在這裡。",
      feat1: "互動課程",
      feat1Desc: "邊做邊學 — 測驗、任務與即時回饋。",
      feat2: "AI 導師",
      feat2Desc: "引導式 Prompt 與教練式回饋，持續優化成果。",
      feat3: "終身更新",
      feat3Desc: "AI 持續演進，內容與模板也持續更新。",
      feat4: "專案式學習",
      feat4Desc: "每條路徑都以可交付的專案收尾。",
      stat1: "120+",
      stat1Label: "課程",
      stat2: "40+",
      stat2Label: "模板",
      stat3: "10+",
      stat3Label: "專案",
      stat4: "24/7",
      stat4Label: "AI 支援",
      testTitle: "學習者的真實回饋",
      testLead: "評價占位 — 之後可替換為真人見證。",
      test1: "「終於有人把 AI 講清楚，不是只丟工具名稱。」",
      test1Role: "產品設計師",
      test2: "「互動練習讓我真正學會 Prompt，不是只看影片。」",
      test2Role: "行銷經理",
      test3: "「做完專案後，我直接把成果放進作品集。」",
      test3Role: "自由工作者",
      priceTitle: "簡單透明的價格",
      priceLead: "先免費開始，準備好再深入學習。",
      priceFree: "免費",
      priceFreeDesc: "適合從 AI 基礎入門的使用者。",
      priceFree1: "免費入門課程",
      priceFree2: "互動測驗",
      priceFree3: "AI 工具導航",
      pricePremium: "Premium",
      pricePremiumDesc: "完整進階課程與模板。",
      pricePremium1: "全部付費課程",
      pricePremium2: "40+ Prompt 模板",
      pricePremium3: "專案交付成果",
      priceOriginal: "原價",
      priceLaunch: "上市價",
      priceOffer: "限時上市優惠",
      priceSoon: "即將推出",
      priceSoonDesc: "團隊方案與企業功能。",
      priceSoon1: "團隊工作區",
      priceSoon2: "管理後台",
      priceSoon3: "客製化學習路徑",
      priceCtaFree: "免費開始",
      priceCtaPremium: "取得 Premium",
      priceCtaSoon: "通知我",
      faqTitle: "常見問題",
      faqLead: "開始學習或升級前，這些問題最常被問到。",
      faq1Q: "需要 AI 基礎嗎？",
      faq1A: "不需要。免費路徑從零開始：什麼是 AI、Prompt 怎麼寫，以及你的第一個實用工作流程。",
      faq2Q: "Premium 是訂閱制嗎？",
      faq2A: "不是。Premium 為一次性購買，解鎖後即可終身存取課程與模板。",
      faq3Q: "可以先試再付費嗎？",
      faq3A: "可以。先完成免費課程，確認適合自己後，再決定是否升級進階專案與模板。",
      faq4Q: "適合誰使用？",
      faq4A: "學生、上班族、創作者、自由工作者、創業者——任何想把 AI 變成實用技能的人。",
      faq5Q: "有中英雙語嗎？",
      faq5A: "有。可隨時在頁首切換中文與英文。</p></details><details class=\"home-faq-item\"><summary>購買後如何開始使用？</summary><p>購買完成後，登入帳號即可立即解鎖 Premium 課程與模板。打開課程地圖、進入進階路徑，依步驟完成專案就能開始使用。",
      footerTagline: "最輕鬆的 AI 精通之路",
      footerProduct: "產品",
      footerLearn: "學習",
      footerCompany: "公司",
      footerLegal: "法律資訊",
      footerCourses: "課程",
      footerPremium: "Premium",
      footerTools: "AI 工具",
      footerFree: "免費路徑",
      footerAbout: "關於",
      footerImpact: "影響力",
      footerCommunity: "社群",
      footerPrivacy: "隱私權",
      footerTerms: "服務條款",
      footerAssessment: "能力測驗",
      footerPrompts: "Prompt 範例",
      footerCopy: "© 2026 AI Skill Bridge. 保留所有權利。",
      ctaTitle: "今天就開始精通 AI",
      ctaLead: "加入正在用互動專案建立真實技能的學習者。",
      ctaStart: "免費開始",
      ctaExplore: "探索課程"
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
      tagline: "The easiest way to master AI.",
      badge: "AI Skill Platform",
      title: "Master AI for real,<br>not just ChatGPT.",
      lead: "From prompts, workflows, and automation to portfolio projects — AI Skill Bridge builds practical AI skills you can actually use.",
      trust: "★★★★★ Trusted by AI learners",
      start: "Start Free Trial",
      explore: "View Full Courses",
      dashTitle: "AI Skill Dashboard",
      dashProgress: "Learning Progress",
      dashProjects: "AI Projects",
      dashPrompts: "Prompt Library",
      dashCertificates: "Certificates",
      dashCurrent: "Current Course",
      dashXp: "XP Progress",
      dashActivity: "Recent Activity",
      dashGoal: "Today's Goal",
      defaultCourse: "AI Fundamentals",
      goalText: "Complete 1 interactive lesson",
      activity1: "Finished prompt exercise",
      activity2: "Saved workflow template",
      activity3: "Earned progress badge",
      buildTitle: "What You Can Build",
      buildLead: "Turn AI skills into real deliverables you can use, share, and showcase.",
      build1: "AI Resume",
      build1Desc: "Polished, role-tailored resumes with AI-assisted structure.",
      build2: "AI Presentation",
      build2Desc: "Slide outlines, scripts, and visual story flows.",
      build3: "AI Website",
      build3Desc: "Landing pages and portfolio sites with modern layouts.",
      build4: "Automation",
      build4Desc: "Repeatable workflows that save hours every week.",
      build5: "Study Notes",
      build5Desc: "Organized notes, summaries, and review systems.",
      build6: "Prompt Library",
      build6Desc: "A personal collection of prompts that actually work.",
      pathTitle: "Learning Path",
      pathLead: "From first prompt to career-ready portfolio — one clear path.",
      path1: "Learn",
      path1Desc: "Core concepts & tools",
      path2: "Practice",
      path2Desc: "Interactive exercises",
      path3: "Projects",
      path3Desc: "Hands-on builds",
      path4: "Portfolio",
      path4Desc: "Showcase your work",
      path5: "Career",
      path5Desc: "Apply with confidence",
      featTitle: "Built for Real Learning",
      featLead: "Everything you need to go from curious to capable.",
      feat1: "Interactive Lessons",
      feat1Desc: "Learn by doing — quizzes, tasks, and instant feedback in every lesson.",
      feat2: "AI Mentor",
      feat2Desc: "Guided prompts and coach-style feedback to improve your output.",
      feat3: "Lifetime Updates",
      feat3Desc: "New tools, templates, and lessons as AI keeps evolving.",
      feat4: "Project-based Learning",
      feat4Desc: "Every track ends with something you can ship or share.",
      stat1: "120+",
      stat1Label: "Lessons",
      stat2: "40+",
      stat2Label: "Templates",
      stat3: "10+",
      stat3Label: "Projects",
      stat4: "24/7",
      stat4Label: "AI Support",
      testTitle: "Loved by Learners",
      testLead: "Placeholder testimonials — ready for real reviews.",
      test1: "\"Finally someone explains AI clearly — not just a list of tool names.\"",
      test1Role: "Product Designer",
      test2: "\"Interactive practice helped me actually learn prompts, not just watch videos.\"",
      test2Role: "Marketing Manager",
      test3: "\"After the project track, I added real work straight to my portfolio.\"",
      test3Role: "Freelancer",
      priceTitle: "Simple, Transparent Pricing",
      priceLead: "Start free. Upgrade when you're ready to go deeper.",
      priceFree: "Free",
      priceFreeDesc: "Perfect for getting started with AI fundamentals.",
      priceFree1: "Free beginner lessons",
      priceFree2: "Interactive quizzes",
      priceFree3: "AI tool navigator",
      pricePremium: "Premium",
      pricePremiumDesc: "Full access to advanced tracks and templates.",
      pricePremium1: "All premium courses",
      pricePremium2: "40+ prompt templates",
      pricePremium3: "Project deliverables",
      priceOriginal: "Original Price",
      priceLaunch: "Launch Price",
      priceOffer: "Limited Launch Offer",
      priceSoon: "Coming Soon",
      priceSoonDesc: "Team plans and enterprise features.",
      priceSoon1: "Team workspace",
      priceSoon2: "Admin dashboard",
      priceSoon3: "Custom learning paths",
      priceCtaFree: "Start Free",
      priceCtaPremium: "Get Premium",
      priceCtaSoon: "Notify Me",
      faqTitle: "Frequently Asked Questions",
      faqLead: "The questions people ask most before learning or upgrading.",
      faq1Q: "Do I need prior AI experience?",
      faq1A: "No. The free track starts from zero: what AI is, how prompts work, and your first useful workflow.",
      faq2Q: "Is Premium a subscription?",
      faq2A: "No. Premium is a one-time purchase with lifetime access to the courses and templates you unlock.",
      faq3Q: "Can I try before I pay?",
      faq3A: "Yes. Finish the free lessons first, then upgrade when you want advanced projects and templates.",
      faq4Q: "Who is AI Skill Bridge for?",
      faq4A: "Students, professionals, creators, freelancers, and founders — anyone who wants practical AI skills.",
      faq5Q: "Is content bilingual?",
      faq5A: "Yes. Switch between 中文 and English anytime from the header.</p></details><details class=\"home-faq-item\"><summary>How do I get started after purchase?</summary><p>After purchase, sign in to unlock Premium courses and templates right away. Open the course map, enter the advanced path, and start building through the guided projects.",
      footerTagline: "The easiest way to master AI.",
      footerProduct: "Product",
      footerLearn: "Learn",
      footerCompany: "Company",
      footerLegal: "Legal",
      footerCourses: "Courses",
      footerPremium: "Premium",
      footerTools: "AI Tools",
      footerFree: "Free Track",
      footerAbout: "About",
      footerImpact: "Impact",
      footerCommunity: "Community",
      footerPrivacy: "Privacy",
      footerTerms: "Terms",
      footerAssessment: "Assessment",
      footerPrompts: "Prompts",
      footerCopy: "© 2026 AI Skill Bridge. All rights reserved.",
      ctaTitle: "Start mastering AI today",
      ctaLead: "Join learners building real skills with interactive projects.",
      ctaStart: "Start Free",
      ctaExplore: "Explore Courses"
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

const FREE_COURSE_OFFER = {
  id: "free",
  price: 0,
  currency: "TWD",
  isFree: true,
  zhTitle: "免費入門課程",
  enTitle: "Free Foundation Course",
  lessonCount: 8
};

const PREMIUM = [
  {
    id: "admissions",
    price: 499,
    currency: "TWD",
    isFree: false,
    paymentUrl: "https://gumroad.com/",
    zhTitle: "高中生申請大學 AI 實戰課",
    enTitle: "AI University Application Lab for High School Students",
    zhUser: "高二、高三、學測後準備申請大學、整理學習歷程與備審資料的學生",
    enUser: "High school students preparing university applications, learning portfolios, and admissions materials",
    zhOutcome: "完成後你會具備 AI 升學能力，並產出一份完整大學申請包。",
    enOutcome: "You will produce a complete university application package: major exploration, learning portfolio organization, application structure, self-introduction, and interview preparation.",
    zhDesc: "這門課不是教你用 AI 代寫備審，而是教你用 AI 把自己的經驗整理得更清楚、更有邏輯，讓你在申請大學時能說出自己的方向。",
    enDesc: "This course does not teach students to let AI write applications for them. It teaches students how to use AI to organize their own experience clearly and logically for university applications.",
    zhFinalProduct: "大學申請包",
    enFinalProduct: "University Application Kit",
    zhLessons: [
      "第1課：認識大學申請流程：AI 能幫什麼、不能幫什麼",
      "第2課：用 AI 盤點興趣與優勢，找出科系方向",
      "第3課：用 AI 比較校系，建立志願選擇邏輯",
      "第4課：用 AI 整理高中三年學習歷程素材",
      "第5課：用 AI 把活動經驗寫成有說服力的故事",
      "第6課：用 AI 產出學習歷程自述與申請動機初稿",
      "第7課：針對目標科系，建立備審資料架構",
      "第8課：建立大學面試題庫與回答架構",
      "第9課：用 AI 進行升學模擬面試並修正",
      "第10課：整合完成「大學申請包」"
    ],
    enLessons: [
      "Lesson 1: Understand the university application process and AI’s proper role",
      "Lesson 2: Use AI to map interests and strengths for major direction",
      "Lesson 3: Use AI to compare programs and build preference logic",
      "Lesson 4: Use AI to organize three years of learning portfolio materials",
      "Lesson 5: Use AI to turn activities into persuasive stories",
      "Lesson 6: Use AI to draft learning reflections and application motivation",
      "Lesson 7: Build application material structure for target majors",
      "Lesson 8: Build university interview question banks and answer structures",
      "Lesson 9: Use AI for admissions mock interviews and revisions",
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
    price: 699,
    currency: "TWD",
    isFree: false,
    paymentUrl: "https://gumroad.com/",
    sequentialUnlock: true,
    zhTitle: "大學生 AI 學習系統",
    enTitle: "AI Learning System for University Students",
    zhUser: "大一到大四，想用 AI 提升教材理解、筆記、報告、簡報與考試複習效率的大學生",
    enUser: "University students who want to use AI for materials, notes, reports, slides, and exam review",
    zhOutcome: "完成後你會具備 AI 學習能力，並建立可重複使用的個人 AI 大學學習系統。",
    enOutcome: "You will build AI learning skills and a reusable personal AI university learning system.",
    zhDesc: "這門課幫助大學生建立教材理解、筆記、報告、簡報與考試複習的 AI 學習系統，而不是只拿 AI 交作業。",
    enDesc: "This course helps students build an AI system for materials, notes, reports, slides, and exams—not just homework shortcuts.",
    zhFinalProduct: "AI 大學學習系統包",
    enFinalProduct: "AI University Learning System Package",
    zhLessons: [
      "第1課：建立正確的 AI 學習方法與使用界線",
      "第2課：把模糊問題轉成有效學習提問",
      "第3課：使用 AI 快速理解課堂教材",
      "第4課：分析圖片、表格、投影片與複雜課件",
      "第5課：建立有結構的課堂筆記",
      "第6課：整理課堂資料與重要資訊",
      "第7課：完成一般課堂報告架構",
      "第8課：製作清楚的課堂簡報",
      "第9課：建立考試複習與練習流程",
      "第10課：整合個人 AI 大學學習系統"
    ],
    enLessons: [
      "Lesson 1: Build the right AI learning method and usage boundaries",
      "Lesson 2: Turn vague questions into effective study prompts",
      "Lesson 3: Use AI to understand course materials quickly",
      "Lesson 4: Analyze images, tables, slides, and complex courseware",
      "Lesson 5: Build structured class notes",
      "Lesson 6: Organize class materials and key information",
      "Lesson 7: Build a classroom report structure",
      "Lesson 8: Create a clear classroom presentation",
      "Lesson 9: Build an exam review and practice workflow",
      "Lesson 10: Integrate your personal AI university learning system"
    ],
    zhValue: [
      "用系統取代零散工具收藏",
      "每堂課都有可重用模板與完成檢查",
      "把 AI 變成可重複使用的大學學習系統"
    ],
    enValue: [
      "Replace scattered tool bookmarks with a real system",
      "Every lesson includes reusable templates and completion checks",
      "Turn AI into a reusable university learning system"
    ]
  },
  {
    id: "research-competition",
    price: 899,
    currency: "TWD",
    isFree: false,
    paymentUrl: "https://gumroad.com/",
    zhTitle: "大學生研究、專題與競賽 AI 實戰課",
    enTitle: "AI Research and Competition Lab for University Students",
    zhUser: "大學生、專題生、想參加競賽、做研究、做期末專案或整理資料的人",
    enUser: "University students working on projects, competitions, research, final projects, or data organization",
    zhOutcome: "完成後你會具備 AI 研究能力，並產出研究／專題／競賽專案包。",
    enOutcome: "You will build AI research skills: literature search, verification, APA citation, project collaboration, research slides, and oral presentation.",
    zhDesc: "這門課專注「AI 研究能力」。用 AI 做文獻搜尋、引用、專題與競賽呈現，但不涵蓋求職、職場流程或創業自動化。",
    enDesc: "This course focuses on AI research skills: literature search, citation, projects, and competition presentation—not career, workplace workflows, or startup automation.",
    zhFinalProduct: "研究與競賽專案包",
    enFinalProduct: "Research and Competition Project Package",
    zhLessons: [
      "第1課：把興趣變成可研究的題目",
      "第2課：縮小範圍，寫出研究問題與假設",
      "第3課：用 AI 協助學術搜尋，找到關鍵文獻與來源",
      "第4課：用 AI 精讀文獻：摘要、比較與查證",
      "第5課：建立文獻筆記與引用格式",
      "第6課：整理文獻觀點，建立比較與筆記結構",
      "第7課：設計研究方法：問卷、訪談或資料收集架構",
      "第8課：整理分析結果，寫出專題論點結構",
      "第9課：製作研究／競賽提案簡報",
      "第10課：完成研究／專題／競賽專案包的口頭提案準備"
    ],
    enLessons: [
      "Lesson 1: Turn interests into researchable topics",
      "Lesson 2: Narrow scope and write research questions and hypotheses",
      "Lesson 3: Use AI-assisted academic search to find key sources",
      "Lesson 4: Use AI to closely read sources: summarize, compare, and verify",
      "Lesson 5: Build literature notes and citation format",
      "Lesson 6: Organize source viewpoints into comparison and note structures",
      "Lesson 7: Design research methods: survey, interview, or data collection",
      "Lesson 8: Organize findings into a project argument structure",
      "Lesson 9: Build research or competition proposal slides",
      "Lesson 10: Prepare the oral proposal for your research or competition package"
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
    price: 999,
    currency: "TWD",
    isFree: false,
    paymentUrl: "https://gumroad.com/",
    zhTitle: "求職與實習 AI 實戰課",
    enTitle: "AI Career and Internship Lab",
    zhUser: "想找實習、打工、第一份工作、交換計畫、獎學金或海外機會的學生",
    enUser: "Students applying for internships, part-time jobs, first jobs, exchange programs, scholarships, or overseas opportunities",
    zhOutcome: "完成後你會具備 AI 求職能力，並產出求職與實習申請包。",
    enOutcome: "You will complete a career package: experience inventory, resume, self-introduction, LinkedIn, interviews, cover letter, and portfolio.",
    zhDesc: "這門課專注「AI 求職能力」。整理真實經驗、履歷與面試，不涵蓋研究文獻、職場 SOP 或創業自動化。",
    enDesc: "This course focuses on AI career skills: real experience, resumes, and interviews—not research literature, workplace SOPs, or startup automation.",
    zhFinalProduct: "求職與實習申請包",
    enFinalProduct: "Career and Internship Application Package",
    zhLessons: [
      "第1課：盤點可寫進履歷的真實經驗與能力證據",
      "第2課：用 STAR 把經驗寫成可驗證的成果描述",
      "第3課：鎖定目標實習／職缺，拆解職缺需求",
      "第4課：用 AI 建立並優化履歷（對準職缺，不造假）",
      "第5課：用 AI 撰寫求職信與 Cover Letter",
      "第6課：建立 30 秒／1 分鐘／3 分鐘自我介紹",
      "第7課：用 AI 經營 LinkedIn 個人品牌檔案",
      "第8課：整理作品集架構，證明你做過什麼",
      "第9課：建立面試題庫，做企業模擬面試與修正",
      "第10課：整合完成「求職與實習申請包」與投遞節奏"
    ],
    enLessons: [
      "Lesson 1: Inventory real experience and evidence for your resume",
      "Lesson 2: Rewrite experience into verifiable STAR achievement bullets",
      "Lesson 3: Target internships/roles and decode job requirements",
      "Lesson 4: Build and refine a resume aligned to the role—without fabricating",
      "Lesson 5: Write application emails and cover letters with AI",
      "Lesson 6: Build 30-second, 1-minute, and 3-minute self-introductions",
      "Lesson 7: Use AI to strengthen your LinkedIn professional profile",
      "Lesson 8: Structure a portfolio that proves what you have done",
      "Lesson 9: Build interview banks and run employer-style mock interviews",
      "Lesson 10: Complete your career package and application rhythm"
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
    price: 1299,
    currency: "TWD",
    isFree: false,
    paymentUrl: "https://gumroad.com/",
    zhTitle: "職場生產力 AI 工作流程課",
    enTitle: "AI Workplace Productivity Workflow Lab",
    zhUser: "想用 AI 處理 Email、會議紀錄、企劃、文件整理、任務管理與日常工作的使用者",
    enUser: "Users who want to use AI for email, meeting notes, proposals, documents, task management, and daily work",
    zhOutcome: "完成後你會具備 AI 工作能力，並建立個人 AI 工作流程系統。",
    enOutcome: "You will build AI workplace skills: email, Office, knowledge bases, meetings, task management, and SOP workflows.",
    zhDesc: "這門課專注「AI 工作能力」。把 AI 變成職場生產力系統，不涵蓋 GitHub、Cursor、AI Agent 或創業自動化。",
    enDesc: "This course focuses on AI workplace productivity—not GitHub, Cursor, AI agents, or startup automation.",
    zhFinalProduct: "個人 AI 工作流系統",
    enFinalProduct: "Personal AI Workflow System",
    zhLessons: [
      "第1課：建立職場 AI 工作觀：什麼自己做、什麼交給 AI",
      "第2課：用 AI 處理 Email 與專業溝通",
      "第3課：用 AI 整理會議紀錄、決策與待辦",
      "第4課：用 AI 撰寫與整理商務文件",
      "第5課：用 AI 處理表格與數據初稿",
      "第6課：用 AI 製作工作簡報（對內／對外）",
      "第7課：用 AI 建立 SOP 與標準作業流程",
      "第8課：建立個人或團隊知識庫（第二大腦／企業知識）",
      "第9課：用 AI 做任務管理、優先順序與週期回報",
      "第10課：整合完成「個人 AI 工作流程系統」"
    ],
    enLessons: [
      "Lesson 1: Build a workplace AI mindset: what you do vs what AI does",
      "Lesson 2: Use AI for email and professional communication",
      "Lesson 3: Use AI to capture meeting notes, decisions, and action items",
      "Lesson 4: Use AI to draft and organize business documents",
      "Lesson 5: Use AI for spreadsheets and first-pass data work",
      "Lesson 6: Use AI to create internal and external work presentations",
      "Lesson 7: Use AI to create SOPs and standard operating procedures",
      "Lesson 8: Build a personal or team knowledge base",
      "Lesson 9: Use AI for task management, priorities, and recurring updates",
      "Lesson 10: Complete your personal AI workplace workflow system"
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
    price: 1499,
    currency: "TWD",
    isFree: false,
    paymentUrl: "https://gumroad.com/",
    zhTitle: "創業與 AI 自動化實戰課",
    enTitle: "AI Startup and Automation Lab",
    zhUser: "想做個人品牌、數位產品、社會創新、創業提案、AI 自動化或 AI Agent 的進階使用者",
    enUser: "Advanced users interested in personal branding, digital products, social innovation, startup proposals, AI automation, or AI agents",
    zhOutcome: "完成後你會具備 AI 創業能力，並產出創業提案與基礎 AI 自動化流程。",
    enOutcome: "You will build AI startup skills: problem definition, MVP, GitHub, pitch decks, automation, and AI agent concepts.",
    zhDesc: "這門課專注「AI 創業能力」。涵蓋產品開發、GitHub、自動化與 Agent，不涵蓋求職履歷或職場 SOP。",
    enDesc: "This course focuses on AI startup skills: product development, GitHub, automation, and agents—not career resumes or workplace SOPs.",
    zhFinalProduct: "創業提案與 AI 自動化流程",
    enFinalProduct: "Startup Proposal and AI Automation Workflow",
    zhLessons: [
      "第1課：用 AI 定義真實問題與市場機會",
      "第2課：分析目標使用者與痛點，設計訪談問題",
      "第3課：建立商業模式草稿：誰付錢、為何付錢",
      "第4課：規劃 MVP：最小可驗證產品與功能取捨",
      "第5課：用 AI 拆解產品規格與開發任務",
      "第6課：用 GitHub 與版本思維管理產品迭代",
      "第7課：設計 Pitch Deck：讓別人聽懂你的生意",
      "第8課：建立自動化思維：把重複工作變成流程",
      "第9課：認識自動化與 AI Agent：何時用人、何時用機器",
      "第10課：整合完成「創業提案＋基礎 AI 自動化流程」"
    ],
    enLessons: [
      "Lesson 1: Use AI to define a real problem and market opportunity",
      "Lesson 2: Analyze target users and design interview questions",
      "Lesson 3: Draft a business model: who pays and why",
      "Lesson 4: Plan an MVP with minimal validation and feature tradeoffs",
      "Lesson 5: Use AI to break down product specs and build tasks",
      "Lesson 6: Manage product iteration with GitHub and version thinking",
      "Lesson 7: Design a pitch deck that makes the business clear",
      "Lesson 8: Build automation thinking: turn repeat work into workflows",
      "Lesson 9: Know automation and AI agents: when to use people vs machines",
      "Lesson 10: Complete your startup proposal and basic AI automation workflow"
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
    price: 2999,
    originalPrice: 3999,
    currency: "TWD",
    isFree: false,
    priceNote: "early-bird",
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
      "解鎖：大學生 AI 學習系統",
      "解鎖：大學生研究、專題與競賽 AI 實戰課",
      "解鎖：求職與實習 AI 實戰課",
      "解鎖：職場生產力 AI 工作流程課",
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

const ASB_PREMIUM_LESSON_DETAILS_VERSION = "2026-07-23-6courses";

const PREMIUM_LESSON_DETAILS = {
  "admissions": [
  {
    "zhTitle": "第1課：認識大學申請流程：AI 能幫什麼、不能幫什麼",
    "enTitle": "Lesson 1: Understand the university application process and AI’s proper role",
    "zhConcept": "很多學生一開始只問「我要申請哪裡」，卻沒有地圖：第一階段篩選看什麼、第二階段備審與面試要準備什麼、自己缺什麼、這週先做哪三件事。這一課要解決的問題，就是把模糊焦慮變成可執行的申請準備地圖。AI 能幫你拆任務與檢查缺口，但不能代替你查簡章，也不能捏造經歷。",
    "enConcept": "Many students ask “Where should I apply?” without a map: what Stage 1 screens for, what Stage 2 needs, what they lack, and which three tasks to do this week. This lesson turns vague anxiety into an actionable preparation map. AI can break down tasks and find gaps—but it cannot replace brochure checks or invent your experience.",
    "zhPrompt": "你是大學申請規劃教練，不是代寫者，也不可捏造成績、獎項或經歷。\n\n我的背景：\n- 年級：[請填寫年級]\n- 目前成績概況：[請填寫學測/模擬考概況，勿填身分證或電話]\n- 目標科系（暫定）：[目標科系]\n- 目前卡關：[想改善的問題]\n\n任務：幫我產出「大學申請準備地圖」，包含：\n1) 第一階段可能要確認的項目（採計、檢定、倍率等——標註「需查官方簡章」）\n2) 第二階段備審與面試準備項目\n3) 我目前已有／缺少的資料\n4) 未來 7 天可執行行動（每天 1–2 件事）\n\n輸出格式：\n- 用條列與表格\n- 每個建議旁註明「根據你提供的資料」或「需自行查證」\n- 不要保證錄取，不要編造我沒有的經歷\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a university-application planning coach—not a ghostwriter. Do not invent grades, awards, or experiences.\n\nMy background:\n- Grade level: [fill in grade]\n- Current academic overview: [fill in exam/mock overview; no ID/phone]\n- Tentative target majors: [target majors]\n- Current blocker: [problem to improve]\n\nTask: Produce an Application Preparation Map with:\n1) Stage-1 items to verify (subjects, thresholds, multipliers—mark “check official brochure”)\n2) Stage-2 portfolio and interview prep items\n3) What I already have vs. what is missing\n4) A 7-day action list (1–2 tasks per day)\n\nOutput format:\n- Use bullets and tables\n- Label each tip as “based on your input” or “verify yourself”\n- No admission guarantees; invent nothing I did not provide\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "年級：高三；目標科系：資訊管理、資訊工程、數據科學；卡關：不知道這週該查簡章還是寫活動。",
    "enExample": "Grade: 12; majors: Information Management, CS, Data Science; blocker: unsure whether to check brochures or write activities this week.",
    "zhPractice": "寫下 3 個暫定目標科系與目前狀態。；列出已有／缺少的申請資料。；用主 Prompt 產出準備地圖並標註查證項。；把定稿存成「大學申請準備地圖」。",
    "enPractice": "List 3 tentative majors and your status.; List what you have vs. lack.; Run the main prompt and mark verification items.; Save the final Application Preparation Map.",
    "zhFeedbackPrompt": "你是一位具有 15 年經驗的大學申請顧問。\n\n以下是我完成的「申請準備地圖」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 流程理解度：1-10 分，並說明扣分原因\n- 第一階段準備完整度：1-10 分，並說明扣分原因\n- 第二階段準備完整度：1-10 分，並說明扣分原因\n- 可執行性：1-10 分，並說明扣分原因\n- 時間安排：1-10 分，並說明扣分原因\n- 資訊查證程度：1-10 分，並說明扣分原因\n- 風險意識：1-10 分，並說明扣分原因\n- 整體競爭力：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪些地方會讓學生誤以為自己準備好了，但其實還沒有？\n2. 請幫我排出未來 7 天最重要的行動順序。\n3. 如果只能先做 3 件事，請告訴我是哪 3 件。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 具有 15 年經驗的大學申請顧問.\n\nHere is my completed work for: 申請準備地圖\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 流程理解度：1-10 分，並說明扣分原因\n- 第一階段準備完整度：1-10 分，並說明扣分原因\n- 第二階段準備完整度：1-10 分，並說明扣分原因\n- 可執行性：1-10 分，並說明扣分原因\n- 時間安排：1-10 分，並說明扣分原因\n- 資訊查證程度：1-10 分，並說明扣分原因\n- 風險意識：1-10 分，並說明扣分原因\n- 整體競爭力：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪些地方會讓學生誤以為自己準備好了，但其實還沒有？\n2. 請幫我排出未來 7 天最重要的行動順序。\n3. 如果只能先做 3 件事，請告訴我是哪 3 件。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "第一階段申請最應該先確認什麼？",
        "options": [
          "篩選條件與目標校系要求",
          "簡報字體",
          "社團朋友名單"
        ],
        "answer": 0,
        "explain": "第一階段通常先看成績與篩選條件，必須先確認。"
      },
      {
        "q": "AI 在大學申請流程中最適合扮演什麼角色？",
        "options": [
          "幫你捏造經歷",
          "協助整理任務與檢查缺口",
          "取代招生簡章"
        ],
        "answer": 1,
        "explain": "AI 可以協助整理，但不能取代查證與真實經驗。"
      },
      {
        "q": "好的申請準備地圖不應該缺少什麼？",
        "options": [
          "時間安排與待辦清單",
          "遊戲帳號",
          "完全不查證的建議"
        ],
        "answer": 0,
        "explain": "沒有時間安排，學生很難執行。"
      },
      {
        "q": "AI 給出的招生資訊應該？",
        "options": [
          "回到校系簡章確認",
          "直接相信",
          "完全不用管"
        ],
        "answer": 0,
        "explain": "招生資訊會變動，必須查證。"
      },
      {
        "q": "本課成果應該放到哪裡？",
        "options": [
          "大學申請包第 1 欄",
          "免費成果包的 AI 簡報",
          "工具導航頁"
        ],
        "answer": 0,
        "explain": "本課成果是大學申請準備地圖。"
      }
    ],
    "enQuizItems": [
      {
        "q": "第一階段申請最應該先確認什麼？",
        "options": [
          "篩選條件與目標校系要求",
          "簡報字體",
          "社團朋友名單"
        ],
        "answer": 0,
        "explain": "第一階段通常先看成績與篩選條件，必須先確認。"
      },
      {
        "q": "AI 在大學申請流程中最適合扮演什麼角色？",
        "options": [
          "幫你捏造經歷",
          "協助整理任務與檢查缺口",
          "取代招生簡章"
        ],
        "answer": 1,
        "explain": "AI 可以協助整理，但不能取代查證與真實經驗。"
      },
      {
        "q": "好的申請準備地圖不應該缺少什麼？",
        "options": [
          "時間安排與待辦清單",
          "遊戲帳號",
          "完全不查證的建議"
        ],
        "answer": 0,
        "explain": "沒有時間安排，學生很難執行。"
      },
      {
        "q": "AI 給出的招生資訊應該？",
        "options": [
          "回到校系簡章確認",
          "直接相信",
          "完全不用管"
        ],
        "answer": 0,
        "explain": "招生資訊會變動，必須查證。"
      },
      {
        "q": "本課成果應該放到哪裡？",
        "options": [
          "大學申請包第 1 欄",
          "免費成果包的 AI 簡報",
          "工具導航頁"
        ],
        "answer": 0,
        "explain": "本課成果是大學申請準備地圖。"
      }
    ],
    "zhOutcome": "大學申請準備地圖",
    "enOutcome": "University Application Preparation Map",
    "zhNotePrompt": "請在課程筆記中回答：我目前最清楚的是什麼？我最不清楚的是什麼？接下來 7 天我要完成哪 3 件事？",
    "enNotePrompt": "請在課程筆記中回答：我目前最清楚的是什麼？我最不清楚的是什麼？接下來 7 天我要完成哪 3 件事？",
    "zhDeliverableChecklist": [
      "已列出至少 3 個暫定目標科系",
      "已分開第一階段與第二階段準備項目",
      "已標出目前缺口",
      "已排出未來 7 天行動",
      "涉及規定的項目已標註需查官方簡章",
      "內容已改成符合自己真實情況，未直接照抄 AI"
    ],
    "enDeliverableChecklist": [
      "At least 3 tentative majors listed",
      "Stage-1 and Stage-2 items separated",
      "Current gaps marked",
      "7-day action plan included",
      "Rule-related items flagged for brochure checks",
      "Rewritten to match real facts—not pasted AI text"
    ],
    "zhScorecard": [
      "流程理解",
      "資料完整",
      "可執行性",
      "查證程度",
      "時間規劃"
    ],
    "enScorecard": [
      "流程理解",
      "資料完整",
      "可執行性",
      "查證程度",
      "時間規劃"
    ],
    "zhValueTip": "先有地圖，再談備審與面試；AI 是整理助手，不是代寫與保證錄取工具。",
    "enValueTip": "Map first, then portfolio and interview. AI is an organizer—not a ghostwriter or admission guarantee.",
    "zhCaseStudy": "學生小安是高三生，只知道學測大概落點和「想讀跟電腦有關的科系」。他先請 AI「幫我規劃申請」，得到一長串空泛建議。後來他改成：先寫 3 個暫定科系、目前已有／缺少的資料，再請 AI 拆成第一階段查證項、第二階段備審項與 7 天行動，才第一次知道這週該查簡章還是該整理活動。",
    "enCaseStudy": "An is a senior who only knows a rough test range and “something related to computers.” Asking AI to “plan my application” produced vague lists. After listing 3 tentative majors and current gaps, AI helped split Stage-1 verification, Stage-2 materials, and a 7-day plan—so An finally knew whether to check brochures or organize activities this week.",
    "zhWorkflow": [
      "寫下 3 個暫定目標科系與目前成績／狀態（勿填敏感個資）",
      "列出你已有的資料與明顯缺口",
      "用本課 Prompt 請 AI 拆第一／二階段任務與 7 天行動",
      "把 AI 建議中涉及規定的項目標成「需查官方簡章」",
      "整理成「大學申請準備地圖」並存入成果包"
    ],
    "enWorkflow": [
      "List 3 tentative majors and your academic/status overview (no sensitive IDs)",
      "List what you already have and clear gaps",
      "Use this lesson’s prompt to split Stage 1/2 tasks and a 7-day plan",
      "Mark rule-related tips as “check official brochure”",
      "Save your Application Preparation Map to the result package"
    ],
    "zhCommonMistakes": [
      "只問 AI「我要申請大學怎麼辦」，卻不提供目標科系與現況",
      "把 AI 的倍率、採計建議當成正式招生規則",
      "只準備備審，卻忽略第一階段篩選條件",
      "沒有把任務排成一週可執行清單",
      "在 Prompt 中填入身分證、住址、電話等敏感資料"
    ],
    "enCommonMistakes": [
      "Asking AI “how do I apply?” without majors or current status",
      "Treating AI multipliers/subject tips as official rules",
      "Preparing only the portfolio while ignoring Stage-1 filters",
      "Leaving tasks as a vague list with no weekly plan",
      "Putting ID numbers, addresses, or phone numbers into prompts"
    ],
    "zhExcellentExample": "高品質準備地圖應包含：目標校系列表、第一階段查證項、第二階段備審／面試項、已有／缺少對照、7 天行動、需查簡章清單。",
    "enExcellentExample": "A strong map includes: target majors, Stage-1 checks, Stage-2 materials/interview items, have/need table, 7-day plan, brochure checklist.",
    "zhCoachPrompt": "你是一位大學申請流程教練。請檢查我的大學申請準備地圖，並指出：第一階段是否有漏掉篩選條件、第二階段是否有準備備審與面試、時間安排是否可行、哪些資訊需要回到招生簡章查證。最後請給我未來 7 天行動清單。",
    "enCoachPrompt": "你是一位大學申請流程教練。請檢查我的大學申請準備地圖，並指出：第一階段是否有漏掉篩選條件、第二階段是否有準備備審與面試、時間安排是否可行、哪些資訊需要回到招生簡章查證。最後請給我未來 7 天行動清單。",
    "id": "admissions-L1",
    "lessonKey": "admissions-L1",
    "zhWhyItMatters": {
      "problem": "不知道申請從哪裡開始，容易東抓西補，時間花了卻對不上真正的篩選與備審需求。",
      "ineffective": "只問 AI「幫我申請大學」，沒有目標科系、成績概況與現況，得到的建議無法執行。",
      "solution": "用一份準備地圖分開第一／二階段任務，標出缺口與 7 天行動，並標註需查官方簡章的項目。"
    },
    "enWhyItMatters": {
      "problem": "Without a starting map, students scatter effort and miss what Stage 1 and Stage 2 actually require.",
      "ineffective": "Asking AI “help me apply to college” with no majors, academic overview, or current status yields unusable advice.",
      "solution": "Build a preparation map that separates Stage 1/2 tasks, lists gaps and a 7-day plan, and flags brochure checks."
    },
    "zhObjectives": [
      "說清楚大學申請至少包含第一階段篩選與第二階段備審／面試",
      "列出自己暫定的目標科系與目前狀態",
      "分辨 AI 適合協助與必須自己查證的事項",
      "產出一份可執行的 7 天準備行動清單",
      "把成果存成「大學申請準備地圖」"
    ],
    "enObjectives": [
      "Explain that applications include Stage-1 screening and Stage-2 materials/interview",
      "List tentative target majors and your current status",
      "Separate what AI can help with vs. what you must verify",
      "Produce an actionable 7-day prep list",
      "Save an Application Preparation Map"
    ],
    "estimatedTime": "約 45 分鐘 / About 45 min",
    "difficulty": "入門 / Beginner",
    "zhOutputName": "大學申請準備地圖",
    "enOutputName": "University Application Preparation Map",
    "zhCaseStudyBlocks": {
      "problem": "高三生小安想申請資訊相關科系，但只有成績概況與模糊興趣，不知道先準備什麼。",
      "wrong": "直接叫 AI「幫我申請大學／幫我寫備審」，沒有提供科系、現況與時間限制，得到無法查證的空泛清單。",
      "right": "先寫 3 個暫定科系與已有／缺少資料，再請 AI 產出分階段準備地圖，並把數字與規定標成「需查官方簡章」。",
      "result": "一份可放入大學申請包的「大學申請準備地圖」，含缺口與未來 7 天行動。"
    },
    "enCaseStudyBlocks": {
      "problem": "Senior An wants an IT-related major but only has a rough score overview and a vague interest.",
      "wrong": "Asking AI to “apply for me / write my portfolio” without majors, status, or timing yields unverifiable fluff.",
      "right": "Provide 3 tentative majors and gaps, then ask AI for a staged map and mark numbers/rules as “check official brochure.”",
      "result": "An Application Preparation Map ready for the application kit, with gaps and a 7-day plan."
    },
    "zhWorkflowSteps": [
      {
        "do": "寫下 3 個暫定目標科系與目前狀態",
        "why": "沒有目標就無法排出優先順序",
        "input": "年級、成績概況、暫定科系",
        "output": "目標清單草稿",
        "check": "是否寫到具體科系名稱，而不只是「喜歡電腦」"
      },
      {
        "do": "盤點已有資料與缺口",
        "why": "避免重複做已經有的事",
        "input": "學習歷程、活動、作品清單",
        "output": "已有／缺少對照",
        "check": "缺口是否寫成可行動項目"
      },
      {
        "do": "用 Prompt 產出準備地圖",
        "why": "把焦慮轉成階段任務",
        "input": "上一步資料",
        "output": "分階段地圖",
        "check": "是否分開第一／二階段"
      },
      {
        "do": "標註需查證項目",
        "why": "AI 不是官方簡章",
        "input": "地圖草稿",
        "output": "查證清單",
        "check": "是否沒有把 AI 數字當正式規定"
      },
      {
        "do": "存入成果並自我檢查",
        "why": "後續課堂會沿用這份地圖",
        "input": "定稿地圖",
        "output": "成果包項目",
        "check": "是否含 7 天行動"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "List 3 tentative majors and status",
        "why": "Priorities need targets",
        "input": "Grade, academic overview, majors",
        "output": "Target draft",
        "check": "Specific major names, not only “like computers”"
      },
      {
        "do": "Inventory assets and gaps",
        "why": "Avoid redo work",
        "input": "Portfolio/activity lists",
        "output": "Have/need table",
        "check": "Gaps are actionable"
      },
      {
        "do": "Generate the map with the prompt",
        "why": "Turn anxiety into staged tasks",
        "input": "Prior notes",
        "output": "Staged map",
        "check": "Stage 1 and 2 are separate"
      },
      {
        "do": "Flag verification items",
        "why": "AI is not the brochure",
        "input": "Draft map",
        "output": "Verify list",
        "check": "No AI numbers treated as official"
      },
      {
        "do": "Save and self-check",
        "why": "Later lessons reuse this map",
        "input": "Final map",
        "output": "Package entry",
        "check": "Includes a 7-day plan"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "寫下 3 個暫定目標科系與目前狀態",
        "standard": "科系名稱具體，狀態可用一句話說清",
        "mistakes": "只寫「想讀好科系」",
        "check": "別人能否立刻看懂你的方向？"
      },
      {
        "task": "列出已有／缺少資料",
        "standard": "至少各 3 項",
        "mistakes": "只寫「什麼都沒有」卻不拆項目",
        "check": "缺口是否可變成待辦？"
      },
      {
        "task": "用 Prompt 產出地圖並查證標註",
        "standard": "含第一／二階段與 7 天行動",
        "mistakes": "直接照抄未改寫",
        "check": "是否已改成自己的語氣與真實情況？"
      },
      {
        "task": "存入成果包",
        "standard": "成果名稱正確且內容完整",
        "mistakes": "空白儲存",
        "check": "重新整理後仍看得到內容？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "List 3 tentative majors and status",
        "standard": "Specific majors; status in one clear sentence",
        "mistakes": "Only “a good major”",
        "check": "Would a reader understand your direction?"
      },
      {
        "task": "List have vs. lack",
        "standard": "At least 3 items each",
        "mistakes": "Only “I have nothing” with no breakdown",
        "check": "Can gaps become tasks?"
      },
      {
        "task": "Run the prompt and mark verification",
        "standard": "Includes Stage 1/2 and 7-day actions",
        "mistakes": "Paste AI text unchanged",
        "check": "Rewritten in your voice with real facts?"
      },
      {
        "task": "Save to the package",
        "standard": "Correct deliverable name and complete content",
        "mistakes": "Saving blank text",
        "check": "Still visible after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "當你要釐清申請流程與本週行動時使用",
      "fields": [
        "[請填寫年級]",
        "[目標科系]",
        "[想改善的問題]"
      ],
      "body": "你是大學申請規劃教練，不是代寫者，也不可捏造成績、獎項或經歷。\n\n我的背景：\n- 年級：[請填寫年級]\n- 目前成績概況：[請填寫學測/模擬考概況，勿填身分證或電話]\n- 目標科系（暫定）：[目標科系]\n- 目前卡關：[想改善的問題]\n\n任務：幫我產出「大學申請準備地圖」，包含：\n1) 第一階段可能要確認的項目（採計、檢定、倍率等——標註「需查官方簡章」）\n2) 第二階段備審與面試準備項目\n3) 我目前已有／缺少的資料\n4) 未來 7 天可執行行動（每天 1–2 件事）\n\n輸出格式：\n- 用條列與表格\n- 每個建議旁註明「根據你提供的資料」或「需自行查證」\n- 不要保證錄取，不要編造我沒有的經歷\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "一份含第一／二階段、缺口與 7 天行動的準備地圖",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "extensions": [
        {
          "title": "延伸：查證提醒 Prompt",
          "body": "請根據我貼上的準備地圖，列出「必須回官方簡章查證」的項目清單，並告訴我每個項目要查哪個欄位。不要猜測具體數字。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when clarifying the application process and this week’s actions",
      "fields": [
        "[fill in grade]",
        "[target majors]",
        "[problem to improve]"
      ],
      "body": "You are a university-application planning coach—not a ghostwriter. Do not invent grades, awards, or experiences.\n\nMy background:\n- Grade level: [fill in grade]\n- Current academic overview: [fill in exam/mock overview; no ID/phone]\n- Tentative target majors: [target majors]\n- Current blocker: [problem to improve]\n\nTask: Produce an Application Preparation Map with:\n1) Stage-1 items to verify (subjects, thresholds, multipliers—mark “check official brochure”)\n2) Stage-2 portfolio and interview prep items\n3) What I already have vs. what is missing\n4) A 7-day action list (1–2 tasks per day)\n\nOutput format:\n- Use bullets and tables\n- Label each tip as “based on your input” or “verify yourself”\n- No admission guarantees; invent nothing I did not provide\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A preparation map with stage-1/2 items, gaps, and a 7-day plan",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "extensions": [
        {
          "title": "Extension: verification prompt",
          "body": "From my preparation map, list items that must be verified in the official brochure and which fields to check. Do not invent numbers."
        }
      ]
    },
    "zhNextStep": "下一堂會盤點興趣與優勢，把這份地圖上的暫定科系變成更有依據的科系探索表。",
    "enNextStep": "Next, map your interests and strengths so these tentative majors become an evidence-based major exploration sheet.",
    "zhConceptBlocks": {
      "principles": [
        "申請準備要分階段，不要一次想做完所有事",
        "AI 負責拆解與檢查缺口，你負責提供真實資料與查證",
        "沒有地圖的努力很容易做錯方向"
      ],
      "terms": [
        "第一階段：成績／檢定等篩選相關準備（以當年度簡章為準）",
        "第二階段：備審資料與面試等表現相關準備",
        "準備地圖：把任務、缺口與時程寫在同一頁"
      ],
      "criteria": [
        "能說出自己暫定科系",
        "能分開第一／二階段任務",
        "有一週內可執行的行動"
      ],
      "boundaries": [
        "避免：要求 AI 保證錄取",
        "避免：把 AI 數字當官方規定",
        "避免：輸入敏感個資"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Prep in stages—do not try to finish everything at once",
        "AI breaks down tasks; you provide real data and verify",
        "Effort without a map often goes the wrong way"
      ],
      "terms": [
        "Stage 1: screening-related prep (follow the current brochure)",
        "Stage 2: portfolio and interview-related prep",
        "Preparation map: tasks, gaps, and timing on one page"
      ],
      "criteria": [
        "Can name tentative majors",
        "Can separate Stage 1/2 tasks",
        "Has actions doable within a week"
      ],
      "boundaries": [
        "Avoid: asking AI for admission guarantees",
        "Avoid: treating AI numbers as official rules",
        "Avoid: entering sensitive personal data"
      ]
    }
  },
  {
    "zhTitle": "第2課：用 AI 盤點興趣與優勢，找出科系方向",
    "enTitle": "Lesson 2: Use AI to map interests and strengths for major direction",
    "zhConcept": "很多學生不是沒有興趣，而是興趣很散，無法對應到科系。這一課要解決的問題是：把「我好像喜歡很多東西」整理成可比較的科系探索表，讓後續比較校系與備審有依據。重點不是一次訂生死志願，而是先有證據化的方向。",
    "enConcept": "Many students have interests—they’re just scattered. This lesson turns “I like lots of things” into a comparable major exploration sheet so later program comparison and portfolio work have a basis. The goal is evidence-based direction, not a final irrevocable choice.",
    "zhPrompt": "你是高中升學探索教練。不可捏造我的興趣、成績或經歷。\n\n我的背景：\n- 喜歡的科目／主題：[請填寫……]\n- 相對有把握的能力：[請填寫……]\n- 較不喜歡或想避開的：[請填寫……]\n- 活動／專題經驗摘要：[個人經歷]\n- 未來想像（可模糊）：[請填寫……]\n\n任務：產出「科系探索表」：\n1) 推薦 5 個可能適合的科系方向（說明推薦理由，必須連結我提供的資料）\n2) 每個科系列出：可能需要的能力、高中可準備的證據、潛在風險／不適合點\n3) 幫我縮成 3 個優先探索科系，並說明取捨邏輯\n4) 列出我下一步要查的官方資訊（課表、出路、招生方式——勿捏造具體規定）\n\n限制：不要保證錄取；不要編造獎項；若資訊不足先問我。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a high-school major-exploration coach. Do not invent my interests, grades, or experiences.\n\nMy background:\n- Subjects/themes I like: [fill in…]\n- Strengths I feel more confident about: [fill in…]\n- Things I dislike or want to avoid: [fill in…]\n- Activity/project summary: [personal experience]\n- Future imagination (can be fuzzy): [fill in…]\n\nTask: Produce a Major Exploration Sheet:\n1) Suggest 5 possible major directions with reasons tied to my inputs\n2) For each: likely skills needed, evidence I could prepare in high school, risks/misfit points\n3) Narrow to 3 priority majors with trade-off logic\n4) List official info I should check next (curriculum, paths, admissions—do not invent rules)\n\nLimits: no admission guarantees; no fake awards; ask me if information is missing.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "喜歡：生物實驗、做海報；擅長：觀察細節、協助同學；避開：純背誦；活動：設計社美宣。",
    "enExample": "Likes: bio labs, posters; strengths: detail, helping peers; avoids: pure memorization; activity: design club visuals.",
    "zhPractice": "完成興趣／優勢／避開盤點。；用 Prompt 產出 5 個可能科系。；縮成 3 個優先科系並寫取捨。；存成科系探索表。",
    "enPractice": "Finish likes/strengths/avoids inventory.; Generate 5 possible majors.; Narrow to 3 with trade-offs.; Save the Major Exploration Sheet.",
    "zhFeedbackPrompt": "你是一位高中升學輔導老師與生涯探索顧問。\n\n以下是我完成的「科系探索表」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 興趣連結度：1-10 分，並說明扣分原因\n- 能力匹配度：1-10 分，並說明扣分原因\n- 科系理解度：1-10 分，並說明扣分原因\n- 未來發展清楚度：1-10 分，並說明扣分原因\n- 查證完整度：1-10 分，並說明扣分原因\n- 選擇理由具體度：1-10 分，並說明扣分原因\n- 風險評估：1-10 分，並說明扣分原因\n- 決策成熟度：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪個科系看起來最適合我？哪個可能只是表面有興趣？\n2. 請指出我還需要查哪些課程、出路或能力要求。\n3. 請幫我把 3 個優先科系重新排序。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 高中升學輔導老師與生涯探索顧問.\n\nHere is my completed work for: 科系探索表\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 興趣連結度：1-10 分，並說明扣分原因\n- 能力匹配度：1-10 分，並說明扣分原因\n- 科系理解度：1-10 分，並說明扣分原因\n- 未來發展清楚度：1-10 分，並說明扣分原因\n- 查證完整度：1-10 分，並說明扣分原因\n- 選擇理由具體度：1-10 分，並說明扣分原因\n- 風險評估：1-10 分，並說明扣分原因\n- 決策成熟度：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪個科系看起來最適合我？哪個可能只是表面有興趣？\n2. 請指出我還需要查哪些課程、出路或能力要求。\n3. 請幫我把 3 個優先科系重新排序。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "選科系時，只看科系名稱會有什麼問題？",
        "options": [
          "可能誤解實際課程內容",
          "一定比較準",
          "完全沒有問題"
        ],
        "answer": 0,
        "explain": "科系名稱不等於課程內容，必須查課表與能力要求。"
      },
      {
        "q": "AI 分析科系前，最好提供什麼？",
        "options": [
          "興趣、能力、科目、活動與限制",
          "只有姓名",
          "完全不提供背景"
        ],
        "answer": 0,
        "explain": "背景越完整，建議越貼近學生。"
      },
      {
        "q": "科系探索表最需要包含？",
        "options": [
          "適合原因、能力需求、課程內容與出路",
          "只有校名",
          "只有排名"
        ],
        "answer": 0,
        "explain": "這些資訊能幫助學生做出更成熟的選擇。"
      },
      {
        "q": "AI 推薦科系後，下一步應該？",
        "options": [
          "查證課程與出路",
          "立刻相信",
          "刪掉所有資料"
        ],
        "answer": 0,
        "explain": "AI 推薦只是起點，仍需查證。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "科系探索表",
          "面試紀錄",
          "最終總檢查"
        ],
        "answer": 0,
        "explain": "本課要產出科系探索表。"
      }
    ],
    "enQuizItems": [
      {
        "q": "選科系時，只看科系名稱會有什麼問題？",
        "options": [
          "可能誤解實際課程內容",
          "一定比較準",
          "完全沒有問題"
        ],
        "answer": 0,
        "explain": "科系名稱不等於課程內容，必須查課表與能力要求。"
      },
      {
        "q": "AI 分析科系前，最好提供什麼？",
        "options": [
          "興趣、能力、科目、活動與限制",
          "只有姓名",
          "完全不提供背景"
        ],
        "answer": 0,
        "explain": "背景越完整，建議越貼近學生。"
      },
      {
        "q": "科系探索表最需要包含？",
        "options": [
          "適合原因、能力需求、課程內容與出路",
          "只有校名",
          "只有排名"
        ],
        "answer": 0,
        "explain": "這些資訊能幫助學生做出更成熟的選擇。"
      },
      {
        "q": "AI 推薦科系後，下一步應該？",
        "options": [
          "查證課程與出路",
          "立刻相信",
          "刪掉所有資料"
        ],
        "answer": 0,
        "explain": "AI 推薦只是起點，仍需查證。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "科系探索表",
          "面試紀錄",
          "最終總檢查"
        ],
        "answer": 0,
        "explain": "本課要產出科系探索表。"
      }
    ],
    "zhOutcome": "科系探索表",
    "enOutcome": "Major Exploration Sheet",
    "zhNotePrompt": "請在課程筆記中寫下：我最有興趣的 3 個科系、選擇理由、需要查證的資料。",
    "enNotePrompt": "請在課程筆記中寫下：我最有興趣的 3 個科系、選擇理由、需要查證的資料。",
    "zhDeliverableChecklist": [
      "已列出興趣、優勢與避開事項",
      "已有 5 個可能科系與適合原因",
      "每個科系有需要能力與可準備證據",
      "已選出 3 個優先科系並說明取捨",
      "沒有捏造經歷或保證錄取",
      "已改成自己的真實版本並存檔"
    ],
    "enDeliverableChecklist": [
      "Interests, strengths, and avoids listed",
      "5 possible majors with fit reasons",
      "Skills and evidence for each major",
      "3 priorities with trade-offs",
      "No invented experience or admission guarantees",
      "Personalized and saved"
    ],
    "zhScorecard": [
      "興趣連結",
      "能力匹配",
      "科系理解",
      "未來發展",
      "查證完整"
    ],
    "enScorecard": [
      "興趣連結",
      "能力匹配",
      "科系理解",
      "未來發展",
      "查證完整"
    ],
    "zhValueTip": "先探索再比較：沒有探索表，後面的志願邏輯會變成感覺投票。",
    "enValueTip": "Explore before you compare: without an exploration sheet, preference logic becomes vibes-only.",
    "zhCaseStudy": "學生小瑜喜歡生物、設計社團和幫同學做簡報，但一直說「我什麼都想讀」。她先列出喜歡／擅長／避開，再用 Prompt 得到 5 個方向（如生科、設傳、教育科技等），並標出每個方向需要什麼證據。最後她選出 3 個優先探索科系，開始查課表而不是繼續焦慮。",
    "enCaseStudy": "Yu likes biology, design club, and helping classmates with slides, but kept saying “I want everything.” After listing likes/strengths/avoids, a prompt produced 5 directions with evidence needs. She narrowed to 3 priorities and started checking curricula instead of spinning.",
    "zhWorkflow": [
      "填寫興趣、優勢、避開事項與活動摘要",
      "用 Prompt 產出 5 個可能科系與理由",
      "為每個科系補上需要能力與可準備證據",
      "縮成 3 個優先科系並寫取捨理由",
      "存成科系探索表，準備下一堂比較校系"
    ],
    "enWorkflow": [
      "Fill interests, strengths, avoids, and activity summary",
      "Generate 5 possible majors with reasons",
      "Add skills needed and evidence for each",
      "Narrow to 3 priorities with trade-offs",
      "Save the sheet for next lesson’s program comparison"
    ],
    "zhCommonMistakes": [
      "只給 AI 一句「我適合什麼」",
      "把探索表當成最終志願，拒絕再查證",
      "推薦理由與自己經歷無關",
      "沒有寫不適合或風險點",
      "要求 AI 保證某個科系一定錄取"
    ],
    "enCommonMistakes": [
      "Only giving AI one vague sentence",
      "Treating the sheet as final choices with no verification",
      "Fit reasons unrelated to your experience",
      "Skipping misfit/risk notes",
      "Asking AI to guarantee admission to a major"
    ],
    "zhExcellentExample": "探索表應含：個人盤點、五科系比較欄、三優先與取捨、下一步查證清單。",
    "enExcellentExample": "Sheet should include inventory, five-major comparison columns, top-3 trade-offs, and next verification list.",
    "zhCoachPrompt": "你是一位高中生升學探索顧問。請檢查我的科系探索表，幫我判斷哪些科系是真的適合、哪些只是表面有興趣。請指出我還需要查哪些課程內容、能力需求與未來出路，最後幫我排序前三志願。",
    "enCoachPrompt": "你是一位高中生升學探索顧問。請檢查我的科系探索表，幫我判斷哪些科系是真的適合、哪些只是表面有興趣。請指出我還需要查哪些課程內容、能力需求與未來出路，最後幫我排序前三志願。",
    "id": "admissions-L2",
    "lessonKey": "admissions-L2",
    "zhWhyItMatters": {
      "problem": "興趣與優勢說不清楚，選系容易跟風或只看校名。",
      "ineffective": "直接問 AI「我適合什麼科系」卻不提供科目、活動與避開事項，得到通用清單。",
      "solution": "先盤點喜歡／擅長／避開，再請 AI 產出可比較的科系探索表並縮成 3 個優先方向。"
    },
    "enWhyItMatters": {
      "problem": "Unclear interests/strengths lead to following trends or brand names.",
      "ineffective": "Asking “What major fits me?” without subjects, activities, and avoid-list yields generic lists.",
      "solution": "Inventory likes/strengths/avoids, then build a comparable exploration sheet and narrow to 3 priorities."
    },
    "zhObjectives": [
      "盤點自己的興趣、優勢與想避開的方向",
      "產出 5 個可能適合的科系並寫出適合原因",
      "為每個科系列出需要能力與可準備證據",
      "縮成 3 個優先探索科系並說明取捨",
      "完成「科系探索表」並存檔"
    ],
    "enObjectives": [
      "Inventory interests, strengths, and avoid directions",
      "Produce 5 possible majors with fit reasons",
      "List needed skills and evidence for each",
      "Narrow to 3 priority majors with trade-offs",
      "Save the Major Exploration Sheet"
    ],
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "入門 / Beginner",
    "zhOutputName": "科系探索表",
    "enOutputName": "Major Exploration Sheet",
    "zhCaseStudyBlocks": {
      "problem": "小瑜興趣很廣，無法對應到具體科系，選系討論常卡住。",
      "wrong": "只丟一句「我適合什麼科系」給 AI，或只看科系名稱好不好聽。",
      "right": "先寫喜歡／擅長／避開與活動摘要，再產出可比較的探索表並縮成 3 個優先方向。",
      "result": "一份能支撐後續校系比較的「科系探索表」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Yu’s interests are broad; major talks stall.",
      "wrong": "Only asking “What major fits me?” or choosing by how a name sounds.",
      "right": "Provide likes/strengths/avoids and activity notes, then build a comparable sheet and top 3.",
      "result": "A Major Exploration Sheet that supports later program comparison."
    },
    "zhWorkflowSteps": [
      {
        "do": "盤點喜歡／擅長／避開",
        "why": "探索要有邊界",
        "input": "科目與活動筆記",
        "output": "個人素材卡",
        "check": "是否包含「不想做的事」"
      },
      {
        "do": "請 AI 產出 5 個方向",
        "why": "先發散再收斂",
        "input": "素材卡",
        "output": "五科系列表",
        "check": "理由是否引用你的資料"
      },
      {
        "do": "補能力與證據欄",
        "why": "避免空談適合",
        "input": "五科系列表",
        "output": "探索表初稿",
        "check": "每個科系是否有可準備證據"
      },
      {
        "do": "縮成 3 個優先",
        "why": "下一堂要深入比較",
        "input": "初稿",
        "output": "優先三科系",
        "check": "是否寫出放棄其他兩項的理由"
      },
      {
        "do": "存檔並自我檢查",
        "why": "後續備審會回看",
        "input": "定稿",
        "output": "成果包",
        "check": "表格是否可給顧問看懂"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Inventory likes/strengths/avoids",
        "why": "Exploration needs boundaries",
        "input": "Subject/activity notes",
        "output": "Personal material card",
        "check": "Includes things you do not want"
      },
      {
        "do": "Generate 5 directions with AI",
        "why": "Diverge before converging",
        "input": "Material card",
        "output": "Five-major list",
        "check": "Reasons cite your inputs"
      },
      {
        "do": "Add skills and evidence columns",
        "why": "Avoid empty “fit” talk",
        "input": "Five-major list",
        "output": "Sheet draft",
        "check": "Each major has preparable evidence"
      },
      {
        "do": "Narrow to top 3",
        "why": "Next lesson compares deeply",
        "input": "Draft",
        "output": "Priority three",
        "check": "Trade-offs written"
      },
      {
        "do": "Save and self-check",
        "why": "Later portfolio work revisits this",
        "input": "Final",
        "output": "Package entry",
        "check": "Readable to an advisor"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "完成個人盤點卡",
        "standard": "喜歡／擅長／避開都有具體例子",
        "mistakes": "只寫形容詞",
        "check": "有沒有可觀察的行為例子？"
      },
      {
        "task": "產出五科系探索",
        "standard": "每系有理由與風險",
        "mistakes": "只有校系名稱",
        "check": "理由是否引用你的資料？"
      },
      {
        "task": "收斂三個優先",
        "standard": "有取捨邏輯",
        "mistakes": "五個都想要、無法排序",
        "check": "能否向家人解釋為什麼這三個？"
      },
      {
        "task": "存入成果包",
        "standard": "表格完整可讀",
        "mistakes": "空白或未改寫",
        "check": "是否已個人化？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Complete personal inventory",
        "standard": "Concrete examples for likes/strengths/avoids",
        "mistakes": "Only adjectives",
        "check": "Observable behavior examples?"
      },
      {
        "task": "Build five-major exploration",
        "standard": "Reasons and risks per major",
        "mistakes": "Names only",
        "check": "Reasons cite your data?"
      },
      {
        "task": "Converge to top 3",
        "standard": "Clear trade-offs",
        "mistakes": "Wanting all five equally",
        "check": "Can you explain the three to family?"
      },
      {
        "task": "Save to package",
        "standard": "Complete readable table",
        "mistakes": "Blank or unedited AI text",
        "check": "Personalized?"
      }
    ],
    "zhPromptPack": {
      "when": "當你要用興趣與優勢找出科系方向時使用",
      "fields": [
        "[請填寫……]",
        "[個人經歷]",
        "[目標科系]"
      ],
      "body": "你是高中升學探索教練。不可捏造我的興趣、成績或經歷。\n\n我的背景：\n- 喜歡的科目／主題：[請填寫……]\n- 相對有把握的能力：[請填寫……]\n- 較不喜歡或想避開的：[請填寫……]\n- 活動／專題經驗摘要：[個人經歷]\n- 未來想像（可模糊）：[請填寫……]\n\n任務：產出「科系探索表」：\n1) 推薦 5 個可能適合的科系方向（說明推薦理由，必須連結我提供的資料）\n2) 每個科系列出：可能需要的能力、高中可準備的證據、潛在風險／不適合點\n3) 幫我縮成 3 個優先探索科系，並說明取捨邏輯\n4) 列出我下一步要查的官方資訊（課表、出路、招生方式——勿捏造具體規定）\n\n限制：不要保證錄取；不要編造獎項；若資訊不足先問我。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "一份含 5 個可能科系與 3 個優先科系的探索表",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when mapping interests/strengths to major directions",
      "fields": [
        "[fill in…]",
        "[personal experience]",
        "[target majors]"
      ],
      "body": "You are a high-school major-exploration coach. Do not invent my interests, grades, or experiences.\n\nMy background:\n- Subjects/themes I like: [fill in…]\n- Strengths I feel more confident about: [fill in…]\n- Things I dislike or want to avoid: [fill in…]\n- Activity/project summary: [personal experience]\n- Future imagination (can be fuzzy): [fill in…]\n\nTask: Produce a Major Exploration Sheet:\n1) Suggest 5 possible major directions with reasons tied to my inputs\n2) For each: likely skills needed, evidence I could prepare in high school, risks/misfit points\n3) Narrow to 3 priority majors with trade-off logic\n4) List official info I should check next (curriculum, paths, admissions—do not invent rules)\n\nLimits: no admission guarantees; no fake awards; ask me if information is missing.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "An exploration sheet with 5 possible and 3 priority majors",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "下一堂用這 3 個優先科系做校系比較，建立有理由的志願選擇邏輯。",
    "enNextStep": "Next, compare programs for these 3 priorities and build preference logic with reasons.",
    "zhConceptBlocks": {
      "principles": [
        "探索先於決定",
        "適合要能說出證據",
        "保留不適合點才算誠實"
      ],
      "terms": [
        "科系探索表",
        "優先探索科系",
        "可準備證據"
      ],
      "criteria": [
        "五個方向可比較",
        "三個優先有取捨",
        "理由連結自己資料"
      ],
      "boundaries": [
        "避免：AI 替你決定人生",
        "避免：捏造興趣",
        "避免：把探索當最終志願"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Explore before deciding",
        "Fit needs evidence",
        "Honest sheets include misfits"
      ],
      "terms": [
        "Major exploration sheet",
        "Priority majors",
        "Preparable evidence"
      ],
      "criteria": [
        "Five comparable directions",
        "Top three with trade-offs",
        "Reasons tied to your data"
      ],
      "boundaries": [
        "Avoid: letting AI decide your life",
        "Avoid: inventing interests",
        "Avoid: treating exploration as final"
      ]
    }
  },
  {
    "zhTitle": "第3課：用 AI 比較校系，建立志願選擇邏輯",
    "enTitle": "Lesson 3: Use AI to compare programs and build preference logic",
    "zhConcept": "有了科系方向後，下一個卡關常是：同樣名稱的校系差在哪？為什麼志願這樣排？這一課要解決「感覺排序」問題，把上一課的優先科系做成可說明的比較表與選擇邏輯，方便之後寫動機與面試回答。",
    "enConcept": "After direction comes the next stuck point: how do similarly named programs differ, and why this preference order? This lesson replaces vibe-ranking with a explainable comparison table and preference logic—useful later for motivation essays and interviews.",
    "zhPrompt": "你是大學志願選擇教練。不可捏造學校排名保證或錄取結果。\n\n我的背景：\n- 優先探索科系（來自上一課）：[目標科系]\n- 我在乎的條件（例如課程、地點、負擔、實作機會）：[請填寫……]\n- 目前已知資訊（課表／簡章摘要，自行查過的）：[請填寫……]\n- 還不確定的問題：[想改善的問題]\n\n任務：產出「校系比較與志願選擇邏輯表」：\n1) 幫我建立比較維度（至少 5 個，需符合我在乎的條件）\n2) 針對 3 個優先方向做比較（資訊不足處標「待查證」）\n3) 寫出「若 A 優於 B」的判斷規則（選擇邏輯）\n4) 給出一版暫定志願排序草稿，並說明可在何時調整\n\n限制：不要用「一定比較好」這種空話；不要捏造學費、分數或錄取率；提醒我回官方簡章與學校網站查證。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a preference-logic coach for university programs. Do not invent ranking guarantees or admission outcomes.\n\nMy background:\n- Priority majors (from last lesson): [target majors]\n- What I care about (curriculum, location, load, hands-on chances…): [fill in…]\n- What I already verified (curriculum/brochure notes): [fill in…]\n- Open questions: [problem to improve]\n\nTask: Produce a Program Comparison & Preference Logic Table:\n1) Build comparison dimensions (at least 5, matching what I care about)\n2) Compare 3 priority directions (mark unknowns as “to verify”)\n3) Write if-then preference rules (when A beats B)\n4) Draft a tentative order and when I should revisit it\n\nLimits: no empty “always better” claims; no invented tuition/scores/rates; remind me to verify on official sites/brochures.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "優先：資管／資工／數據；在乎：實作、數學負擔、交通；已知：某系專題課較多（自行查過課程頁）。",
    "enExample": "Priorities: IM/CS/Data; cares: hands-on, math load, commute; known: one program has more project courses (verified on course page).",
    "zhPractice": "列出比較維度。；填入三優先校系已知資訊。；用 Prompt 產出比較與 if-then 邏輯。；存成校系比較與志願選擇邏輯表。",
    "enPractice": "List dimensions.; Fill known info for three priorities.; Generate comparison and if-then logic.; Save the logic table.",
    "zhFeedbackPrompt": "你是一位高中升學輔導老師與生涯探索顧問。\n\n以下是我完成的「科系探索表」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 興趣連結度：1-10 分，並說明扣分原因\n- 能力匹配度：1-10 分，並說明扣分原因\n- 科系理解度：1-10 分，並說明扣分原因\n- 未來發展清楚度：1-10 分，並說明扣分原因\n- 查證完整度：1-10 分，並說明扣分原因\n- 選擇理由具體度：1-10 分，並說明扣分原因\n- 風險評估：1-10 分，並說明扣分原因\n- 決策成熟度：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪個科系看起來最適合我？哪個可能只是表面有興趣？\n2. 請指出我還需要查哪些課程、出路或能力要求。\n3. 請幫我把 3 個優先科系重新排序。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 高中升學輔導老師與生涯探索顧問.\n\nHere is my completed work for: 科系探索表\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 興趣連結度：1-10 分，並說明扣分原因\n- 能力匹配度：1-10 分，並說明扣分原因\n- 科系理解度：1-10 分，並說明扣分原因\n- 未來發展清楚度：1-10 分，並說明扣分原因\n- 查證完整度：1-10 分，並說明扣分原因\n- 選擇理由具體度：1-10 分，並說明扣分原因\n- 風險評估：1-10 分，並說明扣分原因\n- 決策成熟度：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪個科系看起來最適合我？哪個可能只是表面有興趣？\n2. 請指出我還需要查哪些課程、出路或能力要求。\n3. 請幫我把 3 個優先科系重新排序。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "選科系時，只看科系名稱會有什麼問題？",
        "options": [
          "可能誤解實際課程內容",
          "一定比較準",
          "完全沒有問題"
        ],
        "answer": 0,
        "explain": "科系名稱不等於課程內容，必須查課表與能力要求。"
      },
      {
        "q": "AI 分析科系前，最好提供什麼？",
        "options": [
          "興趣、能力、科目、活動與限制",
          "只有姓名",
          "完全不提供背景"
        ],
        "answer": 0,
        "explain": "背景越完整，建議越貼近學生。"
      },
      {
        "q": "科系探索表最需要包含？",
        "options": [
          "適合原因、能力需求、課程內容與出路",
          "只有校名",
          "只有排名"
        ],
        "answer": 0,
        "explain": "這些資訊能幫助學生做出更成熟的選擇。"
      },
      {
        "q": "AI 推薦科系後，下一步應該？",
        "options": [
          "查證課程與出路",
          "立刻相信",
          "刪掉所有資料"
        ],
        "answer": 0,
        "explain": "AI 推薦只是起點，仍需查證。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "科系探索表",
          "面試紀錄",
          "最終總檢查"
        ],
        "answer": 0,
        "explain": "本課要產出科系探索表。"
      }
    ],
    "enQuizItems": [
      {
        "q": "選科系時，只看科系名稱會有什麼問題？",
        "options": [
          "可能誤解實際課程內容",
          "一定比較準",
          "完全沒有問題"
        ],
        "answer": 0,
        "explain": "科系名稱不等於課程內容，必須查課表與能力要求。"
      },
      {
        "q": "AI 分析科系前，最好提供什麼？",
        "options": [
          "興趣、能力、科目、活動與限制",
          "只有姓名",
          "完全不提供背景"
        ],
        "answer": 0,
        "explain": "背景越完整，建議越貼近學生。"
      },
      {
        "q": "科系探索表最需要包含？",
        "options": [
          "適合原因、能力需求、課程內容與出路",
          "只有校名",
          "只有排名"
        ],
        "answer": 0,
        "explain": "這些資訊能幫助學生做出更成熟的選擇。"
      },
      {
        "q": "AI 推薦科系後，下一步應該？",
        "options": [
          "查證課程與出路",
          "立刻相信",
          "刪掉所有資料"
        ],
        "answer": 0,
        "explain": "AI 推薦只是起點，仍需查證。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "科系探索表",
          "面試紀錄",
          "最終總檢查"
        ],
        "answer": 0,
        "explain": "本課要產出科系探索表。"
      }
    ],
    "zhOutcome": "校系比較與志願選擇邏輯表",
    "enOutcome": "Program Comparison & Preference Logic Table",
    "zhNotePrompt": "請在課程筆記中寫下：我最有興趣的 3 個科系、選擇理由、需要查證的資料。",
    "enNotePrompt": "請在課程筆記中寫下：我最有興趣的 3 個科系、選擇理由、需要查證的資料。",
    "zhDeliverableChecklist": [
      "至少 5 個比較維度",
      "三個優先方向都有比較內容",
      "未知資訊已標待查證",
      "有清楚的 if-then 選擇邏輯",
      "有暫定志願排序草稿",
      "未把 AI 當官方規定，已改成自己的版本"
    ],
    "enDeliverableChecklist": [
      "At least 5 dimensions",
      "All three priorities compared",
      "Unknowns marked to verify",
      "Clear if-then preference logic",
      "Tentative order drafted",
      "Not treating AI as official rules; personalized"
    ],
    "zhScorecard": [
      "興趣連結",
      "能力匹配",
      "科系理解",
      "未來發展",
      "查證完整"
    ],
    "enScorecard": [
      "興趣連結",
      "能力匹配",
      "科系理解",
      "未來發展",
      "查證完整"
    ],
    "zhValueTip": "志願要排得讓「未來的你」在面試時講得出理由，而不是只排感覺。",
    "enValueTip": "Rank preferences so Future You can explain them in an interview—not by vibe alone.",
    "zhCaseStudy": "學生阿哲上一課選了資管、資工、數據相關三個優先方向，但仍用「哪間有名」排序。他改成先定維度：課程實作比重、數學負擔、實習機會、交通、自己已有證據。再用 Prompt 產出比較表與「若實習機會明顯較高且我能負擔數學，則 A 優先於 B」的規則，志願排序第一次變得說得出口。",
    "enCaseStudy": "Zhe had three priority directions but ranked by prestige. He set dimensions—hands-on load, math load, internships, commute, evidence he already has—then built comparison rules like “If internships are clearly stronger and I can handle the math, A beats B.” His order finally became explainable.",
    "zhWorkflow": [
      "帶回上一課的 3 個優先科系",
      "寫下你在乎的比較維度（至少 5 個）",
      "填入你已查過的課表／簡章摘要，未知標待查證",
      "用 Prompt 產出比較表與選擇邏輯",
      "定暫定排序並存檔"
    ],
    "enWorkflow": [
      "Bring the 3 priority majors from last lesson",
      "Write comparison dimensions (at least 5)",
      "Add verified curriculum/brochure notes; mark unknowns",
      "Generate comparison table and preference logic",
      "Set tentative order and save"
    ],
    "zhCommonMistakes": [
      "比較維度全部是「名氣」",
      "把未查證的分數線寫成確定事實",
      "選擇邏輯無法用一句話說明",
      "與第2課內容重複，又做一次科系探索",
      "要求 AI 保證某志願排序最正確"
    ],
    "enCommonMistakes": [
      "Using only prestige as a dimension",
      "Stating unverified cutoffs as facts",
      "Preference logic you cannot say in one sentence",
      "Repeating Lesson 2 major exploration",
      "Asking AI to guarantee the “correct” order"
    ],
    "zhExcellentExample": "邏輯表含：維度定義、三方向比較、待查證清單、if-then 規則、暫定排序與調整時機。",
    "enExcellentExample": "Includes dimension definitions, three-way comparison, verify list, if-then rules, tentative order and revisit timing.",
    "zhCoachPrompt": "你是一位高中生升學探索顧問。請檢查我的科系探索表，幫我判斷哪些科系是真的適合、哪些只是表面有興趣。請指出我還需要查哪些課程內容、能力需求與未來出路，最後幫我排序前三志願。",
    "enCoachPrompt": "你是一位高中生升學探索顧問。請檢查我的科系探索表，幫我判斷哪些科系是真的適合、哪些只是表面有興趣。請指出我還需要查哪些課程內容、能力需求與未來出路，最後幫我排序前三志願。",
    "id": "admissions-L3",
    "lessonKey": "admissions-L3",
    "zhWhyItMatters": {
      "problem": "志願常靠感覺或聽別人說，面試被問「為什麼選我們」時答不出比較依據。",
      "ineffective": "只做校名排序，或把上一課「找科系」內容再做一次。",
      "solution": "用固定比較維度與 if-then 規則，產出校系比較與志願選擇邏輯表。"
    },
    "enWhyItMatters": {
      "problem": "Preferences based on vibes fail when interviews ask “Why us?”",
      "ineffective": "Sorting by brand name—or repeating major-finding work from last lesson.",
      "solution": "Use fixed dimensions and if-then rules to build a comparison & preference logic table."
    },
    "zhObjectives": [
      "設定至少 5 個自己在乎的比較維度",
      "對 3 個優先方向完成比較（不足處標待查證）",
      "寫出可說明的選擇邏輯（if-then）",
      "產出暫定志願排序草稿",
      "完成「校系比較與志願選擇邏輯表」"
    ],
    "enObjectives": [
      "Define at least 5 comparison dimensions you care about",
      "Compare 3 priority directions (mark unknowns)",
      "Write explainable if-then preference logic",
      "Draft a tentative preference order",
      "Complete the Program Comparison & Preference Logic Table"
    ],
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "校系比較與志願選擇邏輯表",
    "enOutputName": "Program Comparison & Preference Logic Table",
    "zhCaseStudyBlocks": {
      "problem": "阿哲有三個優先方向，但志願排序說不出理由。",
      "wrong": "只依校名氣或網路傳言排序；或重複做「我適合什麼科系」。",
      "right": "先定比較維度與已查資料，再產出比較表與 if-then 選擇邏輯。",
      "result": "一份可解釋的校系比較與志願選擇邏輯表。"
    },
    "enCaseStudyBlocks": {
      "problem": "Zhe has three priorities but cannot explain his order.",
      "wrong": "Ranking by prestige/rumors—or redoing “what major fits me.”",
      "right": "Set dimensions and verified notes, then build comparison + if-then logic.",
      "result": "An explainable program comparison and preference logic table."
    },
    "zhWorkflowSteps": [
      {
        "do": "列出三優先與在乎條件",
        "why": "比較要有尺子",
        "input": "科系探索表",
        "output": "維度清單",
        "check": "維度是否真是你在乎的"
      },
      {
        "do": "補上已查證資訊",
        "why": "避免 AI 瞎掰規定",
        "input": "學校網站筆記",
        "output": "資料欄",
        "check": "未知是否標待查證"
      },
      {
        "do": "產出比較表",
        "why": "把差異看清楚",
        "input": "維度+資料",
        "output": "比較表",
        "check": "是否避免空話"
      },
      {
        "do": "寫 if-then 邏輯",
        "why": "面試要講得出來",
        "input": "比較表",
        "output": "選擇規則",
        "check": "規則是否可用具體條件觸發"
      },
      {
        "do": "暫定排序並存檔",
        "why": "後續動機與備審會用到",
        "input": "規則",
        "output": "邏輯表成果",
        "check": "排序是否與規則一致"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "List top 3 and what you care about",
        "why": "Comparison needs a ruler",
        "input": "Exploration sheet",
        "output": "Dimension list",
        "check": "Dimensions are truly yours"
      },
      {
        "do": "Add verified info",
        "why": "Stop invented rules",
        "input": "Official-site notes",
        "output": "Data columns",
        "check": "Unknowns marked"
      },
      {
        "do": "Build comparison table",
        "why": "Make differences visible",
        "input": "Dimensions+data",
        "output": "Table",
        "check": "No empty praise"
      },
      {
        "do": "Write if-then logic",
        "why": "Interview-ready reasons",
        "input": "Table",
        "output": "Rules",
        "check": "Rules trigger on concrete conditions"
      },
      {
        "do": "Draft order and save",
        "why": "Later essays reuse this",
        "input": "Rules",
        "output": "Logic deliverable",
        "check": "Order matches rules"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "訂出至少 5 個比較維度",
        "standard": "維度具體可觀察",
        "mistakes": "只有名氣",
        "check": "能否打分或描述差異？"
      },
      {
        "task": "完成三方向比較",
        "standard": "未知標待查證",
        "mistakes": "捏造數據",
        "check": "每格是否有來源或待查？"
      },
      {
        "task": "寫出選擇邏輯與暫定排序",
        "standard": "有 if-then",
        "mistakes": "只有「我喜歡A」",
        "check": "能否向教授解釋？"
      },
      {
        "task": "存入成果包",
        "standard": "成果名稱正確",
        "mistakes": "空白",
        "check": "是否已個人化？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Define ≥5 dimensions",
        "standard": "Observable dimensions",
        "mistakes": "Prestige only",
        "check": "Can you score/describe differences?"
      },
      {
        "task": "Compare three directions",
        "standard": "Unknowns marked",
        "mistakes": "Invented numbers",
        "check": "Source or to-verify per cell?"
      },
      {
        "task": "Write logic + tentative order",
        "standard": "Includes if-then",
        "mistakes": "Only “I like A”",
        "check": "Explainable to a professor?"
      },
      {
        "task": "Save to package",
        "standard": "Correct deliverable name",
        "mistakes": "Blank",
        "check": "Personalized?"
      }
    ],
    "zhPromptPack": {
      "when": "當你要比較校系並寫出選擇理由時使用",
      "fields": [
        "[目標科系]",
        "[請填寫……]",
        "[想改善的問題]"
      ],
      "body": "你是大學志願選擇教練。不可捏造學校排名保證或錄取結果。\n\n我的背景：\n- 優先探索科系（來自上一課）：[目標科系]\n- 我在乎的條件（例如課程、地點、負擔、實作機會）：[請填寫……]\n- 目前已知資訊（課表／簡章摘要，自行查過的）：[請填寫……]\n- 還不確定的問題：[想改善的問題]\n\n任務：產出「校系比較與志願選擇邏輯表」：\n1) 幫我建立比較維度（至少 5 個，需符合我在乎的條件）\n2) 針對 3 個優先方向做比較（資訊不足處標「待查證」）\n3) 寫出「若 A 優於 B」的判斷規則（選擇邏輯）\n4) 給出一版暫定志願排序草稿，並說明可在何時調整\n\n限制：不要用「一定比較好」這種空話；不要捏造學費、分數或錄取率；提醒我回官方簡章與學校網站查證。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "一份有維度、比較與 if-then 邏輯的志願表",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when comparing programs and writing preference reasons",
      "fields": [
        "[target majors]",
        "[fill in…]",
        "[problem to improve]"
      ],
      "body": "You are a preference-logic coach for university programs. Do not invent ranking guarantees or admission outcomes.\n\nMy background:\n- Priority majors (from last lesson): [target majors]\n- What I care about (curriculum, location, load, hands-on chances…): [fill in…]\n- What I already verified (curriculum/brochure notes): [fill in…]\n- Open questions: [problem to improve]\n\nTask: Produce a Program Comparison & Preference Logic Table:\n1) Build comparison dimensions (at least 5, matching what I care about)\n2) Compare 3 priority directions (mark unknowns as “to verify”)\n3) Write if-then preference rules (when A beats B)\n4) Draft a tentative order and when I should revisit it\n\nLimits: no empty “always better” claims; no invented tuition/scores/rates; remind me to verify on official sites/brochures.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A preference table with dimensions, comparison, and if-then logic",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "下一堂開始盤點高中三年素材，把方向落到可寫進備審的證據。",
    "enNextStep": "Next, inventory three years of materials so your direction connects to portfolio evidence.",
    "zhConceptBlocks": {
      "principles": [
        "比較要有共同維度",
        "未知要標出來",
        "邏輯要能口述"
      ],
      "terms": [
        "比較維度",
        "志願選擇邏輯",
        "待查證"
      ],
      "criteria": [
        "維度≥5",
        "有 if-then",
        "排序可解釋"
      ],
      "boundaries": [
        "避免：捏造分數線",
        "避免：只比名氣",
        "避免：重複第2課探索"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Shared dimensions",
        "Mark unknowns",
        "Logic must be speakable"
      ],
      "terms": [
        "Comparison dimensions",
        "Preference logic",
        "To verify"
      ],
      "criteria": [
        "≥5 dimensions",
        "If-then present",
        "Explainable order"
      ],
      "boundaries": [
        "Avoid: inventing cutoffs",
        "Avoid: prestige-only",
        "Avoid: repeating Lesson 2"
      ]
    }
  },
  {
    "zhTitle": "第4課：用 AI 整理高中三年學習歷程素材",
    "enTitle": "Lesson 4: Use AI to organize three years of learning portfolio materials",
    "zhConcept": "備審寫不出來，常常不是文筆問題，而是素材沒整理。這一課要解決「高中三年東西很多但不知怎麼用」：先建立學習歷程素材庫，讓後面寫故事、自述與備審架構有原料。",
    "enConcept": "Blank portfolio pages are often an organization problem, not a writing problem. This lesson builds a material bank from three years of experiences so later stories, statements, and structures have raw material.",
    "zhPrompt": "你是學習歷程整理教練。不可替我捏造活動、職位、時數或獎項。\n\n我的原始素材（可雜亂）：\n[個人經歷]\n[活動成果]\n\n任務：產出「學習歷程素材庫」：\n1) 幫我把素材分類：課程成果／社團幹部／競賽／服務／自主學習／專題作品／其他\n2) 每筆標註：時間、我的角色、可證明的能力、可對應的申請用途\n3) 挑出最有申請價值的 5 筆，說明為什麼\n4) 標出證據不足、需要補細節或不宜誇大的項目\n\n限制：沒有的經歷不要補；不要建議偽造證明；提醒敏感個資不要寫進公開備審。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a learning-portfolio organizer. Do not invent activities, titles, hours, or awards.\n\nMy raw materials (can be messy):\n[personal experience]\n[activity outcomes]\n\nTask: Produce a Learning Portfolio Material Bank:\n1) Classify into: coursework / clubs-leadership / contests / service / self-learning / projects / other\n2) For each: time, my role, skills evidenced, application use\n3) Select the top 5 most useful items and why\n4) Flag weak evidence, missing detail, or items that should not be exaggerated\n\nLimits: do not add experiences I lack; do not suggest forged proof; remind me not to put sensitive IDs in public materials.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "雜亂清單：設計社美宣、班刊編輯、服務學習、程式課小專題、科學展觀摩筆記…",
    "enExample": "Messy list: club design, class magazine, service learning, coding mini-project, science fair notes…",
    "zhPractice": "列出≥10筆素材。；完成分類與能力標註。；選出Top5。；存成學習歷程素材庫。",
    "enPractice": "List ≥10 items.; Classify and tag.; Pick Top 5.; Save the material bank.",
    "zhFeedbackPrompt": "你是一位大學備審資料審查教授。\n\n以下是我完成的「學習歷程素材庫」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 素材完整度：1-10 分，並說明扣分原因\n- 分類清楚度：1-10 分，並說明扣分原因\n- 能力證據強度：1-10 分，並說明扣分原因\n- 科系連結度：1-10 分，並說明扣分原因\n- 故事線潛力：1-10 分，並說明扣分原因\n- 重複性：1-10 分，並說明扣分原因\n- 可用性：1-10 分，並說明扣分原因\n- 教授印象分數：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 如果你是教授，你會對我留下什麼印象？\n2. 請把素材分成 S 級、A 級、B 級、C 級。\n3. 如果只能留下 5 個素材，請選出最值得保留的 5 個。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 大學備審資料審查教授.\n\nHere is my completed work for: 學習歷程素材庫\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 素材完整度：1-10 分，並說明扣分原因\n- 分類清楚度：1-10 分，並說明扣分原因\n- 能力證據強度：1-10 分，並說明扣分原因\n- 科系連結度：1-10 分，並說明扣分原因\n- 故事線潛力：1-10 分，並說明扣分原因\n- 重複性：1-10 分，並說明扣分原因\n- 可用性：1-10 分，並說明扣分原因\n- 教授印象分數：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 如果你是教授，你會對我留下什麼印象？\n2. 請把素材分成 S 級、A 級、B 級、C 級。\n3. 如果只能留下 5 個素材，請選出最值得保留的 5 個。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "整理學習歷程素材時，第一步最好是？",
        "options": [
          "先全部列出再分類",
          "只寫最華麗的活動",
          "完全不整理"
        ],
        "answer": 0,
        "explain": "先大量列出，之後才能篩選與分類。"
      },
      {
        "q": "素材只寫活動名稱有什麼問題？",
        "options": [
          "看不出你的行動與能力",
          "一定更清楚",
          "教授會自動理解"
        ],
        "answer": 0,
        "explain": "審查者需要看到你做了什麼與學到什麼。"
      },
      {
        "q": "好的素材庫應該把素材連到？",
        "options": [
          "能力與科系需求",
          "手機型號",
          "朋友名單"
        ],
        "answer": 0,
        "explain": "素材要能證明能力並連結科系。"
      },
      {
        "q": "素材 S/A/B/C 排序的目的？",
        "options": [
          "幫助取捨",
          "讓表格變漂亮",
          "隨機分類"
        ],
        "answer": 0,
        "explain": "備審空間有限，要知道哪些最值得放。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "學習歷程素材庫",
          "自我介紹錄音",
          "付款紀錄"
        ],
        "answer": 0,
        "explain": "本課要產出學習歷程素材庫。"
      }
    ],
    "enQuizItems": [
      {
        "q": "整理學習歷程素材時，第一步最好是？",
        "options": [
          "先全部列出再分類",
          "只寫最華麗的活動",
          "完全不整理"
        ],
        "answer": 0,
        "explain": "先大量列出，之後才能篩選與分類。"
      },
      {
        "q": "素材只寫活動名稱有什麼問題？",
        "options": [
          "看不出你的行動與能力",
          "一定更清楚",
          "教授會自動理解"
        ],
        "answer": 0,
        "explain": "審查者需要看到你做了什麼與學到什麼。"
      },
      {
        "q": "好的素材庫應該把素材連到？",
        "options": [
          "能力與科系需求",
          "手機型號",
          "朋友名單"
        ],
        "answer": 0,
        "explain": "素材要能證明能力並連結科系。"
      },
      {
        "q": "素材 S/A/B/C 排序的目的？",
        "options": [
          "幫助取捨",
          "讓表格變漂亮",
          "隨機分類"
        ],
        "answer": 0,
        "explain": "備審空間有限，要知道哪些最值得放。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "學習歷程素材庫",
          "自我介紹錄音",
          "付款紀錄"
        ],
        "answer": 0,
        "explain": "本課要產出學習歷程素材庫。"
      }
    ],
    "zhOutcome": "學習歷程素材庫",
    "enOutcome": "Learning Portfolio Material Bank",
    "zhNotePrompt": "請在課程筆記中寫下：我最有價值的 5 個素材、每個素材代表的能力、可以用在哪個申請科系。",
    "enNotePrompt": "請在課程筆記中寫下：我最有價值的 5 個素材、每個素材代表的能力、可以用在哪個申請科系。",
    "zhDeliverableChecklist": [
      "至少 10 筆素材",
      "每筆有分類",
      "每筆有能力標註",
      "有 Top5 與理由",
      "已標證據不足項",
      "未捏造經歷並已存檔"
    ],
    "enDeliverableChecklist": [
      "≥10 items",
      "Each classified",
      "Each skill-tagged",
      "Top 5 with reasons",
      "Weak evidence flagged",
      "No invented experience; saved"
    ],
    "zhScorecard": [
      "素材完整",
      "分類清楚",
      "能力證據",
      "科系連結",
      "取捨能力"
    ],
    "enScorecard": [
      "素材完整",
      "分類清楚",
      "能力證據",
      "科系連結",
      "取捨能力"
    ],
    "zhValueTip": "先有素材庫，再寫故事；沒有原料的 Prompt 只會產生空話。",
    "enValueTip": "Bank first, stories second—prompts without raw material produce fluff.",
    "zhCaseStudy": "學生小恩以為自己「沒什麼亮眼經歷」，列出後其實有社團美宣、服務學習、小專題與課堂報告。分類後她才發現可證明溝通與專案執行的素材有 4 筆，Top5 也變得清楚。",
    "enCaseStudy": "En thought she had “nothing impressive,” then listed club design work, service, a mini-project, and class reports. Classification revealed four items evidencing communication and project execution—and a clear Top 5.",
    "zhWorkflow": [
      "不加篩選列出至少 10 筆素材",
      "分類並標註角色與能力",
      "請 AI 協助挑 Top5 與風險項",
      "刪去不宜誇大的說法",
      "存成素材庫"
    ],
    "enWorkflow": [
      "List ≥10 items without filtering",
      "Classify with role and skills",
      "Use AI to help pick Top 5 and risks",
      "Remove exaggeration",
      "Save the bank"
    ],
    "zhCommonMistakes": [
      "只收競賽、忽略課程與服務",
      "請 AI 捏造沒有的幹部職稱",
      "沒有標自己的角色",
      "一開始就寫長文",
      "把敏感個資寫進素材"
    ],
    "enCommonMistakes": [
      "Only contests, ignoring coursework/service",
      "Asking AI to invent titles",
      "No personal role tagged",
      "Writing long essays too early",
      "Putting sensitive IDs in materials"
    ],
    "zhExcellentExample": "素材庫含原始清單、分類表、能力欄、Top5、補強清單。",
    "enExcellentExample": "Includes raw list, classification, skill column, Top 5, and repair list.",
    "zhCoachPrompt": "你是一位大學備審審查顧問。請檢查我的學習歷程素材庫，幫我把素材分成 S 級、A 級、B 級、C 級，指出哪些素材重複、哪些素材最能證明能力、哪些素材不建議放進備審。",
    "enCoachPrompt": "你是一位大學備審審查顧問。請檢查我的學習歷程素材庫，幫我把素材分成 S 級、A 級、B 級、C 級，指出哪些素材重複、哪些素材最能證明能力、哪些素材不建議放進備審。",
    "id": "admissions-L4",
    "lessonKey": "admissions-L4",
    "zhWhyItMatters": {
      "problem": "經驗散落在記憶與檔案裡，寫備審時大腦空白。",
      "ineffective": "一開始就硬寫長文，或請 AI 直接代寫整份備審。",
      "solution": "先分類、標能力、挑 Top5，建成可重用的素材庫。"
    },
    "enWhyItMatters": {
      "problem": "Experiences are scattered; writing time feels blank.",
      "ineffective": "Forcing long essays first—or asking AI to ghostwrite the whole portfolio.",
      "solution": "Classify, tag skills, pick Top 5, and build a reusable bank."
    },
    "zhObjectives": [
      "列出至少 10 筆高中素材",
      "完成分類與能力標註",
      "選出最有價值的 5 筆",
      "標出證據不足項目",
      "存成學習歷程素材庫"
    ],
    "enObjectives": [
      "List at least 10 high-school items",
      "Classify and tag skills",
      "Select top 5",
      "Flag weak-evidence items",
      "Save the material bank"
    ],
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "學習歷程素材庫",
    "enOutputName": "Learning Portfolio Material Bank",
    "zhCaseStudyBlocks": {
      "problem": "小恩覺得沒東西可寫，備審一直拖延。",
      "wrong": "請 AI 直接寫完整備審，或只記得競賽才算數。",
      "right": "先不加篩選列出素材，再分類、標能力、挑 Top5。",
      "result": "一份可給後續課堂使用的學習歷程素材庫。"
    },
    "enCaseStudyBlocks": {
      "problem": "En feels she has nothing to write; portfolio stalls.",
      "wrong": "Asking AI to write the whole portfolio, or counting only contests.",
      "right": "List without filtering, then classify, tag, and pick Top 5.",
      "result": "A material bank reusable in later lessons."
    },
    "zhWorkflowSteps": [
      {
        "do": "狂列素材",
        "why": "先求有再求好",
        "input": "回憶與檔案",
        "output": "原始清單",
        "check": "是否≥10"
      },
      {
        "do": "分類與標能力",
        "why": "方便後續選用",
        "input": "清單",
        "output": "分類表",
        "check": "每筆有角色"
      },
      {
        "do": "挑 Top5",
        "why": "備審版面有限",
        "input": "分類表",
        "output": "精選",
        "check": "理由是否具體"
      },
      {
        "do": "標不足與風險",
        "why": "避免造假壓力",
        "input": "精選",
        "output": "補強清單",
        "check": "是否標了證據弱項"
      },
      {
        "do": "存檔",
        "why": "L5–L7 會重用",
        "input": "定稿",
        "output": "成果",
        "check": "他人看得懂"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Brainstorm materials",
        "why": "Quantity before polish",
        "input": "Memory/files",
        "output": "Raw list",
        "check": "≥10 items"
      },
      {
        "do": "Classify and tag skills",
        "why": "Selectable later",
        "input": "List",
        "output": "Classified table",
        "check": "Role per item"
      },
      {
        "do": "Pick Top 5",
        "why": "Limited portfolio space",
        "input": "Table",
        "output": "Shortlist",
        "check": "Concrete reasons"
      },
      {
        "do": "Flag weak/risky items",
        "why": "Reduce fabrication pressure",
        "input": "Shortlist",
        "output": "Repair list",
        "check": "Weak evidence marked"
      },
      {
        "do": "Save",
        "why": "Lessons 5–7 reuse this",
        "input": "Final",
        "output": "Deliverable",
        "check": "Readable to others"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "列出至少 10 筆",
        "standard": "含不同類型",
        "mistakes": "只有兩筆競賽",
        "check": "類型是否多元？"
      },
      {
        "task": "分類並標能力",
        "standard": "每筆有角色與能力",
        "mistakes": "只有活動名稱",
        "check": "能否看出你做了什麼？"
      },
      {
        "task": "選 Top5 並說明",
        "standard": "理由連結申請用途",
        "mistakes": "只選最好聽的名稱",
        "check": "理由是否可驗證？"
      },
      {
        "task": "存檔",
        "standard": "表格完整",
        "mistakes": "空白",
        "check": "已個人化？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "List ≥10",
        "standard": "Multiple types",
        "mistakes": "Only two contests",
        "check": "Diverse types?"
      },
      {
        "task": "Classify + skills",
        "standard": "Role and skills each",
        "mistakes": "Names only",
        "check": "Clear what you did?"
      },
      {
        "task": "Pick Top 5 with reasons",
        "standard": "Tied to application use",
        "mistakes": "Coolest names only",
        "check": "Verifiable reasons?"
      },
      {
        "task": "Save",
        "standard": "Complete table",
        "mistakes": "Blank",
        "check": "Personalized?"
      }
    ],
    "zhPromptPack": {
      "when": "當你要把雜亂高中經驗變成可選用素材時使用",
      "fields": [
        "[個人經歷]",
        "[活動成果]"
      ],
      "body": "你是學習歷程整理教練。不可替我捏造活動、職位、時數或獎項。\n\n我的原始素材（可雜亂）：\n[個人經歷]\n[活動成果]\n\n任務：產出「學習歷程素材庫」：\n1) 幫我把素材分類：課程成果／社團幹部／競賽／服務／自主學習／專題作品／其他\n2) 每筆標註：時間、我的角色、可證明的能力、可對應的申請用途\n3) 挑出最有申請價值的 5 筆，說明為什麼\n4) 標出證據不足、需要補細節或不宜誇大的項目\n\n限制：沒有的經歷不要補；不要建議偽造證明；提醒敏感個資不要寫進公開備審。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "分類完整、含能力標註與 Top5 的素材庫",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when turning messy high-school experiences into selectable materials",
      "fields": [
        "[personal experience]",
        "[activity outcomes]"
      ],
      "body": "You are a learning-portfolio organizer. Do not invent activities, titles, hours, or awards.\n\nMy raw materials (can be messy):\n[personal experience]\n[activity outcomes]\n\nTask: Produce a Learning Portfolio Material Bank:\n1) Classify into: coursework / clubs-leadership / contests / service / self-learning / projects / other\n2) For each: time, my role, skills evidenced, application use\n3) Select the top 5 most useful items and why\n4) Flag weak evidence, missing detail, or items that should not be exaggerated\n\nLimits: do not add experiences I lack; do not suggest forged proof; remind me not to put sensitive IDs in public materials.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A classified bank with skill tags and a Top 5",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "下一堂把精選活動寫成 STAR 多元表現故事。",
    "enNextStep": "Next, turn selected activities into STAR stories.",
    "zhConceptBlocks": {
      "principles": [
        "先整理再寫作",
        "角色比職稱標題重要",
        "證據不足要標出來"
      ],
      "terms": [
        "素材庫",
        "能力標註",
        "Top5"
      ],
      "criteria": [
        "≥10筆",
        "有分類",
        "有Top5"
      ],
      "boundaries": [
        "避免：捏造經歷",
        "避免：一開始代寫全文",
        "避免：敏感個資"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Organize before writing",
        "Role > fancy title",
        "Flag weak evidence"
      ],
      "terms": [
        "Material bank",
        "Skill tags",
        "Top 5"
      ],
      "criteria": [
        "≥10 items",
        "Classified",
        "Top 5 present"
      ],
      "boundaries": [
        "Avoid: inventing experience",
        "Avoid: full ghostwriting early",
        "Avoid: sensitive IDs"
      ]
    }
  },
  {
    "zhTitle": "第5課：用 AI 把活動經驗寫成有說服力的故事",
    "enTitle": "Lesson 5: Use AI to turn activities into persuasive stories",
    "zhConcept": "活動很多但寫出來像流水帳，審查端看不到你的判斷與行動。這一課用 STAR 把素材庫中的活動寫成有說服力的多元表現，重點是真實行動與可驗證結果，不是華麗形容詞。",
    "enConcept": "Many activities still read like diaries. This lesson uses STAR to turn banked activities into persuasive stories—real actions and verifiable results, not fancy adjectives.",
    "zhPrompt": "你是多元表現寫作教練，使用 STAR 架構。不可誇大或捏造結果。\n\n請針對我提供的真實活動寫 1 則多元表現（之後我會再做另外兩則）：\n- 活動名稱與時間：[活動成果]\n- 情境與任務：[請填寫……]\n- 我實際做的行動：[個人經歷]\n- 可驗證的結果／學習：[請填寫……]\n- 目標科系（可選）：[目標科系]\n\n輸出：\n1) STAR 四段（Situation / Task / Action / Result）\n2) 一版約 250–350 字的連貫描述\n3) 指出哪裡太空泛、哪裡需要補數字或細節\n4) 給「不該使用的空話」清單\n\n限制：不要替我編造獎項名次；結果不明就寫學習與反思，不要假裝量化。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a portfolio-story coach using STAR. Do not exaggerate or invent results.\n\nWrite ONE activity story from my real details (I will do two more later):\n- Activity + time: [activity outcomes]\n- Situation/task: [fill in…]\n- Actions I actually took: [personal experience]\n- Verifiable result/learning: [fill in…]\n- Target major (optional): [target majors]\n\nOutput:\n1) STAR four parts\n2) A coherent 250–350 word version\n3) Where it is vague and what numbers/details to add\n4) A list of empty phrases to avoid\n\nLimits: do not invent placements; if results are unclear, write learning/reflection—do not fake metrics.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "活動：社團美宣；行動：問卷、改版主視覺、分工時程；結果：報名增加與學到取捨。",
    "enExample": "Activity: club visuals; actions: survey, redesign, timeline; result: signup change + trade-off learning.",
    "zhPractice": "選3個活動。；各寫STAR。；用Prompt檢查並改寫。；存成3則多元表現描述。",
    "enPractice": "Pick 3.; Write STAR each.; Check with prompt and revise.; Save 3 stories.",
    "zhFeedbackPrompt": "你是一位大學備審寫作教練。\n\n以下是我完成的「多元表現描述」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- STAR 完整度：1-10 分，並說明扣分原因\n- 具體行動：1-10 分，並說明扣分原因\n- 結果清楚度：1-10 分，並說明扣分原因\n- 反思深度：1-10 分，並說明扣分原因\n- 真實感：1-10 分，並說明扣分原因\n- 文字精準度：1-10 分，並說明扣分原因\n- 科系連結：1-10 分，並說明扣分原因\n- 說服力：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪一句最加分？哪一句最扣分？\n2. 請指出哪裡像流水帳或口號。\n3. 請示範一版 300 字內的修改方向。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 大學備審寫作教練.\n\nHere is my completed work for: 多元表現描述\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- STAR 完整度：1-10 分，並說明扣分原因\n- 具體行動：1-10 分，並說明扣分原因\n- 結果清楚度：1-10 分，並說明扣分原因\n- 反思深度：1-10 分，並說明扣分原因\n- 真實感：1-10 分，並說明扣分原因\n- 文字精準度：1-10 分，並說明扣分原因\n- 科系連結：1-10 分，並說明扣分原因\n- 說服力：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪一句最加分？哪一句最扣分？\n2. 請指出哪裡像流水帳或口號。\n3. 請示範一版 300 字內的修改方向。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "STAR 中的 A 代表什麼？",
        "options": [
          "Action 行動",
          "Apple 蘋果",
          "Answer 答案"
        ],
        "answer": 0,
        "explain": "A 是 Action，也就是你做了什麼。"
      },
      {
        "q": "「我學到很多」最大的問題是？",
        "options": [
          "太空泛",
          "太具體",
          "太有證據"
        ],
        "answer": 0,
        "explain": "它沒有說明學到什麼、如何學到。"
      },
      {
        "q": "多元表現描述最重要的是？",
        "options": [
          "自己的行動與反思",
          "活動名稱很長",
          "字越多越好"
        ],
        "answer": 0,
        "explain": "審查者想看到你在活動中的角色與成長。"
      },
      {
        "q": "好的結果可以包含？",
        "options": [
          "數字、改變、影響或回饋",
          "只有心情",
          "沒有任何結果"
        ],
        "answer": 0,
        "explain": "結果讓經驗更具體可信。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "3 則多元表現描述",
          "科系探索表",
          "免費證書"
        ],
        "answer": 0,
        "explain": "本課要完成多元表現描述。"
      }
    ],
    "enQuizItems": [
      {
        "q": "STAR 中的 A 代表什麼？",
        "options": [
          "Action 行動",
          "Apple 蘋果",
          "Answer 答案"
        ],
        "answer": 0,
        "explain": "A 是 Action，也就是你做了什麼。"
      },
      {
        "q": "「我學到很多」最大的問題是？",
        "options": [
          "太空泛",
          "太具體",
          "太有證據"
        ],
        "answer": 0,
        "explain": "它沒有說明學到什麼、如何學到。"
      },
      {
        "q": "多元表現描述最重要的是？",
        "options": [
          "自己的行動與反思",
          "活動名稱很長",
          "字越多越好"
        ],
        "answer": 0,
        "explain": "審查者想看到你在活動中的角色與成長。"
      },
      {
        "q": "好的結果可以包含？",
        "options": [
          "數字、改變、影響或回饋",
          "只有心情",
          "沒有任何結果"
        ],
        "answer": 0,
        "explain": "結果讓經驗更具體可信。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "3 則多元表現描述",
          "科系探索表",
          "免費證書"
        ],
        "answer": 0,
        "explain": "本課要完成多元表現描述。"
      }
    ],
    "zhOutcome": "3 則多元表現描述",
    "enOutcome": "3 Activity Stories (STAR)",
    "zhNotePrompt": "請在課程筆記中記錄：我選的 3 個活動、每個活動的 STAR 重點、最需要修改的地方。",
    "enNotePrompt": "請在課程筆記中記錄：我選的 3 個活動、每個活動的 STAR 重點、最需要修改的地方。",
    "zhDeliverableChecklist": [
      "完成3則",
      "每則有情境與任務",
      "每則有我的行動",
      "每則有結果或反思",
      "無誇大捏造",
      "已改成自己語氣並存檔"
    ],
    "enDeliverableChecklist": [
      "3 stories done",
      "Situation+task each",
      "Personal actions each",
      "Result or reflection each",
      "No exaggeration",
      "Personalized and saved"
    ],
    "zhScorecard": [
      "STAR 完整",
      "行動具體",
      "結果清楚",
      "反思深度",
      "說服力"
    ],
    "enScorecard": [
      "STAR 完整",
      "行動具體",
      "結果清楚",
      "反思深度",
      "說服力"
    ],
    "zhValueTip": "好的故事讓人看見你的決策，不只看見活動名稱。",
    "enValueTip": "Good stories show decisions—not only activity titles.",
    "zhCaseStudy": "學生阿晴把「擔任美宣」寫成「我很負責完成海報」。改用 STAR 後，她補上：社團人數下滑的情境、需要提升報名的任務、她做的問卷與改版行動、報名率變化與學到的設計取捨。故事第一次有因果。",
    "enCaseStudy": "Ching wrote “I was responsible for posters.” With STAR she added declining club signup context, the goal to raise registration, survey+redesign actions, and a measurable change plus design trade-offs—cause and effect appeared.",
    "zhWorkflow": [
      "從素材庫選 3 個活動",
      "逐則填 STAR",
      "用 Prompt 檢查空泛處",
      "改成自己的語氣",
      "存成 3 則多元表現"
    ],
    "enWorkflow": [
      "Pick 3 from the bank",
      "Fill STAR each",
      "Use prompt to find vagueness",
      "Rewrite in your voice",
      "Save 3 stories"
    ],
    "zhCommonMistakes": [
      "只有團體成果、看不出個人行動",
      "捏造數據",
      "三則故事同一句空話",
      "Result只有「我學到很多」",
      "直接交 AI 原文"
    ],
    "enCommonMistakes": [
      "Only group outcomes, no personal actions",
      "Invented metrics",
      "Same fluff across three stories",
      "Result = “I learned a lot” only",
      "Submitting raw AI text"
    ],
    "zhExcellentExample": "每則含STAR、具體行動、可說明的結果、刪除空話後的定稿。",
    "enExcellentExample": "Each has STAR, concrete actions, explainable results, fluff removed.",
    "zhCoachPrompt": "你是一位備審寫作教練。請檢查我的多元表現描述，指出哪一句太空泛、哪裡缺少行動、哪裡缺少結果。請幫我改成更具體但不誇大的版本。",
    "enCoachPrompt": "你是一位備審寫作教練。請檢查我的多元表現描述，指出哪一句太空泛、哪裡缺少行動、哪裡缺少結果。請幫我改成更具體但不誇大的版本。",
    "id": "admissions-L5",
    "lessonKey": "admissions-L5",
    "zhWhyItMatters": {
      "problem": "經歷有做，但文字看不出你解決了什麼。",
      "ineffective": "堆疊「負責認真」等空話，或請 AI 直接捏造成果。",
      "solution": "用 STAR 拆解並寫出 3 則可檢查的多元表現。"
    },
    "enWhyItMatters": {
      "problem": "You did the work, but readers cannot see what you solved.",
      "ineffective": "Stacking empty praise—or inventing outcomes with AI.",
      "solution": "Use STAR to produce 3 checkable activity stories."
    },
    "zhObjectives": [
      "選出 3 個要寫的活動",
      "用 STAR 拆解每一則",
      "補上具體行動與可驗證結果",
      "刪除空話與誇大",
      "完成 3 則多元表現描述"
    ],
    "enObjectives": [
      "Pick 3 activities",
      "Break each with STAR",
      "Add concrete actions and verifiable results",
      "Remove fluff/exaggeration",
      "Finish 3 stories"
    ],
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "3 則多元表現描述",
    "enOutputName": "3 Activity Stories (STAR)",
    "zhCaseStudyBlocks": {
      "problem": "阿晴的活動描述只有職稱與態度詞。",
      "wrong": "用「認真負責」填滿篇幅，或請 AI 添加沒有的得獎。",
      "right": "用 STAR 補情境、任務、行動、結果，並刪空話。",
      "result": "3 則能看出行動與反思的多元表現。"
    },
    "enCaseStudyBlocks": {
      "problem": "Ching’s stories are titles + attitude words.",
      "wrong": "Padding with “hardworking,” or inventing awards.",
      "right": "STAR for situation/task/action/result; cut fluff.",
      "result": "3 stories that show action and reflection."
    },
    "zhWorkflowSteps": [
      {
        "do": "選3個活動",
        "why": "深度比數量重要",
        "input": "素材庫Top",
        "output": "選題",
        "check": "是否真的是你做的"
      },
      {
        "do": "填STAR草稿",
        "why": "先結構後文筆",
        "input": "事實",
        "output": "四段",
        "check": "Action是否是你的行為"
      },
      {
        "do": "連貫改寫",
        "why": "備審要可讀",
        "input": "四段",
        "output": "250–350字",
        "check": "有無空話"
      },
      {
        "do": "真實性檢查",
        "why": "避免造假",
        "input": "文稿",
        "output": "修正版",
        "check": "結果是否可說明來源"
      },
      {
        "do": "存檔",
        "why": "自述會引用",
        "input": "三則",
        "output": "成果",
        "check": "三則主題不重複"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Pick 3 activities",
        "why": "Depth > volume",
        "input": "Bank Top",
        "output": "Topics",
        "check": "Truly yours"
      },
      {
        "do": "Draft STAR",
        "why": "Structure before style",
        "input": "Facts",
        "output": "Four parts",
        "check": "Actions are yours"
      },
      {
        "do": "Write coherent version",
        "why": "Readable portfolio",
        "input": "Parts",
        "output": "250–350 words",
        "check": "No fluff"
      },
      {
        "do": "Truth check",
        "why": "No fabrication",
        "input": "Draft",
        "output": "Revised",
        "check": "Results explainable"
      },
      {
        "do": "Save",
        "why": "Statement will cite these",
        "input": "Three",
        "output": "Deliverable",
        "check": "Themes not duplicated"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "選定3個不重複主題的活動",
        "standard": "能力面向盡量不同",
        "mistakes": "三則都是同一社團小事",
        "check": "讀完是否看到不同能力？"
      },
      {
        "task": "完成STAR與連貫稿",
        "standard": "每則有具體行動",
        "mistakes": "只有職稱",
        "check": "Action是否可觀察？"
      },
      {
        "task": "刪空話並真實性檢查",
        "standard": "無捏造",
        "mistakes": "補假名次",
        "check": "能否舉出證據？"
      },
      {
        "task": "存檔",
        "standard": "三則齊全",
        "mistakes": "只完成一則就結束",
        "check": "成果包看得到三則？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Choose 3 non-overlapping themes",
        "standard": "Different skill angles",
        "mistakes": "Three tiny same-club notes",
        "check": "Different skills visible?"
      },
      {
        "task": "Finish STAR + prose",
        "standard": "Concrete actions each",
        "mistakes": "Titles only",
        "check": "Observable actions?"
      },
      {
        "task": "Cut fluff + truth check",
        "standard": "No invention",
        "mistakes": "Fake rankings",
        "check": "Evidence exists?"
      },
      {
        "task": "Save",
        "standard": "All three present",
        "mistakes": "Stopping after one",
        "check": "Package shows three?"
      }
    ],
    "zhPromptPack": {
      "when": "當你要把活動寫成有說服力的故事時使用",
      "fields": [
        "[活動成果]",
        "[個人經歷]",
        "[目標科系]"
      ],
      "body": "你是多元表現寫作教練，使用 STAR 架構。不可誇大或捏造結果。\n\n請針對我提供的真實活動寫 1 則多元表現（之後我會再做另外兩則）：\n- 活動名稱與時間：[活動成果]\n- 情境與任務：[請填寫……]\n- 我實際做的行動：[個人經歷]\n- 可驗證的結果／學習：[請填寫……]\n- 目標科系（可選）：[目標科系]\n\n輸出：\n1) STAR 四段（Situation / Task / Action / Result）\n2) 一版約 250–350 字的連貫描述\n3) 指出哪裡太空泛、哪裡需要補數字或細節\n4) 給「不該使用的空話」清單\n\n限制：不要替我編造獎項名次；結果不明就寫學習與反思，不要假裝量化。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "3 則含 STAR 的多元表現描述（本 Prompt 先完成 1 則，另兩則重複使用）",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "extensions": [
        {
          "title": "延伸：空話檢查",
          "body": "請檢查我貼上的多元表現，列出所有空泛形容詞，並改成可觀察的行動句。不要新增我沒做過的事。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when turning an activity into a persuasive story",
      "fields": [
        "[activity outcomes]",
        "[personal experience]",
        "[target majors]"
      ],
      "body": "You are a portfolio-story coach using STAR. Do not exaggerate or invent results.\n\nWrite ONE activity story from my real details (I will do two more later):\n- Activity + time: [activity outcomes]\n- Situation/task: [fill in…]\n- Actions I actually took: [personal experience]\n- Verifiable result/learning: [fill in…]\n- Target major (optional): [target majors]\n\nOutput:\n1) STAR four parts\n2) A coherent 250–350 word version\n3) Where it is vague and what numbers/details to add\n4) A list of empty phrases to avoid\n\nLimits: do not invent placements; if results are unclear, write learning/reflection—do not fake metrics.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "3 STAR activity stories (this prompt does 1; repeat for the other two)",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "extensions": [
        {
          "title": "Extension: fluff check",
          "body": "Review my story, list vague adjectives, and rewrite into observable actions. Do not add things I did not do."
        }
      ]
    },
    "zhNextStep": "下一堂把素材與故事收束成自述與申請動機初稿。",
    "enNextStep": "Next, gather materials and stories into a statement and motivation draft.",
    "zhConceptBlocks": {
      "principles": [
        "STAR讓因果可見",
        "行動要可觀察",
        "結果要可說明"
      ],
      "terms": [
        "STAR",
        "多元表現",
        "空話"
      ],
      "criteria": [
        "三則完整",
        "有個人行動",
        "無捏造"
      ],
      "boundaries": [
        "避免：假數據",
        "避免：只寫態度",
        "避免：照抄AI"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "STAR shows cause-effect",
        "Actions observable",
        "Results explainable"
      ],
      "terms": [
        "STAR",
        "Activity story",
        "Fluff"
      ],
      "criteria": [
        "Three complete",
        "Personal actions",
        "No invention"
      ],
      "boundaries": [
        "Avoid: fake metrics",
        "Avoid: attitude-only",
        "Avoid: raw AI paste"
      ]
    }
  },
  {
    "zhTitle": "第6課：用 AI 產出學習歷程自述與申請動機初稿",
    "enTitle": "Lesson 6: Use AI to draft learning reflections and application motivation",
    "zhConcept": "有了素材與故事，還需要一條主軸把它們串起來。這一課產出學習歷程自述與申請動機初稿，讓教授看到「你是誰、為何適合、接下來怎麼學」，而不是片段拼貼。",
    "enConcept": "Materials and stories still need a theme. This lesson drafts your learning statement and motivation so readers see who you are, why you fit, and how you’ll learn next—not a collage of fragments.",
    "zhPrompt": "你是申請文件結構教練。不可代我捏造人生故事。\n\n我的資料：\n- 想讓審查端記住的主軸：[請填寫……]\n- 支持主軸的 3 個經驗（可貼 STAR 摘要）：[個人經歷]\n- 目標科系與選擇理由摘要：[目標科系]\n- 未來 1–2 年學習規劃（真實版）：[請填寫……]\n\n任務：產出「學習歷程自述與申請動機初稿」架構與初稿：\n1) 建議段落順序與每段目的\n2) 一版完整初稿（標註哪些句子必須改成我的原話）\n3) 指出與科系連結薄弱處\n4) 列出不該出現的空泛句\n\n限制：不要保證錄取；不要添加我沒提供的家庭／獎項細節。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are an application-structure coach. Do not invent my life story.\n\nMy inputs:\n- Main theme I want readers to remember: [fill in…]\n- 3 supporting experiences (STAR summaries OK): [personal experience]\n- Target major + why (summary): [target majors]\n- Real 1–2 year learning plan: [fill in…]\n\nTask: Produce a Learning Statement & Motivation Draft:\n1) Suggested section order and purpose of each\n2) A full draft (mark lines that must become my own wording)\n3) Weak major-links to fix\n4) Empty phrases to remove\n\nLimits: no admission guarantees; do not add family/award details I did not provide.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "主軸：用設計改善溝通；經驗：美宣改版、班刊、服務學習簡報；科系：傳設／資管跨域興趣。",
    "enExample": "Theme: design for communication; experiences: visual redesign, magazine, service presentation; major: communication design / IM interest.",
    "zhPractice": "寫主軸句。；選3經驗。；產出初稿並親筆改寫。；存成自述與動機初稿。",
    "enPractice": "Write theme.; Pick 3 supports.; Draft and rewrite by hand.; Save the statement/motivation draft.",
    "zhFeedbackPrompt": "你是一位學習歷程自述修改老師。\n\n以下是我完成的「學習歷程自述初稿」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 主軸清楚度：1-10 分，並說明扣分原因\n- 經驗具體度：1-10 分，並說明扣分原因\n- 成長脈絡：1-10 分，並說明扣分原因\n- 科系連結：1-10 分，並說明扣分原因\n- 未來規劃：1-10 分，並說明扣分原因\n- 真實感：1-10 分，並說明扣分原因\n- 文字流暢度：1-10 分，並說明扣分原因\n- 教授記憶點：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 這份自述最想讓教授記住什麼？目前有做到嗎？\n2. 哪一段最弱？為什麼？\n3. 請給我一個更清楚的段落順序。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 學習歷程自述修改老師.\n\nHere is my completed work for: 學習歷程自述初稿\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 主軸清楚度：1-10 分，並說明扣分原因\n- 經驗具體度：1-10 分，並說明扣分原因\n- 成長脈絡：1-10 分，並說明扣分原因\n- 科系連結：1-10 分，並說明扣分原因\n- 未來規劃：1-10 分，並說明扣分原因\n- 真實感：1-10 分，並說明扣分原因\n- 文字流暢度：1-10 分，並說明扣分原因\n- 教授記憶點：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 這份自述最想讓教授記住什麼？目前有做到嗎？\n2. 哪一段最弱？為什麼？\n3. 請給我一個更清楚的段落順序。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "自述最需要先決定什麼？",
        "options": [
          "主軸",
          "字體顏色",
          "檔案名稱"
        ],
        "answer": 0,
        "explain": "主軸決定整篇自述要讓教授記住什麼。"
      },
      {
        "q": "「我從小就喜歡」常見問題是？",
        "options": [
          "太空泛且缺少具體經驗",
          "太具體",
          "一定最有說服力"
        ],
        "answer": 0,
        "explain": "這類開頭常見且不夠有記憶點。"
      },
      {
        "q": "好的自述經驗應該？",
        "options": [
          "能支持申請主軸",
          "越多越好但不連貫",
          "完全不用反思"
        ],
        "answer": 0,
        "explain": "每個經驗都要服務主軸。"
      },
      {
        "q": "未來規劃應該連到？",
        "options": [
          "目標科系與想學能力",
          "隨便的夢想",
          "不相關興趣"
        ],
        "answer": 0,
        "explain": "規劃要和科系學習連接。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "學習歷程自述初稿",
          "面試題庫",
          "AI 專案成果"
        ],
        "answer": 0,
        "explain": "本課要完成自述初稿。"
      }
    ],
    "enQuizItems": [
      {
        "q": "自述最需要先決定什麼？",
        "options": [
          "主軸",
          "字體顏色",
          "檔案名稱"
        ],
        "answer": 0,
        "explain": "主軸決定整篇自述要讓教授記住什麼。"
      },
      {
        "q": "「我從小就喜歡」常見問題是？",
        "options": [
          "太空泛且缺少具體經驗",
          "太具體",
          "一定最有說服力"
        ],
        "answer": 0,
        "explain": "這類開頭常見且不夠有記憶點。"
      },
      {
        "q": "好的自述經驗應該？",
        "options": [
          "能支持申請主軸",
          "越多越好但不連貫",
          "完全不用反思"
        ],
        "answer": 0,
        "explain": "每個經驗都要服務主軸。"
      },
      {
        "q": "未來規劃應該連到？",
        "options": [
          "目標科系與想學能力",
          "隨便的夢想",
          "不相關興趣"
        ],
        "answer": 0,
        "explain": "規劃要和科系學習連接。"
      },
      {
        "q": "本課成果是？",
        "options": [
          "學習歷程自述初稿",
          "面試題庫",
          "AI 專案成果"
        ],
        "answer": 0,
        "explain": "本課要完成自述初稿。"
      }
    ],
    "zhOutcome": "學習歷程自述與申請動機初稿",
    "enOutcome": "Learning Statement & Motivation Draft",
    "zhNotePrompt": "請在課程筆記中寫下：我的自述主軸、3 個關鍵經驗、我想讓教授記住我的一句話。",
    "enNotePrompt": "請在課程筆記中寫下：我的自述主軸、3 個關鍵經驗、我想讓教授記住我的一句話。",
    "zhDeliverableChecklist": [
      "有清楚主軸",
      "至少3個具體經驗",
      "有科系連結",
      "有未來學習規劃",
      "已標並改寫AI句",
      "已存檔"
    ],
    "enDeliverableChecklist": [
      "Clear theme",
      "≥3 concrete experiences",
      "Major link",
      "Learning plan",
      "AI lines rewritten",
      "Saved"
    ],
    "zhScorecard": [
      "主軸清楚",
      "經驗具體",
      "科系連結",
      "成長脈絡",
      "記憶點"
    ],
    "enScorecard": [
      "主軸清楚",
      "經驗具體",
      "科系連結",
      "成長脈絡",
      "記憶點"
    ],
    "zhValueTip": "初稿的目標是可修改，不是一次完美定稿。",
    "enValueTip": "A draft’s job is to be revisable—not instantly perfect.",
    "zhCaseStudy": "學生阿柏把所有活動塞進自述，讀起來像目錄。他改成主軸「用設計解決溝通問題」，只放 3 個支持經驗，並寫清為何對應目標科系，動機段才變得有力。",
    "enCaseStudy": "Bo stuffed every activity into the statement like a table of contents. He reframed around “using design to fix communication,” kept 3 supports, and clarified major fit—motivation finally landed.",
    "zhWorkflow": [
      "決定主軸",
      "選3個支持經驗",
      "寫科系連結與未來規劃",
      "用Prompt產架構與初稿",
      "改成自己語氣並存檔"
    ],
    "enWorkflow": [
      "Choose theme",
      "Pick 3 supports",
      "Write major link + plan",
      "Generate structure/draft",
      "Rewrite in your voice and save"
    ],
    "zhCommonMistakes": [
      "沒有主軸",
      "經驗與科系無關",
      "未來規劃空泛",
      "照抄AI語氣",
      "加入未發生的勵志情節"
    ],
    "enCommonMistakes": [
      "No theme",
      "Experiences unrelated to major",
      "Vague future plan",
      "AI voice unchanged",
      "Adding fictional inspiration plots"
    ],
    "zhExcellentExample": "初稿含主軸、經驗段、科系動機、未來規劃、必改句標記。",
    "enExcellentExample": "Includes theme, experience section, major motivation, plan, and rewrite marks.",
    "zhCoachPrompt": "你是一位學習歷程自述修改老師。請檢查我的自述初稿，指出主軸是否清楚、開頭是否有記憶點、經驗是否具體、科系連結是否足夠。請幫我重排段落順序並給修改建議。",
    "enCoachPrompt": "你是一位學習歷程自述修改老師。請檢查我的自述初稿，指出主軸是否清楚、開頭是否有記憶點、經驗是否具體、科系連結是否足夠。請幫我重排段落順序並給修改建議。",
    "id": "admissions-L6",
    "lessonKey": "admissions-L6",
    "zhWhyItMatters": {
      "problem": "文件像經歷清單，讀完記不住你。",
      "ineffective": "請 AI 寫一篇漂亮但與自己無關的自述。",
      "solution": "先定主軸，再用真實經驗與科系理由寫可修改的初稿。"
    },
    "enWhyItMatters": {
      "problem": "Documents read like checklists; you are forgettable.",
      "ineffective": "Pretty AI statements disconnected from your life.",
      "solution": "Set a theme, then draft revisable text from real experiences and major reasons."
    },
    "zhObjectives": [
      "訂出自述主軸",
      "選3個支持經驗",
      "寫出與目標科系的連結",
      "完成自述與動機初稿",
      "標出必須親筆改寫的句子"
    ],
    "enObjectives": [
      "Define a theme",
      "Select 3 supporting experiences",
      "Link to the target major",
      "Finish statement/motivation draft",
      "Mark lines that must be rewritten by you"
    ],
    "estimatedTime": "約 60 分鐘 / About 60 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "學習歷程自述與申請動機初稿",
    "enOutputName": "Learning Statement & Motivation Draft",
    "zhCaseStudyBlocks": {
      "problem": "阿柏的自述像活動目錄，沒有主軸。",
      "wrong": "塞入所有經歷，或全文交給 AI 一次生成不改。",
      "right": "定主軸→選3經驗→連科系→初稿→標必改句。",
      "result": "一份可繼續修改的自述與動機初稿。"
    },
    "enCaseStudyBlocks": {
      "problem": "Bo’s statement is an activity directory.",
      "wrong": "Stuffing everything, or pasting AI full text unchanged.",
      "right": "Theme → 3 experiences → major link → draft → mark must-rewrite lines.",
      "result": "A revisable statement and motivation draft."
    },
    "zhWorkflowSteps": [
      {
        "do": "寫一句主軸",
        "why": "決定取捨",
        "input": "素材與故事",
        "output": "主軸句",
        "check": "是否可用一句說完"
      },
      {
        "do": "選3經驗",
        "why": "支撐主軸",
        "input": "STAR",
        "output": "證據組",
        "check": "是否都指向主軸"
      },
      {
        "do": "寫科系連結",
        "why": "動機要落地",
        "input": "比較表",
        "output": "連結段",
        "check": "是否提到真實課程／方向"
      },
      {
        "do": "產初稿並標必改",
        "why": "避免照抄",
        "input": "全部資料",
        "output": "初稿",
        "check": "必改句是否標出"
      },
      {
        "do": "存檔",
        "why": "備審架構會對照",
        "input": "改寫版",
        "output": "成果",
        "check": "讀完能否記住你"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Write one theme sentence",
        "why": "Forces selection",
        "input": "Bank/stories",
        "output": "Theme",
        "check": "Sayable in one line"
      },
      {
        "do": "Pick 3 supports",
        "why": "Evidence for theme",
        "input": "STAR",
        "output": "Evidence set",
        "check": "All point to theme"
      },
      {
        "do": "Write major link",
        "why": "Motivation needs ground",
        "input": "Comparison table",
        "output": "Link paragraph",
        "check": "Mentions real direction/courses"
      },
      {
        "do": "Draft + mark rewrites",
        "why": "Avoid paste-submit",
        "input": "All inputs",
        "output": "Draft",
        "check": "Must-rewrite lines marked"
      },
      {
        "do": "Save",
        "why": "Later structure maps to this",
        "input": "Revised",
        "output": "Deliverable",
        "check": "Memorable after one read"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "完成主軸與三段落大綱",
        "standard": "結構清楚",
        "mistakes": "流水帳",
        "check": "每段目的是否清楚？"
      },
      {
        "task": "完成初稿",
        "standard": "含科系連結",
        "mistakes": "只有經歷沒有動機",
        "check": "為何申請是否回答到？"
      },
      {
        "task": "標必改句並改寫",
        "standard": "語氣像自己",
        "mistakes": "整段不改",
        "check": "讀起來是否像你說話？"
      },
      {
        "task": "存檔",
        "standard": "完整初稿",
        "mistakes": "空白",
        "check": "已儲存？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Theme + 3-part outline",
        "standard": "Clear structure",
        "mistakes": "Diary flow",
        "check": "Purpose per section?"
      },
      {
        "task": "Finish draft",
        "standard": "Includes major link",
        "mistakes": "Experience only",
        "check": "Answers why apply?"
      },
      {
        "task": "Mark and rewrite",
        "standard": "Sounds like you",
        "mistakes": "No edits",
        "check": "Sounds like your speech?"
      },
      {
        "task": "Save",
        "standard": "Full draft",
        "mistakes": "Blank",
        "check": "Saved?"
      }
    ],
    "zhPromptPack": {
      "when": "當你要整合主軸、經驗與動機寫初稿時使用",
      "fields": [
        "[請填寫……]",
        "[個人經歷]",
        "[目標科系]"
      ],
      "body": "你是申請文件結構教練。不可代我捏造人生故事。\n\n我的資料：\n- 想讓審查端記住的主軸：[請填寫……]\n- 支持主軸的 3 個經驗（可貼 STAR 摘要）：[個人經歷]\n- 目標科系與選擇理由摘要：[目標科系]\n- 未來 1–2 年學習規劃（真實版）：[請填寫……]\n\n任務：產出「學習歷程自述與申請動機初稿」架構與初稿：\n1) 建議段落順序與每段目的\n2) 一版完整初稿（標註哪些句子必須改成我的原話）\n3) 指出與科系連結薄弱處\n4) 列出不該出現的空泛句\n\n限制：不要保證錄取；不要添加我沒提供的家庭／獎項細節。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "一份有主軸與科系連結的自述／動機初稿",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when integrating theme, experiences, and motivation into a draft",
      "fields": [
        "[fill in…]",
        "[personal experience]",
        "[target majors]"
      ],
      "body": "You are an application-structure coach. Do not invent my life story.\n\nMy inputs:\n- Main theme I want readers to remember: [fill in…]\n- 3 supporting experiences (STAR summaries OK): [personal experience]\n- Target major + why (summary): [target majors]\n- Real 1–2 year learning plan: [fill in…]\n\nTask: Produce a Learning Statement & Motivation Draft:\n1) Suggested section order and purpose of each\n2) A full draft (mark lines that must become my own wording)\n3) Weak major-links to fix\n4) Empty phrases to remove\n\nLimits: no admission guarantees; do not add family/award details I did not provide.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A statement/motivation draft with theme and major links",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "下一堂針對單一目標科系，把素材對照成備審架構。",
    "enNextStep": "Next, map materials to one target major’s application structure.",
    "zhConceptBlocks": {
      "principles": [
        "主軸決定取捨",
        "動機要連科系",
        "初稿必須改寫"
      ],
      "terms": [
        "自述主軸",
        "申請動機",
        "必改句"
      ],
      "criteria": [
        "有主軸",
        "有連結",
        "語氣真實"
      ],
      "boundaries": [
        "避免：代寫定稿直接送出",
        "避免：假情節",
        "避免：無關經歷堆砌"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Theme drives selection",
        "Motivation links to major",
        "Drafts must be rewritten"
      ],
      "terms": [
        "Statement theme",
        "Motivation",
        "Must-rewrite lines"
      ],
      "criteria": [
        "Has theme",
        "Has link",
        "Authentic voice"
      ],
      "boundaries": [
        "Avoid: submitting AI final as-is",
        "Avoid: fiction",
        "Avoid: unrelated stacking"
      ]
    }
  },
  {
    "zhTitle": "第7課：針對目標科系，建立備審資料架構",
    "enTitle": "Lesson 7: Build application material structure for target majors",
    "zhConcept": "同樣的素材，對不同科系的說服力不同。這一課把目標科系需求與你的素材做成對照，決定必放／可放／不放，避免備審變成「什麼都放一點」。",
    "enConcept": "The same materials persuade differently by major. This lesson maps major needs to your bank and decides must/optional/exclude—so the portfolio is not “a bit of everything.”",
    "zhPrompt": "你是備審架構教練。不可捏造科系官方評分比重。\n\n目標科系：[目標科系]\n我已查過的科系資訊（課程、能力、備審提示）：[請填寫……]\n我的素材庫摘要：[個人經歷]\n我的自述主軸：[請填寫……]\n\n任務：產出「科系專屬備審規劃表」：\n1) 整理該科系可能重視的能力（標註推測／已查證）\n2) 素材×能力對照表\n3) 必放／可放／先不放清單與理由\n4) 缺口：還缺哪種證據、如何在真實範圍內補強（不可造假）\n\n限制：規定不明就寫待查證；不要保證這樣排版一定過。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are an application-structure coach. Do not invent official scoring weights.\n\nTarget major: [target majors]\nWhat I already verified (courses, skills, portfolio hints): [fill in…]\nMaterial-bank summary: [personal experience]\nStatement theme: [fill in…]\n\nTask: Produce a Major-Specific Portfolio Plan:\n1) Likely valued skills (label inferred vs verified)\n2) Materials × skills matrix\n3) Must-include / optional / exclude lists with reasons\n4) Gaps: what evidence is missing and how to strengthen honestly (no fabrication)\n\nLimits: if rules are unclear, mark to-verify; no guarantees this layout “passes.”\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "科系：傳播相關；必放：美宣改版、簡報企劃；可放：程式小專題（強調邏輯）；不放：無關短期體驗。",
    "enExample": "Major: communication-related; must: visual redesign, presentation planning; optional: coding mini-project (logic); exclude: unrelated short tryouts.",
    "zhPractice": "選1個目標科系。；完成對照與取捨。；列出真實可補強的缺口。；存成科系專屬備審規劃表。",
    "enPractice": "Pick 1 major.; Finish matrix and selection.; List honest gap actions.; Save the plan.",
    "zhFeedbackPrompt": "你是一位科系備審策略顧問。\n\n以下是我完成的「科系專屬備審資料規劃表」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 科系需求理解：1-10 分，並說明扣分原因\n- 素材匹配度：1-10 分，並說明扣分原因\n- 能力證據強度：1-10 分，並說明扣分原因\n- 差異化：1-10 分，並說明扣分原因\n- 資料取捨：1-10 分，並說明扣分原因\n- 呈現順序：1-10 分，並說明扣分原因\n- 補強方向：1-10 分，並說明扣分原因\n- 整體策略：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪些素材必放？哪些素材應該刪除？\n2. 我目前最缺少哪一種能力證據？\n3. 請幫我安排備審資料呈現順序。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 科系備審策略顧問.\n\nHere is my completed work for: 科系專屬備審資料規劃表\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 科系需求理解：1-10 分，並說明扣分原因\n- 素材匹配度：1-10 分，並說明扣分原因\n- 能力證據強度：1-10 分，並說明扣分原因\n- 差異化：1-10 分，並說明扣分原因\n- 資料取捨：1-10 分，並說明扣分原因\n- 呈現順序：1-10 分，並說明扣分原因\n- 補強方向：1-10 分，並說明扣分原因\n- 整體策略：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪些素材必放？哪些素材應該刪除？\n2. 我目前最缺少哪一種能力證據？\n3. 請幫我安排備審資料呈現順序。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "備審為什麼要依科系調整？",
        "options": [
          "不同科系重視能力不同",
          "讓頁數變多",
          "因為 AI 說要"
        ],
        "answer": "不同科系重視能力不同"
      },
      {
        "q": "科系需求分析後下一步？",
        "options": [
          "對照自己的素材",
          "直接做封面",
          "刪掉所有活動"
        ],
        "answer": "對照自己的素材"
      },
      {
        "q": "不建議放的素材通常是？",
        "options": [
          "和科系無關且無法說明能力",
          "具體作品",
          "能展現成長的反思"
        ],
        "answer": "和科系無關且無法說明能力"
      }
    ],
    "enQuizItems": [
      {
        "q": "備審為什麼要依科系調整？",
        "options": [
          "不同科系重視能力不同",
          "讓頁數變多",
          "因為 AI 說要"
        ],
        "answer": "不同科系重視能力不同"
      },
      {
        "q": "科系需求分析後下一步？",
        "options": [
          "對照自己的素材",
          "直接做封面",
          "刪掉所有活動"
        ],
        "answer": "對照自己的素材"
      },
      {
        "q": "不建議放的素材通常是？",
        "options": [
          "和科系無關且無法說明能力",
          "具體作品",
          "能展現成長的反思"
        ],
        "answer": "和科系無關且無法說明能力"
      }
    ],
    "zhOutcome": "科系專屬備審規劃表",
    "enOutcome": "Major-Specific Portfolio Plan",
    "zhNotePrompt": "請在課程筆記中寫下：我的目標科系、該科系重視的 3 個能力、我最能證明這些能力的素材。",
    "enNotePrompt": "請在課程筆記中寫下：我的目標科系、該科系重視的 3 個能力、我最能證明這些能力的素材。",
    "zhDeliverableChecklist": [
      "有目標科系",
      "有能力清單與來源標註",
      "有素材對照",
      "有必放／可放／不放",
      "有缺口與真實補強",
      "已存檔且未造假"
    ],
    "enDeliverableChecklist": [
      "Target major set",
      "Skills with source labels",
      "Materials mapped",
      "Must/optional/exclude",
      "Gaps with honest fixes",
      "Saved; no fabrication"
    ],
    "zhScorecard": [
      "科系理解",
      "素材匹配",
      "證據強度",
      "資料取捨",
      "策略清楚"
    ],
    "enScorecard": [
      "科系理解",
      "素材匹配",
      "證據強度",
      "資料取捨",
      "策略清楚"
    ],
    "zhValueTip": "取捨本身就是申請論述的一部分。",
    "enValueTip": "Selection itself is part of your argument.",
    "id": "admissions-L7",
    "lessonKey": "admissions-L7",
    "zhWorkflow": [
      "選定一個目標科系",
      "整理已查證的科系資訊",
      "做素材×能力對照",
      "排出必放／可放／不放",
      "存成規劃表"
    ],
    "enWorkflow": [
      "Pick one target major",
      "Collect verified major notes",
      "Build materials×skills matrix",
      "Set must/optional/exclude",
      "Save the plan"
    ],
    "zhCaseStudy": "學生小禾想申請傳播相關科系，卻把程式競賽、美宣、志工全塞進去。對照後她保留溝通與企劃證據為必放，程式競賽改為可放並寫清轉移能力，無關項目先不放，備審主線立刻清楚。",
    "enCaseStudy": "He wanted a communication-related major but stuffed coding contests, design, and volunteering. After mapping, communication/planning became must-include; coding became optional with transfer skills; unrelated items dropped—and the through-line appeared.",
    "zhCommonMistakes": [
      "一次規劃太多科系導致混亂",
      "捏造官方配分",
      "必放清單過長",
      "缺口用造假補強",
      "忽略自述主軸"
    ],
    "enCommonMistakes": [
      "Planning too many majors at once",
      "Inventing official weights",
      "Must-list too long",
      "Faking to fill gaps",
      "Ignoring statement theme"
    ],
    "zhCoachPrompt": "請檢查我的備審架構是否對準目標科系，並指出應刪或應強化的素材。不要新增我沒有的經歷。",
    "enCoachPrompt": "Check whether my portfolio architecture matches the target major; suggest cuts/strengths. Add no experiences.",
    "zhWhyItMatters": {
      "problem": "備審像雜貨店，審查端看不到與科系的對齊。",
      "ineffective": "不看科系就塞滿所有活動。",
      "solution": "做對照表與取捨清單，形成科系專屬備審規劃。"
    },
    "enWhyItMatters": {
      "problem": "Portfolios look like general stores.",
      "ineffective": "Stuffing every activity without major fit.",
      "solution": "Build a matrix and selection lists for one major."
    },
    "zhObjectives": [
      "分析目標科系可能重視的能力",
      "完成素材×能力對照",
      "決定必放／可放／不放",
      "列出缺口與真實補強方式",
      "完成科系專屬備審規劃表"
    ],
    "enObjectives": [
      "Analyze likely valued skills",
      "Complete materials×skills matrix",
      "Decide must/optional/exclude",
      "List honest gap-filling actions",
      "Finish the major-specific plan"
    ],
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "科系專屬備審規劃表",
    "enOutputName": "Major-Specific Portfolio Plan",
    "zhCaseStudyBlocks": {
      "problem": "小禾的備審什麼都放，主線不清。",
      "wrong": "不對照科系需求，或請 AI 捏造評分比重。",
      "right": "能力對照→必放／可放／不放→缺口清單。",
      "result": "一頁清晰的科系專屬備審規劃表。"
    },
    "enCaseStudyBlocks": {
      "problem": "He’s portfolio includes everything; no through-line.",
      "wrong": "No major mapping—or inventing scoring weights.",
      "right": "Skill map → must/optional/exclude → gaps.",
      "result": "A clear one-page major-specific plan."
    },
    "zhWorkflowSteps": [
      {
        "do": "鎖定單一科系",
        "why": "一次對準一個目標",
        "input": "志願邏輯表",
        "output": "目標",
        "check": "是否具體到系"
      },
      {
        "do": "列能力（標推測/查證）",
        "why": "避免假規定",
        "input": "簡章筆記",
        "output": "能力清單",
        "check": "來源是否標註"
      },
      {
        "do": "做對照表",
        "why": "看見缺口",
        "input": "素材庫",
        "output": "矩陣",
        "check": "每格有依據"
      },
      {
        "do": "做取捨",
        "why": "形成主線",
        "input": "矩陣",
        "output": "三清單",
        "check": "必放是否過載"
      },
      {
        "do": "存檔",
        "why": "面試也會用到取捨理由",
        "input": "定稿",
        "output": "成果",
        "check": "能否口述為何這樣放"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Lock one major",
        "why": "Aim once",
        "input": "Preference logic",
        "output": "Target",
        "check": "Specific enough"
      },
      {
        "do": "List skills (inferred/verified)",
        "why": "No fake rules",
        "input": "Brochure notes",
        "output": "Skill list",
        "check": "Sources labeled"
      },
      {
        "do": "Build matrix",
        "why": "See gaps",
        "input": "Bank",
        "output": "Matrix",
        "check": "Evidence per cell"
      },
      {
        "do": "Select",
        "why": "Create through-line",
        "input": "Matrix",
        "output": "Three lists",
        "check": "Must-list not overloaded"
      },
      {
        "do": "Save",
        "why": "Interview will ask why",
        "input": "Final",
        "output": "Deliverable",
        "check": "Can explain aloud"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "完成能力清單與來源標註",
        "standard": "推測/查證分開",
        "mistakes": "當成官方配分",
        "check": "有無待查證？"
      },
      {
        "task": "完成對照表與三清單",
        "standard": "理由清楚",
        "mistakes": "全部必放",
        "check": "主線是否出現？"
      },
      {
        "task": "寫缺口與補強",
        "standard": "不造假",
        "mistakes": "建議假證書",
        "check": "補強是否可行？"
      },
      {
        "task": "存檔",
        "standard": "一頁可讀",
        "mistakes": "空白",
        "check": "已儲存？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Skill list with source labels",
        "standard": "Inferred vs verified",
        "mistakes": "Treating as official weights",
        "check": "To-verify present?"
      },
      {
        "task": "Matrix + three lists",
        "standard": "Clear reasons",
        "mistakes": "Everything must-include",
        "check": "Through-line appears?"
      },
      {
        "task": "Gaps + honest fixes",
        "standard": "No fabrication",
        "mistakes": "Suggesting fake certificates",
        "check": "Fixes feasible?"
      },
      {
        "task": "Save",
        "standard": "One readable page",
        "mistakes": "Blank",
        "check": "Saved?"
      }
    ],
    "zhExcellentExample": "規劃表含能力來源、對照矩陣、三清單、缺口與下一步查證。",
    "enExcellentExample": "Includes skill sources, matrix, three lists, gaps, and next verification.",
    "zhPromptPack": {
      "when": "當你要對單一科系做備審取捨時使用",
      "fields": [
        "[目標科系]",
        "[個人經歷]",
        "[請填寫……]"
      ],
      "body": "你是備審架構教練。不可捏造科系官方評分比重。\n\n目標科系：[目標科系]\n我已查過的科系資訊（課程、能力、備審提示）：[請填寫……]\n我的素材庫摘要：[個人經歷]\n我的自述主軸：[請填寫……]\n\n任務：產出「科系專屬備審規劃表」：\n1) 整理該科系可能重視的能力（標註推測／已查證）\n2) 素材×能力對照表\n3) 必放／可放／先不放清單與理由\n4) 缺口：還缺哪種證據、如何在真實範圍內補強（不可造假）\n\n限制：規定不明就寫待查證；不要保證這樣排版一定過。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "一份素材與科系需求對照的備審規劃表",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when selecting materials for one target major",
      "fields": [
        "[target majors]",
        "[personal experience]",
        "[fill in…]"
      ],
      "body": "You are an application-structure coach. Do not invent official scoring weights.\n\nTarget major: [target majors]\nWhat I already verified (courses, skills, portfolio hints): [fill in…]\nMaterial-bank summary: [personal experience]\nStatement theme: [fill in…]\n\nTask: Produce a Major-Specific Portfolio Plan:\n1) Likely valued skills (label inferred vs verified)\n2) Materials × skills matrix\n3) Must-include / optional / exclude lists with reasons\n4) Gaps: what evidence is missing and how to strengthen honestly (no fabrication)\n\nLimits: if rules are unclear, mark to-verify; no guarantees this layout “passes.”\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A portfolio plan mapping materials to major needs",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "下一堂建立面試題庫，讓備審主線變成說得出的回答。",
    "enNextStep": "Next, build an interview question bank so your portfolio through-line becomes speakable answers.",
    "zhConceptBlocks": {
      "principles": [
        "對準單一科系",
        "取捨創造主線",
        "缺口不造假"
      ],
      "terms": [
        "必放",
        "可放",
        "對照表"
      ],
      "criteria": [
        "有矩陣",
        "有三清單",
        "有缺口"
      ],
      "boundaries": [
        "避免：假配分",
        "避免：全塞",
        "避免：多系同時混亂規劃"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Aim one major",
        "Selection creates through-line",
        "No fake gap-fills"
      ],
      "terms": [
        "Must-include",
        "Optional",
        "Matrix"
      ],
      "criteria": [
        "Has matrix",
        "Has three lists",
        "Has gaps"
      ],
      "boundaries": [
        "Avoid: fake weights",
        "Avoid: stuffing",
        "Avoid: multi-major chaos"
      ]
    }
  },
  {
    "zhTitle": "第8課：建立大學面試題庫與回答架構",
    "enTitle": "Lesson 8: Build university interview question banks and answer structures",
    "zhConcept": "面試怕的不是題目多，而是回答沒有架構、無法連回備審主線。這一課建立個人面試題庫與回答重點，讓你練的是思考路徑，不是背稿。",
    "enConcept": "Interview fear is less about volume than about structure and links to your portfolio theme. This lesson builds a personal question bank and answer bullets—thinking paths, not memorized scripts.",
    "zhPrompt": "你是大學面試教練。不可編造我會被問的「保證考題」。\n\n目標科系：[目標科系]\n我的主軸與備審重點：[請填寫……]\n我最怕被問的點：[想改善的問題]\n\n任務：產出「個人面試題庫與回答架構」：\n1) 20 題可能題目（分類：自我介紹／動機／學習歷程／科系理解／未來規劃／臨場）\n2) 標出最難的 5 題\n3) 每題給 3 個回答重點（必須能接我的真實例子，不要寫背稿全文）\n4) 提醒哪些回答需要回簡章查證\n\n限制：不要保證這些題一定出現；不要叫我背誦固定稿。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a university interview coach. Do not invent “guaranteed” questions.\n\nTarget major: [target majors]\nMy theme and portfolio focus: [fill in…]\nWhat I fear being asked: [problem to improve]\n\nTask: Produce a Personal Interview Question Bank & Answer Frames:\n1) 20 possible questions (categories: intro/motivation/portfolio/major understanding/future/curveballs)\n2) Mark the hardest 5\n3) Give 3 answer bullets per question (must connect to my real examples—no full memorized scripts)\n4) Flag answers that need brochure verification\n\nLimits: do not guarantee these will appear; do not tell me to memorize a fixed script.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "科系：資管；怕被問：數學不好怎麼辦；主軸：用資料改善小專題決策。",
    "enExample": "Major: IM; fear: weak math; theme: using data to improve mini-project decisions.",
    "zhPractice": "產出20題分類題庫。；挑5題難題寫三重點。；檢查與備審一致性。；存成個人面試題庫。",
    "enPractice": "Build 20 categorized Qs.; Frame hardest 5.; Check consistency with portfolio.; Save the bank.",
    "zhFeedbackPrompt": "你是一位大學面試教練。\n\n以下是我完成的「面試題庫與回答架構」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 題庫完整度：1-10 分，並說明扣分原因\n- 題型多樣性：1-10 分，並說明扣分原因\n- 回答具體度：1-10 分，並說明扣分原因\n- 個人經驗連結：1-10 分，並說明扣分原因\n- 科系理解：1-10 分，並說明扣分原因\n- 邏輯架構：1-10 分，並說明扣分原因\n- 臨場可用性：1-10 分，並說明扣分原因\n- 說服力：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪 5 題最可能在真實面試出現？\n2. 哪一題我的回答最弱？\n3. 請告訴我教授真正想聽的是什麼。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 大學面試教練.\n\nHere is my completed work for: 面試題庫與回答架構\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 題庫完整度：1-10 分，並說明扣分原因\n- 題型多樣性：1-10 分，並說明扣分原因\n- 回答具體度：1-10 分，並說明扣分原因\n- 個人經驗連結：1-10 分，並說明扣分原因\n- 科系理解：1-10 分，並說明扣分原因\n- 邏輯架構：1-10 分，並說明扣分原因\n- 臨場可用性：1-10 分，並說明扣分原因\n- 說服力：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪 5 題最可能在真實面試出現？\n2. 哪一題我的回答最弱？\n3. 請告訴我教授真正想聽的是什麼。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "面試最不建議做什麼？",
        "options": [
          "建立架構",
          "練習表達",
          "背 AI 完整答案"
        ],
        "answer": "背 AI 完整答案"
      },
      {
        "q": "回答申請動機可用什麼架構？",
        "options": [
          "過去→現在→未來",
          "只說喜歡",
          "只說父母建議"
        ],
        "answer": "過去→現在→未來"
      },
      {
        "q": "AI 題庫的用途是？",
        "options": [
          "練習不同題型",
          "保證題目完全一樣",
          "取代面試"
        ],
        "answer": "練習不同題型"
      }
    ],
    "enQuizItems": [
      {
        "q": "面試最不建議做什麼？",
        "options": [
          "建立架構",
          "練習表達",
          "背 AI 完整答案"
        ],
        "answer": "背 AI 完整答案"
      },
      {
        "q": "回答申請動機可用什麼架構？",
        "options": [
          "過去→現在→未來",
          "只說喜歡",
          "只說父母建議"
        ],
        "answer": "過去→現在→未來"
      },
      {
        "q": "AI 題庫的用途是？",
        "options": [
          "練習不同題型",
          "保證題目完全一樣",
          "取代面試"
        ],
        "answer": "練習不同題型"
      }
    ],
    "zhOutcome": "個人面試題庫與回答架構",
    "enOutcome": "Personal Interview Question Bank & Answer Frames",
    "zhNotePrompt": "請在課程筆記中寫下：我最怕的 5 題、每題的回答重點、我需要補強的例子。",
    "enNotePrompt": "請在課程筆記中寫下：我最怕的 5 題、每題的回答重點、我需要補強的例子。",
    "zhDeliverableChecklist": [
      "有20題",
      "有分類",
      "有最難5題",
      "每題有3重點",
      "重點能接真實例子",
      "未當必考保證並已存檔"
    ],
    "enDeliverableChecklist": [
      "20 questions",
      "Categorized",
      "Hardest 5 marked",
      "3 bullets each",
      "Bullets link to real examples",
      "Not treated as guarantees; saved"
    ],
    "zhScorecard": [
      "題庫完整",
      "回答具體",
      "邏輯清楚",
      "個人經驗",
      "科系理解"
    ],
    "enScorecard": [
      "題庫完整",
      "回答具體",
      "邏輯清楚",
      "個人經驗",
      "科系理解"
    ],
    "zhValueTip": "面試準備的產品是「可說的架構」，不是「可背的全文」。",
    "enValueTip": "The product is a speakable frame—not a memorized essay.",
    "id": "admissions-L8",
    "lessonKey": "admissions-L8",
    "zhWorkflow": [
      "整理主軸與備審重點",
      "用Prompt產20題並分類",
      "挑難題5題",
      "每題寫3重點並接例子",
      "存成題庫"
    ],
    "enWorkflow": [
      "Gather theme/portfolio focus",
      "Generate 20 categorized questions",
      "Pick hardest 5",
      "Write 3 bullets + examples",
      "Save the bank"
    ],
    "zhCaseStudy": "學生小寧背了一篇自我介紹，一被追問細節就卡住。她改成題庫＋每題三個重點，並預先標出可舉的真實例子，追問時反而穩。",
    "enCaseStudy": "Ning memorized an intro and froze on follow-ups. She switched to a bank with three bullets and pre-tagged real examples—and handled follow-ups better.",
    "zhCommonMistakes": [
      "背完整答案",
      "題目與自己科系無關",
      "重點無法舉例",
      "把AI題當必考保證",
      "回答與備審互相矛盾"
    ],
    "enCommonMistakes": [
      "Memorizing full answers",
      "Questions unrelated to your major",
      "Bullets with no examples",
      "Treating AI Qs as guaranteed",
      "Contradicting the portfolio"
    ],
    "zhCoachPrompt": "請檢查我的面試題庫與回答重點是否空泛，並建議如何補真實例子。",
    "enCoachPrompt": "Check whether my interview bank and answer points are vague; suggest real-example additions.",
    "zhWhyItMatters": {
      "problem": "臨場容易答得很空，或背稿背到不像自己。",
      "ineffective": "只蒐集題目不寫回答架構，或整段背 AI 稿。",
      "solution": "20題分類＋難題5題＋每題3個可接真實例子的重點。"
    },
    "enWhyItMatters": {
      "problem": "Answers go empty—or sound memorized.",
      "ineffective": "Collecting questions without frames, or memorizing AI paragraphs.",
      "solution": "20 categorized Qs, hardest 5, 3 real-example bullets each."
    },
    "zhObjectives": [
      "產出20題並分類",
      "挑出最難5題",
      "為每題寫3個回答重點",
      "把重點連回真實例子",
      "完成個人面試題庫"
    ],
    "enObjectives": [
      "Produce and categorize 20 questions",
      "Pick hardest 5",
      "Write 3 bullets each",
      "Link bullets to real examples",
      "Finish the personal bank"
    ],
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "個人面試題庫與回答架構",
    "enOutputName": "Personal Interview Question Bank & Answer Frames",
    "zhCaseStudyBlocks": {
      "problem": "小寧會背稿，但不會應付追問。",
      "wrong": "背全文；或只存題目不做架構。",
      "right": "題庫分類＋難題標註＋三重點連真實例子。",
      "result": "一份可反覆練習的面試題庫與回答架構。"
    },
    "enCaseStudyBlocks": {
      "problem": "Ning can recite but fails follow-ups.",
      "wrong": "Memorizing full scripts—or saving questions with no frames.",
      "right": "Categorize, mark hard ones, three bullets linked to real examples.",
      "result": "A reusable interview bank and answer frames."
    },
    "zhWorkflowSteps": [
      {
        "do": "匯出主軸與必放素材",
        "why": "回答要一致",
        "input": "自述/規劃表",
        "output": "面試一頁紙",
        "check": "主線是否一致"
      },
      {
        "do": "產20題分類",
        "why": "覆蓋常見題型",
        "input": "一頁紙",
        "output": "題庫",
        "check": "六類是否都有"
      },
      {
        "do": "標最難5題",
        "why": "練習有重點",
        "input": "題庫",
        "output": "難題單",
        "check": "是否真是你怕的"
      },
      {
        "do": "寫三重點",
        "why": "抗背稿",
        "input": "難題",
        "output": "架構",
        "check": "能否30秒講完"
      },
      {
        "do": "存檔",
        "why": "下一堂模擬用",
        "input": "定稿",
        "output": "成果",
        "check": "不是全文稿"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Export theme + must materials",
        "why": "Consistent answers",
        "input": "Statement/plan",
        "output": "One-pager",
        "check": "Through-line consistent"
      },
      {
        "do": "Generate 20 categorized Qs",
        "why": "Coverage",
        "input": "One-pager",
        "output": "Bank",
        "check": "All six categories"
      },
      {
        "do": "Mark hardest 5",
        "why": "Focused practice",
        "input": "Bank",
        "output": "Hard list",
        "check": "Truly your fears"
      },
      {
        "do": "Write three bullets",
        "why": "Anti-script",
        "input": "Hard Qs",
        "output": "Frames",
        "check": "Speakable in 30s"
      },
      {
        "do": "Save",
        "why": "Used in mock next",
        "input": "Final",
        "output": "Deliverable",
        "check": "Not full scripts"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "完成20題分類",
        "standard": "六類都有",
        "mistakes": "只有自我介紹",
        "check": "覆蓋是否足夠？"
      },
      {
        "task": "完成難題架構",
        "standard": "每題3重點+例子",
        "mistakes": "寫成背稿",
        "check": "能否脫稿講？"
      },
      {
        "task": "一致性檢查",
        "standard": "不矛盾",
        "mistakes": "面試說一套備審另一套",
        "check": "主軸是否同一？"
      },
      {
        "task": "存檔",
        "standard": "可練習格式",
        "mistakes": "空白",
        "check": "已儲存？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Finish 20 categorized Qs",
        "standard": "All six types",
        "mistakes": "Intro only",
        "check": "Enough coverage?"
      },
      {
        "task": "Frame hard questions",
        "standard": "3 bullets + examples",
        "mistakes": "Full scripts",
        "check": "Speakable without notes?"
      },
      {
        "task": "Consistency check",
        "standard": "No contradictions",
        "mistakes": "Interview ≠ portfolio",
        "check": "Same theme?"
      },
      {
        "task": "Save",
        "standard": "Practice-ready format",
        "mistakes": "Blank",
        "check": "Saved?"
      }
    ],
    "zhExcellentExample": "題庫含分類、難度標記、三重點、可舉例子、查證提醒。",
    "enExcellentExample": "Includes categories, difficulty marks, three bullets, example hooks, verification notes.",
    "zhPromptPack": {
      "when": "當你要準備面試題型與回答骨架時使用",
      "fields": [
        "[目標科系]",
        "[請填寫……]",
        "[想改善的問題]"
      ],
      "body": "你是大學面試教練。不可編造我會被問的「保證考題」。\n\n目標科系：[目標科系]\n我的主軸與備審重點：[請填寫……]\n我最怕被問的點：[想改善的問題]\n\n任務：產出「個人面試題庫與回答架構」：\n1) 20 題可能題目（分類：自我介紹／動機／學習歷程／科系理解／未來規劃／臨場）\n2) 標出最難的 5 題\n3) 每題給 3 個回答重點（必須能接我的真實例子，不要寫背稿全文）\n4) 提醒哪些回答需要回簡章查證\n\n限制：不要保證這些題一定出現；不要叫我背誦固定稿。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "20 題分類題庫＋難題5題＋每題3重點",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when preparing question types and answer frames",
      "fields": [
        "[target majors]",
        "[fill in…]",
        "[problem to improve]"
      ],
      "body": "You are a university interview coach. Do not invent “guaranteed” questions.\n\nTarget major: [target majors]\nMy theme and portfolio focus: [fill in…]\nWhat I fear being asked: [problem to improve]\n\nTask: Produce a Personal Interview Question Bank & Answer Frames:\n1) 20 possible questions (categories: intro/motivation/portfolio/major understanding/future/curveballs)\n2) Mark the hardest 5\n3) Give 3 answer bullets per question (must connect to my real examples—no full memorized scripts)\n4) Flag answers that need brochure verification\n\nLimits: do not guarantee these will appear; do not tell me to memorize a fixed script.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "20 categorized questions, hardest 5, 3 bullets each",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "下一堂用題庫做模擬面試，留下評分與改進清單。",
    "enNextStep": "Next, run a mock interview from this bank and keep a scoring/improvement log.",
    "zhConceptBlocks": {
      "principles": [
        "架構優於背稿",
        "題庫要個人化",
        "與備審一致"
      ],
      "terms": [
        "回答重點",
        "難題",
        "臨場題"
      ],
      "criteria": [
        "20題",
        "5難題",
        "可舉例"
      ],
      "boundaries": [
        "避免：保證考題",
        "避免：全文背誦",
        "避免：矛盾說法"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Frames > scripts",
        "Personalize the bank",
        "Stay consistent with portfolio"
      ],
      "terms": [
        "Answer bullets",
        "Hard questions",
        "Curveballs"
      ],
      "criteria": [
        "20 Qs",
        "5 hard",
        "Example-ready"
      ],
      "boundaries": [
        "Avoid: guaranteed Qs",
        "Avoid: full memorization",
        "Avoid: contradictions"
      ]
    }
  },
  {
    "zhTitle": "第9課：用 AI 進行升學模擬面試並修正",
    "enTitle": "Lesson 9: Use AI for admissions mock interviews and revisions",
    "zhConcept": "有題庫還不夠，要用模擬把弱點練出來。這一課完成至少一輪模擬面試，留下評分與改進清單，並重練最弱的題。",
    "enConcept": "A bank is not enough—you need practice that surfaces weaknesses. This lesson runs at least one mock round, keeps scores and an improvement list, and redoes the weakest questions.",
    "zhPrompt": "你是模擬面試官。不可羞辱學生，也不可保證錄取。\n\n規則：\n- 一次只問 1 題\n- 等我回答後，再從清楚度、具體性、邏輯、說服力各給 1–5 分並說明\n- 指出哪一句太空泛，並問 1 個追問\n- 不要替我編造我沒說的經歷\n\n我的目標科系：[目標科系]\n我的回答架構摘要：[請填寫……]\n請從這一題開始問：[請填寫面試題]\n\n問完一輪後，幫我整理「模擬面試紀錄與改進清單」。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a mock interviewer. Do not belittle the student or guarantee admission.\n\nRules:\n- Ask 1 question at a time\n- After my answer, score clarity, specificity, logic, and persuasiveness 1–5 with reasons\n- Point out one vague sentence and ask 1 follow-up\n- Do not invent experiences I did not say\n\nMy target major: [target majors]\nMy answer-frame summary: [fill in…]\nStart with this question: [fill in interview question]\n\nAfter a round, help me compile a Mock Interview Log & Improvement List.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "先問：為什麼選這個系？我的架構：主軸一句→2個證據→科系連結。",
    "enExample": "Start with: Why this major? Frame: one theme line → 2 evidences → major link.",
    "zhPractice": "完成5題模擬與評分。；整理改進清單。；重練2題。；存成模擬面試紀錄與改進清單。",
    "enPractice": "Finish 5 scored mocks.; Compile improvements.; Redo 2.; Save the log.",
    "zhFeedbackPrompt": "你是一位嚴格但友善的大學面試教授。\n\n以下是我完成的「模擬面試回答」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 表達清楚度：1-10 分，並說明扣分原因\n- 具體性：1-10 分，並說明扣分原因\n- 邏輯性：1-10 分，並說明扣分原因\n- 真實性：1-10 分，並說明扣分原因\n- 臨場反應：1-10 分，並說明扣分原因\n- 科系理解度：1-10 分，並說明扣分原因\n- 說服力：1-10 分，並說明扣分原因\n- 錄取印象：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 哪一句最加分？哪一句最扣分？\n2. 如何從 60 分回答提升到 90 分？\n3. 請示範一版更好的回答，但不要捏造我的經歷。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 嚴格但友善的大學面試教授.\n\nHere is my completed work for: 模擬面試回答\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 表達清楚度：1-10 分，並說明扣分原因\n- 具體性：1-10 分，並說明扣分原因\n- 邏輯性：1-10 分，並說明扣分原因\n- 真實性：1-10 分，並說明扣分原因\n- 臨場反應：1-10 分，並說明扣分原因\n- 科系理解度：1-10 分，並說明扣分原因\n- 說服力：1-10 分，並說明扣分原因\n- 錄取印象：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 哪一句最加分？哪一句最扣分？\n2. 如何從 60 分回答提升到 90 分？\n3. 請示範一版更好的回答，但不要捏造我的經歷。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "模擬面試最重要的是？",
        "options": [
          "根據回饋修正回答",
          "只看分數",
          "每題背稿"
        ],
        "answer": "根據回饋修正回答"
      },
      {
        "q": "AI 回饋可看哪些面向？",
        "options": [
          "清楚度、具體性、邏輯、說服力",
          "星座",
          "運氣"
        ],
        "answer": "清楚度、具體性、邏輯、說服力"
      },
      {
        "q": "模擬後應留下什麼？",
        "options": [
          "改進清單",
          "只有截圖",
          "只有分數"
        ],
        "answer": "改進清單"
      }
    ],
    "enQuizItems": [
      {
        "q": "模擬面試最重要的是？",
        "options": [
          "根據回饋修正回答",
          "只看分數",
          "每題背稿"
        ],
        "answer": "根據回饋修正回答"
      },
      {
        "q": "AI 回饋可看哪些面向？",
        "options": [
          "清楚度、具體性、邏輯、說服力",
          "星座",
          "運氣"
        ],
        "answer": "清楚度、具體性、邏輯、說服力"
      },
      {
        "q": "模擬後應留下什麼？",
        "options": [
          "改進清單",
          "只有截圖",
          "只有分數"
        ],
        "answer": "改進清單"
      }
    ],
    "zhOutcome": "模擬面試紀錄與改進清單",
    "enOutcome": "Mock Interview Log & Improvement List",
    "zhNotePrompt": "請在課程筆記中寫下：我最常出現的回答問題、AI 給我的 3 個建議、下一輪練習目標。",
    "enNotePrompt": "請在課程筆記中寫下：我最常出現的回答問題、AI 給我的 3 個建議、下一輪練習目標。",
    "zhDeliverableChecklist": [
      "至少5題模擬",
      "每題有評分",
      "有改進清單",
      "已重練最弱2題",
      "未把分數當錄取預測",
      "已存檔"
    ],
    "enDeliverableChecklist": [
      "≥5 mocks",
      "Scores each",
      "Improvement list",
      "Weakest 2 redone",
      "Scores not treated as predictions",
      "Saved"
    ],
    "zhScorecard": [
      "表達清楚",
      "具體性",
      "邏輯性",
      "臨場反應",
      "說服力"
    ],
    "enScorecard": [
      "表達清楚",
      "具體性",
      "邏輯性",
      "臨場反應",
      "說服力"
    ],
    "zhValueTip": "模擬的價值在紀錄與重練，不在一次完美表現。",
    "enValueTip": "Mocks pay off through logging and redo—not one perfect run.",
    "id": "admissions-L9",
    "lessonKey": "admissions-L9",
    "zhWorkflow": [
      "從題庫選5題",
      "逐題模擬並評分",
      "整理改進清單",
      "重練最弱2題",
      "存成紀錄"
    ],
    "enWorkflow": [
      "Pick 5 from the bank",
      "Mock and score each",
      "Compile improvements",
      "Redo weakest 2",
      "Save the log"
    ],
    "zhCaseStudy": "學生阿哲模擬時每題都說「我很有熱忱」。留下評分後他發現具體性分數最低，於是重練兩題，改成先講行動再講熱忱，改進清單變得很明確。",
    "enCaseStudy": "Zhe answered every mock with “I’m passionate.” Scores showed specificity lowest; he redid two questions by leading with actions—then the improvement list became concrete.",
    "zhCommonMistakes": [
      "模擬但不記錄",
      "分數只有「還可以」",
      "不重練弱題",
      "讓AI替你回答",
      "把模擬分數當成錄取預測"
    ],
    "enCommonMistakes": [
      "Mocking without logging",
      "Scores like “okay”",
      "No redo",
      "Letting AI answer for you",
      "Treating scores as admission prediction"
    ],
    "zhCoachPrompt": "請依清楚度、具體性、邏輯、說服力評我的模擬回答，並給出改寫方向。不要替我編造經歷。",
    "enCoachPrompt": "Score my mock answers on clarity, specificity, logic, and persuasion; suggest rewrites. Invent no experiences.",
    "zhWhyItMatters": {
      "problem": "只看題不開口，真正面試仍會空白。",
      "ineffective": "模擬完只說「還不錯」沒有紀錄。",
      "solution": "固定評分維度＋改進清單＋重答弱題。"
    },
    "enWhyItMatters": {
      "problem": "Reading questions without speaking still freezes you live.",
      "ineffective": "Ending with “pretty good” and no log.",
      "solution": "Fixed score dimensions + improvement list + redo weak Qs."
    },
    "zhObjectives": [
      "完成至少5題模擬",
      "每題留下四維評分",
      "整理常見問題與改進清單",
      "重練最弱2題",
      "存成模擬面試紀錄"
    ],
    "enObjectives": [
      "Complete ≥5 mock questions",
      "Keep 4-dimension scores",
      "Compile issues and improvements",
      "Redo weakest 2",
      "Save the mock log"
    ],
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "進階 / Intermediate",
    "zhOutputName": "模擬面試紀錄與改進清單",
    "enOutputName": "Mock Interview Log & Improvement List",
    "zhCaseStudyBlocks": {
      "problem": "阿哲有題庫，但開口仍很空。",
      "wrong": "模擬後不紀錄；或要求 AI 保證這樣就能上。",
      "right": "評分→改進清單→重答弱題→存檔。",
      "result": "一份可追蹤進步的模擬面試紀錄。"
    },
    "enCaseStudyBlocks": {
      "problem": "Zhe has a bank but still speaks vaguely.",
      "wrong": "No log after mocks—or asking AI for admission guarantees.",
      "right": "Score → improve list → redo weak Qs → save.",
      "result": "A trackable mock interview log."
    },
    "zhWorkflowSteps": [
      {
        "do": "選5題（含難題）",
        "why": "練習要有挑戰",
        "input": "題庫",
        "output": "本輪題單",
        "check": "是否含怕的題"
      },
      {
        "do": "逐題回答與評分",
        "why": "留下證據",
        "input": "回答",
        "output": "評分表",
        "check": "四維是否都有"
      },
      {
        "do": "寫改進清單",
        "why": "下一輪可執行",
        "input": "評分",
        "output": "改進項",
        "check": "是否具體到句子"
      },
      {
        "do": "重答2題",
        "why": "把改進落地",
        "input": "弱題",
        "output": "前後對照",
        "check": "是否真的更具體"
      },
      {
        "do": "存檔",
        "why": "總檢查會用到",
        "input": "紀錄",
        "output": "成果",
        "check": "能否看出進步點"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Pick 5 including hard ones",
        "why": "Practice needs challenge",
        "input": "Bank",
        "output": "Round list",
        "check": "Includes feared Qs"
      },
      {
        "do": "Answer and score",
        "why": "Leave evidence",
        "input": "Answers",
        "output": "Score sheet",
        "check": "All 4 dimensions"
      },
      {
        "do": "Write improvements",
        "why": "Actionable next round",
        "input": "Scores",
        "output": "Fix list",
        "check": "Specific to sentences"
      },
      {
        "do": "Redo 2",
        "why": "Land the fixes",
        "input": "Weak Qs",
        "output": "Before/after",
        "check": "More specific"
      },
      {
        "do": "Save",
        "why": "Final review uses this",
        "input": "Log",
        "output": "Deliverable",
        "check": "Progress visible"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "完成5題評分紀錄",
        "standard": "四維分數齊",
        "mistakes": "只聊天不評分",
        "check": "紀錄是否可回看？"
      },
      {
        "task": "寫出改進清單",
        "standard": "至少5項可執行",
        "mistakes": "只寫加油",
        "check": "明天能否照做？"
      },
      {
        "task": "重練弱題並對照",
        "standard": "有前後差異",
        "mistakes": "重念同一稿",
        "check": "具體性是否提升？"
      },
      {
        "task": "存檔",
        "standard": "含改進與重答",
        "mistakes": "空白",
        "check": "已儲存？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Finish 5 scored records",
        "standard": "All 4 dimensions",
        "mistakes": "Chat only",
        "check": "Reviewable later?"
      },
      {
        "task": "Write improvement list",
        "standard": "≥5 actionable items",
        "mistakes": "Only “do better”",
        "check": "Doable tomorrow?"
      },
      {
        "task": "Redo weak Qs with compare",
        "standard": "Visible before/after",
        "mistakes": "Same script again",
        "check": "More specific?"
      },
      {
        "task": "Save",
        "standard": "Includes fixes + redos",
        "mistakes": "Blank",
        "check": "Saved?"
      }
    ],
    "zhExcellentExample": "紀錄含題目、回答摘要、四維分、追問、改進項、重答對照。",
    "enExcellentExample": "Includes Qs, answer summaries, 4 scores, follow-ups, fixes, redo compare.",
    "zhPromptPack": {
      "when": "當你要用 AI 當模擬面試官時使用",
      "fields": [
        "[目標科系]",
        "[請填寫……]",
        "[請填寫面試題]"
      ],
      "body": "你是模擬面試官。不可羞辱學生，也不可保證錄取。\n\n規則：\n- 一次只問 1 題\n- 等我回答後，再從清楚度、具體性、邏輯、說服力各給 1–5 分並說明\n- 指出哪一句太空泛，並問 1 個追問\n- 不要替我編造我沒說的經歷\n\n我的目標科系：[目標科系]\n我的回答架構摘要：[請填寫……]\n請從這一題開始問：[請填寫面試題]\n\n問完一輪後，幫我整理「模擬面試紀錄與改進清單」。\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "含評分、追問與改進項的模擬面試紀錄",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "extensions": [
        {
          "title": "延伸：重答比較",
          "body": "這是我同一題的第二次回答：（貼上）請比較前後差異，只根據我寫的內容給改進建議，不要添加新經歷。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when running an AI mock interview",
      "fields": [
        "[target majors]",
        "[fill in…]",
        "[fill in interview question]"
      ],
      "body": "You are a mock interviewer. Do not belittle the student or guarantee admission.\n\nRules:\n- Ask 1 question at a time\n- After my answer, score clarity, specificity, logic, and persuasiveness 1–5 with reasons\n- Point out one vague sentence and ask 1 follow-up\n- Do not invent experiences I did not say\n\nMy target major: [target majors]\nMy answer-frame summary: [fill in…]\nStart with this question: [fill in interview question]\n\nAfter a round, help me compile a Mock Interview Log & Improvement List.\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A mock-interview log with scores, follow-ups, and improvements",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "extensions": [
        {
          "title": "Extension: rewrite compare",
          "body": "Here is my second answer to the same question: (paste). Compare versions and advise only from what I wrote—do not add new experiences."
        }
      ]
    },
    "zhNextStep": "最後一堂整合前9課成果，做總檢查與送件清單。",
    "enNextStep": "Finally, integrate the first 9 outputs into a final review and submission checklist.",
    "zhConceptBlocks": {
      "principles": [
        "紀錄重於感覺",
        "弱題要重練",
        "模擬不是預測錄取"
      ],
      "terms": [
        "四維評分",
        "改進清單",
        "重答"
      ],
      "criteria": [
        "5題",
        "有分數",
        "有重練"
      ],
      "boundaries": [
        "避免：AI代答",
        "避免：羞辱式回饋",
        "避免：錄取保證"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Logs > vibes",
        "Redo weak Qs",
        "Mocks ≠ admission forecasts"
      ],
      "terms": [
        "4-dimension scores",
        "Improvement list",
        "Redo"
      ],
      "criteria": [
        "5 Qs",
        "Scores",
        "Redos"
      ],
      "boundaries": [
        "Avoid: AI answering for you",
        "Avoid: harsh shaming",
        "Avoid: guarantees"
      ]
    }
  },
  {
    "zhTitle": "第10課：整合完成「大學申請包」",
    "enTitle": "Lesson 10: Complete your university application package",
    "zhConcept": "前9課成果若分散，申請前仍會漏東漏西。這一課把成果整合成完整申請資料檢查與送件清單：對齊主軸、找出缺口、排出最後修改優先序，並提醒以官方簡章為準。",
    "enConcept": "Scattered lesson outputs still cause last-minute gaps. This lesson integrates them into a full review and submission checklist: align the theme, find gaps, prioritize final edits, and follow the official brochure.",
    "zhPrompt": "你是大學申請總檢查教練。不可保證錄取，不可捏造缺漏的官方規定。\n\n請根據我貼上的前9課成果摘要做總檢查：\n1) 大學申請準備地圖\n2) 科系探索表\n3) 校系比較與志願選擇邏輯表\n4) 學習歷程素材庫\n5) 3則多元表現\n6) 自述與動機初稿\n7) 科系專屬備審規劃表\n8) 面試題庫與回答架構\n9) 模擬面試紀錄\n\n我貼上的摘要：\n[請填寫……]\n\n輸出「完整申請資料檢查與送件清單」：\n- 一致性：主軸是否一路對齊\n- 完整度：哪一項空白／過短\n- 風險：誇大、矛盾、待查證規定\n- 優先修改的 3 件事\n- 送件前檢查清單（可列印）\n- 提醒：最終規定以當年度官方簡章為準\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
    "enPrompt": "You are a final application-review coach. Do not guarantee admission or invent missing official rules.\n\nReview summaries from my first 9 lesson outputs:\n1) Preparation map\n2) Major exploration sheet\n3) Preference logic table\n4) Material bank\n5) 3 STAR stories\n6) Statement/motivation draft\n7) Major-specific portfolio plan\n8) Interview bank\n9) Mock interview log\n\nMy pasted summaries:\n[fill in…]\n\nProduce a Full Application Review & Submission Checklist:\n- Consistency: theme alignment across items\n- Completeness: blank/too-short items\n- Risks: exaggeration, contradictions, rules to verify\n- Top 3 priority fixes\n- Pre-submission checklist (printable)\n- Reminder: final rules follow the official brochure for the current year\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
    "zhExample": "摘要：地圖有7天行動；探索表三優先；比較表兩格待查；素材10筆；STAR×3；自述主軸清楚…",
    "enExample": "Summary: map has 7-day plan; exploration top 3; two comparison cells to verify; 10 materials; STAR×3; clear theme…",
    "zhPractice": "匯出前9課摘要。；做一致性與缺口檢查。；完成優先3修與送件清單。；存成完整申請資料檢查與送件清單。",
    "enPractice": "Export nine summaries.; Check consistency and gaps.; Finish top 3 fixes and submission checklist.; Save the final review.",
    "zhFeedbackPrompt": "你是一位大學申請總顧問。\n\n以下是我完成的「完整大學申請包」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 申請主軸：1-10 分，並說明扣分原因\n- 資料完整度：1-10 分，並說明扣分原因\n- 各文件一致性：1-10 分，並說明扣分原因\n- 科系連結：1-10 分，並說明扣分原因\n- 具體證據：1-10 分，並說明扣分原因\n- 面試準備：1-10 分，並說明扣分原因\n- 缺口風險：1-10 分，並說明扣分原因\n- 整體競爭力：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 整份申請包最強的地方是什麼？最弱的是什麼？\n2. 哪些資料彼此沒有連起來？\n3. 請列出最優先修改的 3 件事與修改順序。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
    "enFeedbackPrompt": "Act as a 大學申請總顧問.\n\nHere is my completed work for: 完整大學申請包\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 申請主軸：1-10 分，並說明扣分原因\n- 資料完整度：1-10 分，並說明扣分原因\n- 各文件一致性：1-10 分，並說明扣分原因\n- 科系連結：1-10 分，並說明扣分原因\n- 具體證據：1-10 分，並說明扣分原因\n- 面試準備：1-10 分，並說明扣分原因\n- 缺口風險：1-10 分，並說明扣分原因\n- 整體競爭力：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 整份申請包最強的地方是什麼？最弱的是什麼？\n2. 哪些資料彼此沒有連起來？\n3. 請列出最優先修改的 3 件事與修改順序。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
    "zhQuizItems": [
      {
        "q": "完整申請包最重要的是？",
        "options": [
          "所有資料支持同一申請主軸",
          "資料越多越好",
          "全部用 AI 寫"
        ],
        "answer": "所有資料支持同一申請主軸"
      },
      {
        "q": "總檢查表應包含？",
        "options": [
          "已完成、需修改、缺少資料、下一步",
          "只有封面",
          "只有成績"
        ],
        "answer": "已完成、需修改、缺少資料、下一步"
      },
      {
        "q": "最後修正應該怎麼做？",
        "options": [
          "精準補強缺口",
          "全部重寫",
          "刪掉所有內容"
        ],
        "answer": "精準補強缺口"
      }
    ],
    "enQuizItems": [
      {
        "q": "完整申請包最重要的是？",
        "options": [
          "所有資料支持同一申請主軸",
          "資料越多越好",
          "全部用 AI 寫"
        ],
        "answer": "所有資料支持同一申請主軸"
      },
      {
        "q": "總檢查表應包含？",
        "options": [
          "已完成、需修改、缺少資料、下一步",
          "只有封面",
          "只有成績"
        ],
        "answer": "已完成、需修改、缺少資料、下一步"
      },
      {
        "q": "最後修正應該怎麼做？",
        "options": [
          "精準補強缺口",
          "全部重寫",
          "刪掉所有內容"
        ],
        "answer": "精準補強缺口"
      }
    ],
    "zhOutcome": "完整申請資料檢查與送件清單",
    "enOutcome": "Full Application Review & Submission Checklist",
    "zhNotePrompt": "請在課程筆記中寫下：我的申請主軸、目前最完整的資料、最需要補強的 3 件事。",
    "enNotePrompt": "請在課程筆記中寫下：我的申請主軸、目前最完整的資料、最需要補強的 3 件事。",
    "zhDeliverableChecklist": [
      "已匯整前9課",
      "已檢查主軸一致性",
      "已列出優先修改3項",
      "已有送件前勾選清單",
      "已提醒查官方簡章",
      "未保證錄取並已存檔"
    ],
    "enDeliverableChecklist": [
      "First 9 compiled",
      "Theme consistency checked",
      "Top 3 fixes listed",
      "Pre-submission checklist present",
      "Official brochure reminder included",
      "No admission guarantee; saved"
    ],
    "zhScorecard": [
      "申請主軸",
      "資料完整",
      "文件一致",
      "科系連結",
      "整體競爭力"
    ],
    "enScorecard": [
      "申請主軸",
      "資料完整",
      "文件一致",
      "科系連結",
      "整體競爭力"
    ],
    "zhValueTip": "最後一課的產品是「可執行的檢查」，不是再寫一篇空的總結文。",
    "enValueTip": "The final product is an actionable checklist—not another empty summary essay.",
    "id": "admissions-L10",
    "lessonKey": "admissions-L10",
    "zhWorkflow": [
      "打開成果包匯出前9課摘要",
      "檢查主軸與數據一致性",
      "用Prompt做總檢查",
      "只修最重要的3項",
      "完成送件前清單並存檔"
    ],
    "enWorkflow": [
      "Export summaries of first 9",
      "Check theme/data consistency",
      "Run final-review prompt",
      "Fix only top 3",
      "Finish and save submission checklist"
    ],
    "zhCaseStudy": "學生小安把前9課成果貼成摘要後，總檢查發現：自述主軸與面試回答不一致，且校系比較表有兩格仍待查證。她只修這三件最重要的事，而不是整包重寫，送件前清單也第一次變短而清楚。",
    "enCaseStudy": "After pasting summaries of nine outputs, An’s review found the statement theme conflicting with interview answers, plus two unverified comparison cells. She fixed only the top three issues—and the pre-submission list became short and clear.",
    "zhCommonMistakes": [
      "不回看前9課就重寫",
      "檢查清單沒有優先序",
      "把AI總評當成錄取結果",
      "忽略待查證規定",
      "送件清單無法勾選"
    ],
    "enCommonMistakes": [
      "Rewriting without reviewing the nine",
      "Checklist with no priorities",
      "Treating AI review as admission result",
      "Ignoring to-verify rules",
      "Non-checkable submission list"
    ],
    "zhCoachPrompt": "請對我的大學申請包做總檢查：主軸一致性、缺件與下一步，不要新增虛構內容。",
    "enCoachPrompt": "Audit my university application pack for spine coherence, missing pieces, and next steps. Invent nothing.",
    "zhWhyItMatters": {
      "problem": "各課都做了，但互相矛盾或關鍵項空白。",
      "ineffective": "只開新文件重寫，不回看已有成果。",
      "solution": "用總檢查表整合前9課，產出可執行的送件前清單。"
    },
    "enWhyItMatters": {
      "problem": "Lessons done, but items contradict or key pieces are blank.",
      "ineffective": "Rewriting from scratch instead of reviewing existing outputs.",
      "solution": "Integrate the first 9 with a final review into an actionable pre-submission list."
    },
    "zhObjectives": [
      "匯整前9課成果",
      "檢查主軸一致性",
      "找出最重要的3個缺口",
      "完成送件前檢查清單",
      "把總檢查存入成果包"
    ],
    "enObjectives": [
      "Gather first 9 outputs",
      "Check theme consistency",
      "Find top 3 gaps",
      "Finish pre-submission checklist",
      "Save the final review"
    ],
    "estimatedTime": "約 60 分鐘 / About 60 min",
    "difficulty": "標準 / Standard",
    "zhOutputName": "完整申請資料檢查與送件清單",
    "enOutputName": "Full Application Review & Submission Checklist",
    "zhCaseStudyBlocks": {
      "problem": "小安各課都有檔，但整包互相打架。",
      "wrong": "全部重寫；或請AI保證「這樣一定過」。",
      "right": "一致性檢查→缺口→優先3修→送件清單。",
      "result": "一份完整申請資料檢查與送件清單。"
    },
    "enCaseStudyBlocks": {
      "problem": "An has files per lesson, but they conflict.",
      "wrong": "Full rewrite—or asking AI to guarantee success.",
      "right": "Consistency → gaps → top 3 fixes → submission checklist.",
      "result": "A full application review and submission checklist."
    },
    "zhWorkflowSteps": [
      {
        "do": "匯整九項摘要",
        "why": "總檢查要有材料",
        "input": "成果包",
        "output": "一頁摘要",
        "check": "九項是否都有"
      },
      {
        "do": "人工掃過矛盾",
        "why": "AI可能漏看你的原意",
        "input": "摘要",
        "output": "矛盾筆記",
        "check": "面試與自述是否一致"
      },
      {
        "do": "跑總檢查Prompt",
        "why": "補結構性遺漏",
        "input": "摘要+筆記",
        "output": "檢查報告",
        "check": "是否含優先3修"
      },
      {
        "do": "只修三項",
        "why": "避免最後失控重寫",
        "input": "報告",
        "output": "修訂紀錄",
        "check": "是否真的改完"
      },
      {
        "do": "產出送件清單並存檔",
        "why": "臨送件可勾選",
        "input": "修訂",
        "output": "總成果",
        "check": "有提醒查官方簡章"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Compile nine summaries",
        "why": "Review needs material",
        "input": "Package",
        "output": "One-page summary",
        "check": "All nine present"
      },
      {
        "do": "Human pass for contradictions",
        "why": "AI may miss your intent",
        "input": "Summary",
        "output": "Conflict notes",
        "check": "Interview vs statement"
      },
      {
        "do": "Run final-review prompt",
        "why": "Catch structural gaps",
        "input": "Summary+notes",
        "output": "Review report",
        "check": "Includes top 3 fixes"
      },
      {
        "do": "Fix only three",
        "why": "Avoid last-minute rewrite spiral",
        "input": "Report",
        "output": "Revision log",
        "check": "Actually finished"
      },
      {
        "do": "Submission checklist + save",
        "why": "Checkbox before submit",
        "input": "Revisions",
        "output": "Final deliverable",
        "check": "Brochure reminder included"
      }
    ],
    "zhPracticeSteps": [
      {
        "task": "完成九項摘要匯整",
        "standard": "九項都有內容指標",
        "mistakes": "漏課",
        "check": "哪一課空白？"
      },
      {
        "task": "完成總檢查報告",
        "standard": "含一致性與風險",
        "mistakes": "只有「加油」",
        "check": "有無優先3修？"
      },
      {
        "task": "完成送件前勾選清單",
        "standard": "可列印勾選",
        "mistakes": "段落散文",
        "check": "能否邊勾邊做？"
      },
      {
        "task": "存檔",
        "standard": "成果名稱正確",
        "mistakes": "空白",
        "check": "已儲存？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Compile nine summaries",
        "standard": "Coverage for all nine",
        "mistakes": "Missing lessons",
        "check": "Which is blank?"
      },
      {
        "task": "Finish review report",
        "standard": "Consistency + risks",
        "mistakes": "Only pep talk",
        "check": "Top 3 fixes?"
      },
      {
        "task": "Make checkable submission list",
        "standard": "Printable checkboxes",
        "mistakes": "Prose only",
        "check": "Can tick while doing?"
      },
      {
        "task": "Save",
        "standard": "Correct deliverable name",
        "mistakes": "Blank",
        "check": "Saved?"
      }
    ],
    "zhExcellentExample": "總檢查含九項狀態、矛盾點、風險、優先3修、送件勾選清單與簡章提醒。",
    "enExcellentExample": "Includes nine-item status, conflicts, risks, top 3 fixes, tickable checklist, brochure reminder.",
    "zhPromptPack": {
      "when": "當你要整合前9課並做送件前總檢查時使用",
      "fields": [
        "[請填寫……]"
      ],
      "body": "你是大學申請總檢查教練。不可保證錄取，不可捏造缺漏的官方規定。\n\n請根據我貼上的前9課成果摘要做總檢查：\n1) 大學申請準備地圖\n2) 科系探索表\n3) 校系比較與志願選擇邏輯表\n4) 學習歷程素材庫\n5) 3則多元表現\n6) 自述與動機初稿\n7) 科系專屬備審規劃表\n8) 面試題庫與回答架構\n9) 模擬面試紀錄\n\n我貼上的摘要：\n[請填寫……]\n\n輸出「完整申請資料檢查與送件清單」：\n- 一致性：主軸是否一路對齊\n- 完整度：哪一項空白／過短\n- 風險：誇大、矛盾、待查證規定\n- 優先修改的 3 件事\n- 送件前檢查清單（可列印）\n- 提醒：最終規定以當年度官方簡章為準\n\n請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。",
      "expected": "一份一致性／缺口／優先修改與送件前檢查清單",
      "revisionReminder": "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
    },
    "enPromptPack": {
      "when": "Use when integrating the first 9 outputs for a pre-submission review",
      "fields": [
        "[fill in…]"
      ],
      "body": "You are a final application-review coach. Do not guarantee admission or invent missing official rules.\n\nReview summaries from my first 9 lesson outputs:\n1) Preparation map\n2) Major exploration sheet\n3) Preference logic table\n4) Material bank\n5) 3 STAR stories\n6) Statement/motivation draft\n7) Major-specific portfolio plan\n8) Interview bank\n9) Mock interview log\n\nMy pasted summaries:\n[fill in…]\n\nProduce a Full Application Review & Submission Checklist:\n- Consistency: theme alignment across items\n- Completeness: blank/too-short items\n- Risks: exaggeration, contradictions, rules to verify\n- Top 3 priority fixes\n- Pre-submission checklist (printable)\n- Reminder: final rules follow the official brochure for the current year\n\nRevise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy.",
      "expected": "A consistency/gap/priority-fix and pre-submission checklist",
      "revisionReminder": "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."
    },
    "zhNextStep": "把本課清單與大學申請包／成果包對照，勾完再依官方時程送件。",
    "enNextStep": "Cross-check this list with your application kit/result package, tick items, then submit on the official timeline.",
    "zhConceptBlocks": {
      "principles": [
        "整合優於重寫",
        "優先序優於完美主義",
        "官方簡章最後裁決"
      ],
      "terms": [
        "一致性",
        "送件清單",
        "優先3修"
      ],
      "criteria": [
        "九項匯整",
        "有優先修",
        "可勾選"
      ],
      "boundaries": [
        "避免：錄取保證",
        "避免：忽略待查證",
        "避免：最後全面重寫失控"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Integrate > rewrite",
        "Priority > perfectionism",
        "Brochure has final say"
      ],
      "terms": [
        "Consistency",
        "Submission checklist",
        "Top 3 fixes"
      ],
      "criteria": [
        "Nine compiled",
        "Priorities set",
        "Tickable"
      ],
      "boundaries": [
        "Avoid: guarantees",
        "Avoid: skipping verification",
        "Avoid: rewrite spirals"
      ]
    }
  }
],
  "college-learning": [
  {
    "estimatedTime": "約 45 分鐘 / About 45 min",
    "difficulty": "入門 / Beginner",
    "id": "college-learning-L1",
    "lessonKey": "college-learning-L1",
    "zhTitle": "第1課：建立正確的 AI 學習方法與使用界線",
    "enTitle": "Lesson 1: Build the right AI learning method and usage boundaries",
    "zhValueTip": "先有規劃與紅線，再談 Prompt；AI 是學習助手，不是代寫或保證成績的工具。",
    "enValueTip": "Plan and red lines first, then prompts. AI is a study aid—not a ghostwriter or grade guarantee.",
    "zhOutputName": "AI 學習目標與課程規劃表",
    "enOutputName": "AI Learning Goals and Course Plan",
    "zhOutcome": "AI 學習目標與課程規劃表",
    "enOutcome": "AI Learning Goals and Course Plan",
    "zhObjectives": [
      "列出本學期至少 3 門課與各自學習目標",
      "區分 AI 可協助、必須自己理解、絕對不可交給 AI 的工作",
      "寫出 3 條可檢查的學術誠信紅線",
      "設計只針對 1 門課的 7 天小實驗",
      "把成果存成「AI 學習目標與課程規劃表」"
    ],
    "enObjectives": [
      "List at least 3 courses and a checkable goal for each",
      "Separate AI-help, must-understand, and never-give-to-AI work",
      "Write 3 checkable academic-integrity red lines",
      "Design a 7-day experiment on one course only",
      "Save an AI Learning Goals and Course Plan"
    ],
    "zhWhyItMatters": {
      "problem": "沒有目標與紅線，AI 很容易變成交作業捷徑，最後既沒學會，也有學術誠信風險。",
      "ineffective": "只問「幫我用 AI 把這學期變輕鬆」，沒有課程清單與不可交給 AI 的範圍。",
      "solution": "先列出本學期課程、學習目標、AI 可協助與必須自做區，再用 7 天小實驗驗證。"
    },
    "enWhyItMatters": {
      "problem": "Without goals and red lines, AI becomes a homework shortcut—weak learning and integrity risk.",
      "ineffective": "Asking AI to “make this semester easier” with no course list or off-limits zone.",
      "solution": "List courses, checkable goals, AI-help vs must-do zones, then test with a 7-day experiment."
    },
    "zhConceptBlocks": {
      "principles": [
        "先規劃再提問",
        "AI 改變速度，不取代理解與責任",
        "紅線必須可檢查"
      ],
      "terms": [
        "必須自做區",
        "學術誠信紅線",
        "7 天小實驗"
      ],
      "criteria": [
        "有課程清單",
        "有分工",
        "有紅線與實驗"
      ],
      "boundaries": [
        "避免：代寫整份作業",
        "避免：代考",
        "避免：保證成績"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Plan before prompting",
        "AI changes speed, not responsibility",
        "Red lines must be checkable"
      ],
      "terms": [
        "Must-do zone",
        "Integrity red lines",
        "7-day experiment"
      ],
      "criteria": [
        "Course list",
        "Role split",
        "Red lines and experiment"
      ],
      "boundaries": [
        "Avoid: ghostwriting full work",
        "Avoid: exam-taking",
        "Avoid: grade guarantees"
      ]
    },
    "zhConcept": "很多大學生一打開 AI 就說「幫我寫作業」，卻沒有本學期地圖：這學期要修什麼、每門課真正要學會什麼、哪些可以請 AI 整理結構、哪些必須自己理解與完成。這一課要解決的問題，就是把模糊的「我想用 AI 學習」變成可執行的學習目標與課程規劃表。AI 能幫你拆任務與標出界線，但不能代替你上課、思考，也不能代寫或代考。",
    "enConcept": "Many students open AI and say “write my homework,” without a semester map: which courses, what must be learned, where AI may help structure work, and what they must do themselves. This lesson turns “I want to use AI to study” into an actionable goals-and-course plan. AI can split tasks and mark boundaries—it cannot attend class, think for you, ghostwrite, or take exams.",
    "zhCaseStudyBlocks": {
      "problem": "大二學生小瑜本學期有 5 門課，一遇到作業就請 AI「直接寫」，不知道哪些必須自己完成。",
      "wrong": "沒有課程清單與紅線，把整份作業貼給 AI 後直接繳交。",
      "right": "先寫課程、目標、人／AI／必須自做，再請 AI 產出規劃表與 7 天實驗，並把代寫／代考列為紅線。",
      "result": "一份可放入學習系統包的「AI 學習目標與課程規劃表」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Sophomore Yu has 5 courses and asks AI to “just write it” whenever homework appears.",
      "wrong": "No course list or red lines; paste a full assignment to AI and submit.",
      "right": "List courses, goals, and human/AI/must-do roles, then generate a plan and 7-day experiment with no-ghostwriting red lines.",
      "result": "An AI Learning Goals and Course Plan ready for the learning-system package."
    },
    "zhCaseStudy": "大二傳院學生小瑜一開學就把所有報告題目丟給 AI，第一次作業被老師提醒「這不像你寫的」。她後來改成：先列出 5 門課、每門一句目標、標出不可交給 AI 的部分（論點、引用核對、考試），再請 AI 只幫她排 7 天行動。她第一次知道：AI 可以幫她拆報告步驟，但不能替她寫完整報告。",
    "enCaseStudy": "Sophomore Yu dumped every assignment into AI and was told the first paper “didn’t sound like her.” She then listed 5 courses, one goal each, and a never-give-to-AI zone (argument, citation checks, exams), and asked AI only for a 7-day plan. She learned AI can break down steps—not write the whole paper.",
    "zhWorkflowSteps": [
      {
        "do": "列出本學期課程與耗時任務",
        "why": "沒有課程就無法分工",
        "input": "課表、作業類型",
        "output": "課程清單草稿",
        "check": "是否至少 3 門具體課名"
      },
      {
        "do": "寫出可檢查目標與界線",
        "why": "空泛目標無法執行",
        "input": "老師課綱／評分方式",
        "output": "目標＋三欄分工",
        "check": "是否能說出不可交給 AI 的工作"
      },
      {
        "do": "用 Prompt 產出規劃表",
        "why": "把焦慮轉成一頁地圖",
        "input": "上一步資料",
        "output": "規劃表初稿",
        "check": "是否含紅線與 7 天實驗"
      },
      {
        "do": "刪掉保證成績或代寫建議",
        "why": "AI 可能寫出不當建議",
        "input": "規劃表初稿",
        "output": "已清理版本",
        "check": "是否沒有「保證分數／直接交作業」"
      },
      {
        "do": "存入成果並自我檢查",
        "why": "後續課堂會沿用這份表",
        "input": "定稿",
        "output": "成果包項目",
        "check": "重新整理後是否還看得到"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "List semester courses and heavy tasks",
        "why": "No courses means no roles",
        "input": "Timetable, assignment types",
        "output": "Course draft",
        "check": "At least 3 real course names"
      },
      {
        "do": "Write checkable goals and boundaries",
        "why": "Vague goals cannot be executed",
        "input": "Syllabus / grading",
        "output": "Goals + 3-column split",
        "check": "Can you name never-give-to-AI work?"
      },
      {
        "do": "Generate the plan with the prompt",
        "why": "Turn anxiety into one page",
        "input": "Prior notes",
        "output": "Plan draft",
        "check": "Includes red lines and 7-day experiment"
      },
      {
        "do": "Remove grade guarantees or ghostwriting tips",
        "why": "AI may suggest misuse",
        "input": "Draft plan",
        "output": "Clean version",
        "check": "No “guaranteed score / just submit”"
      },
      {
        "do": "Save and self-check",
        "why": "Later lessons reuse this plan",
        "input": "Final plan",
        "output": "Package entry",
        "check": "Still visible after refresh"
      }
    ],
    "zhWorkflow": [
      "列出本學期至少 3 門課與目前最耗時任務",
      "為每門課寫 1 句可檢查目標，並標 AI 可協助／必須自做",
      "用本課 Prompt 產出規劃表與 3 條紅線",
      "只選 1 門課寫 7 天小實驗",
      "把定稿存成「AI 學習目標與課程規劃表」"
    ],
    "enWorkflow": [
      "List at least 3 courses and your most time-consuming tasks",
      "Write one checkable goal per course and mark AI-help vs must-do",
      "Use this lesson’s prompt to produce the plan and 3 red lines",
      "Pick ONE course for a 7-day experiment",
      "Save the AI Learning Goals and Course Plan"
    ],
    "zhPromptPack": {
      "when": "開始用 AI 學習前，先釐清本學期目標與界線時使用",
      "fields": [
        "[請填寫年級與科系]",
        "[請填寫課程名稱]",
        "[請填寫目標]"
      ],
      "body": "你是大學學習方法教練，不是代寫者，也不可幫學生完成整份作業或考試。\n\n我的背景：\n- 年級／科系：[請填寫年級與科系]\n- 本學期主要課程（至少 3 門）：[請填寫課程名稱]\n- 本學期最重要的學習目標：[請填寫目標]\n- 我目前最常把 AI 用在：[請填寫]\n- 我最擔心的學習問題：[請填寫]\n\n任務：幫我產出「AI 學習目標與課程規劃表」，必須包含：\n1) 本學期課程清單（課程／老師要求我自己理解的部分／可用 AI 協助的部分／絕對不可交給 AI 的部分）\n2) 每門課 1 句學習目標（必須可檢查，不要空泛的「學好這科」）\n3) 人／AI／必須自做 三欄分工\n4) 3 條可檢查的學術誠信紅線（含：不代寫、不代考、不捏造引用）\n5) 未來 7 天小實驗：只選 1 門課，每天 1 個具體行動\n\n輸出格式：\n- 用表格 + 條列\n- 每個建議旁註明「根據你提供的資料」或「需自行向老師／課綱確認」\n- 不要保證成績提升，不要鼓勵把作業整份交給 AI\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "一份含課程分工、目標、紅線與 7 天實驗的規劃表",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：紅線檢查 Prompt",
          "body": "請根據我貼上的規劃表，指出任何仍可能變成「代寫／代考／未查證就繳交」的句子，並改成可檢查的紅線。不要新增我沒寫的課程。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use before relying on AI for study, to set semester goals and boundaries",
      "fields": [
        "[Enter year and major]",
        "[Enter course names]",
        "[Enter goal]"
      ],
      "body": "You are a university learning-method coach—not a ghostwriter. Do not complete a full assignment or exam for the student.\n\nMy background:\n- Year / major: [Enter year and major]\n- Main courses this semester (at least 3): [Enter course names]\n- Most important learning goal: [Enter goal]\n- I currently use AI mainly for: [Enter usage]\n- My biggest study worry: [Enter worry]\n\nTask: Produce an “AI Learning Goals and Course Plan” with:\n1) A course table: course / what I must understand myself / where AI may help / what must never be given to AI\n2) One checkable goal per course (not “do well in this class”)\n3) A human / AI / must-do-myself split\n4) 3 checkable academic-integrity red lines (no ghostwriting, no exam-taking, no fake citations)\n5) A 7-day experiment on ONE course only, with 1 concrete action per day\n\nOutput format:\n- Tables plus bullets\n- Label tips as “based on your input” or “confirm with instructor/syllabus”\n- No grade guarantees; do not encourage handing a full assignment to AI\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "A plan with course roles, goals, red lines, and a 7-day experiment",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: red-line check prompt",
          "body": "From my plan, flag any wording that could become ghostwriting, exam-taking, or submitting unverified AI text. Rewrite into checkable red lines. Do not add courses I did not list."
        }
      ]
    },
    "zhPrompt": "你是大學學習方法教練，不是代寫者，也不可幫學生完成整份作業或考試。\n\n我的背景：\n- 年級／科系：[請填寫年級與科系]\n- 本學期主要課程（至少 3 門）：[請填寫課程名稱]\n- 本學期最重要的學習目標：[請填寫目標]\n- 我目前最常把 AI 用在：[請填寫]\n- 我最擔心的學習問題：[請填寫]\n\n任務：幫我產出「AI 學習目標與課程規劃表」，必須包含：\n1) 本學期課程清單（課程／老師要求我自己理解的部分／可用 AI 協助的部分／絕對不可交給 AI 的部分）\n2) 每門課 1 句學習目標（必須可檢查，不要空泛的「學好這科」）\n3) 人／AI／必須自做 三欄分工\n4) 3 條可檢查的學術誠信紅線（含：不代寫、不代考、不捏造引用）\n5) 未來 7 天小實驗：只選 1 門課，每天 1 個具體行動\n\n輸出格式：\n- 用表格 + 條列\n- 每個建議旁註明「根據你提供的資料」或「需自行向老師／課綱確認」\n- 不要保證成績提升，不要鼓勵把作業整份交給 AI\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a university learning-method coach—not a ghostwriter. Do not complete a full assignment or exam for the student.\n\nMy background:\n- Year / major: [Enter year and major]\n- Main courses this semester (at least 3): [Enter course names]\n- Most important learning goal: [Enter goal]\n- I currently use AI mainly for: [Enter usage]\n- My biggest study worry: [Enter worry]\n\nTask: Produce an “AI Learning Goals and Course Plan” with:\n1) A course table: course / what I must understand myself / where AI may help / what must never be given to AI\n2) One checkable goal per course (not “do well in this class”)\n3) A human / AI / must-do-myself split\n4) 3 checkable academic-integrity red lines (no ghostwriting, no exam-taking, no fake citations)\n5) A 7-day experiment on ONE course only, with 1 concrete action per day\n\nOutput format:\n- Tables plus bullets\n- Label tips as “based on your input” or “confirm with instructor/syllabus”\n- No grade guarantees; do not encourage handing a full assignment to AI\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "一頁界線卡：三個痛點、人／AI／自做分工、三條紅線、一個只選一堂課的 7 天實驗。",
    "enExample": "One-page card with three pains, role split, three red lines, and one course experiment.",
    "zhPracticeSteps": [
      {
        "task": "列出至少 3 門課與可檢查目標",
        "standard": "課名具體，目標能在期末用證據檢查",
        "mistakes": "只寫「希望變厲害」",
        "check": "別人能否看懂你要學會什麼？"
      },
      {
        "task": "完成三欄分工與紅線",
        "standard": "每門課都有不可交給 AI 的項目",
        "mistakes": "必須自做區空白",
        "check": "考試與論點是否被列為自做？"
      },
      {
        "task": "產出規劃表並做 7 天實驗",
        "standard": "只選 1 門課，每天 1 行動",
        "mistakes": "一次改全部科目",
        "check": "明天能否開始？"
      },
      {
        "task": "存入成果包",
        "standard": "成果名稱正確且內容完整",
        "mistakes": "空白儲存",
        "check": "重新整理後仍看得到？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "List 3+ courses and checkable goals",
        "standard": "Real names; goals can be evidenced later",
        "mistakes": "Only “get better”",
        "check": "Would a reader know what you must learn?"
      },
      {
        "task": "Finish role split and red lines",
        "standard": "Each course has a never-give-to-AI item",
        "mistakes": "Empty must-do zone",
        "check": "Are exams and arguments marked must-do?"
      },
      {
        "task": "Produce the plan and 7-day experiment",
        "standard": "One course; one action per day",
        "mistakes": "Every course at once",
        "check": "Can you start tomorrow?"
      },
      {
        "task": "Save to the package",
        "standard": "Correct name and complete content",
        "mistakes": "Saving blank text",
        "check": "Still visible after refresh?"
      }
    ],
    "zhPractice": "列出至少 3 門課與目標。；完成人／AI／必須自做分工與 3 條紅線。；用主 Prompt 產出規劃表並寫 7 天實驗。；把定稿存成「AI 學習目標與課程規劃表」。",
    "enPractice": "List at least 3 courses and goals.; Finish human/AI/must-do split and 3 red lines.; Run the main prompt and write a 7-day experiment.; Save the AI Learning Goals and Course Plan.",
    "zhFeedbackPrompt": "你是大學學習教練。請評分我的界線卡（完整度／正確性／清晰度／可用性），檢查是否仍鼓勵代寫，並給出今天可改的三點。不要捏造資料。",
    "enFeedbackPrompt": "Act as a university learning coach. Score my boundary card and check for ghostwriting mindset. Give three fixes. No invented facts.",
    "zhQuizItems": [
      {
        "q": "大學生學 AI 最正確的目標是？",
        "options": [
          "建立可重複、可查證的學習流程",
          "收藏越多工具越好",
          "讓 AI 直接完成所有作業"
        ],
        "answer": 0,
        "explain": "重點是流程與判斷。"
      },
      {
        "q": "哪一項最不適合完全交給 AI？",
        "options": [
          "直接生成並提交整份作業",
          "產生報告大綱草稿",
          "整理筆記分類建議"
        ],
        "answer": 0,
        "explain": "未修改直接提交有風險。"
      },
      {
        "q": "7 天實驗最好的設計是？",
        "options": [
          "只選一個小任務驗證流程",
          "一次改完全部科目",
          "完全不做只規劃"
        ],
        "answer": 0,
        "explain": "小實驗才學得到。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best goal for AI learning in university?",
        "options": [
          "Build a repeatable study workflow",
          "Collect more tools",
          "Let AI finish homework"
        ],
        "answer": 0,
        "explain": "Process and judgment matter."
      },
      {
        "q": "Which task should AI never fully own?",
        "options": [
          "Submit a full assignment",
          "Draft an outline",
          "Suggest note categories"
        ],
        "answer": 0,
        "explain": "Unchecked submission is unsafe."
      },
      {
        "q": "Best 7-day experiment?",
        "options": [
          "Test one small task",
          "Fix every course",
          "Plan only"
        ],
        "answer": 0,
        "explain": "Small tests create learning."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺主要區塊",
          "basic": "只有口號",
          "good": "有分工與紅線",
          "ready": "含可執行實驗"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "鼓勵代寫",
          "basic": "界線模糊",
          "good": "大致正確",
          "ready": "責任清楚"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "條列不足",
          "good": "區塊清楚",
          "ready": "他人可照做"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法使用",
          "basic": "需大改",
          "good": "本週可用",
          "ready": "可放進系統首頁"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing blocks",
          "basic": "Slogans only",
          "good": "Has split and red lines",
          "ready": "Includes executable experiment"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Encourages ghostwriting",
          "basic": "Vague",
          "good": "Mostly correct",
          "ready": "Clear ownership"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Weak lists",
          "good": "Clear blocks",
          "ready": "Others can follow"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Unusable",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Ready for homepage"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "把「會問 AI」當成已會學習",
        "why": "沒有流程就無法累積能力",
        "fix": "先寫任務→協助方式→檢查→保存"
      },
      {
        "error": "紅線漂亮但仍整份貼上交",
        "why": "有倫理與學習風險",
        "fix": "提交前用檢查表確認必須自做區"
      },
      {
        "error": "一次想改善所有科目",
        "why": "實驗過大容易失敗",
        "fix": "7 天只驗證一個小任務"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Equating chat with learning",
        "why": "No workflow means no growth",
        "fix": "Task → help → inspect → save"
      },
      {
        "error": "Ignoring red lines",
        "why": "Integrity risk",
        "fix": "Use a pre-submit checklist"
      },
      {
        "error": "Fixing every course at once",
        "why": "Oversized experiments fail",
        "fix": "Test one small task"
      }
    ],
    "zhCommonMistakes": [
      "沒有列出實際課程，只寫「我想用 AI」",
      "把整份作業或考試列成 AI 可完成區",
      "紅線寫得很空泛，無法檢查",
      "7 天實驗一次涵蓋全部科目",
      "在 Prompt 中填入學號、成績單全文等敏感資料"
    ],
    "enCommonMistakes": [
      "No real courses, only “I want to use AI”",
      "Listing full assignments or exams as AI-completable",
      "Red lines too vague to check",
      "A 7-day experiment covering every course",
      "Pasting student IDs or full transcripts into prompts"
    ],
    "zhSummary": [
      "本堂成果：AI 學習目標與課程規劃表",
      "先分清人／AI／必須自做，再進入後續課堂。",
      "用 Prompt 產出後務必改成自己的真實課表並存檔。"
    ],
    "enSummary": [
      "Deliverable: AI Learning Goals and Course Plan",
      "Split human/AI/must-do before later lessons.",
      "Rewrite the output to match your real timetable and save it."
    ],
    "zhDeliverableChecklist": [
      "已列出至少 3 門本學期課程",
      "每門課都有可檢查的學習目標",
      "已分開 AI 可協助與必須自做",
      "已寫 3 條可檢查紅線（含不代寫、不代考、不捏造引用）",
      "已有只針對 1 門課的 7 天實驗",
      "內容已改成自己的課表，未直接照抄 AI"
    ],
    "enDeliverableChecklist": [
      "At least 3 semester courses listed",
      "Each course has a checkable goal",
      "AI-help vs must-do is separated",
      "3 checkable red lines (no ghostwriting, exams, or fake citations)",
      "A 7-day experiment on one course only",
      "Rewritten to your real timetable—not pasted AI text"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "用自己的話寫下：本學期最重要的 1 門課、我絕不會交給 AI 的 3 件事、明天要開始的 1 個行動。",
    "enNotePrompt": "In your own words: the one most important course, 3 things you will never give to AI, and tomorrow’s first action.",
    "zhCoachPrompt": "請檢查我的「AI 學習方法與使用界線卡」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “AI learning method and boundary card” is concrete and actionable.",
    "zhExcellentExample": "高品質規劃表包含：課程清單、每門課目標、三欄分工、3 條紅線、單一課程 7 天實驗、需向課綱確認的項目。",
    "enExcellentExample": "A strong plan includes: course list, per-course goals, 3-column split, 3 red lines, one-course 7-day experiment, syllabus-check items.",
    "zhNextStep": "下一堂會把模糊問題轉成有效學習提問，並產出「課程理解與概念拆解表」。",
    "enNextStep": "Next, turn vague questions into study prompts and build a Concept Breakdown Sheet."
  },
  {
    "estimatedTime": "約 45 分鐘 / About 45 min",
    "difficulty": "入門 / Beginner",
    "id": "college-learning-L2",
    "lessonKey": "college-learning-L2",
    "zhTitle": "第2課：把模糊問題轉成有效學習提問",
    "enTitle": "Lesson 2: Turn vague questions into effective study prompts",
    "zhValueTip": "先問得清楚，再拆概念；AI 解釋必須能回到教材核對。",
    "enValueTip": "Ask clearly, then break concepts down. AI explanations must be checkable against your materials.",
    "zhOutputName": "課程理解與概念拆解表",
    "enOutputName": "Course Concept Breakdown Sheet",
    "zhOutcome": "課程理解與概念拆解表",
    "enOutcome": "Course Concept Breakdown Sheet",
    "zhObjectives": [
      "把一句模糊問題改寫成含背景與格式的學習提問",
      "從自己的教材中拆出核心概念與定義",
      "畫出或列出概念之間的關係",
      "留下至少 3 個尚未理解、可拿去問老師的問題",
      "把成果存成「課程理解與概念拆解表」"
    ],
    "enObjectives": [
      "Rewrite one vague question into a study prompt with context and format",
      "Extract core concepts and definitions from your own materials",
      "Show relationships among concepts",
      "Leave at least 3 unanswered questions for the instructor or textbook",
      "Save a Concept Breakdown Sheet"
    ],
    "zhWhyItMatters": {
      "problem": "問題太模糊時，AI 會給出看起來完整、其實對不上你課堂的解釋。",
      "ineffective": "只丟一句「幫我整理這堂課」。",
      "solution": "先改寫提問，再產出可對照教材的概念拆解表，並標出尚未理解與需要查證處。"
    },
    "enWhyItMatters": {
      "problem": "Vague questions get polished explanations that do not match your class.",
      "ineffective": "Only asking “summarize this lecture.”",
      "solution": "Rewrite the question, then build a breakdown you can check against materials, marking gaps."
    },
    "zhConceptBlocks": {
      "principles": [
        "提問要有範圍與卡住點",
        "概念必須對得回教材",
        "不懂要變成可問的問題"
      ],
      "terms": [
        "有效學習提問",
        "原文定義",
        "需要查證"
      ],
      "criteria": [
        "提問可執行",
        "概念可核對",
        "有未解問題"
      ],
      "boundaries": [
        "避免：補造課程內容",
        "避免：只要長摘要",
        "避免：把 AI 當標準答案"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Prompts need range and stuck points",
        "Concepts must map to sources",
        "Confusion becomes askable questions"
      ],
      "terms": [
        "Effective study prompt",
        "Source definition",
        "Needs verification"
      ],
      "criteria": [
        "Prompt is usable",
        "Concepts are checkable",
        "Open questions exist"
      ],
      "boundaries": [
        "Avoid: inventing content",
        "Avoid: long summaries only",
        "Avoid: treating AI as the answer key"
      ]
    },
    "zhConcept": "卡住時最常見的問法是「這是什麼／幫我講一遍」，得到的是又長又難用的摘要。有效學習提問要帶：課程、已讀範圍、卡住點、需要的輸出格式。這一課把模糊問題轉成概念拆解：核心概念、定義、關係、尚未理解的問題。AI 只能根據你提供的教材工作，不能補造課程內容。",
    "enConcept": "The usual stuck question is “what is this / explain it,” which yields a long unusable summary. Effective study prompts include course, what you already read, the stuck point, and output format. This lesson turns vague questions into a concept breakdown: cores, definitions, relations, and unanswered questions. AI may only work from your materials—it must not invent course content.",
    "zhCaseStudyBlocks": {
      "problem": "統計課學生阿哲聽完變異數，只會問「這是什麼」。",
      "wrong": "不提供已讀範圍與卡住點，接受一段無法對照課本的長解釋。",
      "right": "寫出課程、範圍、卡住點，請 AI 拆概念、定義、關係與未解問題，並標需要查證。",
      "result": "一份可對照教材的「課程理解與概念拆解表」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Zhe finished a variance lecture and could only ask “what is this?”",
      "wrong": "No range or stuck point; accept a long explanation that cannot be checked against the book.",
      "right": "Give course, range, and stuck point; ask for concepts, definitions, relations, and open questions with verification flags.",
      "result": "A Concept Breakdown Sheet you can check against the textbook."
    },
    "zhCaseStudy": "統計課學生阿哲只問「變異數是什麼」，AI 給了一大段公式。他改成提供：已上課範圍、自己卡在「變異數和標準差差在哪」，並要求：原文定義、自己的話、一個課堂例子、一個易混點、三個未解問題。他才第一次能拿著表格去問助教。",
    "enCaseStudy": "Zhe in statistics asked “what is variance” and got a wall of formulas. He then provided the lecture range and that he mixed variance with standard deviation, and asked for source definition, his own wording, one class example, one mix-up, and three open questions. That table was something he could take to the TA.",
    "zhWorkflowSteps": [
      {
        "do": "記下模糊問題",
        "why": "對照前後差異",
        "input": "原句",
        "output": "問題草稿",
        "check": "是否真的太短、沒有背景"
      },
      {
        "do": "補背景與卡住點",
        "why": "讓 AI 對準你的課堂",
        "input": "筆記／課名",
        "output": "完整提問",
        "check": "是否含已讀範圍"
      },
      {
        "do": "產出拆解表",
        "why": "把摘要變成結構",
        "input": "教材摘錄",
        "output": "概念表",
        "check": "概念是否不超過 7 個"
      },
      {
        "do": "對照教材刪補造",
        "why": "防止假重點",
        "input": "課本／投影片",
        "output": "已核對表",
        "check": "不確定是否標需要查證"
      },
      {
        "do": "存入成果",
        "why": "L3 筆記會用到",
        "input": "定稿",
        "output": "成果包",
        "check": "是否有未解問題 3 題"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Capture the vague question",
        "why": "See the before/after",
        "input": "Original sentence",
        "output": "Question draft",
        "check": "Is it too short with no context?"
      },
      {
        "do": "Add context and stuck point",
        "why": "Aim AI at your class",
        "input": "Notes / course name",
        "output": "Full prompt",
        "check": "Includes what you already read"
      },
      {
        "do": "Generate the sheet",
        "why": "Turn summary into structure",
        "input": "Material excerpt",
        "output": "Concept table",
        "check": "No more than 7 concepts"
      },
      {
        "do": "Delete invented points",
        "why": "Stop fake highlights",
        "input": "Book / slides",
        "output": "Verified sheet",
        "check": "Uncertainties flagged"
      },
      {
        "do": "Save",
        "why": "Later note lessons reuse this",
        "input": "Final sheet",
        "output": "Package",
        "check": "At least 3 open questions"
      }
    ],
    "zhWorkflow": [
      "寫下原本那句模糊問題與已讀範圍",
      "補上課程、卡住點、想要的輸出格式",
      "用 Prompt 產出概念拆解表",
      "用教材核對，刪掉 AI 補造的內容",
      "留下未解問題並存檔"
    ],
    "enWorkflow": [
      "Write the original vague question and what you already read",
      "Add course, stuck point, and output format",
      "Generate the breakdown sheet with the prompt",
      "Check against materials; delete invented content",
      "Keep unanswered questions and save"
    ],
    "zhPromptPack": {
      "when": "讀完一段教材卻只會問「這是什麼」時使用",
      "fields": [
        "[請填寫課程名稱]",
        "[請填寫主題]",
        "[請填寫原本問題]"
      ],
      "body": "你是大學課程理解教練，不是解答公布欄。不可補造教材沒有的定理、數字或老師沒講的重點。\n\n我的背景：\n- 課程名稱：[請填寫課程名稱]\n- 本週主題／章節：[請填寫主題]\n- 我已讀或已聽過的範圍：[請填寫]\n- 我原本想問 AI 的模糊問題：[請填寫原本問題]\n- 我卡住的感覺（看不懂／記不住／不會應用）：[請填寫]\n\n任務：先把我的模糊問題改寫成有效學習提問，再產出「課程理解與概念拆解表」：\n1) 核心概念（最多 7 個，只根據我提供的教材／筆記，缺資料就標「需要查證／需要補教材」）\n2) 關鍵定義（原文用語 vs 我能懂的說法，分開兩欄）\n3) 概念關係（誰依賴誰、因果、對比）\n4) 我尚未理解的問題清單（至少 3 題，要能拿去問老師或再讀教材）\n5) 1 題自我檢查題（不要給最終標準答案，只給我思考步驟）\n\n輸出格式：表格 + 條列。不確定處一律標「需要查證」。不要假裝教材已經講完。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "一份含核心概念、定義、關係與未解問題的概念拆解表",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：把拆解表變成 3 個追問",
          "body": "根據我貼上的概念拆解表，幫我寫 3 個更精確的追問（針對定義、例子、易混概念）。不要直接給完整講義。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when a reading still leaves you asking only “what is this?”",
      "fields": [
        "[Enter course name]",
        "[Enter topic]",
        "[Enter original question]"
      ],
      "body": "You are a course-understanding coach, not an answer key. Do not invent theorems, numbers, or points the instructor did not teach.\n\nMy background:\n- Course: [Enter course name]\n- This week’s topic/chapter: [Enter topic]\n- What I already read or heard: [Enter range]\n- My original vague question: [Enter original question]\n- Where I am stuck (don’t get it / can’t remember / can’t apply): [Enter stuck point]\n\nTask: Rewrite my vague question into an effective study prompt, then produce a “Concept Breakdown Sheet”:\n1) Core concepts (max 7; only from my materials/notes; if missing, mark “needs verification / need source text”)\n2) Key definitions (source wording vs. my wording in two columns)\n3) Concept relationships (dependency, cause-effect, contrast)\n4) Unanswered questions (at least 3) I can take to the instructor or the textbook\n5) One self-check question (do not give the final official answer; give thinking steps only)\n\nOutput: tables plus bullets. Mark uncertainties as “needs verification.” Do not pretend the material is complete.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "A breakdown sheet with concepts, definitions, relations, and open questions",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: 3 follow-up questions",
          "body": "From my breakdown sheet, write 3 sharper follow-ups (definition, example, easy mix-up). Do not generate a full lecture."
        }
      ]
    },
    "zhPrompt": "你是大學課程理解教練，不是解答公布欄。不可補造教材沒有的定理、數字或老師沒講的重點。\n\n我的背景：\n- 課程名稱：[請填寫課程名稱]\n- 本週主題／章節：[請填寫主題]\n- 我已讀或已聽過的範圍：[請填寫]\n- 我原本想問 AI 的模糊問題：[請填寫原本問題]\n- 我卡住的感覺（看不懂／記不住／不會應用）：[請填寫]\n\n任務：先把我的模糊問題改寫成有效學習提問，再產出「課程理解與概念拆解表」：\n1) 核心概念（最多 7 個，只根據我提供的教材／筆記，缺資料就標「需要查證／需要補教材」）\n2) 關鍵定義（原文用語 vs 我能懂的說法，分開兩欄）\n3) 概念關係（誰依賴誰、因果、對比）\n4) 我尚未理解的問題清單（至少 3 題，要能拿去問老師或再讀教材）\n5) 1 題自我檢查題（不要給最終標準答案，只給我思考步驟）\n\n輸出格式：表格 + 條列。不確定處一律標「需要查證」。不要假裝教材已經講完。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a course-understanding coach, not an answer key. Do not invent theorems, numbers, or points the instructor did not teach.\n\nMy background:\n- Course: [Enter course name]\n- This week’s topic/chapter: [Enter topic]\n- What I already read or heard: [Enter range]\n- My original vague question: [Enter original question]\n- Where I am stuck (don’t get it / can’t remember / can’t apply): [Enter stuck point]\n\nTask: Rewrite my vague question into an effective study prompt, then produce a “Concept Breakdown Sheet”:\n1) Core concepts (max 7; only from my materials/notes; if missing, mark “needs verification / need source text”)\n2) Key definitions (source wording vs. my wording in two columns)\n3) Concept relationships (dependency, cause-effect, contrast)\n4) Unanswered questions (at least 3) I can take to the instructor or the textbook\n5) One self-check question (do not give the final official answer; give thinking steps only)\n\nOutput: tables plus bullets. Mark uncertainties as “needs verification.” Do not pretend the material is complete.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "轉換表：原問題 → 背景／目標／限制／格式 → 改寫後提問 → AI 回答重點 → 自測結果。",
    "enExample": "Sheet: original → context/goal/constraints/format → rewritten prompt → answer highlights → self-check.",
    "zhPracticeSteps": [
      {
        "task": "改寫提問",
        "standard": "含課程、範圍、卡住點、格式",
        "mistakes": "仍是「這是什麼」",
        "check": "別人能否拿這句去問 AI？"
      },
      {
        "task": "拆核心概念與定義",
        "standard": "概念有來源，定義分兩欄",
        "mistakes": "AI 自己編定義",
        "check": "能否指回教材哪一段？"
      },
      {
        "task": "列出關係與未解問題",
        "standard": "至少 3 個可問老師的問題",
        "mistakes": "只寫「我還是不懂」",
        "check": "問題是否具體？"
      },
      {
        "task": "核對並存檔",
        "standard": "補造內容已刪",
        "mistakes": "整段貼上未改",
        "check": "有標需要查證嗎？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Rewrite the question",
        "standard": "Course, range, stuck point, format",
        "mistakes": "Still “what is this?”",
        "check": "Could someone else use this prompt?"
      },
      {
        "task": "Split concepts and definitions",
        "standard": "Sourced concepts; two-column definitions",
        "mistakes": "AI-invented definitions",
        "check": "Can you point to a passage?"
      },
      {
        "task": "Relations and open questions",
        "standard": "At least 3 instructor-ready questions",
        "mistakes": "Only “I still don’t get it”",
        "check": "Are questions specific?"
      },
      {
        "task": "Verify and save",
        "standard": "Invented content removed",
        "mistakes": "Paste unchanged",
        "check": "Needs-verification flags present?"
      }
    ],
    "zhPractice": "寫下原本模糊問題。；改寫成含課程、範圍、卡住點的提問。；產出概念拆解表並用教材核對。；存成「課程理解與概念拆解表」。",
    "enPractice": "Write the original vague question.; Rewrite with course, range, and stuck point.; Produce and verify the breakdown sheet.; Save the Concept Breakdown Sheet.",
    "zhFeedbackPrompt": "請檢查我的學習提問轉換表是否仍太寬、是否缺輸出格式，並幫我改寫最弱的一題。",
    "enFeedbackPrompt": "Review my conversion sheet for breadth and missing format; rewrite the weakest prompt.",
    "zhQuizItems": [
      {
        "q": "有效學習提問最少應包含？",
        "options": [
          "背景、目標、限制與輸出格式",
          "只說課程名稱",
          "只說「幫我總結」"
        ],
        "answer": 0,
        "explain": "四要素才能對準卡住點。"
      },
      {
        "q": "為什麼要寫已讀範圍？",
        "options": [
          "避免 AI 重複已知並對準未知",
          "讓答案更長",
          "方便複製貼上"
        ],
        "answer": 0,
        "explain": "對準未知才有效。"
      },
      {
        "q": "哪種輸出最能驗證理解？",
        "options": [
          "含自我檢查題的解釋",
          "只有華麗長文",
          "只有關鍵字雲"
        ],
        "answer": 0,
        "explain": "自測才能驗證。"
      }
    ],
    "enQuizItems": [
      {
        "q": "An effective study prompt should include?",
        "options": [
          "Context, goal, constraints, format",
          "Course name only",
          "Just “summarize”"
        ],
        "answer": 0,
        "explain": "Four elements aim at the stuck point."
      },
      {
        "q": "Why state what you already read?",
        "options": [
          "Avoid repeats and target the unknown",
          "Make answers longer",
          "Easier copy-paste"
        ],
        "answer": 0,
        "explain": "Target the unknown."
      },
      {
        "q": "Best output to verify understanding?",
        "options": [
          "Explanation with self-checks",
          "Long ornate text",
          "Keyword cloud only"
        ],
        "answer": 0,
        "explain": "Self-checks verify learning."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "問題太寬",
        "why": "AI 只能給空泛摘要",
        "fix": "縮小到一個概念或一段教材"
      },
      {
        "error": "不給已讀範圍",
        "why": "AI 可能重複你已知內容",
        "fix": "先說明讀到哪裡"
      },
      {
        "error": "不要求檢查題",
        "why": "以為看懂其實沒懂",
        "fix": "每次都要 2–3 題自測"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Question too broad",
        "why": "Generic summary only",
        "fix": "Narrow to one concept"
      },
      {
        "error": "No range stated",
        "why": "AI may repeat known content",
        "fix": "State what you already read"
      },
      {
        "error": "No self-check questions",
        "why": "Illusion of understanding",
        "fix": "Always ask for 2–3 checks"
      }
    ],
    "zhCommonMistakes": [
      "不貼任何教材就要求完整講義",
      "接受 AI 補造的公式或理論",
      "定義只有 AI 的話，沒有原文用語",
      "沒有留下可問老師的問題",
      "把拆解表當成已經學會的證明"
    ],
    "enCommonMistakes": [
      "Asking for a full lecture with no source text",
      "Accepting invented formulas or theories",
      "Only AI wording, no source terms",
      "No questions left for the instructor",
      "Treating the sheet as proof you already mastered it"
    ],
    "zhSummary": [
      "本堂成果：課程理解與概念拆解表",
      "先改問題，再拆概念。",
      "所有解釋都要能回教材查證。"
    ],
    "enSummary": [
      "Deliverable: Concept Breakdown Sheet",
      "Rewrite the question, then break down concepts.",
      "Every explanation must be checkable."
    ],
    "zhDeliverableChecklist": [
      "已保存原本模糊問題與改寫後提問",
      "核心概念不超過 7 個且能對照教材",
      "定義有「原文／我的話」兩欄",
      "已說明概念關係",
      "至少 3 個尚未理解問題",
      "不確定處已標「需要查證」，未把 AI 當標準答案"
    ],
    "enDeliverableChecklist": [
      "Original and rewritten questions saved",
      "At most 7 concepts mapped to materials",
      "Definitions have source vs. my wording",
      "Relationships are stated",
      "At least 3 unanswered questions",
      "Uncertainties marked; AI is not treated as the answer key"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下：我原本的問題、改寫後的問題、我仍要問老師的 1 件事。",
    "enNotePrompt": "Write: original question, rewritten question, and one thing you will still ask the instructor.",
    "zhCoachPrompt": "請檢查我的「學習提問轉換表」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Study question conversion sheet” is concrete and actionable.",
    "zhExcellentExample": "含：改寫後提問、最多 7 個概念、定義兩欄、關係、3 個未解問題、查證標記。",
    "enExcellentExample": "Includes rewritten prompt, max 7 concepts, two-column definitions, relations, 3 open questions, verification marks.",
    "zhNextStep": "下一堂用這份拆解表去理解整份教材，產出可核對原文的教材理解筆記。",
    "enNextStep": "Next, use this sheet to understand a full reading and produce source-checked material notes."
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "id": "college-learning-L3",
    "lessonKey": "college-learning-L3",
    "zhTitle": "第3課：使用 AI 快速理解課堂教材",
    "enTitle": "Lesson 3: Use AI to understand course materials quickly",
    "zhValueTip": "速度來自結構，不來自跳過原文。先核對，再相信解釋。",
    "enValueTip": "Speed comes from structure, not from skipping the source. Verify before you trust an explanation.",
    "zhOutputName": "教材理解筆記",
    "enOutputName": "Material Understanding Notes",
    "zhOutcome": "教材理解筆記",
    "enOutcome": "Material Understanding Notes",
    "zhObjectives": [
      "從教材摘錄整理出核心資訊與定義",
      "清楚標示哪些是原文、哪些是 AI 解釋",
      "用自己的話寫 3–5 句理解",
      "列出待查證與尚未理解處",
      "把成果存成「教材理解筆記」"
    ],
    "enObjectives": [
      "Extract core information and definitions from an excerpt",
      "Label source vs. AI explanation",
      "Write 3–5 sentences in your own words",
      "List items to verify and remaining confusion",
      "Save Material Understanding Notes"
    ],
    "zhWhyItMatters": {
      "problem": "教材很長時，學生容易整段丟給 AI，得到無法核對的漂亮摘要。",
      "ineffective": "Prompt 只有「幫我整理這堂課」。",
      "solution": "貼有限摘錄，強制分開原文與解釋，並留下自己的理解與查證清單。"
    },
    "enWhyItMatters": {
      "problem": "Long readings get dumped into AI, producing pretty summaries you cannot check.",
      "ineffective": "A prompt that only says “organize this class.”",
      "solution": "Paste a limited excerpt, separate source vs. explanation, and keep your own understanding plus a verify list."
    },
    "zhConceptBlocks": {
      "principles": [
        "摘錄要能核對",
        "原文與解釋分開",
        "自己的理解不可空白"
      ],
      "terms": [
        "原文核心資訊",
        "AI 解釋",
        "需要查證"
      ],
      "criteria": [
        "有摘錄",
        "有分欄",
        "有自己的話"
      ],
      "boundaries": [
        "避免：整本貼上",
        "避免：補造內容",
        "避免：當作業繳交"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Excerpts must be checkable",
        "Separate source and explanation",
        "Your understanding cannot be blank"
      ],
      "terms": [
        "Source core",
        "AI explanation",
        "Needs verification"
      ],
      "criteria": [
        "Excerpt present",
        "Columns present",
        "Own wording present"
      ],
      "boundaries": [
        "Avoid: whole-book paste",
        "Avoid: invented content",
        "Avoid: submitting as homework"
      ]
    },
    "zhConcept": "「快速理解」不是讓 AI 取代閱讀，而是把課本、講義、教師說明整理成：原文核心、定義、關係、你的理解、待查證。若把原文與 AI 解釋混在一起，你會誤以為教材寫過某些話。AI 不得補造內容；不確定就標「需要查證」。",
    "enConcept": "“Understand quickly” does not mean skipping reading. It means turning textbook, handout, and instructor notes into: source core, definitions, relations, your understanding, and items to verify. Mixing source and AI explanation makes you think the book said things it did not. AI must not invent content; mark uncertainties.",
    "zhCaseStudyBlocks": {
      "problem": "小恩要在兩小時內讀完一章總體經濟學，覺得自己看不完。",
      "wrong": "整章貼給 AI 要完整講義，把摘要當成已讀完。",
      "right": "只貼關鍵段落，分開原文與解釋，自己補理解，並把推論標成需要查證。",
      "result": "一份可回課本核對的「教材理解筆記」。"
    },
    "enCaseStudyBlocks": {
      "problem": "En has two hours to get through a macro chapter.",
      "wrong": "Paste the whole chapter and treat the summary as having read it.",
      "right": "Paste key passages only, separate source vs. explanation, add her own understanding, flag inferences.",
      "result": "Material Understanding Notes that can be checked against the book."
    },
    "zhCaseStudy": "經濟學學生小恩把整章貼進 AI，摘要裡出現課本沒有的政策數字。她改成只貼 2 頁重點，要求分欄：原文／解釋／我的理解／待查證，並刪掉所有沒在摘錄裡的數字。她後來拿待查證清單去對課本註解。",
    "enCaseStudy": "En pasted a whole economics chapter; the summary invented policy numbers. She then pasted two pages only, required columns for source / explanation / my understanding / verify, and deleted numbers not in the excerpt. She used the verify list against the textbook notes.",
    "zhWorkflowSteps": [
      {
        "do": "選摘錄不要整本",
        "why": "模型無法可靠消化整本書",
        "input": "課本／講義",
        "output": "摘錄",
        "check": "是否短到自己能核對"
      },
      {
        "do": "要求分欄輸出",
        "why": "避免原文與解釋混淆",
        "input": "摘錄＋課名",
        "output": "分欄草稿",
        "check": "是否有原文欄"
      },
      {
        "do": "刪補造與外加知識",
        "why": "防止假重點",
        "input": "原文",
        "output": "已清草稿",
        "check": "沒有的數字是否刪除"
      },
      {
        "do": "寫自己的理解",
        "why": "證明你有讀",
        "input": "草稿",
        "output": "3–5 句",
        "check": "是否沒用 AI 原句"
      },
      {
        "do": "存檔",
        "why": "筆記課會接續",
        "input": "定稿",
        "output": "成果包",
        "check": "是否有待查證"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Excerpt, don’t paste a book",
        "why": "Models cannot reliably digest whole books",
        "input": "Textbook/handout",
        "output": "Excerpt",
        "check": "Short enough to check"
      },
      {
        "do": "Require columns",
        "why": "Keep source vs. explanation apart",
        "input": "Excerpt + course",
        "output": "Column draft",
        "check": "Is there a source column?"
      },
      {
        "do": "Delete invented extras",
        "why": "Stop fake highlights",
        "input": "Source",
        "output": "Clean draft",
        "check": "Numbers not in source removed"
      },
      {
        "do": "Write your understanding",
        "why": "Prove you read it",
        "input": "Draft",
        "output": "3–5 sentences",
        "check": "Not AI’s original sentences"
      },
      {
        "do": "Save",
        "why": "Note lesson continues this",
        "input": "Final",
        "output": "Package",
        "check": "Verify list present"
      }
    ],
    "zhWorkflow": [
      "選一個章節，只摘錄真正要理解的段落",
      "用 Prompt 產出分欄筆記",
      "對照原文，刪掉補造內容",
      "用自己的話寫理解",
      "存成教材理解筆記"
    ],
    "enWorkflow": [
      "Pick a chapter and excerpt only the passages you must understand",
      "Generate columned notes with the prompt",
      "Check the source and delete invented content",
      "Write your understanding in your own words",
      "Save Material Understanding Notes"
    ],
    "zhPromptPack": {
      "when": "讀完一章或一份講義、需要快速但可核對的理解時使用",
      "fields": [
        "[請填寫課程名稱]",
        "[請填寫或貼上教材重點]"
      ],
      "body": "你是教材理解助教，必須區分「教材原文資訊」與「AI 解釋」。不可自行補造課程內容、例子中的數據或老師沒有的結論。\n\n我的輸入：\n- 課程：[請填寫課程名稱]\n- 教材類型（課本／講義／老師說明）：[請填寫]\n- 我貼上的教材摘錄（請只根據這段，不要外加知識）：\n[請填寫或貼上教材重點，勿貼整本]\n\n任務：產出「教材理解筆記」：\nA. 原文核心資訊（盡量用教材用詞，短句）\nB. 關鍵定義\nC. 概念關係\nD. AI 解釋（用學生能懂的話，明確標示這是解釋不是原文）\nE. 我的理解（先留白，提示我用自己的話補 3–5 句）\nF. 尚未理解／需要查證（含：看不懂的句子、可能被 AI 推論過度的地方）\nG. 2 題理解檢查題（只給思考方向，不要給可直接抄的標準答案）\n\n限制：\n- 教材沒寫的，寫「需要查證」\n- 不要寫成可直接繳交的作業\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "一份區分原文與 AI 解釋的教材理解筆記",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：找出過度推論",
          "body": "請只根據我貼的教材摘錄，列出你剛才解釋裡「教材沒有明說、屬於推論」的句子，並改標為需要查證。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use after a chapter or handout when you need fast, checkable understanding",
      "fields": [
        "[Enter course name]",
        "[Enter or paste key passages]"
      ],
      "body": "You are a materials tutor. Separate “source information” from “AI explanation.” Do not invent course content, example numbers, or conclusions the instructor did not give.\n\nMy input:\n- Course: [Enter course name]\n- Source type (textbook / handout / instructor notes): [Enter type]\n- Excerpt (use only this; do not add outside knowledge):\n[Enter or paste key passages—not an entire book]\n\nTask: Produce “Material Understanding Notes”:\nA. Source core information (short; prefer source wording)\nB. Key definitions\nC. Concept relationships\nD. AI explanation (student-friendly; clearly labeled as explanation, not source)\nE. My understanding (leave a blank for me to write 3–5 sentences)\nF. Still unclear / needs verification (including possible over-inference)\nG. 2 comprehension-check questions (thinking steps only; no copyable final answers)\n\nLimits:\n- If the excerpt does not say it, write “needs verification”\n- Do not produce a submittable assignment\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "Material notes that separate source text from AI explanation",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: find over-inference",
          "body": "Using only my excerpt, list sentences in your explanation that the source did not state and mark them as needs verification."
        }
      ]
    },
    "zhPrompt": "你是教材理解助教，必須區分「教材原文資訊」與「AI 解釋」。不可自行補造課程內容、例子中的數據或老師沒有的結論。\n\n我的輸入：\n- 課程：[請填寫課程名稱]\n- 教材類型（課本／講義／老師說明）：[請填寫]\n- 我貼上的教材摘錄（請只根據這段，不要外加知識）：\n[請填寫或貼上教材重點，勿貼整本]\n\n任務：產出「教材理解筆記」：\nA. 原文核心資訊（盡量用教材用詞，短句）\nB. 關鍵定義\nC. 概念關係\nD. AI 解釋（用學生能懂的話，明確標示這是解釋不是原文）\nE. 我的理解（先留白，提示我用自己的話補 3–5 句）\nF. 尚未理解／需要查證（含：看不懂的句子、可能被 AI 推論過度的地方）\nG. 2 題理解檢查題（只給思考方向，不要給可直接抄的標準答案）\n\n限制：\n- 教材沒寫的，寫「需要查證」\n- 不要寫成可直接繳交的作業\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a materials tutor. Separate “source information” from “AI explanation.” Do not invent course content, example numbers, or conclusions the instructor did not give.\n\nMy input:\n- Course: [Enter course name]\n- Source type (textbook / handout / instructor notes): [Enter type]\n- Excerpt (use only this; do not add outside knowledge):\n[Enter or paste key passages—not an entire book]\n\nTask: Produce “Material Understanding Notes”:\nA. Source core information (short; prefer source wording)\nB. Key definitions\nC. Concept relationships\nD. AI explanation (student-friendly; clearly labeled as explanation, not source)\nE. My understanding (leave a blank for me to write 3–5 sentences)\nF. Still unclear / needs verification (including possible over-inference)\nG. 2 comprehension-check questions (thinking steps only; no copyable final answers)\n\nLimits:\n- If the excerpt does not say it, write “needs verification”\n- Do not produce a submittable assignment\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "完成版「教材重點整理」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Course-material digest sheet” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "準備摘錄",
        "standard": "可核對的長度",
        "mistakes": "整本書",
        "check": "你能否在 10 分鐘內對完？"
      },
      {
        "task": "分開原文與解釋",
        "standard": "欄位清楚",
        "mistakes": "混成一篇",
        "check": "同學能否看出哪句是教材？"
      },
      {
        "task": "自己寫理解",
        "standard": "3–5 句",
        "mistakes": "空白或全抄",
        "check": "合上摘錄還講得出來嗎？"
      },
      {
        "task": "標查證並存檔",
        "standard": "有待查證清單",
        "mistakes": "當成已全懂",
        "check": "有沒有要問老師的點？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Prepare an excerpt",
        "standard": "Checkable length",
        "mistakes": "Whole book",
        "check": "Can you verify in 10 minutes?"
      },
      {
        "task": "Separate source and explanation",
        "standard": "Clear columns",
        "mistakes": "One blended essay",
        "check": "Could a classmate see which lines are source?"
      },
      {
        "task": "Write your understanding",
        "standard": "3–5 sentences",
        "mistakes": "Blank or fully copied",
        "check": "Can you retell it without the excerpt?"
      },
      {
        "task": "Flag and save",
        "standard": "Verify list exists",
        "mistakes": "Pretend mastery",
        "check": "Anything to ask the instructor?"
      }
    ],
    "zhPractice": "選一段教材摘錄。；產出分欄理解筆記。；刪補造並寫自己的理解。；存成「教材理解筆記」。",
    "enPractice": "Choose a material excerpt.; Generate columned notes.; Delete inventions and write your understanding.; Save Material Understanding Notes.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「教材重點整理」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Course-material digest sheet” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "教材重點整理",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Course-material digest sheet",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "貼整本書或整份投影片不抽重點",
      "不標示哪些是 AI 解釋",
      "保留教材沒有的數字與結論",
      "不寫自己的理解",
      "把筆記直接當作業交"
    ],
    "enCommonMistakes": [
      "Pasting an entire book or slide deck",
      "Not labeling AI explanation",
      "Keeping numbers/conclusions absent from the source",
      "Skipping your own understanding",
      "Submitting the notes as an assignment"
    ],
    "zhSummary": [
      "本堂成果：教材理解筆記",
      "快速理解仍要回原文。",
      "解釋不是教材本身。"
    ],
    "enSummary": [
      "Deliverable: Material Understanding Notes",
      "Fast understanding still returns to the source.",
      "Explanation is not the source."
    ],
    "zhDeliverableChecklist": [
      "有明確教材摘錄來源（課本／講義／老師說明）",
      "原文核心與 AI 解釋已分開",
      "已用自己的話寫 3–5 句理解",
      "有概念關係或定義",
      "有尚未理解／需要查證清單",
      "沒有把筆記當成可繳交作業"
    ],
    "enDeliverableChecklist": [
      "Source type is clear (book/handout/instructor)",
      "Source vs. AI explanation is separated",
      "3–5 sentences in your own words",
      "Definitions or relationships included",
      "Unclear / verify list included",
      "Notes are not treated as a submittable assignment"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "合上教材後，用自己的話寫出本段 3 個重點，並寫 1 個仍要查課本的問題。",
    "enNotePrompt": "Close the source, write 3 points in your own words, and one question to check in the book.",
    "zhCoachPrompt": "請檢查我的「教材重點整理」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Course-material digest sheet” is concrete and actionable.",
    "zhExcellentExample": "含原文核心、定義、關係、標示過的 AI 解釋、自己的 3–5 句、待查證、2 題檢查題。",
    "enExcellentExample": "Includes source core, definitions, relations, labeled explanation, 3–5 own sentences, verify list, 2 check questions.",
    "zhNextStep": "下一堂處理圖片、表格與投影片，把非文字課件也納入可核對的理解。",
    "enNextStep": "Next, interpret images, tables, and slides so non-text materials are also checkable."
  },
  {
    "estimatedTime": "約 45 分鐘 / About 45 min",
    "difficulty": "標準 / Standard",
    "id": "college-learning-L4",
    "lessonKey": "college-learning-L4",
    "zhTitle": "第4課：分析圖片、表格、投影片與複雜課件",
    "enTitle": "Lesson 4: Analyze images, tables, slides, and complex courseware",
    "zhValueTip": "看不清就回原檔；猜的數字不能進筆記。",
    "enValueTip": "If you cannot see it, return to the file. Guessed numbers do not belong in notes.",
    "zhOutputName": "複雜課件解讀單",
    "enOutputName": "Complex Courseware Reading Sheet",
    "zhOutcome": "複雜課件解讀單",
    "enOutcome": "Complex Courseware Reading Sheet",
    "zhObjectives": [
      "描述課件上真正看得見的資訊",
      "列出讀圖／讀表步驟",
      "把「假設」與「無法判讀」分開",
      "寫出 3 個可進筆記的觀察",
      "把成果存成「複雜課件解讀單」"
    ],
    "enObjectives": [
      "Describe what is actually visible",
      "List steps to read the figure or table",
      "Separate hypotheses from unreadables",
      "Write 3 note-ready observations",
      "Save a Complex Courseware Reading Sheet"
    ],
    "zhWhyItMatters": {
      "problem": "複雜課件被略過，或被 AI 亂補數據，考試時才發現自己沒真正讀圖。",
      "ineffective": "上傳不清楚的圖就要求「完整分析與結論」。",
      "solution": "用可見資訊做解讀步驟，把假設與未知分開，再回原檔確認。"
    },
    "enWhyItMatters": {
      "problem": "Hard visuals are skipped, or AI fills in fake data, and you fail at exam figures.",
      "ineffective": "Uploading a blurry chart and demanding a full analysis.",
      "solution": "Read from visible information, separate hypothesis from unknown, then confirm in the original file."
    },
    "zhConceptBlocks": {
      "principles": [
        "只根據看得見的資訊",
        "假設必須標示",
        "數字回原檔"
      ],
      "terms": [
        "可見資訊",
        "無法判讀",
        "讀圖步驟"
      ],
      "criteria": [
        "有描述",
        "有未知項",
        "無假數據"
      ],
      "boundaries": [
        "避免：猜 p 值",
        "避免：假裝看過原圖",
        "避免：只有結論沒有步驟"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Use only visible information",
        "Label hypotheses",
        "Numbers from the original file"
      ],
      "terms": [
        "Visible information",
        "Cannot be read",
        "Reading steps"
      ],
      "criteria": [
        "Description present",
        "Unknowns listed",
        "No fake data"
      ],
      "boundaries": [
        "Avoid: guessing p-values",
        "Avoid: pretending you saw the original",
        "Avoid: conclusions without steps"
      ]
    },
    "zhConcept": "圖、表、投影片常承載課堂真正的論點，但 AI 若沒看到原檔就會猜數字。這一課練習：只描述你看見的，請 AI 給讀圖步驟與假設，並把看不清的標成必須回原檔。解讀單要能接進筆記系統，而不是另一份幻覺報告。",
    "enConcept": "Figures, tables, and slides often carry the real argument—but AI will guess numbers if it cannot see the file. This lesson: describe only what you see, ask for reading steps and hypotheses, and mark unreadables as “return to the original.” The sheet should feed your notes, not a hallucination report.",
    "zhCaseStudyBlocks": {
      "problem": "小庭實驗報告要解讀一張看不清的折線圖。",
      "wrong": "要 AI 直接給結論與統計數字。",
      "right": "描述可見軸與標籤，請 AI 給步驟與待確認，再回原檔核對。",
      "result": "不含假數據的「複雜課件解讀單」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Ting must interpret a hard-to-read line chart for a lab report.",
      "wrong": "Ask AI for conclusions and statistics immediately.",
      "right": "Describe visible axes and labels, get steps and unknowns, then check the original file.",
      "result": "A Complex Courseware Reading Sheet with no fake data."
    },
    "zhCaseStudy": "生物課小庭把模糊的實驗圖丟給 AI，得到一組課本沒有的 p 值。她改成只寫：X 軸時間、Y 軸濃度、三條線顏色、老師說「比較處理組」。AI 只給讀圖步驟與待確認項。她回投影片原檔才抄正確刻度。",
    "enCaseStudy": "Ting uploaded a blurry lab figure and got p-values that were not in the slides. She then described only: time on X, concentration on Y, three colored lines, and the instructor saying “compare treatments.” AI gave reading steps and unknowns. She copied real axis ticks from the original file.",
    "zhWorkflowSteps": [
      {
        "do": "描述可見資訊",
        "why": "沒有描述就會被亂補",
        "input": "圖表／投影片",
        "output": "可見清單",
        "check": "是否沒有猜的數字"
      },
      {
        "do": "要讀圖步驟",
        "why": "學會方法而非只要結論",
        "input": "可見清單",
        "output": "步驟",
        "check": "步驟能否自己重做"
      },
      {
        "do": "分開假設與未知",
        "why": "避免假結論",
        "input": "步驟草稿",
        "output": "標註版",
        "check": "假設是否標示"
      },
      {
        "do": "回原檔核對",
        "why": "AI 不是原件",
        "input": "原檔",
        "output": "已核對",
        "check": "刻度是否來自原檔"
      },
      {
        "do": "存入筆記系統",
        "why": "L5 會用到",
        "input": "定稿",
        "output": "成果包",
        "check": "有 3 個觀察"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Describe what is visible",
        "why": "No description invites invention",
        "input": "Figure/slides",
        "output": "Visible list",
        "check": "No guessed numbers"
      },
      {
        "do": "Ask for reading steps",
        "why": "Learn method, not only a conclusion",
        "input": "Visible list",
        "output": "Steps",
        "check": "Can you redo the steps?"
      },
      {
        "do": "Split hypothesis vs unknown",
        "why": "Avoid fake conclusions",
        "input": "Step draft",
        "output": "Labeled version",
        "check": "Hypotheses marked"
      },
      {
        "do": "Check original file",
        "why": "AI is not the source file",
        "input": "Original",
        "output": "Verified",
        "check": "Ticks from the file"
      },
      {
        "do": "Save into notes system",
        "why": "L5 will reuse this",
        "input": "Final",
        "output": "Package",
        "check": "3 observations"
      }
    ],
    "zhWorkflow": [
      "寫下你真正看見的軸、標題、數字",
      "用 Prompt 產出解讀步驟與假設",
      "刪掉所有猜的數值",
      "回原檔或老師說明核對",
      "把觀察寫進解讀單並存檔"
    ],
    "enWorkflow": [
      "Write axes, titles, and numbers you can actually see",
      "Generate reading steps and hypotheses",
      "Delete every guessed value",
      "Check the original file or instructor notes",
      "Save observations on the reading sheet"
    ],
    "zhPromptPack": {
      "when": "面對圖表、投影片或實驗截圖讀不懂時使用",
      "fields": [
        "[請填寫課程名稱]",
        "[請填寫你實際看得到的資訊]",
        "[請填寫想搞懂什麼]"
      ],
      "body": "你是課件解讀助教。對於看不清楚的圖、表、數字，必須說「無法從提供資料判讀」，不可猜。\n\n我的輸入：\n- 課程：[請填寫課程名稱]\n- 課件類型（圖／表／投影片／實驗截圖）：[請填寫]\n- 我能描述的內容（軸、標題、可見數字、老師口頭說明）：\n[請填寫你實際看得到的資訊]\n- 我的問題：[請填寫想搞懂什麼]\n\n任務：產出「複雜課件解讀單」：\n1) 我真正看見的資訊（只根據我的描述）\n2) 可能的讀圖／讀表步驟\n3) 這張圖表可能在說明什麼（標示為假設）\n4) 無法判讀、必須回原檔或問老師的項目\n5) 3 個我可以寫進筆記的觀察（不含猜的數字）\n\n限制：不要編造座標上的數值、樣本數或結論。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "一份不猜數字、可回原檔核對的課件解讀單",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：投影片結構",
          "body": "若這是一組投影片，請依我貼的標題清單，整理每頁一句重點與頁與頁之間的邏輯。不要補我沒貼的頁面內容。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when a figure, table, or slide is hard to read",
      "fields": [
        "[Enter course name]",
        "[Enter what you can see]",
        "[Enter what you want to understand]"
      ],
      "body": "You are a courseware-reading tutor. If a figure, table, or number is unclear, say “cannot be read from the provided information.” Do not guess.\n\nMy input:\n- Course: [Enter course name]\n- Type (figure / table / slides / lab screenshot): [Enter type]\n- What I can actually see (axes, titles, visible numbers, instructor comments):\n[Enter what you can see]\n- My question: [Enter what you want to understand]\n\nTask: Produce a “Complex Courseware Reading Sheet”:\n1) What I actually see (only from my description)\n2) Steps to read the figure/table\n3) What it might be showing (label as hypothesis)\n4) What cannot be read and must go back to the file or instructor\n5) 3 note-ready observations (no guessed numbers)\n\nLimits: Do not invent axis values, sample sizes, or conclusions.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "A courseware sheet that does not guess numbers and can be checked against the original file",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: slide structure",
          "body": "If these are slides, use only my title list to write one point per slide and the logic between slides. Do not invent unpasted slides."
        }
      ]
    },
    "zhPrompt": "你是課件解讀助教。對於看不清楚的圖、表、數字，必須說「無法從提供資料判讀」，不可猜。\n\n我的輸入：\n- 課程：[請填寫課程名稱]\n- 課件類型（圖／表／投影片／實驗截圖）：[請填寫]\n- 我能描述的內容（軸、標題、可見數字、老師口頭說明）：\n[請填寫你實際看得到的資訊]\n- 我的問題：[請填寫想搞懂什麼]\n\n任務：產出「複雜課件解讀單」：\n1) 我真正看見的資訊（只根據我的描述）\n2) 可能的讀圖／讀表步驟\n3) 這張圖表可能在說明什麼（標示為假設）\n4) 無法判讀、必須回原檔或問老師的項目\n5) 3 個我可以寫進筆記的觀察（不含猜的數字）\n\n限制：不要編造座標上的數值、樣本數或結論。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a courseware-reading tutor. If a figure, table, or number is unclear, say “cannot be read from the provided information.” Do not guess.\n\nMy input:\n- Course: [Enter course name]\n- Type (figure / table / slides / lab screenshot): [Enter type]\n- What I can actually see (axes, titles, visible numbers, instructor comments):\n[Enter what you can see]\n- My question: [Enter what you want to understand]\n\nTask: Produce a “Complex Courseware Reading Sheet”:\n1) What I actually see (only from my description)\n2) Steps to read the figure/table\n3) What it might be showing (label as hypothesis)\n4) What cannot be read and must go back to the file or instructor\n5) 3 note-ready observations (no guessed numbers)\n\nLimits: Do not invent axis values, sample sizes, or conclusions.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "完成版「複雜課件解讀單」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Complex courseware reading sheet” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "描述可見資訊",
        "standard": "軸、標題、可見數字齊",
        "mistakes": "直接說結論",
        "check": "沒看過原檔的人能否想像這張圖？"
      },
      {
        "task": "列出步驟與未知",
        "standard": "有無法判讀項",
        "mistakes": "全是肯定句",
        "check": "是否標示假設？"
      },
      {
        "task": "回原檔核對",
        "standard": "數字來自原件",
        "mistakes": "保留 AI 猜的 p 值",
        "check": "有沒有刪掉猜的數？"
      },
      {
        "task": "存檔",
        "standard": "3 個觀察可進筆記",
        "mistakes": "空白",
        "check": "能否接到 L5？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Describe visible info",
        "standard": "Axes, titles, visible numbers",
        "mistakes": "Jump to a conclusion",
        "check": "Could someone imagine the figure?"
      },
      {
        "task": "List steps and unknowns",
        "standard": "Unreadables listed",
        "mistakes": "All confident claims",
        "check": "Are hypotheses marked?"
      },
      {
        "task": "Verify in the original",
        "standard": "Numbers from the file",
        "mistakes": "Keep guessed p-values",
        "check": "Guessed numbers removed?"
      },
      {
        "task": "Save",
        "standard": "3 observations ready for notes",
        "mistakes": "Blank",
        "check": "Can this feed L5?"
      }
    ],
    "zhPractice": "選一張圖或一組投影片。；只描述看得見的資訊。；產出解讀單並刪假數據。；存成「複雜課件解讀單」。",
    "enPractice": "Pick a figure or slide set.; Describe only what is visible.; Produce the sheet and delete fake data.; Save the Courseware Reading Sheet.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「複雜課件解讀單」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Complex courseware reading sheet” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "複雜課件解讀單",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Complex courseware reading sheet",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "要 AI 從模糊圖猜精確數值",
      "把假設寫成事實",
      "不回原檔核對",
      "忽略老師口頭對圖的說明",
      "解讀單與筆記脫節"
    ],
    "enCommonMistakes": [
      "Asking AI to guess precise values from a blurry figure",
      "Writing hypotheses as facts",
      "Not returning to the original file",
      "Ignoring the instructor’s spoken comments on the figure",
      "Leaving the sheet disconnected from notes"
    ],
    "zhSummary": [
      "本堂成果：複雜課件解讀單",
      "看不清就回原檔。",
      "解讀要能寫進筆記。"
    ],
    "enSummary": [
      "Deliverable: Complex Courseware Reading Sheet",
      "If unclear, return to the file.",
      "Readings should enter your notes."
    ],
    "zhDeliverableChecklist": [
      "已描述看得見的軸／標題／數字",
      "有讀圖或讀表步驟",
      "假設與無法判讀已分開",
      "沒有保留 AI 猜的精確數值",
      "有 3 個可進筆記的觀察",
      "已提示自己回原檔或老師說明核對"
    ],
    "enDeliverableChecklist": [
      "Visible axes/titles/numbers described",
      "Reading steps included",
      "Hypotheses vs unreadables separated",
      "No guessed precise values kept",
      "3 note-ready observations",
      "Reminder to check the original file or instructor"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下這張圖我確定看見的 3 件事，以及 1 件必須回原檔才能確認的事。",
    "enNotePrompt": "Write 3 things you are sure you saw, and 1 thing that requires the original file.",
    "zhCoachPrompt": "請檢查我的「複雜課件解讀單」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Complex courseware reading sheet” is concrete and actionable.",
    "zhExcellentExample": "含可見資訊、讀圖步驟、標示的假設、無法判讀清單、3 個觀察、無假數據。",
    "enExcellentExample": "Includes visible info, reading steps, labeled hypotheses, unreadables, 3 observations, no fake data.",
    "zhNextStep": "下一堂把教材筆記與課件觀察收成「課堂筆記整理系統」。",
    "enNextStep": "Next, fold material notes and courseware observations into a class-notes system."
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "id": "college-learning-L5",
    "lessonKey": "college-learning-L5",
    "zhTitle": "第5課：建立有結構的課堂筆記",
    "enTitle": "Lesson 5: Build structured class notes",
    "zhValueTip": "先有原始紀錄，再請 AI 結構化；摘要必須能指回你的筆記。",
    "enValueTip": "Raw record first, then structure. Every summary point must trace back to your notes.",
    "zhOutputName": "AI 課堂筆記整理系統",
    "enOutputName": "AI Class Notes System",
    "zhOutcome": "AI 課堂筆記整理系統",
    "enOutcome": "AI Class Notes System",
    "zhObjectives": [
      "保留一份可辨識的原始筆記",
      "做成主題化的結構化整理",
      "寫出最多 8 點、可回溯來源的摘要",
      "列出至少 3 個待確認問題",
      "把成果存成「AI 課堂筆記整理系統」"
    ],
    "enObjectives": [
      "Keep a recognizable raw-note layer",
      "Build topic-based structured notes",
      "Write at most 8 source-traceable summary points",
      "List at least 3 questions to confirm",
      "Save an AI Class Notes System"
    ],
    "zhWhyItMatters": {
      "problem": "原始筆記太亂，或完全交給 AI 重寫後，自己再也講不出課堂發生什麼。",
      "ineffective": "下課只說「幫我做一份完整筆記」卻不提供原始紀錄。",
      "solution": "保留原句，再做結構與摘要，並留下要問老師的問題。"
    },
    "enWhyItMatters": {
      "problem": "Notes stay messy, or AI rewrites them until you cannot retell the class.",
      "ineffective": "Asking for “complete notes” with no raw record.",
      "solution": "Keep your wording, then add structure, summary, and questions for the instructor."
    },
    "zhConceptBlocks": {
      "principles": [
        "原始紀錄不可丟",
        "結構服務複習",
        "摘要必須可回溯"
      ],
      "terms": [
        "原始筆記",
        "結構化整理",
        "待確認問題"
      ],
      "criteria": [
        "有四層",
        "摘要≤8",
        "問題≥3"
      ],
      "boundaries": [
        "避免：生成假課堂",
        "避免：改到認不出",
        "避免：當繳交作業"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Never drop the raw record",
        "Structure serves review",
        "Summaries must be traceable"
      ],
      "terms": [
        "Raw notes",
        "Structured organization",
        "Questions to confirm"
      ],
      "criteria": [
        "Four layers",
        "Summary ≤8",
        "Questions ≥3"
      ],
      "boundaries": [
        "Avoid: fake lectures",
        "Avoid: unrecognizable rewrites",
        "Avoid: submitting as homework"
      ]
    },
    "zhConcept": "好的課堂筆記不是更漂亮的字，而是四層：原始紀錄、結構化整理、重點摘要、待確認問題。AI 可以幫忙分類，但不能假裝你去上了沒寫下來的課。沒有原始筆記，整理系統就是空的。",
    "enConcept": "Good class notes are not prettier handwriting. They are four layers: raw record, structured organization, key summary, and questions to confirm. AI can sort; it cannot pretend you attended undocumented class. Without raw notes, the system is empty.",
    "zhCaseStudyBlocks": {
      "problem": "小安下課只剩關鍵詞，兩週後完全想不起論證。",
      "wrong": "要 AI 生成完整課堂逐字稿。",
      "right": "貼原始關鍵詞與教材筆記，做四層系統，刪除無來源內容。",
      "result": "可複習、可回溯的「AI 課堂筆記整理系統」。"
    },
    "enCaseStudyBlocks": {
      "problem": "An only has keywords and cannot reconstruct the argument two weeks later.",
      "wrong": "Ask AI for a full lecture transcript.",
      "right": "Paste raw keywords and material notes, build four layers, delete unsourced content.",
      "result": "A reviewable, traceable AI Class Notes System."
    },
    "zhCaseStudy": "歷史課小安的筆記只有關鍵詞。他請 AI「寫完整堂課」，得到一篇像維基的文章。後來他貼上關鍵詞＋L3 教材筆記，要求四層輸出，並刪掉筆記沒有的年代。複習時他能從摘要跳回原句。",
    "enCaseStudy": "An in history had only keywords. Asking AI to “write the whole lecture” produced a Wikipedia-like essay. He then pasted keywords plus L3 notes, required four layers, and deleted dates not in his notes. During review he could jump from summary back to his own lines.",
    "zhWorkflowSteps": [
      {
        "do": "保存原始筆記",
        "why": "沒有原料就無法整理",
        "input": "課堂紀錄",
        "output": "原句",
        "check": "是否是你的話"
      },
      {
        "do": "合併前課成果",
        "why": "避免重工",
        "input": "L3/L4 重點",
        "output": "輸入包",
        "check": "是否標來源"
      },
      {
        "do": "產出四層",
        "why": "複習需要結構",
        "input": "輸入包",
        "output": "四層草稿",
        "check": "原句層是否還在"
      },
      {
        "do": "刪無來源",
        "why": "防幻覺",
        "input": "草稿",
        "output": "已核對",
        "check": "摘要能否指回原句"
      },
      {
        "do": "存檔",
        "why": "複習與作業會用",
        "input": "定稿",
        "output": "成果包",
        "check": "待確認≥3"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Save raw notes",
        "why": "No source, no system",
        "input": "Class record",
        "output": "Your lines",
        "check": "Is it your wording?"
      },
      {
        "do": "Merge prior outputs",
        "why": "Avoid redo",
        "input": "L3/L4 points",
        "output": "Input pack",
        "check": "Sources labeled"
      },
      {
        "do": "Generate four layers",
        "why": "Review needs structure",
        "input": "Input pack",
        "output": "Four-layer draft",
        "check": "Raw layer still present"
      },
      {
        "do": "Delete unsourced lines",
        "why": "Stop hallucination",
        "input": "Draft",
        "output": "Verified",
        "check": "Summary traces to raw lines"
      },
      {
        "do": "Save",
        "why": "Review and homework reuse this",
        "input": "Final",
        "output": "Package",
        "check": "≥3 questions"
      }
    ],
    "zhWorkflow": [
      "下課 10 分鐘內保存原始筆記",
      "貼上原始筆記與（若有）教材／課件重點",
      "用 Prompt 產出四層結構",
      "刪掉筆記沒有的內容",
      "存成課堂筆記整理系統"
    ],
    "enWorkflow": [
      "Save raw notes within 10 minutes after class",
      "Paste raw notes plus material/courseware points if any",
      "Generate the four-layer structure",
      "Delete content not in your notes",
      "Save the Class Notes System"
    ],
    "zhPromptPack": {
      "when": "下課後要把零亂筆記變成可複習系統時使用",
      "fields": [
        "[請填寫課程／日期／主題]",
        "[請填寫或貼上原始筆記]"
      ],
      "body": "你是課堂筆記架構教練。你的任務是整理結構，不是取代學生的原始筆記，也不可把缺席內容補成「老師有講」。\n\n我的輸入：\n- 課程／日期／主題：[請填寫]\n- 我的原始筆記（可零亂）：\n[請填寫或貼上原始筆記]\n- 本週教材理解筆記或課件觀察（若有，貼重點）：\n[請填寫，沒有可寫「尚無」]\n\n任務：產出「AI 課堂筆記整理系統」四層：\n1) 原始筆記（保留我的原句，只做輕微分段，不要改寫掉我的話）\n2) 結構化整理（主題、定義、例子、老師強調、作業／考試提示）\n3) 重點摘要（最多 8 點，每點都能指回原始筆記或教材）\n4) 待確認問題（至少 3 題）\n\n請標示：哪些整理是根據我的筆記、哪些是你的推論（推論需標需要查證）。不要寫成可繳交的逐字稿。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "含原始筆記、結構化整理、摘要與待確認問題的筆記系統",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：考試提示抽取",
          "body": "只根據我的筆記，列出老師可能暗示會考的句子。若筆記沒寫，請說「筆記未記載」，不要編造。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use after class when messy notes need a reviewable system",
      "fields": [
        "[Enter course / date / topic]",
        "[Enter or paste raw notes]"
      ],
      "body": "You are a class-notes structure coach. Organize structure; do not replace the student’s raw notes or invent “the instructor said.”\n\nMy input:\n- Course / date / topic: [Enter]\n- My raw notes (messy is OK):\n[Enter or paste raw notes]\n- Material notes or courseware observations this week (if any):\n[Enter, or write “none yet”]\n\nTask: Produce a four-layer “AI Class Notes System”:\n1) Raw notes (keep my wording; light paragraphing only)\n2) Structured organization (topics, definitions, examples, instructor emphasis, homework/exam hints)\n3) Key summary (max 8 points, each traceable to raw notes or materials)\n4) Questions to confirm (at least 3)\n\nLabel what comes from my notes vs. your inference (inferences need verification). Do not produce a submittable transcript.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "A notes system with raw notes, structure, summary, and questions to confirm",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: exam-hint extraction",
          "body": "From my notes only, list sentences that may hint at exam topics. If not in the notes, say “not in notes.” Do not invent hints."
        }
      ]
    },
    "zhPrompt": "你是課堂筆記架構教練。你的任務是整理結構，不是取代學生的原始筆記，也不可把缺席內容補成「老師有講」。\n\n我的輸入：\n- 課程／日期／主題：[請填寫]\n- 我的原始筆記（可零亂）：\n[請填寫或貼上原始筆記]\n- 本週教材理解筆記或課件觀察（若有，貼重點）：\n[請填寫，沒有可寫「尚無」]\n\n任務：產出「AI 課堂筆記整理系統」四層：\n1) 原始筆記（保留我的原句，只做輕微分段，不要改寫掉我的話）\n2) 結構化整理（主題、定義、例子、老師強調、作業／考試提示）\n3) 重點摘要（最多 8 點，每點都能指回原始筆記或教材）\n4) 待確認問題（至少 3 題）\n\n請標示：哪些整理是根據我的筆記、哪些是你的推論（推論需標需要查證）。不要寫成可繳交的逐字稿。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a class-notes structure coach. Organize structure; do not replace the student’s raw notes or invent “the instructor said.”\n\nMy input:\n- Course / date / topic: [Enter]\n- My raw notes (messy is OK):\n[Enter or paste raw notes]\n- Material notes or courseware observations this week (if any):\n[Enter, or write “none yet”]\n\nTask: Produce a four-layer “AI Class Notes System”:\n1) Raw notes (keep my wording; light paragraphing only)\n2) Structured organization (topics, definitions, examples, instructor emphasis, homework/exam hints)\n3) Key summary (max 8 points, each traceable to raw notes or materials)\n4) Questions to confirm (at least 3)\n\nLabel what comes from my notes vs. your inference (inferences need verification). Do not produce a submittable transcript.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "完成版「課堂筆記模板」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Structured class-notes template” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "保留原始層",
        "standard": "原句可辨識",
        "mistakes": "完全被改寫",
        "check": "你還認得出自己的筆記嗎？"
      },
      {
        "task": "完成結構化",
        "standard": "有主題／定義／例子",
        "mistakes": "只有長摘要",
        "check": "考試能否按主題找？"
      },
      {
        "task": "摘要可回溯",
        "standard": "每點能指回原筆記或教材",
        "mistakes": "出現沒上過的內容",
        "check": "能否標來源？"
      },
      {
        "task": "待確認並存檔",
        "standard": "至少 3 題",
        "mistakes": "沒有問題",
        "check": "下堂課能問老師嗎？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Keep the raw layer",
        "standard": "Your wording recognizable",
        "mistakes": "Fully rewritten",
        "check": "Do you still recognize your notes?"
      },
      {
        "task": "Finish structure",
        "standard": "Topics/definitions/examples",
        "mistakes": "Only a long summary",
        "check": "Can you find topics for the exam?"
      },
      {
        "task": "Traceable summary",
        "standard": "Each point maps to notes or materials",
        "mistakes": "Content from a class you skipped",
        "check": "Can you label sources?"
      },
      {
        "task": "Questions and save",
        "standard": "At least 3",
        "mistakes": "No questions",
        "check": "Can you ask next class?"
      }
    ],
    "zhPractice": "保存一堂課的原始筆記。；產出四層整理。；刪無來源內容並留下待確認問題。；存成「AI 課堂筆記整理系統」。",
    "enPractice": "Save one class of raw notes.; Generate four layers.; Delete unsourced content and keep questions.; Save the AI Class Notes System.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「課堂筆記模板」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Structured class-notes template” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "課堂筆記模板",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Structured class-notes template",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "沒有原始筆記就要求完整課堂",
      "讓 AI 改到自己認不出原句",
      "摘要出現沒上過的內容",
      "沒有待確認問題",
      "把整理結果當出席證明"
    ],
    "enCommonMistakes": [
      "Asking for a full class with no raw notes",
      "Letting AI rewrite until you cannot recognize your lines",
      "Summary includes classes you did not attend",
      "No questions to confirm",
      "Treating organized notes as proof of attendance"
    ],
    "zhSummary": [
      "本堂成果：AI 課堂筆記整理系統",
      "四層缺一就很難複習。",
      "沒上過的課不能用 AI 補造。"
    ],
    "enSummary": [
      "Deliverable: AI Class Notes System",
      "Missing a layer makes review hard.",
      "AI must not invent a class you skipped."
    ],
    "zhDeliverableChecklist": [
      "有保留原始筆記層",
      "有結構化整理（主題／定義／例子／提示）",
      "重點摘要不超過 8 點且可回溯",
      "至少 3 個待確認問題",
      "已刪除筆記沒有的內容",
      "未把整理結果當成可繳交作業"
    ],
    "enDeliverableChecklist": [
      "Raw-note layer kept",
      "Structured organization present",
      "Summary has ≤8 traceable points",
      "At least 3 questions to confirm",
      "Unsourced content removed",
      "Not treated as a submittable assignment"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下本堂課你自己記得的 3 件事，以及 1 個要在下堂課確認的問題。",
    "enNotePrompt": "Write 3 things you remember from class and 1 question to confirm next time.",
    "zhCoachPrompt": "請檢查我的「課堂筆記模板」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Structured class-notes template” is concrete and actionable.",
    "zhExcellentExample": "四層齊：原句、結構、最多 8 點可回溯摘要、3 個待確認問題。",
    "enExcellentExample": "All four layers: raw lines, structure, max 8 traceable points, 3 questions.",
    "zhNextStep": "下一堂把課堂資料與課外閱讀收成「閱讀與文獻理解筆記」。",
    "enNextStep": "Next, turn class materials and outside readings into literature-understanding notes."
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "id": "college-learning-L6",
    "lessonKey": "college-learning-L6",
    "zhTitle": "第6課：整理課堂資料與重要資訊",
    "enTitle": "Lesson 6: Organize class materials and key information",
    "zhValueTip": "沒讀過就不能引用；AI 不是學術資料庫。",
    "enValueTip": "If you have not read it, you cannot cite it. AI is not an academic database.",
    "zhOutputName": "閱讀與文獻理解筆記",
    "enOutputName": "Reading and Literature Notes",
    "zhOutcome": "閱讀與文獻理解筆記",
    "enOutcome": "Reading and Literature Notes",
    "zhObjectives": [
      "從實際讀過的段落整理原文核心",
      "分開我的理解與 AI 解釋",
      "列出待查證與未讀範圍",
      "不把 AI 產生的引用當正式來源",
      "把成果存成「閱讀與文獻理解筆記」"
    ],
    "enObjectives": [
      "Extract source core from passages you actually read",
      "Separate your understanding from AI explanation",
      "List verification items and unread range",
      "Refuse to treat AI citations as official sources",
      "Save Reading and Literature Notes"
    ],
    "zhWhyItMatters": {
      "problem": "資料很多，學生用 AI 做假文獻回顧，作業出現不存在的論文。",
      "ineffective": "只說「幫我整理這些資料並給引用」。",
      "solution": "只根據實際讀過的摘錄做筆記，書目缺漏列成查證項，不編造引用。"
    },
    "enWhyItMatters": {
      "problem": "Too many sources; AI-written fake literature reviews introduce papers that do not exist.",
      "ineffective": "Asking AI to “organize these sources and give citations.”",
      "solution": "Notes only from passages you read; missing bibliography becomes a verify list—never invented citations."
    },
    "zhConceptBlocks": {
      "principles": [
        "只筆記讀過的",
        "引用必須回資料庫",
        "未讀不能寫進作業"
      ],
      "terms": [
        "原文核心",
        "待查證書目",
        "未讀範圍"
      ],
      "criteria": [
        "有摘錄",
        "有查證項",
        "無假 DOI"
      ],
      "boundaries": [
        "避免：捏造文獻",
        "避免：假精讀",
        "避免：AI 當正式來源"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Notes only on what you read",
        "Citations back to a database",
        "Unread text stays out of homework"
      ],
      "terms": [
        "Source core",
        "Bibliography to verify",
        "Unread range"
      ],
      "criteria": [
        "Excerpt present",
        "Verify list present",
        "No fake DOI"
      ],
      "boundaries": [
        "Avoid: invented literature",
        "Avoid: fake close-reading",
        "Avoid: AI as an official source"
      ]
    },
    "zhConcept": "整理課堂資料不只是資料夾分類，而是讀懂教科書、文章、Paper、長篇資料：留下原文核心、你的理解、AI 解釋、待查證。AI 很會「看起來像真的」引用，那些作者、年份、DOI 都必須回正式資料庫確認。沒讀過的部分不能寫進作業。",
    "enConcept": "Organizing class materials is not only folders. It is understanding textbooks, articles, papers, and long sources: source core, your understanding, AI explanation, and verification. AI is good at citations that look real—authors, years, and DOIs must be checked in official databases. Unread sections must not enter assignments.",
    "zhCaseStudyBlocks": {
      "problem": "小美要在一週內處理多篇課堂指定閱讀。",
      "wrong": "請 AI 直接產生文獻列表與引用格式。",
      "right": "只對自己讀過的段落做四欄筆記，缺書目列查證，不編 DOI。",
      "result": "可回原文與資料庫核對的「閱讀與文獻理解筆記」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Mei must handle several assigned readings in one week.",
      "wrong": "Ask AI to generate a source list and citation style.",
      "right": "Four-column notes on passages she read; missing fields become verification; no invented DOI.",
      "result": "Reading and Literature Notes checkable against the original and a database."
    },
    "zhCaseStudy": "社會學作業要求 5 篇文獻。小美請 AI「找五篇並寫 APA」，得到不存在的期刊論文。她改成只貼自己在資料庫找到的 1 篇 PDF 的兩段話，請 AI 做閱讀筆記與「還缺哪些書目欄位」。引用全部回資料庫核對後才進作業。",
    "enCaseStudy": "A sociology assignment asked for 5 sources. Mei asked AI to “find five and write APA” and got nonexistent journal articles. She then pasted two paragraphs from one PDF she actually found, asked for reading notes and missing bibliographic fields, and verified every citation in the database before writing.",
    "zhWorkflowSteps": [
      {
        "do": "打開真實文本",
        "why": "不能引用沒讀的",
        "input": "PDF／課本",
        "output": "摘錄",
        "check": "是否真的讀過"
      },
      {
        "do": "記錄書目現況",
        "why": "防假 DOI",
        "input": "封面／資料庫",
        "output": "已知欄位",
        "check": "未知是否標未知"
      },
      {
        "do": "產出四欄筆記",
        "why": "理解要分層",
        "input": "摘錄",
        "output": "筆記草稿",
        "check": "原文與解釋是否分開"
      },
      {
        "do": "資料庫查證",
        "why": "AI 不是來源",
        "input": "草稿書目",
        "output": "已核對",
        "check": "DOI／年份是否回查"
      },
      {
        "do": "存檔",
        "why": "報告課會用",
        "input": "定稿",
        "output": "成果包",
        "check": "未讀範圍是否標出"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Open a real text",
        "why": "Cannot cite unread work",
        "input": "PDF/book",
        "output": "Excerpt",
        "check": "Did you actually read it?"
      },
      {
        "do": "Record known bibliography",
        "why": "Stop fake DOIs",
        "input": "Cover/database",
        "output": "Known fields",
        "check": "Unknowns marked unknown"
      },
      {
        "do": "Four-column notes",
        "why": "Layered understanding",
        "input": "Excerpt",
        "output": "Notes draft",
        "check": "Source vs explanation split"
      },
      {
        "do": "Database verification",
        "why": "AI is not a source",
        "input": "Draft biblio",
        "output": "Verified",
        "check": "Year/DOI rechecked"
      },
      {
        "do": "Save",
        "why": "Report lesson will use this",
        "input": "Final",
        "output": "Package",
        "check": "Unread range marked"
      }
    ],
    "zhWorkflow": [
      "選定一篇你真正能打開的文本並摘錄",
      "抄下你看得到的書目，缺的不要猜",
      "用 Prompt 產出閱讀筆記",
      "把書目拿到資料庫核對",
      "存成閱讀與文獻理解筆記"
    ],
    "enWorkflow": [
      "Pick a text you can actually open and excerpt it",
      "Copy visible bibliography; do not guess missing fields",
      "Generate reading notes with the prompt",
      "Verify bibliography in a database",
      "Save Reading and Literature Notes"
    ],
    "zhPromptPack": {
      "when": "讀文章、Paper 或長篇資料、需要留下可查證筆記時使用",
      "fields": [
        "[請填寫課程／作業目的]",
        "[請填寫摘錄]"
      ],
      "body": "你是閱讀與文獻理解教練。不可捏造文獻、作者、年份、期刊或 DOI。不可把摘要假裝成你已精讀全文。\n\n我的輸入：\n- 課程／作業目的：[請填寫]\n- 文本類型（教科書／文章／Paper／長篇資料）：[請填寫]\n- 書目資訊（我自己抄的，可能不完整）：[請填寫作者與標題；沒有就寫未知]\n- 我實際讀到的段落：\n[請填寫摘錄]\n\n任務：產出「閱讀與文獻理解筆記」：\n1) 原文核心資訊（主張、方法、證據、限制——只根據摘錄）\n2) 我的理解（留白提示我寫 3 句）\n3) AI 解釋（標示為解釋）\n4) 待查證內容（含任何你想補的書目欄位）\n5) 這份文本與我課程主題的可能連結（標示為假設）\n6) 我尚未讀到、不能寫進作業的部分\n\n限制：\n- 不要產生看起來真實的假引用\n- 若書目不完整，列出「我需要到資料庫查的欄位」而不是編造\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。\n\nAI 產生的引用、作者、年份與 DOI 都必須回到正式資料庫確認。不要把 AI 本身當成可靠學術來源。",
      "expected": "一份保留原文、理解、解釋與待查證的閱讀筆記",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：引用查證清單",
          "body": "請列出我若要在作業中引用這份文本，必須回到圖書館資料庫或原文核對的欄位清單。不要幫我編 DOI。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when reading articles, papers, or long sources and you need verifiable notes",
      "fields": [
        "[Enter course / assignment purpose]",
        "[Enter excerpt]"
      ],
      "body": "You are a reading and literature coach. Do not invent papers, authors, years, journals, or DOIs. Do not pretend a summary means the full text was read.\n\nMy input:\n- Course / assignment purpose: [Enter]\n- Text type (textbook / article / paper / long source): [Enter]\n- Bibliography I copied (may be incomplete): [Enter author and title; or “unknown”]\n- Passages I actually read:\n[Enter excerpt]\n\nTask: Produce “Reading and Literature Notes”:\n1) Source core (claim, method, evidence, limits—excerpt only)\n2) My understanding (prompt me to write 3 sentences)\n3) AI explanation (labeled as explanation)\n4) Items to verify (including any bibliographic fields you are tempted to fill)\n5) Possible link to my course topic (label as hypothesis)\n6) Parts I have not read and must not cite in an assignment\n\nLimits:\n- Do not generate fake-but-real-looking citations\n- If bibliography is incomplete, list fields to check in a database; do not invent them\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.\n\nAny citation, author, year, or DOI suggested by AI must be verified in an official database. Do not treat AI as a reliable academic source.",
      "expected": "Reading notes that keep source, understanding, explanation, and verification items",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: citation verification list",
          "body": "List bibliographic fields I must verify in a library database or the original text before citing. Do not invent a DOI."
        }
      ]
    },
    "zhPrompt": "你是閱讀與文獻理解教練。不可捏造文獻、作者、年份、期刊或 DOI。不可把摘要假裝成你已精讀全文。\n\n我的輸入：\n- 課程／作業目的：[請填寫]\n- 文本類型（教科書／文章／Paper／長篇資料）：[請填寫]\n- 書目資訊（我自己抄的，可能不完整）：[請填寫作者與標題；沒有就寫未知]\n- 我實際讀到的段落：\n[請填寫摘錄]\n\n任務：產出「閱讀與文獻理解筆記」：\n1) 原文核心資訊（主張、方法、證據、限制——只根據摘錄）\n2) 我的理解（留白提示我寫 3 句）\n3) AI 解釋（標示為解釋）\n4) 待查證內容（含任何你想補的書目欄位）\n5) 這份文本與我課程主題的可能連結（標示為假設）\n6) 我尚未讀到、不能寫進作業的部分\n\n限制：\n- 不要產生看起來真實的假引用\n- 若書目不完整，列出「我需要到資料庫查的欄位」而不是編造\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。\n\nAI 產生的引用、作者、年份與 DOI 都必須回到正式資料庫確認。不要把 AI 本身當成可靠學術來源。",
    "enPrompt": "You are a reading and literature coach. Do not invent papers, authors, years, journals, or DOIs. Do not pretend a summary means the full text was read.\n\nMy input:\n- Course / assignment purpose: [Enter]\n- Text type (textbook / article / paper / long source): [Enter]\n- Bibliography I copied (may be incomplete): [Enter author and title; or “unknown”]\n- Passages I actually read:\n[Enter excerpt]\n\nTask: Produce “Reading and Literature Notes”:\n1) Source core (claim, method, evidence, limits—excerpt only)\n2) My understanding (prompt me to write 3 sentences)\n3) AI explanation (labeled as explanation)\n4) Items to verify (including any bibliographic fields you are tempted to fill)\n5) Possible link to my course topic (label as hypothesis)\n6) Parts I have not read and must not cite in an assignment\n\nLimits:\n- Do not generate fake-but-real-looking citations\n- If bibliography is incomplete, list fields to check in a database; do not invent them\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.\n\nAny citation, author, year, or DOI suggested by AI must be verified in an official database. Do not treat AI as a reliable academic source.",
    "zhExample": "完成版「重要資訊整理表」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Key-information organizer” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "只用讀過的段落",
        "standard": "摘錄可指回頁碼或位置",
        "mistakes": "整篇交給 AI 裝精讀",
        "check": "你能指出段落在哪嗎？"
      },
      {
        "task": "分開理解與解釋",
        "standard": "有我的 3 句",
        "mistakes": "只有 AI 文",
        "check": "合上文本講得出來嗎？"
      },
      {
        "task": "查證書目",
        "standard": "不確定欄位已標",
        "mistakes": "使用 AI 編的 DOI",
        "check": "有回資料庫嗎？"
      },
      {
        "task": "標未讀範圍並存檔",
        "standard": "未讀不進作業",
        "mistakes": "把摘要當已引用",
        "check": "作業裡會不會誤引？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Use only read passages",
        "standard": "Excerpt points to a page/place",
        "mistakes": "Pretend close-reading via AI",
        "check": "Can you point to the passage?"
      },
      {
        "task": "Split understanding vs explanation",
        "standard": "3 sentences of yours",
        "mistakes": "Only AI prose",
        "check": "Can you retell it?"
      },
      {
        "task": "Verify bibliography",
        "standard": "Uncertain fields flagged",
        "mistakes": "Use an invented DOI",
        "check": "Did you check a database?"
      },
      {
        "task": "Mark unread range and save",
        "standard": "Unread stays out of homework",
        "mistakes": "Cite from the summary only",
        "check": "Any accidental citation risk?"
      }
    ],
    "zhPractice": "選一篇真實文本並摘錄。；產出閱讀筆記。；核對書目、刪假引用。；存成「閱讀與文獻理解筆記」。",
    "enPractice": "Pick a real text and excerpt it.; Produce reading notes.; Verify bibliography and delete fake citations.; Save Reading and Literature Notes.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「重要資訊整理表」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Key-information organizer” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "重要資訊整理表",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Key-information organizer",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "要求 AI 生成 5 篇「看起來真實」的論文",
      "使用未經核對的 DOI 或年份",
      "沒讀全文卻寫成已精讀",
      "把 AI 解釋抄進作業當自己的分析",
      "不標示待查證"
    ],
    "enCommonMistakes": [
      "Asking AI for five “real-looking” papers",
      "Using unverified DOIs or years",
      "Writing as if you close-read unread text",
      "Pasting AI explanation as your analysis",
      "No verification flags"
    ],
    "zhSummary": [
      "本堂成果：閱讀與文獻理解筆記",
      "AI 引用一律查證。",
      "沒讀過就不要引用。"
    ],
    "enSummary": [
      "Deliverable: Reading and Literature Notes",
      "Verify every AI citation.",
      "Do not cite what you have not read."
    ],
    "zhDeliverableChecklist": [
      "筆記來自實際讀過的段落",
      "原文核心、我的理解、AI 解釋已分開",
      "有待查證清單",
      "未讀範圍已標示、不會寫進作業",
      "沒有使用未經核對的作者／年份／DOI",
      "已提醒自己回正式資料庫確認引用"
    ],
    "enDeliverableChecklist": [
      "Notes come from passages actually read",
      "Source, my understanding, and AI explanation are separated",
      "Verification list included",
      "Unread range marked and kept out of homework",
      "No unverified author/year/DOI used",
      "Reminder to confirm citations in an official database"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下這份文本的 1 個主張、1 個限制，以及 1 個你還沒讀、因此不能引用的部分。",
    "enNotePrompt": "Write one claim, one limitation, and one unread part you must not cite.",
    "zhCoachPrompt": "請檢查我的「重要資訊整理表」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Key-information organizer” is concrete and actionable.",
    "zhExcellentExample": "含原文核心、我的理解、標示的 AI 解釋、待查證書目、未讀範圍聲明、無假引用。",
    "enExcellentExample": "Includes source core, your understanding, labeled explanation, biblio to verify, unread-range note, no fake citations.",
    "zhNextStep": "下一堂用筆記與閱讀成果去拆作業，產出「報告與作業規劃表」。",
    "enNextStep": "Next, use notes and readings to break down an assignment into a Report and Homework Plan."
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "標準 / Standard",
    "id": "college-learning-L7",
    "lessonKey": "college-learning-L7",
    "zhTitle": "第7課：完成一般課堂報告架構",
    "enTitle": "Lesson 7: Build a classroom report structure",
    "zhValueTip": "先規劃再撰寫；AI 不代寫、不造數據、不造引用。",
    "enValueTip": "Plan before prose. AI does not ghostwrite, invent data, or invent citations.",
    "zhOutputName": "報告與作業規劃表",
    "enOutputName": "Report and Homework Plan",
    "zhOutcome": "報告與作業規劃表",
    "enOutcome": "Report and Homework Plan",
    "zhObjectives": [
      "用自己的話重述作業要求",
      "盤點已有資料與缺口（不編文獻）",
      "做出可執行大綱與撰寫順序",
      "列出驗證、引用核對與繳交前檢查",
      "把成果存成「報告與作業規劃表」"
    ],
    "enObjectives": [
      "Restate the assignment in your own words",
      "Inventory sources and gaps without inventing literature",
      "Build an executable outline and writing order",
      "List verification, citation checks, and pre-submit checks",
      "Save a Report and Homework Plan"
    ],
    "zhWhyItMatters": {
      "problem": "截止日期接近時，學生會請 AI 直接寫完整報告。",
      "ineffective": "Prompt 只有「幫我寫這份作業」。",
      "solution": "先做七段規劃表，標出不可交給 AI 的撰寫與引用核對，再自己分段寫。"
    },
    "enWhyItMatters": {
      "problem": "Near deadlines, students ask AI to write the whole paper.",
      "ineffective": "A prompt that only says “write this assignment.”",
      "solution": "Build a seven-part plan, mark writing and citation checks as must-do, then draft section by section yourself."
    },
    "zhConceptBlocks": {
      "principles": [
        "作業先拆再寫",
        "AI 不代寫正文",
        "引用與數據必須真實"
      ],
      "terms": [
        "題目理解",
        "必須自做撰寫",
        "最終檢查"
      ],
      "criteria": [
        "七段都有",
        "有大綱問題",
        "有誠信檢"
      ],
      "boundaries": [
        "避免：全文代寫",
        "避免：假數據",
        "避免：假 APA"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Break down before writing",
        "AI does not write the paper",
        "Citations and data must be real"
      ],
      "terms": [
        "Prompt understanding",
        "Must-do writing",
        "Final check"
      ],
      "criteria": [
        "Seven parts present",
        "Outline questions present",
        "Integrity check present"
      ],
      "boundaries": [
        "Avoid: full ghostwriting",
        "Avoid: fake data",
        "Avoid: fake APA"
      ]
    },
    "zhConcept": "大學作業失敗常常不是因為不夠努力，而是沒有把題目拆開：理解、蒐集、大綱、撰寫、驗證、引用、最終檢查。AI 適合幫你規劃與檢查結構，不適合產出整份可繳交正文。引用與數據都必須是你真實擁有並核對過的。",
    "enConcept": "Assignments often fail from missing a breakdown: understand, gather, outline, write, verify, cite, final check. AI is useful for planning and structure checks—not for a full submittable paper. Citations and data must be yours and verified.",
    "zhCaseStudyBlocks": {
      "problem": "小瑜三天後要交 2500 字報告，還沒有大綱。",
      "wrong": "請 AI 直接產出可繳交全文。",
      "right": "用已有筆記做七段規劃，標示不可交給 AI 的撰寫與引用，再自己寫。",
      "result": "一份可執行的「報告與作業規劃表」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Yu’s 2,500-word paper is due in three days and she has no outline.",
      "wrong": "Ask AI for a submittable full draft.",
      "right": "Build a seven-part plan from existing notes, mark writing/citations as must-do, then write herself.",
      "result": "An executable Report and Homework Plan."
    },
    "zhCaseStudy": "傳播課報告 2500 字，小瑜直接要 AI 寫全文，被偵測語氣不像她。她改成貼題目、字數、已有的兩則閱讀筆記，請 AI 只出規劃表與大綱問題。她自己按節寫，引用全部回 L6 筆記核對。",
    "enCaseStudy": "Yu asked AI for a full 2,500-word communication paper and was flagged for tone. She then pasted the prompt, length, and two reading notes, and asked only for a plan and outline questions. She wrote section by section and verified citations against her L6 notes.",
    "zhWorkflowSteps": [
      {
        "do": "重述題目",
        "why": "避免寫錯題",
        "input": "作業說明",
        "output": "我的理解",
        "check": "能否用一句話說老師要什麼"
      },
      {
        "do": "盤點資料",
        "why": "防止假文獻",
        "input": "L5/L6 成果",
        "output": "已有／缺口",
        "check": "缺口是否寫到哪查"
      },
      {
        "do": "做大綱與順序",
        "why": "避免從頭硬寫",
        "input": "規劃 Prompt",
        "output": "大綱表",
        "check": "每節是否有要回答的問題"
      },
      {
        "do": "標誠信界線",
        "why": "防代寫",
        "input": "規劃表",
        "output": "三欄標記",
        "check": "正文是否列必須自做"
      },
      {
        "do": "存檔",
        "why": "簡報課會用大綱",
        "input": "定稿",
        "output": "成果包",
        "check": "有最終檢查 8 項"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Restate the prompt",
        "why": "Avoid answering the wrong task",
        "input": "Assignment sheet",
        "output": "My understanding",
        "check": "One sentence on what is asked"
      },
      {
        "do": "Inventory sources",
        "why": "Stop fake literature",
        "input": "L5/L6 outputs",
        "output": "Have/missing",
        "check": "Missing items say where to look"
      },
      {
        "do": "Outline and order",
        "why": "Avoid writing from zero",
        "input": "Plan prompt",
        "output": "Outline table",
        "check": "Each section has a question"
      },
      {
        "do": "Mark integrity lines",
        "why": "Stop ghostwriting",
        "input": "Plan",
        "output": "Three-column labels",
        "check": "Body text marked must-do"
      },
      {
        "do": "Save",
        "why": "Slides lesson will use the outline",
        "input": "Final",
        "output": "Package",
        "check": "8 final-check items"
      }
    ],
    "zhWorkflow": [
      "用自己的話重述題目與截止條件",
      "貼上已有筆記，列出資料缺口",
      "用 Prompt 產出七段規劃表",
      "刪掉任何完整正文或假引用",
      "存檔後再開始寫第一節"
    ],
    "enWorkflow": [
      "Restate the prompt and deadline in your own words",
      "Paste existing notes and list source gaps",
      "Generate the seven-part plan",
      "Delete any full prose or fake citations",
      "Save, then write section one yourself"
    ],
    "zhPromptPack": {
      "when": "接到報告或作業、需要拆步驟而不是直接開寫時使用",
      "fields": [
        "[請填寫課程與作業標題]",
        "[請填寫老師要求／截止日期]"
      ],
      "body": "你是大學作業規劃教練，不是代寫者。不可產出可直接繳交的完整報告正文，不可捏造資料、訪談、實驗或引用。\n\n我的輸入：\n- 課程與作業標題：[請填寫]\n- 老師要求／字數／截止日期：[請填寫]\n- 我目前已有的筆記或閱讀（貼重點，不要叫我重打全部）：\n[請填寫]\n- 我卡關的地方：[請填寫]\n\n任務：產出「報告與作業規劃表」，把作業拆成：\n1) 題目理解（老師真正要什麼、評分可能看什麼——標需向課綱確認）\n2) 資料蒐集（我已有／還缺／到哪查，不編文獻）\n3) 大綱（標題層級，每節我要回答的問題）\n4) 撰寫順序（哪一節先寫，哪一節必須等資料）\n5) 驗證（哪些論點需要回筆記或原文）\n6) 引用（列出我已有來源的核對動作，不產生假 APA）\n7) 最終檢查（繳交前 8 項，含誠信：沒有整段貼 AI）\n\n輸出：表格。每一步標「我做／AI 可協助／不可交給 AI」。不要寫完整段落正文。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。\n\nAI 產生的引用、作者、年份與 DOI 都必須回到正式資料庫確認。不要把 AI 本身當成可靠學術來源。",
      "expected": "一份含理解、蒐集、大綱、撰寫、驗證、引用、最終檢查的規劃表",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：大綱品質檢查",
          "body": "請檢查我貼上的大綱：哪一節沒有問題可回答、哪一節可能變成空泛、哪一節還沒有資料來源。不要幫我寫正文。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when an assignment arrives and you need steps instead of jumping into prose",
      "fields": [
        "[Enter course and assignment title]",
        "[Enter requirements / deadline]"
      ],
      "body": "You are a university assignment-planning coach, not a ghostwriter. Do not produce a full submittable paper. Do not invent data, interviews, experiments, or citations.\n\nMy input:\n- Course and assignment title: [Enter details]\n- Instructor requirements / length / deadline: [Enter]\n- Notes or readings I already have (paste highlights; do not make me retype everything):\n[Enter]\n- Where I am stuck: [Enter]\n\nTask: Produce a “Report and Homework Plan” that splits the work into:\n1) Prompt understanding (what is actually asked; what grading may look at—flag syllabus checks)\n2) Source gathering (have / missing / where to look; do not invent literature)\n3) Outline (heading levels; the question each section must answer)\n4) Writing order (what to draft first; what must wait for sources)\n5) Verification (which claims must return to notes or the original)\n6) Citation (verification actions for sources I already have; no fake APA)\n7) Final check (8 pre-submit items, including integrity: no pasted AI paragraphs)\n\nOutput: tables. Label each step I do / AI may help / must not give to AI. Do not write full body paragraphs.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.\n\nAny citation, author, year, or DOI suggested by AI must be verified in an official database. Do not treat AI as a reliable academic source.",
      "expected": "A plan covering understanding, gathering, outline, writing order, verification, citation, and final check",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: outline quality check",
          "body": "Check my outline: which section has no question, which may stay vague, which still has no source. Do not write body text."
        }
      ]
    },
    "zhPrompt": "你是大學作業規劃教練，不是代寫者。不可產出可直接繳交的完整報告正文，不可捏造資料、訪談、實驗或引用。\n\n我的輸入：\n- 課程與作業標題：[請填寫]\n- 老師要求／字數／截止日期：[請填寫]\n- 我目前已有的筆記或閱讀（貼重點，不要叫我重打全部）：\n[請填寫]\n- 我卡關的地方：[請填寫]\n\n任務：產出「報告與作業規劃表」，把作業拆成：\n1) 題目理解（老師真正要什麼、評分可能看什麼——標需向課綱確認）\n2) 資料蒐集（我已有／還缺／到哪查，不編文獻）\n3) 大綱（標題層級，每節我要回答的問題）\n4) 撰寫順序（哪一節先寫，哪一節必須等資料）\n5) 驗證（哪些論點需要回筆記或原文）\n6) 引用（列出我已有來源的核對動作，不產生假 APA）\n7) 最終檢查（繳交前 8 項，含誠信：沒有整段貼 AI）\n\n輸出：表格。每一步標「我做／AI 可協助／不可交給 AI」。不要寫完整段落正文。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。\n\nAI 產生的引用、作者、年份與 DOI 都必須回到正式資料庫確認。不要把 AI 本身當成可靠學術來源。",
    "enPrompt": "You are a university assignment-planning coach, not a ghostwriter. Do not produce a full submittable paper. Do not invent data, interviews, experiments, or citations.\n\nMy input:\n- Course and assignment title: [Enter details]\n- Instructor requirements / length / deadline: [Enter]\n- Notes or readings I already have (paste highlights; do not make me retype everything):\n[Enter]\n- Where I am stuck: [Enter]\n\nTask: Produce a “Report and Homework Plan” that splits the work into:\n1) Prompt understanding (what is actually asked; what grading may look at—flag syllabus checks)\n2) Source gathering (have / missing / where to look; do not invent literature)\n3) Outline (heading levels; the question each section must answer)\n4) Writing order (what to draft first; what must wait for sources)\n5) Verification (which claims must return to notes or the original)\n6) Citation (verification actions for sources I already have; no fake APA)\n7) Final check (8 pre-submit items, including integrity: no pasted AI paragraphs)\n\nOutput: tables. Label each step I do / AI may help / must not give to AI. Do not write full body paragraphs.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.\n\nAny citation, author, year, or DOI suggested by AI must be verified in an official database. Do not treat AI as a reliable academic source.",
    "zhExample": "完成版「課堂報告架構」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Classroom report outline” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "題目理解",
        "standard": "有自己的話與待確認",
        "mistakes": "只複製題目",
        "check": "你能向同學講解要求嗎？"
      },
      {
        "task": "資料與大綱",
        "standard": "缺口不編文獻",
        "mistakes": "列出不存在的論文",
        "check": "每節有問題嗎？"
      },
      {
        "task": "撰寫／驗證／引用",
        "standard": "正文列必須自做",
        "mistakes": "請 AI 寫完三節",
        "check": "引用核對動作是否具體？"
      },
      {
        "task": "最終檢查並存檔",
        "standard": "含未整段貼 AI",
        "mistakes": "沒有繳交前清單",
        "check": "截止前看得完嗎？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Understand the prompt",
        "standard": "Own wording + confirms",
        "mistakes": "Only copy the sheet",
        "check": "Can you explain the task?"
      },
      {
        "task": "Sources and outline",
        "standard": "No invented literature",
        "mistakes": "List nonexistent papers",
        "check": "Does each section have a question?"
      },
      {
        "task": "Write/verify/cite",
        "standard": "Body marked must-do",
        "mistakes": "Ask AI to finish three sections",
        "check": "Are citation checks concrete?"
      },
      {
        "task": "Final check and save",
        "standard": "Includes no pasted AI paragraphs",
        "mistakes": "No pre-submit list",
        "check": "Is it finishable before the deadline?"
      }
    ],
    "zhPractice": "重述一份真實作業要求。；盤點已有筆記與缺口。；產出七段規劃表。；存成「報告與作業規劃表」。",
    "enPractice": "Restate a real assignment.; Inventory notes and gaps.; Produce the seven-part plan.; Save the Report and Homework Plan.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「課堂報告架構」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Classroom report outline” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "課堂報告架構",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Classroom report outline",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "請 AI 寫完整可繳交正文",
      "捏造問卷、訪談或實驗結果",
      "使用未核對引用",
      "大綱沒有每節要回答的問題",
      "沒有繳交前誠信檢查"
    ],
    "enCommonMistakes": [
      "Asking AI for a full submittable draft",
      "Inventing surveys, interviews, or results",
      "Using unverified citations",
      "Outline sections with no question to answer",
      "No integrity check before submit"
    ],
    "zhSummary": [
      "本堂成果：報告與作業規劃表",
      "規劃不是正文。",
      "繳交前一定做誠信檢查。"
    ],
    "enSummary": [
      "Deliverable: Report and Homework Plan",
      "A plan is not the paper.",
      "Always run an integrity check before submit."
    ],
    "zhDeliverableChecklist": [
      "已用自己的話重述作業要求",
      "已有已有／缺口資料表（未編文獻）",
      "大綱每節都有要回答的問題",
      "撰寫被標為必須自做",
      "有驗證、引用核對與繳交前檢查",
      "沒有完整可繳交正文，也沒有假數據／假引用"
    ],
    "enDeliverableChecklist": [
      "Assignment restated in your own words",
      "Have/missing source table with no invented literature",
      "Each outline section has a question",
      "Writing marked must-do",
      "Verification, citation checks, and pre-submit checks included",
      "No full submittable prose and no fake data/citations"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下這份作業老師真正要的 1 件事、你絕不會交給 AI 的 1 件事、明天要寫的 1 節。",
    "enNotePrompt": "Write the one thing the instructor really wants, one thing you will not give to AI, and the one section you will write tomorrow.",
    "zhCoachPrompt": "請檢查我的「課堂報告架構」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Classroom report outline” is concrete and actionable.",
    "zhExcellentExample": "七段齊全、三欄分工、無完整正文、無假引用、有繳交前 8 檢。",
    "enExcellentExample": "All seven parts, three-column roles, no full prose, no fake citations, 8 pre-submit checks.",
    "zhNextStep": "下一堂把報告大綱轉成「課堂簡報結構稿」，仍然自己負責論點。",
    "enNextStep": "Next, turn the report outline into a class presentation structure—you still own the argument."
  },
  {
    "estimatedTime": "約 45 分鐘 / About 45 min",
    "difficulty": "標準 / Standard",
    "id": "college-learning-L8",
    "lessonKey": "college-learning-L8",
    "zhTitle": "第8課：製作清楚的課堂簡報",
    "enTitle": "Lesson 8: Create a clear classroom presentation",
    "zhValueTip": "一頁一句話；沒核對的證據不上投影片。",
    "enValueTip": "One message per slide. Unverified evidence stays off the slide.",
    "zhOutputName": "課堂簡報結構稿",
    "enOutputName": "Class Presentation Structure Draft",
    "zhOutcome": "課堂簡報結構稿",
    "enOutcome": "Class Presentation Structure Draft",
    "zhObjectives": [
      "寫出聽眾應記住的 1 句目標",
      "排出 8–12 頁、每頁一個核心訊息",
      "為證據標示已核對／待查證／不可使用",
      "分配開場、主體、結論時間",
      "把成果存成「課堂簡報結構稿」"
    ],
    "enObjectives": [
      "Write one sentence the audience should remember",
      "Sequence 8–12 slides with one message each",
      "Label evidence as verified / needs verification / do not use",
      "Allocate opening, body, and close time",
      "Save a Class Presentation Structure Draft"
    ],
    "zhWhyItMatters": {
      "problem": "簡報頁面塞滿段落，或 AI 做了漂亮但沒有證據的圖。",
      "ineffective": "只說「幫我做 10 頁漂亮 PPT」。",
      "solution": "用已有大綱產出每頁一個訊息的結構稿，並標證據狀態。"
    },
    "enWhyItMatters": {
      "problem": "Slides packed with paragraphs, or pretty charts with no evidence.",
      "ineffective": "Asking only for “10 pretty slides.”",
      "solution": "Build a one-message-per-slide structure from your outline and label evidence status."
    },
    "zhConceptBlocks": {
      "principles": [
        "先清楚再設計",
        "一頁一訊息",
        "沒證據就不上圖"
      ],
      "terms": [
        "核心訊息",
        "證據狀態",
        "時間分配"
      ],
      "criteria": [
        "有目標句",
        "頁面可講",
        "證據可追溯"
      ],
      "boundaries": [
        "避免：假數據圖",
        "避免：長講稿",
        "避免：保證分數"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Clarity before design",
        "One message per slide",
        "No chart without evidence"
      ],
      "terms": [
        "Key message",
        "Evidence status",
        "Timing"
      ],
      "criteria": [
        "Goal sentence",
        "Speakable slides",
        "Traceable evidence"
      ],
      "boundaries": [
        "Avoid: fake data charts",
        "Avoid: long scripts",
        "Avoid: grade guarantees"
      ]
    },
    "zhConcept": "課堂簡報要先清楚再漂亮：一頁一個訊息、證據有來源狀態、時間分配合理。AI 可以幫你排頁與刪字，不能替你上台，也不能把沒有的研究做成圖表。簡報結構應來自你的作業規劃與筆記，而不是另起爐灶編故事。",
    "enConcept": "Class slides need clarity before decoration: one message per slide, evidence with source status, realistic timing. AI can sequence and cut text; it cannot present for you or turn missing research into charts. Structure should come from your assignment plan and notes—not a new invented story.",
    "zhCaseStudyBlocks": {
      "problem": "小宇 8 分鐘報告，投影片卻有 20 頁長文。",
      "wrong": "要 AI 把全文變成漂亮簡報並補圖表。",
      "right": "用大綱做每頁一訊息的結構，標證據狀態，刪沒有的數據頁。",
      "result": "可在時限內講完的「課堂簡報結構稿」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Yu has 8 minutes but 20 text-heavy slides.",
      "wrong": "Ask AI to beautify the full paper and add charts.",
      "right": "One message per slide from the outline, evidence status labeled, unsourced data slides removed.",
      "result": "A Class Presentation Structure Draft that fits the time."
    },
    "zhCaseStudy": "小宇把報告全文貼進簡報，每頁都是段落。他改用 L7 大綱請 AI 只出結構：每頁標題、一句訊息、口頭補充、不要放的字。他刪掉 AI 建議的「研究數據」頁，因為他沒有數據。",
    "enCaseStudy": "Yu pasted his full paper onto slides. Using the L7 outline, he asked AI only for structure: title, one message, spoken add-on, what to omit. He deleted a suggested “research data” slide because he had no data.",
    "zhWorkflowSteps": [
      {
        "do": "取出論點",
        "why": "簡報服務論點",
        "input": "L7 規劃",
        "output": "1 句目標",
        "check": "聽眾能否記住"
      },
      {
        "do": "排頁",
        "why": "一頁一訊息",
        "input": "大綱",
        "output": "8–12 頁",
        "check": "是否仍有長段落"
      },
      {
        "do": "標證據",
        "why": "防假圖",
        "input": "閱讀筆記",
        "output": "狀態欄",
        "check": "待查證是否不上場"
      },
      {
        "do": "砍超量與假數據",
        "why": "配合時間",
        "input": "結構稿",
        "output": "精簡版",
        "check": "能否在時限講完"
      },
      {
        "do": "存檔",
        "why": "考試前也可當複習骨架",
        "input": "定稿",
        "output": "成果包",
        "check": "有 Q&A 3 題"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Extract the argument",
        "why": "Slides serve the claim",
        "input": "L7 plan",
        "output": "One-sentence goal",
        "check": "Would the audience remember it?"
      },
      {
        "do": "Sequence slides",
        "why": "One message each",
        "input": "Outline",
        "output": "8–12 slides",
        "check": "Any leftover paragraphs?"
      },
      {
        "do": "Label evidence",
        "why": "Stop fake charts",
        "input": "Reading notes",
        "output": "Status column",
        "check": "Unverified stays offstage"
      },
      {
        "do": "Cut extras and fake data",
        "why": "Fit the time",
        "input": "Draft",
        "output": "Lean version",
        "check": "Speakable in the limit"
      },
      {
        "do": "Save",
        "why": "Also a review skeleton before exams",
        "input": "Final",
        "output": "Package",
        "check": "3 Q&A items"
      }
    ],
    "zhWorkflow": [
      "從報告規劃表取出大綱與論點",
      "用 Prompt 產出頁面結構與時間分配",
      "標示每項證據狀態",
      "刪掉沒有來源的圖表建議",
      "存成課堂簡報結構稿"
    ],
    "enWorkflow": [
      "Take outline and argument from the homework plan",
      "Generate slide structure and timing",
      "Label evidence status",
      "Delete chart suggestions without sources",
      "Save the Presentation Structure Draft"
    ],
    "zhPromptPack": {
      "when": "要把報告大綱變成可講的簡報結構時使用",
      "fields": [
        "[請填寫場合與時間限制]",
        "[請填寫核心論點]"
      ],
      "body": "你是課堂簡報結構教練，不是投影片美工，也不是代講者。不可編造數據、圖表數字或你沒有的研究結果。\n\n我的輸入：\n- 報告／簡報場合與時間限制：[請填寫]\n- 聽眾（同學／老師）：[請填寫]\n- 我已有的報告大綱或筆記重點：\n[請填寫]\n- 我必須自己講清楚的核心論點：[請填寫]\n\n任務：產出「課堂簡報結構稿」：\n1) 簡報目標（聽眾聽完應記住的 1 句）\n2) 頁面大綱（建議 8–12 頁邏輯，每頁：標題、1 個核心訊息、口頭要補的一句、不要放的內容）\n3) 證據頁：每項證據標來源狀態（已核對／待查證／不可使用）\n4) 時間分配（開場／主體／結論）\n5) Q&A 可能 3 題與我的回答要點（不要替我寫演講稿全文）\n\n限制：不要輸出可直接當講稿照念的長文；不要保證聽眾喜歡或分數。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "一份含目標、頁面邏輯、證據狀態與時間分配的簡報結構稿",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：刪字練習",
          "body": "請指出我結構稿中哪幾頁字太多，並給每頁最多 3 個詞的標題建議。不要新增我沒有的證據。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when turning a report outline into a speakable slide structure",
      "fields": [
        "[Enter occasion and time limit]",
        "[Enter core argument]"
      ],
      "body": "You are a class-presentation structure coach—not a slide decorator or a stand-in speaker. Do not invent data, chart numbers, or results you do not have.\n\nMy input:\n- Occasion and time limit: [Enter details]\n- Audience (classmates / instructor): [Enter]\n- Outline or note highlights I already have:\n[Enter]\n- The core argument I must explain myself: [Enter]\n\nTask: Produce a “Class Presentation Structure Draft”:\n1) Presentation goal (one sentence the audience should remember)\n2) Slide outline (about 8–12 slides: title, one key message, one spoken add-on, what not to put on the slide)\n3) Evidence slides: label each source as verified / needs verification / do not use\n4) Timing (opening / body / close)\n5) 3 likely Q&A questions and answer bullets (do not write a full speech)\n\nLimits: Do not output a long script to read aloud. Do not guarantee audience liking or grades.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "A structure draft with goal, slide logic, evidence status, and timing",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: cut-text practice",
          "body": "Point out slides with too much text and suggest titles of at most 3 words. Do not add evidence I do not have."
        }
      ]
    },
    "zhPrompt": "你是課堂簡報結構教練，不是投影片美工，也不是代講者。不可編造數據、圖表數字或你沒有的研究結果。\n\n我的輸入：\n- 報告／簡報場合與時間限制：[請填寫]\n- 聽眾（同學／老師）：[請填寫]\n- 我已有的報告大綱或筆記重點：\n[請填寫]\n- 我必須自己講清楚的核心論點：[請填寫]\n\n任務：產出「課堂簡報結構稿」：\n1) 簡報目標（聽眾聽完應記住的 1 句）\n2) 頁面大綱（建議 8–12 頁邏輯，每頁：標題、1 個核心訊息、口頭要補的一句、不要放的內容）\n3) 證據頁：每項證據標來源狀態（已核對／待查證／不可使用）\n4) 時間分配（開場／主體／結論）\n5) Q&A 可能 3 題與我的回答要點（不要替我寫演講稿全文）\n\n限制：不要輸出可直接當講稿照念的長文；不要保證聽眾喜歡或分數。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a class-presentation structure coach—not a slide decorator or a stand-in speaker. Do not invent data, chart numbers, or results you do not have.\n\nMy input:\n- Occasion and time limit: [Enter details]\n- Audience (classmates / instructor): [Enter]\n- Outline or note highlights I already have:\n[Enter]\n- The core argument I must explain myself: [Enter]\n\nTask: Produce a “Class Presentation Structure Draft”:\n1) Presentation goal (one sentence the audience should remember)\n2) Slide outline (about 8–12 slides: title, one key message, one spoken add-on, what not to put on the slide)\n3) Evidence slides: label each source as verified / needs verification / do not use\n4) Timing (opening / body / close)\n5) 3 likely Q&A questions and answer bullets (do not write a full speech)\n\nLimits: Do not output a long script to read aloud. Do not guarantee audience liking or grades.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "完成版「課堂簡報結構稿」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Classroom presentation structure draft” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "寫 1 句目標",
        "standard": "聽眾能重複",
        "mistakes": "只寫「介紹主題」",
        "check": "下課有人記得住嗎？"
      },
      {
        "task": "每頁一訊息",
        "standard": "8–12 頁",
        "mistakes": "把段落貼上",
        "check": "一頁能否 20 秒講完？"
      },
      {
        "task": "證據狀態",
        "standard": "沒核對的不上片",
        "mistakes": "AI 補的圖",
        "check": "來源寫得出來嗎？"
      },
      {
        "task": "時間與 Q&A 並存檔",
        "standard": "有開場主體結論",
        "mistakes": "沒有預留提問",
        "check": "超時嗎？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "One-sentence goal",
        "standard": "Audience can repeat it",
        "mistakes": "Only “introduce the topic”",
        "check": "Would anyone remember after class?"
      },
      {
        "task": "One message per slide",
        "standard": "8–12 slides",
        "mistakes": "Paste paragraphs",
        "check": "Can one slide be spoken in 20 seconds?"
      },
      {
        "task": "Evidence status",
        "standard": "Unverified off the slide",
        "mistakes": "AI-made charts",
        "check": "Can you name the source?"
      },
      {
        "task": "Timing, Q&A, save",
        "standard": "Opening/body/close",
        "mistakes": "No time for questions",
        "check": "Over time?"
      }
    ],
    "zhPractice": "準備場合與時限。；用已有大綱產出結構稿。；標證據並刪假圖表。；存成「課堂簡報結構稿」。",
    "enPractice": "Set occasion and time.; Generate structure from an existing outline.; Label evidence and delete fake charts.; Save the Presentation Structure Draft.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「課堂簡報結構稿」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Classroom presentation structure draft” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "課堂簡報結構稿",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Classroom presentation structure draft",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "每頁貼滿段落",
      "要 AI 產生沒有的數據圖",
      "沒有時間分配",
      "證據來源不明",
      "把結構稿當講稿照念"
    ],
    "enCommonMistakes": [
      "Paragraphs on every slide",
      "Asking AI for charts you do not have",
      "No timing",
      "Unclear evidence sources",
      "Reading the structure draft as a full script"
    ],
    "zhSummary": [
      "本堂成果：課堂簡報結構稿",
      "結構服務口頭表達。",
      "沒有的研究不要畫成圖。"
    ],
    "enSummary": [
      "Deliverable: Class Presentation Structure Draft",
      "Structure serves speaking.",
      "Do not chart research you do not have."
    ],
    "zhDeliverableChecklist": [
      "有聽眾應記住的 1 句目標",
      "約 8–12 頁且每頁一個核心訊息",
      "證據已標已核對／待查證／不可使用",
      "有開場／主體／結論時間分配",
      "有 3 個可能提問與回答要點",
      "沒有假數據圖，也沒有可照念的長講稿"
    ],
    "enDeliverableChecklist": [
      "One-sentence audience takeaway",
      "About 8–12 slides with one message each",
      "Evidence labeled verified / needs verification / do not use",
      "Opening/body/close timing",
      "3 likely questions with answer bullets",
      "No fake data charts and no full read-aloud script"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下你簡報的 1 句目標，以及你絕不會放上投影片的 1 種沒核對資料。",
    "enNotePrompt": "Write your one-sentence goal and one kind of unverified material you will never put on a slide.",
    "zhCoachPrompt": "請檢查我的「課堂簡報結構稿」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Classroom presentation structure draft” is concrete and actionable.",
    "zhExcellentExample": "1 句目標、8–12 頁一訊息、證據狀態、時間分配、3 題 Q&A、無假數據。",
    "enExcellentExample": "One-sentence goal, 8–12 one-message slides, evidence status, timing, 3 Q&A, no fake data.",
    "zhNextStep": "下一堂進入考試：用筆記做個人化複習計畫、題庫與錯題紀錄。",
    "enNextStep": "Next, exam prep: a personalized review plan, question bank, and error log from your notes."
  },
  {
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "中階 / Intermediate",
    "id": "college-learning-L9",
    "lessonKey": "college-learning-L9",
    "zhTitle": "第9課：建立考試複習與練習流程",
    "enTitle": "Lesson 9: Build an exam review and practice workflow",
    "zhValueTip": "計畫要能做到；練題看步驟；錯題改判斷。AI 不代考。",
    "enValueTip": "Plans must be doable; practice uses steps; errors fix judgment. AI does not take the exam.",
    "zhOutputName": "考試複習系統（複習計畫＋題庫＋錯題紀錄）",
    "enOutputName": "Exam Review System (plan + question bank + error log)",
    "zhOutcome": "考試複習系統（複習計畫＋題庫＋錯題紀錄）",
    "enOutcome": "Exam Review System (plan + question bank + error log)",
    "zhObjectives": [
      "依考試日期與可用時間排出可執行複習計畫",
      "建立概念／應用／易錯三類題庫架構",
      "用檢查步驟而非抄答案的方式自我測驗",
      "完成至少 1 則真實錯題紀錄",
      "把成果存成「考試複習系統」"
    ],
    "enObjectives": [
      "Build a finishable review plan from date and available time",
      "Create concept / application / easy-to-miss question structure",
      "Self-test with checking steps rather than copied answers",
      "Complete at least one real error-log row",
      "Save an Exam Review System"
    ],
    "zhWhyItMatters": {
      "problem": "複習不是太理想化排滿，就是請 AI 直接給答案。",
      "ineffective": "「幫我準備考試／把答案寫出來」。",
      "solution": "用真實時間做計畫，用檢查步驟練題，用錯題紀錄改判斷方式。"
    },
    "enWhyItMatters": {
      "problem": "Review is either an impossible timetable or “just give me the answers.”",
      "ineffective": "“Prepare me for the exam / write the answers.”",
      "solution": "Plan with real minutes, practice with checking steps, and fix judgment via an error log."
    },
    "zhConceptBlocks": {
      "principles": [
        "計畫必須可完成",
        "先作答再看步驟",
        "錯題改判斷不改運氣"
      ],
      "terms": [
        "熟悉程度",
        "檢查步驟",
        "下次判斷方式"
      ],
      "criteria": [
        "有時程",
        "有三類題",
        "有錯題列"
      ],
      "boundaries": [
        "避免：代考",
        "避免：完整答案卷",
        "避免：保證分數"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Plans must be finishable",
        "Attempt before steps",
        "Errors fix judgment, not luck"
      ],
      "terms": [
        "Familiarity",
        "Checking steps",
        "Next-time rule"
      ],
      "criteria": [
        "Schedule present",
        "Three item types",
        "Error row present"
      ],
      "boundaries": [
        "Avoid: exam-taking",
        "Avoid: full answer sheets",
        "Avoid: score guarantees"
      ]
    },
    "zhConcept": "考試準備不是通宵背 AI 摘要。有效系統有三塊：符合你時間的複習計畫、能練的題庫（概念／應用／易錯）、以及錯題紀錄（我的解法、錯誤原因、正確概念、下次判斷）。AI 可以出題與幫你看步驟，但不能代考，也不該給可帶進考場的完整答案卷。",
    "enConcept": "Exam prep is not an all-night AI summary. A working system has three parts: a review plan that fits your time, a practice bank (concept / application / easy-to-miss), and an error log (my solution, why wrong, correct concept, next judgment). AI can write stems and checking steps—it cannot take the exam or hand you a take-in answer sheet.",
    "zhCaseStudyBlocks": {
      "problem": "阿哲考試前五天，範圍很大，每天只有晚上 40 分鐘。",
      "wrong": "要完整答案卷，或排出每天 6 小時的假計畫。",
      "right": "用真實時間排計畫，要題幹與檢查步驟，並寫錯題判斷。",
      "result": "可執行的「考試複習系統」。"
    },
    "enCaseStudyBlocks": {
      "problem": "Zhe has five days, a large scope, and only 40 evening minutes.",
      "wrong": "Demand a full answer sheet, or a fake 6-hour-per-day plan.",
      "right": "Plan with real minutes, request stems plus checking steps, and write error judgments.",
      "result": "A doable Exam Review System."
    },
    "zhCaseStudy": "微積分期中前，阿哲請 AI「把會考的都寫出來」。他改成提供日期、每天 40 分鐘、最弱是應用題，請 AI 排 7 天與 9 題題幹＋檢查步驟。他用錯題模板記了 2 題「看到關鍵字就套錯公式」的判斷修正。",
    "enCaseStudy": "Before a calculus midterm, Zhe asked AI to “write everything that will be on the test.” He then gave the date, 40 minutes a day, and application items as the weak spot, and asked for 7 days plus 9 stems with checking steps. He logged two errors about grabbing the wrong formula from keywords.",
    "zhWorkflowSteps": [
      {
        "do": "填真實限制",
        "why": "假計畫等於沒計畫",
        "input": "日曆",
        "output": "限制卡",
        "check": "每天分鐘是否誠實"
      },
      {
        "do": "產出計畫與題型",
        "why": "三類題都要練",
        "input": "筆記重點",
        "output": "計畫＋題幹",
        "check": "是否標需對照範圍"
      },
      {
        "do": "先做再對步驟",
        "why": "防抄答案",
        "input": "題幹",
        "output": "作答",
        "check": "是否沒先看完整答案"
      },
      {
        "do": "寫錯題判斷",
        "why": "下次才改得了",
        "input": "錯題",
        "output": "紀錄列",
        "check": "有下次判斷方式嗎"
      },
      {
        "do": "存檔",
        "why": "L10 會匯入考試流",
        "input": "定稿",
        "output": "成果包",
        "check": "三塊都在嗎"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Enter real constraints",
        "why": "Fake plans fail",
        "input": "Calendar",
        "output": "Constraint card",
        "check": "Honest daily minutes"
      },
      {
        "do": "Plan and item types",
        "why": "Practice all three types",
        "input": "Note highlights",
        "output": "Plan + stems",
        "check": "Out-of-scope flagged"
      },
      {
        "do": "Attempt before steps",
        "why": "Stop copying answers",
        "input": "Stems",
        "output": "Attempts",
        "check": "Did you peek at a full key?"
      },
      {
        "do": "Write error judgment",
        "why": "Fixes future decisions",
        "input": "Missed item",
        "output": "Log row",
        "check": "Next-time rule present"
      },
      {
        "do": "Save",
        "why": "L10 will import exam flow",
        "input": "Final",
        "output": "Package",
        "check": "All three parts present"
      }
    ],
    "zhWorkflow": [
      "寫下日期、範圍、熟悉度、每天分鐘",
      "用 Prompt 產出計畫與題庫架構",
      "自己作答後才看檢查步驟",
      "至少填 1 則錯題紀錄",
      "存成考試複習系統"
    ],
    "enWorkflow": [
      "Write date, scope, familiarity, and daily minutes",
      "Generate the plan and question-bank structure",
      "Attempt items before looking at checking steps",
      "Fill at least one error-log row",
      "Save the Exam Review System"
    ],
    "zhPromptPack": {
      "when": "考試前要排複習、出練習題與整理錯題時使用",
      "fields": [
        "[請填寫科目與考試日期]",
        "[請填寫考試範圍]"
      ],
      "body": "你是考試複習教練，不是代考者。不可提供可直接帶進考場的完整答案卷，不可保證分數。\n\n我的輸入：\n- 科目與考試日期：[請填寫]\n- 考試範圍（章節／講義／題型）：[請填寫]\n- 我目前熟悉程度（1–5）與每天可用分鐘：[請填寫]\n- 我的筆記／錯題摘要（可貼 L5 重點，不要貼整本）：\n[請填寫]\n- 我最常錯的類型：[請填寫]\n\n任務：產出「考試複習系統」，含三塊：\nA. 個人化複習計畫（依日期、範圍、熟悉度、可用時間；每天任務必須可完成）\nB. 題庫架構：核心概念題、應用題、易錯題各至少 3 題（只給題幹與作答檢查步驟，不要給可抄的完整標準答案）\nC. 錯題紀錄模板示範 1 則：題目、我的解法（留白）、錯誤原因、正確概念、下次判斷方式\n\n限制：\n- 不要叫我把手機帶進考場用 AI\n- 題目若超出我提供的範圍，標「需對照老師範圍」\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "含複習計畫、題庫架構與錯題模板的考試複習系統",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：自我測驗流程",
          "body": "請根據我的題庫架構，設計一次 25 分鐘自我測驗流程（抽題、計時、對完後只看檢查步驟）。不要給完整答案卷。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use before an exam to plan review, practice questions, and an error log",
      "fields": [
        "[Enter subject and exam date]",
        "[Enter exam scope]"
      ],
      "body": "You are an exam-review coach, not a stand-in test taker. Do not provide a full answer sheet to take into the exam. Do not guarantee scores.\n\nMy input:\n- Subject and exam date: [Enter details]\n- Scope (chapters / handouts / question types): [Enter]\n- Familiarity 1–5 and minutes available per day: [Enter]\n- Note / error highlights (L5 points OK; not a whole book):\n[Enter]\n- My most common error type: [Enter]\n\nTask: Produce an “Exam Review System” with three parts:\nA. Personalized review plan (date, scope, familiarity, available time; daily tasks must be finishable)\nB. Question-bank structure: at least 3 concept, 3 application, and 3 easy-to-miss questions (stems plus checking steps; no copyable full official answers)\nC. One sample error-log row: item, my solution (blank), why wrong, correct concept, how I will judge next time\n\nLimits:\n- Do not tell me to use AI in the exam\n- If a question is outside my stated scope, mark “check against instructor scope”\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "An exam system with a review plan, question-bank structure, and error-log template",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: self-test routine",
          "body": "From my question-bank structure, design a 25-minute self-test (draw items, timebox, then use checking steps only). Do not provide a full answer key."
        }
      ]
    },
    "zhPrompt": "你是考試複習教練，不是代考者。不可提供可直接帶進考場的完整答案卷，不可保證分數。\n\n我的輸入：\n- 科目與考試日期：[請填寫]\n- 考試範圍（章節／講義／題型）：[請填寫]\n- 我目前熟悉程度（1–5）與每天可用分鐘：[請填寫]\n- 我的筆記／錯題摘要（可貼 L5 重點，不要貼整本）：\n[請填寫]\n- 我最常錯的類型：[請填寫]\n\n任務：產出「考試複習系統」，含三塊：\nA. 個人化複習計畫（依日期、範圍、熟悉度、可用時間；每天任務必須可完成）\nB. 題庫架構：核心概念題、應用題、易錯題各至少 3 題（只給題幹與作答檢查步驟，不要給可抄的完整標準答案）\nC. 錯題紀錄模板示範 1 則：題目、我的解法（留白）、錯誤原因、正確概念、下次判斷方式\n\n限制：\n- 不要叫我把手機帶進考場用 AI\n- 題目若超出我提供的範圍，標「需對照老師範圍」\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are an exam-review coach, not a stand-in test taker. Do not provide a full answer sheet to take into the exam. Do not guarantee scores.\n\nMy input:\n- Subject and exam date: [Enter details]\n- Scope (chapters / handouts / question types): [Enter]\n- Familiarity 1–5 and minutes available per day: [Enter]\n- Note / error highlights (L5 points OK; not a whole book):\n[Enter]\n- My most common error type: [Enter]\n\nTask: Produce an “Exam Review System” with three parts:\nA. Personalized review plan (date, scope, familiarity, available time; daily tasks must be finishable)\nB. Question-bank structure: at least 3 concept, 3 application, and 3 easy-to-miss questions (stems plus checking steps; no copyable full official answers)\nC. One sample error-log row: item, my solution (blank), why wrong, correct concept, how I will judge next time\n\nLimits:\n- Do not tell me to use AI in the exam\n- If a question is outside my stated scope, mark “check against instructor scope”\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "完成版「考試複習表」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Exam review plan sheet” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "可執行計畫",
        "standard": "每天任務不超過可用時間",
        "mistakes": "排滿到睡不夠",
        "check": "今晚做得到嗎？"
      },
      {
        "task": "三類題庫",
        "standard": "各≥3 且有檢查步驟",
        "mistakes": "只要答案",
        "check": "能否先自己做？"
      },
      {
        "task": "錯題紀錄",
        "standard": "五欄齊",
        "mistakes": "只寫「粗心」",
        "check": "下次判斷具體嗎？"
      },
      {
        "task": "存檔",
        "standard": "不含完整答案卷",
        "mistakes": "把答案帶去考場",
        "check": "有沒有代考暗示？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Doable plan",
        "standard": "Daily tasks fit minutes",
        "mistakes": "Sleep-destroying schedule",
        "check": "Can you do tonight’s task?"
      },
      {
        "task": "Three item types",
        "standard": "≥3 each with checking steps",
        "mistakes": "Answers only",
        "check": "Can you attempt first?"
      },
      {
        "task": "Error log",
        "standard": "Five fields",
        "mistakes": "Only “careless”",
        "check": "Is the next-time rule specific?"
      },
      {
        "task": "Save",
        "standard": "No full take-in key",
        "mistakes": "Carry answers into the exam",
        "check": "Any exam-taking hint?"
      }
    ],
    "zhPractice": "填考試限制。；產出計畫與三類題幹。；自我測驗並寫 1 則錯題。；存成「考試複習系統」。",
    "enPractice": "Enter exam constraints.; Produce a plan and three item types.; Self-test and log one error.; Save the Exam Review System.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「考試複習表」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Exam review plan sheet” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "考試複習表",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Exam review plan sheet",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "請 AI 代考或給完整答案卷",
      "複習計畫不符合真實時間",
      "只有概念題沒有應用／易錯題",
      "錯題只寫「粗心」",
      "超出老師宣布的範圍卻不標註"
    ],
    "enCommonMistakes": [
      "Asking AI to take the exam or give a full key",
      "A review plan that ignores real time",
      "Only concept items, no application / easy-to-miss",
      "Error log that only says “careless”",
      "Items outside announced scope with no flag"
    ],
    "zhSummary": [
      "本堂成果：考試複習系統",
      "AI 不出考場。",
      "錯題是為了下次判斷。"
    ],
    "enSummary": [
      "Deliverable: Exam Review System",
      "AI does not enter the exam hall.",
      "Error logs exist to change next-time judgment."
    ],
    "zhDeliverableChecklist": [
      "複習計畫符合考試日期與每天可用時間",
      "題庫含核心概念／應用／易錯各至少 3 題",
      "題目附檢查步驟而非可抄完整答案",
      "至少 1 則錯題含錯誤原因與下次判斷",
      "超出範圍的題已標需對照老師範圍",
      "沒有代考或把答案卷帶進考場的作法"
    ],
    "enDeliverableChecklist": [
      "Review plan fits exam date and daily minutes",
      "Bank includes ≥3 concept, application, and easy-to-miss items",
      "Items have checking steps, not copyable full answers",
      "At least one error row with cause and next-time rule",
      "Out-of-scope items flagged",
      "No exam-taking or take-in answer sheet"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下明天複習的 1 個任務、你最弱的 1 類題，以及 1 條下次看到類似題的判斷句。",
    "enNotePrompt": "Write tomorrow’s one review task, your weakest item type, and one next-time judgment sentence.",
    "zhCoachPrompt": "請檢查我的「考試複習表」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Exam review plan sheet” is concrete and actionable.",
    "zhExcellentExample": "含可執行計畫、9 題以上題幹＋檢查步驟、1 則五欄錯題、無代考內容。",
    "enExcellentExample": "Includes a doable plan, 9+ stems with checking steps, one five-field error row, no exam-taking content.",
    "zhNextStep": "最後一堂不重新填所有資料，而是把前 9 堂成果整合成「我的 AI 大學學習工作流」。",
    "enNextStep": "The last lesson does not re-enter everything—it compiles the first 9 outputs into your AI university learning workflow."
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "中階 / Intermediate",
    "id": "college-learning-L10",
    "lessonKey": "college-learning-L10",
    "zhTitle": "第10課：整合個人 AI 大學學習系統",
    "enTitle": "Lesson 10: Integrate your personal AI university learning system",
    "zhValueTip": "整合重於重寫；缺漏下週補摘要，不重填全部。",
    "enValueTip": "Integrate rather than rewrite. Next week adds summaries—not a full re-entry.",
    "zhOutputName": "我的 AI 大學學習工作流",
    "enOutputName": "My AI University Learning Workflow",
    "zhOutcome": "我的 AI 大學學習工作流",
    "enOutcome": "My AI University Learning Workflow",
    "zhObjectives": [
      "用前課成果摘要編成九段工作流",
      "標出尚未完成的堂次與下週補法",
      "寫出本週反思與下一週調整",
      "寫下 5 條學術誠信總則",
      "把成果存成「我的 AI 大學學習工作流」"
    ],
    "enObjectives": [
      "Compile nine workflow stages from prior highlights",
      "Mark unfinished lessons and next-week patches",
      "Write this-week reflection and next-week adjustment",
      "Write 5 academic-integrity rules",
      "Save My AI University Learning Workflow"
    ],
    "zhWhyItMatters": {
      "problem": "十堂課若不相接，學生只剩 10 份互不相關的文件。",
      "ineffective": "從頭再寫一份「我的學習系統」長文。",
      "solution": "貼各堂重點摘要，編成九段流程、缺漏清單與下一週調整。"
    },
    "enWhyItMatters": {
      "problem": "If the ten lessons do not connect, you only have 10 unrelated files.",
      "ineffective": "Writing a brand-new long essay called “my system.”",
      "solution": "Paste highlights, compile nine stages, a gap list, and next-week adjustments."
    },
    "zhConceptBlocks": {
      "principles": [
        "整合不重寫",
        "每週可重複",
        "缺漏要誠實"
      ],
      "terms": [
        "工作流",
        "缺漏清單",
        "下一週調整"
      ],
      "criteria": [
        "九段齊",
        "有反思",
        "有誠信總則"
      ],
      "boundaries": [
        "避免：重填全部",
        "避免：證書宣稱",
        "避免：保證成績"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Integrate, don’t rewrite",
        "Repeat weekly",
        "Be honest about gaps"
      ],
      "terms": [
        "Workflow",
        "Gap list",
        "Next-week adjustment"
      ],
      "criteria": [
        "Nine stages",
        "Reflection present",
        "Integrity rules present"
      ],
      "boundaries": [
        "Avoid: full re-entry",
        "Avoid: certificate claims",
        "Avoid: grade guarantees"
      ]
    },
    "zhConcept": "第 10 課不是再做一篇新文章，而是把前 9 堂成果編成可重複使用的 AI 大學學習工作流：課前、課堂、課後、作業、閱讀、複習、考試、錯題、反思。缺的項目標成下週補摘要，不要重填全部。系統要含誠信總則，且不宣稱學校認證或保證成績。",
    "enConcept": "Lesson 10 is not another essay. It compiles the first 9 outputs into a reusable AI university learning workflow: pre-class, class, after-class, homework, reading, review, exams, errors, reflection. Missing items become next-week summary tasks—not a full rewrite. Include integrity rules. Do not claim certification or guaranteed grades.",
    "zhCaseStudyBlocks": {
      "problem": "小瑜上完 9 堂，檔案分散，下週不知先做哪一段。",
      "wrong": "重寫全部內容，或宣稱已有正式證書。",
      "right": "只貼摘要，編成九段流程、缺漏與反思，並寫誠信總則。",
      "result": "一頁可重複使用的「我的 AI 大學學習工作流」。"
    },
    "enCaseStudyBlocks": {
      "problem": "After 9 lessons Yu’s files are scattered and she does not know what to run next week.",
      "wrong": "Rewrite everything, or claim an official certificate.",
      "right": "Paste highlights only; compile stages, gaps, reflection, and integrity rules.",
      "result": "A one-page reusable AI University Learning Workflow."
    },
    "zhCaseStudy": "小瑜把 9 份檔案都重貼一次，AI 產出超長重複文。她改成每堂只貼 5 行重點，標 L4 尚未做。工作流變成一頁：每天對應階段、缺 L4 就「下次遇到圖表再補解讀單」。她另外寫了本週卡住報告開頭、已改善提問方式、下週只加強錯題 2 則。",
    "enCaseStudy": "Yu pasted all 9 full files and got a repetitive essay. She then pasted five-line highlights per lesson and marked L4 unfinished. The workflow became one page: daily stages, and “add a courseware sheet next time I hit a figure.” She also noted a stuck report opening, improved questioning, and two error-log rows for next week.",
    "zhWorkflowSteps": [
      {
        "do": "匯入摘要而非全文",
        "why": "避免重填",
        "input": "成果包",
        "output": "9 段重點",
        "check": "缺的是否標尚未完成"
      },
      {
        "do": "編成九段流程",
        "why": "系統要能週而復始",
        "input": "摘要",
        "output": "工作流",
        "check": "是否含課前到反思"
      },
      {
        "do": "補誠信總則",
        "why": "這門課的底線",
        "input": "工作流",
        "output": "5 條",
        "check": "是否含不代寫不代考"
      },
      {
        "do": "反思與下週調整",
        "why": "系統要能迭代",
        "input": "本週狀況",
        "output": "調整 3 點",
        "check": "是否具體可做"
      },
      {
        "do": "存入成果包",
        "why": "之後每週沿用",
        "input": "定稿",
        "output": "系統包",
        "check": "有沒有保證成績用詞"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Import highlights, not full files",
        "why": "Avoid re-entry",
        "input": "Package",
        "output": "9 highlights",
        "check": "Missing marked unfinished"
      },
      {
        "do": "Compile nine stages",
        "why": "The system must loop weekly",
        "input": "Highlights",
        "output": "Workflow",
        "check": "Pre-class through reflection"
      },
      {
        "do": "Add integrity rules",
        "why": "This course’s floor",
        "input": "Workflow",
        "output": "5 rules",
        "check": "No ghostwriting or exam-taking"
      },
      {
        "do": "Reflect and adjust",
        "why": "Systems must iterate",
        "input": "This week",
        "output": "3 adjustments",
        "check": "Concrete and doable"
      },
      {
        "do": "Save to package",
        "why": "Reuse each week",
        "input": "Final",
        "output": "System pack",
        "check": "No grade-guarantee wording"
      }
    ],
    "zhWorkflow": [
      "從成果包複製各堂重點（缺的標尚未完成）",
      "用 Prompt 編成九段工作流",
      "檢查每段都有不可交給 AI 的項目",
      "寫反思與下一週調整",
      "存成我的 AI 大學學習工作流"
    ],
    "enWorkflow": [
      "Copy highlights from the package (mark missing lessons)",
      "Compile nine workflow stages with the prompt",
      "Check each stage has a must-not-give-to-AI item",
      "Write reflection and next-week adjustment",
      "Save My AI University Learning Workflow"
    ],
    "zhPromptPack": {
      "when": "完成本課前 9 堂、要把系統收成一頁工作流時使用",
      "fields": [
        "[請填寫或貼重點]",
        "[請填寫本週卡住的位置]"
      ],
      "body": "你是學習系統整合教練。不要要求使用者重新輸入前 9 堂的全部內容。你的工作是把「已有成果摘要」編成可重複使用的工作流，並做反思，而不是另做一套新作業。\n\n我可能貼上的前課成果摘要（缺的就標「本項尚未完成」）：\n1) 規劃表：[請填寫或貼重點]\n2) 概念拆解：[請填寫或貼重點]\n3) 教材理解：[請填寫或貼重點]\n4) 課件解讀：[請填寫或貼重點]\n5) 課堂筆記系統：[請填寫或貼重點]\n6) 閱讀筆記：[請填寫或貼重點]\n7) 作業規劃：[請填寫或貼重點]\n8) 簡報結構：[請填寫或貼重點]\n9) 考試複習系統：[請填寫或貼重點]\n\n另請根據我的本週狀況：\n- 本週卡住的位置：[請填寫]\n- 已改善的問題：[請填寫]\n- 尚待加強：[請填寫]\n\n任務：產出「我的 AI 大學學習工作流」：\nA. 九段流程：課前準備、課堂筆記、課後整理、作業、閱讀、複習、考試、錯題、反思——每段寫：我做什麼／AI 可協助／不可交給 AI／使用哪一堂成果\nB. 缺漏清單（哪一堂還沒有成果，下週補什麼，不要重填全部）\nC. 本週反思與下一週調整（具體、可執行）\nD. 誠信總則 5 條（不代寫、不代考、不造引用、不造數據、重要內容回教材／老師／資料庫）\n\n不要宣稱這是學校認證或保證成績。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "expected": "含九段流程、缺漏清單與反思調整的學習工作流",
      "revisionReminder": "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
      "extensions": [
        {
          "title": "延伸：下週一頁行程",
          "body": "只根據工作流與我的可用時間，排出下週 5 天、每天最多 2 格的行程。缺的成果用「補 Lx 摘要」表示，不要叫我重寫全文。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use after the first 9 lessons to compile one-page workflow",
      "fields": [
        "[Enter or paste highlights]",
        "[Enter where you got stuck this week]"
      ],
      "body": "You are a learning-system integrator. Do not require the user to retype all 9 prior outputs. Compile existing summaries into a reusable workflow plus reflection—not a brand-new assignment.\n\nI may paste prior output summaries (if missing, mark “not finished yet”):\n1) Plan: [Enter or paste highlights]\n2) Concept breakdown: [Enter or paste highlights]\n3) Material notes: [Enter or paste highlights]\n4) Courseware sheet: [Enter or paste highlights]\n5) Class notes system: [Enter or paste highlights]\n6) Reading notes: [Enter or paste highlights]\n7) Assignment plan: [Enter or paste highlights]\n8) Slide structure: [Enter or paste highlights]\n9) Exam review system: [Enter or paste highlights]\n\nAlso my week:\n- Where I got stuck: [Enter]\n- What already improved: [Enter]\n- What still needs work: [Enter]\n\nTask: Produce “My AI University Learning Workflow”:\nA. Nine stages: pre-class, class notes, after-class, homework, reading, review, exams, error log, reflection—each with I do / AI may help / must not give to AI / which lesson output to use\nB. Gap list (which lessons have no output yet; what to add next week—do not re-enter everything)\nC. This-week reflection and next-week adjustment (concrete and doable)\nD. 5 integrity rules (no ghostwriting, no exam-taking, no fake citations, no fake data, verify against materials/instructor/database)\n\nDo not claim school certification or guaranteed grades.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "expected": "A learning workflow with nine stages, a gap list, and reflection adjustments",
      "revisionReminder": "Use the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
      "extensions": [
        {
          "title": "Extension: next-week one-pager",
          "body": "From the workflow and my available time, draft 5 days with at most 2 blocks each. Represent missing outputs as “add Lx summary”—do not ask me to rewrite full documents."
        }
      ]
    },
    "zhPrompt": "你是學習系統整合教練。不要要求使用者重新輸入前 9 堂的全部內容。你的工作是把「已有成果摘要」編成可重複使用的工作流，並做反思，而不是另做一套新作業。\n\n我可能貼上的前課成果摘要（缺的就標「本項尚未完成」）：\n1) 規劃表：[請填寫或貼重點]\n2) 概念拆解：[請填寫或貼重點]\n3) 教材理解：[請填寫或貼重點]\n4) 課件解讀：[請填寫或貼重點]\n5) 課堂筆記系統：[請填寫或貼重點]\n6) 閱讀筆記：[請填寫或貼重點]\n7) 作業規劃：[請填寫或貼重點]\n8) 簡報結構：[請填寫或貼重點]\n9) 考試複習系統：[請填寫或貼重點]\n\n另請根據我的本週狀況：\n- 本週卡住的位置：[請填寫]\n- 已改善的問題：[請填寫]\n- 尚待加強：[請填寫]\n\n任務：產出「我的 AI 大學學習工作流」：\nA. 九段流程：課前準備、課堂筆記、課後整理、作業、閱讀、複習、考試、錯題、反思——每段寫：我做什麼／AI 可協助／不可交給 AI／使用哪一堂成果\nB. 缺漏清單（哪一堂還沒有成果，下週補什麼，不要重填全部）\nC. 本週反思與下一週調整（具體、可執行）\nD. 誠信總則 5 條（不代寫、不代考、不造引用、不造數據、重要內容回教材／老師／資料庫）\n\n不要宣稱這是學校認證或保證成績。\n\n請將 AI 回答作為學習輔助，不要直接當作作業答案提交。重要內容請回到教材、教師說明或正式來源查證。",
    "enPrompt": "You are a learning-system integrator. Do not require the user to retype all 9 prior outputs. Compile existing summaries into a reusable workflow plus reflection—not a brand-new assignment.\n\nI may paste prior output summaries (if missing, mark “not finished yet”):\n1) Plan: [Enter or paste highlights]\n2) Concept breakdown: [Enter or paste highlights]\n3) Material notes: [Enter or paste highlights]\n4) Courseware sheet: [Enter or paste highlights]\n5) Class notes system: [Enter or paste highlights]\n6) Reading notes: [Enter or paste highlights]\n7) Assignment plan: [Enter or paste highlights]\n8) Slide structure: [Enter or paste highlights]\n9) Exam review system: [Enter or paste highlights]\n\nAlso my week:\n- Where I got stuck: [Enter]\n- What already improved: [Enter]\n- What still needs work: [Enter]\n\nTask: Produce “My AI University Learning Workflow”:\nA. Nine stages: pre-class, class notes, after-class, homework, reading, review, exams, error log, reflection—each with I do / AI may help / must not give to AI / which lesson output to use\nB. Gap list (which lessons have no output yet; what to add next week—do not re-enter everything)\nC. This-week reflection and next-week adjustment (concrete and doable)\nD. 5 integrity rules (no ghostwriting, no exam-taking, no fake citations, no fake data, verify against materials/instructor/database)\n\nDo not claim school certification or guaranteed grades.\n\nUse the AI response as a learning aid rather than submitting it as your own work. Verify important information against course materials, instructor guidance, or authoritative sources.",
    "zhExample": "完成版「個人 AI 大學學習系統總覽」應能在下一次相關課程任務中直接打開使用，並標註來源與待查證點。",
    "enExample": "A finished “Personal AI university learning system overview” should be ready for the next related class task, with sources and verification notes.",
    "zhPracticeSteps": [
      {
        "task": "匯入而非重寫",
        "standard": "缺項標尚未完成",
        "mistakes": "要求重打全部",
        "check": "有沒有逼自己重填？"
      },
      {
        "task": "九段都有界線",
        "standard": "每段有不可交給 AI",
        "mistakes": "某段空白",
        "check": "考試段是否禁止代考？"
      },
      {
        "task": "反思具體",
        "standard": "卡住／已改善／下週調整",
        "mistakes": "只寫「再加油」",
        "check": "下週行動能否開始？"
      },
      {
        "task": "存檔",
        "standard": "無證書／保證成績宣稱",
        "mistakes": "寫成學校認證",
        "check": "用語是否誠實？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Import, don’t rewrite",
        "standard": "Missing marked unfinished",
        "mistakes": "Retype everything",
        "check": "Did you force a full re-entry?"
      },
      {
        "task": "Boundaries in nine stages",
        "standard": "Each stage has must-not-give-to-AI",
        "mistakes": "A blank stage",
        "check": "Does the exam stage forbid exam-taking?"
      },
      {
        "task": "Concrete reflection",
        "standard": "Stuck / improved / next week",
        "mistakes": "Only “try harder”",
        "check": "Can next week start?"
      },
      {
        "task": "Save",
        "standard": "No certificate or grade-guarantee claims",
        "mistakes": "Call it school-certified",
        "check": "Is the wording honest?"
      }
    ],
    "zhPractice": "貼前課重點摘要（缺則標尚未完成）。；產出九段工作流與缺漏清單。；寫反思與下週調整。；存成「我的 AI 大學學習工作流」。",
    "enPractice": "Paste prior highlights (mark missing).; Produce nine stages and a gap list.; Write reflection and next-week adjustment.; Save My AI University Learning Workflow.",
    "zhFeedbackPrompt": "請依完整度、正確性、結構清晰度、可實際使用程度評分我的「個人 AI 大學學習系統總覽」，指出是否偏離課堂學習，並給出三個修改建議。",
    "enFeedbackPrompt": "Score my “Personal AI university learning system overview” on completeness, correctness, clarity, and usability. Flag any drift away from classroom learning and give three fixes.",
    "zhQuizItems": [
      {
        "q": "本課唯一應產出的成果是？",
        "options": [
          "個人 AI 大學學習系統總覽",
          "履歷與求職信",
          "創業商業模式"
        ],
        "answer": 0,
        "explain": "本課只服務大學學習能力。"
      },
      {
        "q": "使用 AI 後仍必須做的是？",
        "options": [
          "查證與自己改寫關鍵判斷",
          "直接繳交未檢查內容",
          "刪除所有自己的筆記"
        ],
        "answer": 0,
        "explain": "理解與責任仍在你。"
      },
      {
        "q": "哪種做法最不符合本課？",
        "options": [
          "把未查證 AI 全文當作最終繳交",
          "用 AI 協助結構後自己改寫",
          "用檢查表確認完成標準"
        ],
        "answer": 0,
        "explain": "未查證繳交不可接受。"
      }
    ],
    "enQuizItems": [
      {
        "q": "This lesson’s single deliverable is?",
        "options": [
          "Personal AI university learning system overview",
          "Resume and cover letter",
          "Startup business model"
        ],
        "answer": 0,
        "explain": "This course serves university learning only."
      },
      {
        "q": "After using AI you must still?",
        "options": [
          "Verify and rewrite key judgments",
          "Submit unchecked text",
          "Delete your own notes"
        ],
        "answer": 0,
        "explain": "Understanding stays yours."
      },
      {
        "q": "Which practice is unacceptable?",
        "options": [
          "Submit unchecked AI text as final work",
          "Use AI for structure then revise",
          "Use a checklist"
        ],
        "answer": 0,
        "explain": "Unchecked submission is not allowed."
      }
    ],
    "zhRubric": [
      {
        "name": "完整度",
        "levels": {
          "incomplete": "缺關鍵區塊",
          "basic": "內容過少",
          "good": "主要區塊齊全",
          "ready": "可直接使用"
        }
      },
      {
        "name": "正確性",
        "levels": {
          "incomplete": "有明顯錯誤",
          "basic": "部分含糊",
          "good": "大致正確",
          "ready": "經得起檢查"
        }
      },
      {
        "name": "結構清晰度",
        "levels": {
          "incomplete": "雜亂",
          "basic": "略有結構",
          "good": "層次清楚",
          "ready": "他人可直接套用"
        }
      },
      {
        "name": "可實際使用程度",
        "levels": {
          "incomplete": "無法用於下堂課",
          "basic": "需大幅修改",
          "good": "本週可用",
          "ready": "可長期重用"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Completeness",
        "levels": {
          "incomplete": "Missing parts",
          "basic": "Too thin",
          "good": "Main parts present",
          "ready": "Ready to use"
        }
      },
      {
        "name": "Correctness",
        "levels": {
          "incomplete": "Clear errors",
          "basic": "Some vagueness",
          "good": "Mostly correct",
          "ready": "Withstands checks"
        }
      },
      {
        "name": "Clarity",
        "levels": {
          "incomplete": "Messy",
          "basic": "Some structure",
          "good": "Clear hierarchy",
          "ready": "Reusable by others"
        }
      },
      {
        "name": "Usability",
        "levels": {
          "incomplete": "Not usable next class",
          "basic": "Needs rewrite",
          "good": "Usable this week",
          "ready": "Long-term reusable"
        }
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "只有摘要沒有自己的判斷",
        "why": "無法形成能力",
        "fix": "標出你同意／不同意／需查證處"
      },
      {
        "error": "成果與標題不一致",
        "why": "學習目標漂移",
        "fix": "回到本課唯一成果檢查"
      },
      {
        "error": "未回原文或作業要求核對",
        "why": "可能漏重點或跑題",
        "fix": "保存前做一次來源核對"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Summary without judgment",
        "why": "No skill built",
        "fix": "Mark agree / disagree / verify"
      },
      {
        "error": "Deliverable mismatches the lesson",
        "why": "Goal drift",
        "fix": "Return to the single outcome"
      },
      {
        "error": "No verification against source/brief",
        "why": "Missed emphasis or off-topic",
        "fix": "Do one source check before saving"
      }
    ],
    "zhCommonMistakes": [
      "要求重新輸入前 9 堂全部原文",
      "工作流沒有「不可交給 AI」欄",
      "宣稱正式證書或保證成績",
      "反思只寫加油",
      "把缺漏假裝成已完成"
    ],
    "enCommonMistakes": [
      "Requiring a full re-entry of all 9 outputs",
      "A workflow with no must-not-give-to-AI column",
      "Claiming official certificates or guaranteed grades",
      "Reflection that only says try harder",
      "Pretending gaps are finished"
    ],
    "zhSummary": [
      "本堂成果：我的 AI 大學學習工作流",
      "系統要能每週再跑。",
      "這不是學校證書。"
    ],
    "enSummary": [
      "Deliverable: My AI University Learning Workflow",
      "The system should run again next week.",
      "This is not a school certificate."
    ],
    "zhDeliverableChecklist": [
      "九段流程都有我做／AI 可協助／不可交給 AI",
      "有標示尚未完成的堂次，沒有假裝齊套",
      "有本週反思與下一週具體調整",
      "有 5 條誠信總則",
      "沒有要求重填前 9 堂全部原文",
      "沒有學校認證、保證成績或其他不存在的平台功能宣稱"
    ],
    "enDeliverableChecklist": [
      "Nine stages include I do / AI may help / must not give to AI",
      "Unfinished lessons marked; nothing faked as complete",
      "This-week reflection and concrete next-week adjustment",
      "5 integrity rules included",
      "No demand to retype all 9 prior outputs",
      "No school certification, grade guarantee, or nonexistent platform claims"
    ],
    "zhScorecard": [
      "完整度",
      "正確性",
      "結構清晰度",
      "可實際使用程度"
    ],
    "enScorecard": [
      "Completeness",
      "Correctness",
      "Clarity",
      "Usability"
    ],
    "zhNotePrompt": "寫下你下週要跑的 1 個階段、1 個缺漏要補的摘要，以及 1 條你會遵守的紅線。",
    "enNotePrompt": "Write the one stage you will run next week, one missing summary to add, and one red line you will keep.",
    "zhCoachPrompt": "請檢查我的「個人 AI 大學學習系統總覽」是否具體可執行，並指出空泛之處。",
    "enCoachPrompt": "Check whether my “Personal AI university learning system overview” is concrete and actionable.",
    "zhExcellentExample": "九段流程、缺漏誠實、反思可執行、5 條誠信、無認證宣稱。",
    "enExcellentExample": "Nine stages, honest gaps, doable reflection, 5 integrity rules, no certification claims.",
    "zhNextStep": "把這份工作流存進學習系統包，下週從缺漏清單的第一項開始實際跑一次。不必重寫全部前課。",
    "enNextStep": "Save this workflow to your learning-system package and run the first gap item next week. You do not need to rewrite prior lessons."
  }
],
  "research-competition": [
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "入門 / Beginner",
    "zhTitle": "第1課：把興趣變成可研究的題目",
    "enTitle": "Lesson 1: Turn interests into researchable topics",
    "zhValueTip": "先說清楚問題，再談 AI 或競賽題目；沒有對象與範圍，就還不能開始搜文獻。",
    "enValueTip": "Clarify the problem before AI or competition themes. Without a population and scope, do not start a literature search.",
    "zhOutcome": "研究問題定義表",
    "enOutcome": "Research Problem Definition",
    "zhConcept": "這一課只解決「問題還沒說清楚」。可研究題目需要對象、可觀察的現象、範圍，以及你真的碰得到的資料路徑。AI 可以幫你把過大興趣收窄，但不能發明田野、受訪者或社會統計來證明題目值得做。本課成果是研究問題定義表，不是文獻清單，也不是已經完成的研究發現。",
    "enConcept": "This lesson only solves an unclear problem. A researchable topic needs a population, an observable phenomenon, a scope, and a real data path. AI can narrow a broad interest; it cannot invent fieldwork, participants, or statistics. The deliverable is a Research Problem Definition—not a literature list or findings.",
    "zhCaseStudy": "傳播系大二生阿凱一開始只寫「我想做校園外送的 AI 題目」。AI 問他：你實際看得到誰、在什麼情境、什麼行為不清楚？他改成：平日 21:00 後、住校且使用外送 App 的學生，如何在「懶得走路」與「預算」之間決定是否下單。不研究什麼：平台後台演算法、外送員勞動條件。可行性黃燈：還沒有訪談對象名單，但可在宿舍樓層做小範圍邀請。他沒有讓 AI 編造「已有 200 份問卷」。",
    "enCaseStudy": "Kai first wrote “I want an AI topic on campus delivery.” After clarifying who, when, and what decision is unclear, he scoped nighttime dorm students choosing whether to order. Out of scope: platform algorithms and courier labor. Feasibility yellow: no interview list yet, but he can invite on his floor. He did not let AI invent 200 survey responses.",
    "zhWorkflow": [
      "寫出現象與可接觸對象",
      "填對象／核心問題／範圍／不研究什麼",
      "用主 Prompt 產出定義表",
      "刪虛構統計",
      "存成研究問題定義表"
    ],
    "enWorkflow": [
      "Write the phenomenon and accessible people",
      "Fill population, problem, scope, exclusions",
      "Run the main prompt",
      "Remove invented stats",
      "Save the Research Problem Definition"
    ],
    "zhCommonMistakes": [
      "把做 App 當研究問題",
      "沒有對象與時間邊界",
      "讓 AI 虛構研究價值或已完成訪談",
      "題目大到一學期做不完",
      "跳過「不研究什麼」"
    ],
    "enCommonMistakes": [
      "Treating an app as a research problem",
      "No population or time bound",
      "Letting AI invent importance or interviews",
      "Too big for one semester",
      "Skipping exclusions"
    ],
    "zhExcellentExample": "六欄完整、無虛構數字、有不研究什麼、黃燈有下一步。",
    "enExcellentExample": "Six fields complete, no invented numbers, exclusions listed, yellow light has a next step.",
    "zhPrompt": "你是大學研究問題教練，不是代寫者，也不可幫學生發明研究價值或田野。\n\n我的背景：\n- 年級／科系：[請填寫年級與科系]\n- 觀察到的現象：[請填寫觀察到的現象]\n- 我想研究什麼（草稿）：[請填寫研究問題]\n- 可能接觸到的對象或資料：[請填寫]\n- 一學期可投入時間：[請填寫]\n- 這次是課堂專題／競賽／個人研究：[請填寫]\n\n任務：產出「研究問題定義表」，必須包含：\n1) 我想研究什麼（1 段，禁止空泛的「我想做 AI 題目」）\n2) 為什麼值得研究（只根據我提供的觀察；不得虛構社會重要性或統計）\n3) 目標對象\n4) 核心問題（可追問的現象，不是產品功能清單）\n5) 問題範圍（對象／時間／情境）\n6) 不研究什麼\n7) 可行性燈號：綠／黃／紅，並說明缺了什麼真實資料路徑\n\n輸出格式：表格 + 條列。每個主張旁標「根據你提供的資料」或「需自行查證」。\n不要保證競賽得獎，不要把題目改寫成 App 規格。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a university research-question coach—not a ghostwriter. Do not invent research value or fieldwork.\n\nMy background:\n- Year / major: [Enter year and major]\n- Observed phenomenon: [Enter observed phenomenon]\n- Draft of what I want to study: [Enter research question]\n- People or data I can actually access: [Enter access]\n- Time this semester: [Enter available time]\n- Course project / competition / personal research: [Enter context]\n\nTask: Produce a Research Problem Definition with:\n1) What I want to study (not “I want to do an AI topic”)\n2) Why it may be worth studying (only from my observations; invent no statistics)\n3) Target population\n4) Core problem (a question about a phenomenon, not a product spec)\n5) Scope (who / when / setting)\n6) What I will not study\n7) Feasibility lights green/yellow/red and missing real data paths\n\nFormat: tables plus bullets. Label claims as “based on your input” or “verify yourself”.\nNo prize guarantees; do not rewrite the topic into app features.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的研究問題定義表是否可研究、範圍是否過大、有沒有虛構統計。不要幫我編造資料。",
    "enCoachPrompt": "Check whether my Research Problem Definition is researchable and scoped. Invent no data.",
    "zhFeedbackPrompt": "你是一位大學專題研究導師。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 題目可研究性\n- 問題意識清楚度\n- 範圍是否可完成\n- 資料路徑真實性\n- 是否停留在選題而非跑題\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
    "enFeedbackPrompt": "Act as a university research advisor. Score 1-10 for: Researchability, Clarity of rationale, Scope realism, Data-path realism, Staying on topic formation. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
    "zhExample": "過大：「校園外送」。可研究：「平日 21:00 後住宿生如何決定是否使用外送平台？考量預算、距離與同伴時，決策線索是什麼？」不研究：平台原始碼。",
    "enExample": "Too broad: “campus delivery.” Researchable: “After 21:00, how do dorm students decide whether to order, given budget, distance, and peers?” Out of scope: platform source code.",
    "zhPractice": "寫 2 個真實現象。；完成定義表六欄。；標可行性。；存成研究問題定義表。",
    "enPractice": "Write 2 real phenomena.; Complete six fields.; Mark feasibility.; Save the Research Problem Definition.",
    "zhQuizItems": [
      {
        "q": "可研究題目最核心的特徵是？",
        "options": [
          "有對象且現象可追問",
          "只有熱門關鍵字",
          "先有完整結論"
        ],
        "answer": 0,
        "explain": "要能追問與收集證據。"
      },
      {
        "q": "問題意識主要回答什麼？",
        "options": [
          "為什麼這個現象值得被問",
          "明天要寫幾頁",
          "要用哪個軟體"
        ],
        "answer": 0,
        "explain": "價值與缺口。"
      },
      {
        "q": "發現題目過大時應優先？",
        "options": [
          "收窄對象、情境或時間",
          "直接做結論",
          "改成做展示系統"
        ],
        "answer": 0,
        "explain": "先收窄。"
      },
      {
        "q": "可行性檢查至少要看？",
        "options": [
          "資料是否取得、時間是否足夠",
          "題目是否夠酷",
          "AI 是否喜歡"
        ],
        "answer": 0,
        "explain": "做不做得完。"
      },
      {
        "q": "本課完成時應產出？",
        "options": [
          "候選題＋選定理由與範圍",
          "完整論文終稿",
          "產品開發時程"
        ],
        "answer": 0,
        "explain": "選題與問題形成。"
      }
    ],
    "enQuizItems": [
      {
        "q": "可研究題目最核心的特徵是？",
        "options": [
          "有對象且現象可追問",
          "只有熱門關鍵字",
          "先有完整結論"
        ],
        "answer": 0,
        "explain": "要能追問與收集證據。"
      },
      {
        "q": "問題意識主要回答什麼？",
        "options": [
          "為什麼這個現象值得被問",
          "明天要寫幾頁",
          "要用哪個軟體"
        ],
        "answer": 0,
        "explain": "價值與缺口。"
      },
      {
        "q": "發現題目過大時應優先？",
        "options": [
          "收窄對象、情境或時間",
          "直接做結論",
          "改成做展示系統"
        ],
        "answer": 0,
        "explain": "先收窄。"
      },
      {
        "q": "可行性檢查至少要看？",
        "options": [
          "資料是否取得、時間是否足夠",
          "題目是否夠酷",
          "AI 是否喜歡"
        ],
        "answer": 0,
        "explain": "做不做得完。"
      },
      {
        "q": "本課完成時應產出？",
        "options": [
          "候選題＋選定理由與範圍",
          "完整論文終稿",
          "產品開發時程"
        ],
        "answer": 0,
        "explain": "選題與問題形成。"
      }
    ],
    "zhNotePrompt": "用 5 行寫：對象、核心問題、範圍、不研究什麼、可行性燈號。",
    "enNotePrompt": "In 5 lines: population, core problem, scope, exclusions, feasibility light.",
    "zhDeliverableChecklist": [
      "已寫我想研究什麼，且不是「做一個 AI 產品」",
      "已寫對象、核心問題、範圍與不研究什麼",
      "為什麼值得研究沒有未查證統計",
      "可行性燈號與資料路徑誠實",
      "沒有捏造訪談或問卷已經完成",
      "已存成研究問題定義表"
    ],
    "enDeliverableChecklist": [
      "What I will study is written and is not “build an AI product”",
      "Population, core problem, scope, and exclusions are filled",
      "Why-it-matters has no unverified statistics",
      "Feasibility lights and data paths are honest",
      "No invented completed interviews or surveys",
      "Saved as Research Problem Definition"
    ],
    "zhScorecard": [
      "題目可研究性",
      "問題意識清楚度",
      "範圍是否可完成",
      "資料路徑真實性",
      "是否停留在選題而非跑題"
    ],
    "enScorecard": [
      "Researchability",
      "Clarity of rationale",
      "Scope realism",
      "Data-path realism",
      "Staying on topic formation"
    ],
    "id": "research-competition-L1",
    "lessonKey": "research-competition-L1",
    "zhOutputName": "研究問題定義表",
    "enOutputName": "Research Problem Definition",
    "zhObjectives": [
      "把興趣改寫成有對象、有現象的研究問題草稿",
      "寫出為什麼值得研究，且不虛構統計或社會重要性",
      "標出問題範圍與不研究什麼",
      "用綠／黃／紅判斷一學期可行性",
      "把成果存成「研究問題定義表」"
    ],
    "enObjectives": [
      "Rewrite an interest into a problem with a population and phenomenon",
      "Explain why it may matter without inventing statistics",
      "Mark scope and what you will not study",
      "Rate one-semester feasibility with green/yellow/red",
      "Save a Research Problem Definition"
    ],
    "zhWhyItMatters": {
      "problem": "很多專題從「我想做 AI 題目」開始，結果沒有對象、沒有可追問的現象，後面文獻與方法都會漂。",
      "ineffective": "直接請 AI「幫我想十個會得獎的題目」，或把做一個 App 當成研究問題。",
      "solution": "先寫我想研究什麼、為什麼、對象、核心問題、範圍與不研究什麼，再進入題目設計。"
    },
    "enWhyItMatters": {
      "problem": "Many projects start with “I want an AI topic,” with no population or question, so later sources and methods drift.",
      "ineffective": "Asking AI for ten prize-winning topics, or treating an app idea as a research problem.",
      "solution": "Write what you will study, why, who, the core problem, scope, and exclusions before designing questions."
    },
    "zhConceptBlocks": {
      "principles": [
        "先定義問題再選工具",
        "可研究 ≠ 可做產品",
        "可行性取決於真實資料路徑"
      ],
      "terms": [
        "研究對象",
        "問題範圍",
        "不研究什麼",
        "可行性燈號"
      ],
      "criteria": [
        "有對象",
        "有可追問現象",
        "有一學期可執行的範圍"
      ],
      "boundaries": [
        "避免：把 App 當研究問題",
        "避免：虛構研究價值",
        "避免：保證得獎"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Define the problem before tools",
        "Researchable ≠ buildable product",
        "Feasibility depends on real access"
      ],
      "terms": [
        "Population",
        "Scope",
        "Out of scope",
        "Feasibility lights"
      ],
      "criteria": [
        "Has a population",
        "Has a question about a phenomenon",
        "One-semester scope"
      ],
      "boundaries": [
        "Avoid: app as research problem",
        "Avoid: invented importance",
        "Avoid: prize guarantees"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "大二學生想「研究校園外送平台」，卻說不出研究誰、研究什麼行為。",
      "wrong": "請 AI 直接產出十個會得獎的 AI 題目，並把「做一個外送 App」當成研究。",
      "right": "先寫對象（平日晚上使用外送的住宿生）、現象（如何決定是否下單）、範圍與不研究什麼（不研究平台演算法原始碼）。",
      "result": "一份可進入下一課的研究問題定義表。"
    },
    "enCaseStudyBlocks": {
      "problem": "A sophomore wants to “study campus food-delivery platforms” but cannot say who or what behavior.",
      "wrong": "Ask AI for ten prize-winning AI topics and treat “build a delivery app” as research.",
      "right": "Specify population (dorm students ordering at night), phenomenon (how they decide to order), scope, and exclusions (not the platform’s source code).",
      "result": "A Research Problem Definition ready for the next lesson."
    },
    "zhWorkflowSteps": [
      {
        "do": "寫下觀察到的現象與你能接觸的人",
        "why": "沒有真實接觸就無法研究",
        "input": "日常觀察、課、社團、宿舍",
        "output": "現象草稿",
        "check": "是否寫出具體的人與情境"
      },
      {
        "do": "填寫對象、核心問題、範圍、不研究什麼",
        "why": "範圍不清楚後面全會漂",
        "input": "現象草稿",
        "output": "定義表骨架",
        "check": "能否刪掉至少一項不研究什麼"
      },
      {
        "do": "用主 Prompt 產出定義表",
        "why": "把模糊興趣收成一頁",
        "input": "上一步內容",
        "output": "定義表初稿",
        "check": "是否含可行性燈號"
      },
      {
        "do": "刪除虛構統計與保證得獎句",
        "why": "AI 可能發明重要性",
        "input": "初稿",
        "output": "已清理版本",
        "check": "是否沒有未查證數字"
      },
      {
        "do": "存入成果包",
        "why": "後續課堂沿用",
        "input": "定稿",
        "output": "成果包項目",
        "check": "重新整理後是否還在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Write the phenomenon and people you can access",
        "why": "No access means no study",
        "input": "Daily observation, class, club, dorm",
        "output": "Phenomenon draft",
        "check": "Did you name people and a setting?"
      },
      {
        "do": "Fill population, core problem, scope, exclusions",
        "why": "Unclear scope drifts later work",
        "input": "Draft",
        "output": "Definition skeleton",
        "check": "Can you drop at least one out-of-scope item?"
      },
      {
        "do": "Generate the definition with the main prompt",
        "why": "Turn a vague interest into one page",
        "input": "Prior notes",
        "output": "Draft sheet",
        "check": "Includes feasibility lights?"
      },
      {
        "do": "Remove invented stats and prize promises",
        "why": "AI may invent importance",
        "input": "Draft",
        "output": "Clean version",
        "check": "No unverified numbers?"
      },
      {
        "do": "Save to the package",
        "why": "Later lessons reuse this",
        "input": "Final",
        "output": "Package item",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "開始選題前，先把現象收成可研究問題時使用",
      "fields": [
        "[請填寫年級與科系]",
        "[請填寫觀察到的現象]",
        "[請填寫研究問題]"
      ],
      "body": "你是大學研究問題教練，不是代寫者，也不可幫學生發明研究價值或田野。\n\n我的背景：\n- 年級／科系：[請填寫年級與科系]\n- 觀察到的現象：[請填寫觀察到的現象]\n- 我想研究什麼（草稿）：[請填寫研究問題]\n- 可能接觸到的對象或資料：[請填寫]\n- 一學期可投入時間：[請填寫]\n- 這次是課堂專題／競賽／個人研究：[請填寫]\n\n任務：產出「研究問題定義表」，必須包含：\n1) 我想研究什麼（1 段，禁止空泛的「我想做 AI 題目」）\n2) 為什麼值得研究（只根據我提供的觀察；不得虛構社會重要性或統計）\n3) 目標對象\n4) 核心問題（可追問的現象，不是產品功能清單）\n5) 問題範圍（對象／時間／情境）\n6) 不研究什麼\n7) 可行性燈號：綠／黃／紅，並說明缺了什麼真實資料路徑\n\n輸出格式：表格 + 條列。每個主張旁標「根據你提供的資料」或「需自行查證」。\n不要保證競賽得獎，不要把題目改寫成 App 規格。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份含對象、核心問題、範圍、不研究什麼與可行性的定義表",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：範圍過大檢查",
          "body": "請根據我貼上的研究問題定義表，指出任何過大、缺對象、或缺真實資料路徑的句子，改成可一學期完成的範圍。不要新增我沒寫的現象，也不要虛構訪談已經完成。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use before choosing a topic, to turn a phenomenon into a researchable problem",
      "fields": [
        "[Enter year and major]",
        "[Enter observed phenomenon]",
        "[Enter research question]"
      ],
      "body": "You are a university research-question coach—not a ghostwriter. Do not invent research value or fieldwork.\n\nMy background:\n- Year / major: [Enter year and major]\n- Observed phenomenon: [Enter observed phenomenon]\n- Draft of what I want to study: [Enter research question]\n- People or data I can actually access: [Enter access]\n- Time this semester: [Enter available time]\n- Course project / competition / personal research: [Enter context]\n\nTask: Produce a Research Problem Definition with:\n1) What I want to study (not “I want to do an AI topic”)\n2) Why it may be worth studying (only from my observations; invent no statistics)\n3) Target population\n4) Core problem (a question about a phenomenon, not a product spec)\n5) Scope (who / when / setting)\n6) What I will not study\n7) Feasibility lights green/yellow/red and missing real data paths\n\nFormat: tables plus bullets. Label claims as “based on your input” or “verify yourself”.\nNo prize guarantees; do not rewrite the topic into app features.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A definition sheet with population, core problem, scope, exclusions, and feasibility",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: scope check",
          "body": "From my Research Problem Definition, flag anything too broad, missing a population, or missing a real data path. Narrow to a one-semester scope. Do not add phenomena I did not write or invent completed interviews."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "寫 2 個真實觀察現象（各 2–3 句）",
        "standard": "必須是你看過的情境，不是 AI 編的",
        "mistakes": "只寫「AI 很重要」",
        "check": "有沒有時間、地點、人？"
      },
      {
        "task": "完成定義表六欄",
        "standard": "六欄皆有內容且有不研究什麼",
        "mistakes": "六欄只重複同一句口號",
        "check": "別人能否看出範圍？"
      },
      {
        "task": "標可行性並寫缺什麼資料路徑",
        "standard": "紅／黃要寫下一步最小行動",
        "mistakes": "全綠但沒有任何可接觸對象",
        "check": "一週內能否做最小驗證？"
      },
      {
        "task": "把定稿存成研究問題定義表",
        "standard": "成果名稱正確",
        "mistakes": "空白儲存",
        "check": "重新整理後仍看得到？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Write 2 real observed phenomena",
        "standard": "Must be situations you saw, not AI fiction",
        "mistakes": "Only “AI is important”",
        "check": "Time, place, people?"
      },
      {
        "task": "Complete all six definition fields",
        "standard": "Includes exclusions",
        "mistakes": "Slogan repeated six times",
        "check": "Can a reader see the scope?"
      },
      {
        "task": "Mark feasibility and missing data paths",
        "standard": "Red/yellow need a next minimum action",
        "mistakes": "All green with no accessible people",
        "check": "Can you test something this week?"
      },
      {
        "task": "Save the Research Problem Definition",
        "standard": "Correct name",
        "mistakes": "Saving blank text",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "從「我要做 AI 題目」開始",
        "why": "沒有現象就無法形成問題",
        "fix": "先寫你觀察到誰、在做什麼、哪裡不清楚"
      },
      {
        "error": "請 AI 保證這題能得獎",
        "why": "平台沒有評審、也不能預測競賽",
        "fix": "只檢查問題是否可研究、可取得資料"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Starting from “I want an AI topic”",
        "why": "No phenomenon means no question",
        "fix": "Write who you observed, what they do, and what is unclear"
      },
      {
        "error": "Asking AI to guarantee a prize",
        "why": "This site has no judges and cannot predict contests",
        "fix": "Only check whether the problem is researchable and accessible"
      }
    ],
    "zhNextStep": "帶著這份定義表進入第 2 課，把主題、問題與（如適用）假設分開寫。不必重寫現象故事。",
    "enNextStep": "Take this definition into Lesson 2 and separate topic, problem, question, and hypothesis if applicable. You do not need to rewrite the story.",
    "zhSummary": [
      "本堂成果：研究問題定義表",
      "先說清楚問題，再搜文獻",
      "AI 不可發明田野"
    ],
    "enSummary": [
      "Deliverable: Research Problem Definition",
      "Clarify the problem before searching",
      "AI must not invent fieldwork"
    ],
    "zhRubric": [
      {
        "name": "問題清楚度",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "範圍可行性",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "資料路徑真實性",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "研究誠信",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Problem clarity",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Scope feasibility",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Data-path realism",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Research integrity",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "入門 / Beginner",
    "zhTitle": "第2課：縮小範圍，寫出研究問題與假設",
    "enTitle": "Lesson 2: Narrow scope and write research questions and hypotheses",
    "zhValueTip": "主題、問題、研究問題、假設不是同一件事；AI 不得幫你虛構「這題一定重要」。",
    "enValueTip": "Topic, problem, research question, and hypothesis are not the same. AI must not invent “this is definitely important.”",
    "zhOutcome": "研究題目與研究問題畫布",
    "enOutcome": "Research Question Canvas",
    "zhConcept": "Topic 是領域標籤，Problem 是現實落差，Research Question 是可回答的問句，Hypothesis 只在你打算檢驗關係時才需要。探索性訪談常常先沒有假說。AI 可以幫你改寫問句結構，但不能宣稱「文獻都證明這題很重要」——除非你貼上已查證的來源。",
    "enConcept": "Topic is a label, problem is a real-world gap, the research question is answerable, and a hypothesis is only needed if you will test a relationship. Exploratory interviews often start without one. AI may tighten wording; it must not claim “the literature proves this” unless you paste verified sources.",
    "zhCaseStudy": "阿凱把「外送不健康」當成研究問題。教練指出那是價值判斷。他改成 RQ：在平日 21:00 後，住宿生決定使用外送時，預算、距離、同伴與平台優惠如何進入決策？本次以訪談探索機制，不預設「優惠一定是主因」。任何「研究顯示」都留待第 3–4 課用正式資料庫查證。",
    "enCaseStudy": "Kai treated “delivery is unhealthy” as a research question. He rewrote an exploratory RQ about how budget, distance, peers, and promotions enter nighttime ordering decisions, without assuming promotions are the main cause. Claims of “studies show” wait for verified databases in later lessons.",
    "zhWorkflow": [
      "貼上第1課定義表",
      "分開四層與子問題",
      "用 Prompt 改寫可回答問句",
      "列出推測句",
      "存成研究題目與研究問題畫布"
    ],
    "enWorkflow": [
      "Paste Lesson 1",
      "Separate four layers",
      "Rewrite an answerable question",
      "List speculation",
      "Save the canvas"
    ],
    "zhCommonMistakes": [
      "四層混成一句",
      "價值判斷當 RQ",
      "強迫探索性研究寫假說",
      "讓 AI 虛構「文獻證明很重要」",
      "把期望結果寫進問句"
    ],
    "enCommonMistakes": [
      "Mixing four layers",
      "Value judgment as RQ",
      "Forcing a hypothesis",
      "Invented “literature proves it”",
      "Putting hoped results into the question"
    ],
    "zhExcellentExample": "四層清楚、探索性不硬寫假說、無虛構引用。",
    "enExcellentExample": "Four layers clear, no forced hypothesis, no fake citations.",
    "zhPrompt": "你是研究問題設計教練。不可幫學生虛構研究價值、假設結果或已證實結論。\n\n我的研究問題定義表（貼上第 1 課成果）：\n[請貼上來源內容]\n\n目前草稿：\n- Topic（主題）：[請填寫]\n- Problem（待解現象）：[請填寫]\n- Research Question：[請填寫研究問題]\n- 是否需要 Hypothesis：[請填寫是／否與理由]\n\n任務：產出「研究題目與研究問題畫布」，必須清楚分開：\n1) Topic：領域標籤（可較寬）\n2) Problem：現實中不清楚或有落差的現象\n3) Research Question：可回答的問句（誰、什麼情境、什麼關係／機制）\n4) Hypothesis（僅在適用時）：可被證據支持或推翻的陳述；若不適用，寫「本設計不使用假設」與理由\n5) 子問題 2–3 個\n6) 仍屬推測、不得當成結果的句子清單\n\n輸出用表格。不要把「應該推廣某產品」寫成研究問題。不要發明文獻來證明此題重要。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a research-question design coach. Do not invent importance, hypothesized results, or proven conclusions.\n\nMy Research Problem Definition (paste Lesson 1):\n[Paste source content]\n\nCurrent draft:\n- Topic: [Enter topic]\n- Problem: [Enter problem]\n- Research Question: [Enter research question]\n- Hypothesis needed?: [Enter yes/no and why]\n\nTask: Produce a Research Question Canvas that separates:\n1) Topic (broad label)\n2) Problem (unclear phenomenon or gap)\n3) Research Question (answerable: who, setting, relation/mechanism)\n4) Hypothesis only if applicable; otherwise write “no hypothesis” and why\n5) 2–3 sub-questions\n6) A list of sentences that are still speculation and must not be treated as findings\n\nUse a table. Do not turn “we should promote a product” into a research question. Do not invent literature to prove importance.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的 Topic/Problem/RQ/Hypothesis 是否分開，有沒有把推測當結果。不要虛構文獻。",
    "enCoachPrompt": "Check my four-layer split and whether speculation is treated as findings. Invent no literature.",
    "zhFeedbackPrompt": "【Prompt 3｜時程與變更審核】\n里程碑表與課表衝突說明：\n（貼上）\n請指出不切實際的日期、建議調整，並給變更申請短模板。不可逕自宣告範圍變更已通過。",
    "enFeedbackPrompt": "[Prompt 3 | Schedule & Change Review] Flag unrealistic dates and provide a change-request template—do not declare scope changes approved.",
    "zhExample": "Topic：校園外送。Problem：夜間決策線索不清楚。RQ：住宿生如何決定是否下單？Hypothesis：本次不使用（探索性）。",
    "enExample": "Topic: campus delivery. Problem: unclear nighttime decision cues. RQ: How do dorm students decide to order? Hypothesis: not used (exploratory).",
    "zhPractice": "抽出四層。；寫子問題。；決定假設是否適用。；存畫布。",
    "enPractice": "Extract four layers.; Write sub-questions.; Decide on hypothesis.; Save the canvas.",
    "zhQuizItems": [
      {
        "q": "專案「非範圍」的用途是？",
        "options": [
          "讓報告更長",
          "明確不做什麼，減少臨時加戲與衝突",
          "取代目標",
          "給 AI 自由發揮"
        ],
        "answer": 1,
        "explain": "非範圍保護焦點與時程。"
      },
      {
        "q": "好的里程碑應？",
        "options": [
          "只有「大家加油」",
          "對應可驗證交付物與日期",
          "越模糊越有彈性",
          "不需要負責人"
        ],
        "answer": 1,
        "explain": "可驗證才能追蹤。"
      },
      {
        "q": "AI 產出時程後應？",
        "options": [
          "直接當最終承諾",
          "由人工對照真實課表與資源後再定案",
          "刪除所有風險欄",
          "禁止寫備案"
        ],
        "answer": 1,
        "explain": "AI 草案需人工審核。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Non-goals are for:",
        "options": [
          "Making papers longer",
          "Clarifying what you won’t do to reduce scope creep",
          "Replacing goals",
          "Letting AI freestyle"
        ],
        "answer": 1,
        "explain": "Non-goals protect focus and schedule."
      },
      {
        "q": "Good milestones should:",
        "options": [
          "Only say “try hard”",
          "Map to verifiable deliverables and dates",
          "Stay vague for flexibility",
          "Need no owners"
        ],
        "answer": 1,
        "explain": "Verifiable milestones enable tracking."
      },
      {
        "q": "After AI drafts a schedule you should:",
        "options": [
          "Treat it as final commitment",
          "Human-validate against real calendars/resources then lock",
          "Delete the risk section",
          "Forbid backups"
        ],
        "answer": 1,
        "explain": "AI drafts need human approval."
      }
    ],
    "zhNotePrompt": "貼上 Topic、Problem、RQ、Hypothesis（或「不使用」）。",
    "enNotePrompt": "Paste Topic, Problem, RQ, and hypothesis or “not used.”",
    "zhDeliverableChecklist": [
      "Topic / Problem / RQ 已分開",
      "RQ 可被資料回答，不是口號",
      "假設適用或不適用已寫理由",
      "有 2–3 個子問題",
      "推測句已標示，未當成結果",
      "沒有未查證的「研究顯示」"
    ],
    "enDeliverableChecklist": [
      "Topic, problem, and RQ are separated",
      "RQ is answerable, not a slogan",
      "Hypothesis used or marked N/A with a reason",
      "2–3 sub-questions written",
      "Speculation flagged, not treated as findings",
      "No unverified “studies show”"
    ],
    "zhScorecard": [
      "範圍清楚",
      "里程碑可驗",
      "依賴可見",
      "備案可執行",
      "審核定案"
    ],
    "enScorecard": [
      "Clear scope",
      "Testable milestones",
      "Visible deps",
      "Executable backups",
      "Approved plan"
    ],
    "id": "research-competition-L2",
    "lessonKey": "research-competition-L2",
    "zhOutputName": "研究題目與研究問題畫布",
    "enOutputName": "Research Question Canvas",
    "zhObjectives": [
      "區分 Topic、Problem、Research Question、Hypothesis",
      "把第 1 課定義收成可回答的研究問題",
      "判斷本次是否需要假設",
      "列出仍屬推測、不可當成結果的句子",
      "存成研究題目與研究問題畫布"
    ],
    "enObjectives": [
      "Separate topic, problem, research question, and hypothesis",
      "Turn Lesson 1 into an answerable research question",
      "Decide whether a hypothesis is needed",
      "List speculation that must not be treated as findings",
      "Save a Research Question Canvas"
    ],
    "zhWhyItMatters": {
      "problem": "主題很大、問題含糊、研究問題寫成口號時，搜尋詞與方法會對不準。",
      "ineffective": "請 AI「把題目寫得很學術」，或強迫每個探索性研究都寫假說。",
      "solution": "用畫布分開四層，並禁止 AI 虛構研究價值。"
    },
    "enWhyItMatters": {
      "problem": "A huge topic, a vague problem, or a slogan-as-question misaligns search terms and methods.",
      "ineffective": "Asking AI to “make it sound academic,” or forcing a hypothesis onto exploratory work.",
      "solution": "Separate four layers on a canvas and forbid invented importance."
    },
    "zhConceptBlocks": {
      "principles": [
        "四層分開寫",
        "問句必須可被證據回答",
        "沒有證據前，推測不是結果"
      ],
      "terms": [
        "Topic",
        "Problem",
        "Research Question",
        "Hypothesis"
      ],
      "criteria": [
        "問句含對象與情境",
        "假設可被推翻或標為不適用",
        "無虛構文獻支撐"
      ],
      "boundaries": [
        "避免：價值判斷當研究問題",
        "避免：AI 編重要性",
        "避免：把期望當結論"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Write four layers separately",
        "Questions must be answerable by evidence",
        "Speculation is not a finding"
      ],
      "terms": [
        "Topic",
        "Problem",
        "Research Question",
        "Hypothesis"
      ],
      "criteria": [
        "Question names who and setting",
        "Hypothesis is falsifiable or marked N/A",
        "No invented citations"
      ],
      "boundaries": [
        "Avoid: value judgments as questions",
        "Avoid: AI-invented importance",
        "Avoid: hopes as conclusions"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "阿凱的主題是「校園外送」，但研究問題寫成「外送對大學生不好」。",
      "wrong": "請 AI 把句子改得像論文標題，並加上沒查證的「研究顯示 80%」。",
      "right": "分開：Topic＝校園外送使用；Problem＝夜間下單決策線索不清楚；RQ＝住宿生如何決定；本次先做探索、不寫假說。",
      "result": "一份四層分開的研究題目與研究問題畫布。"
    },
    "enCaseStudyBlocks": {
      "problem": "Kai’s topic is campus delivery, but the question is “delivery is bad for students.”",
      "wrong": "Ask AI to sound like a paper title and add an unverified “studies show 80%.”",
      "right": "Split topic, problem, and an exploratory RQ with no hypothesis yet.",
      "result": "A four-layer Research Question Canvas."
    },
    "zhWorkflowSteps": [
      {
        "do": "貼上第 1 課定義表",
        "why": "延續同一題，不另起爐灶",
        "input": "研究問題定義表",
        "output": "畫布輸入",
        "check": "是否同一對象與現象"
      },
      {
        "do": "分開填四層與子問題",
        "why": "混在一起無法對準方法",
        "input": "定義表",
        "output": "四層草稿",
        "check": "Topic 是否比 RQ 更寬"
      },
      {
        "do": "用主 Prompt 檢查問句",
        "why": "抓出口號與價值判斷",
        "input": "四層草稿",
        "output": "畫布初稿",
        "check": "RQ 是否可被資料回答"
      },
      {
        "do": "標示推測句",
        "why": "避免把期望當結果",
        "input": "初稿",
        "output": "推測清單",
        "check": "是否至少標出 1 句不可當結果"
      },
      {
        "do": "存檔",
        "why": "第 3 課要用 RQ 做搜尋詞",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Paste Lesson 1",
        "why": "Stay on the same problem",
        "input": "Definition",
        "output": "Canvas input",
        "check": "Same population and phenomenon?"
      },
      {
        "do": "Fill four layers and sub-questions",
        "why": "Mixing layers breaks methods later",
        "input": "Definition",
        "output": "Four-layer draft",
        "check": "Is topic broader than the RQ?"
      },
      {
        "do": "Run the main prompt",
        "why": "Catch slogans and value judgments",
        "input": "Draft",
        "output": "Canvas",
        "check": "Can data answer the RQ?"
      },
      {
        "do": "Flag speculation",
        "why": "Hopes are not findings",
        "input": "Draft",
        "output": "Speculation list",
        "check": "At least one flagged sentence?"
      },
      {
        "do": "Save",
        "why": "Lesson 3 needs the RQ for search terms",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "已有問題定義，要分開 Topic / Problem / Question / Hypothesis 時使用",
      "fields": [
        "[請貼上來源內容]",
        "[請填寫研究問題]",
        "[請填寫]"
      ],
      "body": "你是研究問題設計教練。不可幫學生虛構研究價值、假設結果或已證實結論。\n\n我的研究問題定義表（貼上第 1 課成果）：\n[請貼上來源內容]\n\n目前草稿：\n- Topic（主題）：[請填寫]\n- Problem（待解現象）：[請填寫]\n- Research Question：[請填寫研究問題]\n- 是否需要 Hypothesis：[請填寫是／否與理由]\n\n任務：產出「研究題目與研究問題畫布」，必須清楚分開：\n1) Topic：領域標籤（可較寬）\n2) Problem：現實中不清楚或有落差的現象\n3) Research Question：可回答的問句（誰、什麼情境、什麼關係／機制）\n4) Hypothesis（僅在適用時）：可被證據支持或推翻的陳述；若不適用，寫「本設計不使用假設」與理由\n5) 子問題 2–3 個\n6) 仍屬推測、不得當成結果的句子清單\n\n輸出用表格。不要把「應該推廣某產品」寫成研究問題。不要發明文獻來證明此題重要。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份分開主題、問題、研究問題與假設（如適用）的畫布",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：假設適用性檢查",
          "body": "請判斷我的研究問題是否需要假設。若為探索性問題，不要強迫寫假說。不要把期望結果寫成已證實結論。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when you have a definition and must separate topic, problem, question, and hypothesis",
      "fields": [
        "[Paste source content]",
        "[Enter research question]",
        "[Enter topic]"
      ],
      "body": "You are a research-question design coach. Do not invent importance, hypothesized results, or proven conclusions.\n\nMy Research Problem Definition (paste Lesson 1):\n[Paste source content]\n\nCurrent draft:\n- Topic: [Enter topic]\n- Problem: [Enter problem]\n- Research Question: [Enter research question]\n- Hypothesis needed?: [Enter yes/no and why]\n\nTask: Produce a Research Question Canvas that separates:\n1) Topic (broad label)\n2) Problem (unclear phenomenon or gap)\n3) Research Question (answerable: who, setting, relation/mechanism)\n4) Hypothesis only if applicable; otherwise write “no hypothesis” and why\n5) 2–3 sub-questions\n6) A list of sentences that are still speculation and must not be treated as findings\n\nUse a table. Do not turn “we should promote a product” into a research question. Do not invent literature to prove importance.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A canvas separating topic, problem, research question, and hypothesis if applicable",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: hypothesis fit",
          "body": "Decide whether my question needs a hypothesis. If exploratory, do not force one. Do not write hoped-for results as proven findings."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "從定義表抽出四層",
        "standard": "每層一句且不互相複製",
        "mistakes": "四層寫成同一句",
        "check": "能否向同學講解差異？"
      },
      {
        "task": "寫 2–3 個子問題",
        "standard": "子問題能對應之後的題目或訪綱",
        "mistakes": "子問題比 RQ 更空泛",
        "check": "能否各用一類證據回答？"
      },
      {
        "task": "決定假設是否適用",
        "standard": "探索性就明確寫不使用",
        "mistakes": "硬寫無法檢驗的假說",
        "check": "假說能否被推翻？"
      },
      {
        "task": "存成研究題目與研究問題畫布",
        "standard": "含推測清單",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Extract four layers from Lesson 1",
        "standard": "Each layer distinct",
        "mistakes": "All four are the same sentence",
        "check": "Can you explain the difference?"
      },
      {
        "task": "Write 2–3 sub-questions",
        "standard": "Each can map to later items",
        "mistakes": "Sub-questions vaguer than the RQ",
        "check": "Could each be answered by a type of evidence?"
      },
      {
        "task": "Decide on a hypothesis",
        "standard": "Exploratory work may skip it",
        "mistakes": "An untestable slogan",
        "check": "Could evidence overturn it?"
      },
      {
        "task": "Save the Research Question Canvas",
        "standard": "Includes speculation list",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "RQ 寫成「應該推廣健康外送」",
        "why": "那是倡議不是問題",
        "fix": "改成可觀察的決策或行為問句"
      },
      {
        "error": "AI 自行補上研究價值",
        "why": "未查證來源不可當理由",
        "fix": "只根據你的觀察；文獻留到查證後再寫"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "RQ as “we should promote healthy delivery”",
        "why": "Advocacy is not a question",
        "fix": "Ask about observable decisions or behavior"
      },
      {
        "error": "AI invents importance",
        "why": "Unverified sources are not reasons",
        "fix": "Use your observations; add literature only after verification"
      }
    ],
    "zhNextStep": "用這份 RQ 去做第 3 課搜尋策略。先列關鍵字，不要請 AI 直接給「十篇真實論文」。",
    "enNextStep": "Use this RQ for Lesson 3 search strategy. List keywords first; do not ask AI for “ten real papers.”",
    "zhSummary": [
      "本堂成果：研究題目與研究問題畫布",
      "四層必須分開",
      "AI 不得虛構研究價值"
    ],
    "enSummary": [
      "Deliverable: Research Question Canvas",
      "Keep four layers separate",
      "AI must not invent importance"
    ],
    "zhRubric": [
      {
        "name": "四層區分",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "問句可回答",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "假設使用得當",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "無虛構價值",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Four-layer split",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Answerable question",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Appropriate hypothesis",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No invented value",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "入門 / Beginner",
    "zhTitle": "第3課：用 AI 協助學術搜尋，找到關鍵文獻與來源",
    "enTitle": "Lesson 3: Use AI-assisted academic search to find key sources",
    "zhValueTip": "AI 協助產生搜尋策略，不能取代 Google Scholar、圖書館或官方資料庫，也不可假裝已經找到真論文。",
    "enValueTip": "AI helps you plan searches; it does not replace Scholar, libraries, or official databases, and must not pretend it already found real papers.",
    "zhOutcome": "資料與文獻搜尋策略",
    "enOutcome": "Research Search Plan",
    "zhConcept": "搜尋策略包含關鍵字、同義詞、中英詞、來源與篩選標準。原始研究、官方統計、政府資料與原始調查屬 Primary；review 與報導屬 Secondary；AI 生成只能當搜尋與解釋工具。本課不要求你在聊天視窗裡「找到十篇真論文」。",
    "enConcept": "A search plan includes keywords, synonyms, bilingual queries, sources, and filters. Primary sources include original studies, official statistics, government data, and original surveys. Reviews and news are secondary. AI output is a tool, not evidence. This lesson does not ask chat to “find ten real papers.”",
    "zhCaseStudy": "高三生小寧的 RQ 是：高中生使用生成式 AI 寫作業時，哪些步驟自己做、哪些交給 AI。她沒有向 AI 要書目，而是列出 keywords：generative AI, homework, self-regulated learning, 高中、作業、學習策略。來源計畫：Google Scholar 與教育部公開資料為主，科技新聞只當 Secondary。查證狀態先全標「未搜尋」，搜到題名後改「已搜尋未核對」，打開原文才改「已核對」。",
    "enCaseStudy": "Ning’s RQ asks which homework steps students keep versus give to generative AI. She did not request a bibliography from chat. She listed bilingual keywords, planned Scholar plus official education data as primary paths, treated tech news as secondary, and used verification statuses instead of fake DOIs.",
    "zhWorkflow": [
      "拆關鍵字與中英詞",
      "分級來源並寫篩選",
      "產出搜尋策略",
      "回正式資料庫搜尋並標狀態",
      "存成資料與文獻搜尋策略"
    ],
    "enWorkflow": [
      "Build bilingual keywords",
      "Tier sources and filters",
      "Generate the plan",
      "Search a real database and mark status",
      "Save the Research Search Plan"
    ],
    "zhCommonMistakes": [
      "請 AI 給十篇真論文",
      "不回資料庫",
      "把報導當原始研究",
      "把 AI 文字當證據",
      "沒有排除標準"
    ],
    "enCommonMistakes": [
      "Asking AI for ten real papers",
      "Skipping databases",
      "Treating news as primary",
      "Using AI text as evidence",
      "No exclusion criteria"
    ],
    "zhExcellentExample": "詞表可執行、三級分清、有自己搜到的題名、無幻覺書目。",
    "enExcellentExample": "Runnable queries, three tiers, titles you found, no hallucinated bibliography.",
    "zhPrompt": "你是學術搜尋策略教練。你沒有可靠的即時學術資料庫存取，因此不得輸出「保證真實存在」的論文清單。\n\n我的研究問題：[請填寫研究問題]\n子問題：[請填寫]\n語言能力：中文／英文／兩者：[請填寫]\n我已嘗試的關鍵字：[請填寫]\n我可以使用的來源（圖書館／Google Scholar／政府統計／其他）：[請填寫]\n\n任務：產出「資料與文獻搜尋策略」，包含：\n1) 核心關鍵字與同義詞\n2) 中英文搜尋詞組合（含布林邏輯建議）\n3) 搜尋來源分級：Primary／Original（原始研究、官方統計、政府資料、原始調查）vs Secondary（review、報導、分析文章）vs AI 生成（只可當策略與解釋，不可當證據）\n4) 納入標準與排除標準\n5) 查證狀態欄：未搜尋／已搜尋未核對／已核對原文\n6) 提醒：AI 不能取代正式資料庫搜尋\n\n禁止：列出作者＋年份＋DOI 並暗示你已替我找到真文獻。若提供「可能的搜尋線索」，必須標「未查證，需回資料庫確認」。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are an academic search-strategy coach. You do not have reliable live database access, so you must not output a list of papers as “guaranteed real.”\n\nResearch question: [Enter research question]\nSub-questions: [Enter sub-questions]\nLanguages: Chinese / English / both: [Enter languages]\nKeywords already tried: [Enter keywords]\nSources I can use (library / Google Scholar / official statistics / other): [Enter sources]\n\nTask: Produce a Research Search Plan with:\n1) Core keywords and synonyms\n2) Chinese and English query strings (including Boolean suggestions)\n3) Source tiers: primary/original vs secondary vs AI-generated (AI is strategy/explanation only, never evidence)\n4) Inclusion and exclusion criteria\n5) Verification status: not searched / searched-unverified / verified against original\n6) A reminder that AI does not replace database search\n\nForbidden: author+year+DOI lists implied to be real finds. Any “possible lead” must be labeled unverified.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的搜尋策略是否仍把 AI 當資料庫，來源分級是否清楚。不要給我假書目。",
    "enCoachPrompt": "Check whether my plan still treats AI as a database. Give no fake bibliography.",
    "zhFeedbackPrompt": "【Prompt 3｜文獻清單回饋】\n以下是我的 Scholar 文獻清單與精讀計畫：\n（貼上）\n請檢查相關性、理由是否空泛、書目完整性、精讀優先順序是否重疊。給修正建議與可匯入試算表的欄位格式。",
    "enFeedbackPrompt": "[Prompt 3 | Bibliography Feedback] Check relevance, reason quality, citation completeness, and deep-read priority overlap.",
    "zhExample": "納入：近五年、與學習行為有關的實證研究。排除：工具廣告、無法取得全文且無法核對的來源。AI 書目＝未查證線索，不是引用。",
    "enExample": "Include: last five years, empirical studies of learning behavior. Exclude: product ads and unverifiable items. AI bibliographies are unverified leads, not citations.",
    "zhPractice": "列中英關鍵字。；寫來源分級與篩選。；實際搜尋並標狀態。；存搜尋策略。",
    "enPractice": "List bilingual keywords.; Write tiers and filters.; Search and mark status.; Save the plan.",
    "zhQuizItems": [
      {
        "q": "在 Google Scholar 使用「被引用次數」最合適的目的是？",
        "options": [
          "證明該文一定正確無誤",
          "作為尋找後續相關研究的線索之一",
          "取代閱讀摘要與方法",
          "保證可以不查原刊物名"
        ],
        "answer": 1,
        "explain": "引用數是發現後續研究的線索，不是正確性保證。"
      },
      {
        "q": "建立文獻清單時，最不該缺少的資訊是？",
        "options": [
          "選用理由、疑點與下一步（精讀／備用／淘汰）",
          "只貼連結、不寫理由",
          "只看標題是否吸睛",
          "只記錄自己喜不喜歡作者名字"
        ],
        "answer": 0,
        "explain": "理由與下一步讓清單可執行，也減少重複勞動。"
      },
      {
        "q": "正式引用前，對 Scholar 結果最必要的動作是？",
        "options": [
          "直接複製 AI 產生的 APA",
          "核對題名、作者、年份、刊物／來源頁",
          "只保留 PDF 檔名",
          "完全相信第一頁結果"
        ],
        "answer": 1,
        "explain": "書目要素必須回原資料核對，避免引用錯誤。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What is the best use of “Cited by” in Google Scholar?",
        "options": [
          "Proof the paper is certainly correct",
          "A clue for finding later related work",
          "A replacement for reading abstracts and methods",
          "A reason to skip verifying the venue"
        ],
        "answer": 1,
        "explain": "Citation counts are leads, not truth certificates."
      },
      {
        "q": "What must a literature list include?",
        "options": [
          "Selection reason, doubts, and next step",
          "Links only",
          "Catchy titles only",
          "Whether you like the author name"
        ],
        "answer": 0,
        "explain": "Reasons and next steps make the list actionable."
      },
      {
        "q": "Before citing a Scholar result, you should?",
        "options": [
          "Paste an AI-generated APA blindly",
          "Verify title, authors, year, and venue/source page",
          "Keep only the PDF filename",
          "Trust page-one results completely"
        ],
        "answer": 1,
        "explain": "Bibliographic details must be verified to avoid citation errors."
      }
    ],
    "zhNotePrompt": "貼上中英搜尋詞、來源分級、納入排除、目前查證狀態。",
    "enNotePrompt": "Paste bilingual queries, source tiers, filters, and current verification status.",
    "zhDeliverableChecklist": [
      "有關鍵字、同義詞、中英搜尋詞",
      "有 Primary / Secondary / AI 分級",
      "有納入與排除標準",
      "有查證狀態欄",
      "沒有把 AI 書目當已核對文獻",
      "註明 AI 不能取代正式資料庫搜尋"
    ],
    "enDeliverableChecklist": [
      "Keywords, synonyms, and bilingual queries",
      "Primary / secondary / AI tiers",
      "Inclusion and exclusion criteria",
      "Verification status column",
      "AI bibliographies not treated as verified",
      "States that AI does not replace database search"
    ],
    "zhScorecard": [
      "相關性",
      "清單完整",
      "書目正確",
      "精讀策略",
      "可交接性"
    ],
    "enScorecard": [
      "Relevance",
      "Completeness",
      "Citation accuracy",
      "Deep-read strategy",
      "Handoff readiness"
    ],
    "id": "research-competition-L3",
    "lessonKey": "research-competition-L3",
    "zhOutputName": "資料與文獻搜尋策略",
    "enOutputName": "Research Search Plan",
    "zhObjectives": [
      "為 RQ 列出關鍵字、同義詞與中英搜尋詞",
      "區分 Primary、Secondary 與 AI 生成內容",
      "寫出納入／排除標準",
      "為每條線索標查證狀態",
      "存成資料與文獻搜尋策略"
    ],
    "enObjectives": [
      "List keywords, synonyms, and bilingual queries for the RQ",
      "Separate primary, secondary, and AI-generated content",
      "Write inclusion and exclusion criteria",
      "Mark verification status on each lead",
      "Save a Research Search Plan"
    ],
    "zhWhyItMatters": {
      "problem": "直接請 AI「找十篇真正存在的論文」時，常得到無法核對的書目，後面引用會出事。",
      "ineffective": "把 AI 聊天當資料庫，或不區分原始研究與報導。",
      "solution": "先做搜尋策略與來源分級，再到正式資料庫搜尋並標記查證狀態。"
    },
    "enWhyItMatters": {
      "problem": "Asking AI for “ten real papers” often yields unverifiable citations.",
      "ineffective": "Treating chat as a database, or mixing primary studies with news.",
      "solution": "Build a search plan and source tiers, then search real databases and mark verification."
    },
    "zhConceptBlocks": {
      "principles": [
        "AI 產策略，人回資料庫",
        "來源要分級",
        "沒核對原文就不能引用"
      ],
      "terms": [
        "Primary / Original",
        "Secondary",
        "AI generated",
        "查證狀態"
      ],
      "criteria": [
        "有中英搜尋詞",
        "有納入排除標準",
        "無線上「保證真實」書目"
      ],
      "boundaries": [
        "避免：AI 當證據",
        "避免：未查證 DOI",
        "避免：只搜網頁摘要就當精讀"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "AI plans; you search databases",
        "Tier your sources",
        "No cite without the original"
      ],
      "terms": [
        "Primary / original",
        "Secondary",
        "AI generated",
        "Verification status"
      ],
      "criteria": [
        "Bilingual queries",
        "Inclusion/exclusion",
        "No guaranteed-real bibliography from chat"
      ],
      "boundaries": [
        "Avoid: AI as evidence",
        "Avoid: unverified DOIs",
        "Avoid: treating snippets as close reading"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "高中生專題想研究生成式 AI 對學習方式的影響，一開始就請 AI 列出十篇論文。",
      "wrong": "把 AI 給的作者與 DOI 直接寫進進度報告，沒有回 Google Scholar。",
      "right": "先做中英關鍵字、納入「學習行為／實證研究」、排除「產品廣告」，再自己搜尋並標未核對／已核對。",
      "result": "一份可執行的資料與文獻搜尋策略。"
    },
    "enCaseStudyBlocks": {
      "problem": "A high-school project on generative AI and study habits asks AI for ten papers first.",
      "wrong": "Paste AI authors and DOIs into a progress report without Scholar.",
      "right": "Build bilingual keywords, include empirical learning studies, exclude product ads, then search and mark verification.",
      "result": "A usable Research Search Plan."
    },
    "zhWorkflowSteps": [
      {
        "do": "從 RQ 拆關鍵字與同義詞",
        "why": "詞不對就搜不到",
        "input": "研究問題畫布",
        "output": "詞表",
        "check": "是否含中英"
      },
      {
        "do": "分級來源與篩選標準",
        "why": "避免把廣告當文獻",
        "input": "詞表",
        "output": "來源計畫",
        "check": "是否寫出排除標準"
      },
      {
        "do": "用主 Prompt 產出策略表",
        "why": "補布林邏輯與查證欄",
        "input": "詞表+來源",
        "output": "搜尋策略初稿",
        "check": "是否禁止保證真實書目"
      },
      {
        "do": "到正式資料庫實際搜 1 輪",
        "why": "AI 不能代替搜尋",
        "input": "策略表",
        "output": "題名清單（自己貼）",
        "check": "是否標查證狀態"
      },
      {
        "do": "存檔",
        "why": "第 4 課要精讀已核對來源",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Split keywords from the RQ",
        "why": "Wrong terms miss sources",
        "input": "Canvas",
        "output": "Term list",
        "check": "Chinese and English?"
      },
      {
        "do": "Tier sources and write filters",
        "why": "Ads are not literature",
        "input": "Terms",
        "output": "Source plan",
        "check": "Exclusions written?"
      },
      {
        "do": "Generate the plan with the prompt",
        "why": "Add Boolean and status columns",
        "input": "Terms+sources",
        "output": "Plan draft",
        "check": "No guaranteed bibliography?"
      },
      {
        "do": "Run one real database search",
        "why": "AI cannot replace search",
        "input": "Plan",
        "output": "Title list you pasted",
        "check": "Statuses marked?"
      },
      {
        "do": "Save",
        "why": "Lesson 4 needs verified sources",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "開始找資料前，先設計搜尋詞與來源分級時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請填寫]",
        "[請填寫]"
      ],
      "body": "你是學術搜尋策略教練。你沒有可靠的即時學術資料庫存取，因此不得輸出「保證真實存在」的論文清單。\n\n我的研究問題：[請填寫研究問題]\n子問題：[請填寫]\n語言能力：中文／英文／兩者：[請填寫]\n我已嘗試的關鍵字：[請填寫]\n我可以使用的來源（圖書館／Google Scholar／政府統計／其他）：[請填寫]\n\n任務：產出「資料與文獻搜尋策略」，包含：\n1) 核心關鍵字與同義詞\n2) 中英文搜尋詞組合（含布林邏輯建議）\n3) 搜尋來源分級：Primary／Original（原始研究、官方統計、政府資料、原始調查）vs Secondary（review、報導、分析文章）vs AI 生成（只可當策略與解釋，不可當證據）\n4) 納入標準與排除標準\n5) 查證狀態欄：未搜尋／已搜尋未核對／已核對原文\n6) 提醒：AI 不能取代正式資料庫搜尋\n\n禁止：列出作者＋年份＋DOI 並暗示你已替我找到真文獻。若提供「可能的搜尋線索」，必須標「未查證，需回資料庫確認」。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份含中英關鍵字、來源、篩選與查證狀態的搜尋策略",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：把寬搜尋收窄",
          "body": "我的搜尋結果太多。請依我的 RQ 建議更精確的中英詞與排除詞。不要給論文書目。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use before searching, to design queries and source tiers",
      "fields": [
        "[Enter research question]",
        "[Enter sub-questions]",
        "[Enter keywords]"
      ],
      "body": "You are an academic search-strategy coach. You do not have reliable live database access, so you must not output a list of papers as “guaranteed real.”\n\nResearch question: [Enter research question]\nSub-questions: [Enter sub-questions]\nLanguages: Chinese / English / both: [Enter languages]\nKeywords already tried: [Enter keywords]\nSources I can use (library / Google Scholar / official statistics / other): [Enter sources]\n\nTask: Produce a Research Search Plan with:\n1) Core keywords and synonyms\n2) Chinese and English query strings (including Boolean suggestions)\n3) Source tiers: primary/original vs secondary vs AI-generated (AI is strategy/explanation only, never evidence)\n4) Inclusion and exclusion criteria\n5) Verification status: not searched / searched-unverified / verified against original\n6) A reminder that AI does not replace database search\n\nForbidden: author+year+DOI lists implied to be real finds. Any “possible lead” must be labeled unverified.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A search plan with bilingual keywords, sources, filters, and verification status",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: narrow a noisy search",
          "body": "My search is too broad. Suggest tighter bilingual terms and exclusions from my RQ. Do not give a bibliography."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "列出中英關鍵字與同義詞",
        "standard": "每組至少 3 個詞",
        "mistakes": "只有「AI」一個詞",
        "check": "能否解釋為何這些詞對準 RQ？"
      },
      {
        "task": "寫來源分級與納入排除",
        "standard": "三級都有例子",
        "mistakes": "全部當同等證據",
        "check": "AI 是否被標成不可當證據？"
      },
      {
        "task": "實際搜尋並填查證狀態",
        "standard": "至少 5 筆題名是你自己搜到的",
        "mistakes": "把 AI 清單當已搜尋",
        "check": "有沒有「已核對原文」？"
      },
      {
        "task": "存成資料與文獻搜尋策略",
        "standard": "含查證欄",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "List bilingual keywords and synonyms",
        "standard": "At least 3 terms per cluster",
        "mistakes": "Only the word “AI”",
        "check": "Do terms match the RQ?"
      },
      {
        "task": "Write source tiers and filters",
        "standard": "An example in each tier",
        "mistakes": "Treat all sources as equal",
        "check": "Is AI marked as non-evidence?"
      },
      {
        "task": "Search and fill verification status",
        "standard": "At least 5 titles you found",
        "mistakes": "Treating an AI list as searched",
        "check": "Any “verified against original”?"
      },
      {
        "task": "Save the Research Search Plan",
        "standard": "Includes status column",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "聊天視窗裡的 DOI 直接引用",
        "why": "模型會幻覺書目",
        "fix": "回 Scholar/圖書館打開原文再引用"
      },
      {
        "error": "只搜中文部落格",
        "why": "可能全是 Secondary 或廣告",
        "fix": "依策略補原始研究與官方資料"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Citing a DOI from chat",
        "why": "Models hallucinate bibliographies",
        "fix": "Open the original in Scholar/library first"
      },
      {
        "error": "Only Chinese blogs",
        "why": "Often secondary or ads",
        "fix": "Add primary studies and official data per your plan"
      }
    ],
    "zhNextStep": "選 2–3 筆「已搜尋」來源，在第 4 課做文獻理解表。打不開原文的不要引用。",
    "enNextStep": "Pick 2–3 searched sources for Lesson 4 notes. Do not cite what you cannot open.",
    "zhSummary": [
      "本堂成果：資料與文獻搜尋策略",
      "AI 產策略不產證據",
      "必須回正式資料庫"
    ],
    "enSummary": [
      "Deliverable: Research Search Plan",
      "AI plans, it is not evidence",
      "Return to real databases"
    ],
    "zhRubric": [
      {
        "name": "關鍵字品質",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "來源分級",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "篩選標準",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "查證紀律",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Keyword quality",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Source tiers",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Filters",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Verification discipline",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "中階 / Intermediate",
    "zhTitle": "第4課：用 AI 精讀文獻：摘要、比較與查證",
    "enTitle": "Lesson 4: Use AI to closely read sources: summarize, compare, and verify",
    "zhValueTip": "精讀的是你打開過的原文；AI 只能整理你貼上的內容，不能補假作者或假結果。",
    "enValueTip": "Close-read sources you actually opened. AI may structure what you paste; it must not add fake authors or results.",
    "zhOutcome": "文獻與來源理解表",
    "enOutcome": "Source & Literature Review Notes",
    "zhConcept": "文獻理解表是給「你已經打開的來源」用的。作者、年份、DOI、期刊都必須回正式來源確認。AI 可以幫你結構化段落，但原文沒寫的結果不能出現。Secondary 來源要標成轉述，不能當成你做過實驗。",
    "enConcept": "These notes are for sources you opened. Author, year, DOI, and journal must be verified. AI may structure paragraphs; it must not add results missing from the original. Mark secondary sources as retellings, not as your experiment.",
    "zhCaseStudy": "小寧後來只保留她在 Google Scholar 打開的兩篇：一篇問卷研究（Primary）、一篇教育雜誌評論（Secondary）。她把方法與限制抄進理解表，並寫「與我的 RQ 關係：方法參考／對比定義」。AI 曾補一個 p 值，她刪掉，因為原文表格裡沒有該數字。",
    "enCaseStudy": "Ning kept two opened items: a survey study (primary) and a magazine commentary (secondary). She copied method and limits into the template and noted relevance. She deleted a p-value AI added because it was not in the original table.",
    "zhWorkflow": [
      "篩可打開來源",
      "核對書目",
      "用 Prompt 填七欄",
      "寫與 RQ 關係",
      "存成文獻與來源理解表"
    ],
    "enWorkflow": [
      "Keep openable sources",
      "Verify bibliography",
      "Fill seven fields",
      "Write relevance",
      "Save the notes"
    ],
    "zhCommonMistakes": [
      "未打開原文",
      "AI 補作者與 DOI",
      "把 Secondary 當原始實驗",
      "結果超出原文",
      "找不到來源仍引用"
    ],
    "enCommonMistakes": [
      "Not opening the original",
      "AI-filled authors/DOIs",
      "Secondary as experiment",
      "Results beyond the text",
      "Citing unverifiable items"
    ],
    "zhExcellentExample": "兩篇可核對、七欄完整、無加料數字、Secondary 不偽裝成實驗。",
    "enExcellentExample": "Two verifiable sources, seven fields, no extra numbers, secondary not disguised as an experiment.",
    "zhPrompt": "你是文獻理解助教。只根據我貼上的來源內容工作，不得補充我沒提供的作者、年份、DOI 或結果。\n\n我的研究問題：[請填寫研究問題]\n來源內容（請貼上你已打開並可核對的原文段落或你的閱讀筆記）：\n[請貼上來源內容]\n我已核對的書目欄位（作者／年份／題名／期刊，核對不了就寫「未核對」）：[請填寫]\n\n任務：產出「文獻與來源理解表」，每個來源包含：\n1) 作者、年份（僅重複我已核對的；未核對就標未核對）\n2) 核心問題\n3) 方法\n4) 結果（只根據貼上內容）\n5) 限制\n6) 與我的研究有何關係（支持／對比／方法參考／不相關）\n7) 來源類型：Primary / Secondary / 其他\n\n若資訊不足，寫「原文未提供」。禁止補全沒出現的統計數字。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a literature-reading TA. Work only from source content I paste. Do not add authors, years, DOIs, or results I did not provide.\n\nResearch question: [Enter research question]\nSource content (paste passages you opened or your reading notes):\n[Paste source content]\nBibliography fields I already verified (author/year/title/journal, or “unverified”): [Enter verified fields]\n\nTask: Produce Source & Literature Review Notes for each source:\n1) Author and year only if I verified them\n2) Core question\n3) Method\n4) Results (from pasted text only)\n5) Limits\n6) Relation to my study (support / contrast / method / unrelated)\n7) Source type: primary / secondary / other\n\nIf missing, write “not in the original.” Do not complete missing statistics.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的理解表是否出現原文沒有的數字或假書目。只根據我貼的內容。",
    "enCoachPrompt": "Check my notes for numbers or citations not in what I pasted. Use only my text.",
    "zhFeedbackPrompt": "【Prompt 3｜驗證表回饋】\n以下是我的真偽驗證表與 5 筆評等：\n（貼上）\n請指出評等是否過寬／過嚴、理由是否具體，並給可重用於所有報告的標準模板與三條硬規則。",
    "enFeedbackPrompt": "[Prompt 3 | Checklist Feedback] Judge rating calibration and reason specificity; provide a reusable template and three hard rules.",
    "zhExample": "來源A（Primary）：作者已核對；方法＝問卷；結果只寫原文表格中的數字；限制＝樣本為單一學校。來源B 打不開＝不列入、不引用。",
    "enExample": "Source A (primary): verified author; survey method; results only from the table; limit = one school. Source B unopenable = drop, do not cite.",
    "zhPractice": "打開並核對 2 個來源。；填七欄。；標分級與相關性。；存理解表。",
    "enPractice": "Open and verify 2 sources.; Fill seven fields.; Mark tier and relevance.; Save notes.",
    "zhQuizItems": [
      {
        "q": "驗證 AI 資訊真偽時，最不該省略的步驟是？",
        "options": [
          "只看語氣是否自信",
          "回原資料核對書目、證據與脈絡",
          "只要有圖表就接受",
          "完全依閱讀次數判斷"
        ],
        "answer": 1,
        "explain": "真偽驗證以原資料為準，不是看 AI 自信程度。"
      },
      {
        "q": "下列哪種情況最像「引用幻覺」風險？",
        "options": [
          "AI 給出篇名但原庫找不到對應文獻",
          "你亲自在 Scholar 打開並核對過的論文",
          "老師指定教科書頁碼",
          "你實驗室原始數據紀錄"
        ],
        "answer": 0,
        "explain": "找不到對應文獻的書目是典型幻覺／錯誤引用風險。"
      },
      {
        "q": "把來源標成「僅啟發、不可直接引用」的主要目的是？",
        "options": [
          "讓報告看起來資料比較多",
          "區分思路刺激與可作為證據的資料，降低誤用",
          "避免做任何查證",
          "讓 AI 自動負責學術倫理"
        ],
        "answer": 1,
        "explain": "分級使用可避免把弱證據寫進核心論證。"
      }
    ],
    "enQuizItems": [
      {
        "q": "When verifying AI information, you must not skip?",
        "options": [
          "Checking whether the tone sounds confident",
          "Verifying bibliography, evidence, and context in originals",
          "Accepting any chart as proof",
          "Judging only by view counts"
        ],
        "answer": 1,
        "explain": "Originals decide authenticity, not confident tone."
      },
      {
        "q": "Which looks most like a citation-hallucination risk?",
        "options": [
          "AI provides a paper title that cannot be found in real databases",
          "A paper you opened and verified in Scholar",
          "An assigned textbook page",
          "Your lab’s raw data log"
        ],
        "answer": 0,
        "explain": "Unfindable citations are a classic hallucination risk."
      },
      {
        "q": "Why mark a source “inspire-only”?",
        "options": [
          "To inflate the reference count",
          "To separate idea sparks from citable evidence and reduce misuse",
          "To avoid all verification",
          "To make AI responsible for integrity"
        ],
        "answer": 1,
        "explain": "Use-level labels prevent weak evidence from entering core claims."
      }
    ],
    "zhNotePrompt": "為每篇來源貼：已核對書目、方法、結果、限制、與 RQ 關係。",
    "enNotePrompt": "For each source paste verified citation, method, results, limits, and RQ relevance.",
    "zhDeliverableChecklist": [
      "至少 2 個來源是自己打開的",
      "每篇有作者／年份／問題／方法／結果／限制／相關性",
      "未核對欄位已標明且未引用",
      "結果沒有超出貼上原文",
      "已標 Primary 或 Secondary",
      "找不到原始來源的項目已刪除"
    ],
    "enDeliverableChecklist": [
      "At least 2 sources you opened yourself",
      "Each has author/year/question/method/results/limits/relevance",
      "Unverified fields marked and not cited",
      "Results do not exceed the original",
      "Primary or secondary tagged",
      "Unverifiable items removed"
    ],
    "zhScorecard": [
      "驗證完整",
      "幻覺防範",
      "評等合理",
      "引用安全",
      "可重用"
    ],
    "enScorecard": [
      "Verification coverage",
      "Hallucination defense",
      "Rating quality",
      "Citation safety",
      "Reusability"
    ],
    "id": "research-competition-L4",
    "lessonKey": "research-competition-L4",
    "zhOutputName": "文獻與來源理解表",
    "enOutputName": "Source & Literature Review Notes",
    "zhObjectives": [
      "為至少 2 個已打開來源填理解表",
      "記錄作者、年份、問題、方法、結果、限制",
      "說明與自己研究的關係",
      "未核對欄位一律標未核對，不引用",
      "存成文獻與來源理解表"
    ],
    "enObjectives": [
      "Complete notes for at least 2 opened sources",
      "Record author, year, question, method, results, limits",
      "State relevance to your study",
      "Mark unverified fields and do not cite them",
      "Save Source & Literature Review Notes"
    ],
    "zhWhyItMatters": {
      "problem": "只讓 AI 摘要網頁碎片，容易把次級轉述當成原始結果，或補上原文沒有的數字。",
      "ineffective": "沒打開 PDF 就寫「根據某學者」，或請 AI 補全殘缺書目。",
      "solution": "只貼已核對原文，用固定欄位整理，找不到來源就不引用。"
    },
    "enWhyItMatters": {
      "problem": "AI summaries of snippets turn secondary retellings into “results,” or invent numbers.",
      "ineffective": "Citing “a scholar” without opening the PDF, or asking AI to complete a broken citation.",
      "solution": "Paste verified originals into a fixed template; do not cite what you cannot verify."
    },
    "zhConceptBlocks": {
      "principles": [
        "先打開原文再摘要",
        "不足就寫未提供",
        "相關性要對準自己的 RQ"
      ],
      "terms": [
        "核心問題",
        "方法",
        "限制",
        "與我的研究關係"
      ],
      "criteria": [
        "每篇至少七欄",
        "未核對不引用",
        "結果不超出貼上內容"
      ],
      "boundaries": [
        "避免：AI 補 DOI",
        "避免：把報導當實驗結果",
        "避免：未讀完就比較十篇"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Open the original first",
        "Write “not provided” when missing",
        "Relevance must match your RQ"
      ],
      "terms": [
        "Core question",
        "Method",
        "Limits",
        "Relation to my study"
      ],
      "criteria": [
        "Seven fields per source",
        "No cite if unverified",
        "Results stay inside pasted text"
      ],
      "boundaries": [
        "Avoid: AI-filled DOIs",
        "Avoid: news as experimental results",
        "Avoid: comparing ten unread papers"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "小寧把 AI 聊天裡的一篇「2023 年某期刊」摘要貼進筆記，其實打不開原文。",
      "wrong": "請 AI 補作者全名與 DOI，並寫成已精讀。",
      "right": "刪除無法打開的來源；對兩篇已打開的原文填七欄，並標 Primary/Secondary。",
      "result": "一份只含可核對來源的文獻與來源理解表。"
    },
    "enCaseStudyBlocks": {
      "problem": "Ning pasted a chat summary of a “2023 journal article” she could not open.",
      "wrong": "Ask AI to fill author names and DOI and mark it as close-read.",
      "right": "Drop unreachable items; complete seven fields on two opened sources; mark primary/secondary.",
      "result": "Literature notes that only include verifiable sources."
    },
    "zhWorkflowSteps": [
      {
        "do": "只選打得開的來源",
        "why": "打不開就不能精讀",
        "input": "搜尋策略清單",
        "output": "2–3 篇可讀名單",
        "check": "是否能打開全文或可核對段落"
      },
      {
        "do": "核對作者年份題名期刊",
        "why": "書目錯誤會傳染到報告",
        "input": "原文首頁",
        "output": "已核對書目",
        "check": "未核對是否標明"
      },
      {
        "do": "貼段落用主 Prompt 填表",
        "why": "結構化但不加料",
        "input": "原文+RQ",
        "output": "理解表初稿",
        "check": "有無原文沒有的數字"
      },
      {
        "do": "寫與自己 RQ 的關係",
        "why": "避免精讀與題目脫鉤",
        "input": "理解表",
        "output": "相關性欄",
        "check": "能否說支持／對比／方法"
      },
      {
        "do": "存檔",
        "why": "設計與論證會用到",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Keep only openable sources",
        "why": "Unread items are not close-read",
        "input": "Search list",
        "output": "2–3 readable items",
        "check": "Can you open text?"
      },
      {
        "do": "Verify author, year, title, venue",
        "why": "Bad bibliography spreads",
        "input": "First page",
        "output": "Verified citation",
        "check": "Unverified marked?"
      },
      {
        "do": "Paste passages into the prompt",
        "why": "Structure without adding facts",
        "input": "Original+RQ",
        "output": "Notes draft",
        "check": "Any numbers not in the original?"
      },
      {
        "do": "Write relevance to your RQ",
        "why": "Avoid reading off-topic",
        "input": "Notes",
        "output": "Relevance field",
        "check": "Support, contrast, or method?"
      },
      {
        "do": "Save",
        "why": "Design and argument reuse this",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "已打開原文、要整理單篇理解時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請貼上來源內容]",
        "[請填寫]"
      ],
      "body": "你是文獻理解助教。只根據我貼上的來源內容工作，不得補充我沒提供的作者、年份、DOI 或結果。\n\n我的研究問題：[請填寫研究問題]\n來源內容（請貼上你已打開並可核對的原文段落或你的閱讀筆記）：\n[請貼上來源內容]\n我已核對的書目欄位（作者／年份／題名／期刊，核對不了就寫「未核對」）：[請填寫]\n\n任務：產出「文獻與來源理解表」，每個來源包含：\n1) 作者、年份（僅重複我已核對的；未核對就標未核對）\n2) 核心問題\n3) 方法\n4) 結果（只根據貼上內容）\n5) 限制\n6) 與我的研究有何關係（支持／對比／方法參考／不相關）\n7) 來源類型：Primary / Secondary / 其他\n\n若資訊不足，寫「原文未提供」。禁止補全沒出現的統計數字。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "每篇含作者、問題、方法、結果、限制與相關性的理解表",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：兩篇對照",
          "body": "請只根據我貼的兩篇筆記做比較表（問題／方法／結果／限制）。不要加入第三篇我不存在的文獻。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use after you opened the original and need structured notes",
      "fields": [
        "[Enter research question]",
        "[Paste source content]",
        "[Enter verified fields]"
      ],
      "body": "You are a literature-reading TA. Work only from source content I paste. Do not add authors, years, DOIs, or results I did not provide.\n\nResearch question: [Enter research question]\nSource content (paste passages you opened or your reading notes):\n[Paste source content]\nBibliography fields I already verified (author/year/title/journal, or “unverified”): [Enter verified fields]\n\nTask: Produce Source & Literature Review Notes for each source:\n1) Author and year only if I verified them\n2) Core question\n3) Method\n4) Results (from pasted text only)\n5) Limits\n6) Relation to my study (support / contrast / method / unrelated)\n7) Source type: primary / secondary / other\n\nIf missing, write “not in the original.” Do not complete missing statistics.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "Notes per source with author, question, method, results, limits, and relevance",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: two-source compare",
          "body": "Compare only the two notes I paste (question/method/results/limits). Do not add a third source I do not have."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "打開至少 2 個來源並核對書目",
        "standard": "打不開的刪除",
        "mistakes": "用 AI 書目充數",
        "check": "能否指出你在哪裡打開？"
      },
      {
        "task": "填七欄理解表",
        "standard": "結果不超出原文",
        "mistakes": "AI 補 p 值",
        "check": "每一數字能否指回段落？"
      },
      {
        "task": "標 Primary/Secondary 與相關性",
        "standard": "評論不可當你的實驗結果",
        "mistakes": "全部標 Primary",
        "check": "能否向同學解釋分級？"
      },
      {
        "task": "存成文獻與來源理解表",
        "standard": "含未核對標示",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Open at least 2 sources and verify citations",
        "standard": "Drop unopenable items",
        "mistakes": "Padding with AI bibliography",
        "check": "Where did you open them?"
      },
      {
        "task": "Fill seven fields",
        "standard": "Results inside the original",
        "mistakes": "AI-added p-values",
        "check": "Can each number be pointed to?"
      },
      {
        "task": "Mark primary/secondary and relevance",
        "standard": "Commentary is not your experiment",
        "mistakes": "Everything marked primary",
        "check": "Can you explain the tier?"
      },
      {
        "task": "Save the notes",
        "standard": "Includes unverified flags",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "請 AI 補全殘缺引用",
        "why": "補上的多半無法核對",
        "fix": "回資料庫重查；查不到就不引用"
      },
      {
        "error": "摘要裡出現原文沒有的因果結論",
        "why": "模型會過度推論",
        "fix": "對照原文討論／限制章刪除加料"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Ask AI to complete a broken citation",
        "why": "Filled fields are often unverifiable",
        "fix": "Re-search the database; if missing, do not cite"
      },
      {
        "error": "Summary adds causality the paper never claimed",
        "why": "Models over-infer",
        "fix": "Delete additions after checking discussion/limits"
      }
    ],
    "zhNextStep": "帶著已核對文獻進入第 5 課，寫研究設計草案。方法文獻也要能指回理解表。",
    "enNextStep": "Take verified notes into Lesson 5 to draft research design. Method citations must point back to these notes.",
    "zhSummary": [
      "本堂成果：文獻與來源理解表",
      "只整理已打開原文",
      "查不到就不引用"
    ],
    "enSummary": [
      "Deliverable: Source & Literature Review Notes",
      "Only opened originals",
      "Do not cite what you cannot verify"
    ],
    "zhRubric": [
      {
        "name": "忠於原文",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "欄位完整",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "相關性清楚",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "引用可核對",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Faithful to original",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Complete fields",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Clear relevance",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Citable only if verified",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "中階 / Intermediate",
    "zhTitle": "第5課：建立文獻筆記與引用格式",
    "enTitle": "Lesson 5: Build literature notes and citation format",
    "zhValueTip": "研究設計要能指回已核對文獻；AI 只協助結構化，引用格式錯了就回原文改，不得假造書目。",
    "enValueTip": "Design must point to verified sources. AI only structures; fix citation format from the original—never invent a bibliography.",
    "zhOutcome": "研究設計草案",
    "enOutcome": "Research Design Draft",
    "zhConcept": "研究設計草案說明你將如何回答 RQ：找誰、用什麼方法、資料從哪來、打算怎麼分析、有何限制與倫理風險。本課同時要求：若提到前人方法，書目必須來自第 4 課已核對筆記。本網站沒有自動倫理審查或自動引用驗證。",
    "enConcept": "The design draft explains how you will answer the RQ: who, method, data, planned analysis, limits, and ethics. Prior methods you mention must come from Lesson 4 verified notes. This site has no auto ethics review or citation validator.",
    "zhCaseStudy": "訂閱服務競賽小組把「500 份問卷已回收」從草案刪除。改成：對象＝有使用過至少一種影音或學習訂閱的大學生；方法＝半結構訪談（先）＋ 10 題態度問卷（後）；倫理＝說明可退出、不蒐集學號。文獻只引用他們真正打開的一篇服務品質問卷範例，APA 逗點由他們對照原文修正，沒有交給 AI 發明年份。",
    "enCaseStudy": "The subscription team deleted “500 surveys returned.” They planned interviews first, then a 10-item attitude survey, with withdrawal and no student-ID collection. They cited one opened questionnaire example and fixed APA punctuation themselves instead of letting AI invent the year.",
    "zhWorkflow": [
      "對齊 RQ 與可接觸對象",
      "選方法並寫理由",
      "補限制倫理與已核對引用",
      "用 Prompt 結構化",
      "存成研究設計草案"
    ],
    "enWorkflow": [
      "Align RQ and access",
      "Choose method with rationale",
      "Add limits, ethics, verified citations",
      "Structure with the prompt",
      "Save the design draft"
    ],
    "zhCommonMistakes": [
      "把計畫 n 寫成已完成",
      "假造倫理批准",
      "引用未核對文獻",
      "方法與 RQ 脫鉤",
      "讓 AI 產生假問卷答案"
    ],
    "enCommonMistakes": [
      "Planned n written as completed",
      "Fake ethics approval",
      "Unverified citations",
      "Method off the RQ",
      "AI-generated survey answers"
    ],
    "zhExcellentExample": "方法對準 RQ、n 為計畫、倫理具體、引用可回原文。",
    "enExcellentExample": "Method matches RQ, n is planned, ethics concrete, citations traceable.",
    "zhPrompt": "你是研究設計教練。你只能把我提供的問題與方法選擇結構化，不得假造樣本數、回收率、實驗結果或已完成的倫理審查。\n\n我的研究問題：[請填寫研究問題]\n子問題：[請填寫]\n我傾向的方法：[請填寫研究方法]\n可接觸對象或資料：[請填寫]\n時間限制：[請填寫]\n已核對文獻筆記（可選）：[請貼上來源內容]\n\n任務：產出「研究設計草案」，包含：\n1) 研究問題\n2) 對象與抽樣／邀請方式（只根據我能接觸的人；人數寫計畫，不寫假完成數）\n3) 方法與選法理由\n4) 變數或分析焦點（若為質性，寫分析焦點而非假變數）\n5) 資料來源\n6) 預定分析方法（計畫，不是結果）\n7) 限制\n8) 倫理風險（知情同意、可退出、去識別；本平台沒有自動倫理審查）\n9) 引用：僅使用我已核對的來源；沒有則留空並標「待補，不引用」\n\n禁止產生假數據、假 IRB 批准、假問卷回收。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a research-design coach. Structure my question and method choices. Do not invent sample sizes completed, response rates, experimental results, or ethics-board approval.\n\nResearch question: [Enter research question]\nSub-questions: [Enter sub-questions]\nPreferred method: [Enter research method]\nPeople or data I can access: [Enter access]\nTime limit: [Enter time]\nVerified literature notes (optional): [Paste source content]\n\nTask: Produce a Research Design Draft with:\n1) Research question\n2) Population and invitation plan (planned n, not fake completed n)\n3) Method and rationale\n4) Variables or analytic focus\n5) Data sources\n6) Planned analysis (plan, not results)\n7) Limits\n8) Ethics risks (consent, withdrawal, de-identification; this site has no auto ethics review)\n9) Citations only from sources I verified; otherwise “to add, do not cite”\n\nDo not generate fake data, fake IRB approval, or fake survey returns.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的研究設計是否把計畫寫成結果，引用能否回原文。不要補假文獻。",
    "enCoachPrompt": "Check whether my design writes plans as results and whether citations trace to originals. Add no fake sources.",
    "zhFeedbackPrompt": "【Prompt 3｜抄襲風險與引用對照檢查】\n大綱主張：\n（貼上）\n文獻卡：\n（貼上）\n一段我改寫的文字：\n（貼上）\n請檢查：改寫是否仍需引用、是否過近原文、主張與文獻用途是否匹配、有無可能的假引用風險描述。給修改建議與一段示範性「正確改寫＋文內引用」但不虛構頁碼；頁碼請標［待填］。",
    "enFeedbackPrompt": "[Prompt 3 | Plagiarism & Alignment Check] Review my paraphrase and cards for attribution risk and claim-evidence fit; demo a correct paraphrase with [page pending].",
    "zhExample": "方法＝訪談＋短問卷；n＝計畫 12 人，不是已完成 12 人；引用格式待對照原文；無 IRB 證書宣稱。",
    "enExample": "Method = interviews + short survey; n = planned 12, not completed 12; citation format to check against the original; no IRB-certificate claim.",
    "zhPractice": "寫對象與邀請。；完成方法與分析計畫。；補倫理與已核對引用。；存設計草案。",
    "enPractice": "Write population and invites.; Finish method and analysis plan.; Add ethics and verified citations.; Save the draft.",
    "zhQuizItems": [
      {
        "q": "AI 產生的論文書目應如何處理？",
        "options": [
          "直接貼進參考書目",
          "預設不可信，必須用 Scholar／Crossref 等驗證後才用",
          "只要格式像 APA 就可以",
          "越多越好，真假無關"
        ],
        "answer": 1,
        "explain": "AI 可能幻覺出不存在的文獻。"
      },
      {
        "q": "關於 APA 第七版與改寫，下列何者正確？",
        "options": [
          "改寫後就不必引用",
          "改寫仍需引用；直接引句通常需要頁碼",
          "只有英文報告才要引用",
          "有參考書目就不必文內引用"
        ],
        "answer": 1,
        "explain": "思想來源要歸因；直接引句需頁碼等資訊。"
      },
      {
        "q": "文獻卡最重要的功能是？",
        "options": [
          "收集漂亮封面截圖",
          "對應大綱證據空位並記錄用途與可追溯資訊",
          "取代閱讀原文",
          "讓 AI 自動生成假數據"
        ],
        "answer": 1,
        "explain": "文獻卡是為論證服務的可追溯筆記。"
      }
    ],
    "enQuizItems": [
      {
        "q": "How should you treat AI-generated bibliography entries?",
        "options": [
          "Paste them immediately",
          "Treat as unverified until checked in Scholar/Crossref etc.",
          "APA-looking format is enough",
          "Quantity matters more than existence"
        ],
        "answer": 1,
        "explain": "Models can hallucinate sources."
      },
      {
        "q": "Which statement about APA 7th and paraphrasing is correct?",
        "options": [
          "Paraphrase needs no citation",
          "Paraphrase still needs citation; quotations usually need page numbers",
          "Only English papers need citations",
          "A reference list removes need for in-text citations"
        ],
        "answer": 1,
        "explain": "Attribute ideas; quote pages as required."
      },
      {
        "q": "What is the main job of a literature card?",
        "options": [
          "Collect cover screenshots",
          "Map sources to outline gaps with use and provenance",
          "Replace reading",
          "Let AI invent data"
        ],
        "answer": 1,
        "explain": "Cards serve argument with traceability."
      }
    ],
    "zhNotePrompt": "貼上方法、對象計畫、倫理風險、已核對引用清單。",
    "enNotePrompt": "Paste method, population plan, ethics risks, and verified citation list.",
    "zhDeliverableChecklist": [
      "有研究問題、對象、方法、資料來源、分析計畫",
      "有限制與倫理風險（含同意與可退出）",
      "人數為計畫而非已完成結果",
      "引用皆可回已核對來源或標待補",
      "沒有假數據或假審查",
      "沒有宣稱本站提供倫理審查或 Turnitin"
    ],
    "enDeliverableChecklist": [
      "Question, population, method, sources, analysis plan",
      "Limits and ethics risks including consent",
      "n is planned, not completed",
      "Citations verified or marked to-add",
      "No fake data or fake review",
      "No claim that this site provides ethics review or Turnitin"
    ],
    "zhScorecard": [
      "真實可驗證",
      "對應論點",
      "APA 正確",
      "改寫合規",
      "未讀不引"
    ],
    "enScorecard": [
      "Verifiable",
      "Claim-mapped",
      "APA accuracy",
      "Paraphrase compliance",
      "No unread cites"
    ],
    "id": "research-competition-L5",
    "lessonKey": "research-competition-L5",
    "zhOutputName": "研究設計草案",
    "enOutputName": "Research Design Draft",
    "zhObjectives": [
      "寫出對象、方法、資料來源與分析計畫",
      "把方法選擇對準 RQ 與子問題",
      "列出限制與倫理風險",
      "引用只使用已核對來源並標格式待人工核對",
      "存成研究設計草案"
    ],
    "enObjectives": [
      "Write population, method, sources, and analysis plan",
      "Align method with the RQ and sub-questions",
      "List limits and ethics risks",
      "Cite only verified sources; mark format for human check",
      "Save a Research Design Draft"
    ],
    "zhWhyItMatters": {
      "problem": "沒有設計就收集資料，容易題目與證據對不準，或事後用 AI 補假樣本。",
      "ineffective": "複製一篇論文方法卻改不了對象，或請 AI 產生已完成的 n=300。",
      "solution": "用草案固定問題、對象、方法、限制與倫理；文獻筆記只提供已核對的方法參考。"
    },
    "enWhyItMatters": {
      "problem": "Collecting data without a design misaligns evidence, or invites fake n from AI.",
      "ineffective": "Copying another paper’s method you cannot run, or asking AI for n=300 completed.",
      "solution": "Lock question, population, method, limits, and ethics; literature notes only supply verified method references."
    },
    "zhConceptBlocks": {
      "principles": [
        "方法服務問題",
        "計畫不是結果",
        "引用必須可回原文"
      ],
      "terms": [
        "對象",
        "方法",
        "變數／分析焦點",
        "倫理風險"
      ],
      "criteria": [
        "選法有理由",
        "人數是計畫不是完成數",
        "有限制與同意"
      ],
      "boundaries": [
        "避免：假 IRB",
        "避免：假回收率",
        "避免：未核對引用"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Methods serve questions",
        "A plan is not a result",
        "Citations must trace to originals"
      ],
      "terms": [
        "Population",
        "Method",
        "Variables / focus",
        "Ethics risks"
      ],
      "criteria": [
        "Rationale for method",
        "n is planned not completed",
        "Limits and consent"
      ],
      "boundaries": [
        "Avoid: fake IRB",
        "Avoid: fake response rates",
        "Avoid: unverified citations"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "商業競賽團隊想研究「學生訂閱服務需求」，還沒設計就請 AI 寫「我們調查了 500 人」。",
      "wrong": "把假樣本寫進設計，並用 AI 編造兩篇方法論文支撐。",
      "right": "寫計畫：方便抽樣校園社團 15 人訪談＋短問卷；n 為目標；引用只留已打開的一篇方法章。",
      "result": "一份誠實的研究設計草案。"
    },
    "enCaseStudyBlocks": {
      "problem": "A business-competition team studying student subscription demand asks AI to write “we surveyed 500 people” before designing.",
      "wrong": "Put a fake sample in the design and invent two methods papers.",
      "right": "Plan 15 club interviews plus a short survey; n is a target; cite only one opened methods chapter.",
      "result": "An honest Research Design Draft."
    },
    "zhWorkflowSteps": [
      {
        "do": "對齊 RQ 與可接觸對象",
        "why": "設計不能建立在虛構樣本",
        "input": "畫布+定義表",
        "output": "對象計畫",
        "check": "是否寫得出邀請管道"
      },
      {
        "do": "選方法並寫理由",
        "why": "方法要能回答子問題",
        "input": "子問題",
        "output": "選法說明",
        "check": "每子問題是否有證據類型"
      },
      {
        "do": "補限制、倫理、已核對引用",
        "why": "平台不會自動審查",
        "input": "方法草稿",
        "output": "設計草案",
        "check": "有無假完成數"
      },
      {
        "do": "用主 Prompt 結構化",
        "why": "檢查缺欄",
        "input": "草稿",
        "output": "完整草案",
        "check": "引用是否皆可回理解表"
      },
      {
        "do": "存檔",
        "why": "第 6 課分析計畫要沿用",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Align RQ with accessible people",
        "why": "Design cannot rest on a fictional sample",
        "input": "Canvas+definition",
        "output": "Population plan",
        "check": "Invitation path written?"
      },
      {
        "do": "Choose a method with rationale",
        "why": "Method must answer sub-questions",
        "input": "Sub-questions",
        "output": "Method note",
        "check": "Evidence type per sub-question?"
      },
      {
        "do": "Add limits, ethics, verified citations",
        "why": "The site will not review ethics for you",
        "input": "Method draft",
        "output": "Design draft",
        "check": "Any fake completed n?"
      },
      {
        "do": "Structure with the main prompt",
        "why": "Catch missing fields",
        "input": "Draft",
        "output": "Full draft",
        "check": "Every citation back to notes?"
      },
      {
        "do": "Save",
        "why": "Lesson 6 reuses this",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "要把 RQ 收成可執行研究設計時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請填寫研究方法]",
        "[請貼上來源內容]"
      ],
      "body": "你是研究設計教練。你只能把我提供的問題與方法選擇結構化，不得假造樣本數、回收率、實驗結果或已完成的倫理審查。\n\n我的研究問題：[請填寫研究問題]\n子問題：[請填寫]\n我傾向的方法：[請填寫研究方法]\n可接觸對象或資料：[請填寫]\n時間限制：[請填寫]\n已核對文獻筆記（可選）：[請貼上來源內容]\n\n任務：產出「研究設計草案」，包含：\n1) 研究問題\n2) 對象與抽樣／邀請方式（只根據我能接觸的人；人數寫計畫，不寫假完成數）\n3) 方法與選法理由\n4) 變數或分析焦點（若為質性，寫分析焦點而非假變數）\n5) 資料來源\n6) 預定分析方法（計畫，不是結果）\n7) 限制\n8) 倫理風險（知情同意、可退出、去識別；本平台沒有自動倫理審查）\n9) 引用：僅使用我已核對的來源；沒有則留空並標「待補，不引用」\n\n禁止產生假數據、假 IRB 批准、假問卷回收。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份含對象、方法、資料、分析計畫、限制與倫理風險的設計草案",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：誘導題／倫理檢查",
          "body": "請檢查我貼上的訪綱或問卷草稿是否有誘導題、雙重問題，以及知情同意是否缺漏。不要幫我填假回覆。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when turning the RQ into an executable design",
      "fields": [
        "[Enter research question]",
        "[Enter research method]",
        "[Paste source content]"
      ],
      "body": "You are a research-design coach. Structure my question and method choices. Do not invent sample sizes completed, response rates, experimental results, or ethics-board approval.\n\nResearch question: [Enter research question]\nSub-questions: [Enter sub-questions]\nPreferred method: [Enter research method]\nPeople or data I can access: [Enter access]\nTime limit: [Enter time]\nVerified literature notes (optional): [Paste source content]\n\nTask: Produce a Research Design Draft with:\n1) Research question\n2) Population and invitation plan (planned n, not fake completed n)\n3) Method and rationale\n4) Variables or analytic focus\n5) Data sources\n6) Planned analysis (plan, not results)\n7) Limits\n8) Ethics risks (consent, withdrawal, de-identification; this site has no auto ethics review)\n9) Citations only from sources I verified; otherwise “to add, do not cite”\n\nDo not generate fake data, fake IRB approval, or fake survey returns.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A design draft with population, method, data, analysis plan, limits, and ethics risks",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: leading-item and ethics check",
          "body": "Check my pasted instrument for leading or double-barreled items and missing consent language. Do not fill fake responses."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "寫對象與邀請方式",
        "standard": "必須是你能接觸的管道",
        "mistakes": "寫全國隨機抽樣但你做不到",
        "check": "下週能發出第一封邀請嗎？"
      },
      {
        "task": "完成方法、資料、分析計畫",
        "standard": "分析是預定不是結果",
        "mistakes": "寫出顯著差異但尚未收集資料",
        "check": "有沒有假 p 值？"
      },
      {
        "task": "寫倫理風險與已核對引用",
        "standard": "沒有來源就留白",
        "mistakes": "AI 補兩篇方法文獻",
        "check": "每筆能否打開原文？"
      },
      {
        "task": "存成研究設計草案",
        "standard": "九個區塊齊",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Write population and invitation path",
        "standard": "Must be a channel you have",
        "mistakes": "National random sample you cannot run",
        "check": "Can you send the first invite next week?"
      },
      {
        "task": "Finish method, data, analysis plan",
        "standard": "Analysis is planned not found",
        "mistakes": "Writing significant differences with no data",
        "check": "Any fake p-values?"
      },
      {
        "task": "Write ethics risks and verified citations",
        "standard": "Leave blank if no source",
        "mistakes": "AI added two methods papers",
        "check": "Can you open each original?"
      },
      {
        "task": "Save the Research Design Draft",
        "standard": "Core blocks present",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "設計裡出現「已證明有效」",
        "why": "尚未收集資料",
        "fix": "改成預定步驟與成功標準"
      },
      {
        "error": "APA 由 AI 一次生成",
        "why": "標點與年份常錯",
        "fix": "逐筆對照原文首頁"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Design says “already proven effective”",
        "why": "No data yet",
        "fix": "Write planned steps and success criteria"
      },
      {
        "error": "APA generated in one shot",
        "why": "Punctuation and years often wrong",
        "fix": "Check each item against the first page"
      }
    ],
    "zhNextStep": "用這份設計寫第 6 課資料整理與分析計畫。還沒有資料就不要寫結果。",
    "enNextStep": "Use this design for Lesson 6’s data analysis plan. Do not write results if you have no data yet.",
    "zhSummary": [
      "本堂成果：研究設計草案",
      "AI 只結構化",
      "不得假造數據與審查"
    ],
    "enSummary": [
      "Deliverable: Research Design Draft",
      "AI only structures",
      "No fake data or reviews"
    ],
    "zhRubric": [
      {
        "name": "問題方法一致",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "可執行性",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "倫理完整",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "無假數據",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Question-method fit",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Executability",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Ethics completeness",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No fake data",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "中階 / Intermediate",
    "zhTitle": "第6課：整理文獻觀點，建立比較與筆記結構",
    "enTitle": "Lesson 6: Organize source viewpoints into comparison and note structures",
    "zhValueTip": "先比較你真正擁有的資料與文獻觀點；缺的資料要標缺，不可請 AI 補值。",
    "enValueTip": "Compare viewpoints and data you actually have. Mark gaps; do not ask AI to fill values.",
    "zhOutcome": "資料整理與分析計畫",
    "enOutcome": "Data Analysis Plan",
    "zhConcept": "資料整理與分析計畫說明你有什麼、缺什麼、怎麼清、問什麼、用什麼方法、預期什麼圖、如何抓錯。文獻比較可以放在「別人怎麼做／發現什麼（已核對）」欄，不能搬進「我的結果」。AI 不得捏造缺失數據。",
    "enConcept": "The plan states what you have, what you lack, cleaning, questions, methods, planned charts, and error checks. Literature comparison belongs in a verified “others found” column, not in “my results.” AI must not invent missing data.",
    "zhCaseStudy": "訂閱服務小組把「AI 補 32 筆」從試算表刪除。分析計畫寫：已有＝8 份態度題；未收集＝訪談逐字稿 0；清理＝統一「每月花費」單位；分析問題＝學生最常提到的取消原因類型；預期圖＝長條圖（待有資料再畫）；檢查＝同一人重填。文獻中的產業報告百分比留在 Secondary 欄。",
    "enCaseStudy": "The team deleted 32 AI-padded rows. The plan listed 8 attitude surveys as existing, zero transcripts, unit cleaning for spend, an analysis question on cancellation reasons, a bar chart to draw later, and a duplicate-response check. Industry-report percentages stayed in the secondary column.",
    "zhWorkflow": [
      "盤點已有／未有",
      "寫清理與檢查",
      "對準 RQ 規劃分析與圖",
      "用 Prompt 禁止補假值",
      "存成資料整理與分析計畫"
    ],
    "enWorkflow": [
      "Inventory have/missing",
      "Write cleaning and checks",
      "Plan analysis and charts",
      "Ban fake fills",
      "Save the analysis plan"
    ],
    "zhCommonMistakes": [
      "AI 補缺失值",
      "文獻百分比當自己的結果",
      "未收集就寫顯著",
      "不檢查重複與單位",
      "圖表與 RQ 無關"
    ],
    "enCommonMistakes": [
      "AI-imputed gaps",
      "Literature % as your results",
      "Significance with no data",
      "No duplicate/unit checks",
      "Charts off the RQ"
    ],
    "zhExcellentExample": "兩欄分開、有檢查、圖無假值、文獻不混入結果。",
    "enExcellentExample": "Two columns, checks present, charts empty of fake values, literature not mixed into results.",
    "zhPrompt": "你是資料分析計畫教練。不得捏造缺失數據、填補假值、或輸出已完成的統計結果。\n\n我的研究問題：[請填寫研究問題]\n我實際擁有或預計收集的資料（格式、欄位、筆數計畫）：[請填寫]\n研究方法：[請填寫研究方法]\n目前缺漏：[請填寫]\n若有已核對的分析做法筆記：[請貼上來源內容]\n\n任務：產出「資料整理與分析計畫」，包含：\n1) 有哪些資料（已有／尚未收集，分開寫）\n2) 資料格式\n3) 需要清理什麼\n4) 分析問題（對準 RQ）\n5) 分析方法\n6) 預期圖表（圖表類型與要回答的問題；不是假圖數據）\n7) 如何檢查錯誤（重複、缺漏、編碼不一致）\n8) 若資料尚未收集：只輸出計畫，結果欄留空\n\n禁止：幫我填補不存在的問卷答案、訪談逐字稿或實驗數據。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a data-analysis-plan coach. Do not invent missing data, impute fake values, or output completed statistics.\n\nResearch question: [Enter research question]\nData I have or plan to collect (format, fields, planned n): [Enter data]\nMethod: [Enter research method]\nCurrent gaps: [Enter gaps]\nVerified analysis notes if any: [Paste source content]\n\nTask: Produce a Data Analysis Plan with:\n1) What data exist vs not yet collected\n2) Data format\n3) What needs cleaning\n4) Analysis questions aligned to the RQ\n5) Analysis methods\n6) Planned charts (type and question—not fake values)\n7) Error checks (duplicates, missingness, coding drift)\n8) If data are not collected yet: plan only; leave results blank\n\nForbidden: filling nonexistent survey answers, transcripts, or experimental data.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的分析計畫是否把文獻當自己的結果，或請模型補值。不要幫我填假數據。",
    "enCoachPrompt": "Check whether my plan treats literature as my results or asks the model to fill values. Fill no fake data.",
    "zhFeedbackPrompt": "【Prompt 3｜心智圖驗收】\n以下是我的心智圖文字版與複習路徑：\n（貼上）\n請評分：中心是否可考、關係是否正確、路徑是否 15 分鐘可走完、是否過載。給精簡版結構。",
    "enFeedbackPrompt": "[Prompt 3 | Map Review] Score center quality, relation accuracy, 15-minute path fit, and overload; provide a leaner structure.",
    "zhExample": "已有：8 份問卷。未有：訪談。預期圖：取消原因長條圖（無數據）。錯誤檢查：重複 Email。",
    "enExample": "Have: 8 surveys. Missing: interviews. Planned chart: cancellation-reason bars (no values yet). Check: duplicate emails.",
    "zhPractice": "盤點已有未有。；寫清理與檢查。；規劃分析與圖（無假值）。；存分析計畫。",
    "enPractice": "Inventory have/missing.; Write cleaning and checks.; Plan analysis and charts without fake values.; Save the plan.",
    "zhQuizItems": [
      {
        "q": "心智圖用在大學筆記時，核心價值是？",
        "options": [
          "把字變小、塞更多內容",
          "呈現概念關係與複習路徑，而不只是條列",
          "取代所有公式推導",
          "避免任何細節"
        ],
        "answer": 1,
        "explain": "心智圖強在關係與路徑，不是壓縮字數比賽。"
      },
      {
        "q": "用 AI 產生心智圖後，你最該檢查什麼？",
        "options": [
          "顏色是否好看",
          "分支關係是否符合講義／課堂原意，有無錯誤連結",
          "能不能直接交作業不改",
          "節點是否越多越好"
        ],
        "answer": 1,
        "explain": "錯誤關係會讓複習記錯結構。"
      },
      {
        "q": "知識圖譜相對一般清單，多了什麼？",
        "options": [
          "只有更長段落",
          "概念之間的關係類型（如「導致」「屬於」「對比」）",
          "必須手寫藝術字",
          "不能連接例子"
        ],
        "answer": 1,
        "explain": "圖譜強調節點與關係類型。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What is the core value of mind maps for university notes?",
        "options": [
          "Shrink text to cram more words",
          "Show concept relations and a review path, not only a list",
          "Replace all derivations",
          "Avoid all details"
        ],
        "answer": 1,
        "explain": "Relations and paths matter most."
      },
      {
        "q": "After AI drafts a mind map, you should mainly check?",
        "options": [
          "Whether colors look nice",
          "Whether relations match the lecture/PDF and no false links exist",
          "Whether you can submit without edits",
          "Whether more nodes are always better"
        ],
        "answer": 1,
        "explain": "Wrong links create wrong understanding."
      },
      {
        "q": "Compared with a flat list, a knowledge graph adds?",
        "options": [
          "Only longer paragraphs",
          "Typed relations between concepts (causes, belongs-to, contrasts)",
          "Mandatory calligraphy",
          "A ban on examples"
        ],
        "answer": 1,
        "explain": "Graphs encode relation types."
      }
    ],
    "zhNotePrompt": "貼上已有／未有資料、分析問題、檢查方式。",
    "enNotePrompt": "Paste have/missing data, analysis questions, and checks.",
    "zhDeliverableChecklist": [
      "已有資料與尚未收集已分開",
      "有格式、清理與錯誤檢查",
      "分析問題對準 RQ",
      "預期圖表沒有假數據",
      "沒有請 AI 捏造缺失值",
      "文獻觀點未寫成自己的結果"
    ],
    "enDeliverableChecklist": [
      "Existing vs not-yet-collected data are split",
      "Format, cleaning, and error checks included",
      "Analysis questions match the RQ",
      "Planned charts have no fake values",
      "AI did not invent missing values",
      "Literature not labeled as your results"
    ],
    "zhScorecard": [
      "中心清楚",
      "關係正確",
      "可講解",
      "路徑可行",
      "與筆記連結"
    ],
    "enScorecard": [
      "Center clarity",
      "Relation accuracy",
      "Explainability",
      "Path feasibility",
      "Note linking"
    ],
    "id": "research-competition-L6",
    "lessonKey": "research-competition-L6",
    "zhOutputName": "資料整理與分析計畫",
    "enOutputName": "Data Analysis Plan",
    "zhObjectives": [
      "分開已有資料與尚未收集資料",
      "寫清理步驟與錯誤檢查",
      "讓分析問題對準 RQ",
      "規劃圖表類型但不填假數據",
      "存成資料整理與分析計畫"
    ],
    "enObjectives": [
      "Separate data you have from data not yet collected",
      "Write cleaning steps and error checks",
      "Align analysis questions with the RQ",
      "Plan chart types without fake values",
      "Save a Data Analysis Plan"
    ],
    "zhWhyItMatters": {
      "problem": "一有表格就請 AI「直接跑結論」，缺值被補假，文獻觀點也被寫成自己的發現。",
      "ineffective": "把第 4 課文獻結果與自己未收集的資料混在同一欄「結果」。",
      "solution": "用分析計畫分開資料來源、清理、分析問題與檢查方式。"
    },
    "enWhyItMatters": {
      "problem": "People ask AI to “run the conclusion” on a half-empty table; gaps get faked and literature is treated as their finding.",
      "ineffective": "Mixing Lesson 4 results with uncollected data in one “results” column.",
      "solution": "Use an analysis plan to split sources, cleaning, questions, and checks."
    },
    "zhConceptBlocks": {
      "principles": [
        "沒有的資料就標沒有",
        "文獻觀點 ≠ 你的結果",
        "先計畫再分析"
      ],
      "terms": [
        "資料格式",
        "清理",
        "分析問題",
        "錯誤檢查"
      ],
      "criteria": [
        "已有／未有分開",
        "圖表無假值",
        "對準 RQ"
      ],
      "boundaries": [
        "避免：AI 補缺失",
        "避免：把文獻當自己的數據",
        "避免：未收集就寫顯著"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Mark missing as missing",
        "Literature ≠ your results",
        "Plan before analyzing"
      ],
      "terms": [
        "Data format",
        "Cleaning",
        "Analysis questions",
        "Error checks"
      ],
      "criteria": [
        "Have/missing split",
        "Charts without fake values",
        "Aligned to RQ"
      ],
      "boundaries": [
        "Avoid: AI-filled gaps",
        "Avoid: literature as your data",
        "Avoid: significance with no data"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "小組問卷只收回 8 份，有人請 AI 補成 40 份再畫圖。",
      "wrong": "把補值當成真實填答，並把文獻裡的百分比寫進自己的結果。",
      "right": "標示 n=8 為已有、目標 n 另列；圖表先空；錯誤檢查含重複與漏答。",
      "result": "一份誠實的資料整理與分析計畫。"
    },
    "enCaseStudyBlocks": {
      "problem": "A team has 8 surveys and asks AI to pad them to 40 before charting.",
      "wrong": "Treat imputed rows as real answers and copy literature percentages into “our results.”",
      "right": "Mark n=8 as existing, keep target n separate, leave charts empty, check duplicates and missing items.",
      "result": "An honest Data Analysis Plan."
    },
    "zhWorkflowSteps": [
      {
        "do": "盤點已有與未有資料",
        "why": "混在一起會造假",
        "input": "設計草案+檔案",
        "output": "資料清單",
        "check": "是否分開兩欄"
      },
      {
        "do": "寫清理與錯誤檢查",
        "why": "髒資料會帶出假結論",
        "input": "原始檔",
        "output": "清理清單",
        "check": "有無單位與重複檢查"
      },
      {
        "do": "對準 RQ 寫分析問題與圖表類型",
        "why": "圖要回答問題",
        "input": "RQ",
        "output": "分析計畫",
        "check": "圖中是否已填假數"
      },
      {
        "do": "用主 Prompt 檢查缺漏規則",
        "why": "禁止補假值",
        "input": "計畫草稿",
        "output": "完整計畫",
        "check": "結果欄是否在無資料時留空"
      },
      {
        "do": "存檔",
        "why": "第 7 課論證要知道證據邊界",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Inventory have vs missing",
        "why": "Mixing invites fraud",
        "input": "Design+files",
        "output": "Data list",
        "check": "Two columns?"
      },
      {
        "do": "Write cleaning and error checks",
        "why": "Dirty data fake conclusions",
        "input": "Raw files",
        "output": "Cleaning list",
        "check": "Units and duplicates?"
      },
      {
        "do": "Write analysis questions and chart types",
        "why": "Charts must answer questions",
        "input": "RQ",
        "output": "Plan",
        "check": "Fake numbers in charts?"
      },
      {
        "do": "Run the prompt for missing-data rules",
        "why": "No fake fills",
        "input": "Draft",
        "output": "Full plan",
        "check": "Results blank if no data?"
      },
      {
        "do": "Save",
        "why": "Lesson 7 needs evidence bounds",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "開始清理或分析前，先寫分析計畫時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請填寫研究方法]",
        "[請填寫]"
      ],
      "body": "你是資料分析計畫教練。不得捏造缺失數據、填補假值、或輸出已完成的統計結果。\n\n我的研究問題：[請填寫研究問題]\n我實際擁有或預計收集的資料（格式、欄位、筆數計畫）：[請填寫]\n研究方法：[請填寫研究方法]\n目前缺漏：[請填寫]\n若有已核對的分析做法筆記：[請貼上來源內容]\n\n任務：產出「資料整理與分析計畫」，包含：\n1) 有哪些資料（已有／尚未收集，分開寫）\n2) 資料格式\n3) 需要清理什麼\n4) 分析問題（對準 RQ）\n5) 分析方法\n6) 預期圖表（圖表類型與要回答的問題；不是假圖數據）\n7) 如何檢查錯誤（重複、缺漏、編碼不一致）\n8) 若資料尚未收集：只輸出計畫，結果欄留空\n\n禁止：幫我填補不存在的問卷答案、訪談逐字稿或實驗數據。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份分開「已有／未收集」、含清理與錯誤檢查的分析計畫",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：缺漏資料怎麼辦",
          "body": "請根據我貼的欄位清單，列出哪些缺漏必須停止分析、哪些可以標「未知」。不要幫我補假值。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use before cleaning or analyzing, to write the analysis plan",
      "fields": [
        "[Enter research question]",
        "[Enter research method]",
        "[Enter data]"
      ],
      "body": "You are a data-analysis-plan coach. Do not invent missing data, impute fake values, or output completed statistics.\n\nResearch question: [Enter research question]\nData I have or plan to collect (format, fields, planned n): [Enter data]\nMethod: [Enter research method]\nCurrent gaps: [Enter gaps]\nVerified analysis notes if any: [Paste source content]\n\nTask: Produce a Data Analysis Plan with:\n1) What data exist vs not yet collected\n2) Data format\n3) What needs cleaning\n4) Analysis questions aligned to the RQ\n5) Analysis methods\n6) Planned charts (type and question—not fake values)\n7) Error checks (duplicates, missingness, coding drift)\n8) If data are not collected yet: plan only; leave results blank\n\nForbidden: filling nonexistent survey answers, transcripts, or experimental data.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "An analysis plan that separates existing vs missing data, with cleaning and error checks",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: missing-data rules",
          "body": "From my field list, say which gaps must stop analysis and which can be marked unknown. Do not impute fake values."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "列出已有／未有資料與格式",
        "standard": "兩欄分開",
        "mistakes": "把文獻當已有數據",
        "check": "能否指出檔案位置？"
      },
      {
        "task": "寫清理與錯誤檢查",
        "standard": "至少 3 項檢查",
        "mistakes": "沒有檢查就分析",
        "check": "缺漏時是否停止？"
      },
      {
        "task": "寫分析問題與預期圖（無假值）",
        "standard": "圖類型對準問題",
        "mistakes": "圖裡已有 AI 編的百分比",
        "check": "數字能否指回原始表？"
      },
      {
        "task": "存成資料整理與分析計畫",
        "standard": "結果欄在無資料時空白",
        "mistakes": "空白儲存整份",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "List have/missing data and formats",
        "standard": "Two columns",
        "mistakes": "Literature as your data",
        "check": "Can you point to the file?"
      },
      {
        "task": "Write cleaning and error checks",
        "standard": "At least 3 checks",
        "mistakes": "Analyze with no checks",
        "check": "Do you stop when data are missing?"
      },
      {
        "task": "Write analysis questions and chart types without fake values",
        "standard": "Chart type matches the question",
        "mistakes": "AI percentages already in the chart",
        "check": "Can numbers trace to a sheet?"
      },
      {
        "task": "Save the Data Analysis Plan",
        "standard": "Results blank if no data",
        "mistakes": "Entirely blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "請 AI 把 8 筆「合理補齊」成 40 筆",
        "why": "那是捏造參與者",
        "fix": "維持 n=8 並討論限制"
      },
      {
        "error": "比較表把三篇論文結果合成「本研究發現」",
        "why": "那是別人的證據",
        "fix": "標成文獻觀點，自己的結果另欄"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Ask AI to “reasonably pad” 8 rows to 40",
        "why": "That invents participants",
        "fix": "Keep n=8 and discuss limits"
      },
      {
        "error": "Merge three papers into “our findings”",
        "why": "Those are others’ evidence",
        "fix": "Label as literature; keep your results separate"
      }
    ],
    "zhNextStep": "用分析計畫進入第 7 課，把主張與證據對起來。證據不足就標不足。",
    "enNextStep": "Take the plan into Lesson 7 and map claims to evidence. If evidence is thin, say so.",
    "zhSummary": [
      "本堂成果：資料整理與分析計畫",
      "缺資料就標缺",
      "文獻不是你的數據"
    ],
    "enSummary": [
      "Deliverable: Data Analysis Plan",
      "Mark missing as missing",
      "Literature is not your data"
    ],
    "zhRubric": [
      {
        "name": "已有未有分開",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "分析對準 RQ",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "錯誤檢查",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "無捏造數據",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Have vs missing split",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Analysis matches RQ",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Error checks",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No invented data",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "id": "research-competition-L7",
    "lessonKey": "research-competition-L7",
    "zhTitle": "第7課：設計研究方法：問卷、訪談或資料收集架構",
    "enTitle": "Lesson 7: Design research methods: survey, interview, or data collection",
    "zhConcept": "即使本課標題強調方法，這一課要把方法收到論證：你的問卷、訪談或既有資料能支持哪一句主張、不能支持哪一句。證據不足時，應寫「尚不足以主張」，而不是請 AI 補一段合理故事。",
    "enConcept": "Even though the lesson title emphasizes methods, this step maps methods onto argument: which claims your survey, interviews, or records can support—and which they cannot. If evidence is insufficient, write that; do not ask AI for a plausible story.",
    "zhPrompt": "你是研究論證教練。證據不足時，必須明確寫「不足」，不得把合理推測寫成研究結果。\n\n我的研究問題：[請填寫研究問題]\n我的核心主張草稿：[請填寫]\n我實際擁有的證據（貼資料摘要或已核對文獻筆記）：\n[請貼上來源內容]\n研究方法：[請填寫研究方法]\n已知限制：[請填寫]\n\n任務：產出「研究論證與證據鏈」，包含：\n1) 核心主張（可檢驗）\n2) 支持證據（每條標來源類型：我的資料／已核對文獻／僅推測）\n3) 反例或替代解釋\n4) 限制\n5) 可被質疑的位置\n6) 下一步需要補什麼資料\n7) 必須刪除或降級的句子（把推測當結果者）\n\n禁止：把 AI 的合理推測標成「本研究發現」。沒有資料就不要寫結果。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are an argument-mapping coach. When evidence is thin, write “insufficient.” Do not turn plausible speculation into findings.\n\nResearch question: [Enter research question]\nDraft claim: [Enter claim]\nEvidence I actually have (data summary or verified notes):\n[Paste source content]\nMethod: [Enter research method]\nKnown limits: [Enter limits]\n\nTask: Produce an Evidence & Argument Map with:\n1) Core claim (testable)\n2) Supporting evidence (tag: my data / verified literature / speculation only)\n3) Counterexamples or alternative explanations\n4) Limits\n5) Where a critic could attack\n6) What data to collect next\n7) Sentences to delete or downgrade (speculation written as findings)\n\nForbidden: labeling AI speculation as “this study found.” Write no results without data.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhExample": "主張限縮在樣本內；「多數大學生」改成「本樣本 8 人中的 5 人」；無訪談逐字稿的機制解釋標為推測。",
    "enExample": "Claim stays inside the sample; “most university students” becomes “5 of 8 in this sample”; mechanism talk without transcripts is speculation.",
    "zhPractice": "寫可檢驗主張。；標證據類型。；補反例與待補資料。；存證據鏈。",
    "enPractice": "Write a testable claim.; Tag evidence.; Add counters and next data.; Save the map.",
    "zhFeedbackPrompt": "你是一位研究方法助教。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 問題—方法一致性\n- 工具品質\n- 倫理完整度\n- 可執行性\n- 是否禁止假數據\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
    "enFeedbackPrompt": "Act as a research methods TA. Score 1-10 for: Question-method fit, Instrument quality, Ethics completeness, Executability, No fake data. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
    "zhQuizItems": [
      {
        "q": "選方法前應先釐清？",
        "options": [
          "研究問題與證據需求",
          "先決定題數越多越好",
          "先寫結論"
        ],
        "answer": 0,
        "explain": "方法服務問題。"
      },
      {
        "q": "誘導題的問題是？",
        "options": [
          "暗示「正確答案」扭曲回答",
          "讓受訪者更容易理解",
          "一定提高回收率"
        ],
        "answer": 0,
        "explain": "傷害效度。"
      },
      {
        "q": "倫理至少應包含？",
        "options": [
          "知情同意與可退出",
          "強迫填完所有題",
          "公開真實姓名才權威"
        ],
        "answer": 0,
        "explain": "保護參與者。"
      },
      {
        "q": "AI 可協助？",
        "options": [
          "檢查對齊與誘導題",
          "直接捏造訪談結果",
          "略過限制不寫"
        ],
        "answer": 0,
        "explain": "品質檢查。"
      },
      {
        "q": "本課產出？",
        "options": [
          "方法說明＋工具初稿",
          "完整統計報告",
          "已發表論文"
        ],
        "answer": 0,
        "explain": "架構而非結果。"
      }
    ],
    "enQuizItems": [
      {
        "q": "選方法前應先釐清？",
        "options": [
          "研究問題與證據需求",
          "先決定題數越多越好",
          "先寫結論"
        ],
        "answer": 0,
        "explain": "方法服務問題。"
      },
      {
        "q": "誘導題的問題是？",
        "options": [
          "暗示「正確答案」扭曲回答",
          "讓受訪者更容易理解",
          "一定提高回收率"
        ],
        "answer": 0,
        "explain": "傷害效度。"
      },
      {
        "q": "倫理至少應包含？",
        "options": [
          "知情同意與可退出",
          "強迫填完所有題",
          "公開真實姓名才權威"
        ],
        "answer": 0,
        "explain": "保護參與者。"
      },
      {
        "q": "AI 可協助？",
        "options": [
          "檢查對齊與誘導題",
          "直接捏造訪談結果",
          "略過限制不寫"
        ],
        "answer": 0,
        "explain": "品質檢查。"
      },
      {
        "q": "本課產出？",
        "options": [
          "方法說明＋工具初稿",
          "完整統計報告",
          "已發表論文"
        ],
        "answer": 0,
        "explain": "架構而非結果。"
      }
    ],
    "zhOutcome": "研究論證與證據鏈",
    "enOutcome": "Evidence & Argument Map",
    "zhValueTip": "方法產出的是證據，不是結論；證據不足時，不把 AI 推測當成研究結果。",
    "enValueTip": "Methods produce evidence, not conclusions. When evidence is thin, do not treat AI speculation as findings.",
    "zhCaseStudy": "訂閱小組把「證明有市場」改成主張：「在本社團便利樣本中，取消原因以價格為主」。支持證據：8 份問卷中 5 人勾選價格（我的資料）。反例：2 人勾選「內容不符」。限制：非隨機、n 小。可被質疑：自陳偏差。下一步：補 3 個非社團受訪者。他們拒絕 AI 把 n 寫成 80。",
    "enCaseStudy": "The team changed “we proved a market” to “in this club convenience sample, price was the most ticked cancellation reason (5 of 8).” Counter: 2 ticked poor content. Limits: non-random, small n. Attack: self-report. Next: 3 non-club interviewees. They refused to let AI write n=80.",
    "zhExcellentExample": "主張有範圍、證據有類型、有反例、無推測當發現。",
    "enExcellentExample": "Scoped claim, tagged evidence, a counter, no speculation-as-finding.",
    "zhWorkflow": [
      "寫可檢驗主張",
      "掛證據並標類型",
      "補反例與限制",
      "降級過度推論",
      "存成研究論證與證據鏈"
    ],
    "enWorkflow": [
      "Write a testable claim",
      "Tag evidence",
      "Add counters and limits",
      "Downgrade over-claims",
      "Save the map"
    ],
    "zhCommonMistakes": [
      "無資料寫證明",
      "AI 推測當發現",
      "忽略反例",
      "把文獻當自己的訪談",
      "樣本寫成全體"
    ],
    "enCommonMistakes": [
      "Proof with no data",
      "AI speculation as findings",
      "Ignoring counters",
      "Literature as your interviews",
      "Sample written as population"
    ],
    "zhDeliverableChecklist": [
      "核心主張可檢驗且有範圍",
      "每條證據已標我的資料／文獻／推測",
      "有反例或替代解釋",
      "有限制與可被質疑處",
      "有下一步要補的資料",
      "沒有把 AI 推測寫成研究發現"
    ],
    "enDeliverableChecklist": [
      "Claim is testable and scoped",
      "Evidence tagged as data / literature / speculation",
      "A counter or alternative is listed",
      "Limits and attack points included",
      "Next data named",
      "AI speculation not written as findings"
    ],
    "zhScorecard": [
      "問題—方法一致性",
      "工具品質",
      "倫理完整度",
      "可執行性",
      "是否禁止假數據"
    ],
    "enScorecard": [
      "Question-method fit",
      "Instrument quality",
      "Ethics completeness",
      "Executability",
      "No fake data"
    ],
    "zhNotePrompt": "貼上主張、支持證據（含類型）、反例、待補資料。",
    "enNotePrompt": "Paste claim, tagged evidence, counters, and next data.",
    "zhCoachPrompt": "請指出我哪些句子超過證據。不要幫我補研究結果。",
    "enCoachPrompt": "Flag sentences that exceed my evidence. Do not add findings.",
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "中階 / Intermediate",
    "zhOutputName": "研究論證與證據鏈",
    "enOutputName": "Evidence & Argument Map",
    "zhObjectives": [
      "寫出可檢驗的核心主張",
      "為每條證據標來源類型",
      "列出反例、限制與可被質疑處",
      "標出下一步要補的資料",
      "存成研究論證與證據鏈"
    ],
    "enObjectives": [
      "Write a testable core claim",
      "Tag each evidence item by source type",
      "List counters, limits, and attack points",
      "Name data still needed",
      "Save an Evidence & Argument Map"
    ],
    "zhWhyItMatters": {
      "problem": "有方法架構卻把「應該會如此」寫成發現，競賽評審一看就知道超過證據。",
      "ineffective": "問卷還沒收回就寫「證明學生都需要訂閱」；或把文獻當自己的訪談結果。",
      "solution": "用證據鏈對齊主張與資料，證據不足就降級措辭。"
    },
    "enWhyItMatters": {
      "problem": "A method exists, but “it should be true” is written as a finding—judges will see the over-claim.",
      "ineffective": "Writing “students need subscriptions” before surveys return, or treating literature as your interviews.",
      "solution": "Map claims to data; downgrade wording when evidence is thin."
    },
    "zhConceptBlocks": {
      "principles": [
        "主張必須可被證據檢驗",
        "推測要標推測",
        "方法服務論證"
      ],
      "terms": [
        "核心主張",
        "支持證據",
        "反例",
        "可被質疑處"
      ],
      "criteria": [
        "每條證據有類型",
        "有限制",
        "有待補資料"
      ],
      "boundaries": [
        "避免：AI 推測當發現",
        "避免：無資料寫證明",
        "避免：忽略反例"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Claims must be testable",
        "Label speculation",
        "Methods serve the argument"
      ],
      "terms": [
        "Core claim",
        "Supporting evidence",
        "Counterexample",
        "Attack point"
      ],
      "criteria": [
        "Each item tagged",
        "Limits listed",
        "Next data named"
      ],
      "boundaries": [
        "Avoid: AI speculation as findings",
        "Avoid: proof with no data",
        "Avoid: ignoring counters"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "小組訪了 4 人，AI 幫他們寫成「多數學生強烈需要付費訂閱」。",
      "wrong": "把 4 人便利樣本寫成全體學生的證明。",
      "right": "主張降級為「這 4 名受訪者提到價格敏感」；列出反例（有人願付費換時間）；待補：更多樣本或不同科系。",
      "result": "一份不過度推論的研究論證與證據鏈。"
    },
    "enCaseStudyBlocks": {
      "problem": "After 4 interviews, AI writes “most students strongly need paid subscriptions.”",
      "wrong": "Treat a convenience sample of 4 as proof about all students.",
      "right": "Downgrade to “these 4 interviewees mentioned price sensitivity”; add a counter (someone pays for time); next: more majors.",
      "result": "An Evidence & Argument Map that does not over-claim."
    },
    "zhWorkflowSteps": [
      {
        "do": "寫核心主張（可檢驗）",
        "why": "口號無法對證據",
        "input": "RQ+資料",
        "output": "主張句",
        "check": "能否被推翻"
      },
      {
        "do": "掛上證據並標類型",
        "why": "混來源會造假",
        "input": "分析計畫+理解表",
        "output": "證據鏈",
        "check": "有無「僅推測」混入發現"
      },
      {
        "do": "補反例、限制、質疑點",
        "why": "沒有反例的論證很脆",
        "input": "證據鏈",
        "output": "完整圖",
        "check": "是否寫下一步資料"
      },
      {
        "do": "用主 Prompt 降級過度推論",
        "why": "抓出證明／多數／顯著等詞",
        "input": "草稿",
        "output": "已降級版本",
        "check": "無資料處是否改為不足"
      },
      {
        "do": "存檔",
        "why": "第 8 課大綱要沿用主張邊界",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Write a testable claim",
        "why": "Slogans cannot meet evidence",
        "input": "RQ+data",
        "output": "Claim",
        "check": "Could it be overturned?"
      },
      {
        "do": "Attach tagged evidence",
        "why": "Mixing sources hides provenance",
        "input": "Analysis plan+notes",
        "output": "Map",
        "check": "Speculation labeled as finding?"
      },
      {
        "do": "Add counters, limits, attack points",
        "why": "No counter = brittle",
        "input": "Map",
        "output": "Full map",
        "check": "Next data named?"
      },
      {
        "do": "Downgrade over-claims with the prompt",
        "why": "Catch prove/most/significant",
        "input": "Draft",
        "output": "Downgraded version",
        "check": "Insufficient where no data?"
      },
      {
        "do": "Save",
        "why": "Lesson 8 reuses claim bounds",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "要把主張與證據對起來、避免超過證據時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請貼上來源內容]",
        "[請填寫研究方法]"
      ],
      "body": "你是研究論證教練。證據不足時，必須明確寫「不足」，不得把合理推測寫成研究結果。\n\n我的研究問題：[請填寫研究問題]\n我的核心主張草稿：[請填寫]\n我實際擁有的證據（貼資料摘要或已核對文獻筆記）：\n[請貼上來源內容]\n研究方法：[請填寫研究方法]\n已知限制：[請填寫]\n\n任務：產出「研究論證與證據鏈」，包含：\n1) 核心主張（可檢驗）\n2) 支持證據（每條標來源類型：我的資料／已核對文獻／僅推測）\n3) 反例或替代解釋\n4) 限制\n5) 可被質疑的位置\n6) 下一步需要補什麼資料\n7) 必須刪除或降級的句子（把推測當結果者）\n\n禁止：把 AI 的合理推測標成「本研究發現」。沒有資料就不要寫結果。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份含主張、證據、反例、限制與待補資料的論證圖",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：降級過度推論",
          "body": "請把我貼上的段落中，所有超過證據的句子改成「可能／尚不清楚」，並標原句問題。不要新增數據。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when mapping claims to evidence and preventing over-claiming",
      "fields": [
        "[Enter research question]",
        "[Paste source content]",
        "[Enter research method]"
      ],
      "body": "You are an argument-mapping coach. When evidence is thin, write “insufficient.” Do not turn plausible speculation into findings.\n\nResearch question: [Enter research question]\nDraft claim: [Enter claim]\nEvidence I actually have (data summary or verified notes):\n[Paste source content]\nMethod: [Enter research method]\nKnown limits: [Enter limits]\n\nTask: Produce an Evidence & Argument Map with:\n1) Core claim (testable)\n2) Supporting evidence (tag: my data / verified literature / speculation only)\n3) Counterexamples or alternative explanations\n4) Limits\n5) Where a critic could attack\n6) What data to collect next\n7) Sentences to delete or downgrade (speculation written as findings)\n\nForbidden: labeling AI speculation as “this study found.” Write no results without data.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A map with claim, evidence, counters, limits, and data still needed",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: downgrade over-claims",
          "body": "Rewrite over-claiming sentences I paste as “possible / still unclear” and name the problem. Add no data."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "寫 1 句可檢驗主張",
        "standard": "含對象與範圍",
        "mistakes": "寫成應該／一定",
        "check": "能否指出會推翻它的資料？"
      },
      {
        "task": "為每條證據標類型",
        "standard": "我的資料／已核對文獻／推測分開",
        "mistakes": "全部寫成發現",
        "check": "有沒有來源？"
      },
      {
        "task": "列出反例與待補資料",
        "standard": "至少 1 個反例或替代解釋",
        "mistakes": "只寫支持面",
        "check": "評審會問什麼？"
      },
      {
        "task": "存成研究論證與證據鏈",
        "standard": "含降級後的句子",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Write 1 testable claim",
        "standard": "Includes who and scope",
        "mistakes": "Should/must wording",
        "check": "What data would overturn it?"
      },
      {
        "task": "Tag each evidence item",
        "standard": "My data / verified literature / speculation",
        "mistakes": "Everything as a finding",
        "check": "Is there a source?"
      },
      {
        "task": "List a counter and next data",
        "standard": "At least one alternative",
        "mistakes": "Support only",
        "check": "What would a judge ask?"
      },
      {
        "task": "Save the Evidence & Argument Map",
        "standard": "Includes downgraded sentences",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "「AI 認為這一定代表市場很大」",
        "why": "模型沒有你的田野",
        "fix": "刪除或改為待驗證問題"
      },
      {
        "error": "方法章很完整就當成已有結果",
        "why": "設計≠發現",
        "fix": "結果只寫已收集的證據"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "“AI thinks this proves a huge market”",
        "why": "The model has no fieldwork",
        "fix": "Delete or turn into a to-test question"
      },
      {
        "error": "A complete methods section treated as results",
        "why": "Design ≠ findings",
        "fix": "Results only from collected evidence"
      }
    ],
    "zhNextStep": "用這份主張邊界寫第 8 課報告大綱。沒有的結果章就標「待資料」而不是請 AI 代寫發現。",
    "enNextStep": "Use these claim bounds for Lesson 8’s outline. Mark missing results as awaiting data instead of asking AI to write findings.",
    "zhSummary": [
      "本堂成果：研究論證與證據鏈",
      "方法服務主張",
      "不足就寫不足"
    ],
    "enSummary": [
      "Deliverable: Evidence & Argument Map",
      "Methods serve claims",
      "Say insufficient when it is"
    ],
    "zhRubric": [
      {
        "name": "主張可檢驗",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "證據標示誠實",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "有反例與限制",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "無推測當結果",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Testable claim",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Honest evidence tags",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Counters and limits",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No speculation-as-finding",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "中階 / Intermediate",
    "zhTitle": "第8課：整理分析結果，寫出專題論點結構",
    "enTitle": "Lesson 8: Organize findings into a project argument structure",
    "zhValueTip": "大綱可以先有；結果章只能放已有證據。AI 可搭骨架，不可代寫不存在的發現。",
    "enValueTip": "You can outline early. The results section may only hold evidence you have. AI may build the skeleton, not fake findings.",
    "zhOutcome": "研究報告／競賽書面結構",
    "enOutcome": "Research Report Outline",
    "zhConcept": "書面結構讓專題或競賽評審看懂你的論證路徑。AI 適合產生標題層級與提醒缺章，不適合填結果。沒有本平台自動產生正式 PDF 或自動投稿功能。",
    "enConcept": "The outline shows reviewers your argument path. AI can propose headings and missing sections; it must not fill results. This site does not auto-build a formal PDF or submit papers.",
    "zhCaseStudy": "團隊已有教室垃圾桶分類拍照盤點（他們自己做的），沒有介入實驗。大綱結果只描述盤點類別與數量；討論提出「可作為未來減量實驗的基線」；結論不寫已減少 40%。文獻節只放兩篇已打開的校園永續報告佔位。",
    "enCaseStudy": "They had a photo inventory of classroom bins they took themselves, and no intervention. Results described categories and counts only. Discussion called it a baseline for a future reduction trial. The conclusion did not claim a 40% cut. Literature slots held two opened campus sustainability reports.",
    "zhWorkflow": [
      "排出九段標題",
      "標真實度與人機分工",
      "產出大綱子彈",
      "刪虛構結果",
      "存成研究報告／競賽書面結構"
    ],
    "enWorkflow": [
      "Order nine headings",
      "Mark honesty and roles",
      "Generate outline bullets",
      "Delete fake results",
      "Save the outline"
    ],
    "zhCommonMistakes": [
      "AI 代寫結果",
      "結論超過證據",
      "文獻當自己的發現",
      "保證得獎",
      "沒有限制章"
    ],
    "enCommonMistakes": [
      "AI-written results",
      "Conclusion exceeds evidence",
      "Literature as your findings",
      "Prize guarantees",
      "No limits section"
    ],
    "zhExcellentExample": "九段齊、結果留白誠實、結論不超證據、有人機分工。",
    "enExcellentExample": "Nine parts, honest empty results, conclusion inside evidence, role split present.",
    "zhPrompt": "你是研究報告結構教練。可以協助架構，但不得代替學生產生不存在的研究結果。\n\n我的研究問題：[請填寫研究問題]\n證據鏈摘要：[請貼上來源內容]\n研究方法：[請填寫研究方法]\n哪些章節已有真實資料、哪些沒有：[請填寫]\n\n任務：產出「研究報告／競賽書面結構」，包含：\n1) 問題背景\n2) 研究問題\n3) 文獻（只列已核對來源的佔位，沒有就寫待補）\n4) 方法\n5) 分析\n6) 結果（無資料則寫「待資料，不虛構」）\n7) 討論\n8) 限制\n9) 結論（結論不得超過證據鏈）\n10) 各節「我寫／AI 可協助／不可交給 AI」\n\n輸出大綱層級（標題＋每節 2–4 個子彈）。禁止填入假結果段落。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a report-structure coach. You may help outline, but you must not generate nonexistent results.\n\nResearch question: [Enter research question]\nArgument-map summary: [Paste source content]\nMethod: [Enter research method]\nWhich sections have real data and which do not: [Enter status]\n\nTask: Produce a Research Report Outline with:\n1) Background\n2) Research question\n3) Literature (slots only for verified sources; else to-add)\n4) Method\n5) Analysis\n6) Results (“awaiting data, do not invent” if none)\n7) Discussion\n8) Limits\n9) Conclusion (must not exceed the argument map)\n10) Per section: I write / AI may help / must not give to AI\n\nOutput heading levels plus 2–4 bullets each. Do not fill fake results.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的大綱結果與結論是否虛構。不要幫我寫發現段落。",
    "enCoachPrompt": "Check whether my outline invents results or conclusions. Do not write findings for me.",
    "zhFeedbackPrompt": "【Prompt 3｜模擬老師提問小組成果】\n成果摘要與分工：\n（貼上）\n請一次一題追問方法、限制、證據、分工。結束給薄弱點清單。禁止要求回答你們文件中不存在且被捏造的數據。",
    "enFeedbackPrompt": "[Prompt 3 | Instructor Team Q&A] Ask one question at a time on method/limits/evidence/roles; no fabricated data demands.",
    "zhExample": "結果：僅盤點數量。結論：基線已建立，減量效果尚未測量。不可交給 AI：結果數字與結論句。",
    "enExample": "Results: inventory counts only. Conclusion: baseline exists; reduction not measured. Must-not-give-to-AI: result numbers and concluding sentences.",
    "zhPractice": "寫九段大綱。；標人機分工。；檢查結論不超證據。；存書面結構。",
    "enPractice": "Write a nine-part outline.; Tag roles.; Check conclusion vs evidence.; Save the outline.",
    "zhQuizItems": [
      {
        "q": "小組成果整合最核心的是？",
        "options": [
          "把檔案打包成 zip 即可",
          "統一邏輯、語氣、格式、引用與視覺並鎖定 final",
          "讓 AI 任意改結論",
          "每人保留自己的最終版互不相讓"
        ],
        "answer": 1,
        "explain": "整合是單一可發表真相來源。"
      },
      {
        "q": "發現組員結論互相矛盾時應？",
        "options": [
          "讓 AI 偷偷改成同一句並假裝原本一致",
          "標示矛盾並開會決定，記錄決策",
          "隨機刪掉一人貢獻",
          "忽略差異直接上台"
        ],
        "answer": 1,
        "explain": "矛盾要透明決策，不造假共識。"
      },
      {
        "q": "模擬老師提問的目的是？",
        "options": [
          "刁難組員關係",
          "壓力測試論證、限制與分工防守",
          "取代所有內容修正",
          "練習編造沒做過的方法"
        ],
        "answer": 1,
        "explain": "問答是為防禦真實成果。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Core of team deliverable integration?",
        "options": [
          "Just zip the files",
          "Unify logic, voice, format, citations, visuals and lock a final",
          "Let AI freely change conclusions",
          "Keep competing finals"
        ],
        "answer": 1,
        "explain": "Integration creates one publishable source of truth."
      },
      {
        "q": "If teammates’ conclusions conflict, you should:",
        "options": [
          "Have AI silently rewrite history",
          "Flag the conflict, decide in meeting, and log it",
          "Randomly delete one person",
          "Ignore and present anyway"
        ],
        "answer": 1,
        "explain": "Resolve conflicts transparently."
      },
      {
        "q": "Purpose of mock instructor Q&A?",
        "options": [
          "Damage relationships",
          "Pressure-test argument, limits, and role defense",
          "Replace all content work",
          "Practice inventing methods"
        ],
        "answer": 1,
        "explain": "Q&A defends real work."
      }
    ],
    "zhNotePrompt": "貼上九段標題，並註明結果章是已有或待資料。",
    "enNotePrompt": "Paste nine headings and note whether results exist or await data.",
    "zhDeliverableChecklist": [
      "含背景、問題、文獻、方法、分析、結果、討論、限制、結論",
      "結果章未虛構研究發現",
      "結論不超過證據鏈",
      "每節有人／AI／不可交給 AI",
      "文獻佔位僅已核對或標待補",
      "沒有保證得獎或自動投稿宣稱"
    ],
    "enDeliverableChecklist": [
      "Background through conclusion present",
      "Results section does not invent findings",
      "Conclusion stays inside the argument map",
      "I / AI / must-not tagged per section",
      "Literature slots verified or marked to-add",
      "No prize or auto-submit claims"
    ],
    "zhScorecard": [
      "單一聲音",
      "邏輯完整",
      "引用可靠",
      "可上台",
      "可防守"
    ],
    "enScorecard": [
      "One voice",
      "Logical continuity",
      "Reliable citations",
      "Stage-ready",
      "Defendable"
    ],
    "id": "research-competition-L8",
    "lessonKey": "research-competition-L8",
    "zhOutputName": "研究報告／競賽書面結構",
    "enOutputName": "Research Report Outline",
    "zhObjectives": [
      "排出背景到結論的報告結構",
      "結果章標示已有或待資料",
      "結論不超過第 7 課證據鏈",
      "為每節標人／AI／不可交給 AI",
      "存成研究報告／競賽書面結構"
    ],
    "enObjectives": [
      "Order the report from background to conclusion",
      "Mark results as existing or awaiting data",
      "Keep the conclusion inside Lesson 7’s map",
      "Tag I / AI / must-not per section",
      "Save a Research Report Outline"
    ],
    "zhWhyItMatters": {
      "problem": "先請 AI 寫完整報告，結果章充滿沒做過的分析，論點看起來完整但其實是空的。",
      "ineffective": "把證據鏈丟給 AI 請它「寫得像已完成的論文」。",
      "solution": "先鎖結構與每節真實度，結果空白就留白。"
    },
    "enWhyItMatters": {
      "problem": "Asking AI for a full report fills results with analyses you never ran.",
      "ineffective": "Pasting the argument map and asking for a paper that “looks finished.”",
      "solution": "Lock structure and honesty per section; leave results blank when empty."
    },
    "zhConceptBlocks": {
      "principles": [
        "結構先於文采",
        "結果必須有資料",
        "結論 ≤ 證據"
      ],
      "terms": [
        "背景",
        "方法",
        "結果",
        "限制"
      ],
      "criteria": [
        "九段都有標題",
        "結果不虛構",
        "有人機分工"
      ],
      "boundaries": [
        "避免：AI 代寫發現",
        "避免：文獻當結果",
        "避免：保證得獎的結論"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Structure before style",
        "Results need data",
        "Conclusion ≤ evidence"
      ],
      "terms": [
        "Background",
        "Method",
        "Results",
        "Limits"
      ],
      "criteria": [
        "Nine headings",
        "No fake results",
        "Human/AI split"
      ],
      "boundaries": [
        "Avoid: AI-written findings",
        "Avoid: literature as results",
        "Avoid: prize-guaranteeing conclusions"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "永續競賽團隊要寫校園一次性用品報告，AI 直接生成「實驗證明減少 40%」。",
      "wrong": "把假實驗放進結果與結論。",
      "right": "結果章寫「待觀察紀錄」；結論只連到已有的盤點資料；限制寫尚未做介入實驗。",
      "result": "一份誠實的研究報告／競賽書面結構。"
    },
    "enCaseStudyBlocks": {
      "problem": "A sustainability team asks AI to write “the experiment proved a 40% reduction” on single-use items.",
      "wrong": "Put a fake experiment in results and conclusion.",
      "right": "Results say “observation log pending”; conclusion ties only to an inventory they have; limits say no intervention yet.",
      "result": "An honest Research Report Outline."
    },
    "zhWorkflowSteps": [
      {
        "do": "依九段排出標題",
        "why": "漏章會在口頭被問倒",
        "input": "證據鏈",
        "output": "大綱骨架",
        "check": "結果章是否獨立"
      },
      {
        "do": "標每節真實度與人機分工",
        "why": "防止 AI 填空",
        "input": "骨架",
        "output": "分工表",
        "check": "結果是否標待資料"
      },
      {
        "do": "用主 Prompt 產出完整大綱",
        "why": "補子彈但不補假結果",
        "input": "分工表",
        "output": "書面結構",
        "check": "結論是否超過證據"
      },
      {
        "do": "刪保證得獎與虛構實驗句",
        "why": "競賽規則通常禁止造假",
        "input": "大綱",
        "output": "清理版",
        "check": "有無 40% 這類無來源數字"
      },
      {
        "do": "存檔",
        "why": "第 9 課簡報要對齊書面",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Order nine headings",
        "why": "Missing sections fail Q&A",
        "input": "Argument map",
        "output": "Skeleton",
        "check": "Results separate?"
      },
      {
        "do": "Mark honesty and human/AI roles",
        "why": "Stop AI from filling gaps",
        "input": "Skeleton",
        "output": "Role table",
        "check": "Results marked awaiting data?"
      },
      {
        "do": "Generate the outline",
        "why": "Bullets without fake results",
        "input": "Roles",
        "output": "Outline",
        "check": "Conclusion inside evidence?"
      },
      {
        "do": "Delete prize promises and fake experiments",
        "why": "Competition rules usually ban fabrication",
        "input": "Outline",
        "output": "Clean version",
        "check": "Sourceless percentages?"
      },
      {
        "do": "Save",
        "why": "Lesson 9 slides must match",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "要組報告或競賽書面大綱、避免 AI 代寫結果時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請貼上來源內容]",
        "[請填寫研究方法]"
      ],
      "body": "你是研究報告結構教練。可以協助架構，但不得代替學生產生不存在的研究結果。\n\n我的研究問題：[請填寫研究問題]\n證據鏈摘要：[請貼上來源內容]\n研究方法：[請填寫研究方法]\n哪些章節已有真實資料、哪些沒有：[請填寫]\n\n任務：產出「研究報告／競賽書面結構」，包含：\n1) 問題背景\n2) 研究問題\n3) 文獻（只列已核對來源的佔位，沒有就寫待補）\n4) 方法\n5) 分析\n6) 結果（無資料則寫「待資料，不虛構」）\n7) 討論\n8) 限制\n9) 結論（結論不得超過證據鏈）\n10) 各節「我寫／AI 可協助／不可交給 AI」\n\n輸出大綱層級（標題＋每節 2–4 個子彈）。禁止填入假結果段落。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份九段結構且結果章不虛構的報告大綱",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：結論是否超過證據",
          "body": "請對照我的證據鏈，指出大綱結論中任何超過證據的子彈，改成限制或待研究。不要新增結果。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when outlining a report or written competition piece without AI-written results",
      "fields": [
        "[Enter research question]",
        "[Paste source content]",
        "[Enter research method]"
      ],
      "body": "You are a report-structure coach. You may help outline, but you must not generate nonexistent results.\n\nResearch question: [Enter research question]\nArgument-map summary: [Paste source content]\nMethod: [Enter research method]\nWhich sections have real data and which do not: [Enter status]\n\nTask: Produce a Research Report Outline with:\n1) Background\n2) Research question\n3) Literature (slots only for verified sources; else to-add)\n4) Method\n5) Analysis\n6) Results (“awaiting data, do not invent” if none)\n7) Discussion\n8) Limits\n9) Conclusion (must not exceed the argument map)\n10) Per section: I write / AI may help / must not give to AI\n\nOutput heading levels plus 2–4 bullets each. Do not fill fake results.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A nine-part outline whose results section is not invented",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: conclusion vs evidence",
          "body": "Compare my argument map and flag outline bullets that exceed evidence. Change them to limits or future work. Add no results."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "寫九段標題與每節子彈",
        "standard": "結果章不出現未做的實驗",
        "mistakes": "AI 全文一次生成",
        "check": "每節能否對回證據鏈？"
      },
      {
        "task": "標人／AI／不可交給 AI",
        "standard": "結果與結論至少有不可交給 AI",
        "mistakes": "全部交給 AI",
        "check": "數字由誰負責？"
      },
      {
        "task": "檢查結論 ≤ 證據",
        "standard": "超過的改限制",
        "mistakes": "寫保證得獎",
        "check": "有無無來源百分比？"
      },
      {
        "task": "存成研究報告／競賽書面結構",
        "standard": "待資料處留白",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Write nine headings and bullets",
        "standard": "No unrun experiments in results",
        "mistakes": "One-shot full paper from AI",
        "check": "Does each section map to the argument map?"
      },
      {
        "task": "Tag I / AI / must-not",
        "standard": "Results and conclusion have a must-not",
        "mistakes": "Everything to AI",
        "check": "Who owns the numbers?"
      },
      {
        "task": "Check conclusion ≤ evidence",
        "standard": "Over-claims become limits",
        "mistakes": "Prize guarantees",
        "check": "Sourceless percentages?"
      },
      {
        "task": "Save the Research Report Outline",
        "standard": "Leave awaiting-data blank",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "結果章由模型寫出完整統計表",
        "why": "那些數字不存在",
        "fix": "刪表，改待資料"
      },
      {
        "error": "結論承諾本平台會產出正式 PDF",
        "why": "功能不存在",
        "fix": "只承諾你自己匯出的檔案"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Model writes a full stats table in results",
        "why": "Those numbers do not exist",
        "fix": "Delete the table; mark awaiting data"
      },
      {
        "error": "Conclusion promises a formal PDF from this site",
        "why": "That feature does not exist",
        "fix": "Only promise files you export yourself"
      }
    ],
    "zhNextStep": "把書面結構收成第 9 課簡報與 3／5 分鐘版本。簡報數字必須與大綱一致。",
    "enNextStep": "Turn the outline into Lesson 9 slides and 3-/5-minute versions. Slide numbers must match the outline.",
    "zhSummary": [
      "本堂成果：研究報告／競賽書面結構",
      "AI 搭骨架",
      "不代寫發現"
    ],
    "enSummary": [
      "Deliverable: Research Report Outline",
      "AI builds the skeleton",
      "It does not write findings"
    ],
    "zhRubric": [
      {
        "name": "結構完整",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "結果不虛構",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "結論不超證據",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "分工清楚",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Complete structure",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No fake results",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Conclusion inside evidence",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Clear role split",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 50 分鐘 / About 50 min",
    "difficulty": "中階 / Intermediate",
    "zhTitle": "第9課：製作研究／競賽提案簡報",
    "enTitle": "Lesson 9: Build research or competition proposal slides",
    "zhValueTip": "簡報是書面結構的短版；3 分鐘與 5 分鐘都要能講限制，不能為了帥而加數字。",
    "enValueTip": "Slides are a short form of the outline. Both 3- and 5-minute versions must include limits—no extra numbers for show.",
    "zhOutcome": "競賽簡報與 Pitch 計畫",
    "enOutcome": "Competition Pitch Deck Plan",
    "zhConcept": "Pitch 計畫不是保證你會有 Gamma 自動完稿，而是頁面訊息、時長版本與問答準備。洞察若來自文獻或推測必須開口標明。本站不保證競賽得獎，也沒有內建評審。",
    "enConcept": "The pitch plan is page messages, time versions, and Q&A—not a guaranteed auto-deck from Gamma. Insights from literature or speculation must be labeled when spoken. This site does not guarantee prizes and has no built-in judges.",
    "zhCaseStudy": "隊伍的 3 分鐘：問題（一次性用品）、洞察（盤點顯示免洗餐具最多—我的資料）、方法（拍照分類）、結果（數量表）、限制（無介入）、下一步（試點一個系學會）。5 分鐘多一頁文獻定義與一頁倫理（同意拍照公共空間）。Q&A 含「如何證明減少？」答案：目前不能證明，這是基線。",
    "enCaseStudy": "Their 3-minute arc: problem, insight from their inventory, photo-coding method, counts, limits (no intervention), next step (one student-association pilot). The 5-minute added a definition slide and a public-space photo-consent slide. Q&A included “How do you prove reduction?” Answer: we cannot yet; this is a baseline.",
    "zhWorkflow": [
      "抽八個訊息塊",
      "排 3／5 分鐘頁",
      "寫含不知道的 Q&A",
      "刪假圖並標洞察來源",
      "存成競賽簡報與 Pitch 計畫"
    ],
    "enWorkflow": [
      "Extract eight blocks",
      "Plan 3-/5-minute pages",
      "Write Q&A including unknowns",
      "Drop fake charts and tag insights",
      "Save the pitch plan"
    ],
    "zhCommonMistakes": [
      "簡報多出書面沒有的結果",
      "3 分鐘刪限制",
      "Q&A 全編造",
      "保證得獎",
      "AI 圖當數據"
    ],
    "enCommonMistakes": [
      "Slides add findings absent from writing",
      "Dropping limits in 3 minutes",
      "Invented Q&A answers",
      "Prize guarantees",
      "AI art as data"
    ],
    "zhExcellentExample": "兩種時長、限制仍在、Q&A 誠實、與大綱數字一致。",
    "enExcellentExample": "Both durations, limits kept, honest Q&A, numbers match the outline.",
    "zhPrompt": "你是競賽簡報教練。簡報必須與書面結構一致，不得為了「比較好看」新增研究結果。\n\n我的研究問題：[請填寫研究問題]\n書面結構摘要：[請貼上來源內容]\n聽眾與時長限制：[請填寫]\n已知限制：[請填寫]\n\n任務：產出「競賽簡報與 Pitch 計畫」，包含：\n1) 問題\n2) 洞察（標示來源：我的資料／文獻／推測）\n3) 方法\n4) 證據\n5) 結果（無則明確說尚未收集）\n6) 影響（不保證得獎）\n7) 限制\n8) 下一步\n9) 3 分鐘版本頁面清單\n10) 5 分鐘版本頁面清單\n11) Q&A 可能題 8 題（含你還沒有答案、應誠實說不知道的題）\n\n禁止：為 Pitch 發明圖表數字。本平台沒有自動產生正式簡報檔的保證，也不保證競賽名次。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a competition-pitch coach. Slides must match the written outline. Do not add findings to look stronger.\n\nResearch question: [Enter research question]\nOutline summary: [Paste source content]\nAudience and time limits: [Enter audience]\nKnown limits: [Enter limits]\n\nTask: Produce a Competition Pitch Deck Plan with:\n1) Problem\n2) Insight (tag: my data / literature / speculation)\n3) Method\n4) Evidence\n5) Results (say not yet collected if none)\n6) Impact (no prize guarantee)\n7) Limits\n8) Next step\n9) 3-minute page list\n10) 5-minute page list\n11) 8 likely Q&A questions, including ones you should answer “I don’t know yet”\n\nForbidden: inventing chart numbers for the pitch. This site does not guarantee a slide file or a prize.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請檢查我的簡報計畫是否出現書面沒有的數字。不要幫我編造 Q&A 答案。",
    "enCoachPrompt": "Check for numbers not in my outline. Do not invent Q&A answers.",
    "zhFeedbackPrompt": "【Prompt 3｜初稿驗收】\nstructure-v1：\n（貼上）\n目前簡報頁面：\n（貼上）\n請評分：對齊架構、可講性、遠讀性、誠信風險。列出交到 Canva 前必改的 7 項。",
    "enFeedbackPrompt": "[Prompt 3 | Draft QA] Score alignment, speakability, readability, integrity risk; list 7 must-fixes before Canva.",
    "zhExample": "3 分鐘 6 頁含限制；5 分鐘 10 頁含倫理；Q&A：「效果多大？」→「尚未測量」。",
    "enExample": "3-minute: 6 pages including limits. 5-minute: 10 including ethics. Q&A: “How big is the effect?” → “Not measured yet.”",
    "zhPractice": "對齊八塊訊息。；寫 3／5 分鐘頁。；準備含不知道的 Q&A。；存 Pitch 計畫。",
    "enPractice": "Align eight blocks.; Write 3-/5-minute pages.; Prepare Q&A including unknowns.; Save the pitch plan.",
    "zhQuizItems": [
      {
        "q": "使用 Gamma 較正確的方式是？",
        "options": [
          "只給主題一句話，完全信任輸出",
          "提供故事線與時長約束，生成後人工刪改並核對事實",
          "生成後立刻上台，不需練習",
          "把 AI 數字都當成已發表研究"
        ],
        "answer": 1,
        "explain": "Gamma 加速初稿，判斷與核對仍是你的責任。"
      },
      {
        "q": "發現投影片出現無法核對的「提升 73%」應？",
        "options": [
          "保留，因為看起來很有說服力",
          "刪除、改成可追溯資料，或標成待補",
          "改成更大的百分比",
          "移到最後一頁就不算問題"
        ],
        "answer": 1,
        "explain": "未核對數據不可上正式簡報。"
      },
      {
        "q": "Gamma 初稿完成後，下一步通常是？",
        "options": [
          "對齊架構、瘦身、補證據，再進入美化",
          "再隨機生成五個風格直到滿意",
          "把文字加到每頁 200 字",
          "刪掉所有標題"
        ],
        "answer": 0,
        "explain": "先正確可講，再美化。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best way to use Gamma?",
        "options": [
          "One vague sentence, trust the output",
          "Provide storyline + time, then human-edit and verify facts",
          "Present immediately with no practice",
          "Treat AI numbers as published research"
        ],
        "answer": 1,
        "explain": "Gamma drafts; you verify and decide."
      },
      {
        "q": "If a slide shows an unverifiable “+73%”, you should:",
        "options": [
          "Keep it for persuasion",
          "Delete, replace with traceable data, or mark pending",
          "Make the percentage larger",
          "Hide it on the last slide"
        ],
        "answer": 1,
        "explain": "Unverified stats do not belong."
      },
      {
        "q": "After a Gamma draft, next step is usually:",
        "options": [
          "Align, slim, add evidence, then beautify",
          "Randomly regenerate styles forever",
          "Add 200 words per slide",
          "Remove all titles"
        ],
        "answer": 0,
        "explain": "Correct and speakable before polish."
      }
    ],
    "zhNotePrompt": "貼上 3 分鐘頁面、5 分鐘多出的頁、以及一題你會回答「尚不知道」的 Q&A。",
    "enNotePrompt": "Paste 3-minute pages, extra 5-minute pages, and one Q&A you will answer “I don’t know yet.”",
    "zhDeliverableChecklist": [
      "含問題、洞察、方法、證據、結果、影響、限制、下一步",
      "有 3 分鐘與 5 分鐘頁面清單",
      "有 Q&A，且含至少 1 題資料不足",
      "數字與書面結構一致",
      "沒有為 Pitch 發明圖表",
      "沒有保證得獎或本站自動出片宣稱"
    ],
    "enDeliverableChecklist": [
      "Problem through next step included",
      "3- and 5-minute page lists exist",
      "Q&A includes at least one insufficient-data answer",
      "Numbers match the outline",
      "No charts invented for the pitch",
      "No prize or auto-deck claims"
    ],
    "zhScorecard": [
      "輸入品質",
      "對齊架構",
      "可講性",
      "事實可控",
      "可交接美化"
    ],
    "enScorecard": [
      "Input quality",
      "Structure alignment",
      "Speakability",
      "Fact control",
      "Ready to polish"
    ],
    "id": "research-competition-L9",
    "lessonKey": "research-competition-L9",
    "zhOutputName": "競賽簡報與 Pitch 計畫",
    "enOutputName": "Competition Pitch Deck Plan",
    "zhObjectives": [
      "排出問題到下一步的簡報訊息",
      "做 3 分鐘與 5 分鐘頁面清單",
      "準備 Q&A 並標示不知道的題",
      "確保數字與第 8 課大綱一致",
      "存成競賽簡報與 Pitch 計畫"
    ],
    "enObjectives": [
      "Sequence pitch messages from problem to next step",
      "Build 3- and 5-minute page lists",
      "Prepare Q&A including “I don’t know yet”",
      "Keep numbers consistent with Lesson 8",
      "Save a Competition Pitch Deck Plan"
    ],
    "zhWhyItMatters": {
      "problem": "口頭為了打動評審而多講一個「實驗成功」，書面卻沒有，信任會立刻破裂。",
      "ineffective": "把 AI 生成的精美圖當自己的結果，或省略限制頁。",
      "solution": "簡報計畫與書面對齊，並準備誠實 Q&A。"
    },
    "enWhyItMatters": {
      "problem": "Adding a spoken “the experiment worked” that is not in the write-up destroys trust.",
      "ineffective": "Treating AI-pretty charts as results, or dropping the limits slide.",
      "solution": "Align the deck to the outline and prepare honest Q&A."
    },
    "zhConceptBlocks": {
      "principles": [
        "簡報 ≤ 書面證據",
        "短版也要講限制",
        "不知道就說不知道"
      ],
      "terms": [
        "3 分鐘版本",
        "5 分鐘版本",
        "Q&A",
        "洞察來源"
      ],
      "criteria": [
        "八個訊息塊齊",
        "兩種時長",
        "有誠實不會答的題"
      ],
      "boundaries": [
        "避免：為 Pitch 發明數據",
        "避免：保證得獎",
        "避免：省略限制"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Slides ≤ written evidence",
        "Short versions still include limits",
        "Say you don’t know"
      ],
      "terms": [
        "3-minute version",
        "5-minute version",
        "Q&A",
        "Insight source"
      ],
      "criteria": [
        "Eight message blocks",
        "Two durations",
        "Unanswerable questions flagged"
      ],
      "boundaries": [
        "Avoid: numbers invented for pitch",
        "Avoid: prize guarantees",
        "Avoid: dropping limits"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "永續競賽隊在 3 分鐘彩排加了一張「減量 40%」的 AI 圖。",
      "wrong": "評審問數據來源時無法指回盤點表。",
      "right": "刪圖；3 分鐘保留問題、方法、盤點證據、限制、下一步；Q&A 預寫「尚未做介入實驗」。",
      "result": "一份與書面一致的競賽簡報與 Pitch 計畫。"
    },
    "enCaseStudyBlocks": {
      "problem": "The sustainability team added an AI chart “40% reduction” in a 3-minute rehearsal.",
      "wrong": "They could not point to a table when asked.",
      "right": "Delete the chart; keep problem, method, inventory evidence, limits, next step; pre-write “no intervention yet.”",
      "result": "A pitch plan that matches the write-up."
    },
    "zhWorkflowSteps": [
      {
        "do": "從大綱抽出八個訊息塊",
        "why": "簡報不能多出新結果",
        "input": "書面結構",
        "output": "訊息清單",
        "check": "是否多了書面沒有的數字"
      },
      {
        "do": "排 3 分鐘與 5 分鐘頁",
        "why": "短版仍含限制",
        "input": "訊息清單",
        "output": "兩份頁面表",
        "check": "3 分鐘是否超過頁數仍能講完限制"
      },
      {
        "do": "寫 Q&A 含不知道",
        "why": "評審會打證據邊界",
        "input": "證據鏈",
        "output": "問答稿",
        "check": "有無誠實不會答"
      },
      {
        "do": "用主 Prompt 對齊時長",
        "why": "刪表演性假圖",
        "input": "頁面表",
        "output": "Pitch 計畫",
        "check": "洞察是否標來源"
      },
      {
        "do": "存檔",
        "why": "第 10 課總檢查會核對簡報↔報告",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Extract eight message blocks",
        "why": "Slides cannot add findings",
        "input": "Outline",
        "output": "Message list",
        "check": "Numbers not in the write-up?"
      },
      {
        "do": "Plan 3- and 5-minute pages",
        "why": "Short version still has limits",
        "input": "Messages",
        "output": "Two page lists",
        "check": "Can 3 minutes still say limits?"
      },
      {
        "do": "Write Q&A including unknowns",
        "why": "Judges attack evidence bounds",
        "input": "Argument map",
        "output": "Q&A sheet",
        "check": "Honest “don’t know”?"
      },
      {
        "do": "Align timing with the prompt",
        "why": "Delete theatrical fake charts",
        "input": "Pages",
        "output": "Pitch plan",
        "check": "Insights sourced?"
      },
      {
        "do": "Save",
        "why": "Lesson 10 checks slides vs report",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "要把書面結構收成 3／5 分鐘簡報與 Q&A 時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請貼上來源內容]",
        "[請填寫]"
      ],
      "body": "你是競賽簡報教練。簡報必須與書面結構一致，不得為了「比較好看」新增研究結果。\n\n我的研究問題：[請填寫研究問題]\n書面結構摘要：[請貼上來源內容]\n聽眾與時長限制：[請填寫]\n已知限制：[請填寫]\n\n任務：產出「競賽簡報與 Pitch 計畫」，包含：\n1) 問題\n2) 洞察（標示來源：我的資料／文獻／推測）\n3) 方法\n4) 證據\n5) 結果（無則明確說尚未收集）\n6) 影響（不保證得獎）\n7) 限制\n8) 下一步\n9) 3 分鐘版本頁面清單\n10) 5 分鐘版本頁面清單\n11) Q&A 可能題 8 題（含你還沒有答案、應誠實說不知道的題）\n\n禁止：為 Pitch 發明圖表數字。本平台沒有自動產生正式簡報檔的保證，也不保證競賽名次。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份含 3／5 分鐘頁面與 Q&A 的 Pitch 計畫",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：Q&A 誠實答案",
          "body": "請把我列出的評審題分成：可用現有證據回答／必須說資料不足。不要編造答案。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use when turning the outline into 3-/5-minute slides and Q&A",
      "fields": [
        "[Enter research question]",
        "[Paste source content]",
        "[Enter audience]"
      ],
      "body": "You are a competition-pitch coach. Slides must match the written outline. Do not add findings to look stronger.\n\nResearch question: [Enter research question]\nOutline summary: [Paste source content]\nAudience and time limits: [Enter audience]\nKnown limits: [Enter limits]\n\nTask: Produce a Competition Pitch Deck Plan with:\n1) Problem\n2) Insight (tag: my data / literature / speculation)\n3) Method\n4) Evidence\n5) Results (say not yet collected if none)\n6) Impact (no prize guarantee)\n7) Limits\n8) Next step\n9) 3-minute page list\n10) 5-minute page list\n11) 8 likely Q&A questions, including ones you should answer “I don’t know yet”\n\nForbidden: inventing chart numbers for the pitch. This site does not guarantee a slide file or a prize.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A pitch plan with 3-/5-minute pages and Q&A",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: honest Q&A",
          "body": "Sort my judge questions into answerable-with-current-evidence vs must-say-insufficient. Invent no answers."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "完成八塊訊息並對齊大綱",
        "standard": "無新數字",
        "mistakes": "為了帥而加實驗",
        "check": "每頁能否指回書面？"
      },
      {
        "task": "寫 3 分鐘與 5 分鐘頁面清單",
        "standard": "短版含限制與下一步",
        "mistakes": "3 分鐘刪掉限制",
        "check": "時間內能否講完？"
      },
      {
        "task": "準備 8 題 Q&A（含不知道）",
        "standard": "至少 1 題答案是資料不足",
        "mistakes": "全都能講得很好看",
        "check": "哪題應說不知道？"
      },
      {
        "task": "存成競賽簡報與 Pitch 計畫",
        "standard": "含兩種時長",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Finish eight blocks aligned to the outline",
        "standard": "No new numbers",
        "mistakes": "Adding an experiment for show",
        "check": "Can each page point to the write-up?"
      },
      {
        "task": "Write 3- and 5-minute page lists",
        "standard": "Short version includes limits and next step",
        "mistakes": "Dropping limits in 3 minutes",
        "check": "Can you finish on time?"
      },
      {
        "task": "Prepare 8 Q&A items including unknowns",
        "standard": "At least one “insufficient data”",
        "mistakes": "Every answer sounds polished",
        "check": "Which question should you not fake?"
      },
      {
        "task": "Save the Competition Pitch Deck Plan",
        "standard": "Both durations included",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "封面寫「必勝提案」",
        "why": "本課不保證名次",
        "fix": "改成問題與範圍"
      },
      {
        "error": "把 Gamma 草稿數字當已核對",
        "why": "工具常編造圖表",
        "fix": "只放你表格裡的數"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Cover says “winning pitch”",
        "why": "This course does not guarantee placement",
        "fix": "State the problem and scope"
      },
      {
        "error": "Treat Gamma draft numbers as verified",
        "why": "Tools often invent charts",
        "fix": "Only use numbers from your table"
      }
    ],
    "zhNextStep": "進入第 10 課做提交檢查。用前 9 堂成果勾選，不必重打全部內容。",
    "enNextStep": "Go to Lesson 10’s submission check. Tick prior outputs; do not retype everything.",
    "zhSummary": [
      "本堂成果：競賽簡報與 Pitch 計畫",
      "簡報不得多於書面",
      "不知道就說不知道"
    ],
    "enSummary": [
      "Deliverable: Competition Pitch Deck Plan",
      "Slides must not exceed the write-up",
      "Say you don’t know"
    ],
    "zhRubric": [
      {
        "name": "與書面一致",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "時間版本完整",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "Q&A 誠實",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "無假數字",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Matches writing",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Time versions complete",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Honest Q&A",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No fake numbers",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  },
  {
    "estimatedTime": "約 55 分鐘 / About 55 min",
    "difficulty": "中階 / Intermediate",
    "zhTitle": "第10課：完成研究／專題／競賽專案包的口頭提案準備",
    "enTitle": "Lesson 10: Prepare the oral proposal for your research or competition package",
    "zhValueTip": "提交檢查是整合前 9 堂，不是重打一遍；未完成就標未完成。",
    "enValueTip": "The submission check integrates Lessons 1–9; it is not a rewrite. Mark unfinished work as unfinished.",
    "zhOutcome": "完整研究與競賽提交檢查",
    "enOutcome": "Final Research & Competition Submission Checklist",
    "zhConcept": "第 10 課把問題定義、搜尋、文獻、設計、分析、論證、書面與 Pitch 收成提交檢查。你不必重填每一堂的完整表格。本網站沒有 Turnitin、自動引用驗證、自動倫理審查、自動統計引擎或保證得獎。",
    "enConcept": "Lesson 10 folds definition, search, notes, design, analysis, argument, writing, and pitch into a submission check. You do not re-enter every table. This site has no Turnitin, auto citation check, auto ethics review, auto stats engine, or prize guarantee.",
    "zhCaseStudy": "永續隊伍沒有重打盤點表。他們勾：問題清楚＝通過；來源分級＝通過；引用核對＝未完成（1 個 DOI 打不開，決定刪除）；方法可解釋＝通過；數據真實＝通過；結論未超證據＝通過；圖表一致＝未完成（刪 AI 圖）；簡報與報告＝修完後再勾；AI 使用＝通過（已在方法章說明）；限制揭露＝通過。本週行動：刪未核對引用與多餘簡報圖，各 15 分鐘。",
    "enCaseStudy": "They did not retype the inventory. They marked citations unfinished (one DOI would not open—delete it) and chart consistency unfinished (delete the AI chart). This week’s action: 15 minutes each to remove the unverified cite and the extra slide. Other items passed or awaited data.",
    "zhWorkflow": [
      "匯入前9堂重點",
      "十項誠實勾選",
      "核對簡報與圖表一致性",
      "列出未完成與本週一行動",
      "存成完整研究與競賽提交檢查"
    ],
    "enWorkflow": [
      "Import prior highlights",
      "Tick ten items honestly",
      "Check slide and chart consistency",
      "List unfinished work and one action",
      "Save the final checklist"
    ],
    "zhCommonMistakes": [
      "未完成標完成",
      "重打全部前課",
      "宣稱 Turnitin／自動驗證",
      "保證得獎",
      "簡報與報告不一致仍送出"
    ],
    "enCommonMistakes": [
      "Marking unfinished as done",
      "Retyping every prior lesson",
      "Claiming Turnitin/auto-verify",
      "Prize guarantees",
      "Submitting with slide-report mismatch"
    ],
    "zhExcellentExample": "十項誠實、未完成列清楚、一週一行動、無平台功能虛構。",
    "enExcellentExample": "Honest ten items, clear unfinished list, one weekly action, no invented platform features.",
    "zhPrompt": "你是提交檢查教練。請根據我貼上的前 9 堂成果摘要做總檢查，不要要求我重新輸入全部資料，也不要幫我補齊不存在的結果。\n\n我的研究問題：[請填寫研究問題]\n前課成果摘要（可貼定義表／畫布／搜尋策略／理解表／設計／分析計畫／證據鏈／大綱／Pitch 的重點）：\n[請貼上來源內容]\n競賽或課程提交規則（若有）：[請填寫]\n我仍缺漏的項目：[請填寫]\n\n任務：產出「完整研究與競賽提交檢查」，用通過／未完成／不適用勾選：\n1) 問題是否清楚\n2) 來源是否可信（Primary/Secondary/AI 是否分級）\n3) 引用是否核對\n4) 方法是否可解釋\n5) 數據是否真實（無捏造）\n6) 結論是否超過證據\n7) 圖表是否與資料一致\n8) 簡報是否與報告一致\n9) AI 使用是否符合規則（含課程／競賽／學校規定，以我貼的規則為準）\n10) 是否有未揭露限制\n並輸出：已完成亮點、未完成清單（不要假裝完成）、本週只做 1 個補齊動作。\n\n禁止：把未完成標成完成；禁止宣稱本站已做 Turnitin、自動引用驗證或保證得獎。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
    "enPrompt": "You are a submission-check coach. Use the Lesson 1–9 summaries I paste. Do not demand a full re-entry and do not fill nonexistent results.\n\nResearch question: [Enter research question]\nPrior-lesson highlights (definition, canvas, search plan, notes, design, analysis plan, argument map, outline, pitch):\n[Paste source content]\nCompetition or course submission rules if any: [Enter rules]\nItems I still lack: [Enter gaps]\n\nTask: Produce a Final Research & Competition Submission Checklist with pass / unfinished / N/A for:\n1) Problem clarity\n2) Source trustworthiness (primary/secondary/AI tiers)\n3) Citations verified\n4) Method explainable\n5) Data real (not fabricated)\n6) Conclusion does not exceed evidence\n7) Charts match data\n8) Slides match the report\n9) AI use matches rules I pasted\n10) Limits disclosed\nAlso output: highlights done, unfinished list (do not fake complete), and one catch-up action this week.\n\nForbidden: marking unfinished as done; claiming this site ran Turnitin, auto citation checks, or guaranteed a prize.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
    "zhCoachPrompt": "請根據我貼的摘要指出哪些檢查不應標通過。不要幫我補假結果或宣稱全過。",
    "enCoachPrompt": "From my summary, say which checks should not be marked pass. Do not add fake results or an all-pass claim.",
    "zhFeedbackPrompt": "【Prompt 3｜模擬評分與上台檢核】\n評分量表：\n（貼上或用預設五維）\n我的錄影／表現自述：\n（貼上）\n簡報主張：\n（貼上）\n請給模擬分數、最大 3 個扣分點、明天上台前只改這 3 點的行動清單，以及 12 項上台前檢核表。",
    "enFeedbackPrompt": "[Prompt 3 | Mock Scoring & Stage Checklist] Score my rehearsal notes, list top 3 fixes, and output a 12-item pre-stage checklist.",
    "zhExample": "十項中兩項未完成（引用、簡報圖）；本週只刪這兩處；不宣稱 Turnitin 或得獎。",
    "enExample": "Two of ten unfinished (citation, extra slide); this week only those deletions; no Turnitin or prize claim.",
    "zhPractice": "勾十項檢查。；核對簡報與圖表。；寫本週一行動。；存提交檢查。",
    "enPractice": "Tick ten checks.; Verify slides and charts.; Write one weekly action.; Save the checklist.",
    "zhQuizItems": [
      {
        "q": "模擬口頭報告最核心的目的是？",
        "options": [
          "多背幾句漂亮成語",
          "在壓力下仍準時、清楚、可防禦地完成發表",
          "讓 AI 代替你上台",
          "只練習翻頁動畫"
        ],
        "answer": 1,
        "explain": "壓力測試是為了可上台發表。"
      },
      {
        "q": "被問到不知道的細節時，較佳做法是？",
        "options": [
          "立刻編造一篇研究撐場面",
          "誠實界定已知範圍，給可驗證的下一步",
          "沉默到老師換題",
          "指責隊友"
        ],
        "answer": 1,
        "explain": "誠實與邊界感比假答案更專業。"
      },
      {
        "q": "Chapter 5 可發表版通常應包含？",
        "options": [
          "只有模板沒有內容",
          "final 簡報、講稿／關鍵詞卡、題庫應答與上台檢核",
          "只有 AI 聊天紀錄",
          "未核對數據的炫圖全集"
        ],
        "answer": 1,
        "explain": "交付物是可上台的完整系統包。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Main purpose of mock presenting?",
        "options": [
          "Memorize ornate idioms",
          "Stay on time, clear, and defendable under pressure",
          "Let AI present for you",
          "Practice animations only"
        ],
        "answer": 1,
        "explain": "Pressure-test for real stage readiness."
      },
      {
        "q": "Best response when you do not know a detail?",
        "options": [
          "Invent a study immediately",
          "Honestly bound what you know and offer a verifiable next step",
          "Stay silent until the topic changes",
          "Blame teammates"
        ],
        "answer": 1,
        "explain": "Honesty beats fabrication."
      },
      {
        "q": "A Chapter 5 presentation-ready pack usually includes:",
        "options": [
          "Templates with no content",
          "Final deck, script/cue cards, Q&A notes, and stage checklist",
          "Only AI chat logs",
          "Unverified flashy charts"
        ],
        "answer": 1,
        "explain": "Ship the full stage-ready system."
      }
    ],
    "zhNotePrompt": "寫下十項中未完成的項目，以及本週唯一行動。",
    "enNotePrompt": "Write unfinished items among the ten, plus this week’s single action.",
    "zhDeliverableChecklist": [
      "十項皆有通過／未完成／不適用",
      "未完成項目沒有被標成完成",
      "沒有要求重打全部前 9 堂全文",
      "簡報與報告、圖表與資料已核對或列入未完成",
      "含本週 1 個補齊動作",
      "沒有 Turnitin、自動驗證、保證得獎或教授批改宣稱"
    ],
    "enDeliverableChecklist": [
      "All ten items are pass / unfinished / N/A",
      "Unfinished items are not marked complete",
      "No demand to retype all nine prior lessons",
      "Slide-report and chart-data checked or listed unfinished",
      "One weekly catch-up action included",
      "No Turnitin, auto-verify, prize, or professor-grading claims"
    ],
    "zhScorecard": [
      "準時",
      "清楚",
      "問答防禦",
      "台風穩定",
      "應變備援"
    ],
    "enScorecard": [
      "On time",
      "Clarity",
      "Q&A defense",
      "Delivery stability",
      "Contingency"
    ],
    "id": "research-competition-L10",
    "lessonKey": "research-competition-L10",
    "zhOutputName": "完整研究與競賽提交檢查",
    "enOutputName": "Final Research & Competition Submission Checklist",
    "zhObjectives": [
      "用前 9 堂成果勾選十項提交檢查",
      "誠實標示未完成，不重打全部資料",
      "確認簡報與報告、圖表與資料一致",
      "確認 AI 使用與引用查證",
      "存成完整研究與競賽提交檢查"
    ],
    "enObjectives": [
      "Tick ten submission checks using Lessons 1–9",
      "Mark unfinished honestly without retyping everything",
      "Confirm slides match the report and charts match data",
      "Confirm AI-use and citation verification",
      "Save the Final Research & Competition Submission Checklist"
    ],
    "zhWhyItMatters": {
      "problem": "口頭很順但引用未核對、結論超過證據、簡報多了報告沒有的圖，提交風險最高。",
      "ineffective": "請 AI 寫「我們已完成所有檢查」或宣稱網站幫你做了查重。",
      "solution": "用十項清單對前 9 堂成果做總整理，缺的就列入本週一個行動。"
    },
    "enWhyItMatters": {
      "problem": "A smooth talk with unverified citations, over-claimed conclusions, or extra slide charts is the highest-risk submission.",
      "ineffective": "Asking AI to say “all checks passed,” or claiming the site ran originality detection.",
      "solution": "Run ten checks against prior outputs and pick one weekly catch-up action."
    },
    "zhConceptBlocks": {
      "principles": [
        "整合而非重做",
        "未完成就標未完成",
        "一致性重於華麗"
      ],
      "terms": [
        "提交檢查",
        "未完成清單",
        "簡報↔報告",
        "AI 使用揭露"
      ],
      "criteria": [
        "十項都有狀態",
        "有本週單一行動",
        "無功能虛構"
      ],
      "boundaries": [
        "避免：假裝全過",
        "避免：Turnitin 宣稱",
        "避免：保證得獎"
      ]
    },
    "enConceptBlocks": {
      "principles": [
        "Integrate, don’t redo",
        "Mark unfinished",
        "Consistency over polish"
      ],
      "terms": [
        "Submission check",
        "Unfinished list",
        "Slides ↔ report",
        "AI-use disclosure"
      ],
      "criteria": [
        "Ten statuses",
        "One weekly action",
        "No invented features"
      ],
      "boundaries": [
        "Avoid: fake all-pass",
        "Avoid: Turnitin claims",
        "Avoid: prize guarantees"
      ]
    },
    "zhCaseStudyBlocks": {
      "problem": "隊伍口頭彩排很順，但第 4 課仍有未核對 DOI，第 9 課簡報多了一張報告沒有的圖。",
      "wrong": "請 AI 產出「十項全過」的檢查表交差。",
      "right": "引用核對＝未完成；簡報一致性＝未完成；本週只修這兩項；其餘標通過或待資料。",
      "result": "一份誠實的完整研究與競賽提交檢查。"
    },
    "enCaseStudyBlocks": {
      "problem": "Rehearsal is smooth, but Lesson 4 still has unverified DOIs and Lesson 9 has an extra chart.",
      "wrong": "Ask AI for a ten-item all-pass checklist.",
      "right": "Citations = unfinished; slide consistency = unfinished; fix only those this week; others pass or await data.",
      "result": "An honest Final Research & Competition Submission Checklist."
    },
    "zhWorkflowSteps": [
      {
        "do": "匯入前 9 堂重點，不重打全文",
        "why": "避免重複勞動與造假完成",
        "input": "成果包",
        "output": "摘要清單",
        "check": "缺的是否標未完成"
      },
      {
        "do": "十項勾選通過／未完成／不適用",
        "why": "誠實才能真的提交",
        "input": "摘要",
        "output": "檢查表",
        "check": "有無全過但明顯缺資料"
      },
      {
        "do": "核對簡報↔報告、圖表↔資料",
        "why": "這兩項最常在口頭翻車",
        "input": "大綱+Pitch",
        "output": "一致性註記",
        "check": "有無多出來的數字"
      },
      {
        "do": "用主 Prompt 產出未完成清單與一週行動",
        "why": "一次只補一個缺口",
        "input": "檢查表",
        "output": "提交檢查",
        "check": "是否要求重做全部"
      },
      {
        "do": "存檔",
        "why": "這是本課最終成果",
        "input": "定稿",
        "output": "成果包",
        "check": "刷新後仍在"
      }
    ],
    "enWorkflowSteps": [
      {
        "do": "Import Lesson 1–9 highlights; no full retype",
        "why": "Avoid redo labor and fake completion",
        "input": "Package",
        "output": "Summary list",
        "check": "Gaps marked unfinished?"
      },
      {
        "do": "Tick pass / unfinished / N/A on ten items",
        "why": "Honesty is the submission",
        "input": "Summary",
        "output": "Checklist",
        "check": "All-pass despite missing data?"
      },
      {
        "do": "Check slides↔report and charts↔data",
        "why": "These fail in Q&A",
        "input": "Outline+pitch",
        "output": "Consistency notes",
        "check": "Extra numbers?"
      },
      {
        "do": "Generate unfinished list and one weekly action",
        "why": "Fix one gap",
        "input": "Checklist",
        "output": "Submission check",
        "check": "Does it demand a full redo?"
      },
      {
        "do": "Save",
        "why": "This is the course’s final output",
        "input": "Final",
        "output": "Package",
        "check": "Still there after refresh?"
      }
    ],
    "zhPromptPack": {
      "when": "提交前用前 9 堂成果做總檢查時使用",
      "fields": [
        "[請填寫研究問題]",
        "[請貼上來源內容]",
        "[請填寫]"
      ],
      "body": "你是提交檢查教練。請根據我貼上的前 9 堂成果摘要做總檢查，不要要求我重新輸入全部資料，也不要幫我補齊不存在的結果。\n\n我的研究問題：[請填寫研究問題]\n前課成果摘要（可貼定義表／畫布／搜尋策略／理解表／設計／分析計畫／證據鏈／大綱／Pitch 的重點）：\n[請貼上來源內容]\n競賽或課程提交規則（若有）：[請填寫]\n我仍缺漏的項目：[請填寫]\n\n任務：產出「完整研究與競賽提交檢查」，用通過／未完成／不適用勾選：\n1) 問題是否清楚\n2) 來源是否可信（Primary/Secondary/AI 是否分級）\n3) 引用是否核對\n4) 方法是否可解釋\n5) 數據是否真實（無捏造）\n6) 結論是否超過證據\n7) 圖表是否與資料一致\n8) 簡報是否與報告一致\n9) AI 使用是否符合規則（含課程／競賽／學校規定，以我貼的規則為準）\n10) 是否有未揭露限制\n並輸出：已完成亮點、未完成清單（不要假裝完成）、本週只做 1 個補齊動作。\n\n禁止：把未完成標成完成；禁止宣稱本站已做 Turnitin、自動引用驗證或保證得獎。\n\n請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "expected": "一份十項通過／未完成／不適用的提交檢查與本週單一補齊動作",
      "revisionReminder": "請將 AI 回答作為研究輔助，不要直接當作研究結果、報告正文或競賽稿提交。重要內容請回到正式來源、原始資料或指導教授／競賽規則查證。\n\nAI 產生的作者、年份、期刊名稱、DOI、研究結果與引用都必須回到正式來源確認。找不到原始來源時，不應引用。\n\n禁止捏造文獻、DOI、作者、統計、訪談、實驗、問卷數據或研究參與者。不得把 AI 推測包裝成研究發現。AI 生成內容不是學術證據本身。",
      "extensions": [
        {
          "title": "延伸：只修一個缺口",
          "body": "請從我的未完成清單選影響最大的 1 項，寫出今天 30 分鐘行動。不要叫我重做全部 9 堂。"
        }
      ]
    },
    "enPromptPack": {
      "when": "Use before submission to check Lessons 1–9 without retyping everything",
      "fields": [
        "[Enter research question]",
        "[Paste source content]",
        "[Enter rules]"
      ],
      "body": "You are a submission-check coach. Use the Lesson 1–9 summaries I paste. Do not demand a full re-entry and do not fill nonexistent results.\n\nResearch question: [Enter research question]\nPrior-lesson highlights (definition, canvas, search plan, notes, design, analysis plan, argument map, outline, pitch):\n[Paste source content]\nCompetition or course submission rules if any: [Enter rules]\nItems I still lack: [Enter gaps]\n\nTask: Produce a Final Research & Competition Submission Checklist with pass / unfinished / N/A for:\n1) Problem clarity\n2) Source trustworthiness (primary/secondary/AI tiers)\n3) Citations verified\n4) Method explainable\n5) Data real (not fabricated)\n6) Conclusion does not exceed evidence\n7) Charts match data\n8) Slides match the report\n9) AI use matches rules I pasted\n10) Limits disclosed\nAlso output: highlights done, unfinished list (do not fake complete), and one catch-up action this week.\n\nForbidden: marking unfinished as done; claiming this site ran Turnitin, auto citation checks, or guaranteed a prize.\n\nUse the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "expected": "A ten-item pass/unfinished/N/A submission check plus one weekly catch-up action",
      "revisionReminder": "Use the AI response as a research aid, not as findings, report text, or a competition draft to submit. Verify important content against original sources, primary data, or advisor/competition rules.\n\nAny author, year, journal, DOI, result, or citation generated by AI must be verified against the original source. Do not cite a source you cannot verify.\n\nDo not invent literature, DOIs, authors, statistics, interviews, experiments, survey data, or participants. Do not package AI speculation as findings. AI-generated text is not academic evidence.",
      "extensions": [
        {
          "title": "Extension: fix one gap",
          "body": "Pick the highest-impact unfinished item and write a 30-minute action for today. Do not tell me to redo all 9 lessons."
        }
      ]
    },
    "zhPracticeSteps": [
      {
        "task": "貼前 9 堂重點並十項勾選",
        "standard": "未完成不得改通過",
        "mistakes": "請 AI 全過",
        "check": "哪幾項真的缺？"
      },
      {
        "task": "檢查簡報與報告、圖表與資料",
        "standard": "不一致就列未完成",
        "mistakes": "口頭多講一個實驗",
        "check": "評審能否對上書面？"
      },
      {
        "task": "寫本週唯一補齊動作",
        "standard": "30–60 分鐘可完成",
        "mistakes": "重做 L1–L9",
        "check": "明天能否開始？"
      },
      {
        "task": "存成完整研究與競賽提交檢查",
        "standard": "含未完成清單",
        "mistakes": "空白儲存",
        "check": "刷新後仍在？"
      }
    ],
    "enPracticeSteps": [
      {
        "task": "Paste prior highlights and tick ten items",
        "standard": "Do not flip unfinished to pass",
        "mistakes": "Ask AI for all-pass",
        "check": "Which items are truly missing?"
      },
      {
        "task": "Check slides vs report and charts vs data",
        "standard": "Mismatches stay unfinished",
        "mistakes": "Adding an experiment in speech",
        "check": "Could a judge match the write-up?"
      },
      {
        "task": "Write one weekly catch-up action",
        "standard": "Doable in 30–60 minutes",
        "mistakes": "Redo L1–L9",
        "check": "Can you start tomorrow?"
      },
      {
        "task": "Save the final checklist",
        "standard": "Includes unfinished list",
        "mistakes": "Blank save",
        "check": "Visible after refresh?"
      }
    ],
    "zhMistakesDetailed": [
      {
        "error": "檢查表寫本站已做原創性比對",
        "why": "功能不存在",
        "fix": "刪除該句，改為你自己對照原文"
      },
      {
        "error": "把缺文獻寫成已完成精讀",
        "why": "提交風險",
        "fix": "維持未完成並刪無法核對引用"
      }
    ],
    "enMistakesDetailed": [
      {
        "error": "Checklist says this site ran originality detection",
        "why": "That feature does not exist",
        "fix": "Delete it; verify originals yourself"
      },
      {
        "error": "Missing literature marked as close-read",
        "why": "Submission risk",
        "fix": "Keep unfinished and drop unverifiable cites"
      }
    ],
    "zhNextStep": "把這份檢查存進研究與競賽成果包。從未完成清單的第一項開始補，不必重寫全部前課。",
    "enNextStep": "Save this check to your research and competition package. Start with the first unfinished item. You do not need to rewrite prior lessons.",
    "zhSummary": [
      "本堂成果：完整研究與競賽提交檢查",
      "整合前 9 堂",
      "未完成就標未完成"
    ],
    "enSummary": [
      "Deliverable: Final Research & Competition Submission Checklist",
      "Integrates Lessons 1–9",
      "Mark unfinished as unfinished"
    ],
    "zhRubric": [
      {
        "name": "十項檢查誠實",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "未完成未假裝",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "前後一致",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      },
      {
        "name": "無平台功能虛構",
        "levels": {
          "incomplete": "尚未完成或無法使用",
          "basic": "有產出但結構不清或未查證",
          "good": "結構清楚且標示待查證處",
          "ready": "可納入研究與競賽成果包"
        }
      }
    ],
    "enRubric": [
      {
        "name": "Honest ten checks",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Unfinished not faked",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "Front-to-back consistency",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      },
      {
        "name": "No invented platform features",
        "levels": {
          "incomplete": "Incomplete or unusable",
          "basic": "Produced but unclear or unverified",
          "good": "Clear structure with verification flags",
          "ready": "Ready for the research and competition package"
        }
      }
    ]
  }
],
  "career-internship": [
    {
      "id": "career-internship-L1",
      "lessonKey": "career-internship-L1",
      "zhTitle": "第1課：盤點可寫進履歷的真實經驗與能力證據",
      "enTitle": "Lesson 1: Inventory real experience and evidence for your resume",
      "zhConcept": "這一課只服務實習與求職。履歷不是興趣清單，而是「證據清單」：情境、你的角色、行動、可驗證結果、佐證方式。課堂專題、社團、工讀、志工、比賽都可以，前提是你能公開、誠實地說明。\n\nAI 適合幫你分類、追問缺口（缺數字？缺角色？缺結果？）、建議哪幾筆更對職缺；不可發明專案、職稱或業績。先有證據，才有後面的 STAR 改寫與履歷投遞。",
      "enConcept": "For internships and jobs, build an evidence inventory—situation, role, actions, verifiable results, proof—not a hobby list. AI may classify and probe gaps; it must not invent projects, titles, or metrics.",
      "zhPrompt": "請擔任求職教練。目標實習／職缺方向：【】。我的真實經歷（可條列，勿替我新增）：【】。\n\n請先追問缺口，再輸出：分類後的證據表（情境／角色／行動／結果／佐證）、建議優先寫進履歷的 5 筆、以及仍缺的資料清單。禁止新增我沒做過的經歷或數字。用繁體中文。",
      "enPrompt": "Act as a career coach. Target role: []. Real experiences (do not add new ones): []. Probe gaps, then output an evidence table, top 5 resume candidates, and missing-info list. Invent no experiences or numbers.",
      "zhExample": "「辦過迎新」→ 追問人數、預算、你做的決策、可驗證結果（準點開始、抱怨下降、預算內完成），再決定是否值得寫。",
      "enExample": "“Organized orientation” becomes useful only after clarifying headcount, budget, your decisions, and a verifiable outcome.",
      "zhPractice": "鎖定一個目標實習方向。；列出至少 8 筆真實經歷。；用 Prompt 追問並補欄位。；刪除無佐證的形容詞句。；標出最對準的 3 筆並寫下佐證在哪。",
      "enPractice": "Pick a target internship direction.；List 8+ real experiences.；Probe and complete fields.；Delete unprovable adjectives.；Mark top 3 and where proof lives.",
      "zhFeedbackPrompt": "你是一位求職教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 真實性\n- 可驗證性\n- 與職缺相關\n- 完整度\n- 優先排序品質\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a career coach. Score 1-10 for: Truthfulness, Verifiability, Role relevance, Completeness, Prioritization. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "履歷底稿本質上是？",
          "options": [
            "可驗證證據清單",
            "興趣愛好大全",
            "AI 自動編造的成就"
          ],
          "answer": 0,
          "explain": "證據優先。"
        },
        {
          "q": "AI 在本課不可做？",
          "options": [
            "發明你沒做過的專案",
            "追問缺口",
            "協助分類"
          ],
          "answer": 0,
          "explain": "禁止虛構。"
        },
        {
          "q": "一筆好證據通常含？",
          "options": [
            "情境、角色、行動、結果",
            "只有個性形容詞",
            "只有社團名稱"
          ],
          "answer": 0,
          "explain": "完整要素。"
        },
        {
          "q": "數字不確定時應？",
          "options": [
            "標成待確認，不可瞎填",
            "請 AI 估一個漂亮數字",
            "直接刪除所有經歷"
          ],
          "answer": 0,
          "explain": "誠實。"
        },
        {
          "q": "本課產出？",
          "options": [
            "證據表與 TOP3",
            "錄取通知",
            "完整薪資談判腳本"
          ],
          "answer": 0,
          "explain": "底稿。"
        }
      ],
      "enQuizItems": [
        {
          "q": "履歷底稿本質上是？",
          "options": [
            "可驗證證據清單",
            "興趣愛好大全",
            "AI 自動編造的成就"
          ],
          "answer": 0,
          "explain": "證據優先。"
        },
        {
          "q": "AI 在本課不可做？",
          "options": [
            "發明你沒做過的專案",
            "追問缺口",
            "協助分類"
          ],
          "answer": 0,
          "explain": "禁止虛構。"
        },
        {
          "q": "一筆好證據通常含？",
          "options": [
            "情境、角色、行動、結果",
            "只有個性形容詞",
            "只有社團名稱"
          ],
          "answer": 0,
          "explain": "完整要素。"
        },
        {
          "q": "數字不確定時應？",
          "options": [
            "標成待確認，不可瞎填",
            "請 AI 估一個漂亮數字",
            "直接刪除所有經歷"
          ],
          "answer": 0,
          "explain": "誠實。"
        },
        {
          "q": "本課產出？",
          "options": [
            "證據表與 TOP3",
            "錄取通知",
            "完整薪資談判腳本"
          ],
          "answer": 0,
          "explain": "底稿。"
        }
      ],
      "zhOutcome": "產出 8–12 筆可驗證經驗證據表，並標出最對準目標實習／職缺的 3 筆。",
      "enOutcome": "Produce an 8–12 item evidence inventory and highlight the top 3 for your target role.",
      "zhValueTip": "把真實經歷整理成可驗證的能力證據，作為履歷與面試底稿。",
      "enValueTip": "Turn real experiences into verifiable evidence for resumes and interviews.",
      "zhCaseStudy": "資管系學生想投資料實習，起初只寫「會 Python、辦過迎新」。盤點後列出：課程儀表板專題（缺值處理）、系學會活動協調（時程與分工）、工讀客服（回應時效）。AI 追問佐證後，他補上「缺值率由約 12% 降到 3%（作業報告截圖可證）」，刪掉無法說明的空泛「領導力」。",
      "enCaseStudy": "An IS student targeting a data internship replaced vague claims with a dashboard project, event coordination, and part-time support work—adding a verifiable missing-value improvement and dropping unprovable leadership slogans.",
      "zhExcellentExample": "證據表含 8–12 筆，欄位齊全；每筆可說清楚角色與結果；標出 3 筆最對職缺；註明哪些數字仍待確認、不可瞎填。",
      "enExcellentExample": "8–12 complete evidence rows, clear role/result, top 3 marked for the target role, and uncertain metrics flagged rather than invented.",
      "zhWorkflow": [
        "鎖定職缺方向",
        "列出真實經歷",
        "追問結果與佐證",
        "刪除無證據項目",
        "排出優先順序"
      ],
      "enWorkflow": [
        "Lock a target direction",
        "List real experiences",
        "Probe results and proof",
        "Drop unprovable items",
        "Rank priority"
      ],
      "zhCommonMistakes": [
        "讓 AI 編造業績或職稱",
        "把興趣當成果",
        "只用形容詞沒有佐證",
        "把別人的功勞寫成自己的",
        "沒有對準任何職缺方向"
      ],
      "enCommonMistakes": [
        "Invented metrics/titles",
        "Interests as achievements",
        "Adjectives without proof",
        "Claiming others’ work",
        "No target-role focus"
      ],
      "zhDeliverableChecklist": [
        "8 筆以上證據",
        "結果／佐證欄",
        "TOP3 標註",
        "無虛構數字",
        "對準目標方向"
      ],
      "enDeliverableChecklist": [
        "8+ evidence rows",
        "Result/proof fields",
        "Top 3 marked",
        "No invented numbers",
        "Aligned to target"
      ],
      "zhScorecard": [
        "真實性",
        "可驗證性",
        "與職缺相關",
        "完整度",
        "優先排序品質"
      ],
      "enScorecard": [
        "Truthfulness",
        "Verifiability",
        "Role relevance",
        "Completeness",
        "Prioritization"
      ],
      "zhNotePrompt": "貼上你的證據表與 TOP3。",
      "enNotePrompt": "Paste your evidence table and top 3.",
      "zhCoachPrompt": "請檢查我的證據是否可驗證、是否對準職缺，並指出仍缺的佐證。不要新增經歷。",
      "enCoachPrompt": "Check verifiability and role fit; list missing proof. Add no experiences.",
      "title": "盤點可寫進履歷的真實經驗與能力證據",
      "description": "把真實經歷整理成可驗證的能力證據，作為履歷與面試底稿。",
      "goal": "產出 8–12 筆可驗證經驗證據表，並標出最對準目標實習／職缺的 3 筆。"
    },
    {
      "id": "career-internship-L2",
      "lessonKey": "career-internship-L2",
      "zhTitle": "第2課：用 STAR 把經驗寫成可驗證的成果描述",
      "enTitle": "Lesson 2: Rewrite experience into verifiable STAR achievement bullets",
      "zhConcept": "STAR（Situation／Task／Action／Result）把「我做過什麼」變成「我造成什麼可驗證改變」。履歷條目應強調你的行動與結果，而不是團隊口號。AI 可幫你壓縮字數、改成動詞開頭、檢查是否缺 Result；不可替你發明百分比或客戶名稱。\n\n寫完後要能在面試中用同一則故事展開。本課只處理成果描述寫作，不擴寫到與求職無關的長文。",
      "enConcept": "STAR turns activities into verifiable impact. AI can tighten wording and spot missing results; it must not invent percentages or client names. Write bullets you can also expand in interviews.",
      "zhPrompt": "請擔任履歷寫作教練。目標職缺：【】。我的真實 STAR 素材：【】。\n\n請改寫成履歷條目（繁中或英文依我指定），每則標註缺了 S/T/A/R 哪一段，並列出不可發明的資訊。禁止新增業績數字。",
      "enPrompt": "Act as a resume coach. Target role: []. Real STAR material: []. Rewrite bullets, mark missing S/T/A/R, and list facts that must not be invented. Add no metrics.",
      "zhExample": "弱：提升了社團效率。強：為減少會議拖延，建立議程模板與決議追蹤表，連續四次例會準時結束，任務逾期件數下降。",
      "enExample": "Weak: improved club efficiency. Strong: introduced agenda templates and decision tracking so four meetings ended on time and overdue tasks fell.",
      "zhPractice": "選 5 筆證據。；每筆寫完整 STAR。；請 AI 壓縮成履歷條目並人工核對事實。；標出最對職缺的 3 則。；準備一則 60 秒口述版。",
      "enPractice": "Pick 5 evidence rows.；Write full STAR.；Tighten with AI and fact-check.；Mark top 3.；Prepare a 60-second spoken version.",
      "zhFeedbackPrompt": "你是一位履歷寫作教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 具體性\n- 結果強度\n- 真實性\n- 職缺對齊\n- 可面試展開\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a resume writing coach. Score 1-10 for: Specificity, Result strength, Truthfulness, Role alignment, Interview expandability. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "STAR 的 R 最該是？",
          "options": [
            "可驗證或可說明的結果",
            "空洞形容詞",
            "與你無關的團隊口號"
          ],
          "answer": 0,
          "explain": "結果要站得住。"
        },
        {
          "q": "AI 改寫時最危險的是？",
          "options": [
            "擅自加入假數據",
            "幫你縮短句子",
            "提醒缺了 Task"
          ],
          "answer": 0,
          "explain": "禁止虛構。"
        },
        {
          "q": "履歷條目較佳型態是？",
          "options": [
            "動詞開頭＋行動＋結果",
            "以「我覺得」開頭",
            "只列社團名稱"
          ],
          "answer": 0,
          "explain": "行動與結果。"
        },
        {
          "q": "寫完條目後應能？",
          "options": [
            "在面試用同一故事展開",
            "永遠背誦不可改",
            "交給 AI 直接投遞不管"
          ],
          "answer": 0,
          "explain": "條目服務面試。"
        },
        {
          "q": "本課產出？",
          "options": [
            "STAR 成果描述",
            "錄取合約",
            "與職缺無關的長文小説"
          ],
          "answer": 0,
          "explain": "成果描述。"
        }
      ],
      "enQuizItems": [
        {
          "q": "STAR 的 R 最該是？",
          "options": [
            "可驗證或可說明的結果",
            "空洞形容詞",
            "與你無關的團隊口號"
          ],
          "answer": 0,
          "explain": "結果要站得住。"
        },
        {
          "q": "AI 改寫時最危險的是？",
          "options": [
            "擅自加入假數據",
            "幫你縮短句子",
            "提醒缺了 Task"
          ],
          "answer": 0,
          "explain": "禁止虛構。"
        },
        {
          "q": "履歷條目較佳型態是？",
          "options": [
            "動詞開頭＋行動＋結果",
            "以「我覺得」開頭",
            "只列社團名稱"
          ],
          "answer": 0,
          "explain": "行動與結果。"
        },
        {
          "q": "寫完條目後應能？",
          "options": [
            "在面試用同一故事展開",
            "永遠背誦不可改",
            "交給 AI 直接投遞不管"
          ],
          "answer": 0,
          "explain": "條目服務面試。"
        },
        {
          "q": "本課產出？",
          "options": [
            "STAR 成果描述",
            "錄取合約",
            "與職缺無關的長文小説"
          ],
          "answer": 0,
          "explain": "成果描述。"
        }
      ],
      "zhOutcome": "產出至少 5 則 STAR 成果描述（含可驗證結果），並選出 3 則最對目標職缺。",
      "enOutcome": "Produce at least five STAR accomplishment bullets with verifiable results, and select the top three for your target role.",
      "zhValueTip": "用 STAR 把經驗寫成可驗證、可放進履歷與面試的成果描述。",
      "enValueTip": "Use STAR to turn experiences into verifiable accomplishment bullets for resumes and interviews.",
      "zhCaseStudy": "學生原句「負責活動很有領導力」。改寫後：S 迎新當日動線混亂；T 需在兩小時內讓 180 人完成報到；A 重排報到關卡並做即時人力調度；R 報到時間由約 40 分鐘降到 15 分鐘，當日無重大抱怨紀錄。面試時他能講出自己做了哪幾個決策。",
      "enCaseStudy": "“Showed leadership at orientation” became a STAR bullet with a clear bottleneck, actions, and a measurable check-in-time reduction the student could defend in interviews.",
      "zhExcellentExample": "5 則以上 STAR，動詞開頭、結果可驗證或可說明估算來源；標註對應職缺能力；刪除無法佐證的誇飾。",
      "enExcellentExample": "Five+ STAR bullets with strong verbs, verifiable or source-noted results, mapped skills, and no unsupported hype.",
      "zhWorkflow": [
        "選證據",
        "寫完整 STAR",
        "壓縮成條目",
        "核對事實",
        "對齊職缺能力"
      ],
      "enWorkflow": [
        "Select evidence",
        "Write full STAR",
        "Compress to bullets",
        "Fact-check",
        "Map to role skills"
      ],
      "zhCommonMistakes": [
        "只有職務沒有結果",
        "結果全是感覺沒有可驗證點",
        "AI 加了假百分比",
        "把團隊成果全算自己",
        "條目過長像段落"
      ],
      "enCommonMistakes": [
        "Duties without results",
        "Feelings instead of proof",
        "Fake percentages",
        "Claiming all team credit",
        "Paragraph-long bullets"
      ],
      "zhDeliverableChecklist": [
        "5 則 STAR",
        "結果可說明",
        "無虛構數字",
        "TOP3",
        "可口述"
      ],
      "enDeliverableChecklist": [
        "5 STAR bullets",
        "Explainable results",
        "No invented numbers",
        "Top 3",
        "Speakable"
      ],
      "zhScorecard": [
        "具體性",
        "結果強度",
        "真實性",
        "職缺對齊",
        "可面試展開"
      ],
      "enScorecard": [
        "Specificity",
        "Result strength",
        "Truthfulness",
        "Role alignment",
        "Interview expandability"
      ],
      "zhNotePrompt": "貼上 5 則 STAR 與你的 TOP3。",
      "enNotePrompt": "Paste five STAR bullets and your top 3.",
      "zhCoachPrompt": "請評我的 STAR 是否缺結果或過度誇大，並給出改寫，但不要新增數字。",
      "enCoachPrompt": "Score my STAR bullets for missing results or hype; rewrite without adding numbers.",
      "title": "用 STAR 把經驗寫成可驗證的成果描述",
      "description": "用 STAR 把經驗寫成可驗證、可放進履歷與面試的成果描述。",
      "goal": "產出至少 5 則 STAR 成果描述（含可驗證結果），並選出 3 則最對目標職缺。"
    },
    {
      "id": "career-internship-L3",
      "lessonKey": "career-internship-L3",
      "zhTitle": "第3課：鎖定目標實習／職缺，拆解職缺需求",
      "enTitle": "Lesson 3: Target internships/roles and decode job requirements",
      "zhConcept": "投遞前先拆職缺。把 JD 分成必要條件與加分項，再逐條對你的證據。匹配不是感覺，而是「哪一段經歷證明哪一條需求」。缺口要誠實寫，並決定：七天內可補的小型證明（作品截圖、練習題、課程專題說明）vs 需要更長時間的能力。\n\nAI 可協助萃取關鍵字與做成對照表；不可替你假裝已具備未學過的技能。本課服務求職決策，不延伸到其他非求職主題。",
      "enConcept": "Parse the JD into must-haves and nice-to-haves, map each to evidence, and plan honest gap-closing. AI can extract keywords; it must not claim skills you lack.",
      "zhPrompt": "請擔任求職策略教練。職缺 JD：【貼上】。我的證據摘要：【】。\n\n請輸出：必要／加分條件、匹配對照表、缺口清單、建議先補的 3 件事、是否建議本週投遞。禁止宣稱我具備未提供證據的技能。",
      "enPrompt": "Act as a job-search coach. JD: []. Evidence summary: []. Output must/nice lists, match table, gaps, top 3 close-gap actions, and apply-this-week advice. Do not claim skills without evidence.",
      "zhExample": "JD 寫「熟悉 SQL」→ 對照「課程專題：用 SQL 清理訂單表並輸出摘要」；若只有「上過課」則標為弱匹配，需補作品說明。",
      "enExample": "“Familiar with SQL” maps to a project that cleaned an orders table; “took a class” alone is weak and needs an artifact.",
      "zhPractice": "選定 1 個真實職缺。；貼上 JD 做拆解。；完成匹配與缺口表。；寫一週補齊計畫。；做出投遞／暫緩決策並說明理由。",
      "enPractice": "Pick one real JD.；Break it down.；Complete match/gap table.；Write a one-week plan.；Decide apply vs wait with reasons.",
      "zhFeedbackPrompt": "你是一位求職策略教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 拆解完整度\n- 證據對齊\n- 缺口誠實度\n- 行動可執行\n- 決策清楚\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a job-search strategy coach. Score 1-10 for: Parse completeness, Evidence alignment, Gap honesty, Actionability, Decision clarity. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "拆 JD 的第一步通常是？",
          "options": [
            "分出必要與加分條件",
            "先寫求職信不管需求",
            "請 AI 直接說你很適合"
          ],
          "answer": 0,
          "explain": "先結構化需求。"
        },
        {
          "q": "弱匹配應該？",
          "options": [
            "標出並計畫補齊",
            "改成精通",
            "刪除職缺不看"
          ],
          "answer": 0,
          "explain": "誠實處理。"
        },
        {
          "q": "AI 不可協助你？",
          "options": [
            "假裝具備未學技能",
            "萃取關鍵字",
            "做對照表"
          ],
          "answer": 0,
          "explain": "禁止造假。"
        },
        {
          "q": "本課核心產出？",
          "options": [
            "拆解表與缺口計畫",
            "錄取後薪資單",
            "與職缺無關的日記"
          ],
          "answer": 0,
          "explain": "決策底稿。"
        },
        {
          "q": "何時可考慮暫緩投遞？",
          "options": [
            "必要條件缺口過大且短期難補",
            "已經完全匹配",
            "只是想多改一個標點"
          ],
          "answer": 0,
          "explain": "必要條件優先。"
        }
      ],
      "enQuizItems": [
        {
          "q": "拆 JD 的第一步通常是？",
          "options": [
            "分出必要與加分條件",
            "先寫求職信不管需求",
            "請 AI 直接說你很適合"
          ],
          "answer": 0,
          "explain": "先結構化需求。"
        },
        {
          "q": "弱匹配應該？",
          "options": [
            "標出並計畫補齊",
            "改成精通",
            "刪除職缺不看"
          ],
          "answer": 0,
          "explain": "誠實處理。"
        },
        {
          "q": "AI 不可協助你？",
          "options": [
            "假裝具備未學技能",
            "萃取關鍵字",
            "做對照表"
          ],
          "answer": 0,
          "explain": "禁止造假。"
        },
        {
          "q": "本課核心產出？",
          "options": [
            "拆解表與缺口計畫",
            "錄取後薪資單",
            "與職缺無關的日記"
          ],
          "answer": 0,
          "explain": "決策底稿。"
        },
        {
          "q": "何時可考慮暫緩投遞？",
          "options": [
            "必要條件缺口過大且短期難補",
            "已經完全匹配",
            "只是想多改一個標點"
          ],
          "answer": 0,
          "explain": "必要條件優先。"
        }
      ],
      "zhOutcome": "完成一份職缺拆解表：必要條件、加分項、我的匹配證據、缺口與補齊計畫。",
      "enOutcome": "Complete a JD breakdown: must-haves, nice-to-haves, match evidence, gaps, and a close-the-gap plan.",
      "zhValueTip": "鎖定目標實習／職缺，把 JD 拆成能力需求、匹配點與缺口。",
      "enValueTip": "Target a role and break the JD into required skills, match points, and gaps.",
      "zhCaseStudy": "學生看中「數據分析實習：SQL、儀表板、溝通」。拆解後：SQL 有課程專題可證；儀表板有作品截圖；溝通可寫系學會協調。缺口是「商業指標解讀」，他安排一週用公開資料做一個指標說明頁，而不是在履歷寫「精通商業策略」。",
      "enCaseStudy": "For a data internship JD, a student mapped SQL and dashboard proof, then planned a one-week metrics explainer for the business-interpretation gap instead of claiming mastery.",
      "zhExcellentExample": "拆解表含 JD 原文要點、匹配證據連結、缺口分級、投遞／暫緩決策，以及一週補齊行動。",
      "enExcellentExample": "A breakdown with JD points, linked evidence, graded gaps, apply/wait decision, and a one-week close-the-gap action.",
      "zhWorkflow": [
        "鎖定職缺",
        "拆必要與加分",
        "對照證據",
        "標缺口",
        "決定投遞或先補"
      ],
      "enWorkflow": [
        "Lock a JD",
        "Split must/nice",
        "Map evidence",
        "Mark gaps",
        "Decide apply or prep"
      ],
      "zhCommonMistakes": [
        "不看 JD 就投",
        "把加分項當已精通",
        "隱瞞明顯缺口",
        "AI 幫你假裝會某工具",
        "同時拆 20 個職缺卻都不深入"
      ],
      "enCommonMistakes": [
        "Applying unread",
        "Treating nice-to-haves as mastery",
        "Hiding clear gaps",
        "Faking tools via AI",
        "Shallow-parsing too many JDs"
      ],
      "zhDeliverableChecklist": [
        "拆解表",
        "匹配證據",
        "缺口計畫",
        "投遞決策",
        "無虛假技能宣稱"
      ],
      "enDeliverableChecklist": [
        "Breakdown",
        "Match evidence",
        "Gap plan",
        "Apply decision",
        "No fake skill claims"
      ],
      "zhScorecard": [
        "拆解完整度",
        "證據對齊",
        "缺口誠實度",
        "行動可執行",
        "決策清楚"
      ],
      "enScorecard": [
        "Parse completeness",
        "Evidence alignment",
        "Gap honesty",
        "Actionability",
        "Decision clarity"
      ],
      "zhNotePrompt": "貼上職缺拆解表與投遞決策。",
      "enNotePrompt": "Paste your JD breakdown and apply/wait decision.",
      "zhCoachPrompt": "請檢查我的職缺拆解是否誠實，並指出最危險的誇大匹配。",
      "enCoachPrompt": "Check honesty of my JD mapping and flag risky overclaims.",
      "title": "鎖定目標實習／職缺，拆解職缺需求",
      "description": "鎖定目標實習／職缺，把 JD 拆成能力需求、匹配點與缺口。",
      "goal": "完成一份職缺拆解表：必要條件、加分項、我的匹配證據、缺口與補齊計畫。"
    },
    {
      "icon": "📄",
      "title": "用 AI 建立並優化履歷（對準職缺，不造假）",
      "description": "為實習與第一份工作打造可通過 ATS 的履歷：結構、量化成果、關鍵字對齊職缺，並誠實修改。",
      "goal": "我的目標職缺對齊履歷＋ATS 檢查表＋求職信草稿",
      "estimatedTime": "60-80 分鐘",
      "difficulty": "初階",
      "tags": [
        "履歷",
        "ATS",
        "求職信",
        "Chapter11"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 10,
      "chapterZh": "AI 求職與職涯發展",
      "chapterEn": "AI Job Search and Career Development",
      "zhTitle": "第4課：用 AI 建立並優化履歷（對準職缺，不造假）",
      "enTitle": "Lesson 4: Build and refine a resume aligned to the role—without fabricating",
      "zhValueTip": "為實習與第一份工作打造可通過 ATS 的履歷：結構、量化成果、關鍵字對齊職缺，並誠實修改。",
      "enValueTip": "Build an ATS-friendly resume for internships and first jobs—structure, quantified impact, keyword alignment—and revise honestly.",
      "zhOutcome": "我的目標職缺對齊履歷＋ATS 檢查表＋求職信草稿",
      "enOutcome": "My Role-aligned Resume + ATS Checklist + Cover Letter Draft",
      "zhConcept": "大學生履歷常寫成「課程清單」：修過什麼、參加過什麼，卻看不出你解決過什麼問題。這一課把履歷當成「對特定職缺的證據包」。先選 1 個目標職缺（實習／新鮮人），拆 JD：必備技能、責任、關鍵字、軟實力訊號。履歷區塊建議：聯絡資訊、一句定位、教育、經歷（實習／專題／社團／工讀）、專案、技能；證書與志工可精簡。每段經歷用動詞開頭＋情境＋行動＋結果；能量化就量化（人數、時間、錯誤率、完賽名次），不能量化就寫可觀察成果，不可捏造。ATS（Applicant Tracking System）友善做法：標準標題、少表格／文字框、關鍵字自然出現、檔名清楚、避免過度圖形。CakeResume／Yourator 模板可用，但最終要對齊 JD。求職信（Cover Letter）補履歷沒說完的動機與匹配點：為何這間公司、為何這個角色、你帶什麼證據。短、具體、可核對。AI 可協助改寫句型、對齊關鍵字、做 ATS 檢查，但必須保留真實經歷；不可發明職稱、績效、證照。事實／潤飾建議要分開。修改流程：raw 經歷清單→對 JD 排序→AI 改寫→你刪假大空→請同學或職涯中心看一眼→定稿 PDF／線上版。與 Chapter 10 作品集銜接：專案條目要能連到 GitHub／網站，說法一致。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。",
      "enConcept": "Treat the resume as evidence for one target role: parse the JD, quantify real outcomes, stay ATS-friendly, and write a short honest cover letter. AI rewrites; you never invent credentials.",
      "zhCaseStudy": "情境案例：應屆生小安投「行銷實習」履歷全是社團活動名稱。她對齊 JD 後，把「負責粉專」改成「規劃 8 則貼文檔期，互動率從 X 升到 Y（真實後台數據）」。再用 AI 檢查缺關鍵字「內容企劃／數據觀察」，自然補上。求職信寫為何喜歡該品牌的用戶研究取向。兩週內獲得面試。她把「不可捏造數據」寫進自己的求職規範。",
      "enCaseStudy": "Xiao An rewrote club fluff into JD-aligned, quantified bullets and landed an interview without inventing metrics.",
      "zhWorkflow": [
        "選定目標職缺並拆 JD 關鍵字",
        "列出真實經歷與可驗證成果",
        "撰寫／改寫履歷子彈點並做 ATS 檢查",
        "寫一封對齊的求職信",
        "請人複閱後定稿"
      ],
      "enWorkflow": [
        "Pick a target role and parse JD keywords",
        "List real experiences and verifiable outcomes",
        "Rewrite bullets and run an ATS checklist",
        "Draft an aligned cover letter",
        "Peer-review and finalize"
      ],
      "zhCommonMistakes": [
        "一份履歷投所有職缺完全不改",
        "空泛形容詞無證據",
        "發明績效與職稱",
        "花俏排版導致 ATS 難讀"
      ],
      "enCommonMistakes": [
        "One generic resume for all roles",
        "Adjective fluff without evidence",
        "Invented titles/metrics",
        "Fancy layouts that break ATS parsing"
      ],
      "zhExcellentExample": "優秀履歷：對準一個 JD、子彈點可驗證、關鍵字自然、ATS 可讀、求職信短而具體、與作品連結一致。",
      "enExcellentExample": "A strong pack targets one JD, uses verifiable bullets, natural keywords, ATS-readable format, a specific letter, and consistent portfolio links.",
      "zhPrompt": "【Prompt 1｜職缺分析與履歷對齊】\n目標職缺 JD：\n（貼上）\n我的真實經歷清單：\n（貼上）\n請整理：必備條件、加分條件、關鍵字、我已具備／缺口／可用哪些真實經歷對齊。不可發明我沒有的經歷；缺口請標待補強，不要寫成已具備。",
      "enPrompt": "[Prompt 1 | JD Alignment] Map must-haves, keywords, and which of my real experiences fit; never invent experience; mark gaps as gaps.",
      "zhCoachPrompt": "【Prompt 2｜履歷子彈點與 ATS 檢查】\nJD 關鍵字：\n（貼上）\n我的草稿履歷：\n（貼上）\n請改寫為動詞開頭、盡量量化（只能用我提供的數字），並列 ATS 風險（表格、圖示、缺關鍵字）。不要添加假數據；沒有數字就改寫成可觀察成果。",
      "enCoachPrompt": "[Prompt 2 | Bullets & ATS] Rewrite with verbs and only my numbers; list ATS risks; invent no metrics.",
      "zhFeedbackPrompt": "【Prompt 3｜求職信與誠實度驗收】\n履歷：\n（貼上）\n求職信：\n（貼上）\nJD：\n（貼上）\n請評分匹配度、具體性、ATS 友善、是否有誇大。指出三處必改。若發現像捏造的內容，明確標出並要求我確認來源。",
      "enFeedbackPrompt": "[Prompt 3 | Letter & Honesty QA] Score fit, specificity, ATS friendliness, and exaggeration risk; flag anything that looks fabricated.",
      "zhExample": "Before：負責社團活動。｜After：協調 12 人分工完成迎新，當日報到流程縮短約 20 分鐘（以實際動線計時）。｜求職信：對齊「活動企劃」關鍵字與學習動機。",
      "enExample": "A vague club line becomes a timed, verifiable operations bullet plus a JD-aligned cover note.",
      "zhPractice": "選一個真實實習／新鮮人職缺。；完成對齊履歷與 ATS 檢查。；寫求職信一頁內。；Challenge：請同學用 JD 當招聘官，圈出仍空泛的三句並重寫到可追問細節。",
      "enPractice": "Pick a real internship/new-grad JD.；Finish aligned resume + ATS check.；Write a one-page letter.；Challenge: peer-hire against the JD and rewrite three vague lines.",
      "zhQuizItems": [
        {
          "q": "大學生履歷最該優先對齊的是？",
          "options": [
            "盡量塞滿所有社團名稱",
            "目標職缺的責任與關鍵字，並用真實成果證明",
            "最花俏的設計模板",
            "假造的國外實習"
          ],
          "answer": 1,
          "explain": "履歷是職缺證據包，不是活動百科。"
        },
        {
          "q": "ATS 友善做法包含？",
          "options": [
            "大量文字框與圖形標題",
            "清楚標準標題、可選取文字、關鍵字自然出現",
            "把重要字寫成圖片",
            "完全不寫技能"
          ],
          "answer": 1,
          "explain": "機器要能解析文字與結構。"
        },
        {
          "q": "使用 AI 改履歷時不可？",
          "options": [
            "改寫句型並提示缺口",
            "發明績效數字與職稱讓履歷更好看",
            "要求分開事實與建議",
            "做 ATS 風險檢查"
          ],
          "answer": 1,
          "explain": "不可捏造經歷與數據。"
        }
      ],
      "enQuizItems": [
        {
          "q": "A student resume should primarily align to:",
          "options": [
            "Every club name you ever had",
            "The target role’s duties/keywords with real proof",
            "The flashiest template",
            "A fake overseas internship"
          ],
          "answer": 1,
          "explain": "Resumes are evidence packs for a role."
        },
        {
          "q": "ATS-friendly practice includes:",
          "options": [
            "Heavy text boxes and graphic headers",
            "Clear standard headings, selectable text, natural keywords",
            "Key words as images only",
            "Omitting skills entirely"
          ],
          "answer": 1,
          "explain": "Parsers need readable structure and text."
        },
        {
          "q": "When using AI on resumes you must not:",
          "options": [
            "Rewrite phrasing and flag gaps",
            "Invent metrics and titles to look stronger",
            "Separate facts from suggestions",
            "Check ATS risks"
          ],
          "answer": 1,
          "explain": "Never fabricate experience."
        }
      ],
      "zhNotePrompt": "貼上目標職缺名稱、三條改寫後子彈點，以及求職信的核心匹配句。",
      "enNotePrompt": "Paste the target role, three rewritten bullets, and your cover letter’s core match sentence.",
      "zhDeliverableChecklist": [
        "JD 關鍵字表完成",
        "履歷對齊定稿",
        "ATS 檢查通過",
        "求職信完成",
        "無捏造經歷／數據"
      ],
      "enDeliverableChecklist": [
        "JD keyword map done",
        "Aligned resume finalized",
        "ATS checklist passed",
        "Cover letter done",
        "No invented experience/metrics"
      ],
      "zhScorecard": [
        "職缺對齊",
        "成果可驗證",
        "ATS 友善",
        "求職信具體",
        "誠實"
      ],
      "enScorecard": [
        "Role alignment",
        "Verifiable outcomes",
        "ATS-friendly",
        "Specific letter",
        "Honesty"
      ],
      "resources": [
        {
          "name": "CakeResume",
          "url": "https://www.cakeresume.com",
          "note": "履歷模板與投遞常見於台灣新鮮人"
        },
        {
          "name": "Yourator",
          "url": "https://www.yourator.co",
          "note": "新創／數位職缺與履歷投遞"
        },
        {
          "name": "104",
          "url": "https://www.104.com.tw",
          "note": "職缺 JD 與關鍵字觀察"
        },
        {
          "name": "1111",
          "url": "https://www.1111.com.tw",
          "note": "職缺搜尋與履歷投放"
        },
        {
          "name": "Indeed",
          "url": "https://tw.indeed.com",
          "note": "跨平台職缺與關鍵字對照"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "句型改寫與 ATS 檢查提示"
        }
      ],
      "challenge": "針對一個真實職缺完成「對齊履歷＋求職信」；用 JD 自評匹配度，並列出仍誠實存在的技能缺口與兩週補強計畫。",
      "id": "career-internship-L4",
      "lessonKey": "career-internship-L4"
    },
    {
      "id": "career-internship-L5",
      "lessonKey": "career-internship-L5",
      "zhTitle": "第5課：用 AI 撰寫求職信與 Cover Letter",
      "enTitle": "Lesson 5: Write application emails and cover letters with AI",
      "zhConcept": "求職信不是履歷重貼，而是回答三件事：為什麼這個角色、為什麼這家組織、你用哪兩三段證據證明你能貢獻。結構建議：開場對準職缺 → 2 個證據段落 → 對組織的具體理解 → 結尾與可面談時間。\n\nAI 可協助組織段落與語氣；所有具體成就必須來自你的證據表。英文信可請 AI 調語氣，但專有名詞與數字要你核對。本課只寫求職信，不擴到其他文件類型。",
      "enConcept": "A cover letter answers why this role, why this org, and which evidence proves you can contribute. AI may structure tone; every achievement must come from your evidence. Fact-check names and numbers.",
      "zhPrompt": "請擔任求職信教練。職缺：【】。組織公開資訊：【】。我的真實證據（僅可使用這些）：【】。語言：【中文／英文】。\n\n請先給大綱，再寫初稿。若缺資料，用【待我填寫：…】標出，不要替我發明成就。最後附上自我檢查清單。",
      "enPrompt": "Act as a cover-letter coach. Role: []. Public org facts: []. My real evidence only: []. Language: []. Outline then draft. Mark gaps as [I will fill: …]; invent no achievements. End with a self-check list.",
      "zhExample": "弱句「我很有熱忱」。強句「在社團招生中，我把三則貼文做成 A/B 測試，報名完成率由 18% 提升到 27%（後台可證），並據此調整後續內容。」",
      "enExample": "Weak: “I am passionate.” Strong: a specific A/B test on signup posts with a verifiable conversion lift and what you changed next.",
      "zhPractice": "選定一個職缺。；列出 2–3 段可用證據。；用 Prompt 產大綱與初稿。；把所有【待我填寫】補成真實資訊。；大聲讀一次，刪除空話與重複履歷逐字重貼。",
      "enPractice": "Pick one JD.；List 2–3 evidence blocks.；Generate outline+draft.；Fill every marked gap with real info.；Read aloud and cut fluff/resume dumps.",
      "zhFeedbackPrompt": "你是一位求職信教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 職缺對準\n- 證據強度\n- 具體性\n- 真實性\n- 行動呼籲\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a cover-letter coach. Score 1-10 for: JD fit, Evidence strength, Specificity, Truthfulness, Call to action. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "求職信最該回答？",
          "options": [
            "為何此角、為何此處、證據何在",
            "只重複履歷每一行",
            "請 AI 決定你的人生目標"
          ],
          "answer": 0,
          "explain": "三角對準。"
        },
        {
          "q": "缺資料時應？",
          "options": [
            "標出待填，不發明",
            "請 AI 編一段漂亮經歷",
            "直接寄出空白"
          ],
          "answer": 0,
          "explain": "誠實。"
        },
        {
          "q": "與履歷的差別是？",
          "options": [
            "強調動機與證據敘事",
            "完全不提任何證據",
            "越長越好"
          ],
          "answer": 0,
          "explain": "敘事互補。"
        },
        {
          "q": "海投同一稿的問題？",
          "options": [
            "未對準職缺顯得敷衍",
            "比較省事所以一定更好",
            "HR 喜歡複製文"
          ],
          "answer": 0,
          "explain": "要客製。"
        },
        {
          "q": "本課產出？",
          "options": [
            "一封可投遞初稿",
            "錄取合約",
            "與求職無關的散文"
          ],
          "answer": 0,
          "explain": "求職信。"
        }
      ],
      "enQuizItems": [
        {
          "q": "求職信最該回答？",
          "options": [
            "為何此角、為何此處、證據何在",
            "只重複履歷每一行",
            "請 AI 決定你的人生目標"
          ],
          "answer": 0,
          "explain": "三角對準。"
        },
        {
          "q": "缺資料時應？",
          "options": [
            "標出待填，不發明",
            "請 AI 編一段漂亮經歷",
            "直接寄出空白"
          ],
          "answer": 0,
          "explain": "誠實。"
        },
        {
          "q": "與履歷的差別是？",
          "options": [
            "強調動機與證據敘事",
            "完全不提任何證據",
            "越長越好"
          ],
          "answer": 0,
          "explain": "敘事互補。"
        },
        {
          "q": "海投同一稿的問題？",
          "options": [
            "未對準職缺顯得敷衍",
            "比較省事所以一定更好",
            "HR 喜歡複製文"
          ],
          "answer": 0,
          "explain": "要客製。"
        },
        {
          "q": "本課產出？",
          "options": [
            "一封可投遞初稿",
            "錄取合約",
            "與求職無關的散文"
          ],
          "answer": 0,
          "explain": "求職信。"
        }
      ],
      "zhOutcome": "產出一封對準特定職缺的求職信初稿（含為什麼你、為什麼這裡、證據段落與結尾行動）。",
      "enOutcome": "Produce one role-specific cover letter draft with fit, motivation, evidence, and a clear close.",
      "zhValueTip": "用職缺需求與真實證據，寫出可投遞的求職信／Cover Letter 初稿。",
      "enValueTip": "Write a submittable cover letter draft from the JD and your real evidence.",
      "zhCaseStudy": "學生投「行銷實習」，第一版全是「我溝通良好」。對照 JD 後改成：一段寫校園活動的內容測試與報名轉換；一段寫他如何整理活動回饋成下檔主題建議；結尾提到該公司最近的校園專案（公開資訊）與他想學習的點。HR 回信邀約面談。",
      "enCaseStudy": "A marketing-intern letter replaced soft traits with two evidence paragraphs on content tests and feedback synthesis, plus a specific public note about the company’s campus project—leading to an interview invite.",
      "zhExcellentExample": "一頁內、對準單一職缺、兩段真實證據、沒有空白待填欄位、沒有虛構專案，結尾有明確行動呼籲。",
      "enExcellentExample": "One page, one JD, two real evidence paragraphs, no blank fields left unfilled, no invented projects, and a clear call to action.",
      "zhWorkflow": [
        "鎖定職缺與組織資訊",
        "選 2–3 證據",
        "產大綱",
        "寫初稿並補空白",
        "對照 JD 自檢"
      ],
      "enWorkflow": [
        "Lock JD and org facts",
        "Select 2–3 evidence blocks",
        "Outline",
        "Draft and fill gaps",
        "Self-check against JD"
      ],
      "zhCommonMistakes": [
        "履歷逐字貼上",
        "空話熱忱無證據",
        "AI 發明實習經歷",
        "同一封信海投不改",
        "留下未填的空白標記就送出"
      ],
      "enCommonMistakes": [
        "Resume dump",
        "Passion with no proof",
        "Invented experience",
        "One generic letter for all",
        "Sending with unfilled brackets"
      ],
      "zhDeliverableChecklist": [
        "對準單一職缺",
        "兩段證據",
        "組織具體性",
        "無虛構",
        "無未填空白"
      ],
      "enDeliverableChecklist": [
        "One JD focus",
        "Two evidence paras",
        "Org specificity",
        "No fiction",
        "No unfilled gaps"
      ],
      "zhScorecard": [
        "職缺對準",
        "證據強度",
        "具體性",
        "真實性",
        "行動呼籲"
      ],
      "enScorecard": [
        "JD fit",
        "Evidence strength",
        "Specificity",
        "Truthfulness",
        "Call to action"
      ],
      "zhNotePrompt": "貼上求職信初稿與你對照 JD 的自評。",
      "enNotePrompt": "Paste your cover letter draft and JD self-check.",
      "zhCoachPrompt": "請評我的求職信是否空泛或虚构風險，並標出應改寫的句子。不要新增成就。",
      "enCoachPrompt": "Critique vagueness or fabrication risk; mark sentences to rewrite. Add no achievements.",
      "title": "用 AI 撰寫求職信與 Cover Letter",
      "description": "用職缺需求與真實證據，寫出可投遞的求職信／Cover Letter 初稿。",
      "goal": "產出一封對準特定職缺的求職信初稿（含為什麼你、為什麼這裡、證據段落與結尾行動）。"
    },
    {
      "icon": "🗣️",
      "title": "建立 30 秒／1 分鐘／3 分鐘自我介紹",
      "description": "寫出 30 秒／90 秒自我介紹與個人故事主線，連結科系、專案、動機與目標職能，避免空話。",
      "goal": "我的 30 秒與 90 秒自我介紹定稿＋個人故事主線圖",
      "estimatedTime": "45-70 分鐘",
      "difficulty": "初階",
      "tags": [
        "自我介紹",
        "個人故事",
        "電梯簡報",
        "Chapter11"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 10,
      "chapterZh": "AI 求職與職涯發展",
      "chapterEn": "AI Job Search and Career Development",
      "zhTitle": "第6課：建立 30 秒／1 分鐘／3 分鐘自我介紹",
      "enTitle": "Lesson 6: Build 30-second, 1-minute, and 3-minute self-introductions",
      "zhValueTip": "寫出 30 秒／90 秒自我介紹與個人故事主線，連結科系、專案、動機與目標職能，避免空話。",
      "enValueTip": "Craft 30s/90s intros and a personal narrative arc linking major, projects, motivation, and target roles—without fluff.",
      "zhOutcome": "我的 30 秒與 90 秒自我介紹定稿＋個人故事主線圖",
      "enOutcome": "My Final 30s/90s Intros + Personal Narrative Map",
      "zhConcept": "自我介紹是面試與人脈場合的開場作業系統：30 秒抓住「你是誰＋方向＋一個證據」；90 秒補「路徑＋專案＋為何這裡」。個人故事不是悲慘身世競賽，而是可驗證的選擇軌跡：你為何在意某類問題、你做過什麼、你現在求什麼。避免「我是一個樂觀的人」這種無證據形容。結構建議：現在（科系／身分）→轉折或動機→代表行動（專案／實習）→目標職能→收束（為何面談／為何公司）。依場合切換版本：實習面談、社團招新、競賽、中英文。關鍵數字與專案名要說得穩。AI 可幫你壓縮與換說法，但不可改寫成你沒有的精英軌跡；要保留你的語氣，讀出聲來不尬。練習：錄音、計時、刪填充詞、請同學聽完能否複述你的方向。與履歷／LinkedIn 開場一致。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。",
      "enConcept": "Build timed intros and a verifiable narrative arc from identity → motivation → proof → ask. AI compresses language; never invents an elite backstory or changes your voice beyond recognition.",
      "zhCaseStudy": "情境案例：小瑜 90 秒自我介紹講到課程表。她改成「資料系＋照顧家庭排程痛點＋做排課工具＋申請分析實習」。30 秒版更短。面試官第一題就接她的專案，節奏變順。",
      "enCaseStudy": "Xiao Yu replaced a course-list intro with a problem-project-ask arc that interviewers could continue.",
      "zhWorkflow": [
        "抽出真實轉折與代表證據",
        "寫個人故事主線圖",
        "產出 30／90 秒稿並計時",
        "AI 精煉但保留語氣與事實",
        "錄音修正填充詞"
      ],
      "enWorkflow": [
        "Extract real turns and proof",
        "Map the narrative",
        "Draft timed 30/90s versions",
        "AI refine without fake prestige",
        "Record and cut filler"
      ],
      "zhCommonMistakes": [
        "背誦履歷條列",
        "無證據個性形容詞",
        "超時嚴重",
        "與履歷方向矛盾"
      ],
      "enCommonMistakes": [
        "Reading the resume aloud",
        "Trait adjectives without proof",
        "Severe overtime",
        "Contradicting the resume"
      ],
      "zhExcellentExample": "優秀介紹：準時、有方向、有一個可追問證據、收束到目標職能、聽得懂且像本人。",
      "enExcellentExample": "A strong intro is timed, directional, has one probe-able proof, closes on the target role, and sounds like you.",
      "zhPrompt": "【Prompt 1｜個人故事主線】\n事實素材（經歷／專案／動機）：\n（貼上）\n目標職能：［ ］\n請整理主線圖：起點、轉折、證據、方向。標註哪句是事實、哪句是你建議的表述。不要添加我沒有的比賽冠軍或名企實習。",
      "enPrompt": "[Prompt 1 | Narrative Map] Build start/turn/proof/direction from my facts; label facts vs suggested phrasing; invent no prestige.",
      "zhCoachPrompt": "【Prompt 2｜30 秒／90 秒稿】\n主線圖：\n（貼上）\n場合：［實習面試］\n請寫 30 秒與 90 秒稿，標建議秒數。保持我可朗讀的句子長度；不要改成網紅腔或過度謙卑到沒重點。",
      "enCoachPrompt": "[Prompt 2 | 30s/90s Scripts] Write timed scripts with speakable sentences; avoid influencer tone or empty over-humility.",
      "zhFeedbackPrompt": "【Prompt 3｜介紹驗收】\n我的錄音轉寫或講稿：\n（貼上）\n請評：清晰、證據、時間、與職能連結、是否像本人。給刪句建議。不要重寫成另一個人的人生故事。",
      "enFeedbackPrompt": "[Prompt 3 | Intro QA] Score clarity, proof, timing, role link, and authenticity; suggest cuts—don’t rewrite my biography into someone else’s.",
      "zhExample": "30秒：我是…關注…因此做了…現在尋找…實習，想把…能力用在…。｜90秒：補一個 STAR 縮短版與為什麼選貴公司的一點觀察。",
      "enExample": "A 30s identity-problem-proof-ask, expanded to 90s with a mini-STAR and one researched company observation.",
      "zhPractice": "完成主線圖。；定稿 30／90 秒並錄音。；對齊履歷開場。；Challenge：對陌生人版同學講 30 秒，對方需能複述你的目標職能與代表專案。",
      "enPractice": "Finish the narrative map.；Finalize and record 30/90s.；Align with resume.；Challenge: a peer must restate your target role and flagship project after 30 seconds.",
      "zhQuizItems": [
        {
          "q": "30 秒自我介紹最該包含？",
          "options": [
            "完整課程表",
            "身分、方向、一個證據、你的請求／目標",
            "無關笑話三分鐘",
            "家庭住址"
          ],
          "answer": 1,
          "explain": "短介紹要可接續深聊。"
        },
        {
          "q": "個人故事可信的關鍵是？",
          "options": [
            "形容詞越多越好",
            "選擇軌跡可驗證、有代表行動",
            "一定要悲慘",
            "抄網路範本不改"
          ],
          "answer": 1,
          "explain": "可驗證行動建立信任。"
        },
        {
          "q": "AI 幫寫自我介紹時應？",
          "options": [
            "可改成你沒有的精英履歷",
            "精煉語言但保留事實與你的語氣",
            "越長越好",
            "刪掉所有證據"
          ],
          "answer": 1,
          "explain": "精煉而非造假。"
        }
      ],
      "enQuizItems": [
        {
          "q": "A 30s intro should include:",
          "options": [
            "Full course list",
            "Identity, direction, one proof, and your ask/goal",
            "Three minutes of jokes",
            "Home address"
          ],
          "answer": 1,
          "explain": "Short intros should enable deeper follow-up."
        },
        {
          "q": "Credible personal stories need:",
          "options": [
            "Maximum adjectives",
            "A verifiable arc with representative actions",
            "Mandatory tragedy",
            "Unedited internet templates"
          ],
          "answer": 1,
          "explain": "Verifiable actions build trust."
        },
        {
          "q": "When AI helps with intros it should:",
          "options": [
            "Invent an elite resume",
            "Tighten language while keeping facts and your voice",
            "Be as long as possible",
            "Remove all proof"
          ],
          "answer": 1,
          "explain": "Refine, don’t fabricate."
        }
      ],
      "zhNotePrompt": "貼上 30 秒定稿全文，並標出其中的「證據句」。",
      "enNotePrompt": "Paste your final 30s script and mark the proof sentence.",
      "zhDeliverableChecklist": [
        "主線圖完成",
        "30 秒定稿",
        "90 秒定稿",
        "錄音計時達標",
        "與履歷一致"
      ],
      "enDeliverableChecklist": [
        "Narrative map done",
        "30s final",
        "90s final",
        "Timed recording OK",
        "Resume-aligned"
      ],
      "zhScorecard": [
        "準時",
        "有方向",
        "有證據",
        "像本人",
        "可接續"
      ],
      "enScorecard": [
        "On time",
        "Directional",
        "Proof present",
        "Sounds like you",
        "Continuable"
      ],
      "resources": [
        {
          "name": "LinkedIn",
          "url": "https://www.linkedin.com",
          "note": "About 與介紹互相對齊"
        },
        {
          "name": "CakeResume",
          "url": "https://www.cakeresume.com",
          "note": "履歷摘要句可複用到介紹"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "壓縮與多場合版本"
        },
        {
          "name": "Indeed",
          "url": "https://tw.indeed.com",
          "note": "從 JD 語言微調介紹關鍵字"
        },
        {
          "name": "Yourator",
          "url": "https://www.yourator.co",
          "note": "目標產業用語參考"
        }
      ],
      "challenge": "產出可上台的 30／90 秒介紹錄音；請兩位同學回饋「方向是否一秒聽懂」，並迭代一版。",
      "id": "career-internship-L6",
      "lessonKey": "career-internship-L6"
    },
    {
      "icon": "💼",
      "title": "用 AI 經營 LinkedIn 個人品牌檔案",
      "description": "建立清楚的 LinkedIn 定位、關鍵字、精選專案與發文節奏，讓實習與新鮮人形象可被搜尋與信任。",
      "goal": "我的 LinkedIn 個人品牌一頁（Headline／About／精選／發文計畫）",
      "estimatedTime": "55-75 分鐘",
      "difficulty": "初階",
      "tags": [
        "LinkedIn",
        "個人品牌",
        "關鍵字",
        "Chapter11"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 10,
      "chapterZh": "AI 求職與職涯發展",
      "chapterEn": "AI Job Search and Career Development",
      "zhTitle": "第7課：用 AI 經營 LinkedIn 個人品牌檔案",
      "enTitle": "Lesson 7: Use AI to strengthen your LinkedIn professional profile",
      "zhValueTip": "建立清楚的 LinkedIn 定位、關鍵字、精選專案與發文節奏，讓實習與新鮮人形象可被搜尋與信任。",
      "enValueTip": "Build a searchable, trustworthy LinkedIn presence—headline, about, featured projects, and a sustainable posting cadence—for internships and new-grad roles.",
      "zhOutcome": "我的 LinkedIn 個人品牌一頁（Headline／About／精選／發文計畫）",
      "enOutcome": "My LinkedIn Brand One-Pager (Headline/About/Featured/Posting Plan)",
      "zhConcept": "LinkedIn 對大學生不是晒生活，而是「可搜尋的專業 入口」：招聘與人資常先看 Headline、About、經歷與精選。Headline 不要只寫「學生」：可用「科系｜目標職能｜關鍵能力｜代表專案關鍵字」。About 用短段落：你是誰、你解決過什麼、你正在尋找什麼、如何聯絡。個人品牌＝定位＋證據＋一致性。履歷、作品集、LinkedIn 的職稱與成果說法要一致；不可一邊寫幹部一邊在網上找不到證據。關鍵字來自目標 JD 與產業用語，自然分布在 Headline、技能、專案描述。精選區放作品集／GitHub／文章，不要放無關迷因。發文節奏要可持續：每週 1 則學習筆記、專案進度、活動觀察即可；品質與真實高於頻率。AI 可幫你改寫，但不可虛構實習或推薦。互動：關注目標公司與校友、對貼文留有內容的留言、訊息禮貌且短。冷訊息要說明為何聯繫、你做過什麼、請求是否具體。與 104／Yourator／CakeResume 並行：LinkedIn 偏品牌與人脈，本地平台偏投遞；角色不同，資料仍要一致。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。",
      "enConcept": "Craft a searchable LinkedIn entry point with a strong headline/about, consistent evidence, featured work, and sustainable honest posts. AI edits copy; never invent jobs or endorsements.",
      "zhCaseStudy": "情境案例：小哲 LinkedIn 空白，履歷卻很滿。他補上 Headline「資料系｜分析實習｜SQL／視覺化｜校園數據專題」，About 寫三個真實專案，精選連作品集。兩週發兩則專案反思，校友轉介一個面試機會。他拒絕 AI 建議的「前 Fortune 500 實習」捏造，品牌反而更穩。",
      "enCaseStudy": "Xiao Zhe filled a blank LinkedIn with an honest keyword headline and featured projects, earning a referral without fake prestige.",
      "zhWorkflow": [
        "定義目標讀者與定位句",
        "寫 Headline／About／技能關鍵字",
        "上架精選專案與一致經歷",
        "訂兩週發文計畫（真實內容）",
        "檢查全網說法一致性"
      ],
      "enWorkflow": [
        "Define audience and positioning",
        "Write Headline/About/skills keywords",
        "Feature projects and align experience",
        "Plan two weeks of honest posts",
        "Audit consistency across channels"
      ],
      "zhCommonMistakes": [
        "Headline 只有「學生」",
        "履歷與 LinkedIn 互相矛盾",
        "發文灌水或造假",
        "精選區空或放無關內容"
      ],
      "enCommonMistakes": [
        "Headline = “Student” only",
        "Resume/LinkedIn contradictions",
        "Spammy or fake posts",
        "Empty/irrelevant Featured"
      ],
      "zhExcellentExample": "優秀主頁：定位可搜、About 有證據、精選可點、關鍵字自然、發文真實、與履歷一致。",
      "enExcellentExample": "A strong profile is searchable, evidence-based, featured, keyword-natural, honestly active, and resume-consistent.",
      "zhPrompt": "【Prompt 1｜Headline 與 About 撰寫】\n目標職能：［ ］；真實技能與專案：\n（貼上）\n請給 3 版 Headline 與 1 版 About（中英可各一需求）。只用我提供的事實；不要添加未有的公司經歷；建議與事實分開標示。",
      "enPrompt": "[Prompt 1 | Headline & About] Provide 3 headlines and one About from my facts only; invent no employers; label suggestions.",
      "zhCoachPrompt": "【Prompt 2｜關鍵字與精選區規劃】\n目標 JD 關鍵字：\n（貼上）\n我可公開的作品連結：\n（貼上）\n請建議技能排序、精選區配置與專案描述短句。沒有的作品不要建議假裝已完成。",
      "enCoachPrompt": "[Prompt 2 | Keywords & Featured] Suggest skill order and Featured setup from real links; don’t pretend unfinished work is live.",
      "zhFeedbackPrompt": "【Prompt 3｜個人品牌一致性檢查】\n履歷摘要：\n（貼上）\nLinkedIn 文案：\n（貼上）\n請找出口徑不一致、誇大、缺證據處，給修改清單。不要為了「高級感」建議捏造頭銜。",
      "enFeedbackPrompt": "[Prompt 3 | Brand Consistency] Flag mismatches, exaggeration, and missing proof; never suggest fake titles for prestige.",
      "zhExample": "Headline：資訊管理｜產品實習意向｜研究使用者流程與原型｜校園 App 專題。｜精選：作品集／GitHub／一篇專案反思。",
      "enExample": "A searchable headline plus Featured links to portfolio, GitHub, and one honest project reflection.",
      "zhPractice": "完成 Headline／About。；上架至少 2 個精選。；規劃兩週真實發文。；Challenge：請目標科系學長姐或同學用「是否想點進來」評你的主頁，並改一版。",
      "enPractice": "Finish Headline/About.；Feature ≥2 items.；Plan two weeks of real posts.；Challenge: get a peer “would I click?” review and revise once.",
      "zhQuizItems": [
        {
          "q": "大學生 LinkedIn Headline 較佳做法是？",
          "options": [
            "只寫「學生」",
            "含目標職能與可搜尋關鍵能力／專案訊號",
            "複製名人語錄",
            "留白等別人猜"
          ],
          "answer": 1,
          "explain": "Headline 要可搜尋且說明方向。"
        },
        {
          "q": "個人品牌一致性指的是？",
          "options": [
            "每個平台講法都可以互相打架",
            "履歷、作品集、LinkedIn 的事實與成果說法一致",
            "越誇大越有品牌",
            "不需要證據"
          ],
          "answer": 1,
          "explain": "一致性建立信任。"
        },
        {
          "q": "發文經營應避免？",
          "options": [
            "分享真實專案學習",
            "捏造實習與成就換讚",
            "低頻但有內容",
            "與產業相關的觀察"
          ],
          "answer": 1,
          "explain": "造假會摧毀品牌。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Best student LinkedIn headline approach?",
          "options": [
            "Only “Student”",
            "Include target function and searchable skills/project signals",
            "Celebrity quotes",
            "Leave it blank"
          ],
          "answer": 1,
          "explain": "Headlines should be searchable and directional."
        },
        {
          "q": "Brand consistency means:",
          "options": [
            "Contradict yourself across platforms",
            "Keep facts/outcomes aligned across resume, portfolio, LinkedIn",
            "Exaggerate more",
            "Skip evidence"
          ],
          "answer": 1,
          "explain": "Consistency builds trust."
        },
        {
          "q": "Posting should avoid:",
          "options": [
            "Real project learning",
            "Fabricating internships for engagement",
            "Lower frequency with substance",
            "Industry observations"
          ],
          "answer": 1,
          "explain": "Fabrication destroys brand."
        }
      ],
      "zhNotePrompt": "貼上最終 Headline、About 前 5 行，以及精選區兩個連結名稱。",
      "enNotePrompt": "Paste final Headline, first 5 About lines, and two Featured item names.",
      "zhDeliverableChecklist": [
        "Headline／About 完成",
        "關鍵字已布局",
        "精選區可用",
        "發文計畫兩週",
        "與履歷一致"
      ],
      "enDeliverableChecklist": [
        "Headline/About done",
        "Keywords placed",
        "Featured live",
        "Two-week posting plan",
        "Resume-consistent"
      ],
      "zhScorecard": [
        "可搜尋",
        "有證據",
        "一致性",
        "精選有效",
        "發文真實"
      ],
      "enScorecard": [
        "Searchable",
        "Evidence-based",
        "Consistent",
        "Featured useful",
        "Honest activity"
      ],
      "resources": [
        {
          "name": "LinkedIn",
          "url": "https://www.linkedin.com",
          "note": "個人品牌與人脈主場"
        },
        {
          "name": "CakeResume",
          "url": "https://www.cakeresume.com",
          "note": "可與 LinkedIn 互相導流的履歷頁"
        },
        {
          "name": "Yourator",
          "url": "https://www.yourator.co",
          "note": "關注目標新創動態"
        },
        {
          "name": "Glassdoor",
          "url": "https://www.glassdoor.com",
          "note": "公司評價與面試經驗參考（需自行判斷）"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "文案改寫與關鍵字建議"
        }
      ],
      "challenge": "在一週內完成 LinkedIn 主頁升級（Headline／About／精選），並發布一則不造假的專案或學習貼文。",
      "id": "career-internship-L7",
      "lessonKey": "career-internship-L7"
    },
    {
      "icon": "🏆",
      "title": "整理作品集架構，證明你做過什麼",
      "description": "篩選與排序專案、故事化呈現、整理 README／PDF／網站，準備 3／5 分鐘發表與模擬評審提問。",
      "goal": "我的最終作品集包（精選專案＋3／5分鐘講稿＋模擬問答紀錄）",
      "estimatedTime": "60-90 分鐘",
      "difficulty": "中階",
      "tags": [
        "作品集",
        "發表",
        "評審模擬",
        "Chapter10"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 9,
      "chapterZh": "AI 個人專案與作品集",
      "chapterEn": "AI Personal Projects and Portfolio",
      "zhTitle": "第8課：整理作品集架構，證明你做過什麼",
      "enTitle": "Lesson 8: Structure a portfolio that proves what you have done",
      "zhValueTip": "篩選與排序專案、故事化呈現、整理 README／PDF／網站，準備 3／5 分鐘發表與模擬評審提問。",
      "enValueTip": "Curate and order projects, storytell outcomes, polish README/PDF/site, and prep 3/5-minute talks plus mock jury Q&A.",
      "zhOutcome": "我的最終作品集包（精選專案＋3／5分鐘講稿＋模擬問答紀錄）",
      "enOutcome": "My Final Portfolio Pack (curated projects + 3/5-min scripts + mock Q&A log)",
      "zhConcept": "最終發表不是把所有作業塞進資料夾。先篩選：只留能說明「問題—方法—成果—反思」的專案；課堂練習若無故事可當技能證明附件。排序：代表作第一，其次展現廣度或成長。每個專案故事化：問題、角色、方法、成果、影響、反思；有真實數據才放，沒有就用可觀察成果（完成流程、錯誤減少的描述需有依據）。交付物形態可並存：網站作品集、作品集 PDF、GitHub README、Demo 截圖／短片。彼此主張一致，不可一個說已上線一個說還在做。3 分鐘介紹抓主線；5 分鐘加方法與限制。模擬評審提問：為何這問題、為何這方案、如何驗證、若重來會改什麼、個資如何處理。接受回饋：分辨事實錯誤、表達不清、範圍建議；改下一版並記錄。不可為了討好評審而事後捏造成果。完整最終發表流程：鎖定精選→統一文案→更新 README／網站／PDF→錄 3 分鐘→模擬提問→修改→正式發表。Chapter 10 閉環：發想→MVP→GitHub→網站→發表。連到求職時，你賣的是可驗證的解決問題能力。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。",
      "enConcept": "Curate story-complete projects, keep artifacts consistent, prepare timed talks, run mock jury Q&A, and revise from feedback—without inventing outcomes to impress.",
      "zhCaseStudy": "完整最終發表流程：小恩期末展前有 6 個半成品。她只留 2 個完整故事專案，PDF 與網站一致，3 分鐘只講排課助手。模擬評審問「如何驗證」，她拿出 3 人測試觀察筆記（真實）。正式發表被問同樣問題時答得穩。會後依回饋補限制頁，不補假數據。",
      "enCaseStudy": "Xiao En curated two complete stories, aligned PDF/site, practiced a 3-minute talk with real test notes, then improved limits—not fake metrics.",
      "zhWorkflow": [
        "篩選與排序專案",
        "統一故事結構與真實成果表述",
        "更新 README／網站／PDF／Demo",
        "寫 3／5 分鐘講稿並計時",
        "模擬評審提問後修正再發表"
      ],
      "enWorkflow": [
        "Curate and order projects",
        "Unify story structure with true outcomes",
        "Update README/site/PDF/demo",
        "Write and time 3/5-minute scripts",
        "Mock jury Q&A, revise, then present"
      ],
      "zhCommonMistakes": [
        "作品過多且無故事",
        "各檔案說法不一致",
        "捏造數據應對評審",
        "不計時導致超時"
      ],
      "enCommonMistakes": [
        "Too many story-less projects",
        "Inconsistent artifacts",
        "Inventing metrics for judges",
        "No timing practice"
      ],
      "zhExcellentExample": "優秀發表包：精選清楚、故事完整、成果誠實、多載體一致、講稿準時、問答可防守。",
      "enExcellentExample": "A strong pack is curated, story-complete, honest, consistent across artifacts, timed, and defendable in Q&A.",
      "zhPrompt": "【Prompt 1｜作品集篩選與專案介紹】\n我的專案列表（完成度與真實成果）：\n（貼上）\n目標場合：［課程發表／競賽／面試］\n請建議精選與排序，並為代表作寫「問題—角色—方法—成果—反思」介紹。不可把未完成寫成完成；不可發明數據；缺成果就建議如何誠實描述進行中。",
      "enPrompt": "[Prompt 1 | Curation & Writeups] Recommend selection/order and a problem-role-method-outcome-reflection writeup from true status only—no invented metrics.",
      "zhCoachPrompt": "【Prompt 2｜3 分鐘／5 分鐘講稿】\n代表專案事實：\n（貼上）\n請寫 3 分鐘與 5 分鐘講稿，標時間分配。只用我提供的成果；沒有的部分用「尚未驗證」而非編造。",
      "enCoachPrompt": "[Prompt 2 | 3/5-min Scripts] Write timed scripts from my facts; mark unverified parts instead of inventing.",
      "zhFeedbackPrompt": "【Prompt 3｜模擬評審提問】\n請扮演嚴格但公平的評審，依我的作品摘要一次一題提問。結束指出防守薄弱處。禁止要求我回答捏造數據；若摘要缺資訊，改問我如何補證據。",
      "enFeedbackPrompt": "[Prompt 3 | Mock Jury] Ask one question at a time; probe weak defenses; never demand fabricated numbers—ask how I’d gather evidence instead.",
      "zhExample": "3分鐘：30秒問題→60秒方法→60秒演示成果→30秒反思限制。｜評審Q：如何驗證？｜A：3名目標使用者觀察任務完成時間（附筆記日期）。",
      "enExample": "A timed 3-minute arc and a verification answer grounded in dated observation notes—not invented KPIs.",
      "zhPractice": "完成精選與排序。；統一網站／PDF／README。；練 3／5 分鐘並模擬提問。；Challenge：正式或模擬發表一次，收集 3 則回饋並更新作品集一頁內容（不造假）。",
      "enPractice": "Curate/order.；Align site/PDF/README.；Rehearse 3/5-min + mock Q&A.；Challenge: present once, gather 3 feedbacks, update one portfolio page without fabricating.",
      "zhQuizItems": [
        {
          "q": "作品集篩選的原則較接近？",
          "options": [
            "全部塞進去顯得很多",
            "優先保留故事完整且成果可說明的專案",
            "只留 Logo 設計不管問題",
            "未完成的也全寫成已上線"
          ],
          "answer": 1,
          "explain": "質與故事完整度優先於數量。"
        },
        {
          "q": "發表時提到成果應？",
          "options": [
            "為了氣勢可以編數據",
            "只陳述可追溯的真實成果或明確標示未驗證",
            "拒絕回答任何限制",
            "把別人的專案講成自己的"
          ],
          "answer": 1,
          "explain": "誠實與可追溯是底線。"
        },
        {
          "q": "模擬評審提問的主要目的是？",
          "options": [
            "練習與評審吵架",
            "壓力測試論證、驗證與限制說明",
            "背誦假答題",
            "避免做任何修改"
          ],
          "answer": 1,
          "explain": "問答是為了讓發表可防守並改善。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Portfolio curation should prioritize:",
          "options": [
            "Including everything",
            "Story-complete projects with explainable outcomes",
            "Logos only",
            "Marking unfinished work as shipped"
          ],
          "answer": 1,
          "explain": "Quality and completeness beat quantity."
        },
        {
          "q": "When stating outcomes you should:",
          "options": [
            "Invent numbers for impact",
            "Use traceable facts or explicitly mark unverified",
            "Refuse all limits",
            "Claim others’ work"
          ],
          "answer": 1,
          "explain": "Honesty and traceability are non-negotiable."
        },
        {
          "q": "Mock jury Q&A is mainly to:",
          "options": [
            "Practice arguing",
            "Pressure-test argument, validation, and limits",
            "Memorize fake answers",
            "Avoid revisions"
          ],
          "answer": 1,
          "explain": "Q&A improves defendability."
        }
      ],
      "zhNotePrompt": "貼上精選專案排序、3 分鐘講稿大綱，以及兩題模擬問答要點。",
      "enNotePrompt": "Paste curated order, a 3-minute outline, and two mock Q&A points.",
      "zhDeliverableChecklist": [
        "精選與排序完成",
        "多載體文案一致",
        "3／5 分鐘講稿可準時",
        "模擬提問完成",
        "回饋已轉成修改（誠實）"
      ],
      "enDeliverableChecklist": [
        "Curation done",
        "Artifacts consistent",
        "Timed 3/5-min scripts ready",
        "Mock Q&A done",
        "Feedback turned into honest edits"
      ],
      "zhScorecard": [
        "精選品質",
        "故事完整",
        "成果誠實",
        "發表準時",
        "問答可防守"
      ],
      "enScorecard": [
        "Curation quality",
        "Complete stories",
        "Honest outcomes",
        "On-time delivery",
        "Defendable Q&A"
      ],
      "resources": [
        {
          "name": "GitHub",
          "url": "https://github.com",
          "note": "README 與專案最終狀態"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.so",
          "note": "講稿與問答卡"
        },
        {
          "name": "Canva",
          "url": "https://www.canva.com",
          "note": "作品集 PDF／簡報"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "發表檔與錄影備份"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "講稿精煉與模擬評審"
        },
        {
          "name": "Dribbble",
          "url": "https://dribbble.com",
          "note": "視覺呈現參考（勿抄襲）"
        },
        {
          "name": "Behance",
          "url": "https://www.behance.net",
          "note": "專案故事排版參考"
        }
      ],
      "challenge": "完成最終作品集包並進行一次 5 分鐘發表（課程／社團／自我錄影皆可）；附模擬評審 5 題答題要點與會後修改清單。",
      "id": "career-internship-L8",
      "lessonKey": "career-internship-L8"
    },
    {
      "icon": "🎙️",
      "title": "建立面試題庫，做企業模擬面試與修正",
      "description": "用 STAR 結構化回答行為面試，進行 AI 模擬面試與公司研究，整理改進清單。",
      "goal": "我的 STAR 題庫＋一場模擬面試紀錄＋改進清單",
      "estimatedTime": "60-80 分鐘",
      "difficulty": "中階",
      "tags": [
        "面試",
        "STAR",
        "模擬面試",
        "Chapter11"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 10,
      "chapterZh": "AI 求職與職涯發展",
      "chapterEn": "AI Job Search and Career Development",
      "zhTitle": "第9課：建立面試題庫，做企業模擬面試與修正",
      "enTitle": "Lesson 9: Build interview banks and run employer-style mock interviews",
      "zhValueTip": "用 STAR 結構化回答行為面試，進行 AI 模擬面試與公司研究，整理改進清單。",
      "enValueTip": "Use STAR for behavioral answers, run AI mock interviews with company research, and build an improvement list.",
      "zhOutcome": "我的 STAR 題庫＋一場模擬面試紀錄＋改進清單",
      "enOutcome": "My STAR Story Bank + One Mock Interview Log + Improvement List",
      "zhConcept": "實習與第一份工作面試常考：動機、行為事件、專案深挖、基本職能題、反問。行為題用 STAR：Situation 情境、Task 任務、Action 你做的（重點）、Result 結果與學習。準備 5-8 個真實故事覆蓋：衝突、失敗、領導、數據、期限、團隊。故事必須可被追問細節；不可用電影情節或別人的功勞。公司研究：產品／服務、近期消息、職位為何存在、你能貢獻什麼。Glassdoor／官網／LinkedIn 員工貼文可參考，但評價要交叉判斷，勿整段背誦負評。AI 模擬面試：一次一題、要求追問、結束給回饋（結構、具體、長度、誠信風險）。錄音重聽比只看文字更準。回答技巧：先一句結論再展開；不懂就誠實說已知範圍；數字只講得出口的。反問準備 3 題關於團隊成功標準與新人期待。AI 可扮演面試官與幫你壓縮 STAR，但不可幫你編造故事；缺細節要你補，而不是自動腦補英雄旅程。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。",
      "enConcept": "Build a real STAR story bank, research the company, run mock interviews with follow-ups, and improve from recordings. AI plays interviewer; never invents your stories.",
      "zhCaseStudy": "情境案例：小禾面試常講很散。她準備 6 個 STAR，AI 模擬追問「你的 Action 裡哪一步是你做的」。她刪掉把隊友功勞講成自己的句子，改成清楚分工。正式面試同一題過關。",
      "enCaseStudy": "Xiao He tightened STAR ownership under mock follow-ups and survived the real behavioral round.",
      "zhWorkflow": [
        "研究公司與職缺成功樣貌",
        "建立 5-8 個真實 STAR 卡片",
        "AI 模擬面試並錄音",
        "整理改進清單並重答弱題",
        "準備 3 個反問題"
      ],
      "enWorkflow": [
        "Research company and role success signals",
        "Build 5–8 real STAR cards",
        "Run AI mock interview with recording",
        "Improve weak answers",
        "Prep three thoughtful questions"
      ],
      "zhCommonMistakes": [
        "只有結論沒有 Action",
        "偷換功勞",
        "背稿像機器人",
        "不研究公司"
      ],
      "enCommonMistakes": [
        "Results without Actions",
        "Stolen credit",
        "Robotic memorization",
        "No company research"
      ],
      "zhExcellentExample": "優秀準備：故事真實可追問、STAR 完整、模擬有回饋、公司研究具體、反問有水準。",
      "enExcellentExample": "Strong prep has probe-proof stories, full STAR, feedback from mocks, concrete research, and smart reverse questions.",
      "zhPrompt": "【Prompt 1｜STAR 故事教練】\n職缺：［ ］\n我的真實事件草稿：\n（貼上）\n請幫我整理成 STAR，並追問 5 個面試官可能問的細節。不要替我編造沒寫的行動或數據；缺資訊列待我補充。",
      "enPrompt": "[Prompt 1 | STAR Coach] Structure my real event as STAR and ask 5 follow-ups; invent no actions or numbers.",
      "zhCoachPrompt": "【Prompt 2｜公司研究與職缺分析】\n公司／職缺資料：\n（貼上）\n我的背景：\n（貼上）\n請整理：公司做什麼、職位為何存在、我可能被問的匹配點與風險點。標註資訊來源不足處；不要捏造財報或獎項。",
      "enCoachPrompt": "[Prompt 2 | Company & Role Research] Summarize what they do, why the role exists, match points and risks; invent no awards/financials.",
      "zhFeedbackPrompt": "【Prompt 3｜一對一模擬面試】\n請扮演面試官，一次一題，依我的履歷與職缺追問。結束給：結構、具體度、誠信風險、時間控制評語與改進清單。禁止要求我承認沒做過的經歷。",
      "enFeedbackPrompt": "[Prompt 3 | 1:1 Mock Interview] Ask one question at a time with follow-ups; debrief structure/specificity/integrity/timing—never force fake admissions of undone work.",
      "zhExample": "S：專題前一週組員失聯。｜T：準時交原型。｜A：我重切範圍、每日站會、接手關鍵頁。｜R：如期演示，事後建立失聯 SLA。",
      "enExample": "A ownership-heavy STAR about saving a prototype deadline after a teammate went dark.",
      "zhPractice": "完成公司研究一頁。；寫滿 STAR 卡。；模擬面試 20-30 分鐘。；Challenge：重錄弱題到你能在 90 秒內講完且經得起兩個追問。",
      "enPractice": "Write one-page company research.；Fill STAR cards.；Mock 20–30 minutes.；Challenge: re-record a weak answer to fit 90 seconds with two follow-ups.",
      "zhQuizItems": [
        {
          "q": "STAR 中最常被追問、也最該說清楚的是？",
          "options": [
            "天氣如何",
            "你實際採取的 Action 與邊界",
            "只講結果數字即可",
            "抄同學的故事"
          ],
          "answer": 1,
          "explain": "面試官要聽你做了什麼。"
        },
        {
          "q": "模擬面試的價值是？",
          "options": [
            "背標準答案不思考",
            "在追問下檢查故事是否真實可防守並改進",
            "練習說謊",
            "取代公司研究"
          ],
          "answer": 1,
          "explain": "壓力測試真實故事。"
        },
        {
          "q": "公司研究時應避免？",
          "options": [
            "整理產品與職位存在理由",
            "捏造公司獎項與內幕當成事實",
            "準備反問",
            "對照自己的匹配點"
          ],
          "answer": 1,
          "explain": "不可捏造公司資訊。"
        }
      ],
      "enQuizItems": [
        {
          "q": "In STAR, interviewers most probe:",
          "options": [
            "The weather",
            "Your actual Actions and ownership boundaries",
            "Results numbers only",
            "A classmate’s story"
          ],
          "answer": 1,
          "explain": "They need your actions."
        },
        {
          "q": "Mock interviews help you:",
          "options": [
            "Memorize without thinking",
            "Test whether stories survive follow-ups and improve",
            "Practice lying",
            "Skip company research"
          ],
          "answer": 1,
          "explain": "Pressure-test real stories."
        },
        {
          "q": "Company research should avoid:",
          "options": [
            "Summarizing product and role purpose",
            "Inventing awards/insider claims as facts",
            "Preparing reverse questions",
            "Mapping your fit"
          ],
          "answer": 1,
          "explain": "Don’t fabricate company facts."
        }
      ],
      "zhNotePrompt": "貼上兩個 STAR 的 Action 句，以及模擬面試改進清單前三項。",
      "enNotePrompt": "Paste Action lines from two STARs and your top three mock-interview improvements.",
      "zhDeliverableChecklist": [
        "公司研究完成",
        "STAR 卡 ≥5",
        "模擬面試完成",
        "改進清單成文",
        "反問準備 3 題"
      ],
      "enDeliverableChecklist": [
        "Company research done",
        "≥5 STAR cards",
        "Mock interview done",
        "Improvement list written",
        "3 reverse questions ready"
      ],
      "zhScorecard": [
        "故事真實",
        "STAR 清楚",
        "經得起追問",
        "公司理解",
        "可改進"
      ],
      "enScorecard": [
        "Real stories",
        "Clear STAR",
        "Probe-proof",
        "Company sense",
        "Improvable"
      ],
      "resources": [
        {
          "name": "LinkedIn",
          "url": "https://www.linkedin.com",
          "note": "公司與員工動態研究"
        },
        {
          "name": "Glassdoor",
          "url": "https://www.glassdoor.com",
          "note": "面試經驗參考（需判斷）"
        },
        {
          "name": "104",
          "url": "https://www.104.com.tw",
          "note": "職缺條件與公司頁"
        },
        {
          "name": "Yourator",
          "url": "https://www.yourator.co",
          "note": "新創職缺與團隊介紹"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "STAR 整理與模擬面試"
        }
      ],
      "challenge": "針對一個真實投遞職缺完成一場 25 分鐘模擬面試（含追問），並交出改進前後對照的一題 STAR。",
      "id": "career-internship-L9",
      "lessonKey": "career-internship-L9"
    },
    {
      "icon": "🗺️",
      "title": "整合完成「求職與實習申請包」與投遞節奏",
      "description": "建立求職管道與週節奏、用 AI 做職缺與公司分析、比較 Offer，並做近／中期職涯規劃。",
      "goal": "我的 8 週求職作戰計畫＋職缺追蹤表＋Offer 比較表＋一年職涯草案",
      "estimatedTime": "60-80 分鐘",
      "difficulty": "中階",
      "tags": [
        "求職策略",
        "Offer",
        "職涯規劃",
        "Chapter11"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 10,
      "chapterZh": "AI 求職與職涯發展",
      "chapterEn": "AI Job Search and Career Development",
      "zhTitle": "第10課：整合完成「求職與實習申請包」與投遞節奏",
      "enTitle": "Lesson 10: Complete your career package and application rhythm",
      "zhValueTip": "建立求職管道與週節奏、用 AI 做職缺與公司分析、比較 Offer，並做近／中期職涯規劃。",
      "enValueTip": "Build channels and weekly cadence, analyze roles/companies with AI, compare offers, and draft near/mid-term career plans.",
      "zhOutcome": "我的 8 週求職作戰計畫＋職缺追蹤表＋Offer 比較表＋一年職涯草案",
      "enOutcome": "My 8-Week Job Search Plan + Pipeline Tracker + Offer Scorecard + 1-Year Career Draft",
      "zhConcept": "求職是專案不是情緒：要有目標角色、管道組合、每週產出（投遞數、連結數、模擬面試）、追蹤狀態與複盤。管道：104／1111／Indeed／Yourator／CakeResume／LinkedIn／內推／職涯中心。不同管道投遞節奏不同，但履歷版本要可追溯。AI 協助職缺分析：把 JD 轉成你的匹配分數、缺口、該強調的專案。公司研究：營運方式與產品定位、團隊、文化訊號、風險（過勞傳聞需多方查證）。Offer 比較不只看月薪：學習曲線、導師、遠距、加班文化、合約、地點、與長期方向契合。做加權表，避免只被簽約獎金帶走。職涯規劃分層：未來 3 個月（實習／作品）、1 年（技能與角色）、3 年（方向假設）。方向可改，但每季要有可驗證行動。求職信與追蹤信也是策略的一部分：投遞後合理追蹤，不轟炸。拒絕與接受都要專業短訊。AI 可排程與做比較表，但不可替你決定人生，也不可捏造公司內部薪資帶；資訊不足要標示。Chapter 11 閉環：履歷→品牌→面試→介紹→策略。連回作品集，你賣的是可轉移能力與證據。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。",
      "enConcept": "Run job search as a project with channels, weekly metrics, JD/company analysis, weighted offer comparison, and layered career horizons. AI assists analysis; you decide—and never invent salary bands or offers.",
      "zhCaseStudy": "情境案例：小恩海投 80 封無回音。她改成每週 8 封高對齊＋3 則人脈訊息＋1 次模擬面試，用追蹤表管理。兩個 Offer 用加權表比較學習與生活，選了薪資略低但有導師的團隊。一季後技能成長驗證了選擇。",
      "enCaseStudy": "Xiao En replaced mass-apply chaos with a measured pipeline and a weighted offer choice favoring mentorship.",
      "zhWorkflow": [
        "定義目標角色與非目標",
        "建立管道與 8 週節奏",
        "用追蹤表管理職缺狀態",
        "做公司／職缺分析與 Offer 比較模板",
        "寫一年職涯草案與每季檢視點"
      ],
      "enWorkflow": [
        "Define target and non-target roles",
        "Set channels and an 8-week cadence",
        "Track applications in a pipeline",
        "Build analysis and offer-comparison templates",
        "Draft a 1-year plan with quarterly checkpoints"
      ],
      "zhCommonMistakes": [
        "海投無追蹤",
        "只看薪資忽略學習與健康",
        "職涯計畫 pen 空話無行動",
        "聽信單一網路薪資傳聞"
      ],
      "enCommonMistakes": [
        "Mass apply with no tracking",
        "Salary-only decisions",
        "Vague career wishes without actions",
        "Trusting one unverified salary rumor"
      ],
      "zhExcellentExample": "優秀策略：目標清楚、週節奏可執行、追蹤完整、分析有據、Offer 有加權、職涯有檢視點。",
      "enExcellentExample": "A strong strategy has clear targets, executable weekly cadence, full tracking, grounded analysis, weighted offers, and checkpoints.",
      "zhPrompt": "【Prompt 1｜8 週求職作戰計畫】\n目標角色：［ ］；每週可投入時數：［ ］；已有管道：\n（貼上）\n請排 8 週計畫（投遞、作品、面試練習、人脈），標假設與需我確認的限制。不要假設我每天有 8 小時；不要捏造內推機會。",
      "enPrompt": "[Prompt 1 | 8-Week Search Plan] Build a plan for apply/build/practice/network under my real hours; invent no referrals; ask if constraints are missing.",
      "zhCoachPrompt": "【Prompt 2｜職缺與公司分析】\nJD 與公司公開資訊：\n（貼上）\n我的履歷重點：\n（貼上）\n請輸出：匹配分數理由、缺口、面談可能問題、風險訊號。資訊不足標待確認；不要編造薪資帶或裁員內幕。",
      "enCoachPrompt": "[Prompt 2 | Role & Company Analysis] Score fit with reasons, gaps, likely questions, risks; invent no salary bands or insider layoff claims.",
      "zhFeedbackPrompt": "【Prompt 3｜Offer 比較與職涯草案】\nOffer A/B 事實：\n（貼上）\n我的優先權重：\n（貼上）\n請做加權比較，並給一年職涯草案（技能／角色／檢視點）。標示哪些是建議；不要替我做最終決定口吻的強迫選擇。",
      "enFeedbackPrompt": "[Prompt 3 | Offer Compare & Career Draft] Weighted comparison plus a 1-year draft with checkpoints; keep recommendations labeled—don’t force the decision.",
      "zhExample": "週節奏：8 封高對齊投遞＋2 封追蹤＋1 次模擬面試。｜Offer 表：學習 0.3／薪酬 0.25／生活 0.25／方向 0.2。",
      "enExample": "A weekly pipeline cadence plus a weighted offer scorecard across learning, pay, life, and direction.",
      "zhPractice": "完成 8 週計畫與追蹤表。；分析兩個真實職缺。；建立 Offer 比較表。；Challenge：用一週實際執行計畫，複盤投遞回覆率，並調整下週數字（不造假）。",
      "enPractice": "Finish 8-week plan + tracker.；Analyze two real roles.；Build offer scorecard.；Challenge: execute one real week, review reply rate, adjust next week’s numbers honestly.",
      "zhQuizItems": [
        {
          "q": "求職策略較健康的做法是？",
          "options": [
            "無記錄海投",
            "目標角色＋管道組合＋週節奏＋追蹤複盤",
            "只投一家等到天荒地老",
            "完全交給 AI 自動決定人生"
          ],
          "answer": 1,
          "explain": "求職要用可管理的系統。"
        },
        {
          "q": "比較 Offer 時應？",
          "options": [
            "只看簽約獎金",
            "用加權檢視學習、生活、方向與薪酬等多重因素",
            "忽略合約",
            "聽信單一匿名貼文定案"
          ],
          "answer": 1,
          "explain": "多重標準比單一數字穩。"
        },
        {
          "q": "AI 做公司／職缺分析時不可？",
          "options": [
            "整理公開資訊與匹配缺口",
            "捏造薪資帶與內幕當事實",
            "列出待確認問題",
            "建議可能面試題"
          ],
          "answer": 1,
          "explain": "不可把臆測寫成事實。"
        }
      ],
      "enQuizItems": [
        {
          "q": "A healthier job-search approach is:",
          "options": [
            "Blind mass apply with no log",
            "Target roles + channel mix + weekly cadence + tracked review",
            "Apply to one place forever",
            "Let AI decide your life automatically"
          ],
          "answer": 1,
          "explain": "Treat search as a manageable system."
        },
        {
          "q": "When comparing offers you should:",
          "options": [
            "Only look at signing bonus",
            "Weight learning, life, direction, and pay",
            "Ignore the contract",
            "Decide from one anonymous post"
          ],
          "answer": 1,
          "explain": "Multiple criteria beat a single number."
        },
        {
          "q": "AI company/role analysis must not:",
          "options": [
            "Summarize public info and gaps",
            "Invent salary bands/insider claims as facts",
            "List pending questions",
            "Suggest likely interview questions"
          ],
          "answer": 1,
          "explain": "Don’t present speculation as fact."
        }
      ],
      "zhNotePrompt": "貼上 8 週計畫的第一週任務，以及 Offer 比較的權重設定。",
      "enNotePrompt": "Paste week-1 tasks from your 8-week plan and your offer-comparison weights.",
      "zhDeliverableChecklist": [
        "8 週計畫完成",
        "職缺追蹤表可用",
        "至少兩職缺分析",
        "Offer 比較表完成",
        "一年職涯草案含檢視點"
      ],
      "enDeliverableChecklist": [
        "8-week plan done",
        "Pipeline tracker ready",
        "≥2 role analyses",
        "Offer scorecard done",
        "1-year draft with checkpoints"
      ],
      "zhScorecard": [
        "可執行",
        "可追蹤",
        "分析有據",
        "決策有權重",
        "職涯可檢視"
      ],
      "enScorecard": [
        "Executable",
        "Trackable",
        "Grounded analysis",
        "Weighted decisions",
        "Reviewable career plan"
      ],
      "resources": [
        {
          "name": "104",
          "url": "https://www.104.com.tw",
          "note": "主力職缺與公司頁"
        },
        {
          "name": "1111",
          "url": "https://www.1111.com.tw",
          "note": "職缺管道之一"
        },
        {
          "name": "Yourator",
          "url": "https://www.yourator.co",
          "note": "新創求職與團隊資訊"
        },
        {
          "name": "CakeResume",
          "url": "https://www.cakeresume.com",
          "note": "投遞與履歷曝光"
        },
        {
          "name": "LinkedIn",
          "url": "https://www.linkedin.com",
          "note": "人脈與公司研究"
        },
        {
          "name": "Indeed",
          "url": "https://tw.indeed.com",
          "note": "職缺彙整與關鍵字"
        },
        {
          "name": "Glassdoor",
          "url": "https://www.glassdoor.com",
          "note": "薪資／文化參考（需多方查證）"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "計畫、分析與 Offer 表輔助"
        }
      ],
      "challenge": "建立並使用職缺追蹤表至少追蹤 10 筆真實投遞／意向；完成一份書面 Offer 比較模板（即使尚無 Offer 也用兩個假想情境練習權重，並標示為模擬）。",
      "id": "career-internship-L10",
      "lessonKey": "career-internship-L10"
    }
  ],
  "workplace-productivity": [
    {
      "id": "workplace-productivity-L1",
      "lessonKey": "workplace-productivity-L1",
      "zhTitle": "第1課：建立職場 AI 工作觀：什麼自己做、什麼交給 AI",
      "enTitle": "Lesson 1: Build a workplace AI mindset: what you do vs what AI does",
      "zhConcept": "這一課只服務職場生產力與工作流程。重點不是「多用 AI」，而是建立可重複的判斷：資訊整理、初稿、檢查表可以由 AI 加速；決策、對外承諾、敏感資料與最終責任必須留在人。\n\n先把你的典型工作任務分成：自己做、AI 起草後你改、禁止使用 AI。再寫核對步驟（事實、數字、語氣、權限）。本週只選一個真實工作任務做實驗，避免一次改掉全部流程。",
      "enConcept": "For workplace productivity, classify tasks into human-only, AI-draft-then-edit, and AI-forbidden. Keep decisions, external commitments, sensitive data, and final accountability human. Run one real-work experiment this week.",
      "zhPrompt": "請擔任職場生產力教練。我的典型工作任務：【】。資料敏感程度：【】。對外輸出類型：【】。\n\n請幫我產出 AI 使用原則一頁：任務分類、紅線、核對清單、本週實驗設計。不要建議違法或規避合規的做法。",
      "enPrompt": "Act as a workplace productivity coach. Typical tasks: []. Sensitivity: []. External outputs: []. Produce a one-page AI usage policy: classes, red lines, checks, and one weekly experiment. Suggest nothing that bypasses compliance.",
      "zhExample": "弱原則「能用就用」。強原則「會議紀錄可 AI 整理成待辦；待辦負責人與期限由我確認；薪資與人事資料禁止貼上。」",
      "enExample": "Weak: use AI whenever. Strong: AI may draft meeting actions; owners/dates are human-confirmed; HR/pay data never pasted.",
      "zhPractice": "列出本週 8 個真實工作任務。；分成自做／AI 起草／禁止。；寫三條紅線與核對清單。；選 1 個任務做前後計時實驗。；把原則存成團隊可分享的一頁文件。",
      "enPractice": "List 8 real tasks.；Classify human/AI-draft/forbidden.；Write three red lines and checks.；Time one experiment.；Save a shareable one-pager.",
      "zhFeedbackPrompt": "你是一位職場生產力教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 邊界清楚\n- 可執行\n- 合規意識\n- 實驗可測\n- 是否只談工作流程\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a workplace productivity coach. Score 1-10 for: Clear boundaries, Executability, Compliance awareness, Measurable experiment, Workplace focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "職場 AI 工作觀的核心是？",
          "options": [
            "任務分類與責任邊界",
            "越多自動越好不管風險",
            "把決策全交给模型"
          ],
          "answer": 0,
          "explain": "邊界與責任。"
        },
        {
          "q": "對外數字最該？",
          "options": [
            "人工核對來源",
            "直接相信草稿",
            "刪除所有數字"
          ],
          "answer": 0,
          "explain": "核對。"
        },
        {
          "q": "本週實驗最好？",
          "options": [
            "只選一個真實任務",
            "一次改全部流程",
            "完全不計時"
          ],
          "answer": 0,
          "explain": "可測。"
        },
        {
          "q": "敏感資料應？",
          "options": [
            "依公司規則處理，必要時禁止貼上",
            "為求方便一律貼公開模型",
            "交給同事的私人帳號即可"
          ],
          "answer": 0,
          "explain": "合規。"
        },
        {
          "q": "本課產出？",
          "options": [
            "使用原則一頁",
            "股價預測表",
            "與工作無關的長文"
          ],
          "answer": 0,
          "explain": "原則文件。"
        }
      ],
      "enQuizItems": [
        {
          "q": "職場 AI 工作觀的核心是？",
          "options": [
            "任務分類與責任邊界",
            "越多自動越好不管風險",
            "把決策全交给模型"
          ],
          "answer": 0,
          "explain": "邊界與責任。"
        },
        {
          "q": "對外數字最該？",
          "options": [
            "人工核對來源",
            "直接相信草稿",
            "刪除所有數字"
          ],
          "answer": 0,
          "explain": "核對。"
        },
        {
          "q": "本週實驗最好？",
          "options": [
            "只選一個真實任務",
            "一次改全部流程",
            "完全不計時"
          ],
          "answer": 0,
          "explain": "可測。"
        },
        {
          "q": "敏感資料應？",
          "options": [
            "依公司規則處理，必要時禁止貼上",
            "為求方便一律貼公開模型",
            "交給同事的私人帳號即可"
          ],
          "answer": 0,
          "explain": "合規。"
        },
        {
          "q": "本課產出？",
          "options": [
            "使用原則一頁",
            "股價預測表",
            "與工作無關的長文"
          ],
          "answer": 0,
          "explain": "原則文件。"
        }
      ],
      "zhOutcome": "產出一頁「職場 AI 工作觀」：任務分類、紅線、核對清單與本週實驗。",
      "enOutcome": "Produce a one-page workplace AI operating view: task classes, red lines, verification checklist, and a weekly experiment.",
      "zhValueTip": "建立職場 AI 使用原則：哪些自己判斷、哪些可交給 AI、哪些绝對要人工核對。",
      "enValueTip": "Build workplace AI principles: what you own, what AI can draft, and what must be human-verified.",
      "zhCaseStudy": "行銷專員每天要整理競品更新。她規定：AI 可做摘要與表格草稿；對外簡報數字必須回來源頁；客戶名單不得貼進公開模型。一週後，她把整理時間從 90 分鐘降到 35 分鐘，且沒有發生資料外洩。",
      "enCaseStudy": "A marketing specialist let AI draft competitive summaries, required source checks for external numbers, and banned pasting client lists into public models—cutting prep time without a data leak.",
      "zhExcellentExample": "一頁原則含任務分類表、三條紅線、對外輸出核對清單、例外狀況（急件怎麼辦），以及本週單一實驗的前後時間紀錄。",
      "enExcellentExample": "One-pager with task classes, three red lines, external-output checks, exception handling, and before/after time for one experiment.",
      "zhWorkflow": [
        "盤點任務",
        "分類人／AI 邊界",
        "寫紅線與核對",
        "做一週實驗",
        "依結果修正原則"
      ],
      "enWorkflow": [
        "Inventory tasks",
        "Classify boundaries",
        "Write red lines/checks",
        "Run a weekly experiment",
        "Revise principles"
      ],
      "zhCommonMistakes": [
        "敏感資料貼進不當工具",
        "把 AI 草稿當已核准決策",
        "沒有核對數字就對外寄出",
        "一次改全部流程導致混亂",
        "原則寫了卻不執行"
      ],
      "enCommonMistakes": [
        "Pasting sensitive data unsafely",
        "Treating drafts as decisions",
        "Sending unchecked numbers",
        "Changing every workflow at once",
        "Policy without practice"
      ],
      "zhDeliverableChecklist": [
        "分類表",
        "紅線",
        "核對清單",
        "本週實驗",
        "時間紀錄"
      ],
      "enDeliverableChecklist": [
        "Classification",
        "Red lines",
        "Checks",
        "Weekly experiment",
        "Time log"
      ],
      "zhScorecard": [
        "邊界清楚",
        "可執行",
        "合規意識",
        "實驗可測",
        "是否只談工作流程"
      ],
      "enScorecard": [
        "Clear boundaries",
        "Executability",
        "Compliance awareness",
        "Measurable experiment",
        "Workplace focus"
      ],
      "zhNotePrompt": "貼上你的職場 AI 原則一頁與實驗結果。",
      "enNotePrompt": "Paste your workplace AI one-pager and experiment result.",
      "zhCoachPrompt": "請檢查我的職場 AI 原則是否有資料風險或不可執行之處，並給出修改建議。",
      "enCoachPrompt": "Check my workplace AI principles for data risk or infeasibility and suggest edits.",
      "title": "建立職場 AI 工作觀：什麼自己做、什麼交給 AI",
      "description": "建立職場 AI 使用原則：哪些自己判斷、哪些可交給 AI、哪些绝對要人工核對。",
      "goal": "產出一頁「職場 AI 工作觀」：任務分類、紅線、核對清單與本週實驗。"
    },
    {
      "icon": "✉️",
      "title": "用 AI 處理 Email 與專業溝通",
      "description": "用 AI 寫清楚、有禮貌、可執行的學術 Email：主旨、請求、語氣與追蹤，避免冒犯或含糊。",
      "goal": "我的學術 Email 模板庫（請求／道歉／協調／追問）＋語氣檢查表",
      "estimatedTime": "45-70 分鐘",
      "difficulty": "初階",
      "tags": [
        "Email",
        "學術溝通",
        "語氣",
        "Chapter8"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 7,
      "chapterZh": "AI 學習生產力系統",
      "chapterEn": "AI Learning Productivity System",
      "zhTitle": "第2課：用 AI 處理 Email 與專業溝通",
      "enTitle": "Lesson 2: Use AI for email and professional communication",
      "zhValueTip": "用 AI 寫清楚、有禮貌、可執行的學術 Email：主旨、請求、語氣與追蹤，避免冒犯或含糊。",
      "enValueTip": "Write clear, polite, actionable academic emails—subject, ask, tone, and follow-up—without rudeness or vagueness.",
      "zhOutcome": "我的學術 Email 模板庫（請求／道歉／協調／追問）＋語氣檢查表",
      "enOutcome": "My Academic Email Template Bank (request/apology/coord/follow-up) + Tone Checklist",
      "zhConcept": "學術 Email 是大學生產力的關鍵介面：約面談、請假、求延長、問成績、小組協調、實習／研究詢問。好信結構：清楚主旨→自我介紹（必要時）→情境一句→具體請求→期限／附件→感謝與署名。一段一事，避免情緒長文。AI 可依情境產草稿並給正式／更短兩版，但必須保留事實正確；不可替你捏造成績、病假證明細節或老師沒說過的承諾。語氣：對老師用敬語與完整句子；對同學可較短但仍尊重。避免命令句、陰陽怪氣、過度表情符號（視文化）。主旨要可掃讀：【課程名】請求延長報告截止／詢問面談時段。空白主旨或「請問」不夠。追蹤：若未回，隔 3-5 個工作天禮貌追問，附前信重點，不重複情緒指控。敏感議題（成績爭議、申訴）先查系上流程；Email 留存事實與時間戳，不人身攻擊。與 Workspace 課銜接：附件放 Drive 連結並設對的權限，避免「您沒有存取權」。完成後建立模板庫，臨場只改關鍵欄位，減少焦慮與失禮風險。Chapter 8 閉環：文件、表格、投影片、協作、溝通——讓學習產出能交、能算、能講、能協作、能問。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。",
      "enConcept": "Use a clear subject, one ask, polite tone, and respectful follow-up. AI drafts variants; you keep facts honest and permissions correct on attachments.",
      "zhCaseStudy": "情境案例：阿廷用一句「老師我能不能晚交」無主旨寄出，被忽略。他改用模板：主旨含課程、說明理由與已完成進度、提出新日期並附大綱連結（權限正確）。老師當日回覆同意條件。阿廷把該信存進模板庫。",
      "enCaseStudy": "A-Ting replaced a vague subject-less ask with a structured extension email and got a same-day conditional yes.",
      "zhWorkflow": [
        "釐清收件人、目的、請求、期限、附件",
        "請 AI 產正式／精簡兩版並檢查事實",
        "用語氣檢查表修改",
        "確認連結權限後寄出",
        "設定追蹤日並歸檔模板"
      ],
      "enWorkflow": [
        "Clarify audience, purpose, ask, deadline, attachments",
        "Generate formal/short drafts and fact-check",
        "Revise with a tone checklist",
        "Verify link permissions, then send",
        "Set a follow-up date and save templates"
      ],
      "zhCommonMistakes": [
        "無主旨或主旨含糊",
        "請求不具體",
        "語氣命令或不敬",
        "附件無權限／事實不實"
      ],
      "enCommonMistakes": [
        "Missing/vague subject",
        "Unclear ask",
        "Commanding or disrespectful tone",
        "Broken permissions or untrue facts"
      ],
      "zhExcellentExample": "優秀信：主旨可掃、請求可執行、語氣得體、附件可開、有合理期限與感謝。",
      "enExcellentExample": "A strong email has a scannable subject, actionable ask, appropriate tone, working attachments, and a reasonable timeframe.",
      "zhPrompt": "【Prompt 1｜學術 Email 草稿器】\n收件人：［老師／助教／同學／辦公室］；目的：［ ］；事實（不可捏造）：\n（條列）\n具體請求：［ ］；語氣：正式\n請給正式版與精簡版，含主旨建議。不要添加我未提供的理由或診斷；缺資訊先問我。",
      "enPrompt": "[Prompt 1 | Academic Email Drafter] Produce formal and short versions with subject lines from my facts only; ask if details are missing.",
      "zhCoachPrompt": "【Prompt 2｜語氣與清晰度修改】\n我的草稿：\n（貼上）\n請標出：含糊請求、可能冒犯、資訊過載、主旨問題；給修改版並說明理由。保持原意，不要改成另一個請求。",
      "enCoachPrompt": "[Prompt 2 | Tone & Clarity Edit] Flag vague asks, tone risks, overload, and subject issues; revise with reasons without changing the request.",
      "zhFeedbackPrompt": "【Prompt 3｜寄出前驗收】\n最終信：\n（貼上）\n附件／連結權限說明：\n（貼上）\n請用檢查表評分並給寄出前最後三修。若權限資訊不足，明確警告風險。",
      "enFeedbackPrompt": "[Prompt 3 | Pre-send QA] Score the final email and warn if permission info is insufficient; give three last fixes.",
      "zhExample": "主旨：【統計學】請求報告延長至 5/12（附大綱）。｜正文：自我介紹→進度→理由一句→請求新日期→Drive 連結→感謝。",
      "enExample": "A structured extension email with course-tagged subject, progress, one reason, a clear new date, and a permissioned link.",
      "zhPractice": "建立四類模板：請求、道歉、協調、追問。；改寫一封你過去寫得不好的信。；完成語氣檢查表。；Challenge：實際寄出一封必要學術信（或給老師／助教預覽），並記錄回覆時間與你會改的一點。",
      "enPractice": "Build four templates.；Rewrite one weak past email.；Complete the tone checklist.；Challenge: send (or preview with staff) one real academic email and log reply time plus one improvement.",
      "zhQuizItems": [
        {
          "q": "學術 Email 主旨較佳的是？",
          "options": [
            "（空白）",
            "【課程名】具體事由，例如請求面談時段",
            "急！！！",
            "請問"
          ],
          "answer": 1,
          "explain": "主旨要可掃讀且含課程與事由。"
        },
        {
          "q": "請 AI 寫信時最重要的是？",
          "options": [
            "讓它編造更感人的理由",
            "只提供真實事實，缺資訊要先澄清",
            "語氣越卑微越好到失去清楚請求",
            "不需要署名"
          ],
          "answer": 1,
          "explain": "事實真實與請求清楚優先。"
        },
        {
          "q": "未獲回覆時較合適的是？",
          "options": [
            "連續轟炸並指責",
            "隔數個工作天禮貌追問並附重點",
            "立刻公開投訴社群",
            "改寄空白信"
          ],
          "answer": 1,
          "explain": "禮貌有間隔的追問是專業做法。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Best academic email subject?",
          "options": [
            "(blank)",
            "[Course] specific purpose, e.g., meeting request",
            "URGENT!!!",
            "Question"
          ],
          "answer": 1,
          "explain": "Subjects should be scannable with course + purpose."
        },
        {
          "q": "Most important when using AI to draft email?",
          "options": [
            "Invent more emotional reasons",
            "Provide only true facts and clarify gaps first",
            "Maximize self-abasement until the ask is unclear",
            "Skip the signature"
          ],
          "answer": 1,
          "explain": "True facts and a clear ask come first."
        },
        {
          "q": "If there’s no reply, better to:",
          "options": [
            "Spam and accuse",
            "Politely follow up after a few business days with a recap",
            "Publicly complain immediately",
            "Send a blank message"
          ],
          "answer": 1,
          "explain": "Spaced polite follow-ups are professional."
        }
      ],
      "zhNotePrompt": "貼上一封模板的主旨與請求句，以及語氣檢查表中你常犯的兩項。",
      "enNotePrompt": "Paste one template’s subject and ask sentence, plus two tone checklist items you often miss.",
      "zhDeliverableChecklist": [
        "四類模板完成",
        "語氣檢查表可用",
        "至少一封改寫定稿",
        "附件權限規則寫明",
        "追蹤方式已定"
      ],
      "enDeliverableChecklist": [
        "Four templates ready",
        "Tone checklist usable",
        "≥1 rewritten final email",
        "Attachment permission rule written",
        "Follow-up method set"
      ],
      "zhScorecard": [
        "主旨清楚",
        "請求可執行",
        "語氣得體",
        "事實真實",
        "可追蹤"
      ],
      "enScorecard": [
        "Clear subject",
        "Actionable ask",
        "Appropriate tone",
        "True facts",
        "Follow-up ready"
      ],
      "resources": [
        {
          "name": "Gmail",
          "url": "https://mail.google.com",
          "note": "學術信寄送與排程／範本"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "附件連結與權限"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "多語氣草稿與清晰度修改"
        },
        {
          "name": "Grammarly",
          "url": "https://www.grammarly.com",
          "note": "英文信表面檢查（若使用英文）"
        },
        {
          "name": "Outlook",
          "url": "https://outlook.live.com",
          "note": "學校信箱常見介面備援"
        }
      ],
      "challenge": "建立個人學術 Email 模板庫至少 4 封，並用其中一封完成真實溝通（老師／助教／組員）；回顧是否一次說清請求。",
      "id": "workplace-productivity-L2",
      "lessonKey": "workplace-productivity-L2"
    },
    {
      "icon": "📝",
      "title": "用 AI 整理會議紀錄、決策與待辦",
      "description": "用議程、錄音／逐字稿與 AI 整理決策、待辦、負責人與期限，並核對幻覺後會後確認。",
      "goal": "我的標準會議紀錄模板＋一份已核對的真實會議紀錄",
      "estimatedTime": "55-75 分鐘",
      "difficulty": "初階",
      "tags": [
        "會議紀錄",
        "逐字稿",
        "待辦",
        "Chapter9"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 8,
      "chapterZh": "AI 團隊協作與專案管理",
      "chapterEn": "AI Team Collaboration and Project Management",
      "zhTitle": "第3課：用 AI 整理會議紀錄、決策與待辦",
      "enTitle": "Lesson 3: Use AI to capture meeting notes, decisions, and action items",
      "zhValueTip": "用議程、錄音／逐字稿與 AI 整理決策、待辦、負責人與期限，並核對幻覺後會後確認。",
      "enValueTip": "Use agendas, transcripts, and AI to capture decisions, actions, owners, and deadlines—then verify hallucinations and confirm after the meeting.",
      "zhOutcome": "我的標準會議紀錄模板＋一份已核對的真實會議紀錄",
      "enOutcome": "My Standard Meeting-Notes Template + One Verified Real Meeting Record",
      "zhConcept": "沒有決策與待辦的會議等於聊天。大學生專題會議要固定產出：議程、決策、待辦（負責人＋期限）、未解決問題、下次會議前必做。會議前：發出議程與會前閱讀；指定紀錄者與計時。會議中：可錄音（先徵得同意），標註時間戳與決議句。會後：用 Otter／Zoom 逐字稿或筆記餵給 AI 整理，但必須人工核對——AI 常誤植人名、期限、把討論中的提議當成已通過決策。核對規則：每條決策要能指回原句或時間戳；無法辨認標「待確認」；清楚分開「事實紀錄／AI 建議／推測」。保留原始逐字稿或錄音連結，不覆蓋。會後確認流程：30-60 分鐘內丟進群組，請組員在時限內回覆修正；逾期視同知悉（需事先約定）。完整會議紀錄案例欄位：日期、出席、議程、決策表、Action items、風險／阻礙、Parking lot、下次會議。AI 不可自行發明「全組已同意延期」之類未說出口的決策。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。",
      "enConcept": "Agenda → capture → AI draft → human verification against transcript → async confirmation. Never treat proposals as decisions; mark unclear items pending; keep raw sources.",
      "zhCaseStudy": "情境案例：社團衝刺會議開完沒人記得誰做海報。後來用議程＋錄音，AI 整理出待辦，但把「考慮換主視覺」寫成已決定。紀錄者回放 12:40 原句改成待確認，會後確認才正式通過。隔週海報準時交付。",
      "enCaseStudy": "A club caught an AI false decision by replaying the timestamp, marked it pending, then confirmed asynchronously.",
      "zhWorkflow": [
        "會前發布議程與角色",
        "會議錄音／筆記（經同意）",
        "AI 產出結構化紀錄草稿",
        "對逐字稿核對決策與人名期限",
        "會後確認並歸檔原始檔"
      ],
      "enWorkflow": [
        "Publish agenda and roles",
        "Record/note with consent",
        "Draft structured notes with AI",
        "Verify decisions/names/dates against transcript",
        "Confirm async and archive raw files"
      ],
      "zhCommonMistakes": [
        "無議程開會",
        "把提議當決策",
        "不核對 AI 幻覺",
        "刪掉原始逐字稿"
      ],
      "enCommonMistakes": [
        "No agenda",
        "Treating ideas as decisions",
        "Skipping hallucination checks",
        "Deleting raw transcripts"
      ],
      "zhExcellentExample": "優秀紀錄：議程對得上、決策可追溯、待辦含負責人與期限、待確認分明、會後已確認。",
      "enExcellentExample": "Strong notes map to the agenda, trace decisions, include owners/dates, separate pending items, and are confirmed.",
      "zhPrompt": "【Prompt 1｜逐字稿→會議紀錄（禁捏造決策）】\n議程：\n（貼上）\n逐字稿或筆記：\n（貼上）\n請輸出：出席（若可辨）、決策、待辦（負責人／期限）、未解決問題、下次會前必做。規則：無法辨認的人名／日期標待確認；不要把討論提議寫成已通過；區分事實／建議／推測；保留你引用的原句片段。",
      "enPrompt": "[Prompt 1 | Transcript to Minutes] Extract decisions/actions with owners/dates; mark unclear items pending; never invent passed votes; keep quote snippets.",
      "zhCoachPrompt": "【Prompt 2｜決策與待辦擷取檢查】\nAI 初稿：\n（貼上）\n關鍵原句：\n（貼上）\n請逐條判定：已決策／僅討論／資訊不足。給修正後待辦表。缺少負責人時不要隨便填名字。",
      "enCoachPrompt": "[Prompt 2 | Decision Audit] Classify each item as decided/discussed/insufficient; fix the action table; never invent owners.",
      "zhFeedbackPrompt": "【Prompt 3｜會後確認包】\n會議紀錄定稿候選：\n（貼上）\n請寫一則給組員的確認訊息（精簡），列出需回覆的待確認項。不要自行替組員回覆同意。",
      "enFeedbackPrompt": "[Prompt 3 | Confirmation Ping] Draft a short confirmation message listing pending items—do not consent on members’ behalf.",
      "zhExample": "決策：主視覺維持 A 案（原句 12:40）。｜待辦：小哲 5/3 前出海報初稿。｜待確認：是否加校外贊助（未表決）。",
      "enExample": "A verified decision with timestamp, one dated action, and an unvoted item marked pending.",
      "zhPractice": "為下次會議準備議程。；用真實會議產出經核對的紀錄。；完成會後確認。；Challenge：故意找 AI 草稿中 1 個錯誤（人名／決策／期限）並附原句證據修正。",
      "enPractice": "Prep an agenda.；Produce verified minutes from a real meeting.；Run confirmation.；Challenge: catch one AI error with quote evidence and fix it.",
      "zhQuizItems": [
        {
          "q": "AI 整理會議逐字稿後最必要的一步是？",
          "options": [
            "立刻當最終決策執行",
            "人工核對決策／人名／期限並標待確認",
            "刪除原始錄音以省空間",
            "讓 AI 替缺席者投票"
          ],
          "answer": 1,
          "explain": "必須防幻覺並保留可追溯性。"
        },
        {
          "q": "會議紀錄中「待辦」應至少包含？",
          "options": [
            "只有一句很長的感想",
            "任務、負責人與截止時間",
            "無關表情符號",
            "未確認的八卦"
          ],
          "answer": 1,
          "explain": "無可執行三件組就不算待辦。"
        },
        {
          "q": "把「有人提議延期」寫成「已決議延期」屬於？",
          "options": [
            "正確摘要",
            "把討論當決策的高風險錯誤",
            "不必理會",
            "比原句更真實"
          ],
          "answer": 1,
          "explain": "提議≠通過。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Most necessary step after AI meeting notes?",
          "options": [
            "Execute as final immediately",
            "Human-verify decisions/names/dates and mark pending",
            "Delete the recording",
            "Let AI vote for absentees"
          ],
          "answer": 1,
          "explain": "Prevent hallucinations and keep traceability."
        },
        {
          "q": "An action item should include at least:",
          "options": [
            "A long reflection only",
            "Task, owner, and due date",
            "Random emojis",
            "Unverified gossip"
          ],
          "answer": 1,
          "explain": "Without the trio it isn’t actionable."
        },
        {
          "q": "Writing “someone suggested delay” as “we resolved to delay” is:",
          "options": [
            "Accurate summary",
            "A high-risk treat-discussion-as-decision error",
            "Harmless",
            "More true than the quote"
          ],
          "answer": 1,
          "explain": "Proposal ≠ decision."
        }
      ],
      "zhNotePrompt": "貼上三條已核對待辦（負責人＋期限）與一條待確認項。",
      "enNotePrompt": "Paste three verified actions (owner+date) and one pending item.",
      "zhDeliverableChecklist": [
        "議程模板可用",
        "真實會議紀錄完成",
        "決策可追溯原句",
        "待辦含負責人期限",
        "會後確認完成"
      ],
      "enDeliverableChecklist": [
        "Agenda template ready",
        "Real minutes done",
        "Decisions quote-traceable",
        "Actions have owners/dates",
        "Async confirmation done"
      ],
      "zhScorecard": [
        "可追溯",
        "可執行",
        "無假決策",
        "已確認",
        "原始檔保留"
      ],
      "enScorecard": [
        "Traceable",
        "Actionable",
        "No false decisions",
        "Confirmed",
        "Raw kept"
      ],
      "resources": [
        {
          "name": "Otter.ai",
          "url": "https://otter.ai",
          "note": "會議錄音轉逐字稿"
        },
        {
          "name": "Zoom",
          "url": "https://zoom.us",
          "note": "線上會議與錄影"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "結構化整理（需核對）"
        },
        {
          "name": "Google Docs",
          "url": "https://docs.google.com",
          "note": "會後共編確認"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.so",
          "note": "會議資料庫與待辦連結"
        },
        {
          "name": "Microsoft Teams",
          "url": "https://www.microsoft.com/microsoft-teams",
          "note": "課堂／專題常見會議工具"
        }
      ],
      "challenge": "完成一次真實小組會議的「議程→紀錄→核對→確認」全流程，並在群組留下確認串。",
      "id": "workplace-productivity-L3",
      "lessonKey": "workplace-productivity-L3"
    },
    {
      "icon": "📄",
      "title": "用 AI 撰寫與整理商務文件",
      "description": "用 AI 協助大學文件的結構、標題層級、修訂與格式檢查，產出可繳交的 Word／Docs 文件。",
      "goal": "我的課程文件模板＋一份已整理的作業／報告 Word 定稿檢查表",
      "estimatedTime": "55-75 分鐘",
      "difficulty": "初階",
      "tags": [
        "Word",
        "文件整理",
        "格式",
        "Chapter8"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 7,
      "chapterZh": "AI 學習生產力系統",
      "chapterEn": "AI Learning Productivity System",
      "zhTitle": "第4課：用 AI 撰寫與整理商務文件",
      "enTitle": "Lesson 4: Use AI to draft and organize business documents",
      "zhValueTip": "用 AI 協助大學文件的結構、標題層級、修訂與格式檢查，產出可繳交的 Word／Docs 文件。",
      "enValueTip": "Use AI to structure university documents, heading levels, revisions, and format checks for submission-ready Word/Docs files.",
      "zhOutcome": "我的課程文件模板＋一份已整理的作業／報告 Word 定稿檢查表",
      "enOutcome": "My Course Document Template + Submission Format Checklist",
      "zhConcept": "大學生每週都在交 Word／Google Docs：作業、報告、會議紀錄、申請說明。生產力不是「請 AI 寫全文」，而是建立可重複的文件作業系統：標題樣式、層級、目錄、引用區、修訂紀錄、檔名規則。先讀繳交規格：字數、字型、行距、頁邊、標題格式、是否要目錄／封面。把規格寫成檢查表，再請 AI 對照你的草稿指出缺口；AI 不得發明老師沒要求的花俏格式。結構優先於美化：H1 報告題目、H2 章、H3 節；內文用正文樣式，不要手動調每段字級造成混亂。長文件用導覽窗格檢查層級是否跳躍。AI 適合：把雜亂筆記重排成大綱、建議標題名稱、列出格式不一致處、產生修訂說明、把口語段落改成書面語（仍需你保留原意）。不適合：無依據代寫、亂加未要求的圖表框、把個人語氣改到認不出。版本管理：檔名用 課程_作業名_日期_v1／final；重大修改另存，避免覆蓋。與同學協作時用建議模式／追蹤修訂，不要默默覆蓋他人段落。定稿前三檢：規格、結構、錯字與殘留註解。把「刪除黃色醒目／TODO」寫進檢查表。這一課連到 Chapter 4 報告與 Chapter 7 英文寫作：內容品質來自前章，本章負責可繳交的文件層。完成後你會有一份課程文件模板，換作業只改題目與章節，不再從空白頁重來。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。",
      "enConcept": "Build a reusable document system—styles, headings, specs checklist, revision hygiene, and filenames. AI reorganizes and audits format; you keep meaning and authorship.",
      "zhCaseStudy": "情境案例：社會系小恩交報告常因「標題層級亂、頁碼沒開、還留著草稿註解」被扣格式分。她用規格檢查表＋AI 結構審計，把全文套用樣式，刪除 14 處 TODO，檔名改成 final。助教回饋格式一次過。她把模板複製到所有課程資料夾。",
      "enCaseStudy": "Xiao En stopped losing format points by applying a styles-based template and an AI structure audit before submit.",
      "zhWorkflow": [
        "把作業格式規格寫成檢查表",
        "建立／套用標題與正文樣式",
        "請 AI 重排大綱並標不一致處（禁代寫）",
        "清理註解、目錄、頁碼與檔名",
        "依檢查表定稿"
      ],
      "enWorkflow": [
        "Turn format rules into a checklist",
        "Apply heading/body styles",
        "Ask AI to reorder outline and flag inconsistencies (no ghostwriting)",
        "Clean comments, TOC, page numbers, filename",
        "Finalize against the checklist"
      ],
      "zhCommonMistakes": [
        "手動調字級造成樣式崩壞",
        "請 AI 代寫全文只為交差",
        "定稿仍留 TODO／對話泡泡",
        "檔名混亂找不到 final"
      ],
      "enCommonMistakes": [
        "Manual font chaos",
        "Full ghostwriting for submission",
        "Leaving TODOs in the final",
        "Lost final among messy filenames"
      ],
      "zhExcellentExample": "優秀文件：樣式一致、層級可導覽、規格全勾、無殘留註解、檔名含 final 與日期。",
      "enExcellentExample": "A strong file has consistent styles, navigable headings, a checked specs list, no leftover comments, and a dated final filename.",
      "zhPrompt": "【Prompt 1｜文件結構整理教練】\n繳交規格：\n（貼上）\n我的草稿大綱或雜亂標題：\n（貼上）\n請重排成 H1／H2／H3 建議，並指出可能不符合規格之處。規則：不要撰寫完整正文取代我；規格未提及的格式標為「非必要／勿自行添加」。資訊不足請先問我。",
      "enPrompt": "[Prompt 1 | Doc Structure Coach] Propose H1–H3 order vs my specs; do not write the full paper; do not invent extra format rules.",
      "zhCoachPrompt": "【Prompt 2｜格式不一致稽核】\n以下是我各段開頭與目前格式描述：\n（貼上）\n請列出：樣式不一致、層級跳躍、可能的殘留草稿語句、建議的清理順序。每項給我可執行的 Word／Docs 操作提示。不要改寫我的論點內容。",
      "enCoachPrompt": "[Prompt 2 | Format Audit] Flag style inconsistencies, heading jumps, and draft leftovers with actionable Word/Docs steps—no argument rewrites.",
      "zhFeedbackPrompt": "【Prompt 3｜定稿檢查表驗收】\n規格檢查表：\n（貼上）\n我已完成項目：\n（貼上）\n請評分可繳交度，指出未勾風險，給交卷前 10 分鐘必做清單。不要因為想「加分」而建議老師沒要求的裝飾。",
      "enFeedbackPrompt": "[Prompt 3 | Final Checklist QA] Score submission readiness and list a 10-minute must-do list—no unrequested decoration.",
      "zhExample": "規格：標楷12／1.5行距／APA。｜AI 指出 H3 跳號與內文混用兩種字級。｜行動：全選套用正文樣式→重設標題→更新目錄→另存 final。",
      "enExample": "Specs audit finds heading jumps and mixed body fonts; student reapplies styles and saves a dated final.",
      "zhPractice": "為一科建立文件模板與規格檢查表。；整理一份真實草稿的標題層級。；清掉註解並統一檔名。；Challenge：用導覽窗格／大綱檢視向同學展示你的層級，並在 5 分鐘內修掉對方指出的兩處不一致。",
      "enPractice": "Build a course template and checklist.；Fix heading levels on a real draft.；Clean comments and filename.；Challenge: demo outline pane and fix two inconsistencies in 5 minutes.",
      "zhQuizItems": [
        {
          "q": "Word／文件整理的首要目標較接近？",
          "options": [
            "請 AI 代寫全文並加大量裝飾",
            "符合繳交規格並建立可重複的結構與樣式系統",
            "每段手動調不同藝術字",
            "不需要檔名規則"
          ],
          "answer": 1,
          "explain": "規格＋可重複樣式才是生產力。"
        },
        {
          "q": "請 AI 協助文件時應避免？",
          "options": [
            "對照規格做結構建議",
            "發明老師未要求的格式並當成必須",
            "指出層級跳躍",
            "列出殘留 TODO"
          ],
          "answer": 1,
          "explain": "不可自行添加未要求硬性格式。"
        },
        {
          "q": "定稿前最該清掉的通常包括？",
          "options": [
            "所有標題",
            "草稿註解、TODO、不一致字級與錯誤檔名",
            "頁碼",
            "目錄"
          ],
          "answer": 1,
          "explain": "殘留草稿痕跡常造成扣分與混亂。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Primary goal of document organization?",
          "options": [
            "Ghostwrite with heavy decoration",
            "Meet specs and build a reusable style/structure system",
            "Artistic fonts per paragraph",
            "No filename rules needed"
          ],
          "answer": 1,
          "explain": "Specs plus reusable styles equal productivity."
        },
        {
          "q": "When using AI on documents, avoid:",
          "options": [
            "Structure advice against specs",
            "Inventing unrequested format rules as mandatory",
            "Flagging heading jumps",
            "Listing leftover TODOs"
          ],
          "answer": 1,
          "explain": "Don’t invent mandatory extras."
        },
        {
          "q": "Before submit, usually clean:",
          "options": [
            "All headings",
            "Draft comments, TODOs, inconsistent fonts, bad filenames",
            "Page numbers",
            "The table of contents"
          ],
          "answer": 1,
          "explain": "Draft residue causes avoidable losses."
        }
      ],
      "zhNotePrompt": "貼上你的規格檢查表與最終檔名規則，並列出本週清掉的 3 個格式問題。",
      "enNotePrompt": "Paste your specs checklist and filename rule, plus three format issues you cleaned.",
      "zhDeliverableChecklist": [
        "完成課程文件模板",
        "規格檢查表可用",
        "真實文件層級已整理",
        "無殘留註解",
        "final 檔名正確"
      ],
      "enDeliverableChecklist": [
        "Course template ready",
        "Specs checklist usable",
        "Real doc headings fixed",
        "No leftover comments",
        "Final filename correct"
      ],
      "zhScorecard": [
        "規格對齊",
        "樣式一致",
        "結構清楚",
        "版本可控",
        "可繳交"
      ],
      "enScorecard": [
        "Spec alignment",
        "Style consistency",
        "Clear structure",
        "Version control",
        "Submission-ready"
      ],
      "resources": [
        {
          "name": "Microsoft Word",
          "url": "https://www.microsoft.com/microsoft-365/word",
          "note": "樣式、目錄與追蹤修訂"
        },
        {
          "name": "Google Docs",
          "url": "https://docs.google.com",
          "note": "雲端文件與建議模式"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "結構重排與格式稽核提示"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "版本與資料夾管理"
        }
      ],
      "challenge": "把一份即將繳交（或剛繳交）的作業重套樣式並跑完整規格檢查表；記錄因此避免的至少 3 個格式風險。",
      "id": "workplace-productivity-L4",
      "lessonKey": "workplace-productivity-L4"
    },
    {
      "icon": "📊",
      "title": "用 AI 處理表格與數據初稿",
      "description": "用 AI 協助清理資料、設計欄位、寫公式與做摘要表，完成大學生常見的表格分析任務。",
      "goal": "我的資料清理規則＋一份可重算的分析表（含公式說明）",
      "estimatedTime": "60-80 分鐘",
      "difficulty": "中階",
      "tags": [
        "Excel",
        "資料清理",
        "公式",
        "Chapter8"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 7,
      "chapterZh": "AI 學習生產力系統",
      "chapterEn": "AI Learning Productivity System",
      "zhTitle": "第5課：用 AI 處理表格與數據初稿",
      "enTitle": "Lesson 5: Use AI for spreadsheets and first-pass data work",
      "zhValueTip": "用 AI 協助清理資料、設計欄位、寫公式與做摘要表，完成大學生常見的表格分析任務。",
      "enValueTip": "Use AI to clean data, design columns, write formulas, and build summary tables for common university spreadsheet tasks.",
      "zhOutcome": "我的資料清理規則＋一份可重算的分析表（含公式說明）",
      "enOutcome": "My Data-Cleaning Rules + Recomputable Analysis Sheet (with formula notes)",
      "zhConcept": "Excel／Sheets 生產力的核心是「資料可信任、公式可重算、結果可解釋」。常見大學任務：成績統計、問卷整理、實驗紀錄、社團經費、報告附表。流程：定義問題→檢查欄位與單位→清理（空白、重複、格式）→建立計算欄→摘要（樞紐／SUMIFS／平均）→圖表或結論句。請 AI 幫你時，要貼欄位名稱與 3-5 列示例（脱敏），說明想要的輸出；要求它給公式與逐步說明，並提醒假設。你必須在真實表驗證，不可盲信。清理規則要寫下來：日期格式、缺失值怎麼標、類別名稱是否統一。否則下次匯入又亂。避免：把多種資料塞同一格、合併儲存格當資料庫、用手打結果取代公式、用 AI 捏造不存在的數據列。好的分析表能回答一個清楚問題，例如「各組平均分數與缺交人數」。結論要能指回儲存格。與 Chapter 6 考試數據或報告附表銜接時，同樣遵守不捏造；資訊不足就標待補。Google Sheets 與 Excel 公式高度相近；先掌握相對／絕對參照與基本邏輯函數，再學樞紐。完成後保存「資料字典」：每欄意義、來源、清理規則、關鍵公式，讓未來的你與組員接得住。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。",
      "enConcept": "Define the question, clean fields, compute with formulas, summarize, and explain. AI proposes formulas from sample rows; you verify and never invent data.",
      "zhCaseStudy": "情境案例：資管系小組問卷 80 份，欄位名稱中英混雜、性別寫法五種。他們先定清理規則，用 AI 建議 COUNTIF／平均公式，在 Sheets 驗證後做摘要。報告附表可重算，老師改一筆資料總表自動更新。組長把資料字典放進 Drive。",
      "enCaseStudy": "A MIS team fixed messy survey fields with written cleaning rules and verified formulas, producing a recomputable appendix.",
      "zhWorkflow": [
        "寫下分析問題與所需欄位",
        "脱敏示例＋請 AI 建議清理與公式",
        "在 Excel／Sheets 實作並抽樣驗證",
        "做摘要表／圖並寫一句結論",
        "輸出資料字典與版本檔名"
      ],
      "enWorkflow": [
        "Write the analysis question and required fields",
        "Share anonymized samples; ask AI for cleaning + formulas",
        "Implement and spot-check in Excel/Sheets",
        "Build a summary and one conclusion sentence",
        "Export a data dictionary and versioned file"
      ],
      "zhCommonMistakes": [
        "手動填結果不留公式",
        "不清理就統計",
        "讓 AI 補假資料",
        "合併儲存格導致無法篩選"
      ],
      "enCommonMistakes": [
        "Hard-coding results",
        "Stats on dirty data",
        "Letting AI fabricate rows",
        "Merged cells that break filters"
      ],
      "zhExcellentExample": "優秀表：欄位清楚、清理規則可見、公式可重算、摘要對應問題、資料字典齊全。",
      "enExcellentExample": "A strong sheet has clear fields, visible cleaning rules, recomputable formulas, a question-aligned summary, and a data dictionary.",
      "zhPrompt": "【Prompt 1｜資料清理與欄位設計】\n分析問題：［ ］\n目前欄位與 5 列脱敏示例：\n（貼上）\n請建議：清理規則、應拆／應合的欄位、缺失值處理、以及我下一步該算什麼。不要發明示例中沒有的數值列；資訊不足請列出要問我的問題。",
      "enPrompt": "[Prompt 1 | Cleaning & Schema] Propose cleaning rules and field design from my anonymized samples; invent no rows; ask if info is missing.",
      "zhCoachPrompt": "【Prompt 2｜公式教練】\n表名／欄位：\n（貼上）\n我想計算：［例如各組平均、條件加總］\n請給 Excel 與 Google Sheets 可用公式、相對／絕對參照說明、常見錯誤。提供用我示例驗算的步驟。不要只給結果數字而不給公式。",
      "enCoachPrompt": "[Prompt 2 | Formula Coach] Provide spreadsheet formulas with absolute/relative notes and a verification walkthrough—not only final numbers.",
      "zhFeedbackPrompt": "【Prompt 3｜分析表驗收】\n問題：\n（貼上）\n我的摘要結果與公式：\n（貼上）\n請檢查：是否回答問題、公式邏輯風險、清理是否足夠。給修改優先序。若無法判斷因為缺少欄位說明，明確說資訊不足。",
      "enFeedbackPrompt": "[Prompt 3 | Sheet QA] Check question fit and formula risks; say when column meaning is insufficient to judge.",
      "zhExample": "問題：三組缺交率。｜清理：空白=缺交。｜公式：=COUNTIF(C:C,\"\")/COUNTA(A:A)。｜結論：B 組缺交最高，見摘要表！",
      "enExample": "Missing-assignment rates by group with a verified COUNTIF formula and a one-line conclusion.",
      "zhPractice": "選一份真實表格（成績／問卷／經費）。；完成清理規則與關鍵公式。；產出摘要與資料字典。；Challenge：改動兩筆原始資料，證明摘要會自動更新；若不會，回頭修成公式驅動。",
      "enPractice": "Pick a real sheet.；Write cleaning rules and key formulas.；Build summary + dictionary.；Challenge: change two source rows and prove the summary updates automatically.",
      "zhQuizItems": [
        {
          "q": "試算表分析前最應先做？",
          "options": [
            "直接畫最炫圖表",
            "確認問題、欄位意義並清理資料",
            "刪除所有公式",
            "請 AI 隨意填滿空白當作真實資料"
          ],
          "answer": 1,
          "explain": "可信資料與清楚問題優先於視覺。"
        },
        {
          "q": "使用 AI 產生公式時正確態度是？",
          "options": [
            "貼上就信，不必驗證",
            "要求說明與驗算步驟，並在真實表抽查",
            "只要結果好看即可",
            "用 AI 捏造缺失問卷答案"
          ],
          "answer": 1,
          "explain": "公式必須可解釋、可驗證。"
        },
        {
          "q": "資料字典的用途是？",
          "options": [
            "裝飾封面",
            "記錄欄位意義、來源、清理規則與關鍵公式便於交接",
            "取代原始資料",
            "隱藏錯誤"
          ],
          "answer": 1,
          "explain": "字典讓分析可維護、可交接。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Before spreadsheet analysis, first:",
          "options": [
            "Make the flashiest chart",
            "Clarify the question, field meaning, and cleaning",
            "Delete all formulas",
            "Have AI invent missing survey answers"
          ],
          "answer": 1,
          "explain": "Trusted data and a clear question come first."
        },
        {
          "q": "Correct stance toward AI formulas?",
          "options": [
            "Trust blindly",
            "Require explanations and verify on the real sheet",
            "Looks good enough",
            "Fabricate missing responses"
          ],
          "answer": 1,
          "explain": "Formulas must be explainable and checked."
        },
        {
          "q": "A data dictionary is for:",
          "options": [
            "Cover decoration",
            "Recording field meaning, source, cleaning rules, and key formulas",
            "Replacing raw data",
            "Hiding errors"
          ],
          "answer": 1,
          "explain": "Dictionaries make analysis maintainable."
        }
      ],
      "zhNotePrompt": "寫下分析問題、兩條清理規則、一條關鍵公式與驗算結果。",
      "enNotePrompt": "Write your analysis question, two cleaning rules, one key formula, and a verification result.",
      "zhDeliverableChecklist": [
        "分析問題清楚",
        "清理規則成文",
        "關鍵公式可重算",
        "摘要能回答問題",
        "資料字典完成"
      ],
      "enDeliverableChecklist": [
        "Question clear",
        "Cleaning rules written",
        "Key formulas recomputable",
        "Summary answers the question",
        "Data dictionary done"
      ],
      "zhScorecard": [
        "資料可信",
        "公式正確",
        "可重算",
        "可解釋",
        "可交接"
      ],
      "enScorecard": [
        "Trusted data",
        "Correct formulas",
        "Recomputable",
        "Explainable",
        "Handoff-ready"
      ],
      "resources": [
        {
          "name": "Microsoft Excel",
          "url": "https://www.microsoft.com/microsoft-365/excel",
          "note": "公式、樞紐與資料清理"
        },
        {
          "name": "Google Sheets",
          "url": "https://sheets.google.com",
          "note": "雲端協作試算與公式"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "公式建議與清理規則草稿"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "存放原始檔與資料字典"
        }
      ],
      "challenge": "完成一份課程／社團真實資料表：含清理前後對照、至少 3 個公式、一張摘要，並能向同學在 3 分鐘內解釋結果如何算出。",
      "id": "workplace-productivity-L5",
      "lessonKey": "workplace-productivity-L5"
    },
    {
      "icon": "🖼️",
      "title": "用 AI 製作工作簡報（對內／對外）",
      "description": "用 AI 把內容做成可講的投影片：主張頁、精簡文字、講者備註與時間控制，銜接大學簡報場景。",
      "goal": "我的 PowerPoint／Slides 主張地圖＋一組可上台初稿（含備註）",
      "estimatedTime": "55-75 分鐘",
      "difficulty": "初階",
      "tags": [
        "PowerPoint",
        "投影片",
        "講者備註",
        "Chapter8"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 7,
      "chapterZh": "AI 學習生產力系統",
      "chapterEn": "AI Learning Productivity System",
      "zhTitle": "第6課：用 AI 製作工作簡報（對內／對外）",
      "enTitle": "Lesson 6: Use AI to create internal and external work presentations",
      "zhValueTip": "用 AI 把內容做成可講的投影片：主張頁、精簡文字、講者備註與時間控制，銜接大學簡報場景。",
      "enValueTip": "Turn content into speakable slides—claim pages, sparse text, speaker notes, and timing—for university presentations.",
      "zhOutcome": "我的 PowerPoint／Slides 主張地圖＋一組可上台初稿（含備註）",
      "enOutcome": "My PowerPoint/Slides Claim Map + Speakable Draft Deck (with notes)",
      "zhConcept": "本章投影片課聚焦「生產力製作流程」，與 Chapter 5 故事線互補：先有主張地圖，再用 PowerPoint／Google Slides／可選 Gamma 落地。原則：一頁一主張、少字、大標題、講者備註放細節、總頁數服務時長。AI 可把報告大綱轉成頁面清單與備註草稿，但不可發明數據。製作順序：鎖定時長與主訊息→頁面主張→子彈點精簡→統一版面母片→加入圖表（真實資料）→備註→計時刪頁。避免：把 Word 段落貼上投影片、裝飾蓋過主張、無備註導致上台忘詞就念牆。母片與主題色一旦選定就全套一致；臨時每頁不同模板會拖慢生產力。匯出與備援：上課前匯出 PDF／帶離線副本；字體要可攜或用系統字。與 Lesson 36／37 銜接：文件結論與表格圖可進投影片，但要重寫成口語視覺，不是截一張糊圖。完成標準：同學只看標題能懂故事線；你不看稿也能靠備註關鍵詞講完。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。",
      "enConcept": "Produce speakable decks from a claim map with sparse bullets, master-slide consistency, real charts, and timed notes. AI drafts structure/notes; you own evidence and delivery.",
      "zhCaseStudy": "情境案例：小哲把報告直接貼進 PPT，20 頁超時。他用 AI 壓成 10 頁主張，備註放數字來源，統一母片。計時 8 分鐘過關。老師說「終於聽得懂重點」。",
      "enCaseStudy": "Xiao Zhe replaced pasted report walls with a 10-claim timed deck and clear speaker notes.",
      "zhWorkflow": [
        "寫主訊息與時長預算",
        "產出頁面主張地圖",
        "在 PPT／Slides 套母片並精簡文字",
        "補真實圖表與講者備註",
        "計時刪修並備援匯出"
      ],
      "enWorkflow": [
        "Set message and time budget",
        "Build a claim map",
        "Apply a master and sparse text in PPT/Slides",
        "Add real charts and speaker notes",
        "Time, cut, and export backups"
      ],
      "zhCommonMistakes": [
        "文字牆",
        "無時間預算",
        "每頁不同混亂風格",
        "捏造圖表數字"
      ],
      "enCommonMistakes": [
        "Text walls",
        "No time budget",
        "Inconsistent slide themes",
        "Invented chart numbers"
      ],
      "zhExcellentExample": "優秀初稿：主張清晰、母片一致、備註可講、計時合規、圖表可追溯。",
      "enExcellentExample": "A strong draft has clear claims, one master, speakable notes, on-time timing, and traceable charts.",
      "zhPrompt": "【Prompt 1｜投影片主張地圖】\n時長：［N］；主訊息：［ ］；來源要點：\n（貼上）\n請列出每頁：主張標題、最多3子彈點、建議視覺、預估秒數、講者備註關鍵詞。禁止發明來源沒有的數據；不足標［待補］。",
      "enPrompt": "[Prompt 1 | Slide Claim Map] List claim titles, ≤3 bullets, visual, seconds, and note keywords; invent no data.",
      "zhCoachPrompt": "【Prompt 2｜文字精簡與備註分工】\n目前某頁文字：\n（貼上）\n請拆成：投影片可見短句 vs 講者備註。說明刪了什麼與為何。保持原意，不要改成另一個主張。",
      "enCoachPrompt": "[Prompt 2 | Sparse Text vs Notes] Split slide-visible text from speaker notes; keep the same claim.",
      "zhFeedbackPrompt": "【Prompt 3｜可講性與時間驗收】\n頁面清單與秒數：\n（貼上）\n請檢查是否超時、哪頁該刪併、標題是否像主張。給修改優先序，不要重做整套花俏動畫建議。",
      "enFeedbackPrompt": "[Prompt 3 | Speakability & Timing QA] Flag overtime and weak titles; prioritize cuts—not flashy animation essays.",
      "zhExample": "P4 主張：試辦分三階段。｜子彈：準備／試點／評估。｜備註：各階段兩週、負責人。｜秒數：70。",
      "enExample": "A three-phase pilot claim slide with sparse bullets, note details, and a 70-second budget.",
      "zhPractice": "把一份報告或作業做成主張地圖。；製成 PPT／Slides 初稿含備註。；計時一輪並刪頁。；Challenge：只顯示標題，向同學講完整故事；對方聽不懂的頁立刻改標題。",
      "enPractice": "Turn a report into a claim map.；Build a PPT/Slides draft with notes.；Time and cut.；Challenge: tell the story from titles only; rewrite unclear titles immediately.",
      "zhQuizItems": [
        {
          "q": "大學投影片較正確的單位是？",
          "options": [
            "一頁貼上整段報告",
            "一頁一個主張＋精簡要點",
            "頁數越多越好",
            "沒有備註比較專業"
          ],
          "answer": 1,
          "explain": "單頁單主張才好講好記。"
        },
        {
          "q": "講者備註的主要用途是？",
          "options": [
            "投影給觀眾看的第二面文字牆",
            "提醒你要講的細節與來源，觀眾看標題即可",
            "放無關笑話為主",
            "取代練習"
          ],
          "answer": 1,
          "explain": "備註服務講者，不是第二投影片。"
        },
        {
          "q": "AI 產投影片內容時不可做的是？",
          "options": [
            "依你提供要點產主張地圖",
            "標示待補資料",
            "捏造統計數字讓圖表好看",
            "建議刪超時頁"
          ],
          "answer": 2,
          "explain": "不可捏造數據。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Best unit for university slides?",
          "options": [
            "Paste a full report section",
            "One claim per slide with sparse points",
            "Maximize slide count",
            "No notes is more professional"
          ],
          "answer": 1,
          "explain": "One claim per slide is speakable and memorable."
        },
        {
          "q": "Speaker notes are mainly for:",
          "options": [
            "A second text wall for the audience",
            "Details and sources for you while the audience sees titles",
            "Only unrelated jokes",
            "Replacing rehearsal"
          ],
          "answer": 1,
          "explain": "Notes serve the speaker."
        },
        {
          "q": "AI must not:",
          "options": [
            "Build a claim map from your points",
            "Mark data needed",
            "Invent statistics for prettier charts",
            "Suggest cutting overtime slides"
          ],
          "answer": 2,
          "explain": "Never invent data."
        }
      ],
      "zhNotePrompt": "貼上主訊息、頁數與總秒數，以及最需要刪／改的兩頁理由。",
      "enNotePrompt": "Paste core message, slide count, total seconds, and reasons to cut/change two slides.",
      "zhDeliverableChecklist": [
        "主張地圖完成",
        "母片風格一致",
        "備註齊備",
        "計時達標",
        "無捏造數據"
      ],
      "enDeliverableChecklist": [
        "Claim map done",
        "Master consistent",
        "Notes complete",
        "Timing on target",
        "No invented data"
      ],
      "zhScorecard": [
        "主張清楚",
        "少字",
        "可講",
        "準時",
        "一致"
      ],
      "enScorecard": [
        "Clear claims",
        "Sparse text",
        "Speakable",
        "On time",
        "Consistent"
      ],
      "resources": [
        {
          "name": "Microsoft PowerPoint",
          "url": "https://www.microsoft.com/microsoft-365/powerpoint",
          "note": "投影片母片、備註與演講者檢視"
        },
        {
          "name": "Google Slides",
          "url": "https://slides.google.com",
          "note": "協作投影片與備註"
        },
        {
          "name": "Gamma",
          "url": "https://gamma.app",
          "note": "可選 AI 初稿，仍需人工對齊主張"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "主張地圖與文字精簡"
        },
        {
          "name": "Canva",
          "url": "https://www.canva.com",
          "note": "可選美化，內容正確後再做"
        }
      ],
      "challenge": "用本課流程完成一份真實 5-10 分鐘課程／社團簡報初稿（PowerPoint 或 Slides），含備註與一次計時紀錄。",
      "id": "workplace-productivity-L6",
      "lessonKey": "workplace-productivity-L6"
    },
    {
      "id": "workplace-productivity-L7",
      "lessonKey": "workplace-productivity-L7",
      "zhTitle": "第7課：用 AI 建立 SOP 與標準作業流程",
      "enTitle": "Lesson 7: Use AI to create SOPs and standard operating procedures",
      "zhConcept": "SOP 讓工作不依賴「當日記憶」。好的 SOP 有觸發條件、步驟、輸入／輸出、負責人、完成定義、品質檢查與例外分流。AI 可把你的口述流程整理成結構，並找出含糊步驟；不可假裝已驗證你沒做過的流程。\n\n先選一個高頻、低風險的工作流程（例如週報彙整、會議後待辦整理），寫到別人照做也不致翻車，再談優化。",
      "enConcept": "SOPs capture triggers, steps, I/O, owners, done definitions, checks, and exceptions. AI can structure your dictation and spot ambiguity; it cannot validate a process you never ran. Start with a frequent, low-risk workflow.",
      "zhPrompt": "請擔任流程設計教練。流程名稱：【】。現況口述：【】。常見失誤：【】。\n\n請整理成 SOP：觸發、步驟、輸入輸出、負責人、完成定義、檢查表、例外處理，並標出含糊語句。不要發明公司不存在的系統。",
      "enPrompt": "Act as a process coach. Process: []. Current narration: []. Common failures: []. Produce an SOP with trigger, steps, I/O, owner, done definition, checklist, and exceptions; flag vague lines. Invent no systems.",
      "zhExample": "弱步驟「妥善通知相關人士」。強步驟「在 #ops 頻道標記負責人，貼上逾期項目表，並於當日 17:00 前確認是否回覆；未回覆則升級給主管。」",
      "enExample": "Weak: notify stakeholders properly. Strong: tag owners in #ops with the overdue table and escalate by 17:00 if no reply.",
      "zhPractice": "選一個高頻工作流程。；口述錄成文字。；用 Prompt 轉 SOP。；找同事試跑一次並記問題。；改第二版檢查表。",
      "enPractice": "Pick a frequent workflow.；Dictate it.；Convert to SOP.；Have a colleague dry-run.；Revise the checklist.",
      "zhFeedbackPrompt": "你是一位流程設計教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 可交接性\n- 清楚度\n- 可檢查\n- 例外完整\n- 真實演練\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a process design coach. Score 1-10 for: Handoffability, Clarity, Checkability, Exception coverage, Real dry-run. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "好 SOP 通常包含？",
          "options": [
            "觸發、步驟、檢查與例外",
            "只有口號目標",
            "只有軟體名稱"
          ],
          "answer": 0,
          "explain": "可執行結構。"
        },
        {
          "q": "含糊步驟的風險？",
          "options": [
            "無法交接且品質不穩",
            "比較有彈性所以最好",
            "一定提升創意"
          ],
          "answer": 0,
          "explain": "交接失敗。"
        },
        {
          "q": "AI 適合？",
          "options": [
            "整理結構並標含糊處",
            "假裝流程已驗證",
            "省略檢查表"
          ],
          "answer": 0,
          "explain": "結構輔助。"
        },
        {
          "q": "適合先寫 SOP 的是？",
          "options": [
            "高頻低風險重複工作",
            "一年一次的特殊專案",
            "完全無規律的危機"
          ],
          "answer": 0,
          "explain": "重複性。"
        },
        {
          "q": "本課產出？",
          "options": [
            "SOP 初稿",
            "股價",
            "與流程無關的散文"
          ],
          "answer": 0,
          "explain": "流程文件。"
        }
      ],
      "enQuizItems": [
        {
          "q": "好 SOP 通常包含？",
          "options": [
            "觸發、步驟、檢查與例外",
            "只有口號目標",
            "只有軟體名稱"
          ],
          "answer": 0,
          "explain": "可執行結構。"
        },
        {
          "q": "含糊步驟的風險？",
          "options": [
            "無法交接且品質不穩",
            "比較有彈性所以最好",
            "一定提升創意"
          ],
          "answer": 0,
          "explain": "交接失敗。"
        },
        {
          "q": "AI 適合？",
          "options": [
            "整理結構並標含糊處",
            "假裝流程已驗證",
            "省略檢查表"
          ],
          "answer": 0,
          "explain": "結構輔助。"
        },
        {
          "q": "適合先寫 SOP 的是？",
          "options": [
            "高頻低風險重複工作",
            "一年一次的特殊專案",
            "完全無規律的危機"
          ],
          "answer": 0,
          "explain": "重複性。"
        },
        {
          "q": "本課產出？",
          "options": [
            "SOP 初稿",
            "股價",
            "與流程無關的散文"
          ],
          "answer": 0,
          "explain": "流程文件。"
        }
      ],
      "zhOutcome": "產出一份可交給同事執行的 SOP 初稿（含檢查表與例外處理）。",
      "enOutcome": "Produce a colleague-ready SOP draft with a checklist and exception handling.",
      "zhValueTip": "把重複工作寫成 SOP：觸發條件、步驟、負責、檢查與例外。",
      "enValueTip": "Turn repeatable work into an SOP: trigger, steps, owners, checks, and exceptions.",
      "zhCaseStudy": "營運助理每週花很多時間追進度。她把「週一進度彙整」寫成 SOP：收集來源 → 表格欄位 → 紅黃燈規則 → 寄出前檢查。AI 幫她找出「跟進」兩字太含糊，改成「若紅燈則於當日 15:00 前在頻道點名負責人並記錄回覆」。新人第一週就能代班。",
      "enCaseStudy": "An ops assistant turned Monday status collection into an SOP with sources, fields, RAG status rules, and a concrete follow-up action—clear enough for a newcomer to cover.",
      "zhExcellentExample": "SOP 含觸發、步驟、I/O、負責人、完成定義、檢查表、例外；並經過一次真實演練註記耗時。",
      "enExcellentExample": "SOP with trigger, steps, I/O, owner, done definition, checklist, exceptions, plus one timed dry run.",
      "zhWorkflow": [
        "選高頻流程",
        "口述現況",
        "轉成 SOP 結構",
        "試跑找含糊點",
        "更新檢查表"
      ],
      "enWorkflow": [
        "Pick frequent process",
        "Dictate current state",
        "Structure as SOP",
        "Dry-run for ambiguity",
        "Update checklist"
      ],
      "zhCommonMistakes": [
        "步驟含糊無法交接",
        "沒有完成定義",
        "例外全靠當下感覺",
        "寫了從不試跑",
        "把偶發專案硬写成 SOP"
      ],
      "enCommonMistakes": [
        "Vague non-handoffable steps",
        "No done definition",
        "Exceptions by vibe",
        "Never dry-run",
        "Forcing one-offs into SOPs"
      ],
      "zhDeliverableChecklist": [
        "觸發與步驟",
        "負責人",
        "完成定義",
        "檢查表",
        "例外與試跑紀錄"
      ],
      "enDeliverableChecklist": [
        "Trigger/steps",
        "Owner",
        "Done definition",
        "Checklist",
        "Exceptions + dry-run"
      ],
      "zhScorecard": [
        "可交接性",
        "清楚度",
        "可檢查",
        "例外完整",
        "真實演練"
      ],
      "enScorecard": [
        "Handoffability",
        "Clarity",
        "Checkability",
        "Exception coverage",
        "Real dry-run"
      ],
      "zhNotePrompt": "貼上 SOP 初稿與試跑筆記。",
      "enNotePrompt": "Paste your SOP draft and dry-run notes.",
      "zhCoachPrompt": "請找出 SOP 中含糊、無法交接的步驟，並改寫成可執行語句。",
      "enCoachPrompt": "Find vague non-handoffable SOP steps and rewrite them to be executable.",
      "title": "用 AI 建立 SOP 與標準作業流程",
      "description": "把重複工作寫成 SOP：觸發條件、步驟、負責、檢查與例外。",
      "goal": "產出一份可交給同事執行的 SOP 初稿（含檢查表與例外處理）。"
    },
    {
      "icon": "🧠",
      "title": "建立個人或團隊知識庫（第二大腦／企業知識）",
      "description": "建立 AI Second Brain：課程／PDF／筆記／Prompt／作業／作品集資料庫，含命名、標籤、搜尋與備份分工。",
      "goal": "我的 AI Second Brain 架構圖＋資料庫清單＋命名／標籤／備份規則",
      "estimatedTime": "70-90 分鐘",
      "difficulty": "中階",
      "tags": [
        "Second Brain",
        "知識管理",
        "資料庫",
        "Chapter12"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 11,
      "chapterZh": "AI University OS 與最終專案",
      "chapterEn": "AI University OS and Capstone Project",
      "zhTitle": "第8課：建立個人或團隊知識庫（第二大腦／企業知識）",
      "enTitle": "Lesson 8: Build a personal or team knowledge base",
      "zhValueTip": "建立 AI Second Brain：課程／PDF／筆記／Prompt／作業／作品集資料庫，含命名、標籤、搜尋與備份分工。",
      "enValueTip": "Build an AI Second Brain with course/PDF/notes/prompt/assignment/portfolio databases plus naming, tags, search, and backup roles.",
      "zhOutcome": "我的 AI Second Brain 架構圖＋資料庫清單＋命名／標籤／備份規則",
      "enOutcome": "My AI Second Brain Architecture + DB Inventory + Naming/Tag/Backup Rules",
      "zhConcept": "AI University OS 的地基是知識管理，不是再下載十個 App。AI Second Brain 指：你能把四年大學的輸入（課堂、PDF、連結、對話）變成可搜尋、可重用、可追溯的個人知識資產，並讓 AI 在「你的來源」上協助，而不是每次從空白聊天開始。先定義分層：Inbox（未整理捕捉）→ 課程資料庫（每科一頁／一資料夾）→ 筆記資料庫（課堂／閱讀／複習）→ PDF 資料庫（講義與文獻，含頁碼與狀態）→ Prompt Library（依任務分類的可重用提示）→ 作業與報告資料庫（題目、規格、版本、回饋）→ 專案與作品集資料庫（問題、方法、成果、連結）。Google Drive 適合作為檔案真相來源與備份；Notion／Obsidian 適合作為結構化資料庫與雙向連結；NotebookLM 適合作為「針對已上傳資料的 grounded 問答層」。三者分工：Drive 存檔、Notion/Obsidian 管關係與任務、NotebookLM 做來源問答，避免全部擠在聊天紀錄裡。檔案命名建議：YYYYMMDD_課程代碼_類型_主題_v01。例：20260512_STAT201_note_hypothesis_v02。標籤系統用少量高頻：#課程 #考試 #專案 #求職 #待補 #final。標籤過多等於沒有標籤。搜尋要可落地：統一關鍵字、封面摘要欄、狀態（raw／review／final）。備份：雲端＋定期匯出；重要 final 另存，不覆蓋。AI 可幫你設計架構與遷移清單，但不可假裝你已經整理完四年資料；未完成要標進度。事實（你現有資料位置）／目標／假設／建議分開。完整知識管理架構案例：大三生把散落在桌面的 200 個檔案收成 Drive 樹：00_Inbox、01_Courses、02_PDFs、03_Notes、04_Prompts、05_Assignments、06_Projects、99_Archive；Notion 用關聯把「課程—筆記—作業—考試」串起；NotebookLM 每科一個來源包。這一課結束，你不是多一個資料夾，而是擁有可支撐 Lesson 57–60 的 OS 底座：後面的工作流、四年地圖、工具整合與最終專案都掛在這上面。也請回顧 Chapter 1 的 Workspace 與 Second Brain、Chapter 3 筆記、Chapter 4 報告來源：本章是升級成系統，而不是重做一次收藏。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。",
      "enConcept": "Build an AI Second Brain with clear databases for courses, PDFs, notes, prompts, assignments, and portfolio items; define naming/tags/search/backup; split roles across Drive, Notion/Obsidian, and NotebookLM. AI designs; you don’t fake finished migrations.",
      "zhCaseStudy": "完整知識管理架構案例：企管系小恩以前考試前找不到上學期的定義卡。她花一個週末只做「架構＋命名＋每科一頁」，先不追求完美遷移。Notion 課程頁連結 Drive 講義與 Prompt「考試範圍拆解」。下一次統計學複習，她 10 分鐘找回必考清單。她拒絕把未讀 PDF 標成已精讀，狀態欄保持誠實。半年後作品集也能從專案庫一鍵抓出截圖與反思。",
      "enCaseStudy": "Xiao En fixed “can’t find notes” by shipping architecture first—honest statuses, course pages, and linked prompts—without fake completion.",
      "zhWorkflow": [
        "盤點現有檔案位置與痛點",
        "設計資料庫清單與工具分工",
        "訂命名、標籤、狀態、備份規則",
        "建立空架構並遷移 1 科樣板",
        "請 AI 檢查缺口，標未完成進度"
      ],
      "enWorkflow": [
        "Inventory current files and pain points",
        "Design DB list and tool roles",
        "Set naming, tags, status, backup rules",
        "Create empty architecture and migrate one course as template",
        "AI gap-check; mark unfinished progress honestly"
      ],
      "zhCommonMistakes": [
        "只有收藏沒有資料庫欄位",
        "工具職責重疊導致不知放哪",
        "把未整理標成已完成",
        "無備份與命名規則"
      ],
      "enCommonMistakes": [
        "Hoarding without fields",
        "Overlapping tool roles",
        "Marking unorganized as done",
        "No backup/naming rules"
      ],
      "zhExcellentExample": "優秀 Second Brain：資料庫齊全、命名一致、標籤精簡、狀態誠實、Drive／Notion／NotebookLM 分工清楚、至少一科完整樣板可示範。",
      "enExcellentExample": "A strong Second Brain has complete DBs, consistent naming, lean tags, honest status, clear tool roles, and one demoable course template.",
      "zhPrompt": "【Prompt 1｜個人知識管理架構規劃】\n我的科系與年級：［ ］\n現有資料散落位置：\n（貼上）\n痛點：\n（貼上）\n請規劃 AI Second Brain：資料庫清單、欄位建議、Google Drive／Notion／NotebookLM／Obsidian 分工。清楚標示建議；不要宣稱我已完成遷移；資訊不足列待補資料；輸出需可執行可檢查。",
      "enPrompt": "[Prompt 1 | KM Architecture] Propose Second Brain DBs, fields, and tool roles from my real mess; label suggestions; don’t claim migration is done.",
      "zhCoachPrompt": "【Prompt 2｜命名規則、標籤與課程資料庫】\n我的課程清單：\n（貼上）\n請給檔名規則、標籤白名單、課程資料庫欄位（大綱／講義／筆記／考試／作業／Prompt）。提供 5 個命名範例。不要捏造我沒修的課。",
      "enCoachPrompt": "[Prompt 2 | Naming, Tags, Course DB] Provide naming rules, tag whitelist, course fields, and 5 examples; invent no courses.",
      "zhFeedbackPrompt": "【Prompt 3｜架構驗收與 Prompt Library 分類】\n我的架構草稿：\n（貼上）\n請檢查：缺哪些庫、狀態是否誠實、備份是否可執行；並建議 Prompt Library 分類（筆記／報告／簡報／考試／英文／協作／專案／求職）。不要把計畫寫成已建好；列出待補資料。",
      "enFeedbackPrompt": "[Prompt 3 | Architecture QA + Prompt Library] Check missing DBs, honesty, backup; suggest prompt categories; don’t mark plans as built.",
      "zhExample": "Drive：01_Courses/STAT201/…｜Notion 課程頁欄位：狀態、期末日、必考連結｜Prompt Library：exam/scope-decode｜備份：每月匯出 Notion＋Drive 版控。",
      "enExample": "A course folder + Notion course page + prompt category + monthly export backup rule.",
      "zhPractice": "畫出 Second Brain 架構圖。；訂命名／標籤／備份規則。；完成一科樣板遷移。；Challenge：用架構在 5 分鐘內找回上一個月某科的「考試重點卡」；找不回就補欄位。",
      "enPractice": "Draw the architecture.；Set naming/tags/backup.；Migrate one course template.；Challenge: retrieve last month’s exam cards in 5 minutes or fix fields.",
      "zhQuizItems": [
        {
          "q": "AI Second Brain 最核心的目的是？",
          "options": [
            "收藏越多 App 越好",
            "讓知識可搜尋、可重用、可追溯，並讓 AI 基於你的來源協助",
            "取代所有思考",
            "只聊天不存檔"
          ],
          "answer": 1,
          "explain": "系統價值在可重用與可追溯。"
        },
        {
          "q": "Drive／Notion／NotebookLM 較合理的分工是？",
          "options": [
            "三者放完全相同複本且無規則",
            "Drive 管檔案與備份、Notion 管結構關係、NotebookLM 做 grounded 問答",
            "全部只放聊天框",
            "禁止備份"
          ],
          "answer": 1,
          "explain": "分工清楚才能降低混亂。"
        },
        {
          "q": "建立資料庫時不可？",
          "options": [
            "標示 raw／final 狀態",
            "把未整理內容標成已完成遷移",
            "使用精簡標籤",
            "保留可檢查的命名規則"
          ],
          "answer": 1,
          "explain": "不可把計畫或未完成寫成已完成。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Core purpose of an AI Second Brain?",
          "options": [
            "Collect more apps",
            "Make knowledge searchable, reusable, traceable for grounded AI help",
            "Replace all thinking",
            "Chat only, never save"
          ],
          "answer": 1,
          "explain": "Value is reuse and provenance."
        },
        {
          "q": "Sensible Drive/Notion/NotebookLM split?",
          "options": [
            "Identical unmanaged copies everywhere",
            "Drive for files/backup, Notion for structure, NotebookLM for grounded Q&A",
            "Everything only in chat",
            "No backups"
          ],
          "answer": 1,
          "explain": "Clear roles reduce chaos."
        },
        {
          "q": "When building databases you must not:",
          "options": [
            "Use raw/final statuses",
            "Mark unorganized content as fully migrated",
            "Keep a lean tag set",
            "Keep checkable naming rules"
          ],
          "answer": 1,
          "explain": "Don’t mark unfinished as done."
        }
      ],
      "zhNotePrompt": "貼上資料庫清單、命名規則一句範例，以及一科樣板的連結或路徑。",
      "enNotePrompt": "Paste your DB list, one naming example, and the path/link to one course template.",
      "zhDeliverableChecklist": [
        "架構圖完成",
        "六類資料庫有定義",
        "命名／標籤／備份成文",
        "工具分工清楚",
        "至少一科樣板可示範"
      ],
      "enDeliverableChecklist": [
        "Architecture drawn",
        "Six DB types defined",
        "Naming/tags/backup written",
        "Tool roles clear",
        "≥1 course template demoable"
      ],
      "zhScorecard": [
        "可搜尋",
        "可重用",
        "狀態誠實",
        "分工清楚",
        "可備份"
      ],
      "enScorecard": [
        "Searchable",
        "Reusable",
        "Honest status",
        "Clear roles",
        "Backup-ready"
      ],
      "resources": [
        {
          "name": "Notion",
          "url": "https://www.notion.so",
          "note": "課程／筆記／Prompt 資料庫"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "檔案真相來源與備份"
        },
        {
          "name": "NotebookLM",
          "url": "https://notebooklm.google.com",
          "note": "依上傳來源做 grounded 問答"
        },
        {
          "name": "Obsidian",
          "url": "https://obsidian.md",
          "note": "本地雙向連結筆記選項"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "架構規劃與分類建議"
        }
      ],
      "challenge": "完成可示範的 Second Brain 空架構＋一科完整樣板；錄 2 分鐘螢幕說明「檔案放哪、如何搜、如何備份」，不得宣稱四年資料已全部遷移完成。",
      "id": "workplace-productivity-L8",
      "lessonKey": "workplace-productivity-L8"
    },
    {
      "icon": "📋",
      "title": "用 AI 做任務管理、優先順序與週期回報",
      "description": "把交付物拆成任務、設定優先序與狀態，用看板追蹤阻礙與延誤預警，區分個人與團隊任務。",
      "goal": "我的專案看板（Kanban）＋每週進度追蹤表",
      "estimatedTime": "55-75 分鐘",
      "difficulty": "中階",
      "tags": [
        "任務管理",
        "Kanban",
        "進度追蹤",
        "Chapter9"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 8,
      "chapterZh": "AI 團隊協作與專案管理",
      "chapterEn": "AI Team Collaboration and Project Management",
      "zhTitle": "第9課：用 AI 做任務管理、優先順序與週期回報",
      "enTitle": "Lesson 9: Use AI for task management, priorities, and recurring updates",
      "zhValueTip": "把交付物拆成任務、設定優先序與狀態，用看板追蹤阻礙與延誤預警，區分個人與團隊任務。",
      "enValueTip": "Break deliverables into tasks with priority and status, track blockers on a Kanban, and separate personal vs team work.",
      "zhOutcome": "我的專案看板（Kanban）＋每週進度追蹤表",
      "enOutcome": "My Project Kanban + Weekly Progress Tracker",
      "zhConcept": "任務管理把會議待辦變成可持續推進的系統。先拆解：交付物→任務→子任務，每張卡要有定義完成（DoD）、負責人、截止、優先序、依賴。優先序可用緊急／重要或 P0-P2；不要所有卡都標「很急」。Kanban 常見欄：Backlog／Ready／Doing／Blocked／Done；限制 WIP（進行中數量）避免偽忙碌。進度狀態要誠實：Blocked 必須寫阻礙與需要誰解。每週追蹤：完成數、延誤、新增範圍、下週 P0。延誤預警：截止前 48 小時仍在 Ready、或 Doing 超過預估 1.5 倍就升級討論，不要等到當天。個人任務（自己課業）與團隊任務分欄或標籤，避免把個人事務塞進專題看板造成噪音。AI 可依會議紀錄與 RACI 建議任務清單與優先序，但不可捏造已完成、不可擅自改期限；缺負責人標待確認。工具：Trello／Asana／ClickUp／Notion；重點是紀律而非軟體品牌。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。",
      "enConcept": "Decompose work into cards with DoD, owner, date, priority, and dependencies. Use Kanban + WIP limits, log blockers, run weekly reviews, and warn early on slips. AI suggests; humans update truth.",
      "zhCaseStudy": "完整任務管理案例：競賽隊用 Trello，起初 40 張卡全標急。改成 P0-P2＋WIP≤3 後，Blocked「問卷未過審」提前曝光。每週追蹤顯示寫作卡連續延誤，於是重配 R。交件前兩天只剩 P0，不再半夜開新想法卡。",
      "enCaseStudy": "A competition team fixed “everything urgent” with priorities, WIP limits, and weekly slip reviews.",
      "zhWorkflow": [
        "從交付物拆任務卡（含 DoD）",
        "設優先序、期限、依賴與個人／團隊標籤",
        "上看板並限制進行中數量",
        "每日／每週更新狀態與阻礙",
        "做延誤預警與重配"
      ],
      "enWorkflow": [
        "Break deliverables into cards with DoD",
        "Set priority, dates, deps, personal/team tags",
        "Board with WIP limits",
        "Update status and blockers",
        "Run slip warnings and rebalance"
      ],
      "zhCommonMistakes": [
        "所有任務都急",
        "不做阻礙紀錄",
        "用 AI 假更新進度",
        "個人與團隊任務混雜"
      ],
      "enCommonMistakes": [
        "Everything urgent",
        "No blocker notes",
        "AI-fake progress",
        "Mixing personal and team work"
      ],
      "zhExcellentExample": "優秀看板：卡可執行、優先序真實、Blocked 有原因、每週追蹤可見、個人／團隊分離。",
      "enExcellentExample": "A strong board has actionable cards, honest priorities, explained blockers, visible weekly tracking, and separated personal work.",
      "zhPrompt": "【Prompt 1｜任務清單生成器】\n交付物與 RACI：\n（貼上）\n會議待辦：\n（貼上）\n請拆成任務卡欄位：任務、DoD、負責人、期限、優先序、依賴、個人或團隊。負責人不明標待確認；不要發明已完成項目；區分事實輸入與你的拆解建議。",
      "enPrompt": "[Prompt 1 | Task Breakdown] Create cards with DoD/owner/date/priority/deps; mark unknown owners pending; invent no completed work.",
      "zhCoachPrompt": "【Prompt 2｜優先序與每週追蹤】\n任務列表：\n（貼上）\n本週截止：［日期］\n請建議 P0-P2，並產出每週追蹤表模板（完成／延誤／阻礙／下週P0）。若期限互相衝突，列出需組員決策的取捨，不要擅自刪別人的承諾。",
      "enCoachPrompt": "[Prompt 2 | Priority & Weekly Tracker] Suggest P0–P2 and a weekly tracker; surface trade-offs instead of deleting others’ commitments.",
      "zhFeedbackPrompt": "【Prompt 3｜延誤預警分析】\n看板狀態摘要：\n（貼上）\n請指出高風險卡、可能延誤原因、升級問題清單。資訊不足（無期限／無負責人）先列缺失，不要假報綠燈。",
      "enFeedbackPrompt": "[Prompt 3 | Slip Warning] Flag high-risk cards and escalation questions; if data is missing, say so—don’t fake green status.",
      "zhExample": "卡：問卷定稿｜DoD：題目過審＋Forms上線｜P0｜依賴：倫理同意｜狀態：Blocked（同意未回）。",
      "enExample": "A P0 survey card blocked on ethics approval with a clear Definition of Done.",
      "zhPractice": "建立真實專案看板。；完成一輪每週追蹤。；寫下至少一則延誤預警處理。；Challenge：把 WIP 降到可執行上限，刪併或延後至少 3 張低優先卡並通知組員。",
      "enPractice": "Build a real Kanban.；Run one weekly review.；Handle one slip warning.；Challenge: enforce WIP by deferring/merging ≥3 low-priority cards with notice.",
      "zhQuizItems": [
        {
          "q": "Kanban 中 Blocked 欄最應做的是？",
          "options": [
            "空白放著等奇蹟",
            "寫明阻礙與需要誰處理",
            "直接標 Done 安慰自己",
            "刪除該任務假裝沒發生"
          ],
          "answer": 1,
          "explain": "阻礙可見才能解。"
        },
        {
          "q": "設定優先序時應避免？",
          "options": [
            "分辨 P0／P1／P2",
            "全部標成最高優先",
            "對齊截止與依賴",
            "每週重審"
          ],
          "answer": 1,
          "explain": "全部都急等於沒有優先序。"
        },
        {
          "q": "AI 更新任務進度時不可？",
          "options": [
            "依組員提供狀態整理追蹤表",
            "在無人回報時自行標示全部完成",
            "標出缺負責人的卡",
            "提出延誤預警問題"
          ],
          "answer": 1,
          "explain": "不可捏造完成狀態。"
        }
      ],
      "enQuizItems": [
        {
          "q": "On a Kanban Blocked column you should:",
          "options": [
            "Leave it blank hoping",
            "State the blocker and who must act",
            "Mark Done for comfort",
            "Delete the task"
          ],
          "answer": 1,
          "explain": "Visible blockers enable resolution."
        },
        {
          "q": "When prioritizing, avoid:",
          "options": [
            "Using P0/P1/P2",
            "Marking everything top priority",
            "Aligning dates and dependencies",
            "Weekly re-review"
          ],
          "answer": 1,
          "explain": "If all is urgent, nothing is."
        },
        {
          "q": "AI must not when updating progress:",
          "options": [
            "Summarize statuses people reported",
            "Mark everything done with no reports",
            "Flag ownerless cards",
            "Ask slip-warning questions"
          ],
          "answer": 1,
          "explain": "Never fabricate completion."
        }
      ],
      "zhNotePrompt": "貼上本週 P0 三張卡與一則 Blocked 原因。",
      "enNotePrompt": "Paste three P0 cards and one Blocked reason.",
      "zhDeliverableChecklist": [
        "任務卡含 DoD",
        "看板欄位運作中",
        "優先序已標",
        "每週追蹤完成一次",
        "個人／團隊任務已區分"
      ],
      "enDeliverableChecklist": [
        "Cards have DoD",
        "Board columns live",
        "Priorities set",
        "One weekly review done",
        "Personal vs team separated"
      ],
      "zhScorecard": [
        "可執行",
        "優先真實",
        "阻礙可見",
        "追蹤規律",
        "無假進度"
      ],
      "enScorecard": [
        "Actionable",
        "Honest priority",
        "Visible blockers",
        "Regular tracking",
        "No fake progress"
      ],
      "resources": [
        {
          "name": "Trello",
          "url": "https://trello.com",
          "note": "Kanban 看板"
        },
        {
          "name": "Asana",
          "url": "https://asana.com",
          "note": "任務期限與責任人"
        },
        {
          "name": "ClickUp",
          "url": "https://clickup.com",
          "note": "狀態與工時追蹤"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.so",
          "note": "任務資料庫與每週檢視"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "拆卡與預警分析"
        }
      ],
      "challenge": "為小組專題建立運作中的看板，連續 7 天每日更新；提交一張每週追蹤截圖（遮敏）與一則延誤處理紀錄。",
      "id": "workplace-productivity-L9",
      "lessonKey": "workplace-productivity-L9"
    },
    {
      "icon": "☁️",
      "title": "整合完成「個人 AI 工作流程系統」",
      "description": "用 Drive／Docs／Sheets／Slides 與 AI 建立大學專題協作規範：權限、版本、註解與交接。",
      "goal": "我的小組 Workspace 協作憲章＋資料夾權限與交接示範",
      "estimatedTime": "55-75 分鐘",
      "difficulty": "中階",
      "tags": [
        "Google Workspace",
        "協作",
        "權限",
        "Chapter8"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 7,
      "chapterZh": "AI 學習生產力系統",
      "chapterEn": "AI Learning Productivity System",
      "zhTitle": "第10課：整合完成「個人 AI 工作流程系統」",
      "enTitle": "Lesson 10: Complete your personal AI workplace workflow system",
      "zhValueTip": "用 Drive／Docs／Sheets／Slides 與 AI 建立大學專題協作規範：權限、版本、註解與交接。",
      "enValueTip": "Build a university team Workspace playbook—permissions, versions, comments, and handoffs—across Drive/Docs/Sheets/Slides with AI help.",
      "zhOutcome": "我的小組 Workspace 協作憲章＋資料夾權限與交接示範",
      "enOutcome": "My Team Workspace Collaboration Charter + Folder Permission & Handoff Demo",
      "zhConcept": "大學專題失敗常因協作而非智商：檔案散落、權限錯、有人覆蓋、不知道哪份是 final。Google Workspace 生產力系統包含：單一專案資料夾、命名規則、角色權限（檢視／留言／編輯）、建議模式、版本紀錄、任務看板（可用 Sheets）、會議紀錄 Docs。AI 可協助草擬協作憲章、開會紀錄結構、分工表、風險清單；不可替整組編造進度或假資料。權限最小必要：外部連結預設受限；交作業前鎖定編輯或匯出 PDF。敏感個資不要放可公開連結。註解文化：改他人內容先留言說明；爭議用建議模式。AI 可幫你把爭執點整理成選項表，決策仍由人定。交接：負責人輪替時更新「檔案地圖」——哪個檔是真相來源（source of truth）。與前幾課整合：Word 規格、Excel 字典、PPT 主張圖都放進同一 Drive 樹，避免各做各的。完成後小組應能在 2 分鐘內找到 final 與原始資料。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。每次結束寫三行日誌：今天節省的步驟、仍易出錯的點、明天可複製到其他課程的模板動作。與同學協作時遵守最小權限與學術誠信；不要用 AI 捏造數據、進度或老師承諾。當文件、試算、投影片、雲端協作與 Email 能串成生產力閉環，你換專案也能快速啟動。資訊不足時要敢標示待補，不要為了「看起來完整」而硬編；可執行的真實系統勝過華麗空殼。此外，請把本課產出存成 raw／final：raw 保留 AI 對話與草稿，final 是核對後可繳交或可交接的版本。",
      "enConcept": "Create one project folder tree, naming rules, least-privilege sharing, suggestion mode, version truth, and handoff maps. AI drafts playbooks; humans decide and never fake progress.",
      "zhCaseStudy": "情境案例：四人不斷傳 LINE 檔，交件前三份「最終版」。後來建 Drive 專案樹＋憲章，只保留一處 final，權限分級。截止前衝突下降，助教也找得到正確檔。",
      "enCaseStudy": "A four-person team replaced LINE file chaos with a Drive tree and one source-of-truth final.",
      "zhWorkflow": [
        "建立專案資料夾樹與命名規則",
        "寫協作憲章（權限／留言／AI 使用／截止）",
        "設定分享與建議模式示範",
        "用 AI 產生會議紀錄與分工表模板",
        "做交接檔案地圖演練"
      ],
      "enWorkflow": [
        "Build folder tree and naming rules",
        "Write a collaboration charter",
        "Demo sharing + suggestion mode",
        "Generate meeting notes and task templates with AI",
        "Rehearse a handoff file map"
      ],
      "zhCommonMistakes": [
        "到處開放編輯連結",
        "多個 final 並存",
        "不留言直接大改",
        "用 AI 謊報進度"
      ],
      "enCommonMistakes": [
        "Anyone-with-link edit",
        "Multiple competing finals",
        "Silent overwrites",
        "AI-faked progress"
      ],
      "zhExcellentExample": "優秀協作：一樹資料夾、一處 final、憲章可見、權限正確、交接地圖清楚。",
      "enExcellentExample": "Strong collaboration has one tree, one final, a visible charter, correct permissions, and a clear handoff map.",
      "zhPrompt": "【Prompt 1｜Workspace 協作憲章草稿】\n專案：［ ］；人數：［ ］；工具：Drive／Docs／Sheets／Slides\n已知問題：\n（貼上）\n請草擬協作憲章：資料夾結構、命名、權限、建議模式規則、AI 使用界線、截止前鎖定流程。標出需全組確認的決策點；不要假裝已投票通過。",
      "enPrompt": "[Prompt 1 | Collaboration Charter Draft] Propose folder/naming/permissions/AI boundaries and mark decisions needing team confirmation.",
      "zhCoachPrompt": "【Prompt 2｜會議紀錄與分工表】\n會議原始筆記：\n（貼上）\n請整理成：決議、待辦（負責人／截止）、風險、下次會議前必做。不要發明出席者沒說的承諾；不清楚處列「待確認」。",
      "enCoachPrompt": "[Prompt 2 | Notes & Tasks] Turn raw notes into decisions, owners/deadlines, risks, and pre-work—no invented commitments.",
      "zhFeedbackPrompt": "【Prompt 3｜權限與 final 風險審查】\n目前分享設定與檔案列表描述：\n（貼上）\n請指出外洩／覆蓋／找錯檔風險，給修復步驟。資訊不足請追問，不要假設我已設好限制連結。",
      "enFeedbackPrompt": "[Prompt 3 | Permission & Final Risk Review] Flag leak/overwrite/wrong-file risks and fixes; ask when sharing details are missing.",
      "zhExample": "結構：00_管理／01_資料／02_文稿／03_簡報／99_final。｜權限：組員編輯、同學檢視。｜交件前：鎖定＋匯出 PDF。",
      "enExample": "A numbered Drive tree with edit for teammates, view for peers, and lock+PDF before submit.",
      "zhPractice": "為真實小組專案建資料夾樹。；完成協作憲章 v1。；示範建議模式與版本。；Challenge：模擬負責人請假，另一人只靠檔案地圖在 5 分鐘內找到 final 與原始資料。",
      "enPractice": "Build a real project folder tree.；Write charter v1.；Demo suggestion mode/version history.；Challenge: a 5-minute handoff drill to find final and source data.",
      "zhQuizItems": [
        {
          "q": "小組協作最應避免的是？",
          "options": [
            "單一專案資料夾與命名規則",
            "同時存在多個互斥「最終版」且權限混亂",
            "使用建議模式討論修改",
            "交件前鎖定"
          ],
          "answer": 1,
          "explain": "多 final＋亂權限是交件災難主因。"
        },
        {
          "q": "對外分享連結時較安全的預設是？",
          "options": [
            "任何人可編輯",
            "最小必要權限，避免公開可編輯",
            "把個資放在公開資料夾無妨",
            "不需要資料夾"
          ],
          "answer": 1,
          "explain": "最小權限原則。"
        },
        {
          "q": "AI 在協作中的合適角色是？",
          "options": [
            "替小組捏造進度報告交差",
            "草擬憲章、整理會議待辦，決策與事實仍由人確認",
            "自動覆蓋他人段落不必說明",
            "取消所有權限設定"
          ],
          "answer": 1,
          "explain": "AI 輔助整理，不造假、不擅自覆蓋。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Team collaboration should most avoid:",
          "options": [
            "One project folder and naming rules",
            "Multiple conflicting finals with messy permissions",
            "Suggestion mode discussions",
            "Locking before submit"
          ],
          "answer": 1,
          "explain": "Competing finals plus bad permissions cause submit disasters."
        },
        {
          "q": "Safer default for sharing links:",
          "options": [
            "Anyone can edit",
            "Least privilege; avoid public edit links",
            "Public PII is fine",
            "Folders unnecessary"
          ],
          "answer": 1,
          "explain": "Least privilege."
        },
        {
          "q": "Appropriate AI role in collaboration?",
          "options": [
            "Fabricate progress reports",
            "Draft charters and task lists while humans confirm facts",
            "Silently overwrite others",
            "Remove all permissions"
          ],
          "answer": 1,
          "explain": "AI assists; humans own truth and edits."
        }
      ],
      "zhNotePrompt": "貼上資料夾樹與憲章中的 AI 使用界線、交件鎖定規則。",
      "enNotePrompt": "Paste your folder tree plus AI boundaries and pre-submit lock rules from the charter.",
      "zhDeliverableChecklist": [
        "專案資料夾樹完成",
        "協作憲章 v1",
        "權限設定正確",
        "會議／分工模板可用",
        "交接演練通過"
      ],
      "enDeliverableChecklist": [
        "Folder tree ready",
        "Charter v1 done",
        "Permissions correct",
        "Meeting/task templates ready",
        "Handoff drill passed"
      ],
      "zhScorecard": [
        "單一真相來源",
        "權限安全",
        "可交接",
        "溝通可追溯",
        "AI 界線清楚"
      ],
      "enScorecard": [
        "Single source of truth",
        "Safe permissions",
        "Handoff-ready",
        "Traceable comms",
        "Clear AI boundaries"
      ],
      "resources": [
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "專案資料夾與分享權限"
        },
        {
          "name": "Google Docs",
          "url": "https://docs.google.com",
          "note": "建議模式與會議紀錄"
        },
        {
          "name": "Google Sheets",
          "url": "https://sheets.google.com",
          "note": "分工表與進度板"
        },
        {
          "name": "Google Slides",
          "url": "https://slides.google.com",
          "note": "共編簡報"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "憲章與會議整理草稿"
        }
      ],
      "challenge": "與至少一名同學實際建立共用專案資料夾並簽署（同意）協作憲章；截圖權限設定（遮敏）與 final 位置說明。",
      "id": "workplace-productivity-L10",
      "lessonKey": "workplace-productivity-L10"
    }
  ],
  "startup-automation": [
    {
      "id": "startup-automation-L1",
      "lessonKey": "startup-automation-L1",
      "zhTitle": "第1課：用 AI 定義真實問題與市場機會",
      "enTitle": "Lesson 1: Use AI to define a real problem and market opportunity",
      "zhConcept": "創業從問題開始，不是從技術展示開始。寫清楚：目標使用者是誰、在什麼情境痛、現在怎麼湊合、你的切入點為何可能更好。AI 可幫你把觀察整理成問題陳述並設計驗證；不可捏造訪談結論或市場規模數字。\n\n本課只做問題與機會定義，為後續使用者訪談與商業模式鋪路。",
      "enConcept": "Startups begin with a problem statement: who, context, current alternatives, and why your wedge might win. AI can structure observations and suggest tests; it must not invent interview findings or market figures.",
      "zhPrompt": "請擔任創業教練。我觀察到的現象：【】。我以為的使用者：【】。我目前沒有的證據：【】。\n\n請幫我寫問題定義、列出關鍵假設、設計最小驗證，並指出我哪裡可能在自嗨。禁止編造市場規模與假訪談。",
      "enPrompt": "Act as a startup coach. Phenomenon: []. Assumed user: []. Missing evidence: []. Write a problem definition, key hypotheses, and a minimum test; call out possible self-deception. Invent no market size or interviews.",
      "zhExample": "弱：「大家都需要 AI」。強：「大學社團排班者在活動前 3 天，平均每場花 2 小時手動改班，錯誤成本是現場缺人。」",
      "enExample": "Weak: everyone needs AI. Strong: club schedulers spend ~2 hours manually fixing shifts in the final 3 days, with no-show risk.",
      "zhPractice": "寫下觀察。；完成問題一頁。；列出 5 個假設。；設計本週最小驗證。；刪除「不做清單」裡的功能幻想。",
      "enPractice": "Write observations.；Finish the problem one-pager.；List 5 hypotheses.；Design this week’s minimum test.；Cut feature fantasies via a not-doing list.",
      "zhFeedbackPrompt": "你是一位創業教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 問題具體性\n- 使用者清楚\n- 可驗證\n- 誠實度\n- 是否聚焦創業問題\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a startup coach. Score 1-10 for: Specificity, User clarity, Testability, Honesty, Startup-problem focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "創業起點應是？",
          "options": [
            "可驗證的真實問題",
            "先做華麗功能",
            "先寫完整財報"
          ],
          "answer": 0,
          "explain": "問題先行。"
        },
        {
          "q": "最小驗證的目的？",
          "options": [
            "用最小成本檢驗假設",
            "證明你很忙",
            "取代所有訪談"
          ],
          "answer": 0,
          "explain": "檢驗。"
        },
        {
          "q": "AI 不可？",
          "options": [
            "捏造市場規模",
            "整理問題陳述",
            "設計驗證問題"
          ],
          "answer": 0,
          "explain": "禁假數據。"
        },
        {
          "q": "「不做清單」有助於？",
          "options": [
            "避免功能膨脹",
            "讓計畫越做越大",
            "逃避使用者"
          ],
          "answer": 0,
          "explain": "聚焦。"
        },
        {
          "q": "本課產出？",
          "options": [
            "問題定義一頁",
            "無關長信",
            "無關申請包"
          ],
          "answer": 0,
          "explain": "創業問題。"
        }
      ],
      "enQuizItems": [
        {
          "q": "創業起點應是？",
          "options": [
            "可驗證的真實問題",
            "先做華麗功能",
            "先寫完整財報"
          ],
          "answer": 0,
          "explain": "問題先行。"
        },
        {
          "q": "最小驗證的目的？",
          "options": [
            "用最小成本檢驗假設",
            "證明你很忙",
            "取代所有訪談"
          ],
          "answer": 0,
          "explain": "檢驗。"
        },
        {
          "q": "AI 不可？",
          "options": [
            "捏造市場規模",
            "整理問題陳述",
            "設計驗證問題"
          ],
          "answer": 0,
          "explain": "禁假數據。"
        },
        {
          "q": "「不做清單」有助於？",
          "options": [
            "避免功能膨脹",
            "讓計畫越做越大",
            "逃避使用者"
          ],
          "answer": 0,
          "explain": "聚焦。"
        },
        {
          "q": "本課產出？",
          "options": [
            "問題定義一頁",
            "無關長信",
            "無關申請包"
          ],
          "answer": 0,
          "explain": "創業問題。"
        }
      ],
      "zhOutcome": "產出問題定義一頁：誰有痛、痛多久、現有替代方案、為何現在可做、最小驗證。",
      "enOutcome": "Produce a one-page problem definition: who hurts, how often, current alternatives, why now, and a minimum test.",
      "zhValueTip": "用證據定義真實問題與市場機會，而不是先發明功能。",
      "enValueTip": "Define a real problem and market opportunity with evidence—before inventing features.",
      "zhCaseStudy": "兩位學生想做「全能校園 App」。收斂後問題改成：社團幹部在活動前 72 小時，用試算表＋群組訊息協調班次，常發生漏人。現有替代是人工表格。最小驗證：訪談 8 位幹部，看他們是否願意為「班次衝突自動提醒」付費或至少持續使用。",
      "enCaseStudy": "An “everything campus app” narrowed to club officers coordinating shifts 72 hours before events via spreadsheets and chats—validated by interviewing eight officers about conflict reminders.",
      "zhExcellentExample": "問題一頁含使用者、情境、頻率、代價、替代方案、假設、最小驗證與「不做清單」。",
      "enExcellentExample": "One-pager with user, context, frequency, cost, alternatives, hypotheses, minimum test, and a not-doing list.",
      "zhWorkflow": [
        "記錄現象",
        "寫問題陳述",
        "列假設",
        "設計最小驗證",
        "明確不做什么"
      ],
      "enWorkflow": [
        "Capture phenomenon",
        "Write problem statement",
        "List hypotheses",
        "Design minimum test",
        "Define not-doing"
      ],
      "zhCommonMistakes": [
        "先做功能再找問題",
        "捏造市場數字",
        "把朋友客套當需求",
        "問題大到無法驗證",
        "不做最小驗證就開發"
      ],
      "enCommonMistakes": [
        "Features before problem",
        "Fake market numbers",
        "Polite friends as demand",
        "Untestably broad problems",
        "Building before a minimum test"
      ],
      "zhDeliverableChecklist": [
        "問題一頁",
        "假設清單",
        "最小驗證",
        "不做清單",
        "無假數據"
      ],
      "enDeliverableChecklist": [
        "Problem one-pager",
        "Hypotheses",
        "Minimum test",
        "Not-doing list",
        "No fake data"
      ],
      "zhScorecard": [
        "問題具體性",
        "使用者清楚",
        "可驗證",
        "誠實度",
        "是否聚焦創業問題"
      ],
      "enScorecard": [
        "Specificity",
        "User clarity",
        "Testability",
        "Honesty",
        "Startup-problem focus"
      ],
      "zhNotePrompt": "貼上問題定義一頁與最小驗證計畫。",
      "enNotePrompt": "Paste your problem one-pager and minimum test plan.",
      "zhCoachPrompt": "請挑戰我的問題定義是否夠具體、是否可驗證，並指出自嗨之處。",
      "enCoachPrompt": "Challenge whether my problem is specific and testable; call out self-deception.",
      "title": "用 AI 定義真實問題與市場機會",
      "description": "用證據定義真實問題與市場機會，而不是先發明功能。",
      "goal": "產出問題定義一頁：誰有痛、痛多久、現有替代方案、為何現在可做、最小驗證。"
    },
    {
      "id": "startup-automation-L2",
      "lessonKey": "startup-automation-L2",
      "zhTitle": "第2課：分析目標使用者與痛點，設計訪談問題",
      "enTitle": "Lesson 2: Analyze target users and design interview questions",
      "zhConcept": "在創業早期，訪談是為了理解情境與現有解法，不是推銷你的点子。好問題問行為與故事：「上次發生時你怎麼做？」而不是「你會不會用我的 App？」。AI 可幫你把痛點轉成訪綱並標記誘導題；不可寫假訪談紀錄。",
      "enConcept": "Early interviews learn context and current workarounds—not pitch your idea. Ask behavior stories, not “Would you use my app?” AI can draft guides and flag leading questions; it must not fabricate transcripts.",
      "zhPrompt": "請擔任使用者研究教練。問題假設：【】。目標使用者假設：【】。\n\n請產出訪談目標、招募條件、8–12 題訪綱（標誘導風險）、每題追問，以及訪談後整理模板。禁止生成假訪談回答。",
      "enPrompt": "Act as a user-research coach. Problem hypothesis: []. User hypothesis: []. Produce goals, recruiting criteria, 8–12 questions with leading-risk tags and probes, plus a notes template. Invent no answers.",
      "zhExample": "弱問「你覺得我們的智慧排班很棒吧？」。強問「上一次排班出錯時，你第一個做了什麼？結果如何？」",
      "enExample": "Weak: isn’t our smart scheduler great? Strong: last time a schedule broke, what did you do first, and what happened?",
      "zhPractice": "寫使用者假設。；產出訪綱。；刪誘導題。；實際訪 3 人（可線上）。；用模板整理，更新痛點假設。",
      "enPractice": "Write user hypotheses.；Draft the guide.；Remove leading items.；Interview 3 people.；Synthesize and update pain hypotheses.",
      "zhFeedbackPrompt": "你是一位使用者研究教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 問題品質\n- 非誘導\n- 可執行\n- 洞見更新\n- 創業使用者焦點\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a user-research coach. Score 1-10 for: Question quality, Non-leading, Executability, Insight updates, User focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "早期訪談目的是？",
          "options": [
            "理解行為與現有解法",
            "當場成交",
            "收集假好評"
          ],
          "answer": 0,
          "explain": "學習。"
        },
        {
          "q": "較好的問題型態？",
          "options": [
            "上次你怎麼做",
            "你會買嗎（誘導）",
            "我們很棒吧"
          ],
          "answer": 0,
          "explain": "行為故事。"
        },
        {
          "q": "AI 不可？",
          "options": [
            "捏造逐字稿",
            "標記誘導題",
            "整理訪綱"
          ],
          "answer": 0,
          "explain": "禁假資料。"
        },
        {
          "q": "訪完最重要？",
          "options": [
            "更新痛點假設",
            "立刻寫完整程式",
            "忽略矛盾資訊"
          ],
          "answer": 0,
          "explain": "學習迴路。"
        },
        {
          "q": "本課產出？",
          "options": [
            "訪綱與痛點假設",
            "財報",
            "無關講義"
          ],
          "answer": 0,
          "explain": "使用者研究。"
        }
      ],
      "enQuizItems": [
        {
          "q": "早期訪談目的是？",
          "options": [
            "理解行為與現有解法",
            "當場成交",
            "收集假好評"
          ],
          "answer": 0,
          "explain": "學習。"
        },
        {
          "q": "較好的問題型態？",
          "options": [
            "上次你怎麼做",
            "你會買嗎（誘導）",
            "我們很棒吧"
          ],
          "answer": 0,
          "explain": "行為故事。"
        },
        {
          "q": "AI 不可？",
          "options": [
            "捏造逐字稿",
            "標記誘導題",
            "整理訪綱"
          ],
          "answer": 0,
          "explain": "禁假資料。"
        },
        {
          "q": "訪完最重要？",
          "options": [
            "更新痛點假設",
            "立刻寫完整程式",
            "忽略矛盾資訊"
          ],
          "answer": 0,
          "explain": "學習迴路。"
        },
        {
          "q": "本課產出？",
          "options": [
            "訪綱與痛點假設",
            "財報",
            "無關講義"
          ],
          "answer": 0,
          "explain": "使用者研究。"
        }
      ],
      "zhOutcome": "產出使用者假設畫像、痛點假設，以及 8–12 題訪談大綱（含追問）。",
      "enOutcome": "Produce a provisional user persona, pain hypotheses, and an 8–12 question interview guide with probes.",
      "zhValueTip": "分析目標使用者與痛點，設計可執行的訪談問題。",
      "enValueTip": "Analyze target users and pains, then design executable interview questions.",
      "zhCaseStudy": "團隊假設「學生買二手書很痛」。訪綱改問上次買書流程、花多久、在哪卡住、如何決定信任賣家。8 次訪談後發現真正痛點常是「面交時間協調」而非「找不到書」，產品方向因此修正。",
      "enCaseStudy": "Interviews about used textbooks revealed meetup coordination—not discovery—as the frequent pain, redirecting the product.",
      "zhExcellentExample": "畫像標明假設；訪綱含冰破、情境、行為、現有解法、代價、收尾；每題有追問；含招募條件與記錄方式。",
      "enExcellentExample": "Persona marked as hypothesis; guide covers opener, context, behavior, workarounds, costs, close; probes; recruiting criteria; note-taking method.",
      "zhWorkflow": [
        "寫使用者假設",
        "設計訪綱",
        "檢查誘導",
        "進行訪談",
        "整理洞見"
      ],
      "enWorkflow": [
        "Draft user hypothesis",
        "Design guide",
        "Check leading items",
        "Interview",
        "Synthesize insights"
      ],
      "zhCommonMistakes": [
        "一開場就推銷產品",
        "只問會不會用",
        "誘導題",
        "假造訪談紀錄",
        "訪完不整理假設"
      ],
      "enCommonMistakes": [
        "Pitching first",
        "Only asking would-you-use",
        "Leading questions",
        "Fake transcripts",
        "No synthesis"
      ],
      "zhDeliverableChecklist": [
        "畫像假設",
        "訪綱",
        "追問",
        "招募條件",
        "整理模板"
      ],
      "enDeliverableChecklist": [
        "Persona hypothesis",
        "Guide",
        "Probes",
        "Recruiting",
        "Synthesis template"
      ],
      "zhScorecard": [
        "問題品質",
        "非誘導",
        "可執行",
        "洞見更新",
        "創業使用者焦點"
      ],
      "enScorecard": [
        "Question quality",
        "Non-leading",
        "Executability",
        "Insight updates",
        "User focus"
      ],
      "zhNotePrompt": "貼上訪綱與至少一次訪談整理。",
      "enNotePrompt": "Paste your guide and at least one interview synthesis.",
      "zhCoachPrompt": "請檢查訪綱是否誘導或太像問卷推銷，並改寫成行為問題。",
      "enCoachPrompt": "Check for leading or pitchy questions and rewrite toward behavior stories.",
      "title": "分析目標使用者與痛點，設計訪談問題",
      "description": "分析目標使用者與痛點，設計可執行的訪談問題。",
      "goal": "產出使用者假設畫像、痛點假設，以及 8–12 題訪談大綱（含追問）。"
    },
    {
      "id": "startup-automation-L3",
      "lessonKey": "startup-automation-L3",
      "zhTitle": "第3課：建立商業模式草稿：誰付錢、為何付錢",
      "enTitle": "Lesson 3: Draft a business model: who pays and why",
      "zhConcept": "商業模式回答「誰以什麼理由付錢」。學生創業常卡在免費愛用但無人付費。先寫清：付費者是否等於使用者、價值何時發生、競品／替代如何收費、你的第一筆錢可能從哪來。AI 可幫你列出模式選項與假設；不可編造營收預測當事實。",
      "enConcept": "A model states who pays and why. Separate users from payers, timing of value, alternatives’ pricing, and a first-revenue path. AI can list options and hypotheses—not fabricated forecasts as facts.",
      "zhPrompt": "請擔任商業模式教練。問題：【】。使用者：【】。可能付費者：【】。現有替代：【】。\n\n請提出 2–3 種收費構想、付費動機、關鍵假設與最小驗證。禁止把虛構營收當已發生事實。",
      "enPrompt": "Act as a business-model coach. Problem: []. User: []. Possible payer: []. Alternatives: []. Propose 2–3 pricing ideas, willingness-to-pay rationale, hypotheses, and minimum tests. Treat no invented revenue as fact.",
      "zhExample": "弱：「靠廣告月入十萬」。強：「系學會每學期付 N 元取得衝突提醒與出勤匯出；若 10 個社團中有 3 個願意預購才進入開發。」",
      "enExample": "Weak: ads will make $10k/month. Strong: associations pay per semester for conflict alerts and attendance export—build only if 3/10 prepay interest.",
      "zhPractice": "寫付費者與使用者是否同一人。；草擬 2 種收費。；列出成本粗項。；設計付費驗證。；更新「還不知道」清單。",
      "enPractice": "Clarify user vs payer.；Draft 2 pricing ideas.；List rough costs.；Design a payment test.；Update unknown list.",
      "zhFeedbackPrompt": "你是一位商業模式教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 清楚度\n- 付費邏輯\n- 可驗證\n- 誠實\n- 創業焦點\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a business-model coach. Score 1-10 for: Clarity, Payment logic, Testability, Honesty, Startup focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "商業模式核心問題？",
          "options": [
            "誰為何付錢",
            "Logo 好不好看",
            "程式用什麼語言"
          ],
          "answer": 0,
          "explain": "付費邏輯。"
        },
        {
          "q": "使用者與付費者？",
          "options": [
            "可能不同，要分開寫",
            "永遠同一人",
            "不重要"
          ],
          "answer": 0,
          "explain": "常分離。"
        },
        {
          "q": "營收預測應？",
          "options": [
            "標成假設待驗證",
            "當已發生事實",
            "完全不談錢"
          ],
          "answer": 0,
          "explain": "假設。"
        },
        {
          "q": "最小驗證可包含？",
          "options": [
            "預購意向或小額付費測試",
            "直接宣稱市佔第一",
            "不做就上線"
          ],
          "answer": 0,
          "explain": "真實驗證。"
        },
        {
          "q": "本課產出？",
          "options": [
            "模式草稿",
            "無關文件包",
            "無關文件包"
          ],
          "answer": 0,
          "explain": "商業模式。"
        }
      ],
      "enQuizItems": [
        {
          "q": "商業模式核心問題？",
          "options": [
            "誰為何付錢",
            "Logo 好不好看",
            "程式用什麼語言"
          ],
          "answer": 0,
          "explain": "付費邏輯。"
        },
        {
          "q": "使用者與付費者？",
          "options": [
            "可能不同，要分開寫",
            "永遠同一人",
            "不重要"
          ],
          "answer": 0,
          "explain": "常分離。"
        },
        {
          "q": "營收預測應？",
          "options": [
            "標成假設待驗證",
            "當已發生事實",
            "完全不談錢"
          ],
          "answer": 0,
          "explain": "假設。"
        },
        {
          "q": "最小驗證可包含？",
          "options": [
            "預購意向或小額付費測試",
            "直接宣稱市佔第一",
            "不做就上線"
          ],
          "answer": 0,
          "explain": "真實驗證。"
        },
        {
          "q": "本課產出？",
          "options": [
            "模式草稿",
            "無關文件包",
            "無關文件包"
          ],
          "answer": 0,
          "explain": "商業模式。"
        }
      ],
      "zhOutcome": "產出商業模式草稿：客群、價值主張、付費動機、收入假設、成本粗估與待驗證點。",
      "enOutcome": "Produce a business-model draft: segment, value proposition, willingness-to-pay rationale, revenue hypothesis, rough costs, and open questions.",
      "zhValueTip": "草稿化誰付錢、為何付錢、你如何交付價值。",
      "enValueTip": "Draft who pays, why they pay, and how you deliver value.",
      "zhCaseStudy": "工具幫社團排班，使用者是幹部，但付費可能是系學會預算。團隊改成「學期方案＋管理後台」，先用預購意向驗證，而不是宣稱上線三個月營收破百萬。",
      "enCaseStudy": "A scheduling tool’s users were officers while payers might be student associations—so the team tested a semester plan with admin value via purchase intent, not fantasy revenue.",
      "zhExcellentExample": "一頁模式含客群、價值、收費點、替代方案、成本粗項、關鍵假設與驗證方式。",
      "enExcellentExample": "One-pager covering segment, value, charge point, alternatives, rough costs, key hypotheses, and how to test them.",
      "zhWorkflow": [
        "區分使用者與付費者",
        "寫價值主張",
        "草擬收費",
        "列假設",
        "設計驗證"
      ],
      "enWorkflow": [
        "Separate user/payer",
        "Write value prop",
        "Draft pricing",
        "List hypotheses",
        "Design tests"
      ],
      "zhCommonMistakes": [
        "免費使用者＝付費者的錯誤預設",
        "虛構營收曲線",
        "不看替代方案",
        "成本完全不估",
        "用商業模式逃避做驗證"
      ],
      "enCommonMistakes": [
        "Assuming users pay",
        "Fake revenue curves",
        "Ignoring alternatives",
        "Zero cost thinking",
        "Using the canvas to avoid tests"
      ],
      "zhDeliverableChecklist": [
        "客群",
        "價值",
        "收費構想",
        "假設",
        "驗證"
      ],
      "enDeliverableChecklist": [
        "Segment",
        "Value",
        "Pricing idea",
        "Hypotheses",
        "Test"
      ],
      "zhScorecard": [
        "清楚度",
        "付費邏輯",
        "可驗證",
        "誠實",
        "創業焦點"
      ],
      "enScorecard": [
        "Clarity",
        "Payment logic",
        "Testability",
        "Honesty",
        "Startup focus"
      ],
      "zhNotePrompt": "貼上商業模式草稿與驗證計畫。",
      "enNotePrompt": "Paste your business-model draft and test plan.",
      "zhCoachPrompt": "請挑戰我的付費假設是否薄弱，並建議更小的驗證。",
      "enCoachPrompt": "Challenge weak willingness-to-pay assumptions and suggest a smaller test.",
      "title": "建立商業模式草稿：誰付錢、為何付錢",
      "description": "草稿化誰付錢、為何付錢、你如何交付價值。",
      "goal": "產出商業模式草稿：客群、價值主張、付費動機、收入假設、成本粗估與待驗證點。"
    },
    {
      "icon": "🧱",
      "title": "規劃 MVP：最小可驗證產品與功能取捨",
      "description": "把需求收成 MVP：必要／非必要功能、MoSCoW 優先序、使用者流程、里程碑、風險、測試與成功指標。",
      "goal": "我的 MVP 計畫書（功能優先序／流程／里程碑／成功指標）",
      "estimatedTime": "60-80 分鐘",
      "difficulty": "中階",
      "tags": [
        "MVP",
        "MoSCoW",
        "里程碑",
        "Chapter10"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 9,
      "chapterZh": "AI 個人專案與作品集",
      "chapterEn": "AI Personal Projects and Portfolio",
      "zhTitle": "第4課：規劃 MVP：最小可驗證產品與功能取捨",
      "enTitle": "Lesson 4: Plan an MVP with minimal validation and feature tradeoffs",
      "zhValueTip": "把需求收成 MVP：必要／非必要功能、MoSCoW 優先序、使用者流程、里程碑、風險、測試與成功指標。",
      "enValueTip": "Turn the brief into an MVP with Must/Should/Could/Won’t, user flows, milestones, risks, tests, and success metrics.",
      "zhOutcome": "我的 MVP 計畫書（功能優先序／流程／里程碑／成功指標）",
      "enOutcome": "My MVP Plan (priorities/flows/milestones/success metrics)",
      "zhConcept": "MVP（Minimum Viable Product）是「能驗證核心價值的最小可演示版本」，不是簡陋交差，也不是完整產品。先列功能，再用 MoSCoW：Must（沒有就不算解決問題）、Should（重要可下一版）、Could（加分）、Won't（本輪明確不做）。必要功能對齊價值主張；非必要常是登入系統、華麗動畫、多主題、完整後台——對大學生時程通常是 Won't。使用者流程用 5-8 步寫「從進入到完成核心任務」；每步對應畫面或操作。功能拆解成可完成的工作包，排入里程碑與時程。風險：資料取得、API 額度、技術不會、時間被期中考吃掉。每項風險要有備案（改手動、改靜態示意、縮小 Must）。測試方式：自己走完流程、找 2-3 位目標使用者觀察（可非正式）、檢查成功指標。成功指標必須可觀察：完成任務人數、錯誤次數、時間，不可捏造。AI 可協助拆功能與排程，但不可把 Won't 寫成已完成，不可發明測試結果。完整 MVP 案例：排課衝突檢查——Must：輸入課表＋規則檢查＋衝突列表；Should：匯出；Could：美化；Won't：自動搶課。里程碑：規則表→原型→3 人測試→演示。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。",
      "enConcept": "Define Must/Should/Could/Won’t, map a short user flow, schedule milestones, list risks/backups, and define observable success metrics. AI plans; you never mark unfinished work as done or invent test results.",
      "zhCaseStudy": "完整 MVP 規劃案例：設計系學生想做「校園失物平台」。第一版含聊天、地圖、積分。收成 MVP 後 Must 只留發布／搜尋／聯絡方式表單；Won't 含即時聊天。兩週內上線靜態＋表單演示，使用者測試發現標題關鍵字最重要，於是調整 Should。作品集寫得出「為何不做聊天」的取捨，評審反而加分。",
      "enCaseStudy": "A lost-and-found idea survived by cutting chat/map/points from Must, shipping a testable post/search/contact MVP.",
      "zhWorkflow": [
        "從需求書列出功能候選",
        "用 MoSCoW 分級並寫 Won't",
        "畫使用者流程與功能拆解",
        "排里程碑／風險／測試／成功指標",
        "請 AI 檢查範圍膨脹，人工鎖定 MVP"
      ],
      "enWorkflow": [
        "List feature candidates from the brief",
        "Apply MoSCoW including Won’t",
        "Draft user flow and work packages",
        "Add milestones, risks, tests, metrics",
        "AI scope-check; human lock the MVP"
      ],
      "zhCommonMistakes": [
        "MVP＝全部功能做一半",
        "沒有 Won't",
        "成功指標靠感覺",
        "把計畫寫成已完成成果"
      ],
      "enCommonMistakes": [
        "Half-building everything",
        "No Won’t list",
        "Vibes-only success",
        "Writing plans as shipped outcomes"
      ],
      "zhExcellentExample": "優秀 MVP 計畫：Must 極少且對齊價值、流程可走完、里程碑可驗、風險有備案、指標可觀察、未完成不裝完成。",
      "enExcellentExample": "A strong MVP plan has few Musts tied to value, a completable flow, testable milestones, backed risks, observable metrics, and honest status.",
      "zhPrompt": "【Prompt 1｜MVP 與 MoSCoW】\n需求書：\n（貼上）\n可用天數：［ ］\n請提出 Must／Should／Could／Won't，並解釋每個 Must 如何服務價值主張。不要把理想完整版當成 MVP；標示建議；若時間明顯不夠，提出刪减方案而非假裝做得到。",
      "enPrompt": "[Prompt 1 | MVP MoSCoW] Propose Must/Should/Could/Won’t tied to value; don’t pretend a full product fits the days available.",
      "zhCoachPrompt": "【Prompt 2｜使用者流程、里程碑與成功指標】\nMust 功能：\n（貼上）\n請輸出：8 步內使用者流程、功能拆解、里程碑時程、測試方式、成功指標。指標必須可觀察；不可捏造基線數據；缺少測量方式就列待確認。",
      "enCoachPrompt": "[Prompt 2 | Flow, Milestones, Metrics] Produce ≤8-step flow, breakdown, milestones, tests, observable metrics—no invented baselines.",
      "zhFeedbackPrompt": "【Prompt 3｜風險與範圍膨脹檢查】\nMVP 計畫：\n（貼上）\n請指出範圍膨脹、高風險項、測試缺口，並給備案。不要把未做功能寫成已完成；區分事實計畫與推測。",
      "enFeedbackPrompt": "[Prompt 3 | Scope & Risk QA] Flag creep, risks, and test gaps with backups; never describe unfinished features as done.",
      "zhExample": "Must：衝突檢查。｜Won't：自動搶課。｜流程：貼課表→選規則→看衝突→匯出。｜成功指標：3/3 測試者能在 10 分鐘內找出真實衝堂。",
      "enExample": "A conflict-checker MVP with a clear Won’t, short flow, and an observable 10-minute success metric.",
      "zhPractice": "完成 MoSCoW 表。；畫使用者流程與里程碑。；定義測試與成功指標。；Challenge：刪掉至少兩個你很想做但非 Must 的功能，寫下刪除理由以保護時程。",
      "enPractice": "Finish MoSCoW.；Draw flow and milestones.；Define tests/metrics.；Challenge: cut ≥2 tempting non-Must features and justify the cuts.",
      "zhQuizItems": [
        {
          "q": "MVP 的正確理解是？",
          "options": [
            "把所有功能都做一點點",
            "用最小集合驗證核心價值且可演示",
            "一定要上線百萬用戶",
            "沒有成功指標也沒關係"
          ],
          "answer": 1,
          "explain": "MVP 是可驗證核心價值的最小版本。"
        },
        {
          "q": "MoSCoW 中 Won't 的作用是？",
          "options": [
            "永遠不做任何改進",
            "本輪明確不做，防止範圍膨脹",
            "可隨便忽略",
            "表示功能已完成"
          ],
          "answer": 1,
          "explain": "Won't 保護焦點與時程。"
        },
        {
          "q": "成功指標應？",
          "options": [
            "用捏造的成長曲線美化",
            "可觀察、可在測試中檢查",
            "越模糊越好聽",
            "由 AI 保證達標"
          ],
          "answer": 1,
          "explain": "指標必須可觀察且誠實。"
        }
      ],
      "enQuizItems": [
        {
          "q": "MVP means:",
          "options": [
            "Building a bit of everything",
            "The smallest demoable set that validates core value",
            "Must reach a million users",
            "Metrics optional"
          ],
          "answer": 1,
          "explain": "MVP validates core value minimally."
        },
        {
          "q": "Won’t in MoSCoW is for:",
          "options": [
            "Never improving again",
            "Explicitly excluding items this round to stop creep",
            "Ignoring freely",
            "Marking features done"
          ],
          "answer": 1,
          "explain": "Won’t protects focus."
        },
        {
          "q": "Success metrics should be:",
          "options": [
            "Fabricated growth curves",
            "Observable and checkable in tests",
            "As vague as possible",
            "AI-guaranteed"
          ],
          "answer": 1,
          "explain": "Metrics must be observable and honest."
        }
      ],
      "zhNotePrompt": "列出 Must 三項、Won't 兩項，以及一個可觀察成功指標。",
      "enNotePrompt": "List three Musts, two Won’ts, and one observable success metric.",
      "zhDeliverableChecklist": [
        "MoSCoW 完成",
        "使用者流程可走完",
        "里程碑含日期",
        "風險備案齊",
        "成功指標可觀察"
      ],
      "enDeliverableChecklist": [
        "MoSCoW done",
        "Completable user flow",
        "Dated milestones",
        "Risk backups ready",
        "Observable metrics set"
      ],
      "zhScorecard": [
        "Must 對齊價值",
        "範圍受控",
        "流程清楚",
        "可測試",
        "狀態誠實"
      ],
      "enScorecard": [
        "Musts fit value",
        "Scope controlled",
        "Clear flow",
        "Testable",
        "Honest status"
      ],
      "resources": [
        {
          "name": "Notion",
          "url": "https://www.notion.so",
          "note": "MVP 計畫與里程碑"
        },
        {
          "name": "Figma",
          "url": "https://www.figma.com",
          "note": "使用者流程與畫面草圖"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "MoSCoW 與風險提問"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "計畫書版本管理"
        },
        {
          "name": "Canva",
          "url": "https://www.canva.com",
          "note": "一頁 MVP 海報（可選）"
        }
      ],
      "challenge": "鎖定一份兩週可完成的 MVP 計畫：含 MoSCoW、流程、里程碑與成功指標；請同學檢查是否仍有範圍膨脹。",
      "id": "startup-automation-L4",
      "lessonKey": "startup-automation-L4"
    },
    {
      "id": "startup-automation-L5",
      "lessonKey": "startup-automation-L5",
      "zhTitle": "第5課：用 AI 拆解產品規格與開發任務",
      "enTitle": "Lesson 5: Use AI to break down product specs and build tasks",
      "zhConcept": "規格把「問題」變成「這週能做完的交付」。寫使用者故事、成功標準、非目標，再拆成可估計的任務。AI 可幫你拆任務與找遺漏；不可把未驗證的大功能塞進 MVP。工具可用來管理任務，但本課焦點是產品規格能力，不是工具操作教學本身。",
      "enConcept": "Specs turn problems into shippable weekly delivery: stories, success criteria, non-goals, and estimable tasks. AI can split work and spot gaps; it must not inflate the MVP with unvalidated features.",
      "zhPrompt": "請擔任產品規格教練。已驗證問題：【】。目標使用者：【】。本週可用工時：【】。\n\n請輸出 MVP 範圍、非目標、使用者故事、任務拆解與完成定義，並指出過大項目。不要加入未驗證的大功能。",
      "enPrompt": "Act as a product-spec coach. Validated problem: []. User: []. Hours this week: []. Output MVP scope, non-goals, stories, tasks, done definitions; flag oversized items. Add no unvalidated mega-features.",
      "zhExample": "弱：「做完整平台」。強：「社團管理員可上傳班次表，系統標出同一人同一時段重複班次，並匯出 CSV。」",
      "enExample": "Weak: build the full platform. Strong: admin uploads shifts, system flags same-person overlaps, export CSV.",
      "zhPractice": "寫 MVP 一頁。；列出非目標。；拆 8–15 個任務。；標完成定義。；刪掉本週做不完的項目。",
      "enPractice": "Write MVP one-pager.；List non-goals.；Split 8–15 tasks.；Add done definitions.；Cut what won’t fit this week.",
      "zhFeedbackPrompt": "你是一位產品規格教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 範圍紀律\n- 可交付性\n- 清楚度\n- 任務品質\n- 產品焦點\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a product spec coach. Score 1-10 for: Scope discipline, Shipability, Clarity, Task quality, Product focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "MVP 規格最該有？",
          "options": [
            "範圍、非目標與完成定義",
            "只有靈感關鍵字",
            "完整財報"
          ],
          "answer": 0,
          "explain": "可交付。"
        },
        {
          "q": "未驗證大功能應？",
          "options": [
            "放入非目標",
            "硬塞進本週",
            "假裝已做完"
          ],
          "answer": 0,
          "explain": "紀律。"
        },
        {
          "q": "任務需要？",
          "options": [
            "完成定義",
            "只有動詞",
            "越多越好無優先"
          ],
          "answer": 0,
          "explain": "可檢核。"
        },
        {
          "q": "AI 適合？",
          "options": [
            "拆任務與找遺漏",
            "決定市場一定成功",
            "自動宣稱已上線"
          ],
          "answer": 0,
          "explain": "拆解輔助。"
        },
        {
          "q": "本課產出？",
          "options": [
            "規格＋任務表",
            "無關長信",
            "無關申請包資料"
          ],
          "answer": 0,
          "explain": "產品拆解。"
        }
      ],
      "enQuizItems": [
        {
          "q": "MVP 規格最該有？",
          "options": [
            "範圍、非目標與完成定義",
            "只有靈感關鍵字",
            "完整財報"
          ],
          "answer": 0,
          "explain": "可交付。"
        },
        {
          "q": "未驗證大功能應？",
          "options": [
            "放入非目標",
            "硬塞進本週",
            "假裝已做完"
          ],
          "answer": 0,
          "explain": "紀律。"
        },
        {
          "q": "任務需要？",
          "options": [
            "完成定義",
            "只有動詞",
            "越多越好無優先"
          ],
          "answer": 0,
          "explain": "可檢核。"
        },
        {
          "q": "AI 適合？",
          "options": [
            "拆任務與找遺漏",
            "決定市場一定成功",
            "自動宣稱已上線"
          ],
          "answer": 0,
          "explain": "拆解輔助。"
        },
        {
          "q": "本課產出？",
          "options": [
            "規格＋任務表",
            "無關長信",
            "無關申請包資料"
          ],
          "answer": 0,
          "explain": "產品拆解。"
        }
      ],
      "zhOutcome": "產出 MVP 規格一頁：使用者故事、範圍內／外、任務拆解與完成定義。",
      "enOutcome": "Produce a one-page MVP spec: user stories, in/out of scope, task breakdown, and done definitions.",
      "zhValueTip": "把驗證過的問題拆成產品規格與可開發任務，而不是功能願望清單。",
      "enValueTip": "Turn a validated problem into a product spec and buildable tasks—not a wish list.",
      "zhCaseStudy": "排班痛點驗證後，MVP 只做「衝突提醒＋匯出表」，不做聊天、支付、AI 自動排班。任務拆成：資料欄位、衝突規則、通知文案、匯出。每項有完成定義，一週後真的可給 3 個社團試用。",
      "enCaseStudy": "After validation, the MVP shipped conflict alerts and export only—no chat, payments, or auto-scheduling—with clear done definitions and a three-club trial.",
      "zhExcellentExample": "規格含故事、成功標準、非目標、任務表、依賴、風險；每項任務有完成定義與負責人。",
      "enExcellentExample": "Spec with stories, success criteria, non-goals, tasks, dependencies, risks; each task has a done definition and owner.",
      "zhWorkflow": [
        "確認已驗證問題",
        "定義 MVP 與非目標",
        "寫使用者故事",
        "拆任務與完成定義",
        "排本週可交付"
      ],
      "enWorkflow": [
        "Confirm validated problem",
        "Define MVP/non-goals",
        "Write stories",
        "Split tasks + done defs",
        "Schedule weekly ship"
      ],
      "zhCommonMistakes": [
        "願望清單當規格",
        "沒有非目標",
        "任務無法完成定義",
        "塞入未驗證功能",
        "不做本週可交付切割"
      ],
      "enCommonMistakes": [
        "Wish lists as specs",
        "No non-goals",
        "Tasks without done defs",
        "Unvalidated feature creep",
        "No weekly ship cut"
      ],
      "zhDeliverableChecklist": [
        "MVP 範圍",
        "非目標",
        "故事",
        "任務表",
        "完成定義"
      ],
      "enDeliverableChecklist": [
        "MVP scope",
        "Non-goals",
        "Stories",
        "Task table",
        "Done definitions"
      ],
      "zhScorecard": [
        "範圍紀律",
        "可交付性",
        "清楚度",
        "任務品質",
        "產品焦點"
      ],
      "enScorecard": [
        "Scope discipline",
        "Shipability",
        "Clarity",
        "Task quality",
        "Product focus"
      ],
      "zhNotePrompt": "貼上 MVP 規格與任務表。",
      "enNotePrompt": "Paste your MVP spec and task table.",
      "zhCoachPrompt": "請檢查規格是否過大，並幫我砍到本週可交付。",
      "enCoachPrompt": "Check whether the spec is oversized and cut it to a weekly ship.",
      "title": "用 AI 拆解產品規格與開發任務",
      "description": "把驗證過的問題拆成產品規格與可開發任務，而不是功能願望清單。",
      "goal": "產出 MVP 規格一頁：使用者故事、範圍內／外、任務拆解與完成定義。"
    },
    {
      "icon": "🐙",
      "title": "用 GitHub 與版本思維管理產品迭代",
      "description": "用簡化 GitHub 流程管理專案：Repo、Commit、Branch、PR、Issue、README、截圖與 Demo，清楚記錄真實進度。",
      "goal": "我的 GitHub 專案庫（README＋基本版本紀錄＋Issue／里程碑對應）",
      "estimatedTime": "60-80 分鐘",
      "difficulty": "中階",
      "tags": [
        "GitHub",
        "README",
        "版本控管",
        "Chapter10"
      ],
      "progress": 0,
      "completed": false,
      "locked": false,
      "chapterIndex": 9,
      "chapterZh": "AI 個人專案與作品集",
      "chapterEn": "AI Personal Projects and Portfolio",
      "zhTitle": "第6課：用 GitHub 與版本思維管理產品迭代",
      "enTitle": "Lesson 6: Manage product iteration with GitHub and version thinking",
      "zhValueTip": "用簡化 GitHub 流程管理專案：Repo、Commit、Branch、PR、Issue、README、截圖與 Demo，清楚記錄真實進度。",
      "enValueTip": "Manage the project with a beginner-friendly GitHub workflow—repo, commits, branches, PRs, issues, README, screenshots, and demos—without overcomplicating Git.",
      "zhOutcome": "我的 GitHub 專案庫（README＋基本版本紀錄＋Issue／里程碑對應）",
      "enOutcome": "My GitHub Repo (README + basic history + issues mapped to milestones)",
      "zhConcept": "GitHub 對大學生作品集的價值是「可追溯的誠實紀錄」：別人看得到你如何一步步做，而不是只丟最終 zip。基本概念：Repository 專案容器；Commit 是一次可說明的變更快照；Branch 用來分開嘗試；Pull Request 用於合併與說明；Issue 追蹤任務與 bug。初學者簡化工作流程（避免過度複雜）：main 保持可演示；日常在 feature 小分支開發；完成一小塊就 commit；用 PR 合回 main；用 Issue 對應 MVP 的 Must 項。不必一開始就上 rebasing、submodule、複雜 monorepo。先做到：有意義的 commit message、檔名清楚、README 能讓陌生人 3 分鐘懂如何執行。README 建議含：專案一句話、問題與對象、功能（標示已完成／未完成）、安裝或開啟方式、截圖／Demo 連結、時程與反思連結、授權與聯絡。版本紀錄不要造假：未完成功能寫在 Roadmap，不要寫成 Done。截圖與 Demo 必須來自真實畫面。AI 可幫你起草 README 與 commit 說明，但不可捏造星數、下載量、測試通過率或從未做過的功能。完整 GitHub 案例：排課助手 repo——Issues 對應 Must、每完成檢查規則就 commit、README 含 3 張截圖與「Won't：自動搶課」、Demo 用短影片連結。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。展示產品時同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。",
      "enConcept": "Use a simple main/feature/PR/issue workflow, write an honest README with screenshots/demo, and keep commits meaningful. AI may draft docs; never invent metrics or completed features.",
      "zhCaseStudy": "完整 GitHub 專案案例：小安以前交作業只傳壓縮檔。改用 GitHub 後，老師能從 commit 看到她如何修衝突規則 bug。第一次 README 把未做的登入寫成完成，同學一跑就爆；她修正為清楚標「未實作」，並補截圖。產品演示因此更可信：過程可見、範圍誠實。",
      "enCaseStudy": "Xiao An replaced zip submissions with an honest GitHub history and a README that stopped claiming unfinished login as done.",
      "zhWorkflow": [
        "建立 Repo 與清楚資料夾／檔名",
        "用 Issue 對應 MVP Must",
        "小步 commit＋簡短 PR 說明",
        "撰寫誠實 README 與截圖／Demo",
        "檢查未完成項是否被誤標完成"
      ],
      "enWorkflow": [
        "Create repo with clear naming",
        "Map issues to MVP Musts",
        "Small commits + simple PRs",
        "Write honest README with screenshots/demo",
        "Audit that unfinished work isn’t marked done"
      ],
      "zhCommonMistakes": [
        "巨大 commit 無說明",
        "README 吹噓未做功能",
        "過度複雜分支策略",
        "捏造星數與下載數據"
      ],
      "enCommonMistakes": [
        "Huge unexplained commits",
        "README claims unfinished features",
        "Overcomplicated branching",
        "Fake stars/downloads"
      ],
      "zhExcellentExample": "優秀 repo：可運行說明清楚、commit 可讀、Issue 對齊里程碑、README 區分完成／未完成、截圖真實。",
      "enExcellentExample": "A strong repo runs from the README, has readable commits, milestone-linked issues, honest done/todo, and real screenshots.",
      "zhPrompt": "【Prompt 1｜README 撰寫教練（禁吹噓）】\n專案事實（已完成／未完成分開）：\n（貼上）\n技術與開啟方式：\n（貼上）\n請起草 README 結構與文案。未完成必須放 Roadmap，不可寫成已完成。不要捏造 Demo 數據、星數或用戶數；缺截圖就列待補。",
      "enPrompt": "[Prompt 1 | README Coach] Draft README from true done/todo lists; never mark unfinished as done; invent no stars/users; list missing screenshots.",
      "zhCoachPrompt": "【Prompt 2｜Commit／Issue 版本紀錄整理】\n我的變更摘要或 git log：\n（貼上）\n里程碑：\n（貼上）\n請建議 commit message 風格、Issue 標題，以及版本紀錄（Changelog）草稿。只根據我提供的變更；不要添加我沒做的修復。",
      "enCoachPrompt": "[Prompt 2 | Commit/Issue History] Suggest commit/issue style and a changelog from my provided changes only—no invented fixes.",
      "zhFeedbackPrompt": "【Prompt 3｜Repo 誠實度檢查】\nREADME 與功能清單：\n（貼上）\n請找出可能「未完成卻寫成完成」的句子，給修正寫法。並檢查檔名／資料夾是否清楚。不要為了好看而建議造假。",
      "enFeedbackPrompt": "[Prompt 3 | Repo Honesty QA] Find overclaimed features and unclear naming; suggest truthful wording—never recommend faking polish metrics.",
      "zhExample": "README：一句話問題→Must 功能（已完成打勾）→Won't→如何執行→截圖→Issue #3 對應衝突規則。｜Commit：fix: detect overlapping sessions。",
      "enExample": "An honest README with checked Musts, explicit Won’t, run steps, screenshots, and a meaningful commit message.",
      "zhPractice": "建立或整理真實專案 Repo。；寫誠實 README＋至少 2 張截圖。；用 Issue 對應 Must。；Challenge：請同學只看 README 在 10 分鐘內跑起 Demo；卡住的步驟立刻改文件。",
      "enPractice": "Create/clean a real repo.；Write honest README + ≥2 screenshots.；Map issues to Musts.；Challenge: a classmate must run the demo from README alone in 10 minutes.",
      "zhQuizItems": [
        {
          "q": "大學生使用 GitHub 最核心的作品集價值是？",
          "options": [
            "刷假星數",
            "留下可追溯且誠實的製作過程與說明",
            "隱藏所有失敗",
            "只上傳最終 zip 更專業"
          ],
          "answer": 1,
          "explain": "過程可見與誠實說明建立信任。"
        },
        {
          "q": "初學者較建議的流程是？",
          "options": [
            "一開始就上極複雜 Git 工作流",
            "main 可演示＋小分支＋小步 commit＋PR＋Issue",
            "從不寫 README",
            "把所有檔塞一個資料夾無名 commit"
          ],
          "answer": 1,
          "explain": "簡化流程就夠用且可維護。"
        },
        {
          "q": "README 提到未做功能時應？",
          "options": [
            "寫成已經上線完成",
            "放到 Roadmap／未完成並誠實標示",
            "刪除所有說明",
            "捏造測試報告"
          ],
          "answer": 1,
          "explain": "未完成必須標示，不可裝完成。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Core portfolio value of GitHub for students?",
          "options": [
            "Fake stars",
            "A traceable, honest build history and docs",
            "Hiding all failures",
            "Only final zips look professional"
          ],
          "answer": 1,
          "explain": "Visibility and honesty build trust."
        },
        {
          "q": "Beginner-friendly workflow is:",
          "options": [
            "Start with extreme Git complexity",
            "Demoable main + small branches + small commits + PRs + issues",
            "Never write a README",
            "One unnamed mega-commit"
          ],
          "answer": 1,
          "explain": "Simple workflows are enough and maintainable."
        },
        {
          "q": "Unfinished features in README should be:",
          "options": [
            "Described as already shipped",
            "Listed in Roadmap/todo honestly",
            "Deleted entirely",
            "Backed by fake test reports"
          ],
          "answer": 1,
          "explain": "Mark unfinished work clearly."
        }
      ],
      "zhNotePrompt": "貼上 README 的「已完成／未完成」兩段，以及一則你最滿意的 commit message。",
      "enNotePrompt": "Paste README done/todo sections and your best commit message.",
      "zhDeliverableChecklist": [
        "Repo 可存取",
        "README 誠實完整",
        "至少數次有意義 commit",
        "Issue 對齊 Must",
        "截圖或 Demo 真實"
      ],
      "enDeliverableChecklist": [
        "Repo accessible",
        "Honest complete README",
        "Meaningful commits present",
        "Issues map to Musts",
        "Real screenshots/demo"
      ],
      "zhScorecard": [
        "可運行說明",
        "紀錄可讀",
        "範圍誠實",
        "結構清楚",
        "可演示"
      ],
      "enScorecard": [
        "Runnable docs",
        "Readable history",
        "Honest scope",
        "Clear structure",
        "Demoable"
      ],
      "resources": [
        {
          "name": "GitHub",
          "url": "https://github.com",
          "note": "建立 Repo、Issue、PR"
        },
        {
          "name": "GitHub Docs",
          "url": "https://docs.github.com",
          "note": "官方入門與流程說明"
        },
        {
          "name": "ChatGPT",
          "url": "https://chatgpt.com",
          "note": "README／commit 文案草稿"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com",
          "note": "放置較大 Demo 影片備援"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.so",
          "note": "開發日誌連結到 Repo"
        }
      ],
      "challenge": "讓你的 MVP 專案在 GitHub 上可被同學依 README 啟動；補齊誠實的完成／未完成清單與至少兩張真實截圖。",
      "id": "startup-automation-L6",
      "lessonKey": "startup-automation-L6"
    },
    {
      "id": "startup-automation-L7",
      "lessonKey": "startup-automation-L7",
      "zhTitle": "第7課：設計 Pitch Deck：讓別人聽懂你的生意",
      "enTitle": "Lesson 7: Design a pitch deck that makes the business clear",
      "zhConcept": "Pitch 是說清楚生意，不是堆特效。常見結構：問題 → 解法 → 為什麼是現在 → 產品 → 進展／驗證 → 模式 → 團隊 → 需求（Ask）。每一頁一句話主張＋證據。AI 可幫你壓成講點；不可編造用戶數或營收。",
      "enConcept": "A pitch explains the business: problem, solution, why now, product, traction, model, team, ask—one claim plus evidence per slide. AI can tighten talking points; it must not invent users or revenue.",
      "zhPrompt": "請擔任 Pitch 教練。問題：【】。解法：【】。真實進展：【】。本次 Ask：【】。\n\n請輸出 8–10 頁大綱、每頁一句主張、講點與可能被追問的問題。禁止新增未提供的數據。",
      "enPrompt": "Act as a pitch coach. Problem: []. Solution: []. Real traction: []. Ask: []. Output 8–10 slides with one claim and talk track each, plus likely questions. Add no unprovided metrics.",
      "zhExample": "弱頁「我們很有熱忱」。強頁「問題：社團排班在活動前 72 小時平均手動改班 2 小時；證據：8 訪談。」",
      "enExample": "Weak: we are passionate. Strong: problem slide with a quantified pain and interview evidence.",
      "zhPractice": "寫 8–10 頁大綱。；每頁加一句主張與證據。；刪假數據。；練習 3 分鐘口述。；準備 5 題 Q&A。",
      "enPractice": "Outline 8–10 slides.；Add claim+evidence each.；Remove fake metrics.；Rehearse 3 minutes.；Prep 5 Q&A.",
      "zhFeedbackPrompt": "你是一位Pitch 教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 清晰\n- 證據\n- 節奏\n- 誠實\n- Ask\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a pitch coach. Score 1-10 for: Clarity, Evidence, Pacing, Honesty, Ask. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "Pitch 核心是？",
          "options": [
            "讓人聽懂生意與進展",
            "堆最多特效",
            "回避 Ask"
          ],
          "answer": 0,
          "explain": "說清楚。"
        },
        {
          "q": "進展頁應放？",
          "options": [
            "可驗證的真實證據",
            "虛構下載量",
            "無關截圖牆"
          ],
          "answer": 0,
          "explain": "真實。"
        },
        {
          "q": "Ask 應？",
          "options": [
            "明確具體",
            "越模糊越好",
            "完全不提"
          ],
          "answer": 0,
          "explain": "清楚。"
        },
        {
          "q": "AI 可協助？",
          "options": [
            "壓縮講點",
            "發明營收",
            "代替你演練"
          ],
          "answer": 0,
          "explain": "講點。"
        },
        {
          "q": "本課產出？",
          "options": [
            "架構＋講點",
            "上櫃書",
            "無關長文"
          ],
          "answer": 0,
          "explain": "Pitch。"
        }
      ],
      "enQuizItems": [
        {
          "q": "Pitch 核心是？",
          "options": [
            "讓人聽懂生意與進展",
            "堆最多特效",
            "回避 Ask"
          ],
          "answer": 0,
          "explain": "說清楚。"
        },
        {
          "q": "進展頁應放？",
          "options": [
            "可驗證的真實證據",
            "虛構下載量",
            "無關截圖牆"
          ],
          "answer": 0,
          "explain": "真實。"
        },
        {
          "q": "Ask 應？",
          "options": [
            "明確具體",
            "越模糊越好",
            "完全不提"
          ],
          "answer": 0,
          "explain": "清楚。"
        },
        {
          "q": "AI 可協助？",
          "options": [
            "壓縮講點",
            "發明營收",
            "代替你演練"
          ],
          "answer": 0,
          "explain": "講點。"
        },
        {
          "q": "本課產出？",
          "options": [
            "架構＋講點",
            "上櫃書",
            "無關長文"
          ],
          "answer": 0,
          "explain": "Pitch。"
        }
      ],
      "zhOutcome": "產出 8–10 頁 Pitch 架構與講點（問題、解法、市場、產品、進展、團隊、需求）。",
      "enOutcome": "Produce an 8–10 slide pitch outline with talking points (problem, solution, market, product, traction, team, ask).",
      "zhValueTip": "設計 Pitch Deck：讓別人在短時間聽懂問題、解法、進展與需求。",
      "enValueTip": "Design a pitch deck so others quickly grasp problem, solution, traction, and ask.",
      "zhCaseStudy": "團隊第一版 20 頁全是功能截圖。改成 9 頁後，投資人／老師先問驗證與 Ask。他們把「8 次訪談洞見＋3 個社團試用」放在進展頁，把還沒做的支付移出核心故事。",
      "enCaseStudy": "A 20-slide feature tour became 9 slides; traction highlighted eight interviews and three club trials, and unbuilt payments left the core story.",
      "zhExcellentExample": "每頁一句主張、證據來源、講者 20 秒講點；Ask 明確；無假數據；附 Q&A 預備。",
      "enExcellentExample": "One claim, evidence source, and 20-second talk track per slide; clear ask; no fake metrics; Q&A prep.",
      "zhWorkflow": [
        "定故事主線",
        "列頁級結構",
        "補證據",
        "壓成講點",
        "演練 Q&A"
      ],
      "enWorkflow": [
        "Set narrative spine",
        "List slide structure",
        "Add evidence",
        "Tighten talk tracks",
        "Rehearse Q&A"
      ],
      "zhCommonMistakes": [
        "功能導覽當故事",
        "假用戶數",
        "Ask 不清楚",
        "太長無人記住",
        "不敢講限制"
      ],
      "enCommonMistakes": [
        "Feature tour as story",
        "Fake user counts",
        "Unclear ask",
        "Too long to remember",
        "Hiding limitations"
      ],
      "zhDeliverableChecklist": [
        "頁級大綱",
        "每頁主張",
        "真實進展",
        "清楚 Ask",
        "Q&A"
      ],
      "enDeliverableChecklist": [
        "Slide outline",
        "Claims",
        "Real traction",
        "Clear ask",
        "Q&A"
      ],
      "zhScorecard": [
        "清晰",
        "證據",
        "節奏",
        "誠實",
        "Ask"
      ],
      "enScorecard": [
        "Clarity",
        "Evidence",
        "Pacing",
        "Honesty",
        "Ask"
      ],
      "zhNotePrompt": "貼上 Pitch 大綱與 3 分鐘講稿要點。",
      "enNotePrompt": "Paste your pitch outline and 3-minute talk points.",
      "zhCoachPrompt": "請評我的 Pitch 是否太功能導向，並幫我改成問題—解法—進展結構。",
      "enCoachPrompt": "Critique feature-heavy pitching and reshape to problem–solution–traction.",
      "title": "設計 Pitch Deck：讓別人聽懂你的生意",
      "description": "設計 Pitch Deck：讓別人在短時間聽懂問題、解法、進展與需求。",
      "goal": "產出 8–10 頁 Pitch 架構與講點（問題、解法、市場、產品、進展、團隊、需求）。"
    },
    {
      "id": "startup-automation-L8",
      "lessonKey": "startup-automation-L8",
      "zhTitle": "第8課：建立自動化思維：把重複工作變成流程",
      "enTitle": "Lesson 8: Build automation thinking: turn repeat work into workflows",
      "zhConcept": "自動化服務創業與產品運作中的重複工作，例如蒐集表單、通知、彙整。先畫流程再選工具。關鍵是：觸發是什麼、哪些步驟可自動、哪裡必須人工核對、失敗怎麼辦。AI 可幫你畫步驟與檢查點；不可在未理解流程時直接「全自動無人看」。",
      "enConcept": "Automate repetitive startup operations after mapping trigger, auto steps, human checks, and failures. AI can draft the map; do not go fully unattended before you understand the flow.",
      "zhPrompt": "請擔任自動化教練。重複工作描述：【】。目前耗時：【】。風險點：【】。\n\n請輸出流程草圖、建議自動化段落、必須人工的關卡、失敗處理與成功定義。不要建議處理違法資料的作法。",
      "enPrompt": "Act as an automation coach. Repetitive work: []. Time cost: []. Risks: []. Output a flow sketch, automatable segments, human gates, failure handling, and success definition. Suggest nothing illegal for data handling.",
      "zhExample": "弱：「全部自動隨便寄」。強：「觸發＝新表單；自動＝回覆＋建列；人工＝24h 內審核；失敗＝通知負責人並暫停開通。」",
      "enExample": "Weak: auto-email everything. Strong: trigger=new form; auto=ack+row; human=review in 24h; failure=alert owner and block provisioning.",
      "zhPractice": "選一個重複工作。；畫出現況。；標可自動／必人工。；補失敗分支。；定義成功並小範圍試跑。",
      "enPractice": "Pick repetitive work.；Map current state.；Mark auto vs human.；Add failure branches.；Define success and pilot small.",
      "zhFeedbackPrompt": "你是一位自動化教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 清楚度\n- 風險控制\n- 可測\n- 節省潛力\n- 創業營運焦點\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a automation coach. Score 1-10 for: Clarity, Risk control, Testability, Savings potential, Ops focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "自動化前應先？",
          "options": [
            "畫清流程與人工關卡",
            "直接全自動",
            "不管失敗"
          ],
          "answer": 0,
          "explain": "先理解。"
        },
        {
          "q": "失敗處理重要因為？",
          "options": [
            "避免靜默出錯",
            "讓流程更酷",
            "可以省略成功定義"
          ],
          "answer": 0,
          "explain": "可靠。"
        },
        {
          "q": "適合先自動的是？",
          "options": [
            "高頻重複低風險步驟",
            "高風險一次決策",
            "完全無規律危機"
          ],
          "answer": 0,
          "explain": "重複性。"
        },
        {
          "q": "AI 適合？",
          "options": [
            "整理流程草圖",
            "保證零錯誤無人看管",
            "取代所有責任"
          ],
          "answer": 0,
          "explain": "設計輔助。"
        },
        {
          "q": "本課產出？",
          "options": [
            "流程草圖",
            "完整財報",
            "無關文件"
          ],
          "answer": 0,
          "explain": "自動化草圖。"
        }
      ],
      "enQuizItems": [
        {
          "q": "自動化前應先？",
          "options": [
            "畫清流程與人工關卡",
            "直接全自動",
            "不管失敗"
          ],
          "answer": 0,
          "explain": "先理解。"
        },
        {
          "q": "失敗處理重要因為？",
          "options": [
            "避免靜默出錯",
            "讓流程更酷",
            "可以省略成功定義"
          ],
          "answer": 0,
          "explain": "可靠。"
        },
        {
          "q": "適合先自動的是？",
          "options": [
            "高頻重複低風險步驟",
            "高風險一次決策",
            "完全無規律危機"
          ],
          "answer": 0,
          "explain": "重複性。"
        },
        {
          "q": "AI 適合？",
          "options": [
            "整理流程草圖",
            "保證零錯誤無人看管",
            "取代所有責任"
          ],
          "answer": 0,
          "explain": "設計輔助。"
        },
        {
          "q": "本課產出？",
          "options": [
            "流程草圖",
            "完整財報",
            "無關文件"
          ],
          "answer": 0,
          "explain": "自動化草圖。"
        }
      ],
      "zhOutcome": "產出一張自動化流程草圖：觸發、步驟、人工關卡、失敗處理與成功定義。",
      "enOutcome": "Produce an automation flow sketch: trigger, steps, human checkpoints, failure handling, and success definition.",
      "zhValueTip": "建立自動化思維：把重複工作變成可檢查的流程。",
      "enValueTip": "Build automation thinking: turn repetitive work into checkable flows.",
      "zhCaseStudy": "團隊每次試用申請都手動回信。流程改成：表單提交 → 自動回覆時程 → 人工審核資格 → 通過才開通。失敗時通知負責人。一週節省數小時且減少漏回。",
      "enCaseStudy": "Trial requests moved from manual replies to form → auto ack → human review → provision, with failure alerts—saving hours and missed replies.",
      "zhExcellentExample": "流程圖含觸發、系統步驟、人工關卡、資料欄位、失敗分支、成功定義與回滾方式。",
      "enExcellentExample": "Flow with trigger, system steps, human gates, fields, failure branches, success definition, and rollback.",
      "zhWorkflow": [
        "選重複工作",
        "畫現況",
        "切自動／人工",
        "設計失敗處理",
        "小範圍試跑"
      ],
      "enWorkflow": [
        "Pick repetitive work",
        "Map current",
        "Split auto/human",
        "Design failures",
        "Small pilot"
      ],
      "zhCommonMistakes": [
        "無人工關卡就全自動",
        "失敗無人知",
        "自動化錯誤流程",
        "不計成功定義",
        "一次自動所有部門"
      ],
      "enCommonMistakes": [
        "Full auto with no human gate",
        "Silent failures",
        "Automating a bad process",
        "No success definition",
        "Boiling the ocean"
      ],
      "zhDeliverableChecklist": [
        "流程草圖",
        "人工關卡",
        "失敗處理",
        "成功定義",
        "試跑紀錄"
      ],
      "enDeliverableChecklist": [
        "Flow sketch",
        "Human gates",
        "Failure handling",
        "Success definition",
        "Pilot log"
      ],
      "zhScorecard": [
        "清楚度",
        "風險控制",
        "可測",
        "節省潛力",
        "創業營運焦點"
      ],
      "enScorecard": [
        "Clarity",
        "Risk control",
        "Testability",
        "Savings potential",
        "Ops focus"
      ],
      "zhNotePrompt": "貼上自動化流程草圖與試跑結果。",
      "enNotePrompt": "Paste your automation sketch and pilot result.",
      "zhCoachPrompt": "請檢查我的自動化是否缺少人工關卡或失敗處理，並給出修正。",
      "enCoachPrompt": "Check for missing human gates or failure handling and suggest fixes.",
      "title": "建立自動化思維：把重複工作變成流程",
      "description": "建立自動化思維：把重複工作變成可檢查的流程。",
      "goal": "產出一張自動化流程草圖：觸發、步驟、人工關卡、失敗處理與成功定義。"
    },
    {
      "id": "startup-automation-L9",
      "lessonKey": "startup-automation-L9",
      "zhTitle": "第9課：認識自動化與 AI Agent：何時用人、何時用機器",
      "enTitle": "Lesson 9: Know automation and AI agents: when to use people vs machines",
      "zhConcept": "規則自動化適合明確若則；AI Agent 適合需要理解非結構化輸入但仍需邊界的任務；人適合高風險決策與例外。選錯會帶來幻覺與責任空洞。為每個 Agent 任務寫：輸入、允許工具、成功標準、人工監督、停止條件。本課在創業／自動化能力內討論 Agent，用途是產品與營運自動化，不是其他能力域。",
      "enConcept": "Rules fit clear if-then work; agents fit bounded unstructured tasks; humans keep high-risk decisions. For each agent task define inputs, allowed tools, success criteria, oversight, and stop conditions—inside startup/ops automation.",
      "zhPrompt": "請擔任自動化與 Agent 教練。我的任務清單：【】。風險等級：【】。\n\n請做成人／規則／Agent 決策表，為 Agent 項寫監督與停止條件，並說明哪些不該自動。不要建議規避法律或平台規則。",
      "enPrompt": "Act as an automation/agent coach. Task list: []. Risk levels: []. Build a human/rules/agent table with oversight and stop conditions; state what must stay human. Suggest nothing that bypasses law or platform rules.",
      "zhExample": "弱：「全部交給 Agent」。強：「FAQ 草稿→Agent；價格承諾→人；資料刪除→人＋雙重確認。」",
      "enExample": "Weak: agents do everything. Strong: FAQ drafts→agent; price promises→human; deletions→human with dual confirm.",
      "zhPractice": "列出 10 個營運任務。；填決策表。；為 2 個 Agent 任務寫監督。；選 1 個做小試驗。；記錄錯誤案例並更新表。",
      "enPractice": "List 10 ops tasks.；Fill the table.；Write oversight for 2 agent tasks.；Pilot one.；Log errors and update.",
      "zhFeedbackPrompt": "你是一位自動化與 Agent 教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 判斷品質\n- 風險意識\n- 可監督\n- 可執行\n- 自動化焦點\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a automation and agent coach. Score 1-10 for: Judgment quality, Risk awareness, Supervisability, Executability, Automation focus. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "高風險決策通常應？",
          "options": [
            "由人負責",
            "全交 Agent",
            "隨機決定"
          ],
          "answer": 0,
          "explain": "責任在人。"
        },
        {
          "q": "Agent 任務需要？",
          "options": [
            "監督與停止條件",
            "完全無邊界",
            "隱藏錯誤"
          ],
          "answer": 0,
          "explain": "可控。"
        },
        {
          "q": "規則自動化適合？",
          "options": [
            "明確若則",
            "完全開放創作",
            "法律裁決"
          ],
          "answer": 0,
          "explain": "清楚規則。"
        },
        {
          "q": "本課 Agent 用途應服務？",
          "options": [
            "產品與營運自動化",
            "與創業無關的閒聊",
            "取代所有學習"
          ],
          "answer": 0,
          "explain": "能力邊界。"
        },
        {
          "q": "本課產出？",
          "options": [
            "決策表",
            "完整無關文件包",
            "無關申請包"
          ],
          "answer": 0,
          "explain": "決策表。"
        }
      ],
      "enQuizItems": [
        {
          "q": "高風險決策通常應？",
          "options": [
            "由人負責",
            "全交 Agent",
            "隨機決定"
          ],
          "answer": 0,
          "explain": "責任在人。"
        },
        {
          "q": "Agent 任務需要？",
          "options": [
            "監督與停止條件",
            "完全無邊界",
            "隱藏錯誤"
          ],
          "answer": 0,
          "explain": "可控。"
        },
        {
          "q": "規則自動化適合？",
          "options": [
            "明確若則",
            "完全開放創作",
            "法律裁決"
          ],
          "answer": 0,
          "explain": "清楚規則。"
        },
        {
          "q": "本課 Agent 用途應服務？",
          "options": [
            "產品與營運自動化",
            "與創業無關的閒聊",
            "取代所有學習"
          ],
          "answer": 0,
          "explain": "能力邊界。"
        },
        {
          "q": "本課產出？",
          "options": [
            "決策表",
            "完整無關文件包",
            "無關申請包"
          ],
          "answer": 0,
          "explain": "決策表。"
        }
      ],
      "zhOutcome": "產出決策表：任務類型 × 人／規則／Agent，附監督方式與不採用理由。",
      "enOutcome": "Produce a decision table: task type × human/rules/agent, with oversight and reasons not to automate.",
      "zhValueTip": "判斷何時用人、何時用規則自動化、何時用 AI Agent，並設計監督點。",
      "enValueTip": "Decide when to use humans, rule automation, or AI agents—and design oversight points.",
      "zhCaseStudy": "客服意向分類可用 Agent 草稿，但退款批准必須人。團隊做決策表後，誤退款風險下降，同時分類速度上升。",
      "enCaseStudy": "Intent classification used an agent draft while refunds stayed human—faster triage with lower mistaken-refund risk.",
      "zhExcellentExample": "決策表至少 8 列；每列有監督與停止條件；含「不採用 Agent」的高風險例。",
      "enExcellentExample": "Decision table with 8+ rows, oversight and stop conditions each, including high-risk cases that stay human.",
      "zhWorkflow": [
        "列任務",
        "評風險",
        "選人／規則／Agent",
        "寫監督與停止",
        "小試驗更新"
      ],
      "enWorkflow": [
        "List tasks",
        "Rate risk",
        "Choose human/rules/agent",
        "Write oversight/stops",
        "Pilot and update"
      ],
      "zhCommonMistakes": [
        "高風險全自動",
        "無停止條件",
        "無監督",
        "把 Agent 神化",
        "忽略資料權限"
      ],
      "enCommonMistakes": [
        "Full auto on high risk",
        "No stop conditions",
        "No oversight",
        "Agent worship",
        "Ignoring data permissions"
      ],
      "zhDeliverableChecklist": [
        "決策表",
        "監督",
        "停止條件",
        "不採用理由",
        "試驗紀錄"
      ],
      "enDeliverableChecklist": [
        "Decision table",
        "Oversight",
        "Stop conditions",
        "Why-not reasons",
        "Pilot log"
      ],
      "zhScorecard": [
        "判斷品質",
        "風險意識",
        "可監督",
        "可執行",
        "自動化焦點"
      ],
      "enScorecard": [
        "Judgment quality",
        "Risk awareness",
        "Supervisability",
        "Executability",
        "Automation focus"
      ],
      "zhNotePrompt": "貼上決策表與一個 Agent 任務的監督設計。",
      "enNotePrompt": "Paste your decision table and one agent oversight design.",
      "zhCoachPrompt": "請挑戰我把高風險任務交給 Agent 的決定，並建議監督點。",
      "enCoachPrompt": "Challenge high-risk agent assignments and suggest oversight points.",
      "title": "認識自動化與 AI Agent：何時用人、何時用機器",
      "description": "判斷何時用人、何時用規則自動化、何時用 AI Agent，並設計監督點。",
      "goal": "產出決策表：任務類型 × 人／規則／Agent，附監督方式與不採用理由。"
    },
    {
      "id": "startup-automation-L10",
      "lessonKey": "startup-automation-L10",
      "zhTitle": "第10課：整合完成「創業提案＋基礎 AI 自動化流程」",
      "enTitle": "Lesson 10: Complete your startup proposal and basic AI automation workflow",
      "zhConcept": "最後一課做整合，不是新開題。把前面的問題、訪談／驗證、模式、規格、Pitch 與一條自動化流程收成可展示包。品質標準是一致的故事線：同一使用者、同一問題、同一 MVP，自動化必須服務這個生意而非裝飾。AI 可幫你做總檢查與缺口清單；不可補假進展。",
      "enConcept": "Integrate prior work into one coherent pack—same user, problem, MVP—and one automation that serves the business. AI can audit gaps; it must not invent traction.",
      "zhPrompt": "請擔任創業整合教練。以下是我目前的各部份草稿：【貼上】。\n\n請做總檢查：故事是否一致、缺什麼證據、自動化是否服務核心流程、Pitch Ask 是否清楚，並給出 7 天修訂清單。禁止新增假進展。",
      "enPrompt": "Act as a startup integration coach. Here are my draft parts: []. Audit story coherence, missing evidence, whether automation serves the core flow, and clarity of the ask; give a 7-day revision list. Add no fake traction.",
      "zhExample": "弱包：Pitch 說有 1 萬用戶，資料夾無證據；自動化是無關的壁紙產生器。強包：用戶數＝試用社團 3 個可點名；自動化＝試用申請處理流程。",
      "enExample": "Weak: pitch claims 10k users with no proof; automation is unrelated. Strong: three named trial clubs; automation handles trial intake.",
      "zhPractice": "建立成果包目錄。；放入各課產出並統一名詞。；跑整合檢查 Prompt。；修最重要 3 個缺口。；做 5 分鐘完整演示。",
      "enPractice": "Create the pack index.；Insert prior outputs with consistent names.；Run the integration audit.；Fix top 3 gaps.；Deliver a 5-minute demo.",
      "zhFeedbackPrompt": "你是一位創業整合教練。\n\n以下是我的成果：\n（貼上）\n\n請專業回饋。\n第一部分評分（1-10）：\n- 一致性\n- 證據\n- 可演示\n- 誠實缺口\n- 整合完整度\n第二部分：3優點\n第三部分：3問題（問題／影響／改法）\n第四部分：改寫建議\n第五部分：今天／明天／最後檢查\n不要捏造資料。",
      "enFeedbackPrompt": "Act as a startup integration coach. Score 1-10 for: Coherence, Evidence, Demoability, Honest gaps, Integration completeness. Give 3 strengths, 3 issues, rewrites, next actions. No invented facts.",
      "zhQuizItems": [
        {
          "q": "整合課目標是？",
          "options": [
            "收成一致可展示的創業包",
            "另開全新題目",
            "補假數據讓數字好看"
          ],
          "answer": 0,
          "explain": "整合。"
        },
        {
          "q": "自動化應？",
          "options": [
            "服務核心生意流程",
            "當無關裝飾",
            "取代 Pitch"
          ],
          "answer": 0,
          "explain": "服務生意。"
        },
        {
          "q": "發現缺口時？",
          "options": [
            "誠實列出並排修訂",
            "用假進展填滿",
            "刪除目錄裝看不見"
          ],
          "answer": 0,
          "explain": "誠實。"
        },
        {
          "q": "演示時最好？",
          "options": [
            "能指到證據",
            "只唸口號",
            "拒絕回答限制"
          ],
          "answer": 0,
          "explain": "證據。"
        },
        {
          "q": "本課產出？",
          "options": [
            "提案＋自動化成果包",
            "無關文件包",
            "無關申請包"
          ],
          "answer": 0,
          "explain": "創業包。"
        }
      ],
      "enQuizItems": [
        {
          "q": "整合課目標是？",
          "options": [
            "收成一致可展示的創業包",
            "另開全新題目",
            "補假數據讓數字好看"
          ],
          "answer": 0,
          "explain": "整合。"
        },
        {
          "q": "自動化應？",
          "options": [
            "服務核心生意流程",
            "當無關裝飾",
            "取代 Pitch"
          ],
          "answer": 0,
          "explain": "服務生意。"
        },
        {
          "q": "發現缺口時？",
          "options": [
            "誠實列出並排修訂",
            "用假進展填滿",
            "刪除目錄裝看不見"
          ],
          "answer": 0,
          "explain": "誠實。"
        },
        {
          "q": "演示時最好？",
          "options": [
            "能指到證據",
            "只唸口號",
            "拒絕回答限制"
          ],
          "answer": 0,
          "explain": "證據。"
        },
        {
          "q": "本課產出？",
          "options": [
            "提案＋自動化成果包",
            "無關文件包",
            "無關申請包"
          ],
          "answer": 0,
          "explain": "創業包。"
        }
      ],
      "zhOutcome": "完成「創業提案＋基礎自動化」成果包：問題、驗證、模式、規格摘要、Pitch 要點與一條自動化流程說明。",
      "enOutcome": "Complete a startup+automation pack: problem, validation, model, spec summary, pitch points, and one documented automation flow.",
      "zhValueTip": "整合創業提案與一條可運行的基礎自動化流程，形成可展示成果包。",
      "enValueTip": "Integrate a startup proposal with one working basic automation flow into a demo-ready pack.",
      "zhCaseStudy": "學生把排班問題、8 訪、學期收費假設、衝突提醒 MVP、9 頁 Pitch，以及「試用申請自動回覆＋人工審核」流程放進同一資料夾。展示時故事一致，評審追問也能指到證據。",
      "enCaseStudy": "A student bundled scheduling problem, interviews, pricing hypothesis, conflict-alert MVP, 9-slide pitch, and trial-request automation into one coherent folder reviewers could interrogate.",
      "zhExcellentExample": "成果包有目錄、故事一致、證據可點開、自動化有流程圖與試跑、缺口誠實列出、下一步 7 天計畫清楚。",
      "enExcellentExample": "Pack with index, coherent story, openable evidence, automation diagram + pilot, honest gaps, and a clear 7-day next plan.",
      "zhWorkflow": [
        "建目錄",
        "匯入各部份",
        "一致性檢查",
        "修缺口",
        "演示與收尾"
      ],
      "enWorkflow": [
        "Create index",
        "Import parts",
        "Coherence check",
        "Fix gaps",
        "Demo and close"
      ],
      "zhCommonMistakes": [
        "故事不一致",
        "假進展",
        "自動化與生意無關",
        "Ask 缺失",
        "展示無證據可指"
      ],
      "enCommonMistakes": [
        "Incoherent story",
        "Fake traction",
        "Automation unrelated to the business",
        "Missing ask",
        "Demo without evidence"
      ],
      "zhDeliverableChecklist": [
        "目錄",
        "問題與驗證",
        "模式與規格",
        "Pitch",
        "自動化流程與試跑"
      ],
      "enDeliverableChecklist": [
        "Index",
        "Problem+validation",
        "Model+spec",
        "Pitch",
        "Automation + pilot"
      ],
      "zhScorecard": [
        "一致性",
        "證據",
        "可演示",
        "誠實缺口",
        "整合完整度"
      ],
      "enScorecard": [
        "Coherence",
        "Evidence",
        "Demoability",
        "Honest gaps",
        "Integration completeness"
      ],
      "zhNotePrompt": "貼上成果包目錄與整合檢查結果。",
      "enNotePrompt": "Paste your pack index and integration audit.",
      "zhCoachPrompt": "請做整合總檢查：指出不一致與缺證，並給 7 天修訂順序。",
      "enCoachPrompt": "Run an integration audit: inconsistencies, missing proof, and a 7-day fix order.",
      "title": "整合完成「創業提案＋基礎 AI 自動化流程」",
      "description": "整合創業提案與一條可運行的基礎自動化流程，形成可展示成果包。",
      "goal": "完成「創業提案＋基礎自動化」成果包：問題、驗證、模式、規格摘要、Pitch 要點與一條自動化流程說明。"
    }
  ]
};


const COURSE_CASE_STUDY_LABELS = {
  "admissions": { "zh": "高中生升學情境案例", "en": "University Admission Scenario" },
  "college-learning": { "zh": "大學生學習情境案例", "en": "University Learning Scenario" },
  "research-competition": { "zh": "研究、專題與競賽情境案例", "en": "Research and Competition Scenario" },
  "career-internship": { "zh": "求職與實習情境案例", "en": "Career and Internship Scenario" },
  "workplace-productivity": { "zh": "職場工作情境案例", "en": "Workplace Scenario" },
  "startup-automation": { "zh": "創業與自動化情境案例", "en": "Entrepreneurship and Automation Scenario" }
};


const COURSE_DESIGN_META = {
  "admissions": {
    "zhCapability": "AI 升學申請能力",
    "enCapability": "AI Admissions Skills",
    "zhPositioning": "幫助高中生用 AI 整理校系方向、學習歷程、備審資料、自我介紹與面試準備。",
    "enPositioning": "Help high school students use AI for majors, portfolios, application materials, self-introductions, and interviews.",
    "difficulty": {"zh": "入門到中階", "en": "Beginner to Intermediate"},
    "suggestedHours": {"zh": "約 10–14 小時", "en": "About 10–14 hours"},
    "lessonCount": 10,
    "zhCanDo": [
      "釐清大學申請流程與 AI 使用界線",
      "盤點興趣優勢並比較校系",
      "整理學習歷程與活動故事",
      "建立備審架構與自我介紹初稿",
      "準備面試題庫與模擬練習",
      "完成大學申請成果包"
    ],
    "enCanDo": [
      "Clarify admissions steps and AI boundaries",
      "Map strengths and compare majors",
      "Organize learning portfolios and activity stories",
      "Build application structure and self-intro drafts",
      "Prepare interview banks and mock practice",
      "Complete the university application package"
    ],
    "useProLayout": true
  },
  "college-learning": {
    "zhCapability": "AI 學習能力",
    "enCapability": "AI Learning Skills",
    "zhPositioning": "幫助大學生建立教材理解、筆記、報告、簡報與考試複習的 AI 學習系統。",
    "enPositioning": "Help university students build an AI learning system for materials, notes, reports, slides, and exam review.",
    "difficulty": {"zh": "入門到中階", "en": "Beginner to Intermediate"},
    "suggestedHours": {"zh": "約 12–15 小時", "en": "About 12–15 hours"},
    "lessonCount": 10,
    "zhCanDo": [
      "使用 AI 理解複雜教材",
      "整理有結構的課堂筆記",
      "完成一般課堂報告",
      "製作清楚的課堂簡報",
      "建立考試複習流程",
      "完成自己的 AI 大學學習系統包"
    ],
    "enCanDo": [
      "Use AI to understand complex materials",
      "Organize structured class notes",
      "Complete a typical class report",
      "Build a clear class presentation",
      "Create an exam review workflow",
      "Finish your AI university learning system package"
    ],
    "useProLayout": true
  },
  "research-competition": {
    "zhCapability": "AI 研究與競賽能力",
    "enCapability": "AI Research and Competition Skills",
    "zhPositioning": "幫助大學生用 AI 推進研究問題、文獻、方法、資料分析、專題與競賽提案。",
    "enPositioning": "Help university students use AI for research questions, literature, methods, analysis, projects, and competition proposals.",
    "difficulty": {"zh": "中階", "en": "Intermediate"},
    "suggestedHours": {"zh": "約 12–16 小時", "en": "About 12–16 hours"},
    "lessonCount": 10,
    "zhCanDo": [
      "釐清研究問題與專題範圍",
      "整理文獻與研究方法",
      "規劃資料分析與論證結構",
      "準備競賽提案與簡報",
      "建立可查證的研究工作流",
      "完成研究、專題與競賽成果包"
    ],
    "enCanDo": [
      "Clarify research questions and project scope",
      "Organize literature and methods",
      "Plan analysis and argument structure",
      "Prepare competition proposals and decks",
      "Build a verifiable research workflow",
      "Complete the research and competition package"
    ],
    "useProLayout": true
  },
  "career-internship": {
    "zhCapability": "AI 求職與實習能力",
    "enCapability": "AI Career and Internship Skills",
    "zhPositioning": "幫助學生用 AI 準備實習與求職：履歷、Cover Letter、作品集、面試與職涯定位。",
    "enPositioning": "Help students use AI for internships and jobs: resumes, cover letters, portfolios, interviews, and career positioning.",
    "difficulty": {"zh": "入門到中階", "en": "Beginner to Intermediate"},
    "suggestedHours": {"zh": "約 10–14 小時", "en": "About 10–14 hours"},
    "lessonCount": 10,
    "zhCanDo": [
      "釐清目標職缺與能力缺口",
      "產出可投遞的履歷與 Cover Letter",
      "整理作品集與專案說明",
      "準備面試回答架構",
      "建立求職追蹤與修正流程",
      "完成求職與實習申請包"
    ],
    "enCanDo": [
      "Clarify target roles and skill gaps",
      "Produce usable resumes and cover letters",
      "Organize portfolios and project stories",
      "Prepare interview answer structures",
      "Build a job-search tracking loop",
      "Complete the career and internship package"
    ],
    "useProLayout": true
  },
  "workplace-productivity": {
    "zhCapability": "AI 職場生產力",
    "enCapability": "AI Workplace Productivity",
    "zhPositioning": "幫助職場工作者用 AI 處理 Email、會議、文件、簡報、報告、SOP 與任務管理。",
    "enPositioning": "Help professionals use AI for email, meetings, documents, slides, reports, SOPs, and task management.",
    "difficulty": {"zh": "入門到中階", "en": "Beginner to Intermediate"},
    "suggestedHours": {"zh": "約 10–14 小時", "en": "About 10–14 hours"},
    "lessonCount": 10,
    "zhCanDo": [
      "用 AI 寫清楚的職場溝通",
      "整理會議與行動項目",
      "產出文件、簡報與工作報告",
      "建立 SOP 與知識整理方式",
      "設計可重複的任務工作流",
      "完成個人 AI 工作流程包"
    ],
    "enCanDo": [
      "Write clearer workplace communication with AI",
      "Organize meetings and action items",
      "Produce documents, decks, and reports",
      "Build SOPs and knowledge systems",
      "Design repeatable task workflows",
      "Complete your personal AI workflow package"
    ],
    "useProLayout": true
  },
  "startup-automation": {
    "zhCapability": "AI 創業與自動化",
    "enCapability": "AI Startup and Automation",
    "zhPositioning": "幫助創業者用 AI 驗證問題、客群、訪談、商業模式、MVP、Pitch 與自動化流程。",
    "enPositioning": "Help founders use AI for problem validation, audience, interviews, models, MVP, pitch decks, and automation.",
    "difficulty": {"zh": "中階", "en": "Intermediate"},
    "suggestedHours": {"zh": "約 12–16 小時", "en": "About 12–16 hours"},
    "lessonCount": 10,
    "zhCanDo": [
      "釐清創業問題與目標客群",
      "設計訪談與驗證節奏",
      "整理商業模式與 MVP 方向",
      "產出 Pitch Deck 架構",
      "規劃自動化與 AI Agent 流程",
      "完成創業驗證與自動化成果包"
    ],
    "enCanDo": [
      "Clarify startup problems and target users",
      "Design interview and validation loops",
      "Organize business model and MVP direction",
      "Draft pitch deck structure",
      "Plan automation and AI agent workflows",
      "Complete the startup validation package"
    ],
    "useProLayout": true
  }
};

const RESULT_PACKAGE_CONFIG = [
  {
    "id": "free-starter",
    "courseId": null,
    "free": true,
    "icon": "🎁",
    "totalItems": 5,
    "zhTitle": "免費入門成果包",
    "enTitle": "Free Starter Result Package",
    "zhCourseName": "免費入門／AI 新手訓練營",
    "enCourseName": "Free Intro / AI Beginner Bootcamp",
    "zhCapability": "AI 基礎入門",
    "enCapability": "AI fundamentals",
    "zhDescription": "把免費入門課的實作成果集中保存，建立可重複使用的 AI 學習起點。",
    "enDescription": "Collect free intro outputs into one reusable AI starting kit.",
    "zhFinalOutcome": "一套可展示的 AI 入門成果：目標、Prompt、查證、工具選擇與 7 天行動計畫。",
    "enFinalOutcome": "A showcase-ready AI starter kit: goals, prompts, verification, tool choice, and a 7-day plan.",
    "items": [
      { "zh": "我的 AI 使用目標", "en": "My AI usage goals" },
      { "zh": "第一份有效 Prompt", "en": "My first effective prompt" },
      { "zh": "AI 回答查證清單", "en": "AI answer verification checklist" },
      { "zh": "個人 AI 工具選擇表", "en": "Personal AI tool selection sheet" },
      { "zh": "我的 7 天 AI 行動計畫", "en": "My 7-day AI action plan" }
    ]
  },
  {
    "id": "pkg-admissions",
    "courseId": "admissions",
    "free": false,
    "icon": "🎓",
    "totalItems": 10,
    "zhTitle": "大學申請成果包",
    "enTitle": "University Application Result Package",
    "zhCourseName": "高中生申請大學 AI 實戰課",
    "enCourseName": "AI University Application Course",
    "zhCapability": "升學申請",
    "enCapability": "University admissions",
    "zhDescription": "集中保存升學申請各課成果，組成完整大學申請包。",
    "enDescription": "Store every admissions lesson output into one University Application Kit.",
    "zhFinalOutcome": "一份完整的大學申請包，包含校系方向、學習歷程、備審架構、自我介紹與面試準備。",
    "enFinalOutcome": "A complete University Application Kit with major direction, learning portfolio, review structure, self-introduction, and interview prep."
  },
  {
    "id": "pkg-college-learning",
    "courseId": "college-learning",
    "free": false,
    "icon": "📚",
    "totalItems": 10,
    "zhTitle": "AI 大學學習系統包",
    "enTitle": "AI University Learning System Package",
    "zhCourseName": "大學生 AI 學習系統",
    "enCourseName": "AI Learning System for University Students",
    "zhCapability": "課堂學習、作業與考試",
    "enCapability": "Coursework, homework, and exams",
    "zhDescription": "把教材整理、筆記、報告與考試複習流程集中成個人學習系統。",
    "enDescription": "Turn notes, reports, and exam workflows into one personal learning system.",
    "zhFinalOutcome": "一套個人 AI 大學學習系統，包含教材整理、課堂筆記、報告、簡報與考試複習流程。",
    "enFinalOutcome": "A personal AI university learning system for materials, notes, reports, presentations, and exam review."
  },
  {
    "id": "pkg-research-competition",
    "courseId": "research-competition",
    "free": false,
    "icon": "🔬",
    "totalItems": 10,
    "zhTitle": "研究、專題與競賽成果包",
    "enTitle": "Research and Competition Result Package",
    "zhCourseName": "大學生研究、專題與競賽 AI 實戰課",
    "enCourseName": "AI Research and Competition Lab",
    "zhCapability": "研究、專題與競賽",
    "enCapability": "Research, projects, and competitions",
    "zhDescription": "集中研究問題、文獻、方法與提案，形成可提交的專案包。",
    "enDescription": "Collect research questions, sources, methods, and proposals into one project pack.",
    "zhFinalOutcome": "一份研究、專題或競賽專案包，包含研究問題、資料來源、研究方法、成果架構與提案內容。",
    "enFinalOutcome": "A research/project/competition package with question, sources, methods, structure, and proposal."
  },
  {
    "id": "pkg-career-internship",
    "courseId": "career-internship",
    "free": false,
    "icon": "💼",
    "totalItems": 10,
    "zhTitle": "求職與實習申請包",
    "enTitle": "Career and Internship Application Package",
    "zhCourseName": "求職與實習 AI 實戰課",
    "enCourseName": "AI Career and Internship Course",
    "zhCapability": "實習與求職",
    "enCapability": "Internships and job search",
    "zhDescription": "集中履歷、Cover Letter、作品集與面試準備，組成求職申請包。",
    "enDescription": "Collect resume, cover letter, portfolio, and interview prep into one job package.",
    "zhFinalOutcome": "一份完整的求職與實習申請包，包含履歷、自我介紹、Cover Letter、作品集與面試準備。",
    "enFinalOutcome": "A complete career/internship package with resume, intro, cover letter, portfolio, and interview prep."
  },
  {
    "id": "pkg-workplace-productivity",
    "courseId": "workplace-productivity",
    "free": false,
    "icon": "⚙️",
    "totalItems": 10,
    "zhTitle": "個人 AI 工作流程包",
    "enTitle": "Personal AI Workplace Workflow Package",
    "zhCourseName": "職場生產力 AI 工作流程課",
    "enCourseName": "AI Workplace Productivity Course",
    "zhCapability": "職場生產力與工作流程",
    "enCapability": "Workplace productivity and workflows",
    "zhDescription": "集中文件、Email、SOP 與任務管理方法，建立個人 AI 工作流。",
    "enDescription": "Collect docs, email, SOP, and task systems into one workplace workflow pack.",
    "zhFinalOutcome": "一套個人 AI 工作流程系統，包含文件、Email、SOP、任務管理與企業知識整理方法。",
    "enFinalOutcome": "A personal AI workplace workflow for documents, email, SOPs, tasks, and knowledge management."
  },
  {
    "id": "pkg-startup-automation",
    "courseId": "startup-automation",
    "free": false,
    "icon": "🚀",
    "totalItems": 10,
    "zhTitle": "創業驗證與自動化成果包",
    "enTitle": "Startup Validation and Automation Package",
    "zhCourseName": "創業與 AI 自動化實戰課",
    "enCourseName": "AI Startup and Automation Course",
    "zhCapability": "創業、產品與自動化",
    "enCapability": "Startups, products, and automation",
    "zhDescription": "集中客群、訪談、商業模式、MVP 與自動化流程，形成創業驗證包。",
    "enDescription": "Collect audience, interviews, model, MVP, and automation into one startup pack.",
    "zhFinalOutcome": "一份創業驗證與自動化成果包，包含目標客群、訪談、商業模式、MVP、Pitch Deck 與自動化流程。",
    "enFinalOutcome": "A startup validation and automation package with audience, interviews, model, MVP, pitch deck, and automation."
  }
];

const COURSE_RESULT_PACKAGE_META = Object.fromEntries(
  RESULT_PACKAGE_CONFIG.filter(function (p) { return p.courseId; }).map(function (p) {
    return [p.courseId, {
      zhName: p.zhTitle,
      enName: p.enTitle,
      zhPromise: p.zhDescription,
      enPromise: p.enDescription,
      zhFinal: p.zhFinalOutcome,
      enFinal: p.enFinalOutcome
    }];
  })
);


const PREMIUM_LESSON_ID_MAP = {
  "admissions:index:0": "admissions:index:0",
  "admissions:lessonKey:admissions-old-1": "admissions-L1",
  "admissions:index:1": "admissions:index:1",
  "admissions:lessonKey:admissions-old-2": "admissions-L2",
  "admissions:index:2": "admissions:index:3",
  "admissions:lessonKey:admissions-old-3": "admissions-L4",
  "admissions:index:3": "admissions:index:4",
  "admissions:lessonKey:admissions-old-4": "admissions-L5",
  "admissions:index:4": "admissions:index:5",
  "admissions:lessonKey:admissions-old-5": "admissions-L6",
  "admissions:index:5": "admissions:index:6",
  "admissions:lessonKey:admissions-old-6": "admissions-L7",
  "admissions:index:6": "admissions:index:7",
  "admissions:lessonKey:admissions-old-7": "admissions-L8",
  "admissions:index:7": "admissions:index:8",
  "admissions:lessonKey:admissions-old-8": "admissions-L9",
  "admissions:index:9": "admissions:index:9",
  "admissions:lessonKey:admissions-old-10": "admissions-L10",
  "college-learning:index:0": "college-learning:index:0",
  "college-learning:lessonKey:old-L1": "college-learning-L1",
  "college-learning:index:1": "college-learning:index:1",
  "college-learning:lessonKey:old-L2": "college-learning-L2",
  "college-learning:index:3": "college-learning:index:2",
  "college-learning:lessonKey:old-L4": "college-learning-L3",
  "college-learning:index:56": "college-learning:index:3",
  "college-learning:lessonKey:old-L57": "college-learning-L4",
  "college-learning:index:10": "college-learning:index:4",
  "college-learning:lessonKey:old-L11": "college-learning-L5",
  "college-learning:index:11": "college-learning:index:5",
  "college-learning:lessonKey:old-L12": "college-learning-L6",
  "college-learning:index:16": "college-learning:index:6",
  "college-learning:lessonKey:old-L17": "college-learning-L7",
  "college-learning:index:20": "college-learning:index:7",
  "college-learning:lessonKey:old-L21": "college-learning-L8",
  "college-learning:index:25": "college-learning:index:8",
  "college-learning:lessonKey:old-L26": "college-learning-L9",
  "college-learning:index:30": "college-learning:index:9",
  "college-learning:lessonKey:old-L31": "college-learning-L10",
  "college-learning:index:45": "research-competition:index:0",
  "college-learning:lessonKey:old-L46": "research-competition-L1",
  "college-learning:index:43": "research-competition:index:1",
  "college-learning:lessonKey:old-L44": "research-competition-L2",
  "college-learning:index:6": "research-competition:index:2",
  "college-learning:lessonKey:old-L7": "research-competition-L3",
  "college-learning:index:9": "research-competition:index:3",
  "college-learning:lessonKey:old-L10": "research-competition-L4",
  "college-learning:index:17": "research-competition:index:4",
  "college-learning:lessonKey:old-L18": "research-competition-L5",
  "college-learning:index:13": "research-competition:index:5",
  "college-learning:lessonKey:old-L14": "research-competition-L6",
  "college-learning:index:44": "research-competition:index:7",
  "college-learning:lessonKey:old-L45": "research-competition-L8",
  "college-learning:index:21": "research-competition:index:8",
  "college-learning:lessonKey:old-L22": "research-competition-L9",
  "college-learning:index:24": "research-competition:index:9",
  "college-learning:lessonKey:old-L25": "research-competition-L10",
  "college-learning:index:50": "career-internship:index:3",
  "college-learning:lessonKey:old-L51": "career-internship-L4",
  "college-learning:index:53": "career-internship:index:5",
  "college-learning:lessonKey:old-L54": "career-internship-L6",
  "college-learning:index:51": "career-internship:index:6",
  "college-learning:lessonKey:old-L52": "career-internship-L7",
  "college-learning:index:49": "career-internship:index:7",
  "college-learning:lessonKey:old-L50": "career-internship-L8",
  "college-learning:index:52": "career-internship:index:8",
  "college-learning:lessonKey:old-L53": "career-internship-L9",
  "college-learning:index:54": "career-internship:index:9",
  "college-learning:lessonKey:old-L55": "career-internship-L10",
  "college-learning:index:39": "workplace-productivity:index:1",
  "college-learning:lessonKey:old-L40": "workplace-productivity-L2",
  "college-learning:index:41": "workplace-productivity:index:2",
  "college-learning:lessonKey:old-L42": "workplace-productivity-L3",
  "college-learning:index:35": "workplace-productivity:index:3",
  "college-learning:lessonKey:old-L36": "workplace-productivity-L4",
  "college-learning:index:36": "workplace-productivity:index:4",
  "college-learning:lessonKey:old-L37": "workplace-productivity-L5",
  "college-learning:index:37": "workplace-productivity:index:5",
  "college-learning:lessonKey:old-L38": "workplace-productivity-L6",
  "college-learning:index:55": "workplace-productivity:index:7",
  "college-learning:lessonKey:old-L56": "workplace-productivity-L8",
  "college-learning:index:42": "workplace-productivity:index:8",
  "college-learning:lessonKey:old-L43": "workplace-productivity-L9",
  "college-learning:index:38": "workplace-productivity:index:9",
  "college-learning:lessonKey:old-L39": "workplace-productivity-L10",
  "college-learning:index:46": "startup-automation:index:3",
  "college-learning:lessonKey:old-L47": "startup-automation-L4",
  "college-learning:index:47": "startup-automation:index:5",
  "college-learning:lessonKey:old-L48": "startup-automation-L6"
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
