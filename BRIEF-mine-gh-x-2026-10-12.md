# BRIEF: Mine GitHub + X for rea.run updates (2026-10-12)

**Date:** 2026-10-12 (UTC+8)  
**Site:** ylwl1997/rea-run · https://rea.run  
**Upstream:** morluto/rea · npm `rea-agents` **6.4.0** (published 2026-10-11 UTC; pending 6.5.0 PR #1693)  
**Prior briefs:** `BRIEF-integrate-gh-x-2026-10-10.md`, `BRIEF-gh-issues-content-2026-10-10.md`, `BRIEF-showcase-gh-projects-2026-10-10.md`  
**This pass:** net-new only since 2026-10-10 catalog / integrate brief. **Do not edit the live site from this file** — PM backlog only.

### Hard rules (unchanged)
- Lawful public signals only: own / authorized / open / clean-room / historical reconstructions / CTF-with-writeup rights.
- **No** crack, DRM bypass, unauthorized commercial RE how-tos.
- Footnote GitHub/X sources; **no main CTA** to morluto.github.io or rea.tools.
- Prefer Evidence / doctor / setup hygiene narratives over viral “clone any app” hype.
- Bilingual pages when shipping; sitemap + discoverable from docs/FAQ/showcase.

---

## 0. Already on site — do not empty-shell again

### Showcase (data + prior integrate)
Shipped GH showcase IDs include prior Top10 walls **plus** Oct-10 integrate items already in `showcaseGhProjects.ts`:  
`rea-playbook`, `dsh-mcp-rea`, `gunzrs-rea`, `replicate-macos-app`, `wuxiang-anti-rea-eval`, plus earlier catalog (openbsd-netcat, openbattlefield2, rea-jev, FR guide, RayCodes, awesomes, homebrew, agentskill-exchange, madtreasures-workspace, fedora notes, nix, th08, touhou factory, etc.).

### FAQ / docs / blogs already live
`/docs/install/`, `/docs/mcp-clients/`, `/docs/windows-ghidra/`, `/docs/ghidra-large-binaries/`, `/docs/linux-fedora/`, `/faq/legal-boundary/`, `/faq/what-can-i-analyze/`, `/faq/mcp-schema-size/`, `/faq/mcp-domain-split/`, `/faq/tmpdir-dot-path/`, `/faq/electron-asar-timeouts/`, blogs `what-is-rea-*`, `ghidra-mcp-with-rea`, `agent-reverse-engineering-mcp`, `community-week-rea-demos`, `rea-agent-security-posture`.

---

## 1. Search counts (this pass)

| Source | Reviewed | Net-new actionable | Noise / exclude |
|--------|--------:|-------------------:|-----------------|
| morluto/rea Issues (created ≥2026-10-10) | **185** hit / sampled **30** | **3** FAQ deepeners (#1994 macOS Ghidra; #1852 static-lane guidance; ADB/Android hygiene) | Most PRs are upstream fix/feature churn |
| Discussions (updated) | **15** listed | **3** (#1998 Linux benches; #1958 token workflows; #2000 HTTP/3 lab idea) | #1989 HP printers; closed hype #1928; known legal #693/#1115/#1343 only as compliance signals |
| Releases | **10** tags | **1** major content driver: **6.4.0** (Android ADB + JEB + compact schema + large Evidence views) | Older 6.x already partially reflected |
| GitHub repo search (REA / rea-agents / created≥10-10) | **~40** | **6** strong: rea-lab, rea-investigate, rea-ida-adapter, fathom, CleanRoom, rea-research | Empty forks/mirrors; Clash Royale commercial+assets; SEO scraper “REA Reverse Engineer Anything” forks |
| X (`x` namespace, ~2026-10-09→12) | **~35** unique across 2 queries | **8** cite-worthy (setup FAQ, 6.4 ADB, “doesn’t ship decompiler”, legal/IP caution) | Crypto `$REA` spam; pure star-count hype; “clone trading apps” FUD |

**Upstream pulse:** ~105k★, pushed 2026-10-12; open_issues ~159; README now lists Android ADB / JEB / WASM / EVM / firmware matrix + Node 22.19+/24.11+/26+.

---

## 2. Top candidates (P0 / P1) — executable backlog

### P0-1. Showcase — `pablodiazjorge/rea-lab` (Windows REA×Ghidra lab)
- **Priority:** P0  
- **Type:** showcase (+ optional deepen `/docs/windows-ghidra/`)  
- **Source:** https://github.com/pablodiazjorge/rea-lab (created 2026-10-11; MIT code / CC-BY text; pins rea **6.4.0** + Ghidra 12.1.4; Spanish README)  
- **Do:** New showcase page: Windows verification narrative (`rea doctor --provider ghidra` green), portable per-project MCP registration, seeded challenges, writeups (WinHelloCPP / Wallace / own XOR), benchmark harness intent. Link existing `/docs/windows-ghidra/` and Codespaces lab if relevant.  
- **Route:** `/showcase/rea-lab/` · `/zh/showcase/rea-lab/` · slug `rea-lab`  
- **Compliance:** Targets limited to Ghidra exercises, own builds, allowed crackmes/CTF — mirror ADR target policy; static-first; no commercial/employer binaries. Footnote GH only.

### P0-2. Docs/FAQ — REA **6.4.0** “what changed for operators”
- **Priority:** P0  
- **Type:** short guide or blog + FAQ tip boxes  
- **Source:** https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0  
- **Do:** Operator-facing delta (not changelog dump):
  1. Android **ADB device lane** + Apktool resources (device inspect / split-APK / logs / screenshots / lifecycle) — update `/faq/what-can-i-analyze/` matrix row + new `/docs/android-adb/` or deepen Android section on install.
  2. **JEB** as caller-started MCP provider — note BYO JEB.
  3. Official **`REA_MCP_INPUT_SCHEMA_PROFILE=compact`** for Moonshot/Kimi — **upgrade** `/faq/mcp-schema-size/` and cross-link `/faq/mcp-domain-split/` (community proxy still valid; compact is upstream first-party).
  4. Large analyses: summary / selected views for Evidence, JS graphs, dossiers — tip under `/faq/electron-asar-timeouts/` or ghidra-large-binaries.
  5. Setup clients: Pi / Hermes / Qwen Code — footnote on `/docs/mcp-clients/`.
- **Route:** `/blog/rea-agents-6-4-0/` (or `/docs/whats-new-6-4/`) + FAQ patches above  
- **Compliance:** Emphasize ADB = **your** device/emulator; no “extract any store app DRM” framing. JEB = licensed BYO.

### P0-3. FAQ/docs — macOS Ghidra decompiler missing (12.1.4)
- **Priority:** P0 (install blockers)  
- **Type:** FAQ short page or section under Ghidra docs  
- **Source:** https://github.com/morluto/rea/issues/1994 (@EDMND-SRC)  
- **Do:** Document: Ghidra 12.1.4 PUBLIC ships `linux_x86_64` + `win_x86_64` decompilers only → macOS `doctor` reports `native_decompiler` missing; REA refuses to auto-build; community recipe `make ghidra_opt` then copy to `os/mac_x86_64/decompile`. Pair with #1992 (launch diagnostics).  
- **Route:** `/faq/macos-ghidra-decompiler/` or section on `/docs/windows-ghidra/` sibling `/docs/macos-ghidra/`  
- **Compliance:** Build-your-own toolchain only; no piracy of proprietary plugins.

### P0-4. Showcase / Agent 专区 — `Devaretanmay/rea-investigate`
- **Priority:** P0  
- **Type:** showcase (skill) + agents hub card  
- **Source:** https://github.com/Devaretanmay/rea-investigate (MIT; created 2026-10-11; 12/12 tests; Plan→Trace→Verify→Report; SHA-256 ledger; Claude/Codex/Antigravity)  
- **Do:** Showcase the **13-capability investigation skill** and `case.py` strict gates; contrast with already-shipped `rea-jev` / `replicate-macos-app` (ledger culture). Optional Agents page blurb “structured investigation skill”.  
- **Route:** `/showcase/rea-investigate/` · slug `rea-investigate` · link `/agents/` if present  
- **Compliance:** README ethics already good — amplify own/authorized-only; no secrets exfil; process capture needs sandbox note.

### P0-5. Blog / deepen Fedora docs — Linux startup benchmarks (#1998)
- **Priority:** P0  
- **Type:** blog or `/docs/linux-fedora/` appendix  
- **Source:** https://github.com/morluto/rea/discussions/1998 (@CassieFox23) — Node 22/24/26 tool-list times for 6.3.0 / 6.4.0 / main; 170 tools vs 139; first-job timings (browser/JS/Android/Ghidra); open-source fixtures (Stretchly, Coffee APK, own C)  
- **Do:** Publish a **reproducible performance snapshot** page: Node version choice, “6.4 lists more tools → slower list but Android scan fixed”, main-branch startup PR #1691 caveat, methodology fold. Cross-link existing Fedora notes showcase.  
- **Route:** `/blog/rea-linux-startup-benchmarks/` or deepen `/docs/linux-fedora/#startup`  
- **Compliance:** Cite discussion; use only OSS fixtures named there; no commercial binaries.

### P1-6. FAQ deepen — token waste / right-sized Evidence (#1958)
- **Priority:** P1  
- **Type:** FAQ tip box + optional blog  
- **Source:** https://github.com/morluto/rea/discussions/1958 (@jaelliot) — bounded queries, retain Evidence, avoid re-analyzing, “tokens per verified finding”  
- **Do:** Practical checklist: prefer summaries/selected views (6.4), compact schema / domain split, keep raw dumps out of model context until needed, reuse sessions/snapshots. Point to `#1958` + mcp FAQs.  
- **Route:** `/faq/token-efficient-rea/` or tip boxes on `/faq/mcp-schema-size/` + `/blog/community-week-rea-demos/` update  
- **Compliance:** Efficiency ≠ stripping limitations/unknowns; never encourage fabricating summaries.

### P1-7. Showcase — `akbar-npj/rea-ida-adapter` (IDA Free bridge)
- **Priority:** P1  
- **Type:** showcase (wrapper)  
- **Source:** https://github.com/akbar-npj/rea-ida-adapter (stdlib Python; maps REA legacy ida-pro-mcp 1.4 profile ↔ ida-free-mcp Streamable HTTP)  
- **Do:** Document who needs it (IDA Free 9.x users), registration via `REA_IDA_MCP_CONFIG`, honest limitations (string list via regex, derived callers, sha256 unavailable cases).  
- **Route:** `/showcase/rea-ida-adapter/` · slug `rea-ida-adapter`  
- **Compliance:** BYO IDA Free license; adapter is protocol glue only — no crack of IDA Pro.

### P1-8. Compare / blog — clean-room ports (`fathom` + `CleanRoom`)
- **Priority:** P1  
- **Type:** compare page or dual showcase + blog  
- **Sources:**
  - https://github.com/qompassai/fathom — Rust MCP/A2A port; evidence envelopes; fail-closed policy; AGPL|Apache; SPEC-led; **no upstream code**
  - https://github.com/Sage-is/CleanRoom — Python 3.12 reimpl; 12 verbs; AGPL; pre-release  
- **Do:** Position as **ecosystem / supply-chain alternatives**, not replacements to promote over REA. Table: language, license, maturity, Evidence model, engines. Useful for `/compare/` and Agent readers evaluating forks.  
- **Route:** `/compare/rea-cleanroom-ports/` or showcase slugs `fathom-rea-port`, `cleanroom-rea`  
- **Compliance:** Credit morluto/rea MIT NOTICE; do not imply affiliation; AGPL copyleft callout for redistributors.

### P1-9. Blog source — `ringozzt/rea-research` (CN deep survey)
- **Priority:** P1  
- **Type:** blog rewrite / Life Process / Agent 专区 “how to evaluate REA”  
- **Source:** https://github.com/ringozzt/rea-research (2026-10-11; interactive report.html + mindmap; primary vs secondary sourcing; npm vs star gap; “not a sandbox”; DX-Ball granularity limits)  
- **Do:** Rewrite **insights** into site voice: Evidence contract, local≠private, star≠install, dual-use caution. Use as citation for deepening `/compliance/` and security posture blog — do **not** paste wholesale; drop unverified media claims.  
- **Route:** `/blog/evaluating-rea-claims/` · footnote research repo  
- **Compliance:** Avoid amplifying bank-attack sensationalism beyond “agent lowers barrier → authorization still required”; keep legal-boundary FAQ primary.

### P1-10. FAQ tip — format refusal vs other static lanes (#1852)
- **Priority:** P1  
- **Type:** FAQ bullet under `/faq/what-can-i-analyze/`  
- **Source:** https://github.com/morluto/rea/issues/1852 (closed completed) — after unsupported native admission, point to real next operations (e.g. WASM lane) without inventing providers  
- **Do:** One short tip: “native reject ≠ nothing left”; check doctor capabilities / dedicated WASM/firmware/JS lanes.  
- **Route:** patch `/faq/what-can-i-analyze/` (+ zh)  
- **Compliance:** No “edit headers to force admission” advice.

### P1-11. X-driven community FAQ roundup (new angles vs Oct-10 week blog)
- **Priority:** P1  
- **Type:** FAQ tip boxes + optional blog refresh  
- **Sources (author · link · use):**
  | Author | Link | Angle for site |
  |--------|------|----------------|
  | @Z3nlyte | https://x.com/Z3nlyte/status/2109420973027889232 | 100k★ + **v6.4 ADB** — cite as news hook for P0-2, not star worship |
  | @cai_smart | https://x.com/cai_smart/status/2108370877448691754 | “Doesn’t ship a decompiler; wires Hopper/Ghidra you already have” — FAQ mythbust |
  | @Thomas3cnl | https://x.com/Thomas3cnl/status/2109195402830573847 · https://x.com/Thomas3cnl/status/2108859787752661206 | Real user Q: does `setup` install Hopper/Ghidra/IDA? — answer in `/docs/install/` FAQ |
  | @lanzhihong | https://x.com/lanzhihong/status/2109192299250884845 | Two-line Electron/JS path — deepen examples, still authorize own ASAR |
  | @linuxuser1996 | https://x.com/linuxuser1996/status/2108492159720599656 | Calm EN explainer (local MCP, MIT) — tone model for blog |
  | @0xLiquidation | https://x.com/0xLiquidation/status/2109440974858453284 | Server-side / closed-repo pushback — compliance + “client-only surfaces” FAQ |
  | @sharesfromhmf | https://x.com/sharesfromhmf/status/2109104155256348848 | “Don’t fully trust AI conclusions” — Evidence/limitations tip |
  | @milonspace | https://x.com/milonspace/status/2109422629161763064 | Capability list for what-can-i-analyze refresh |
- **Do:** New FAQ “Does setup install Ghidra/Hopper/IDA?” (setup may offer Hopper with approval; Ghidra/IDA = existing installs). Refresh community blog with **6.4 ADB + mythbust**, link legal-boundary.  
- **Route:** `/faq/setup-vs-providers/` · update `/blog/community-week-rea-demos/`  
- **Compliance:** Reframe any “read competitor pricing/trading models” X FUD into authorized/own-target only; **skip** crypto `$REA` posts (e.g. @Dmoneysme) entirely — README already disclaims tokens.

### P1-12. Optional Ideas watch — HTTP/3 capture lab (#2000 / PR #1997)
- **Priority:** P1 (watch / defer page until merged)  
- **Type:** future docs footnote under network/capture  
- **Source:** https://github.com/morluto/rea/discussions/2000 · PR https://github.com/morluto/rea/pull/1997  
- **Do:** When lab lands, add “optional Linux MITM verification” note to browser/capture docs — not a showcase until public fixtures exist.  
- **Route:** backlog only  
- **Compliance:** Lab traffic only; no teaching to intercept third-party production TLS without authorization.

---

## 3. Explicit excludes (this pass)

| Item | Why |
|------|-----|
| https://github.com/aboufama/clash-royale-research | Commercial game + original APK/assets in private tree; exact-engine RE — **out of compliance** for showcase |
| Empty `*/rea` mirrors & SEO forks (saigaai3/rea, ReverseEngineerAnything/REA, etc.) | No unique teaching value |
| Discussions #693 / #1115 / #1343 / #1989 | Legal-boundary signals or off-topic; no how-to |
| X crypto `$REA` / “clone trading terminals” FUD | Token spam or unauthorized commercial framing |
| henryli777 pentest-playbook style (if resurfaces) | Dual-use optics — keep deferred |

---

## 4. Suggested ship order for PM

1. **P0-2** FAQ/docs patches for 6.4.0 (compact schema + what-can-i-analyze Android/ADB) — highest retention, small surface.  
2. **P0-3** macOS Ghidra FAQ — unblock Mac users.  
3. **P0-1** rea-lab showcase — strongest net-new Windows story.  
4. **P0-4** rea-investigate showcase — Agent 专区 skill narrative.  
5. **P0-5** Linux benchmark blog — credibility / deepen Fedora.  
6. **P1-11** setup-vs-providers FAQ (answers live X questions).  
7. **P1-6 / P1-10** token + static-lane tips.  
8. **P1-7 / P1-8 / P1-9** IDA adapter + clean-room compare + research rewrite.  
9. **P1-12** watch HTTP/3.

**Estimate:** 5 P0 pages/patches + 7 P1 = **12** actionable items (within 5–12 success band if PM cuts P1-12).

---

## 5. Acceptance for implementers (when PM greenlights)

- New URLs listed (EN+ZH), in sitemap, linked from showcase/FAQ/docs nav.  
- No main CTA to rea.tools / morluto.github.io.  
- Every showcase footnotes source GH; X cites include author handle + status URL.  
- Compliance blurb on Android ADB, IDA adapter, clean-room ports, and any game-adjacent content.  
- Do **not** ship from this brief without a separate implement task.

---

## 6. Quick source index

| Kind | URL |
|------|-----|
| Upstream repo | https://github.com/morluto/rea |
| Release 6.4.0 | https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0 |
| D#1998 benches | https://github.com/morluto/rea/discussions/1998 |
| D#1958 tokens | https://github.com/morluto/rea/discussions/1958 |
| #1994 macOS Ghidra | https://github.com/morluto/rea/issues/1994 |
| #1852 static lanes | https://github.com/morluto/rea/issues/1852 |
| rea-lab | https://github.com/pablodiazjorge/rea-lab |
| rea-investigate | https://github.com/Devaretanmay/rea-investigate |
| rea-ida-adapter | https://github.com/akbar-npj/rea-ida-adapter |
| fathom | https://github.com/qompassai/fathom |
| CleanRoom | https://github.com/Sage-is/CleanRoom |
| rea-research | https://github.com/ringozzt/rea-research |
