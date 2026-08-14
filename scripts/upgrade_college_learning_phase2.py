#!/usr/bin/env python3
"""Upgrade college-learning PREMIUM_LESSON_DETAILS to admissions quality schema."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content.js"

REMINDER_ZH = (
    "請將 AI 回答作為學習輔助，不要直接當作作業答案提交。"
    "重要內容請回到教材、教師說明或正式來源查證。"
)
REMINDER_EN = (
    "Use the AI response as a learning aid rather than submitting it as your own work. "
    "Verify important information against course materials, instructor guidance, or authoritative sources."
)
CITE_ZH = "AI 產生的引用、作者、年份與 DOI 都必須回到正式資料庫確認。不要把 AI 本身當成可靠學術來源。"
CITE_EN = "Any citation, author, year, or DOI suggested by AI must be verified in an official database. Do not treat AI as a reliable academic source."

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


def load_course_array(src: str, course_id: str):
    m = re.search(rf'"{re.escape(course_id)}"\s*:\s*\[', src)
    if not m:
        raise SystemExit(f"{course_id} array not found")
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
        raise SystemExit(f"failed to find {course_id} array end")
    return json.loads(src[start:end]), start, end


def dumps_js(obj) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2)


def prompt_pack(zh_body, en_body, fields_zh, fields_en, when_zh, when_en, expected_zh, expected_en,
                ext_zh=None, ext_en=None, extra_zh="", extra_en=""):
    body_zh = zh_body.strip() + "\n\n" + REMINDER_ZH + (("\n\n" + extra_zh) if extra_zh else "")
    body_en = en_body.strip() + "\n\n" + REMINDER_EN + (("\n\n" + extra_en) if extra_en else "")
    zh = {
        "when": when_zh,
        "fields": fields_zh,
        "body": body_zh,
        "expected": expected_zh,
        "revisionReminder": REMINDER_ZH,
    }
    en = {
        "when": when_en,
        "fields": fields_en,
        "body": body_en,
        "expected": expected_en,
        "revisionReminder": REMINDER_EN,
    }
    if ext_zh:
        zh["extensions"] = ext_zh
    if ext_en:
        en["extensions"] = ext_en
    return zh, en


def wsteps(rows):
    return [{"do": a, "why": b, "input": c, "output": d, "check": e} for a, b, c, d, e in rows]


def psteps(rows):
    return [{"task": a, "standard": b, "mistakes": c, "check": d} for a, b, c, d in rows]


def enrichments():
    items = []

    # ---- L1 ----
    zh_p, en_p = prompt_pack(
        """你是大學學習方法教練，不是代寫者，也不可幫學生完成整份作業或考試。

我的背景：
- 年級／科系：[請填寫年級與科系]
- 本學期主要課程（至少 3 門）：[請填寫課程名稱]
- 本學期最重要的學習目標：[請填寫目標]
- 我目前最常把 AI 用在：[請填寫]
- 我最擔心的學習問題：[請填寫]

任務：幫我產出「AI 學習目標與課程規劃表」，必須包含：
1) 本學期課程清單（課程／老師要求我自己理解的部分／可用 AI 協助的部分／絕對不可交給 AI 的部分）
2) 每門課 1 句學習目標（必須可檢查，不要空泛的「學好這科」）
3) 人／AI／必須自做 三欄分工
4) 3 條可檢查的學術誠信紅線（含：不代寫、不代考、不捏造引用）
5) 未來 7 天小實驗：只選 1 門課，每天 1 個具體行動

輸出格式：
- 用表格 + 條列
- 每個建議旁註明「根據你提供的資料」或「需自行向老師／課綱確認」
- 不要保證成績提升，不要鼓勵把作業整份交給 AI""",
        """You are a university learning-method coach—not a ghostwriter. Do not complete a full assignment or exam for the student.

My background:
- Year / major: [Enter year and major]
- Main courses this semester (at least 3): [Enter course names]
- Most important learning goal: [Enter goal]
- I currently use AI mainly for: [Enter usage]
- My biggest study worry: [Enter worry]

Task: Produce an “AI Learning Goals and Course Plan” with:
1) A course table: course / what I must understand myself / where AI may help / what must never be given to AI
2) One checkable goal per course (not “do well in this class”)
3) A human / AI / must-do-myself split
4) 3 checkable academic-integrity red lines (no ghostwriting, no exam-taking, no fake citations)
5) A 7-day experiment on ONE course only, with 1 concrete action per day

Output format:
- Tables plus bullets
- Label tips as “based on your input” or “confirm with instructor/syllabus”
- No grade guarantees; do not encourage handing a full assignment to AI""",
        ["[請填寫年級與科系]", "[請填寫課程名稱]", "[請填寫目標]"],
        ["[Enter year and major]", "[Enter course names]", "[Enter goal]"],
        "開始用 AI 學習前，先釐清本學期目標與界線時使用",
        "Use before relying on AI for study, to set semester goals and boundaries",
        "一份含課程分工、目標、紅線與 7 天實驗的規劃表",
        "A plan with course roles, goals, red lines, and a 7-day experiment",
        ext_zh=[{
            "title": "延伸：紅線檢查 Prompt",
            "body": "請根據我貼上的規劃表，指出任何仍可能變成「代寫／代考／未查證就繳交」的句子，並改成可檢查的紅線。不要新增我沒寫的課程。"
        }],
        ext_en=[{
            "title": "Extension: red-line check prompt",
            "body": "From my plan, flag any wording that could become ghostwriting, exam-taking, or submitting unverified AI text. Rewrite into checkable red lines. Do not add courses I did not list."
        }],
    )
    items.append({
        "zhConcept": "很多大學生一打開 AI 就說「幫我寫作業」，卻沒有本學期地圖：這學期要修什麼、每門課真正要學會什麼、哪些可以請 AI 整理結構、哪些必須自己理解與完成。這一課要解決的問題，就是把模糊的「我想用 AI 學習」變成可執行的學習目標與課程規劃表。AI 能幫你拆任務與標出界線，但不能代替你上課、思考，也不能代寫或代考。",
        "enConcept": "Many students open AI and say “write my homework,” without a semester map: which courses, what must be learned, where AI may help structure work, and what they must do themselves. This lesson turns “I want to use AI to study” into an actionable goals-and-course plan. AI can split tasks and mark boundaries—it cannot attend class, think for you, ghostwrite, or take exams.",
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
        "zhValueTip": "先有規劃與紅線，再談 Prompt；AI 是學習助手，不是代寫或保證成績的工具。",
        "enValueTip": "Plan and red lines first, then prompts. AI is a study aid—not a ghostwriter or grade guarantee.",
        "estimatedTime": "約 45 分鐘 / About 45 min",
        "difficulty": "入門 / Beginner",
        "zhOutcome": "AI 學習目標與課程規劃表",
        "enOutcome": "AI Learning Goals and Course Plan",
        "zhOutputName": "AI 學習目標與課程規劃表",
        "enOutputName": "AI Learning Goals and Course Plan",
        "zhCaseStudy": "大二傳院學生小瑜一開學就把所有報告題目丟給 AI，第一次作業被老師提醒「這不像你寫的」。她後來改成：先列出 5 門課、每門一句目標、標出不可交給 AI 的部分（論點、引用核對、考試），再請 AI 只幫她排 7 天行動。她第一次知道：AI 可以幫她拆報告步驟，但不能替她寫完整報告。",
        "enCaseStudy": "Sophomore Yu dumped every assignment into AI and was told the first paper “didn’t sound like her.” She then listed 5 courses, one goal each, and a never-give-to-AI zone (argument, citation checks, exams), and asked AI only for a 7-day plan. She learned AI can break down steps—not write the whole paper.",
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
        "zhWorkflowSteps": wsteps([
            ("列出本學期課程與耗時任務", "沒有課程就無法分工", "課表、作業類型", "課程清單草稿", "是否至少 3 門具體課名"),
            ("寫出可檢查目標與界線", "空泛目標無法執行", "老師課綱／評分方式", "目標＋三欄分工", "是否能說出不可交給 AI 的工作"),
            ("用 Prompt 產出規劃表", "把焦慮轉成一頁地圖", "上一步資料", "規劃表初稿", "是否含紅線與 7 天實驗"),
            ("刪掉保證成績或代寫建議", "AI 可能寫出不當建議", "規劃表初稿", "已清理版本", "是否沒有「保證分數／直接交作業」"),
            ("存入成果並自我檢查", "後續課堂會沿用這份表", "定稿", "成果包項目", "重新整理後是否還看得到"),
        ]),
        "enWorkflowSteps": wsteps([
            ("List semester courses and heavy tasks", "No courses means no roles", "Timetable, assignment types", "Course draft", "At least 3 real course names"),
            ("Write checkable goals and boundaries", "Vague goals cannot be executed", "Syllabus / grading", "Goals + 3-column split", "Can you name never-give-to-AI work?"),
            ("Generate the plan with the prompt", "Turn anxiety into one page", "Prior notes", "Plan draft", "Includes red lines and 7-day experiment"),
            ("Remove grade guarantees or ghostwriting tips", "AI may suggest misuse", "Draft plan", "Clean version", "No “guaranteed score / just submit”"),
            ("Save and self-check", "Later lessons reuse this plan", "Final plan", "Package entry", "Still visible after refresh"),
        ]),
        "zhPractice": "列出至少 3 門課與目標。；完成人／AI／必須自做分工與 3 條紅線。；用主 Prompt 產出規劃表並寫 7 天實驗。；把定稿存成「AI 學習目標與課程規劃表」。",
        "enPractice": "List at least 3 courses and goals.; Finish human/AI/must-do split and 3 red lines.; Run the main prompt and write a 7-day experiment.; Save the AI Learning Goals and Course Plan.",
        "zhPracticeSteps": psteps([
            ("列出至少 3 門課與可檢查目標", "課名具體，目標能在期末用證據檢查", "只寫「希望變厲害」", "別人能否看懂你要學會什麼？"),
            ("完成三欄分工與紅線", "每門課都有不可交給 AI 的項目", "必須自做區空白", "考試與論點是否被列為自做？"),
            ("產出規劃表並做 7 天實驗", "只選 1 門課，每天 1 行動", "一次改全部科目", "明天能否開始？"),
            ("存入成果包", "成果名稱正確且內容完整", "空白儲存", "重新整理後仍看得到？"),
        ]),
        "enPracticeSteps": psteps([
            ("List 3+ courses and checkable goals", "Real names; goals can be evidenced later", "Only “get better”", "Would a reader know what you must learn?"),
            ("Finish role split and red lines", "Each course has a never-give-to-AI item", "Empty must-do zone", "Are exams and arguments marked must-do?"),
            ("Produce the plan and 7-day experiment", "One course; one action per day", "Every course at once", "Can you start tomorrow?"),
            ("Save to the package", "Correct name and complete content", "Saving blank text", "Still visible after refresh?"),
        ]),
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
        "zhExcellentExample": "高品質規劃表包含：課程清單、每門課目標、三欄分工、3 條紅線、單一課程 7 天實驗、需向課綱確認的項目。",
        "enExcellentExample": "A strong plan includes: course list, per-course goals, 3-column split, 3 red lines, one-course 7-day experiment, syllabus-check items.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂會把模糊問題轉成有效學習提問，並產出「課程理解與概念拆解表」。",
        "enNextStep": "Next, turn vague questions into study prompts and build a Concept Breakdown Sheet.",
        "zhConceptBlocks": {
            "principles": ["先規劃再提問", "AI 改變速度，不取代理解與責任", "紅線必須可檢查"],
            "terms": ["必須自做區", "學術誠信紅線", "7 天小實驗"],
            "criteria": ["有課程清單", "有分工", "有紅線與實驗"],
            "boundaries": ["避免：代寫整份作業", "避免：代考", "避免：保證成績"]
        },
        "enConceptBlocks": {
            "principles": ["Plan before prompting", "AI changes speed, not responsibility", "Red lines must be checkable"],
            "terms": ["Must-do zone", "Integrity red lines", "7-day experiment"],
            "criteria": ["Course list", "Role split", "Red lines and experiment"],
            "boundaries": ["Avoid: ghostwriting full work", "Avoid: exam-taking", "Avoid: grade guarantees"]
        },
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
        "zhNotePrompt": "用自己的話寫下：本學期最重要的 1 門課、我絕不會交給 AI 的 3 件事、明天要開始的 1 個行動。",
        "enNotePrompt": "In your own words: the one most important course, 3 things you will never give to AI, and tomorrow’s first action.",
    })

    # ---- L2 ----
    zh_p, en_p = prompt_pack(
        """你是大學課程理解教練，不是解答公布欄。不可補造教材沒有的定理、數字或老師沒講的重點。

我的背景：
- 課程名稱：[請填寫課程名稱]
- 本週主題／章節：[請填寫主題]
- 我已讀或已聽過的範圍：[請填寫]
- 我原本想問 AI 的模糊問題：[請填寫原本問題]
- 我卡住的感覺（看不懂／記不住／不會應用）：[請填寫]

任務：先把我的模糊問題改寫成有效學習提問，再產出「課程理解與概念拆解表」：
1) 核心概念（最多 7 個，只根據我提供的教材／筆記，缺資料就標「需要查證／需要補教材」）
2) 關鍵定義（原文用語 vs 我能懂的說法，分開兩欄）
3) 概念關係（誰依賴誰、因果、對比）
4) 我尚未理解的問題清單（至少 3 題，要能拿去問老師或再讀教材）
5) 1 題自我檢查題（不要給最終標準答案，只給我思考步驟）

輸出格式：表格 + 條列。不確定處一律標「需要查證」。不要假裝教材已經講完。""",
        """You are a course-understanding coach, not an answer key. Do not invent theorems, numbers, or points the instructor did not teach.

My background:
- Course: [Enter course name]
- This week’s topic/chapter: [Enter topic]
- What I already read or heard: [Enter range]
- My original vague question: [Enter original question]
- Where I am stuck (don’t get it / can’t remember / can’t apply): [Enter stuck point]

Task: Rewrite my vague question into an effective study prompt, then produce a “Concept Breakdown Sheet”:
1) Core concepts (max 7; only from my materials/notes; if missing, mark “needs verification / need source text”)
2) Key definitions (source wording vs. my wording in two columns)
3) Concept relationships (dependency, cause-effect, contrast)
4) Unanswered questions (at least 3) I can take to the instructor or the textbook
5) One self-check question (do not give the final official answer; give thinking steps only)

Output: tables plus bullets. Mark uncertainties as “needs verification.” Do not pretend the material is complete.""",
        ["[請填寫課程名稱]", "[請填寫主題]", "[請填寫原本問題]"],
        ["[Enter course name]", "[Enter topic]", "[Enter original question]"],
        "讀完一段教材卻只會問「這是什麼」時使用",
        "Use when a reading still leaves you asking only “what is this?”",
        "一份含核心概念、定義、關係與未解問題的概念拆解表",
        "A breakdown sheet with concepts, definitions, relations, and open questions",
        ext_zh=[{
            "title": "延伸：把拆解表變成 3 個追問",
            "body": "根據我貼上的概念拆解表，幫我寫 3 個更精確的追問（針對定義、例子、易混概念）。不要直接給完整講義。"
        }],
        ext_en=[{
            "title": "Extension: 3 follow-up questions",
            "body": "From my breakdown sheet, write 3 sharper follow-ups (definition, example, easy mix-up). Do not generate a full lecture."
        }],
    )
    items.append({
        "zhConcept": "卡住時最常見的問法是「這是什麼／幫我講一遍」，得到的是又長又難用的摘要。有效學習提問要帶：課程、已讀範圍、卡住點、需要的輸出格式。這一課把模糊問題轉成概念拆解：核心概念、定義、關係、尚未理解的問題。AI 只能根據你提供的教材工作，不能補造課程內容。",
        "enConcept": "The usual stuck question is “what is this / explain it,” which yields a long unusable summary. Effective study prompts include course, what you already read, the stuck point, and output format. This lesson turns vague questions into a concept breakdown: cores, definitions, relations, and unanswered questions. AI may only work from your materials—it must not invent course content.",
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
        "zhValueTip": "先問得清楚，再拆概念；AI 解釋必須能回到教材核對。",
        "enValueTip": "Ask clearly, then break concepts down. AI explanations must be checkable against your materials.",
        "estimatedTime": "約 45 分鐘 / About 45 min",
        "difficulty": "入門 / Beginner",
        "zhOutcome": "課程理解與概念拆解表",
        "enOutcome": "Course Concept Breakdown Sheet",
        "zhOutputName": "課程理解與概念拆解表",
        "enOutputName": "Course Concept Breakdown Sheet",
        "zhCaseStudy": "統計課學生阿哲只問「變異數是什麼」，AI 給了一大段公式。他改成提供：已上課範圍、自己卡在「變異數和標準差差在哪」，並要求：原文定義、自己的話、一個課堂例子、一個易混點、三個未解問題。他才第一次能拿著表格去問助教。",
        "enCaseStudy": "Zhe in statistics asked “what is variance” and got a wall of formulas. He then provided the lecture range and that he mixed variance with standard deviation, and asked for source definition, his own wording, one class example, one mix-up, and three open questions. That table was something he could take to the TA.",
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
        "zhWorkflowSteps": wsteps([
            ("記下模糊問題", "對照前後差異", "原句", "問題草稿", "是否真的太短、沒有背景"),
            ("補背景與卡住點", "讓 AI 對準你的課堂", "筆記／課名", "完整提問", "是否含已讀範圍"),
            ("產出拆解表", "把摘要變成結構", "教材摘錄", "概念表", "概念是否不超過 7 個"),
            ("對照教材刪補造", "防止假重點", "課本／投影片", "已核對表", "不確定是否標需要查證"),
            ("存入成果", "L3 筆記會用到", "定稿", "成果包", "是否有未解問題 3 題"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Capture the vague question", "See the before/after", "Original sentence", "Question draft", "Is it too short with no context?"),
            ("Add context and stuck point", "Aim AI at your class", "Notes / course name", "Full prompt", "Includes what you already read"),
            ("Generate the sheet", "Turn summary into structure", "Material excerpt", "Concept table", "No more than 7 concepts"),
            ("Delete invented points", "Stop fake highlights", "Book / slides", "Verified sheet", "Uncertainties flagged"),
            ("Save", "Later note lessons reuse this", "Final sheet", "Package", "At least 3 open questions"),
        ]),
        "zhPractice": "寫下原本模糊問題。；改寫成含課程、範圍、卡住點的提問。；產出概念拆解表並用教材核對。；存成「課程理解與概念拆解表」。",
        "enPractice": "Write the original vague question.; Rewrite with course, range, and stuck point.; Produce and verify the breakdown sheet.; Save the Concept Breakdown Sheet.",
        "zhPracticeSteps": psteps([
            ("改寫提問", "含課程、範圍、卡住點、格式", "仍是「這是什麼」", "別人能否拿這句去問 AI？"),
            ("拆核心概念與定義", "概念有來源，定義分兩欄", "AI 自己編定義", "能否指回教材哪一段？"),
            ("列出關係與未解問題", "至少 3 個可問老師的問題", "只寫「我還是不懂」", "問題是否具體？"),
            ("核對並存檔", "補造內容已刪", "整段貼上未改", "有標需要查證嗎？"),
        ]),
        "enPracticeSteps": psteps([
            ("Rewrite the question", "Course, range, stuck point, format", "Still “what is this?”", "Could someone else use this prompt?"),
            ("Split concepts and definitions", "Sourced concepts; two-column definitions", "AI-invented definitions", "Can you point to a passage?"),
            ("Relations and open questions", "At least 3 instructor-ready questions", "Only “I still don’t get it”", "Are questions specific?"),
            ("Verify and save", "Invented content removed", "Paste unchanged", "Needs-verification flags present?"),
        ]),
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
        "zhExcellentExample": "含：改寫後提問、最多 7 個概念、定義兩欄、關係、3 個未解問題、查證標記。",
        "enExcellentExample": "Includes rewritten prompt, max 7 concepts, two-column definitions, relations, 3 open questions, verification marks.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂用這份拆解表去理解整份教材，產出可核對原文的教材理解筆記。",
        "enNextStep": "Next, use this sheet to understand a full reading and produce source-checked material notes.",
        "zhConceptBlocks": {
            "principles": ["提問要有範圍與卡住點", "概念必須對得回教材", "不懂要變成可問的問題"],
            "terms": ["有效學習提問", "原文定義", "需要查證"],
            "criteria": ["提問可執行", "概念可核對", "有未解問題"],
            "boundaries": ["避免：補造課程內容", "避免：只要長摘要", "避免：把 AI 當標準答案"]
        },
        "enConceptBlocks": {
            "principles": ["Prompts need range and stuck points", "Concepts must map to sources", "Confusion becomes askable questions"],
            "terms": ["Effective study prompt", "Source definition", "Needs verification"],
            "criteria": ["Prompt is usable", "Concepts are checkable", "Open questions exist"],
            "boundaries": ["Avoid: inventing content", "Avoid: long summaries only", "Avoid: treating AI as the answer key"]
        },
        "zhSummary": ["本堂成果：課程理解與概念拆解表", "先改問題，再拆概念。", "所有解釋都要能回教材查證。"],
        "enSummary": ["Deliverable: Concept Breakdown Sheet", "Rewrite the question, then break down concepts.", "Every explanation must be checkable."],
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
        "zhNotePrompt": "寫下：我原本的問題、改寫後的問題、我仍要問老師的 1 件事。",
        "enNotePrompt": "Write: original question, rewritten question, and one thing you will still ask the instructor.",
    })

    # ---- L3 ----
    zh_p, en_p = prompt_pack(
        """你是教材理解助教，必須區分「教材原文資訊」與「AI 解釋」。不可自行補造課程內容、例子中的數據或老師沒有的結論。

我的輸入：
- 課程：[請填寫課程名稱]
- 教材類型（課本／講義／老師說明）：[請填寫]
- 我貼上的教材摘錄（請只根據這段，不要外加知識）：
[請填寫或貼上教材重點，勿貼整本]

任務：產出「教材理解筆記」：
A. 原文核心資訊（盡量用教材用詞，短句）
B. 關鍵定義
C. 概念關係
D. AI 解釋（用學生能懂的話，明確標示這是解釋不是原文）
E. 我的理解（先留白，提示我用自己的話補 3–5 句）
F. 尚未理解／需要查證（含：看不懂的句子、可能被 AI 推論過度的地方）
G. 2 題理解檢查題（只給思考方向，不要給可直接抄的標準答案）

限制：
- 教材沒寫的，寫「需要查證」
- 不要寫成可直接繳交的作業""",
        """You are a materials tutor. Separate “source information” from “AI explanation.” Do not invent course content, example numbers, or conclusions the instructor did not give.

My input:
- Course: [Enter course name]
- Source type (textbook / handout / instructor notes): [Enter type]
- Excerpt (use only this; do not add outside knowledge):
[Enter or paste key passages—not an entire book]

Task: Produce “Material Understanding Notes”:
A. Source core information (short; prefer source wording)
B. Key definitions
C. Concept relationships
D. AI explanation (student-friendly; clearly labeled as explanation, not source)
E. My understanding (leave a blank for me to write 3–5 sentences)
F. Still unclear / needs verification (including possible over-inference)
G. 2 comprehension-check questions (thinking steps only; no copyable final answers)

Limits:
- If the excerpt does not say it, write “needs verification”
- Do not produce a submittable assignment""",
        ["[請填寫課程名稱]", "[請填寫或貼上教材重點]"],
        ["[Enter course name]", "[Enter or paste key passages]"],
        "讀完一章或一份講義、需要快速但可核對的理解時使用",
        "Use after a chapter or handout when you need fast, checkable understanding",
        "一份區分原文與 AI 解釋的教材理解筆記",
        "Material notes that separate source text from AI explanation",
        ext_zh=[{
            "title": "延伸：找出過度推論",
            "body": "請只根據我貼的教材摘錄，列出你剛才解釋裡「教材沒有明說、屬於推論」的句子，並改標為需要查證。"
        }],
        ext_en=[{
            "title": "Extension: find over-inference",
            "body": "Using only my excerpt, list sentences in your explanation that the source did not state and mark them as needs verification."
        }],
    )
    items.append({
        "zhConcept": "「快速理解」不是讓 AI 取代閱讀，而是把課本、講義、教師說明整理成：原文核心、定義、關係、你的理解、待查證。若把原文與 AI 解釋混在一起，你會誤以為教材寫過某些話。AI 不得補造內容；不確定就標「需要查證」。",
        "enConcept": "“Understand quickly” does not mean skipping reading. It means turning textbook, handout, and instructor notes into: source core, definitions, relations, your understanding, and items to verify. Mixing source and AI explanation makes you think the book said things it did not. AI must not invent content; mark uncertainties.",
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
        "zhValueTip": "速度來自結構，不來自跳過原文。先核對，再相信解釋。",
        "enValueTip": "Speed comes from structure, not from skipping the source. Verify before you trust an explanation.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "教材理解筆記",
        "enOutcome": "Material Understanding Notes",
        "zhOutputName": "教材理解筆記",
        "enOutputName": "Material Understanding Notes",
        "zhCaseStudy": "經濟學學生小恩把整章貼進 AI，摘要裡出現課本沒有的政策數字。她改成只貼 2 頁重點，要求分欄：原文／解釋／我的理解／待查證，並刪掉所有沒在摘錄裡的數字。她後來拿待查證清單去對課本註解。",
        "enCaseStudy": "En pasted a whole economics chapter; the summary invented policy numbers. She then pasted two pages only, required columns for source / explanation / my understanding / verify, and deleted numbers not in the excerpt. She used the verify list against the textbook notes.",
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
        "zhWorkflowSteps": wsteps([
            ("選摘錄不要整本", "模型無法可靠消化整本書", "課本／講義", "摘錄", "是否短到自己能核對"),
            ("要求分欄輸出", "避免原文與解釋混淆", "摘錄＋課名", "分欄草稿", "是否有原文欄"),
            ("刪補造與外加知識", "防止假重點", "原文", "已清草稿", "沒有的數字是否刪除"),
            ("寫自己的理解", "證明你有讀", "草稿", "3–5 句", "是否沒用 AI 原句"),
            ("存檔", "筆記課會接續", "定稿", "成果包", "是否有待查證"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Excerpt, don’t paste a book", "Models cannot reliably digest whole books", "Textbook/handout", "Excerpt", "Short enough to check"),
            ("Require columns", "Keep source vs. explanation apart", "Excerpt + course", "Column draft", "Is there a source column?"),
            ("Delete invented extras", "Stop fake highlights", "Source", "Clean draft", "Numbers not in source removed"),
            ("Write your understanding", "Prove you read it", "Draft", "3–5 sentences", "Not AI’s original sentences"),
            ("Save", "Note lesson continues this", "Final", "Package", "Verify list present"),
        ]),
        "zhPractice": "選一段教材摘錄。；產出分欄理解筆記。；刪補造並寫自己的理解。；存成「教材理解筆記」。",
        "enPractice": "Choose a material excerpt.; Generate columned notes.; Delete inventions and write your understanding.; Save Material Understanding Notes.",
        "zhPracticeSteps": psteps([
            ("準備摘錄", "可核對的長度", "整本書", "你能否在 10 分鐘內對完？"),
            ("分開原文與解釋", "欄位清楚", "混成一篇", "同學能否看出哪句是教材？"),
            ("自己寫理解", "3–5 句", "空白或全抄", "合上摘錄還講得出來嗎？"),
            ("標查證並存檔", "有待查證清單", "當成已全懂", "有沒有要問老師的點？"),
        ]),
        "enPracticeSteps": psteps([
            ("Prepare an excerpt", "Checkable length", "Whole book", "Can you verify in 10 minutes?"),
            ("Separate source and explanation", "Clear columns", "One blended essay", "Could a classmate see which lines are source?"),
            ("Write your understanding", "3–5 sentences", "Blank or fully copied", "Can you retell it without the excerpt?"),
            ("Flag and save", "Verify list exists", "Pretend mastery", "Anything to ask the instructor?"),
        ]),
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
        "zhExcellentExample": "含原文核心、定義、關係、標示過的 AI 解釋、自己的 3–5 句、待查證、2 題檢查題。",
        "enExcellentExample": "Includes source core, definitions, relations, labeled explanation, 3–5 own sentences, verify list, 2 check questions.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂處理圖片、表格與投影片，把非文字課件也納入可核對的理解。",
        "enNextStep": "Next, interpret images, tables, and slides so non-text materials are also checkable.",
        "zhConceptBlocks": {
            "principles": ["摘錄要能核對", "原文與解釋分開", "自己的理解不可空白"],
            "terms": ["原文核心資訊", "AI 解釋", "需要查證"],
            "criteria": ["有摘錄", "有分欄", "有自己的話"],
            "boundaries": ["避免：整本貼上", "避免：補造內容", "避免：當作業繳交"]
        },
        "enConceptBlocks": {
            "principles": ["Excerpts must be checkable", "Separate source and explanation", "Your understanding cannot be blank"],
            "terms": ["Source core", "AI explanation", "Needs verification"],
            "criteria": ["Excerpt present", "Columns present", "Own wording present"],
            "boundaries": ["Avoid: whole-book paste", "Avoid: invented content", "Avoid: submitting as homework"]
        },
        "zhSummary": ["本堂成果：教材理解筆記", "快速理解仍要回原文。", "解釋不是教材本身。"],
        "enSummary": ["Deliverable: Material Understanding Notes", "Fast understanding still returns to the source.", "Explanation is not the source."],
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
        "zhNotePrompt": "合上教材後，用自己的話寫出本段 3 個重點，並寫 1 個仍要查課本的問題。",
        "enNotePrompt": "Close the source, write 3 points in your own words, and one question to check in the book.",
    })

    return items


def enrichments_l4_to_l10():
    items = []

    # ---- L4 ----
    zh_p, en_p = prompt_pack(
        """你是課件解讀助教。對於看不清楚的圖、表、數字，必須說「無法從提供資料判讀」，不可猜。

我的輸入：
- 課程：[請填寫課程名稱]
- 課件類型（圖／表／投影片／實驗截圖）：[請填寫]
- 我能描述的內容（軸、標題、可見數字、老師口頭說明）：
[請填寫你實際看得到的資訊]
- 我的問題：[請填寫想搞懂什麼]

任務：產出「複雜課件解讀單」：
1) 我真正看見的資訊（只根據我的描述）
2) 可能的讀圖／讀表步驟
3) 這張圖表可能在說明什麼（標示為假設）
4) 無法判讀、必須回原檔或問老師的項目
5) 3 個我可以寫進筆記的觀察（不含猜的數字）

限制：不要編造座標上的數值、樣本數或結論。""",
        """You are a courseware-reading tutor. If a figure, table, or number is unclear, say “cannot be read from the provided information.” Do not guess.

My input:
- Course: [Enter course name]
- Type (figure / table / slides / lab screenshot): [Enter type]
- What I can actually see (axes, titles, visible numbers, instructor comments):
[Enter what you can see]
- My question: [Enter what you want to understand]

Task: Produce a “Complex Courseware Reading Sheet”:
1) What I actually see (only from my description)
2) Steps to read the figure/table
3) What it might be showing (label as hypothesis)
4) What cannot be read and must go back to the file or instructor
5) 3 note-ready observations (no guessed numbers)

Limits: Do not invent axis values, sample sizes, or conclusions.""",
        ["[請填寫課程名稱]", "[請填寫你實際看得到的資訊]", "[請填寫想搞懂什麼]"],
        ["[Enter course name]", "[Enter what you can see]", "[Enter what you want to understand]"],
        "面對圖表、投影片或實驗截圖讀不懂時使用",
        "Use when a figure, table, or slide is hard to read",
        "一份不猜數字、可回原檔核對的課件解讀單",
        "A courseware sheet that does not guess numbers and can be checked against the original file",
        ext_zh=[{
            "title": "延伸：投影片結構",
            "body": "若這是一組投影片，請依我貼的標題清單，整理每頁一句重點與頁與頁之間的邏輯。不要補我沒貼的頁面內容。"
        }],
        ext_en=[{
            "title": "Extension: slide structure",
            "body": "If these are slides, use only my title list to write one point per slide and the logic between slides. Do not invent unpasted slides."
        }],
    )
    items.append({
        "zhConcept": "圖、表、投影片常承載課堂真正的論點，但 AI 若沒看到原檔就會猜數字。這一課練習：只描述你看見的，請 AI 給讀圖步驟與假設，並把看不清的標成必須回原檔。解讀單要能接進筆記系統，而不是另一份幻覺報告。",
        "enConcept": "Figures, tables, and slides often carry the real argument—but AI will guess numbers if it cannot see the file. This lesson: describe only what you see, ask for reading steps and hypotheses, and mark unreadables as “return to the original.” The sheet should feed your notes, not a hallucination report.",
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
        "zhValueTip": "看不清就回原檔；猜的數字不能進筆記。",
        "enValueTip": "If you cannot see it, return to the file. Guessed numbers do not belong in notes.",
        "estimatedTime": "約 45 分鐘 / About 45 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "複雜課件解讀單",
        "enOutcome": "Complex Courseware Reading Sheet",
        "zhOutputName": "複雜課件解讀單",
        "enOutputName": "Complex Courseware Reading Sheet",
        "zhCaseStudy": "生物課小庭把模糊的實驗圖丟給 AI，得到一組課本沒有的 p 值。她改成只寫：X 軸時間、Y 軸濃度、三條線顏色、老師說「比較處理組」。AI 只給讀圖步驟與待確認項。她回投影片原檔才抄正確刻度。",
        "enCaseStudy": "Ting uploaded a blurry lab figure and got p-values that were not in the slides. She then described only: time on X, concentration on Y, three colored lines, and the instructor saying “compare treatments.” AI gave reading steps and unknowns. She copied real axis ticks from the original file.",
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
        "zhWorkflowSteps": wsteps([
            ("描述可見資訊", "沒有描述就會被亂補", "圖表／投影片", "可見清單", "是否沒有猜的數字"),
            ("要讀圖步驟", "學會方法而非只要結論", "可見清單", "步驟", "步驟能否自己重做"),
            ("分開假設與未知", "避免假結論", "步驟草稿", "標註版", "假設是否標示"),
            ("回原檔核對", "AI 不是原件", "原檔", "已核對", "刻度是否來自原檔"),
            ("存入筆記系統", "L5 會用到", "定稿", "成果包", "有 3 個觀察"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Describe what is visible", "No description invites invention", "Figure/slides", "Visible list", "No guessed numbers"),
            ("Ask for reading steps", "Learn method, not only a conclusion", "Visible list", "Steps", "Can you redo the steps?"),
            ("Split hypothesis vs unknown", "Avoid fake conclusions", "Step draft", "Labeled version", "Hypotheses marked"),
            ("Check original file", "AI is not the source file", "Original", "Verified", "Ticks from the file"),
            ("Save into notes system", "L5 will reuse this", "Final", "Package", "3 observations"),
        ]),
        "zhPractice": "選一張圖或一組投影片。；只描述看得見的資訊。；產出解讀單並刪假數據。；存成「複雜課件解讀單」。",
        "enPractice": "Pick a figure or slide set.; Describe only what is visible.; Produce the sheet and delete fake data.; Save the Courseware Reading Sheet.",
        "zhPracticeSteps": psteps([
            ("描述可見資訊", "軸、標題、可見數字齊", "直接說結論", "沒看過原檔的人能否想像這張圖？"),
            ("列出步驟與未知", "有無法判讀項", "全是肯定句", "是否標示假設？"),
            ("回原檔核對", "數字來自原件", "保留 AI 猜的 p 值", "有沒有刪掉猜的數？"),
            ("存檔", "3 個觀察可進筆記", "空白", "能否接到 L5？"),
        ]),
        "enPracticeSteps": psteps([
            ("Describe visible info", "Axes, titles, visible numbers", "Jump to a conclusion", "Could someone imagine the figure?"),
            ("List steps and unknowns", "Unreadables listed", "All confident claims", "Are hypotheses marked?"),
            ("Verify in the original", "Numbers from the file", "Keep guessed p-values", "Guessed numbers removed?"),
            ("Save", "3 observations ready for notes", "Blank", "Can this feed L5?"),
        ]),
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
        "zhExcellentExample": "含可見資訊、讀圖步驟、標示的假設、無法判讀清單、3 個觀察、無假數據。",
        "enExcellentExample": "Includes visible info, reading steps, labeled hypotheses, unreadables, 3 observations, no fake data.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂把教材筆記與課件觀察收成「課堂筆記整理系統」。",
        "enNextStep": "Next, fold material notes and courseware observations into a class-notes system.",
        "zhConceptBlocks": {
            "principles": ["只根據看得見的資訊", "假設必須標示", "數字回原檔"],
            "terms": ["可見資訊", "無法判讀", "讀圖步驟"],
            "criteria": ["有描述", "有未知項", "無假數據"],
            "boundaries": ["避免：猜 p 值", "避免：假裝看過原圖", "避免：只有結論沒有步驟"]
        },
        "enConceptBlocks": {
            "principles": ["Use only visible information", "Label hypotheses", "Numbers from the original file"],
            "terms": ["Visible information", "Cannot be read", "Reading steps"],
            "criteria": ["Description present", "Unknowns listed", "No fake data"],
            "boundaries": ["Avoid: guessing p-values", "Avoid: pretending you saw the original", "Avoid: conclusions without steps"]
        },
        "zhSummary": ["本堂成果：複雜課件解讀單", "看不清就回原檔。", "解讀要能寫進筆記。"],
        "enSummary": ["Deliverable: Complex Courseware Reading Sheet", "If unclear, return to the file.", "Readings should enter your notes."],
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
        "zhNotePrompt": "寫下這張圖我確定看見的 3 件事，以及 1 件必須回原檔才能確認的事。",
        "enNotePrompt": "Write 3 things you are sure you saw, and 1 thing that requires the original file.",
    })

    # ---- L5 ----
    zh_p, en_p = prompt_pack(
        """你是課堂筆記架構教練。你的任務是整理結構，不是取代學生的原始筆記，也不可把缺席內容補成「老師有講」。

我的輸入：
- 課程／日期／主題：[請填寫]
- 我的原始筆記（可零亂）：
[請填寫或貼上原始筆記]
- 本週教材理解筆記或課件觀察（若有，貼重點）：
[請填寫，沒有可寫「尚無」]

任務：產出「AI 課堂筆記整理系統」四層：
1) 原始筆記（保留我的原句，只做輕微分段，不要改寫掉我的話）
2) 結構化整理（主題、定義、例子、老師強調、作業／考試提示）
3) 重點摘要（最多 8 點，每點都能指回原始筆記或教材）
4) 待確認問題（至少 3 題）

請標示：哪些整理是根據我的筆記、哪些是你的推論（推論需標需要查證）。不要寫成可繳交的逐字稿。""",
        """You are a class-notes structure coach. Organize structure; do not replace the student’s raw notes or invent “the instructor said.”

My input:
- Course / date / topic: [Enter]
- My raw notes (messy is OK):
[Enter or paste raw notes]
- Material notes or courseware observations this week (if any):
[Enter, or write “none yet”]

Task: Produce a four-layer “AI Class Notes System”:
1) Raw notes (keep my wording; light paragraphing only)
2) Structured organization (topics, definitions, examples, instructor emphasis, homework/exam hints)
3) Key summary (max 8 points, each traceable to raw notes or materials)
4) Questions to confirm (at least 3)

Label what comes from my notes vs. your inference (inferences need verification). Do not produce a submittable transcript.""",
        ["[請填寫]", "[請填寫或貼上原始筆記]"],
        ["[Enter]", "[Enter or paste raw notes]"],
        "下課後要把零亂筆記變成可複習系統時使用",
        "Use after class when messy notes need a reviewable system",
        "含原始筆記、結構化整理、摘要與待確認問題的筆記系統",
        "A notes system with raw notes, structure, summary, and questions to confirm",
        ext_zh=[{
            "title": "延伸：考試提示抽取",
            "body": "只根據我的筆記，列出老師可能暗示會考的句子。若筆記沒寫，請說「筆記未記載」，不要編造。"
        }],
        ext_en=[{
            "title": "Extension: exam-hint extraction",
            "body": "From my notes only, list sentences that may hint at exam topics. If not in the notes, say “not in notes.” Do not invent hints."
        }],
    )
    items.append({
        "zhConcept": "好的課堂筆記不是更漂亮的字，而是四層：原始紀錄、結構化整理、重點摘要、待確認問題。AI 可以幫忙分類，但不能假裝你去上了沒寫下來的課。沒有原始筆記，整理系統就是空的。",
        "enConcept": "Good class notes are not prettier handwriting. They are four layers: raw record, structured organization, key summary, and questions to confirm. AI can sort; it cannot pretend you attended undocumented class. Without raw notes, the system is empty.",
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
        "zhValueTip": "先有原始紀錄，再請 AI 結構化；摘要必須能指回你的筆記。",
        "enValueTip": "Raw record first, then structure. Every summary point must trace back to your notes.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "AI 課堂筆記整理系統",
        "enOutcome": "AI Class Notes System",
        "zhOutputName": "AI 課堂筆記整理系統",
        "enOutputName": "AI Class Notes System",
        "zhCaseStudy": "歷史課小安的筆記只有關鍵詞。他請 AI「寫完整堂課」，得到一篇像維基的文章。後來他貼上關鍵詞＋L3 教材筆記，要求四層輸出，並刪掉筆記沒有的年代。複習時他能從摘要跳回原句。",
        "enCaseStudy": "An in history had only keywords. Asking AI to “write the whole lecture” produced a Wikipedia-like essay. He then pasted keywords plus L3 notes, required four layers, and deleted dates not in his notes. During review he could jump from summary back to his own lines.",
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
        "zhWorkflowSteps": wsteps([
            ("保存原始筆記", "沒有原料就無法整理", "課堂紀錄", "原句", "是否是你的話"),
            ("合併前課成果", "避免重工", "L3/L4 重點", "輸入包", "是否標來源"),
            ("產出四層", "複習需要結構", "輸入包", "四層草稿", "原句層是否還在"),
            ("刪無來源", "防幻覺", "草稿", "已核對", "摘要能否指回原句"),
            ("存檔", "複習與作業會用", "定稿", "成果包", "待確認≥3"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Save raw notes", "No source, no system", "Class record", "Your lines", "Is it your wording?"),
            ("Merge prior outputs", "Avoid redo", "L3/L4 points", "Input pack", "Sources labeled"),
            ("Generate four layers", "Review needs structure", "Input pack", "Four-layer draft", "Raw layer still present"),
            ("Delete unsourced lines", "Stop hallucination", "Draft", "Verified", "Summary traces to raw lines"),
            ("Save", "Review and homework reuse this", "Final", "Package", "≥3 questions"),
        ]),
        "zhPractice": "保存一堂課的原始筆記。；產出四層整理。；刪無來源內容並留下待確認問題。；存成「AI 課堂筆記整理系統」。",
        "enPractice": "Save one class of raw notes.; Generate four layers.; Delete unsourced content and keep questions.; Save the AI Class Notes System.",
        "zhPracticeSteps": psteps([
            ("保留原始層", "原句可辨識", "完全被改寫", "你還認得出自己的筆記嗎？"),
            ("完成結構化", "有主題／定義／例子", "只有長摘要", "考試能否按主題找？"),
            ("摘要可回溯", "每點能指回原筆記或教材", "出現沒上過的內容", "能否標來源？"),
            ("待確認並存檔", "至少 3 題", "沒有問題", "下堂課能問老師嗎？"),
        ]),
        "enPracticeSteps": psteps([
            ("Keep the raw layer", "Your wording recognizable", "Fully rewritten", "Do you still recognize your notes?"),
            ("Finish structure", "Topics/definitions/examples", "Only a long summary", "Can you find topics for the exam?"),
            ("Traceable summary", "Each point maps to notes or materials", "Content from a class you skipped", "Can you label sources?"),
            ("Questions and save", "At least 3", "No questions", "Can you ask next class?"),
        ]),
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
        "zhExcellentExample": "四層齊：原句、結構、最多 8 點可回溯摘要、3 個待確認問題。",
        "enExcellentExample": "All four layers: raw lines, structure, max 8 traceable points, 3 questions.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂把課堂資料與課外閱讀收成「閱讀與文獻理解筆記」。",
        "enNextStep": "Next, turn class materials and outside readings into literature-understanding notes.",
        "zhConceptBlocks": {
            "principles": ["原始紀錄不可丟", "結構服務複習", "摘要必須可回溯"],
            "terms": ["原始筆記", "結構化整理", "待確認問題"],
            "criteria": ["有四層", "摘要≤8", "問題≥3"],
            "boundaries": ["避免：生成假課堂", "避免：改到認不出", "避免：當繳交作業"]
        },
        "enConceptBlocks": {
            "principles": ["Never drop the raw record", "Structure serves review", "Summaries must be traceable"],
            "terms": ["Raw notes", "Structured organization", "Questions to confirm"],
            "criteria": ["Four layers", "Summary ≤8", "Questions ≥3"],
            "boundaries": ["Avoid: fake lectures", "Avoid: unrecognizable rewrites", "Avoid: submitting as homework"]
        },
        "zhSummary": ["本堂成果：AI 課堂筆記整理系統", "四層缺一就很難複習。", "沒上過的課不能用 AI 補造。"],
        "enSummary": ["Deliverable: AI Class Notes System", "Missing a layer makes review hard.", "AI must not invent a class you skipped."],
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
        "zhNotePrompt": "寫下本堂課你自己記得的 3 件事，以及 1 個要在下堂課確認的問題。",
        "enNotePrompt": "Write 3 things you remember from class and 1 question to confirm next time.",
    })

    # ---- L6 ----
    zh_p, en_p = prompt_pack(
        """你是閱讀與文獻理解教練。不可捏造文獻、作者、年份、期刊或 DOI。不可把摘要假裝成你已精讀全文。

我的輸入：
- 課程／作業目的：[請填寫]
- 文本類型（教科書／文章／Paper／長篇資料）：[請填寫]
- 書目資訊（我自己抄的，可能不完整）：[請填寫作者與標題；沒有就寫未知]
- 我實際讀到的段落：
[請填寫摘錄]

任務：產出「閱讀與文獻理解筆記」：
1) 原文核心資訊（主張、方法、證據、限制——只根據摘錄）
2) 我的理解（留白提示我寫 3 句）
3) AI 解釋（標示為解釋）
4) 待查證內容（含任何你想補的書目欄位）
5) 這份文本與我課程主題的可能連結（標示為假設）
6) 我尚未讀到、不能寫進作業的部分

限制：
- 不要產生看起來真實的假引用
- 若書目不完整，列出「我需要到資料庫查的欄位」而不是編造""",
        """You are a reading and literature coach. Do not invent papers, authors, years, journals, or DOIs. Do not pretend a summary means the full text was read.

My input:
- Course / assignment purpose: [Enter]
- Text type (textbook / article / paper / long source): [Enter]
- Bibliography I copied (may be incomplete): [Enter author and title; or “unknown”]
- Passages I actually read:
[Enter excerpt]

Task: Produce “Reading and Literature Notes”:
1) Source core (claim, method, evidence, limits—excerpt only)
2) My understanding (prompt me to write 3 sentences)
3) AI explanation (labeled as explanation)
4) Items to verify (including any bibliographic fields you are tempted to fill)
5) Possible link to my course topic (label as hypothesis)
6) Parts I have not read and must not cite in an assignment

Limits:
- Do not generate fake-but-real-looking citations
- If bibliography is incomplete, list fields to check in a database; do not invent them""",
        ["[請填寫]", "[請填寫摘錄]"],
        ["[Enter]", "[Enter excerpt]"],
        "讀文章、Paper 或長篇資料、需要留下可查證筆記時使用",
        "Use when reading articles, papers, or long sources and you need verifiable notes",
        "一份保留原文、理解、解釋與待查證的閱讀筆記",
        "Reading notes that keep source, understanding, explanation, and verification items",
        ext_zh=[{
            "title": "延伸：引用查證清單",
            "body": "請列出我若要在作業中引用這份文本，必須回到圖書館資料庫或原文核對的欄位清單。不要幫我編 DOI。"
        }],
        ext_en=[{
            "title": "Extension: citation verification list",
            "body": "List bibliographic fields I must verify in a library database or the original text before citing. Do not invent a DOI."
        }],
        extra_zh=CITE_ZH,
        extra_en=CITE_EN,
    )
    items.append({
        "zhConcept": "整理課堂資料不只是資料夾分類，而是讀懂教科書、文章、Paper、長篇資料：留下原文核心、你的理解、AI 解釋、待查證。AI 很會「看起來像真的」引用，那些作者、年份、DOI 都必須回正式資料庫確認。沒讀過的部分不能寫進作業。",
        "enConcept": "Organizing class materials is not only folders. It is understanding textbooks, articles, papers, and long sources: source core, your understanding, AI explanation, and verification. AI is good at citations that look real—authors, years, and DOIs must be checked in official databases. Unread sections must not enter assignments.",
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
        "zhValueTip": "沒讀過就不能引用；AI 不是學術資料庫。",
        "enValueTip": "If you have not read it, you cannot cite it. AI is not an academic database.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "閱讀與文獻理解筆記",
        "enOutcome": "Reading and Literature Notes",
        "zhOutputName": "閱讀與文獻理解筆記",
        "enOutputName": "Reading and Literature Notes",
        "zhCaseStudy": "社會學作業要求 5 篇文獻。小美請 AI「找五篇並寫 APA」，得到不存在的期刊論文。她改成只貼自己在資料庫找到的 1 篇 PDF 的兩段話，請 AI 做閱讀筆記與「還缺哪些書目欄位」。引用全部回資料庫核對後才進作業。",
        "enCaseStudy": "A sociology assignment asked for 5 sources. Mei asked AI to “find five and write APA” and got nonexistent journal articles. She then pasted two paragraphs from one PDF she actually found, asked for reading notes and missing bibliographic fields, and verified every citation in the database before writing.",
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
        "zhWorkflowSteps": wsteps([
            ("打開真實文本", "不能引用沒讀的", "PDF／課本", "摘錄", "是否真的讀過"),
            ("記錄書目現況", "防假 DOI", "封面／資料庫", "已知欄位", "未知是否標未知"),
            ("產出四欄筆記", "理解要分層", "摘錄", "筆記草稿", "原文與解釋是否分開"),
            ("資料庫查證", "AI 不是來源", "草稿書目", "已核對", "DOI／年份是否回查"),
            ("存檔", "報告課會用", "定稿", "成果包", "未讀範圍是否標出"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Open a real text", "Cannot cite unread work", "PDF/book", "Excerpt", "Did you actually read it?"),
            ("Record known bibliography", "Stop fake DOIs", "Cover/database", "Known fields", "Unknowns marked unknown"),
            ("Four-column notes", "Layered understanding", "Excerpt", "Notes draft", "Source vs explanation split"),
            ("Database verification", "AI is not a source", "Draft biblio", "Verified", "Year/DOI rechecked"),
            ("Save", "Report lesson will use this", "Final", "Package", "Unread range marked"),
        ]),
        "zhPractice": "選一篇真實文本並摘錄。；產出閱讀筆記。；核對書目、刪假引用。；存成「閱讀與文獻理解筆記」。",
        "enPractice": "Pick a real text and excerpt it.; Produce reading notes.; Verify bibliography and delete fake citations.; Save Reading and Literature Notes.",
        "zhPracticeSteps": psteps([
            ("只用讀過的段落", "摘錄可指回頁碼或位置", "整篇交給 AI 裝精讀", "你能指出段落在哪嗎？"),
            ("分開理解與解釋", "有我的 3 句", "只有 AI 文", "合上文本講得出來嗎？"),
            ("查證書目", "不確定欄位已標", "使用 AI 編的 DOI", "有回資料庫嗎？"),
            ("標未讀範圍並存檔", "未讀不進作業", "把摘要當已引用", "作業裡會不會誤引？"),
        ]),
        "enPracticeSteps": psteps([
            ("Use only read passages", "Excerpt points to a page/place", "Pretend close-reading via AI", "Can you point to the passage?"),
            ("Split understanding vs explanation", "3 sentences of yours", "Only AI prose", "Can you retell it?"),
            ("Verify bibliography", "Uncertain fields flagged", "Use an invented DOI", "Did you check a database?"),
            ("Mark unread range and save", "Unread stays out of homework", "Cite from the summary only", "Any accidental citation risk?"),
        ]),
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
        "zhExcellentExample": "含原文核心、我的理解、標示的 AI 解釋、待查證書目、未讀範圍聲明、無假引用。",
        "enExcellentExample": "Includes source core, your understanding, labeled explanation, biblio to verify, unread-range note, no fake citations.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂用筆記與閱讀成果去拆作業，產出「報告與作業規劃表」。",
        "enNextStep": "Next, use notes and readings to break down an assignment into a Report and Homework Plan.",
        "zhConceptBlocks": {
            "principles": ["只筆記讀過的", "引用必須回資料庫", "未讀不能寫進作業"],
            "terms": ["原文核心", "待查證書目", "未讀範圍"],
            "criteria": ["有摘錄", "有查證項", "無假 DOI"],
            "boundaries": ["避免：捏造文獻", "避免：假精讀", "避免：AI 當正式來源"]
        },
        "enConceptBlocks": {
            "principles": ["Notes only on what you read", "Citations back to a database", "Unread text stays out of homework"],
            "terms": ["Source core", "Bibliography to verify", "Unread range"],
            "criteria": ["Excerpt present", "Verify list present", "No fake DOI"],
            "boundaries": ["Avoid: invented literature", "Avoid: fake close-reading", "Avoid: AI as an official source"]
        },
        "zhSummary": ["本堂成果：閱讀與文獻理解筆記", "AI 引用一律查證。", "沒讀過就不要引用。"],
        "enSummary": ["Deliverable: Reading and Literature Notes", "Verify every AI citation.", "Do not cite what you have not read."],
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
        "zhNotePrompt": "寫下這份文本的 1 個主張、1 個限制，以及 1 個你還沒讀、因此不能引用的部分。",
        "enNotePrompt": "Write one claim, one limitation, and one unread part you must not cite.",
    })

    # ---- L7 ----
    zh_p, en_p = prompt_pack(
        """你是大學作業規劃教練，不是代寫者。不可產出可直接繳交的完整報告正文，不可捏造資料、訪談、實驗或引用。

我的輸入：
- 課程與作業標題：[請填寫]
- 老師要求／字數／截止日期：[請填寫]
- 我目前已有的筆記或閱讀（貼重點，不要叫我重打全部）：
[請填寫]
- 我卡關的地方：[請填寫]

任務：產出「報告與作業規劃表」，把作業拆成：
1) 題目理解（老師真正要什麼、評分可能看什麼——標需向課綱確認）
2) 資料蒐集（我已有／還缺／到哪查，不編文獻）
3) 大綱（標題層級，每節我要回答的問題）
4) 撰寫順序（哪一節先寫，哪一節必須等資料）
5) 驗證（哪些論點需要回筆記或原文）
6) 引用（列出我已有來源的核對動作，不產生假 APA）
7) 最終檢查（繳交前 8 項，含誠信：沒有整段貼 AI）

輸出：表格。每一步標「我做／AI 可協助／不可交給 AI」。不要寫完整段落正文。""",
        """You are a university assignment-planning coach, not a ghostwriter. Do not produce a full submittable paper. Do not invent data, interviews, experiments, or citations.

My input:
- Course and assignment title: [Enter]
- Instructor requirements / length / deadline: [Enter]
- Notes or readings I already have (paste highlights; do not make me retype everything):
[Enter]
- Where I am stuck: [Enter]

Task: Produce a “Report and Homework Plan” that splits the work into:
1) Prompt understanding (what is actually asked; what grading may look at—flag syllabus checks)
2) Source gathering (have / missing / where to look; do not invent literature)
3) Outline (heading levels; the question each section must answer)
4) Writing order (what to draft first; what must wait for sources)
5) Verification (which claims must return to notes or the original)
6) Citation (verification actions for sources I already have; no fake APA)
7) Final check (8 pre-submit items, including integrity: no pasted AI paragraphs)

Output: tables. Label each step I do / AI may help / must not give to AI. Do not write full body paragraphs.""",
        ["[請填寫]", "[請填寫]"],
        ["[Enter]", "[Enter]"],
        "接到報告或作業、需要拆步驟而不是直接開寫時使用",
        "Use when an assignment arrives and you need steps instead of jumping into prose",
        "一份含理解、蒐集、大綱、撰寫、驗證、引用、最終檢查的規劃表",
        "A plan covering understanding, gathering, outline, writing order, verification, citation, and final check",
        ext_zh=[{
            "title": "延伸：大綱品質檢查",
            "body": "請檢查我貼上的大綱：哪一節沒有問題可回答、哪一節可能變成空泛、哪一節還沒有資料來源。不要幫我寫正文。"
        }],
        ext_en=[{
            "title": "Extension: outline quality check",
            "body": "Check my outline: which section has no question, which may stay vague, which still has no source. Do not write body text."
        }],
        extra_zh=CITE_ZH,
        extra_en=CITE_EN,
    )
    items.append({
        "zhConcept": "大學作業失敗常常不是因為不夠努力，而是沒有把題目拆開：理解、蒐集、大綱、撰寫、驗證、引用、最終檢查。AI 適合幫你規劃與檢查結構，不適合產出整份可繳交正文。引用與數據都必須是你真實擁有並核對過的。",
        "enConcept": "Assignments often fail from missing a breakdown: understand, gather, outline, write, verify, cite, final check. AI is useful for planning and structure checks—not for a full submittable paper. Citations and data must be yours and verified.",
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
        "zhValueTip": "先規劃再撰寫；AI 不代寫、不造數據、不造引用。",
        "enValueTip": "Plan before prose. AI does not ghostwrite, invent data, or invent citations.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "報告與作業規劃表",
        "enOutcome": "Report and Homework Plan",
        "zhOutputName": "報告與作業規劃表",
        "enOutputName": "Report and Homework Plan",
        "zhCaseStudy": "傳播課報告 2500 字，小瑜直接要 AI 寫全文，被偵測語氣不像她。她改成貼題目、字數、已有的兩則閱讀筆記，請 AI 只出規劃表與大綱問題。她自己按節寫，引用全部回 L6 筆記核對。",
        "enCaseStudy": "Yu asked AI for a full 2,500-word communication paper and was flagged for tone. She then pasted the prompt, length, and two reading notes, and asked only for a plan and outline questions. She wrote section by section and verified citations against her L6 notes.",
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
        "zhWorkflowSteps": wsteps([
            ("重述題目", "避免寫錯題", "作業說明", "我的理解", "能否用一句話說老師要什麼"),
            ("盤點資料", "防止假文獻", "L5/L6 成果", "已有／缺口", "缺口是否寫到哪查"),
            ("做大綱與順序", "避免從頭硬寫", "規劃 Prompt", "大綱表", "每節是否有要回答的問題"),
            ("標誠信界線", "防代寫", "規劃表", "三欄標記", "正文是否列必須自做"),
            ("存檔", "簡報課會用大綱", "定稿", "成果包", "有最終檢查 8 項"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Restate the prompt", "Avoid answering the wrong task", "Assignment sheet", "My understanding", "One sentence on what is asked"),
            ("Inventory sources", "Stop fake literature", "L5/L6 outputs", "Have/missing", "Missing items say where to look"),
            ("Outline and order", "Avoid writing from zero", "Plan prompt", "Outline table", "Each section has a question"),
            ("Mark integrity lines", "Stop ghostwriting", "Plan", "Three-column labels", "Body text marked must-do"),
            ("Save", "Slides lesson will use the outline", "Final", "Package", "8 final-check items"),
        ]),
        "zhPractice": "重述一份真實作業要求。；盤點已有筆記與缺口。；產出七段規劃表。；存成「報告與作業規劃表」。",
        "enPractice": "Restate a real assignment.; Inventory notes and gaps.; Produce the seven-part plan.; Save the Report and Homework Plan.",
        "zhPracticeSteps": psteps([
            ("題目理解", "有自己的話與待確認", "只複製題目", "你能向同學講解要求嗎？"),
            ("資料與大綱", "缺口不編文獻", "列出不存在的論文", "每節有問題嗎？"),
            ("撰寫／驗證／引用", "正文列必須自做", "請 AI 寫完三節", "引用核對動作是否具體？"),
            ("最終檢查並存檔", "含未整段貼 AI", "沒有繳交前清單", "截止前看得完嗎？"),
        ]),
        "enPracticeSteps": psteps([
            ("Understand the prompt", "Own wording + confirms", "Only copy the sheet", "Can you explain the task?"),
            ("Sources and outline", "No invented literature", "List nonexistent papers", "Does each section have a question?"),
            ("Write/verify/cite", "Body marked must-do", "Ask AI to finish three sections", "Are citation checks concrete?"),
            ("Final check and save", "Includes no pasted AI paragraphs", "No pre-submit list", "Is it finishable before the deadline?"),
        ]),
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
        "zhExcellentExample": "七段齊全、三欄分工、無完整正文、無假引用、有繳交前 8 檢。",
        "enExcellentExample": "All seven parts, three-column roles, no full prose, no fake citations, 8 pre-submit checks.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂把報告大綱轉成「課堂簡報結構稿」，仍然自己負責論點。",
        "enNextStep": "Next, turn the report outline into a class presentation structure—you still own the argument.",
        "zhConceptBlocks": {
            "principles": ["作業先拆再寫", "AI 不代寫正文", "引用與數據必須真實"],
            "terms": ["題目理解", "必須自做撰寫", "最終檢查"],
            "criteria": ["七段都有", "有大綱問題", "有誠信檢"],
            "boundaries": ["避免：全文代寫", "避免：假數據", "避免：假 APA"]
        },
        "enConceptBlocks": {
            "principles": ["Break down before writing", "AI does not write the paper", "Citations and data must be real"],
            "terms": ["Prompt understanding", "Must-do writing", "Final check"],
            "criteria": ["Seven parts present", "Outline questions present", "Integrity check present"],
            "boundaries": ["Avoid: full ghostwriting", "Avoid: fake data", "Avoid: fake APA"]
        },
        "zhSummary": ["本堂成果：報告與作業規劃表", "規劃不是正文。", "繳交前一定做誠信檢查。"],
        "enSummary": ["Deliverable: Report and Homework Plan", "A plan is not the paper.", "Always run an integrity check before submit."],
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
        "zhNotePrompt": "寫下這份作業老師真正要的 1 件事、你絕不會交給 AI 的 1 件事、明天要寫的 1 節。",
        "enNotePrompt": "Write the one thing the instructor really wants, one thing you will not give to AI, and the one section you will write tomorrow.",
    })

    # ---- L8 ----
    zh_p, en_p = prompt_pack(
        """你是課堂簡報結構教練，不是投影片美工，也不是代講者。不可編造數據、圖表數字或你沒有的研究結果。

我的輸入：
- 報告／簡報場合與時間限制：[請填寫]
- 聽眾（同學／老師）：[請填寫]
- 我已有的報告大綱或筆記重點：
[請填寫]
- 我必須自己講清楚的核心論點：[請填寫]

任務：產出「課堂簡報結構稿」：
1) 簡報目標（聽眾聽完應記住的 1 句）
2) 頁面大綱（建議 8–12 頁邏輯，每頁：標題、1 個核心訊息、口頭要補的一句、不要放的內容）
3) 證據頁：每項證據標來源狀態（已核對／待查證／不可使用）
4) 時間分配（開場／主體／結論）
5) Q&A 可能 3 題與我的回答要點（不要替我寫演講稿全文）

限制：不要輸出可直接當講稿照念的長文；不要保證聽眾喜歡或分數。""",
        """You are a class-presentation structure coach—not a slide decorator or a stand-in speaker. Do not invent data, chart numbers, or results you do not have.

My input:
- Occasion and time limit: [Enter]
- Audience (classmates / instructor): [Enter]
- Outline or note highlights I already have:
[Enter]
- The core argument I must explain myself: [Enter]

Task: Produce a “Class Presentation Structure Draft”:
1) Presentation goal (one sentence the audience should remember)
2) Slide outline (about 8–12 slides: title, one key message, one spoken add-on, what not to put on the slide)
3) Evidence slides: label each source as verified / needs verification / do not use
4) Timing (opening / body / close)
5) 3 likely Q&A questions and answer bullets (do not write a full speech)

Limits: Do not output a long script to read aloud. Do not guarantee audience liking or grades.""",
        ["[請填寫]", "[請填寫]"],
        ["[Enter]", "[Enter]"],
        "要把報告大綱變成可講的簡報結構時使用",
        "Use when turning a report outline into a speakable slide structure",
        "一份含目標、頁面邏輯、證據狀態與時間分配的簡報結構稿",
        "A structure draft with goal, slide logic, evidence status, and timing",
        ext_zh=[{
            "title": "延伸：刪字練習",
            "body": "請指出我結構稿中哪幾頁字太多，並給每頁最多 3 個詞的標題建議。不要新增我沒有的證據。"
        }],
        ext_en=[{
            "title": "Extension: cut-text practice",
            "body": "Point out slides with too much text and suggest titles of at most 3 words. Do not add evidence I do not have."
        }],
    )
    items.append({
        "zhConcept": "課堂簡報要先清楚再漂亮：一頁一個訊息、證據有來源狀態、時間分配合理。AI 可以幫你排頁與刪字，不能替你上台，也不能把沒有的研究做成圖表。簡報結構應來自你的作業規劃與筆記，而不是另起爐灶編故事。",
        "enConcept": "Class slides need clarity before decoration: one message per slide, evidence with source status, realistic timing. AI can sequence and cut text; it cannot present for you or turn missing research into charts. Structure should come from your assignment plan and notes—not a new invented story.",
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
        "zhValueTip": "一頁一句話；沒核對的證據不上投影片。",
        "enValueTip": "One message per slide. Unverified evidence stays off the slide.",
        "estimatedTime": "約 45 分鐘 / About 45 min",
        "difficulty": "標準 / Standard",
        "zhOutcome": "課堂簡報結構稿",
        "enOutcome": "Class Presentation Structure Draft",
        "zhOutputName": "課堂簡報結構稿",
        "enOutputName": "Class Presentation Structure Draft",
        "zhCaseStudy": "小宇把報告全文貼進簡報，每頁都是段落。他改用 L7 大綱請 AI 只出結構：每頁標題、一句訊息、口頭補充、不要放的字。他刪掉 AI 建議的「研究數據」頁，因為他沒有數據。",
        "enCaseStudy": "Yu pasted his full paper onto slides. Using the L7 outline, he asked AI only for structure: title, one message, spoken add-on, what to omit. He deleted a suggested “research data” slide because he had no data.",
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
        "zhWorkflowSteps": wsteps([
            ("取出論點", "簡報服務論點", "L7 規劃", "1 句目標", "聽眾能否記住"),
            ("排頁", "一頁一訊息", "大綱", "8–12 頁", "是否仍有長段落"),
            ("標證據", "防假圖", "閱讀筆記", "狀態欄", "待查證是否不上場"),
            ("砍超量與假數據", "配合時間", "結構稿", "精簡版", "能否在時限講完"),
            ("存檔", "考試前也可當複習骨架", "定稿", "成果包", "有 Q&A 3 題"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Extract the argument", "Slides serve the claim", "L7 plan", "One-sentence goal", "Would the audience remember it?"),
            ("Sequence slides", "One message each", "Outline", "8–12 slides", "Any leftover paragraphs?"),
            ("Label evidence", "Stop fake charts", "Reading notes", "Status column", "Unverified stays offstage"),
            ("Cut extras and fake data", "Fit the time", "Draft", "Lean version", "Speakable in the limit"),
            ("Save", "Also a review skeleton before exams", "Final", "Package", "3 Q&A items"),
        ]),
        "zhPractice": "準備場合與時限。；用已有大綱產出結構稿。；標證據並刪假圖表。；存成「課堂簡報結構稿」。",
        "enPractice": "Set occasion and time.; Generate structure from an existing outline.; Label evidence and delete fake charts.; Save the Presentation Structure Draft.",
        "zhPracticeSteps": psteps([
            ("寫 1 句目標", "聽眾能重複", "只寫「介紹主題」", "下課有人記得住嗎？"),
            ("每頁一訊息", "8–12 頁", "把段落貼上", "一頁能否 20 秒講完？"),
            ("證據狀態", "沒核對的不上片", "AI 補的圖", "來源寫得出來嗎？"),
            ("時間與 Q&A 並存檔", "有開場主體結論", "沒有預留提問", "超時嗎？"),
        ]),
        "enPracticeSteps": psteps([
            ("One-sentence goal", "Audience can repeat it", "Only “introduce the topic”", "Would anyone remember after class?"),
            ("One message per slide", "8–12 slides", "Paste paragraphs", "Can one slide be spoken in 20 seconds?"),
            ("Evidence status", "Unverified off the slide", "AI-made charts", "Can you name the source?"),
            ("Timing, Q&A, save", "Opening/body/close", "No time for questions", "Over time?"),
        ]),
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
        "zhExcellentExample": "1 句目標、8–12 頁一訊息、證據狀態、時間分配、3 題 Q&A、無假數據。",
        "enExcellentExample": "One-sentence goal, 8–12 one-message slides, evidence status, timing, 3 Q&A, no fake data.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "下一堂進入考試：用筆記做個人化複習計畫、題庫與錯題紀錄。",
        "enNextStep": "Next, exam prep: a personalized review plan, question bank, and error log from your notes.",
        "zhConceptBlocks": {
            "principles": ["先清楚再設計", "一頁一訊息", "沒證據就不上圖"],
            "terms": ["核心訊息", "證據狀態", "時間分配"],
            "criteria": ["有目標句", "頁面可講", "證據可追溯"],
            "boundaries": ["避免：假數據圖", "避免：長講稿", "避免：保證分數"]
        },
        "enConceptBlocks": {
            "principles": ["Clarity before design", "One message per slide", "No chart without evidence"],
            "terms": ["Key message", "Evidence status", "Timing"],
            "criteria": ["Goal sentence", "Speakable slides", "Traceable evidence"],
            "boundaries": ["Avoid: fake data charts", "Avoid: long scripts", "Avoid: grade guarantees"]
        },
        "zhSummary": ["本堂成果：課堂簡報結構稿", "結構服務口頭表達。", "沒有的研究不要畫成圖。"],
        "enSummary": ["Deliverable: Class Presentation Structure Draft", "Structure serves speaking.", "Do not chart research you do not have."],
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
        "zhNotePrompt": "寫下你簡報的 1 句目標，以及你絕不會放上投影片的 1 種沒核對資料。",
        "enNotePrompt": "Write your one-sentence goal and one kind of unverified material you will never put on a slide.",
    })

    # ---- L9 ----
    zh_p, en_p = prompt_pack(
        """你是考試複習教練，不是代考者。不可提供可直接帶進考場的完整答案卷，不可保證分數。

我的輸入：
- 科目與考試日期：[請填寫]
- 考試範圍（章節／講義／題型）：[請填寫]
- 我目前熟悉程度（1–5）與每天可用分鐘：[請填寫]
- 我的筆記／錯題摘要（可貼 L5 重點，不要貼整本）：
[請填寫]
- 我最常錯的類型：[請填寫]

任務：產出「考試複習系統」，含三塊：
A. 個人化複習計畫（依日期、範圍、熟悉度、可用時間；每天任務必須可完成）
B. 題庫架構：核心概念題、應用題、易錯題各至少 3 題（只給題幹與作答檢查步驟，不要給可抄的完整標準答案）
C. 錯題紀錄模板示範 1 則：題目、我的解法（留白）、錯誤原因、正確概念、下次判斷方式

限制：
- 不要叫我把手機帶進考場用 AI
- 題目若超出我提供的範圍，標「需對照老師範圍」""",
        """You are an exam-review coach, not a stand-in test taker. Do not provide a full answer sheet to take into the exam. Do not guarantee scores.

My input:
- Subject and exam date: [Enter]
- Scope (chapters / handouts / question types): [Enter]
- Familiarity 1–5 and minutes available per day: [Enter]
- Note / error highlights (L5 points OK; not a whole book):
[Enter]
- My most common error type: [Enter]

Task: Produce an “Exam Review System” with three parts:
A. Personalized review plan (date, scope, familiarity, available time; daily tasks must be finishable)
B. Question-bank structure: at least 3 concept, 3 application, and 3 easy-to-miss questions (stems plus checking steps; no copyable full official answers)
C. One sample error-log row: item, my solution (blank), why wrong, correct concept, how I will judge next time

Limits:
- Do not tell me to use AI in the exam
- If a question is outside my stated scope, mark “check against instructor scope”""",
        ["[請填寫]", "[請填寫]"],
        ["[Enter]", "[Enter]"],
        "考試前要排複習、出練習題與整理錯題時使用",
        "Use before an exam to plan review, practice questions, and an error log",
        "含複習計畫、題庫架構與錯題模板的考試複習系統",
        "An exam system with a review plan, question-bank structure, and error-log template",
        ext_zh=[{
            "title": "延伸：自我測驗流程",
            "body": "請根據我的題庫架構，設計一次 25 分鐘自我測驗流程（抽題、計時、對完後只看檢查步驟）。不要給完整答案卷。"
        }],
        ext_en=[{
            "title": "Extension: self-test routine",
            "body": "From my question-bank structure, design a 25-minute self-test (draw items, timebox, then use checking steps only). Do not provide a full answer key."
        }],
    )
    items.append({
        "zhConcept": "考試準備不是通宵背 AI 摘要。有效系統有三塊：符合你時間的複習計畫、能練的題庫（概念／應用／易錯）、以及錯題紀錄（我的解法、錯誤原因、正確概念、下次判斷）。AI 可以出題與幫你看步驟，但不能代考，也不該給可帶進考場的完整答案卷。",
        "enConcept": "Exam prep is not an all-night AI summary. A working system has three parts: a review plan that fits your time, a practice bank (concept / application / easy-to-miss), and an error log (my solution, why wrong, correct concept, next judgment). AI can write stems and checking steps—it cannot take the exam or hand you a take-in answer sheet.",
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
        "zhValueTip": "計畫要能做到；練題看步驟；錯題改判斷。AI 不代考。",
        "enValueTip": "Plans must be doable; practice uses steps; errors fix judgment. AI does not take the exam.",
        "estimatedTime": "約 55 分鐘 / About 55 min",
        "difficulty": "中階 / Intermediate",
        "zhOutcome": "考試複習系統（複習計畫＋題庫＋錯題紀錄）",
        "enOutcome": "Exam Review System (plan + question bank + error log)",
        "zhOutputName": "考試複習系統（複習計畫＋題庫＋錯題紀錄）",
        "enOutputName": "Exam Review System (plan + question bank + error log)",
        "zhCaseStudy": "微積分期中前，阿哲請 AI「把會考的都寫出來」。他改成提供日期、每天 40 分鐘、最弱是應用題，請 AI 排 7 天與 9 題題幹＋檢查步驟。他用錯題模板記了 2 題「看到關鍵字就套錯公式」的判斷修正。",
        "enCaseStudy": "Before a calculus midterm, Zhe asked AI to “write everything that will be on the test.” He then gave the date, 40 minutes a day, and application items as the weak spot, and asked for 7 days plus 9 stems with checking steps. He logged two errors about grabbing the wrong formula from keywords.",
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
        "zhWorkflowSteps": wsteps([
            ("填真實限制", "假計畫等於沒計畫", "日曆", "限制卡", "每天分鐘是否誠實"),
            ("產出計畫與題型", "三類題都要練", "筆記重點", "計畫＋題幹", "是否標需對照範圍"),
            ("先做再對步驟", "防抄答案", "題幹", "作答", "是否沒先看完整答案"),
            ("寫錯題判斷", "下次才改得了", "錯題", "紀錄列", "有下次判斷方式嗎"),
            ("存檔", "L10 會匯入考試流", "定稿", "成果包", "三塊都在嗎"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Enter real constraints", "Fake plans fail", "Calendar", "Constraint card", "Honest daily minutes"),
            ("Plan and item types", "Practice all three types", "Note highlights", "Plan + stems", "Out-of-scope flagged"),
            ("Attempt before steps", "Stop copying answers", "Stems", "Attempts", "Did you peek at a full key?"),
            ("Write error judgment", "Fixes future decisions", "Missed item", "Log row", "Next-time rule present"),
            ("Save", "L10 will import exam flow", "Final", "Package", "All three parts present"),
        ]),
        "zhPractice": "填考試限制。；產出計畫與三類題幹。；自我測驗並寫 1 則錯題。；存成「考試複習系統」。",
        "enPractice": "Enter exam constraints.; Produce a plan and three item types.; Self-test and log one error.; Save the Exam Review System.",
        "zhPracticeSteps": psteps([
            ("可執行計畫", "每天任務不超過可用時間", "排滿到睡不夠", "今晚做得到嗎？"),
            ("三類題庫", "各≥3 且有檢查步驟", "只要答案", "能否先自己做？"),
            ("錯題紀錄", "五欄齊", "只寫「粗心」", "下次判斷具體嗎？"),
            ("存檔", "不含完整答案卷", "把答案帶去考場", "有沒有代考暗示？"),
        ]),
        "enPracticeSteps": psteps([
            ("Doable plan", "Daily tasks fit minutes", "Sleep-destroying schedule", "Can you do tonight’s task?"),
            ("Three item types", "≥3 each with checking steps", "Answers only", "Can you attempt first?"),
            ("Error log", "Five fields", "Only “careless”", "Is the next-time rule specific?"),
            ("Save", "No full take-in key", "Carry answers into the exam", "Any exam-taking hint?"),
        ]),
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
        "zhExcellentExample": "含可執行計畫、9 題以上題幹＋檢查步驟、1 則五欄錯題、無代考內容。",
        "enExcellentExample": "Includes a doable plan, 9+ stems with checking steps, one five-field error row, no exam-taking content.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "最後一堂不重新填所有資料，而是把前 9 堂成果整合成「我的 AI 大學學習工作流」。",
        "enNextStep": "The last lesson does not re-enter everything—it compiles the first 9 outputs into your AI university learning workflow.",
        "zhConceptBlocks": {
            "principles": ["計畫必須可完成", "先作答再看步驟", "錯題改判斷不改運氣"],
            "terms": ["熟悉程度", "檢查步驟", "下次判斷方式"],
            "criteria": ["有時程", "有三類題", "有錯題列"],
            "boundaries": ["避免：代考", "避免：完整答案卷", "避免：保證分數"]
        },
        "enConceptBlocks": {
            "principles": ["Plans must be finishable", "Attempt before steps", "Errors fix judgment, not luck"],
            "terms": ["Familiarity", "Checking steps", "Next-time rule"],
            "criteria": ["Schedule present", "Three item types", "Error row present"],
            "boundaries": ["Avoid: exam-taking", "Avoid: full answer sheets", "Avoid: score guarantees"]
        },
        "zhSummary": ["本堂成果：考試複習系統", "AI 不出考場。", "錯題是為了下次判斷。"],
        "enSummary": ["Deliverable: Exam Review System", "AI does not enter the exam hall.", "Error logs exist to change next-time judgment."],
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
        "zhNotePrompt": "寫下明天複習的 1 個任務、你最弱的 1 類題，以及 1 條下次看到類似題的判斷句。",
        "enNotePrompt": "Write tomorrow’s one review task, your weakest item type, and one next-time judgment sentence.",
    })

    # ---- L10 ----
    zh_p, en_p = prompt_pack(
        """你是學習系統整合教練。不要要求使用者重新輸入前 9 堂的全部內容。你的工作是把「已有成果摘要」編成可重複使用的工作流，並做反思，而不是另做一套新作業。

我可能貼上的前課成果摘要（缺的就標「本項尚未完成」）：
1) 規劃表：[請填寫或貼重點]
2) 概念拆解：[請填寫或貼重點]
3) 教材理解：[請填寫或貼重點]
4) 課件解讀：[請填寫或貼重點]
5) 課堂筆記系統：[請填寫或貼重點]
6) 閱讀筆記：[請填寫或貼重點]
7) 作業規劃：[請填寫或貼重點]
8) 簡報結構：[請填寫或貼重點]
9) 考試複習系統：[請填寫或貼重點]

另請根據我的本週狀況：
- 本週卡住的位置：[請填寫]
- 已改善的問題：[請填寫]
- 尚待加強：[請填寫]

任務：產出「我的 AI 大學學習工作流」：
A. 九段流程：課前準備、課堂筆記、課後整理、作業、閱讀、複習、考試、錯題、反思——每段寫：我做什麼／AI 可協助／不可交給 AI／使用哪一堂成果
B. 缺漏清單（哪一堂還沒有成果，下週補什麼，不要重填全部）
C. 本週反思與下一週調整（具體、可執行）
D. 誠信總則 5 條（不代寫、不代考、不造引用、不造數據、重要內容回教材／老師／資料庫）

不要宣稱這是學校認證或保證成績。""",
        """You are a learning-system integrator. Do not require the user to retype all 9 prior outputs. Compile existing summaries into a reusable workflow plus reflection—not a brand-new assignment.

I may paste prior output summaries (if missing, mark “not finished yet”):
1) Plan: [Enter or paste highlights]
2) Concept breakdown: [Enter or paste highlights]
3) Material notes: [Enter or paste highlights]
4) Courseware sheet: [Enter or paste highlights]
5) Class notes system: [Enter or paste highlights]
6) Reading notes: [Enter or paste highlights]
7) Assignment plan: [Enter or paste highlights]
8) Slide structure: [Enter or paste highlights]
9) Exam review system: [Enter or paste highlights]

Also my week:
- Where I got stuck: [Enter]
- What already improved: [Enter]
- What still needs work: [Enter]

Task: Produce “My AI University Learning Workflow”:
A. Nine stages: pre-class, class notes, after-class, homework, reading, review, exams, error log, reflection—each with I do / AI may help / must not give to AI / which lesson output to use
B. Gap list (which lessons have no output yet; what to add next week—do not re-enter everything)
C. This-week reflection and next-week adjustment (concrete and doable)
D. 5 integrity rules (no ghostwriting, no exam-taking, no fake citations, no fake data, verify against materials/instructor/database)

Do not claim school certification or guaranteed grades.""",
        ["[請填寫或貼重點]", "[請填寫]"],
        ["[Enter or paste highlights]", "[Enter]"],
        "完成本課前 9 堂、要把系統收成一頁工作流時使用",
        "Use after the first 9 lessons to compile one-page workflow",
        "含九段流程、缺漏清單與反思調整的學習工作流",
        "A learning workflow with nine stages, a gap list, and reflection adjustments",
        ext_zh=[{
            "title": "延伸：下週一頁行程",
            "body": "只根據工作流與我的可用時間，排出下週 5 天、每天最多 2 格的行程。缺的成果用「補 Lx 摘要」表示，不要叫我重寫全文。"
        }],
        ext_en=[{
            "title": "Extension: next-week one-pager",
            "body": "From the workflow and my available time, draft 5 days with at most 2 blocks each. Represent missing outputs as “add Lx summary”—do not ask me to rewrite full documents."
        }],
    )
    items.append({
        "zhConcept": "第 10 課不是再做一篇新文章，而是把前 9 堂成果編成可重複使用的 AI 大學學習工作流：課前、課堂、課後、作業、閱讀、複習、考試、錯題、反思。缺的項目標成下週補摘要，不要重填全部。系統要含誠信總則，且不宣稱學校認證或保證成績。",
        "enConcept": "Lesson 10 is not another essay. It compiles the first 9 outputs into a reusable AI university learning workflow: pre-class, class, after-class, homework, reading, review, exams, errors, reflection. Missing items become next-week summary tasks—not a full rewrite. Include integrity rules. Do not claim certification or guaranteed grades.",
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
        "zhValueTip": "整合重於重寫；缺漏下週補摘要，不重填全部。",
        "enValueTip": "Integrate rather than rewrite. Next week adds summaries—not a full re-entry.",
        "estimatedTime": "約 50 分鐘 / About 50 min",
        "difficulty": "中階 / Intermediate",
        "zhOutcome": "我的 AI 大學學習工作流",
        "enOutcome": "My AI University Learning Workflow",
        "zhOutputName": "我的 AI 大學學習工作流",
        "enOutputName": "My AI University Learning Workflow",
        "zhCaseStudy": "小瑜把 9 份檔案都重貼一次，AI 產出超長重複文。她改成每堂只貼 5 行重點，標 L4 尚未做。工作流變成一頁：每天對應階段、缺 L4 就「下次遇到圖表再補解讀單」。她另外寫了本週卡住報告開頭、已改善提問方式、下週只加強錯題 2 則。",
        "enCaseStudy": "Yu pasted all 9 full files and got a repetitive essay. She then pasted five-line highlights per lesson and marked L4 unfinished. The workflow became one page: daily stages, and “add a courseware sheet next time I hit a figure.” She also noted a stuck report opening, improved questioning, and two error-log rows for next week.",
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
        "zhWorkflowSteps": wsteps([
            ("匯入摘要而非全文", "避免重填", "成果包", "9 段重點", "缺的是否標尚未完成"),
            ("編成九段流程", "系統要能週而復始", "摘要", "工作流", "是否含課前到反思"),
            ("補誠信總則", "這門課的底線", "工作流", "5 條", "是否含不代寫不代考"),
            ("反思與下週調整", "系統要能迭代", "本週狀況", "調整 3 點", "是否具體可做"),
            ("存入成果包", "之後每週沿用", "定稿", "系統包", "有沒有保證成績用詞"),
        ]),
        "enWorkflowSteps": wsteps([
            ("Import highlights, not full files", "Avoid re-entry", "Package", "9 highlights", "Missing marked unfinished"),
            ("Compile nine stages", "The system must loop weekly", "Highlights", "Workflow", "Pre-class through reflection"),
            ("Add integrity rules", "This course’s floor", "Workflow", "5 rules", "No ghostwriting or exam-taking"),
            ("Reflect and adjust", "Systems must iterate", "This week", "3 adjustments", "Concrete and doable"),
            ("Save to package", "Reuse each week", "Final", "System pack", "No grade-guarantee wording"),
        ]),
        "zhPractice": "貼前課重點摘要（缺則標尚未完成）。；產出九段工作流與缺漏清單。；寫反思與下週調整。；存成「我的 AI 大學學習工作流」。",
        "enPractice": "Paste prior highlights (mark missing).; Produce nine stages and a gap list.; Write reflection and next-week adjustment.; Save My AI University Learning Workflow.",
        "zhPracticeSteps": psteps([
            ("匯入而非重寫", "缺項標尚未完成", "要求重打全部", "有沒有逼自己重填？"),
            ("九段都有界線", "每段有不可交給 AI", "某段空白", "考試段是否禁止代考？"),
            ("反思具體", "卡住／已改善／下週調整", "只寫「再加油」", "下週行動能否開始？"),
            ("存檔", "無證書／保證成績宣稱", "寫成學校認證", "用語是否誠實？"),
        ]),
        "enPracticeSteps": psteps([
            ("Import, don’t rewrite", "Missing marked unfinished", "Retype everything", "Did you force a full re-entry?"),
            ("Boundaries in nine stages", "Each stage has must-not-give-to-AI", "A blank stage", "Does the exam stage forbid exam-taking?"),
            ("Concrete reflection", "Stuck / improved / next week", "Only “try harder”", "Can next week start?"),
            ("Save", "No certificate or grade-guarantee claims", "Call it school-certified", "Is the wording honest?"),
        ]),
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
        "zhExcellentExample": "九段流程、缺漏誠實、反思可執行、5 條誠信、無認證宣稱。",
        "enExcellentExample": "Nine stages, honest gaps, doable reflection, 5 integrity rules, no certification claims.",
        "zhPromptPack": zh_p,
        "enPromptPack": en_p,
        "zhNextStep": "把這份工作流存進學習系統包，下週從缺漏清單的第一項開始實際跑一次。不必重寫全部前課。",
        "enNextStep": "Save this workflow to your learning-system package and run the first gap item next week. You do not need to rewrite prior lessons.",
        "zhConceptBlocks": {
            "principles": ["整合不重寫", "每週可重複", "缺漏要誠實"],
            "terms": ["工作流", "缺漏清單", "下一週調整"],
            "criteria": ["九段齊", "有反思", "有誠信總則"],
            "boundaries": ["避免：重填全部", "避免：證書宣稱", "避免：保證成績"]
        },
        "enConceptBlocks": {
            "principles": ["Integrate, don’t rewrite", "Repeat weekly", "Be honest about gaps"],
            "terms": ["Workflow", "Gap list", "Next-week adjustment"],
            "criteria": ["Nine stages", "Reflection present", "Integrity rules present"],
            "boundaries": ["Avoid: full re-entry", "Avoid: certificate claims", "Avoid: grade guarantees"]
        },
        "zhSummary": ["本堂成果：我的 AI 大學學習工作流", "系統要能每週再跑。", "這不是學校證書。"],
        "enSummary": ["Deliverable: My AI University Learning Workflow", "The system should run again next week.", "This is not a school certificate."],
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
        "zhNotePrompt": "寫下你下週要跑的 1 個階段、1 個缺漏要補的摘要，以及 1 條你會遵守的紅線。",
        "enNotePrompt": "Write the one stage you will run next week, one missing summary to add, and one red line you will keep.",
    })

    return items


def main():
    src = CONTENT.read_text(encoding="utf-8")
    lessons, arr_start, arr_end = load_course_array(src, "college-learning")
    if len(lessons) != 10:
        raise SystemExit(f"expected 10 lessons, got {len(lessons)}")

    enrich = enrichments() + enrichments_l4_to_l10()
    if len(enrich) != 10:
        raise SystemExit(f"enrich count {len(enrich)}")

    out = []
    for i, old in enumerate(lessons):
        new = dict(old)
        for k in PRESERVE:
            if k in old:
                new[k] = old[k]
        e = enrich[i]
        new.update(e)
        new["zhTitle"] = old.get("zhTitle") or e.get("zhTitle")
        new["enTitle"] = old.get("enTitle") or e.get("enTitle")
        new["zhPrompt"] = e["zhPromptPack"]["body"]
        new["enPrompt"] = e["enPromptPack"]["body"]
        new["id"] = old.get("id") or f"college-learning-L{i+1}"
        new["lessonKey"] = old.get("lessonKey") or new["id"]
        out.append({k: v for k, v in new.items() if v is not None})

    prompts = [x["zhPrompt"][:90] for x in out]
    if len(set(prompts)) < 10:
        raise SystemExit("duplicate prompts detected")
    checklists = [len(x["zhDeliverableChecklist"]) for x in out]
    if any(n < 4 for n in checklists):
        raise SystemExit(f"short checklist {checklists}")
    print("outcomes:")
    for i, x in enumerate(out, 1):
        print(f"  L{i}: {x['zhOutputName']} / {x['enOutputName']}")

    replacement = dumps_js(out)
    CONTENT.write_text(src[:arr_start] + replacement + src[arr_end:], encoding="utf-8")
    print("Wrote college-learning lessons into", CONTENT)


if __name__ == "__main__":
    main()
