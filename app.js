
let state = {
  lang: localStorage.getItem("asb_lang") || "zh",
  route: "home",
  activeLesson: localStorage.getItem("asb_lesson") || "ai",
  progress: JSON.parse(localStorage.getItem("asb_progress") || "{}")
};

function L(path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], I18N[state.lang]) || path;
}

function save() {
  localStorage.setItem("asb_lang", state.lang);
  localStorage.setItem("asb_lesson", state.activeLesson);
  localStorage.setItem("asb_progress", JSON.stringify(state.progress));
}

function progressPercent() {
  return Math.round((Object.values(state.progress).filter(Boolean).length / LESSONS.length) * 100);
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
  setTimeout(() => element.remove(), 1600);
}

function nav() {
  const items = [
    ["home", "nav.home"],
    ["courses", "nav.courses"],
    ["free", "nav.free"],
    ["premium", "nav.premium"],
    ["tools", "nav.tools"],
    ["prompts", "nav.prompts"],
    ["community", "nav.community"],
    ["thailand", "nav.thailand"],
    ["impact", "nav.impact"]
  ];

  return `
    <header class="topbar">
      <div class="wrap nav">
        <button class="brand" onclick="setRoute('home')">
          <span class="logo">AI</span>
          <span>Skill <span style="color:var(--blue)">Bridge</span></span>
        </button>
        <nav class="navlinks">
          ${items.map(([route, key]) => `<button class="${state.route === route ? "active" : ""}" onclick="setRoute('${route}')">${L(key)}</button>`).join("")}
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
            <div class="btnrow">
              <button class="btn primary" onclick="setRoute('free')">${L("home.start")}</button>
              <button class="btn secondary" onclick="setRoute('tools')">${L("home.tools")}</button>
              <button class="btn secondary" onclick="setRoute('premium')">${L("home.premium")}</button>
            </div>
          </div>
          <aside class="hero-card">
            <h2>${L("home.progress")}</h2>
            <div class="progressbar"><div class="progressfill" style="width:${progressPercent()}%"></div></div>
            <p>${progressPercent()}% completed</p>
            <div class="grid two">
              <div class="card"><b>${LESSONS.length}</b><br>${L("home.freeLessons")}</div>
              <div class="card"><b>${TOOLS.length}</b><br>${L("home.aiTools")}</div>
              <div class="card"><b>${PREMIUM.length}</b><br>${L("home.premiumTracks")}</div>
              <div class="card"><b>2</b><br>${L("home.languages")}</div>
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
              <span class="tag free">Free</span>
              <h3>${L("home.freeTitle")}</h3>
              <p>${L("home.freeText")}</p>
            </article>
            <article class="card">
              <span class="tag premiumtag">Premium</span>
              <h3>${L("home.premiumTitle")}</h3>
              <p>${L("home.premiumText")}</p>
            </article>
            <article class="card">
              <span class="tag communitytag">Community</span>
              <h3>${L("home.communityTitle")}</h3>
              <p>${L("home.communityText")}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  `);
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
        <section class="panel" style="margin-top:24px">
          <h2>${L("courses.levelTitle")}</h2>
          <div class="grid four">
            <article class="card"><h3>Level 0</h3><p><b>${L("courses.level0")}</b></p><p>${L("courses.level0Goal")}</p></article>
            <article class="card"><h3>Level 1</h3><p><b>${L("courses.level1")}</b></p><p>${L("courses.level1Goal")}</p></article>
            <article class="card"><h3>Level 2</h3><p><b>${L("courses.level2")}</b></p><p>${L("courses.level2Goal")}</p></article>
            <article class="card"><h3>Advanced</h3><p><b>${L("courses.advanced")}</b></p><p>${L("courses.advancedGoal")}</p></article>
          </div>
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
      <button class="btn primary" onclick="state.progress['${lesson.id}']=true;save();render()">${L("free.complete")}</button>
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
        <div class="grid two">
          <article class="post">
            <span class="tag communitytag">Prompt Help</span>
            <h3>How do I ask AI to help with research?</h3>
            <p>Add constraints: do not write final answer, ask questions first, verify sources.</p>
            <button class="btn secondary" onclick="toast('${L("community.demo")}')">${L("community.reply")}</button>
          </article>
        </div>
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
  const routes = { home, courses, free, premium, tools, prompts, community, thailand, impact };
  document.getElementById("app").innerHTML = (routes[state.route] || home)();
  save();
}

addEventListener("DOMContentLoaded", render);
