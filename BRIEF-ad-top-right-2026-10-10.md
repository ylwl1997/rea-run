# Brief: rea.run — Adsterra Social Bar only (top-right / corner)

**Date:** 2026-10-10 (UTC+8)  
**Domain:** `rea.run`  
**Repo:** `ylwl1997/rea-run` (local `/workspace/rea-run`)  
**Stack:** Astro → Cloudflare Pages (`rea-run` / `rea-run.pages.dev`)  
**Owner intent:** 「上广告，只上右上角的那个广告」— **one** floating corner unit; no other ad slots.  
**Implementer:** **代码高手** (code + deploy). Publisher account / new placement creation may need **Human / Adsterra UI** first (see blocker).

---

## 0. What “右上角那个广告” is on the portfolio

Across live sister sites, the **single floating corner unit** is **Adsterra Social Bar** (friendly / dismissible overlay). It is **not** the in-flow Native Banner, not 300×250 / 728×90 iframe banners, and not Smartlink / Popunder.

| Site | Live / source Social Bar | Notes |
|------|--------------------------|--------|
| **noatmark.com** | `https://bauval.org/14/c01c68b2dee526a15570b4eb8e50fc12` | Comment: “Adsterra Social Bar (friendly)”; end of footer / before `</body>` — `/workspace/seo-fix/noatmark/templates/footer.html` |
| **dshbase.com** | `https://bauval.org/14/3a79b35d5f36aa5eb44226ccad7c8918` | “friendly, dismissible”; end of `Base.astro` body — also `AdBanner` `variant="social"` |
| **dotsbase.com** | `https://pl31581586.profitableratecpmnetwork.com/41/6d/4c/416d4c09e6531eaef7b18eaa72eaa484.js` | Alias `dotsbase-social-bar`, placement **ID 31481087**, key `416d4c09e6531eaef7b18eaa72eaa484` — `/workspace/dotsbase-work/dotsbase/src/components/ads/AdBanner.astro` |
| **play38-0-0.com** | *(no Social Bar on live homepage)* | Uses Native + 728×90 footer banner only — **not** the corner pattern |
| **rea.run** | **none** | Live HTML has no Adsterra / `bauval` / `invoke.js` / `atOptions` |

**Do not reuse another domain’s Social Bar script on rea.run.** Adsterra binds placements to domains; copying noatmark/dshbase/dotsbase keys will mis-attribute or break serving.

---

## 1. Publisher + credentials (names only)

| Item | Value / path |
|------|----------------|
| **Network** | **Adsterra** (Publisher) |
| **Unit** | **Social Bar** only |
| **API secret name** | `ADSTERRA_API_TOKEN` |
| **Where the secret lives** | Box card secrets: `/home/box/agent-data/box-secrets.json` → `card.ADSTERRA_API_TOKEN`; seo-dash Worker: `npx wrangler secret put ADSTERRA_API_TOKEN` (documented in `/workspace/seo-dash/README.md`). Local `/workspace/seo-dash/.dev.vars` currently has **no** Adsterra key. |
| **API base** | `https://api3.adsterratools.com/publisher/` header `X-API-Key` |
| **Page snippet** | Comes from Adsterra UI **Get code** for the new Social Bar — **not** from `ADSTERRA_API_TOKEN` |

**Audited 2026-10-10 via Publisher API `domains.json`:** account has **12** domains (drawstem, strandsgame, brandaivisibility, retatrutidecalc, wslcontainers, geodrawer, play38-0-0, playsaladbowl, noatmark, dshbase, dotsbase, + smart-link). **`rea.run` is absent.**  
Social Bar placements exist on other domains (e.g. dotsbase `31481087` / alias `dotsbase-social-bar`); **none for rea.run**.

---

## 2. Blocker (must clear before merge)

1. **[Human / Adsterra UI]** Add website **`rea.run`** (and `www.rea.run` if the UI asks; live apex is canonical).  
2. **[Human / Adsterra UI]** Create **one** placement: **Social Bar** (friendly / dismissible if offered). Suggested alias: `rea-run-social-bar`.  
3. **[Human]** Copy the **exact** embed snippet (script `src=…`) into this brief or a one-line env note for 代码高手.  
4. Optional: confirm domain approval / anti-adblock hosts if Adsterra shows a different CDN host than `bauval.org` / `profitableratecpmnetwork.com` (both appear on sister sites).

Until step 3 exists, **snippet is not ready to ship** — code can still scaffold a component with a clear `TODO` / prop, but **do not invent a key**.

---

## 3. Placement in rea-run layout (do not break nav)

**File:** `src/layouts/BaseLayout.astro`

**Current header (leave alone):**

- `<header class="topbar">` … brand · `NAV` · Compliance chip · lang badge … `</header>`
- `.topbar` uses `z-index: 50` in `src/styles/global.css`

**Inject Social Bar as sister sites do — end of `<body>`, after `<footer>`, before closing `</body>`** (next to existing `<script src="/scripts/demos.js" defer></script>`).

- Social Bar is a **fixed overlay** painted by Adsterra JS; it is **not** an element inside the topbar flex row.  
- **Do not** put the script inside `<header>`, inside `<nav>`, or as a flex child of the topbar — that risks layout shift / broken lang switch.  
- **Do not** reserve a permanent 300×250 hole in the header.

Suggested pattern (mirror dotsbase / dshbase):

```astro
---
// optional: import AdSocialBar from '../components/ads/AdSocialBar.astro';
---
    <footer>…</footer>
    <script src="/scripts/demos.js" defer></script>
    <!-- Adsterra Social Bar ONLY — floating corner; do not add other units -->
    <script is:inline data-cfasync="false" src="PASTE_REA_RUN_SOCIAL_BAR_SRC"></script>
  </body>
</html>
```

Or a tiny component `src/components/ads/AdSocialBar.astro` that only renders the Social Bar script (no `native` / `banner` variants).

---

## 4. Exact snippet template (fill after Adsterra create)

Prefer the same shape as live noatmark / dshbase:

```html
<!-- Adsterra Social Bar (friendly) — sitewide; only ad on rea.run -->
<script data-cfasync="false" src="https://HOST/.../SOCIAL_BAR_KEY_OR_PATH"></script>
```

dotsbase-style alternate (also valid if Adsterra issues this host):

```html
<script is:inline src="https://plXXXXX.profitableratecpmnetwork.com/../KEY.js"></script>
```

**Paste real values here when available:**

| Field | Value |
|-------|--------|
| Adsterra domain id | _(TBD)_ |
| Placement id / alias | _(TBD — e.g. rea-run-social-bar)_ |
| Script `src` | _(TBD — full URL)_ |
| Key / hash in path | _(TBD)_ |

Reference-only (other sites — **do not paste into rea.run**):

- noatmark Social Bar: `bauval.org/14/c01c68b2dee526a15570b4eb8e50fc12`
- dshbase Social Bar: `bauval.org/14/3a79b35d5f36aa5eb44226ccad7c8918`
- dotsbase Social Bar: key `416d4c09e6531eaef7b18eaa72eaa484` / placement `31481087`

---

## 5. Explicit do-not-add list

For rea.run **now**, implement **only** Social Bar. Do **not** add:

- Native Banner (`container-*` + `invoke.js`)
- Banner 300×250 / 728×90 / 320×50 (`atOptions` + `highrevenueformat` / `highperformanceformat`)
- Popunder
- Smartlink (dotsbase comments mark smartlink as backup — **DO NOT embed**)
- AdSense / other networks
- Multiple Social Bar scripts

If a future brief adds in-content banners, that is a separate decision.

---

## 6. Implementation checklist (代码高手)

1. Wait for / receive rea.run Social Bar `src` from §2–§4.  
2. Add script (or `AdSocialBar.astro`) in `BaseLayout.astro` **end of body only**.  
3. Keep `is:inline` + `data-cfasync="false"` like dshbase/noatmark so CF Rocket Loader does not break the tag.  
4. No changes to topbar markup or NAV.  
5. Optional privacy/compliance note later (sister sites mention Adsterra in privacy); **out of scope** unless product asks — compliance page already exists at `/compliance/`.  
6. **Deploy:** commit → push `ylwl1997/rea-run` → CF Pages rebuild (or `npm run build` + `npx wrangler pages deploy dist --project-name=rea-run` / `./scripts/deploy.sh`). Confirm on **https://rea.run/** not only `*.pages.dev`.  
7. **Accept:** View-source shows **exactly one** Adsterra Social Bar script; no `atOptions`, no native container, no second ad network; topbar lang/Compliance still clickable; Social Bar appears as floating corner (position is network-controlled; typically corner / dismissible).

---

## 7. Risk note (informational)

seo-expert notes (2026-10-08): dshbase Social Bar CTR was unusually high; user previously chose to **keep** that unit. Still: only one unit on rea.run, no popunder, and do not click own ads. No change requested to other sites in this brief.

---

## 8. Status snapshot

| Question | Answer |
|----------|--------|
| Network | **Adsterra** |
| Unit | **Social Bar** (= portfolio “右上角 / corner” ad) |
| Snippet ready for rea.run? | **No** — domain + placement missing; need UI create + paste |
| Brief path | `/workspace/rea-run/BRIEF-ad-top-right-2026-10-10.md` |
| Blocker | Add `rea.run` in Adsterra + create Social Bar; provide script URL |
| Secret for API (not page) | `ADSTERRA_API_TOKEN` (box-secrets card / seo-dash Worker) |
| Deploy | 代码高手 → CF Pages |



## READY SNIPPET (2026-10-10)
```html
<script data-cfasync="false" src="https://bauval.org/14/99b962e54115827aad2e2528fdb8c8de"></script>
```
Placement ID: 31654515 · Website ID: 6112328 · Status: Active/Approved
