/* Guest homepage refresh. Loaded after app.js so the marketing view can evolve
 * without touching learning, authentication, payment, or admin logic. */
const ASB_HOME_AUDIENCE_PROMISES = [
  { icon: "🎓", zhRole: "學生", enRole: "Students", zhNeed: "報告、研究、簡報與升學資料，不再只會複製貼上", enNeed: "Turn AI into stronger reports, research, presentations, and applications" },
  { icon: "🧑‍🏫", zhRole: "老師", enRole: "Teachers", zhNeed: "快速備課、設計活動，也能清楚教會學生負責任地使用 AI", enNeed: "Plan lessons faster and teach students to use AI responsibly" },
  { icon: "🏫", zhRole: "學校", enRole: "Schools", zhNeed: "建立能落地、可追蹤的 AI 素養與校園導入方案", enNeed: "Launch a practical, trackable AI literacy program" },
  { icon: "👨‍👩‍👧", zhRole: "家長", enRole: "Parents", zhNeed: "知道孩子是否真的學會思考，而不是把作業交給 AI", enNeed: "Know your child is learning to think, not outsourcing work to AI" }
];

function renderHomeGuestHeroHeadline() {
  return `
    <section class="home-hero home-hero-clarity home-hero-guest">
      <div class="home-hero-glow home-hero-glow-a" aria-hidden="true"></div>
      <div class="home-hero-glow home-hero-glow-b" aria-hidden="true"></div>
      <div class="wrap home-hero-clarity-inner">
        <div class="home-hero-content hp-animate">
          <p class="home-hero-eyebrow">${text("給學生、老師、學校與家長的 AI 實作學習平台", "Practical AI learning for students, teachers, schools, and families")}</p>
          <h1>${text("學會用 AI 完成報告、研究、簡報與升學準備", "Use AI to complete reports, research, presentations, and university preparation")}</h1>
          <p class="home-lead home-lead-clarity">${text(
            "AI Skill Bridge 不只教工具，而是用清楚步驟、可直接套用的 Prompt 與成果任務，帶你把 AI 真的用進學習、教學與校園。",
            "AI Skill Bridge goes beyond tools with clear steps, reusable prompts, and outcome-based tasks for real learning, teaching, and school use."
          )}</p>
          <div class="home-hero-cta home-hero-cta-left">
            <button type="button" class="home-btn home-btn-primary" onclick="homeStartFreeFoundation()">${text("免費開始第一堂課", "Start the first lesson free")}</button>
            <button type="button" class="home-btn home-btn-secondary" onclick="setRoute('campus')">${text("了解校園合作", "Explore school plans")}</button>
          </div>
          <p class="home-hero-proof">${text("免費課程不需付款｜Google 登入即可保存進度與成果", "No payment for the free course | Google sign-in saves progress and results")}</p>
        </div>
        <figure class="home-hero-photo hp-animate">
          <img src="public/students-learning.jpg" alt="${text("學生一起使用筆記型電腦學習 AI", "Students learning AI together on laptops")}" loading="eager" />
          <figcaption>${text("從『會問 AI』到『能完成真實任務』", "From asking AI to completing real tasks")}</figcaption>
        </figure>
      </div>
    </section>
  `;
}

function renderHomeAudiencePromises() {
  return `
    <section class="home-section home-section-compact home-audience-promise-section" aria-labelledby="audience-promises-title">
      <div class="wrap">
        <div class="home-section-header home-section-header-centered">
          <p class="home-section-kicker">${text("你在意的問題，首頁就說清楚", "Clear answers for every role")}</p>
          <h2 id="audience-promises-title">${text("你是誰，AI Skill Bridge 就幫你解決什麼", "See exactly what AI Skill Bridge solves for you")}</h2>
        </div>
        <div class="home-audience-promise-grid">
          ${ASB_HOME_AUDIENCE_PROMISES.map((item) => `
            <article class="home-audience-promise-card">
              <div class="home-audience-promise-heading"><span aria-hidden="true">${item.icon}</span><h3>${text(item.zhRole, item.enRole)}</h3></div>
              <p>${text(item.zhNeed, item.enNeed)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function home() {
  if (!state.authReady) {
    return homeLandingShell(`
      <main class="home-page"><section class="panel auth-gate-panel" style="margin:2rem auto;max-width:40rem">
        <span class="tag">${text("登入狀態", "Auth")}</span>
        <h1>${text("正在確認登入狀態…", "Checking sign-in status…")}</h1>
        <p class="lead">${text("請稍候，我們正在確認你的 Google 登入狀態。", "Please wait while we confirm your Google sign-in status.")}</p>
      </section></main>`);
  }
  const isGuest = !state.user;
  return homeLandingShell(`
    <main class="home-page">
      ${renderHomeHero()}
      ${isGuest ? renderHomeAudiencePromises() : ""}
      ${isGuest ? renderHomeGuestSolutionPaths() : ""}
      ${isGuest ? renderHomeGuestHowItWorks() : ""}
      ${isGuest ? renderHomeGuestFreeEntry() : ""}
      ${state.user ? "" : renderOnboardingCard()}
      ${renderHomeCapabilities()}
      ${renderHomeExploreOtherCourses()}
      ${renderHomePremiumFeatures()}
      ${shouldShowHomePricingSection() ? renderHomePricing() : ""}
    </main>`);
}
