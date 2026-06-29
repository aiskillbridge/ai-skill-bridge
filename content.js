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
        "explain": "指定對象和例子，可以讓 AI 重新調整說明方式。"
      },
      {
        "q": "AI 最不應該被當成什麼？",
        "options": [
          "輔助整理工具",
          "永遠正確的權威答案",
          "練習與發想工具"
        ],
        "answer": 1,
        "explain": "AI 會出錯，重要內容仍需要人判斷與查證。"
      },
      {
        "q": "請 AI 用小學生、高中生、長輩三種版本解釋，是在練習什麼？",
        "options": [
          "讓 AI 產生更多字",
          "調整受眾與表達方式",
          "測試網路速度"
        ],
        "answer": 1,
        "explain": "不同受眾需要不同深度、語氣與例子。"
      },
      {
        "q": "學完本課後，最重要的成果是？",
        "options": [
          "AI 理解筆記",
          "一份付費收據",
          "一篇完全由 AI 代寫的文章"
        ],
        "answer": 0,
        "explain": "本課目標是整理出你自己的 AI 理解筆記。"
      },
      {
        "q": "使用 AI 的第一步通常是？",
        "options": [
          "先把需求說清楚",
          "先複製別人的答案",
          "先關掉電腦"
        ],
        "answer": 0,
        "explain": "清楚需求是 AI 有效回應的基礎。"
      }
    ],
    "caseStudy": "情境案例：小安第一次使用 AI，只問「AI 是什麼？」結果得到一大段看不懂的說明。後來他改問：「請用高中生聽得懂的方式，用三個生活例子解釋 AI，最後用一句話總結。」AI 的回答立刻變得清楚很多。這代表 AI 不是不能教，而是你要告訴它要用什麼程度、什麼格式來教。",
    "commonMistakes": [
      "把 AI 當成一定正確的老師",
      "只問一句很短的問題就期待完美答案",
      "沒有要求 AI 用自己聽得懂的方式說明"
    ],
    "notePrompt": "請寫下：1. 我以前怎麼理解 AI？2. 我現在覺得 AI 最像什麼工具？3. 我會如何向一位完全沒用過 AI 的同學解釋 AI？"
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
        "explain": "它包含角色、任務、對象、時間與輸出格式。"
      },
      {
        "q": "好 Prompt 通常包含哪一組？",
        "options": [
          "角色、任務、背景、格式、限制",
          "心情、天氣、星座",
          "越短越好"
        ],
        "answer": 0,
        "explain": "這五個元素能讓 AI 更精準完成任務。"
      },
      {
        "q": "如果 AI 回答太空泛，最適合怎麼改？",
        "options": [
          "補充背景和格式要求",
          "刪掉問題",
          "完全照抄"
        ],
        "answer": 0,
        "explain": "補充條件能改善回答品質。"
      },
      {
        "q": "「請你擔任高中英文老師」屬於 Prompt 的哪個元素？",
        "options": [
          "角色",
          "限制",
          "輸出格式"
        ],
        "answer": 0,
        "explain": "這是在設定 AI 的回答角度。"
      },
      {
        "q": "「請用表格列出」屬於什麼？",
        "options": [
          "輸出格式",
          "情緒表達",
          "登入方式"
        ],
        "answer": 0,
        "explain": "指定輸出格式能讓答案更好整理。"
      }
    ],
    "caseStudy": "情境案例：小美要做環保報告，她一開始只問「幫我寫報告」。AI 直接產出一篇很普通的文章。後來她改成：「請擔任高中報告教練，幫我規劃 5 分鐘環保簡報，對象是高中生，請輸出開場、三個重點、生活案例與結論。」這次 AI 給出的內容就能直接拿來改成簡報架構。",
    "commonMistakes": [
      "只說幫我寫，沒有說明要做什麼",
      "沒有指定角色",
      "沒有指定輸出格式",
      "沒有說明對象與限制"
    ],
    "notePrompt": "請寫下：1. 我最常問 AI 的模糊問題是什麼？2. 我如何把它改成好 Prompt？3. 我的 Prompt 還缺少哪個元素？"
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
        "explain": "日期與範圍決定讀書計畫的密度和順序。"
      },
      {
        "q": "AI 排出的讀書計畫太滿時，你應該？",
        "options": [
          "照做到崩潰",
          "根據真實時間刪減調整",
          "直接放棄讀書"
        ],
        "answer": 1,
        "explain": "計畫必須符合現實才有用。"
      },
      {
        "q": "好的讀書計畫應該包含？",
        "options": [
          "每天任務、複習方式、自我測驗",
          "只有一句加油",
          "只有科目名稱"
        ],
        "answer": 0,
        "explain": "可執行計畫要包含任務與檢查方式。"
      },
      {
        "q": "AI 在讀書中最適合扮演什麼角色？",
        "options": [
          "讀書教練",
          "替你考試的人",
          "改變考試日期的人"
        ],
        "answer": 0,
        "explain": "AI 可以協助規劃與練習，但不能替你考試。"
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 讀書計畫",
          "遊戲攻略",
          "購物清單"
        ],
        "answer": 0,
        "explain": "本課要產出一份可執行的 AI 讀書計畫。"
      }
    ],
    "caseStudy": "情境案例：阿哲段考前很焦慮，只跟 AI 說「幫我讀書」。AI 給出很籠統的建議。後來他補上考試日期、範圍、每天能讀 40 分鐘、最弱的是文法，AI 就幫他排出 7 天計畫。阿哲再把太滿的部分刪掉，變成真正能執行的讀書表。",
    "commonMistakes": [
      "沒有告訴 AI 考試日期",
      "沒有提供可用時間",
      "沒有說明弱點",
      "完全照 AI 計畫不做現實調整"
    ],
    "notePrompt": "請寫下：1. 我最近要準備哪個科目？2. 我每天真正能用多少時間？3. AI 幫我排的計畫哪裡需要改得更實際？"
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
        "explain": "這些格式更符合學習與複習。"
      },
      {
        "q": "AI 筆記完成後，為什麼要對照原文？",
        "options": [
          "避免漏掉或誤解重點",
          "讓字變多",
          "讓 AI 生氣"
        ],
        "answer": 0,
        "explain": "AI 可能漏掉或誤解內容。"
      },
      {
        "q": "考前 3 分鐘複習版應該？",
        "options": [
          "短、清楚、抓重點",
          "越長越好",
          "完全沒有重點"
        ],
        "answer": 0,
        "explain": "考前複習需要高密度重點。"
      },
      {
        "q": "AI 筆記最適合用來？",
        "options": [
          "輔助整理與複習",
          "取代所有上課",
          "保證考滿分"
        ],
        "answer": 0,
        "explain": "AI 是輔助工具，不是保證成績的工具。"
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 重點筆記",
          "履歷表",
          "旅遊計畫"
        ],
        "answer": 0,
        "explain": "本課要完成自己的 AI 重點筆記。"
      }
    ],
    "caseStudy": "情境案例：小萱把一篇很長的歷史課文貼給 AI，只要求摘要，結果得到一段普通文字。後來她要求 AI 整理成 5 個重點、10 個關鍵詞、3 題可能考題、考前 3 分鐘複習版，筆記立刻變得更適合考前複習。",
    "commonMistakes": [
      "只要求摘要，沒有指定學習用途",
      "沒有要求可能考題",
      "沒有檢查 AI 是否漏掉原文重點",
      "把 AI 筆記當成唯一資料來源"
    ],
    "notePrompt": "請寫下：1. 我整理的是哪一份資料？2. AI 幫我整理出的三個重點是什麼？3. 我檢查後發現哪裡需要修正？"
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
        "explain": "簡報先有清楚邏輯，再談設計。"
      },
      {
        "q": "一頁簡報比較適合？",
        "options": [
          "一個核心訊息與少量重點",
          "整篇文章",
          "完全沒有標題"
        ],
        "answer": 0,
        "explain": "每頁只放一個主訊息更容易理解。"
      },
      {
        "q": "AI 可以幫簡報做什麼？",
        "options": [
          "架構、重點、圖片建議、講稿",
          "替你上台",
          "保證觀眾都喜歡"
        ],
        "answer": 0,
        "explain": "AI 適合協助規劃簡報內容與講稿。"
      },
      {
        "q": "簡報講稿的用途是？",
        "options": [
          "幫助上台表達",
          "塞滿投影片",
          "取代練習"
        ],
        "answer": 0,
        "explain": "講稿幫你練習表達，不是拿來塞進投影片。"
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 簡報草稿",
          "大學申請包",
          "餐廳菜單"
        ],
        "answer": 0,
        "explain": "本課要產出 3 頁 AI 簡報草稿。"
      }
    ],
    "caseStudy": "情境案例：小宇做簡報時，把整篇報告塞進投影片，結果每頁都太滿。後來他請 AI 先規劃 3 頁簡報，每頁只放一個主訊息和三個重點，再請 AI 產生 60 秒講稿，簡報變得更清楚。",
    "commonMistakes": [
      "把文章直接貼到投影片",
      "每頁塞太多字",
      "沒有先確認簡報對象與時間",
      "只追求漂亮，忽略邏輯"
    ],
    "notePrompt": "請寫下：1. 我的簡報主題是什麼？2. 每頁核心訊息是什麼？3. 哪一頁最需要刪減文字？"
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
        "explain": "個人背景越清楚，建議越貼近。"
      },
      {
        "q": "AI 推薦科系後，你應該？",
        "options": [
          "查課程與職業內容",
          "直接照單全收",
          "完全不理"
        ],
        "answer": 0,
        "explain": "AI 是探索起點，不是最後答案。"
      },
      {
        "q": "哪種推薦比較可靠？",
        "options": [
          "有說明適合原因與需要能力",
          "只列熱門科系",
          "只說你一定適合"
        ],
        "answer": 0,
        "explain": "有理由和能力分析才有參考價值。"
      },
      {
        "q": "職涯探索最重要的是？",
        "options": [
          "形成下一步查證方向",
          "立刻決定一輩子",
          "只看薪水"
        ],
        "answer": 0,
        "explain": "探索是逐步查證與理解。"
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "職涯探索報告",
          "段考成績單",
          "購物清單"
        ],
        "answer": 0,
        "explain": "本課要完成一份職涯探索報告。"
      }
    ],
    "caseStudy": "情境案例：小庭不知道未來想讀什麼，只說「我不知道要做什麼」。AI 回答很籠統。後來她提供興趣、擅長科目、喜歡活動、不喜歡的事，AI 幫她整理出可能科系、職業、需要能力與下一步查證方向。",
    "commonMistakes": [
      "只問 AI 我適合什麼，沒有提供背景",
      "把 AI 推薦當成最終答案",
      "沒有查科系課程內容",
      "只看職業名稱不看實際工作內容"
    ],
    "notePrompt": "請寫下：1. AI 推薦我的三個方向是什麼？2. 哪個方向我最想深入了解？3. 我下一步要查哪些資料？"
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
        "explain": "沒有例子的口號不具說服力。"
      },
      {
        "q": "AI 模擬面試最好怎麼進行？",
        "options": [
          "一次問一題並給回饋",
          "一次丟 50 題不回答",
          "只看題目不練習"
        ],
        "answer": 0,
        "explain": "一次一題更接近真實練習。"
      },
      {
        "q": "好的面試回答通常包含？",
        "options": [
          "重點、例子、反思",
          "只有形容詞",
          "完全背稿"
        ],
        "answer": 0,
        "explain": "具體例子和反思能提升說服力。"
      },
      {
        "q": "AI 回饋後應該？",
        "options": [
          "修改並重練",
          "完全忽略",
          "刪掉問題"
        ],
        "answer": 0,
        "explain": "回饋的價值在於下一次回答變好。"
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 面試紀錄",
          "旅遊照片",
          "課表"
        ],
        "answer": 0,
        "explain": "本課要產出面試練習紀錄。"
      }
    ],
    "caseStudy": "情境案例：小恩面試自我介紹時只說「我很認真、很負責」。AI 面試官提醒她太空泛，請她補上具體例子。她改成說明自己曾負責社團活動排程、遇到延誤如何協調、最後活動順利完成，回答就變得有說服力。",
    "commonMistakes": [
      "只背標準答案",
      "沒有具體例子",
      "回答太長沒有重點",
      "沒有根據回饋修正"
    ],
    "notePrompt": "請寫下：1. 我最常被 AI 指出的面試問題是什麼？2. 我可以補上的具體例子是什麼？3. 下一次我要練哪一題？"
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
        "explain": "專案要有可展示的實際成果。"
      },
      {
        "q": "專案 Prompt 應包含？",
        "options": [
          "目標、對象、步驟、成果格式、時間限制",
          "只有我想做專案",
          "沒有任何限制"
        ],
        "answer": 0,
        "explain": "清楚條件能讓 AI 協助拆解任務。"
      },
      {
        "q": "第一版成果完成後應該？",
        "options": [
          "請 AI 評審並修改",
          "立刻停止",
          "完全不檢查"
        ],
        "answer": 0,
        "explain": "修改是讓專案變完整的關鍵。"
      },
      {
        "q": "好的 AI 專案成果應該？",
        "options": [
          "能被別人理解與執行",
          "只有標題",
          "完全沒有目的"
        ],
        "answer": 0,
        "explain": "成果要有清楚目標和可執行內容。"
      },
      {
        "q": "本課成果是什麼？",
        "options": [
          "AI 專案成果",
          "考卷答案",
          "帳號密碼"
        ],
        "answer": 0,
        "explain": "本課整合前面能力，完成一個 AI 小專案。"
      }
    ],
    "caseStudy": "情境案例：小杰想用 AI 做一個真實專案，但只說「我要做企劃」。AI 回答很普通。後來他明確寫出專案目標、使用對象、時間限制與成果格式，AI 就能幫他拆解步驟、做第一版草稿，再進行修改。",
    "commonMistakes": [
      "沒有定義專案目標",
      "沒有說明最後成果格式",
      "只問一次就停止",
      "沒有根據 AI 回饋修改"
    ],
    "notePrompt": "請寫下：1. 我的專案目標是什麼？2. 最終成果要長什麼樣？3. AI 給我的三個修改建議是什麼？"
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
      eyebrow: "AI 新手到進階的互動學習平台",
      title: "讓不懂 AI 的人，也能一步一步學會使用 AI。",
      lead: "從日常學習、報告整理、升學準備到進階實戰，AI Skill Bridge 幫你把 AI 變成真正用得上的能力。",
      start: "免費開始",
      premium: "查看進階課程",
      previewTitle: "你可以完成的 AI 成果",
      previewSubtitle: "從免費入門到進階實戰，每一步都有可交付成果",
      outcomesTitle: "你可以完成的 AI 成果",
      outcomesLead: "從免費入門到進階實戰，每個階段都有具體可交付的成果，不只是零散的 AI 技巧。",
      outcome1: "AI 學習筆記",
      outcome1Desc: "用 AI 整理課堂重點、複習素材與個人學習筆記，讓讀書更有效率。",
      outcome2: "報告與簡報",
      outcome2Desc: "從大綱、論點到講稿，協助完成報告與簡報的完整流程。",
      outcome3: "讀書計畫",
      outcome3Desc: "依目標與時間安排，建立可執行的讀書與學習計畫。",
      outcome4: "大學申請包",
      outcome4Desc: "升學準備專用：科系探索、學習歷程、自述與申請資料一次整理。",
      outcome5: "面試準備",
      outcome5Desc: "常見面試題、自我介紹與模擬練習，求學或求職都能用。",
      beforeAfterTitle: "開始之前 vs 完成之后",
      beforeLabel: "Before",
      afterLabel: "After",
      before1: "不知道怎麼開始",
      before2: "資料很亂",
      before3: "不知道怎麼問 AI",
      after1: "完成可交付成果",
      after2: "知道下一步",
      after3: "AI 協助修改內容",
      featuresTitle: "完整課程包含",
      featuresLead: "免費入門建立 AI 基礎，進階課程依你的目標深入實戰。",
      feature1: "10 堂實戰課",
      feature1Desc: "每堂課都有具體任務，不是只看影片。",
      feature2: "40+ AI Prompt",
      feature2Desc: "可直接複製使用的 Prompt 模板，知道什麼時候該問什麼。",
      feature3: "分級進階路徑",
      feature3Desc: "含大學申請、大學學習、研究、求職、職場與創業等 6 套實戰課程。",
      feature4: "AI 教練回饋",
      feature4Desc: "透過引導式練習，讓 AI 協助你修改與優化內容。",
      ctaTitle: "現在就開始用 AI",
      ctaLead: "先免費體驗入門課程，準備好再選擇適合你的進階實戰課程。",
      ctaStart: "立即免費開始",
      ctaPremium: "升級完整課程",
      priceHint: "進階課程 NT$499 起，一次購買終身存取。"
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
      eyebrow: "Interactive AI Learning — Beginner to Advanced",
      title: "Helping people who don't understand AI learn it step by step.",
      lead: "From daily study and report writing to college prep and advanced practice — AI Skill Bridge turns AI into skills you can actually use.",
      start: "Start Free",
      premium: "View Premium Courses",
      previewTitle: "AI Outcomes You Can Complete",
      previewSubtitle: "From free intro to premium tracks — deliverables at every step",
      outcomesTitle: "AI Outcomes You Can Complete",
      outcomesLead: "From free intro to premium tracks, every stage produces concrete deliverables — not just scattered AI tips.",
      outcome1: "AI Study Notes",
      outcome1Desc: "Use AI to organize class highlights, review materials, and personal study notes.",
      outcome2: "Reports & Slides",
      outcome2Desc: "Complete the full workflow from outlines and arguments to presentation scripts.",
      outcome3: "Study Plans",
      outcome3Desc: "Build actionable reading and learning plans based on your goals and schedule.",
      outcome4: "University Application Package",
      outcome4Desc: "For college prep: major exploration, learning portfolio, statement, and application materials.",
      outcome5: "Interview Preparation",
      outcome5Desc: "Common questions, self-introduction, and practice drills for school or career interviews.",
      beforeAfterTitle: "Before vs After",
      beforeLabel: "Before",
      afterLabel: "After",
      before1: "Don't know where to start",
      before2: "Materials are messy",
      before3: "Don't know how to ask AI",
      after1: "Complete deliverables",
      after2: "Know the next step",
      after3: "AI helps revise content",
      featuresTitle: "What's Included",
      featuresLead: "Free intro builds AI foundations; premium tracks go deep based on your goals.",
      feature1: "10 Hands-on Lessons",
      feature1Desc: "Every lesson has a concrete task — not just watching videos.",
      feature2: "40+ AI Prompts",
      feature2Desc: "Copy-ready prompt templates for every stage of the process.",
      feature3: "Leveled Premium Tracks",
      feature3Desc: "Six tracks including university applications, college learning, research, career, workplace, and startup.",
      feature4: "AI Coach Feedback",
      feature4Desc: "Guided practice so AI helps you revise and improve your content.",
      ctaTitle: "Start Using AI Now",
      ctaLead: "Try the free intro first, then choose the premium track that fits your goal.",
      ctaStart: "Start Free Now",
      ctaPremium: "Upgrade to Full Course",
      priceHint: "Premium from NT$499. Lifetime access with one purchase."
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
      "zhTitle": "第1課：認識大學申請流程與 AI 的角色",
      "enTitle": "Lesson 1: 認識大學申請流程與 AI 的角色",
      "zhConcept": "這一課要先建立正確觀念：大學申請不是只有填志願，而是一個從第一階段篩選、第二階段備審與面試，到最後確認自己是否適合科系的完整流程。AI 的角色不是幫你作弊，也不是幫你捏造經歷，而是幫你整理資料、拆解任務、檢查缺口、模擬練習。",
      "enConcept": "這一課要先建立正確觀念：大學申請不是只有填志願，而是一個從第一階段篩選、第二階段備審與面試，到最後確認自己是否適合科系的完整流程。AI 的角色不是幫你作弊，也不是幫你捏造經歷，而是幫你整理資料、拆解任務、檢查缺口、模擬練習。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「認識大學申請流程與 AI 的角色」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 認識大學申請流程與 AI 的角色. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：學生 A 想申請資訊管理系，但只知道自己學測成績和喜歡電腦。使用 AI 後，他整理出：第一階段要先確認篩選倍率與採計科目；第二階段要準備學習歷程、自我介紹、面試題；目前缺少的是專案作品說明與申請動機。這樣他就知道不是盲目準備，而是有順序地準備。",
      "enExample": "範例：學生 A 想申請資訊管理系，但只知道自己學測成績和喜歡電腦。使用 AI 後，他整理出：第一階段要先確認篩選倍率與採計科目；第二階段要準備學習歷程、自我介紹、面試題；目前缺少的是專案作品說明與申請動機。這樣他就知道不是盲目準備，而是有順序地準備。",
      "zhPractice": "寫下你目前最想申請的 3 個科系。；查詢這 3 個科系第一階段可能看的項目，例如採計科目、倍率、檢定標準。；請 AI 幫你整理第二階段可能需要的備審資料與面試準備。；把 AI 的回答整理成一張「我的申請準備地圖」。",
      "enPractice": "寫下你目前最想申請的 3 個科系。；查詢這 3 個科系第一階段可能看的項目，例如採計科目、倍率、檢定標準。；請 AI 幫你整理第二階段可能需要的備審資料與面試準備。；把 AI 的回答整理成一張「我的申請準備地圖」。",
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
      "enOutcome": "大學申請準備地圖",
      "zhNotePrompt": "請在課程筆記中回答：我目前最清楚的是什麼？我最不清楚的是什麼？接下來 7 天我要完成哪 3 件事？",
      "enNotePrompt": "請在課程筆記中回答：我目前最清楚的是什麼？我最不清楚的是什麼？接下來 7 天我要完成哪 3 件事？",
      "zhDeliverableChecklist": [
        "我已列出 3 個目標科系",
        "我已確認第一階段篩選條件",
        "我已列出第二階段需要準備的資料",
        "我已排出 7 天準備清單",
        "我知道哪些資訊需要自己查證"
      ],
      "enDeliverableChecklist": [
        "我已列出 3 個目標科系",
        "我已確認第一階段篩選條件",
        "我已列出第二階段需要準備的資料",
        "我已排出 7 天準備清單",
        "我知道哪些資訊需要自己查證"
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
      "zhValueTip": "把這份準備地圖拿給老師、家長或同學看，確認他們是否能在 1 分鐘內理解你的申請方向。",
      "enValueTip": "把這份準備地圖拿給老師、家長或同學看，確認他們是否能在 1 分鐘內理解你的申請方向。",
      "zhCaseStudy": "情境案例：小安是高三學生，剛考完學測，只知道自己想申請大學，卻不知道第一階段、第二階段、備審、面試之間的關係。他打開 AI 問「我要申請大學怎麼辦？」AI 給出一堆太大的建議。後來他改成請 AI 幫他拆成：第一階段要確認什麼、第二階段要準備什麼、現在最急的是什麼。這時候他才看懂申請流程。",
      "enCaseStudy": "情境案例：小安是高三學生，剛考完學測，只知道自己想申請大學，卻不知道第一階段、第二階段、備審、面試之間的關係。他打開 AI 問「我要申請大學怎麼辦？」AI 給出一堆太大的建議。後來他改成請 AI 幫他拆成：第一階段要確認什麼、第二階段要準備什麼、現在最急的是什麼。這時候他才看懂申請流程。",
      "zhWorkflow": [
        "先列出目標校系與目前成績。",
        "請 AI 協助拆解第一階段與第二階段準備任務。",
        "把任務分成：現在就要做、本週要做、之後要做。",
        "整理成一份大學申請準備地圖。",
        "把準備地圖放進大學申請包第 1 欄。"
      ],
      "enWorkflow": [
        "先列出目標校系與目前成績。",
        "請 AI 協助拆解第一階段與第二階段準備任務。",
        "把任務分成：現在就要做、本週要做、之後要做。",
        "整理成一份大學申請準備地圖。",
        "把準備地圖放進大學申請包第 1 欄。"
      ],
      "zhCommonMistakes": [
        "只問 AI「我要申請大學怎麼辦」但沒有提供目標校系與目前狀態。",
        "把 AI 的建議當成正式招生規則，沒有回到校系簡章查證。",
        "只準備備審，卻忘記第一階段篩選條件。",
        "沒有把任務排成時間表。"
      ],
      "enCommonMistakes": [
        "只問 AI「我要申請大學怎麼辦」但沒有提供目標校系與目前狀態。",
        "把 AI 的建議當成正式招生規則，沒有回到校系簡章查證。",
        "只準備備審，卻忘記第一階段篩選條件。",
        "沒有把任務排成時間表。"
      ],
      "zhExcellentExample": "高品質成果應該包含：1. 目標校系列表；2. 第一階段檢查項目；3. 第二階段準備項目；4. 備審與面試待辦；5. 未來 7 天行動清單；6. 需要查證的招生資訊。",
      "enExcellentExample": "高品質成果應該包含：1. 目標校系列表；2. 第一階段檢查項目；3. 第二階段準備項目；4. 備審與面試待辦；5. 未來 7 天行動清單；6. 需要查證的招生資訊。",
      "zhCoachPrompt": "你是一位大學申請流程教練。請檢查我的大學申請準備地圖，並指出：第一階段是否有漏掉篩選條件、第二階段是否有準備備審與面試、時間安排是否可行、哪些資訊需要回到招生簡章查證。最後請給我未來 7 天行動清單。",
      "enCoachPrompt": "你是一位大學申請流程教練。請檢查我的大學申請準備地圖，並指出：第一階段是否有漏掉篩選條件、第二階段是否有準備備審與面試、時間安排是否可行、哪些資訊需要回到招生簡章查證。最後請給我未來 7 天行動清單。"
    },
    {
      "zhTitle": "第2課：用 AI 找出最適合自己的科系",
      "enTitle": "Lesson 2: 用 AI 找出最適合自己的科系",
      "zhConcept": "這一課要把科系選擇從『我覺得好像可以』變成『我有理由地選』。AI 可以幫你從興趣、能力、活動經驗與未來想像中找出可能科系，但你必須再查證課程內容、畢業出路與自己是否真的有興趣。",
      "enConcept": "這一課要把科系選擇從『我覺得好像可以』變成『我有理由地選』。AI 可以幫你從興趣、能力、活動經驗與未來想像中找出可能科系，但你必須再查證課程內容、畢業出路與自己是否真的有興趣。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「用 AI 找出最適合自己的科系」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 用 AI 找出最適合自己的科系. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：學生 B 喜歡心理學，也喜歡幫助同學，生物和國文成績不錯。AI 推薦心理、社工、教育、護理、職能治療。學生 B 不是直接照單全收，而是進一步查每個科系的必修課、實習方式與未來工作，最後選出心理、社工、教育三個優先科系。",
      "enExample": "範例：學生 B 喜歡心理學，也喜歡幫助同學，生物和國文成績不錯。AI 推薦心理、社工、教育、護理、職能治療。學生 B 不是直接照單全收，而是進一步查每個科系的必修課、實習方式與未來工作，最後選出心理、社工、教育三個優先科系。",
      "zhPractice": "填寫自己的興趣、強項科目、弱項科目、活動經驗與未來想像。；用 Prompt 請 AI 推薦 5 個可能適合的科系。；請 AI 做出比較表：適合原因、需要能力、未來發展、我目前缺少什麼。；從 5 個科系中選出 3 個優先查證的科系，並寫下原因。",
      "enPractice": "填寫自己的興趣、強項科目、弱項科目、活動經驗與未來想像。；用 Prompt 請 AI 推薦 5 個可能適合的科系。；請 AI 做出比較表：適合原因、需要能力、未來發展、我目前缺少什麼。；從 5 個科系中選出 3 個優先查證的科系，並寫下原因。",
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
      "enOutcome": "科系探索表",
      "zhNotePrompt": "請在課程筆記中寫下：我最有興趣的 3 個科系、選擇理由、需要查證的資料。",
      "enNotePrompt": "請在課程筆記中寫下：我最有興趣的 3 個科系、選擇理由、需要查證的資料。",
      "zhDeliverableChecklist": [
        "我已列出 5 個可能科系",
        "每個科系都有適合原因",
        "每個科系都有需要能力",
        "每個科系都有未來發展",
        "我已選出 3 個優先科系"
      ],
      "enDeliverableChecklist": [
        "我已列出 5 個可能科系",
        "每個科系都有適合原因",
        "每個科系都有需要能力",
        "每個科系都有未來發展",
        "我已選出 3 個優先科系"
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
      "zhValueTip": "不要只看科系名稱，請至少查 3 門必修課，確認你是否真的想學。",
      "enValueTip": "不要只看科系名稱，請至少查 3 門必修課，確認你是否真的想學。",
      "zhCaseStudy": "情境案例：小美想讀心理系，但她只說「我喜歡跟人聊天」。AI 一開始給出很表面的建議。後來她補充自己喜歡的課、擅長的活動、做過的經驗與不喜歡的事情，AI 才能幫她分析：她是適合心理、教育、社工，還是傳播類方向。",
      "enCaseStudy": "情境案例：小美想讀心理系，但她只說「我喜歡跟人聊天」。AI 一開始給出很表面的建議。後來她補充自己喜歡的課、擅長的活動、做過的經驗與不喜歡的事情，AI 才能幫她分析：她是適合心理、教育、社工，還是傳播類方向。",
      "zhWorkflow": [
        "列出自己喜歡的科目、活動、能力與不喜歡的事情。",
        "請 AI 分析可能適合的 5 個科系。",
        "請 AI 說明每個科系需要的能力與課程內容。",
        "自己查證 3 個最有興趣的科系課表與出路。",
        "整理成科系探索表。"
      ],
      "enWorkflow": [
        "列出自己喜歡的科目、活動、能力與不喜歡的事情。",
        "請 AI 分析可能適合的 5 個科系。",
        "請 AI 說明每個科系需要的能力與課程內容。",
        "自己查證 3 個最有興趣的科系課表與出路。",
        "整理成科系探索表。"
      ],
      "zhCommonMistakes": [
        "只看科系名稱，不查課程內容。",
        "只因為熱門就選科系。",
        "把興趣和能力混在一起，沒有分開分析。",
        "沒有列出不適合自己的原因。"
      ],
      "enCommonMistakes": [
        "只看科系名稱，不查課程內容。",
        "只因為熱門就選科系。",
        "把興趣和能力混在一起，沒有分開分析。",
        "沒有列出不適合自己的原因。"
      ],
      "zhExcellentExample": "高品質成果應該包含：至少 5 個候選科系、每個科系的適合原因、需要能力、課程內容、未來出路、風險提醒，以及最後 3 個優先科系排序。",
      "enExcellentExample": "高品質成果應該包含：至少 5 個候選科系、每個科系的適合原因、需要能力、課程內容、未來出路、風險提醒，以及最後 3 個優先科系排序。",
      "zhCoachPrompt": "你是一位高中生升學探索顧問。請檢查我的科系探索表，幫我判斷哪些科系是真的適合、哪些只是表面有興趣。請指出我還需要查哪些課程內容、能力需求與未來出路，最後幫我排序前三志願。",
      "enCoachPrompt": "你是一位高中生升學探索顧問。請檢查我的科系探索表，幫我判斷哪些科系是真的適合、哪些只是表面有興趣。請指出我還需要查哪些課程內容、能力需求與未來出路，最後幫我排序前三志願。"
    },
    {
      "zhTitle": "第3課：用 AI 整理高中三年的學習歷程素材",
      "enTitle": "Lesson 3: 用 AI 整理高中三年的學習歷程素材",
      "zhConcept": "這一課要把零散的高中經驗整理成可以使用的素材庫。你不是沒有內容，而是需要把課程成果、社團、競賽、服務、幹部、自主學習分類，再標註每個素材能展現什麼能力。",
      "enConcept": "這一課要把零散的高中經驗整理成可以使用的素材庫。你不是沒有內容，而是需要把課程成果、社團、競賽、服務、幹部、自主學習分類，再標註每個素材能展現什麼能力。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「用 AI 整理高中三年的學習歷程素材」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 用 AI 整理高中三年的學習歷程素材. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：學生 C 有科展、社團幹部、志工服務、英文簡報、資訊課專題。原本看起來很雜，但用 AI 分類後發現：科展展現研究能力，社團幹部展現溝通協調，志工服務展現同理心，資訊課專題展現解決問題能力。",
      "enExample": "範例：學生 C 有科展、社團幹部、志工服務、英文簡報、資訊課專題。原本看起來很雜，但用 AI 分類後發現：科展展現研究能力，社團幹部展現溝通協調，志工服務展現同理心，資訊課專題展現解決問題能力。",
      "zhPractice": "列出至少 10 個高中三年內的經驗或作品。；請 AI 幫你分類成課程成果、社團、幹部、競賽、服務、自主學習、專題作品。；為每個素材標註可展現的能力。；選出最適合放入申請資料的 5 個素材。",
      "enPractice": "列出至少 10 個高中三年內的經驗或作品。；請 AI 幫你分類成課程成果、社團、幹部、競賽、服務、自主學習、專題作品。；為每個素材標註可展現的能力。；選出最適合放入申請資料的 5 個素材。",
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
      "enOutcome": "學習歷程素材庫",
      "zhNotePrompt": "請在課程筆記中寫下：我最有價值的 5 個素材、每個素材代表的能力、可以用在哪個申請科系。",
      "enNotePrompt": "請在課程筆記中寫下：我最有價值的 5 個素材、每個素材代表的能力、可以用在哪個申請科系。",
      "zhDeliverableChecklist": [
        "我已整理至少 10 個高中素材",
        "每個素材都有分類",
        "每個素材都有對應能力",
        "我已挑出最有價值的 5 個素材",
        "我知道哪些素材不適合放進備審"
      ],
      "enDeliverableChecklist": [
        "我已整理至少 10 個高中素材",
        "每個素材都有分類",
        "每個素材都有對應能力",
        "我已挑出最有價值的 5 個素材",
        "我知道哪些素材不適合放進備審"
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
      "zhValueTip": "如果一個素材不能說明你的能力或成長，就算看起來很厲害，也不一定要放。",
      "enValueTip": "如果一個素材不能說明你的能力或成長，就算看起來很厲害，也不一定要放。",
      "zhCaseStudy": "情境案例：小宇高中三年其實做過很多事，但他只記得社團和幾份作業。AI 一開始也無法幫他整理。後來他把課程成果、活動、競賽、服務、專題、作品全部列出，AI 才能幫他分成能力類別，找出最適合放進備審的素材。",
      "enCaseStudy": "情境案例：小宇高中三年其實做過很多事，但他只記得社團和幾份作業。AI 一開始也無法幫他整理。後來他把課程成果、活動、競賽、服務、專題、作品全部列出，AI 才能幫他分成能力類別，找出最適合放進備審的素材。",
      "zhWorkflow": [
        "先不要篩選，列出高中三年所有可能素材。",
        "把素材分成課程成果、活動、競賽、服務、專題、作品。",
        "請 AI 協助標註每個素材能證明的能力。",
        "請 AI 幫你選出最有申請價值的 5 個素材。",
        "整理成學習歷程素材庫。"
      ],
      "enWorkflow": [
        "先不要篩選，列出高中三年所有可能素材。",
        "把素材分成課程成果、活動、競賽、服務、專題、作品。",
        "請 AI 協助標註每個素材能證明的能力。",
        "請 AI 幫你選出最有申請價值的 5 個素材。",
        "整理成學習歷程素材庫。"
      ],
      "zhCommonMistakes": [
        "一開始就刪掉看似普通的素材。",
        "只放活動名稱，沒有說明自己做了什麼。",
        "沒有把素材和能力連起來。",
        "放太多重複素材。"
      ],
      "enCommonMistakes": [
        "一開始就刪掉看似普通的素材。",
        "只放活動名稱，沒有說明自己做了什麼。",
        "沒有把素材和能力連起來。",
        "放太多重複素材。"
      ],
      "zhExcellentExample": "高品質成果應該包含：至少 10 個素材、素材分類、自己負責的行動、成果或影響、能證明的能力、適合連結的科系，以及 S/A/B/C 級排序。",
      "enExcellentExample": "高品質成果應該包含：至少 10 個素材、素材分類、自己負責的行動、成果或影響、能證明的能力、適合連結的科系，以及 S/A/B/C 級排序。",
      "zhCoachPrompt": "你是一位大學備審審查顧問。請檢查我的學習歷程素材庫，幫我把素材分成 S 級、A 級、B 級、C 級，指出哪些素材重複、哪些素材最能證明能力、哪些素材不建議放進備審。",
      "enCoachPrompt": "你是一位大學備審審查顧問。請檢查我的學習歷程素材庫，幫我把素材分成 S 級、A 級、B 級、C 級，指出哪些素材重複、哪些素材最能證明能力、哪些素材不建議放進備審。"
    },
    {
      "zhTitle": "第4課：用 STAR 架構寫出有說服力的多元表現",
      "enTitle": "Lesson 4: 用 STAR 架構寫出有說服力的多元表現",
      "zhConcept": "這一課要把活動經驗變成有說服力的描述。多元表現不是只列活動名稱，而是要寫出情境、任務、行動與結果。STAR 架構能讓教授看見你做了什麼、怎麼做、學到什麼。",
      "enConcept": "這一課要把活動經驗變成有說服力的描述。多元表現不是只列活動名稱，而是要寫出情境、任務、行動與結果。STAR 架構能讓教授看見你做了什麼、怎麼做、學到什麼。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「用 STAR 架構寫出有說服力的多元表現」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 用 STAR 架構寫出有說服力的多元表現. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：不要只寫『我擔任班長』。可以寫：班上分組合作常常拖延，我負責協調進度，建立共同表格提醒任務，最後讓專題準時完成。這樣教授看得出你的溝通、協調與負責。",
      "enExample": "範例：不要只寫『我擔任班長』。可以寫：班上分組合作常常拖延，我負責協調進度，建立共同表格提醒任務，最後讓專題準時完成。這樣教授看得出你的溝通、協調與負責。",
      "zhPractice": "選出 3 個你想放進備審的活動經驗。；每個活動都用 STAR 寫出 Situation、Task、Action、Result。；請 AI 幫你改寫成 300 字內的多元表現描述。；檢查文字是否真實、具體、沒有誇大。",
      "enPractice": "選出 3 個你想放進備審的活動經驗。；每個活動都用 STAR 寫出 Situation、Task、Action、Result。；請 AI 幫你改寫成 300 字內的多元表現描述。；檢查文字是否真實、具體、沒有誇大。",
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
      "enOutcome": "3 則多元表現描述",
      "zhNotePrompt": "請在課程筆記中記錄：我選的 3 個活動、每個活動的 STAR 重點、最需要修改的地方。",
      "enNotePrompt": "請在課程筆記中記錄：我選的 3 個活動、每個活動的 STAR 重點、最需要修改的地方。",
      "zhDeliverableChecklist": [
        "每則描述都有情境",
        "每則描述都有我的任務",
        "每則描述都有我的行動",
        "每則描述都有結果",
        "文字沒有誇大或捏造"
      ],
      "enDeliverableChecklist": [
        "每則描述都有情境",
        "每則描述都有我的任務",
        "每則描述都有我的行動",
        "每則描述都有結果",
        "文字沒有誇大或捏造"
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
      "zhValueTip": "教授看的是你做了什麼、怎麼做、學到什麼，不是活動名稱有多漂亮。",
      "enValueTip": "教授看的是你做了什麼、怎麼做、學到什麼，不是活動名稱有多漂亮。",
      "zhCaseStudy": "情境案例：小庭在多元表現中寫「我參加志工活動，學到很多」。AI 指出這句太空泛。她改用 STAR：情境是活動現場人手不足，任務是協助動線引導，行動是重新安排報到流程，結果是報到時間縮短。這樣才像能放進備審的內容。",
      "enCaseStudy": "情境案例：小庭在多元表現中寫「我參加志工活動，學到很多」。AI 指出這句太空泛。她改用 STAR：情境是活動現場人手不足，任務是協助動線引導，行動是重新安排報到流程，結果是報到時間縮短。這樣才像能放進備審的內容。",
      "zhWorkflow": [
        "選出 3 個多元表現素材。",
        "用 STAR 拆解：情境、任務、行動、結果。",
        "請 AI 檢查是否太空泛。",
        "補上具體數字、行動與反思。",
        "完成 3 則多元表現描述。"
      ],
      "enWorkflow": [
        "選出 3 個多元表現素材。",
        "用 STAR 拆解：情境、任務、行動、結果。",
        "請 AI 檢查是否太空泛。",
        "補上具體數字、行動與反思。",
        "完成 3 則多元表現描述。"
      ],
      "zhCommonMistakes": [
        "只寫我學到很多，沒有說學到什麼。",
        "只描述活動，沒有描述自己的行動。",
        "沒有結果或影響。",
        "反思太像口號。"
      ],
      "enCommonMistakes": [
        "只寫我學到很多，沒有說學到什麼。",
        "只描述活動，沒有描述自己的行動。",
        "沒有結果或影響。",
        "反思太像口號。"
      ],
      "zhExcellentExample": "高品質成果應該包含：明確情境、自己的任務、具體行動、可觀察結果、反思與科系能力連結。文字不需要誇張，但要具體。",
      "enExcellentExample": "高品質成果應該包含：明確情境、自己的任務、具體行動、可觀察結果、反思與科系能力連結。文字不需要誇張，但要具體。",
      "zhCoachPrompt": "你是一位備審寫作教練。請檢查我的多元表現描述，指出哪一句太空泛、哪裡缺少行動、哪裡缺少結果。請幫我改成更具體但不誇大的版本。",
      "enCoachPrompt": "你是一位備審寫作教練。請檢查我的多元表現描述，指出哪一句太空泛、哪裡缺少行動、哪裡缺少結果。請幫我改成更具體但不誇大的版本。"
    },
    {
      "zhTitle": "第5課：用 AI 產出學習歷程自述初稿",
      "enTitle": "Lesson 5: 用 AI 產出學習歷程自述初稿",
      "zhConcept": "這一課要把素材整理成自述架構。自述不是人生流水帳，而是把你的學習動機、重要經驗、能力成長、申請動機與未來規劃連成一條故事線。",
      "enConcept": "這一課要把素材整理成自述架構。自述不是人生流水帳，而是把你的學習動機、重要經驗、能力成長、申請動機與未來規劃連成一條故事線。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「用 AI 產出學習歷程自述初稿」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 用 AI 產出學習歷程自述初稿. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：學生 D 申請設計系，他不是只寫『我喜歡設計』，而是寫從美術課作品開始，到社群海報設計，再到參加校內展覽，最後確認自己想學視覺傳達。這樣故事線更清楚。",
      "enExample": "範例：學生 D 申請設計系，他不是只寫『我喜歡設計』，而是寫從美術課作品開始，到社群海報設計，再到參加校內展覽，最後確認自己想學視覺傳達。這樣故事線更清楚。",
      "zhPractice": "選出你最想呈現的 3 個學習主軸。；把前面整理好的素材放進對應主軸。；請 AI 幫你規劃自述架構：開頭、學習歷程、能力成長、申請動機、未來規劃。；自己補上真實細節，刪除 AI 產生但不符合你的內容。",
      "enPractice": "選出你最想呈現的 3 個學習主軸。；把前面整理好的素材放進對應主軸。；請 AI 幫你規劃自述架構：開頭、學習歷程、能力成長、申請動機、未來規劃。；自己補上真實細節，刪除 AI 產生但不符合你的內容。",
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
      "zhOutcome": "學習歷程自述初稿",
      "enOutcome": "學習歷程自述初稿",
      "zhNotePrompt": "請在課程筆記中寫下：我的自述主軸、3 個關鍵經驗、我想讓教授記住我的一句話。",
      "enNotePrompt": "請在課程筆記中寫下：我的自述主軸、3 個關鍵經驗、我想讓教授記住我的一句話。",
      "zhDeliverableChecklist": [
        "自述有清楚主軸",
        "有至少 3 個具體經驗",
        "有連結目標科系",
        "有能力成長過程",
        "有未來學習規劃"
      ],
      "enDeliverableChecklist": [
        "自述有清楚主軸",
        "有至少 3 個具體經驗",
        "有連結目標科系",
        "有能力成長過程",
        "有未來學習規劃"
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
      "zhValueTip": "請刪掉『我從小就很喜歡』這類空泛開頭，改用一個真實經驗開場。",
      "enValueTip": "請刪掉『我從小就很喜歡』這類空泛開頭，改用一個真實經驗開場。",
      "zhCaseStudy": "情境案例：小恩寫自述時開頭是「我從小就很喜歡這個科系」。AI 提醒這句太常見也太空泛。後來她改用一次真實經驗開場：某堂課或某個專題讓她開始注意到這個領域，接著連到自己的能力與未來想學的方向，自述就變得更有記憶點。",
      "enCaseStudy": "情境案例：小恩寫自述時開頭是「我從小就很喜歡這個科系」。AI 提醒這句太常見也太空泛。後來她改用一次真實經驗開場：某堂課或某個專題讓她開始注意到這個領域，接著連到自己的能力與未來想學的方向，自述就變得更有記憶點。",
      "zhWorkflow": [
        "先決定自述主軸：我想讓教授記住什麼。",
        "選 3 個最能支持主軸的經驗。",
        "用 AI 檢查段落順序是否清楚。",
        "補上科系連結與未來學習規劃。",
        "完成學習歷程自述初稿。"
      ],
      "enWorkflow": [
        "先決定自述主軸：我想讓教授記住什麼。",
        "選 3 個最能支持主軸的經驗。",
        "用 AI 檢查段落順序是否清楚。",
        "補上科系連結與未來學習規劃。",
        "完成學習歷程自述初稿。"
      ],
      "zhCommonMistakes": [
        "開頭太空泛，例如從小就喜歡。",
        "只堆經歷，沒有主軸。",
        "沒有連結目標科系。",
        "未來規劃寫得太籠統。"
      ],
      "enCommonMistakes": [
        "開頭太空泛，例如從小就喜歡。",
        "只堆經歷，沒有主軸。",
        "沒有連結目標科系。",
        "未來規劃寫得太籠統。"
      ],
      "zhExcellentExample": "高品質成果應該包含：有記憶點的開場、清楚主軸、3 個具體經驗、能力成長、科系連結與未來規劃。語氣真實，不要像模板。",
      "enExcellentExample": "高品質成果應該包含：有記憶點的開場、清楚主軸、3 個具體經驗、能力成長、科系連結與未來規劃。語氣真實，不要像模板。",
      "zhCoachPrompt": "你是一位學習歷程自述修改老師。請檢查我的自述初稿，指出主軸是否清楚、開頭是否有記憶點、經驗是否具體、科系連結是否足夠。請幫我重排段落順序並給修改建議。",
      "enCoachPrompt": "你是一位學習歷程自述修改老師。請檢查我的自述初稿，指出主軸是否清楚、開頭是否有記憶點、經驗是否具體、科系連結是否足夠。請幫我重排段落順序並給修改建議。"
    },
    {
      "zhTitle": "第6課：針對目標科系製作專屬備審資料",
      "enTitle": "Lesson 6: 針對目標科系製作專屬備審資料",
      "zhConcept": "這一課要讓備審資料不再是萬用版本。不同科系重視不同能力，你要先理解科系需求，再選擇最能證明你適合的素材。",
      "enConcept": "這一課要讓備審資料不再是萬用版本。不同科系重視不同能力，你要先理解科系需求，再選擇最能證明你適合的素材。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「針對目標科系製作專屬備審資料」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 針對目標科系製作專屬備審資料. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：申請心理系時，可以強調觀察、人際互動、服務經驗與閱讀反思；申請資訊相關科系時，可以強調專題作品、程式能力、資料分析與解決問題能力。",
      "enExample": "範例：申請心理系時，可以強調觀察、人際互動、服務經驗與閱讀反思；申請資訊相關科系時，可以強調專題作品、程式能力、資料分析與解決問題能力。",
      "zhPractice": "選定一個目標科系。；請 AI 分析這個科系可能重視的能力。；把你的素材和科系需求做成對照表。；決定哪些素材必放、哪些素材可放、哪些素材先不放。",
      "enPractice": "選定一個目標科系。；請 AI 分析這個科系可能重視的能力。；把你的素材和科系需求做成對照表。；決定哪些素材必放、哪些素材可放、哪些素材先不放。",
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
      "enOutcome": "科系專屬備審規劃表",
      "zhNotePrompt": "請在課程筆記中寫下：我的目標科系、該科系重視的 3 個能力、我最能證明這些能力的素材。",
      "enNotePrompt": "請在課程筆記中寫下：我的目標科系、該科系重視的 3 個能力、我最能證明這些能力的素材。",
      "zhDeliverableChecklist": [
        "我已分析目標科系重視的能力",
        "我已把素材對應到科系需求",
        "我知道必放素材",
        "我知道可刪除素材",
        "我知道還缺哪種能力證據"
      ],
      "enDeliverableChecklist": [
        "我已分析目標科系重視的能力",
        "我已把素材對應到科系需求",
        "我知道必放素材",
        "我知道可刪除素材",
        "我知道還缺哪種能力證據"
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
      "zhValueTip": "同一份備審不要丟給所有科系。每個科系至少要有自己的重點版本。",
      "enValueTip": "同一份備審不要丟給所有科系。每個科系至少要有自己的重點版本。"
    },
    {
      "zhTitle": "第7課：建立大學面試題庫與回答架構",
      "enTitle": "Lesson 7: 建立大學面試題庫與回答架構",
      "zhConcept": "這一課要讓你不是背答案，而是建立回答架構。AI 可以幫你產生題庫，但你要把答案改成自己的語言，並且用具體經驗支撐。",
      "enConcept": "這一課要讓你不是背答案，而是建立回答架構。AI 可以幫你產生題庫，但你要把答案改成自己的語言，並且用具體經驗支撐。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「建立大學面試題庫與回答架構」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 建立大學面試題庫與回答架構. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：題目『為什麼選本系？』不要只回答『我有興趣』。可以用：過去經驗 → 對科系理解 → 目前準備 → 未來目標，這樣回答會更完整。",
      "enExample": "範例：題目『為什麼選本系？』不要只回答『我有興趣』。可以用：過去經驗 → 對科系理解 → 目前準備 → 未來目標，這樣回答會更完整。",
      "zhPractice": "請 AI 針對你的目標科系產生 20 題面試題。；把題目分類成自我介紹、申請動機、學習歷程、科系理解、未來規劃、臨場反應。；挑出最難的 5 題。；每題寫下 3 個回答重點，不寫完整背稿。",
      "enPractice": "請 AI 針對你的目標科系產生 20 題面試題。；把題目分類成自我介紹、申請動機、學習歷程、科系理解、未來規劃、臨場反應。；挑出最難的 5 題。；每題寫下 3 個回答重點，不寫完整背稿。",
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
      "enOutcome": "個人面試題庫與回答架構",
      "zhNotePrompt": "請在課程筆記中寫下：我最怕的 5 題、每題的回答重點、我需要補強的例子。",
      "enNotePrompt": "請在課程筆記中寫下：我最怕的 5 題、每題的回答重點、我需要補強的例子。",
      "zhDeliverableChecklist": [
        "我已產生 20 題面試題",
        "題目有分類",
        "我已挑出最難的 5 題",
        "每題有 3 個回答重點",
        "回答不是 AI 背稿"
      ],
      "enDeliverableChecklist": [
        "我已產生 20 題面試題",
        "題目有分類",
        "我已挑出最難的 5 題",
        "每題有 3 個回答重點",
        "回答不是 AI 背稿"
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
      "zhValueTip": "不要背完整答案，只要記住回答架構與關鍵例子，面試時會自然很多。",
      "enValueTip": "不要背完整答案，只要記住回答架構與關鍵例子，面試時會自然很多。"
    },
    {
      "zhTitle": "第8課：用 AI 進行模擬面試與回饋修正",
      "enTitle": "Lesson 8: 用 AI 進行模擬面試與回饋修正",
      "zhConcept": "這一課要把題庫變成真正的口語練習。模擬面試不是要 AI 給標準答案，而是訓練你在壓力下清楚表達，並用回饋修正自己的回答。",
      "enConcept": "這一課要把題庫變成真正的口語練習。模擬面試不是要 AI 給標準答案，而是訓練你在壓力下清楚表達，並用回饋修正自己的回答。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「用 AI 進行模擬面試與回饋修正」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 用 AI 進行模擬面試與回饋修正. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：你回答『我想讀心理系，因為我喜歡幫助人』，AI 可能回饋：太抽象，需要補上具體經驗，例如你曾在志工服務中觀察到什麼、如何理解人的需求。",
      "enExample": "範例：你回答『我想讀心理系，因為我喜歡幫助人』，AI 可能回饋：太抽象，需要補上具體經驗，例如你曾在志工服務中觀察到什麼、如何理解人的需求。",
      "zhPractice": "用 AI 進行至少 5 題模擬面試。；每題回答後請 AI 從清楚度、具體性、邏輯、說服力評分。；把 AI 回饋整理成改進清單。；選 2 題重新回答，確認是否有進步。",
      "enPractice": "用 AI 進行至少 5 題模擬面試。；每題回答後請 AI 從清楚度、具體性、邏輯、說服力評分。；把 AI 回饋整理成改進清單。；選 2 題重新回答，確認是否有進步。",
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
      "enOutcome": "模擬面試紀錄與改進清單",
      "zhNotePrompt": "請在課程筆記中寫下：我最常出現的回答問題、AI 給我的 3 個建議、下一輪練習目標。",
      "enNotePrompt": "請在課程筆記中寫下：我最常出現的回答問題、AI 給我的 3 個建議、下一輪練習目標。",
      "zhDeliverableChecklist": [
        "我已完成至少 5 題模擬面試",
        "每題都有 AI 評分",
        "我已整理常見問題",
        "我已重練最弱的 2 題",
        "我知道下一輪要改善什麼"
      ],
      "enDeliverableChecklist": [
        "我已完成至少 5 題模擬面試",
        "每題都有 AI 評分",
        "我已整理常見問題",
        "我已重練最弱的 2 題",
        "我知道下一輪要改善什麼"
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
      "zhValueTip": "模擬面試不是看分數，是看你下一次有沒有改得更清楚。",
      "enValueTip": "模擬面試不是看分數，是看你下一次有沒有改得更清楚。"
    },
    {
      "zhTitle": "第9課：建立你的個人 AI 升學顧問",
      "enTitle": "Lesson 9: 建立你的個人 AI 升學顧問",
      "zhConcept": "這一課要建立一個可以反覆使用的個人背景 Prompt。你不用每次重新說明自己是誰，而是讓 AI 根據你的目標科系、優勢、弱點、素材與進度給出更個人化的建議。",
      "enConcept": "這一課要建立一個可以反覆使用的個人背景 Prompt。你不用每次重新說明自己是誰，而是讓 AI 根據你的目標科系、優勢、弱點、素材與進度給出更個人化的建議。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「建立你的個人 AI 升學顧問」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 建立你的個人 AI 升學顧問. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：你可以把『我是高中三年級，目標是心理系，有志工服務、班級幹部和閱讀心得，目前缺少面試練習』放進固定 Prompt，AI 後續給的建議就會更貼近你。",
      "enExample": "範例：你可以把『我是高中三年級，目標是心理系，有志工服務、班級幹部和閱讀心得，目前缺少面試練習』放進固定 Prompt，AI 後續給的建議就會更貼近你。",
      "zhPractice": "整理自己的基本背景：年級、目標科系、優勢、弱點。；整理目前已有的素材與申請進度。；建立一段固定的 AI 升學顧問 Prompt。；請 AI 根據這段 Prompt 問你 5 個還需要補充的問題。",
      "enPractice": "整理自己的基本背景：年級、目標科系、優勢、弱點。；整理目前已有的素材與申請進度。；建立一段固定的 AI 升學顧問 Prompt。；請 AI 根據這段 Prompt 問你 5 個還需要補充的問題。",
      "zhFeedbackPrompt": "你是一位Prompt 教練與升學顧問。\n\n以下是我完成的「個人 AI 升學顧問 Prompt」：\n（請把我的實作成果貼在這裡）\n\n請你不要只說「很好」或「可以更具體」，請用專業標準幫我做深度回饋。\n\n第一部分：整體評分\n請從以下面向各給 1-10 分，並說明原因：\n- 背景完整度：1-10 分，並說明扣分原因\n- 目標明確度：1-10 分，並說明扣分原因\n- 限制條件：1-10 分，並說明扣分原因\n- 任務清楚度：1-10 分，並說明扣分原因\n- 可重複使用性：1-10 分，並說明扣分原因\n- 個人化程度：1-10 分，並說明扣分原因\n- 追問品質：1-10 分，並說明扣分原因\n- 實用性：1-10 分，並說明扣分原因\n\n第二部分：優點分析\n請列出我做得最好的 3 個地方，並說明為什麼這些地方有助於大學申請。\n\n第三部分：問題診斷\n請列出最需要改善的 3 個問題。每個問題都要包含：\n- 問題在哪裡\n- 為什麼會影響申請\n- 應該怎麼修改\n\n第四部分：教授視角\n請用大學教授或審查委員的角度，回答：\n1. 這個 Prompt 會不會讓 AI 給出太通用的答案？\n2. 還缺少哪些背景資訊？\n3. 請幫我改寫成更穩定、更個人化的版本。\n\n第五部分：直接修改建議\n請提供：\n1. 一版更好的修改方向\n2. 可以直接加入的句子範例\n3. 我不應該使用的空泛句子\n4. 下一次修改前要補充的資料\n\n第六部分：下一步行動\n請幫我列出 3 個最優先的修改任務，格式如下：\n- 今天先改：\n- 明天補強：\n- 最後檢查：\n\n請記住：不要捏造我的經歷，不要替我編不存在的活動，只能根據我提供的內容提出修改建議。",
      "enFeedbackPrompt": "Act as a Prompt 教練與升學顧問.\n\nHere is my completed work for: 個人 AI 升學顧問 Prompt\n(paste my work here)\n\nDo not only say \"good\" or \"be more specific.\" Give me detailed professional feedback.\n\nPart 1: Overall scoring\nRate each item from 1-10 and explain the reason:\n- 背景完整度：1-10 分，並說明扣分原因\n- 目標明確度：1-10 分，並說明扣分原因\n- 限制條件：1-10 分，並說明扣分原因\n- 任務清楚度：1-10 分，並說明扣分原因\n- 可重複使用性：1-10 分，並說明扣分原因\n- 個人化程度：1-10 分，並說明扣分原因\n- 追問品質：1-10 分，並說明扣分原因\n- 實用性：1-10 分，並說明扣分原因\n\nPart 2: Strengths\nList the 3 strongest parts and explain why they help my university application.\n\nPart 3: Diagnosis\nList the 3 most important problems. For each problem, include:\n- What the issue is\n- Why it hurts the application\n- How to revise it\n\nPart 4: Reviewer perspective\nAnswer these:\n1. 這個 Prompt 會不會讓 AI 給出太通用的答案？\n2. 還缺少哪些背景資訊？\n3. 請幫我改寫成更穩定、更個人化的版本。\n\nPart 5: Direct revision guidance\nProvide:\n1. A better revision direction\n2. Example sentences I can adapt\n3. Vague sentences I should avoid\n4. Information I need to add before revising\n\nPart 6: Next actions\nGive me 3 priorities:\n- Fix today:\n- Improve tomorrow:\n- Final check:\n\nDo not invent my experience. Only give suggestions based on what I provide.",
      "zhQuizItems": [
        {
          "q": "個人 AI 顧問最重要的輸入是？",
          "options": [
            "真實背景與目標",
            "只有姓名",
            "隨便一句話"
          ],
          "answer": "真實背景與目標"
        },
        {
          "q": "固定 Prompt 的好處？",
          "options": [
            "建議更個人化",
            "保證錄取",
            "不用再思考"
          ],
          "answer": "建議更個人化"
        },
        {
          "q": "建立後應先請 AI 做什麼？",
          "options": [
            "確認資料並追問",
            "直接寫完所有文件",
            "忽略背景"
          ],
          "answer": "確認資料並追問"
        }
      ],
      "enQuizItems": [
        {
          "q": "個人 AI 顧問最重要的輸入是？",
          "options": [
            "真實背景與目標",
            "只有姓名",
            "隨便一句話"
          ],
          "answer": "真實背景與目標"
        },
        {
          "q": "固定 Prompt 的好處？",
          "options": [
            "建議更個人化",
            "保證錄取",
            "不用再思考"
          ],
          "answer": "建議更個人化"
        },
        {
          "q": "建立後應先請 AI 做什麼？",
          "options": [
            "確認資料並追問",
            "直接寫完所有文件",
            "忽略背景"
          ],
          "answer": "確認資料並追問"
        }
      ],
      "zhOutcome": "個人 AI 升學顧問 Prompt",
      "enOutcome": "個人 AI 升學顧問 Prompt",
      "zhNotePrompt": "請在課程筆記中寫下：我的固定背景 Prompt、AI 追問我的問題、我補充後的新版本。",
      "enNotePrompt": "請在課程筆記中寫下：我的固定背景 Prompt、AI 追問我的問題、我補充後的新版本。",
      "zhDeliverableChecklist": [
        "Prompt 有我的年級",
        "Prompt 有目標科系",
        "Prompt 有我的優勢與弱點",
        "Prompt 有目前申請進度",
        "Prompt 會要求 AI 先追問"
      ],
      "enDeliverableChecklist": [
        "Prompt 有我的年級",
        "Prompt 有目標科系",
        "Prompt 有我的優勢與弱點",
        "Prompt 有目前申請進度",
        "Prompt 會要求 AI 先追問"
      ],
      "zhScorecard": [
        "背景完整",
        "目標清楚",
        "任務明確",
        "可重複使用",
        "個人化程度"
      ],
      "enScorecard": [
        "背景完整",
        "目標清楚",
        "任務明確",
        "可重複使用",
        "個人化程度"
      ],
      "zhValueTip": "這段 Prompt 可以長期使用，之後準備備審、面試、修改自述都能沿用。",
      "enValueTip": "這段 Prompt 可以長期使用，之後準備備審、面試、修改自述都能沿用。"
    },
    {
      "zhTitle": "第10課：完成完整大學申請包",
      "enTitle": "Lesson 10: 完成完整大學申請包",
      "zhConcept": "這一課要把前面所有成果整合起來。你不是要新增更多資料，而是確認所有資料都支持同一個申請主軸：我想申請什麼、我為什麼適合、我有哪些證據、我未來想怎麼學。",
      "enConcept": "這一課要把前面所有成果整合起來。你不是要新增更多資料，而是確認所有資料都支持同一個申請主軸：我想申請什麼、我為什麼適合、我有哪些證據、我未來想怎麼學。",
      "zhPrompt": "請你擔任我的大學申請教練。我正在學習「完成完整大學申請包」。請先問我需要補充的資料，再依照：目標、操作步驟、範例、我應該產出的成果，逐步帶我完成。",
      "enPrompt": "Act as my university application coach. I am learning: 完成完整大學申請包. Ask what information you need, then guide me with goal, steps, example, and final output.",
      "zhExample": "範例：如果你的目標是心理系，你的科系探索、學習歷程、自述、面試回答都應該共同支持『我理解心理系、我有相關經驗、我知道自己還要學什麼』這條主線。",
      "enExample": "範例：如果你的目標是心理系，你的科系探索、學習歷程、自述、面試回答都應該共同支持『我理解心理系、我有相關經驗、我知道自己還要學什麼』這條主線。",
      "zhPractice": "建立資料夾「我的大學申請包」。；放入前 9 課所有成果。；請 AI 幫你做總檢查：已完成、需修改、缺少資料、下一步。；根據 AI 建議修正最重要的 3 個缺口。",
      "enPractice": "建立資料夾「我的大學申請包」。；放入前 9 課所有成果。；請 AI 幫你做總檢查：已完成、需修改、缺少資料、下一步。；根據 AI 建議修正最重要的 3 個缺口。",
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
      "zhOutcome": "完整大學申請包",
      "enOutcome": "完整大學申請包",
      "zhNotePrompt": "請在課程筆記中寫下：我的申請主軸、目前最完整的資料、最需要補強的 3 件事。",
      "enNotePrompt": "請在課程筆記中寫下：我的申請主軸、目前最完整的資料、最需要補強的 3 件事。",
      "zhDeliverableChecklist": [
        "我已整理前 9 課成果",
        "所有資料都有共同主軸",
        "備審與面試方向一致",
        "我已列出最重要的 3 個修改項目",
        "我知道最後送出前要檢查什麼"
      ],
      "enDeliverableChecklist": [
        "我已整理前 9 課成果",
        "所有資料都有共同主軸",
        "備審與面試方向一致",
        "我已列出最重要的 3 個修改項目",
        "我知道最後送出前要檢查什麼"
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
      "zhValueTip": "最後不要再一直新增資料，應該把最重要的資料整理得更清楚、更有說服力。",
      "enValueTip": "最後不要再一直新增資料，應該把最重要的資料整理得更清楚、更有說服力。"
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
