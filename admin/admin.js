/**
 * AI Skill Bridge Admin V1 — standalone dashboard.
 * Auth: Google → Supabase session → Bearer token → /api/admin/* → server ADMIN_EMAILS check.
 */
(function adminApp() {
  const PRODUCTION_PROJECT_REF = "ifjkadoskbcgrqmcjvya";

  let publicSupabaseUrl = "";
  let publicSupabaseAnonKey = "";
  let publicProjectRef = "";

  const PREMIUM_COURSE_OPTIONS = [
    { id: "college-learning", label: "大學學習 AI 實戰課" },
    { id: "admissions", label: "大學申請 AI 實戰課" },
    { id: "workplace-productivity", label: "職場效率 AI 實戰課" },
    { id: "research-competition", label: "研究競賽 AI 實戰課" },
    { id: "career-internship", label: "實習求職 AI 實戰課" },
    { id: "startup-automation", label: "創業自動化 AI 實戰課" }
  ];

  const NAV = [
    { id: "dashboard", icon: "📊", label: "總覽" },
    { id: "orders", icon: "💳", label: "訂單" },
    { id: "users", icon: "👥", label: "會員" },
    { id: "products", icon: "📚", label: "課程與商品" },
    { id: "campus", icon: "🏫", label: "校園合作" },
    { id: "system", icon: "⚙️", label: "系統狀態" }
  ];

  const state = {
    page: "dashboard",
    session: null,
    adminAllowed: null,
    loading: false,
    error: "",
    data: {},
    campusForm: {
      schoolName: "",
      programName: "",
      accessType: "all-access",
      courseIds: [],
      durationDays: 30,
      startsAt: "",
      endsAt: "",
      maxRedemptions: 50,
      campusCode: "",
      isActive: true
    },
    campusCreateResult: null,
    filters: {
      ordersEmail: "",
      ordersOrderId: "",
      ordersStatus: "",
      usersEmail: ""
    },
    productEdit: null,
    productSaveMessage: ""
  };

  let supabase = null;

  function getOAuthCallbackParams() {
    const query = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(String(window.location.hash || "").replace(/^#/, ""));
    return {
      code: query.get("code"),
      error: query.get("error") || hash.get("error"),
      errorDescription: query.get("error_description") || hash.get("error_description")
    };
  }

  function hasOAuthCallbackParams() {
    const params = getOAuthCallbackParams();
    return Boolean(params.code || params.error || window.location.hash.includes("access_token="));
  }

  function clearOAuthParamsFromUrl() {
    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  function clearStaleSupabaseAuthStorage(currentProjectRef) {
    try {
      if (!currentProjectRef || !window.localStorage) return;
      if (hasOAuthCallbackParams()) return;
      const host = window.location?.hostname || "";
      if (host !== "localhost" && host !== "127.0.0.1" && host !== "::1") return;
      const stalePrefix = `sb-${PRODUCTION_PROJECT_REF}-`;
      if (currentProjectRef === PRODUCTION_PROJECT_REF) return;
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith(stalePrefix)) {
          localStorage.removeItem(key);
        }
      }
    } catch {
      // Ignore localStorage cleanup failures on localhost test.
    }
  }

  async function loadPublicSupabaseConfig() {
    const response = await fetch("/api/admin/public-config");
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.error || "supabase_public_config_missing");
    }
    publicSupabaseUrl = payload.supabaseUrl || "";
    publicSupabaseAnonKey = payload.supabaseAnonKey || "";
    publicProjectRef = payload.projectRef || "";
    if (!publicSupabaseUrl || !publicSupabaseAnonKey || !publicProjectRef) {
      throw new Error("supabase_public_config_missing");
    }
    clearStaleSupabaseAuthStorage(publicProjectRef);
    if (!window.supabase) return;
    supabase = window.supabase.createClient(publicSupabaseUrl, publicSupabaseAnonKey, {
      auth: {
        // Admin handles PKCE callback explicitly in recoverAuthSession().
        detectSessionInUrl: false,
        persistSession: true,
        flowType: "pkce"
      }
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Safe single-quoted JS string for inline onclick handlers in HTML attributes. */
  function jsStringLiteral(value) {
    return `'${String(value ?? "").replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  }

  function formatTwd(amount) {
    const n = Number(amount || 0);
    return `NT$${n.toLocaleString("en-US")}`;
  }

  function formatDate(iso) {
    if (!iso) return "—";
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "—";
    return date.toLocaleString("zh-TW", { hour12: false });
  }

  function formatProviderTradeNo(value) {
    const text = String(value ?? "").trim();
    return text ? escapeHtml(text) : "—";
  }

  function isCampusWriteDisabled() {
    const campus = state.data.campus;
    return campus && campus.campusWriteEnabled === false;
  }

  function statusBadge(status) {
    const key = String(status || "").toLowerCase();
    return `<span class="admin-badge ${escapeHtml(key)}">${escapeHtml(status || "—")}</span>`;
  }

  async function getAccessToken() {
    if (state.session?.access_token) return state.session.access_token;
    if (!supabase) return null;
    const { data } = await supabase.auth.getSession();
    return data?.session?.access_token || null;
  }

  async function apiFetch(path, options = {}) {
    const token = await getAccessToken();
    if (!token) {
      const err = new Error("authentication_required");
      err.code = "authentication_required";
      err.source = "client_no_token";
      throw err;
    }

    const response = await fetch(path, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(options.headers || {})
      }
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const err = new Error(payload.error || "request_failed");
      err.code = payload.error || "request_failed";
      err.status = response.status;
      err.source = "server";
      throw err;
    }
    return payload;
  }

  async function verifyAdminAccess() {
    try {
      await apiFetch("/api/admin/system");
      state.adminAllowed = true;
      state.error = "";
    } catch (error) {
      state.adminAllowed = error.code === "admin_forbidden" ? false : null;
      if (error.code === "authentication_required" && error.source === "client_no_token") {
        state.error = "authentication_required";
      } else if (error.code !== "admin_forbidden") {
        state.error = error.code || "system_check_failed";
      }
    }
  }

  async function recoverAuthSession() {
    const callback = getOAuthCallbackParams();
    if (callback.error) {
      clearOAuthParamsFromUrl();
      throw new Error(callback.errorDescription || callback.error);
    }

    if (callback.code) {
      const { data, error } = await supabase.auth.exchangeCodeForSession(callback.code);
      clearOAuthParamsFromUrl();
      if (error) {
        const { data: retryData } = await supabase.auth.getSession();
        if (retryData?.session) return retryData.session;
        throw new Error(error.message || "oauth_callback_failed");
      }
      return data?.session || null;
    }

    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw new Error(error.message || "get_session_failed");
    }
    return data?.session || null;
  }

  async function signInWithGoogle() {
    if (!supabase) return;
    const redirectTo = `${window.location.origin}/admin/`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });
    if (error) alert(error.message);
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    state.session = null;
    state.adminAllowed = null;
    render();
  }

  async function loadPageData(page = state.page) {
    state.loading = true;
    state.error = "";
    render();

    try {
      if (page === "dashboard") {
        state.data.dashboard = await apiFetch("/api/admin/dashboard");
      } else if (page === "orders") {
        const params = new URLSearchParams();
        if (state.filters.ordersEmail) params.set("email", state.filters.ordersEmail);
        if (state.filters.ordersOrderId) params.set("orderId", state.filters.ordersOrderId);
        if (state.filters.ordersStatus) params.set("status", state.filters.ordersStatus);
        state.data.orders = await apiFetch(`/api/admin/orders?${params.toString()}`);
      } else if (page === "users") {
        const params = new URLSearchParams();
        if (state.filters.usersEmail) params.set("email", state.filters.usersEmail);
        state.data.users = await apiFetch(`/api/admin/users?${params.toString()}`);
      } else if (page === "products") {
        state.data.products = await apiFetch("/api/admin/products");
      } else if (page === "campus") {
        state.data.campus = await apiFetch("/api/admin/campus/programs");
      } else if (page === "system") {
        state.data.system = await apiFetch("/api/admin/system");
      }
    } catch (error) {
      if (error.code === "admin_forbidden") state.adminAllowed = false;
      state.error = error.code || "load_failed";
    } finally {
      state.loading = false;
      render();
    }
  }

  function setPage(page) {
    state.page = page;
    loadPageData(page);
  }

  window.adminSetPage = setPage;
  window.adminSignIn = signInWithGoogle;
  window.adminSignOut = signOut;
  window.adminApplyOrderFilters = function adminApplyOrderFilters() {
    state.filters.ordersEmail = document.getElementById("orders-email")?.value || "";
    state.filters.ordersOrderId = document.getElementById("orders-order-id")?.value || "";
    state.filters.ordersStatus = document.getElementById("orders-status")?.value || "";
    loadPageData("orders");
  };
  window.adminApplyUserFilters = function adminApplyUserFilters() {
    state.filters.usersEmail = document.getElementById("users-email")?.value || "";
    loadPageData("users");
  };
  window.adminEditProduct = function adminEditProduct(productId) {
    const product = (state.data.products?.products || []).find((p) => p.productId === productId);
    if (!product) return;
    state.productEdit = {
      productId: product.productId,
      price: String(product.amount),
      originalPrice: product.originalPrice == null ? "" : String(product.originalPrice),
      active: product.active === true
    };
    state.productSaveMessage = "";
    render();
  };
  window.adminSetProductEditField = function adminSetProductEditField(field, value) {
    if (!state.productEdit) return;
    if (field === "price") state.productEdit.price = value;
    else if (field === "originalPrice") state.productEdit.originalPrice = value;
    else if (field === "active") state.productEdit.active = value === true || value === "true";
  };
  window.adminCancelProductEdit = function adminCancelProductEdit() {
    state.productEdit = null;
    state.productSaveMessage = "";
    render();
  };
  window.adminSaveProduct = async function adminSaveProduct(event) {
    event.preventDefault();
    const edit = state.productEdit;
    if (!edit?.productId) return;
    if (state.data.products?.migrationRequired) {
      alert("目前無法儲存價格，請稍後再試。");
      return;
    }

    const price = Number(edit.price);
    if (!Number.isInteger(price) || price <= 0) {
      alert("售價必須為正整數");
      return;
    }

    let originalPrice = null;
    const originalRaw = String(edit.originalPrice || "").trim();
    if (originalRaw) {
      originalPrice = Number(originalRaw);
      if (!Number.isInteger(originalPrice) || originalPrice <= 0) {
        alert("原價必須為正整數，或留空");
        return;
      }
    }

    try {
      await apiFetch("/api/admin/products", {
        method: "PATCH",
        body: JSON.stringify({
          productId: edit.productId,
          price,
          originalPrice,
          active: edit.active === true
        })
      });
      state.productEdit = null;
      state.productSaveMessage = "儲存成功";
      await loadPageData("products");
    } catch (error) {
      alert(error.code || "save_failed");
    }
  };
  window.adminToggleCampusProgram = async function adminToggleCampusProgram(programId, isActive) {
    if (isCampusWriteDisabled()) {
      alert("campus_production_not_enabled");
      return;
    }
    try {
      await apiFetch("/api/admin/campus/toggle", {
        method: "PATCH",
        body: JSON.stringify({ programId, isActive })
      });
      await loadPageData("campus");
    } catch (error) {
      alert(error.code || "toggle_failed");
    }
  };
  window.adminSubmitCampusProgram = async function adminSubmitCampusProgram(event) {
    event.preventDefault();
    if (isCampusWriteDisabled()) {
      alert("campus_production_not_enabled");
      return;
    }
    const form = state.campusForm;
    const selectedCourses = PREMIUM_COURSE_OPTIONS
      .map((course) => course.id)
      .filter((id) => document.getElementById(`campus-course-${id}`)?.checked);

    try {
      const result = await apiFetch("/api/admin/campus/programs", {
        method: "POST",
        body: JSON.stringify({
          schoolName: document.getElementById("campus-school-name")?.value?.trim() || "",
          programName: document.getElementById("campus-program-name")?.value?.trim() || "",
          accessType: document.getElementById("campus-access-type")?.value || "all-access",
          courseIds: selectedCourses,
          durationDays: Number(document.getElementById("campus-duration-days")?.value || 30),
          startsAt: document.getElementById("campus-starts-at")?.value || null,
          endsAt: document.getElementById("campus-ends-at")?.value || null,
          maxRedemptions: Number(document.getElementById("campus-max-redemptions")?.value || 0),
          campusCode: document.getElementById("campus-code")?.value || "",
          isActive: document.getElementById("campus-is-active")?.checked !== false
        })
      });
      state.campusCreateResult = result;
      state.campusForm.campusCode = "";
      await loadPageData("campus");
    } catch (error) {
      alert(error.code || "create_failed");
    }
  };

  function renderGate() {
    const forbidden = state.adminAllowed === false;
    return `
      <div class="admin-gate">
        <div class="admin-gate-card">
          <h1>AI Skill Bridge Admin</h1>
          <p>${forbidden
            ? "此 Google 帳號沒有 Admin 權限。請使用 ADMIN_EMAILS 允許的帳號登入。"
            : "請使用 Google 登入後，由 server 驗證 Admin 權限。"}</p>
          ${state.error ? `<div class="admin-alert error">${escapeHtml(state.error)}</div>` : ""}
          <div class="admin-toolbar">
            <button class="admin-btn" onclick="adminSignIn()">使用 Google 登入</button>
            ${state.session ? `<button class="admin-btn secondary" onclick="adminSignOut()">登出</button>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  function renderDashboard() {
    const data = state.data.dashboard;
    if (!data) return `<div class="admin-card">載入中…</div>`;
    const metrics = `
      <div class="admin-grid metrics">
        <div class="admin-card"><h3>今日營收</h3><div class="admin-metric-value">${formatTwd(data.revenue.today)}</div></div>
        <div class="admin-card"><h3>本月營收</h3><div class="admin-metric-value">${formatTwd(data.revenue.month)}</div></div>
        <div class="admin-card"><h3>累積營收</h3><div class="admin-metric-value">${formatTwd(data.revenue.total)}</div><div class="admin-metric-sub">僅計 paid 訂單</div></div>
        <div class="admin-card"><h3>付款成功</h3><div class="admin-metric-value">${data.orders.totalPaidCount}</div><div class="admin-metric-sub">今日 ${data.orders.todayPaidCount} 筆</div></div>
      </div>
    `;
    const members = `
      <div class="admin-grid metrics" style="margin-top:18px">
        <div class="admin-card"><h3>總會員數</h3><div class="admin-metric-value">${data.members.total}</div></div>
        <div class="admin-card"><h3>單課購買</h3><div class="admin-metric-value">${data.members.singleCourseBuyers}</div></div>
        <div class="admin-card"><h3>All Access</h3><div class="admin-metric-value">${data.members.allAccess}</div></div>
        <div class="admin-card"><h3>Campus 使用者</h3><div class="admin-metric-value">${data.campus.users}</div><div class="admin-metric-sub">Active ${data.campus.activeUsers}</div></div>
      </div>
    `;
    const orders = `
      <div class="admin-card" style="margin-top:18px">
        <h3>最近 10 筆訂單</h3>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead><tr><th>時間</th><th>Email</th><th>商品</th><th>金額</th><th>狀態</th></tr></thead>
            <tbody>
              ${(data.recentOrders || []).map((order) => `
                <tr>
                  <td>${formatDate(order.createdAt)}</td>
                  <td>${escapeHtml(order.customerEmail || "—")}</td>
                  <td>${escapeHtml(order.productName)}</td>
                  <td>${formatTwd(order.amount)}</td>
                  <td>${statusBadge(order.status)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    const campus = `
      <div class="admin-card" style="margin-top:18px">
        <h3>Campus</h3>
        <p class="admin-metric-sub">${data.campus.configured ? `Active Programs ${data.campus.activePrograms}` : "Campus tables 未設定"}</p>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead><tr><th>合作學校</th><th>Active Students</th><th>狀態</th></tr></thead>
            <tbody>
              ${(data.campus.programSummaries || []).map((item) => `
                <tr>
                  <td>${escapeHtml(item.schoolName)}<br><span class="admin-metric-sub">${escapeHtml(item.programName)}</span></td>
                  <td>${item.redeemedCount}${item.maxRedemptions ? ` / ${item.maxRedemptions}` : ""}</td>
                  <td>${item.isActive ? "Active" : "Disabled"}</td>
                </tr>
              `).join("") || `<tr><td colspan="3">尚無 Campus Program</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `;
    return metrics + members + orders + campus;
  }

  function renderOrders() {
    const rows = state.data.orders?.orders || [];
    return `
      <div class="admin-card">
        <div class="admin-toolbar">
          <input id="orders-email" class="admin-input" placeholder="搜尋 Email" value="${escapeHtml(state.filters.ordersEmail)}" />
          <input id="orders-order-id" class="admin-input" placeholder="Order ID" value="${escapeHtml(state.filters.ordersOrderId)}" />
          <select id="orders-status" class="admin-select">
            <option value="">全部狀態</option>
            ${["paid", "pending", "failed", "cancelled", "refunded"].map((status) => `
              <option value="${status}" ${state.filters.ordersStatus === status ? "selected" : ""}>${status}</option>
            `).join("")}
          </select>
          <button class="admin-btn" onclick="adminApplyOrderFilters()">搜尋</button>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order ID</th><th>Email</th><th>Product</th><th>Type</th><th>Course</th>
                <th>Amount</th><th>Status</th><th>MerchantTradeNo</th><th>綠界交易編號</th><th>Created</th><th>Paid</th><th>Email Status</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((order) => `
                <tr>
                  <td>${escapeHtml(order.orderId)}</td>
                  <td>${escapeHtml(order.customerEmail || "—")}</td>
                  <td>${escapeHtml(order.productName)}</td>
                  <td>${escapeHtml(order.productType)}</td>
                  <td>${escapeHtml(order.courseId || "—")}</td>
                  <td>${formatTwd(order.amount)}</td>
                  <td>${statusBadge(order.status)}</td>
                  <td>${escapeHtml(order.merchantTradeNo)}</td>
                  <td>${formatProviderTradeNo(order.providerTradeNo)}</td>
                  <td>${formatDate(order.createdAt)}</td>
                  <td>${formatDate(order.paidAt)}</td>
                  <td>${escapeHtml(order.purchaseEmailStatus)}</td>
                </tr>
              `).join("") || `<tr><td colspan="12">沒有符合條件的訂單</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderUsers() {
    const rows = state.data.users?.users || [];
    return `
      <div class="admin-card">
        <div class="admin-toolbar">
          <input id="users-email" class="admin-input" placeholder="搜尋 Email" value="${escapeHtml(state.filters.usersEmail)}" />
          <button class="admin-btn" onclick="adminApplyUserFilters()">搜尋</button>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr><th>Email</th><th>加入日期</th><th>Plan</th><th>已購買課程</th><th>All Access</th><th>Campus</th><th>學習進度</th></tr>
            </thead>
            <tbody>
              ${rows.map((user) => `
                <tr>
                  <td>${escapeHtml(user.email || user.displayName || user.userId)}</td>
                  <td>${formatDate(user.joinedAt)}</td>
                  <td>${escapeHtml(user.plan)}</td>
                  <td>${escapeHtml((user.unlockedCourses || []).join(", ") || "—")}</td>
                  <td>${user.hasAllAccess ? "Yes" : "No"}</td>
                  <td>${(user.campusEntitlements || []).map((item) => `
                    <div>${escapeHtml(item.schoolName || "")} · ${item.isActive ? "Active" : "Expired"}</div>
                  `).join("") || "—"}</td>
                  <td>${user.progressSummary.completedLessons}/${user.progressSummary.trackedLessons}</td>
                </tr>
              `).join("") || `<tr><td colspan="7">沒有符合條件的會員</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderProducts() {
    const rows = state.data.products?.products || [];
    const meta = state.data.products || {};
    const dbReady = meta.migrationRequired !== true && meta.canEdit === true;
    const edit = state.productEdit;
    const editingProduct = edit
      ? rows.find((p) => p.productId === edit.productId)
      : null;

    return `
      <h2 class="admin-page-title">商品價格管理</h2>
      ${dbReady
        ? `<div class="admin-alert success">價格變更將套用到前台商品與訂單。</div>`
        : `<div class="admin-alert warning">價格資料暫時無法編輯。</div>`
      }
      ${state.productSaveMessage ? `<div class="admin-alert success">${escapeHtml(state.productSaveMessage)}</div>` : ""}
      <div class="admin-card">
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead><tr><th>商品名稱</th><th>Product Key</th><th>售價</th><th>原價</th><th>類型</th><th>courseId</th><th>狀態</th><th></th></tr></thead>
            <tbody>
              ${rows.map((product) => `
                <tr>
                  <td>${escapeHtml(product.nameZh)}</td>
                  <td><code>${escapeHtml(product.productId)}</code></td>
                  <td>${formatTwd(product.amount)}</td>
                  <td>${product.originalPrice != null ? formatTwd(product.originalPrice) : "—"}</td>
                  <td>${escapeHtml(product.type)}</td>
                  <td>${escapeHtml(product.courseId || "—")}</td>
                  <td>${product.active ? '<span class="admin-badge paid">啟用</span>' : '<span class="admin-badge failed">停用</span>'}</td>
                  <td>${dbReady
                    ? `<button type="button" class="admin-btn secondary admin-btn-compact" onclick="adminEditProduct(${jsStringLiteral(product.productId)})">編輯</button>`
                    : `<span class="admin-metric-sub">—</span>`
                  }</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      ${editingProduct ? `
        <div class="admin-card admin-product-edit-card">
          <h3>編輯商品：${escapeHtml(editingProduct.nameZh)}</h3>
          <form class="admin-form-grid" onsubmit="adminSaveProduct(event)">
            <label>售價（TWD 整數）
              <input class="admin-input" type="number" min="1" step="1" required
                value="${escapeHtml(edit.price)}"
                onchange="adminSetProductEditField('price', this.value)" />
            </label>
            <label>原價（劃線參考價，可留空）
              <input class="admin-input" type="number" min="1" step="1"
                value="${escapeHtml(edit.originalPrice)}"
                onchange="adminSetProductEditField('originalPrice', this.value)" />
            </label>
            <label class="admin-checkbox-label">
              <input type="checkbox" ${edit.active ? "checked" : ""}
                onchange="adminSetProductEditField('active', this.checked)" />
              啟用商品
            </label>
            <div class="admin-toolbar">
              <button type="submit" class="admin-btn">儲存</button>
              <button type="button" class="admin-btn secondary" onclick="adminCancelProductEdit()">取消</button>
            </div>
          </form>
        </div>
      ` : ""}
    `;
  }

  function renderCampus() {
    const data = state.data.campus || { programs: [], configured: false };
    const createResult = state.campusCreateResult;
    const writeDisabled = isCampusWriteDisabled();
    const disabledAttr = writeDisabled ? "disabled" : "";
    return `
      <h2 class="admin-page-title">校園合作方案管理</h2>
      ${writeDisabled ? `
        <div class="admin-alert warning">校園方案建立功能目前未啟用。</div>
      ` : ""}
      ${createResult?.campusCodeOnce ? `
        <div class="admin-code-once">
          <strong>Campus Code 只在建立時顯示一次，請立即保存。</strong>
          <code>${escapeHtml(createResult.campusCodeOnce)}</code>
          <div class="admin-metric-sub">${escapeHtml(createResult.warning || "")}</div>
        </div>
      ` : ""}
      <div class="admin-grid two">
        <div class="admin-card">
          <h3>建立 Campus Program</h3>
          <form class="admin-form-grid" onsubmit="adminSubmitCampusProgram(event)">
            <fieldset class="admin-fieldset" ${disabledAttr}>
            <label>School Name<input id="campus-school-name" class="admin-input" required ${disabledAttr} /></label>
            <label>Program Name<input id="campus-program-name" class="admin-input" required ${disabledAttr} /></label>
            <label>Access Type
              <select id="campus-access-type" class="admin-select" ${disabledAttr}>
                <option value="all-access">all-access</option>
                <option value="courses">courses</option>
              </select>
            </label>
            <div>
              <div style="font-weight:600;margin-bottom:8px">Courses（access_type=courses 時勾選）</div>
              <div class="admin-checkbox-grid">
                ${PREMIUM_COURSE_OPTIONS.map((course) => `
                  <label><input id="campus-course-${course.id}" type="checkbox" ${disabledAttr} /> ${escapeHtml(course.label)}</label>
                `).join("")}
              </div>
            </div>
            <label>Duration Days<input id="campus-duration-days" class="admin-input" type="number" min="1" value="30" ${disabledAttr} /></label>
            <label>Start Date<input id="campus-starts-at" class="admin-input" type="datetime-local" ${disabledAttr} /></label>
            <label>End Date<input id="campus-ends-at" class="admin-input" type="datetime-local" ${disabledAttr} /></label>
            <label>Max Redemptions<input id="campus-max-redemptions" class="admin-input" type="number" min="0" value="50" ${disabledAttr} /></label>
            <label>Campus Code<input id="campus-code" class="admin-input" required placeholder="THU-AI-2026" autocomplete="off" ${disabledAttr} /></label>
            <label><input id="campus-is-active" type="checkbox" checked ${disabledAttr} /> Active</label>
            <button class="admin-btn" type="submit" ${disabledAttr}>建立 Program</button>
            </fieldset>
          </form>
        </div>
        <div class="admin-card">
          <h3>Campus Programs</h3>
          ${data.configured ? `
            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead><tr><th>學校</th><th>Program</th><th>Access</th><th>已使用</th><th>期間</th><th>狀態</th><th>操作</th></tr></thead>
                <tbody>
                  ${(data.programs || []).map((program) => `
                    <tr>
                      <td>${escapeHtml(program.schoolName)}</td>
                      <td>${escapeHtml(program.programName)}</td>
                      <td>${escapeHtml(program.accessLabel)}<br><span class="admin-metric-sub">${escapeHtml((program.codes || []).map((c) => c.codeHint).join(", "))}</span></td>
                      <td>${program.redeemedCount}${program.maxRedemptions ? ` / ${program.maxRedemptions}` : ""}<br><span class="admin-metric-sub">Active ${program.activeStudents}</span></td>
                      <td>${formatDate(program.startsAt)} → ${program.endsAt ? formatDate(program.endsAt) : "—"}</td>
                      <td>${program.isActive ? "Active" : "Disabled"}</td>
                      <td>
                        <button class="admin-btn secondary" ${disabledAttr} onclick="adminToggleCampusProgram('${program.programId}', ${program.isActive ? "false" : "true"})">
                          ${program.isActive ? "停用" : "啟用"}
                        </button>
                      </td>
                    </tr>
                  `).join("") || `<tr><td colspan="7">尚無 Program</td></tr>`}
                </tbody>
              </table>
            </div>
          ` : `<p>尚無校園合作資料。</p>`}
        </div>
      </div>
    `;
  }

  function renderSystem() {
    const data = state.data.system;
    if (!data) return `<div class="admin-card">載入中…</div>`;
    return `
      <div class="admin-grid two">
        <div class="admin-card"><h3>Supabase</h3><div class="admin-metric-value">${escapeHtml(data.supabase.status)}</div></div>
        <div class="admin-card"><h3>ECPay</h3><div class="admin-metric-value">${escapeHtml(data.ecpay.configured ? data.ecpay.mode : "missing")}</div></div>
        <div class="admin-card"><h3>Purchase Email</h3><div class="admin-metric-value">${escapeHtml(data.purchaseEmail.status)}</div><div class="admin-metric-sub">mode: ${escapeHtml(data.purchaseEmail.mode)}</div></div>
        <div class="admin-card"><h3>Campus</h3><div class="admin-metric-value">${escapeHtml(data.campus.status)}</div></div>
        <div class="admin-card"><h3>Vercel</h3><div class="admin-metric-value">${escapeHtml(data.vercel.environment)}</div></div>
        <div class="admin-card"><h3>Admin Allowlist</h3><div class="admin-metric-value">${data.adminAllowlistConfigured ? "Configured" : "Missing"}</div></div>
      </div>
      <div class="admin-alert" style="margin-top:18px">System 頁只顯示安全狀態摘要，不會顯示任何 secret、token 或 HashKey。</div>
    `;
  }

  function renderContent() {
    if (state.loading && !state.data[state.page]) {
      return `<div class="admin-card">載入中…</div>`;
    }
    if (state.error && state.page !== "system") {
      return `<div class="admin-alert error">${escapeHtml(state.error)}</div>`;
    }
    if (state.page === "dashboard") return renderDashboard();
    if (state.page === "orders") return renderOrders();
    if (state.page === "users") return renderUsers();
    if (state.page === "products") return renderProducts();
    if (state.page === "campus") return renderCampus();
    if (state.page === "system") return renderSystem();
    return "";
  }

  function renderApp() {
    const root = document.getElementById("admin-app");
    if (!root) return;

    if (!state.session || state.adminAllowed !== true) {
      root.innerHTML = renderGate();
      return;
    }

    const currentNav = NAV.find((item) => item.id === state.page) || NAV[0];
    root.innerHTML = `
      <div class="admin-shell">
        <aside class="admin-sidebar">
          <div class="admin-brand">
            <h1>AI Skill Bridge Admin</h1>
            <p>Operations Dashboard</p>
          </div>
          <nav class="admin-nav">
            ${NAV.map((item) => `
              <button class="admin-nav-btn ${state.page === item.id ? "is-active" : ""}" onclick="adminSetPage('${item.id}')">
                ${item.icon} ${item.label}
              </button>
            `).join("")}
          </nav>
          <div class="admin-sidebar-footer">
            <div>${escapeHtml(state.session.user?.email || "")}</div>
            <button class="admin-btn secondary" style="margin-top:12px;width:100%" onclick="adminSignOut()">登出</button>
          </div>
        </aside>
        <main class="admin-main">
          <div class="admin-topbar">
            <h2>${currentNav.icon} ${currentNav.label}</h2>
            <div class="admin-user-chip">Admin · ${escapeHtml(state.session.user?.email || "")}</div>
          </div>
          ${renderContent()}
        </main>
      </div>
    `;
  }

  function render() {
    renderApp();
  }

  async function init() {
    if (!supabase) {
      state.error = "supabase_not_loaded";
      render();
      return;
    }

    supabase.auth.onAuthStateChange(async (event, session) => {
      state.session = session;
      if (session && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED")) {
        await verifyAdminAccess();
        if (state.adminAllowed) await loadPageData(state.page);
      } else if (!session && event === "SIGNED_OUT") {
        state.adminAllowed = null;
        state.error = "";
      }
      render();
    });

    try {
      state.session = await recoverAuthSession();
      if (state.session) {
        await verifyAdminAccess();
        if (state.adminAllowed) await loadPageData(state.page);
      } else {
        state.adminAllowed = null;
        state.error = "";
      }
    } catch (error) {
      const { data: retryData } = await supabase.auth.getSession();
      if (retryData?.session) {
        state.session = retryData.session;
        await verifyAdminAccess();
        if (state.adminAllowed) await loadPageData(state.page);
      } else {
        state.session = null;
        state.adminAllowed = null;
        state.error = error.message || "auth_init_failed";
      }
    }

    render();
  }

  async function bootstrap() {
    try {
      await loadPublicSupabaseConfig();
      await init();
    } catch (error) {
      state.error = error.message || "bootstrap_failed";
      render();
    }
  }

  bootstrap();
})();
