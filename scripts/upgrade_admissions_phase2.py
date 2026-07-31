#!/usr/bin/env python3
"""Upgrade admissions PREMIUM_LESSON_DETAILS quality (phase-2 template)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content.js"

REMINDER_ZH = "請把 AI 產生的內容改成符合你真實經歷與語氣的版本，不要直接複製送出。涉及校系規定時，請查閱當年度官方招生簡章，不要把 AI 回答當成正式規定。"
REMINDER_EN = "Revise the AI-generated content to match your real experience and personal voice. Do not submit it without review. For program rules, check the official admissions brochure for the current year—do not treat AI answers as official policy."

PRESERVE = [
    "zhQuizItems",
    "enQuizItems",
    "zhScorecard",
    "enScorecard",
    "zhFeedbackPrompt",
    "enFeedbackPrompt",
    "zhCoachPrompt",
    "enCoachPrompt",
    "id",
    "lessonKey",
]


def load_admissions(src: str):
    m = re.search(r'"admissions"\s*:\s*\[', src)
    if not m:
        raise SystemExit("admissions array not found")
    start = m.end() - 1
    depth = 0
    end = None
    for j in range(start, len(src)):
        if src[j] == "[":
            depth += 1
        elif src[j] == "]":
            depth -= 1
            if depth == 0:
                end = j + 1
                break
    if end is None:
        raise SystemExit("failed to find admissions array end")
    lessons = json.loads(src[start:end])
    return lessons, m.start(), start, end


def dumps_js(obj) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2)


def prompt_pack(zh_body, en_body, fields_zh, fields_en, when_zh, when_en, expected_zh, expected_en, ext_zh=None, ext_en=None):
    zh = {
        "when": when_zh,
        "fields": fields_zh,
        "body": zh_body.strip() + "\n\n" + REMINDER_ZH,
        "expected": expected_zh,
        "revisionReminder": REMINDER_ZH,
    }
    en = {
        "when": when_en,
        "fields": fields_en,
        "body": en_body.strip() + "\n\n" + REMINDER_EN,
        "expected": expected_en,
        "revisionReminder": REMINDER_EN,
    }
    if ext_zh:
        zh["extensions"] = ext_zh
    if ext_en:
        en["extensions"] = ext_en
    return zh, en


def enrichments():
    """Return list of field dicts for L1..L10 (index 0..9). Titles kept."""
    items = []

    # ---- L1 ----
    zh_p, en_p = prompt_pack(
        """你是大學申請規劃教練，不是代寫者，也不可捏造成績、獎項或經歷。

我的背景：
- 年級：[請填寫年級]
- 目前成績概況：[請填寫學測/模擬考概況，勿填身分證或電話]
- 目標科系（暫定）：[目標科系]
- 目前卡關：[想改善的問題]

任務：幫我產出「大學申請準備地圖」，包含：
1) 第一階段可能要確認的項目（採計、檢定、倍率等——標註「需查官方簡章」）
2) 第二階段備審與面試準備項目
3) 我目前已有／缺少的資料
4) 未來 7 天可執行行動（每天 1–2 件事）

輸出格式：
- 用條列與表格
- 每個建議旁註明「根據你提供的資料」或「需自行查證」
- 不要保證錄取，不要編造我沒有的經歷""",
        """You are a university-application planning coach—not a ghostwriter. Do not invent grades, awards, or experiences.

My background:
- Grade level: [fill in grade]
- Current academic overview: [fill in exam/mock overview; no ID/phone]
- Tentative target majors: [target majors]
- Current blocker: [problem to improve]

Task: Produce an Application Preparation Map with:
1) Stage-1 items to verify (subjects, thresholds, multipliers—mark “check official brochure”)
2) Stage-2 portfolio and interview prep items
3) What I already have vs. what is missing
4) A 7-day action list (1–2 tasks per day)

Output format:
- Use bullets and tables
- Label each tip as “based on your input” or “verify yourself”
- No admission guarantees; invent nothing I did not provide""",
        ["[請填寫年級]", "[目標科系]", "[想改善的問題]"],
        ["[fill in grade]", "[target majors]", "[problem to improve]"],
        "當你要釐清申請流程與本週行動時使用",
        "Use when clarifying the application process and this week’s actions",
        "一份含第一／二階段、缺口與 7 天行動的準備地圖",
        "A preparation map with stage-1/2 items, gaps, and a 7-day plan",
        ext_zh=[{
            "title": "延伸：查證提醒 Prompt",
            "body": "請根據我貼上的準備地圖，列出「必須回官方簡章查證」的項目清單，並告訴我每個項目要查哪個欄位。不要猜測具體數字。"
        }],
        ext_en=[{
            "title": "Extension: verification prompt",
            "body": "From my preparation map, list items that must be verified in the official brochure and which fields to check. Do not invent numbers."
        }],
    )
    items.append({
        "zhConcept": "很多學生一開始只問「我要申請哪裡」，卻沒有地圖：第一階段篩選看什麼、第二階段備審與面試要準備什麼、自己缺什麼、這週先做哪三件事。這一課要解決的問題，就是把模糊焦慮變成可執行的申請準備地圖。AI 能幫你拆任務與檢查缺口，但不能代替你查簡章，也不能捏造經歷。",
        "enConcept": "Many students ask “Where should I apply?” without a map: what Stage 1 screens for, what Stage 2 needs, what they lack, and which three tasks to do this week. This lesson turns vague anxiety into an actionable preparation map. AI can break down tasks and find gaps—but it cannot replace brochure checks or invent your experience.",
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
        "zhValueTip": "先有地圖，再談備審與面試；AI 是整理助手，不是代寫與保證錄取工具。",
        "enValueTip": "Map first, then portfolio and interview. AI is an organizer—not a ghostwriter or admission guarantee.",
        "estimatedTime": "約 45 分鐘 / About 45 min",
        "difficulty": "入門 / Beginner",
        "zhOutcome": "大學申請準備地圖",
        "enOutcome": "University Application Preparation Map",
        "zhOutputName": "大學申請準備地圖",
        "enOutputName": "University Application Preparation Map",
        "zhCaseStudy": "學生小安是高三生，只知道學測大概落點和「想讀跟電腦有關的科系」。他先請 AI「幫我規劃申請」，得到一長串空泛建議。後來他改成：先寫 3 個暫定科系、目前已有／缺少的資料，再請 AI 拆成第一階段查證項、第二階段備審項與 7 天行動，才第一次知道這週該查簡章還是該整理活動。",
        "enCaseStudy": "An is a senior who only knows a rough test range and “something related to computers.” Asking AI to “plan my application” produced vague lists. After listing 3 tentative majors and current gaps, AI helped split Stage-1 verification, Stage-2 materials, and a 7-day plan—so An finally knew whether to check brochures or organize activities this week.",
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
        "zhWorkflowSteps": [
            {"do": "寫下 3 個暫定目標科系與目前狀態", "why": "沒有目標就無法排出優先順序", "input": "年級、成績概況、暫定科系", "output": "目標清單草稿", "check": "是否寫到具體科系名稱，而不只是「喜歡電腦」"},
            {"do": "盤點已有資料與缺口", "why": "避免重複做已經有的事", "input": "學習歷程、活動、作品清單", "output": "已有／缺少對照", "check": "缺口是否寫成可行動項目"},
            {"do": "用 Prompt 產出準備地圖", "why": "把焦慮轉成階段任務", "input": "上一步資料", "output": "分階段地圖", "check": "是否分開第一／二階段"},
            {"do": "標註需查證項目", "why": "AI 不是官方簡章", "input": "地圖草稿", "output": "查證清單", "check": "是否沒有把 AI 數字當正式規定"},
            {"do": "存入成果並自我檢查", "why": "後續課堂會沿用這份地圖", "input": "定稿地圖", "output": "成果包項目", "check": "是否含 7 天行動"}
        ],
        "enWorkflowSteps": [
            {"do": "List 3 tentative majors and status", "why": "Priorities need targets", "input": "Grade, academic overview, majors", "output": "Target draft", "check": "Specific major names, not only “like computers”"},
            {"do": "Inventory assets and gaps", "why": "Avoid redo work", "input": "Portfolio/activity lists", "output": "Have/need table", "check": "Gaps are actionable"},
            {"do": "Generate the map with the prompt", "why": "Turn anxiety into staged tasks", "input": "Prior notes", "output": "Staged map", "check": "Stage 1 and 2 are separate"},
            {"do": "Flag verification items", "why": "AI is not the brochure", "input": "Draft map", "output": "Verify list", "check": "No AI numbers treated as official"},
            {"do": "Save and self-check", "why": "Later lessons reuse this map", "input": "Final map", "output": "Package entry", "check": "Includes a 7-day plan"}
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
        "zhPractice": "寫下 3 個暫定目標科系與目前狀態。；列出已有／缺少的申請資料。；用主 Prompt 產出準備地圖並標註查證項。；把定稿存成「大學申請準備地圖」。",
        "enPractice": "List 3 tentative majors and your status.; List what you have vs. lack.; Run the main prompt and mark verification items.; Save the final Application Preparation Map.",
        "zhPracticeSteps": [
            {"task": "寫下 3 個暫定目標科系與目前狀態", "standard": "科系名稱具體，狀態可用一句話說清", "mistakes": "只寫「想讀好科系」", "check": "別人能否立刻看懂你的方向？"},
            {"task": "列出已有／缺少資料", "standard": "至少各 3 項", "mistakes": "只寫「什麼都沒有」卻不拆項目", "check": "缺口是否可變成待辦？"},
            {"task": "用 Prompt 產出地圖並查證標註", "standard": "含第一／二階段與 7 天行動", "mistakes": "直接照抄未改寫", "check": "是否已改成自己的語氣與真實情況？"},
            {"task": "存入成果包", "standard": "成果名稱正確且內容完整", "mistakes": "空白儲存", "check": "重新整理後仍看得到內容？"}
        ],
        "enPracticeSteps": [
            {"task": "List 3 tentative majors and status", "standard": "Specific majors; status in one clear sentence", "mistakes": "Only “a good major”", "check": "Would a reader understand your direction?"},
            {"task": "List have vs. lack", "standard": "At least 3 items each", "mistakes": "Only “I have nothing” with no breakdown", "check": "Can gaps become tasks?"},
            {"task": "Run the prompt and mark verification", "standard": "Includes Stage 1/2 and 7-day actions", "mistakes": "Paste AI text unchanged", "check": "Rewritten in your voice with real facts?"},
            {"task": "Save to the package", "standard": "Correct deliverable name and complete content", "mistakes": "Saving blank text", "check": "Still visible after refresh?"}
        ],
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
        "zhExcellentExample": "高品質準備地圖應包含：目標校系列表、第一階段查證項、第二階段備審／面試項、已有／缺少對照、7 天行動、需查簡章清單。",
        "enExcellentExample": "A strong map includes: target majors, Stage-1 checks, Stage-2 materials/interview items, have/need table, 7-day plan, brochure checklist.",
        "zhPrompt": None,  # filled from pack
        "enPrompt": None,
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhExample": "年級：高三；目標科系：資訊管理、資訊工程、數據科學；卡關：不知道這週該查簡章還是寫活動。",
        "enExample": "Grade: 12; majors: Information Management, CS, Data Science; blocker: unsure whether to check brochures or write activities this week.",
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
        },
    })

    # ---- L2 ----
    zh_p, en_p = prompt_pack(
        """你是高中升學探索教練。不可捏造我的興趣、成績或經歷。

我的背景：
- 喜歡的科目／主題：[請填寫……]
- 相對有把握的能力：[請填寫……]
- 較不喜歡或想避開的：[請填寫……]
- 活動／專題經驗摘要：[個人經歷]
- 未來想像（可模糊）：[請填寫……]

任務：產出「科系探索表」：
1) 推薦 5 個可能適合的科系方向（說明推薦理由，必須連結我提供的資料）
2) 每個科系列出：可能需要的能力、高中可準備的證據、潛在風險／不適合點
3) 幫我縮成 3 個優先探索科系，並說明取捨邏輯
4) 列出我下一步要查的官方資訊（課表、出路、招生方式——勿捏造具體規定）

限制：不要保證錄取；不要編造獎項；若資訊不足先問我。""",
        """You are a high-school major-exploration coach. Do not invent my interests, grades, or experiences.

My background:
- Subjects/themes I like: [fill in…]
- Strengths I feel more confident about: [fill in…]
- Things I dislike or want to avoid: [fill in…]
- Activity/project summary: [personal experience]
- Future imagination (can be fuzzy): [fill in…]

Task: Produce a Major Exploration Sheet:
1) Suggest 5 possible major directions with reasons tied to my inputs
2) For each: likely skills needed, evidence I could prepare in high school, risks/misfit points
3) Narrow to 3 priority majors with trade-off logic
4) List official info I should check next (curriculum, paths, admissions—do not invent rules)

Limits: no admission guarantees; no fake awards; ask me if information is missing.""",
        ["[請填寫……]", "[個人經歷]", "[目標科系]"],
        ["[fill in…]", "[personal experience]", "[target majors]"],
        "當你要用興趣與優勢找出科系方向時使用",
        "Use when mapping interests/strengths to major directions",
        "一份含 5 個可能科系與 3 個優先科系的探索表",
        "An exploration sheet with 5 possible and 3 priority majors",
    )
    items.append({
        "zhConcept": "很多學生不是沒有興趣，而是興趣很散，無法對應到科系。這一課要解決的問題是：把「我好像喜歡很多東西」整理成可比較的科系探索表，讓後續比較校系與備審有依據。重點不是一次訂生死志願，而是先有證據化的方向。",
        "enConcept": "Many students have interests—they’re just scattered. This lesson turns “I like lots of things” into a comparable major exploration sheet so later program comparison and portfolio work have a basis. The goal is evidence-based direction, not a final irrevocable choice.",
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
        "zhValueTip": "先探索再比較：沒有探索表，後面的志願邏輯會變成感覺投票。",
        "enValueTip": "Explore before you compare: without an exploration sheet, preference logic becomes vibes-only.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "入門 / Beginner",
        "zhOutcome": "科系探索表",
        "enOutcome": "Major Exploration Sheet",
        "zhOutputName": "科系探索表",
        "enOutputName": "Major Exploration Sheet",
        "zhCaseStudy": "學生小瑜喜歡生物、設計社團和幫同學做簡報，但一直說「我什麼都想讀」。她先列出喜歡／擅長／避開，再用 Prompt 得到 5 個方向（如生科、設傳、教育科技等），並標出每個方向需要什麼證據。最後她選出 3 個優先探索科系，開始查課表而不是繼續焦慮。",
        "enCaseStudy": "Yu likes biology, design club, and helping classmates with slides, but kept saying “I want everything.” After listing likes/strengths/avoids, a prompt produced 5 directions with evidence needs. She narrowed to 3 priorities and started checking curricula instead of spinning.",
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
        "zhWorkflowSteps": [
            {"do": "盤點喜歡／擅長／避開", "why": "探索要有邊界", "input": "科目與活動筆記", "output": "個人素材卡", "check": "是否包含「不想做的事」"},
            {"do": "請 AI 產出 5 個方向", "why": "先發散再收斂", "input": "素材卡", "output": "五科系列表", "check": "理由是否引用你的資料"},
            {"do": "補能力與證據欄", "why": "避免空談適合", "input": "五科系列表", "output": "探索表初稿", "check": "每個科系是否有可準備證據"},
            {"do": "縮成 3 個優先", "why": "下一堂要深入比較", "input": "初稿", "output": "優先三科系", "check": "是否寫出放棄其他兩項的理由"},
            {"do": "存檔並自我檢查", "why": "後續備審會回看", "input": "定稿", "output": "成果包", "check": "表格是否可給顧問看懂"}
        ],
        "enWorkflowSteps": [
            {"do": "Inventory likes/strengths/avoids", "why": "Exploration needs boundaries", "input": "Subject/activity notes", "output": "Personal material card", "check": "Includes things you do not want"},
            {"do": "Generate 5 directions with AI", "why": "Diverge before converging", "input": "Material card", "output": "Five-major list", "check": "Reasons cite your inputs"},
            {"do": "Add skills and evidence columns", "why": "Avoid empty “fit” talk", "input": "Five-major list", "output": "Sheet draft", "check": "Each major has preparable evidence"},
            {"do": "Narrow to top 3", "why": "Next lesson compares deeply", "input": "Draft", "output": "Priority three", "check": "Trade-offs written"},
            {"do": "Save and self-check", "why": "Later portfolio work revisits this", "input": "Final", "output": "Package entry", "check": "Readable to an advisor"}
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
        "zhPractice": "完成興趣／優勢／避開盤點。；用 Prompt 產出 5 個可能科系。；縮成 3 個優先科系並寫取捨。；存成科系探索表。",
        "enPractice": "Finish likes/strengths/avoids inventory.; Generate 5 possible majors.; Narrow to 3 with trade-offs.; Save the Major Exploration Sheet.",
        "zhPracticeSteps": [
            {"task": "完成個人盤點卡", "standard": "喜歡／擅長／避開都有具體例子", "mistakes": "只寫形容詞", "check": "有沒有可觀察的行為例子？"},
            {"task": "產出五科系探索", "standard": "每系有理由與風險", "mistakes": "只有校系名稱", "check": "理由是否引用你的資料？"},
            {"task": "收斂三個優先", "standard": "有取捨邏輯", "mistakes": "五個都想要、無法排序", "check": "能否向家人解釋為什麼這三個？"},
            {"task": "存入成果包", "standard": "表格完整可讀", "mistakes": "空白或未改寫", "check": "是否已個人化？"}
        ],
        "enPracticeSteps": [
            {"task": "Complete personal inventory", "standard": "Concrete examples for likes/strengths/avoids", "mistakes": "Only adjectives", "check": "Observable behavior examples?"},
            {"task": "Build five-major exploration", "standard": "Reasons and risks per major", "mistakes": "Names only", "check": "Reasons cite your data?"},
            {"task": "Converge to top 3", "standard": "Clear trade-offs", "mistakes": "Wanting all five equally", "check": "Can you explain the three to family?"},
            {"task": "Save to package", "standard": "Complete readable table", "mistakes": "Blank or unedited AI text", "check": "Personalized?"}
        ],
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
        "zhExcellentExample": "探索表應含：個人盤點、五科系比較欄、三優先與取捨、下一步查證清單。",
        "enExcellentExample": "Sheet should include inventory, five-major comparison columns, top-3 trade-offs, and next verification list.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhExample": "喜歡：生物實驗、做海報；擅長：觀察細節、協助同學；避開：純背誦；活動：設計社美宣。",
        "enExample": "Likes: bio labs, posters; strengths: detail, helping peers; avoids: pure memorization; activity: design club visuals.",
        "zhNextStep": "下一堂用這 3 個優先科系做校系比較，建立有理由的志願選擇邏輯。",
        "enNextStep": "Next, compare programs for these 3 priorities and build preference logic with reasons.",
        "zhConceptBlocks": {
            "principles": ["探索先於決定", "適合要能說出證據", "保留不適合點才算誠實"],
            "terms": ["科系探索表", "優先探索科系", "可準備證據"],
            "criteria": ["五個方向可比較", "三個優先有取捨", "理由連結自己資料"],
            "boundaries": ["避免：AI 替你決定人生", "避免：捏造興趣", "避免：把探索當最終志願"]
        },
        "enConceptBlocks": {
            "principles": ["Explore before deciding", "Fit needs evidence", "Honest sheets include misfits"],
            "terms": ["Major exploration sheet", "Priority majors", "Preparable evidence"],
            "criteria": ["Five comparable directions", "Top three with trade-offs", "Reasons tied to your data"],
            "boundaries": ["Avoid: letting AI decide your life", "Avoid: inventing interests", "Avoid: treating exploration as final"]
        },
    })

    # ---- L3 ----
    zh_p, en_p = prompt_pack(
        """你是大學志願選擇教練。不可捏造學校排名保證或錄取結果。

我的背景：
- 優先探索科系（來自上一課）：[目標科系]
- 我在乎的條件（例如課程、地點、負擔、實作機會）：[請填寫……]
- 目前已知資訊（課表／簡章摘要，自行查過的）：[請填寫……]
- 還不確定的問題：[想改善的問題]

任務：產出「校系比較與志願選擇邏輯表」：
1) 幫我建立比較維度（至少 5 個，需符合我在乎的條件）
2) 針對 3 個優先方向做比較（資訊不足處標「待查證」）
3) 寫出「若 A 優於 B」的判斷規則（選擇邏輯）
4) 給出一版暫定志願排序草稿，並說明可在何時調整

限制：不要用「一定比較好」這種空話；不要捏造學費、分數或錄取率；提醒我回官方簡章與學校網站查證。""",
        """You are a preference-logic coach for university programs. Do not invent ranking guarantees or admission outcomes.

My background:
- Priority majors (from last lesson): [target majors]
- What I care about (curriculum, location, load, hands-on chances…): [fill in…]
- What I already verified (curriculum/brochure notes): [fill in…]
- Open questions: [problem to improve]

Task: Produce a Program Comparison & Preference Logic Table:
1) Build comparison dimensions (at least 5, matching what I care about)
2) Compare 3 priority directions (mark unknowns as “to verify”)
3) Write if-then preference rules (when A beats B)
4) Draft a tentative order and when I should revisit it

Limits: no empty “always better” claims; no invented tuition/scores/rates; remind me to verify on official sites/brochures.""",
        ["[目標科系]", "[請填寫……]", "[想改善的問題]"],
        ["[target majors]", "[fill in…]", "[problem to improve]"],
        "當你要比較校系並寫出選擇理由時使用",
        "Use when comparing programs and writing preference reasons",
        "一份有維度、比較與 if-then 邏輯的志願表",
        "A preference table with dimensions, comparison, and if-then logic",
    )
    items.append({
        "zhConcept": "有了科系方向後，下一個卡關常是：同樣名稱的校系差在哪？為什麼志願這樣排？這一課要解決「感覺排序」問題，把上一課的優先科系做成可說明的比較表與選擇邏輯，方便之後寫動機與面試回答。",
        "enConcept": "After direction comes the next stuck point: how do similarly named programs differ, and why this preference order? This lesson replaces vibe-ranking with a explainable comparison table and preference logic—useful later for motivation essays and interviews.",
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
        "zhValueTip": "志願要排得讓「未來的你」在面試時講得出理由，而不是只排感覺。",
        "enValueTip": "Rank preferences so Future You can explain them in an interview—not by vibe alone.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "校系比較與志願選擇邏輯表",
        "enOutcome": "Program Comparison & Preference Logic Table",
        "zhOutputName": "校系比較與志願選擇邏輯表",
        "enOutputName": "Program Comparison & Preference Logic Table",
        "zhCaseStudy": "學生阿哲上一課選了資管、資工、數據相關三個優先方向，但仍用「哪間有名」排序。他改成先定維度：課程實作比重、數學負擔、實習機會、交通、自己已有證據。再用 Prompt 產出比較表與「若實習機會明顯較高且我能負擔數學，則 A 優先於 B」的規則，志願排序第一次變得說得出口。",
        "enCaseStudy": "Zhe had three priority directions but ranked by prestige. He set dimensions—hands-on load, math load, internships, commute, evidence he already has—then built comparison rules like “If internships are clearly stronger and I can handle the math, A beats B.” His order finally became explainable.",
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
        "zhWorkflowSteps": [
            {"do": "列出三優先與在乎條件", "why": "比較要有尺子", "input": "科系探索表", "output": "維度清單", "check": "維度是否真是你在乎的"},
            {"do": "補上已查證資訊", "why": "避免 AI 瞎掰規定", "input": "學校網站筆記", "output": "資料欄", "check": "未知是否標待查證"},
            {"do": "產出比較表", "why": "把差異看清楚", "input": "維度+資料", "output": "比較表", "check": "是否避免空話"},
            {"do": "寫 if-then 邏輯", "why": "面試要講得出來", "input": "比較表", "output": "選擇規則", "check": "規則是否可用具體條件觸發"},
            {"do": "暫定排序並存檔", "why": "後續動機與備審會用到", "input": "規則", "output": "邏輯表成果", "check": "排序是否與規則一致"}
        ],
        "enWorkflowSteps": [
            {"do": "List top 3 and what you care about", "why": "Comparison needs a ruler", "input": "Exploration sheet", "output": "Dimension list", "check": "Dimensions are truly yours"},
            {"do": "Add verified info", "why": "Stop invented rules", "input": "Official-site notes", "output": "Data columns", "check": "Unknowns marked"},
            {"do": "Build comparison table", "why": "Make differences visible", "input": "Dimensions+data", "output": "Table", "check": "No empty praise"},
            {"do": "Write if-then logic", "why": "Interview-ready reasons", "input": "Table", "output": "Rules", "check": "Rules trigger on concrete conditions"},
            {"do": "Draft order and save", "why": "Later essays reuse this", "input": "Rules", "output": "Logic deliverable", "check": "Order matches rules"}
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
        "zhPractice": "列出比較維度。；填入三優先校系已知資訊。；用 Prompt 產出比較與 if-then 邏輯。；存成校系比較與志願選擇邏輯表。",
        "enPractice": "List dimensions.; Fill known info for three priorities.; Generate comparison and if-then logic.; Save the logic table.",
        "zhPracticeSteps": [
            {"task": "訂出至少 5 個比較維度", "standard": "維度具體可觀察", "mistakes": "只有名氣", "check": "能否打分或描述差異？"},
            {"task": "完成三方向比較", "standard": "未知標待查證", "mistakes": "捏造數據", "check": "每格是否有來源或待查？"},
            {"task": "寫出選擇邏輯與暫定排序", "standard": "有 if-then", "mistakes": "只有「我喜歡A」", "check": "能否向教授解釋？"},
            {"task": "存入成果包", "standard": "成果名稱正確", "mistakes": "空白", "check": "是否已個人化？"}
        ],
        "enPracticeSteps": [
            {"task": "Define ≥5 dimensions", "standard": "Observable dimensions", "mistakes": "Prestige only", "check": "Can you score/describe differences?"},
            {"task": "Compare three directions", "standard": "Unknowns marked", "mistakes": "Invented numbers", "check": "Source or to-verify per cell?"},
            {"task": "Write logic + tentative order", "standard": "Includes if-then", "mistakes": "Only “I like A”", "check": "Explainable to a professor?"},
            {"task": "Save to package", "standard": "Correct deliverable name", "mistakes": "Blank", "check": "Personalized?"}
        ],
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
        "zhExcellentExample": "邏輯表含：維度定義、三方向比較、待查證清單、if-then 規則、暫定排序與調整時機。",
        "enExcellentExample": "Includes dimension definitions, three-way comparison, verify list, if-then rules, tentative order and revisit timing.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhExample": "優先：資管／資工／數據；在乎：實作、數學負擔、交通；已知：某系專題課較多（自行查過課程頁）。",
        "enExample": "Priorities: IM/CS/Data; cares: hands-on, math load, commute; known: one program has more project courses (verified on course page).",
        "zhNextStep": "下一堂開始盤點高中三年素材，把方向落到可寫進備審的證據。",
        "enNextStep": "Next, inventory three years of materials so your direction connects to portfolio evidence.",
        "zhConceptBlocks": {
            "principles": ["比較要有共同維度", "未知要標出來", "邏輯要能口述"],
            "terms": ["比較維度", "志願選擇邏輯", "待查證"],
            "criteria": ["維度≥5", "有 if-then", "排序可解釋"],
            "boundaries": ["避免：捏造分數線", "避免：只比名氣", "避免：重複第2課探索"]
        },
        "enConceptBlocks": {
            "principles": ["Shared dimensions", "Mark unknowns", "Logic must be speakable"],
            "terms": ["Comparison dimensions", "Preference logic", "To verify"],
            "criteria": ["≥5 dimensions", "If-then present", "Explainable order"],
            "boundaries": ["Avoid: inventing cutoffs", "Avoid: prestige-only", "Avoid: repeating Lesson 2"]
        },
    })

    # Continue L4-L10 in part 2 via function call below
    return items


def enrichments_l4_to_l10():
    items = []

    # L4
    zh_p, en_p = prompt_pack(
        """你是學習歷程整理教練。不可替我捏造活動、職位、時數或獎項。

我的原始素材（可雜亂）：
[個人經歷]
[活動成果]

任務：產出「學習歷程素材庫」：
1) 幫我把素材分類：課程成果／社團幹部／競賽／服務／自主學習／專題作品／其他
2) 每筆標註：時間、我的角色、可證明的能力、可對應的申請用途
3) 挑出最有申請價值的 5 筆，說明為什麼
4) 標出證據不足、需要補細節或不宜誇大的項目

限制：沒有的經歷不要補；不要建議偽造證明；提醒敏感個資不要寫進公開備審。""",
        """You are a learning-portfolio organizer. Do not invent activities, titles, hours, or awards.

My raw materials (can be messy):
[personal experience]
[activity outcomes]

Task: Produce a Learning Portfolio Material Bank:
1) Classify into: coursework / clubs-leadership / contests / service / self-learning / projects / other
2) For each: time, my role, skills evidenced, application use
3) Select the top 5 most useful items and why
4) Flag weak evidence, missing detail, or items that should not be exaggerated

Limits: do not add experiences I lack; do not suggest forged proof; remind me not to put sensitive IDs in public materials.""",
        ["[個人經歷]", "[活動成果]"],
        ["[personal experience]", "[activity outcomes]"],
        "當你要把雜亂高中經驗變成可選用素材時使用",
        "Use when turning messy high-school experiences into selectable materials",
        "分類完整、含能力標註與 Top5 的素材庫",
        "A classified bank with skill tags and a Top 5",
    )
    items.append({
        "zhConcept": "備審寫不出來，常常不是文筆問題，而是素材沒整理。這一課要解決「高中三年東西很多但不知怎麼用」：先建立學習歷程素材庫，讓後面寫故事、自述與備審架構有原料。",
        "enConcept": "Blank portfolio pages are often an organization problem, not a writing problem. This lesson builds a material bank from three years of experiences so later stories, statements, and structures have raw material.",
        "zhWhyItMatters": {"problem": "經驗散落在記憶與檔案裡，寫備審時大腦空白。", "ineffective": "一開始就硬寫長文，或請 AI 直接代寫整份備審。", "solution": "先分類、標能力、挑 Top5，建成可重用的素材庫。"},
        "enWhyItMatters": {"problem": "Experiences are scattered; writing time feels blank.", "ineffective": "Forcing long essays first—or asking AI to ghostwrite the whole portfolio.", "solution": "Classify, tag skills, pick Top 5, and build a reusable bank."},
        "zhObjectives": ["列出至少 10 筆高中素材", "完成分類與能力標註", "選出最有價值的 5 筆", "標出證據不足項目", "存成學習歷程素材庫"],
        "enObjectives": ["List at least 10 high-school items", "Classify and tag skills", "Select top 5", "Flag weak-evidence items", "Save the material bank"],
        "zhValueTip": "先有素材庫，再寫故事；沒有原料的 Prompt 只會產生空話。",
        "enValueTip": "Bank first, stories second—prompts without raw material produce fluff.",
        "estimatedTime": "約 55 分鐘 / About 55 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "學習歷程素材庫",
        "enOutcome": "Learning Portfolio Material Bank",
        "zhOutputName": "學習歷程素材庫",
        "enOutputName": "Learning Portfolio Material Bank",
        "zhCaseStudy": "學生小恩以為自己「沒什麼亮眼經歷」，列出後其實有社團美宣、服務學習、小專題與課堂報告。分類後她才發現可證明溝通與專案執行的素材有 4 筆，Top5 也變得清楚。",
        "enCaseStudy": "En thought she had “nothing impressive,” then listed club design work, service, a mini-project, and class reports. Classification revealed four items evidencing communication and project execution—and a clear Top 5.",
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
        "zhWorkflow": ["不加篩選列出至少 10 筆素材", "分類並標註角色與能力", "請 AI 協助挑 Top5 與風險項", "刪去不宜誇大的說法", "存成素材庫"],
        "enWorkflow": ["List ≥10 items without filtering", "Classify with role and skills", "Use AI to help pick Top 5 and risks", "Remove exaggeration", "Save the bank"],
        "zhWorkflowSteps": [
            {"do": "狂列素材", "why": "先求有再求好", "input": "回憶與檔案", "output": "原始清單", "check": "是否≥10"},
            {"do": "分類與標能力", "why": "方便後續選用", "input": "清單", "output": "分類表", "check": "每筆有角色"},
            {"do": "挑 Top5", "why": "備審版面有限", "input": "分類表", "output": "精選", "check": "理由是否具體"},
            {"do": "標不足與風險", "why": "避免造假壓力", "input": "精選", "output": "補強清單", "check": "是否標了證據弱項"},
            {"do": "存檔", "why": "L5–L7 會重用", "input": "定稿", "output": "成果", "check": "他人看得懂"}
        ],
        "enWorkflowSteps": [
            {"do": "Brainstorm materials", "why": "Quantity before polish", "input": "Memory/files", "output": "Raw list", "check": "≥10 items"},
            {"do": "Classify and tag skills", "why": "Selectable later", "input": "List", "output": "Classified table", "check": "Role per item"},
            {"do": "Pick Top 5", "why": "Limited portfolio space", "input": "Table", "output": "Shortlist", "check": "Concrete reasons"},
            {"do": "Flag weak/risky items", "why": "Reduce fabrication pressure", "input": "Shortlist", "output": "Repair list", "check": "Weak evidence marked"},
            {"do": "Save", "why": "Lessons 5–7 reuse this", "input": "Final", "output": "Deliverable", "check": "Readable to others"}
        ],
        "zhCommonMistakes": ["只收競賽、忽略課程與服務", "請 AI 捏造沒有的幹部職稱", "沒有標自己的角色", "一開始就寫長文", "把敏感個資寫進素材"],
        "enCommonMistakes": ["Only contests, ignoring coursework/service", "Asking AI to invent titles", "No personal role tagged", "Writing long essays too early", "Putting sensitive IDs in materials"],
        "zhPractice": "列出≥10筆素材。；完成分類與能力標註。；選出Top5。；存成學習歷程素材庫。",
        "enPractice": "List ≥10 items.; Classify and tag.; Pick Top 5.; Save the material bank.",
        "zhPracticeSteps": [
            {"task": "列出至少 10 筆", "standard": "含不同類型", "mistakes": "只有兩筆競賽", "check": "類型是否多元？"},
            {"task": "分類並標能力", "standard": "每筆有角色與能力", "mistakes": "只有活動名稱", "check": "能否看出你做了什麼？"},
            {"task": "選 Top5 並說明", "standard": "理由連結申請用途", "mistakes": "只選最好聽的名稱", "check": "理由是否可驗證？"},
            {"task": "存檔", "standard": "表格完整", "mistakes": "空白", "check": "已個人化？"}
        ],
        "enPracticeSteps": [
            {"task": "List ≥10", "standard": "Multiple types", "mistakes": "Only two contests", "check": "Diverse types?"},
            {"task": "Classify + skills", "standard": "Role and skills each", "mistakes": "Names only", "check": "Clear what you did?"},
            {"task": "Pick Top 5 with reasons", "standard": "Tied to application use", "mistakes": "Coolest names only", "check": "Verifiable reasons?"},
            {"task": "Save", "standard": "Complete table", "mistakes": "Blank", "check": "Personalized?"}
        ],
        "zhDeliverableChecklist": ["至少 10 筆素材", "每筆有分類", "每筆有能力標註", "有 Top5 與理由", "已標證據不足項", "未捏造經歷並已存檔"],
        "enDeliverableChecklist": ["≥10 items", "Each classified", "Each skill-tagged", "Top 5 with reasons", "Weak evidence flagged", "No invented experience; saved"],
        "zhExcellentExample": "素材庫含原始清單、分類表、能力欄、Top5、補強清單。",
        "enExcellentExample": "Includes raw list, classification, skill column, Top 5, and repair list.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "雜亂清單：設計社美宣、班刊編輯、服務學習、程式課小專題、科學展觀摩筆記…",
        "enExample": "Messy list: club design, class magazine, service learning, coding mini-project, science fair notes…",
        "zhNextStep": "下一堂把精選活動寫成 STAR 多元表現故事。",
        "enNextStep": "Next, turn selected activities into STAR stories.",
        "zhConceptBlocks": {
            "principles": ["先整理再寫作", "角色比職稱標題重要", "證據不足要標出來"],
            "terms": ["素材庫", "能力標註", "Top5"],
            "criteria": ["≥10筆", "有分類", "有Top5"],
            "boundaries": ["避免：捏造經歷", "避免：一開始代寫全文", "避免：敏感個資"]
        },
        "enConceptBlocks": {
            "principles": ["Organize before writing", "Role > fancy title", "Flag weak evidence"],
            "terms": ["Material bank", "Skill tags", "Top 5"],
            "criteria": ["≥10 items", "Classified", "Top 5 present"],
            "boundaries": ["Avoid: inventing experience", "Avoid: full ghostwriting early", "Avoid: sensitive IDs"]
        },
    })

    # L5
    zh_p, en_p = prompt_pack(
        """你是多元表現寫作教練，使用 STAR 架構。不可誇大或捏造結果。

請針對我提供的真實活動寫 1 則多元表現（之後我會再做另外兩則）：
- 活動名稱與時間：[活動成果]
- 情境與任務：[請填寫……]
- 我實際做的行動：[個人經歷]
- 可驗證的結果／學習：[請填寫……]
- 目標科系（可選）：[目標科系]

輸出：
1) STAR 四段（Situation / Task / Action / Result）
2) 一版約 250–350 字的連貫描述
3) 指出哪裡太空泛、哪裡需要補數字或細節
4) 給「不該使用的空話」清單

限制：不要替我編造獎項名次；結果不明就寫學習與反思，不要假裝量化。""",
        """You are a portfolio-story coach using STAR. Do not exaggerate or invent results.

Write ONE activity story from my real details (I will do two more later):
- Activity + time: [activity outcomes]
- Situation/task: [fill in…]
- Actions I actually took: [personal experience]
- Verifiable result/learning: [fill in…]
- Target major (optional): [target majors]

Output:
1) STAR four parts
2) A coherent 250–350 word version
3) Where it is vague and what numbers/details to add
4) A list of empty phrases to avoid

Limits: do not invent placements; if results are unclear, write learning/reflection—do not fake metrics.""",
        ["[活動成果]", "[個人經歷]", "[目標科系]"],
        ["[activity outcomes]", "[personal experience]", "[target majors]"],
        "當你要把活動寫成有說服力的故事時使用",
        "Use when turning an activity into a persuasive story",
        "3 則含 STAR 的多元表現描述（本 Prompt 先完成 1 則，另兩則重複使用）",
        "3 STAR activity stories (this prompt does 1; repeat for the other two)",
        ext_zh=[{"title": "延伸：空話檢查", "body": "請檢查我貼上的多元表現，列出所有空泛形容詞，並改成可觀察的行動句。不要新增我沒做過的事。"}],
        ext_en=[{"title": "Extension: fluff check", "body": "Review my story, list vague adjectives, and rewrite into observable actions. Do not add things I did not do."}],
    )
    items.append({
        "zhConcept": "活動很多但寫出來像流水帳，審查端看不到你的判斷與行動。這一課用 STAR 把素材庫中的活動寫成有說服力的多元表現，重點是真實行動與可驗證結果，不是華麗形容詞。",
        "enConcept": "Many activities still read like diaries. This lesson uses STAR to turn banked activities into persuasive stories—real actions and verifiable results, not fancy adjectives.",
        "zhWhyItMatters": {"problem": "經歷有做，但文字看不出你解決了什麼。", "ineffective": "堆疊「負責認真」等空話，或請 AI 直接捏造成果。", "solution": "用 STAR 拆解並寫出 3 則可檢查的多元表現。"},
        "enWhyItMatters": {"problem": "You did the work, but readers cannot see what you solved.", "ineffective": "Stacking empty praise—or inventing outcomes with AI.", "solution": "Use STAR to produce 3 checkable activity stories."},
        "zhObjectives": ["選出 3 個要寫的活動", "用 STAR 拆解每一則", "補上具體行動與可驗證結果", "刪除空話與誇大", "完成 3 則多元表現描述"],
        "enObjectives": ["Pick 3 activities", "Break each with STAR", "Add concrete actions and verifiable results", "Remove fluff/exaggeration", "Finish 3 stories"],
        "zhValueTip": "好的故事讓人看見你的決策，不只看見活動名稱。",
        "enValueTip": "Good stories show decisions—not only activity titles.",
        "estimatedTime": "約 55 分鐘 / About 55 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "3 則多元表現描述",
        "enOutcome": "3 Activity Stories (STAR)",
        "zhOutputName": "3 則多元表現描述",
        "enOutputName": "3 Activity Stories (STAR)",
        "zhCaseStudy": "學生阿晴把「擔任美宣」寫成「我很負責完成海報」。改用 STAR 後，她補上：社團人數下滑的情境、需要提升報名的任務、她做的問卷與改版行動、報名率變化與學到的設計取捨。故事第一次有因果。",
        "enCaseStudy": "Ching wrote “I was responsible for posters.” With STAR she added declining club signup context, the goal to raise registration, survey+redesign actions, and a measurable change plus design trade-offs—cause and effect appeared.",
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
        "zhWorkflow": ["從素材庫選 3 個活動", "逐則填 STAR", "用 Prompt 檢查空泛處", "改成自己的語氣", "存成 3 則多元表現"],
        "enWorkflow": ["Pick 3 from the bank", "Fill STAR each", "Use prompt to find vagueness", "Rewrite in your voice", "Save 3 stories"],
        "zhWorkflowSteps": [
            {"do": "選3個活動", "why": "深度比數量重要", "input": "素材庫Top", "output": "選題", "check": "是否真的是你做的"},
            {"do": "填STAR草稿", "why": "先結構後文筆", "input": "事實", "output": "四段", "check": "Action是否是你的行為"},
            {"do": "連貫改寫", "why": "備審要可讀", "input": "四段", "output": "250–350字", "check": "有無空話"},
            {"do": "真實性檢查", "why": "避免造假", "input": "文稿", "output": "修正版", "check": "結果是否可說明來源"},
            {"do": "存檔", "why": "自述會引用", "input": "三則", "output": "成果", "check": "三則主題不重複"}
        ],
        "enWorkflowSteps": [
            {"do": "Pick 3 activities", "why": "Depth > volume", "input": "Bank Top", "output": "Topics", "check": "Truly yours"},
            {"do": "Draft STAR", "why": "Structure before style", "input": "Facts", "output": "Four parts", "check": "Actions are yours"},
            {"do": "Write coherent version", "why": "Readable portfolio", "input": "Parts", "output": "250–350 words", "check": "No fluff"},
            {"do": "Truth check", "why": "No fabrication", "input": "Draft", "output": "Revised", "check": "Results explainable"},
            {"do": "Save", "why": "Statement will cite these", "input": "Three", "output": "Deliverable", "check": "Themes not duplicated"}
        ],
        "zhCommonMistakes": ["只有團體成果、看不出個人行動", "捏造數據", "三則故事同一句空話", "Result只有「我學到很多」", "直接交 AI 原文"],
        "enCommonMistakes": ["Only group outcomes, no personal actions", "Invented metrics", "Same fluff across three stories", "Result = “I learned a lot” only", "Submitting raw AI text"],
        "zhPractice": "選3個活動。；各寫STAR。；用Prompt檢查並改寫。；存成3則多元表現描述。",
        "enPractice": "Pick 3.; Write STAR each.; Check with prompt and revise.; Save 3 stories.",
        "zhPracticeSteps": [
            {"task": "選定3個不重複主題的活動", "standard": "能力面向盡量不同", "mistakes": "三則都是同一社團小事", "check": "讀完是否看到不同能力？"},
            {"task": "完成STAR與連貫稿", "standard": "每則有具體行動", "mistakes": "只有職稱", "check": "Action是否可觀察？"},
            {"task": "刪空話並真實性檢查", "standard": "無捏造", "mistakes": "補假名次", "check": "能否舉出證據？"},
            {"task": "存檔", "standard": "三則齐全", "mistakes": "只完成一則就結束", "check": "成果包看得到三則？"}
        ],
        "enPracticeSteps": [
            {"task": "Choose 3 non-overlapping themes", "standard": "Different skill angles", "mistakes": "Three tiny same-club notes", "check": "Different skills visible?"},
            {"task": "Finish STAR + prose", "standard": "Concrete actions each", "mistakes": "Titles only", "check": "Observable actions?"},
            {"task": "Cut fluff + truth check", "standard": "No invention", "mistakes": "Fake rankings", "check": "Evidence exists?"},
            {"task": "Save", "standard": "All three present", "mistakes": "Stopping after one", "check": "Package shows three?"}
        ],
        "zhDeliverableChecklist": ["完成3則", "每則有情境與任務", "每則有我的行動", "每則有結果或反思", "無誇大捏造", "已改成自己語氣並存檔"],
        "enDeliverableChecklist": ["3 stories done", "Situation+task each", "Personal actions each", "Result or reflection each", "No exaggeration", "Personalized and saved"],
        "zhExcellentExample": "每則含STAR、具體行動、可說明的結果、刪除空話後的定稿。",
        "enExcellentExample": "Each has STAR, concrete actions, explainable results, fluff removed.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "活動：社團美宣；行動：問卷、改版主視覺、分工時程；結果：報名增加與學到取捨。",
        "enExample": "Activity: club visuals; actions: survey, redesign, timeline; result: signup change + trade-off learning.",
        "zhNextStep": "下一堂把素材與故事收束成自述與申請動機初稿。",
        "enNextStep": "Next, gather materials and stories into a statement and motivation draft.",
        "zhConceptBlocks": {
            "principles": ["STAR讓因果可見", "行動要可觀察", "結果要可說明"],
            "terms": ["STAR", "多元表現", "空話"],
            "criteria": ["三則完整", "有個人行動", "無捏造"],
            "boundaries": ["避免：假數據", "避免：只寫態度", "避免：照抄AI"]
        },
        "enConceptBlocks": {
            "principles": ["STAR shows cause-effect", "Actions observable", "Results explainable"],
            "terms": ["STAR", "Activity story", "Fluff"],
            "criteria": ["Three complete", "Personal actions", "No invention"],
            "boundaries": ["Avoid: fake metrics", "Avoid: attitude-only", "Avoid: raw AI paste"]
        },
    })

    # L6
    zh_p, en_p = prompt_pack(
        """你是申請文件結構教練。不可代我捏造人生故事。

我的資料：
- 想讓審查端記住的主軸：[請填寫……]
- 支持主軸的 3 個經驗（可貼 STAR 摘要）：[個人經歷]
- 目標科系與選擇理由摘要：[目標科系]
- 未來 1–2 年學習規劃（真實版）：[請填寫……]

任務：產出「學習歷程自述與申請動機初稿」架構與初稿：
1) 建議段落順序與每段目的
2) 一版完整初稿（標註哪些句子必須改成我的原話）
3) 指出與科系連結薄弱處
4) 列出不該出現的空泛句

限制：不要保證錄取；不要添加我沒提供的家庭／獎項細節。""",
        """You are an application-structure coach. Do not invent my life story.

My inputs:
- Main theme I want readers to remember: [fill in…]
- 3 supporting experiences (STAR summaries OK): [personal experience]
- Target major + why (summary): [target majors]
- Real 1–2 year learning plan: [fill in…]

Task: Produce a Learning Statement & Motivation Draft:
1) Suggested section order and purpose of each
2) A full draft (mark lines that must become my own wording)
3) Weak major-links to fix
4) Empty phrases to remove

Limits: no admission guarantees; do not add family/award details I did not provide.""",
        ["[請填寫……]", "[個人經歷]", "[目標科系]"],
        ["[fill in…]", "[personal experience]", "[target majors]"],
        "當你要整合主軸、經驗與動機寫初稿時使用",
        "Use when integrating theme, experiences, and motivation into a draft",
        "一份有主軸與科系連結的自述／動機初稿",
        "A statement/motivation draft with theme and major links",
    )
    items.append({
        "zhConcept": "有了素材與故事，還需要一條主軸把它們串起來。這一課產出學習歷程自述與申請動機初稿，讓教授看到「你是誰、為何適合、接下來怎麼學」，而不是片段拼貼。",
        "enConcept": "Materials and stories still need a theme. This lesson drafts your learning statement and motivation so readers see who you are, why you fit, and how you’ll learn next—not a collage of fragments.",
        "zhWhyItMatters": {"problem": "文件像經歷清單，讀完記不住你。", "ineffective": "請 AI 寫一篇漂亮但與自己無關的自述。", "solution": "先定主軸，再用真實經驗與科系理由寫可修改的初稿。"},
        "enWhyItMatters": {"problem": "Documents read like checklists; you are forgettable.", "ineffective": "Pretty AI statements disconnected from your life.", "solution": "Set a theme, then draft revisable text from real experiences and major reasons."},
        "zhObjectives": ["訂出自述主軸", "選3個支持經驗", "寫出與目標科系的連結", "完成自述與動機初稿", "標出必須親筆改寫的句子"],
        "enObjectives": ["Define a theme", "Select 3 supporting experiences", "Link to the target major", "Finish statement/motivation draft", "Mark lines that must be rewritten by you"],
        "zhValueTip": "初稿的目標是可修改，不是一次完美定稿。",
        "enValueTip": "A draft’s job is to be revisable—not instantly perfect.",
        "estimatedTime": "約 60 分鐘 / About 60 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "學習歷程自述與申請動機初稿",
        "enOutcome": "Learning Statement & Motivation Draft",
        "zhOutputName": "學習歷程自述與申請動機初稿",
        "enOutputName": "Learning Statement & Motivation Draft",
        "zhCaseStudy": "學生阿柏把所有活動塞進自述，讀起來像目錄。他改成主軸「用設計解決溝通問題」，只放 3 個支持經驗，並寫清為何對應目標科系，動機段才變得有力。",
        "enCaseStudy": "Bo stuffed every activity into the statement like a table of contents. He reframed around “using design to fix communication,” kept 3 supports, and clarified major fit—motivation finally landed.",
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
        "zhWorkflow": ["決定主軸", "選3個支持經驗", "寫科系連結與未來規劃", "用Prompt產架構與初稿", "改成自己語氣並存檔"],
        "enWorkflow": ["Choose theme", "Pick 3 supports", "Write major link + plan", "Generate structure/draft", "Rewrite in your voice and save"],
        "zhWorkflowSteps": [
            {"do": "寫一句主軸", "why": "決定取捨", "input": "素材與故事", "output": "主軸句", "check": "是否可用一句說完"},
            {"do": "選3經驗", "why": "支撐主軸", "input": "STAR", "output": "證據組", "check": "是否都指向主軸"},
            {"do": "寫科系連結", "why": "動機要落地", "input": "比較表", "output": "連結段", "check": "是否提到真實課程／方向"},
            {"do": "產初稿並標必改", "why": "避免照抄", "input": "全部資料", "output": "初稿", "check": "必改句是否標出"},
            {"do": "存檔", "why": "備審架構會對照", "input": "改寫版", "output": "成果", "check": "讀完能否記住你"}
        ],
        "enWorkflowSteps": [
            {"do": "Write one theme sentence", "why": "Forces selection", "input": "Bank/stories", "output": "Theme", "check": "Sayable in one line"},
            {"do": "Pick 3 supports", "why": "Evidence for theme", "input": "STAR", "output": "Evidence set", "check": "All point to theme"},
            {"do": "Write major link", "why": "Motivation needs ground", "input": "Comparison table", "output": "Link paragraph", "check": "Mentions real direction/courses"},
            {"do": "Draft + mark rewrites", "why": "Avoid paste-submit", "input": "All inputs", "output": "Draft", "check": "Must-rewrite lines marked"},
            {"do": "Save", "why": "Later structure maps to this", "input": "Revised", "output": "Deliverable", "check": "Memorable after one read"}
        ],
        "zhCommonMistakes": ["沒有主軸", "經驗與科系無關", "未來規劃空泛", "照抄AI語氣", "加入未發生的勵志情節"],
        "enCommonMistakes": ["No theme", "Experiences unrelated to major", "Vague future plan", "AI voice unchanged", "Adding fictional inspiration plots"],
        "zhPractice": "寫主軸句。；選3經驗。；產出初稿並親筆改寫。；存成自述與動機初稿。",
        "enPractice": "Write theme.; Pick 3 supports.; Draft and rewrite by hand.; Save the statement/motivation draft.",
        "zhPracticeSteps": [
            {"task": "完成主軸與三段落大綱", "standard": "結構清楚", "mistakes": "流水帳", "check": "每段目的是否清楚？"},
            {"task": "完成初稿", "standard": "含科系連結", "mistakes": "只有經歷沒有動機", "check": "為何申請是否回答到？"},
            {"task": "標必改句並改寫", "standard": "語氣像自己", "mistakes": "整段不改", "check": "讀起來是否像你說話？"},
            {"task": "存檔", "standard": "完整初稿", "mistakes": "空白", "check": "已儲存？"}
        ],
        "enPracticeSteps": [
            {"task": "Theme + 3-part outline", "standard": "Clear structure", "mistakes": "Diary flow", "check": "Purpose per section?"},
            {"task": "Finish draft", "standard": "Includes major link", "mistakes": "Experience only", "check": "Answers why apply?"},
            {"task": "Mark and rewrite", "standard": "Sounds like you", "mistakes": "No edits", "check": "Sounds like your speech?"},
            {"task": "Save", "standard": "Full draft", "mistakes": "Blank", "check": "Saved?"}
        ],
        "zhDeliverableChecklist": ["有清楚主軸", "至少3個具體經驗", "有科系連結", "有未來學習規劃", "已標並改寫AI句", "已存檔"],
        "enDeliverableChecklist": ["Clear theme", "≥3 concrete experiences", "Major link", "Learning plan", "AI lines rewritten", "Saved"],
        "zhExcellentExample": "初稿含主軸、經驗段、科系動機、未來規劃、必改句標記。",
        "enExcellentExample": "Includes theme, experience section, major motivation, plan, and rewrite marks.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "主軸：用設計改善溝通；經驗：美宣改版、班刊、服務學習簡報；科系：傳設／資管跨域興趣。",
        "enExample": "Theme: design for communication; experiences: visual redesign, magazine, service presentation; major: communication design / IM interest.",
        "zhNextStep": "下一堂針對單一目標科系，把素材對照成備審架構。",
        "enNextStep": "Next, map materials to one target major’s application structure.",
        "zhConceptBlocks": {
            "principles": ["主軸決定取捨", "動機要連科系", "初稿必須改寫"],
            "terms": ["自述主軸", "申請動機", "必改句"],
            "criteria": ["有主軸", "有連結", "語氣真實"],
            "boundaries": ["避免：代寫定稿直接送出", "避免：假情節", "避免：無關經歷堆砌"]
        },
        "enConceptBlocks": {
            "principles": ["Theme drives selection", "Motivation links to major", "Drafts must be rewritten"],
            "terms": ["Statement theme", "Motivation", "Must-rewrite lines"],
            "criteria": ["Has theme", "Has link", "Authentic voice"],
            "boundaries": ["Avoid: submitting AI final as-is", "Avoid: fiction", "Avoid: unrelated stacking"]
        },
    })

    # L7
    zh_p, en_p = prompt_pack(
        """你是備審架構教練。不可捏造科系官方評分比重。

目標科系：[目標科系]
我已查過的科系資訊（課程、能力、備審提示）：[請填寫……]
我的素材庫摘要：[個人經歷]
我的自述主軸：[請填寫……]

任務：產出「科系專屬備審規劃表」：
1) 整理該科系可能重視的能力（標註推測／已查證）
2) 素材×能力對照表
3) 必放／可放／先不放清單與理由
4) 缺口：還缺哪種證據、如何在真實範圍內補強（不可造假）

限制：規定不明就寫待查證；不要保證這樣排版一定過。""",
        """You are an application-structure coach. Do not invent official scoring weights.

Target major: [target majors]
What I already verified (courses, skills, portfolio hints): [fill in…]
Material-bank summary: [personal experience]
Statement theme: [fill in…]

Task: Produce a Major-Specific Portfolio Plan:
1) Likely valued skills (label inferred vs verified)
2) Materials × skills matrix
3) Must-include / optional / exclude lists with reasons
4) Gaps: what evidence is missing and how to strengthen honestly (no fabrication)

Limits: if rules are unclear, mark to-verify; no guarantees this layout “passes.”""",
        ["[目標科系]", "[個人經歷]", "[請填寫……]"],
        ["[target majors]", "[personal experience]", "[fill in…]"],
        "當你要對單一科系做備審取捨時使用",
        "Use when selecting materials for one target major",
        "一份素材與科系需求對照的備審規劃表",
        "A portfolio plan mapping materials to major needs",
    )
    items.append({
        "zhConcept": "同樣的素材，對不同科系的說服力不同。這一課把目標科系需求與你的素材做成對照，決定必放／可放／不放，避免備審變成「什麼都放一點」。",
        "enConcept": "The same materials persuade differently by major. This lesson maps major needs to your bank and decides must/optional/exclude—so the portfolio is not “a bit of everything.”",
        "zhWhyItMatters": {"problem": "備審像雜貨店，審查端看不到與科系的對齊。", "ineffective": "不看科系就塞滿所有活動。", "solution": "做對照表與取捨清單，形成科系專屬備審規劃。"},
        "enWhyItMatters": {"problem": "Portfolios look like general stores.", "ineffective": "Stuffing every activity without major fit.", "solution": "Build a matrix and selection lists for one major."},
        "zhObjectives": ["分析目標科系可能重視的能力", "完成素材×能力對照", "決定必放／可放／不放", "列出缺口與真實補強方式", "完成科系專屬備審規劃表"],
        "enObjectives": ["Analyze likely valued skills", "Complete materials×skills matrix", "Decide must/optional/exclude", "List honest gap-filling actions", "Finish the major-specific plan"],
        "zhValueTip": "取捨本身就是申請論述的一部分。",
        "enValueTip": "Selection itself is part of your argument.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "科系專屬備審規劃表",
        "enOutcome": "Major-Specific Portfolio Plan",
        "zhOutputName": "科系專屬備審規劃表",
        "enOutputName": "Major-Specific Portfolio Plan",
        "zhCaseStudy": "學生小禾想申請傳播相關科系，卻把程式競賽、美宣、志工全塞進去。對照後她保留溝通與企劃證據為必放，程式競賽改為可放並寫清轉移能力，無關項目先不放，備審主線立刻清楚。",
        "enCaseStudy": "He wanted a communication-related major but stuffed coding contests, design, and volunteering. After mapping, communication/planning became must-include; coding became optional with transfer skills; unrelated items dropped—and the through-line appeared.",
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
        "zhWorkflow": ["選定一個目標科系", "整理已查證的科系資訊", "做素材×能力對照", "排出必放／可放／不放", "存成規劃表"],
        "enWorkflow": ["Pick one target major", "Collect verified major notes", "Build materials×skills matrix", "Set must/optional/exclude", "Save the plan"],
        "zhWorkflowSteps": [
            {"do": "鎖定單一科系", "why": "一次對準一個目標", "input": "志願邏輯表", "output": "目標", "check": "是否具體到系"},
            {"do": "列能力（標推測/查證）", "why": "避免假規定", "input": "簡章筆記", "output": "能力清單", "check": "來源是否標註"},
            {"do": "做對照表", "why": "看見缺口", "input": "素材庫", "output": "矩陣", "check": "每格有依據"},
            {"do": "做取捨", "why": "形成主線", "input": "矩陣", "output": "三清單", "check": "必放是否過載"},
            {"do": "存檔", "why": "面試也會用到取捨理由", "input": "定稿", "output": "成果", "check": "能否口述為何這樣放"}
        ],
        "enWorkflowSteps": [
            {"do": "Lock one major", "why": "Aim once", "input": "Preference logic", "output": "Target", "check": "Specific enough"},
            {"do": "List skills (inferred/verified)", "why": "No fake rules", "input": "Brochure notes", "output": "Skill list", "check": "Sources labeled"},
            {"do": "Build matrix", "why": "See gaps", "input": "Bank", "output": "Matrix", "check": "Evidence per cell"},
            {"do": "Select", "why": "Create through-line", "input": "Matrix", "output": "Three lists", "check": "Must-list not overloaded"},
            {"do": "Save", "why": "Interview will ask why", "input": "Final", "output": "Deliverable", "check": "Can explain aloud"}
        ],
        "zhCommonMistakes": ["一次規劃太多科系導致混亂", "捏造官方配分", "必放清單過長", "缺口用造假補強", "忽略自述主軸"],
        "enCommonMistakes": ["Planning too many majors at once", "Inventing official weights", "Must-list too long", "Faking to fill gaps", "Ignoring statement theme"],
        "zhPractice": "選1個目標科系。；完成對照與取捨。；列出真實可補強的缺口。；存成科系專屬備審規劃表。",
        "enPractice": "Pick 1 major.; Finish matrix and selection.; List honest gap actions.; Save the plan.",
        "zhPracticeSteps": [
            {"task": "完成能力清單與來源標註", "standard": "推測/查證分開", "mistakes": "當成官方配分", "check": "有無待查證？"},
            {"task": "完成對照表與三清單", "standard": "理由清楚", "mistakes": "全部必放", "check": "主線是否出現？"},
            {"task": "寫缺口與補強", "standard": "不造假", "mistakes": "建議假證書", "check": "補強是否可行？"},
            {"task": "存檔", "standard": "一頁可讀", "mistakes": "空白", "check": "已儲存？"}
        ],
        "enPracticeSteps": [
            {"task": "Skill list with source labels", "standard": "Inferred vs verified", "mistakes": "Treating as official weights", "check": "To-verify present?"},
            {"task": "Matrix + three lists", "standard": "Clear reasons", "mistakes": "Everything must-include", "check": "Through-line appears?"},
            {"task": "Gaps + honest fixes", "standard": "No fabrication", "mistakes": "Suggesting fake certificates", "check": "Fixes feasible?"},
            {"task": "Save", "standard": "One readable page", "mistakes": "Blank", "check": "Saved?"}
        ],
        "zhDeliverableChecklist": ["有目標科系", "有能力清單與來源標註", "有素材對照", "有必放／可放／不放", "有缺口與真實補強", "已存檔且未造假"],
        "enDeliverableChecklist": ["Target major set", "Skills with source labels", "Materials mapped", "Must/optional/exclude", "Gaps with honest fixes", "Saved; no fabrication"],
        "zhExcellentExample": "規劃表含能力來源、對照矩陣、三清單、缺口與下一步查證。",
        "enExcellentExample": "Includes skill sources, matrix, three lists, gaps, and next verification.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "科系：傳播相關；必放：美宣改版、簡報企劃；可放：程式小專題（強調邏輯）；不放：無關短期體驗。",
        "enExample": "Major: communication-related; must: visual redesign, presentation planning; optional: coding mini-project (logic); exclude: unrelated short tryouts.",
        "zhNextStep": "下一堂建立面試題庫，讓備審主線變成說得出的回答。",
        "enNextStep": "Next, build an interview question bank so your portfolio through-line becomes speakable answers.",
        "zhConceptBlocks": {
            "principles": ["對準單一科系", "取捨創造主線", "缺口不造假"],
            "terms": ["必放", "可放", "對照表"],
            "criteria": ["有矩陣", "有三清單", "有缺口"],
            "boundaries": ["避免：假配分", "避免：全塞", "避免：多系同時混亂規劃"]
        },
        "enConceptBlocks": {
            "principles": ["Aim one major", "Selection creates through-line", "No fake gap-fills"],
            "terms": ["Must-include", "Optional", "Matrix"],
            "criteria": ["Has matrix", "Has three lists", "Has gaps"],
            "boundaries": ["Avoid: fake weights", "Avoid: stuffing", "Avoid: multi-major chaos"]
        },
    })

    # L8
    zh_p, en_p = prompt_pack(
        """你是大學面試教練。不可編造我會被問的「保證考題」。

目標科系：[目標科系]
我的主軸與備審重點：[請填寫……]
我最怕被問的點：[想改善的問題]

任務：產出「個人面試題庫與回答架構」：
1) 20 題可能題目（分類：自我介紹／動機／學習歷程／科系理解／未來規劃／臨場）
2) 標出最難的 5 題
3) 每題給 3 個回答重點（必須能接我的真實例子，不要寫背稿全文）
4) 提醒哪些回答需要回簡章查證

限制：不要保證這些題一定出現；不要叫我背誦固定稿。""",
        """You are a university interview coach. Do not invent “guaranteed” questions.

Target major: [target majors]
My theme and portfolio focus: [fill in…]
What I fear being asked: [problem to improve]

Task: Produce a Personal Interview Question Bank & Answer Frames:
1) 20 possible questions (categories: intro/motivation/portfolio/major understanding/future/curveballs)
2) Mark the hardest 5
3) Give 3 answer bullets per question (must connect to my real examples—no full memorized scripts)
4) Flag answers that need brochure verification

Limits: do not guarantee these will appear; do not tell me to memorize a fixed script.""",
        ["[目標科系]", "[請填寫……]", "[想改善的問題]"],
        ["[target majors]", "[fill in…]", "[problem to improve]"],
        "當你要準備面試題型與回答骨架時使用",
        "Use when preparing question types and answer frames",
        "20 題分類題庫＋難題5題＋每題3重點",
        "20 categorized questions, hardest 5, 3 bullets each",
    )
    items.append({
        "zhConcept": "面試怕的不是題目多，而是回答沒有架構、無法連回備審主線。這一課建立個人面試題庫與回答重點，讓你練的是思考路徑，不是背稿。",
        "enConcept": "Interview fear is less about volume than about structure and links to your portfolio theme. This lesson builds a personal question bank and answer bullets—thinking paths, not memorized scripts.",
        "zhWhyItMatters": {"problem": "臨場容易答得很空，或背稿背到不像自己。", "ineffective": "只蒐集題目不寫回答架構，或整段背 AI 稿。", "solution": "20題分類＋難題5題＋每題3個可接真實例子的重點。"},
        "enWhyItMatters": {"problem": "Answers go empty—or sound memorized.", "ineffective": "Collecting questions without frames, or memorizing AI paragraphs.", "solution": "20 categorized Qs, hardest 5, 3 real-example bullets each."},
        "zhObjectives": ["產出20題並分類", "挑出最難5題", "為每題寫3個回答重點", "把重點連回真實例子", "完成個人面試題庫"],
        "enObjectives": ["Produce and categorize 20 questions", "Pick hardest 5", "Write 3 bullets each", "Link bullets to real examples", "Finish the personal bank"],
        "zhValueTip": "面試準備的產品是「可說的架構」，不是「可背的全文」。",
        "enValueTip": "The product is a speakable frame—not a memorized essay.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "個人面試題庫與回答架構",
        "enOutcome": "Personal Interview Question Bank & Answer Frames",
        "zhOutputName": "個人面試題庫與回答架構",
        "enOutputName": "Personal Interview Question Bank & Answer Frames",
        "zhCaseStudy": "學生小寧背了一篇自我介紹，一被追問細節就卡住。她改成題庫＋每題三個重點，並預先標出可舉的真實例子，追問時反而穩。",
        "enCaseStudy": "Ning memorized an intro and froze on follow-ups. She switched to a bank with three bullets and pre-tagged real examples—and handled follow-ups better.",
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
        "zhWorkflow": ["整理主軸與備審重點", "用Prompt產20題並分類", "挑難題5題", "每題寫3重點並接例子", "存成題庫"],
        "enWorkflow": ["Gather theme/portfolio focus", "Generate 20 categorized questions", "Pick hardest 5", "Write 3 bullets + examples", "Save the bank"],
        "zhWorkflowSteps": [
            {"do": "匯出主軸與必放素材", "why": "回答要一致", "input": "自述/規劃表", "output": "面試一頁紙", "check": "主線是否一致"},
            {"do": "產20題分類", "why": "覆蓋常見題型", "input": "一頁紙", "output": "題庫", "check": "六類是否都有"},
            {"do": "標最難5題", "why": "練習有重點", "input": "題庫", "output": "難題單", "check": "是否真是你怕的"},
            {"do": "寫三重點", "why": "抗背稿", "input": "難題", "output": "架構", "check": "能否30秒講完"},
            {"do": "存檔", "why": "下一堂模擬用", "input": "定稿", "output": "成果", "check": "不是全文稿"}
        ],
        "enWorkflowSteps": [
            {"do": "Export theme + must materials", "why": "Consistent answers", "input": "Statement/plan", "output": "One-pager", "check": "Through-line consistent"},
            {"do": "Generate 20 categorized Qs", "why": "Coverage", "input": "One-pager", "output": "Bank", "check": "All six categories"},
            {"do": "Mark hardest 5", "why": "Focused practice", "input": "Bank", "output": "Hard list", "check": "Truly your fears"},
            {"do": "Write three bullets", "why": "Anti-script", "input": "Hard Qs", "output": "Frames", "check": "Speakable in 30s"},
            {"do": "Save", "why": "Used in mock next", "input": "Final", "output": "Deliverable", "check": "Not full scripts"}
        ],
        "zhCommonMistakes": ["背完整答案", "題目與自己科系無關", "重點無法舉例", "把AI題當必考保證", "回答與備審互相矛盾"],
        "enCommonMistakes": ["Memorizing full answers", "Questions unrelated to your major", "Bullets with no examples", "Treating AI Qs as guaranteed", "Contradicting the portfolio"],
        "zhPractice": "產出20題分類題庫。；挑5題難題寫三重點。；檢查與備審一致性。；存成個人面試題庫。",
        "enPractice": "Build 20 categorized Qs.; Frame hardest 5.; Check consistency with portfolio.; Save the bank.",
        "zhPracticeSteps": [
            {"task": "完成20題分類", "standard": "六類都有", "mistakes": "只有自我介紹", "check": "覆蓋是否足夠？"},
            {"task": "完成難題架構", "standard": "每題3重點+例子", "mistakes": "寫成背稿", "check": "能否脫稿講？"},
            {"task": "一致性檢查", "standard": "不矛盾", "mistakes": "面試說一套備審另一套", "check": "主軸是否同一？"},
            {"task": "存檔", "standard": "可練習格式", "mistakes": "空白", "check": "已儲存？"}
        ],
        "enPracticeSteps": [
            {"task": "Finish 20 categorized Qs", "standard": "All six types", "mistakes": "Intro only", "check": "Enough coverage?"},
            {"task": "Frame hard questions", "standard": "3 bullets + examples", "mistakes": "Full scripts", "check": "Speakable without notes?"},
            {"task": "Consistency check", "standard": "No contradictions", "mistakes": "Interview ≠ portfolio", "check": "Same theme?"},
            {"task": "Save", "standard": "Practice-ready format", "mistakes": "Blank", "check": "Saved?"}
        ],
        "zhDeliverableChecklist": ["有20題", "有分類", "有最難5題", "每題有3重點", "重點能接真實例子", "未當必考保證並已存檔"],
        "enDeliverableChecklist": ["20 questions", "Categorized", "Hardest 5 marked", "3 bullets each", "Bullets link to real examples", "Not treated as guarantees; saved"],
        "zhExcellentExample": "題庫含分類、難度標記、三重點、可舉例子、查證提醒。",
        "enExcellentExample": "Includes categories, difficulty marks, three bullets, example hooks, verification notes.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "科系：資管；怕被問：數學不好怎麼辦；主軸：用資料改善小專題決策。",
        "enExample": "Major: IM; fear: weak math; theme: using data to improve mini-project decisions.",
        "zhNextStep": "下一堂用題庫做模擬面試，留下評分與改進清單。",
        "enNextStep": "Next, run a mock interview from this bank and keep a scoring/improvement log.",
        "zhConceptBlocks": {
            "principles": ["架構優於背稿", "題庫要個人化", "與備審一致"],
            "terms": ["回答重點", "難題", "臨場題"],
            "criteria": ["20題", "5難題", "可舉例"],
            "boundaries": ["避免：保證考題", "避免：全文背誦", "避免：矛盾說法"]
        },
        "enConceptBlocks": {
            "principles": ["Frames > scripts", "Personalize the bank", "Stay consistent with portfolio"],
            "terms": ["Answer bullets", "Hard questions", "Curveballs"],
            "criteria": ["20 Qs", "5 hard", "Example-ready"],
            "boundaries": ["Avoid: guaranteed Qs", "Avoid: full memorization", "Avoid: contradictions"]
        },
    })

    # L9
    zh_p, en_p = prompt_pack(
        """你是模擬面試官。不可羞辱學生，也不可保證錄取。

規則：
- 一次只問 1 題
- 等我回答後，再從清楚度、具體性、邏輯、說服力各給 1–5 分並說明
- 指出哪一句太空泛，並問 1 個追問
- 不要替我編造我沒說的經歷

我的目標科系：[目標科系]
我的回答架構摘要：[請填寫……]
請從這一題開始問：[請填寫面試題]

問完一輪後，幫我整理「模擬面試紀錄與改進清單」。""",
        """You are a mock interviewer. Do not belittle the student or guarantee admission.

Rules:
- Ask 1 question at a time
- After my answer, score clarity, specificity, logic, and persuasiveness 1–5 with reasons
- Point out one vague sentence and ask 1 follow-up
- Do not invent experiences I did not say

My target major: [target majors]
My answer-frame summary: [fill in…]
Start with this question: [fill in interview question]

After a round, help me compile a Mock Interview Log & Improvement List.""",
        ["[目標科系]", "[請填寫……]", "[請填寫面試題]"],
        ["[target majors]", "[fill in…]", "[fill in interview question]"],
        "當你要用 AI 當模擬面試官時使用",
        "Use when running an AI mock interview",
        "含評分、追問與改進項的模擬面試紀錄",
        "A mock-interview log with scores, follow-ups, and improvements",
        ext_zh=[{"title": "延伸：重答比較", "body": "這是我同一題的第二次回答：（貼上）請比較前後差異，只根據我寫的內容給改進建議，不要添加新經歷。"}],
        ext_en=[{"title": "Extension: rewrite compare", "body": "Here is my second answer to the same question: (paste). Compare versions and advise only from what I wrote—do not add new experiences."}],
    )
    items.append({
        "zhConcept": "有題庫還不夠，要用模擬把弱點練出來。這一課完成至少一輪模擬面試，留下評分與改進清單，並重練最弱的題。",
        "enConcept": "A bank is not enough—you need practice that surfaces weaknesses. This lesson runs at least one mock round, keeps scores and an improvement list, and redoes the weakest questions.",
        "zhWhyItMatters": {"problem": "只看題不開口，真正面試仍會空白。", "ineffective": "模擬完只說「還不錯」沒有紀錄。", "solution": "固定評分維度＋改進清單＋重答弱題。"},
        "enWhyItMatters": {"problem": "Reading questions without speaking still freezes you live.", "ineffective": "Ending with “pretty good” and no log.", "solution": "Fixed score dimensions + improvement list + redo weak Qs."},
        "zhObjectives": ["完成至少5題模擬", "每題留下四維評分", "整理常見問題與改進清單", "重練最弱2題", "存成模擬面試紀錄"],
        "enObjectives": ["Complete ≥5 mock questions", "Keep 4-dimension scores", "Compile issues and improvements", "Redo weakest 2", "Save the mock log"],
        "zhValueTip": "模擬的價值在紀錄與重練，不在一次完美表現。",
        "enValueTip": "Mocks pay off through logging and redo—not one perfect run.",
        "estimatedTime": "約 55 分鐘 / About 55 min",
        "difficulty": "進階 / Intermediate",
        "zhOutcome": "模擬面試紀錄與改進清單",
        "enOutcome": "Mock Interview Log & Improvement List",
        "zhOutputName": "模擬面試紀錄與改進清單",
        "enOutputName": "Mock Interview Log & Improvement List",
        "zhCaseStudy": "學生阿哲模擬時每題都說「我很有熱忱」。留下評分後他發現具體性分數最低，於是重練兩題，改成先講行動再講熱忱，改進清單變得很明確。",
        "enCaseStudy": "Zhe answered every mock with “I’m passionate.” Scores showed specificity lowest; he redid two questions by leading with actions—then the improvement list became concrete.",
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
        "zhWorkflow": ["從題庫選5題", "逐題模擬並評分", "整理改進清單", "重練最弱2題", "存成紀錄"],
        "enWorkflow": ["Pick 5 from the bank", "Mock and score each", "Compile improvements", "Redo weakest 2", "Save the log"],
        "zhWorkflowSteps": [
            {"do": "選5題（含難題）", "why": "練習要有挑戰", "input": "題庫", "output": "本輪題單", "check": "是否含怕的題"},
            {"do": "逐題回答與評分", "why": "留下證據", "input": "回答", "output": "評分表", "check": "四維是否都有"},
            {"do": "寫改進清單", "why": "下一輪可執行", "input": "評分", "output": "改進項", "check": "是否具體到句子"},
            {"do": "重答2題", "why": "把改進落地", "input": "弱題", "output": "前後對照", "check": "是否真的更具體"},
            {"do": "存檔", "why": "總檢查會用到", "input": "紀錄", "output": "成果", "check": "能否看出進步點"}
        ],
        "enWorkflowSteps": [
            {"do": "Pick 5 including hard ones", "why": "Practice needs challenge", "input": "Bank", "output": "Round list", "check": "Includes feared Qs"},
            {"do": "Answer and score", "why": "Leave evidence", "input": "Answers", "output": "Score sheet", "check": "All 4 dimensions"},
            {"do": "Write improvements", "why": "Actionable next round", "input": "Scores", "output": "Fix list", "check": "Specific to sentences"},
            {"do": "Redo 2", "why": "Land the fixes", "input": "Weak Qs", "output": "Before/after", "check": "More specific"},
            {"do": "Save", "why": "Final review uses this", "input": "Log", "output": "Deliverable", "check": "Progress visible"}
        ],
        "zhCommonMistakes": ["模擬但不記錄", "分數只有「還可以」", "不重練弱題", "讓AI替你回答", "把模擬分數當成錄取預測"],
        "enCommonMistakes": ["Mocking without logging", "Scores like “okay”", "No redo", "Letting AI answer for you", "Treating scores as admission prediction"],
        "zhPractice": "完成5題模擬與評分。；整理改進清單。；重練2題。；存成模擬面試紀錄與改進清單。",
        "enPractice": "Finish 5 scored mocks.; Compile improvements.; Redo 2.; Save the log.",
        "zhPracticeSteps": [
            {"task": "完成5題評分紀錄", "standard": "四維分數齊", "mistakes": "只聊天不評分", "check": "紀錄是否可回看？"},
            {"task": "寫出改進清單", "standard": "至少5項可執行", "mistakes": "只寫加油", "check": "明天能否照做？"},
            {"task": "重練弱題並對照", "standard": "有前後差異", "mistakes": "重念同一稿", "check": "具體性是否提升？"},
            {"task": "存檔", "standard": "含改進與重答", "mistakes": "空白", "check": "已儲存？"}
        ],
        "enPracticeSteps": [
            {"task": "Finish 5 scored records", "standard": "All 4 dimensions", "mistakes": "Chat only", "check": "Reviewable later?"},
            {"task": "Write improvement list", "standard": "≥5 actionable items", "mistakes": "Only “do better”", "check": "Doable tomorrow?"},
            {"task": "Redo weak Qs with compare", "standard": "Visible before/after", "mistakes": "Same script again", "check": "More specific?"},
            {"task": "Save", "standard": "Includes fixes + redos", "mistakes": "Blank", "check": "Saved?"}
        ],
        "zhDeliverableChecklist": ["至少5題模擬", "每題有評分", "有改進清單", "已重練最弱2題", "未把分數當錄取預測", "已存檔"],
        "enDeliverableChecklist": ["≥5 mocks", "Scores each", "Improvement list", "Weakest 2 redone", "Scores not treated as predictions", "Saved"],
        "zhExcellentExample": "紀錄含題目、回答摘要、四維分、追問、改進項、重答對照。",
        "enExcellentExample": "Includes Qs, answer summaries, 4 scores, follow-ups, fixes, redo compare.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "先問：為什麼選這個系？我的架構：主軸一句→2個證據→科系連結。",
        "enExample": "Start with: Why this major? Frame: one theme line → 2 evidences → major link.",
        "zhNextStep": "最後一堂整合前9課成果，做總檢查與送件清單。",
        "enNextStep": "Finally, integrate the first 9 outputs into a final review and submission checklist.",
        "zhConceptBlocks": {
            "principles": ["紀錄重於感覺", "弱題要重練", "模擬不是預測錄取"],
            "terms": ["四維評分", "改進清單", "重答"],
            "criteria": ["5題", "有分數", "有重練"],
            "boundaries": ["避免：AI代答", "避免：羞辱式回饋", "避免：錄取保證"]
        },
        "enConceptBlocks": {
            "principles": ["Logs > vibes", "Redo weak Qs", "Mocks ≠ admission forecasts"],
            "terms": ["4-dimension scores", "Improvement list", "Redo"],
            "criteria": ["5 Qs", "Scores", "Redos"],
            "boundaries": ["Avoid: AI answering for you", "Avoid: harsh shaming", "Avoid: guarantees"]
        },
    })

    # L10
    zh_p, en_p = prompt_pack(
        """你是大學申請總檢查教練。不可保證錄取，不可捏造缺漏的官方規定。

請根據我貼上的前9課成果摘要做總檢查：
1) 大學申請準備地圖
2) 科系探索表
3) 校系比較與志願選擇邏輯表
4) 學習歷程素材庫
5) 3則多元表現
6) 自述與動機初稿
7) 科系專屬備審規劃表
8) 面試題庫與回答架構
9) 模擬面試紀錄

我貼上的摘要：
[請填寫……]

輸出「完整申請資料檢查與送件清單」：
- 一致性：主軸是否一路對齊
- 完整度：哪一項空白／過短
- 風險：誇大、矛盾、待查證規定
- 優先修改的 3 件事
- 送件前檢查清單（可列印）
- 提醒：最終規定以當年度官方簡章為準""",
        """You are a final application-review coach. Do not guarantee admission or invent missing official rules.

Review summaries from my first 9 lesson outputs:
1) Preparation map
2) Major exploration sheet
3) Preference logic table
4) Material bank
5) 3 STAR stories
6) Statement/motivation draft
7) Major-specific portfolio plan
8) Interview bank
9) Mock interview log

My pasted summaries:
[fill in…]

Produce a Full Application Review & Submission Checklist:
- Consistency: theme alignment across items
- Completeness: blank/too-short items
- Risks: exaggeration, contradictions, rules to verify
- Top 3 priority fixes
- Pre-submission checklist (printable)
- Reminder: final rules follow the official brochure for the current year""",
        ["[請填寫……]"],
        ["[fill in…]"],
        "當你要整合前9課並做送件前總檢查時使用",
        "Use when integrating the first 9 outputs for a pre-submission review",
        "一份一致性／缺口／優先修改與送件前檢查清單",
        "A consistency/gap/priority-fix and pre-submission checklist",
    )
    items.append({
        "zhConcept": "前9課成果若分散，申請前仍會漏東漏西。這一課把成果整合成完整申請資料檢查與送件清單：對齊主軸、找出缺口、排出最後修改優先序，並提醒以官方簡章為準。",
        "enConcept": "Scattered lesson outputs still cause last-minute gaps. This lesson integrates them into a full review and submission checklist: align the theme, find gaps, prioritize final edits, and follow the official brochure.",
        "zhWhyItMatters": {"problem": "各課都做了，但互相矛盾或關鍵項空白。", "ineffective": "只開新文件重寫，不回看已有成果。", "solution": "用總檢查表整合前9課，產出可執行的送件前清單。"},
        "enWhyItMatters": {"problem": "Lessons done, but items contradict or key pieces are blank.", "ineffective": "Rewriting from scratch instead of reviewing existing outputs.", "solution": "Integrate the first 9 with a final review into an actionable pre-submission list."},
        "zhObjectives": ["匯整前9課成果", "檢查主軸一致性", "找出最重要的3個缺口", "完成送件前檢查清單", "把總檢查存入成果包"],
        "enObjectives": ["Gather first 9 outputs", "Check theme consistency", "Find top 3 gaps", "Finish pre-submission checklist", "Save the final review"],
        "zhValueTip": "最後一課的產品是「可執行的檢查」，不是再寫一篇空的總結文。",
        "enValueTip": "The final product is an actionable checklist—not another empty summary essay.",
        "estimatedTime": "約 60 分鐘 / About 60 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "完整申請資料檢查與送件清單",
        "enOutcome": "Full Application Review & Submission Checklist",
        "zhOutputName": "完整申請資料檢查與送件清單",
        "enOutputName": "Full Application Review & Submission Checklist",
        "zhCaseStudy": "學生小安把前9課成果貼成摘要後，總檢查發現：自述主軸與面試回答不一致，且校系比較表有兩格仍待查證。她只修這三件最重要的事，而不是整包重寫，送件前清單也第一次變短而清楚。",
        "enCaseStudy": "After pasting summaries of nine outputs, An’s review found the statement theme conflicting with interview answers, plus two unverified comparison cells. She fixed only the top three issues—and the pre-submission list became short and clear.",
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
        "zhWorkflow": ["打開成果包匯出前9課摘要", "檢查主軸與數據一致性", "用Prompt做總檢查", "只修最重要的3項", "完成送件前清單並存檔"],
        "enWorkflow": ["Export summaries of first 9", "Check theme/data consistency", "Run final-review prompt", "Fix only top 3", "Finish and save submission checklist"],
        "zhWorkflowSteps": [
            {"do": "匯整九項摘要", "why": "總檢查要有材料", "input": "成果包", "output": "一頁摘要", "check": "九項是否都有"},
            {"do": "人工掃過矛盾", "why": "AI可能漏看你的原意", "input": "摘要", "output": "矛盾筆記", "check": "面試與自述是否一致"},
            {"do": "跑總檢查Prompt", "why": "補結構性遺漏", "input": "摘要+筆記", "output": "檢查報告", "check": "是否含優先3修"},
            {"do": "只修三項", "why": "避免最後失控重寫", "input": "報告", "output": "修訂紀錄", "check": "是否真的改完"},
            {"do": "產出送件清單並存檔", "why": "臨送件可勾選", "input": "修訂", "output": "總成果", "check": "有提醒查官方簡章"}
        ],
        "enWorkflowSteps": [
            {"do": "Compile nine summaries", "why": "Review needs material", "input": "Package", "output": "One-page summary", "check": "All nine present"},
            {"do": "Human pass for contradictions", "why": "AI may miss your intent", "input": "Summary", "output": "Conflict notes", "check": "Interview vs statement"},
            {"do": "Run final-review prompt", "why": "Catch structural gaps", "input": "Summary+notes", "output": "Review report", "check": "Includes top 3 fixes"},
            {"do": "Fix only three", "why": "Avoid last-minute rewrite spiral", "input": "Report", "output": "Revision log", "check": "Actually finished"},
            {"do": "Submission checklist + save", "why": "Checkbox before submit", "input": "Revisions", "output": "Final deliverable", "check": "Brochure reminder included"}
        ],
        "zhCommonMistakes": ["不回看前9課就重寫", "檢查清單沒有優先序", "把AI總評當成錄取結果", "忽略待查證規定", "送件清單無法勾選"],
        "enCommonMistakes": ["Rewriting without reviewing the nine", "Checklist with no priorities", "Treating AI review as admission result", "Ignoring to-verify rules", "Non-checkable submission list"],
        "zhPractice": "匯出前9課摘要。；做一致性與缺口檢查。；完成優先3修與送件清單。；存成完整申請資料檢查與送件清單。",
        "enPractice": "Export nine summaries.; Check consistency and gaps.; Finish top 3 fixes and submission checklist.; Save the final review.",
        "zhPracticeSteps": [
            {"task": "完成九項摘要匯整", "standard": "九項都有內容指標", "mistakes": "漏課", "check": "哪一課空白？"},
            {"task": "完成總檢查報告", "standard": "含一致性與風險", "mistakes": "只有「加油」", "check": "有無優先3修？"},
            {"task": "完成送件前勾選清單", "standard": "可列印勾選", "mistakes": "段落散文", "check": "能否邊勾邊做？"},
            {"task": "存檔", "standard": "成果名稱正確", "mistakes": "空白", "check": "已儲存？"}
        ],
        "enPracticeSteps": [
            {"task": "Compile nine summaries", "standard": "Coverage for all nine", "mistakes": "Missing lessons", "check": "Which is blank?"},
            {"task": "Finish review report", "standard": "Consistency + risks", "mistakes": "Only pep talk", "check": "Top 3 fixes?"},
            {"task": "Make checkable submission list", "standard": "Printable checkboxes", "mistakes": "Prose only", "check": "Can tick while doing?"},
            {"task": "Save", "standard": "Correct deliverable name", "mistakes": "Blank", "check": "Saved?"}
        ],
        "zhDeliverableChecklist": ["已匯整前9課", "已檢查主軸一致性", "已列出優先修改3項", "已有送件前勾選清單", "已提醒查官方簡章", "未保證錄取並已存檔"],
        "enDeliverableChecklist": ["First 9 compiled", "Theme consistency checked", "Top 3 fixes listed", "Pre-submission checklist present", "Official brochure reminder included", "No admission guarantee; saved"],
        "zhExcellentExample": "總檢查含九項狀態、矛盾點、風險、優先3修、送件勾選清單與簡章提醒。",
        "enExcellentExample": "Includes nine-item status, conflicts, risks, top 3 fixes, tickable checklist, brochure reminder.",
        "zhPromptPack": zh_p, "enPromptPack": en_p,
        "zhExample": "摘要：地圖有7天行動；探索表三優先；比較表兩格待查；素材10筆；STAR×3；自述主軸清楚…",
        "enExample": "Summary: map has 7-day plan; exploration top 3; two comparison cells to verify; 10 materials; STAR×3; clear theme…",
        "zhNextStep": "把本課清單與大學申請包／成果包對照，勾完再依官方時程送件。",
        "enNextStep": "Cross-check this list with your application kit/result package, tick items, then submit on the official timeline.",
        "zhConceptBlocks": {
            "principles": ["整合優於重寫", "優先序優於完美主義", "官方簡章最後裁決"],
            "terms": ["一致性", "送件清單", "優先3修"],
            "criteria": ["九項匯整", "有優先修", "可勾選"],
            "boundaries": ["避免：錄取保證", "避免：忽略待查證", "避免：最後全面重寫失控"]
        },
        "enConceptBlocks": {
            "principles": ["Integrate > rewrite", "Priority > perfectionism", "Brochure has final say"],
            "terms": ["Consistency", "Submission checklist", "Top 3 fixes"],
            "criteria": ["Nine compiled", "Priorities set", "Tickable"],
            "boundaries": ["Avoid: guarantees", "Avoid: skipping verification", "Avoid: rewrite spirals"]
        },
    })

    return items


def main():
    src = CONTENT.read_text(encoding="utf-8")
    lessons, key_start, arr_start, arr_end = load_admissions(src)
    if len(lessons) != 10:
        raise SystemExit(f"expected 10 lessons, got {len(lessons)}")

    part1 = enrichments()
    part2 = enrichments_l4_to_l10()
    enrich = part1 + part2
    if len(enrich) != 10:
        raise SystemExit(f"enrich count {len(enrich)}")

    titles = [
        ("第1課：認識大學申請流程：AI 能幫什麼、不能幫什麼", "Lesson 1: Understand the university application process and AI’s proper role"),
        ("第2課：用 AI 盤點興趣與優勢，找出科系方向", "Lesson 2: Use AI to map interests and strengths for major direction"),
        ("第3課：用 AI 比較校系，建立志願選擇邏輯", "Lesson 3: Use AI to compare programs and build preference logic"),
        ("第4課：用 AI 整理高中三年學習歷程素材", "Lesson 4: Use AI to organize three years of learning portfolio materials"),
        ("第5課：用 AI 把活動經驗寫成有說服力的故事", "Lesson 5: Use AI to turn activities into persuasive stories"),
        ("第6課：用 AI 產出學習歷程自述與申請動機初稿", "Lesson 6: Use AI to draft learning reflections and application motivation"),
        ("第7課：針對目標科系，建立備審資料架構", "Lesson 7: Build application material structure for target majors"),
        ("第8課：建立大學面試題庫與回答架構", "Lesson 8: Build university interview question banks and answer structures"),
        ("第9課：用 AI 進行升學模擬面試並修正", "Lesson 9: Use AI for admissions mock interviews and revisions"),
        ("第10課：整合完成「大學申請包」", "Lesson 10: Complete your university application package"),
    ]

    out = []
    for i, old in enumerate(lessons):
        new = dict(old)
        for k in PRESERVE:
            if k in old:
                new[k] = old[k]
        e = enrich[i]
        new.update(e)
        new["zhTitle"], new["enTitle"] = titles[i]
        # sync prompts from packs
        new["zhPrompt"] = e["zhPromptPack"]["body"]
        new["enPrompt"] = e["enPromptPack"]["body"]
        # keep ids
        new["id"] = old.get("id") or f"admissions-L{i+1}"
        new["lessonKey"] = old.get("lessonKey") or new["id"]
        # drop None
        out.append({k: v for k, v in new.items() if v is not None})

    # uniqueness quick check
    prompts = [x["zhPrompt"][:80] for x in out]
    if len(set(prompts)) < 10:
        raise SystemExit("duplicate prompts detected")
    outcomes = [x["zhOutcome"] for x in out]
    print("outcomes:", outcomes)

    replacement = dumps_js(out)
    # Keep key indentation style: content uses 2-space; array under PREMIUM_LESSON_DETAILS uses indent
    # Find exact slice including "admissions": 
    # We replace from arr_start to arr_end with new JSON array
    new_src = src[:arr_start] + replacement + src[arr_end:]
    CONTENT.write_text(new_src, encoding="utf-8")
    print("Wrote admissions lessons into", CONTENT)


if __name__ == "__main__":
    main()
