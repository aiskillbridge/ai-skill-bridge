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
    sequentialUnlock: true,
    zhTitle: "大學生 AI 學習系統課",
    enTitle: "AI Learning System for University Students",
    zhUser: "大一到大四，想用 AI 提升讀書、報告、簡報、筆記與時間管理效率的大學生",
    enUser: "University students who want to use AI for studying, reports, slides, notes, and time management",
    zhOutcome: "完成後你會建立自己的 AI University OS：12 個 Chapter、60 堂課，涵蓋搜尋、筆記、報告、簡報、考試、英文、生產力、協作、專案與求職。",
    enOutcome: "You will build your own AI University OS across 12 chapters and 60 lessons covering search, notes, reports, slides, exams, English, productivity, collaboration, projects, and career prep.",
    zhDesc: "這門課幫助大學生把 AI 變成可重複使用的學習系統，而不是只拿來交作業。課程採 12 Chapter × 5 Lesson，共 60 堂課。",
    enDesc: "This course helps university students turn AI into a reusable learning system, not just a shortcut for assignments. It includes 12 chapters × 5 lessons, for 60 lessons total.",
    zhFinalProduct: "AI University OS",
    enFinalProduct: "AI University OS",
    chapters: [
    {
      id: "ch1",
      icon: "🧠",
      zhTitle: "Chapter 1 建立 AI 學習系統",
      enTitle: "Chapter 1 Build Your AI Learning System",
      start: 0,
      count: 5
    },
    {
      id: "ch2",
      icon: "🔍",
      zhTitle: "Chapter 2 AI 資料搜尋與研究",
      enTitle: "Chapter 2 AI Source Search and Research",
      start: 5,
      count: 5
    },
    {
      id: "ch3",
      icon: "📝",
      zhTitle: "Chapter 3 AI 做筆記",
      enTitle: "Chapter 3 AI Note-Taking",
      start: 10,
      count: 5
    },
    {
      id: "ch4",
      icon: "📑",
      zhTitle: "Chapter 4 AI 寫報告",
      enTitle: "Chapter 4 AI for Reports",
      start: 15,
      count: 5
    },
    {
      id: "ch5",
      icon: "📊",
      zhTitle: "Chapter 5 AI 做簡報",
      enTitle: "Chapter 5 AI Presentations",
      start: 20,
      count: 5
    },
    {
      id: "ch6",
      icon: "🧪",
      zhTitle: "Chapter 6 AI 考試與複習系統",
      enTitle: "Chapter 6 AI Exam and Review System",
      start: 25,
      count: 5
    },
    {
      id: "ch7",
      icon: "🔤",
      zhTitle: "Chapter 7 AI 英文學習系統",
      enTitle: "Chapter 7 AI English Learning System",
      start: 30,
      count: 5
    },
    {
      id: "ch8",
      icon: "⚙️",
      zhTitle: "Chapter 8 AI 學習生產力系統",
      enTitle: "Chapter 8 AI Learning Productivity System",
      start: 35,
      count: 5
    },
    {
      id: "ch9",
      icon: "🤝",
      zhTitle: "Chapter 9 AI 團隊協作與專案管理",
      enTitle: "Chapter 9 AI Team Collaboration and Project Management",
      start: 40,
      count: 5
    },
    {
      id: "ch10",
      icon: "🛠️",
      zhTitle: "Chapter 10 AI 個人專案與作品集",
      enTitle: "Chapter 10 AI Personal Projects and Portfolio",
      start: 45,
      count: 5
    },
    {
      id: "ch11",
      icon: "💼",
      zhTitle: "Chapter 11 AI 求職與職涯發展",
      enTitle: "Chapter 11 AI Job Search and Career Development",
      start: 50,
      count: 5
    },
    {
      id: "ch12",
      icon: "🏛️",
      zhTitle: "Chapter 12 AI University OS 與最終專案",
      enTitle: "Chapter 12 AI University OS and Capstone Project",
      start: 55,
      count: 5
    }
    ],
    zhLessons: [
      "第1課：為什麼大學生一定要學 AI",
      "第2課：打造 AI Workspace",
      "第3課：認識 AI 工具",
      "第4課：Prompt Engineering 入門",
      "第5課：建立 AI Second Brain",
      "第6課：AI 搜尋技巧",
      "第7課：Google Scholar 文獻搜尋",
      "第8課：Perplexity 深度搜尋",
      "第9課：NotebookLM 教材研究",
      "第10課：驗證 AI 資訊真偽",
      "第11課：AI 課堂筆記",
      "第12課：PDF 重點整理",
      "第13課：AI 錄音逐字稿",
      "第14課：AI 心智圖整理",
      "第15課：AI 考前重點整理",
      "第16課：如何快速理解老師的報告要求",
      "第17課：利用 AI 建立報告大綱",
      "第18課：AI 文獻整理與引用（APA 第七版）",
      "第19課：AI 協助寫作與潤稿",
      "第20課：完成一份高品質的大學報告",
      "第21課：AI 如何規劃簡報架構",
      "第22課：Gamma AI 製作簡報",
      "第23課：Canva AI 製作專業簡報",
      "第24課：AI 撰寫演講稿與講稿技巧",
      "第25課：AI 模擬口頭報告與簡報技巧",
      "第26課：AI 整理考試範圍與必考重點",
      "第27課：AI 建立個人化題庫",
      "第28課：AI 模擬考與即時測驗",
      "第29課：AI 錯題分析與觀念補強",
      "第30課：AI 考前衝刺與複習計畫",
      "第31課：AI 英文閱讀與文章理解",
      "第32課：AI 英文寫作與文法修改",
      "第33課：AI 翻譯與中英文表達轉換",
      "第34課：AI 英文口說與情境對話訓練",
      "第35課：AI 英文簡報與上台發表",
      "第36課：AI Word 與文件整理",
      "第37課：AI Excel 與資料處理",
      "第38課：AI PowerPoint 與投影片製作",
      "第39課：AI Google Workspace 協作",
      "第40課：AI Email 與學術溝通",
      "第41課：AI 團隊分工與角色配置",
      "第42課：AI 會議紀錄與重點整理",
      "第43課：AI 任務管理與進度追蹤",
      "第44課：AI 專案規劃與風險管理",
      "第45課：AI 小組報告與成果整合",
      "第46課：AI 專案主題發想與需求定義",
      "第47課：AI 專案規劃與 MVP 設計",
      "第48課：GitHub 專案管理與版本紀錄",
      "第49課：AI 個人網站與作品展示",
      "第50課：AI 作品集整理與最終發表",
      "第51課：AI 履歷撰寫與優化",
      "第52課：AI LinkedIn 個人品牌經營",
      "第53課：AI 面試模擬與回答技巧",
      "第54課：AI 自我介紹與個人故事",
      "第55課：AI 求職策略與職涯規劃",
      "第56課：建立個人 AI 知識管理系統",
      "第57課：建立個人 AI 學習工作流",
      "第58課：建立大學四年 AI 成長地圖",
      "第59課：整合 AI 工具與學習成果",
      "第60課：AI University OS 最終專案"
    ],
    enLessons: [
      "Lesson 1: Why University Students Must Learn AI",
      "Lesson 2: Build Your AI Workspace",
      "Lesson 3: Know Your AI Tools",
      "Lesson 4: Intro to Prompt Engineering",
      "Lesson 5: Build an AI Second Brain",
      "Lesson 6: AI Search Skills",
      "Lesson 7: Google Scholar Literature Search",
      "Lesson 8: Deep Search with Perplexity",
      "Lesson 9: NotebookLM Course-Material Research",
      "Lesson 10: Verify AI Information Authenticity",
      "Lesson 11: AI Class Notes",
      "Lesson 12: PDF Key-Point Condensing",
      "Lesson 13: AI Lecture Transcripts",
      "Lesson 14: AI Mind-Map Organization",
      "Lesson 15: AI Pre-Exam Condensing",
      "Lesson 16: Decode the Assignment Brief",
      "Lesson 17: Build a Report Outline with AI",
      "Lesson 18: Literature Notes and APA 7th Citations",
      "Lesson 19: AI-Assisted Writing and Revision",
      "Lesson 20: Finish a Submission-Ready University Report",
      "Lesson 21: Plan a Presentation Structure with AI",
      "Lesson 22: Build Slides with Gamma AI",
      "Lesson 23: Professional Slides with Canva AI",
      "Lesson 24: AI Speaker Scripts and Delivery Notes",
      "Lesson 25: AI Mock Q&A and Presentation Skills",
      "Lesson 26: Map Exam Scope and Must-Know Priorities",
      "Lesson 27: Build a Personalized Question Bank with AI",
      "Lesson 28: AI Mock Exams and Live Drills",
      "Lesson 29: Error Analysis and Concept Repair",
      "Lesson 30: Pre-Exam Sprint and Review Planning",
      "Lesson 31: AI English Reading and Comprehension",
      "Lesson 32: AI English Writing and Grammar Revision",
      "Lesson 33: AI Translation and Cross-Language Expression",
      "Lesson 34: AI English Speaking and Situational Dialogue",
      "Lesson 35: AI English Presentations and Delivery",
      "Lesson 36: AI Word and Document Organization",
      "Lesson 37: AI Excel and Data Handling",
      "Lesson 38: AI PowerPoint and Slide Production",
      "Lesson 39: AI Google Workspace Collaboration",
      "Lesson 40: AI Email and Academic Communication",
      "Lesson 41: AI Team Roles and Responsibility Design",
      "Lesson 42: AI Meeting Notes and Decision Capture",
      "Lesson 43: AI Task Management and Progress Tracking",
      "Lesson 44: AI Project Planning and Risk Management",
      "Lesson 45: AI Team Deliverable Integration",
      "Lesson 46: Project Ideation and Requirements Definition",
      "Lesson 47: Project Planning and MVP Design",
      "Lesson 48: GitHub Project Management and Version History",
      "Lesson 49: Personal Website and Project Showcase",
      "Lesson 50: Portfolio Curation and Final Presentation",
      "Lesson 51: AI Resume Writing and Optimization",
      "Lesson 52: AI LinkedIn Personal Branding",
      "Lesson 53: AI Interview Simulation and Answering Skills",
      "Lesson 54: AI Self-Introduction and Personal Narrative",
      "Lesson 55: AI Job Search Strategy and Career Planning",
      "Lesson 56: Build Your Personal AI Knowledge System",
      "Lesson 57: Build Your Personal AI Learning Workflows",
      "Lesson 58: Build a Four-Year AI Growth Map",
      "Lesson 59: Integrate AI Tools and Learning Artifacts",
      "Lesson 60: AI University OS Capstone Project"
    ],
    zhValue: [
      "用系統取代零散工具收藏",
      "每堂課都有可重用模板與完成檢查",
      "從學習到求職形成完整 AI University OS"
    ],
    enValue: [
      "Replace scattered tool bookmarks with a real system",
      "Every lesson includes reusable templates and completion checks",
      "Build a complete AI University OS from learning to career prep"
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
    price: "NT$1,299",
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
    price: "NT$1,499",
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
  ],
  "college-learning": [
  {
    "icon": "🎯",
    "title": "為什麼大學生一定要學 AI",
    "description": "理解 AI 如何改變大學學習、報告、研究與求職競爭力，並建立正確使用界線。",
    "goal": "我的大學 AI 學習動機與風險地圖",
    "estimatedTime": "45-60 分鐘",
    "difficulty": "入門",
    "tags": [
      "AI基礎",
      "學習動機",
      "大學生",
      "Chapter1"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 0,
    "chapterZh": "建立 AI 學習系統",
    "chapterEn": "Build Your AI Learning System",
    "zhTitle": "第1課：為什麼大學生一定要學 AI",
    "enTitle": "Lesson 1: Why University Students Must Learn AI",
    "zhValueTip": "理解 AI 如何改變大學學習、報告、研究與求職競爭力，並建立正確使用界線。",
    "enValueTip": "Understand how AI changes university study, reports, research, and career readiness, and set clear usage boundaries.",
    "zhOutcome": "我的大學 AI 學習動機與風險地圖",
    "enOutcome": "My University AI Learning Motivation and Risk Map",
    "zhConcept": "大學生一定要學 AI，不是因為流行，而是因為大學核心任務——讀書、報告、找資料、簡報、考試、專題、實習申請——正在變成「人＋AI」的工作方式。不會用 AI 不一定立刻被淘汰，但會用 AI 的人常能把同樣時間變成更高品質輸出。這一課先釐清三件事：第一，AI 改變速度與結構，不取代責任；你可以更快產出大綱、摘要、題庫與面試練習，但判斷、查證與署名仍在你。第二，最常見錯誤是把作業整段丟給 AI 再原封貼上，這有學術倫理風險，也會失去能力成長。第三，目標不是收藏二十個工具網站，而是建立可重複流程：定義任務、選擇工具、設計 Prompt、檢查輸出、保存模板。當你把 AI 當助理而非代寫機器，它最有價值之處是把模糊問題變清楚、把雜亂資料變結構、把一次經驗變可複製方法。完成本課後，你要用自己的話回答：我為什麼學 AI？這學期最想解決哪三個痛點？我絕不能讓 AI 幫我做哪些事？",
    "enConcept": "University students should learn AI because core academic work is becoming human-plus-AI. AI changes speed and structure, not responsibility. The common mistake is submitting unedited AI writing. The real goal is a reusable workflow: define, choose tools, prompt, inspect, and save templates.",
    "zhCaseStudy": "情境案例：大二小瑜每週趕報告，以前會對 ChatGPT 說「幫我寫永續發展報告」，得到看起來完整卻空泛的文章，助教指出引用不明、論點重複、沒有自己的觀點。後來她改成先寫真實問題「校園外送包裝垃圾如何減少？」，再請 AI 拆成研究問題、資料來源、大綱、反方觀點與查證點。同樣一小時，她得到能真正開始寫作的研究地圖，也明白 AI 最有用的是打開卡住的起點，不是代寫。",
    "enCaseStudy": "Sophomore Xiaoyu used to ask ChatGPT to write full reports and got empty essays. After switching to a real campus-waste question and asking AI for research questions, sources, outline, counterarguments, and verification points, she got a usable research map and learned AI unlocks starts rather than replacing authorship.",
    "zhWorkflow": [
      "寫下這學期最耗時的 3 個學習任務",
      "標註每個任務卡點",
      "請 AI 拆成「人做／AI 協助／必須查證」",
      "定義 AI 使用紅線",
      "整理成一頁動機與風險地圖並保存"
    ],
    "enWorkflow": [
      "List 3 time-consuming tasks",
      "Mark stuck points",
      "Split human / AI / verify",
      "Define AI red lines",
      "Save a one-page motivation and risk map"
    ],
    "zhCommonMistakes": [
      "把會開 ChatGPT 當成會用 AI",
      "只追求更快交作業",
      "完全相信 AI 引用",
      "一次學太多工具"
    ],
    "enCommonMistakes": [
      "Equating opening ChatGPT with AI skill",
      "Optimizing only for speed",
      "Trusting AI citations blindly",
      "Collecting tools without workflows"
    ],
    "zhExcellentExample": "優秀成果是一頁地圖：三個痛點、人／AI／查證分工、三條紅線、本週一個小實驗。例如不是「我要更會用 AI」，而是「兩週內用 AI 把課堂筆記變可複習摘要，並自己重寫關鍵定義」。",
    "enExcellentExample": "A strong output is a one-page map with three pain points, human/AI/verify splits, three red lines, and one weekly experiment written in specific language.",
    "zhPrompt": "【Prompt 1｜動機教練】\n請你擔任大學學習教練。我是大學生，正在思考為什麼要學 AI。\n我的科系：［填寫］\n這學期最耗時的任務：［列出 3 項］\n我目前對 AI 的使用程度：［幾乎沒用／偶爾用／常用］\n\n請先問我 5 個澄清問題。確認後輸出：\n1) 我學 AI 的三個具體理由\n2) 最值得先改善的一個任務\n3) 我不該交給 AI 的三件事\n4) 未來 7 天可執行的實驗計畫\n請用繁體中文，條列清楚，不要空話。",
    "enPrompt": "[Prompt 1 | Motivation Coach] Act as a university learning coach. Ask 5 clarifying questions, then output three reasons, one priority task, three non-negotiable red lines, and a 7-day experiment plan.",
    "zhCoachPrompt": "【Prompt 2｜風險審核】\n你是學術倫理與學習方法顧問。請審核我的「大學 AI 學習動機與風險地圖」。\n檢查：理由是否具體、紅線是否足夠、是否仍有代寫風險、7 天計畫是否可執行。\n請給：總評、三個優點、三個風險、修改後紅線清單、明天只要做的一件事。",
    "enCoachPrompt": "[Prompt 2 | Risk Review] Review my Motivation and Risk Map for specificity, red lines, ghostwriting risk, and actionability. Give judgment, 3 strengths, 3 risks, revised red lines, and one tomorrow action.",
    "zhFeedbackPrompt": "【Prompt 3｜成果回饋】\n你是嚴格但具體的大學學習教練。以下是我的「大學 AI 學習動機與風險地圖」：\n（貼上完整內容）\n\n請評分（1-10）：動機清晰度、任務具體度、紅線完整度、可執行性、長期價值。\n給：3 個優點、3 個必須修改處、一版更好的段落範例、明天的 3 個行動。不要空話，每點指出原文問題。",
    "enFeedbackPrompt": "[Prompt 3 | Output Feedback] Score my map 1-10 on clarity, specificity, red lines, actionability, and long-term value. Give 3 strengths, 3 required edits, one improved paragraph, and 3 tomorrow actions.",
    "zhExample": "範例：痛點「報告總拖到最後一晚」→ 人負責選題與論點；AI 協助大綱與反方觀點；必須自己查證來源。紅線：不讓 AI 直接交作業、不捏造資料、不使用未核對引用。7 天實驗：本週只選一堂課筆記做 AI 摘要＋自己改寫。",
    "enExample": "Example: deadline panic → human chooses topic; AI helps outline; student verifies sources. Red lines forbid ghostwriting and unchecked citations. Weekly experiment: improve one lecture note only.",
    "zhPractice": "寫下本學期最耗時的 3 個任務。；對每個任務做「人做／AI 協助／必須查證」分工。；用 Prompt 1 產初稿，再自己修改至少 40%。；用 Prompt 2 做風險審核並改紅線。；Challenge：選一個真實任務，寫下「若完全交給 AI 會失去什麼能力？」並提出替代用法。",
    "enPractice": "List 3 tasks.；Split human/AI/verify.；Draft with Prompt 1 and revise 40%.；Risk-review with Prompt 2.；Challenge: write what ability you would lose if AI did everything, plus a better alternative.",
    "zhQuizItems": [
      {
        "q": "大學生學 AI 最正確的目標是什麼？",
        "options": [
          "收藏越多工具越好",
          "建立可重複、可查證的人＋AI 工作流",
          "讓 AI 直接完成所有作業"
        ],
        "answer": 1,
        "explain": "重點是流程與判斷，不是工具數或代寫。"
      },
      {
        "q": "下列哪一項最不適合完全交給 AI？",
        "options": [
          "產生報告大綱草稿",
          "直接生成並提交整份報告",
          "整理自己提供的筆記分類建議"
        ],
        "answer": 1,
        "explain": "未修改直接提交有學術倫理風險。"
      },
      {
        "q": "「動機與風險地圖」為什麼重要？",
        "options": [
          "裝飾筆記封面",
          "先釐清為什麼學、學什麼、不學什麼",
          "取代所有後續課程"
        ],
        "answer": 1,
        "explain": "有方向後，Workspace 與工具選擇才有意義。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best goal for learning AI in university?",
        "options": [
          "Collect many tools",
          "Build a reusable verifiable human+AI workflow",
          "Let AI finish every assignment"
        ],
        "answer": 1,
        "explain": "Workflow and judgment matter most."
      },
      {
        "q": "Which should never be fully outsourced?",
        "options": [
          "Drafting an outline",
          "Submitting a full AI-written report unchanged",
          "Sorting your own notes"
        ],
        "answer": 1,
        "explain": "Unedited submission is high risk."
      },
      {
        "q": "Why make a motivation and risk map first?",
        "options": [
          "Decoration",
          "Clarify why/what/what-not before chasing tools",
          "Replace later lessons"
        ],
        "answer": 1,
        "explain": "Direction makes later systems useful."
      }
    ],
    "zhNotePrompt": "請回答：1) 我學 AI 的三個理由？2) 我的三條紅線？3) 本週先實驗哪一個小任務？",
    "enNotePrompt": "Answer: 1) three reasons 2) three red lines 3) this week's experiment",
    "zhDeliverableChecklist": [
      "列出 3 個最耗時任務",
      "完成人／AI／查證分工",
      "寫下至少 3 條紅線",
      "用 Prompt 初稿並自己修改",
      "保存一頁動機與風險地圖"
    ],
    "enDeliverableChecklist": [
      "Listed 3 tasks",
      "Completed human/AI/verify split",
      "Wrote 3+ red lines",
      "Drafted and revised personally",
      "Saved the one-page map"
    ],
    "zhScorecard": [
      "動機清晰",
      "任務具體",
      "紅線完整",
      "可執行性",
      "長期價值"
    ],
    "enScorecard": [
      "Motivation clarity",
      "Task specificity",
      "Red-line quality",
      "Actionability",
      "Long-term value"
    ],
    "resources": [
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "澄清動機、拆解任務、產出初稿地圖"
      },
      {
        "name": "Claude",
        "url": "https://claude.ai",
        "note": "長文整理與較嚴謹的風險審核"
      },
      {
        "name": "學校學術倫理規範",
        "url": "https://www.google.com/search?q=university+generative+AI+academic+integrity",
        "note": "查自己學校對生成式 AI 的規定"
      }
    ],
    "challenge": "找一位同學，用 3 分鐘說明：你為什麼學 AI、紅線是什麼、本週要實驗什麼。講不清就改地圖。"
  },
  {
    "icon": "🖥️",
    "title": "打造 AI Workspace",
    "description": "建立可長期使用的 AI 學習工作區、資料夾結構與模板存放規則。",
    "goal": "我的 AI Workspace 架構圖與資料夾規則",
    "estimatedTime": "45-60 分鐘",
    "difficulty": "入門",
    "tags": [
      "Workspace",
      "檔案管理",
      "模板",
      "Chapter1"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 0,
    "chapterZh": "建立 AI 學習系統",
    "chapterEn": "Build Your AI Learning System",
    "zhTitle": "第2課：打造 AI Workspace",
    "enTitle": "Lesson 2: Build Your AI Workspace",
    "zhValueTip": "建立可長期使用的 AI 學習工作區、資料夾結構與模板存放規則。",
    "enValueTip": "Build a durable AI learning workspace, folder structure, and template rules.",
    "zhOutcome": "我的 AI Workspace 架構圖與資料夾規則",
    "enOutcome": "My AI Workspace Architecture and Folder Rules",
    "zhConcept": "很多大學生不是沒有用 AI，而是每次都從頭聊、從頭找檔案、從頭複製舊 Prompt，結果看起來很忙，實際上沒有累積。AI Workspace 的意思，不是再買一個新軟體，而是把你的學習環境設計成「可找回、可重用、可升級」的系統。一個夠用的 Workspace 至少包含五區：Inbox（臨時丟入）、Courses（依課程分類）、Projects（報告與專題）、Prompts（可重用提示詞）、Outputs（已修改過的成果）。你可以用 Google Drive、Notion、Obsidian 或本機資料夾，重點不是工具品牌，而是命名規則與保存習慣。建議檔名包含日期、課程、任務，例如 2026-03-15_統計學_筆記摘要_v2。還要分開「AI 原始輸出」與「我修改後的版本」，避免以後分不清哪一段是自己的判斷。Workspace 建好後，後面每一課的成果都有地方放，Progress 才會變成真實資產，而不是聊天紀錄裡的碎片。",
    "enConcept": "Many students use AI without accumulation because every chat and file starts from zero. An AI Workspace is a recoverable, reusable, upgradable system with Inbox, Courses, Projects, Prompts, and Outputs. Tool brand matters less than naming rules and the habit of separating raw AI output from your revised version.",
    "zhCaseStudy": "情境案例：大一阿哲把所有 AI 對話都留在瀏覽器，報告檔散落在下載資料夾，需要舊大綱時永遠找不到。期中後他花 40 分鐘建立 Drive：01_Inbox、02_Courses、03_Projects、04_Prompts、05_Outputs，並規定每份 AI 草稿存成 raw，自己改完存成 final。兩週後寫同一門課第二份報告，他直接重用上份的結構模板與引用檢查清單，少花近一半時間。",
    "enCaseStudy": "First-year Zhe kept AI chats in the browser and files in Downloads. After building a five-folder Drive system and separating raw/final versions, he reused templates on the next report and nearly halved his prep time.",
    "zhWorkflow": [
      "選定主工作區（Drive／Notion／本機）",
      "建立 Inbox／Courses／Projects／Prompts／Outputs 五區",
      "訂定檔名規則：日期_課程_任務_版本",
      "區分 raw（AI原稿）與 final（自己修改）",
      "把第1課地圖放進 Outputs，並寫一頁 Workspace 規則"
    ],
    "enWorkflow": [
      "Choose a primary workspace",
      "Create five zones",
      "Define naming rules",
      "Separate raw vs final",
      "Save Lesson 1 map and write workspace rules"
    ],
    "zhCommonMistakes": [
      "只建資料夾卻從不歸檔",
      "所有檔案都叫「期末報告最終版真的最終」",
      "AI 原稿與自己修改混在一起",
      "同時維護五套互不同步的系統"
    ],
    "enCommonMistakes": [
      "Creating folders but never filing",
      "Chaotic final-final filenames",
      "Mixing raw AI and revised work",
      "Maintaining too many unsynced systems"
    ],
    "zhExcellentExample": "優秀成果包含：一張架構圖、五區用途說明、檔名範例 3 個、raw/final 規則、每週日 10 分鐘整理習慣。看完別人也能照做。",
    "enExcellentExample": "A strong deliverable includes an architecture diagram, zone purposes, three filename examples, raw/final rules, and a weekly 10-minute cleanup habit.",
    "zhPrompt": "【Prompt 1｜Workspace 設計師】\n請擔任大學生數位工作流顧問。我的裝置與工具：［例如 Mac + Google Drive + Notion］\n我每週主要任務：［讀書／報告／社團／實習準備］\n請先問我 4 個問題，再設計一套最小可行 AI Workspace：資料夾結構、命名規則、raw/final 規則、每週整理流程。輸出繁體中文檢查清單。",
    "enPrompt": "[Prompt 1 | Workspace Designer] Ask 4 questions, then design a minimal AI Workspace with folders, naming, raw/final rules, and weekly cleanup.",
    "zhCoachPrompt": "【Prompt 2｜規則壓力測試】\n請檢查我的 AI Workspace 架構圖。假設下週同時有兩門課報告、一次考試、一個社團企劃，指出哪裡會塞車，並給出更精簡的規則修正版。",
    "enCoachPrompt": "[Prompt 2 | Stress Test] Review my workspace map against a heavy week with two reports, one exam, and a club plan. Find bottlenecks and propose a simpler rule set.",
    "zhFeedbackPrompt": "【Prompt 3｜成果回饋】\n以下是我的 AI Workspace 架構圖與規則：\n（貼上）\n請評分：清晰度、可執行性、可擴充性、命名一致性、維護成本。給三個必改項與一版可直接複製的資料夾樹狀圖。",
    "enFeedbackPrompt": "[Prompt 3 | Feedback] Score clarity, actionability, scalability, naming consistency, and maintenance cost. Give three must-fix items and a copy-ready folder tree.",
    "zhExample": "範例資料夾：02_Courses/統計學/2026-03-10_講義摘要_raw.md 與 2026-03-10_講義摘要_final.md；04_Prompts/報告大綱_v1.txt；05_Outputs/動機風險地圖_final.pdf。",
    "enExample": "Example: Courses/Statistics/2026-03-10_notes_raw.md and _final.md; Prompts/report-outline_v1.txt; Outputs/motivation-risk-map_final.pdf.",
    "zhPractice": "選定一個主工作區並建立五區。；寫下檔名規則與 raw/final 規則。；把第1課成果歸檔到 Outputs。；用 Prompt 1 產架構圖，自己改到可執行。；Challenge：清空下載資料夾中與課業有關的檔案，全部依新規則歸檔至少 10 個檔。",
    "enPractice": "Create five zones.；Write naming and raw/final rules.；File Lesson 1 output.；Draft with Prompt 1 and revise.；Challenge: refile at least 10 academic files from Downloads.",
    "zhQuizItems": [
      {
        "q": "AI Workspace 最核心的目的是什麼？",
        "options": [
          "讓桌面看起來漂亮",
          "讓學習成果可找回、可重用、可升級",
          "強迫使用某個付費軟體"
        ],
        "answer": 1,
        "explain": "重點是累積與重用，不是工具品牌。"
      },
      {
        "q": "為什麼要分開 raw 與 final？",
        "options": [
          "檔案比較多比較好",
          "區分 AI 原稿與自己修改，方便查證與負責",
          "讓老師無法檢查"
        ],
        "answer": 1,
        "explain": "分隔版本有助學術誠信與後續修改。"
      },
      {
        "q": "下列哪個檔名較佳？",
        "options": [
          "期末報告最終版真的最終.docx",
          "2026-04-02_行銷學_競品分析_final.docx",
          "newnew2.docx"
        ],
        "answer": 1,
        "explain": "日期＋課程＋任務＋版本最易找回。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Core purpose of an AI Workspace?",
        "options": [
          "Pretty desktop",
          "Make learning outputs recoverable and reusable",
          "Force a paid app"
        ],
        "answer": 1,
        "explain": "Accumulation matters most."
      },
      {
        "q": "Why separate raw and final?",
        "options": [
          "More files",
          "Distinguish AI draft from your revision for integrity and reuse",
          "Hide from teachers"
        ],
        "answer": 1,
        "explain": "Version clarity supports integrity."
      },
      {
        "q": "Best filename?",
        "options": [
          "final-final.docx",
          "2026-04-02_Marketing_CompetitorAnalysis_final.docx",
          "newnew2.docx"
        ],
        "answer": 1,
        "explain": "Date+course+task+version is searchable."
      }
    ],
    "zhNotePrompt": "請寫下：我的主工作區是什麼？五區怎麼用？本週歸檔規則是什麼？",
    "enNotePrompt": "Write your primary workspace, five-zone uses, and weekly filing rule.",
    "zhDeliverableChecklist": [
      "建立五區資料夾",
      "寫好命名規則",
      "定義 raw/final",
      "歸檔第1課成果",
      "完成一頁 Workspace 架構圖"
    ],
    "enDeliverableChecklist": [
      "Created five zones",
      "Wrote naming rules",
      "Defined raw/final",
      "Filed Lesson 1",
      "Finished workspace map"
    ],
    "zhScorecard": [
      "結構清晰",
      "命名一致",
      "可執行",
      "可擴充",
      "維護成本"
    ],
    "enScorecard": [
      "Structure",
      "Naming",
      "Actionability",
      "Scalability",
      "Maintenance"
    ],
    "resources": [
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "跨裝置同步的主檔案庫"
      },
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "可做課程頁、模板與任務看板"
      },
      {
        "name": "Obsidian",
        "url": "https://obsidian.md",
        "note": "適合本地筆記與 Second Brain 連結"
      }
    ],
    "challenge": "設定每週日固定 10 分鐘「Workspace 清理」，連續兩週執行並在筆記記錄你刪除或歸檔了什麼。"
  },
  {
    "icon": "🧰",
    "title": "認識 AI 工具",
    "description": "比較 ChatGPT、Claude、Gemini、Perplexity、NotebookLM 的適用場景，建立選工具決策表。",
    "goal": "我的大學 AI 工具決策表",
    "estimatedTime": "45-60 分鐘",
    "difficulty": "初階",
    "tags": [
      "工具選擇",
      "ChatGPT",
      "Perplexity",
      "NotebookLM",
      "Chapter1"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 0,
    "chapterZh": "建立 AI 學習系統",
    "chapterEn": "Build Your AI Learning System",
    "zhTitle": "第3課：認識 AI 工具",
    "enTitle": "Lesson 3: Know Your AI Tools",
    "zhValueTip": "比較 ChatGPT、Claude、Gemini、Perplexity、NotebookLM 的適用場景，建立選工具決策表。",
    "enValueTip": "Compare ChatGPT, Claude, Gemini, Perplexity, and NotebookLM and build a tool-choice matrix.",
    "zhOutcome": "我的大學 AI 工具決策表",
    "enOutcome": "My University AI Tool Decision Matrix",
    "zhConcept": "大學生常問「到底要用哪個 AI？」真正的答案是：依任務選工具，而不是找一個萬能軟體。ChatGPT 適合腦力激盪、改寫、模擬對話與通用任務；Claude 適合長文件閱讀、潤稿與較細膩的結構整理；Gemini 適合與 Google 文件／信箱／雲端生態協作；Perplexity 適合需要來源的快速研究與比較；NotebookLM 適合你已有 PDF、講義、錄音稿時，做「依來源」的問答與摘要。這一課要你建立決策表：任務類型、首選工具、備援工具、為什麼、注意事項。例如「找最新資料」優先 Perplexity 再回官方來源查證；「整理老師 PDF」優先 NotebookLM；「改自我介紹語氣」可用 ChatGPT 或 Claude。記住：工具會更新，決策原則比較不容易過時——先問任務是創造、整理、搜尋還是依既有資料問答，再選工具。",
    "enConcept": "Choose tools by task, not by hype. ChatGPT for ideation and general work, Claude for long documents, Gemini for Google ecosystem, Perplexity for sourced research, NotebookLM for Q&A over your own PDFs and notes. Build a decision matrix you can reuse all semester.",
    "zhCaseStudy": "情境案例：大三小恩做專題文獻，一開始全丟給 ChatGPT，常得到無來源或假引用。後來她改流程：Perplexity 找方向與關鍵字 → Google Scholar 找正式論文 → NotebookLM 上傳 PDF 做重點問答 → Claude 幫她整理比較表。同樣三小時，她第一次交出有真實出處的文獻筆記。",
    "enCaseStudy": "Junior Xiaoen stopped asking ChatGPT for fake citations. Her new flow used Perplexity for direction, Scholar for papers, NotebookLM for PDF Q&A, and Claude for comparison tables—producing real sourced notes.",
    "zhWorkflow": [
      "列出本週 5 個真實學習任務",
      "為每個任務選首選與備援工具",
      "寫下選擇理由與風險",
      "實際各試用一次並記錄感受",
      "整理成可重用的工具決策表"
    ],
    "enWorkflow": [
      "List 5 real tasks",
      "Choose primary and backup tools",
      "Write reasons and risks",
      "Try each once",
      "Save a reusable decision matrix"
    ],
    "zhCommonMistakes": [
      "任何事都只用同一個聊天機器人",
      "把搜尋型任務交給不善於給來源的工具後不查證",
      "還沒上傳自己的資料就怪 NotebookLM 不準",
      "把「會登錄帳號」當成「會選工具」"
    ],
    "enCommonMistakes": [
      "Using one chatbot for everything",
      "Skipping verification after search-like tasks",
      "Expecting NotebookLM magic without uploading sources",
      "Confusing account access with tool skill"
    ],
    "zhExcellentExample": "優秀決策表有欄位：任務、首選、備援、原因、查證方式、範例 Prompt 入口。至少覆蓋讀書、報告、簡報、考試、郵件五類。",
    "enExcellentExample": "A strong matrix covers study, reports, slides, exams, and email with primary/backup tools, reasons, and verification methods.",
    "zhPrompt": "【Prompt 1｜工具顧問】\n請擔任大學 AI 工具顧問。我的任務清單：［貼上 5 項］\n可使用工具：ChatGPT、Claude、Gemini、Perplexity、NotebookLM。\n請輸出表格：任務｜首選工具｜備援｜理由｜主要風險｜建議查證方式。不要推銷付費方案，只要可執行建議。",
    "enPrompt": "[Prompt 1 | Tool Advisor] Given 5 tasks and these tools, output a table with primary/backup tools, reasons, risks, and verification methods.",
    "zhCoachPrompt": "【Prompt 2｜選錯工具診斷】\n我有一個任務：［描述］。我原本想用：［工具］。請判斷是否合適；若不合適，告訴我更適合的工具、為什麼，以及我該提供給 AI 的最小資料。",
    "enCoachPrompt": "[Prompt 2 | Mischoice Diagnosis] Evaluate whether my chosen tool fits the task; if not, recommend a better tool and the minimum context I should provide.",
    "zhFeedbackPrompt": "【Prompt 3｜決策表回饋】\n以下是我的大學 AI 工具決策表：\n（貼上）\n請指出：哪些任務選錯工具、哪些理由太空泛、哪裡缺少查證步驟。給修正後的完整表格。",
    "enFeedbackPrompt": "[Prompt 3 | Matrix Feedback] Critique my tool matrix for wrong matches, vague reasons, and missing verification. Provide a corrected full table.",
    "zhExample": "範例列：任務「整理三份 PDF 期末考重點」→ 首選 NotebookLM，備援 Claude；理由是要依既有來源；風險是講義本身可能過時；查證方式是對照老師指定範圍。",
    "enExample": "Example row: summarize three exam PDFs → NotebookLM primary, Claude backup; reason is source-grounded review; verify against the official syllabus scope.",
    "zhPractice": "列出本週 5 個真實任務。；完成工具決策表。；每個工具至少實測 1 次並記錄。；用 Prompt 1/2  refinement。；Challenge：故意用「較不適合」的工具做同一任務，寫下品質差異。",
    "enPractice": "List 5 tasks.；Build the matrix.；Test each tool once.；Refine with prompts.；Challenge: intentionally use a weaker tool and compare quality.",
    "zhQuizItems": [
      {
        "q": "需要快速找有來源的網路資料時，較適合？",
        "options": [
          "只開 pen 工具亂猜",
          "Perplexity，再回原站查證",
          "任何工具都一樣"
        ],
        "answer": 1,
        "explain": "Perplexity 擅長帶來源的研究起步，但仍要查證。"
      },
      {
        "q": "已有老師講義 PDF，想依資料問答，較適合？",
        "options": [
          "NotebookLM",
          "只靠記憶瞎猜",
          "完全不用 AI"
        ],
        "answer": 0,
        "explain": "NotebookLM 適合對自有文件做 grounded Q&A。"
      },
      {
        "q": "工具決策表最不該缺少哪一欄？",
        "options": [
          "喜歡的顏色",
          "查證方式與風險",
          "明星代言"
        ],
        "answer": 1,
        "explain": "選工具同時要管理風險。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best starting tool for sourced web research?",
        "options": [
          "Random guessing",
          "Perplexity, then verify originals",
          "Any tool equally"
        ],
        "answer": 1,
        "explain": "Perplexity helps with sources but still needs verification."
      },
      {
        "q": "Best for Q&A over your lecture PDFs?",
        "options": [
          "NotebookLM",
          "Guessing",
          "Avoid AI"
        ],
        "answer": 0,
        "explain": "NotebookLM is built for your documents."
      },
      {
        "q": "What must a tool matrix include?",
        "options": [
          "Favorite color",
          "Risks and verification",
          "Celebrity endorsement"
        ],
        "answer": 1,
        "explain": "Risk management is part of tool choice."
      }
    ],
    "zhNotePrompt": "寫下：我最常用的兩個工具是什麼？我最容易選錯的任務是什麼？下次怎麼改？",
    "enNotePrompt": "Write your two most-used tools, your most common mischoice, and how you will fix it.",
    "zhDeliverableChecklist": [
      "列出 5 個真實任務",
      "完成決策表",
      "每個工具至少測試一次",
      "補上查證方式",
      "保存到 Workspace/Prompts 或 Outputs"
    ],
    "enDeliverableChecklist": [
      "Listed 5 tasks",
      "Finished matrix",
      "Tested each tool",
      "Added verification",
      "Saved to Workspace"
    ],
    "zhScorecard": [
      "任務覆蓋",
      "工具匹配",
      "理由清楚",
      "風險意識",
      "可重用性"
    ],
    "enScorecard": [
      "Coverage",
      "Tool fit",
      "Reason quality",
      "Risk awareness",
      "Reusability"
    ],
    "resources": [
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "有來源的研究起步"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "針對自有 PDF／筆記問答"
      },
      {
        "name": "Gemini",
        "url": "https://gemini.google.com",
        "note": "Google 生態協作與多模態任務"
      }
    ],
    "challenge": "未來 48 小時內，任何學習任務先查決策表再開口問 AI，並記錄至少 3 次「我選了哪個工具、為什麼」。"
  },
  {
    "icon": "✍️",
    "title": "Prompt Engineering 入門",
    "description": "學會寫清楚、可重用、可檢查的 Prompt：角色、目標、背景、格式、限制與檢查。",
    "goal": "我的 Prompt 公式卡與 5 個可重用模板",
    "estimatedTime": "45-60 分鐘",
    "difficulty": "初階",
    "tags": [
      "Prompt",
      "提示工程",
      "模板",
      "Chapter1"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 0,
    "chapterZh": "建立 AI 學習系統",
    "chapterEn": "Build Your AI Learning System",
    "zhTitle": "第4課：Prompt Engineering 入門",
    "enTitle": "Lesson 4: Intro to Prompt Engineering",
    "zhValueTip": "學會寫清楚、可重用、可檢查的 Prompt：角色、目標、背景、格式、限制與檢查。",
    "enValueTip": "Learn clear, reusable, checkable prompts: role, goal, context, format, constraints, and checks.",
    "zhOutcome": "我的 Prompt 公式卡與 5 個可重用模板",
    "enOutcome": "My Prompt Formula Card and 5 Reusable Templates",
    "zhConcept": "Prompt Engineering 入門不是背一堆酷炫指令，而是學會把模糊需求翻譯成 AI 可執行的規格。一個穩定可用的 Prompt 通常包含：角色（你希望 AI 像誰）、目標（要完成什麼）、背景（科系、程度、截止、限制）、輸入資料（你提供什麼）、輸出格式（表格、步驟、清單）、品質標準（什麼叫好）、禁止事項（不要代寫全文、不要假引用）。大學生最常見的壞 Prompt 是「幫我寫報告」「幫我想想」，好 Prompt 會說「請擔任課程助教，依我提供的三點大綱，產出比較表與我需要自行補充的資料清單，不要寫完整正文」。這一課你要產出公式卡：角色＋目標＋背景＋格式＋限制＋檢查問題。並做五個模板：筆記摘要、報告大綱、測驗練習、郵件回覆、面試練習。以後每次只替換變數，不要從空白聊天重來。",
    "enConcept": "Prompt engineering means translating vague needs into executable specs: role, goal, context, inputs, format, quality bar, and constraints. Bad prompts say “write my report.” Good prompts request structure, checklists, and explicit non-goals like no full ghostwriting.",
    "zhCaseStudy": "情境案例：大四阿凱準備實習面試，對 AI 說「幫我準備面試」得到空泛建議。後來他改成提供職缺、履歷重點、三個專案，並要求「先問缺漏 → 產出 10 題行為面試題 → 每題給 STAR 架構 → 指出我需要補充的量化數據」。練習品質立刻變具體，他也第一次知道自己履歷缺數據。",
    "enCaseStudy": "Senior Kai's vague “help me interview” prompt failed. After providing the job, resume highlights, and projects—and asking for clarifying questions, 10 behavioral questions, STAR scaffolds, and missing metrics—he got actionable practice.",
    "zhWorkflow": [
      "寫下你的 Prompt 公式卡六欄",
      "把一個壞 Prompt 改成好 Prompt",
      "建立 5 個可重用模板",
      "每個模板加入「先問我問題」與「不要做的事」",
      "存進 Workspace/Prompts"
    ],
    "enWorkflow": [
      "Write a six-part formula card",
      "Rewrite one bad prompt",
      "Build 5 reusable templates",
      "Add clarifying questions and non-goals",
      "Save to Workspace/Prompts"
    ],
    "zhCommonMistakes": [
      "一次叫 AI 做完所有事",
      "不給背景卻怪 AI 不懂你",
      "不指定格式導致長篇廢話",
      "沒有要求 AI 先問澄清問題"
    ],
    "enCommonMistakes": [
      "Asking AI to do everything at once",
      "Providing no context",
      "Omitting output format",
      "Skipping clarifying questions"
    ],
    "zhExcellentExample": "優秀模板會有變數槽位［課程］［目標］［程度］［截止日］，以及輸出檢查清單。任何人填空就能用。",
    "enExcellentExample": "A strong template has variable slots and an output checklist so anyone can fill and reuse it.",
    "zhPrompt": "【Prompt 1｜Prompt 教練】\n請擔任 Prompt Engineering 教練。我的壞 Prompt 是：［貼上］\n請指出缺了哪些要素，改寫成包含角色、目標、背景、格式、限制、檢查問題的好 Prompt，並解釋每一段為什麼必要。",
    "enPrompt": "[Prompt 1 | Prompt Coach] Diagnose my weak prompt and rewrite it with role, goal, context, format, constraints, and check questions.",
    "zhCoachPrompt": "【Prompt 2｜模板工廠】\n請依我的科系［填寫］與常見任務，產出 5 個可重用 Prompt 模板（筆記、報告、考試、郵件、面試）。每個模板用［變數］標記，並附「成功標準」三點。",
    "enCoachPrompt": "[Prompt 2 | Template Factory] Create 5 reusable templates for notes, reports, exams, email, and interviews with variables and success criteria.",
    "zhFeedbackPrompt": "【Prompt 3｜模板評審】\n以下是我的 Prompt 公式卡與 5 個模板：\n（貼上）\n請評分清晰度、可重用性、限制完整度、是否避免代寫風險。對每個模板給一處必改，並提供改寫後完整版。",
    "enFeedbackPrompt": "[Prompt 3 | Template Review] Score clarity, reusability, constraint quality, and anti-ghostwriting design. Give one must-fix per template plus full rewrites.",
    "zhExample": "壞：幫我寫行銷報告。\n好：請擔任行銷系助教。目標：依我提供的主題與三個論點，產出報告大綱與每段需要的證據類型。背景：大三、2000 字、兩天後交。格式：表格。限制：不要寫完整正文、不要編造數據。先問我缺少什麼資料。",
    "enExample": "Bad: write my marketing report. Good: act as a TA; produce an outline and evidence types from my topic and three arguments; no full essay; no fabricated data; ask clarifying questions first.",
    "zhPractice": "完成 Prompt 公式卡。；改寫至少 3 個自己以前的壞 Prompt。；建立 5 個模板並存檔。；用 Prompt 3 做評審後再改一輪。；Challenge：把其中 1 個模板分享給同學，請他只靠填空完成一次真實任務。",
    "enPractice": "Finish the formula card.；Rewrite 3 weak prompts.；Build and save 5 templates.；Review with Prompt 3.；Challenge: let a classmate run one template by fill-in-the-blank only.",
    "zhQuizItems": [
      {
        "q": "好 Prompt 通常不該缺少什麼？",
        "options": [
          "角色、目標、格式與限制",
          "盡量寫得越短越好且無背景",
          "要求 AI 一定要寫完整作業正文"
        ],
        "answer": 0,
        "explain": "規格越清楚，輸出越可控。"
      },
      {
        "q": "為什麼要讓 AI 先問澄清問題？",
        "options": [
          "浪費時間",
          "減少因背景不足而產生的空泛或錯誤答案",
          "讓 AI 拒絕工作"
        ],
        "answer": 1,
        "explain": "澄清能提高相關性與正確性。"
      },
      {
        "q": "大學生 Prompt 的重要限制常常是？",
        "options": [
          "不要查證",
          "不要代寫全文、不要假引用",
          "不要輸出格式"
        ],
        "answer": 1,
        "explain": "學術場景要明確禁止代寫與假資料。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What should a strong prompt include?",
        "options": [
          "Role, goal, format, constraints",
          "Only a short vague ask",
          "A demand for a full submitted essay"
        ],
        "answer": 0,
        "explain": "Clear specs improve control."
      },
      {
        "q": "Why ask AI to clarify first?",
        "options": [
          "Waste time",
          "Reduce vague or wrong answers from missing context",
          "Make AI refuse"
        ],
        "answer": 1,
        "explain": "Clarifying improves relevance."
      },
      {
        "q": "A key student constraint is often?",
        "options": [
          "Never verify",
          "No full ghostwriting and no fake citations",
          "No output format"
        ],
        "answer": 1,
        "explain": "Academic integrity constraints matter."
      }
    ],
    "zhNotePrompt": "寫下你的公式卡，並貼上你改得最好的一個前後對照。",
    "enNotePrompt": "Write your formula card and your best before/after prompt pair.",
    "zhDeliverableChecklist": [
      "完成公式卡六欄",
      "改寫至少 3 個壞 Prompt",
      "建立 5 個模板",
      "每個模板含限制與成功標準",
      "存進 Prompts 資料夾"
    ],
    "enDeliverableChecklist": [
      "Finished formula card",
      "Rewrote 3+ weak prompts",
      "Built 5 templates",
      "Added constraints and success criteria",
      "Saved to Prompts"
    ],
    "zhScorecard": [
      "清晰度",
      "可重用",
      "限制完整",
      "防代寫",
      "實用性"
    ],
    "enScorecard": [
      "Clarity",
      "Reusability",
      "Constraints",
      "Anti-ghostwriting",
      "Usefulness"
    ],
    "resources": [
      {
        "name": "OpenAI Prompt examples",
        "url": "https://platform.openai.com/docs/guides/prompt-engineering",
        "note": "官方提示工程概念參考"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "測試與迭代你的模板"
      },
      {
        "name": "Claude",
        "url": "https://claude.ai",
        "note": "適合長模板與細緻改寫評審"
      }
    ],
    "challenge": "選一個你本週真正要交的任務，只用模板完成「規劃階段」（大綱／檢查清單），正文仍自己寫，並記錄省下多少時間。"
  },
  {
    "icon": "🗂️",
    "title": "建立 AI Second Brain",
    "description": "把筆記、來源、模板與任務連結成可檢索的第二大腦，形成 Chapter 1 的完整系統。",
    "goal": "我的 AI Second Brain 最小系統（MOC＋模板＋每週回顧）",
    "estimatedTime": "45-60 分鐘",
    "difficulty": "初階",
    "tags": [
      "SecondBrain",
      "知識管理",
      "MOC",
      "Chapter1"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 0,
    "chapterZh": "建立 AI 學習系統",
    "chapterEn": "Build Your AI Learning System",
    "zhTitle": "第5課：建立 AI Second Brain",
    "enTitle": "Lesson 5: Build an AI Second Brain",
    "zhValueTip": "把筆記、來源、模板與任務連結成可檢索的第二大腦，形成 Chapter 1 的完整系統。",
    "enValueTip": "Connect notes, sources, templates, and tasks into a searchable second brain and complete the Chapter 1 system.",
    "zhOutcome": "我的 AI Second Brain 最小系統（MOC＋模板＋每週回顧）",
    "enOutcome": "My Minimal AI Second Brain (MOC + Templates + Weekly Review)",
    "zhConcept": "AI Second Brain 不是把所有東西丟進一個資料夾就結束，而是讓未來的你找得到、連得上、用得再起來。最小可行的第二大腦有三層：捕捉（Inbox）、整理（依課程／主題／專案）、調用（模板與地圖）。建議先做一份 MOC（Map of Content，內容地圖）：列出本學期課程、進行中專案、常用 Prompt、常查資源。每次上課或看完資料，用 AI 幫你產生「重點／不懂／行動／連結到哪一頁」，但最終分類標籤仍由你決定。Second Brain 與 Workspace 的差別是：Workspace 偏檔案與流程位置，Second Brain 偏知識連結與再利用。Chapter 1 結束時，你應該同時擁有動機地圖、Workspace、工具決策表、Prompt 模板庫，以及一份能導航它們的 Second Brain MOC。這就是「建立 AI 學習系統」的第一個完整閉環。",
    "enConcept": "An AI Second Brain helps future-you retrieve, connect, and reuse knowledge. Start with capture, organize, and recall layers, plus a MOC linking courses, projects, prompts, and resources. Workspace stores files; Second Brain connects meaning. Chapter 1 closes when motivation map, workspace, tool matrix, prompts, and MOC work together.",
    "zhCaseStudy": "情境案例：研究所一年級的小北以前筆記很多但從不回看。她建立 Second Brain 後，每堂課固定產出四段：重點、問題、下一步、連結頁面；每週日用 AI 做回顧，問「哪些問題仍未解決」「哪些模板被重用」。一個月後寫報告時，她不再從空白開始，而是從已連結的定義、來源與舊大綱組裝。",
    "enCaseStudy": "Graduate student Xiaobei stopped hoarding unread notes. With a four-part capture template and weekly AI review, she reused definitions, sources, and outlines instead of starting reports from zero.",
    "zhWorkflow": [
      "建立 MOC 首頁",
      "設定捕捉模板：重點／問題／行動／連結",
      "把前四課成果雙向連結到 MOC",
      "設定每週回顧問題",
      "用 AI 產生回顧，但由你決定保留與刪除"
    ],
    "enWorkflow": [
      "Create a MOC home",
      "Set a capture template",
      "Link Lessons 1-4 outputs",
      "Define weekly review questions",
      "Use AI for review while you decide keep/delete"
    ],
    "zhCommonMistakes": [
      "什麼都收藏，從不整理",
      "讓 AI 自動亂貼標籤導致更難找",
      "只有筆記沒有行動欄",
      "不做每週回顧，第二大腦變數位堆積場"
    ],
    "enCommonMistakes": [
      "Collecting without organizing",
      "Letting AI apply chaotic tags",
      "Notes without next actions",
      "Skipping weekly review"
    ],
    "zhExcellentExample": "優秀 MOC 一頁就能走到：動機地圖、Workspace 規則、工具決策表、Prompt 庫、本週任務。每條連結有一句話說明何時使用。",
    "enExcellentExample": "A strong MOC reaches your motivation map, workspace rules, tool matrix, prompt library, and weekly tasks, each with a one-line usage note.",
    "zhPrompt": "【Prompt 1｜Second Brain 架構師】\n請擔任知識管理教練。我的主工具：［Notion／Obsidian／Drive］\n本學期課程與專案：［列出］\n請設計最小 AI Second Brain：MOC 結構、捕捉模板、標籤規則、每週回顧流程。輸出可直接照做的步驟。",
    "enPrompt": "[Prompt 1 | Second Brain Architect] Design a minimal MOC, capture template, tagging rules, and weekly review for my courses and projects.",
    "zhCoachPrompt": "【Prompt 2｜連結檢查】\n以下是我的 MOC 與現有頁面清單：\n（貼上）\n請找出孤立頁面、重複頁面、缺少雙向連結之處，並給出整理優先順序。",
    "enCoachPrompt": "[Prompt 2 | Link Audit] Find orphan pages, duplicates, and missing bidirectional links, then prioritize cleanup.",
    "zhFeedbackPrompt": "【Prompt 3｜系統驗收】\n以下是我的 AI Second Brain 最小系統：\n（貼上 MOC、模板、回顧紀錄）\n請以「一個月後還找不找得到」為標準評分，並給下個月只需維護的 5 條規則。",
    "enFeedbackPrompt": "[Prompt 3 | System Acceptance] Score whether I can still find things in one month, and give 5 maintenance rules for next month.",
    "zhExample": "MOC 範例區塊：# 學習系統\n- 動機與風險地圖（何時重看：目標漂移時）\n- Workspace 規則（何時用：檔案開始亂時）\n- 工具決策表（何時用：不知道開哪個 AI）\n- Prompt 庫（何時用：開始任務前）\n- 本週回顧（何時用：每週日）",
    "enExample": "Sample MOC links motivation map, workspace rules, tool matrix, prompt library, and weekly review, each with a when-to-use note.",
    "zhPractice": "建立 MOC 首頁。；設定捕捉模板並用在今天至少一則筆記。；連結前四課所有成果。；完成一次每週回顧（可用 Prompt）。；Challenge：只靠 MOC，在 3 分鐘內找回第1課紅線與第4課任一模板。",
    "enPractice": "Create MOC.；Use capture template once today.；Link Lessons 1-4.；Run one weekly review.；Challenge: retrieve Lesson 1 red lines and one Lesson 4 template via MOC in 3 minutes.",
    "zhQuizItems": [
      {
        "q": "Second Brain 與 Workspace 的主要差別？",
        "options": [
          "沒有差別",
          "Workspace 偏檔案位置與流程，Second Brain 偏知識連結與調用",
          "Second Brain 只能用付費軟體"
        ],
        "answer": 1,
        "explain": "一個管放哪，一個管怎麼連結再利用。"
      },
      {
        "q": "最小第二大腦最該先有什麼？",
        "options": [
          "一百個插件",
          "MOC、捕捉模板與每週回顧",
          "自動轉發所有訊息"
        ],
        "answer": 1,
        "explain": "先有地圖、捕捉與回顧，系統才轉起來。"
      },
      {
        "q": "AI 在 Second Brain 中較適合的角色？",
        "options": [
          "自動決定你的人生目標",
          "協助摘要、回顧與提議連結，最終整理權在你",
          "刪除你所有原始筆記"
        ],
        "answer": 1,
        "explain": "AI 輔助，決策與分類責任仍在使用者。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Workspace vs Second Brain?",
        "options": [
          "Same thing",
          "Workspace stores files/process; Second Brain connects and retrieves knowledge",
          "Second Brain requires paid software only"
        ],
        "answer": 1,
        "explain": "Different jobs."
      },
      {
        "q": "What should a minimal second brain include first?",
        "options": [
          "100 plugins",
          "MOC, capture template, weekly review",
          "Auto-forward all messages"
        ],
        "answer": 1,
        "explain": "Map, capture, review create the loop."
      },
      {
        "q": "Best AI role in a second brain?",
        "options": [
          "Decide your life goals",
          "Help summarize, review, and suggest links while you decide",
          "Delete all original notes"
        ],
        "answer": 1,
        "explain": "AI assists; you remain editor-in-chief."
      }
    ],
    "zhNotePrompt": "寫下你的 MOC 連結清單，以及本週回顧的三個問題。",
    "enNotePrompt": "Write your MOC link list and three weekly review questions.",
    "zhDeliverableChecklist": [
      "完成 MOC",
      "建立捕捉模板",
      "連結前四課成果",
      "完成一次每週回顧",
      "寫下 5 條維護規則"
    ],
    "enDeliverableChecklist": [
      "Finished MOC",
      "Created capture template",
      "Linked Lessons 1-4",
      "Completed one weekly review",
      "Wrote 5 maintenance rules"
    ],
    "zhScorecard": [
      "可找回",
      "可連結",
      "可回顧",
      "可維護",
      "與前四課整合"
    ],
    "enScorecard": [
      "Findability",
      "Linking",
      "Review habit",
      "Maintainability",
      "Chapter integration"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "適合做 MOC 與資料庫連結"
      },
      {
        "name": "Obsidian",
        "url": "https://obsidian.md",
        "note": "適合雙向連結與本地第二大腦"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "可把多份筆記／PDF 做主題回顧"
      }
    ],
    "challenge": "用你的 Second Brain 規劃下一週課表：至少排入 3 次「捕捉」與 1 次「回顧」，並在週日檢查完成率。"
  },
  {
    "icon": "🔎",
    "title": "AI 搜尋技巧",
    "description": "學會把模糊主題變成可搜尋問題，設計關鍵字、來源類型與查證步驟，建立可重用的搜尋策略。",
    "goal": "我的 AI 搜尋策略卡與研究問題重寫紀錄",
    "estimatedTime": "50-70 分鐘",
    "difficulty": "初階",
    "tags": [
      "搜尋策略",
      "關鍵字",
      "研究問題",
      "Chapter2"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 1,
    "chapterZh": "AI 資料搜尋與研究",
    "chapterEn": "AI Source Search and Research",
    "zhTitle": "第6課：AI 搜尋技巧",
    "enTitle": "Lesson 6: AI Search Skills",
    "zhValueTip": "學會把模糊主題變成可搜尋問題，設計關鍵字、來源類型與查證步驟，建立可重用的搜尋策略。",
    "enValueTip": "Turn vague topics into searchable questions, design keywords and source types, and build a reusable search strategy.",
    "zhOutcome": "我的 AI 搜尋策略卡與研究問題重寫紀錄",
    "enOutcome": "My AI Search Strategy Card and Research-Question Rewrite Log",
    "zhConcept": "大學生做報告時最常見的卡住點，不是「找不到任何資料」，而是「問題太寬，所以什麼都像資料」。AI 搜尋技巧要教的是：先把模糊主題翻譯成可執行的搜尋規格。一個可用的規格包含：研究問題一句話、2-4 個子問題、中英文關鍵字與同義詞、來源類型優先順序、排除條件，以及找到後如何判斷能不能用。例如「人工智慧與教育」太寬；改成「近五年生成式 AI 對大學寫作評量方式的影響：實證研究怎麼說？」才開始像研究。AI 很適合做問題重寫與關鍵字擴展，但不適合在你尚未定義問題時直接輸出「完整文獻回顧」。好的流程是：你先寫卡點與作業要求 → AI 產出 3 版問題與關鍵字 → 你裁定最終版 → 再到 Scholar / Perplexity / 資料庫執行 → 記錄前 10 筆結果品質。這一課完成後，你會有一張能重用整學期的搜尋策略卡，後面找論文、驗證資訊、建立研究資料庫都會更快。也請同時建立「避免引用錯誤」的基本紀律：任何 AI 給的書目都先當草稿，必須回到原頁或原論文核對題名、作者、年份與出處。",
    "enConcept": "The common stuck point is not zero results, but an overly broad question. AI search skill means translating a vague topic into a searchable spec: one research question, sub-questions, bilingual keywords, source priorities, exclusions, and usability checks. Use AI to rewrite and expand, then search yourself and treat AI citations as drafts until verified.",
    "zhCaseStudy": "情境案例：社會系大二阿瑜要寫「短影音與注意力」。她先問 AI「短影音壞不壞」，得到正反都有、卻幾乎無法引用的長文。後來她改成提供作業字數、截止日與想比較的族群，請 AI 產出三版研究問題與關鍵字，自己選定：「近三年大學生短影音使用時數與自評注意力困難的相關研究有哪些測量方式？」接著用關鍵字去 Scholar 與 Perplexity，兩小時內就有可深挖的文獻方向，也第一次能解釋為什麼淘汰廣告文與無方法說明的文章。",
    "enCaseStudy": "Sophomore Ayu stopped asking whether short videos are “bad.” After rewriting into a measurable research question with bilingual keywords, she found usable literature paths and could explain why she rejected marketing pages.",
    "zhWorkflow": [
      "寫下作業要求、字數、截止與原本模糊主題",
      "請 AI 產出 3 版可研究問題與中英文關鍵字",
      "自己裁定最終問題，並寫排除條件",
      "實際搜尋一次，記錄前 10 筆結果品質",
      "保存搜尋策略卡到 Workspace，供第7-10課重用"
    ],
    "enWorkflow": [
      "Write assignment constraints and the vague topic",
      "Ask AI for 3 researchable questions and bilingual keywords",
      "Choose the final question and exclusions",
      "Run one search and judge the top 10 results",
      "Save the strategy card for Lessons 7–10"
    ],
    "zhCommonMistakes": [
      "問題還沒清楚就要求完整文獻回顧",
      "只用單一關鍵字、不準備同義詞",
      "把 AI 摘要直接當已查證結論",
      "不記錄淘汰理由，導致之後重複踩雷"
    ],
    "enCommonMistakes": [
      "Asking for a full review before the question is clear",
      "Using one keyword with no synonyms",
      "Treating AI summaries as verified conclusions",
      "Not logging rejection reasons"
    ],
    "zhExcellentExample": "優秀策略卡會長這樣：最終研究問題一句話；子問題三個；關鍵字表含中英與同義詞；來源優先順序（期刊＞官方報告＞新聞＞部落格）；排除條件；查證步驟；以及「本週先執行的一次搜尋任務」。",
    "enExcellentExample": "A strong card includes one final question, three sub-questions, bilingual keywords, source priorities, exclusions, verification steps, and one search task for this week.",
    "zhPrompt": "【Prompt 1｜研究問題重寫教練】\n請擔任大學研究助教。我的模糊主題是：［主題］\n科系：［填寫］；作業類型：［報告／專題／簡報］；字數／時間限制：［填寫］\n請先問我 5 個澄清問題。確認後輸出：\n1) 可研究問題 3 版（由寬到窄）\n2) 每版對應的中英文關鍵字與同義詞\n3) 建議來源類型與搜尋順序\n4) 我需要自己查證的清單\n不要直接寫完整報告，也不要編造文獻。",
    "enPrompt": "[Prompt 1 | Research Question Coach] Ask 5 clarifying questions, then output 3 researchable question versions, bilingual keywords, source-type order, and a verification checklist. Do not write the paper or invent citations.",
    "zhCoachPrompt": "【Prompt 2｜關鍵字壓力測試】\n以下是我的最終研究問題與關鍵字表：\n（貼上）\n請指出太寬、太窄、有歧義的詞，並給替換組。再分別假設「結果太多」與「結果太少」時，我該如何調整搜尋策略。",
    "enCoachPrompt": "[Prompt 2 | Keyword Stress Test] Critique my keywords and provide replacements, plus tuning tactics for too many or too few results.",
    "zhFeedbackPrompt": "【Prompt 3｜策略卡驗收】\n以下是我的 AI 搜尋策略卡與前 10 筆搜尋觀察：\n（貼上）\n請評分（1-10）：問題清晰度、關鍵字完整度、來源規劃、查證步驟、可執行性。指出三個必改處，並給一版可直接重用的改進策略卡。",
    "enFeedbackPrompt": "[Prompt 3 | Strategy Card Review] Score clarity, keywords, source planning, verification, and actionability. Give three must-fixes and a revised card.",
    "zhExample": "模糊：大學生很有壓力。\n較佳：近五年台灣大學生學業壓力的常見測量工具與主要壓力來源研究有哪些發現？\n關鍵字：academic stress, university students, Taiwan, measurement scale；排除：無作者心得文、純行銷測驗廣告。",
    "enExample": "Vague: students are stressed. Better: What measurement tools and main stressors appear in research on Taiwanese university students’ academic stress in the last five years?",
    "zhPractice": "選一個本學期真實作業主題並寫下限制條件。；用 Prompt 1 產出三版問題，自己裁定最終版。；用 Prompt 2 優化關鍵字。；實際搜尋並記錄前 10 筆品質與淘汰理由。；Challenge：把同一主題做成「太寬／適中／太窄」三版，比較結果差異並寫 5 點觀察。",
    "enPractice": "Pick a real assignment.；Draft three question versions.；Improve keywords.；Log top-10 quality.；Challenge: compare too-broad / just-right / too-narrow versions.",
    "zhQuizItems": [
      {
        "q": "進行 AI 輔助搜尋時，最正確的第一步通常是？",
        "options": [
          "直接要求 AI 寫出完整結論並引用",
          "先把模糊主題改成可研究問題與關鍵字策略",
          "只收藏工具網站、先不定義問題",
          "隨機點開第一個搜尋結果"
        ],
        "answer": 1,
        "explain": "搜尋品質取決於問題與關鍵字設計，不是先要最終答案。"
      },
      {
        "q": "下列哪種做法最能避免搜尋結果過寬？",
        "options": [
          "只用一個超大關鍵字",
          "加入對象、地區、時間、方法等限定條件",
          "完全不使用同義詞",
          "禁止自己查證來源"
        ],
        "answer": 1,
        "explain": "用限定條件收斂範圍，才能得到可寫報告的資料。"
      },
      {
        "q": "AI 在搜尋流程中最適合扮演的角色是？",
        "options": [
          "取代你閱讀與判斷",
          "協助重寫問題、擴展關鍵字並建議來源類型",
          "自動保證所有引用正確",
          "幫你捏造找不到的文獻"
        ],
        "answer": 1,
        "explain": "AI 是策略助理；閱讀、判斷與查證仍在你。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What is usually the best first step in AI-assisted search?",
        "options": [
          "Ask AI for a final conclusion with citations",
          "Rewrite the vague topic into researchable questions and keyword strategy",
          "Bookmark tools without defining a question",
          "Open the first result at random"
        ],
        "answer": 1,
        "explain": "Search quality depends on question and keyword design."
      },
      {
        "q": "Which practice best prevents overly broad results?",
        "options": [
          "Use one huge keyword only",
          "Add constraints such as population, region, time, and method",
          "Never use synonyms",
          "Skip source verification"
        ],
        "answer": 1,
        "explain": "Constraints help narrow results to usable evidence."
      },
      {
        "q": "What is AI best used for in searching?",
        "options": [
          "Replace your reading and judgment",
          "Help rewrite questions, expand keywords, and suggest source types",
          "Guarantee every citation is correct",
          "Invent missing papers"
        ],
        "answer": 1,
        "explain": "AI assists strategy; judgment stays with you."
      }
    ],
    "zhNotePrompt": "寫下最終研究問題、5 組關鍵字、來源優先順序，以及本週第一次搜尋要去哪個平台。",
    "enNotePrompt": "Write your final question, 5 keyword sets, source priorities, and which platform you will search first.",
    "zhDeliverableChecklist": [
      "完成三版問題並選定最終版",
      "完成中英文關鍵字表",
      "寫好排除條件與查證步驟",
      "記錄一次真實搜尋觀察",
      "保存策略卡到 Workspace"
    ],
    "enDeliverableChecklist": [
      "Chose a final question from 3 versions",
      "Built bilingual keywords",
      "Wrote exclusions and verification steps",
      "Logged one real search",
      "Saved the strategy card"
    ],
    "zhScorecard": [
      "問題清晰",
      "關鍵字",
      "來源規劃",
      "查證紀律",
      "可重用性"
    ],
    "enScorecard": [
      "Question clarity",
      "Keywords",
      "Source planning",
      "Verification discipline",
      "Reusability"
    ],
    "resources": [
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "用策略卡關鍵字做學術第一輪搜尋"
      },
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "快速比較觀點並取得可點開的來源入口"
      },
      {
        "name": "Semantic Scholar",
        "url": "https://www.semanticscholar.org",
        "note": "輔助找相關論文與研究脈絡"
      },
      {
        "name": "Google Dataset Search",
        "url": "https://datasetsearch.research.google.com",
        "note": "當你需要數據集而非只有文章時使用"
      }
    ],
    "challenge": "用最終策略卡實際搜尋，產出「可留用 5 筆／必淘汰 5 筆」對照表，每筆寫一句淘汰或保留理由。"
  },
  {
    "icon": "📚",
    "title": "Google Scholar 文獻搜尋",
    "description": "學會用 Google Scholar 找論文、篩年份、追蹤引用，並建立可深挖的文獻清單與精讀優先順序。",
    "goal": "我的 Google Scholar 文獻清單（8+ 筆）與精讀三篇計畫",
    "estimatedTime": "50-70 分鐘",
    "difficulty": "初階",
    "tags": [
      "Google Scholar",
      "文獻搜尋",
      "引用追蹤",
      "Chapter2"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 1,
    "chapterZh": "AI 資料搜尋與研究",
    "chapterEn": "AI Source Search and Research",
    "zhTitle": "第7課：Google Scholar 文獻搜尋",
    "enTitle": "Lesson 7: Google Scholar Literature Search",
    "zhValueTip": "學會用 Google Scholar 找論文、篩年份、追蹤引用，並建立可深挖的文獻清單與精讀優先順序。",
    "enValueTip": "Use Google Scholar to find papers, filter by year, follow citations, and build a deep-read bibliography.",
    "zhOutcome": "我的 Google Scholar 文獻清單（8+ 筆）與精讀三篇計畫",
    "enOutcome": "My Google Scholar Source List (8+) and Deep-Read Plan for 3 Papers",
    "zhConcept": "Google Scholar 文獻搜尋不是「搜到越多越好」，而是建立一條能持續加深的文獻路徑。先帶入第 6 課策略卡關鍵字，再用年份篩選、相關文章、被引用次數來擴展。看到一篇關鍵論文時，先讀摘要判斷相關性，再決定是否進入方法與結論；不要一開始就精讀全部。大學生常犯兩個錯：一是只依引用次數排序，忽略題目是否真的對口；二是書目複製不完整，後來引用格式錯誤或張冠李戴。這一課要你完成至少 8 筆文獻清單：每筆含書目要素、一句話重點、與研究問題的關係、疑點、下一步。最後標出 3 篇精讀對象，並說明為何先讀它們（定義清楚、方法可借、情境接近、或爭議關鍵）。完成後你會開始有「研究資料庫」的雛形：不是下載資料夾一團亂，而是可檢索、可排序、可交接給組員的清單。",
    "enConcept": "Google Scholar literature search is about building a deepen-able path, not maximizing hits. Filter, follow related/cited-by trails, screen abstracts first, and log reasons. Verify bibliographic fields before citing. Your deliverable is an 8+ item list plus a 3-paper deep-read plan.",
    "zhCaseStudy": "情境案例：心理系阿哲搜 academic stress students 出現海量結果。他加上 Taiwan、university students，並限制近五年，再把結果分成「定義可用／方法可借／情境接近／離題」。他沒有假裝讀完 30 篇，而是先做 10 筆清單，再精讀 3 篇方法段。組會時他能清楚說：這篇提供量表、那篇提供台灣樣本限制、另一篇雖然高引用但對象是高中生故先備用。後來引用檢查幾乎沒有書目錯誤，因為他每筆都回原頁核對過。",
    "enCaseStudy": "Zhe narrowed Scholar results, tagged why each paper mattered, deep-read three methods sections, and avoided citation errors by verifying every bibliographic field.",
    "zhWorkflow": [
      "用第6課關鍵字在 Google Scholar 搜尋並設定年份",
      "挑選至少 8 筆候選，寫選用理由與疑點",
      "對關鍵論文使用相關文章／被引用追蹤",
      "核對書目要素，標出 3 篇精讀",
      "把清單存進研究資料庫（表格或 Zotero）"
    ],
    "enWorkflow": [
      "Search Scholar with Lesson 6 keywords and year filters",
      "Select 8+ candidates with reasons and doubts",
      "Follow related/cited-by trails for key papers",
      "Verify citations and pick 3 deep-reads",
      "Save the list into your research database"
    ],
    "zhCommonMistakes": [
      "只看第一頁或只看引用數",
      "不讀摘要就整篇下載",
      "書目欄位缺作者／年份／刊物",
      "把簡報稿、部落格與期刊混成同一可信度"
    ],
    "enCommonMistakes": [
      "Stopping at page one or citation count only",
      "Downloading full PDFs before screening abstracts",
      "Missing authors/year/venue in the list",
      "Treating slides, blogs, and journals as equal"
    ],
    "zhExcellentExample": "優秀清單每列都有：作者（年）題名｜來源類型｜相關度｜一句貢獻｜疑點｜下一步。精讀三篇分別對應：定義、方法、爭議，而不是三篇內容重複。",
    "enExcellentExample": "Each strong row includes citation essentials, type, relevance, one contribution, a doubt, and a next step. The three deep-reads cover definition, method, and debate.",
    "zhPrompt": "【Prompt 1｜文獻篩選助教】\n請擔任研究助教。我的研究問題：［問題］\n以下是 Google Scholar 找到的題名與摘要（8-12 筆）：\n（貼上）\n請分成高／中／低相關並說明理由；建議先精讀哪 3 篇；指出還缺哪類文獻（理論／方法／在地樣本／反證）。不要編造沒出現在清單中的論文。",
    "enPrompt": "[Prompt 1 | Screening TA] Sort 8–12 titles/abstracts by relevance, recommend 3 deep-reads, and identify missing source types. Do not invent papers.",
    "zhCoachPrompt": "【Prompt 2｜引用追蹤教練】\n我的關鍵論文是：［題名／作者／年份］\n請教我如何用 Scholar 的被引用與相關文章往後追，並列出我應記錄的欄位模板。同時提醒我如何避免把二次引用當成自己讀過。",
    "enCoachPrompt": "[Prompt 2 | Citation Trail Coach] Teach cited-by/related follow-up, a logging template, and how to avoid second-hand citation errors.",
    "zhFeedbackPrompt": "【Prompt 3｜文獻清單回饋】\n以下是我的 Scholar 文獻清單與精讀計畫：\n（貼上）\n請檢查相關性、理由是否空泛、書目完整性、精讀優先順序是否重疊。給修正建議與可匯入試算表的欄位格式。",
    "enFeedbackPrompt": "[Prompt 3 | Bibliography Feedback] Check relevance, reason quality, citation completeness, and deep-read priority overlap.",
    "zhExample": "列表示例：Chen (2022) ...｜期刊｜高相關｜提供學業壓力量表｜疑點：樣本非台灣｜下一步：精讀方法。精讀計畫：A 定義、B 方法、C 反證／限制。",
    "enExample": "Example row: Chen (2022)... | journal | high | offers a stress scale | doubt: non-Taiwan sample | next: deep-read methods.",
    "zhPractice": "用策略卡在 Scholar 搜尋並建立 8+ 筆清單。；用 Prompt 1 分類後由你最終裁定。；完成 3 篇精讀計畫。；逐筆核對書目。；Challenge：找 1 篇高引用但離題的論文，寫下為何不進精讀清單。",
    "enPractice": "Build an 8+ Scholar list.；Screen with Prompt 1.；Make a 3-paper plan.；Verify citations.；Challenge: reject one highly cited off-topic paper.",
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
    "zhNotePrompt": "寫下精讀三篇題名，以及各篇分別幫你解決定義、方法還是爭議。",
    "enNotePrompt": "List your three deep-read papers and whether each helps definition, method, or debate.",
    "zhDeliverableChecklist": [
      "完成 8+ 筆清單",
      "每筆有理由與下一步",
      "標出 3 篇精讀",
      "書目要素已核對",
      "清單已存入研究資料庫"
    ],
    "enDeliverableChecklist": [
      "8+ rows",
      "Reason/next step each",
      "3 deep-reads chosen",
      "Citations verified",
      "Saved to research database"
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
    "resources": [
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "主搜尋與引用追蹤"
      },
      {
        "name": "Semantic Scholar",
        "url": "https://www.semanticscholar.org",
        "note": "輔助看相關論文與摘要資訊"
      },
      {
        "name": "arXiv",
        "url": "https://arxiv.org",
        "note": "預印本來源（引用前確認版本與是否適合你的學科）"
      },
      {
        "name": "Zotero",
        "url": "https://www.zotero.org",
        "note": "把清單升級成可管理的研究資料庫"
      }
    ],
    "challenge": "把你的 8 筆清單整理成表格（或匯入 Zotero），並用篩選功能只顯示「精讀」與「備用」兩類。"
  },
  {
    "icon": "🌐",
    "title": "Perplexity 深度搜尋",
    "description": "用 Perplexity 做有來源的深度比較與開題，並養成逐一点開原站查證、再回 Scholar 補強的研究節奏。",
    "goal": "我的 Perplexity 深度搜尋筆記（比較表＋查證紀錄＋Scholar 補強清單）",
    "estimatedTime": "50-70 分鐘",
    "difficulty": "初階",
    "tags": [
      "Perplexity",
      "深度搜尋",
      "來源比較",
      "Chapter2"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 1,
    "chapterZh": "AI 資料搜尋與研究",
    "chapterEn": "AI Source Search and Research",
    "zhTitle": "第8課：Perplexity 深度搜尋",
    "enTitle": "Lesson 8: Deep Search with Perplexity",
    "zhValueTip": "用 Perplexity 做有來源的深度比較與開題，並養成逐一点開原站查證、再回 Scholar 補強的研究節奏。",
    "enValueTip": "Use Perplexity for sourced deep comparison and topic framing, then verify originals and reinforce with Scholar.",
    "zhOutcome": "我的 Perplexity 深度搜尋筆記（比較表＋查證紀錄＋Scholar 補強清單）",
    "enOutcome": "My Perplexity Deep-Search Notes (comparison + verification + Scholar follow-ups)",
    "zhConcept": "Perplexity 深度搜尋指的不是問得更長，而是問得更可驗證：要求共識、爭議、來源表、日期與來源類型，並強制自己点開原站。它很適合在 Scholar 前後做「地圖層」工作——快速弄清場域裡有哪些說法、哪些機構、哪些爭議詞。但深度搜尋若缺少查證紀錄，仍只是漂亮摘要。正確節奏是：策略卡問題 → Perplexity 比較表 → 原站查證 → 保留／淘汰 → 回 Scholar／Semantic Scholar／arXiv 補強正式文獻 → 更新研究資料庫。也要特別小心引用錯誤：AI 可能整理錯作者、年份，甚至幻覺出不存在的篇名；所以任何將進入報告的書目，都以原頁為準。這一課結束時，你應能展示一份「可給組員接手」的深度搜尋筆記，而不是一段無法追溯的聊天紀錄。",
    "enConcept": "Deep search with Perplexity means verifiable questioning: consensus, disputes, source tables, dates, types, and mandatory original-page checks. Use it as a map layer before/after Scholar, never as a substitute for verification or formal bibliography.",
    "zhCaseStudy": "情境案例：企管系小寧研究遠距實習。她用 Perplexity 要「正反主張＋來源表」，再做查證，淘汰公司行銷文與過時報導，保留官方報告與兩篇較嚴謹分析，並列出需回 Scholar 補的「學術定義」與「實證研究」缺口。報告寫作時她先放可驗證來源，靈感性文字只留在附註，因此沒有出現假引用與來源對不上的問題。",
    "enCaseStudy": "Xiaoning used Perplexity for pro/con mapping, verified originals, rejected marketing pages, and logged Scholar follow-ups for definitions and empirical studies—avoiding fake citations.",
    "zhWorkflow": [
      "用研究問題要求 Perplexity 輸出共識／爭議／來源表",
      "建立比較表（主張、來源、日期、類型、初評）",
      "至少查證 5 個原連結並寫保留／淘汰理由",
      "列出需回 Scholar／Semantic Scholar／arXiv 補強的缺口",
      "更新研究資料庫狀態欄（可引用／僅啟發／淘汰）"
    ],
    "enWorkflow": [
      "Ask Perplexity for consensus, disputes, and a source table",
      "Build a comparison table",
      "Verify 5+ originals with keep/reject reasons",
      "List Scholar/Semantic Scholar/arXiv follow-ups",
      "Update research-database status fields"
    ],
    "zhCommonMistakes": [
      "只看摘要不点開來源",
      "把所有來源當同等級證據",
      "提問過寬導致來源雜訊過多",
      "用 Perplexity 取代全部學術資料庫"
    ],
    "enCommonMistakes": [
      "Never opening citations",
      "Treating all sources as equal evidence",
      "Asking overly broad questions",
      "Replacing all academic databases with Perplexity"
    ],
    "zhExcellentExample": "優秀深度搜尋筆記包含：問題、比較表、查證結論、假引用風險提醒、Scholar 補強關鍵字、下一步精讀篇目。",
    "enExcellentExample": "Strong notes include the question, comparison table, verification conclusions, citation-risk warnings, Scholar follow-up keywords, and next deep-reads.",
    "zhPrompt": "【Prompt 1｜Perplexity 深度搜尋模板】\n請針對研究問題提供有來源的深度回答，並列出共識、爭議、我需查證的點。\n研究問題：［問題］\n請用表格輸出：主張｜來源｜日期｜來源類型｜證據強度初評｜可能偏誤。\n不要編造連結；若不確定請標註不確定。",
    "enPrompt": "[Prompt 1 | Perplexity Deep-Search Template] Provide a sourced answer with consensus, disputes, and verification needs in a table. Do not invent links.",
    "zhCoachPrompt": "【Prompt 2｜矛盾來源裁判】\n以下是我的來源比較表：\n（貼上）\n請找出互相矛盾的主張，建議我優先核查哪三個原站，以及要看作者、方法、利益衝突還是更新日期。",
    "enCoachPrompt": "[Prompt 2 | Conflicting-Source Referee] Find contradictions and tell me which three originals to inspect first and what fields to check.",
    "zhFeedbackPrompt": "【Prompt 3｜深度搜尋筆記回饋】\n以下是我的 Perplexity 深度搜尋筆記：\n（貼上）\n請評分來源多樣性、查證完整度、比較深度、與問題對齊、引用風險控制。指出仍像未查證摘要的段落，並給可交給組員的筆記模板。",
    "enFeedbackPrompt": "[Prompt 3 | Deep-Search Notes Feedback] Score diversity, verification, comparison, alignment, and citation-risk control.",
    "zhExample": "查證示例：來源 A 公司博客主張開遠距一定提升產能｜利益衝突高｜淘汰；來源 B 官方報告有年份數據｜保留定義；來源 C 新聞二次轉述｜僅啟發，不進正文引用。",
    "enExample": "Example: company blog productivity claim rejected for conflict; official report kept for definitions; news kept as inspire-only.",
    "zhPractice": "用最終研究問題做 Perplexity 深度搜尋。；完成比較表並查證 5+ 原連結。；寫 Scholar／Semantic Scholar 補強清單。；用 Prompt 2/3 修訂筆記。；Challenge：找出 1 處 AI 過度簡化，對照原站補上被省略的限制條件。",
    "enPractice": "Run a deep search.；Verify 5+ originals.；Write Scholar follow-ups.；Revise with prompts.；Challenge: restore one omitted limitation from an original page.",
    "zhQuizItems": [
      {
        "q": "Perplexity 深度搜尋後，最必要的下一步是？",
        "options": [
          "直接把回答貼進報告",
          "点開原連結查證作者、日期、證據與立場",
          "刪除所有來源只留結論",
          "停止任何學術資料庫搜尋"
        ],
        "answer": 1,
        "explain": "有來源的回答仍要回原站查證，才能進入報告。"
      },
      {
        "q": "什麼情況最需要從 Perplexity 回到 Google Scholar？",
        "options": [
          "只想找餐廳評論時",
          "需要正式學術定義、方法或可引用論文時",
          "已經決定不寫作業時",
          "只想看短影音摘要時"
        ],
        "answer": 1,
        "explain": "Perplexity 擅長起步與比較；正式學術深挖常需 Scholar／圖書館資料庫。"
      },
      {
        "q": "深度搜尋筆記裡，「僅啟發、不可直接引用」通常適用？",
        "options": [
          "官方統計原始定義",
          "觀點性行銷文或證據薄弱的二次轉述",
          "你已核對的同儕審查核心數據",
          "課堂指定教科書章節"
        ],
        "answer": 1,
        "explain": "啟發性來源可幫你想方向，不代表可直接當核心證據。"
      }
    ],
    "enQuizItems": [
      {
        "q": "After a Perplexity deep search, the essential next step is?",
        "options": [
          "Paste the answer into your paper",
          "Open originals and check author, date, evidence, and stance",
          "Delete sources and keep only the conclusion",
          "Stop using academic databases"
        ],
        "answer": 1,
        "explain": "Sourced answers still require original-page verification."
      },
      {
        "q": "When should you move from Perplexity back to Google Scholar?",
        "options": [
          "When looking for restaurant reviews",
          "When you need formal academic definitions, methods, or citable papers",
          "When you stop the assignment",
          "When you only want short-video summaries"
        ],
        "answer": 1,
        "explain": "Use Scholar for formal academic depth."
      },
      {
        "q": "“Inspire-only, not directly citable” usually applies to?",
        "options": [
          "Official statistical definitions",
          "Marketing opinion pieces or weakly evidenced second-hand summaries",
          "Verified peer-reviewed core data",
          "Assigned textbook chapters"
        ],
        "answer": 1,
        "explain": "Inspiration is not the same as citable evidence."
      }
    ],
    "zhNotePrompt": "寫下保留 3 來源、淘汰 2 來源，以及你回 Scholar 要補的兩個缺口。",
    "enNotePrompt": "List 3 kept and 2 rejected sources, plus two Scholar follow-up gaps.",
    "zhDeliverableChecklist": [
      "完成深度搜尋比較表",
      "查證至少 5 個原連結",
      "標註可引用／僅啟發／淘汰",
      "列出學術補強缺口",
      "更新研究資料庫"
    ],
    "enDeliverableChecklist": [
      "Comparison table done",
      "5+ originals verified",
      "Cite/inspire/reject labels set",
      "Academic gaps listed",
      "Research database updated"
    ],
    "zhScorecard": [
      "比較深度",
      "查證完整",
      "風險意識",
      "問題對齊",
      "可交接"
    ],
    "enScorecard": [
      "Comparison depth",
      "Verification",
      "Risk awareness",
      "Alignment",
      "Handoff quality"
    ],
    "resources": [
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "有來源的深度比較與開題"
      },
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "查證後補強正式論文"
      },
      {
        "name": "Semantic Scholar",
        "url": "https://www.semanticscholar.org",
        "note": "快速查看相關研究與摘要"
      },
      {
        "name": "Google Dataset Search",
        "url": "https://datasetsearch.research.google.com",
        "note": "當爭議涉及數據時找原始資料集入口"
      }
    ],
    "challenge": "同一問題用「過寬」與「具體」兩種問法各搜一次，產出來源品質對照，並寫下你以後預設採用的提問句型。"
  },
  {
    "icon": "🧾",
    "title": "NotebookLM 教材研究",
    "description": "把講義與 PDF 建成可追溯的教材研究筆記本：依來源摘要、對照閱讀、列出缺口，並避免無出處複述。",
    "goal": "我的 NotebookLM 教材研究包（上傳清單＋可追溯重點＋待查問題）",
    "estimatedTime": "50-70 分鐘",
    "difficulty": "初階",
    "tags": [
      "NotebookLM",
      "教材研究",
      "文獻閱讀",
      "Chapter2"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 1,
    "chapterZh": "AI 資料搜尋與研究",
    "chapterEn": "AI Source Search and Research",
    "zhTitle": "第9課：NotebookLM 教材研究",
    "enTitle": "Lesson 9: NotebookLM Course-Material Research",
    "zhValueTip": "把講義與 PDF 建成可追溯的教材研究筆記本：依來源摘要、對照閱讀、列出缺口，並避免無出處複述。",
    "enValueTip": "Build a traceable NotebookLM research notebook for lectures and PDFs: grounded summaries, contrast reading, and open gaps.",
    "zhOutcome": "我的 NotebookLM 教材研究包（上傳清單＋可追溯重點＋待查問題）",
    "enOutcome": "My NotebookLM Course-Material Research Pack (uploads + traced points + open questions)",
    "zhConcept": "NotebookLM 教材研究把「已有資料」變成可操作的閱讀系統。適合老師講義、指定論文 PDF、專題素材包。重點不是按摘要，而是建立可追溯閱讀：每個定義、數據、爭論都能指回某份文件的某段大意，再由你回原文確認。建議流程：挑選 3-8 份高相關文件 → 一課／一題一個筆記本避免串台 → 要求依來源輸出定義／比較／方法／結論 → 對每條重點追溯 → 列出文件沒回答的待查問題 → 把缺口送回第 6-8 課的搜尋流程。這樣你會同時練習兩種能力：閱讀文獻（抓住論證結構）與建立研究資料庫（來源、重點、缺口、狀態）。也請把 raw 摘要與你改寫後的 final 筆記分開，避免日後分不清哪句是 AI 語氣、哪句是你的理解。",
    "enConcept": "NotebookLM course-material research turns existing PDFs into a traceable reading system. Summarize by source, verify passages, log open questions, and feed gaps back into your search workflow.",
    "zhCaseStudy": "情境案例：法律系小禾期末要整理判決與評析。她過去把全部丟進通用聊天就失去出處；改用 NotebookLM 分筆記本後，每條重點都標文件，回 PDF 核對後才寫複習稿。口試被追問時她能翻到原段，也能清楚說哪些問題講義沒回答、需要外找論文。她的教材研究包後來直接變成專題的來源層，減少重複下載與引用錯置。",
    "enCaseStudy": "Xiaohe built course-specific NotebookLM notebooks with passage tracing, verified PDFs before review notes, and converted open questions into external search tasks—cutting citation misplacement.",
    "zhWorkflow": [
      "挑選 3-8 份真正相關的講義／PDF",
      "建立專用筆記本並上傳",
      "產出依來源的重點結構（定義／比較／方法／結論）",
      "追溯至少 5 條重點回原文件",
      "列出待查問題並送回搜尋策略／Scholar"
    ],
    "enWorkflow": [
      "Select 3–8 relevant files",
      "Create a dedicated notebook",
      "Generate a grounded outline",
      "Trace 5+ points to originals",
      "Send open questions back to search/Scholar"
    ],
    "zhCommonMistakes": [
      "上傳過多無關檔造成串台",
      "不追溯就整段複製摘要",
      "不同科目混同一筆記本",
      "把 AI 複述當成自己已精讀"
    ],
    "enCommonMistakes": [
      "Uploading too many unrelated files",
      "Copying summaries without tracing",
      "Mixing unrelated courses",
      "Treating AI paraphrase as deep reading"
    ],
    "zhExcellentExample": "優秀教材研究包有：上傳清單、可追溯重點、自己改寫的定義一段、三個待查問題、以及對應要去 Scholar／Perplexity 的關鍵字。",
    "enExcellentExample": "A strong pack includes uploads, traced points, one rewritten definition, three open questions, and follow-up keywords.",
    "zhPrompt": "【Prompt 1｜NotebookLM 教材研究指令】\n請只根據上傳文件回答。主題：［複習／研究主題］\n請輸出：關鍵定義、論點比較、重要數據／案例、各點對應文件名、文件未回答而需外找的問題。\n資料不足請明確說不足，不要編造。",
    "enPrompt": "[Prompt 1 | NotebookLM Course Research] Answer only from uploads with definitions, comparisons, data/cases, source filenames, and unanswered questions. Do not invent.",
    "zhCoachPrompt": "【Prompt 2｜精讀追溯】\n針對重點：［貼上一點］\n請推測最可能來自哪份文件與哪個部分，並給 3 個回 PDF 搜尋的關鍵句。同時告訴我精讀時該檢查論證假設還是證據限制。",
    "enCoachPrompt": "[Prompt 2 | Close-Reading Trace] Suggest likely file/section, 3 search phrases, and whether to inspect assumptions or evidence limits.",
    "zhFeedbackPrompt": "【Prompt 3｜教材研究包驗收】\n以下是我的 NotebookLM 教材研究包：\n（貼上）\n請檢查追溯是否真實、是否混入無依據句子、待查問題是否可轉成搜尋任務，並給改進模板。",
    "enFeedbackPrompt": "[Prompt 3 | Pack Acceptance] Check real provenance, unsupported sentences, and whether open questions can become search tasks.",
    "zhExample": "示例：定義整理自講義 A 第2節；評析 B 指出測量工具差異；待查：本系樣本是否適用該量表常模 → 回 Scholar 搜 measurement invariance / Taiwan university students。",
    "enExample": "Example: definition from Lecture A §2; Article B notes measurement differences; open question on local norms → return to Scholar with targeted keywords.",
    "zhPractice": "上傳 3+ 相關文件。；用 Prompt 1 做 grounded 整理。；追溯 5+ 重點。；把 3 個待查問題寫成可搜尋句子。；Challenge：問一個文件中沒有的問題，確認系統是否承認不足，並記錄你的外找計畫。",
    "enPractice": "Upload 3+ files.；Generate grounded notes.；Trace 5+ points.；Turn 3 gaps into searchable queries.；Challenge: ask something absent and log an external search plan.",
    "zhQuizItems": [
      {
        "q": "NotebookLM 教材研究最關鍵的成功條件是？",
        "options": [
          "一次上傳盡量多的無關檔案",
          "上傳真正相關來源，並對重點做來源追溯",
          "完全不打開原 PDF",
          "要求它寫出你沒提供資料的完整新理論"
        ],
        "answer": 1,
        "explain": "資料相關且可追溯，摘要才有研究價值。"
      },
      {
        "q": "閱讀文獻／講義時，AI 較適合協助的是？",
        "options": [
          "替你決定論文結論並直接交作業",
          "整理定義、比較論點、標出你需回原文核對的段落",
          "刪除所有你看不懂的部分",
          "自動保證引用格式零錯誤"
        ],
        "answer": 1,
        "explain": "AI 協助結構化閱讀；理解與核對仍要回原文。"
      },
      {
        "q": "若 NotebookLM 對上傳資料未涵蓋的問題回答得很滿，你應？",
        "options": [
          "當作高可信直接引用",
          "標記高風險，要求指出資料不足，並改外找來源",
          "把該答案複製到所有報告",
          "關閉查證流程"
        ],
        "answer": 1,
        "explain": "承認缺口並外找來源，才能避免幻覺進入正文。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What most determines successful NotebookLM course-material research?",
        "options": [
          "Uploading as many unrelated files as possible",
          "Uploading truly relevant sources and tracing key points",
          "Never opening original PDFs",
          "Demanding new theories beyond the uploads"
        ],
        "answer": 1,
        "explain": "Relevance plus traceability makes summaries research-usable."
      },
      {
        "q": "When reading materials, AI is best used to?",
        "options": [
          "Decide your conclusion and submit for you",
          "Organize definitions, compare claims, and mark passages to verify",
          "Delete everything you do not understand",
          "Guarantee perfect citation formatting"
        ],
        "answer": 1,
        "explain": "AI structures reading; you still verify the text."
      },
      {
        "q": "If NotebookLM answers confidently beyond the uploads, you should?",
        "options": [
          "Cite it as high credibility",
          "Flag risk, demand acknowledgment of missing evidence, and search externally",
          "Copy it into every paper",
          "Disable verification"
        ],
        "answer": 1,
        "explain": "Treat overreach as a gap to investigate, not a citation."
      }
    ],
    "zhNotePrompt": "列出上傳文件、5 個已追溯重點，以及 3 個要外找的待查問題。",
    "enNotePrompt": "List uploads, 5 traced points, and 3 external open questions.",
    "zhDeliverableChecklist": [
      "完成專用筆記本",
      "重點可追溯",
      "有自己改寫段落",
      "待查問題可搜尋化",
      "研究資料庫已更新"
    ],
    "enDeliverableChecklist": [
      "Dedicated notebook ready",
      "Points traced",
      "Personal rewrite included",
      "Open questions searchable",
      "Research database updated"
    ],
    "zhScorecard": [
      "來源對齊",
      "可追溯",
      "閱讀深度",
      "缺口清楚",
      "與搜尋銜接"
    ],
    "enScorecard": [
      "Source alignment",
      "Traceability",
      "Reading depth",
      "Gap clarity",
      "Search handoff"
    ],
    "resources": [
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "教材／PDF 依來源研究"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "管理待上傳講義與論文"
      },
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "把待查問題轉成正式文獻搜尋"
      },
      {
        "name": "arXiv",
        "url": "https://arxiv.org",
        "note": "若領域常用預印本，可作補充閱讀（注意版本）"
      }
    ],
    "challenge": "產出一頁考前／報告前複習稿：每條重點都必須能在原 PDF 找到對應段落，並附待查問題兩則。"
  },
  {
    "icon": "✅",
    "title": "驗證 AI 資訊真偽",
    "description": "建立驗證清單：檢查幻覺引用、過時資訊、偏誤與利益衝突，並把來源評等回寫到研究資料庫。",
    "goal": "我的 AI 資訊真偽驗證表與 5 筆來源評等決策",
    "estimatedTime": "50-70 分鐘",
    "difficulty": "初階",
    "tags": [
      "驗證",
      "幻覺",
      "引用錯誤",
      "Chapter2"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 1,
    "chapterZh": "AI 資料搜尋與研究",
    "chapterEn": "AI Source Search and Research",
    "zhTitle": "第10課：驗證 AI 資訊真偽",
    "enTitle": "Lesson 10: Verify AI Information Authenticity",
    "zhValueTip": "建立驗證清單：檢查幻覺引用、過時資訊、偏誤與利益衝突，並把來源評等回寫到研究資料庫。",
    "enValueTip": "Build a verification checklist for hallucinated citations, outdated info, bias, and conflicts—then rate sources in your research database.",
    "zhOutcome": "我的 AI 資訊真偽驗證表與 5 筆來源評等決策",
    "enOutcome": "My AI Information Authenticity Checklist and 5 Source Rating Decisions",
    "zhConcept": "驗證 AI 資訊真偽是 Chapter 2 的閉環能力。前面你學會找資料、搜論文、做深度搜尋與教材研究；若缺少驗證，AI 只會讓錯誤傳播得更快。驗證時至少檢查：1) 書目是否真實存在；2) 作者與刊物是否匹配；3) 證據是否支持該句主張；4) 時效與適用地區；5) 利益衝突與目的；6) 能否被第二來源交叉驗證。大學生高風險場景包括：AI 編造文獻、二次轉述被當成原始研究、把行銷文當政策、把預印本結論講成已定論。實作上建議固定使用驗證表，並在研究資料庫新增欄位：真偽狀態、評等、使用決定、核對日期。完成這一課，你應能對至少 5 筆來源做出高／中／低評等，並明確哪些可引用、哪些僅啟發、哪些淘汰。這會直接降低報告中的引用錯誤，也讓組員可以用同一標準審稿。",
    "enConcept": "Verifying AI information authenticity closes Chapter 2. Check existence, matching bibliographic fields, evidence fit, currency, conflicts, and corroboration. Rate sources and decide cite / inspire-only / reject to prevent hallucinated and weak citations from entering your paper.",
    "zhCaseStudy": "情境案例：護理系小容報告初稿有一筆「看起來很專業」的引用，驗證後發現篇名在 Scholar 與出版社都找不到，屬高風險幻覺。她刪除該引用，改用期刊論文與衛福部頁面，並在資料庫標記核對日期。雖然引用變少，但老師回饋「證據乾淨」。此後她規定：任何 AI 給的書目，未核對前不得進正文。",
    "enCaseStudy": "Xiaorong removed an unfindable AI citation, replaced it with verified journal and ministry sources, and enforced a rule that unverified AI bibliographies never enter the main text.",
    "zhWorkflow": [
      "建立真偽驗證表（存在性、書目、證據、時效、衝突、交叉驗證）",
      "從第7-9課挑 5 筆來源逐項驗證",
      "標註高／中／低與可引用／僅啟發／淘汰",
      "修正研究資料庫與正文草稿中的問題引用",
      "寫下個人「防引用錯誤」三條硬規則"
    ],
    "enWorkflow": [
      "Build an authenticity checklist",
      "Verify 5 sources from Lessons 7–9",
      "Rate and label cite/inspire/reject",
      "Fix the research database and draft citations",
      "Write three hard rules against citation errors"
    ],
    "zhCommonMistakes": [
      "因語氣肯定就相信",
      "不檢查文獻是否真實存在",
      "忽略利益衝突與過時資料",
      "AI 摘要與原文不一致仍硬引"
    ],
    "enCommonMistakes": [
      "Trusting confident tone",
      "Not checking whether a source exists",
      "Ignoring conflicts and outdated claims",
      "Citing when the summary diverges from the original"
    ],
    "zhExcellentExample": "優秀驗證表每筆都有：核對連結、存在性結果、證據是否支持原句、評等、使用決定、修改後的可引用句子或淘汰理由。",
    "enExcellentExample": "Each strong row includes the checked link, existence result, evidence fit, rating, use decision, and either a corrected citable sentence or rejection reason.",
    "zhPrompt": "【Prompt 1｜真偽審核員】\n請擔任研究審核員。研究問題：［問題］\n待驗證內容：［貼上 AI 段落或書目］\n請列出我必須回原資料核對的檢查點，並給高／中／低風險初步判斷。提醒哪些情況可能是幻覺引用。不要宣稱你已在線上替我核對成功，除非我提供了可點開的原頁內容。",
    "enPrompt": "[Prompt 1 | Authenticity Auditor] Given my research question and AI text/citations, list verification checkpoints and a high/medium/low risk judgment. Do not claim you verified live webpages unless I pasted original content.",
    "zhCoachPrompt": "【Prompt 2｜引用錯誤診斷】\n以下是我準備放進報告的引用句與書目：\n（貼上）\n請檢查是否有主張過強、書目要素缺失、可能二次引用未標示等問題，並給修正寫法。",
    "enCoachPrompt": "[Prompt 2 | Citation-Error Diagnosis] Inspect my claim + bibliography for overclaiming, missing fields, or unmarked second-hand citation, then propose a safer rewrite.",
    "zhFeedbackPrompt": "【Prompt 3｜驗證表回饋】\n以下是我的真偽驗證表與 5 筆評等：\n（貼上）\n請指出評等是否過寬／過嚴、理由是否具體，並給可重用於所有報告的標準模板與三條硬規則。",
    "enFeedbackPrompt": "[Prompt 3 | Checklist Feedback] Judge rating calibration and reason specificity; provide a reusable template and three hard rules.",
    "zhExample": "示例：AI 給的篇名在 Scholar 找不到｜高風險｜淘汰；衛福部統計頁核對年份與定義後｜高｜可引用；公司白皮書｜中｜僅啟發產業觀點，不進核心論證。",
    "enExample": "Example: unfindable AI paper title = high risk/reject; verified ministry stats = high/cite; company white paper = medium/inspire-only.",
    "zhPractice": "建立驗證表。；驗證 5 筆來源並完成評等。；至少抓出 1 個高風險問題（幻覺／過時／衝突）。；用 Prompt 修訂引用句。；Challenge：向同學用 1 分鐘說明你淘汰的一筆「看起來很真」的資料為何不能用。",
    "enPractice": "Build the checklist.；Rate 5 sources.；Catch 1 high-risk issue.；Revise citations with prompts.；Challenge: explain one professional-looking rejection in 1 minute.",
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
    "zhNotePrompt": "寫下你的三條防引用錯誤硬規則，以及評等最高與最低的來源各一。",
    "enNotePrompt": "Write three hard anti-citation-error rules and your highest/lowest rated sources.",
    "zhDeliverableChecklist": [
      "完成驗證表",
      "5 筆來源已評等",
      "高風險引用已處理",
      "研究資料庫狀態已更新",
      "寫下三條硬規則"
    ],
    "enDeliverableChecklist": [
      "Checklist complete",
      "5 sources rated",
      "High-risk citations handled",
      "Database statuses updated",
      "Three hard rules written"
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
    "resources": [
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "核對文獻是否真實存在與書目是否匹配"
      },
      {
        "name": "Semantic Scholar",
        "url": "https://www.semanticscholar.org",
        "note": "交叉檢查論文資訊與相關研究"
      },
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "快速找到原站以便對照，仍須人工核對"
      },
      {
        "name": "Google Dataset Search",
        "url": "https://datasetsearch.research.google.com",
        "note": "當主張涉及數據時，嘗試找回原始資料集"
      }
    ],
    "challenge": "重審第 7 課清單中的 3 筆來源：若評等改變，更新精讀優先順序，並修正草稿中任何未核對引用。"
  },
  {
    "icon": "📒",
    "title": "AI 課堂筆記",
    "description": "建立課堂筆記捕捉模板：重點、不懂、例子、行動與連結，用 AI 整理但不取代你聽課與判斷。",
    "goal": "我的 AI 課堂筆記模板與一堂真實課的整理稿",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "課堂筆記",
      "捕捉模板",
      "筆記系統",
      "Chapter3"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 2,
    "chapterZh": "AI 做筆記",
    "chapterEn": "AI Note-Taking",
    "zhTitle": "第11課：AI 課堂筆記",
    "enTitle": "Lesson 11: AI Class Notes",
    "zhValueTip": "建立課堂筆記捕捉模板：重點、不懂、例子、行動與連結，用 AI 整理但不取代你聽課與判斷。",
    "enValueTip": "Build a class-note capture template—key points, confusions, examples, actions, links—using AI without replacing listening or judgment.",
    "zhOutcome": "我的 AI 課堂筆記模板與一堂真實課的整理稿",
    "enOutcome": "My AI Class-Note Template and One Real Lecture Write-up",
    "zhConcept": "AI 課堂筆記不是「把整堂課丟給 AI」，而是建立一套大學生真正用得上的捕捉與整理節奏。一堂課的資訊密度很高：定義、例子、考試提示、作業要求、老師強調的例外條件常混在一起。若你只會事後對 AI 說「幫我整理筆記」，通常會得到通順但不可考、也找不到來源的長文。比較穩定的做法是兩段式：課堂中你只負責捕捉高價值訊號——關鍵定義、不懂、例子、行動、頁碼／投影片編號；下課後再用 AI 依你的原始捕捉做結構化，輸出成「可複習版本」。一個實用模板建議包含五欄：Focus（本堂主問題）、Keys（3-7 個關鍵點）、Confusion（不懂與假設）、Examples（例子／案例）、Actions（作業、複習、要問助教的事）。AI 適合幫忙去重、分類、轉成問答卡與複習清單；你必須保留判斷：哪一句是老師原意、哪一句是你的推論、哪一句還不確定。這一課也要把課堂筆記接到你的 AI 筆記系統：檔名規則、raw／final、課程資料夾、以及連回 Chapter 1 的 Workspace 與 Second Brain。完成後，你不是多一篇漂亮摘要，而是擁有「下一堂課也能重複使用」的課堂筆記作業系統。更重要的是，你會開始分辨：哪些內容該當場記、哪些可课后補、哪些必須回看投影片或錄音才能確認。當這套節奏穩定後，後面的 PDF、錄音、心智圖與考前重點才不會各自為政，而會匯流成同一個知識庫。接下來，請把課堂筆記想成「輸入層」：你在課堂上不是寫作文，而是採集可驗證訊號。建議把 Keys 控制在 3 到 7 點，超過就代表你把細節當重點；細節應進 Examples 或附註。Confusion 要寫成可追問的句子，例如「為什麼檢定要用雙尾？」而不是只寫一個問號。Actions 必須可在 48 小時內完成，並標註截止或對應作業編號。若老師突然改進度，先在 Focus 改主問題，不要硬塞舊模板造成錯位。每週日做一次「不懂清倉」：已解決的移出，未解決的升級成要問助教的問題清單。這樣第 12 到 15 課才有乾淨原料可匯入，不會變成一堆無法取捨的長文。",
    "enConcept": "AI class notes are a two-stage system: capture high-signal items in class, then use AI to structure them afterward. Keep definitions, confusions, examples, and actions. Separate raw capture from final notes, and link into your workspace/second brain. AI organizes; you still decide what is certain, inferred, or unresolved.",
    "zhCaseStudy": "情境案例：統計學大一的小恩以前習慣整堂課狂打字，下課對 AI 說「整理成重點」，結果得到很長、卻考不到點的摘要，因為她原始筆記沒有標出老師反覆強調的前提條件。後來她改成只記五欄模板，並在不懂處打「？」與投影片頁碼。下課用 ChatGPT／Claude 依模板整理，再自己改寫定義。第一次小考她能在三分鐘內從 Actions 與 Confusion 找回要補的觀念，不再翻十頁流水帳。她也把每堂 final 筆記放進 Notion 課程資料庫，週日只複習 Confusion 未解決項目。",
    "enCaseStudy": "First-year stats student Xiaoen stopped transcript-style typing. Using a five-field template and slide numbers, she got reviewable notes, faster pretest retrieval, and a weekly confusion triage in Notion.",
    "zhWorkflow": [
      "準備課堂捕捉模板（Focus／Keys／Confusion／Examples／Actions）",
      "上課只記高價值訊號與頁碼／投影片編號",
      "下課 15 分鐘內把 raw 筆記貼給 AI 做結構化",
      "自己改寫關鍵定義，標記仍不確定處",
      "存成 raw／final，並連結到課程筆記系統"
    ],
    "enWorkflow": [
      "Prepare the five-field capture template",
      "Capture only high-signal items with slide/page refs",
      "Within 15 minutes, ask AI to structure the raw notes",
      "Rewrite key definitions and mark uncertainties",
      "Save raw/final and link into your course note system"
    ],
    "zhCommonMistakes": [
      "上課不聽、只依賴课后 AI 腦補",
      "原始捕捉沒有標不懂與頁碼",
      "把 AI 輸出當最終理解不改寫",
      "筆記不歸檔，下一堂又從頭找"
    ],
    "enCommonMistakes": [
      "Not listening and asking AI to invent the lecture",
      "Capturing without confusions or references",
      "Accepting unedited AI text as understanding",
      "Never filing notes for reuse"
    ],
    "zhExcellentExample": "優秀課堂筆記看得到：本堂主問題一句話、5 個關鍵點、至少 2 個不懂、1 個例子、2 個行動；final 版定義是自己的話；並連到該週作業與考前複習清單。",
    "enExcellentExample": "A strong note shows one focus question, about five keys, at least two confusions, one example, two actions, personally rewritten definitions, and links to homework/review.",
    "zhPrompt": "【Prompt 1｜課堂筆記結構化教練】\n請擔任大學學習教練。以下是我課堂中的原始捕捉（可能很亂）：\n（貼上）\n課程：［科目］；本週主題：［主題］\n請整理成模板：Focus、Keys（3-7點）、Confusion、Examples、Actions。不清楚的地方請標成「待確認」，不要腦補老師沒講的內容。最後給我 5 題自我檢測問答卡。",
    "enPrompt": "[Prompt 1 | Class-Note Structurer] Organize my raw lecture capture into Focus/Keys/Confusion/Examples/Actions. Mark uncertainties instead of inventing content, then give 5 self-check questions.",
    "zhCoachPrompt": "【Prompt 2｜不懂處診斷】\n以下是我的 Confusion 清單：\n（貼上）\n請幫我判斷每個問題：是定義不清、例子不足、還是先備知識缺口。並給我下课後可執行的補救順序（先看哪頁投影片／先問誰／先做哪題）。",
    "enCoachPrompt": "[Prompt 2 | Confusion Triage] Classify each confusion as definition, example gap, or prerequisite gap, and give a repair order.",
    "zhFeedbackPrompt": "【Prompt 3｜課堂筆記驗收】\n以下是我的 final 課堂筆記：\n（貼上）\n請評分：可複習性、重點密度、不懂是否具體、行動是否可執行、是否過度依賴空泛句子。指出三段應改寫的文字，並給改寫示例。",
    "enFeedbackPrompt": "[Prompt 3 | Class-Note Review] Score reviewability, signal density, confusion specificity, and actionability; rewrite three weak sentences.",
    "zhExample": "Raw：變異數？老師說不要忘了除以 n-1？投影片12 例子用考試分數\nFinal Keys：樣本變異數常用 n-1；Confusion：何時用 n 何時用 n-1 待確認；Actions：重看投影片12、做習題3-2、下堂問助教。",
    "enExample": "Raw: variance? n-1? slide 12 exam-score example → Final keys on sample variance, a concrete confusion, and three follow-up actions.",
    "zhPractice": "選一堂本週真實課程。；用五欄模板完成課堂捕捉。；下課後用 Prompt 1 結構化並自己改寫定義。；用 Prompt 2 處理 Confusion。；Challenge：只用 final 筆記，在 5 分鐘內向同學講解本堂 3 個關鍵點。",
    "enPractice": "Use one real lecture.；Capture with the template.；Structure with Prompt 1 and rewrite.；Triage confusions.；Challenge: teach 3 key points in 5 minutes using only your final notes.",
    "zhQuizItems": [
      {
        "q": "AI 課堂筆記最正確的目標是？",
        "options": [
          "讓 AI 替你上課並直接交作業",
          "把聽課內容變成可複習、可連結、可行動的筆記系統",
          "只追求筆記字數越多越好",
          "上課全程不聽、下課一次貼上錄音就結束"
        ],
        "answer": 1,
        "explain": "重點是可複習與可行動，不是代聽或堆字數。"
      },
      {
        "q": "課堂中最適合先自己記下、再交給 AI 整理的是？",
        "options": [
          "老師隨口講的笑話逐字稿",
          "關鍵定義、不懂之處、例子與待辦",
          "同學私人對話",
          "教室裝潢細節"
        ],
        "answer": 1,
        "explain": "先捕捉高價值訊號，AI 才能整理出可用結構。"
      },
      {
        "q": "下列哪種做法最容易讓筆記失去學習價值？",
        "options": [
          "標記不懂並课后追問",
          "把 AI 整段輸出原封當最終理解、自己不改寫",
          "把筆記連回課程地圖或 Second Brain",
          "每週回顧一次不懂清單"
        ],
        "answer": 1,
        "explain": "不改寫就不算內化，筆記會變成堆積。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What is the best goal of AI class notes?",
        "options": [
          "Let AI attend class and submit work for you",
          "Turn lecture content into reviewable, linkable, actionable notes",
          "Maximize word count only",
          "Never listen and only paste a recording afterward"
        ],
        "answer": 1,
        "explain": "The goal is reviewable action, not outsourcing attention."
      },
      {
        "q": "What should you capture yourself before asking AI to organize?",
        "options": [
          "Every joke verbatim",
          "Key definitions, confusions, examples, and next actions",
          "Private classmate chats",
          "Classroom decoration details"
        ],
        "answer": 1,
        "explain": "High-signal capture makes AI organization useful."
      },
      {
        "q": "Which practice most often destroys learning value?",
        "options": [
          "Marking confusions and following up later",
          "Keeping unedited AI text as your final understanding",
          "Linking notes to a course map or second brain",
          "Reviewing open questions weekly"
        ],
        "answer": 1,
        "explain": "Unedited AI text is storage, not learning."
      }
    ],
    "zhNotePrompt": "貼上你的五欄模板結果，並寫下：哪個不懂最危險？明天先補哪一件？",
    "enNotePrompt": "Paste your five-field note and write which confusion is most dangerous and what you will fix tomorrow.",
    "zhDeliverableChecklist": [
      "完成課堂捕捉模板",
      "產出一堂真實課的 raw＋final",
      "至少標記 2 個不懂",
      "關鍵定義已用自己的話改寫",
      "筆記已歸檔並可在課程資料夾找到"
    ],
    "enDeliverableChecklist": [
      "Template ready",
      "Raw+final for one real lecture",
      "At least 2 confusions marked",
      "Definitions rewritten in your words",
      "Filed in the course folder"
    ],
    "zhScorecard": [
      "捕捉品質",
      "結構清楚",
      "不懂具體",
      "可行動",
      "可歸檔"
    ],
    "enScorecard": [
      "Capture quality",
      "Structure",
      "Confusion clarity",
      "Actionability",
      "Filing"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "課程資料庫與課堂筆記模板"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "存放 raw／final 與投影片"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "下课後結構化整理"
      },
      {
        "name": "Obsidian",
        "url": "https://obsidian.md",
        "note": "把課堂筆記雙向連結到知識庫"
      }
    ],
    "challenge": "連續兩堂課使用同一模板；比較第二堂是否更快，並寫下你刪掉了哪些低價值記錄習慣。"
  },
  {
    "icon": "📄",
    "title": "PDF 重點整理",
    "description": "把老師講義與論文 PDF 整理成可追溯重點：定義、結構、考點、待查，避免無出處長摘要。",
    "goal": "我的 PDF 重點卡（可追溯）與一份講義整理包",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "PDF",
      "講義整理",
      "可追溯摘要",
      "Chapter3"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 2,
    "chapterZh": "AI 做筆記",
    "chapterEn": "AI Note-Taking",
    "zhTitle": "第12課：PDF 重點整理",
    "enTitle": "Lesson 12: PDF Key-Point Condensing",
    "zhValueTip": "把老師講義與論文 PDF 整理成可追溯重點：定義、結構、考點、待查，避免無出處長摘要。",
    "enValueTip": "Condense lecture/PDF materials into traceable key points—definitions, structure, exam cues, open questions—without sourceless long summaries.",
    "zhOutcome": "我的 PDF 重點卡（可追溯）與一份講義整理包",
    "enOutcome": "My Traceable PDF Key-Point Cards and One Lecture Condensation Pack",
    "zhConcept": "PDF 重點整理是大學生每週最高頻的筆記任務之一：老師丟講義、你要在考試前變成可讀結構。很多學生會讓 AI「整份摘要」，結果得到平均、模糊、無法對應頁碼的文字，考試時找不到原句，寫報告時也不敢引用。正確做法是「重點卡」而不是「長文改寫」：每張卡只放一個概念，包含名稱、定義（自己的話）、原文線索（頁碼／標題）、例子、可能考法、仍不懂處。流程建議：先快速掃過目錄與標題建立地圖 → 標記必讀區（定義、公式、流程、老師強調）→ 對必讀區做精讀式整理 → 用 AI 幫忙去重與轉成問答，但每點保留追溯。若使用 NotebookLM，把它當「依來源問答層」，不是「免看 PDF 層」。整理 PPT 時也一樣：投影片常缺推論，你要用筆記補上老師口頭強調的條件與例外。實務上也可把 PDF 重點卡與第11課課堂筆記對齊：課堂講過的標成「已講解」，只在講義出現的標成「自学補充」，考試前才知道哪些要回放錄音或問助教。當你開始寫報告需要引用講義定義時，有頁碼的重點卡能直接回到原句，大幅降低張冠李戴。這一課結束後，你會有一份可進考前系統的 PDF 重點包，並能說出每個重點來自哪裡。這也是避免報告引用錯誤的基礎：你引用的是核對過的概念，不是 AI 重新講的故事。請把 raw AI 整理與你校對後的 final 分開存放，形成可審計的筆記版本史。整理 PDF 時，先問「這份文件在考試／報告中扮演什麼角色」：指定必讀、補充閱讀，還是作業附件。必讀才做重點卡；補充閱讀可只做目錄地圖與三句摘要，避免能量耗盡。遇到掃描影像 PDF，優先確認 OCR 品質；若文字錯亂，先手動抄關鍵定義再交給 AI，不要整份硬餵。PPT 轉重點時，把「口頭補充」欄位留空並在課後用錄音或記憶補上，否則卡片會缺前提條件。每張卡完成後做 10 秒自測：不看原文能否用自己的話說出定義；說不出就標記待重讀。報告引用前，務必回到頁碼核對原句，AI 轉述不能當引用來源。最後把重點包檔名寫上課程代碼、章節與日期，讓考前包能精準呼叫。",
    "enConcept": "PDF key-point condensing means building traceable concept cards—not fluent sourceless essays. Map the document, mark must-read zones, condense with page anchors, and verify in the original. NotebookLM can help with grounded Q&A, but it does not replace opening the PDF.",
    "zhCaseStudy": "情境案例：會計系小北曾把 80 頁講義一次丟給 AI，得到漂亮摘要，小考却考老師在第 47 頁的例外規定，摘要沒寫到。後來她改成先畫章節地圖，只對「收入認列條件」相關頁做重點卡，每卡標頁碼，再用 NotebookLM 問「第47頁例外條件是什麼？請指出依據」。她回 PDF 核對後才寫 final。下次小考她直接翻重點卡頁碼區，三分鐘定位。她也把同一方法用在老師 PPT：口頭補充另開 Actions 欄。",
    "enCaseStudy": "Accounting student Xiaobei stopped one-shot full-PDF summaries. She mapped sections, built page-anchored cards for recognition criteria, verified exceptions, and could locate test points in minutes.",
    "zhWorkflow": [
      "建立 PDF／PPT 目錄地圖（章／節／必讀區）",
      "只對必讀區製作重點卡（定義／例子／考點／頁碼）",
      "用 AI 去重與轉問答，但保留追溯欄",
      "回原檔核對關鍵句",
      "匯出成可進考前複習的重點包"
    ],
    "enWorkflow": [
      "Map chapters and must-read zones",
      "Build key-point cards with page anchors",
      "Use AI to dedupe and convert to Q&A while keeping provenance",
      "Verify key lines in the original",
      "Export a revision-ready pack"
    ],
    "zhCommonMistakes": [
      "整份一次摘要、無頁碼",
      "把例子當定義、把口頭補充遺失",
      "不回原文核對",
      "重點卡太多導致無法複習"
    ],
    "enCommonMistakes": [
      "One-shot sourceless summaries",
      "Confusing examples with definitions",
      "Never verifying the original",
      "Creating too many cards to review"
    ],
    "zhExcellentExample": "優秀重點卡：概念名＋自己的話定義＋頁碼＋一個例子＋可能考題＋待確認。一章通常 5-12 張卡，而不是一篇 2000 字摘要。",
    "enExcellentExample": "A strong card has name, your definition, page ref, one example, likely exam angle, and an open check. Prefer 5–12 cards over one giant essay.",
    "zhPrompt": "【Prompt 1｜PDF 重點卡生成器】\n請根據我提供的講義摘錄（含頁碼）整理重點卡。\n摘錄：\n（貼上，儘量含頁碼）\n每張卡格式：概念｜我的定義草稿｜原文頁碼／標題｜例子｜可能考法｜待確認。\n若摘錄不足請要求我補頁，不要發明講義沒有的規則。",
    "enPrompt": "[Prompt 1 | PDF Key-Point Cards] Turn my page-referenced excerpts into concept cards. Ask for more pages if needed; do not invent rules.",
    "zhCoachPrompt": "【Prompt 2｜PPT／PDF 缺口檢查】\n以下是我的重點卡：\n（貼上）\n請指出哪些像定義、哪些像例子、哪些可能是老師口頭補充缺口；並給我回原檔時該搜尋的關鍵詞。",
    "enCoachPrompt": "[Prompt 2 | Gap Check] Identify definitions vs examples vs likely oral-only gaps, and give search terms for the original file.",
    "zhFeedbackPrompt": "【Prompt 3｜重點包驗收】\n以下是我的 PDF 重點包：\n（貼上）\n請評分：追溯完整度、考點清晰度、是否過度冗長、是否把不確定當確定。刪減到可在 25 分鐘內複習完的版本，並說明你刪了什麼。",
    "enFeedbackPrompt": "[Prompt 3 | Pack Review] Score traceability and exam clarity; cut the pack to a 25-minute review version and explain deletions.",
    "zhExample": "卡示例：收入認列｜需滿足履約義務與可衡量等條件（自述）｜講義 p.47｜例子：預收款｜考法：給情境判斷能否認列｜待確認：老師上課補充的例外。",
    "enExample": "Card example: revenue recognition | conditions in my words | p.47 | example: deferred revenue | exam angle: scenario judgment | check oral exceptions.",
    "zhPractice": "選一份本週真實講義或 PPT。；先做目錄地圖再做 8-15 張重點卡。；用 Prompt 整理後回原文核對。；轉成 10 題問答卡。；Challenge：關掉 PDF，只看重點卡默寫 3 個定義，再開檔對答案。",
    "enPractice": "Choose one real PDF/PPT.；Map then build 8–15 cards.；Verify.；Make 10 Q&A cards.；Challenge: rewrite 3 definitions from cards only, then check the file.",
    "zhQuizItems": [
      {
        "q": "整理老師 PDF／PPT 講義時，最重要的原則是？",
        "options": [
          "越長越好，表示很認真",
          "重點可追溯到頁碼或章節，並分清定義／例子／考點",
          "只保留標題、刪光所有例子",
          "完全交給 AI、自己不看原文"
        ],
        "answer": 1,
        "explain": "可追溯且分類清楚，複習與引用才安全。"
      },
      {
        "q": "下列哪種 PDF 摘要最危險？",
        "options": [
          "標註頁碼的定義卡",
          "看起來通順但無法指回原文、還混入原文沒有的主張",
          "條列待確認問題",
          "比較兩個章節差異的對照表"
        ],
        "answer": 1,
        "explain": "無出處且腦補的摘要最容易造成錯誤理解與錯誤引用。"
      },
      {
        "q": "用 NotebookLM 整理 PDF 後，你仍應？",
        "options": [
          "直接交出去當作業正文",
          "回原 PDF 核對關鍵句與頁碼",
          "刪除所有原始檔",
          "禁止再做任何複習"
        ],
        "answer": 1,
        "explain": "工具整理後仍要原文核對。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What matters most when condensing a lecture PDF/PPT?",
        "options": [
          "Longer is always better",
          "Traceable points with page/section refs, separated into definition/example/exam cues",
          "Keep titles only and delete all examples",
          "Let AI read and never open the file"
        ],
        "answer": 1,
        "explain": "Traceability and classification make review safe."
      },
      {
        "q": "Which PDF summary is most dangerous?",
        "options": [
          "Definition cards with page numbers",
          "Fluent text that cannot be traced and adds claims absent from the source",
          "A list of open questions",
          "A comparison table between sections"
        ],
        "answer": 1,
        "explain": "Sourceless invented claims are high risk."
      },
      {
        "q": "After NotebookLM condenses a PDF, you should still?",
        "options": [
          "Submit it as the full assignment",
          "Verify key sentences and pages in the original PDF",
          "Delete all source files",
          "Never review again"
        ],
        "answer": 1,
        "explain": "Always verify against the original."
      }
    ],
    "zhNotePrompt": "寫下你的章節地圖、最重要的 5 張卡，以及 2 個必須回原文確認的點。",
    "enNotePrompt": "Write your section map, top 5 cards, and 2 must-verify points.",
    "zhDeliverableChecklist": [
      "完成目錄地圖",
      "產出可追溯重點卡",
      "回原文核對關鍵點",
      "生成問答卡",
      "重點包已存檔"
    ],
    "enDeliverableChecklist": [
      "Section map done",
      "Traceable cards created",
      "Verified in original",
      "Q&A cards ready",
      "Pack saved"
    ],
    "zhScorecard": [
      "追溯",
      "密度",
      "考點",
      "可複習",
      "正確性"
    ],
    "enScorecard": [
      "Provenance",
      "Density",
      "Exam focus",
      "Reviewability",
      "Correctness"
    ],
    "resources": [
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "依上傳 PDF 做 grounded 問答與整理"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "管理講義、PPT 與重點包版本"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "在你提供頁碼摘錄後生成重點卡"
      },
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "把重點卡做成可篩選資料庫"
      }
    ],
    "challenge": "把同一份講義做成「長摘要版」與「重點卡版」，計時各複習 15 分鐘，寫下哪一版更能答出細節題並說明原因。"
  },
  {
    "icon": "🎙️",
    "title": "AI 錄音逐字稿",
    "description": "把課堂錄音轉成可用逐字稿與摘要：分段、標講者重點、轉成筆記，並處理隱私與錯誤辨識。",
    "goal": "我的錄音逐字稿工作流與一堂課的「逐字稿→筆記」成品",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "錄音",
      "逐字稿",
      "課堂回放",
      "Chapter3"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 2,
    "chapterZh": "AI 做筆記",
    "chapterEn": "AI Note-Taking",
    "zhTitle": "第13課：AI 錄音逐字稿",
    "enTitle": "Lesson 13: AI Lecture Transcripts",
    "zhValueTip": "把課堂錄音轉成可用逐字稿與摘要：分段、標講者重點、轉成筆記，並處理隱私與錯誤辨識。",
    "enValueTip": "Turn lecture recordings into usable transcripts and notes—segment, highlight, convert—while handling privacy and recognition errors.",
    "zhOutcome": "我的錄音逐字稿工作流與一堂課的「逐字稿→筆記」成品",
    "enOutcome": "My Transcript Workflow and One Lecture “Transcript → Notes” Deliverable",
    "zhConcept": "AI 錄音逐字稿能救「當下沒記完整」的課堂，但也可能造成兩種極端：一是完全依賴錄音而不聽課；二是得到一大篇口語流水帳，比不整理更難複習。大學生該建立的是「錄音→逐字稿→校對→筆記」流水線。先確認課堂與學校規範是否允許錄音；涉及同學發言時更要注意隐私，預設只作個人學習、不上傳公開處。轉逐字稿可用 Whisper 類工具或具備轉錄功能的服務，完成後立刻做三件事：1) 依主題／時間軸分段；2) 標記老師強調、定義、作業、考試提示；3) 把標記段轉成第11課課堂筆記模板。對專有名詞、人名、公式、數字必須人工校对，因為語音辨識最容易在這裡出錯。若課堂同時有 PPT，建議在時間戳旁記投影片頁碼，之後重聽才能精準跳轉。請假補課時，優先處理「作業說明＋考試提示＋核心定義」三段，不要從第一分鐘聽到最後。最後只保留「可複習筆記＋必要引用片段」，不要讓 raw 逐字稿變成你唯一的知識庫。這一課會讓你在請假補課、內容太快、術語密集的課上仍能追回來，同時維持筆記系統的乾淨。也請把音檔權限與保存位置納入 Workspace 規則，避免之後找不到或誤分享。此外，請把本課成果視為筆記系統的一層：raw 捕捉、AI 整理、你的校对 final，三者分開保存。每次完成後花三分鐘寫下「下次可更快的一步」，讓流程可持續迭代。若與同學協作，只分享 final 與公開允許的資料，不分享含隱私的錄音或未脱敏逐字稿。當你能穩定輸出可追溯、可複習、可回流的筆記，AI 才真正提高學習效率，而不是增加數位堆積。錄音逐字稿的價值在「補洞」而不是「取代出席」。能到課就先聽課捕捉，錄音當保險。轉寫後先刪寒暄與重複口頭禪，再分段；否則 AI 會把噪音當重點。時間戳建議至少標在：主題切換、定義出現、作業說明、考試提示四處。若一堂課超過 90 分鐘，先切成三個檔案處理，完成一段就匯出一段筆記，降低拖延。專有名詞校对清單可做成科目詞典，下一堂同一老師的口音錯誤會越改越快。不要把逐字稿丟進公開 Chat；涉及同學發言先脱敏或只保留老師講授段。完成後在筆記系統標記「已補課／未補課」，避免以為有錄音就等於已學會。",
    "enConcept": "Lecture transcripts help you recover missed detail, but only if you segment, highlight, verify critical terms, and convert into structured notes. Respect recording permissions and privacy. Raw transcripts are not your final knowledge base.",
    "zhCaseStudy": "情境案例：電機系阿凱的訊號課節奏很快，他合法錄音後用轉錄工具產出逐字稿，第一版充滿口語與錯誤術語。他改成先切 10 分鐘一段，只精校「定義＋公式」段落，再轉成 Keys／Confusion／Actions。補考前他不再重聽三小時錄音，只重聽標註的 18 分鐘關鍵段。也因隱私考量，錄音從未傳進共用群組。",
    "enCaseStudy": "Kai legally recorded a fast signals lecture, segmented the transcript, verified formula terms, converted highlights into notes, and replayed only 18 critical minutes before the quiz.",
    "zhWorkflow": [
      "確認可錄音與隱私界線",
      "轉錄後依時間軸／主題分段",
      "標記定義、強調、作業、考試提示",
      "校对專有名詞與公式",
      "轉成課堂筆記模板並歸檔"
    ],
    "enWorkflow": [
      "Confirm permission and privacy boundaries",
      "Transcribe and segment",
      "Highlight definitions, emphasis, homework, exam cues",
      "Verify terms and formulas",
      "Convert into class-note template and file it"
    ],
    "zhCommonMistakes": [
      "用錄音取代聽課",
      "不校對就整篇當真理",
      "逐字稿不分段、無法回放關鍵處",
      "把含他人隱私的音檔外流"
    ],
    "enCommonMistakes": [
      "Replacing listening with recording",
      "Trusting unedited transcripts",
      "No segmentation for replay",
      "Sharing private audio"
    ],
    "zhExcellentExample": "優秀成品包含：分段目錄、3-5 段精校關鍵逐字稿、對應的課堂筆記 final、以及「需重聽」時間戳清單。",
    "enExcellentExample": "A strong deliverable has a segment map, a few verified key transcript spans, final class notes, and timestamped replay targets.",
    "zhPrompt": "【Prompt 1｜逐字稿分段清理】\n以下是課堂錄音逐字稿（可能含錯字與口語）：\n（貼上一段 5-10 分鐘）\n請：1) 分成小標題 2) 去除明顯贅詞但保留原意 3) 列出定義／例子／作業／考試提示 4) 標出可能辨識錯誤的術語供我校對。不要發明老師沒說的內容。",
    "enPrompt": "[Prompt 1 | Transcript Cleanup] Segment a 5–10 minute transcript, remove filler while preserving meaning, extract definitions/examples/homework/exam cues, and flag likely term errors.",
    "zhCoachPrompt": "【Prompt 2｜轉成課堂筆記】\n以下是我標記過的關鍵逐字稿：\n（貼上）\n請轉成 Focus／Keys／Confusion／Examples／Actions。對不確定術語保留「待校對」，不要擅自改成你以為的專業詞。",
    "enCoachPrompt": "[Prompt 2 | Transcript to Class Notes] Convert highlighted transcript spans into the class-note template; keep uncertain terms marked for verification.",
    "zhFeedbackPrompt": "【Prompt 3｜逐字稿工作流回饋】\n以下是我的「逐字稿→筆記」成品：\n（貼上）\n請評分：分段是否可回放、關鍵術語是否已校對、筆記是否可複習、是否仍太像流水帳。給我下一堂可節省時間的流程調整建議。",
    "enFeedbackPrompt": "[Prompt 3 | Workflow Feedback] Score replayability, term verification, reviewability, and residual transcript noise; suggest time-saving adjustments.",
    "zhExample": "時間戳 12:40-15:10｜主題：濾波器直覺｜關鍵句精校後｜Actions：重做習題2、校對「截止頻率」詞。最終只把精校段轉成筆記，不保存整份口語稿當複習主檔。",
    "enExample": "Timestamp 12:40–15:10 | filter intuition | verified terms | actions: drill set 2, verify cutoff-frequency wording.",
    "zhPractice": "取得一堂可合法使用的錄音或公開課程音訊。；轉錄並分段。；精校至少兩段關鍵內容。；轉成課堂筆記模板。；Challenge：只重聽你標記的關鍵段，計時是否少於原錄音 30%。",
    "enPractice": "Use a permitted recording.；Transcribe and segment.；Verify two key spans.；Convert to notes.；Challenge: replay only marked spans and stay under 30% of original duration.",
    "zhQuizItems": [
      {
        "q": "課堂錄音逐字稿最正確的使用方式是？",
        "options": [
          "完全取代出席與聽課",
          "作為回放與補洞工具，再轉成結構化筆記",
          "公開分享含同學隱私的完整錄音到社群",
          "不聽逐字稿、直接當作業上交"
        ],
        "answer": 1,
        "explain": "逐字稿是補洞與回放，不是代出席或隨意外流。"
      },
      {
        "q": "AI 語音辨識常見風險是？",
        "options": [
          "專有名詞、姓名、公式被聽错",
          "永遠 100% 正確",
          "不會有標點問題",
          "可自動保證學術引用正確"
        ],
        "answer": 0,
        "explain": "專有名詞與公式最容易錯，必須人工校对關鍵段。"
      },
      {
        "q": "從逐字稿到筆記，較佳步驟是？",
        "options": [
          "保留全部口語贅字當最終版",
          "先分段→標重點→转成課堂筆記模板→校对關鍵定義",
          "只抽一句名言",
          "刪除所有例子"
        ],
        "answer": 1,
        "explain": "分段與結構化後再校对，才會變成可複習筆記。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What is the right use of a lecture transcript?",
        "options": [
          "Replace attendance entirely",
          "Use it to replay and fill gaps, then convert into structured notes",
          "Post private class audio publicly",
          "Submit the raw transcript as homework"
        ],
        "answer": 1,
        "explain": "Transcripts support replay and gap-filling, not outsourcing attendance."
      },
      {
        "q": "A common speech-to-text risk is?",
        "options": [
          "Mistranscribing terms, names, and formulas",
          "Perfect accuracy always",
          "No punctuation issues ever",
          "Automatic correct academic citations"
        ],
        "answer": 0,
        "explain": "Critical terms need human verification."
      },
      {
        "q": "Best path from transcript to notes?",
        "options": [
          "Keep all filler words as final notes",
          "Segment → highlight → convert to class-note template → verify key definitions",
          "Extract one quote only",
          "Delete all examples"
        ],
        "answer": 1,
        "explain": "Structure first, then verify."
      }
    ],
    "zhNotePrompt": "寫下你的分段目錄、兩個已校對術語，以及仍需重聽的時間戳。",
    "enNotePrompt": "Write your segment map, two verified terms, and timestamps still needing replay.",
    "zhDeliverableChecklist": [
      "完成轉錄與分段",
      "精校關鍵術語",
      "轉成課堂筆記",
      "列出重聽時間戳",
      "遵守隱私與使用界線"
    ],
    "enDeliverableChecklist": [
      "Transcribed and segmented",
      "Key terms verified",
      "Converted to class notes",
      "Replay timestamps listed",
      "Privacy boundaries respected"
    ],
    "zhScorecard": [
      "可回放",
      "校對品質",
      "轉筆記效率",
      "隱私意識",
      "可複習"
    ],
    "enScorecard": [
      "Replayability",
      "Verification",
      "Conversion efficiency",
      "Privacy",
      "Reviewability"
    ],
    "resources": [
      {
        "name": "OpenAI Whisper",
        "url": "https://openai.com/research/whisper",
        "note": "語音轉文字技術參考與工具生態入口"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "分段清理與轉成筆記（需你貼上逐字稿）"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "私密保存音檔與逐字稿版本"
      },
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "放時間戳目錄與 final 筆記"
      }
    ],
    "challenge": "選一段你原本聽不懂的 10 分鐘錄音，用「精校＋筆記」後寫下：你補回了哪三個原先漏掉的點。"
  },
  {
    "icon": "🗺️",
    "title": "AI 心智圖整理",
    "description": "把課堂與 PDF 筆記轉成心智圖／知識圖譜：中心問題、分支概念、關係箭頭與複習路徑。",
    "goal": "我的主題心智圖（含關係說明）與一條 15 分鐘複習路徑",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "心智圖",
      "知識圖譜",
      "結構複習",
      "Chapter3"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 2,
    "chapterZh": "AI 做筆記",
    "chapterEn": "AI Note-Taking",
    "zhTitle": "第14課：AI 心智圖整理",
    "enTitle": "Lesson 14: AI Mind-Map Organization",
    "zhValueTip": "把課堂與 PDF 筆記轉成心智圖／知識圖譜：中心問題、分支概念、關係箭頭與複習路徑。",
    "enValueTip": "Turn class and PDF notes into mind maps/knowledge graphs—central question, branches, relations, and review paths.",
    "zhOutcome": "我的主題心智圖（含關係說明）與一條 15 分鐘複習路徑",
    "enOutcome": "My Topic Mind Map (with relation notes) and a 15-Minute Review Path",
    "zhConcept": "AI 心智圖整理要解決的是「筆記很多但腦中沒有地圖」。條列筆記適合細節，心智圖／知識圖譜適合關係：誰屬於誰、誰導致誰、誰與誰對比、復習時先走哪條路。大學生可先選一個中心問題（不是只放課程名稱），例如「假設檢定何時用哪種檢定？」。再把第11-13課的重點變成節點，用關係詞連起來；例子與公式當葉節點，不要全塞進中心。AI 很適合根據你的筆記草稿提議分支與關係，但必須你來刪錯連、補缺枝。好的心智圖還要附一條 15 分鐘複習路徑：從哪裡開始、經過哪些必經節點、最後做哪三題自測。若你使用 Notion／Obsidian，可以把圖中節點連回筆記頁，形成真正的知識圖譜，而不是一張孤立圖片。當多科同時進行時，心智圖也能當「切換開關」：打開圖就知道這科的主幹，不必每次重掃資料夾。寫報告時，圖譜還能提示概念之間的論證順序，減少段落跳躍。這一課完成後，你會能解釋概念關係，而不只是背定義句子。請把校正後的圖存成 final，並註明對應的課堂／PDF 來源版本，方便考前與組員協作。此外，請把本課成果視為筆記系統的一層：raw 捕捉、AI 整理、你的校对 final，三者分開保存。每次完成後花三分鐘寫下「下次可更快的一步」，讓流程可持續迭代。若與同學協作，只分享 final 與公開允許的資料，不分享含隱私的錄音或未脱敏逐字稿。當你能穩定輸出可追溯、可複習、可回流的筆記，AI 才真正提高學習效率，而不是增加數位堆積。心智圖的中心應是問題或決策，而不是課本封面標題；標題太寬會讓分支失去方向。關係詞請寫清楚：包含、導致、對比、例外、先備於，避免只畫線不寫關係。每個一級分支建議對應一個可複習的子問題；葉節點才放公式、例子與頁碼。若節點超過一屏仍看不完，代表還沒刪；考前圖必須能在十五分鐘走完主路徑。把圖與筆記雙向連結：圖負責地圖，筆記負責細節，兩者缺一不可。組專題時可用同一張圖分工：每人負責一條分支並回流定義，避免各寫各的。月考前只更新易錯與對比分支，不必重畫整張圖，維持知識圖譜的版本連續性。",
    "enConcept": "Mind maps and lightweight knowledge graphs reveal relations and review paths. Start from a central question, attach nodes from your notes, label relation types, and verify AI-suggested links. Connect nodes back to Notion/Obsidian pages when possible.",
    "zhCaseStudy": "情境案例：經濟系小芝微積分相關章節一直背公式仍錯。她把「何時用哪個定理」當中心問題，請 AI 依她的課堂筆記草稿生出分支，自己刪掉兩條不符合老師講法的箭頭，補上「適用條件」節點。考前她不重抄筆記，只走自己定的 15 分鐘路徑：條件→定理→反例→兩題。錯題明顯下降。她也在 Obsidian 把節點連回原筆記，之後報告要引用定義時能一路點回去。",
    "enCaseStudy": "Xiaozhi rebuilt calculus review around “which theorem when,” corrected AI-suggested links, followed a 15-minute path, and linked nodes back to notes for later citation.",
    "zhWorkflow": [
      "選定中心問題（可考、可解釋）",
      "從既有筆記抽出 8-20 個節點",
      "請 AI 建議分支與關係，再人工校正",
      "標註關係類型與必經節點",
      "設計 15 分鐘複習路徑並自測"
    ],
    "enWorkflow": [
      "Choose a central question",
      "Extract 8–20 nodes from existing notes",
      "Ask AI for branches/relations, then correct them",
      "Label relation types and must-pass nodes",
      "Design a 15-minute review path with self-checks"
    ],
    "zhCommonMistakes": [
      "中心放太寬的課程名",
      "節點過多變成另一篇長文",
      "不校正 AI 的錯誤關係",
      "圖與原始筆記沒有連結"
    ],
    "enCommonMistakes": [
      "Using an overly broad course title as the center",
      "Too many nodes becoming another essay",
      "Accepting false AI relations",
      "Leaving the map unlinked from source notes"
    ],
    "zhExcellentExample": "優秀心智圖：中心問題清楚、分支不超過主要路徑、關係有標籤、附複習路徑與 3 題自測；並能指出兩個「易混概念對比」。",
    "enExcellentExample": "A strong map has a sharp center, labeled relations, a review path, three self-check questions, and at least one contrast pair.",
    "zhPrompt": "【Prompt 1｜心智圖架構師】\n請依我的筆記草稿設計心智圖文字版（可轉繪圖）。\n中心問題：［填寫］\n筆記：\n（貼上）\n請輸出：中心、一級分支、二級節點、關係標籤（屬於／導致／對比／條件）、以及容易連错的地方警告。不要新增筆記中沒有依據的概念。",
    "enPrompt": "[Prompt 1 | Mind-Map Architect] Build a text mind map from my notes with relation labels and false-link warnings. Do not invent unsupported concepts.",
    "zhCoachPrompt": "【Prompt 2｜易混概念對比】\n在我的主題中，請找出 2 組最易混淆的概念對，說明差異、共用條件與一個判別句。並告訴我應放在心智圖的哪兩個節點旁。",
    "enCoachPrompt": "[Prompt 2 | Contrast Pairs] Find two easy-to-confuse concept pairs, explain differences, and where to place them on the map.",
    "zhFeedbackPrompt": "【Prompt 3｜心智圖驗收】\n以下是我的心智圖文字版與複習路徑：\n（貼上）\n請評分：中心是否可考、關係是否正確、路徑是否 15 分鐘可走完、是否過載。給精簡版結構。",
    "enFeedbackPrompt": "[Prompt 3 | Map Review] Score center quality, relation accuracy, 15-minute path fit, and overload; provide a leaner structure.",
    "zhExample": "中心：何時用獨立樣本 t 檢定？\n分支：前提→統計量→解讀→對比（配對t）→常見錯法；路徑：前提檢查→公式意義→對比→兩題自測。",
    "enExample": "Center: when to use an independent-samples t-test? Branches: assumptions → statistic → interpretation → contrast with paired t → common errors.",
    "zhPractice": "選一個你正在學的主題。；用既有筆記抽節點。；AI 產架構後人工校正。；補上易混對比與複習路徑。；Challenge：不看原筆記，只看圖講解 3 分鐘給同學聽，請對方指出跳躍處。",
    "enPractice": "Pick one topic.；Extract nodes.；Correct an AI draft map.；Add contrasts and a review path.；Challenge: explain for 3 minutes using only the map.",
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
    "zhNotePrompt": "貼上心智圖文字版、兩組易混概念，以及你的 15 分鐘複習路徑。",
    "enNotePrompt": "Paste the text map, two contrast pairs, and your 15-minute path.",
    "zhDeliverableChecklist": [
      "完成中心問題",
      "校正後的分支與關係",
      "至少一組易混對比",
      "15 分鐘複習路徑",
      "節點可連回原筆記"
    ],
    "enDeliverableChecklist": [
      "Center set",
      "Corrected relations",
      "At least one contrast pair",
      "15-minute path",
      "Nodes link back to notes"
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
    "resources": [
      {
        "name": "Obsidian",
        "url": "https://obsidian.md",
        "note": "雙向連結與圖譜檢視"
      },
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "用資料庫／頁面連結模擬知識圖譜"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "由筆記生成文字心智圖草稿"
      },
      {
        "name": "Whimsical",
        "url": "https://whimsical.com",
        "note": "可快速把文字結構畫成心智圖"
      }
    ],
    "challenge": "把第12課的 PDF 重點卡轉成一張心智圖，刪到只剩考前真正用得到的節點，並寫下你刪除的原則。"
  },
  {
    "icon": "📌",
    "title": "AI 考前重點整理",
    "description": "把課堂筆記、PDF 重點與心智圖收成考前包：必背、必懂、必練、易錯，並安排倒數複習節奏。",
    "goal": "我的考前重點包（必背／必懂／必練／易錯）與 3 日複習計畫",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "考前",
      "複習計畫",
      "重點包",
      "Chapter3"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 2,
    "chapterZh": "AI 做筆記",
    "chapterEn": "AI Note-Taking",
    "zhTitle": "第15課：AI 考前重點整理",
    "enTitle": "Lesson 15: AI Pre-Exam Condensing",
    "zhValueTip": "把課堂筆記、PDF 重點與心智圖收成考前包：必背、必懂、必練、易錯，並安排倒數複習節奏。",
    "enValueTip": "Compress class notes, PDF cards, and mind maps into an exam pack—must-memorize, must-understand, must-practice, pitfalls—plus a countdown plan.",
    "zhOutcome": "我的考前重點包（必背／必懂／必練／易錯）與 3 日複習計畫",
    "enOutcome": "My Pre-Exam Pack (memorize/understand/practice/pitfalls) and 3-Day Review Plan",
    "zhConcept": "AI 考前重點整理是 Chapter 3 的收束：把課堂筆記、PDF 重點、錄音補洞與心智圖，收成考試可執行的作戰包。考前最常見失敗不是沒資料，而是資料平鋪、無法取捨。你要用四個箱子分類：必背（定義、公式、條件）、必懂（為什麼、比較、推導直覺）、必練（題型與步驟）、易錯（老師強調的陷阱）。AI 可協助從你的既有筆記抽取候選、去重、產自測題，但取捨標準必須來你的講義範圍與老師提示，不能讓模型擅自擴綱。接著做時間盒：若剩 3 天，每天都該有「回顧＋自測＋錯題回補」，而不是只看不寫。考前包要短到你真的會看完；通常每科核心是數頁到十數頁等級，外加題型清單。若同一天考兩科，先為各科建立獨立作戰包，再在日曆上交錯安排高能量時段給必練。完成這一課，你的 AI 筆記系統才閉環：平時累積、考前壓縮、考後把錯題回流到 Confusion 與心智圖。這也讓你在多科同時考試時，能快速切換各科作戰包，而不是每次都重新翻資料夾。長期看，考前包會變成你的科目「精華層」，下學期若有延伸課程也能快速喚醒先備知識。此外，請把本課成果視為筆記系統的一層：raw 捕捉、AI 整理、你的校对 final，三者分開保存。每次完成後花三分鐘寫下「下次可更快的一步」，讓流程可持續迭代。若與同學協作，只分享 final 與公開允許的資料，不分享含隱私的錄音或未脱敏逐字稿。當你能穩定輸出可追溯、可複習、可回流的筆記，AI 才真正提高學習效率，而不是增加數位堆積。考前包的第一頁固定寫：考試形式、允許工具、範圍章節、老師口頭加權提示。四箱分類時，同一概念只進一箱；若既要背又要懂，背的是短句，懂的是解釋，分開寫。自測題要記錄錯因：公式、概念混淆、還是粗心；錯因才決定回流到哪一課筆記。時間盒要寫到日曆，含開始與結束，不做開放式「有空再看」。考前一晚禁止擴綱；只允許重看易錯與當日錯題。多科並行時，用「能量高低」排程：高能量做必練，低能量做必背閃卡。考後 24 小時內完成回流，否則錯題會蒸發，下一輪又從零堆積。當你能重複使用同一套四箱模板跨科目，AI 筆記系統才算真正成型。",
    "enConcept": "Pre-exam condensing closes Chapter 3 by sorting prior notes into memorize/understand/practice/pitfalls, building a short exam pack, and pairing it with a countdown of review + self-test + error repair. AI helps extract and generate drills; you control scope.",
    "zhCaseStudy": "情境案例：生科系小禾兩科同天考。她不再重讀全部講義，而是各做一份考前包：必背一頁、必懂對照兩組、必練六題、易錯五條，並用 AI 依她的重點卡出測驗。倒數三天依計畫執行，考前一晚只重看易錯與錯題。她形容：「不是讀得比較少，是終於讀得到重點。」考後她把兩題新錯回流到課堂筆記 Confusion，下輪自動出現在複習清單。",
    "enCaseStudy": "Xiaohe built two compact exam packs instead of rereading everything, drilled with AI quizzes from her own cards, and recycled post-exam errors into her confusion list.",
    "zhWorkflow": [
      "匯入第11-14課成品並確認考試範圍",
      "分成必背／必懂／必練／易錯四箱",
      "請 AI 去重並產自測題（限你提供的範圍）",
      "排 3 日複習節奏：回顧＋自測＋錯題",
      "考后回流錯題到筆記系統"
    ],
    "enWorkflow": [
      "Gather Lessons 11–14 outputs and confirm scope",
      "Sort into four bins",
      "Ask AI to dedupe and generate drills within scope",
      "Plan a 3-day review/self-test/repair rhythm",
      "Feed post-exam errors back into the note system"
    ],
    "zhCommonMistakes": [
      "考前再讀全文、無取捨",
      "只看不練",
      "讓 AI 超出範圍擴綱",
      "沒有易錯對照，重複踩同陷阱"
    ],
    "enCommonMistakes": [
      "Rereading everything without triage",
      "Reviewing without practice",
      "Letting AI expand beyond syllabus scope",
      "No pitfall list"
    ],
    "zhExcellentExample": "優秀考前包：範圍聲明、四箱內容、10-20 題自測、3 日時程、一頁易錯對照；且每條必背都能指回原筆記或頁碼。",
    "enExcellentExample": "A strong pack states scope, fills four bins, includes drills, a 3-day schedule, and a one-page pitfall sheet with provenance.",
    "zhPrompt": "【Prompt 1｜考前四箱分類器】\n考試科目：［科］；範圍：［章節／講義］；我的筆記：\n（貼上）\n請分成必背／必懂／必練／易錯四箱，每箱條列精簡。若範圍外請排除。不要新增我沒提供的章節。",
    "enPrompt": "[Prompt 1 | Exam Four-Bin Sorter] Sort my notes into memorize/understand/practice/pitfalls within the stated syllabus only.",
    "zhCoachPrompt": "【Prompt 2｜考前自測出題】\n只根據以下考前包出 12 題（選擇／簡答混合），並附答案與解析。\n（貼上考前包）\n難度要像小考，不要超綱，不要考無關常识。",
    "enCoachPrompt": "[Prompt 2 | Pre-Exam Drill Generator] Create 12 in-scope mixed questions with answers and explanations from my exam pack only.",
    "zhFeedbackPrompt": "【Prompt 3｜考前包與時程驗收】\n以下是我的考前包與 3 日計畫：\n（貼上）\n請評分：是否夠短、是否可執行、四箱是否混淆、自測是否足夠。給一版更狠的刪減建議與明日優先序。",
    "enFeedbackPrompt": "[Prompt 3 | Pack & Schedule Review] Score brevity, feasibility, bin clarity, and drill sufficiency; propose cuts and tomorrow priorities.",
    "zhExample": "必背：定義三則＋公式二則（含頁碼）；必懂：兩組對比；必練：計算題型A/B 各兩題步驟檢查點；易錯：符號、單位、前提條件；D-3 建包、D-2 自測、D-1 錯題＋易錯。",
    "enExample": "Memorize 3 definitions + 2 formulas; understand 2 contrasts; practice two item types; pitfalls list; D-3 build, D-2 drill, D-1 repair.",
    "zhPractice": "選定一科即將到來的考試。；匯入既有筆記做四箱分類。；產自測並實際做一輪。；排出 3 日計畫。；Challenge：把考前包壓縮到你能在 40 分鐘內完整複習完，並記錄刪除清單。",
    "enPractice": "Pick an upcoming exam.；Build four bins.；Generate and take a drill.；Make a 3-day plan.；Challenge: compress the pack to a 40-minute full review and log deletions.",
    "zhQuizItems": [
      {
        "q": "考前重點整理最該避免的是？",
        "options": [
          "把所有筆記再複製貼上成更長一版",
          "依必背／必懂／必練分類並搭配自測",
          "針對易錯點做對照",
          "依倒數天數安排回顧"
        ],
        "answer": 0,
        "explain": "考前要壓縮與分類，不是再膨脹一份全文。"
      },
      {
        "q": "「必練」區最適合放什麼？",
        "options": [
          "只放勵志語錄",
          "題型、代表題與解題步驟檢查點",
          "與考試無關的趣聞",
          "未核對的 AI 長文"
        ],
        "answer": 1,
        "explain": "必練要能直接轉成作答行動。"
      },
      {
        "q": "Chapter 3 筆記系統在考前的整合方式較佳是？",
        "options": [
          "放棄前面所有筆記重來",
          "從課堂筆記／PDF 卡／心智圖抽取高頻考點，形成單頁或多頁考前包",
          "只看錄音逐字稿全文",
          "只背同學摘要不自測"
        ],
        "answer": 1,
        "explain": "考前包是前面系統的輸出，不是另起爐灶。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What should you avoid most in pre-exam condensing?",
        "options": [
          "Copying all notes into an even longer document",
          "Sorting into memorize/understand/practice with self-tests",
          "Contrasting common pitfalls",
          "Scheduling reviews by countdown"
        ],
        "answer": 0,
        "explain": "Condense and classify; do not inflate."
      },
      {
        "q": "What belongs in the “must-practice” zone?",
        "options": [
          "Motivational quotes only",
          "Item types, representative problems, and solution checkpoints",
          "Unrelated trivia",
          "Unverified long AI essays"
        ],
        "answer": 1,
        "explain": "Practice items must become exam actions."
      },
      {
        "q": "Best way to integrate Chapter 3 systems before exams?",
        "options": [
          "Throw away prior notes and restart",
          "Extract high-yield points from class notes/PDF cards/mind maps into an exam pack",
          "Read full transcripts only",
          "Memorize a classmate summary without self-testing"
        ],
        "answer": 1,
        "explain": "The exam pack is an output of your system."
      }
    ],
    "zhNotePrompt": "寫下四箱各 3 條、12 題自測中你錯的題，以及明日第一個行動。",
    "enNotePrompt": "Write 3 items per bin, the drill items you missed, and tomorrow’s first action.",
    "zhDeliverableChecklist": [
      "完成四箱考前包",
      "產出並作答自測",
      "完成 3 日節奏",
      "每條必背可追溯",
      "設定考后錯題回流方式"
    ],
    "enDeliverableChecklist": [
      "Four-bin pack ready",
      "Drill generated and attempted",
      "3-day rhythm set",
      "Memorize items traceable",
      "Post-exam error loop defined"
    ],
    "zhScorecard": [
      "取捨",
      "可執行",
      "自測密度",
      "易錯覆蓋",
      "系統回流"
    ],
    "enScorecard": [
      "Triage",
      "Feasibility",
      "Drill density",
      "Pitfall coverage",
      "System feedback loop"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "考前包資料庫與倒數清單"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "放各科作戰包與自測卷"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "在範圍內做四箱分類與出題"
      },
      {
        "name": "Anki",
        "url": "https://apps.ankiweb.net",
        "note": "把必背定義轉成間隔重複卡片（可選）"
      }
    ],
    "challenge": "用本課考前包完成一輪限時自測；把錯題寫回第11課 Confusion 與第14課心智圖，形成閉環。"
  },
  {
    "icon": "📋",
    "title": "如何快速理解老師的報告要求",
    "description": "把作業說明拆成任務、範圍、格式、評分與禁令，建立可執行的報告規格書，避免寫錯方向。",
    "goal": "我的報告規格書（任務／評分／範圍／格式／時程）與澄清問題清單",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "報告要求",
      "評分標準",
      "規格書",
      "Chapter4"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 3,
    "chapterZh": "AI 寫報告",
    "chapterEn": "AI for Reports",
    "zhTitle": "第16課：如何快速理解老師的報告要求",
    "enTitle": "Lesson 16: Decode the Assignment Brief",
    "zhValueTip": "把作業說明拆成任務、範圍、格式、評分與禁令，建立可執行的報告規格書，避免寫錯方向。",
    "enValueTip": "Turn the assignment brief into a specs sheet—task, scope, format, rubric, and constraints—so you do not write the wrong paper.",
    "zhOutcome": "我的報告規格書（任務／評分／範圍／格式／時程）與澄清問題清單",
    "enOutcome": "My Report Specs Sheet (task/rubric/scope/format/timeline) and Clarifying Questions",
    "zhConcept": "大學報告最常見的失敗，不是文筆不好，而是一開始就誤解老師要什麼。作業說明通常混雜五種資訊：任務動詞（分析、比較、評論、設計）、範圍（主題／章節／對象）、格式（字數、APA、檔名）、評分標準（論點、文獻、結構、原創）、以及禁令（不可代寫、不可抄襲、不可超過頁數）。很多人只看主題就開寫，結果寫成心得文、缺文獻、或格式全錯。這一課要建立「報告規格書」：用一頁把要求變成可檢查項目。做法是先全文慢讀作業說明與評分表（rubric），用螢光標出動詞與數字；再請 AI 幫忙分類，但每一條都必須能指回原句，AI 不得腦補老師沒寫的規則。接著寫出成功定義：交出去的報告要滿足哪些可觀察條件才算達標。再把評分權重轉成寫作優先序——若「論證與文獻」佔 40%，就不要把時間全花在封面美化。最後列出澄清問題：只問作業說明看不出、但會影響方向的事（例如是否可用網路來源、是否要附原始數據）。這一課也是 Chapter 4 的入口：後面的大綱、文獻、潤稿與定稿，都必須對齊這份規格書，而不是對齊「AI 覺得好看的文章」。實務上建議把規格書存成 raw／final：raw 是貼上的作業原文與你的標註，final 是整理後的檢查清單與時程。若同一門課有多次報告，規格書可變成模板，只改主題與截止日期。當你能在十五分鐘內從作業說明抽出任務動詞、評分權重與禁令，你就已經比多數同學更接近可繳交品質。也請把「禁止 AI 代寫」寫進規格書的合規區：本課程允許 AI 協助理解、規劃、檢查，但論點、證據解讀與最終文字責任屬於你。閱讀評分標準時，把抽象詞轉成可驗證行為。例如「論述清楚」可轉成：每段有主張句、證據、解釋；「文獻充分」可轉成：至少 N 篇同儕審查來源且引用格式正確。若老師只給主題沒給 rubric，就依常見大學報告標準自建檢查表：問題意識、文獻基礎、方法或分析、結論與限制、引用規範，再在課堂或信件中向老師確認權重。時程建議倒推：定稿日前兩天完成完整草稿，前四天完成文獻卡，前六天鎖定大綱。規格書要寫出這些里程碑，否則後面容易擠在最後一晚請 AI 急救，品質與誠信風險都升高。",
    "enConcept": "Most weak reports fail by misreading the brief. Build a one-page specs sheet covering task verbs, scope, format, rubric weights, and constraints. Use AI to classify, but every rule must map to the original text. Define success criteria and convert rubric weights into writing priorities. End with clarifying questions. This specs sheet becomes the control document for Lessons 17–20.",
    "zhCaseStudy": "情境案例：傳播系小瑜拿到「請探討短影音對大學生注意力的影響，3000字，APA，佔總分30%」就直接請 AI 寫全文，結果被扣：缺少明確研究問題、引用多數是部落格、結論像心得。隔週她重做規格書：任務=探討／分析；必含=研究問題、文獻回顧、至少一組對比論點、限制；格式=APA7、3000±10%；評分推測=論點30／文獻30／結構20／格式10／原創10。她列出三個澄清問題寄給助教，確認「可用問卷二手資料」與「至少五篇期刊」。之後大綱與文獻才對準，終稿一次過關。她說關鍵不是寫得更快，而是終於知道什麼叫「寫對」。",
    "enCaseStudy": "Xiao Yu failed a report by jumping to AI drafting. After building a specs sheet and clarifying questions with the TA, her next paper hit the actual rubric.",
    "zhWorkflow": [
      "完整閱讀作業說明、附件與評分表，標出動詞、數字、禁令",
      "建立報告規格書：任務／範圍／格式／評分／合規／時程",
      "請 AI 協助分類，但逐條核對原句，刪除腦補規則",
      "把評分權重轉成寫作優先序與里程碑",
      "列出 3-5 個澄清問題，必要時問老師／助教"
    ],
    "enWorkflow": [
      "Read the brief and rubric; highlight verbs, numbers, constraints",
      "Build a specs sheet: task/scope/format/rubric/compliance/timeline",
      "Ask AI to classify, then verify every line against the source text",
      "Convert rubric weights into writing priorities and milestones",
      "Write 3–5 clarifying questions for instructor/TA if needed"
    ],
    "zhCommonMistakes": [
      "只看主題就開寫，忽略格式與評分",
      "讓 AI 發明老師沒寫的要求",
      "把「分析」做成「心得分享」",
      "沒有澄清問題，方向錯到截稿才發現"
    ],
    "enCommonMistakes": [
      "Writing from the topic alone",
      "Letting AI invent unstated rules",
      "Turning analysis into personal reflection only",
      "Never clarifying until the deadline"
    ],
    "zhExcellentExample": "優秀規格書包含：任務動詞與成功定義、範圍邊界、字數／引用格式、評分權重與寫作優先序、合規（反抄襲／AI 使用界線）、倒推時程、以及已發送或已決議的澄清問題。",
    "enExcellentExample": "A strong specs sheet includes task verbs, success criteria, scope, format, rubric priorities, compliance rules, reverse timeline, and resolved clarifying questions.",
    "zhPrompt": "【Prompt 1｜作業說明拆解教練】\n請擔任大學寫作教練。以下是老師的作業說明／評分標準原文：\n（貼上）\n請整理成「報告規格書」，欄位固定為：\n1) 任務動詞與你要用自己的話重述的任務\n2) 範圍（要寫／不要寫）\n3) 格式與繳交細節（字數、檔名、引用格式、附件）\n4) 評分標準與權重（若未給權重請標「未提供」並給合理假設，且標成假設）\n5) 禁令與學術誠信要求\n6) 仍不清楚、需要問老師的問題（3-5個）\n規則：每一條都要標註「來自原文／合理推斷」。禁止發明原文沒有的硬性規定。",
    "enPrompt": "[Prompt 1 | Brief Decoder] Turn my assignment text into a specs sheet with task, scope, format, rubric, constraints, and clarifying questions. Label each line as from source vs inference. Do not invent hard rules.",
    "zhCoachPrompt": "【Prompt 2｜評分標準轉寫作優先序】\n以下是我的報告規格書：\n（貼上）\n請依評分權重排出寫作優先序（高→低），並為未來 7 天排出里程碑：鎖定問題、文獻、大綱、初稿、引用檢查、潤稿、定稿。若某項權重未提供，請明確標示假設。最後給我一份「交出去前必勾選」的 12 項清單。",
    "enCoachPrompt": "[Prompt 2 | Rubric to Priorities] From my specs sheet, rank writing priorities by weight and build a 7-day milestone plan plus a 12-item submit checklist.",
    "zhFeedbackPrompt": "【Prompt 3｜規格書驗收】\n以下是我整理的報告規格書：\n（貼上）\n原始作業說明：\n（貼上）\n請檢查：是否漏掉格式／禁令／字數？是否把推斷誤標成原文？任務重述是否偏離？給 1-10 分、三個風險、三個立刻修正，並重寫「成功定義」一段讓我可直接取代。",
    "enFeedbackPrompt": "[Prompt 3 | Specs Review] Compare my specs sheet to the original brief; score it, list risks, and rewrite the success definition.",
    "zhExample": "原文片段：「比較兩種學習策略對大一成績之影響，2500-3000字，APA，禁止抄襲。」\n規格書：任務=比較分析；範圍=兩種策略＋對大一成績；格式=2500-3000／APA7；評分假設=論證與證據為高優先；禁令=禁止抄襲與代寫；澄清=是否需台灣樣本文獻？",
    "enExample": "Brief: compare two learning strategies’ effects on first-year grades, 2500–3000 words, APA. Specs capture task, scope, format, assumed priorities, and one clarifying question.",
    "zhPractice": "選一份真實課程報告作業說明。；用螢光筆標出動詞、數字、禁令。；用 Prompt 1 產出規格書並逐條核對。；用 Prompt 2 排出 7 日里程碑。；Challenge：把規格書縮成一頁，並寫出若只剩 5 天你會犧牲什麼、保住什麼。",
    "enPractice": "Use a real assignment brief.；Highlight verbs/numbers/constraints.；Build and verify a specs sheet.；Make a 7-day plan.；Challenge: compress to one page and decide what to protect if only 5 days remain.",
    "zhQuizItems": [
      {
        "q": "讀作業說明時，最優先確認的通常是？",
        "options": [
          "封面要用什麼顏色",
          "任務動詞、範圍、格式、評分與禁令",
          "同學誰的文筆比較好",
          "AI 能不能一次生成全文交差"
        ],
        "answer": 1,
        "explain": "先對齊任務與評分，才不會寫錯方向。"
      },
      {
        "q": "請 AI 拆解作業要求時，最正確的規則是？",
        "options": [
          "允許 AI 自行添加看起來合理的硬性規定",
          "每一條都標註來自原文或推斷，並核對原句",
          "只要輸出漂亮表格就不必看原文",
          "把評分標準全部忽略，只看主題"
        ],
        "answer": 1,
        "explain": "規格書必須可追溯，不能讓模型發明規則。"
      },
      {
        "q": "若「文獻與論證」佔評分很高，你的優先序應如何？",
        "options": [
          "先花最多時間做精美封面",
          "先鎖定研究問題與文獻品質，再追求裝飾",
          "先請 AI 寫完再看評分表",
          "只寫個人感想即可"
        ],
        "answer": 1,
        "explain": "寫作時間應對齊權重最高的評分項。"
      }
    ],
    "enQuizItems": [
      {
        "q": "When reading an assignment brief, what should you confirm first?",
        "options": [
          "Cover color",
          "Task verbs, scope, format, rubric, and constraints",
          "Who writes best in class",
          "Whether AI can submit the whole paper for you"
        ],
        "answer": 1,
        "explain": "Align to task and grading before drafting."
      },
      {
        "q": "Best rule when using AI to decode a brief?",
        "options": [
          "Let AI add plausible hard rules",
          "Label source vs inference and verify against the text",
          "Pretty tables are enough",
          "Ignore the rubric and follow the topic only"
        ],
        "answer": 1,
        "explain": "Specs must be traceable."
      },
      {
        "q": "If evidence and argument weigh heavily, what should you prioritize?",
        "options": [
          "Decorative covers first",
          "Research question and source quality before decoration",
          "Full AI draft before reading the rubric",
          "Personal feelings only"
        ],
        "answer": 1,
        "explain": "Spend time where the rubric spends points."
      }
    ],
    "zhNotePrompt": "貼上規格書最終版，並寫下：最容易被扣分的一項是什麼？你的第一個里程碑是哪天完成？",
    "enNotePrompt": "Paste your final specs sheet and name the highest-risk rubric item plus your first milestone date.",
    "zhDeliverableChecklist": [
      "完成一頁報告規格書",
      "任務與成功定義可對應原文",
      "評分優先序已排出",
      "至少 3 個澄清問題",
      "7 日里程碑已寫入日曆"
    ],
    "enDeliverableChecklist": [
      "One-page specs sheet done",
      "Task maps to source text",
      "Rubric priorities ranked",
      "At least 3 clarifying questions",
      "7-day milestones on calendar"
    ],
    "zhScorecard": [
      "對齊原文",
      "評分敏感",
      "可執行",
      "合規清楚",
      "時程可行"
    ],
    "enScorecard": [
      "Source alignment",
      "Rubric awareness",
      "Actionability",
      "Compliance clarity",
      "Timeline realism"
    ],
    "resources": [
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "後續找文獻前，先用關鍵詞對齊作業主題"
      },
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "快速理解領域背景，仍須回到作業原文"
      },
      {
        "name": "APA Style",
        "url": "https://apastyle.apa.org",
        "note": "若作業指定 APA，先確認版本與基本規範"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "可上傳作業 PDF／評分表做 grounded 問答"
      }
    ],
    "challenge": "用本課規格書檢查你上一份已繳交報告：列出至少 3 個「當時忽略的要求」，並改寫成下一份報告的防呆清單。"
  },
  {
    "icon": "🗂️",
    "title": "利用 AI 建立報告大綱",
    "description": "把規格書轉成有論點順序的報告架構：研究問題、章節邏輯、每段主張與證據空位。",
    "goal": "我的報告大綱（研究問題＋章節主張＋證據空位＋字數配置）",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "報告大綱",
      "論點結構",
      "章節邏輯",
      "Chapter4"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 3,
    "chapterZh": "AI 寫報告",
    "chapterEn": "AI for Reports",
    "zhTitle": "第17課：利用 AI 建立報告大綱",
    "enTitle": "Lesson 17: Build a Report Outline with AI",
    "zhValueTip": "把規格書轉成有論點順序的報告架構：研究問題、章節邏輯、每段主張與證據空位。",
    "enValueTip": "Turn your specs sheet into an argumentative outline—research question, section logic, claim slots, and evidence gaps.",
    "zhOutcome": "我的報告大綱（研究問題＋章節主張＋證據空位＋字數配置）",
    "enOutcome": "My Report Outline (RQ + section claims + evidence slots + word budget)",
    "zhConcept": "好的大學報告不是先寫很多字，而是先有可防禦的結構。大綱要回答四件事：你的核心問題是什麼、各章節如何推進論證、每一節的主張句是什麼、證據目前缺在哪裡。AI 很擅長提出多種結構選項，但容易寫成「背景—優點—缺點—結論」的空殼。你要用第16課規格書約束它：任務若是比較，大綱就必須出現對照維度；若是評論，就要有評價標準。建議流程：先寫一句研究問題（RQ）與一句暫時主張（working thesis）；再請 AI 產出 2-3 套大綱；你選擇一套後，把每節改成「主張句＋預計證據類型＋預估字數」。證據空位很重要：標成「需期刊定義」「需數據」「需案例」，之後文獻搜尋才有目標，不會漫無目的下載二十篇 PDF。字數配置要對齊評分：文獻回顧與分析通常應佔最多，前言與結語宜短。若老師要求方法或限制，大綱必須預留區塊，不要最後硬塞。也要把反向觀點放進結構：至少一節處理限制或反對意見，這會讓報告看起來像學術論證而非宣傳文。完成大綱後做壓力測試：刪掉任何一節，論證是否仍成立？若不成立，那一節才是必要的；若成立，可能是灌水。大綱是活文件：讀完文獻後應更新主張與證據空位，而不是把初版大綱當聖經。與 AI 協作時，禁止直接說「幫我寫報告」；要說「依此規格書與 RQ，給我大綱選項，每節用主張句，並標出需要證據的位置」。當大綱穩定，第18課的文獻整理才會高效，第19課潤稿才有清楚段落可改，第20課定稿檢查也才有對照基準。實務模板可採：I 緒論（問題、重要性、RQ、論文主張）→ II 文獻／概念架構 → III 分析或比較（依維度分節）→ IV 討論（發現、反向觀點）→ V 結論與限制／建議。每節標題避免空泛「第一章 介紹」；改成能看出主張的標題，例如「注意力碎片化如何影響深度閱讀」。標題即論點，寫作時較不易跑題。若是小組報告，大綱還要標註負責人與交接格式，避免最後拼貼語氣分裂。AI 可協助統一章節功能描述，但主張仍由負責同學決定。",
    "enConcept": "Outlines should encode research question, argument flow, claim sentences, evidence gaps, and word budget aligned to the rubric. Use AI for structure options, then force claim-level specificity and counterargument space. Treat the outline as a living map for sourcing and drafting.",
    "zhCaseStudy": "情境案例：資管系阿哲以前請 AI「寫大綱」，得到五章空標題，初稿變成資料堆砌。這次他先給規格書與 RQ：「混合式學習是否提升程式課通過率？」AI 給三套結構後，他選「定義—機制—證據—限制」，並把每節改成主張句，標出需找的實證研究。搜文獻時他只針對空位找五篇關鍵論文，寫作速度反而更快，助教回饋「邏輯清楚、不是百科」。",
    "enCaseStudy": "A-Zhe replaced empty AI chapter titles with claim-level sections tied to evidence gaps, which made sourcing and drafting faster and clearer.",
    "zhWorkflow": [
      "從規格書寫出 RQ 與暫時主張",
      "請 AI 產出 2-3 套大綱選項並比較優缺",
      "選定一套，改成主張句＋證據空位＋字數",
      "加入反向觀點／限制區塊",
      "做刪節壓力測試，存成 outline-v1"
    ],
    "enWorkflow": [
      "Write RQ and working thesis from the specs sheet",
      "Generate 2–3 outline options with AI and compare",
      "Convert chosen outline into claims, evidence gaps, word counts",
      "Add counterargument/limitations",
      "Stress-test by cutting sections; save outline-v1"
    ],
    "zhCommonMistakes": [
      "大綱只有章名沒有主張",
      "字數平均分配、忽略評分權重",
      "沒有證據空位，導致亂找資料",
      "把 AI 大綱原封當最終結構"
    ],
    "enCommonMistakes": [
      "Titles without claims",
      "Equal word budgets ignoring the rubric",
      "No evidence gaps",
      "Accepting the first AI outline unchanged"
    ],
    "zhExcellentExample": "優秀大綱看得到：一句 RQ、一句 thesis、每節主張句、證據空位類型、字數配置、至少一處反向觀點，且與規格書任務動詞一致。",
    "enExcellentExample": "A strong outline shows RQ, thesis, claim sentences, evidence gap types, word budget, and a counterargument slot aligned to the brief.",
    "zhPrompt": "【Prompt 1｜報告大綱架構師】\n請依我的報告規格書與研究問題，提供 3 套不同邏輯的大綱（例如：主題式／比較式／問題—證據—意涵）。\n規格書：\n（貼上）\n研究問題：［RQ］\n暫時主張：［thesis］\n每套大綱請用「節標題＝主張句」格式，並標註預估字數。最後用表格比較三套：優點、風險、適合何種評分重點。不要寫正文。",
    "enPrompt": "[Prompt 1 | Outline Architect] Propose 3 outline logics from my specs + RQ. Use claim-sentence section titles, word estimates, and a comparison table. No full prose.",
    "zhCoachPrompt": "【Prompt 2｜主張句與證據空位強化】\n這是我選定的大綱：\n（貼上）\n請把每一節改得更具體：1) 主張句（可爭論）2) 需要的證據類型 3) 可能的反證 4) 與前後節的邏輯連接詞建議。刪掉空泛標題。若某節無法寫成主張句，標成應合併或刪除。",
    "enCoachPrompt": "[Prompt 2 | Claim & Gap Hardener] Rewrite each section as a contestable claim with evidence type, possible counterevidence, and logical connectors.",
    "zhFeedbackPrompt": "【Prompt 3｜大綱驗收】\n規格書：\n（貼上）\n大綱：\n（貼上）\n請評分：是否對齊任務動詞、論證是否前進、有無灌水節、字數是否合理、證據空位是否可執行。指出最弱的兩節並給改寫版。不要幫我寫完整報告正文。",
    "enFeedbackPrompt": "[Prompt 3 | Outline Review] Score alignment, argument progress, fluff risk, word budget, and evidence gaps; rewrite the two weakest sections.",
    "zhExample": "RQ：短影音使用是否降低大學生深度閱讀時間？\nIII-A 主張：高頻短影音使用者的深度閱讀時段更碎片化（需問卷或既有研究數據）。\nIII-B 主張：即使總閱讀時間相近，理解測驗表現仍可能下降（需實驗或準實驗文獻）。",
    "enExample": "RQ on short-video use and deep reading; sections state contestable claims and name the evidence types still missing.",
    "zhPractice": "帶著第16課規格書寫出 RQ 與 thesis。；用 Prompt 1 產出三套大綱並選擇。；用 Prompt 2 補齊主張句與證據空位。；Challenge：只根據大綱，用 90 秒向同學口述整篇報告的論證路線，並請對方指出聽不懂的跳接。",
    "enPractice": "Write RQ/thesis from Lesson 16.；Generate and choose among 3 outlines.；Harden claims and gaps.；Challenge: pitch the argument path in 90 seconds and note unclear jumps.",
    "zhQuizItems": [
      {
        "q": "大學報告大綱最關鍵的單位是？",
        "options": [
          "漂亮的章節編號",
          "可爭論的主張句與證據空位",
          "越多章越好",
          "先寫完正文再補大綱"
        ],
        "answer": 1,
        "explain": "主張與證據空位決定論證與搜尋方向。"
      },
      {
        "q": "使用 AI 產大綱時應避免？",
        "options": [
          "提供規格書與 RQ 作為約束",
          "接受只有「介紹／正文／結論」的空殼並直接開寫",
          "比較多套結構再選擇",
          "為每節標字數與證據類型"
        ],
        "answer": 1,
        "explain": "空殼大綱無法導向可防禦寫作。"
      },
      {
        "q": "為什麼大綱要留反向觀點區塊？",
        "options": [
          "為了增加字數",
          "展現學術論證的完整度與限制意識",
          "讓 AI 比較好代寫",
          "老師規定一定要罵對手"
        ],
        "answer": 1,
        "explain": "處理反對意見能提高論證可信度。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What is the key unit of a university report outline?",
        "options": [
          "Pretty numbering",
          "Contestable claims and evidence gaps",
          "As many chapters as possible",
          "Drafting first, outlining later"
        ],
        "answer": 1,
        "explain": "Claims and gaps drive argument and sourcing."
      },
      {
        "q": "What should you avoid when using AI for outlines?",
        "options": [
          "Constraining with specs and RQ",
          "Accepting an empty intro/body/conclusion shell",
          "Comparing multiple structures",
          "Adding word counts and evidence types"
        ],
        "answer": 1,
        "explain": "Empty shells do not support defendable writing."
      },
      {
        "q": "Why include a counterargument section?",
        "options": [
          "To inflate length",
          "To show complete academic argumentation and limits",
          "To make AI ghostwriting easier",
          "Because you must attack opponents"
        ],
        "answer": 1,
        "explain": "Addressing objections raises credibility."
      }
    ],
    "zhNotePrompt": "貼上 outline-v1：RQ、thesis、各節主張句，以及你最缺的三個證據空位。",
    "enNotePrompt": "Paste outline-v1 with RQ, thesis, claims, and your top three evidence gaps.",
    "zhDeliverableChecklist": [
      "RQ 與 thesis 已寫定",
      "大綱每節皆為主張句",
      "證據空位已標類型",
      "字數配置對齊評分",
      "含反向觀點或限制"
    ],
    "enDeliverableChecklist": [
      "RQ and thesis set",
      "Claim-level sections",
      "Evidence gaps typed",
      "Word budget matches rubric",
      "Counterargument/limits included"
    ],
    "zhScorecard": [
      "問題清楚",
      "主張具體",
      "邏輯前進",
      "證據導向",
      "對齊規格"
    ],
    "enScorecard": [
      "Clear RQ",
      "Specific claims",
      "Logical progress",
      "Evidence-driven",
      "Brief alignment"
    ],
    "resources": [
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "依證據空位搜尋可支撐主張的文獻"
      },
      {
        "name": "Semantic Scholar",
        "url": "https://www.semanticscholar.org",
        "note": "看引用關係，找高相關論文"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "上傳你已有的講義／論文，協助檢查大綱是否覆蓋"
      },
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "快速掃描領域爭論點，回頭強化反向觀點節"
      }
    ],
    "challenge": "把大綱印成一頁檢查表：每節旁寫「證據來源候選」。若某一節找不到任何可信來源，重寫或刪除該主張，不得硬寫。"
  },
  {
    "icon": "📚",
    "title": "AI 文獻整理與引用（APA 第七版）",
    "description": "為大綱證據空位建立文獻卡、正確使用 APA 第七版，並用流程避免抄襲與假引用。",
    "goal": "我的文獻卡組（含 APA7 參考書目）與引用檢查清單",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "APA7",
      "文獻整理",
      "引用",
      "反抄襲",
      "Chapter4"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 3,
    "chapterZh": "AI 寫報告",
    "chapterEn": "AI for Reports",
    "zhTitle": "第18課：AI 文獻整理與引用（APA 第七版）",
    "enTitle": "Lesson 18: Literature Notes and APA 7th Citations",
    "zhValueTip": "為大綱證據空位建立文獻卡、正確使用 APA 第七版，並用流程避免抄襲與假引用。",
    "enValueTip": "Build literature cards for outline gaps, apply APA 7th correctly, and use a workflow that prevents plagiarism and fabricated citations.",
    "zhOutcome": "我的文獻卡組（含 APA7 參考書目）與引用檢查清單",
    "enOutcome": "My Literature Card Set (with APA7 references) and Citation Checklist",
    "zhConcept": "文獻工作不是「找很多篇再請 AI 摘要」，而是為大綱的證據空位挑選可防禦來源，並用自己的話做成文獻卡。每張卡建議包含：書目資訊、研究問題、方法、主要發現、對你主張的用途（支持／限制／定義）、可引用的頁碼或段落位置、以及你的一句評價。搜尋可用 Google Scholar、Semantic Scholar、Perplexity 做發現，但正式引用前必須打開原文或出版社頁核對作者、年份、標題、DOI。AI 常會捏造看起來很真的論文，這叫幻覺；任何 AI 給的書目都預設不可信，直到你用 Scholar／Crossref／圖書館資料庫驗證。APA 第七版常見規則：文內引用用作者—年份；參考書目依姓氏字母排序；期刊文章含 DOI（若有）；直接引句要有頁碼；改寫仍要引用。避免抄襲的核心是：思想來自他人就要歸因；即使改寫句型也要引用；連續貼上原文超過合理短引就應使用引號或改為濃縮改寫並引用。AI 可協助把書目轉成 APA 格式草稿，但你要用 Zotero／Mendeley 或 APA Style 官方範例校對。格式錯通常是低分且可避免的損失。閱讀文獻時採「問題導向」：先看摘要與結論是否對應你的證據空位，再決定精讀；不要每篇都精讀到沒時間寫。建議建立來源等級：同儕審查期刊／學術專書 > 官方統計與報告 > 優質二次來源；論壇與無作者通稿預設不進正式論證，除非作業允許。完成文獻卡後，更新大綱：哪些主張已有證據、哪些仍空、是否需縮小 RQ。這樣第19課寫作才不會邊寫邊慌。學術誠信實務：保留你閱讀過的 PDF 或書目連結；不要引用沒讀過的文獻；不要用 AI 產生假訪談或假數據。文內引用與參考書目必須一一對應：有引必列、有列必用。交稿前用清單勾稽，這是第20課定稿的重要一環，但本課就要養成習慣。若中英文混合寫作，仍維持 APA7 一致性；中文作者姓名依老師或系上慣例，不確定就寫進澄清問題，而不是猜。此外，請把本課產出存成 raw 與 final 兩版：raw 保留與 AI 的完整對話或初稿，final 是你校對後可進入下一課的版本，方便追溯與復盤。",
    "enConcept": "Build literature cards tied to outline evidence gaps, verify every citation against real records, apply APA 7th carefully, and treat AI bibliographies as unverified until checked. Paraphrase with attribution; never invent sources or data.",
    "zhCaseStudy": "情境案例：心理系小安用 AI 產生八筆「完美 APA 文獻」，其中三筆不存在，被老師標記學術風險。她改流程：每筆先在 Google Scholar 與 Crossref 驗證 DOI，再用 Zotero 產生 APA7，文獻卡只寫自己讀過的五篇。報告分數回升，老師回饋「引用真實且對應論點」。小安把「AI 書目＝待驗證」寫進個人合規清單。",
    "enCaseStudy": "Xiao An nearly submitted fabricated AI citations. After verifying via Scholar/Crossref and managing APA7 in Zotero, her references became real and useful.",
    "zhWorkflow": [
      "依大綱證據空位列出搜尋問題與關鍵詞",
      "用 Scholar／Semantic Scholar／Perplexity 發現候選並驗證真實性",
      "精讀後寫文獻卡（用途＋發現＋頁碼線索）",
      "用 Zotero／Mendeley 產生 APA7，對照 APA Style 官方規則",
      "更新大綱：已覆蓋／仍缺證據，並做文內—書目對照草稿"
    ],
    "enWorkflow": [
      "List search questions from evidence gaps",
      "Discover candidates and verify they exist",
      "Write literature cards after reading",
      "Generate APA7 via manager + official style checks",
      "Update outline coverage and draft in-text/reference alignment"
    ],
    "zhCommonMistakes": [
      "引用 AI 捏造或不存在的文獻",
      "只改寫句型卻不引用",
      "參考書目與文內引用對不上",
      "沒讀原文就引用摘要網站的二手轉述當一手"
    ],
    "enCommonMistakes": [
      "Citing fabricated sources",
      "Paraphrasing without attribution",
      "Mismatch between in-text and references",
      "Citing unread sources from second-hand blurbs"
    ],
    "zhExcellentExample": "優秀文獻包：5-10 張對應大綱空位的文獻卡、已驗證 DOI／書目、APA7 參考書目、文內引用樣例一段、以及「未讀不引」聲明。",
    "enExcellentExample": "A strong pack has gap-mapped cards, verified records, APA7 references, a sample in-text paragraph, and an unread-sources ban.",
    "zhPrompt": "【Prompt 1｜文獻卡工廠（禁止假書目）】\n我的大綱證據空位如下：\n（貼上）\n請為每個空位提出「搜尋問題」與中英文關鍵詞，並告訴我應優先找什麼類型來源（期刊／報告／專書）。\n規則：不要編造任何論文標題、作者、年份或 DOI。若你不確定某篇是否存在，只給搜尋策略，不要給假書目。",
    "enPrompt": "[Prompt 1 | Literature Card Factory] For each evidence gap, give search questions and keywords only. Do not invent titles, authors, years, or DOIs.",
    "zhCoachPrompt": "【Prompt 2｜APA 第七版格式校對助理】\n以下是我的參考書目草稿（可能有錯）：\n（貼上）\n請依 APA Style 第七版指出每一筆可能錯誤（作者、年份、標題大小寫、期刊名斜體概念、DOI、標點），並給修正後版本。若資訊不足無法判斷，列出我需回原文確認的欄位。不要新增我沒提供的文獻。",
    "enCoachPrompt": "[Prompt 2 | APA7 Proof Assistant] Critique and correct my reference list for APA 7th; list missing fields to verify. Do not add new sources.",
    "zhFeedbackPrompt": "【Prompt 3｜抄襲風險與引用對照檢查】\n大綱主張：\n（貼上）\n文獻卡：\n（貼上）\n一段我改寫的文字：\n（貼上）\n請檢查：改寫是否仍需引用、是否過近原文、主張與文獻用途是否匹配、有無可能的假引用風險描述。給修改建議與一段示範性「正確改寫＋文內引用」但不虛構頁碼；頁碼請標［待填］。",
    "enFeedbackPrompt": "[Prompt 3 | Plagiarism & Alignment Check] Review my paraphrase and cards for attribution risk and claim-evidence fit; demo a correct paraphrase with [page pending].",
    "zhExample": "空位：需要「短影音與注意力」的實證。\n文獻卡：Author (Year)… 發現=……；用途=支持 III-A；APA7 書目=……；文內=(Author, Year)。\n驗證：Scholar 找得到＋DOI 在 Crossref 存在。",
    "enExample": "A card mapped to section III-A, verified on Scholar/Crossref, with APA7 reference and in-text form ready.",
    "zhPractice": "依 outline 空位搜尋並驗證至少 5 篇真實文獻。；完成文獻卡與 APA7 參考書目。；寫一段含文內引用的改寫練習。；Challenge：故意讓 AI 給你書目後，找出至少 1 筆需淘汰的不實或無法驗證項目，並記錄你的驗證步驟。",
    "enPractice": "Find and verify ≥5 real sources for outline gaps.；Build cards + APA7 list.；Write one cited paraphrase.；Challenge: catch at least one unverifiable AI bibliography item and log your verification steps.",
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
    "zhNotePrompt": "列出 5 篇已驗證文獻的 APA7 書目，並標註各支援大綱哪一節。",
    "enNotePrompt": "List 5 verified APA7 references and map each to an outline section.",
    "zhDeliverableChecklist": [
      "至少 5 張文獻卡",
      "全部來源已驗證存在",
      "APA7 參考書目已校對",
      "有一段含文內引用的改寫",
      "大綱證據覆蓋已更新"
    ],
    "enDeliverableChecklist": [
      "≥5 literature cards",
      "All sources verified",
      "APA7 list proofed",
      "One cited paraphrase written",
      "Outline coverage updated"
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
    "resources": [
      {
        "name": "APA Style",
        "url": "https://apastyle.apa.org",
        "note": "APA 第七版官方規則與示例"
      },
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "搜尋與核對文獻是否存在"
      },
      {
        "name": "Crossref",
        "url": "https://www.crossref.org",
        "note": "用 DOI 驗證書目資訊"
      },
      {
        "name": "Zotero",
        "url": "https://www.zotero.org",
        "note": "文獻管理與 APA 格式輸出"
      },
      {
        "name": "Mendeley",
        "url": "https://www.mendeley.com",
        "note": "替代／並行的文獻管理工具"
      },
      {
        "name": "Semantic Scholar",
        "url": "https://www.semanticscholar.org",
        "note": "發現相關研究與引用網絡"
      }
    ],
    "challenge": "完成一份「引用誠實聲明」：列出本報告所有來源的驗證方式（Scholar／DOI／圖書館），並刪除任何你未閱讀全文或核心章節的條目。"
  },
  {
    "icon": "✍️",
    "title": "AI 協助寫作與潤稿",
    "description": "用 AI 強化清楚度、結構與語氣，但由你產出論點與證據解釋；學習潤稿而非代寫。",
    "goal": "我的初稿段落（自行寫成）＋ AI 潤稿對照與修改紀錄",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "潤稿",
      "學術寫作",
      "反代寫",
      "Chapter4"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 3,
    "chapterZh": "AI 寫報告",
    "chapterEn": "AI for Reports",
    "zhTitle": "第19課：AI 協助寫作與潤稿",
    "enTitle": "Lesson 19: AI-Assisted Writing and Revision",
    "zhValueTip": "用 AI 強化清楚度、結構與語氣，但由你產出論點與證據解釋；學習潤稿而非代寫。",
    "enValueTip": "Use AI to improve clarity, structure, and tone while you own claims and evidence interpretation—revise, do not ghostwrite.",
    "zhOutcome": "我的初稿段落（自行寫成）＋ AI 潤稿對照與修改紀錄",
    "enOutcome": "My Self-Drafted Paragraphs + AI Revision Diff and Change Log",
    "zhConcept": "這一課的核心界線：AI 可以幫你改得更清楚，但不能替你承擔論點、證據選擇與學術責任。推薦寫作流程是「你先寫醜稿，AI 再潤」。醜稿必須包含你的主張、你讀過的證據、你的解釋；缺這三者就還不能潤稿，而應回第17／18課。請 AI 潤稿時要給約束：保留原意、保留引用、不要新增未提供的數據或文獻、標註它改動的類型（清楚度／結構／語氣／文法）。危險用法是：「依這題目寫 3000 字報告」。那會把你變成編輯別人（模型）的文章，也容易帶入假引用與空泛論述，並觸及學術誠信紅線。較安全的協作模式包括：大綱展開成段落骨架、把一段過長文字拆句、把被動語氣改清楚、檢查段落是否有主張—證據—解釋、產生自我檢視問題。潤稿後你必須做「意義校對」：逐段問自己是否仍同意這個主張、引用是否仍正確、有無被 AI 改得太滿或太絕對。保留修改紀錄（before／after／為何接受）不只是學習，也是萬一需要說明 AI 使用方式時的證據。文體上，大學報告通常需要：精準、克制、可追溯。少用情緒詞與無主詞空話；數字與定義要穩。若中文寫作，可請 AI 檢查連接詞與段落功能，但不要讓它統一成網紅文風；若老師要求特定語氣，把範例句貼給 AI 當風格錨點。寫不出來時，用「口說轉寫」：先錄音 3 分鐘講這一節，再轉成文字當醜稿，通常比盯空白頁更有效。每一節寫完就對照大綱主張句：段落第一句是否呼應主張？若否，先改結構再修辭。小組情境下，統一潤稿標準很重要：先合意「不代寫、不新增文獻」，再分工，避免有人交出 AI 長文、有人交出真實分析而風格與誠信不一致。記住：潤稿的目標是讓讀者更快理解你的論證，不是讓文章聽起來比較像「厲害的人」卻空虛。此外，請把本課產出存成 raw 與 final 兩版：raw 保留與 AI 的完整對話或初稿，final 是你校對後可進入下一課的版本，方便追溯與復盤。每次結束先寫三行學習日誌：今天做對的一步、仍卡住的一步、明天的第一個行動，並連回你的 AI Workspace 或 Second Brain。若與同學協作，先合意學術誠信與 AI 使用界線，只分享允許分享的 final，不分享未脱敏的原始資料或他人未同意的內容。",
    "enConcept": "Draft ugly but real claims and evidence yourself, then use AI under constraints to improve clarity without adding unsourced facts. Keep a before/after log and meaning-check every accepted change. Avoid full-paper ghostwriting prompts.",
    "zhCaseStudy": "情境案例：社工系小玫第一版請 AI 代寫，段落華麗但老師問「你的訪談呢？」她答不出。第二版她先寫主張與訪談證據醜稿，再請 AI 只做清楚度與銜接潤飾，並禁止新增文獻。她提交時附上簡短 AI 使用說明與修改紀錄，內容真實、口試也答得動。",
    "enCaseStudy": "Xiao Mei replaced ghostwriting with self-drafted evidence paragraphs and constrained AI clarity edits, which held up in oral defense.",
    "zhWorkflow": [
      "依大綱選一節，先自行寫出主張—證據—解釋醜稿",
      "用受約束 Prompt 請 AI 潤稿（不新增事實／文獻）",
      "對照 before／after，只接受不改變原意的修改",
      "檢查文內引用與語氣是否仍學術、克制",
      "記錄修改原因，並更新整節定稿候選"
    ],
    "enWorkflow": [
      "Self-write a claim–evidence–explanation ugly draft",
      "Ask AI to revise under no-new-facts constraints",
      "Accept only meaning-preserving edits",
      "Recheck citations and academic tone",
      "Log why changes were accepted"
    ],
    "zhCommonMistakes": [
      "從空白直接要求 AI 寫全文",
      "接受 AI 新增的假數據或假引用",
      "潤稿後不再做意義校對",
      "把口語網紅風當成學術正式稿"
    ],
    "enCommonMistakes": [
      "Ghostwriting from a blank prompt",
      "Accepting invented facts/citations",
      "Skipping meaning checks",
      "Switching to influencer tone"
    ],
    "zhExcellentExample": "優秀成果包含：你自己的醜稿、受約束潤稿後版本、至少五處修改註記（接受／拒絕原因），以及一段仍保留原文內引用的分析。",
    "enExcellentExample": "Strong work shows your ugly draft, constrained revision, a change log with accept/reject reasons, and preserved citations.",
    "zhPrompt": "【Prompt 1｜受約束潤稿編輯】\n請擔任學術潤稿編輯，不是代寫作者。以下是我自己寫的段落：\n（貼上）\n規格要求：［語氣／讀者／作業限制］\n請改進清楚度、段落結構與銜接，但遵守：\n1) 不改變原意\n2) 不新增我未提供的數據、文獻、案例\n3) 保留所有文內引用\n4) 用條列說明你改了什麼（清楚度／結構／文法／語氣）\n先給修改版，再給修改說明。",
    "enPrompt": "[Prompt 1 | Constrained Revising Editor] Improve clarity/structure/tone of my paragraph without changing meaning or adding unsourced facts; keep citations; list change types.",
    "zhCoachPrompt": "【Prompt 2｜主張—證據—解釋診斷】\n請檢查下列段落是否具備主張句、證據、解釋、與小結／過渡。\n（貼上）\n若缺失，請指出位置並給「我可填空」的骨架，不要直接幫我編造證據內容。問我三個問題以補足缺失資訊。",
    "enCoachPrompt": "[Prompt 2 | C-E-E Diagnosis] Check claim–evidence–explanation structure; provide fill-in scaffolds and questions, do not invent evidence.",
    "zhFeedbackPrompt": "【Prompt 3｜代寫風險與潤稿品質驗收】\n醜稿：\n（貼上）\n潤稿後：\n（貼上）\n我的修改紀錄：\n（貼上）\n請評估：是否仍像我的論點？有無新增可疑事實？清楚度是否提升？哪些句子應退回醜稿版本？給 1-10 分與三處必改。提醒學術誠信風險（若有）。",
    "enFeedbackPrompt": "[Prompt 3 | Ghostwriting Risk & Revision QA] Compare ugly vs revised drafts and my change log; flag added facts and sentences to revert.",
    "zhExample": "醜稿：高頻使用者更難維持長閱讀（Author, 2021），我認為原因是切換成本……\n潤稿後：句更清楚，但 AI 若插入「根據某國 2020 官方數據 73%」且你沒提供 → 必須刪除。",
    "enExample": "Keep your cited reasoning; delete any AI-inserted statistics you did not supply.",
    "zhPractice": "自行寫出至少兩節醜稿（含引用）。；用 Prompt 1 潤稿並做 before／after 對照。；用 Prompt 2 檢查結構缺口。；Challenge：拒絕至少三處 AI 新增或過度絕對的句子，並寫下拒絕理由。",
    "enPractice": "Self-draft ≥2 sections with citations.；Revise under constraints.；Diagnose C-E-E gaps.；Challenge: reject at least three unsafe AI edits and justify each rejection.",
    "zhQuizItems": [
      {
        "q": "AI 協助寫作時，最安全的方式是？",
        "options": [
          "請 AI 依題目直接產出全文繳交",
          "自己先寫含證據的醜稿，再請 AI 在約束下潤飾",
          "接受 AI 補充的未核對數據",
          "刪除所有引用讓文章更順"
        ],
        "answer": 1,
        "explain": "你負責論點與證據，AI 負責清楚度協助。"
      },
      {
        "q": "發現潤稿後多出你沒提供的統計數字，應如何？",
        "options": [
          "覺得更專業就保留",
          "刪除或回到可核對來源，否則不採用",
          "改成「大家都知道」就好",
          "移到參考書目即可"
        ],
        "answer": 1,
        "explain": "未核對事實不可進稿。"
      },
      {
        "q": "潤稿後仍要做的關鍵步驟是？",
        "options": [
          "意義校對與引用核對",
          "立刻刪除修改紀錄",
          "再請另一個 AI 完全重寫一次並覆蓋",
          "把語氣改成笑话"
        ],
        "answer": 0,
        "explain": "接受修改前必須確認原意與引用仍正確。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Safest way to use AI in writing?",
        "options": [
          "Generate the full paper from the prompt",
          "Self-draft evidence-based ugly text, then constrained revision",
          "Accept unverified AI statistics",
          "Remove citations for flow"
        ],
        "answer": 1,
        "explain": "You own claims and evidence; AI helps clarity."
      },
      {
        "q": "If revision inserts a statistic you did not provide, you should:",
        "options": [
          "Keep it because it sounds expert",
          "Delete it or replace only with verifiable sources",
          "Say “everyone knows”",
          "Move it to references only"
        ],
        "answer": 1,
        "explain": "Unverified facts stay out."
      },
      {
        "q": "What must you still do after revising?",
        "options": [
          "Meaning-check and citation check",
          "Delete the change log immediately",
          "Have another AI fully rewrite over your draft",
          "Turn the tone into jokes"
        ],
        "answer": 0,
        "explain": "Confirm meaning and citations before accepting edits."
      }
    ],
    "zhNotePrompt": "貼上一段 before／after，並列出你接受與拒絕的各兩處修改及理由。",
    "enNotePrompt": "Paste one before/after and list two accepted and two rejected edits with reasons.",
    "zhDeliverableChecklist": [
      "至少兩節自行醜稿",
      "完成受約束潤稿",
      "修改紀錄完整",
      "無未核對新增事實",
      "文內引用仍在"
    ],
    "enDeliverableChecklist": [
      "≥2 self-written sections",
      "Constrained revision done",
      "Change log complete",
      "No unverified added facts",
      "In-text citations preserved"
    ],
    "zhScorecard": [
      "自主起草",
      "約束潤稿",
      "意義保留",
      "引用完整",
      "記錄清楚"
    ],
    "enScorecard": [
      "Self-drafting",
      "Constrained revision",
      "Meaning kept",
      "Citations intact",
      "Logging"
    ],
    "resources": [
      {
        "name": "APA Style",
        "url": "https://apastyle.apa.org",
        "note": "潤稿時核對引用呈現方式"
      },
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "寫作中若需補證據，回到真實文獻"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "針對你上傳的來源做問答，降低胡謅"
      },
      {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "note": "查背景時仍要驗證，不可直接當引用"
      },
      {
        "name": "Zotero",
        "url": "https://www.zotero.org",
        "note": "邊寫邊插入受管引用"
      }
    ],
    "challenge": "選報告中最難的一節：先自己寫 400-600 字醜稿，再潤稿；提交前向同學口述該節三個論點，確認你能不看稿講清楚。"
  },
  {
    "icon": "✅",
    "title": "完成一份高品質的大學報告",
    "description": "整合規格、大綱、文獻與潤稿，完成定稿檢查清單，產出可直接繳交的高品質報告。",
    "goal": "我的可繳交報告定稿＋提交前檢查表（含 APA 與誠信）",
    "estimatedTime": "70-90 分鐘",
    "difficulty": "中階",
    "tags": [
      "定稿",
      "繳交檢查",
      "報告品質",
      "Chapter4"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 3,
    "chapterZh": "AI 寫報告",
    "chapterEn": "AI for Reports",
    "zhTitle": "第20課：完成一份高品質的大學報告",
    "enTitle": "Lesson 20: Finish a Submission-Ready University Report",
    "zhValueTip": "整合規格、大綱、文獻與潤稿，完成定稿檢查清單，產出可直接繳交的高品質報告。",
    "enValueTip": "Integrate specs, outline, sources, and revisions into a submission-ready report with a final QA checklist.",
    "zhOutcome": "我的可繳交報告定稿＋提交前檢查表（含 APA 與誠信）",
    "enOutcome": "My Submission-Ready Report + Pre-Submit Checklist (APA & integrity)",
    "zhConcept": "定稿不是「再請 AI 變漂亮」，而是對齊第16課規格書做總驗收：任務是否完成、字數是否合規、評分高權重項是否足夠強、格式與引用是否正確、學術誠信是否站得住。建議用三輪檢查。第一輪結構：大綱主張是否都在正文出現、段落是否多餘、結論是否回答 RQ。第二輪證據：每個關鍵主張是否有引用、文內與書目是否一一對應、有無未讀引用。第三輪呈現：APA7、標題層級、圖表編號、檔名、相似度／自我查重習慣、錯字。AI 可當「嚴格助教」幫你找缺口，但不要在截稿前一小時要求它大幅重寫；大改應發生在第19課。定稿階段只做可控修正。高品質的定義是可防禦：老師問任一引用或主張，你能指出來源與你的推理。口試或課堂討論也因此過關。提交物建議包含：正文定稿、參考書目、若老師要求則附研究日誌或 AI 使用說明（依課程政策）。把檔案命名寫進規格書並實際遵守。也要做讀者測試：請同學只讀結論與各節首句，看是否能復述你的論證；若不能，結構仍需調。時間不夠時的降級策略：保住 RQ 對齊、核心證據、引用正確、格式合規；放棄華麗比喻與額外支線。這比交一篇華麗但失準的 AI 文更負責任。Chapter 4 閉環是：規格 → 大綱 → 文獻 → 寫作潤稿 → 定稿。之後換題目可重複同一系統，而不是每次從零焦慮。交卷後做五分鐘復盤：哪一項檢查最救命、哪裡還會再犯，寫回你的 AI Workspace，讓下一次報告啟動更快。若使用生成式 AI，遵循學校與課程披露規則；不確定就用保守策略並向老師確認，不要賭。最後提醒：可繳交≠完美。可繳交是滿足規格與誠信的最佳版本；完美主義常導致逾時與抄捷徑。把定稿檢查表存成模板，下學期直接套用，這就是大學報告作業系統的完成態。當你能在不依賴代寫的前提下穩定產出對齊評分的報告，AI 才真正成為學習加速器，而不是學術風險來源。",
    "enConcept": "Finalizing means rubric-aligned QA across structure, evidence, and presentation—not last-minute ghostwriting. Use AI as a strict checker for gaps, keep changes controlled, ensure defendability, and save a reusable pre-submit checklist.",
    "zhCaseStudy": "情境案例：經濟系阿凱以前常在截止前兩小時請 AI「整理成可交版本」，結果引用亂、論點漂。這次他用三輪檢查表，提前一天完成定稿，只修格式與兩處論證缺口。繳交後他能在討論課指出文獻頁意，老師稱讚「準備完整」。阿凱把檢查表複製到所有課程資料夾。",
    "enCaseStudy": "A-Kai replaced last-hour AI rescue with a three-pass checklist finished a day early, and could defend sources in class.",
    "zhWorkflow": [
      "對照規格書做任務完成度總檢",
      "結構輪：RQ、主張、段落必要性、結論對齊",
      "證據輪：引用對應、APA7、未讀不引、無假書目",
      "呈現輪：字數、檔名、錯字、圖表、披露政策",
      "匯出定稿並做五分鐘復盤存檔"
    ],
    "enWorkflow": [
      "Check completion against the specs sheet",
      "Structure pass: RQ, claims, necessity, conclusion",
      "Evidence pass: citation alignment, APA7, no unread/fake sources",
      "Presentation pass: length, filename, typos, figures, disclosure",
      "Export final and write a 5-minute retrospective"
    ],
    "zhCommonMistakes": [
      "截稿前大幅 AI 重寫導致引用崩壞",
      "不做文內—書目勾稽",
      "忽略檔名／字數／繳交格式",
      "無法防禦自己的主張與來源"
    ],
    "enCommonMistakes": [
      "Last-hour full AI rewrites",
      "No in-text/reference reconciliation",
      "Ignoring filename/length/submission rules",
      "Cannot defend claims or sources"
    ],
    "zhExcellentExample": "可繳交包：對齊規格的正文、完整 APA7 參考書目、已勾選的三輪檢查表、AI 使用／誠信說明（若需要）、以及復盤三句話。",
    "enExcellentExample": "A submission pack with aligned prose, APA7 references, a completed three-pass checklist, required disclosure, and a short retrospective.",
    "zhPrompt": "【Prompt 1｜嚴格助教：規格對照檢查】\n報告規格書：\n（貼上）\n報告正文與參考書目：\n（貼上）\n請扮演嚴格但不刻薄的助教。只依規格書檢查完成度，列出：已達標、未達標、不確定需我確認。對每個未達標給「最小修改建議」（不要重寫全文）。禁止新增我沒有的文獻或數據。",
    "enPrompt": "[Prompt 1 | Strict TA Specs Check] Compare my draft to the specs sheet; list met/unmet/uncertain with minimal fixes only. No new sources or data.",
    "zhCoachPrompt": "【Prompt 2｜引用與 APA7 勾稽】\n文內引用清單（或全文）：\n（貼上）\n參考書目：\n（貼上）\n請找出：有引無書目、有書目無引、格式可疑項、作者年份不一致。輸出對照表與修正優先序。不要編造缺失書目的完整資訊；改列「需我補查」。",
    "enCoachPrompt": "[Prompt 2 | Citation Reconciliation] Find missing pairs and APA7 risks; prioritize fixes; do not invent missing bibliographic data.",
    "zhFeedbackPrompt": "【Prompt 3｜定稿品質與防禦力評審】\nRQ 與 thesis：\n（貼上）\n最終稿節錄（緒論＋一節分析＋結論）：\n（貼上）\n請評分：對齊題目、論證清楚、證據足夠、結論是否回答 RQ、可口試防禦性。給三個交卷前必改與三個可接受的小瑕疵。不要代寫新段落超過兩句示例。",
    "enFeedbackPrompt": "[Prompt 3 | Final Quality & Defendability] Score alignment, argument, evidence, conclusion-RQ fit, and oral defendability; list must-fix vs acceptable nits.",
    "zhExample": "檢查表示例：結構✓ RQ 有回答；證據✗ III-B 缺頁碼；APA✗ 兩筆 DOI 格式；呈現✓ 字數 2810；誠信✓ 無未驗證書目。\n行動：補 III-B 引用頁碼、修 DOI、匯出 PDF 檔名依規格。",
    "enExample": "Checklist finds one evidence gap and two APA DOI issues; fixes those before export with the required filename.",
    "zhPractice": "匯入第16-19課成品做三輪檢查。；用 Prompt 1／2 找出缺口並最小修正。；匯出可繳交檔並核對檔名與格式。；Challenge：模擬老師追問——隨機抽三個文內引用，在五分鐘內找出來源並用自己的話解釋為何引用它。",
    "enPractice": "Run three-pass QA on Lessons 16–19 outputs.；Minimal fixes via Prompts 1–2.；Export with correct filename.；Challenge: defend three random citations in five minutes.",
    "zhQuizItems": [
      {
        "q": "定稿階段最不該做的是？",
        "options": [
          "對照規格書做檢查",
          "截稿前請 AI 大幅重寫整篇並加入新文獻",
          "核對文內引用與參考書目",
          "確認字數與檔名"
        ],
        "answer": 1,
        "explain": "定稿應做可控修正，避免大改引發新錯誤與誠信風險。"
      },
      {
        "q": "高品質大學報告的實用定義較接近？",
        "options": [
          "詞藻越華麗越好",
          "對齊評分、證據可追溯、論點可防禦",
          "完全由 AI 代寫最公平",
          "參考書目越多就一定越好"
        ],
        "answer": 1,
        "explain": "品質看對齊、追溯與防禦，而非華麗或堆量。"
      },
      {
        "q": "文內引用與參考書目不一致時應？",
        "options": [
          "忽略，老師通常不看",
          "立刻勾稽修正：補齊或刪除對應項",
          "再請 AI 隨機生成缺的書目",
          "只刪文內引用保留書目充數"
        ],
        "answer": 1,
        "explain": "必須一一對應；不可用假書目填洞。"
      }
    ],
    "enQuizItems": [
      {
        "q": "What should you avoid most in finalizing?",
        "options": [
          "Checking against the specs sheet",
          "A last-hour full AI rewrite with new sources",
          "Reconciling in-text citations and references",
          "Confirming length and filename"
        ],
        "answer": 1,
        "explain": "Keep final changes controlled."
      },
      {
        "q": "A practical definition of a high-quality university report is:",
        "options": [
          "Maximum ornate language",
          "Rubric-aligned, traceable evidence, defendable claims",
          "Fully ghostwritten by AI",
          "Longest possible reference list"
        ],
        "answer": 1,
        "explain": "Quality is alignment, traceability, and defendability."
      },
      {
        "q": "If in-text citations and references disagree, you should:",
        "options": [
          "Ignore it",
          "Reconcile immediately—add or remove matching items",
          "Ask AI to invent missing references",
          "Delete in-text cites but keep padding references"
        ],
        "answer": 1,
        "explain": "Pairs must match; never fabricate."
      }
    ],
    "zhNotePrompt": "貼上已勾選的三輪檢查表，並寫下交卷檔名與你復盤的三句話。",
    "enNotePrompt": "Paste your completed three-pass checklist, submission filename, and a three-sentence retrospective.",
    "zhDeliverableChecklist": [
      "規格對照全部勾完",
      "結構／證據／呈現三輪完成",
      "APA7 與引用勾稽通過",
      "匯出可繳交檔（檔名正確）",
      "完成復盤並存進 Workspace"
    ],
    "enDeliverableChecklist": [
      "Specs checklist complete",
      "Three passes done",
      "APA7 and citation reconciliation passed",
      "Submission file exported with correct name",
      "Retrospective saved to Workspace"
    ],
    "zhScorecard": [
      "規格對齊",
      "論證完整",
      "引用可靠",
      "格式正確",
      "可防禦"
    ],
    "enScorecard": [
      "Spec alignment",
      "Argument completeness",
      "Citation reliability",
      "Format correctness",
      "Defendability"
    ],
    "resources": [
      {
        "name": "APA Style",
        "url": "https://apastyle.apa.org",
        "note": "定稿前最後校對引用與紙本細節"
      },
      {
        "name": "Zotero",
        "url": "https://www.zotero.org",
        "note": "匯出統一 APA7 參考書目"
      },
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com",
        "note": "抽查關鍵引用是否仍指向正確文獻"
      },
      {
        "name": "Crossref",
        "url": "https://www.crossref.org",
        "note": "核對 DOI 與書目欄位"
      },
      {
        "name": "Mendeley",
        "url": "https://www.mendeley.com",
        "note": "文獻庫整理與格式輸出備援"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "用自己的來源包做最後一致性問答"
      }
    ],
    "challenge": "在實際截止日期前完成一份可繳交報告（或課程要求的同等篇幅）。用本課檢查表簽名（自我確認），並準備 3 分鐘口述：RQ、主要證據、限制。"
  },
  {
    "icon": "🧭",
    "title": "AI 如何規劃簡報架構",
    "description": "先拆解老師的簡報要求，建立故事線、頁面架構與時間分配，再開始做畫面。",
    "goal": "我的簡報規格書＋故事線大綱（頁面主張／時間／視覺需求）",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "簡報架構",
      "故事線",
      "規格書",
      "Chapter5"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 4,
    "chapterZh": "AI 做簡報",
    "chapterEn": "AI Presentations",
    "zhTitle": "第21課：AI 如何規劃簡報架構",
    "enTitle": "Lesson 21: Plan a Presentation Structure with AI",
    "zhValueTip": "先拆解老師的簡報要求，建立故事線、頁面架構與時間分配，再開始做畫面。",
    "enValueTip": "Decode the presentation brief first, then build a storyline, slide map, and time budget before designing visuals.",
    "zhOutcome": "我的簡報規格書＋故事線大綱（頁面主張／時間／視覺需求）",
    "enOutcome": "My Presentation Specs + Storyline Outline (slide claims / time / visual needs)",
    "zhConcept": "大學簡報最常見的失敗，不是版面不夠美，而是架構先錯：時間超時、重點不突出、投影片像報告全文搬家。這一課要先建立「簡報規格書」與「故事線大綱」。規格書拆解：時長、人數、評分（內容／台風／視覺／問答）、是否需資料來源、是否禁止念稿、檔案格式。故事線不是目錄，而是聽眾 3 分鐘後還記得的主訊息。建議用「情境→問題→洞察→證據→行動／結論」推進，每頁只承擔一個主張。AI 適合幫你把報告大綱轉成口語簡報架構、壓縮頁數、標出可刪頁；但你必須用評分與時長約束它，避免生出 30 頁裝飾頁。實務規則：1 分鐘大約 1 頁（含過渡），10 分鐘簡報常見 8-12 頁；封面與結語要短，分析與證據頁才是重心。每頁寫三欄：頁面主張（一句話）、你要講的口語要點（不寫長文）、視覺需求（圖表／對比／流程／照片）。這三欄會直接餵給 Gamma／Canva。也要預留問答風險頁：老師可能追問的定義、限制、數據來源。不必每題都做一頁，但講者筆記要有備答。若作業來自書面報告，簡報不是把報告貼上，而是重做「聽覺＋視覺」版本：減少文字、提高對比、用圖說關係。完成架構後做壓力測試：刪掉任意兩頁，主訊息是否仍在？若否，那些頁才是核心；若是，可能是灌水。本章後面的工具課都建立在這份架構上：Gamma 產初稿、Canva 美化、講稿與模擬提問都對齊同一故事線，才不會各做各的。分析老師要求時，把抽象詞轉成可檢查行為。例如「台風佳」=開場 20 秒內進主題、眼神與音量穩定、準時結束；「內容完整」=RQ／方法或論點／證據／結論都有對應頁。小組簡報還要標註每頁負責人與交接秒數，避免一人講太久、轉場失控。AI 可協助平均時間，但現場仍需彩排微調。把架構存成 raw／final：raw 是作業原文與腦力激盪，final 是可進入製作的頁面地圖。這是大學簡報作業系統的入口。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。",
    "enConcept": "Plan presentation specs and a claim-per-slide storyline before tools. Constrain AI with time and rubric, map oral points and visual needs, and stress-test which slides are truly core. Later Gamma/Canva/script lessons reuse this map.",
    "zhCaseStudy": "情境案例：企管系小樂拿到「10 分鐘個案簡報」就開 Canva 找模板，做了 22 頁，上台超時且被問「你的建議是什麼？」答不出。重做時她先寫規格書與故事線：主訊息=建議導入 X 流程；頁數壓到 10；每頁一句主張；最後兩頁給風險與問答備答。用 AI 只幫忙刪頁與重排邏輯，不再先挑漂亮模板。第二次得分明顯提高，老師回饋「聽得懂、抓得到重點」。",
    "enCaseStudy": "Xiao Le stopped decorating first. After a specs sheet and 10-slide claim map, her second presentation was on time and clearer.",
    "zhWorkflow": [
      "閱讀作業說明與評分，建立簡報規格書",
      "寫出 1 句主訊息與聽眾記住的 3 點",
      "請 AI 產出 2 套故事線並用時長刪減",
      "完成頁面地圖：主張／口語要點／視覺需求／秒數",
      "壓力測試刪頁，存成 structure-v1"
    ],
    "enWorkflow": [
      "Build a presentation specs sheet from the brief",
      "Write one core message and three takeaways",
      "Generate two storylines with AI and cut to time",
      "Make a slide map: claim / talk track / visual / seconds",
      "Stress-test by cutting slides; save structure-v1"
    ],
    "zhCommonMistakes": [
      "先挑模板再想內容",
      "投影片貼滿報告文字",
      "頁數與時間不成比例",
      "沒有主訊息，只有資料堆疊"
    ],
    "enCommonMistakes": [
      "Picking templates before content",
      "Pasting report text onto slides",
      "Too many slides for the time",
      "No core message, only data piles"
    ],
    "zhExcellentExample": "優秀架構：規格書清楚、一句主訊息、8-12 頁主張地圖、每頁視覺需求、時間分配加總等於時長、含問答備答。",
    "enExcellentExample": "A strong plan has clear specs, one core message, an 8–12 slide claim map, visual needs, a time sum that fits, and Q&A prep.",
    "zhPrompt": "【Prompt 1｜簡報規格與故事線教練】\n請擔任大學簡報教練。作業說明如下：\n（貼上）\n我的主題／既有大綱：\n（貼上）\n請輸出：1) 簡報規格書（時長、評分、格式、禁令）2) 一句主訊息 3) 聽眾應記住的 3 點\n4) 兩套故事線（頁數不同），每頁用「頁碼｜主張句｜預估秒數｜建議視覺」。\n規則：總秒數不可超過時長；不要寫完整講稿；不要發明作業沒有的硬性規定，推斷須標示。",
    "enPrompt": "[Prompt 1 | Specs & Storyline Coach] Build specs, one core message, 3 takeaways, and two timed slide maps with claim sentences. No full script. Label inferences.",
    "zhCoachPrompt": "【Prompt 2｜刪頁與時間壓力測試】\n這是我的頁面地圖：\n（貼上）\n時長：［分鐘］\n請指出最該刪或合併的頁，給一版「可準時講完」的精簡地圖，並說明刪除原則。另列出老師最可能追問的 5 題，標註應在哪一頁備答。",
    "enCoachPrompt": "[Prompt 2 | Cut-for-Time Stress Test] Cut/merge slides to fit time, explain principles, and list 5 likely questions mapped to backup slides.",
    "zhFeedbackPrompt": "【Prompt 3｜架構驗收】\n規格書與頁面地圖：\n（貼上）\n請評分：主訊息清楚度、邏輯前進、時間可行性、視覺需求是否可執行、是否像報告搬家。指出最弱 2 頁並改寫主張句。不要生成完整投影片正文。",
    "enFeedbackPrompt": "[Prompt 3 | Structure Review] Score clarity, logic, timing, visual feasibility, and anti-wall-of-text; rewrite the two weakest claims.",
    "zhExample": "主訊息：建議宿舍導入晚間安靜時段以提升睡眠品質。\nP3 主張：噪音是影響 GPA 的間接因子（圖：路徑圖，90秒）。\nP7 主張：三階段試辦計畫可行（流程圖，70秒）。",
    "enExample": "Core message plus claim-timed slides with visual needs for a path diagram and a three-phase pilot flowchart.",
    "zhPractice": "選一份真實簡報作業，完成規格書。；用 Prompt 1 產出兩套故事線並選擇。；用 Prompt 2 壓到可準時的頁數。；Challenge：只用頁面主張句，在 60 秒向同學講完整故事；對方聽不懂的跳接必須改架構。",
    "enPractice": "Build specs from a real brief.；Generate and choose a storyline.；Cut to time.；Challenge: tell the whole story in 60 seconds using only claim sentences.",
    "zhQuizItems": [
      {
        "q": "做大學簡報時，較正確的起手式是？",
        "options": [
          "先在 Canva 挑最漂亮模板",
          "先拆解要求並建立故事線／頁面主張地圖",
          "先把報告全文貼上投影片",
          "先請 AI 生成 40 頁再上台"
        ],
        "answer": 1,
        "explain": "架構與主訊息優先，工具與美化在後。"
      },
      {
        "q": "「每頁一個主張」主要是為了？",
        "options": [
          "讓頁數越多越好",
          "降低聽眾認知負荷，讓口語與視覺對齊",
          "方便完全照念長文",
          "避免準備問答"
        ],
        "answer": 1,
        "explain": "單頁單主張有助理解與時間控制。"
      },
      {
        "q": "10 分鐘簡報若做出 25 頁密集文字，最可能問題是？",
        "options": [
          "一定更專業",
          "時間與重點失控，聽眾難以抓住主訊息",
          "老師會自動幫你刪頁",
          "完全沒問題，只要字體小"
        ],
        "answer": 1,
        "explain": "頁數與密度必須服務時長與理解。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best starting move for a university presentation?",
        "options": [
          "Pick the prettiest Canva template first",
          "Decode the brief and build a claim-based storyline",
          "Paste the full report onto slides",
          "Generate 40 slides with AI and present"
        ],
        "answer": 1,
        "explain": "Structure before tools and decoration."
      },
      {
        "q": "Why one claim per slide?",
        "options": [
          "To maximize slide count",
          "To reduce cognitive load and align talk with visuals",
          "To encourage reading long text aloud",
          "To avoid Q&A prep"
        ],
        "answer": 1,
        "explain": "Single claims aid understanding and timing."
      },
      {
        "q": "What is the likely problem with 25 text-heavy slides in 10 minutes?",
        "options": [
          "It is always more professional",
          "Timing and focus break; the core message gets lost",
          "The teacher will edit for you",
          "Tiny fonts fix everything"
        ],
        "answer": 1,
        "explain": "Density must serve time and comprehension."
      }
    ],
    "zhNotePrompt": "貼上主訊息、頁面主張清單與每頁秒數加總，確認是否 ≤ 時長。",
    "enNotePrompt": "Paste core message, claim list, and total seconds; confirm it fits the time limit.",
    "zhDeliverableChecklist": [
      "完成簡報規格書",
      "一句主訊息＋3 個記住點",
      "頁面主張地圖完成",
      "時間加總合規",
      "標出問答備答點"
    ],
    "enDeliverableChecklist": [
      "Specs sheet done",
      "Core message + 3 takeaways",
      "Claim map complete",
      "Time budget fits",
      "Q&A backup points marked"
    ],
    "zhScorecard": [
      "規格對齊",
      "主訊息",
      "單頁主張",
      "時間可行",
      "可製作"
    ],
    "enScorecard": [
      "Brief alignment",
      "Core message",
      "One claim/slide",
      "Timing",
      "Buildability"
    ],
    "resources": [
      {
        "name": "Google Slides",
        "url": "https://docs.google.com/presentation/",
        "note": "可用文字大綱先排出頁面地圖"
      },
      {
        "name": "Microsoft PowerPoint",
        "url": "https://www.microsoft.com/powerpoint",
        "note": "大綱檢視適合調整架構"
      },
      {
        "name": "Gamma",
        "url": "https://gamma.app",
        "note": "下一課用架構生成初稿"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "先別急著美化，等架構鎖定"
      }
    ],
    "challenge": "把一份已完成的書面報告（或第20課報告）改成 10 分鐘簡報架構：刪到 ≤12 頁，並寫下你刪除的 5 個內容與理由。"
  },
  {
    "icon": "⚡",
    "title": "Gamma AI 製作簡報",
    "description": "用 Gamma 依故事線快速生成簡報初稿，再人工改主張、刪灌水、補證據與來源。",
    "goal": "我的 Gamma 簡報初稿（已對齊架構）＋人工修改清單",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "Gamma",
      "AI簡報",
      "初稿",
      "Chapter5"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 4,
    "chapterZh": "AI 做簡報",
    "chapterEn": "AI Presentations",
    "zhTitle": "第22課：Gamma AI 製作簡報",
    "enTitle": "Lesson 22: Build Slides with Gamma AI",
    "zhValueTip": "用 Gamma 依故事線快速生成簡報初稿，再人工改主張、刪灌水、補證據與來源。",
    "enValueTip": "Generate a Gamma first draft from your storyline, then human-edit claims, cut fluff, and add evidence/sources.",
    "zhOutcome": "我的 Gamma 簡報初稿（已對齊架構）＋人工修改清單",
    "enOutcome": "My Gamma Draft (structure-aligned) + Human Edit List",
    "zhConcept": "Gamma 的強項是「從大綱快速長出可編輯簡報」，適合大學生在架構鎖定後加速初稿，而不是從一句模糊主題幻想全套內容。正確輸入是第21課的頁面主張地圖：主訊息、每頁主張、要點、時長、聽眾。錯誤輸入是「幫我做一個很厲害的期末簡報」——輸出往往空泛且難改。生成後立刻做三輪人工：1) 結構是否對齊故事線；2) 每頁是否仍單主張；3) 數據／引用是否真實可追溯。AI 產生的數字預設不可信。把 Gamma 當排版助手：你負責論點與證據，它負責區塊、層次與草稿文案。文案要再壓短，投影片不是講稿。實務技巧：先生成較多頁再刪，比生成太少硬凑更快；但最終頁數必須回到時間預算。善用卡片合併、標題改寫、重點條列。若課程要求 Google Slides／PowerPoint，生成後再匯出或重做關鍵頁，不要假設老師一定接受 Gamma 連結。視覺上先求清楚：對比足夠、字級可遠讀、一頁一個焦點。精緻美化可留到 Canva 課，但不要留到上台前一小時。小組使用時，一人負責在 Gamma 長初稿，全組依修改清單投票刪頁，避免「誰做誰說了算」的灌水頁。完成標準不是「看起來像AI做的很炫」，而是「離題零、超時風險低、主張可講、來源可查」。也請保存產生前的 prompt 與 structure-v1，方便復盤哪種輸入最穩，形成可重複的簡報流水線。遇到 Gamma 自動加的裝飾字或口號，若無法對應證據就刪。大學簡報寧願樸素正確，也不要華麗不實。把每頁講者備註寫上：你要講的 2-3 句，不要把備註寫成全文。這樣第24課寫講稿會更快。若主題涉及敏感數據，先確認能否公開；不能公開就改用示意區間或課堂允許的資料。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。當你能重複「架構→生成→美化→講稿→模擬」流水線，換題目也能穩定產出可上台簡報，這才是本章目標。也請收集老師現場回饋，把扣分點寫回下一份簡報規格書的防呆欄，讓系統越用越強。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。",
    "enConcept": "Use Gamma after your claim map is locked. Feed structured inputs, then human-edit for alignment, one claim per slide, and verified evidence. Treat Gamma as a drafting/layout accelerator, not a source of truth.",
    "zhCaseStudy": "情境案例：資工系阿廷直接對 Gamma 說「做區塊鏈期末報告簡報」，得到很多潮流詞但沒有他們專題的架構。後來他貼上 10 頁主張地圖與 8 分鐘時長，生成後刪 4 頁、改 3 個標題、補 2 張真實實驗圖。助教回饋「終於知道你們做了什麼」。阿廷把「先架構後 Gamma」寫進團隊規範。",
    "enCaseStudy": "A-Ting’s vague Gamma prompt failed; a claim-map prompt plus human cuts and real figures made the talk clear.",
    "zhWorkflow": [
      "準備 structure-v1 與規格時長",
      "用結構化 prompt 在 Gamma 生成初稿",
      "對齊故事線：刪／併／改主張句",
      "清除無來源數據，補真實圖表或標「示意」",
      "輸出修改清單與可進入美化的草稿"
    ],
    "enWorkflow": [
      "Prep structure-v1 and time limit",
      "Generate in Gamma with a structured prompt",
      "Align to storyline: cut/merge/rewrite claims",
      "Remove unsourced numbers; add real figures",
      "Save edit list and a beautify-ready draft"
    ],
    "zhCommonMistakes": [
      "用一句空話生成整份簡報",
      "不檢查 AI 數字與案例",
      "生成後完全不刪頁",
      "把投影片寫成微型論文"
    ],
    "enCommonMistakes": [
      "One vague prompt for everything",
      "Not verifying AI numbers",
      "Never cutting slides",
      "Turning slides into mini-papers"
    ],
    "zhExcellentExample": "優秀 Gamma 初稿：頁數符合時長、標題即主張、每頁文字可遠讀、無未核對數據、有修改清單記錄刪改理由。",
    "enExcellentExample": "A strong Gamma draft fits time, uses claim titles, is readable from afar, has no unverified stats, and includes an edit log.",
    "zhPrompt": "【Prompt 1｜Gamma 生成用結構化說明（可直接貼）】\n請依下列約束生成大學簡報大綱／內容（適合貼到 Gamma）：\n聽眾：［老師／同學］；時長：［N］分鐘；主訊息：［一句］\n頁面地圖：\n（貼上：頁碼｜主張｜要點｜視覺）\n要求：每頁一個主張；文字精簡；不要虛構數據；需要數字處標［待補資料］；結尾含結論與開放問題。",
    "enPrompt": "[Prompt 1 | Gamma-Ready Structured Brief] Generate slides from my timed claim map; one claim/slide; no invented stats; mark [data needed].",
    "zhCoachPrompt": "【Prompt 2｜Gamma 初稿瘦身編輯】\n以下是 Gamma 產生的各頁標題與重點：\n（貼上）\n時長：［N］分鐘\n請給刪頁／合併方案、改寫後的主張標題、以及每頁最多保留的 3 個子彈點。指出任何可疑的空泛口号或可能虛構的具體數字。",
    "enCoachPrompt": "[Prompt 2 | Gamma Draft Slimmer] Propose cuts/merges, rewrite claim titles, cap 3 bullets/slide, and flag fluff or suspicious numbers.",
    "zhFeedbackPrompt": "【Prompt 3｜初稿驗收】\nstructure-v1：\n（貼上）\n目前簡報頁面：\n（貼上）\n請評分：對齊架構、可講性、遠讀性、誠信風險。列出交到 Canva 前必改的 7 項。",
    "enFeedbackPrompt": "[Prompt 3 | Draft QA] Score alignment, speakability, readability, integrity risk; list 7 must-fixes before Canva.",
    "zhExample": "輸入含 P1-P10 主張後，Gamma 初稿 14 頁→刪至 10 頁；將「很多研究顯示提升 80%」改為「［待補資料］／改放自己問卷圖」。",
    "enExample": "A 14-slide Gamma draft cut to 10; an unverifiable 80% claim replaced with pending data or the team’s own chart.",
    "zhPractice": "用 structure-v1 在 Gamma 生成初稿。；完成刪頁與主張改寫。；清除或標記所有未核對數字。；Challenge：匯出或截圖 3 頁前後對照，寫下你為何刪／改，準備給組員審查。",
    "enPractice": "Generate from structure-v1 in Gamma.；Cut and rewrite claims.；Remove/mark unverified numbers.；Challenge: show 3 before/after slides with edit reasons for peer review.",
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
    "zhNotePrompt": "列出你刪掉的頁與理由，以及仍待補的資料項目。",
    "enNotePrompt": "List deleted slides with reasons and remaining data-to-fill items.",
    "zhDeliverableChecklist": [
      "Gamma 初稿已生成",
      "頁數符合時長",
      "主張標題已人工改",
      "無未標記的可疑數據",
      "修改清單已保存"
    ],
    "enDeliverableChecklist": [
      "Gamma draft created",
      "Slide count fits time",
      "Claim titles human-edited",
      "No unmarked suspicious stats",
      "Edit list saved"
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
    "resources": [
      {
        "name": "Gamma",
        "url": "https://gamma.app",
        "note": "AI 簡報生成與編輯主工具"
      },
      {
        "name": "Google Slides",
        "url": "https://docs.google.com/presentation/",
        "note": "若需匯出或重做關鍵頁"
      },
      {
        "name": "Microsoft PowerPoint",
        "url": "https://www.microsoft.com/powerpoint",
        "note": "常見繳交格式備援"
      },
      {
        "name": "Tome",
        "url": "https://tome.app",
        "note": "可比較另一種 AI 簡報敘事工具"
      },
      {
        "name": "Beautiful.ai",
        "url": "https://www.beautiful.ai",
        "note": "自動排版取向的對照學習"
      }
    ],
    "challenge": "用 Gamma 為真實課程產出 8-12 頁初稿；找一位同學計時試講 3 頁，依對方聽不懂處再改標題與子彈點。"
  },
  {
    "icon": "🎨",
    "title": "Canva AI 製作專業簡報",
    "description": "用 Canva AI 統一視覺、強化資訊圖表與重點層次，做出可遠讀的專業大學簡報。",
    "goal": "我的 Canva 專業視覺版簡報（含至少 1 張資訊圖表）",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "Canva",
      "視覺設計",
      "資訊圖表",
      "Chapter5"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 4,
    "chapterZh": "AI 做簡報",
    "chapterEn": "AI Presentations",
    "zhTitle": "第23課：Canva AI 製作專業簡報",
    "enTitle": "Lesson 23: Professional Slides with Canva AI",
    "zhValueTip": "用 Canva AI 統一視覺、強化資訊圖表與重點層次，做出可遠讀的專業大學簡報。",
    "enValueTip": "Use Canva AI to unify visuals, strengthen infographics, and create far-readable professional university slides.",
    "zhOutcome": "我的 Canva 專業視覺版簡報（含至少 1 張資訊圖表）",
    "enOutcome": "My Canva Professional Visual Deck (with ≥1 infographic)",
    "zhConcept": "Canva AI 適合在內容正確後做「專業化」：統一字體與色彩、提升層次、製作資訊圖表、補齊圖示與版面呼吸感。不要顛倒順序：先有主張與可核對內容，再美化。否則你會花很多時間調整好看的錯誤訊息。大學簡報視覺原則：高對比、少字、大標題、一致間距、一頁一焦點。避免紫光特效堆疊與過多裝飾框。資訊圖表要用來解釋關係（流程、對比、前後、占比），不是貼可愛插圖。圖表標題應重述主張，而不只是「圖一」。素材方面，可用 Unsplash 找真實情境圖、Flaticon 找簡潔圖示；注意授權與是否需標註。勿盜用不明來源圖。Canva Magic Design／AI 寫手可協助排版建議與短文壓縮，但仍要你決定保留哪些字。把長句改成聽得懂的短標。無障礙與現場可讀：最後一排也要能看清；顏色不要只靠紅綠差別傳達意義；動畫少而有目的。與 Gamma／PowerPoint／Google Slides 協作時，選定「最終上台檔」主檔，避免多版本混亂。建議檔名含課程_主題_日期_final。小組美化要有設計規範：主色 1-2 個、字級階級、圖示風格一致。AI 可生成規範草稿，全組共同遵守。完成後做「遠讀測試」：縮小到手機螢幕或站遠 2 公尺，看標題是否仍可辨識。專業不等于複雜。老師更常獎勵清楚論證＋乾淨視覺，而不是模板特效競賽。若使用照片，確保與主張有關；裝飾性美圖若搶走注意力就刪。視覺服務故事線，而不是反過來。把關鍵數據頁做成可截圖分享的一頁，也方便之後放進學習歷程或作品集（在允許範圍內）。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。當你能重複「架構→生成→美化→講稿→模擬」流水線，換題目也能穩定產出可上台簡報，這才是本章目標。也請收集老師現場回饋，把扣分點寫回下一份簡報規格書的防呆欄，讓系統越用越強。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。當你能重複「架構→生成→美化→講稿→模擬」流水線，換題目也能穩定產出可上台簡報，這才是本章目標。",
    "enConcept": "Beautify only after content is correct. Use Canva AI for consistency, hierarchy, and infographics that explain relationships. Prioritize far-readability, licensed assets, and a single final deck.",
    "zhCaseStudy": "情境案例：設計系旁聽的小晴幫專題組美化，起初加很多濾鏡與貼紙，主訊息被蓋住。她改成設計規範：深藍＋灰、標題固定字級、流程改成三步資訊圖、照片只保留一張真實場域圖（Unsplash）。老師點名「那頁流程圖讓人秒懂」。組員之後把 Canva 規範複製到每次報告。",
    "enCaseStudy": "Xiao Qing replaced sticker clutter with a strict type/color system and one clear process infographic that carried the talk.",
    "zhWorkflow": [
      "匯入已核對的 Gamma／大綱內容到 Canva",
      "建立設計規範：色／字／間距／圖示風格",
      "壓縮文字，強化標題層次",
      "製作至少 1 張資訊圖表解釋關鍵關係",
      "遠讀測試與版本命名 final"
    ],
    "enWorkflow": [
      "Import verified content into Canva",
      "Set a design system: color/type/spacing/icons",
      "Compress text and strengthen hierarchy",
      "Build ≥1 infographic for a key relationship",
      "Far-read test and name the final file"
    ],
    "zhCommonMistakes": [
      "先美化未核對的內容",
      "文字牆＋低對比",
      "資訊圖表只是裝飾",
      "多版本找不到上台檔"
    ],
    "enCommonMistakes": [
      "Beautifying unverified content",
      "Text walls and low contrast",
      "Decorative fake infographics",
      "Losing the final file among versions"
    ],
    "zhExcellentExample": "優秀視覺版：規範一致、遠讀標題清楚、至少一張解釋關係的資訊圖、圖片有授權意識、無搶戲裝飾。",
    "enExcellentExample": "A strong visual deck is consistent, far-readable, has a relationship-explaining infographic, and uses assets responsibly.",
    "zhPrompt": "【Prompt 1｜大學簡報設計規範生成器】\n主題：［ ］；科系風格：正式學術；時長：［N］\n請給一套簡潔設計規範：主色／輔色、標題與內文字級建議、間距規則、禁用元素（避免雜亂）、以及 3 種頁面原型（封面、證據對比、流程圖）。不要產生具體假數據。",
    "enPrompt": "[Prompt 1 | Deck Design System] Produce a simple academic design system and 3 page prototypes without inventing data.",
    "zhCoachPrompt": "【Prompt 2｜資訊圖表構思（服務主張）】\n這一頁主張：［主張句］\n我有的真實資料／步驟：\n（貼上）\n請建議最適合的圖表類型（流程／對比／矩陣／時間軸），給版面文字配置（標題、3 個標籤、註記），並提醒容易誤導的設計（如截斷座標軸）。不要編造數字；缺資料就標待補。",
    "enCoachPrompt": "[Prompt 2 | Infographic for the Claim] Recommend chart type and layout labels from my real inputs only; warn about misleading design; no invented numbers.",
    "zhFeedbackPrompt": "【Prompt 3｜專業視覺驗收】\n請依大學簡報標準檢查：\n（描述或貼各頁標題＋文字密度＋色彩）\n評分遠讀性、一致性、焦點、資訊圖表是否服務主張。列出 8 個可在 30 分鐘內完成的修改。",
    "enFeedbackPrompt": "[Prompt 3 | Visual QA] Score far-readability, consistency, focus, and whether graphics serve claims; list 8 fixes doable in 30 minutes.",
    "zhExample": "主張：試辦分三階段。資訊圖=時間軸三欄（準備／試點／評估），每欄最多 4 字標籤＋一句風險；刪除所有無意義貼圖。",
    "enExample": "A three-phase timeline infographic with short labels and one risk line; decorative stickers removed.",
    "zhPractice": "把已核對內容進 Canva 並建立規範。；完成全稿文字壓縮與層次。；產出至少 1 張資訊圖表。；Challenge：做遠讀測試，找出 3 處看不清之處並在 20 分鐘內修完。",
    "enPractice": "Move verified content into Canva with a design system.；Compress text.；Build ≥1 infographic.；Challenge: far-read test and fix 3 issues in 20 minutes.",
    "zhQuizItems": [
      {
        "q": "Canva AI 在大學簡報流程中較佳位置是？",
        "options": [
          "內容尚未核對前先全面美化",
          "在架構與事實就緒後做視覺專業化",
          "取代所有證據與口語準備",
          "只負責產生假數據圖表"
        ],
        "answer": 1,
        "explain": "美化建立在正確可講的內容之上。"
      },
      {
        "q": "資訊圖表的主要目的應是？",
        "options": [
          "讓投影片看起來比較忙",
          "解釋關係或比較，服務該頁主張",
          "放越多图标越好",
          "隱藏資料不足"
        ],
        "answer": 1,
        "explain": "圖表是論證工具，不是裝飾。"
      },
      {
        "q": "關於圖片素材，較正確的是？",
        "options": [
          "隨意截圖網路圖片不理会授權",
          "使用 Unsplash／Flaticon 等來源並注意授權與相關性",
          "照片越模糊越有藝術感即可",
          "每頁都必須放滿人物照片"
        ],
        "answer": 1,
        "explain": "合法與相關性優先。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Where does Canva AI best fit in the workflow?",
        "options": [
          "Full beautification before content is verified",
          "Visual professionalization after structure and facts are ready",
          "Replacing evidence and rehearsal",
          "Inventing chart data"
        ],
        "answer": 1,
        "explain": "Polish follows correct, speakable content."
      },
      {
        "q": "Infographics should mainly:",
        "options": [
          "Make slides busier",
          "Explain relationships/comparisons that serve the claim",
          "Maximize icon count",
          "Hide missing data"
        ],
        "answer": 1,
        "explain": "Graphics are argument tools."
      },
      {
        "q": "Best practice for image assets?",
        "options": [
          "Grab any web image ignoring licenses",
          "Use sources like Unsplash/Flaticon with license and relevance in mind",
          "Blurrier photos look more artistic",
          "Every slide needs crowded people photos"
        ],
        "answer": 1,
        "explain": "Legality and relevance first."
      }
    ],
    "zhNotePrompt": "寫下你的設計規範（色／字／間距）與資訊圖表服務的那句主張。",
    "enNotePrompt": "Write your design system and the claim your infographic serves.",
    "zhDeliverableChecklist": [
      "設計規範已套用全稿",
      "文字密度可遠讀",
      "至少 1 張資訊圖表",
      "素材來源可說明",
      "final 檔名已定"
    ],
    "enDeliverableChecklist": [
      "Design system applied",
      "Far-readable text density",
      "≥1 infographic",
      "Asset sources explainable",
      "Final filename set"
    ],
    "zhScorecard": [
      "一致性",
      "遠讀性",
      "焦點",
      "圖表有效",
      "專業克制"
    ],
    "enScorecard": [
      "Consistency",
      "Far-readability",
      "Focus",
      "Chart usefulness",
      "Restrained polish"
    ],
    "resources": [
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "視覺設計與 AI 美化主工具"
      },
      {
        "name": "Unsplash",
        "url": "https://unsplash.com",
        "note": "高品質照片素材（注意授權條款）"
      },
      {
        "name": "Flaticon",
        "url": "https://www.flaticon.com",
        "note": "圖示素材（注意授權與標註）"
      },
      {
        "name": "Beautiful.ai",
        "url": "https://www.beautiful.ai",
        "note": "對照自動排版思路"
      },
      {
        "name": "Google Slides",
        "url": "https://docs.google.com/presentation/",
        "note": "協作與繳交備援格式"
      }
    ],
    "challenge": "為真實課堂簡報做 Canva 專業版：至少含 1 張流程或對比資訊圖；請同學站在 2 公尺外指出看不清的 2 處並當場修正。"
  },
  {
    "icon": "🎙️",
    "title": "AI 撰寫演講稿與講稿技巧",
    "description": "把投影片轉成可上台的演講稿：開場、過渡、時間控制與金句，避免照念全文。",
    "goal": "我的分頁講稿（含時間碼）＋開場／結語定稿",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "中階",
    "tags": [
      "演講稿",
      "口語表達",
      "時間控制",
      "Chapter5"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 4,
    "chapterZh": "AI 做簡報",
    "chapterEn": "AI Presentations",
    "zhTitle": "第24課：AI 撰寫演講稿與講稿技巧",
    "enTitle": "Lesson 24: AI Speaker Scripts and Delivery Notes",
    "zhValueTip": "把投影片轉成可上台的演講稿：開場、過渡、時間控制與金句，避免照念全文。",
    "enValueTip": "Turn slides into a speakable script with opening, transitions, timing, and lines you will not read verbatim.",
    "zhOutcome": "我的分頁講稿（含時間碼）＋開場／結語定稿",
    "enOutcome": "My Per-Slide Script (with time codes) + Opening/Closing Final",
    "zhConcept": "講稿的目標是「幫助你講」，不是「讓你念」。大學簡報若逐字照念長稿，台風與眼神都會垮，也難應變提問。建議採用分頁講稿：每頁 3 段——鉤子／核心句、證據一句、過渡到下一頁。總時長用時間碼控管。AI 可把主張地圖擴成口語草稿，但要指定口語化、短句、禁止新數據。你再改成自己的語氣，讀出聲來修。開場 20-30 秒內要進主題：情境、問題、主訊息。避免冗長自我介紹佔掉評分中的內容時間。過渡句是專業感來源：「前面看到問題，接下來用一組對比說明可行方案」。AI 可批量產生過渡，你挑選自然的。結語重述主訊息＋行動建議／限制＋感謝與問答邀請。不要突然結束或說「差不多就是這樣」。講稿密度：投影片少字、嘴裡補關係。若你發現必須念投影片才能懂，先回 Canva 再砍字，而不是把講稿寫更長。練習法：先慢讀對時間，再去稿講重點，最後只留關鍵詞卡片。AI 可幫你把長講稿壓成關鍵詞卡。組內分工時，統一術語與過渡，避免每人語氣與定義不一致。可請 AI 做用詞對照表。學術誠信同樣適用於口頭：不要口述不存在的研究；不確定就說「根據我們蒐集到的資料／課堂允許的來源」。把講稿與投影片版本號綁定，避免美化後頁序變了還唸舊稿。若英語簡報，講稿更要短句與預演；可請 AI 做發音易點提示，但重音與節奏仍靠你練習。完成講稿後，下一課用模擬提問來壓力測試：講稿站得住，問答才不會崩。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。當你能重複「架構→生成→美化→講稿→模擬」流水線，換題目也能穩定產出可上台簡報，這才是本章目標。也請收集老師現場回饋，把扣分點寫回下一份簡報規格書的防呆欄，讓系統越用越強。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。當你能重複「架構→生成→美化→講稿→模擬」流水線，換題目也能穩定產出可上台簡報，這才是本章目標。也請收集老師現場回饋，把扣分點寫回下一份簡報規格書的防呆欄，讓系統越用越強。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。",
    "enConcept": "Write per-slide speakable notes with timing—not a read-aloud essay. Use AI to draft under constraints, then revise in your voice. Strong openings, transitions, and closings matter as much as content pages.",
    "zhCaseStudy": "情境案例：護理系小涵第一版講稿 2500 字，上台低頭猛念，超時兩分鐘。她改成分頁講稿：每頁最多 80 字口語、開場 25 秒定主訊息、結語重述建議與限制。計時三次後穩定在 9 分 40 秒，老師回饋「比較像在溝通」。",
    "enCaseStudy": "Xiao Han replaced a 2500-word read-aloud script with timed per-slide notes and finished on time with clearer delivery.",
    "zhWorkflow": [
      "依 final 投影片列出每頁主張",
      "請 AI 產出口語分頁草稿（禁新數據）",
      "改成自己的語氣並加時間碼",
      "打磨開場、過渡、結語",
      "壓成關鍵詞卡並出聲計時"
    ],
    "enWorkflow": [
      "List claims from the final deck",
      "Draft oral notes with AI (no new facts)",
      "Rewrite in your voice with time codes",
      "Polish opening, transitions, closing",
      "Compress to cue cards and time aloud"
    ],
    "zhCommonMistakes": [
      "寫成長文照念",
      "開場過長、主訊息太晚",
      "講稿與投影片版本不一致",
      "結語虛化、無重述"
    ],
    "enCommonMistakes": [
      "Reading a long essay",
      "Slow openings",
      "Script/deck version mismatch",
      "Weak closings"
    ],
    "zhExcellentExample": "優秀講稿：分頁短句、時間碼加總合規、開場進主題快、過渡清楚、結語含主訊息與限制、可降級為關鍵詞卡。",
    "enExcellentExample": "A strong script is per-slide, timed, quick to the point, smooth in transitions, and reducible to cue cards.",
    "zhPrompt": "【Prompt 1｜分頁演講稿生成器】\n時長：［N］分鐘。投影片主張與要點：\n（貼上）\n請為每頁寫「可上台口語稿」：每頁不超過 80-100 字，含 1 句過渡到下一頁。開場與結語各寫一版加強稿。禁止新增數據或文獻；缺資訊標［待補］。語氣：清楚、正式、不浮誇。",
    "enPrompt": "[Prompt 1 | Per-Slide Script Generator] Write ≤80–100 words per slide with transitions; strengthen opening/closing; no new facts.",
    "zhCoachPrompt": "【Prompt 2｜時間碼與去稿壓縮】\n這是我的講稿：\n（貼上）\n目標時長：［N］\n請估算每頁秒數，標出超時段，給刪句建議，並產出「關鍵詞卡」版本（每頁 ≤6 個詞組）。",
    "enCoachPrompt": "[Prompt 2 | Timing & Cue-Card Compression] Estimate seconds, mark overtime, suggest cuts, and produce ≤6 cue phrases per slide.",
    "zhFeedbackPrompt": "【Prompt 3｜講稿可講性驗收】\n主訊息：［ ］\n講稿：\n（貼上）\n請評分：是否像念稿、開場效率、過渡、結語完整、與投影片少字原則是否衝突。改寫最弱的開場與一段過渡，保持原意。",
    "enFeedbackPrompt": "[Prompt 3 | Speakability Review] Score read-aloud risk, opening, transitions, closing; rewrite the weakest opening and one transition.",
    "zhExample": "P4（70秒）：「對比兩種方案後，成本差主要在人力而非軟體。下一頁看風險如何控管。」關鍵詞：成本結構／人力／過渡風險。",
    "enExample": "A 70-second slide note with one comparison insight and a forward transition, plus cue words.",
    "zhPractice": "為 final 簡報撰寫分頁講稿。；加時間碼並出聲計時兩次。；壓成關鍵詞卡。；Challenge：只用關鍵詞卡完整講完一遍；卡住的頁回去改投影片或講稿。",
    "enPractice": "Write per-slide notes for the final deck.；Time aloud twice.；Make cue cards.；Challenge: deliver once with cue cards only; fix slides/script where you stall.",
    "zhQuizItems": [
      {
        "q": "大學簡報講稿較佳型態是？",
        "options": [
          "可逐字照念的長文",
          "分頁短句口語稿＋可降級關鍵詞卡",
          "完全沒有準備的即興",
          "把報告附件念完"
        ],
        "answer": 1,
        "explain": "短句分頁稿兼顧準備與台風。"
      },
      {
        "q": "開場最應優先做到？",
        "options": [
          "花三分鐘介紹自己喜好",
          "快速進入主題並拋出主訊息",
          "先道歉設備不熟",
          "先念參考書目"
        ],
        "answer": 1,
        "explain": "聽眾需要早點抓住主訊息。"
      },
      {
        "q": "講稿與投影片文字的關係應是？",
        "options": [
          "兩者都是長文且完全相同",
          "投影片少字，口語補關係與故事",
          "投影片越多字越好，講稿可省略",
          "完全無關"
        ],
        "answer": 1,
        "explain": "視覺與口語分工，避免雙重文字牆。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best form of a university presentation script?",
        "options": [
          "A long verbatim essay",
          "Per-slide short oral notes that compress to cue cards",
          "Zero preparation improvisation",
          "Reading the full report appendix"
        ],
        "answer": 1,
        "explain": "Short per-slide notes support delivery."
      },
      {
        "q": "What should the opening prioritize?",
        "options": [
          "Three minutes of personal hobbies",
          "Quickly enter the topic and core message",
          "Apologizing for tech skills",
          "Reading the bibliography first"
        ],
        "answer": 1,
        "explain": "Audiences need the message early."
      },
      {
        "q": "How should script and slide text relate?",
        "options": [
          "Both are identical long essays",
          "Slides stay sparse; speech adds relationships and story",
          "More slide text is always better",
          "They should be unrelated"
        ],
        "answer": 1,
        "explain": "Split labor between eye and ear."
      }
    ],
    "zhNotePrompt": "貼上開場 30 秒定稿與各頁時間碼加總。",
    "enNotePrompt": "Paste your 30-second opening final and the sum of per-slide time codes.",
    "zhDeliverableChecklist": [
      "分頁講稿完成",
      "開場／結語定稿",
      "時間碼合規",
      "關鍵詞卡已做",
      "版本與投影片一致"
    ],
    "enDeliverableChecklist": [
      "Per-slide script done",
      "Opening/closing final",
      "Timing within limit",
      "Cue cards ready",
      "Version matched to deck"
    ],
    "zhScorecard": [
      "可講性",
      "開場效率",
      "過渡",
      "時間控制",
      "去稿能力"
    ],
    "enScorecard": [
      "Speakability",
      "Opening efficiency",
      "Transitions",
      "Timing",
      "Cue-card readiness"
    ],
    "resources": [
      {
        "name": "Google Slides",
        "url": "https://docs.google.com/presentation/",
        "note": "講者備註可放分頁講稿"
      },
      {
        "name": "Microsoft PowerPoint",
        "url": "https://www.microsoft.com/powerpoint",
        "note": "演講者檢視與備註"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "對照最終視覺頁序寫稿"
      },
      {
        "name": "Gamma",
        "url": "https://gamma.app",
        "note": "若初稿在此，匯出後再寫講稿"
      },
      {
        "name": "Tome",
        "url": "https://tome.app",
        "note": "敘事取向簡報的講稿對照練習"
      }
    ],
    "challenge": "為真實上台簡報完成「開場 30 秒＋結語 40 秒」錄音；自己重聽，標記填充詞與超時處，改到可穩定重現。"
  },
  {
    "icon": "🎯",
    "title": "AI 模擬口頭報告與簡報技巧",
    "description": "用 AI 模擬老師提問與評分，練習台風、應答與臨場修正，完成可上台發表的大學簡報。",
    "goal": "我的模擬提問題庫＋應答稿＋上台檢核表（可發表版）",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "模擬問答",
      "台風",
      "上台檢核",
      "Chapter5"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 4,
    "chapterZh": "AI 做簡報",
    "chapterEn": "AI Presentations",
    "zhTitle": "第25課：AI 模擬口頭報告與簡報技巧",
    "enTitle": "Lesson 25: AI Mock Q&A and Presentation Skills",
    "zhValueTip": "用 AI 模擬老師提問與評分，練習台風、應答與臨場修正，完成可上台發表的大學簡報。",
    "enValueTip": "Use AI to simulate instructor questions and scoring, rehearse delivery and answers, and ship a stage-ready university presentation.",
    "zhOutcome": "我的模擬提問題庫＋應答稿＋上台檢核表（可發表版）",
    "enOutcome": "My Mock Q&A Bank + Answer Notes + Stage Checklist (presentation-ready)",
    "zhConcept": "Chapter 5 的收束不是再加特效，而是讓簡報在壓力下仍站得住：準時、清楚、問答可防禦。用 AI 當模擬老師：依你的投影片與講稿出題，涵蓋定義、方法、證據弱點、限制、替代方案、實作細節。應答技巧：先重述問題、給一句直接答案、再補一個證據或例子、最後確認是否答到點。不懂就誠實說已知範圍與下一步，不要編造。台風檢核：開場眼神、音量、站位不挡畫面、手勢有目的、翻頁節奏、超時警報（剩餘 1 分鐘訊號）。彩排建議至少三次：一次看稿、一次去稿、一次全程錄影。錄影後只改最大的三個問題，避免無限重做。AI 可依評分量表打模擬分，但要你提供量表；沒有量表就用常見維度：內容、結構、視覺、台風、問答。設備應變：離線副本、字體嵌入或PDF備援、點擊器／空白鍵計畫、影片音訊預檢。這些寫進上台檢核表。小組簡報要演練交接：誰導入下一個人、如何接下問答。AI 可模擬「指定某位組員回答」的壓力情境。完成後打包可發表版：final 簡報、講稿／關鍵詞卡、題庫應答、檢核表。這才是大學簡報系統的交付物。把老師現場真問記入題庫，下學期同类報告會越來越穩，形成個人口頭報告資產。也要管理緊張：開場前兩次深呼吸、第一句背熟、把注意力放在聽眾是否理解而非自我評價。若課程允許，簡短披露 AI 使用方式（架構、美化、模擬提問），展現你是掌控者而非代講。當你能在模擬追問下守住主訊息與證據邊界，這份簡報就真正可以上台發表。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。當你能重複「架構→生成→美化→講稿→模擬」流水線，換題目也能穩定產出可上台簡報，這才是本章目標。也請收集老師現場回饋，把扣分點寫回下一份簡報規格書的防呆欄，讓系統越用越強。此外，請把本課產出存成 raw 與 final：raw 保留生成紀錄與草稿，final 是可進入下一課或可上台的版本，方便追溯與組員交接。每次結束寫三行日誌：今天最有效的一步、仍卡關之處、明天第一個行動，並存進 AI Workspace。若與同學協作，先合意分工、檔名與 AI 使用界線；只分享 final，不把未核對數據當定案。",
    "enConcept": "Close Chapter 5 with pressure testing: mock instructor Q&A, delivery checklist, timed rehearsals, and a stage-ready pack. Answer with restate–answer–evidence; never invent. Capture real questions into a reusable bank.",
    "zhCaseStudy": "情境案例：統計系小組第一次被問「你們的樣本偏誤呢？」全場沉默。他們用 AI 依簡報生成 20 題，準備 8 題核心應答，彩排指定回答者。正式場合同題出現，組員用「重述—限制—未來改善」答完，老師點頭。他們把該題留在題庫置頂。",
    "enCaseStudy": "A stats team froze on a bias question once; after an AI mock bank and assigned answers, they handled the same question live.",
    "zhWorkflow": [
      "匯出 final 簡報與講稿給 AI 產模擬題",
      "選核心 8-12 題寫應答骨架",
      "全程計時彩排＋錄影修正三大問題",
      "完成上台檢核表（內容／設備／台風／問答）",
      "打包可發表版並做復盤"
    ],
    "enWorkflow": [
      "Feed final deck/script to AI for mock questions",
      "Write answer skeletons for 8–12 core items",
      "Full timed rehearsal + video fixes",
      "Complete stage checklist",
      "Pack presentation-ready files and retrospect"
    ],
    "zhCommonMistakes": [
      "只做投影片不練問答",
      "被問到就編造資料",
      "從不計時彩排",
      "沒有設備備援"
    ],
    "enCommonMistakes": [
      "Slides without Q&A practice",
      "Inventing answers under pressure",
      "Never timing a full run",
      "No tech backup"
    ],
    "zhExcellentExample": "可發表包：準時講完的 final 簡報、關鍵詞卡、8+ 題應答、上台檢核全勾、錄影自評三點改進。",
    "enExcellentExample": "A stage-ready pack: on-time final deck, cue cards, 8+ answers, completed checklist, and three video-based improvements.",
    "zhPrompt": "【Prompt 1｜模擬老師提問產生器】\n你是嚴格但公平的大學老師。以下是學生簡報大綱／講稿：\n（貼上）\n評分重點：［內容／方法／台風／問答］\n請產生 15 題口頭追問，分類：基礎定義、證據挑戰、限制、實作細節、延伸思考。每題標難度。不要提供長篇標準答案；改為提示學生應涵蓋的要點方向。",
    "enPrompt": "[Prompt 1 | Mock Instructor Questions] Create 15 categorized follow-ups with difficulty tags and answer-direction hints—not long model answers.",
    "zhCoachPrompt": "【Prompt 2｜應答骨架教練】\n問題：［貼上 1 題］\n我已知資訊：\n（貼上）\n請幫我寫 40-60 字應答骨架：重述問題→直接答案→一個證據／例子→收束。若資訊不足，教我如何誠實回答並提出補救，禁止編造研究。",
    "enCoachPrompt": "[Prompt 2 | Answer Skeleton Coach] Build a 40–60 word restate–answer–evidence–close skeleton; if info is missing, coach an honest reply—no fabricated studies.",
    "zhFeedbackPrompt": "【Prompt 3｜模擬評分與上台檢核】\n評分量表：\n（貼上或用預設五維）\n我的錄影／表現自述：\n（貼上）\n簡報主張：\n（貼上）\n請給模擬分數、最大 3 個扣分點、明天上台前只改這 3 點的行動清單，以及 12 項上台前檢核表。",
    "enFeedbackPrompt": "[Prompt 3 | Mock Scoring & Stage Checklist] Score my rehearsal notes, list top 3 fixes, and output a 12-item pre-stage checklist.",
    "zhExample": "Q：你們如何處理樣本偏誤？\nA：重述→我們樣本偏宿舍自願者→直接答：外推需保守→例子：結果當趨勢非全校參數→收束：限制頁有寫，未來可分層抽樣。",
    "enExample": "A bias question answered with restate, conservative generalization, an example, and a link to the limitations slide.",
    "zhPractice": "用 Prompt 1 產 15 題並挑 8 題寫應答。；全程錄影彩排一次並只改三大問題。；勾完上台檢核表。；Challenge：請同學或 AI 連續追問 5 題；你必須在每題 40 秒內答完且不編造。",
    "enPractice": "Generate 15 questions and prepare 8 answers.；Video one full run and fix top 3 issues.；Complete the checklist.；Challenge: face 5 rapid follow-ups in ≤40 seconds each without inventing facts.",
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
    "zhNotePrompt": "列出 8 題核心追問的應答骨架，並寫下錄影後要改的三件事。",
    "enNotePrompt": "List 8 answer skeletons and the three fixes from your rehearsal video.",
    "zhDeliverableChecklist": [
      "模擬題庫 ≥15 題",
      "核心應答 ≥8 題",
      "全程計時彩排完成",
      "上台檢核表全勾",
      "可發表版檔案打包"
    ],
    "enDeliverableChecklist": [
      "≥15 mock questions",
      "≥8 core answers",
      "Full timed rehearsal done",
      "Stage checklist complete",
      "Presentation-ready pack exported"
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
    "resources": [
      {
        "name": "Google Slides",
        "url": "https://docs.google.com/presentation/",
        "note": "上台主檔與講者備註"
      },
      {
        "name": "Microsoft PowerPoint",
        "url": "https://www.microsoft.com/powerpoint",
        "note": "演講者檢視與離線備援"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "最終視覺版簡報"
      },
      {
        "name": "Gamma",
        "url": "https://gamma.app",
        "note": "若由此生成，確認 final 已匯出"
      },
      {
        "name": "Beautiful.ai",
        "url": "https://www.beautiful.ai",
        "note": "可作為備援或對照版本"
      },
      {
        "name": "Tome",
        "url": "https://tome.app",
        "note": "敘事簡報另類彩排素材"
      }
    ],
    "challenge": "在正式課程或社團場景完成一次真實上台（或完整模擬教室）：使用本課檢核表，會後寫下老師真問的 3 題並更新題庫。"
  },
  {
    "icon": "📌",
    "title": "AI 整理考試範圍與必考重點",
    "description": "拆解考試範圍、教材優先序與老師提示，把講義／PDF／筆記轉成可執行的必考重點清單。",
    "goal": "我的考試範圍清單（必考／次要／低頻）＋教材優先序與複習入口包",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "考試範圍",
      "必考重點",
      "教材優先序",
      "Chapter6"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 5,
    "chapterZh": "AI 考試與複習系統",
    "chapterEn": "AI Exam and Review System",
    "zhTitle": "第26課：AI 整理考試範圍與必考重點",
    "enTitle": "Lesson 26: Map Exam Scope and Must-Know Priorities",
    "zhValueTip": "拆解考試範圍、教材優先序與老師提示，把講義／PDF／筆記轉成可執行的必考重點清單。",
    "enValueTip": "Decode exam scope, material priority, and instructor hints into an actionable must-know checklist.",
    "zhOutcome": "我的考試範圍清單（必考／次要／低頻）＋教材優先序與複習入口包",
    "enOutcome": "My Exam Scope List (must/secondary/low) + Material Priority Pack",
    "zhConcept": "考試複習的第一失敗點，不是不夠努力，而是範圍沒對齊：把低頻細節讀到半夜，卻漏掉老師連續兩週強調的定義與題型。這一課要建立「考試範圍清單」與「教材優先序」。先收集範圍來源：課程大綱考試說明、老師口頭提示、作業類型、投影片標題、課本指定章節、歷屆或考古題（若有）、討論課強調點。拆解方法：把範圍寫成可檢查條目，例如「第3-5章＋講義W6-W9＋公式表A」；再標註考試形式（選擇／申論／計算／口試）與允許工具。教材優先序建議：老師講義與課堂強調 > 指定習題與作業錯題 > 課本核心定義／定理 > 補充閱讀。補充材料只有在高優先覆蓋後才進場。必考概念判斷可用四個訊號：反覆出現、被說「很重要／會考」、能串多章、對應作業或小考題型。次要概念能解釋但不主導答題；低頻細節只在時間充足時掃過。把 PDF、簡報、筆記轉成複習資料時，不要整份摘要成長文。正確做法是產出「範圍條目→關鍵定義→典型題型→仍不懂」四欄卡，並保留頁碼／投影片編號以便回查。AI 可協助分類與去重，但不得捏造教材沒有的章節或定義。資料不足時必須明確說「原文未提供」，並列出你需回講義確認的問題。若有歷屆題，先做題型盤點（不是先刷爆）：計算佔比、申論主題、是否愛考例外條件。把題型回寫到範圍清單的「可能考法」欄。完成後你會有一份可進入第27課題庫建設的輸入包：哪些概念要出選擇題、哪些要出申論、哪些要出計算。也請連回 Chapter 3 的課堂筆記與 PDF 重點卡：考試系統不是另起爐灶，而是把既有筆記壓成考試導向層。實務上建議在 Google Drive 建資料夾：00_範圍清單、01_教材raw、02_重點卡、03_題庫、04_模擬考、05_錯題本，檔名含科目與考試日期。當範圍清單能在一頁內說清「考什麼／先讀什麼／怎麼考」，你才算開始有效複習，而不是焦慮性重讀。",
    "enConcept": "Build an exam-scope checklist and material priority order from syllabus, lectures, slides, and past papers. Convert PDFs/notes into must-know cards with provenance. AI may classify but must not invent syllabus content.",
    "zhCaseStudy": "完整大學生案例：統計學大二的阿哲期末考範圍寫「Ch.6-10，著重假設檢定與回歸，可帶公式紙」。他以前整本重讀，分數不穩定。這次他先做範圍清單：必考=假設檢定步驟、p-value 解釋、簡單回歸假設；次要=進階診斷圖；低頻=課本延伸閱讀。他用 NotebookLM 上傳講義與自己筆記，只問「依我上傳來源列出必考概念與頁碼，不足請標未提供」，再對照老師上課口頭「回歸一定會考解釋係數」。他又掃兩份小考，發現選擇題愛考前提條件。範圍清單加上「可能考法：前提缺一會怎樣」。之後兩週他只依優先序推進，不再從第一章焦慮重讀。期末選擇與計算都明顯回穩，他說關鍵是「終於知道先讀什麼」。",
    "enCaseStudy": "Stats student A-Zhe replaced full-book rereading with a scoped must-know list grounded in uploaded notes and quiz patterns, then improved.",
    "zhWorkflow": [
      "收集考試說明、口頭提示、指定章節與考古題",
      "拆成範圍條目：內容／題型／工具／禁令",
      "建立教材優先序並標必考／次要／低頻",
      "把 PDF／簡報／筆記轉成四欄重點卡（含頁碼）",
      "請 AI 去重分類但禁止捏造；輸出複習入口包"
    ],
    "enWorkflow": [
      "Gather syllabus, hints, chapters, past papers",
      "Split into scope items: content/types/tools/constraints",
      "Rank materials and label must/secondary/low",
      "Convert notes/PDFs into four-field cards with page refs",
      "Ask AI to classify without inventing; export a review entry pack"
    ],
    "zhCommonMistakes": [
      "忽略老師口頭提示，只看目錄",
      "讓 AI 發明範圍外章節",
      "整份長摘要取代可檢查清單",
      "平均用力，沒有教材優先序"
    ],
    "enCommonMistakes": [
      "Ignoring oral hints",
      "Letting AI invent out-of-scope chapters",
      "Long summaries instead of checklists",
      "Equal effort with no priority"
    ],
    "zhExcellentExample": "優秀範圍包：一頁清單含必考／次要／低頻、教材優先序、題型預測欄、頁碼可回查、並註明資料不足處。",
    "enExcellentExample": "A strong pack has must/secondary/low items, material priority, likely item types, page refs, and explicit gaps.",
    "zhPrompt": "【Prompt 1｜考試範圍拆解（禁止捏造教材）】\n請擔任大學考試教練。以下是我提供的考試說明／講義目錄／筆記摘錄：\n（貼上，可分段）\n請輸出「考試範圍清單」，欄位：條目、來源（頁碼／投影片／口頭提示）、題型可能、優先級（必考／次要／低頻）、仍待確認。\n規則：只能根據我提供的內容整理；若資訊不足，明確寫「資訊不足：…」並列出我要回教材確認的問題。禁止新增我沒提供的章節、定義或必考宣稱。",
    "enPrompt": "[Prompt 1 | Scope Decoder] Build a scope checklist only from my materials; mark gaps explicitly; never invent chapters or must-know claims.",
    "zhCoachPrompt": "【Prompt 2｜教材優先序與必考判斷】\n考試形式：［選擇／申論／計算／口試］；時長：［ ］\n我的範圍清單草稿：\n（貼上）\n老師提示：\n（貼上）\n歷屆／小考題型觀察：\n（貼上）\n請排出教材閱讀優先序（高→低），並解釋每個必考條目的判斷訊號。若題型觀察與範圍衝突，指出風險。資料不足處請標示，不要腦補老師沒說的比重。",
    "enCoachPrompt": "[Prompt 2 | Material Priority] Rank study order and justify must-know labels from my hints and item-type observations; mark insufficient info.",
    "zhFeedbackPrompt": "【Prompt 3｜範圍清單驗收】\n原始材料摘要：\n（貼上）\n我的最終範圍清單：\n（貼上）\n請檢查：是否漏掉形式／工具限制？是否把推斷誤標成必考？是否有不可回查的條目？給 1-10 分、三個風險、三個立刻修正。不要替我發明新範圍。",
    "enFeedbackPrompt": "[Prompt 3 | Scope QA] Check misses, false must-know labels, and untraceable items; score and fix without inventing scope.",
    "zhExample": "條目：單一樣本 t 檢定步驟｜來源：講義 p.12-15＋老師口頭「步驟一定考」｜題型：計算＋選擇前提｜優先：必考｜待確認：是否開放公式紙含臨界值表。",
    "enExample": "A must-know t-test steps item with page refs, likely item types, and one confirmation gap about formula sheets.",
    "zhPractice": "為一科真實考試建立範圍來源包。；完成必考／次要／低頻清單與教材優先序。；把兩份 PDF／簡報轉成四欄重點卡。；Challenge：用一頁範圍清單向同學講解「這科先讀什麼、為什麼」，並依對方追問補上待確認項。",
    "enPractice": "Build a real exam scope pack.；Finish must/secondary/low + priorities.；Convert two PDFs/decks into cards.；Challenge: teach your one-page scope list and capture follow-up gaps.",
    "zhQuizItems": [
      {
        "q": "整理考試範圍時，最優先對齊的通常是？",
        "options": [
          "把整本課本從第一頁讀到最後",
          "考試說明、老師提示、指定章節與題型形式",
          "只看同學整理的未核對摘要",
          "只收藏更多 PDF 不拆解"
        ],
        "answer": 1,
        "explain": "先對齊官方範圍與提示，才不會用錯力氣。"
      },
      {
        "q": "請 AI 整理必考重點時，正確規則是？",
        "options": [
          "允許 AI 自行添加看起來重要的章節",
          "只能依你提供來源整理，不足要明確標示",
          "AI 說必考就一定會考",
          "只要摘要很長就代表完整"
        ],
        "answer": 1,
        "explain": "禁止捏造教材；資訊不足必須說清楚。"
      },
      {
        "q": "教材優先序較合理的起點通常是？",
        "options": [
          "先讀全部補充論文",
          "老師講義與課堂強調，再才是延伸閱讀",
          "先背目錄頁碼",
          "先做無關趣聞閃卡"
        ],
        "answer": 1,
        "explain": "高訊號教材先覆蓋，補充材料後進。"
      }
    ],
    "enQuizItems": [
      {
        "q": "When mapping exam scope, align first to:",
        "options": [
          "Rereading the whole textbook from page one",
          "Exam instructions, instructor hints, assigned chapters, and item formats",
          "Unchecked classmate summaries only",
          "Collecting more PDFs without decoding"
        ],
        "answer": 1,
        "explain": "Official scope and hints come first."
      },
      {
        "q": "Correct rule when asking AI to extract must-knows:",
        "options": [
          "Let AI add plausible chapters",
          "Use only your sources and mark gaps explicitly",
          "Whatever AI calls must-know will appear",
          "Longer summaries equal completeness"
        ],
        "answer": 1,
        "explain": "No invented syllabus; gaps must be stated."
      },
      {
        "q": "A sensible material priority usually starts with:",
        "options": [
          "All supplemental papers first",
          "Lecture notes and in-class emphasis before extras",
          "Memorizing the table of contents only",
          "Trivia flashcards first"
        ],
        "answer": 1,
        "explain": "High-signal materials first."
      }
    ],
    "zhNotePrompt": "貼上你的必考清單前 10 項，並寫下仍待向老師／助教確認的 3 件事。",
    "enNotePrompt": "Paste your top 10 must-know items and 3 confirmations still needed.",
    "zhDeliverableChecklist": [
      "完成考試範圍清單",
      "標註必考／次要／低頻",
      "教材優先序已排出",
      "重點卡含頁碼可回查",
      "資料不足處已明示"
    ],
    "enDeliverableChecklist": [
      "Scope list done",
      "Must/secondary/low labeled",
      "Material priority set",
      "Cards have page refs",
      "Gaps explicitly marked"
    ],
    "zhScorecard": [
      "範圍對齊",
      "優先序",
      "可回查",
      "題型意識",
      "無捏造"
    ],
    "enScorecard": [
      "Scope alignment",
      "Priority",
      "Traceability",
      "Item-type awareness",
      "No invention"
    ],
    "resources": [
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "上傳講義／筆記做 grounded 範圍整理"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "在禁止捏造約束下做分類與去重"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "建立考試資料夾與版本管理"
      },
      {
        "name": "Anki",
        "url": "https://apps.ankiweb.net",
        "note": "後續把必考定義轉成間隔重複卡片"
      }
    ],
    "challenge": "選一科兩週內的真實考試，產出一頁範圍清單＋教材優先序；用它刪掉你原本計畫中至少 20% 的低價值重讀內容，並記錄刪除清單。"
  },
  {
    "icon": "🗂️",
    "title": "AI 建立個人化題庫",
    "description": "依範圍清單建立選擇／是非／填充／申論／計算題庫，含難度、學習目標、答案與解析，並防止錯題污染。",
    "goal": "我的個人化題庫 v1（多題型＋難度＋解析＋來源對應）",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "題庫",
      "出題",
      "難度分級",
      "Chapter6"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 5,
    "chapterZh": "AI 考試與複習系統",
    "chapterEn": "AI Exam and Review System",
    "zhTitle": "第27課：AI 建立個人化題庫",
    "enTitle": "Lesson 27: Build a Personalized Question Bank with AI",
    "zhValueTip": "依範圍清單建立選擇／是非／填充／申論／計算題庫，含難度、學習目標、答案與解析，並防止錯題污染。",
    "enValueTip": "Build a multi-format bank mapped to scope, with difficulty, objectives, answers/explanations, and anti-hallucination checks.",
    "zhOutcome": "我的個人化題庫 v1（多題型＋難度＋解析＋來源對應）",
    "enOutcome": "My Personalized Question Bank v1 (multi-type + difficulty + explanations + source map)",
    "zhConcept": "題庫是複習系統的引擎：沒有題目，就容易陷入「只閱讀、以為自己會」的假學習。個人化題庫要對應第26課範圍清單與學習目標，而不是隨機請 AI 出一百題。每題至少標：題型、難度、對應概念／目標、答案、解析、來源頁碼。題型配置：選擇題測辨識與易混淆點；是非題測絕對化語句；填充題測關鍵定義與公式條件；申論題測解釋與比較；計算題測步驟與條件判斷。難度分級可用：基礎（定義／一步）、中階（兩概念結合）、進階（多條件或易陷阱）。先確保必考概念每項至少 2 題，再加深。答案與解析必須可教自己：不只給正確選項，要寫為何對、 distractors 為何錯、計算關鍵步驟。避免 AI 錯誤題目：要求只根據你貼上的教材出題；公式與數字必須能回查；出完後抽樣核對。若 AI 無法從材料找到依據，應拒絕出題並說明資訊不足。預測老師風格時，只能基於你提供的小考／口頭提示／作業風格描述，不可臆造「老師一定會這樣」。題庫存放可用試算表或 Notion／Drive：便于第28課抽題組卷。Anki／Quizlet 適合定義與短答；完整模擬更適合 Forms。品質門檻：題幹清楚、單一焦點、不超綱、解析可讀、來源可追溯。寧願 30 題高品質，也不要 200 題髒題。也要把申論題的評分要點（rubric bullets）寫進解析，方便第28課自動批改提示與第29課錯因分析。建立題庫是主動回憶的起點；下一課才談限時與組卷。沒有乾淨題庫，模擬考只會測驗噪音。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。當範圍、題庫、模擬、錯題與衝刺能串成一條流水線，你換科目也能複製，這才是考試系統課的目標。也請在考後回收真題錯因，回寫範圍清單與題庫標籤，讓系統持續迭代而不是每次從零焦慮。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。",
    "enConcept": "Build a source-grounded multi-type bank mapped to learning objectives with difficulty, answers, and explanations. Reject AI items that lack support in your materials.",
    "zhCaseStudy": "情境案例：會計系小瑜以前存了 AI 產生的 120 題，結果有 15 題答案互打架，越練越錯。她重來：只對必考 12 個概念各出選擇2＋計算1，全部要求附講義頁碼；申論 4 題附評分要點。她用抽樣法請同學對答案，刪掉 6 題不合格。題庫雖剩 40 題，模擬考分數反而可比、可解釋。",
    "enCaseStudy": "Xiao Yu replaced a polluted 120-item AI dump with 40 verified, page-linked items and got interpretable practice.",
    "zhWorkflow": [
      "從範圍清單列出學習目標與題型需求",
      "分批請 AI 出題（禁超綱、必標來源）",
      "人工／互評抽樣核對答案與公式",
      "補齊難度、解析、評分要點",
      "匯出題庫表，準備組卷欄位"
    ],
    "enWorkflow": [
      "List objectives and needed item types from scope",
      "Generate in batches with no-out-of-scope rules",
      "Spot-check answers and formulas",
      "Add difficulty, explanations, rubric bullets",
      "Export a bank table ready for paper assembly"
    ],
    "zhCommonMistakes": [
      "一次狂出超綱髒題",
      "沒有解析與來源",
      "只有選擇題，申論／計算空白",
      "不核對就當標準答案"
    ],
    "enCommonMistakes": [
      "Mass out-of-scope junk items",
      "No explanations or sources",
      "MCQ-only banks",
      "Treating unchecked AI keys as truth"
    ],
    "zhExcellentExample": "優秀題庫：多題型齊備、每題對應目標與頁碼、難度標示、解析含錯誤選項說明、抽樣核對紀錄。",
    "enExcellentExample": "A strong bank is multi-type, objective-mapped, page-linked, difficulty-tagged, explained, and spot-checked.",
    "zhPrompt": "【Prompt 1｜依教材建立題庫（多題型）】\n學習目標／必考概念：\n（貼上）\n教材摘錄（含頁碼）：\n（貼上）\n請出題：選擇題4、是非題2、填充題2、申論題2、計算題2。每題含：題幹、答案、解析、難度、對應概念、來源頁碼。\n規則：只能依據摘錄；若無法從材料出某題型，說明資訊不足並少出，禁止捏造公式、數據或課外內容。",
    "enPrompt": "[Prompt 1 | Multi-type Bank from Sources] Create mixed items with answers/explanations/difficulty/objective/page. No invention; mark insufficient info.",
    "zhCoachPrompt": "【Prompt 2｜依老師風格調整題型比例（需依據）】\n我觀察到的老師／小考風格：\n（貼上事實描述）\n目前題庫統計：\n（貼上）\n請建議題型與難度比例，並說明依據來自我提供的哪些觀察。若觀察不足以預測，明確說「不足以預測」，改給通用均衡比例，不要臆造老師偏好。",
    "enCoachPrompt": "[Prompt 2 | Style-based Mix] Recommend type/difficulty mix only from my stated observations; otherwise say insufficient and give a balanced default.",
    "zhFeedbackPrompt": "【Prompt 3｜題品質檢核】\n教材摘錄：\n（貼上）\n題目：\n（貼上）\n請檢查每題：是否超綱、答案是否可由材料支持、題幹是否歧義、解析是否足夠。輸出：保留／修改／刪除，並給修改後版本。不要為了湊數而放行錯題。",
    "enFeedbackPrompt": "[Prompt 3 | Item QA] Keep/fix/delete each item against my sources; fix ambiguity; do not keep unsupported keys.",
    "zhExample": "選擇題｜中階｜概念：第一型錯誤｜來源：p.22｜解析：說明為何「接受 H0」表述不精確……\n計算題｜進階｜概念：回歸斜率檢驗｜步驟要點：假設→統計量→決策→解釋。",
    "enExample": "An MCQ on Type I error and a calculation item on slope testing, each mapped to a page and explained.",
    "zhPractice": "為至少 8 個必考概念建立多題型題目。；完成難度與解析欄。；抽樣核對並刪改不合格題。；Challenge：請同學做 5 題並對你的解析提出質疑；你必須能指回教材原文。",
    "enPractice": "Write multi-type items for ≥8 must-knows.；Add difficulty and explanations.；Spot-check.；Challenge: peer-test 5 items and defend keys from the source text.",
    "zhQuizItems": [
      {
        "q": "個人化題庫最應對齊的是？",
        "options": [
          "網路上最熱門的題目",
          "自己的考試範圍與學習目標",
          "越難越好的競賽題",
          "只有AI喜歡的開放聊天"
        ],
        "answer": 1,
        "explain": "題庫要服務你的考試範圍與目標。"
      },
      {
        "q": "避免 AI 產生錯誤題目的關鍵做法是？",
        "options": [
          "一次生成越多越好不檢查",
          "要求依教材出題並抽樣核對，不足則少出",
          "全部相信解析語氣堅定的題",
          "刪除所有答案只留題幹"
        ],
        "answer": 1,
        "explain": "來源約束＋核對才能防髒題。"
      },
      {
        "q": "申論題解析較應包含？",
        "options": [
          "只有「答完就好」",
          "評分要點／論證結構提示與常見漏分",
          "與題目無關的笑話",
          "未讀過的假文獻列表"
        ],
        "answer": 1,
        "explain": "申論解析要能指導作答與自評。"
      }
    ],
    "enQuizItems": [
      {
        "q": "A personalized bank should align to:",
        "options": [
          "Whatever is trending online",
          "Your exam scope and learning objectives",
          "Only olympiad-hard items",
          "Open chat with no goals"
        ],
        "answer": 1,
        "explain": "Banks serve your scope and objectives."
      },
      {
        "q": "Best way to avoid bad AI items:",
        "options": [
          "Generate massively without checks",
          "Ground in materials, spot-check, and under-generate when info is missing",
          "Trust confident tone",
          "Delete all answers"
        ],
        "answer": 1,
        "explain": "Grounding plus verification prevents pollution."
      },
      {
        "q": "Essay-item explanations should include:",
        "options": [
          "Just “finish writing”",
          "Rubric points, structure hints, and common misses",
          "Unrelated jokes",
          "Fake unread citations"
        ],
        "answer": 1,
        "explain": "Essay keys need self-grading guidance."
      }
    ],
    "zhNotePrompt": "貼上題庫統計（題型×難度）與你刪除的 3 題原因。",
    "enNotePrompt": "Paste type×difficulty counts and reasons for 3 deleted items.",
    "zhDeliverableChecklist": [
      "多題型題目齊備",
      "每題含答案與解析",
      "難度與目標已標",
      "來源頁碼可回查",
      "完成抽樣核對紀錄"
    ],
    "enDeliverableChecklist": [
      "Multi-type coverage",
      "Answers + explanations",
      "Difficulty + objectives tagged",
      "Page sources present",
      "Spot-check log done"
    ],
    "zhScorecard": [
      "對應範圍",
      "題型完整",
      "解析品質",
      "無超綱",
      "可組卷"
    ],
    "enScorecard": [
      "Scope fit",
      "Type coverage",
      "Explanation quality",
      "In-syllabus",
      "Paper-ready"
    ],
    "resources": [
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "依教材批次出題與寫解析"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "對上傳講義做 grounded 出題"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "存放題庫試算表與版本"
      },
      {
        "name": "Quizlet",
        "url": "https://quizlet.com",
        "note": "短定義／填充類練習"
      },
      {
        "name": "Anki",
        "url": "https://apps.ankiweb.net",
        "note": "必考定義與公式條件卡片"
      }
    ],
    "challenge": "建立至少 30 題通過核對的個人題庫（含選擇、申論、計算至少各 3 題），並匯出可被第28課組卷的表格。"
  },
  {
    "icon": "⏱️",
    "title": "AI 模擬考與即時測驗",
    "description": "用題庫設計限時模擬考、比例抽題與自動批改分析，並進行口試模擬。",
    "goal": "我的限時模擬考一卷＋成績分析表＋口試模擬紀錄",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "模擬考",
      "限時測驗",
      "口試模擬",
      "Chapter6"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 5,
    "chapterZh": "AI 考試與複習系統",
    "chapterEn": "AI Exam and Review System",
    "zhTitle": "第28課：AI 模擬考與即時測驗",
    "enTitle": "Lesson 28: AI Mock Exams and Live Drills",
    "zhValueTip": "用題庫設計限時模擬考、比例抽題與自動批改分析，並進行口試模擬。",
    "enValueTip": "Design timed mock exams with mixed draws, auto-grading analytics, and oral-defense simulations from your bank.",
    "zhOutcome": "我的限時模擬考一卷＋成績分析表＋口試模擬紀錄",
    "enOutcome": "My Timed Mock Exam + Score Analytics + Oral Mock Log",
    "zhConcept": "模擬考的目的是測量與曝光弱點，不是追求當下高分感覺。設計要靠近真實：時長、題型比例、可否查資料、答題媒介。從第27課題庫設定比例，例如選擇40%、計算40%、申論20%；再依難度抽題（基礎：中階：進階＝3:5:2 可調）。可用隨機抽題避免只會熟題。限時測驗強迫提取（主動回憶）。即時小測（10-15分鐘）適合日常；完整模擬考適合週末或考前節點。自動批改：選擇／是非可對答案；計算可核對關鍵步驟與最終解；申論用你提供的評分要點讓 AI 當助教給分，但仍要抽樣人工看。成績分析至少看：總分、分題型、分概念、耗時、空題。把錯題匯出給第29課，不要只看分數情緒。口試模擬：讓 AI 扮演口試老師，依你的範圍清單追問定義、推導直覺、限制條件。你練習重述問題與短答結構。工具上，Google Forms／Microsoft Forms／Kahoot 適合限時與自動統計；ChatGPT／NotebookLM 適合組卷說明與口試；Drive 存卷與分析。組卷時禁止臨場讓 AI 現編未核對新題混入正卷；模擬考題必須來自已核對題庫，否則成績不可解釋。考後立刻標記：會且穩、會但不穩、不會。這比只寫分數更能導向複習。若多科並行，模擬考日曆要錯開高負荷，避免同一天兩場全長模考導致无效疲勞。模擬是為了讓第30課衝刺計畫有數據，而不是收穫焦慮。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。當範圍、題庫、模擬、錯題與衝刺能串成一條流水線，你換科目也能複製，這才是考試系統課的目標。也請在考後回收真題錯因，回寫範圍清單與題庫標籤，讓系統持續迭代而不是每次從零焦慮。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。當範圍、題庫、模擬、錯題與衝刺能串成一條流水線，你換科目也能複製，這才是考試系統課的目標。也請在考後回收真題錯因，回寫範圍清單與題庫標籤，讓系統持續迭代而不是每次從零焦慮。",
    "enConcept": "Assemble timed mocks from a verified bank with realistic mixes, grade what can be auto-scored, analyze by type/concept, and run oral mocks. Do not inject unchecked new items into the scored paper.",
    "zhCaseStudy": "情境案例：經濟系小愷每次都「看筆記覺得會」，一上考場就空白。他用 Forms 做 50 分鐘模擬考，比例對齊老師小考，隨機抽題。第一卷 58 分，分析顯示計算耗時爆表、申論缺定義。口試模擬又暴露他說不清「機會成本」。兩週後第三卷到 78，他終於相信練習＞重讀。",
    "enCaseStudy": "Xiao Kai replaced passive rereading with timed Forms mocks and oral drills; scores and explanations improved.",
    "zhWorkflow": [
      "設定模擬考規格：時長、比例、難度、規則",
      "從已核對題庫抽題組卷",
      "用 Forms／紙本限時作答",
      "自動批改＋申論要點評分，產出分析表",
      "進行口試模擬並記錄追問"
    ],
    "enWorkflow": [
      "Set mock specs: time, mix, difficulty, rules",
      "Draw only from the verified bank",
      "Take it timed in Forms or on paper",
      "Auto-grade + rubric essay scoring; build analytics",
      "Run an oral mock and log follow-ups"
    ],
    "zhCommonMistakes": [
      "不限時的假模擬",
      "用未核對新題當正卷",
      "只看分數不做分析",
      "從不練習口頭解釋"
    ],
    "enCommonMistakes": [
      "Untimed fake mocks",
      "Unchecked items on the scored paper",
      "Score-only review",
      "Never practicing oral explanation"
    ],
    "zhExcellentExample": "優秀模擬：規格接近真考、題目皆核對、有分概念分析、口試紀錄與錯題匯出完整。",
    "enExcellentExample": "A strong mock mirrors the real exam, uses verified items, includes concept analytics, oral logs, and exportable misses.",
    "zhPrompt": "【Prompt 1｜限時模擬考組卷器】\n考試規格：時長［ ］；題型比例［ ］；難度比例［ ］\n題庫（含題號／題型／難度／概念）：\n（貼上或摘要）\n請提出抽題清單（題號）與作答時間配置，並給考生指令（何可參考、如何計分）。\n規則：只能從題庫抽；題庫不足某比例時說明資訊不足，不要現編未核對新題充數。",
    "enPrompt": "[Prompt 1 | Timed Mock Assembler] Propose an item draw and timing from my bank only; if coverage is insufficient, say so—do not invent items.",
    "zhCoachPrompt": "【Prompt 2｜自動批改與成績分析】\n標準答案／評分要點：\n（貼上）\n我的作答：\n（貼上）\n請批改並輸出：每題得分、錯因初判、分題型與分概念統計、耗時建議、下一步練習優先序。申論題依要點給分；若我的答案資訊不足以判斷，標「待人工複核」，不要硬給滿分或零分臆測細節。",
    "enCoachPrompt": "[Prompt 2 | Auto-grade + Analytics] Score against keys/rubrics, summarize by type/concept, and mark uncertain essay judgments for human review.",
    "zhFeedbackPrompt": "【Prompt 3｜一對一口試模擬】\n請扮演口試老師。我的範圍清單：\n（貼上）\n一次只問一題，等我回答後再追問。禁止超出清單捏造我沒學的理論當必答。若我要求結束，給表現評語：清楚度、正確性、結構、需回題庫補強的概念。",
    "enFeedbackPrompt": "[Prompt 3 | 1:1 Oral Mock] Ask one in-scope question at a time, follow up, and debrief; do not invent out-of-scope required theory.",
    "zhExample": "規格：60分、選擇8／計算3／申論1。抽題後 Forms 限時。分析：計算概念「假設檢定決策」正確率40%，列為第29課優先。",
    "enExample": "A 60-minute mixed mock in Forms reveals a weak hypothesis-decision concept for Lesson 29.",
    "zhPractice": "設計並完成一場限時模擬考。；產出成績分析表。；完成一輪口試模擬。；Challenge：隔日用不同隨機種子再抽一卷短模考（25分鐘），比較兩次弱點是否重疊。",
    "enPractice": "Run one full timed mock.；Build analytics.；Do an oral mock.；Challenge: a second short random mock next day; compare overlapping weaknesses.",
    "zhQuizItems": [
      {
        "q": "模擬考題目來源較正確的是？",
        "options": [
          "現場讓 AI 現編未核對題充數",
          "從已核對個人題庫依比例抽題",
          "只做自己會的熟題",
          "完全不限時翻筆記"
        ],
        "answer": 1,
        "explain": "可解釋的成績來自乾淨題庫。"
      },
      {
        "q": "模擬考後最有價值的輸出通常是？",
        "options": [
          "只有一個總分數字",
          "分題型／分概念分析與錯題清單",
          "刪光所有錯題假裝沒發生",
          "立刻換科目逃避"
        ],
        "answer": 1,
        "explain": "分析與錯題才導向補強。"
      },
      {
        "q": "口試模擬時 AI 應遵守？",
        "options": [
          "可任意考範圍外偏題並要求你編造",
          "依範圍清單提問，不足則不強行捏造必答內容",
          "替你回答所有問題",
          "只聊天不提問"
        ],
        "answer": 1,
        "explain": "口試模擬也要防超綱與捏造。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best source for mock exam items:",
        "options": [
          "Unverified AI items invented on the spot",
          "Draws from your verified personal bank",
          "Only items you already know",
          "Untimed note flipping"
        ],
        "answer": 1,
        "explain": "Clean banks make scores interpretable."
      },
      {
        "q": "Most valuable mock output is usually:",
        "options": [
          "A single total score",
          "Type/concept analytics and a miss list",
          "Deleting all misses",
          "Switching subjects to avoid review"
        ],
        "answer": 1,
        "explain": "Analytics drive remediation."
      },
      {
        "q": "In oral mocks, AI should:",
        "options": [
          "Force out-of-scope invention",
          "Ask from your scope list and avoid fabricating required content",
          "Answer for you",
          "Only chat"
        ],
        "answer": 1,
        "explain": "Stay in-scope; no fabricated demands."
      }
    ],
    "zhNotePrompt": "貼上本卷分概念正確率最低的三項，以及口試中答不好的兩題。",
    "enNotePrompt": "Paste your three weakest concepts by accuracy and two weak oral questions.",
    "zhDeliverableChecklist": [
      "完成限時模擬考一卷",
      "題目皆來自核對題庫",
      "成績分析表完成",
      "錯題已匯出",
      "口試模擬有紀錄"
    ],
    "enDeliverableChecklist": [
      "Timed mock completed",
      "Items from verified bank",
      "Analytics done",
      "Misses exported",
      "Oral mock logged"
    ],
    "zhScorecard": [
      "規格仿真",
      "抽題品質",
      "限時執行",
      "分析完整",
      "口試壓力"
    ],
    "enScorecard": [
      "Realism",
      "Draw quality",
      "Timed execution",
      "Analytics",
      "Oral pressure"
    ],
    "resources": [
      {
        "name": "Google Forms",
        "url": "https://forms.google.com",
        "note": "限時測驗與自動統計"
      },
      {
        "name": "Microsoft Forms",
        "url": "https://forms.microsoft.com",
        "note": "替代／學校帳號常可用"
      },
      {
        "name": "Kahoot",
        "url": "https://kahoot.com",
        "note": "短時即時競賽型複習"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "組卷、批改輔助與口試模擬"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "存模擬卷與分析表"
      }
    ],
    "challenge": "完成一場對齊真考時長至少 70% 的模擬考，並在交卷後 30 分鐘內產出分析表與錯題清單交給第29課使用。"
  },
  {
    "icon": "🔬",
    "title": "AI 錯題分析與觀念補強",
    "description": "把錯題分成觀念／粗心／題意誤解，建立錯題本與補強流程，並用新題驗證是否真的會。",
    "goal": "我的錯題本＋弱點分析＋補強後驗證紀錄",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "中階",
    "tags": [
      "錯題本",
      "弱點分析",
      "觀念補強",
      "Chapter6"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 5,
    "chapterZh": "AI 考試與複習系統",
    "chapterEn": "AI Exam and Review System",
    "zhTitle": "第29課：AI 錯題分析與觀念補強",
    "enTitle": "Lesson 29: Error Analysis and Concept Repair",
    "zhValueTip": "把錯題分成觀念／粗心／題意誤解，建立錯題本與補強流程，並用新題驗證是否真的會。",
    "enValueTip": "Classify misses as concept, carelessness, or prompt-misread; build an error log and verify repair with new items.",
    "zhOutcome": "我的錯題本＋弱點分析＋補強後驗證紀錄",
    "enOutcome": "My Error Log + Weakness Map + Post-Repair Verification Record",
    "zhConcept": "錯題若只對答案不分類，下次還會原樣錯。這一課建立錯題本與個人化弱點分析。錯誤原因至少分三類：觀念錯誤（不會／混淆）、粗心錯誤（會但執行失手）、題意理解錯誤（看错條件／漏關鍵字）。可再加：公式記憶、步驟跳步、時間壓力。分類方法：先蓋住解析，重做一次；若重做對且能解釋→偏粗心或題意；若仍錯或解釋卡關→觀念。AI 可協助提問診斷，但最終分類你要同意。觀念補強流程：回到來源頁重讀最小必要→用自己的話寫定義／步驟→做 2-3 題同概念新題驗證→通過才標記「已補強」。重新出題驗證很關鍵：只看解析覺得懂不算數。請 AI 依同一概念出新題時，仍須來源約束與你核對。錯題追蹤欄位：題號、概念、錯因、補正筆記、驗證題結果、下次複習日。Anki 可把「易混對」做成對比卡。個人化弱點分析看頻率與致命度：高頻觀念錯優先；會導致整題崩盤的步驟錯次之；偶發粗心用檢查清單處理，不必重學整章。粗心對策：單位、正負號、題目條件清單、計算題先寫已知。題意誤解對策：先劃條件再動筆，申論先重述問題。避免羞辱式複習（狂抄錯題）。重點是可執行的修復與驗證閉環，讓第30課衝刺有清單可攻。把口試中答不好的題也當作錯題入冊，口頭弱點與筆試弱點常重疊。當弱點地圖能指出「先修哪三個概念」，複習就從情緒轉向工程。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。當範圍、題庫、模擬、錯題與衝刺能串成一條流水線，你換科目也能複製，這才是考試系統課的目標。也請在考後回收真題錯因，回寫範圍清單與題庫標籤，讓系統持續迭代而不是每次從零焦慮。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。當範圍、題庫、模擬、錯題與衝刺能串成一條流水線，你換科目也能複製，這才是考試系統課的目標。也請在考後回收真題錯因，回寫範圍清單與題庫標籤，讓系統持續迭代而不是每次從零焦慮。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。",
    "enConcept": "Classify errors, repair the smallest necessary concept, and verify with new items. Track an error log and prioritize by frequency and severity.",
    "zhCaseStudy": "情境案例：物理系小禾模擬考錯 12 題，全當成「我好爛」重讀整章，效率極低。改用分類後發現 5 題粗心、4 題題意、3 題觀念。她只重點補強 3 個觀念並做驗證題，粗心改用單位檢查表。下一卷同類錯大幅下降。她說：「原來不是整科不會，是修復點找錯。」",
    "enCaseStudy": "Xiao He stopped rereading whole chapters after classifying misses; targeted repair beat shame-driven review.",
    "zhWorkflow": [
      "匯入模擬考錯題並嘗試盲着重做",
      "標註錯因類別與概念標籤",
      "對觀念錯做最小補強",
      "出新題驗證並更新錯題本",
      "產出弱點優先序給衝刺計畫"
    ],
    "enWorkflow": [
      "Import misses and blind-retry",
      "Tag error type and concept",
      "Do minimal concept repair",
      "Verify with new items; update the log",
      "Export weakness priorities for the sprint plan"
    ],
    "zhCommonMistakes": [
      "只對答案不分類",
      "看懂解析就當作已會",
      "所有錯都重讀整本書",
      "不追蹤驗證結果"
    ],
    "enCommonMistakes": [
      "Keys without classification",
      "Understanding the solution ≠ mastery",
      "Rereading everything for every miss",
      "No verification tracking"
    ],
    "zhExcellentExample": "優秀錯題本：每題有錯因、補正筆記、驗證題通過紀錄、弱點前三名清楚。",
    "enExcellentExample": "A strong log has error types, repair notes, verification passes, and a clear top-three weakness list.",
    "zhPrompt": "【Prompt 1｜錯題診斷分類器】\n題目：\n（貼上）\n我的錯誤作答：\n（貼上）\n正確解答／要點：\n（貼上）\n我的重做結果：［對／錯］與我的解釋：\n（貼上）\n請判斷最可能錯因（觀念／粗心／題意／其他），給證據，並提出最小補強行動。若資訊不足以分類，明確說明還需要我補充什麼，不要武斷。",
    "enPrompt": "[Prompt 1 | Error Classifier] Diagnose concept vs carelessness vs misread with evidence and a minimal repair action; ask for missing info if unsure.",
    "zhCoachPrompt": "【Prompt 2｜觀念補強＋驗證出題】\n薄弱概念：［ ］\n教材摘錄：\n（貼上）\n請：1) 用我能複述的方式重講 2) 給對比易混點 3) 依摘錄出 3 題驗證題（含答案解析）。\n禁止超出摘錄捏造內容；摘錄不足就停止出題並列出缺口。",
    "enCoachPrompt": "[Prompt 2 | Repair + Verification Items] Reteach from my excerpt, contrast confusions, and write 3 grounded verification items—or stop if excerpt is insufficient.",
    "zhFeedbackPrompt": "【Prompt 3｜弱點分析儀表板】\n錯題本彙整：\n（貼上統計或列表）\n請輸出：高頻弱點 Top5、建議修復順序、哪些屬檢查清單可解決、哪些需重學。給一週補強節奏。不要用羞辱語氣；不要發明我沒有的錯題。",
    "enFeedbackPrompt": "[Prompt 3 | Weakness Dashboard] From my error log, rank top weaknesses and a one-week repair rhythm without inventing misses.",
    "zhExample": "錯因：題意｜漏看「大樣本」條件→補正：題目條件檢查表→驗證：兩題變條件選擇皆過→狀態：已補強，下次複習+3天。",
    "enExample": "A misread of the large-sample condition fixed with a checklist and two verification MCQs marked repaired.",
    "zhPractice": "將最近一場模擬考錯題全部分類。；完成至少 3 個觀念的補強與驗證。；更新錯題本與弱點 Top5。；Challenge：隔天重測驗證題；若失敗，不得標記已會，需再補一輪。",
    "enPractice": "Classify all misses from the latest mock.；Repair and verify ≥3 concepts.；Update the log and top-5 weaknesses.；Challenge: retest next day; no false mastery marks.",
    "zhQuizItems": [
      {
        "q": "看完解析覺得懂了，下一步應？",
        "options": [
          "立刻標記永久學會並刪題",
          "用同概念新題驗證，通過才算補強完成",
          "同一題背答案即可",
          "放棄該章"
        ],
        "answer": 1,
        "explain": "驗證題才是真會的證據。"
      },
      {
        "q": "粗心錯誤較適合的處理是？",
        "options": [
          "把整本課本重讀三遍",
          "建立作答檢查清單並限時練習執行",
          "全部當觀念不會",
          "不再做計算題"
        ],
        "answer": 1,
        "explain": "粗心靠流程檢查，不必整章重學。"
      },
      {
        "q": "錯題本最關鍵的欄位之一是？",
        "options": [
          "只寫分數",
          "錯因分類與驗證結果",
          "同學的社交動態",
          "無關貼圖"
        ],
        "answer": 1,
        "explain": "沒有錯因與驗證就無法閉環。"
      }
    ],
    "enQuizItems": [
      {
        "q": "After a solution “makes sense,” you should:",
        "options": [
          "Mark permanent mastery and delete it",
          "Verify with new same-concept items before calling it repaired",
          "Only memorize the answer",
          "Drop the chapter"
        ],
        "answer": 1,
        "explain": "Verification proves learning."
      },
      {
        "q": "Careless errors are best handled by:",
        "options": [
          "Rereading the whole book thrice",
          "Checklists plus timed practice executing them",
          "Treating all as concept gaps",
          "Avoiding calculation forever"
        ],
        "answer": 1,
        "explain": "Process fixes carelessness."
      },
      {
        "q": "A critical error-log field is:",
        "options": [
          "Score only",
          "Error type and verification result",
          "Social feeds",
          "Random stickers"
        ],
        "answer": 1,
        "explain": "Type + verification close the loop."
      }
    ],
    "zhNotePrompt": "列出弱點 Top5 與各一項最小補強行動、驗證題結果。",
    "enNotePrompt": "List top-5 weaknesses with one minimal repair and verification result each.",
    "zhDeliverableChecklist": [
      "錯題全部分類",
      "錯題本欄位完整",
      "至少 3 概念完成驗證",
      "弱點 Top5 產出",
      "口試弱點一併入冊"
    ],
    "enDeliverableChecklist": [
      "All misses classified",
      "Error log fields complete",
      "≥3 concepts verified",
      "Top-5 weaknesses listed",
      "Oral misses included"
    ],
    "zhScorecard": [
      "分類準",
      "補強小而準",
      "有驗證",
      "可追蹤",
      "優先序清楚"
    ],
    "enScorecard": [
      "Classification",
      "Minimal repair",
      "Verification",
      "Tracking",
      "Clear priority"
    ],
    "resources": [
      {
        "name": "Anki",
        "url": "https://apps.ankiweb.net",
        "note": "易混概念對比卡與間隔複習"
      },
      {
        "name": "Quizlet",
        "url": "https://quizlet.com",
        "note": "短定義補強"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "錯因診斷與驗證出題"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "回到上傳教材做 grounded 重講"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "錯題本與驗證卷存檔"
      }
    ],
    "challenge": "把最近兩次練習的錯題建成錯題本，完成分類與至少一輪驗證；輸出給第30課使用的「衝刺優先弱點清單」。"
  },
  {
    "icon": "🚀",
    "title": "AI 考前衝刺與複習計畫",
    "description": "依剩餘天數制定 30／14／7／3／24小時計畫，結合間隔重複與最終模擬，完成可執行衝刺。",
    "goal": "我的考前衝刺計畫（含睡眠）＋最終模擬檢核表",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "中階",
    "tags": [
      "考前衝刺",
      "複習計畫",
      "間隔重複",
      "Chapter6"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 5,
    "chapterZh": "AI 考試與複習系統",
    "chapterEn": "AI Exam and Review System",
    "zhTitle": "第30課：AI 考前衝刺與複習計畫",
    "enTitle": "Lesson 30: Pre-Exam Sprint and Review Planning",
    "zhValueTip": "依剩餘天數制定 30／14／7／3／24小時計畫，結合間隔重複與最終模擬，完成可執行衝刺。",
    "enValueTip": "Build 30/14/7/3/24-hour plans with spaced repetition, sleep, and a final mock checklist.",
    "zhOutcome": "我的考前衝刺計畫（含睡眠）＋最終模擬檢核表",
    "enOutcome": "My Pre-Exam Sprint Plan (with sleep) + Final Mock Checklist",
    "zhConcept": "考前衝刺要把第26-29課收成時間盒：範圍清單決定讀什麼，題庫與模擬決定練什麼，錯題本決定修什麼。考前30天：建範圍、補齊題庫、每週至少一場分段測驗，開始 Anki／短卡片間隔重複；睡眠規律優於通宵。考前14天：完成一場接近真考的全長模擬；弱點 Top 進入每日必修；減少新進度，改為修補與練習。考前7天：每日「主動回憶區塊」＞閱讀；錯題本輪轉；短模考隔日一次；整理公式／定義一頁紙。考前3天：停擴綱；只打高頻弱點與易錯檢查清單；做最終模擬或半模考；提前摸清考場規則。考前24小時：輕量回顧一頁紙與錯題標記；準備文具／證件；提早睡。避免新題海造成失控焦慮。間隔重複與主動回憶：用題目提取，而不是反覆盯講義。Anki／Quizlet 管定義；Forms 管套題手感。不同科目策略：計算科重步驟限時；申論科重綱要口述；記憶科重對比卡；綜合科先弱點再混合卷。睡眠與休息是分數變數：睡眠剝奪會讓粗心暴增。計畫中要寫上床時間，不當空白。最終模擬檢核表：時長、題型比例、工具規則、分析完成、弱點已回流、考試日物資。請 AI 排程時必須輸入剩餘天數、科目數、弱點清單與可讀書時段；資料不足要它先問你，不可假造你有 10 小時空堂。Chapter 6 閉環：範圍→題庫→模擬→錯題→衝刺。考後把真考錯因再寫回錯題本，下學期系統更強。可執行計畫的特徵是日曆上有區塊，而不是「有空再讀」的願望句。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。當範圍、題庫、模擬、錯題與衝刺能串成一條流水線，你換科目也能複製，這才是考試系統課的目標。也請在考後回收真題錯因，回寫範圍清單與題庫標籤，讓系統持續迭代而不是每次從零焦慮。此外，請把本課產出分為 raw 與 final：raw 保留 AI 對話與草稿，final 是你核對後可進入下一課的版本，方便追溯。每次結束寫三行日誌：今天最有效的一步、仍卡住的點、明天第一個行動，並存進考試資料夾。若與同學交換題目，只分享已核對內容；不要傳播未經驗證的 AI 髒題當標準答案。",
    "enConcept": "Convert scope, bank, mocks, and error logs into day-count plans with spaced practice, sleep, subject-specific tactics, and a final mock checklist. AI scheduling must use your real constraints.",
    "zhCaseStudy": "情境案例：兩科同週的小恩以前兩科都開夜車，白天空白。她用 AI 依剩餘10天、弱點清單與課表排程：高能量時段給計算限時，低能量給定義卡；第-7/-3天各一場模考；考前一夜12點前睡。兩科皆過且計算科進步最大。她把「24小時不做新題海」寫進個人規章。",
    "enCaseStudy": "Xiao En used a constraint-based 10-day sprint with timed practice and protected sleep; both courses improved.",
    "zhWorkflow": [
      "匯入範圍／弱點／可讀書時段／剩餘天數",
      "生成 30/14/7/3/24h 對應計畫（依實際剩餘裁切）",
      "把主動回憶與睡眠寫進日曆",
      "安排最終模擬與檢核表",
      "執行並每日微調，不作無依據擴綱"
    ],
    "enWorkflow": [
      "Import scope, weaknesses, free blocks, days left",
      "Build plans for 30/14/7/3/24h scaled to reality",
      "Calendarize active recall and sleep",
      "Schedule final mock + checklist",
      "Execute with daily tweaks; no unjustified scope expansion"
    ],
    "zhCommonMistakes": [
      "只閱讀不練習",
      "考前24小時開新單元",
      "犧牲睡眠換假進度",
      "計畫沒有弱點優先序"
    ],
    "enCommonMistakes": [
      "Reading without practice",
      "Opening new units in the last 24 hours",
      "Trading sleep for fake progress",
      "Plans without weakness priority"
    ],
    "zhExcellentExample": "優秀衝刺計畫：依剩餘天數裁切、每日有練習塊、睡眠入表、最終模擬檢核可勾、弱點來源於錯題本。",
    "enExcellentExample": "A strong sprint is day-scaled, practice-heavy, sleep-scheduled, checklist-ready, and weakness-driven.",
    "zhPrompt": "【Prompt 1｜考前讀書進度規劃（需真實約束）】\n剩餘天數：［ ］；每日可讀時段：［ ］；科目：［ ］\n範圍清單摘要：\n（貼上）\n弱點 Top：\n（貼上）\n睡眠需求：［例如 7.5h］\n請排 日曆式計畫（含練習／錯題／模擬／休息）。若時段資訊不足，先列出要問我的問題，禁止假設我每天有空 10 小時。",
    "enPrompt": "[Prompt 1 | Sprint Scheduler] Build a calendar plan from my real hours and weaknesses; if constraints are missing, ask—do not assume 10 free hours.",
    "zhCoachPrompt": "【Prompt 2｜7天與24小時衝刺版型】\n我的弱點與必考清單：\n（貼上）\n請分別給「考前7天」與「考前24小時」兩套行程模板，強調主動回憶、停擴綱、睡眠。標註每段的目的。不要加入我未列的新章節。",
    "enCoachPrompt": "[Prompt 2 | 7-day & 24-hour Templates] Provide two templates emphasizing active recall, no expansion, and sleep—no new chapters beyond my list.",
    "zhFeedbackPrompt": "【Prompt 3｜最終模擬檢核與計畫驗收】\n我的衝刺計畫：\n（貼上）\n最終模擬檢核表：\n（貼上）\n請檢查：是否仍偏閱讀？睡眠是否入表？弱點是否排進高能量時段？24小時是否誤排新題海？給修改後的明日三行動。資訊不足處請標示。",
    "enFeedbackPrompt": "[Prompt 3 | Plan & Final-Mock Checklist QA] Flag passive-reading bias, missing sleep, weak priority placement, and last-day overload; give three next actions.",
    "zhExample": "D-7：全長模擬＋錯題分類；D-3：弱點驗證題＋一頁紙；D-1：輕量回顧＋23:30上床；考試日：物資檢核，不做新單元。",
    "enExample": "D-7 full mock, D-3 weakness verification + one-pager, D-1 light review and early sleep, exam day logistics only.",
    "zhPractice": "依真實剩餘天數裁切計畫。；排入最終模擬與睡眠。；完成檢核表。；Challenge：執行計畫中的「明日三行動」，並用一短模考或驗證題證明有練習而非只閱讀。",
    "enPractice": "Scale a plan to your real days left.；Schedule final mock and sleep.；Finish the checklist.；Challenge: execute tomorrow’s three actions with proof of practice, not only reading.",
    "zhQuizItems": [
      {
        "q": "考前複習較應優先的是？",
        "options": [
          "只反覆閱讀講義不練習",
          "主動回憶、錯題補強與仿真練習",
          "考前24小時開全新章節",
          "完全不睡以換進度"
        ],
        "answer": 1,
        "explain": "提取練習與弱點修復效率遠高於純閱讀。"
      },
      {
        "q": "考前24小時較合適的安排是？",
        "options": [
          "通宵刷大量未核對新題",
          "輕量回顧高頻點、準備物資並保證睡眠",
          "開始學範圍外進階理論",
          "刪除所有計畫隨意發揮"
        ],
        "answer": 1,
        "explain": "24小時以穩定與回收為主，不是擴綱。"
      },
      {
        "q": "請 AI 排衝刺計畫時最重要的輸入是？",
        "options": [
          "讓它假設你每天有無限時間",
          "真實剩餘天數、可讀時段、弱點與範圍",
          "只給科目名稱即可",
          "要求它保證滿分"
        ],
        "answer": 1,
        "explain": "沒有真實約束的計畫不可執行。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Pre-exam review should prioritize:",
        "options": [
          "Rereading only",
          "Active recall, error repair, and realistic practice",
          "Brand-new chapters in the last 24 hours",
          "Skipping sleep for progress"
        ],
        "answer": 1,
        "explain": "Retrieval and repair beat passive reading."
      },
      {
        "q": "A sensible last-24-hours plan is:",
        "options": [
          "All-night unverified new drills",
          "Light high-yield review, logistics, and sleep",
          "Out-of-scope advanced theory",
          "Delete the plan and improvise"
        ],
        "answer": 1,
        "explain": "Stabilize and recover; do not expand."
      },
      {
        "q": "Most important inputs for an AI sprint plan:",
        "options": [
          "Assume infinite daily hours",
          "Real days left, free blocks, weaknesses, and scope",
          "Course name only",
          "Demand a perfect score guarantee"
        ],
        "answer": 1,
        "explain": "Real constraints make plans executable."
      }
    ],
    "zhNotePrompt": "貼上依你剩餘天數裁切後的計畫，以及最終模擬檢核表勾選狀況。",
    "enNotePrompt": "Paste your day-scaled plan and final-mock checklist status.",
    "zhDeliverableChecklist": [
      "完成天數裁切計畫",
      "含 7天／3天／24小時安排",
      "睡眠時間已寫入",
      "最終模擬檢核表完成",
      "弱點來自錯題本"
    ],
    "enDeliverableChecklist": [
      "Day-scaled plan done",
      "Includes 7/3/24h blocks",
      "Sleep scheduled",
      "Final mock checklist complete",
      "Weaknesses from error log"
    ],
    "zhScorecard": [
      "可執行",
      "練習導向",
      "弱點優先",
      "睡眠入表",
      "閉環完整"
    ],
    "enScorecard": [
      "Executable",
      "Practice-first",
      "Weakness-first",
      "Sleep included",
      "Loop closed"
    ],
    "resources": [
      {
        "name": "Anki",
        "url": "https://apps.ankiweb.net",
        "note": "間隔重複執行定義／公式卡"
      },
      {
        "name": "Quizlet",
        "url": "https://quizlet.com",
        "note": "短時主動回憶"
      },
      {
        "name": "Google Forms",
        "url": "https://forms.google.com",
        "note": "最終／短模擬考"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "依真實約束排程與檢核"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "衝刺計畫與一頁紙存檔"
      },
      {
        "name": "Kahoot",
        "url": "https://kahoot.com",
        "note": "小組短時喚醒複習（可選）"
      }
    ],
    "challenge": "為兩週內一場真實考試產出並執行至少 3 天的衝刺計畫（含一次限時練習與固定睡眠）；結束後寫下什麼有效、什麼要改。"
  },
  {
    "icon": "📖",
    "title": "AI 英文閱讀與文章理解",
    "description": "用 AI 做分級閱讀、抓主旨與觀點、拆長句與整理單字，但不直接翻譯全文取代理解。",
    "goal": "我的英文閱讀工作單（主旨／段落重點／長句拆解／單字表）",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "英文閱讀",
      "長句拆解",
      "分級解釋",
      "Chapter7"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 6,
    "chapterZh": "AI 英文學習系統",
    "chapterEn": "AI English Learning System",
    "zhTitle": "第31課：AI 英文閱讀與文章理解",
    "enTitle": "Lesson 31: AI English Reading and Comprehension",
    "zhValueTip": "用 AI 做分級閱讀、抓主旨與觀點、拆長句與整理單字，但不直接翻譯全文取代理解。",
    "enValueTip": "Use AI for leveled reading, main ideas, long-sentence parsing, and vocabulary—without replacing comprehension with full translation.",
    "zhOutcome": "我的英文閱讀工作單（主旨／段落重點／長句拆解／單字表）",
    "enOutcome": "My English Reading Worksheet (gist / paragraph points / sentence parse / vocab)",
    "zhConcept": "大學英文閱讀常卡在兩件事：一看到難字就整篇丟給翻譯、或逐字查到失去主軸。這一課建立「閱讀前—中—後」流程，讓 AI 當教練而不是代讀。閱讀前：先看標題、小標、首末段，預測主題與文類（新聞／教科書／論文摘要）。寫下你已知與想確認的問題。可請 AI 依你的程度給「讀前導讀」，但禁止它編造原文沒有的情節。閱讀中：分段抓主旨句與作者態度（支持／反對／中立／有所保留）。遇到長句先拆骨架：主詞—動詞—受詞／補語，再掛上關係子句與插入語。例：Although the sample was small, the authors argue that… → 讓步＋主張。閱讀後：用自己的話寫 3-5 句摘要、列出關鍵單字／片語（含搭配與例句）、標記仍不懂處。單字表要服務理解，不是無限收集。分級解釋：可要求 AI 用 CEFR B1／B2／C1 重述同一段，幫你搭鷹架；但重述必須標明「改寫自原文」，且你仍要回到原文核對。完整示範文章（節錄，可作練習）：\"Many university students believe that translating every sentence is the fastest way to finish assigned readings. However, this habit often prevents them from noticing the writer's main claim and the structure of the argument. A more effective approach is to identify the topic of each paragraph first, then study only the sentences that carry definitions, evidence, or contrast.\"示範任務：主旨≈「逐句翻譯不利抓主張；應先抓段落主題再精讀關鍵句」。單字：assigned readings / main claim / contrast。長句拆解第二句：However（轉折）＋ this habit（主詞）＋ prevents… from noticing…。AI 規則：不捏造段落；原文未給的細節要說資訊不足；不直接給全文中譯當唯一產出；要問你先嘗試再給提示。工具可搭配 Cambridge／Oxford 查詞、YouGlish 看搭配、BBC Learning English 做分級材料；ChatGPT／DeepL 只作輔助。當你能不靠全文翻譯說出主旨與作者觀點，才算真正讀懂，而不是「看過中文版」。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。",
    "enConcept": "Use a before-during-after reading workflow: preview, claim/attitude tracking, sentence parsing, leveled paraphrase, and a focused vocab list. AI must not invent content or replace reading with full translation.",
    "zhCaseStudy": "情境案例：企管系小安讀 Harvard Business Review 節錄，以前整篇貼進翻譯，考試問 “What is the author's main claim?” 答不出。她改用本課工作單：先預測、分段寫 paragraph point、兩句長句拆骨架、單字只留 8 個高頻學術詞。第二次小考她能用英文口述主旨。老師回饋 “You finally answered the claim, not the story.”",
    "enCaseStudy": "Xiao An stopped full-document translation, used a reading worksheet, and could finally state the author's claim.",
    "zhWorkflow": [
      "閱讀前：預覽標題與首末段，寫預測問題",
      "閱讀中：分段抓主旨／觀點，拆難句骨架",
      "請 AI 做分級解釋與提示，但不取代原文",
      "閱讀後：自寫摘要＋單字／片語表",
      "核對 AI 是否捏造，標記資訊不足處"
    ],
    "enWorkflow": [
      "Preview and predict",
      "Track claims/attitude and parse hard sentences",
      "Ask for leveled help without replacing the text",
      "Write your own summary and vocab list",
      "Verify no invented details"
    ],
    "zhCommonMistakes": [
      "全文翻譯取代理解",
      "單字表無限膨脹",
      "不拆長句只猜大意",
      "任由 AI 編造原文沒有的例子"
    ],
    "enCommonMistakes": [
      "Full translation instead of comprehension",
      "Endless vocab lists",
      "Skipping sentence structure",
      "Accepting invented examples"
    ],
    "zhExcellentExample": "優秀工作單：主旨一句、每段重點、至少兩句長句拆解、8-15 個單字含搭配、並註明未懂處與來源句。",
    "enExcellentExample": "A strong worksheet has a one-line gist, paragraph points, ≥2 parsed sentences, 8–15 useful items, and explicit gaps.",
    "zhPrompt": "【Prompt 1｜分級閱讀教練（禁止全文代讀）】\n我的程度：［例如 CEFR B1／B2］。英文原文：\n（貼上）\n請依程度給：1) 讀前 3 個預測問題 2) 每段主旨（英文短句＋中文提示）3) 作者態度判斷與依據句\n規則：不可捏造原文沒有的內容；不足請說「資訊不足」；不要輸出全文逐句中譯；先問我是否已自行讀過一遍。",
    "enPrompt": "[Prompt 1 | Leveled Reading Coach] Preview questions, paragraph gists, and attitude with evidence; no invented content; no full translation dump.",
    "zhCoachPrompt": "【Prompt 2｜長句拆解與單字表】\n請拆解下列長句：標出主子句、連接詞、修飾語，並用我的程度重述一次。\n句子：\n（貼上）\n接著從同一原文挑 10 個高價值單字／片語，做成表：詞、詞性、原文例句、簡單英文定義、我程度的中文、搭配。不要加入原文未出現的單字充數。",
    "enCoachPrompt": "[Prompt 2 | Sentence Parse + Vocab] Parse the long sentence and build a 10-item vocab table only from the source text.",
    "zhFeedbackPrompt": "【Prompt 3｜閱讀理解驗收】\n原文：\n（貼上）\n我的主旨與段落重點：\n（貼上）\n請評分：是否抓到 claim、有無誤讀、是否過度依賴翻譯腔。指出兩處需回原文重讀的地方，並給提示而非直接給完整標準答案。不要替我重寫整份作業。",
    "enFeedbackPrompt": "[Prompt 3 | Comprehension Check] Score claim accuracy and misreads; give hints, not a full replacement answer key essay.",
    "zhExample": "主旨：逐句翻譯會讓人忽略作者主張。｜P2 重點：先抓段落主題再精讀定義／證據／對比句。｜單字：main claim, assigned readings。",
    "enExample": "Gist + paragraph point + two academic vocabulary items from the demo passage.",
    "zhPractice": "選一篇真實課程英文閱讀（300-600字）。；完成閱讀前中後工作單。；拆解至少兩句長句並做單字表。；Challenge：不看中譯，用英文 60 秒向同學說明主旨與作者態度。",
    "enPractice": "Use a real 300–600 word course text.；Complete the worksheet.；Parse ≥2 sentences.；Challenge: explain gist and attitude in English for 60 seconds without a Chinese translation.",
    "zhQuizItems": [
      {
        "q": "大學英文閱讀時，較不建議的做法是？",
        "options": [
          "先預覽標題與段落主題",
          "把全文丟去翻譯後只讀中文版當理解",
          "拆長句骨架再讀細節",
          "整理少量高價值單字"
        ],
        "answer": 1,
        "explain": "全文翻譯取代理解會讓你抓不到 claim。"
      },
      {
        "q": "分級解釋的正確用途是？",
        "options": [
          "讓 AI 編造原文沒有的故事幫助記憶",
          "搭鷹架理解，但仍需回原文核對",
          "完全取代原文",
          "只用來產生更難的字炫耀"
        ],
        "answer": 1,
        "explain": "分級是鷹架，不是偽造或取代原文。"
      },
      {
        "q": "長句拆解時優先找出的是？",
        "options": [
          "每個形容詞的中文",
          "主子句的主詞與動詞關係",
          "字型顏色",
          "作者生日"
        ],
        "answer": 1,
        "explain": "先抓骨架再掛修飾，理解才穩。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Least advisable university reading habit?",
        "options": [
          "Preview titles and paragraph topics",
          "Only reading a full machine translation as “comprehension”",
          "Parsing long-sentence frames",
          "Keeping a short high-value vocab list"
        ],
        "answer": 1,
        "explain": "Translation-only reading hides the claim."
      },
      {
        "q": "Leveled explanation should:",
        "options": [
          "Invent missing plot",
          "Scaffold understanding while you return to the source",
          "Fully replace the source",
          "Only add harder words to impress"
        ],
        "answer": 1,
        "explain": "Scaffold, don’t fabricate or replace."
      },
      {
        "q": "When parsing a long sentence, find first:",
        "options": [
          "Every adjective in Chinese",
          "The main subject–verb relation",
          "Font colors",
          "The author’s birthday"
        ],
        "answer": 1,
        "explain": "Frame first, modifiers second."
      }
    ],
    "zhNotePrompt": "貼上你的主旨一句、兩段段落重點，以及單字表前 5 項。",
    "enNotePrompt": "Paste your one-line gist, two paragraph points, and top 5 vocab items.",
    "zhDeliverableChecklist": [
      "完成閱讀前中後工作單",
      "寫出主旨與作者觀點",
      "至少兩句長句拆解",
      "單字／片語表完成",
      "未讓 AI 捏造原文內容"
    ],
    "enDeliverableChecklist": [
      "Before-during-after worksheet done",
      "Gist and attitude stated",
      "≥2 sentences parsed",
      "Vocab list done",
      "No invented source content"
    ],
    "zhScorecard": [
      "主旨正確",
      "段落掌握",
      "長句能力",
      "單字有效",
      "不依賴全文翻譯"
    ],
    "enScorecard": [
      "Gist accuracy",
      "Paragraph control",
      "Sentence parsing",
      "Useful vocab",
      "No full-translation dependency"
    ],
    "resources": [
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "分級解釋與長句拆解教練"
      },
      {
        "name": "Cambridge Dictionary",
        "url": "https://dictionary.cambridge.org",
        "note": "查詞義、詞性與例句"
      },
      {
        "name": "Oxford Learner’s Dictionaries",
        "url": "https://www.oxfordlearnersdictionaries.com",
        "note": "學習者友善定義與搭配"
      },
      {
        "name": "BBC Learning English",
        "url": "https://www.bbc.co.uk/learningenglish",
        "note": "分級閱讀與聽讀材料"
      },
      {
        "name": "YouGlish",
        "url": "https://youglish.com",
        "note": "看真實語境中的發音與搭配"
      }
    ],
    "challenge": "完成一篇課程指定英文閱讀工作單；隔天不看筆記，默寫主旨與三個關鍵片語，錯誤處回原文重讀。"
  },
  {
    "icon": "✍️",
    "title": "AI 英文寫作與文法修改",
    "description": "用 AI 協助大綱、topic sentence 與文法修改，保留你的語氣與程度，避免代寫與過度艱深改寫。",
    "goal": "我的英文段落／短文（自寫）＋修改對照與理由清單",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "英文寫作",
      "文法修改",
      "語氣保留",
      "Chapter7"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 6,
    "chapterZh": "AI 英文學習系統",
    "chapterEn": "AI English Learning System",
    "zhTitle": "第32課：AI 英文寫作與文法修改",
    "enTitle": "Lesson 32: AI English Writing and Grammar Revision",
    "zhValueTip": "用 AI 協助大綱、topic sentence 與文法修改，保留你的語氣與程度，避免代寫與過度艱深改寫。",
    "enValueTip": "Use AI for outlines, topic sentences, and grammar fixes while keeping your voice and level—no ghostwriting or over-academic rewrites.",
    "zhOutcome": "我的英文段落／短文（自寫）＋修改對照與理由清單",
    "enOutcome": "My Self-Written English Paragraph/Essay + Revision Diff with Reasons",
    "zhConcept": "英文寫作流程應是：理解題目→大綱→自寫醜稿→分類修改→定稿。AI 可參與每一段，但不能跳過「自寫」。大綱至少含：thesis／主旨、各段 topic sentence、supporting details、conclusion。Topic sentence 先表段旨，再給理由、例子、解釋。修改時分開三層：文法錯誤（時態、主謂一致、冠詞）、語意錯誤（邏輯不通、指代不清）、不自然表達（直譯腔、搭配錯誤）。不要一次要求「改到像母語碩士論文」。保留原本語氣：明確告訴 AI 你的程度與目標讀者（大一作業／交換申請），禁止無故升高用詞難度或改變立場。修改前後比較案例：Before: \"Nowadays, many students they are depend on AI to writing homework.\" After (light edit): \"Nowadays, many students depend on AI to complete homework.\" 理由：刪重複主詞 they、depend 動詞形式、to writing→to complete；不改成生硬的 \"In the contemporary epoch, learners leverage…\"。學術誠信：AI 協助修改可以，代寫整篇不可。依學校規定披露；你需能解釋每個主張與例子。老師若口試問結構，你必須答得出。Grammarly 可抓表面文法；ChatGPT 適合說明理由與結構；字典核對搭配。最終判斷仍是你。完成標準：結構清楚、錯誤下降、仍像你的聲音、你能說明為何改。若作業是報告，連回 Chapter 4 的論證與引用規則；英文只是表達層，不是換一套誠信標準。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。",
    "enConcept": "Outline, self-draft, then revise by grammar/meaning/naturalness while preserving voice and level. Compare before/after with reasons; never submit ghostwritten work.",
    "zhCaseStudy": "情境案例：外文系旁聽的理工生阿凱把作文丟給 AI「改到完美」，結果用詞像期刊，口試被問例句來源答不出。他重來：先自寫 180 字，要求 AI 只做 B1-B2 程度修改並逐條給理由，拒絕 6 處過難改寫。老師說 “This sounds like you, and it’s clearer.” 他開始保存每次 before／after。",
    "enCaseStudy": "A-Kai replaced prestige ghost-edits with level-preserving revisions he could explain in oral follow-up.",
    "zhWorkflow": [
      "拆題並寫大綱（topic sentences）",
      "限時自寫醜稿，不先求完美",
      "請 AI 分層修改並給理由，限制程度",
      "比較前後，拒收過度改寫",
      "定稿並能口述每段功能"
    ],
    "enWorkflow": [
      "Decode prompt and outline with topic sentences",
      "Self-write an ugly draft",
      "Ask for layered edits with reasons and level caps",
      "Compare and reject over-rewrites",
      "Finalize and orally explain paragraph jobs"
    ],
    "zhCommonMistakes": [
      "請 AI 直接寫全文",
      "接受過度艱深改寫",
      "不問修改理由",
      "結構只有句子堆疊無 topic sentence"
    ],
    "enCommonMistakes": [
      "Full ghostwriting",
      "Over-academic rewrites",
      "No reasons for changes",
      "No topic sentences"
    ],
    "zhExcellentExample": "優秀成果：自寫稿＋輕量修改稿、理由清單、仍可辨識個人語氣、大綱與段落對齊。",
    "enExcellentExample": "Strong work shows a self-draft, light edit, reason list, recognizable voice, and outline-paragraph alignment.",
    "zhPrompt": "【Prompt 1｜英文寫作大綱教練】\n題目：\n（貼上）\n我的立場／想法：\n（貼上）\n程度：［B1／B2］\n請幫我產出大綱：thesis、三段 topic sentences、各 2 個 supporting details、conclusion。用我能寫出的英文，不要直接寫完整作文正文。若題意不清，先列出需我澄清的問題。",
    "enPrompt": "[Prompt 1 | Outline Coach] Build thesis, topic sentences, details, conclusion at my level—no full essay ghostwriting; ask if the prompt is unclear.",
    "zhCoachPrompt": "【Prompt 2｜保留語氣的文法／語意修改】\n這是我自己寫的英文：\n（貼上）\n目標：清楚、文法正確、保留原意與語氣；程度不超過［B2］。\n請輸出：1) 修改版 2) 條列修改（文法／語意／不自然）與理由 3) 你拒絕做的過度升階改寫示例。不要替我新增我沒寫的論點或資料。",
    "enCoachPrompt": "[Prompt 2 | Voice-preserving Edit] Revise my draft with reasons by error type; keep meaning/voice/level; do not add new claims.",
    "zhFeedbackPrompt": "【Prompt 3｜寫作驗收與誠信檢查】\n題目：\n（貼上）\n大綱：\n（貼上）\n定稿：\n（貼上）\n請評分：結構、topic sentence、支持細節、文法、是否像學生本人可防衛的文章。指出像「AI 代寫腔」的句子並建議改回更自然的我級表達。不要重寫整篇取代我的作業。",
    "enFeedbackPrompt": "[Prompt 3 | Writing QA] Score structure and defendability; flag ghostwritten tone; suggest level-matched fixes without replacing the whole essay.",
    "zhExample": "Before: many students they are depend on AI…｜After: many students depend on AI…｜理由：主謂與不定詞。｜拒收：In the contemporary epoch…",
    "enExample": "Light grammar fix retained; prestige rewrite rejected with a reason.",
    "zhPractice": "依真實作業題自寫 150-250 字。；完成分層修改與理由清單。；做 before／after 比較。；Challenge：刪除 AI 新增的任何論點，並用口語解釋你保留的三處修改。",
    "enPractice": "Self-write 150–250 words for a real prompt.；Layered edit with reasons.；Compare before/after.；Challenge: remove any AI-added claims and orally explain three kept edits.",
    "zhQuizItems": [
      {
        "q": "使用 AI 改英文作文時，最重要的原則是？",
        "options": [
          "請它一次寫完整篇交差",
          "自寫後再改，保留語氣並要求修改理由",
          "用字越難越好",
          "不要有 topic sentence"
        ],
        "answer": 1,
        "explain": "AI 是修改助手，不是代寫者。"
      },
      {
        "q": "下列何者較像「過度改寫」風險？",
        "options": [
          "修正主謂一致並說明理由",
          "把學生短句改成充斥生僻詞的期刊腔且改變語氣",
          "標出冠詞錯誤",
          "建議更清楚的 topic sentence"
        ],
        "answer": 1,
        "explain": "難詞堆疊又變腔，常導致不可防衛。"
      },
      {
        "q": "一段英文段落通常需要？",
        "options": [
          "只有細節沒有主旨句",
          "topic sentence＋supporting details＋收束／過渡",
          "隨機句子拼貼",
          "全段一句超長句子"
        ],
        "answer": 1,
        "explain": "清楚段旨與支持是大學寫作基本。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Best principle for AI writing help?",
        "options": [
          "Have it write the whole essay",
          "Self-draft then revise with voice kept and reasons given",
          "Harder words are always better",
          "Skip topic sentences"
        ],
        "answer": 1,
        "explain": "AI revises; you author."
      },
      {
        "q": "Which looks like over-rewriting risk?",
        "options": [
          "Fixing agreement with a reason",
          "Turning simple sentences into obscure journalese that changes voice",
          "Flagging article errors",
          "Suggesting a clearer topic sentence"
        ],
        "answer": 1,
        "explain": "Prestige tone can become undefendable."
      },
      {
        "q": "A solid English paragraph usually needs:",
        "options": [
          "Details with no controlling idea",
          "Topic sentence + supporting details + close/transition",
          "Random sentence collage",
          "One endless sentence only"
        ],
        "answer": 1,
        "explain": "Control + support is foundational."
      }
    ],
    "zhNotePrompt": "貼上 before／after 各一段，並列出三條修改理由。",
    "enNotePrompt": "Paste before/after excerpts and three edit reasons.",
    "zhDeliverableChecklist": [
      "完成大綱與自寫稿",
      "分層修改完成",
      "理由清單完整",
      "拒收過度升階改寫",
      "能口述段落功能"
    ],
    "enDeliverableChecklist": [
      "Outline + self-draft done",
      "Layered revision done",
      "Reason list complete",
      "Over-upgrade rejected",
      "Can explain paragraph jobs"
    ],
    "zhScorecard": [
      "結構",
      "自寫比例",
      "修改透明",
      "語氣保留",
      "誠信可防衛"
    ],
    "enScorecard": [
      "Structure",
      "Self-draft ratio",
      "Transparent edits",
      "Voice kept",
      "Defendable integrity"
    ],
    "resources": [
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "大綱與附理由修改"
      },
      {
        "name": "Grammarly",
        "url": "https://www.grammarly.com",
        "note": "表面文法檢查，仍需你判斷"
      },
      {
        "name": "Cambridge Dictionary",
        "url": "https://dictionary.cambridge.org",
        "note": "核對用詞與例句"
      },
      {
        "name": "Oxford Learner’s Dictionaries",
        "url": "https://www.oxfordlearnersdictionaries.com",
        "note": "搭配與學習者定義"
      },
      {
        "name": "DeepL",
        "url": "https://www.deepl.com",
        "note": "理解原意時可對照，不作代寫"
      }
    ],
    "challenge": "交一短篇英文作業前，完成自寫＋AI 附理由修改；另附 5 行「我使用 AI 的方式」說明（依課程規定調整披露）。"
  },
  {
    "icon": "🔄",
    "title": "AI 翻譯與中英文表達轉換",
    "description": "練習中翻英／英翻中、直譯與意譯、語氣與情境轉換，並驗證翻譯，避免逐字翻譯。",
    "goal": "我的翻譯對照本（多版本語氣）＋驗證紀錄",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "中階",
    "tags": [
      "翻譯",
      "語氣",
      "意譯",
      "Chapter7"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 6,
    "chapterZh": "AI 英文學習系統",
    "chapterEn": "AI English Learning System",
    "zhTitle": "第33課：AI 翻譯與中英文表達轉換",
    "enTitle": "Lesson 33: AI Translation and Cross-Language Expression",
    "zhValueTip": "練習中翻英／英翻中、直譯與意譯、語氣與情境轉換，並驗證翻譯，避免逐字翻譯。",
    "enValueTip": "Practice C↔E translation, literal vs sense-based rendering, tone/register shifts, and verification—avoid word-for-word calques.",
    "zhOutcome": "我的翻譯對照本（多版本語氣）＋驗證紀錄",
    "enOutcome": "My Translation Comparison Notebook (multi-tone) + Verification Log",
    "zhConcept": "翻譯不是逐字替換，而是在目標語重現意義、功能與語氣。直譯保留形式但可能怪；意譯重功能但可能偏離。大學生要會判斷何時用哪一種。情境差異很大：Email 求教、報告摘要、簡報標題、課堂口語、面試自我介紹，同一中文可能對應不同英文。例：中文「麻煩您看一下我的草稿」。正式 Email: \"Could you please review my draft when you have a moment?\" 口語同學: \"Can you take a quick look at my draft?\" 直譯腔 \"Trouble you see my draft\" 不可用。專有名詞：課程名、法條、理論人名優先查官方譯名或保留原文＋註；不確定就標待確認，不要讓 AI 亂造譯名。驗證方法：回譯（back-translation）看意思是否跑掉；用字典查關鍵搭配；請 AI 列出風險點但你做最終決定；對照 DeepL／Google Translate 差異並解釋為何選某版。同一句多版本練習能訓練語感：正式／中性／口語各一，並寫選用情境。英翻中也要避免翻譯腔堆疊「被…所…進行…」。學術英翻中先抓 claim 再寫通順中文。AI 規則：說明直譯／意譯差異；資訊不足（缺語境）要先問；不捏造原文沒有的數據；不直接交作業級長篇替你翻完不給你思考。工具：DeepL／Google Translate 產候選；Cambridge／Oxford 驗證；ChatGPT 比較語氣。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。",
    "enConcept": "Translate for meaning, function, and register. Compare literal vs idiomatic versions across email/report/slide/chat. Verify with back-translation and dictionaries; mark uncertain proper nouns.",
    "zhCaseStudy": "情境案例：小瑜把報告摘要丟去逐字英譯，出現 \"make a research\" 與奇怪詞序。她改成：先寫中文意義要點→要正式學術語氣→產出三版→回譯檢查→字典確認 collocation → 定稿 \"conduct research\"。助教回饋用語終於自然。她建立翻譯對照本，之後 Email 也套用。",
    "enCaseStudy": "Xiao Yu fixed calque-heavy abstracts by drafting meaning first, comparing tones, and verifying collocations.",
    "zhWorkflow": [
      "標註文本功能與語氣（Email／報告／口語等）",
      "先抓意義要點，再請 AI 產多版本",
      "比較直譯／意譯與正式／口語",
      "回譯＋字典驗證，處理專有名詞",
      "寫下選用理由存入對照本"
    ],
    "enWorkflow": [
      "Label function and register",
      "Capture meaning points, then generate variants",
      "Compare literal/idiomatic and formal/casual",
      "Back-translate and dictionary-check; handle proper nouns",
      "Log chosen version with reasons"
    ],
    "zhCommonMistakes": [
      "逐字翻譯",
      "語氣錯置（口語當學術）",
      "亂造專有名詞譯名",
      "不驗證就交稿"
    ],
    "enCommonMistakes": [
      "Word-for-word calques",
      "Wrong register",
      "Invented proper-noun translations",
      "No verification"
    ],
    "zhExcellentExample": "優秀對照本：同句至少三語氣版本、選用情境、驗證方式、專有名詞處理說明。",
    "enExcellentExample": "A strong notebook has ≥3 tone variants, use-cases, verification notes, and proper-noun decisions.",
    "zhPrompt": "【Prompt 1｜多語氣翻譯工作坊】\n文本功能：［Email／報告／簡報／對話］；目標語氣：［正式／中性／口語］\n原文：\n（貼上）\n請給：直譯版、意譯版、我指定語氣版；並用表格說明差異與可能誤解。語境不足請先問我；不要捏造原文沒有的資訊；不要只給一個「標準答案」就結束。",
    "enPrompt": "[Prompt 1 | Multi-tone Translation Workshop] Provide literal, sense-based, and register-targeted versions with a difference table; ask if context is missing.",
    "zhCoachPrompt": "【Prompt 2｜中英互譯驗證】\n我的譯文：\n（貼上）\n原文：\n（貼上）\n請做回譯風險檢查：意思偏移、搭配錯誤、語氣不當、專有名詞問題。給修改建議與理由。不確定的搭配請標「建議查典」，不要假裝百分之百正確。",
    "enCoachPrompt": "[Prompt 2 | Translation Verification] Check meaning drift, collocation, register, and proper nouns; mark dictionary-check items instead of faking certainty.",
    "zhFeedbackPrompt": "【Prompt 3｜正式 vs 口語對照評審】\n同一句我的兩個版本：\n（貼上）\n使用情境：\n（貼上）\n請判斷哪個較適合，列出 3 個理由，並給一版微調。不要替我完成整份長作業翻譯。",
    "enFeedbackPrompt": "[Prompt 3 | Formal vs Casual Judge] Choose the better fit for the situation with reasons and a light tweak—no full assignment translation takeover.",
    "zhExample": "中文：麻煩您看一下我的草稿。｜正式：Could you please review my draft…？｜口語：Can you take a quick look…？｜拒：Trouble you see…",
    "enExample": "One Chinese request rendered in formal and casual English; calque rejected.",
    "zhPractice": "選 Email、報告句、口語句各 3 句做多版本翻譯。；完成回譯驗證。；整理專有名詞表。；Challenge：把一份你寫過的中文 Email 改成得體英文，並請同學判斷語氣是否恰當。",
    "enPractice": "Translate 3 emails, 3 report lines, 3 casual lines in multiple tones.；Verify.；Build a proper-noun list.；Challenge: convert a real Chinese email to appropriate English and peer-check tone.",
    "zhQuizItems": [
      {
        "q": "避免逐字翻譯的關鍵是？",
        "options": [
          "只追求詞彙一一對應",
          "先抓意義、功能與語氣再表達",
          "永遠用最口語的字",
          "從不查搭配"
        ],
        "answer": 1,
        "explain": "意義與功能優先於形式對齊。"
      },
      {
        "q": "專有名詞不確定時應？",
        "options": [
          "讓 AI 隨便造一個中文譯名就定案",
          "查官方譯名或保留原文並標待確認",
          "刪掉專有名詞不管",
          "改成完全無關的詞"
        ],
        "answer": 1,
        "explain": "不確定就要查證或保留待確認。"
      },
      {
        "q": "驗證譯文較有效的方法包含？",
        "options": [
          "完全不看原文",
          "回譯與搭配查證，並比較多版本",
          "只看譯文字數",
          "選最長的句子"
        ],
        "answer": 1,
        "explain": "回譯與搭配檢查能抓偏移。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Key to avoiding word-for-word translation?",
        "options": [
          "Force 1:1 word mapping",
          "Capture meaning, function, and tone first",
          "Always use slang",
          "Never check collocations"
        ],
        "answer": 1,
        "explain": "Meaning and function beat form-matching."
      },
      {
        "q": "If a proper noun is uncertain, you should:",
        "options": [
          "Let AI invent a final translation",
          "Check official usage or keep the original and mark pending",
          "Delete it",
          "Replace with an unrelated word"
        ],
        "answer": 1,
        "explain": "Verify or mark pending."
      },
      {
        "q": "Effective verification includes:",
        "options": [
          "Ignoring the source",
          "Back-translation, collocation checks, and version comparison",
          "Counting words only",
          "Picking the longest sentence"
        ],
        "answer": 1,
        "explain": "Back-translation catches drift."
      }
    ],
    "zhNotePrompt": "貼上同一句的正式／口語兩版，並寫選用情境與一個驗證步驟。",
    "enNotePrompt": "Paste formal and casual versions of one line with use-case and one verification step.",
    "zhDeliverableChecklist": [
      "完成多情境翻譯練習",
      "含直譯／意譯比較",
      "正式與口語版本齊備",
      "驗證紀錄完整",
      "專有名詞有處理說明"
    ],
    "enDeliverableChecklist": [
      "Multi-situation practice done",
      "Literal vs sense compared",
      "Formal and casual versions ready",
      "Verification logged",
      "Proper nouns handled"
    ],
    "zhScorecard": [
      "意義保真",
      "語氣正確",
      "搭配自然",
      "有驗證",
      "無亂造譯名"
    ],
    "enScorecard": [
      "Meaning fidelity",
      "Register fit",
      "Natural collocation",
      "Verified",
      "No invented names"
    ],
    "resources": [
      {
        "name": "DeepL",
        "url": "https://www.deepl.com",
        "note": "高品質候選譯文"
      },
      {
        "name": "Google Translate",
        "url": "https://translate.google.com",
        "note": "快速對照與回譯"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "多語氣比較與風險說明"
      },
      {
        "name": "Cambridge Dictionary",
        "url": "https://dictionary.cambridge.org",
        "note": "驗證搭配與詞義"
      },
      {
        "name": "Oxford Learner’s Dictionaries",
        "url": "https://www.oxfordlearnersdictionaries.com",
        "note": "學習者取向查證"
      }
    ],
    "challenge": "將一份真實「向老師請假／求延長」中文訊息轉成得體英文 Email，附正式版與更短口語版，並寫驗證過程。"
  },
  {
    "icon": "🗣️",
    "title": "AI 英文口說與情境對話訓練",
    "description": "用角色扮演與即時糾錯練習課堂、討論、旅遊與面試英語，並建立口說訓練紀錄表。",
    "goal": "我的情境對話劇本＋口說訓練紀錄表（含糾錯與複練）",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "中階",
    "tags": [
      "英文口說",
      "角色扮演",
      "流暢度",
      "Chapter7"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 6,
    "chapterZh": "AI 英文學習系統",
    "chapterEn": "AI English Learning System",
    "zhTitle": "第34課：AI 英文口說與情境對話訓練",
    "enTitle": "Lesson 34: AI English Speaking and Situational Dialogue",
    "zhValueTip": "用角色扮演與即時糾錯練習課堂、討論、旅遊與面試英語，並建立口說訓練紀錄表。",
    "enValueTip": "Train classroom, discussion, travel, and interview English with role-play, live correction, and a speaking log.",
    "zhOutcome": "我的情境對話劇本＋口說訓練紀錄表（含糾錯與複練）",
    "enOutcome": "My Situational Dialogue Scripts + Speaking Training Log (with repair cycles)",
    "zhConcept": "口說進步靠「可重複的情境練習＋可追蹤的糾錯」，不是單次聊天。設定角色扮演：大學課堂提問、小組討論分歧、旅遊求助、面試行為問題。每次只練一個目標，例如：澄清問題、禮貌不同意、爭取時間。即時糾錯協定：先讓你說完；再標 1-2 個高優先錯誤（影響理解的文法／用詞）；給正確句與短解釋；立刻讓你重說。避免一次改十五處打擊流暢。發音提示：標出難詞重音，搭配 YouGlish／ELSA 練習；不要求完美口音，要求可懂度。流暢度訓練：限時 60-90 秒連續說；允許填詞（Well, / Let me think…）但減少空白當機。錄下來對照。遇到不熟悉問題：用策略句 \"Could you clarify…?\" \"I haven’t studied that yet, but based on…\" 誠實＋延展，不編造。口說訓練紀錄表欄位：日期、情境、目標句型、錄音連結、錯誤類型、重說結果、下次重點。VoiceTube／BBC Learning English 提供可跟讀材料；ChatGPT 負責對話對手；ELSA／YouGlish 管發音。AI 不得替你完成口試內容；應逼你輸出。資訊不足（未知課程內容）要它問你，不捏造你的經歷。一週至少 4 次短訓，比單次兩小時空談有效。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。",
    "enConcept": "Use focused role-plays, delayed minimal correction, intelligibility-first pronunciation, fluency timers, and a speaking log. Practice survival phrases for unknown questions without inventing facts.",
    "zhCaseStudy": "情境案例：小禾面試常當機。她與 AI 做行為面試角色扮演，每次只練 STAR 的 Action 段，糾錯只抓時態與動詞搭配。兩週後她能在 90 秒講完一個專案故事。面試官說表達清楚。紀錄表顯示卡住詞從 12 個降到 3 個。",
    "enCaseStudy": "Xiao He used narrow STAR role-plays with minimal correction and cut freeze moments before interviews.",
    "zhWorkflow": [
      "選情境與單一說話目標",
      "與 AI 角色扮演並錄音",
      "依協定做 1-2 點糾錯後重說",
      "練習發音難詞與流暢度計時",
      "更新口說訓練紀錄表"
    ],
    "enWorkflow": [
      "Pick situation and one speaking goal",
      "Role-play and record",
      "Apply 1–2 priority fixes and retry",
      "Drill hard words and timed fluency",
      "Update the speaking log"
    ],
    "zhCommonMistakes": [
      "只打字不開口",
      "一次糾錯過多",
      "遇未知問題就瞎編經歷",
      "沒有紀錄無法複練"
    ],
    "enCommonMistakes": [
      "Typing instead of speaking",
      "Over-correction",
      "Inventing experience when unsure",
      "No log for review"
    ],
    "zhExcellentExample": "優秀訓練：有情境劇本、錄音、兩輪糾錯重說、紀錄表連續一週、策略句可隨時使用。",
    "enExcellentExample": "Strong practice shows scripts, recordings, two repair cycles, a week of logs, and ready strategy phrases.",
    "zhPrompt": "【Prompt 1｜情境角色扮演教練】\n情境：［課堂提問／小組討論／旅遊／面試］；我的程度：［ ］；本回合目標句型：［例如禮貌不同意］\n請扮演對談者，一次一句，等我回覆。不要長篇獨白。若需要我的個人經歷，問我，不要替我捏造。結束後列出我用得好的 3 句與需改的 2 句。",
    "enPrompt": "[Prompt 1 | Role-play Coach] Stay in role one turn at a time; don’t invent my biography; end with 3 strengths and 2 repairs.",
    "zhCoachPrompt": "【Prompt 2｜即時糾錯與重說】\n我的回答：\n（貼上或轉寫）\n請只挑最多 2 個高優先錯誤（影響理解），給正確句、短理由，並要我立刻重說該句。另給 1 個發音提示（重音／易混音）。不要一次改到完美論文英語。",
    "enCoachPrompt": "[Prompt 2 | Live Correction] Fix at most 2 intelligibility issues, demand an immediate retry, and give one pronunciation tip—no over-polish.",
    "zhFeedbackPrompt": "【Prompt 3｜流暢度與應變評審】\n情境與目標：\n（貼上）\n我的轉寫／表現自述：\n（貼上）\n請評分流暢、準確、禮貌策略、遇未知問題的處理。給下一回合 10 分鐘課表。不要改寫成整段代答稿讓我背誦交差。",
    "enFeedbackPrompt": "[Prompt 3 | Fluency & Coping Review] Score fluency, accuracy, politeness strategies, and unknown-question coping; give a 10-minute next drill—no full ghosted speech.",
    "zhExample": "目標：禮貌不同意。｜學員：I not agree…｜糾錯：I don’t agree / I’m not sure I agree because…｜重說過關｜紀錄：時態／否定。",
    "enExample": "A polite-disagreement drill with one grammar fix, retry, and log entry.",
    "zhPractice": "完成課堂、討論、面試各一回合角色扮演。；每次錄音並做糾錯重說。；填寫訓練紀錄表。；Challenge：連續 5 天每天 10 分鐘口說；第五天重做第一天情境並比較卡詞數。",
    "enPractice": "Role-play class, discussion, and interview once each.；Record and repair.；Fill the log.；Challenge: 10 minutes daily for 5 days; redo day-1 scenario and compare freeze count.",
    "zhQuizItems": [
      {
        "q": "口說糾錯較有效的方式是？",
        "options": [
          "一次列出二十個錯誤並羞辱",
          "先說完，再改 1-2 個高優先錯誤並立刻重說",
          "完全不糾錯",
          "只糾正口音細節忽略意思"
        ],
        "answer": 1,
        "explain": "少量高優先糾錯＋重說，兼顧流暢與正確。"
      },
      {
        "q": "遇到不會的問題時較佳策略是？",
        "options": [
          "立刻編造假經歷",
          "澄清、誠實界定已知、給可支持的延伸",
          "沉默離場",
          "改說中文了事（若場合要求英文）"
        ],
        "answer": 1,
        "explain": "澄清與誠實延展比瞎編專業。"
      },
      {
        "q": "口說訓練紀錄表的主要價值是？",
        "options": [
          "裝飾筆記",
          "追蹤錯誤與複練，讓進步可見",
          "取代開口練習",
          "只寫日期即可"
        ],
        "answer": 1,
        "explain": "沒有追蹤就很難穩定進步。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Most effective speaking correction pattern?",
        "options": [
          "Dump twenty errors with shame",
          "Let the turn finish, fix 1–2 priority issues, then retry",
          "Never correct",
          "Only accent details while ignoring meaning"
        ],
        "answer": 1,
        "explain": "Minimal priority fixes plus retry balance fluency and accuracy."
      },
      {
        "q": "Best move when you don’t know the answer?",
        "options": [
          "Invent experience",
          "Clarify, bound what you know, extend supportably",
          "Leave silently",
          "Switch to Chinese if English is required"
        ],
        "answer": 1,
        "explain": "Honest coping beats fabrication."
      },
      {
        "q": "Main value of a speaking log?",
        "options": [
          "Decoration",
          "Track errors and retries so progress is visible",
          "Replace speaking",
          "Dates only"
        ],
        "answer": 1,
        "explain": "Tracking enables steady improvement."
      }
    ],
    "zhNotePrompt": "貼上一次角色扮演的目標句型、兩個糾錯與重說結果。",
    "enNotePrompt": "Paste one role-play goal, two corrections, and retry outcomes.",
    "zhDeliverableChecklist": [
      "至少 3 種情境對練",
      "有錄音或轉寫",
      "完成糾錯重說",
      "訓練紀錄表更新",
      "準備未知問題策略句"
    ],
    "enDeliverableChecklist": [
      "≥3 situations practiced",
      "Recording or transcript",
      "Repair retries done",
      "Log updated",
      "Unknown-question strategies ready"
    ],
    "zhScorecard": [
      "開口量",
      "可懂度",
      "糾錯閉環",
      "流暢",
      "應變"
    ],
    "enScorecard": [
      "Output volume",
      "Intelligibility",
      "Repair loop",
      "Fluency",
      "Coping"
    ],
    "resources": [
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "角色扮演與糾錯教練"
      },
      {
        "name": "ELSA Speak",
        "url": "https://elsaspeak.com",
        "note": "發音評測與練習"
      },
      {
        "name": "YouGlish",
        "url": "https://youglish.com",
        "note": "真實語境發音"
      },
      {
        "name": "VoiceTube",
        "url": "https://www.voicetube.com",
        "note": "影音跟讀與聽口連結"
      },
      {
        "name": "BBC Learning English",
        "url": "https://www.bbc.co.uk/learningenglish",
        "note": "口說與聽力材料"
      }
    ],
    "challenge": "完成一次 8 分鐘「模擬小組討論」英文錄音（含不同意與求和）；用紀錄表標記 5 個可改進點並隔日重錄改善版。"
  },
  {
    "icon": "🎤",
    "title": "AI 英文簡報與上台發表",
    "description": "完成英文簡報架構、投影片文字、講稿與模擬問答，用簡單清楚英語完成可上台發表。",
    "goal": "我的英文簡報包（投影片要點＋講稿＋Q&A）可上台版",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "英文簡報",
      "講稿",
      "模擬問答",
      "Chapter7"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 6,
    "chapterZh": "AI 英文學習系統",
    "chapterEn": "AI English Learning System",
    "zhTitle": "第35課：AI 英文簡報與上台發表",
    "enTitle": "Lesson 35: AI English Presentations and Delivery",
    "zhValueTip": "完成英文簡報架構、投影片文字、講稿與模擬問答，用簡單清楚英語完成可上台發表。",
    "enValueTip": "Build an English deck structure, slide text, script, and mock Q&A for a clear, stage-ready university talk.",
    "zhOutcome": "我的英文簡報包（投影片要點＋講稿＋Q&A）可上台版",
    "enOutcome": "My Stage-ready English Presentation Pack (slides + script + Q&A)",
    "zhConcept": "英文簡報成功關鍵是清楚，不是難字。架構沿用故事線：Opening → Context/Problem → Key points → Evidence → Conclusion／Call to action → Q&A。投影片文字要短：標題用主張句，子彈點可讀；細節放嘴上。難字能換就換：utilize→use，facilitate→help。講稿用分頁短句，開場／轉場／結尾準備句型：Opening: \"Today I’ll explain…\" / \"The main takeaway is…\"；Transition: \"Now that we’ve seen X, let’s look at Y.\"；Closing: \"To sum up… Thank you. I’m happy to take questions.\"控制時間：每頁預估秒數，總和≤時長；練習刪句比加速含糊更好。模擬問答：請 AI 扮老師／同學追問方法、定義、限制；用 Lesson 34 策略應對未知。緊張時：背熟第一句、看友軍臉、慢呼氣、允許暫停 \"Let me rephrase.\" 不要道歉連發。完整案例（主題：校園共乘）：P1 title claim；P2 problem；P3 survey evidence；P4 three-step pilot；P5 risks；P6 ask。講稿片段：\"Many students commute alone, which increases cost and parking pressure. Our survey of 120 students suggests… We propose a three-step pilot…\"連回 Chapter 5 的架構與彩排，只是語言層改英文；同樣禁止捏造數據。AI 可幫你簡化用詞與生問答，但主張與證據必須是你的；資訊不足要標待補。交付物：英文投影片要點、講稿、Q&A 卡、計時紀錄＝可上台發表。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。每次練習結束寫三行：今天最有效的一句英語、仍卡住的點、明天第一個 10 分鐘行動。與同學對練時只分享允許分享的內容；不要用 AI 捏造他人沒同意的對話當作業證據。當閱讀、寫作、翻譯、口說、簡報能形成英文學習閉環，你換科目也能重複使用同一套提示與紀錄表。也請遵守學術誠信：AI 是教練與編輯，最終表達與事實責任屬於你；資訊不足時要敢標示，不要硬編。此外，請把本課產出存成 raw／final：raw 保留與 AI 的練習紀錄，final 是你核對後可交給下一課或可上台的版本。",
    "enConcept": "Prioritize clarity over rare words. Build claim-based slides, a timed simple script with opening/transition/closing frames, and mock Q&A. Never invent evidence; mark missing data.",
    "zhCaseStudy": "情境案例：交換面試要求 5 分鐘英文自我專題介紹。小恩第一版講稿充滿難詞，超時且被問數據來源答不出。她用簡化詞表重寫、壓到 9 頁、模擬 8 題問答，計時 4:50。面試官稱清楚。她把開場句與結尾句做成記憶卡，上台不再空白。",
    "enCaseStudy": "Xiao En replaced jargon-heavy overtime talks with a simplified, timed deck plus mock Q&A and passed the interview screen.",
    "zhWorkflow": [
      "鎖定英文主訊息與頁面主張",
      "寫短投影片文字並簡化難字",
      "完成分頁講稿與開場／轉場／結尾",
      "計時彩排與模擬英文提問",
      "打包可上台版並準備緊張應對句"
    ],
    "enWorkflow": [
      "Lock English core message and slide claims",
      "Write short slide text and simplify hard words",
      "Finish per-slide script with frames",
      "Timed rehearsal and English mock Q&A",
      "Pack stage-ready files and coping lines"
    ],
    "zhCommonMistakes": [
      "投影片長文＋難詞炫耀",
      "沒有計時",
      "不練習問答",
      "捏造數據撐場面"
    ],
    "enCommonMistakes": [
      "Text walls and jargon flexing",
      "No timing",
      "No Q&A practice",
      "Inventing data"
    ],
    "zhExcellentExample": "可上台包：清楚主訊息、短英文字幕點、計時講稿、8 題 Q&A、緊張應對句，且無未核對數據。",
    "enExcellentExample": "A stage-ready pack has a clear message, short English bullets, timed script, 8 Q&As, coping lines, and no unverified data.",
    "zhPrompt": "【Prompt 1｜英文簡報架構與投影片文字】\n時長：［N］分鐘；聽眾：［老師／同學］；主訊息：［一句英文］；證據要點：\n（貼上，勿讓我捏造）\n請給頁面地圖：每頁英文主張標題＋最多 3 子彈點（簡單用詞）。缺數據處標［data needed］。不要寫成完整學術論文；不要發明數字。",
    "enPrompt": "[Prompt 1 | English Deck Map] Build claim titles and ≤3 simple bullets per slide; mark [data needed]; invent no numbers.",
    "zhCoachPrompt": "【Prompt 2｜英文講稿與句型】\n頁面地圖：\n（貼上）\n程度：［B1／B2］\n請寫分頁講稿（每頁≤80字）、開場／三個轉場／結尾句。用簡單清楚英文，附一版更短的關鍵詞卡。不要把講稿升階成母語演講比賽稿；保留我可跟上的句子長度。",
    "enCoachPrompt": "[Prompt 2 | Script + Frames] Write ≤80 words/slide at my level with opening/transitions/closing and cue cards—no prestige over-upgrade.",
    "zhFeedbackPrompt": "【Prompt 3｜模擬老師英文提問】\n請扮演老師，依我的簡報要點一次問一題英文問題，等我答。結束後評：清楚度、文法可懂度、是否答到點、時間感。給 5 個我該準備的答案骨架。禁止要求我回答簡報中不存在且你捏造的數據細節。",
    "enFeedbackPrompt": "[Prompt 3 | Instructor Q&A Mock] Ask one English question at a time; debrief; give 5 answer skeletons; do not demand invented data.",
    "zhExample": "Opening: Today I’ll explain a three-step campus carpool pilot.｜Transition: Now let’s look at risks.｜Q: How did you get the 120 responses?｜A: 依真實方法回答／資訊不足則誠實說。",
    "enExample": "Opening and transition frames plus an evidence question answered only with real method details.",
    "zhPractice": "完成英文頁面地圖與簡化用詞。；寫講稿並計時兩次。；模擬至少 8 題英文問答。；Challenge：錄製完整英文簡報一遍；重看找出三處可刪難字或可更短的句子並改稿。",
    "enPractice": "Build the English slide map with simpler words.；Script and time twice.；Mock ≥8 English questions.；Challenge: record a full run; cut three jargon/long spots and revise.",
    "zhQuizItems": [
      {
        "q": "大學生英文簡報較應追求？",
        "options": [
          "用字越難越顯得專業",
          "簡單清楚、主張明確、可準時講完",
          "投影片貼滿段落",
          "完全不準備問答"
        ],
        "answer": 1,
        "explain": "清楚與準時勝過難詞炫耀。"
      },
      {
        "q": "投影片英文文字較佳原則是？",
        "options": [
          "每頁一篇短論文",
          "短標題主張＋少量子彈點，細節用講",
          "只放機器翻譯長文",
          "無標題也可"
        ],
        "answer": 1,
        "explain": "視覺少字、口語補述。"
      },
      {
        "q": "模擬英文提問時應避免？",
        "options": [
          "依簡報內容追問",
          "要求學生回答被捏造的數據細節",
          "練習誠實應變句",
          "一次一題等待回答"
        ],
        "answer": 1,
        "explain": "不可用假數據細節施壓。"
      }
    ],
    "enQuizItems": [
      {
        "q": "University English talks should prioritize:",
        "options": [
          "Maximum rare vocabulary",
          "Clarity, clear claims, and finishing on time",
          "Paragraphs pasted on every slide",
          "Zero Q&A prep"
        ],
        "answer": 1,
        "explain": "Clarity and timing beat jargon flexing."
      },
      {
        "q": "Best slide-text principle?",
        "options": [
          "A mini-essay per slide",
          "Short claim titles + few bullets; speak the details",
          "Raw MT walls of text",
          "No titles needed"
        ],
        "answer": 1,
        "explain": "Sparse text, spoken detail."
      },
      {
        "q": "In English mock Q&A, avoid:",
        "options": [
          "Follow-ups grounded in the deck",
          "Demanding answers about invented data details",
          "Practicing honest coping lines",
          "One question at a time"
        ],
        "answer": 1,
        "explain": "Don’t pressure with fabricated figures."
      }
    ],
    "zhNotePrompt": "貼上開場兩句英文、一頁投影片要點，以及兩題 Q&A 答案骨架。",
    "enNotePrompt": "Paste your two-sentence opening, one slide’s bullets, and two Q&A answer skeletons.",
    "zhDeliverableChecklist": [
      "英文架構與投影片要點完成",
      "講稿含開場／轉場／結尾",
      "計時達標",
      "模擬問答≥8",
      "無未核對捏造數據"
    ],
    "enDeliverableChecklist": [
      "English structure + slide points done",
      "Script frames included",
      "Timing on target",
      "≥8 mock Q&As",
      "No fabricated data"
    ],
    "zhScorecard": [
      "清楚",
      "簡單用詞",
      "時間控制",
      "講稿可講",
      "問答可防禦"
    ],
    "enScorecard": [
      "Clarity",
      "Simple wording",
      "Timing",
      "Speakable script",
      "Defendable Q&A"
    ],
    "resources": [
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "架構、講稿簡化與模擬提問"
      },
      {
        "name": "DeepL",
        "url": "https://www.deepl.com",
        "note": "講稿意義核對（非代寫）"
      },
      {
        "name": "Grammarly",
        "url": "https://www.grammarly.com",
        "note": "講稿表面文法檢查"
      },
      {
        "name": "YouGlish",
        "url": "https://youglish.com",
        "note": "關鍵詞發音"
      },
      {
        "name": "BBC Learning English",
        "url": "https://www.bbc.co.uk/learningenglish",
        "note": "簡報常用語參考"
      },
      {
        "name": "ELSA Speak",
        "url": "https://elsaspeak.com",
        "note": "上台前發音熱身"
      }
    ],
    "challenge": "完成一份 5-8 分鐘大學生主題英文簡報（真實課程或社團）；錄影一次完整發表＋3 題問答，並提交簡化用詞前後對照表。"
  },
  {
    "icon": "📄",
    "title": "AI Word 與文件整理",
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
    "zhTitle": "第36課：AI Word 與文件整理",
    "enTitle": "Lesson 36: AI Word and Document Organization",
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
    "challenge": "把一份即將繳交（或剛繳交）的作業重套樣式並跑完整規格檢查表；記錄因此避免的至少 3 個格式風險。"
  },
  {
    "icon": "📊",
    "title": "AI Excel 與資料處理",
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
    "locked": true,
    "chapterIndex": 7,
    "chapterZh": "AI 學習生產力系統",
    "chapterEn": "AI Learning Productivity System",
    "zhTitle": "第37課：AI Excel 與資料處理",
    "enTitle": "Lesson 37: AI Excel and Data Handling",
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
    "challenge": "完成一份課程／社團真實資料表：含清理前後對照、至少 3 個公式、一張摘要，並能向同學在 3 分鐘內解釋結果如何算出。"
  },
  {
    "icon": "🖼️",
    "title": "AI PowerPoint 與投影片製作",
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
    "locked": true,
    "chapterIndex": 7,
    "chapterZh": "AI 學習生產力系統",
    "chapterEn": "AI Learning Productivity System",
    "zhTitle": "第38課：AI PowerPoint 與投影片製作",
    "enTitle": "Lesson 38: AI PowerPoint and Slide Production",
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
    "challenge": "用本課流程完成一份真實 5-10 分鐘課程／社團簡報初稿（PowerPoint 或 Slides），含備註與一次計時紀錄。"
  },
  {
    "icon": "☁️",
    "title": "AI Google Workspace 協作",
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
    "locked": true,
    "chapterIndex": 7,
    "chapterZh": "AI 學習生產力系統",
    "chapterEn": "AI Learning Productivity System",
    "zhTitle": "第39課：AI Google Workspace 協作",
    "enTitle": "Lesson 39: AI Google Workspace Collaboration",
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
    "challenge": "與至少一名同學實際建立共用專案資料夾並簽署（同意）協作憲章；截圖權限設定（遮敏）與 final 位置說明。"
  },
  {
    "icon": "✉️",
    "title": "AI Email 與學術溝通",
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
    "locked": true,
    "chapterIndex": 7,
    "chapterZh": "AI 學習生產力系統",
    "chapterEn": "AI Learning Productivity System",
    "zhTitle": "第40課：AI Email 與學術溝通",
    "enTitle": "Lesson 40: AI Email and Academic Communication",
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
    "challenge": "建立個人學術 Email 模板庫至少 4 封，並用其中一封完成真實溝通（老師／助教／組員）；回顧是否一次說清請求。"
  },
  {
    "icon": "👥",
    "title": "AI 團隊分工與角色配置",
    "description": "盤點組員能力、用 RACI 配置研究／寫作／設計／簡報／統整角色，並處理分工不均與失聯。",
    "goal": "我的小組能力盤點表＋RACI 責任表＋工作量估算",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "團隊分工",
      "RACI",
      "角色配置",
      "Chapter9"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 8,
    "chapterZh": "AI 團隊協作與專案管理",
    "chapterEn": "AI Team Collaboration and Project Management",
    "zhTitle": "第41課：AI 團隊分工與角色配置",
    "enTitle": "Lesson 41: AI Team Roles and Responsibility Design",
    "zhValueTip": "盤點組員能力、用 RACI 配置研究／寫作／設計／簡報／統整角色，並處理分工不均與失聯。",
    "enValueTip": "Map teammate strengths, assign research/writing/design/slides/integration with RACI, and handle imbalance or ghosting.",
    "zhOutcome": "我的小組能力盤點表＋RACI 責任表＋工作量估算",
    "enOutcome": "My Team Skills Inventory + RACI Chart + Effort Estimates",
    "zhConcept": "大學小組報告最常見的失敗，不是沒人會做事，而是「平均分配任務卻成果失衡」：每人領一樣多頁，但研究深度、寫作品質與簡報準備差很大，最後由一人熬夜統整。這一課先做能力盤點：每人寫可貢獻項（文獻搜尋、資料整理、寫作、設計、簡報、時程追蹤、統整）與不可／不擅長項、本週可投入時數。AI 可協助整理成矩陣，但不可替未發言的組員捏造能力或承諾。接著用 RACI（或相近概念）：R 執行、A 最終負責拍板、C 需諮詢、I 需知會。每個交付物只應有一個 A，避免「大家都負責＝沒人負責」。典型角色：研究／資料、寫作、設計視覺、簡報與講稿、統整與品質（格式／引用／版本）。一人可兼兩角，但高負荷角色要有備援。工作量估算用故事點或小時區間（悲觀／可能／樂觀），公開貼在表上；若某人時數明顯不足，應減項或延後範圍，而不是默默讓他扛最重。分工不均的處理：用數據（任務數×預估時數×技能匹配）開會重配；避免道德綁架。失聯／延遲：先訂 SLA（例如 24 小時已讀回覆）、升級路徑（組長→導師／助教）、備案接手人。完整案例：四人格「校園餐點減塑」報告——A 統整、B 研究、C 寫作、D 設計＋簡報；問卷由 B＋C 共 R；簡報彩排全員 I；截止前兩天 A 鎖定版本。AI 規則：只依你們提供的能力與意願建議分工；區分「事實（組員自述）／建議／推測」；資訊不足列待確認，不自行決定未投票事項。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。",
    "enConcept": "Inventory skills and hours, assign RACI for research/writing/design/slides/integration, estimate effort openly, and plan for imbalance or ghosting. AI advises from stated inputs only—never invents commitments.",
    "zhCaseStudy": "完整小組報告分工案例：傳播系四人期末專題。過去「一人一章」導致口吻分裂、引用格式三種。這次先填能力盤點：小雨文獻強、小哲設計強、小安台風好但寫作慢、小凱擅長追進度。RACI：文獻小雨 R／小凱 A（時程）；內文小雨＋小哲 R／小安 A（統整）；簡報小安 R／小哲 C；設計小哲 R。工作量估算後發現小安同時扛 A 與簡報 R，於是把部分內文修訂轉給小雨。失聯規則：逾 36 小時未回，備援接手並通知助教。交件前無一人爆肝，老師稱讚一致性。他們把 RACI 表存進 Drive 當模板。",
    "enCaseStudy": "A four-person media team replaced one-chapter-each chaos with skills inventory, RACI, effort estimates, and a ghosting SLA.",
    "zhWorkflow": [
      "收集能力盤點與可投入時數（本人確認）",
      "列出交付物並草擬 RACI",
      "請 AI 檢查負荷與缺口（禁捏造）",
      "全組確認後鎖定責任表",
      "寫下失聯／延遲備援規則"
    ],
    "enWorkflow": [
      "Collect confirmed skills and hours",
      "List deliverables and draft RACI",
      "Ask AI to check load/gaps without inventing people",
      "Lock the chart after team confirmation",
      "Write ghosting/delay backup rules"
    ],
    "zhCommonMistakes": [
      "平均頁數＝公平",
      "多人同時當 A",
      "不估時數就派最重活",
      "讓 AI 替缺席組員做決定"
    ],
    "enCommonMistakes": [
      "Equal pages as fairness",
      "Multiple Accountables",
      "Heavy work without hour estimates",
      "AI deciding for absent members"
    ],
    "zhExcellentExample": "優秀分工：能力表真實、每交付物單一 A、時數公開、備援明確、全員已確認。",
    "enExcellentExample": "A strong plan has honest skills, one A per deliverable, public hours, clear backups, and confirmed consent.",
    "zhPrompt": "【Prompt 1｜依能力建議分工（禁止捏造）】\n專案類型：［小組報告／專題／社團／競賽］；交付物清單：\n（貼上）\n組員能力與時數（本人填寫）：\n（貼上）\n請建議角色配置與理由，並標註：事實／建議／推測。不可替未提供資料的組員發明專長或承諾；資訊不足列「待確認問題」。不要宣稱已全組通過。",
    "enPrompt": "[Prompt 1 | Skills-based Staffing] Propose roles from stated skills/hours only; label fact/suggestion/inference; never invent absent members’ commitments.",
    "zhCoachPrompt": "【Prompt 2｜RACI 責任表生成器】\n交付物：\n（貼上）\n候選負責人：\n（貼上）\n請產出 RACI 表，確保每個交付物只有一個 A，並指出可能過載的人。若人選衝突或資料不足，列出需投票的選項，不要擅自定案。",
    "enCoachPrompt": "[Prompt 2 | RACI Builder] Build RACI with one A per deliverable, flag overload, and list vote options instead of deciding unilaterally.",
    "zhFeedbackPrompt": "【Prompt 3｜分工公平與風險驗收】\n能力表＋RACI＋時數：\n（貼上）\n請檢查：是否平均分配但失衡、有無備援、失聯規則是否可執行。給修正建議。清楚區分你看到的事實與你的推測；缺少組員確認時標示風險。",
    "enFeedbackPrompt": "[Prompt 3 | Fairness & Risk QA] Check imbalance, backups, and ghosting rules; separate facts from inferences; flag missing confirmations.",
    "zhExample": "交付物：文獻回顧｜R 小雨｜A 小凱｜C 小安｜I 全員。｜估算：6-8 小時。｜備援：小安可接搜尋。",
    "enExample": "Literature review RACI with hour range and a named backup researcher.",
    "zhPractice": "為真實小組填能力盤點。；完成交付物 RACI 與時數估算。；訂失聯 SLA 與備援。；Challenge：開會 15 分鐘讓每人確認自己的 R／A；有異議就改表，禁止會後才說「我不知道」。",
    "enPractice": "Fill a real skills inventory.；Complete RACI + hours.；Set ghosting SLA.；Challenge: a 15-minute confirmation meeting so nobody discovers duties after the fact.",
    "zhQuizItems": [
      {
        "q": "「一人一章平均分配」最常見的問題是？",
        "options": [
          "一定最公平且品質最高",
          "忽略能力與負荷，易造成風格分裂與一人收尾",
          "不需要統整角色",
          "AI 會自動修好一切"
        ],
        "answer": 1,
        "explain": "平均頁數不等于能力匹配與品質平衡。"
      },
      {
        "q": "RACI 中 A（Accountable）較正確的理解是？",
        "options": [
          "越多人當 A 越好",
          "每個交付物通常只需一個最終負責拍板的人",
          "A 可以完全不做溝通",
          "A 等於不用做事"
        ],
        "answer": 1,
        "explain": "單一 A 避免責任稀釋。"
      },
      {
        "q": "請 AI 建議分工時不可做的是？",
        "options": [
          "依組員自述能力給建議",
          "替缺席組員捏造同意與專長",
          "標示待確認問題",
          "指出可能過載"
        ],
        "answer": 1,
        "explain": "不可捏造未確認的人與承諾。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Main risk of “one chapter each”?",
        "options": [
          "Always fairest and highest quality",
          "Ignores skills/load; causes style split and last-minute integration",
          "No integrator needed",
          "AI will auto-fix everything"
        ],
        "answer": 1,
        "explain": "Equal pages ≠ matched capacity or quality."
      },
      {
        "q": "Best reading of Accountable (A) in RACI?",
        "options": [
          "More As are better",
          "Usually one final owner per deliverable",
          "A never communicates",
          "A means no work"
        ],
        "answer": 1,
        "explain": "One A prevents diluted ownership."
      },
      {
        "q": "AI staffing must not:",
        "options": [
          "Advise from stated skills",
          "Invent consent/skills for absent members",
          "List confirmation questions",
          "Flag overload"
        ],
        "answer": 1,
        "explain": "Never fabricate people or commitments."
      }
    ],
    "zhNotePrompt": "貼上 RACI 精簡表，並寫下每位組員本週可投入時數與一名備援對象。",
    "enNotePrompt": "Paste a compact RACI, each member’s weekly hours, and one backup name.",
    "zhDeliverableChecklist": [
      "能力盤點完成且本人確認",
      "交付物 RACI 鎖定",
      "工作量估算公開",
      "失聯／延遲規則成文",
      "備援角色指定"
    ],
    "enDeliverableChecklist": [
      "Skills inventory confirmed",
      "Deliverable RACI locked",
      "Effort estimates public",
      "Ghosting rules written",
      "Backups named"
    ],
    "zhScorecard": [
      "能力對齊",
      "責任清楚",
      "負荷合理",
      "備援可行",
      "全員確認"
    ],
    "enScorecard": [
      "Skill fit",
      "Clear ownership",
      "Reasonable load",
      "Viable backup",
      "Team confirmation"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "能力盤點與 RACI 資料庫"
      },
      {
        "name": "Google Docs",
        "url": "https://docs.google.com",
        "note": "責任表共編與確認留言"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "存放分工定稿"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "依自述能力檢查負荷與缺口"
      },
      {
        "name": "Trello",
        "url": "https://trello.com",
        "note": "後續把角色對應到任務卡"
      }
    ],
    "challenge": "為正在進行的小組報告／專題產出一頁 RACI＋時數表，並取得每位組員「已確認」紀錄（留言或簽名）。"
  },
  {
    "icon": "📝",
    "title": "AI 會議紀錄與重點整理",
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
    "locked": true,
    "chapterIndex": 8,
    "chapterZh": "AI 團隊協作與專案管理",
    "chapterEn": "AI Team Collaboration and Project Management",
    "zhTitle": "第42課：AI 會議紀錄與重點整理",
    "enTitle": "Lesson 42: AI Meeting Notes and Decision Capture",
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
    "challenge": "完成一次真實小組會議的「議程→紀錄→核對→確認」全流程，並在群組留下確認串。"
  },
  {
    "icon": "📋",
    "title": "AI 任務管理與進度追蹤",
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
    "locked": true,
    "chapterIndex": 8,
    "chapterZh": "AI 團隊協作與專案管理",
    "chapterEn": "AI Team Collaboration and Project Management",
    "zhTitle": "第43課：AI 任務管理與進度追蹤",
    "enTitle": "Lesson 43: AI Task Management and Progress Tracking",
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
    "challenge": "為小組專題建立運作中的看板，連續 7 天每日更新；提交一張每週追蹤截圖（遮敏）與一則延誤處理紀錄。"
  },
  {
    "icon": "🎯",
    "title": "AI 專案規劃與風險管理",
    "description": "定義目標、範圍、里程碑、依賴與風險備案，用 AI 輔助規劃並由人工審核定案。",
    "goal": "我的專案計畫一頁紙（目標／里程碑／風險／備案）",
    "estimatedTime": "60-80 分鐘",
    "difficulty": "中階",
    "tags": [
      "專案規劃",
      "里程碑",
      "風險",
      "Chapter9"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 8,
    "chapterZh": "AI 團隊協作與專案管理",
    "chapterEn": "AI Team Collaboration and Project Management",
    "zhTitle": "第44課：AI 專案規劃與風險管理",
    "enTitle": "Lesson 44: AI Project Planning and Risk Management",
    "zhValueTip": "定義目標、範圍、里程碑、依賴與風險備案，用 AI 輔助規劃並由人工審核定案。",
    "enValueTip": "Define goals, scope, milestones, dependencies, and risk backups—AI assists, humans approve.",
    "zhOutcome": "我的專案計畫一頁紙（目標／里程碑／風險／備案）",
    "enOutcome": "My One-Page Project Plan (goals/milestones/risks/backups)",
    "zhConcept": "專案規劃回答：要完成什麼（目標）、不做什麼（範圍）、交什麼（交付成果）、何時檢查（里程碑）、誰與什麼資源、有何依賴、會出什麼事（風險）與備案。大學生專題常缺「非範圍」：不做問卷第二波、不做 APP 上架等，寫清楚可減少臨時加戲。里程碑應對齊可驗證產出：題目鎖定、文獻完成、初稿、彩排、定稿，而非「大家加油」。依賴關係：倫理審核→問卷上線→分析→寫作。風險例：組員生病、資料取得慢、場地取消、軟體權限。備案要可執行：備援人、縮小範圍、改用二手資料、提前彩排日。專案變更需記錄影響並經 A 角色同意，不可聊天一句就算改範圍。AI 可產出時程草案與風險清單，但時程必須用人審核對齊真實課表與考試週；不可假裝資源充足。完整大學生專案案例：跨系「老年科技使用」專題——目標產出報告＋海報；非範圍不含實機開發；里程碑五個；風險含受訪招募不足→備案改案例分析。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。",
    "enConcept": "Write goals, non-goals, deliverables, milestones, resources, dependencies, risks, and backups. AI drafts; humans validate against real calendars and approve changes explicitly.",
    "zhCaseStudy": "跨系專題原計畫兩週做 30 人訪談，期中考撞期失敗。重做計畫：里程碑前移招募、風險「招募不足」備案改 3 個深度案例＋文獻。變更紀錄由 A 簽名。最終準時發表，評審肯定範圍取捨清楚。",
    "enCaseStudy": "An interdisciplinary team survived midterms by moving milestones and activating a recruitment-risk backup with a signed change note.",
    "zhWorkflow": [
      "寫目標／非範圍／交付成果",
      "排里程碑與依賴",
      "列資源與風險／備案",
      "請 AI 檢查缺口後人工審核",
      "鎖定計畫並定義變更流程"
    ],
    "enWorkflow": [
      "Write goals/non-goals/deliverables",
      "Sequence milestones and dependencies",
      "List resources, risks, backups",
      "AI gap-check then human approve",
      "Lock plan and define change control"
    ],
    "zhCommonMistakes": [
      "只有目標沒有非範圍",
      "里程碑不可驗證",
      "無備案",
      "AI 時程不經課表審核"
    ],
    "enCommonMistakes": [
      "Goals without non-goals",
      "Unverifiable milestones",
      "No backups",
      "AI schedules without calendar checks"
    ],
    "zhExcellentExample": "優秀一頁紙：目標清楚、非範圍明確、里程碑可驗、風險有備案、變更需批准。",
    "enExcellentExample": "A strong one-pager has clear goals/non-goals, testable milestones, backed risks, and change control.",
    "zhPrompt": "【Prompt 1｜專案一頁紙規劃】\n題目與期限：\n（貼上）\n已知約束（考試／工讀／人數）：\n（貼上）\n請產出：目標、非範圍、交付成果、里程碑、依賴、資源需求。約束不足請先列問題；不要假設我們有無限時間；標註建議與需人工審核項。",
    "enPrompt": "[Prompt 1 | One-Page Plan] Draft goals, non-goals, deliverables, milestones, deps, resources; ask if constraints are missing; no infinite-time assumptions.",
    "zhCoachPrompt": "【Prompt 2｜風險與備案分析】\n計畫摘要：\n（貼上）\n請列風險（可能／影響）、預警訊號、備案、誰觸發備案。不要捏造我們沒提到的已發生事故；區分推測與已知事實。",
    "enCoachPrompt": "[Prompt 2 | Risk & Backup] List likelihood/impact, triggers, backups, and owners; don’t invent incidents; separate speculation from facts.",
    "zhFeedbackPrompt": "【Prompt 3｜時程與變更審核】\n里程碑表與課表衝突說明：\n（貼上）\n請指出不切實際的日期、建議調整，並給變更申請短模板。不可逕自宣告範圍變更已通過。",
    "enFeedbackPrompt": "[Prompt 3 | Schedule & Change Review] Flag unrealistic dates and provide a change-request template—do not declare scope changes approved.",
    "zhExample": "里程碑：4/20 題目鎖定｜4/30 資料完成｜5/7 初稿｜5/12 彩排｜5/15 定稿。｜風險：受訪不足→備案案例分析。",
    "enExample": "Five verifiable milestones with a recruitment-risk backup to case analysis.",
    "zhPractice": "寫出專案一頁紙。；完成風險／備案表。；對課表做人工審核。；Challenge：模擬一個風險發生，走一遍備案與變更紀錄，限時 20 分鐘。",
    "enPractice": "Write the one-pager.；Finish risks/backups.；Human-check against calendars.；Challenge: simulate one risk and run backup+change log in 20 minutes.",
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
    "zhNotePrompt": "貼上三個里程碑與兩項風險備案（含觸發條件）。",
    "enNotePrompt": "Paste three milestones and two risk backups with triggers.",
    "zhDeliverableChecklist": [
      "目標與非範圍完成",
      "里程碑可驗證",
      "依賴已標",
      "風險備案齊",
      "變更流程寫明"
    ],
    "enDeliverableChecklist": [
      "Goals/non-goals done",
      "Milestones verifiable",
      "Dependencies marked",
      "Risk backups ready",
      "Change process written"
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
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "專案一頁紙與里程碑資料庫"
      },
      {
        "name": "Asana",
        "url": "https://asana.com",
        "note": "時程與依賴追蹤"
      },
      {
        "name": "ClickUp",
        "url": "https://clickup.com",
        "note": "里程碑與風險清單"
      },
      {
        "name": "Google Docs",
        "url": "https://docs.google.com",
        "note": "變更紀錄共編"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "規劃草案與風險提問"
      },
      {
        "name": "Trello",
        "url": "https://trello.com",
        "note": "把里程碑拆成看板階段"
      }
    ],
    "challenge": "為真實專題完成經全組確認的一頁專案計畫，並至少演練一次「風險→備案→變更紀錄」。"
  },
  {
    "icon": "✅",
    "title": "AI 小組報告與成果整合",
    "description": "整合組員內容、統一格式語氣引用與視覺，完成最終版並彩排與模擬提問，產出可上台成果。",
    "goal": "我的整合檢核表＋最終版小組成果（報告／簡報）可發表包",
    "estimatedTime": "60-90 分鐘",
    "difficulty": "中階",
    "tags": [
      "成果整合",
      "統一風格",
      "彩排",
      "Chapter9"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 8,
    "chapterZh": "AI 團隊協作與專案管理",
    "chapterEn": "AI Team Collaboration and Project Management",
    "zhTitle": "第45課：AI 小組報告與成果整合",
    "enTitle": "Lesson 45: AI Team Deliverable Integration",
    "zhValueTip": "整合組員內容、統一格式語氣引用與視覺，完成最終版並彩排與模擬提問，產出可上台成果。",
    "enValueTip": "Integrate teammates’ work into one voice and style, finalize, rehearse, and mock instructor Q&A for a stage-ready team deliverable.",
    "zhOutcome": "我的整合檢核表＋最終版小組成果（報告／簡報）可發表包",
    "enOutcome": "My Integration Checklist + Final Team Deliverable Pack (report/slides)",
    "zhConcept": "Chapter 9 收束在「可上台的單一成果」。整合不是把檔案貼在一起，而是統一標題層級、用語、人稱與時態、引用格式、圖表樣式，並補邏輯斷裂、刪重複。流程：凍結各部 raw→統整者依大綱拼接→AI 協助找重複／語氣不一致／斷裂→人工決定保留誰的表述→統一視覺母片→輸出 final→彩排→模擬老師提問。AI 可比較多版段落並建議融合句，但不可擅自當最終決策；衝突觀點要標待討論，不可捏造「全組已同意某結論」。引用與數據必須可追溯到組員來源；缺來源就刪或待補，不可用模型補假文獻。簡報彩排對時長與交接；模擬提問準備方法、限制、分工相關問題（誰做哪部分也要答得出）。完整成果整合流程寫進檢核表：格式、語氣、引用、圖表、頁碼、檔名、權限、備份。連回 Chapter 4／5／8：內容品質、簡報可講性、檔案與溝通規範，在此合併交卷。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。當分工、會議、任務、規劃與整合形成閉環，換專題也能複製同一套協作作業系統。跨系或競賽情境同樣適用：先對齊目標與責任，再談工具；工具只是載體，紀律才是產能。此外，請把本課產出存成 raw／final：raw 保留討論與 AI 草稿，final 是全組確認後可執行或可繳交的版本。每次協作結束寫三行：今天澄清的責任、仍待確認的事項、下次會議第一個議程。不要用 AI 捏造決策、進度或組員承諾；資訊不足就要標待確認並保留原始資料。",
    "enConcept": "Freeze parts, stitch by outline, use AI to flag inconsistency/duplication/gaps, humans resolve voice, unify visuals, finalize, rehearse, and mock Q&A—without inventing consensus or sources.",
    "zhCaseStudy": "四人報告初拼時出現三種「因此」與兩套 APA。統整者用檢核表＋AI 差異報告，開會表決用語與引用。簡報母片統一後彩排兩次，模擬問到「樣本限制」由研究 R 回答。上台流暢，老師稱像同一組寫的。",
    "enCaseStudy": "A team used an integration checklist and voted on voice/citations, then rehearsed Q&A so the researcher owned the sampling limit question.",
    "zhWorkflow": [
      "收集各部 raw 並凍結版本",
      "依大綱整合並去重補邏輯",
      "統一格式／語氣／引用／視覺",
      "鎖定 final 與備份",
      "彩排＋模擬提問並修正"
    ],
    "enWorkflow": [
      "Collect and freeze part files",
      "Integrate by outline; dedupe and fix gaps",
      "Unify format, voice, citations, visuals",
      "Lock final + backup",
      "Rehearse and mock Q&A, then patch"
    ],
    "zhCommonMistakes": [
      "只合併檔案不統一",
      "AI 假造共識與引用",
      "不彩排交接",
      "找不到 final"
    ],
    "enCommonMistakes": [
      "Merge without unification",
      "AI-faked consensus/citations",
      "No handoff rehearsal",
      "Lost final file"
    ],
    "zhExcellentExample": "可發表包：單一語氣與格式、引用一致、視覺統一、final 明確、彩排紀錄與 Q&A 卡齊全。",
    "enExcellentExample": "A stage-ready pack has one voice/format, consistent citations, unified visuals, a clear final, rehearsal notes, and Q&A cards.",
    "zhPrompt": "【Prompt 1｜多組員文字整合助手】\n大綱：\n（貼上）\n組員段落（標作者）：\n（貼上）\n請指出：重複、矛盾、語氣不一致、邏輯斷裂；給融合建議句並標「建議」。不要刪除原始作者標記；不要捏造全組已決議的結論；資訊不足列待確認。",
    "enPrompt": "[Prompt 1 | Multi-author Integration] Flag duplication, contradictions, voice drift, and gaps; suggest merges as suggestions only—keep authorship; invent no consensus.",
    "zhCoachPrompt": "【Prompt 2｜統一語氣與格式／引用】\n目標格式：［APA／系上規定］；目標語氣：［ ］\n問題片段：\n（貼上）\n請給統一規則清單與改寫示例。不要新增未提供的文獻；缺書目標待補。",
    "enCoachPrompt": "[Prompt 2 | Voice/Format/Citation Unifier] Provide rules and rewrite examples; add no new sources; mark missing bibliography fields.",
    "zhFeedbackPrompt": "【Prompt 3｜模擬老師提問小組成果】\n成果摘要與分工：\n（貼上）\n請一次一題追問方法、限制、證據、分工。結束給薄弱點清單。禁止要求回答你們文件中不存在且被捏造的數據。",
    "enFeedbackPrompt": "[Prompt 3 | Instructor Team Q&A] Ask one question at a time on method/limits/evidence/roles; no fabricated data demands.",
    "zhExample": "矛盾：A 寫「顯著提升」、B 寫「差異不大」→標待討論。｜統一後：報告改為「在樣本限制下呈現上升趨勢，不作過度推論」。",
    "enExample": "A contradiction flagged for discussion, then resolved into a cautious, scope-honest claim.",
    "zhPractice": "對真實小組稿跑整合檢核表。；完成統一與 final 鎖定。；彩排並模擬至少 8 題。；Challenge：請組外同學只聽 3 分鐘，問「你們的結論一句話是什麼？」若答不出，回去改主張句。",
    "enPractice": "Run the integration checklist on a real draft.；Unify and lock final.；Rehearse with ≥8 mock Qs.；Challenge: an outsider must restate your one-sentence conclusion after 3 minutes.",
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
    "zhNotePrompt": "列出整合時修掉的 3 類問題（重複／語氣／引用）與 final 檔名。",
    "enNotePrompt": "List three integration fixes (dupe/voice/citation) and the final filename.",
    "zhDeliverableChecklist": [
      "整合檢核全勾",
      "語氣格式引用統一",
      "視覺一致",
      "final 與備份就緒",
      "彩排與模擬提問完成"
    ],
    "enDeliverableChecklist": [
      "Integration checklist complete",
      "Voice/format/citations unified",
      "Visuals consistent",
      "Final + backup ready",
      "Rehearsal + mock Q&A done"
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
    "resources": [
      {
        "name": "Google Docs",
        "url": "https://docs.google.com",
        "note": "共編整合與建議模式"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "final 與版本存放"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "去重、語氣差異與模擬提問"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "對組內來源做 grounded 檢查"
      },
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "整合檢核表與 Q&A 卡"
      },
      {
        "name": "Slack",
        "url": "https://slack.com",
        "note": "整合決策與確認串（若團隊使用）"
      }
    ],
    "challenge": "在截止前完成真實小組成果的整合 final，並進行一次完整彩排＋模擬提問；會後更新檢核表與錯漏清單。"
  },
  {
    "icon": "💡",
    "title": "AI 專案主題發想與需求定義",
    "description": "從興趣、科系、生活問題與社會議題發想專案，定義使用者、痛點、問題陳述與價值主張，並做可行性檢查。",
    "goal": "我的專案一頁需求書（使用者／痛點／問題陳述／價值主張／目標）",
    "estimatedTime": "55-75 分鐘",
    "difficulty": "初階",
    "tags": [
      "專案發想",
      "需求定義",
      "價值主張",
      "Chapter10"
    ],
    "progress": 0,
    "completed": false,
    "locked": false,
    "chapterIndex": 9,
    "chapterZh": "AI 個人專案與作品集",
    "chapterEn": "AI Personal Projects and Portfolio",
    "zhTitle": "第46課：AI 專案主題發想與需求定義",
    "enTitle": "Lesson 46: Project Ideation and Requirements Definition",
    "zhValueTip": "從興趣、科系、生活問題與社會議題發想專案，定義使用者、痛點、問題陳述與價值主張，並做可行性檢查。",
    "enValueTip": "Ideate from interests, major, life problems, and social issues; define users, pains, problem statement, value proposition, and feasibility.",
    "zhOutcome": "我的專案一頁需求書（使用者／痛點／問題陳述／價值主張／目標）",
    "enOutcome": "My One-Page Project Brief (users/pains/problem/value/goals)",
    "zhConcept": "大學生個人專案最容易做成「功能展示」：做了聊天機器人、做了網站，卻說不清為誰解決什麼問題。這一課把發想拉回需求：誰是使用者、有何痛點、你的方案價值是什麼、成功長什麼樣、你是否有時間與技能做得到。發想四條路徑可並行：個人興趣（你願意長期投入）、科系專業（你能講出方法）、生活問題（你觀察得到）、社會議題（有公共意義）。每條路徑先列 5 個候選，再收斂。接著定義使用者角色：不是「所有人」，而是例如「大一住校生、每週工讀 12 小時、需要在兩小時內排課」。痛點要可觀察：花太多時間、容易出錯、資訊分散、焦慮等。問題陳述模板：對［使用者］而言，當［情境］時，因為［原因］，導致［不良結果］；目前替代方案是［ ］，仍不足因為［ ］。價值主張：我們幫助［使用者］透過［方案］達成［成果］，相較［替代］更［差異］。專案目標要可檢查：例如「兩週內完成可演示的排課助手 MVP，讓 5 位同學完成一次真實排課流程」。可行性檢查：時間、技能、資料取得、設備、倫理／個資、是否需付費 API。不可行就縮小問題，不要硬撐華麗範圍。AI 可協助發散與收斂、改寫問題陳述，但不可捏造訪談、問卷結果或「使用者都說很好」。事實／假設／建議必須分開；缺訪談就標「假設待驗證」。完整案例：資管系學生從「每學期排課崩潰」出發→使用者＝大二必修衝突多的學生→痛點＝規則散落在系網與口耳→價值＝一頁規則＋衝突檢查→目標＝可演示規則檢查工具，而非完整選課系統。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。",
    "enConcept": "Ideate from interest/major/life/social paths, define specific users and observable pains, write a problem statement and value proposition, set checkable goals, and run feasibility. AI helps structure; never invent interviews or metrics.",
    "zhCaseStudy": "完整專案發想案例：心理系小禾想「做 App 治焦慮」，範圍過大。她用四路徑收斂到「考試週睡前反芻」的具體情境，使用者角色寫成「大三準備證照、21:00 後無法關機的人」。痛點是「筆記散落＋自我批評迴圈」。問題陳述與價值主張改為「睡前 10 分鐘結構化卸貨＋明日三行動」，可行性排除醫療診斷功能。兩週後她有可演示流程，作品集故事清楚，不再是空泛心理健康 App。",
    "enCaseStudy": "Xiao He narrowed a vague anxiety app into a feasible exam-week wind-down MVP with a clear user, pain, and non-goals.",
    "zhWorkflow": [
      "用四路徑各列候選主題",
      "選 1-2 個做使用者角色與痛點",
      "寫問題陳述與價值主張",
      "設定可檢查目標並做可行性檢查",
      "請 AI 檢查清晰度，分開事實／假設／建議"
    ],
    "enWorkflow": [
      "List candidates from four ideation paths",
      "Draft user personas and pains for 1–2 ideas",
      "Write problem statement and value proposition",
      "Set checkable goals and feasibility gates",
      "Ask AI to clarify while separating facts/assumptions/suggestions"
    ],
    "zhCommonMistakes": [
      "先選酷技術再找問題",
      "使用者＝所有人",
      "捏造訪談與數據",
      "目標無法驗證"
    ],
    "enCommonMistakes": [
      "Tech first, problem later",
      "User = everyone",
      "Invented interviews/metrics",
      "Unverifiable goals"
    ],
    "zhExcellentExample": "優秀需求書：特定使用者、可觀察痛點、清楚問題陳述、可辯護價值主張、可檢查目標、可行性與待驗證假設分明。",
    "enExcellentExample": "A strong brief has a specific user, observable pains, a crisp problem/value pair, checkable goals, and labeled assumptions.",
    "zhPrompt": "【Prompt 1｜依科系與興趣發想專案】\n科系：［ ］；興趣：［ ］；可用時間：［ ］；技能：［ ］\n請各從「興趣／科系／生活問題／社會議題」給 5 個大學生可做的專案候選，並標難度與風險。不要捏造我沒說過的經歷；把建議標成建議；資訊不足先問我。",
    "enPrompt": "[Prompt 1 | Ideation from Major & Interests] Generate 5 ideas per path with difficulty/risk; invent no biography; label suggestions; ask if info is missing.",
    "zhCoachPrompt": "【Prompt 2｜問題陳述／角色／痛點／價值主張】\n我的想法：\n（貼上）\n已知觀察（事實）：\n（貼上）\n尚未驗證的假設：\n（貼上）\n請輸出：使用者角色、痛點、問題陳述、價值主張、專案目標。嚴格分開事實／假設／建議；不可捏造訪談內容或數據；不足處列待確認。",
    "enCoachPrompt": "[Prompt 2 | Problem & Value] Produce persona, pains, problem, value, goals; separate facts/assumptions/suggestions; invent no interviews or data.",
    "zhFeedbackPrompt": "【Prompt 3｜可行性與範圍驗收】\n需求書：\n（貼上）\n請檢查：是否只做功能不做問題、目標是否可驗證、範圍是否過大、有無把假設當事實。給縮小範圍的三個選項，不要替我宣稱專案已成功。",
    "enFeedbackPrompt": "[Prompt 3 | Feasibility QA] Check problem-focus, verifiable goals, scope risk, and assumption leakage; offer three shrink options—no fake success claims.",
    "zhExample": "使用者：大二必修衝堂多的學生。｜痛點：規則散落。｜價值：一頁規則＋衝突檢查。｜目標：兩週內 5 人完成一次真實排課演示。｜假設：系上規則可整理成條列（待確認）。",
    "enExample": "A course-conflict helper brief with specific user, pain, value, checkable demo goal, and labeled assumption.",
    "zhPractice": "完成四路徑發想表。；寫出一頁需求書。；標註事實／假設／待確認。；Challenge：找一位目標使用者聊 10 分鐘（不做假訪談報告）；只記錄對方原話痛點，用來修正假設。",
    "enPractice": "Finish the four-path list.；Write the one-page brief.；Label facts/assumptions/pending.；Challenge: a real 10-minute user chat; record verbatim pains only—no fabricated interview write-up.",
    "zhQuizItems": [
      {
        "q": "個人專案定義需求時，最應優先釐清的是？",
        "options": [
          "先選最潮的技術棧",
          "為誰解決什麼可觀察的問題",
          "先做精美 Logo",
          "先宣稱已有上萬用戶"
        ],
        "answer": 1,
        "explain": "專案核心是問題與使用者，不是炫技。"
      },
      {
        "q": "價值主張最不該包含？",
        "options": [
          "對誰、透過什麼、達成什麼、相對替代的差異",
          "捏造的使用者好評與未驗證數據",
          "可檢查的成果方向",
          "清楚的差異點"
        ],
        "answer": 1,
        "explain": "不可捏造訪談與數據。"
      },
      {
        "q": "可行性檢查的意義是？",
        "options": [
          "讓範圍越大越好",
          "在時間／技能／資料／倫理限制下決定做不做得完",
          "可忽略個資議題",
          "由 AI 保證一定成功"
        ],
        "answer": 1,
        "explain": "可行性決定能不能誠實交付。"
      }
    ],
    "enQuizItems": [
      {
        "q": "When defining a personal project, clarify first:",
        "options": [
          "The trendiest stack",
          "Who you help and what observable problem you solve",
          "A polished logo",
          "Claims of 10k users"
        ],
        "answer": 1,
        "explain": "Problem and user beat tech flexing."
      },
      {
        "q": "A value proposition should not include:",
        "options": [
          "Who/how/outcome vs alternatives",
          "Fabricated praise and unverified metrics",
          "A checkable outcome direction",
          "A clear differentiator"
        ],
        "answer": 1,
        "explain": "Invented interviews/metrics are forbidden."
      },
      {
        "q": "Feasibility checks exist to:",
        "options": [
          "Maximize scope",
          "Decide what is finishable under time/skill/data/ethics constraints",
          "Ignore privacy",
          "Let AI guarantee success"
        ],
        "answer": 1,
        "explain": "Feasibility enables honest delivery."
      }
    ],
    "zhNotePrompt": "貼上問題陳述、價值主張，以及三條標成假設的句子。",
    "enNotePrompt": "Paste your problem statement, value proposition, and three sentences labeled as assumptions.",
    "zhDeliverableChecklist": [
      "四路徑發想完成",
      "使用者角色具體",
      "痛點可觀察",
      "問題陳述與價值主張完成",
      "可行性與待確認已列出"
    ],
    "enDeliverableChecklist": [
      "Four-path ideation done",
      "Specific persona",
      "Observable pains",
      "Problem + value written",
      "Feasibility and pending listed"
    ],
    "zhScorecard": [
      "問題導向",
      "使用者清楚",
      "主張可辯護",
      "目標可驗",
      "假設透明"
    ],
    "enScorecard": [
      "Problem-led",
      "Clear user",
      "Defendable value",
      "Verifiable goals",
      "Transparent assumptions"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "需求書與發想看板"
      },
      {
        "name": "Figma",
        "url": "https://www.figma.com",
        "note": "快速畫使用者情境草圖"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "發想收斂與陳述改寫（禁捏造）"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "存放訪談原話與需求書版本"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "一頁需求書視覺化（可選）"
      }
    ],
    "challenge": "產出經可行性檢查的一頁需求書，並附「待驗證假設」清單；若無真實訪談，不得寫成已驗證洞察。"
  },
  {
    "icon": "🧱",
    "title": "AI 專案規劃與 MVP 設計",
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
    "locked": true,
    "chapterIndex": 9,
    "chapterZh": "AI 個人專案與作品集",
    "chapterEn": "AI Personal Projects and Portfolio",
    "zhTitle": "第47課：AI 專案規劃與 MVP 設計",
    "enTitle": "Lesson 47: Project Planning and MVP Design",
    "zhValueTip": "把需求收成 MVP：必要／非必要功能、MoSCoW 優先序、使用者流程、里程碑、風險、測試與成功指標。",
    "enValueTip": "Turn the brief into an MVP with Must/Should/Could/Won’t, user flows, milestones, risks, tests, and success metrics.",
    "zhOutcome": "我的 MVP 計畫書（功能優先序／流程／里程碑／成功指標）",
    "enOutcome": "My MVP Plan (priorities/flows/milestones/success metrics)",
    "zhConcept": "MVP（Minimum Viable Product）是「能驗證核心價值的最小可演示版本」，不是簡陋交差，也不是完整產品。先列功能，再用 MoSCoW：Must（沒有就不算解決問題）、Should（重要可下一版）、Could（加分）、Won't（本輪明確不做）。必要功能對齊價值主張；非必要常是登入系統、華麗動畫、多主題、完整後台——對大學生時程通常是 Won't。使用者流程用 5-8 步寫「從進入到完成核心任務」；每步對應畫面或操作。功能拆解成可完成的工作包，排入里程碑與時程。風險：資料取得、API 額度、技術不會、時間被期中考吃掉。每項風險要有備案（改手動、改靜態示意、縮小 Must）。測試方式：自己走完流程、找 2-3 位目標使用者觀察（可非正式）、檢查成功指標。成功指標必須可觀察：完成任務人數、錯誤次數、時間，不可捏造。AI 可協助拆功能與排程，但不可把 Won't 寫成已完成，不可發明測試結果。完整 MVP 案例：排課衝突檢查——Must：輸入課表＋規則檢查＋衝突列表；Should：匯出；Could：美化；Won't：自動搶課。里程碑：規則表→原型→3 人測試→演示。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。",
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
    "challenge": "鎖定一份兩週可完成的 MVP 計畫：含 MoSCoW、流程、里程碑與成功指標；請同學檢查是否仍有範圍膨脹。"
  },
  {
    "icon": "🐙",
    "title": "GitHub 專案管理與版本紀錄",
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
    "locked": true,
    "chapterIndex": 9,
    "chapterZh": "AI 個人專案與作品集",
    "chapterEn": "AI Personal Projects and Portfolio",
    "zhTitle": "第48課：GitHub 專案管理與版本紀錄",
    "enTitle": "Lesson 48: GitHub Project Management and Version History",
    "zhValueTip": "用簡化 GitHub 流程管理專案：Repo、Commit、Branch、PR、Issue、README、截圖與 Demo，清楚記錄真實進度。",
    "enValueTip": "Manage the project with a beginner-friendly GitHub workflow—repo, commits, branches, PRs, issues, README, screenshots, and demos—without overcomplicating Git.",
    "zhOutcome": "我的 GitHub 專案庫（README＋基本版本紀錄＋Issue／里程碑對應）",
    "enOutcome": "My GitHub Repo (README + basic history + issues mapped to milestones)",
    "zhConcept": "GitHub 對大學生作品集的價值是「可追溯的誠實紀錄」：別人看得到你如何一步步做，而不是只丟最終 zip。基本概念：Repository 專案容器；Commit 是一次可說明的變更快照；Branch 用來分開嘗試；Pull Request 用於合併與說明；Issue 追蹤任務與 bug。初學者簡化工作流程（避免過度複雜）：main 保持可演示；日常在 feature 小分支開發；完成一小塊就 commit；用 PR 合回 main；用 Issue 對應 MVP 的 Must 項。不必一開始就上 rebasing、submodule、複雜 monorepo。先做到：有意義的 commit message、檔名清楚、README 能讓陌生人 3 分鐘懂如何執行。README 建議含：專案一句話、問題與對象、功能（標示已完成／未完成）、安裝或開啟方式、截圖／Demo 連結、時程與反思連結、授權與聯絡。版本紀錄不要造假：未完成功能寫在 Roadmap，不要寫成 Done。截圖與 Demo 必須來自真實畫面。AI 可幫你起草 README 與 commit 說明，但不可捏造星數、下載量、測試通過率或從未做過的功能。完整 GitHub 案例：排課助手 repo——Issues 對應 Must、每完成檢查規則就 commit、README 含 3 張截圖與「Won't：自動搶課」、Demo 用短影片連結。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。",
    "enConcept": "Use a simple main/feature/PR/issue workflow, write an honest README with screenshots/demo, and keep commits meaningful. AI may draft docs; never invent metrics or completed features.",
    "zhCaseStudy": "完整 GitHub 專案案例：小安以前交作業只傳壓縮檔。改用 GitHub 後，老師能從 commit 看到她如何修衝突規則 bug。第一次 README 把未做的登入寫成完成，同學一跑就爆；她修正為清楚標「未實作」，並補截圖。求職作品集因此多了可信度：過程可見、範圍誠實。",
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
    "challenge": "讓你的 MVP 專案在 GitHub 上可被同學依 README 啟動；補齊誠實的完成／未完成清單與至少兩張真實截圖。"
  },
  {
    "icon": "🌐",
    "title": "AI 個人網站與作品展示",
    "description": "規劃個人網站架構（首頁／關於／專案／技能／聯絡），設計專案卡片與詳細頁，並部署到 Vercel 或 GitHub Pages。",
    "goal": "我的個人網站架構圖＋可訪問的作品展示頁（至少 1 個專案詳情）",
    "estimatedTime": "60-90 分鐘",
    "difficulty": "中階",
    "tags": [
      "個人網站",
      "作品展示",
      "部署",
      "Chapter10"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 9,
    "chapterZh": "AI 個人專案與作品集",
    "chapterEn": "AI Personal Projects and Portfolio",
    "zhTitle": "第49課：AI 個人網站與作品展示",
    "enTitle": "Lesson 49: Personal Website and Project Showcase",
    "zhValueTip": "規劃個人網站架構（首頁／關於／專案／技能／聯絡），設計專案卡片與詳細頁，並部署到 Vercel 或 GitHub Pages。",
    "enValueTip": "Plan a portfolio site (home/about/projects/skills/contact), design project cards and detail pages, and deploy to Vercel or GitHub Pages.",
    "zhOutcome": "我的個人網站架構圖＋可訪問的作品展示頁（至少 1 個專案詳情）",
    "enOutcome": "My Site IA Map + Live Showcase Page (≥1 project detail)",
    "zhConcept": "個人網站目的是讓人在短時間內理解：你是誰、你解決過什麼問題、如何聯繫你。不是堆動畫。建議資訊架構：首頁（一句定位＋精選專案）、關於我、專案列表（卡片）、專案詳細頁、技能、聯絡方式。專案卡片含：標題、一句問題、技術／方法標籤、封面圖、連結。詳細頁用「問題→角色→方法→成果→反思→連結（GitHub／Demo）」。響應式概念：手機先能讀完主訊息與按鈕；字級與間距可點擊。不需一次完美設計系統，但要避免橫向溢出與過小點擊區。部署：靜態站可用 GitHub Pages；前端框架常用 Vercel。部署後做內容檢查：連結有效、圖片有說明、未完成專案不寫成上線產品。AI 可產生架構文案與頁面大綱，但不可捏造任職經歷、獎項、使用者數據。Behance／Dribbble 可參考版面，不抄襲。完整作品網站架構案例：首頁「協助大學生把學習流程系統化」→精選 3 專案卡→詳細頁含截圖與 GitHub→關於含學習歷程→聯絡 Email／表單。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。每次結束寫三行：今天釐清的問題、仍待驗證的假設、下一個可演示的最小步驟。作品集與 GitHub 上的完成度必須一致；不要用 AI 把未完成項目寫成已完成，也不要捏造數據或訪談。當發想、MVP、版本紀錄、網站與發表形成閉環，你換專題也能重複同一套個人專案系統。求職或競賽場合同樣適用：先講清楚問題與證據，再談技術細節；誠實的限制說明往往比誇大更加分。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可公開或可繳交且狀態誠實的版本。",
    "enConcept": "Build a simple IA for home/about/projects/skills/contact, write problem-led project pages, keep mobile readable, deploy via Pages/Vercel, and never invent credentials or metrics.",
    "zhCaseStudy": "完整作品網站架構案例：應屆生小哲只有 GitHub。他用 GitHub Pages 做極簡站，首頁一句定位，專案卡連到 README。第一版塞滿難詞；改成問題導向後，面試官 30 秒就點進排課專案。他補手機版檢查，修復按鈕過小。",
    "enCaseStudy": "Xiao Zhe shipped a minimal Pages site that led with problems, not jargon, and fixed mobile tap targets after a quick test.",
    "zhWorkflow": [
      "寫網站目的與訪客任務",
      "畫 IA：首頁／關於／專案／技能／聯絡",
      "完成專案卡與詳細頁文案（誠實）",
      "實作並部署到 Pages 或 Vercel",
      "做內容與手機檢查清單"
    ],
    "enWorkflow": [
      "Define site purpose and visitor jobs",
      "Map IA pages",
      "Write honest project cards/details",
      "Build and deploy to Pages or Vercel",
      "Run content + mobile checklist"
    ],
    "zhCommonMistakes": [
      "只有酷炫動畫沒有專案故事",
      "死連結與破圖",
      "捏造經歷數據",
      "手機無法閱讀"
    ],
    "enCommonMistakes": [
      "Animation without story",
      "Broken links/images",
      "Invented credentials/metrics",
      "Unreadable on mobile"
    ],
    "zhExcellentExample": "優秀網站：定位一句話清楚、專案卡可掃讀、詳細頁含問題方法成果、部署可開、手機可讀、資訊誠實。",
    "enExcellentExample": "A strong site has a clear one-liner, scannable cards, problem-method-outcome pages, a live URL, mobile readability, and honest claims.",
    "zhPrompt": "【Prompt 1｜個人網站架構規劃】\n我的定位一句話：［ ］；真實專案清單（完成度）：\n（貼上）\n請規劃網站地圖與每頁必備區塊，並建議專案排序。未完成專案不得建議寫成已上線產品；缺少作品就建議如何誠實呈現進行中。",
    "enPrompt": "[Prompt 1 | Site IA] Propose sitemap and page blocks from my real projects; never present unfinished work as shipped products.",
    "zhCoachPrompt": "【Prompt 2｜專案卡片與詳細頁文案】\n專案事實：\n（貼上）\n請寫卡片短文與詳細頁大綱：問題、角色、方法、成果、反思、連結。成果只能用我提供的事實；沒有數據就不要編；分開事實／建議。",
    "enCoachPrompt": "[Prompt 2 | Project Card & Detail Copy] Draft card/detail outlines from my facts only; invent no metrics; separate facts/suggestions.",
    "zhFeedbackPrompt": "【Prompt 3｜網站內容與部署檢查】\n網站地圖或線上連結說明：\n（貼上）\n請給上線前檢查表：連結、圖片、手機、誠實度、聯絡方式。指出任何像捏造經歷的句子。不要因為「看起來比較強」而建議添加假獎項。",
    "enFeedbackPrompt": "[Prompt 3 | Content & Launch QA] Provide a pre-launch checklist and flag fabricated-sounding claims—never suggest fake awards.",
    "zhExample": "卡片：排課衝突檢查｜一句話問題｜標籤：規則／表格｜按鈕：GitHub／Demo。｜詳細頁含 3 截圖與反思「為何不做自動搶課」。",
    "enExample": "A problem-led project card plus a detail page with screenshots and an explicit non-goal reflection.",
    "zhPractice": "完成網站 IA。；寫至少一個專案詳細頁。；部署並取得可訪問連結。；Challenge：用手機打開網站，請同學在 60 秒內說出你的定位與代表專案；說不出就改首頁。",
    "enPractice": "Finish IA.；Write ≥1 project detail.；Deploy a live URL.；Challenge: on mobile, a classmate must state your positioning and flagship project in 60 seconds.",
    "zhQuizItems": [
      {
        "q": "個人作品網站首要任務通常是？",
        "options": [
          "放最多背景影片",
          "讓人快速理解你是誰、代表專案與如何聯絡",
          "隱藏所有專案連結",
          "只放無說明的圖片牆"
        ],
        "answer": 1,
        "explain": "清楚定位與路徑比炫技重要。"
      },
      {
        "q": "專案詳細頁較佳結構是？",
        "options": [
          "只有技術名詞堆疊",
          "問題、角色、方法、成果、反思與連結",
          "只貼程式碼無脈絡",
          "捏造用戶增長圖"
        ],
        "answer": 1,
        "explain": "故事化且可驗證的結構最佳。"
      },
      {
        "q": "部署後仍須檢查？",
        "options": [
          "都不用檢查",
          "連結／手機閱讀／內容誠實度",
          "只檢查桌面動畫",
          "刪掉聯絡方式更神秘"
        ],
        "answer": 1,
        "explain": "可訪問性與誠實度是上線門檻。"
      }
    ],
    "enQuizItems": [
      {
        "q": "A portfolio site’s primary job is usually to:",
        "options": [
          "Maximize background video",
          "Quickly show who you are, flagship work, and contact path",
          "Hide all project links",
          "Show an unexplained image wall"
        ],
        "answer": 1,
        "explain": "Clarity beats spectacle."
      },
      {
        "q": "Best project detail structure?",
        "options": [
          "Tech-jargon only",
          "Problem, role, method, outcome, reflection, links",
          "Code with no context",
          "Fake growth charts"
        ],
        "answer": 1,
        "explain": "Story plus evidence works best."
      },
      {
        "q": "After deploy you still must check:",
        "options": [
          "Nothing",
          "Links, mobile readability, honesty",
          "Desktop animation only",
          "Removing contact to be mysterious"
        ],
        "answer": 1,
        "explain": "Access and honesty are launch gates."
      }
    ],
    "zhNotePrompt": "貼上網站地圖與上線 URL（或部署計畫），以及代表專案卡片一句話。",
    "enNotePrompt": "Paste your sitemap, live URL (or deploy plan), and one-line flagship project card.",
    "zhDeliverableChecklist": [
      "IA 完成",
      "專案卡與詳細頁完成",
      "已部署可訪問",
      "手機可讀",
      "無捏造經歷／數據"
    ],
    "enDeliverableChecklist": [
      "IA done",
      "Cards + detail done",
      "Live URL works",
      "Mobile readable",
      "No invented credentials/metrics"
    ],
    "zhScorecard": [
      "定位清楚",
      "專案可掃",
      "詳細可懂",
      "可訪問",
      "誠實"
    ],
    "enScorecard": [
      "Clear positioning",
      "Scannable projects",
      "Understandable details",
      "Accessible",
      "Honest"
    ],
    "resources": [
      {
        "name": "GitHub Pages",
        "url": "https://pages.github.com",
        "note": "靜態個人站部署"
      },
      {
        "name": "Vercel",
        "url": "https://vercel.com",
        "note": "前端專案常見部署"
      },
      {
        "name": "Figma",
        "url": "https://www.figma.com",
        "note": "版面與組件草稿"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "封面圖與簡單頁面視覺"
      },
      {
        "name": "Behance",
        "url": "https://www.behance.net",
        "note": "作品呈現參考（勿抄襲）"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "架構與文案輔助"
      }
    ],
    "challenge": "部署一個可公開訪問的個人網站（可極簡），至少包含首頁定位與一個專案詳細頁，並通過手機 60 秒理解測試。"
  },
  {
    "icon": "🏆",
    "title": "AI 作品集整理與最終發表",
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
    "locked": true,
    "chapterIndex": 9,
    "chapterZh": "AI 個人專案與作品集",
    "chapterEn": "AI Personal Projects and Portfolio",
    "zhTitle": "第50課：AI 作品集整理與最終發表",
    "enTitle": "Lesson 50: Portfolio Curation and Final Presentation",
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
    "challenge": "完成最終作品集包並進行一次 5 分鐘發表（課程／社團／自我錄影皆可）；附模擬評審 5 題答題要點與會後修改清單。"
  },
  {
    "icon": "📄",
    "title": "AI 履歷撰寫與優化",
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
    "zhTitle": "第51課：AI 履歷撰寫與優化",
    "enTitle": "Lesson 51: AI Resume Writing and Optimization",
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
    "challenge": "針對一個真實職缺完成「對齊履歷＋求職信」；用 JD 自評匹配度，並列出仍誠實存在的技能缺口與兩週補強計畫。"
  },
  {
    "icon": "💼",
    "title": "AI LinkedIn 個人品牌經營",
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
    "locked": true,
    "chapterIndex": 10,
    "chapterZh": "AI 求職與職涯發展",
    "chapterEn": "AI Job Search and Career Development",
    "zhTitle": "第52課：AI LinkedIn 個人品牌經營",
    "enTitle": "Lesson 52: AI LinkedIn Personal Branding",
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
    "challenge": "在一週內完成 LinkedIn 主頁升級（Headline／About／精選），並發布一則不造假的專案或學習貼文。"
  },
  {
    "icon": "🎙️",
    "title": "AI 面試模擬與回答技巧",
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
    "locked": true,
    "chapterIndex": 10,
    "chapterZh": "AI 求職與職涯發展",
    "chapterEn": "AI Job Search and Career Development",
    "zhTitle": "第53課：AI 面試模擬與回答技巧",
    "enTitle": "Lesson 53: AI Interview Simulation and Answering Skills",
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
    "challenge": "針對一個真實投遞職缺完成一場 25 分鐘模擬面試（含追問），並交出改進前後對照的一題 STAR。"
  },
  {
    "icon": "🗣️",
    "title": "AI 自我介紹與個人故事",
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
    "locked": true,
    "chapterIndex": 10,
    "chapterZh": "AI 求職與職涯發展",
    "chapterEn": "AI Job Search and Career Development",
    "zhTitle": "第54課：AI 自我介紹與個人故事",
    "enTitle": "Lesson 54: AI Self-Introduction and Personal Narrative",
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
    "challenge": "產出可上台的 30／90 秒介紹錄音；請兩位同學回饋「方向是否一秒聽懂」，並迭代一版。"
  },
  {
    "icon": "🗺️",
    "title": "AI 求職策略與職涯規劃",
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
    "locked": true,
    "chapterIndex": 10,
    "chapterZh": "AI 求職與職涯發展",
    "chapterEn": "AI Job Search and Career Development",
    "zhTitle": "第55課：AI 求職策略與職涯規劃",
    "enTitle": "Lesson 55: AI Job Search Strategy and Career Planning",
    "zhValueTip": "建立求職管道與週節奏、用 AI 做職缺與公司分析、比較 Offer，並做近／中期職涯規劃。",
    "enValueTip": "Build channels and weekly cadence, analyze roles/companies with AI, compare offers, and draft near/mid-term career plans.",
    "zhOutcome": "我的 8 週求職作戰計畫＋職缺追蹤表＋Offer 比較表＋一年職涯草案",
    "enOutcome": "My 8-Week Job Search Plan + Pipeline Tracker + Offer Scorecard + 1-Year Career Draft",
    "zhConcept": "求職是專案不是情緒：要有目標角色、管道組合、每週產出（投遞數、連結數、模擬面試）、追蹤狀態與複盤。管道：104／1111／Indeed／Yourator／CakeResume／LinkedIn／內推／職涯中心。不同管道投遞節奏不同，但履歷版本要可追溯。AI 協助職缺分析：把 JD 轉成你的匹配分數、缺口、該強調的專案。公司研究：商業模式、團隊、文化訊號、風險（過勞傳聞需多方查證）。Offer 比較不只看月薪：學習曲線、導師、遠距、加班文化、合約、地點、與長期方向契合。做加權表，避免只被簽約獎金帶走。職涯規劃分層：未來 3 個月（實習／作品）、1 年（技能與角色）、3 年（方向假設）。方向可改，但每季要有可驗證行動。求職信與追蹤信也是策略的一部分：投遞後合理追蹤，不轟炸。拒絕與接受都要專業短訊。AI 可排程與做比較表，但不可替你決定人生，也不可捏造公司內部薪資帶；資訊不足要標示。Chapter 11 閉環：履歷→品牌→面試→介紹→策略。連回作品集，你賣的是可轉移能力與證據。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。履歷、LinkedIn、面試故事與作品集必須一致；不要用 AI 捏造經歷、績效、面試或 Offer。當履歷、品牌、面試、介紹與策略形成閉環，你換產業也能重複同一套求職作業系統。第一份工作的目標往往是可學習的環境與可驗證成長；把選擇標準寫下來，比臨時被數字帶走更穩。此外，請把本課產出存成 raw／final：raw 保留草稿與 AI 對話，final 是可投遞或可公開且事實正確的版本。每次求職行動後寫三行：投了什麼、學到什麼、下次改什麼；讓策略可迭代而不是情緒海投。",
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
    "challenge": "建立並使用職缺追蹤表至少追蹤 10 筆真實投遞／意向；完成一份書面 Offer 比較模板（即使尚無 Offer 也用兩個假想情境練習權重，並標示為模擬）。"
  },
  {
    "icon": "🧠",
    "title": "建立個人 AI 知識管理系統",
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
    "zhTitle": "第56課：建立個人 AI 知識管理系統",
    "enTitle": "Lesson 56: Build Your Personal AI Knowledge System",
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
    "challenge": "完成可示範的 Second Brain 空架構＋一科完整樣板；錄 2 分鐘螢幕說明「檔案放哪、如何搜、如何備份」，不得宣稱四年資料已全部遷移完成。"
  },
  {
    "icon": "⚙️",
    "title": "建立個人 AI 學習工作流",
    "description": "把大學常見任務做成標準工作流：輸入→處理→輸出→檢查→保存，涵蓋筆記到求職並保留人工審核。",
    "goal": "我的 AI Workflow 手冊（至少 5 套）＋每週執行節奏",
    "estimatedTime": "70-90 分鐘",
    "difficulty": "中階",
    "tags": [
      "Workflow",
      "工作流",
      "人工審核",
      "Chapter12"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 11,
    "chapterZh": "AI University OS 與最終專案",
    "chapterEn": "AI University OS and Capstone Project",
    "zhTitle": "第57課：建立個人 AI 學習工作流",
    "enTitle": "Lesson 57: Build Your Personal AI Learning Workflows",
    "zhValueTip": "把大學常見任務做成標準工作流：輸入→處理→輸出→檢查→保存，涵蓋筆記到求職並保留人工審核。",
    "enValueTip": "Turn common university tasks into standard workflows—input→process→output→check→save—from notes to job search, with human review gates.",
    "zhOutcome": "我的 AI Workflow 手冊（至少 5 套）＋每週執行節奏",
    "enOutcome": "My AI Workflow Playbook (≥5 flows) + Weekly Cadence",
    "zhConcept": "Workflow 是可重複的任務劇本：固定輸入、固定處理步驟（含 AI）、固定輸出格式、固定檢查門檻、固定保存位置。沒有工作流，你會每次重新想 Prompt，也容易跳過審核。通用五步：Input（題目／PDF／錄音／JD）→ Process（拆解、生成、轉換）→ Output（筆記卡／大綱／題庫／講稿）→ Check（人工核對事實、格式、誠信）→ Save（進 Second Brain 對應庫）。上課筆記流：捕捉模板→下課結構化 Prompt→改寫定義→存 raw／final。PDF 流：掃描地圖→重點卡→頁碼追溯→存 PDF 庫。報告流：規格書→大綱→文獻卡→自寫→潤稿檢查→定稿。簡報流：主張地圖→生成／排版→備註→計時。考試流：範圍清單→題庫→模擬→錯題→衝刺。英文流：分級閱讀／寫作修改／口說紀錄。協作流：RACI→會議紀錄核對→看板。專案流：需求→MVP→GitHub。求職流：JD 對齊→履歷／面試→追蹤表。減少重複操作：同一任務只用同一 Prompt 模板＋同一輸出檢查表；工具不任意換。保留人工審核：凡涉及事實、引用、數據、決策、完成狀態，必須人簽核。完整每週 AI 學習流程案例：日－捕捉與 Inbox 清零；週三－報告／專案推進；週五－模擬考或口說；週日－複盤工作流是否被跳過檢查步。AI 可幫你把任務寫成 SOP，但不可把「計畫執行」寫成「你已每周完成」；缺你的課表就列待補。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。",
    "enConcept": "Define input→process→output→check→save SOPs for notes, PDFs, reports, slides, exams, English, collaboration, projects, and job search. Reduce rethinking; keep human review. Don’t claim weekly execution you haven’t done.",
    "zhCaseStudy": "完整每週 AI 學習流程案例：電機系阿哲以前每次寫報告都重寫 Prompt。他建立報告工作流卡片後，規格→大綱→文獻→自寫→檢查→保存固定。第一個月仍常跳過 Check；週日複盤把「未核對引用不得標 final」寫成硬規則。之後扣分下降，每週可預期。",
    "enCaseStudy": "A-Zhe turned report chaos into a five-step SOP and fixed skipped review with a Sunday audit rule.",
    "zhWorkflow": [
      "列出高頻大學任務",
      "為每任務寫五步工作流",
      "掛上 Prompt 與保存位置",
      "定義人工審核關卡",
      "設計每週節奏與複盤"
    ],
    "enWorkflow": [
      "List high-frequency tasks",
      "Write five-step flows",
      "Attach prompts and save locations",
      "Define human review gates",
      "Design weekly cadence and retrospectives"
    ],
    "zhCommonMistakes": [
      "每次從零寫 Prompt",
      "跳過檢查直接當完成",
      "工作流寫太長從不執行",
      "工具每周換新導致無累積"
    ],
    "enCommonMistakes": [
      "Rewriting prompts from scratch",
      "Skipping checks",
      "Overlong unused SOPs",
      "Tool-hopping with no compounding"
    ],
    "zhExcellentExample": "優秀手冊：至少五套可執行流、每流有檢查關卡與保存位、每週節奏可勾選、狀態不造假。",
    "enExcellentExample": "A strong playbook has ≥5 runnable flows with check gates, save paths, a tickable weekly cadence, and honest status.",
    "zhPrompt": "【Prompt 1｜任務→標準工作流】\n我的高頻任務：\n（貼上）\nSecond Brain 保存位置：\n（貼上）\n請把每個任務寫成「輸入／處理／輸出／檢查／保存」SOP，並建議對應 Prompt 名稱。標示建議；不要寫成我已執行；課表未知就列待補。",
    "enPrompt": "[Prompt 1 | Task→SOP] Convert tasks into input/process/output/check/save; suggest prompt names; don’t claim I’ve executed them.",
    "zhCoachPrompt": "【Prompt 2｜專題工作流套件】\n請為「筆記、報告、考試、簡報、求職」各給一版精簡工作流，並指出哪一步最常被跳過、如何設人工審核。輸出需可檢查（有勾選項）。不要捏造我的使用數據。",
    "enCoachPrompt": "[Prompt 2 | Core Flow Pack] Provide lean flows for notes/report/exam/slides/job-search with review gates and checkboxes; invent no usage stats.",
    "zhFeedbackPrompt": "【Prompt 3｜每週節奏與減少重複】\n我的工作流草稿與可用時段：\n（貼上）\n請設計一週節奏，找出重複步驟可合併處，並給複盤問題三則。區分目標與建議；不要把節奏寫成已養成習慣。",
    "enFeedbackPrompt": "[Prompt 3 | Weekly Cadence] Design a week plan, merge duplicate steps, give 3 retro questions; don’t claim habits already exist.",
    "zhExample": "報告流：Input 規格→Process 大綱／文獻→Output 初稿→Check 引用核對→Save Assignments/final。｜週日檢查：本週是否跳過 Check？",
    "enExample": "A report SOP with an explicit citation check gate and a Sunday skip-audit question.",
    "zhPractice": "完成至少 5 套工作流卡片。；為每套設檢查關卡。；排出一週節奏。；Challenge：選一套流真實跑完一次並留下 Check 證據（註記／清單），未跑完不得標完成。",
    "enPractice": "Write ≥5 flow cards.；Add check gates.；Schedule a week.；Challenge: run one flow end-to-end with check evidence—don’t mark done if skipped.",
    "zhQuizItems": [
      {
        "q": "標準 AI 學習工作流最不該缺的是？",
        "options": [
          "炫酷動畫",
          "人工檢查關卡與保存位置",
          "每天換新工具",
          "無輸出定義"
        ],
        "answer": 1,
        "explain": "檢查與保存讓流程可累積。"
      },
      {
        "q": "減少重複操作的關鍵是？",
        "options": [
          "每次重寫完全不同 Prompt",
          "固定模板、輸出格式與工具選擇",
          "不做複盤",
          "禁止保存"
        ],
        "answer": 1,
        "explain": "標準化才能減少重工。"
      },
      {
        "q": "把「計畫要每周執行」寫成「已每周完成」屬於？",
        "options": [
          "正確追蹤",
          "把目標／計畫誤標為事實的錯誤",
          "沒關係",
          "比真實更好"
        ],
        "answer": 1,
        "explain": "不可把計畫寫成已完成。"
      }
    ],
    "enQuizItems": [
      {
        "q": "A standard AI learning workflow must include:",
        "options": [
          "Cool animations",
          "Human check gates and save locations",
          "New tools daily",
          "No defined outputs"
        ],
        "answer": 1,
        "explain": "Checks and saves make progress compound."
      },
      {
        "q": "Key to reducing rework?",
        "options": [
          "Rewrite totally new prompts each time",
          "Fixed templates, output formats, and tool choices",
          "No retrospectives",
          "Never save"
        ],
        "answer": 1,
        "explain": "Standardization cuts rework."
      },
      {
        "q": "Writing “will do weekly” as “already done weekly” is:",
        "options": [
          "Correct tracking",
          "Mislabeling goals/plans as facts",
          "Harmless",
          "Better than truth"
        ],
        "answer": 1,
        "explain": "Don’t mark plans as completed."
      }
    ],
    "zhNotePrompt": "列出五套工作流名稱，並標出各流的檢查關卡一句話。",
    "enNotePrompt": "List five workflow names and one-sentence check gates for each.",
    "zhDeliverableChecklist": [
      "≥5 套工作流成文",
      "每流含五步",
      "人工審核關卡明確",
      "每週節奏可勾選",
      "至少一流通測有證據"
    ],
    "enDeliverableChecklist": [
      "≥5 flows written",
      "Each has five steps",
      "Human gates clear",
      "Weekly cadence tickable",
      "≥1 flow tested with evidence"
    ],
    "zhScorecard": [
      "可重複",
      "可檢查",
      "可保存",
      "減少重工",
      "狀態誠實"
    ],
    "enScorecard": [
      "Repeatable",
      "Checkable",
      "Savable",
      "Less rework",
      "Honest status"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "工作流手冊與勾選清單"
      },
      {
        "name": "Google Calendar",
        "url": "https://calendar.google.com",
        "note": "把每週節奏排進程式"
      },
      {
        "name": "Google Tasks",
        "url": "https://tasks.google.com",
        "note": "檢查關卡待辦"
      },
      {
        "name": "Trello",
        "url": "https://trello.com",
        "note": "工作流看板化"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "SOP 與 Prompt 模板"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "PDF／講義工作流的 grounded 層"
      }
    ],
    "challenge": "出版你的《AI Workflow 手冊》v1（至少五套），並用一週真實執行其中兩套；複盤時只許寫事實發生次數，不許美化。"
  },
  {
    "icon": "🗺️",
    "title": "建立大學四年 AI 成長地圖",
    "description": "規劃大一探索到大四輸出的 AI 能力路徑：每學年目標、技能、專案／競賽／作品集與學期回顧機制。",
    "goal": "我的大學四年 AI 成長地圖＋本學期行動與能力差距表",
    "estimatedTime": "70-90 分鐘",
    "difficulty": "中階",
    "tags": [
      "四年地圖",
      "能力規劃",
      "學期回顧",
      "Chapter12"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 11,
    "chapterZh": "AI University OS 與最終專案",
    "chapterEn": "AI University OS and Capstone Project",
    "zhTitle": "第58課：建立大學四年 AI 成長地圖",
    "enTitle": "Lesson 58: Build a Four-Year AI Growth Map",
    "zhValueTip": "規劃大一探索到大四輸出的 AI 能力路徑：每學年目標、技能、專案／競賽／作品集與學期回顧機制。",
    "enValueTip": "Plan AI growth from Year-1 exploration to Year-4 output—annual goals, skills, projects/competitions/portfolio, and term reviews.",
    "zhOutcome": "我的大學四年 AI 成長地圖＋本學期行動與能力差距表",
    "enOutcome": "My Four-Year AI Growth Map + This-Term Actions & Gap Analysis",
    "zhConcept": "四年地圖讓 AI 學習不再隨機追工具。大一探索期：建立 Workspace、筆記與搜尋習慣，完成小專案理解「問題導向」。大二能力建立期：報告／簡報／考試系統穩定，英文與生產力工作流成型，開始公開作品雛形。大三專案與競賽期：個人或團隊專案、MVP、GitHub、可演示成果，選擇性競賽與實習。大四求職與成果輸出期：作品集、履歷、面試故事、OS 維護，輸出可被驗證的能力證明。每學年目標要可檢查；每學期 AI 技能目標對齊課程與職能（例如「本學期完成 2 套考試工作流＋1 個作品更新」）。規劃證照／競賽／專案／作品集時必須標「目標／進行中／未開始」，不可把願望寫成已取得。學習成果追蹤：學期作品清單、技能雷達、缺口。每學期回顧：做了什麼、證據在哪、下學期只攻 1-2 個缺口。完整四年 AI 成長地圖案例：大一完成 Second Brain；大二報告與考試 OS；大三兩個公開專案；大四求職包與 OS 最終版。中間允許因轉系／交換調整，但要留變更紀錄。AI 可協助草案，但必須依你真實年級與已完成成果；大一不可被寫成「已完成大四作品集」。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。",
    "enConcept": "Map Year1–4 phases with checkable goals, term skill targets, honest project/competition/cert status, and semester reviews. AI drafts; never backdate achievements you don’t have.",
    "zhCaseStudy": "完整四年 AI 成長地圖案例：大二生小凱以前只追新模型。他用地圖把本學期目標收成「考試工作流＋一個 GitHub 專案」，大三才排競賽。能力差距表顯示英文口說弱，於是每週固定口說流。一學期後作品與成績都有證據，不再焦慮工具清單。",
    "enCaseStudy": "Sophomore Xiao Kai stopped tool-chasing with a phase map, term focus, and an honest gap plan for speaking.",
    "zhWorkflow": [
      "標示目前年級與已完成成果（事實）",
      "寫大一至大四階段目標",
      "拆本學年／本學期可檢查行動",
      "做能力差距與優先序",
      "設每學期回顧日曆"
    ],
    "enWorkflow": [
      "Mark year and real completed artifacts",
      "Write Year1–4 phase goals",
      "Break this year/term into checkable actions",
      "Run gap analysis and priorities",
      "Schedule semester reviews"
    ],
    "zhCommonMistakes": [
      "四年目標全是空話",
      "把未來證照写成已拿到",
      "無學期回顧",
      "同時追 20 個技能"
    ],
    "enCommonMistakes": [
      "Vague four-year wishes",
      "Future certs marked earned",
      "No term reviews",
      "Chasing 20 skills at once"
    ],
    "zhExcellentExample": "優秀地圖：階段清楚、本學期行動可勾、成果狀態誠實、差距有優先、回顧排程已進日曆。",
    "enExcellentExample": "A strong map has clear phases, tickable term actions, honest artifact status, prioritized gaps, and calendarized reviews.",
    "zhPrompt": "【Prompt 1｜四年 AI 成長地圖】\n年級：［ ］；已完成成果（事實）：\n（貼上）\n志向假設：\n（貼上）\n請產出大一～大四地圖（目標、技能、專案／競賽／作品集建議）。嚴格分開事實／目標／假設／建議；不要把未完成寫成已完成；年級不符的項目要調整。",
    "enPrompt": "[Prompt 1 | Four-Year Map] Build Year1–4 map from my real year and artifacts; separate facts/goals/assumptions/suggestions; never backdate completion.",
    "zhCoachPrompt": "【Prompt 2｜本學期目標與能力差距】\n地圖：\n（貼上）\n本學期課程與時間：\n（貼上）\n請給本學期 3 個可檢查 AI 技能目標、差距分析、每週最小行動。時間不夠就刪目標，不要假裝做得到。",
    "enCoachPrompt": "[Prompt 2 | Term Goals & Gaps] Propose 3 checkable term goals, gaps, and weekly minimums; cut scope if time is insufficient.",
    "zhFeedbackPrompt": "【Prompt 3｜學期回顧機制】\n請設計每學期回顧問卷與成果追蹤表欄位，並給下學期只攻缺口的決策規則。不要捏造我的歷史成績或競賽名次。",
    "enFeedbackPrompt": "[Prompt 3 | Term Review System] Design review questions and tracking fields with a focus rule; invent no grades or awards.",
    "zhExample": "大二下目標：考試 OS 穩定＋GitHub 1 專案。｜差距：口說。｜回顧日：期末後一週。｜狀態：專案進行中（非已完成）。",
    "enExample": "A sophomore-term focus with speaking gap, a review date, and honest in-progress project status.",
    "zhPractice": "完成四年地圖。；寫本學期三目標與差距表。；把回顧日排進日曆。；Challenge：找學長姐或同學檢查「是否把願望標成已完成」，並修正狀態欄。",
    "enPractice": "Finish the four-year map.；Write three term goals + gaps.；Calendar the review.；Challenge: peer-audit for wishful “done” labels and fix statuses.",
    "zhQuizItems": [
      {
        "q": "四年 AI 成長地圖的主要功能是？",
        "options": [
          "隨便玩玩",
          "把探索→能力→專案→輸出變成可檢查路徑",
          "取代所有課程",
          "保證錄取名企"
        ],
        "answer": 1,
        "explain": "地圖提供可執行的階段路徑。"
      },
      {
        "q": "規劃證照與競賽時應？",
        "options": [
          "全部標成已取得顯得厲害",
          "用目標／進行中／未開始誠實標示",
          "不需要對齊學期",
          "禁止調整"
        ],
        "answer": 1,
        "explain": "狀態必須誠實。"
      },
      {
        "q": "每學期回顧最該產出？",
        "options": [
          "只有情緒發洩",
          "證據清單、缺口優先序、下學期可檢查行動",
          "刪除所有紀錄",
          "換一堆新工具當進步"
        ],
        "answer": 1,
        "explain": "回顧要導向可追蹤行動。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Main job of a four-year AI map?",
        "options": [
          "Random fun",
          "Make explore→skills→projects→output a checkable path",
          "Replace all courses",
          "Guarantee elite offers"
        ],
        "answer": 1,
        "explain": "Maps create executable phases."
      },
      {
        "q": "When planning certs/competitions you should:",
        "options": [
          "Mark all as earned",
          "Label goal/in-progress/not-started honestly",
          "Ignore terms",
          "Never adjust"
        ],
        "answer": 1,
        "explain": "Status must be honest."
      },
      {
        "q": "A term review should produce:",
        "options": [
          "Only venting",
          "Evidence list, prioritized gaps, checkable next actions",
          "Delete all records",
          "Tool-hopping as progress"
        ],
        "answer": 1,
        "explain": "Reviews drive trackable action."
      }
    ],
    "zhNotePrompt": "貼上你目前年級對應的階段目標，以及本學期三個可檢查行動。",
    "enNotePrompt": "Paste your current-phase goals and three checkable term actions.",
    "zhDeliverableChecklist": [
      "四年地圖完成",
      "階段目標可檢查",
      "本學期行動明確",
      "能力差距表完成",
      "回顧日已排程"
    ],
    "enDeliverableChecklist": [
      "Four-year map done",
      "Phase goals checkable",
      "Term actions clear",
      "Gap table done",
      "Review scheduled"
    ],
    "zhScorecard": [
      "階段清楚",
      "可執行",
      "狀態誠實",
      "差距有序",
      "可回顧"
    ],
    "enScorecard": [
      "Clear phases",
      "Executable",
      "Honest status",
      "Ordered gaps",
      "Reviewable"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "四年地圖與學期追蹤"
      },
      {
        "name": "Google Calendar",
        "url": "https://calendar.google.com",
        "note": "回顧日與里程碑"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "學期成果證據夾"
      },
      {
        "name": "GitHub",
        "url": "https://github.com",
        "note": "專案成果時間線"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "地圖草案與差距提問"
      },
      {
        "name": "Trello",
        "url": "https://trello.com",
        "note": "學期行動看板"
      }
    ],
    "challenge": "交出對應真實年級的四年地圖＋本學期行動表；若你是大一，大四區塊只能是目標假設，不得寫成已完成求職包。"
  },
  {
    "icon": "🔗",
    "title": "整合 AI 工具與學習成果",
    "description": "盤點工具、去除重疊、整合筆記到履歷的成果鏈，建立個人 Dashboard 與每週／每月檢查。",
    "goal": "我的工具整合方案＋個人 Dashboard＋週／月檢核表",
    "estimatedTime": "70-90 分鐘",
    "difficulty": "中階",
    "tags": [
      "工具整合",
      "Dashboard",
      "成果管理",
      "Chapter12"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 11,
    "chapterZh": "AI University OS 與最終專案",
    "chapterEn": "AI University OS and Capstone Project",
    "zhTitle": "第59課：整合 AI 工具與學習成果",
    "enTitle": "Lesson 59: Integrate AI Tools and Learning Artifacts",
    "zhValueTip": "盤點工具、去除重疊、整合筆記到履歷的成果鏈，建立個人 Dashboard 與每週／每月檢查。",
    "enValueTip": "Inventory tools, cut overlaps, connect notes-to-resume artifacts, and build a personal dashboard with weekly/monthly checks.",
    "zhOutcome": "我的工具整合方案＋個人 Dashboard＋週／月檢核表",
    "enOutcome": "My Tool Integration Plan + Personal Dashboard + Weekly/Monthly Checklists",
    "zhConcept": "工具過多會讓 OS 崩壞。先盤點：你真正每週使用的 AI／筆記／協作／設計／部署工具，標註用途、付費、替代者、上次使用日。功能重疊分析：兩個聊天模型、三個筆記 App、多個看板，只留「主工具＋備援」。免費與付費取捨看：是否卡在匯出、上限、協作，而不是 logo。整合原則：單一真相來源（檔案在 Drive／GitHub）、結構在 Notion／Obsidian、生成在 ChatGPT／NotebookLM、展示在 Canva／Gamma／Vercel、日程在 Calendar／Tasks。成果集中管理：筆記→報告→簡報→題庫→作品→履歷／LinkedIn 要能互相連結，說法一致。Dashboard 一頁看：本週任務、進行中專案、考試倒數、投遞狀態、待備份。每週檢查：Inbox 清零、工作流有無跳過 Check、連結是否失效。每月檢查：工具是否仍必要、成果是否進作品集、四年地圖是否更新。完整 AI 工具整合案例：學生删掉 4 個幾乎不用的 App，保留 ChatGPT＋NotebookLM＋Notion＋Drive＋GitHub＋Calendar；Dashboard 用 Notion 連結各庫；展示用 Canva／GitHub Pages。AI 可分析重疊，但不可捏造你的使用時數；付費決策要列待你確認的預算。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。",
    "enConcept": "Inventory tools, cut overlaps, define primary/backup roles, centralize artifacts, and run weekly/monthly checks via a one-page dashboard. Don’t invent usage stats or spending.",
    "zhCaseStudy": "完整 AI 工具整合案例：小禾同時用五個筆記軟體。重疊分析後只留 Notion＋Drive，Obsidian 當離線備援。Dashboard 顯示考試倒數與作品更新欠債。一個月後找回時間，最終專案材料不再散落。",
    "enCaseStudy": "Xiao He cut five note apps to Notion+Drive with Obsidian backup and a dashboard that surfaced real debts.",
    "zhWorkflow": [
      "盤點工具與使用事實",
      "做重疊與付費取捨",
      "定義整合路徑與匯入匯出",
      "建立 Dashboard",
      "設定週／月檢查並試跑一次"
    ],
    "enWorkflow": [
      "Inventory tools with real usage",
      "Analyze overlap and paid/free tradeoffs",
      "Define integration and import/export paths",
      "Build a dashboard",
      "Set weekly/monthly checks and run once"
    ],
    "zhCommonMistakes": [
      "工具收藏癖",
      "無主備援規則",
      "成果散落無法展示",
      "從不檢查連結與備份"
    ],
    "enCommonMistakes": [
      "Tool hoarding",
      "No primary/backup rules",
      "Artifacts too scattered to show",
      "Never checking links/backups"
    ],
    "zhExcellentExample": "優秀整合：主工具少而清、Dashboard 可行動、週月檢查有做、筆記到履歷連結通、無捏造使用數據。",
    "enExcellentExample": "Strong integration has few primaries, an actionable dashboard, real weekly/monthly checks, notes-to-resume links, and no fake usage stats.",
    "zhPrompt": "【Prompt 1｜工具盤點與重疊分析】\n我的工具清單與真實使用頻率：\n（貼上）\n預算限制：［ ］\n請分析重疊、建議主工具／備援、付費取捨理由。不要捏造我的使用時數；預算不明就列待確認；建議需可執行。",
    "enPrompt": "[Prompt 1 | Tool Inventory] Analyze overlaps and propose primary/backup and paid/free choices from my real usage; invent no hours.",
    "zhCoachPrompt": "【Prompt 2｜成果鏈與 Dashboard】\nSecond Brain 庫與現有成果：\n（貼上）\n請設計個人 Dashboard 區塊（任務、專案、考試、求職、備份）與「筆記→履歷」連結規則。未有的成果不要寫成已上線。",
    "enCoachPrompt": "[Prompt 2 | Artifact Chain & Dashboard] Design dashboard blocks and notes-to-resume link rules; don’t mark missing artifacts as live.",
    "zhFeedbackPrompt": "【Prompt 3｜每週與每月檢討流程】\n請給週檢／月檢清單（可勾選），並說明如何據此更新四年地圖與作品集。不要假裝我已連續執行數月；輸出是可開始用的流程。",
    "enFeedbackPrompt": "[Prompt 3 | Weekly/Monthly Reviews] Provide tickable weekly/monthly checklists and how they update the map/portfolio—don’t claim months of prior compliance.",
    "zhExample": "主工具：ChatGPT／NotebookLM／Notion／Drive／GitHub。｜備援：Obsidian。｜Dashboard：本週 Check 欠 1、專案 1 個進行中、備份上次日期。",
    "enExample": "A lean primary stack with Obsidian backup and a dashboard showing real check debt and backup date.",
    "zhPractice": "完成工具盤點表。；刪減或凍結重疊工具。；建立 Dashboard 與週月檢核。；Challenge：本週執行一次週檢並截圖（遮敏）；未執行不得在最終專案宣稱「已有檢查機制在運轉」。",
    "enPractice": "Finish tool inventory.；Cut/freeze overlaps.；Build dashboard + checklists.；Challenge: run one weekly check with proof—don’t claim the system runs if you didn’t.",
    "zhQuizItems": [
      {
        "q": "工具整合的首要目標是？",
        "options": [
          "安裝所有熱門 AI",
          "降低重疊與混亂，讓成果可集中管理與展示",
          "取消所有備份",
          "每週換筆記軟體"
        ],
        "answer": 1,
        "explain": "整合是為了可管理與可展示。"
      },
      {
        "q": "個人 Dashboard 最該呈現？",
        "options": [
          "無關壁紙",
          "可行動的任務、專案、期限與系統健康（備份／檢查）",
          "假造的使用時數排行",
          "只有激勵語錄"
        ],
        "answer": 1,
        "explain": "Dashboard 服務決策與行動。"
      },
      {
        "q": "每月檢查應包含？",
        "options": [
          "是否還需要某些工具、成果是否進作品集、地圖是否更新",
          "只看社群熱點",
          "刪除所有 final",
          "禁止匯出"
        ],
        "answer": 0,
        "explain": "月檢對齊工具必要性與成果沉澱。"
      }
    ],
    "enQuizItems": [
      {
        "q": "Primary goal of tool integration?",
        "options": [
          "Install every trendy AI",
          "Reduce overlap/chaos and centralize showable artifacts",
          "Remove all backups",
          "Switch note apps weekly"
        ],
        "answer": 1,
        "explain": "Integration enables management and showcase."
      },
      {
        "q": "A personal dashboard should show:",
        "options": [
          "Random wallpaper",
          "Actionable tasks, projects, deadlines, system health",
          "Fake usage leaderboards",
          "Only quotes"
        ],
        "answer": 1,
        "explain": "Dashboards serve decisions."
      },
      {
        "q": "Monthly checks should include:",
        "options": [
          "Tool necessity, portfolio intake, map updates",
          "Only social trends",
          "Deleting all finals",
          "Banning exports"
        ],
        "answer": 0,
        "explain": "Monthlies align tools and artifact settling."
      }
    ],
    "zhNotePrompt": "列出主工具與備援各三個，以及 Dashboard 上最重要的三個區塊。",
    "enNotePrompt": "List three primaries, three backups, and the three most important dashboard blocks.",
    "zhDeliverableChecklist": [
      "工具盤點完成",
      "重疊已處理",
      "整合路徑成文",
      "Dashboard 可用",
      "週／月檢核表完成並試跑"
    ],
    "enDeliverableChecklist": [
      "Inventory done",
      "Overlaps handled",
      "Integration path written",
      "Dashboard usable",
      "Weekly/monthly checklists tested"
    ],
    "zhScorecard": [
      "精簡",
      "可整合",
      "可展示",
      "可檢查",
      "可維護"
    ],
    "enScorecard": [
      "Lean",
      "Integrable",
      "Showable",
      "Checkable",
      "Maintainable"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "Dashboard 與成果索引"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "檔案匯出／備份中樞"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "重疊分析與檢核表"
      },
      {
        "name": "GitHub",
        "url": "https://github.com",
        "note": "專案成果與版本"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "成果視覺整理"
      },
      {
        "name": "Gamma",
        "url": "https://gamma.app",
        "note": "系統說明簡報草稿"
      },
      {
        "name": "Vercel",
        "url": "https://vercel.com",
        "note": "作品站部署（若適用）"
      },
      {
        "name": "Obsidian",
        "url": "https://obsidian.md",
        "note": "離線備援知識庫"
      }
    ],
    "challenge": "交出《工具整合一頁紙》＋可操作 Dashboard；刪減或凍結至少兩個重疊工具，並記錄遷移／備援方式。"
  },
  {
    "icon": "🎓",
    "title": "AI University OS 最終專案",
    "description": "完成並發表你的 AI University OS：知識庫、Prompt Library、工作流、四年地圖、作品集、簡報、反思與 90 天計畫。",
    "goal": "我的 AI University OS 最終交付包＋發表錄影／簡報＋結業檢核表",
    "estimatedTime": "120-180 分鐘（可跨數日）",
    "difficulty": "進階",
    "tags": [
      "最終專案",
      "University OS",
      "結業",
      "Chapter12"
    ],
    "progress": 0,
    "completed": false,
    "locked": true,
    "chapterIndex": 11,
    "chapterZh": "AI University OS 與最終專案",
    "chapterEn": "AI University OS and Capstone Project",
    "zhTitle": "第60課：AI University OS 最終專案",
    "enTitle": "Lesson 60: AI University OS Capstone Project",
    "zhValueTip": "完成並發表你的 AI University OS：知識庫、Prompt Library、工作流、四年地圖、作品集、簡報、反思與 90 天計畫。",
    "enValueTip": "Ship and present your AI University OS—knowledge base, prompt library, workflows, four-year map, portfolio, deck, reflection, and 90-day plan.",
    "zhOutcome": "我的 AI University OS 最終交付包＋發表錄影／簡報＋結業檢核表",
    "enOutcome": "My AI University OS Capstone Pack + Presentation + Completion Checklist",
    "zhConcept": "Lesson 60 是整門「大學生 AI 學習系統課」的畢業專案：你要交付一套可持續使用的 AI University OS，而不是臨時拼貼的截圖集。專案目標：證明你能用系統化方式管理大學學習，並把 AI 用在筆記、報告、簡報、考試、英文、協作、專案與求職等真實任務，同時保留人工審核與誠信。必要交付成果（缺一不可）：1) 個人 AI University OS 架構說明 2) 課程知識庫（至少一科完整樣板＋可擴充結構）3) Prompt Library 4) 至少三套可實際使用的 AI Workflow（含檢查關卡與通測證據）5) 四年 AI 成長地圖 6) 一個代表性作品集專案 7) 成果簡報 8) 3 分鐘成果介紹 9) 學習反思 10) 未來 90 天行動計畫。評分標準（自我與互評可用）：完整性、可執行性、誠實度（不把計畫當完成）、可演示性、整合度（工具與成果連得起來）、反思深度。專案時程建議：D-7 鎖定範圍；D-5 補齊知識庫與 Prompt；D-3 通測三套工作流；D-2 簡報與 3 分鐘稿；D-1 模擬評審；D-0 發表與歸檔。架構圖需展示：Second Brain 庫、工作流入口、四年地圖、展示層（網站／GitHub／簡報）、檢查與備份。發表：3 分鐘抓主線；10 分鐘含演示與限制；模擬評審問「如何保證不捏造」「哪步是人審」「90 天如何追蹤」。自我反思寫：上課前後差異、失敗案例、誠信底線、仍不足處。90 天計畫要有每兩週可檢查里程碑，不可空話。結業檢核表逐項勾選十項交付；未完成就標未完成，仍可提交「誠實版」，但不得改口稱齊全。這不是終點：OS 要在下學期繼續跑。你畢業帶走的是可遷移的大學作業系統。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。此外，請把本課產出存成 raw／final，並在 Second Brain 標註狀態；未演示、未通測的項目不得標完成。每次系統改動寫三行變更日誌：改了什麼、為何、如何回滾；讓 OS 可維護而不是一次性作業。全課程的誠信底線在此收束：不捏造成果、數據與完成狀態；AI 是加速器，人工審核是品質閘門。當知識庫、工作流、四年地圖、工具整合與發表形成閉環，你就擁有可帶走的 AI University OS。下學期用同一套檢查表繼續跑；系統的價值在持續使用，不在一次華麗演示。",
    "enConcept": "Capstone: deliver a maintainable AI University OS with required artifacts, honest status, timed presentation, mock jury, reflection, and a checkable 90-day plan. Completeness, executability, honesty, and demoability matter most.",
    "zhCaseStudy": "最終專案案例：學生提交 OS 架構、統計學知識庫樣板、12 則 Prompt、筆記／考試／求職三工作流通測紀錄、四年地圖、排課助手作品、Canva 簡報、3 分鐘錄影、反思與 90 天計畫。評審追問數據來源，他指向測試筆記而非假 KPI。結業檢核 10/10 中有 1 項標「進行中」仍過關，因誠實且可追蹤。",
    "enCaseStudy": "A capstone passed with honest in-progress labels, real workflow evidence, and answers grounded in notes—not invented KPIs.",
    "zhWorkflow": [
      "確認十項必要交付與評分標準",
      "排最終專案時程並鎖定範圍",
      "補齊 OS／知識庫／Prompt／三工作流／地圖／作品",
      "製作簡報與 3／10 分鐘發表材料",
      "模擬評審→修改→正式發表→勾結業檢核並歸檔"
    ],
    "enWorkflow": [
      "Confirm ten required deliverables and rubric",
      "Schedule and lock scope",
      "Complete OS, KB, prompts, three flows, map, portfolio piece",
      "Build deck and 3/10-minute materials",
      "Mock jury → revise → present → checklist → archive"
    ],
    "zhCommonMistakes": [
      "截圖拼貼無系統",
      "把未通測工作流標完成",
      "捏造使用數據",
      "發表超時且無法演示"
    ],
    "enCommonMistakes": [
      "Screenshot collage without a system",
      "Untested flows marked done",
      "Invented usage metrics",
      "Overtime talk with no demo"
    ],
    "zhExcellentExample": "優秀結業包：十項交付齊或誠實標狀態、架構可講、三流通測有證據、發表準時、問答可防守、90 天可追蹤。",
    "enExcellentExample": "A strong capstone has all ten items (or honest statuses), a explainable architecture, evidenced flows, timed talk, defendable Q&A, and a trackable 90-day plan.",
    "zhPrompt": "【Prompt 1｜最終專案時程與交付檢核】\n截止日期：［ ］；我目前已有材料（事實）：\n（貼上）\n請排最終專案時程，對照十項必要交付，列出缺口與每日最小行動。不要把未完成寫成已完成；區分事實／目標／建議；輸出可追蹤。",
    "enPrompt": "[Prompt 1 | Capstone Schedule] Plan against the ten required deliverables from my real inventory; never mark missing items done.",
    "zhCoachPrompt": "【Prompt 2｜成果介紹與架構說明稿】\nOS 真實內容摘要：\n（貼上）\n請寫 3 分鐘介紹稿與 10 分鐘大綱（含演示點）。只用我提供的成果；沒有的演示標待補，不要編造。",
    "enCoachPrompt": "[Prompt 2 | Talk Scripts] Write a 3-minute script and 10-minute outline with demo points from real artifacts only.",
    "zhFeedbackPrompt": "【Prompt 3｜模擬評審＋90 天計畫】\n請扮演評審對我的 OS 摘要一次一題追問（誠信、人審、可維護性、證據）。結束後依我的真實缺口草擬 90 天行動計畫（兩週里程碑）。禁止捏造我將完成的虛假成果；標示假設與待我確認項。",
    "enFeedbackPrompt": "[Prompt 3 | Mock Jury + 90-Day Plan] Probe integrity/review/maintainability/evidence; draft a 90-day plan with biweekly milestones—no fabricated future achievements.",
    "zhExample": "檢核：知識庫✓ 三流通測✓ 地圖✓ 作品✓ 3分鐘✓｜90天：W2 補英文流、W4 作品更新、W6 求職追蹤、W8 學期回顧。",
    "enExample": "A completion checklist with evidenced flows and a biweekly 90-day plan tied to real gaps.",
    "zhPractice": "對照十項交付列出缺口。；完成發表材料與模擬評審。；勾結業檢核表並歸檔。；Challenge：完成一次正式或錄影發表（3 分鐘精簡版必做）；問答至少 5 題，修改一處真實缺口。",
    "enPractice": "Gap-check the ten deliverables.；Finish talk materials and mock jury.；Complete checklist and archive.；Challenge: present (live or recorded) the 3-minute cut; answer ≥5 questions; fix one real gap.",
    "zhQuizItems": [
      {
        "q": "AI University OS 最終專案最核心的證明是？",
        "options": [
          "會背很多工具名稱",
          "擁有可執行、可檢查、可維護且誠實的個人學習系統與證據",
          "只交一張海報",
          "捏造高使用時數"
        ],
        "answer": 1,
        "explain": "系統與證據重於工具名冊。"
      },
      {
        "q": "十項必要交付若有一項未完成應？",
        "options": [
          "偷偷標完成",
          "誠實標示未完成／進行中並給可追蹤補完計畫",
          "刪除檢核表",
          "改用無關截圖充數且宣稱齊全"
        ],
        "answer": 1,
        "explain": "誠實狀態＋可追蹤補完才符合本課精神。"
      },
      {
        "q": "模擬評審最該能回答的包括？",
        "options": [
          "如何保證不把計畫當完成、哪裡做人審、證據在哪",
          "明天天氣",
          "無關八卦",
          "拒絕展示任何連結"
        ],
        "answer": 0,
        "explain": "誠信、人審與證據是結業關鍵問答。"
      }
    ],
    "enQuizItems": [
      {
        "q": "The capstone mainly proves you can:",
        "options": [
          "Recite tool names",
          "Run an executable, checkable, maintainable, honest learning system with evidence",
          "Submit only a poster",
          "Invent high usage hours"
        ],
        "answer": 1,
        "explain": "System and evidence beat tool lists."
      },
      {
        "q": "If one of ten required items is unfinished you should:",
        "options": [
          "Secretly mark done",
          "Honestly mark incomplete/in-progress with a trackable finish plan",
          "Delete the checklist",
          "Pad with unrelated screenshots and claim complete"
        ],
        "answer": 1,
        "explain": "Honest status plus a trackable plan matches course values."
      },
      {
        "q": "Mock jury should cover:",
        "options": [
          "How you avoid marking plans as done, where humans review, where evidence lives",
          "Tomorrow’s weather",
          "Gossip",
          "Refusing all links"
        ],
        "answer": 0,
        "explain": "Integrity, review, and evidence are core."
      }
    ],
    "zhNotePrompt": "貼上十項交付的勾選狀態，以及 90 天計畫的前兩個兩週里程碑。",
    "enNotePrompt": "Paste checklist status for the ten deliverables and the first two biweekly milestones of your 90-day plan.",
    "zhDeliverableChecklist": [
      "OS 架構說明完成",
      "課程知識庫樣板完成",
      "Prompt Library 完成",
      "≥3 工作流通測有證據",
      "四年地圖完成",
      "代表作品集專案可展示",
      "成果簡報完成",
      "3 分鐘介紹完成",
      "學習反思完成",
      "90 天行動計畫完成",
      "模擬評審完成",
      "結業檢核表已誠實勾選並歸檔"
    ],
    "enDeliverableChecklist": [
      "OS architecture written",
      "Course KB template done",
      "Prompt Library done",
      "≥3 workflows evidenced",
      "Four-year map done",
      "Flagship portfolio project showable",
      "Deck done",
      "3-minute intro done",
      "Reflection done",
      "90-day plan done",
      "Mock jury done",
      "Honest completion checklist archived"
    ],
    "zhScorecard": [
      "完整",
      "可執行",
      "誠實",
      "可演示",
      "可維護"
    ],
    "enScorecard": [
      "Complete",
      "Executable",
      "Honest",
      "Demoable",
      "Maintainable"
    ],
    "resources": [
      {
        "name": "Notion",
        "url": "https://www.notion.so",
        "note": "OS 說明、檢核表、地圖與 Dashboard"
      },
      {
        "name": "Google Drive",
        "url": "https://drive.google.com",
        "note": "最終交付包歸檔"
      },
      {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "note": "時程、講稿與模擬評審"
      },
      {
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "note": "知識庫 grounded 演示"
      },
      {
        "name": "GitHub",
        "url": "https://github.com",
        "note": "作品與版本證據"
      },
      {
        "name": "Canva",
        "url": "https://www.canva.com",
        "note": "成果簡報"
      },
      {
        "name": "Gamma",
        "url": "https://gamma.app",
        "note": "架構簡報備援"
      },
      {
        "name": "Google Calendar",
        "url": "https://calendar.google.com",
        "note": "90 天里程碑"
      },
      {
        "name": "Vercel",
        "url": "https://vercel.com",
        "note": "若有網站作品則部署展示"
      },
      {
        "name": "Trello",
        "url": "https://trello.com",
        "note": "最終專案任務板"
      }
    ],
    "challenge": "提交並發表完整 AI University OS 最終專案：十項必要交付齊全或誠實標示缺口＋補完日；含 3 分鐘介紹與至少一輪模擬評審紀錄。"
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
