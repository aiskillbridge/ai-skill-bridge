# Payment Architecture — Phase 5A

## Current scope (5A)

```
Browser (productId only)
  → POST /api/orders/create
  → Verify Supabase access token (server)
  → Server Product Catalog (authoritative price)
  → INSERT orders (status: pending)
  → Return order summary
```

**Stopped at pending order.** No ECPay, no auto-unlock, no entitlement changes.

## Future scope (5B+)

```
Pending order
  → ECPay checkout (server-generated form / redirect)
  → ECPay callback (server-only, CheckMacValue verify)
  → UPDATE orders.status = paid
  → Grant entitlement (profiles / entitlements table)
  → Client reloads access from Supabase
```

## Security principles

1. Frontend is not trusted — browser sends `productId` only.
2. Price comes from `api/_lib/productCatalog.js`.
3. `SUPABASE_SERVICE_ROLE_KEY` is server-only (Vercel env).
4. Payment success never stored in localStorage.
5. `hasCourseAccess()` unchanged until entitlement phase is verified.

## Environment

Set on Vercel (not in browser):

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Future: `ECPAY_MERCHANT_ID`, `ECPAY_HASH_KEY`, `ECPAY_HASH_IV`

## Local API testing

Plain static servers (e.g. Live Server on :5500) do **not** serve `/api/*`.

Use:

```bash
npm install
vercel dev
```

Then open the app URL shown by `vercel dev` and use the Creator DEV test panel on localhost.

## Creator / Queen

Special accounts keep `allAccess` via `SPECIAL_ACCOUNT_ROLES` in app.js — separate from payment orders.
