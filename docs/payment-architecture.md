# Payment Architecture — Phase 5A + 5B + 5C-1 (ECPay Stage / Production-ready)

## Phase 5A

```
productId → POST /api/orders/create → pending order (server price)
```

## Phase 5B / 5C-1 (ECPay AioCheckOut)

```
pending order
  → POST /api/payments/ecpay/checkout
  → Browser POSTs form to ECPay AioCheckOut/V5 (stage or production by ECPAY_MODE)
  → ECPay POST /api/payments/ecpay/callback   ← payment authority (ReturnURL)
  → verify CheckMacValue + MerchantID + TradeAmt
  → status pending → paid (idempotent)
  → grant entitlement
  → Browser OrderResultURL POST /api/payments/ecpay/result → 303 GET SPA
  → SPA only re-fetches GET /api/orders/:id (not payment authority)
```

`OrderResultURL` must NOT share the callback endpoint and must NOT POST to the static homepage (405).

## ECPAY_MODE (server only)

Allowed values only:

- `stage` → `https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5`
- `production` → `https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5`

(Official: https://developers.ecpay.com.tw/2862/)

Missing / typo / any other value → `payment_not_configured` (never fallback to production).

Current runtime should remain `ECPAY_MODE=stage` until credentials + go-live checklist are ready.

## CheckMacValue (official)

1. Exclude `CheckMacValue`
2. Sort parameter keys A→Z
3. Build `HashKey=...&k=v&...&HashIV=...`
4. ECPay/.NET URL-encode + lowercase
5. SHA256 → uppercase

HashKey / HashIV never leave the server. Never log them.

## APP_BASE_URL / callback reachability

ECPay cannot call:

- `http://localhost`
- `http://127.0.0.1`

`APP_BASE_URL` must be public `https://...`

Current Vercel project alias (`*.vercel.app`) is behind **Deployment Protection / SSO**
(HTTP 302 → `vercel.com/sso-api`). ECPay callbacks would be blocked.

### Recommended simplest safe options (no bypass token)

1. **Preferred for Stage test:** In Vercel Project Settings → Deployment Protection,
   temporarily set Production (or a dedicated Preview) to **Standard Protection off /
   publicly accessible**, deploy Phase 5B there, set:
   `APP_BASE_URL=https://<that-public-host>`
2. **Or** attach a **custom domain** that is not SSO-gated, and use that as `APP_BASE_URL`.
3. **Local-only alternative:** public HTTPS tunnel (e.g. Cloudflare Tunnel / ngrok) to
   `vercel dev`, use the tunnel HTTPS origin as `APP_BASE_URL`.

Do not use Vercel protection bypass tokens for ECPay.

## Entitlement

Only after verified paid callback:

- course → append to `profiles.unlocked_courses`
- all-access → `profiles.plan = premium`
- pending / failed / cancelled → never unlock
- Creator / Queen unchanged (email roles)

Requires manual SQL:

`supabase/migrations/20250826120000_profiles_unlocked_courses.sql`

## Stage credentials

Put official ECPay **測試特店** values only in Vercel env / local `.env.local`
(never commit, never paste into chat):

- https://www.ecpay.com.tw/ （廠商後台／測試特店）
- https://developers.ecpay.com.tw/ （測試環境說明）
