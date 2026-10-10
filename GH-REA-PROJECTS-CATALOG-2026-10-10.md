# GitHub projects related to morluto/rea — catalog for rea.run/showcase/

**Date:** 2026-10-10 (UTC+8 / PT label: UTC+8)  
**Upstream:** [morluto/rea](https://github.com/morluto/rea) · npm `rea-agents@6.3.0` · ~56k★ · MIT · TypeScript  
**Method:** `gh` REST/GraphQL + code/repo search for `rea-agents`, `morluto/rea`, `REA_ANALYSIS_PROVIDER`, `npx rea-agents`, README Showcases, Discussion #1406/#1435, topic `rea-showcase`, homebrew/nix packaging, DSH/awesome indexes. Code-search rate-limited mid-pass; repo/API follow-ups completed.  
**Existing showcase IDs (do not duplicate empty shells):** `aegis-totp`, `downunderctf`, `dx-ball`, `th04`, `notes-first-investigation`, `windows-calculator-percent`, `discussion-1406-blackbox-audit`.  
**Out of scope as showcase copy targets:** morluto.github.io/rea, rea.tools (upstream docs sites).

---

## Executive summary

| Metric | Count |
|--------|------:|
| Distinct public candidates reviewed (unique value or clear REA mention) | **48** |
| `include_recommend: yes` | **12** |
| `include_recommend: maybe` | **14** |
| `include_recommend: no` | **22** (+ ~10k empty forks not individually listed) |
| Already on rea.run showcase (GH project still catalogued) | 3 project links (`dx-ball`, `th04`, Discussion #1406) |
| Top recommended for **immediate new** showcase pages | **15** (see below; excludes empty-shell ID reuse) |

**Biggest exclude buckets:** empty/mirror forks of `morluto/rea`; trending/hot-hub archives that only name the repo; DSH plugin indexes that list REA as one plugin among thousands without original REA case content; red-team/APT frameworks that wrap REA; unauthorized commercial crack framing.

---

## Top 15 recommended for immediate showcase

Priority order for new (or deepen) bilingual plugin-directory pages. Slugs avoid existing IDs.

| # | Suggested slug | Project | Relation | Why now |
|--:|----------------|---------|----------|---------|
| 1 | `openbsd-netcat-rea` | [NullLabTests/OpenBSD_netcat_REA](https://github.com/NullLabTests/OpenBSD_netcat_REA) | case-study | Gold-standard Evidence-first writeup: REA + Ghidra + pwntools on open Ubuntu/OpenBSD `nc`; artifacts in-repo; MIT; reproduce commands. |
| 2 | `openbattlefield2` | [Moxnatiy/OpenBattlefield2](https://github.com/Moxnatiy/OpenBattlefield2) | case-study / depends | Clean-room BF2 Refractor 2 engine; ships `tools/rea.sh` (`npx rea-agents@4.1.0` + Ghidra snapshots); own-install content only; MIT. |
| 3 | `rea-jev` | [juan-viox/rea-jev](https://github.com/juan-viox/rea-jev) | wrapper | Claude Code plugin: REA MCP + Jev System-1 hooks (route/gate/evidence/stop); MIT; installable marketplace. |
| 4 | `fr-guide-valorisa` | [valorisa/Reverse-Engineer-Anything](https://github.com/valorisa/Reverse-Engineer-Anything) | writeup / docs | Unofficial French pedagogical guide + legal RE framing; points at morluto/rea; MIT. |
| 5 | `raycodes-browser-ui` | [47thtechcorner/RayCodes_Rea-AI-Agent-Setup](https://github.com/47thtechcorner/RayCodes_Rea-AI-Agent-Setup) | demo | Passive CDP / browser UI reconstruction demo + YouTube; public SaaS layout cloning framing—keep compliance tone. |
| 6 | `awesome-ai-reverse` | [DiscoverBox/awesome-ai-reverse](https://github.com/DiscoverBox/awesome-ai-reverse) | writeup / index | Bilingual AI-RE awesome list; REA featured in “local agent” picks; authorized-use banner. |
| 7 | `morluto-awesome-re` | [morluto/awesome-reverse-engineering](https://github.com/morluto/awesome-reverse-engineering) | writeup / index | Upstream companion awesome-list featuring REA; CC0. |
| 8 | `homebrew-rea-agents` | [moonfruit/homebrew-tap](https://github.com/moonfruit/homebrew-tap) (`Formula/rea-agents.rb`) | wrapper / packaging | Community Homebrew formula for `rea-agents` 6.3.0; install story for macOS/Linux brew users. |
| 9 | `agentskill-exchange-rea` | [agentskillexchange/skills](https://github.com/agentskillexchange/skills) | wrapper / catalog | Curated skill catalog entry `reverse-engineer-apps-and-binaries-with-rea`. |
| 10 | `madtreasures-workspace` | [MADTreasures/reverse](https://github.com/MADTreasures/reverse) | demo / depends | Repo template with `.mcp.json` pinning `rea-agents` + skill; own MAD Studio Electron security check — **do not** showcase FL Studio as a target. |
| 11 | `fedora-rea-notes` | [Discussion #1435](https://github.com/morluto/rea/discussions/1435) (+ site docs) | case-study | Fedora Node 22/24/26 timings, Ghidra/Temurin, Chromium/keyring — pairs with existing linux-fedora docs; authorized BAR launcher MIT/Flathub. |
| 12 | `nix-rea-package` | [yzua/nixos-config](https://github.com/yzua/nixos-config) (`packages/rea/`) | wrapper / packaging | NixOS packaging of REA with local README; also [tdortman/dotfiles](https://github.com/tdortman/dotfiles). |
| 13 | `dx-ball` *(already published)* | [N0zoM1z0/dx-ball](https://github.com/N0zoM1z0/dx-ball) | case-study | Official upstream showcase reconstruction; topic `rea-showcase`; deepen with reconstruction tests narrative if needed — **no empty shell**. |
| 14 | `th04` *(already published)* | [N0zoM1z0/th04](https://github.com/N0zoM1z0/th04) | case-study | Official upstream PC-98 bullet-ring showcase; historical game reconstruction. |
| 15 | `discussion-1406-blackbox-audit` *(already published)* | [Discussion #1406](https://github.com/morluto/rea/discussions/1406) | case-study | Own Next.js+Stripe outside-in leak check; Windows multi-provider (Ghidra/JADX/WSL). |

**Honorable next queue (maybe → yes after compliance skim):** `N0zoM1z0/th08` (family reconstruction, less explicit REA in README), `N0zoM1z0/touhou-reconstruction-factory`, `dany331x/tracebrief-rea-port`, `gameworkerkim/vibe-investing` TechDoc review (Korean writeup), `EstebanForge/AGENTS` skill mirror, `AppitStudio/awesome-jev` listing of rea-jev.

---

## Full curated rows

Columns: github · stars · language · license · last_push (UTC) · relation · include · slug / bilingual titles · content angles · attribution.

### A. Case studies & reconstructions (`yes`)

#### A1. NullLabTests/OpenBSD_netcat_REA
- **url:** https://github.com/NullLabTests/OpenBSD_netcat_REA  
- **full_name:** `NullLabTests/OpenBSD_netcat_REA` · **stars:** 1 · **language:** C · **license:** MIT · **last_push:** 2026-10-09  
- **description:** Reverse-engineering Ubuntu `netcat-openbsd 1.234-1` with REA + Ghidra  
- **relation:** case-study  
- **include_recommend:** **yes** — public open-source target, Evidence artifacts in-repo, lawful static analysis, reproduce steps  
- **suggested slug:** `openbsd-netcat-rea`  
- **titles:** EN *OpenBSD netcat: Evidence-backed static RE with REA + Ghidra* / ZH *OpenBSD netcat：用 REA + Ghidra 做可复现的静态逆向*  
- **content angles:** ELF identity proofs (package note, build-id, hardening); `inspect-binary-layout` vs Ghidra deep pass; function map; confidence/limits; “no backdoor found” as honest negative result  
- **attribution:** repo · upstream [morluto/rea](https://github.com/morluto/rea) · Ubuntu package source

#### A2. Moxnatiy/OpenBattlefield2
- **url:** https://github.com/Moxnatiy/OpenBattlefield2  
- **stars:** 35 · **language:** C++ · **license:** MIT (NOASSERTION on API; LICENSE is MIT + clean-room notice) · **last_push:** 2026-10-09  
- **description:** Clean-room C++20 reimplementation of DICE Refractor 2 (BF2); no shipped game content  
- **relation:** case-study / depends  
- **include_recommend:** **yes** — clean-room + own-install assets; REA wired via `tools/rea.sh`  
- **suggested slug:** `openbattlefield2`  
- **titles:** EN *OpenBattlefield2: clean-room engine RE with REA snapshots* / ZH *OpenBattlefield2：清洁室引擎重建与 REA 快照工作流*  
- **content angles:** MCP/Ghidra over game binaries; snapshot cache; agent vs CLI cost; legal “bring your own install” boundary  
- **attribution:** repo · `tools/rea.sh` · morluto/rea

#### A3. N0zoM1z0/dx-ball *(showcase exists)*
- **url:** https://github.com/N0zoM1z0/dx-ball  
- **stars:** 13 · **language:** Python · **license:** MIT · **last_push:** 2026-10-10  
- **description:** Reconstructing DX-Ball 1.07 with REA; byte-exact oracles  
- **relation:** case-study · topic `rea-showcase`  
- **include_recommend:** **yes** (already published as `dx-ball`) — deepen only, no new empty shell  
- **titles:** keep existing showcase titles  
- **content angles:** differential tests, sound-pan reconstruction, MSVC byte match  
- **attribution:** repo · https://rea.tools/showcase/dx-ball/ (upstream; do not use as primary CTA on rea.run)

#### A4. N0zoM1z0/th04 *(showcase exists)*
- **url:** https://github.com/N0zoM1z0/th04  
- **stars:** 16 · **language:** Python · **license:** MIT · **last_push:** 2026-10-10  
- **description:** Source reconstruction of 東方幻想郷 ～ Lotus Land Story  
- **relation:** case-study (linked from upstream README Showcases)  
- **include_recommend:** **yes** (already `th04`)  
- **content angles:** DOS/PC-98 16-bit, bullet-ring math, historical compiler compare  
- **attribution:** repo · upstream showcase

#### A5. Discussion #1406 *(showcase exists)*
- **url:** https://github.com/morluto/rea/discussions/1406  
- **relation:** case-study  
- **include_recommend:** **yes** (already `discussion-1406-blackbox-audit`)  
- **note:** No separate GH project; service site goldenrockadvancements.com is optional footnote only

---

### B. Wrappers, plugins, packaging (`yes` / `maybe`)

#### B1. juan-viox/rea-jev
- **stars:** 0 · **language:** JavaScript · **license:** MIT · **last_push:** 2026-10-07  
- **relation:** wrapper  
- **include_recommend:** **yes** — clearest third-party REA productization  
- **slug:** `rea-jev`  
- **titles:** EN *rea-jev: System-1 reflexes around REA in Claude Code* / ZH *rea-jev：在 Claude Code 里给 REA 加 System-1 护栏*  
- **angles:** hooks fail-open; evidence ledger; `jev doctor`; cost/latency; thresholds uncalibrated caveat  
- **attribution:** https://github.com/juan-viox/rea-jev · listed in [AppitStudio/awesome-jev](https://github.com/AppitStudio/awesome-jev)

#### B2. moonfruit/homebrew-tap (`Formula/rea-agents.rb`)
- **stars:** 3 · **language:** Ruby · **license:** MIT · **last_push:** 2026-10-10  
- **relation:** wrapper / packaging  
- **include_recommend:** **yes**  
- **slug:** `homebrew-rea-agents`  
- **titles:** EN *Install rea-agents from a community Homebrew tap* / ZH *用社区 Homebrew tap 安装 rea-agents*  
- **angles:** npm tarball formula, bottles, completions, Node dependency; not official brew core  
- **attribution:** formula file · npm `rea-agents`

#### B3. yzua/nixos-config (+ tdortman/dotfiles)
- **yzua:** 13★ · WTFPL · `packages/rea/` · **tdortman:** 1★  
- **relation:** wrapper / packaging  
- **include_recommend:** **yes** (as packaging story; personal configs)  
- **slug:** `nix-rea-package`  
- **titles:** EN *Packaging REA for NixOS* / ZH *在 NixOS 中打包 REA*  
- **caveat:** personal dots — quote packaging files, not whole rice configs

#### B4. agentskillexchange/skills
- **stars:** 51 · **language:** Python · **license:** MIT · **last_push:** 2026-10-10  
- **relation:** wrapper / catalog  
- **include_recommend:** **yes**  
- **slug:** `agentskill-exchange-rea`  
- **path:** `skills/reverse-engineer-apps-and-binaries-with-rea/SKILL.md`  
- **titles:** EN *REA skill on Agent Skill Exchange* / ZH *Agent Skill Exchange 上的 REA 技能条目*

#### B5. MADTreasures/reverse
- **stars:** 0 · **language:** TypeScript · **license:** none declared · **last_push:** 2026-10-10  
- **relation:** demo / depends  
- **include_recommend:** **yes** with compliance filter — showcase **workspace pattern + own Electron audit**, never FL Studio reverse how-to  
- **slug:** `madtreasures-workspace`  
- **titles:** EN *A REA-prewired reverse-engineering workspace* / ZH *预置 REA MCP 的逆向工作区模板*

#### B6. dany331x/tracebrief-rea-port
- **stars:** 0 · **language:** JavaScript · **license:** none · **last_push:** 2026-10-09  
- **relation:** fork-with-value / port (partial)  
- **include_recommend:** **maybe** — explicit “prepared for morluto/rea”; incomplete  
- **slug:** `tracebrief-rea-port`  
- **titles:** EN *TraceBrief → TypeScript port aimed at REA* / ZH *面向 REA 的 TraceBrief TypeScript 移植（进行中）*

---

### C. Educational writeups & indexes (`yes` / `maybe`)

#### C1. valorisa/Reverse-Engineer-Anything
- **stars:** 2 · **license:** MIT · **last_push:** 2026-10-09  
- **relation:** writeup  
- **include_recommend:** **yes**  
- **slug:** `fr-guide-valorisa`  
- **titles:** EN *French community guide to REA (with legal framing)* / ZH *法语社区 REA 入门指南（含合法边界）*

#### C2. DiscoverBox/awesome-ai-reverse
- **stars:** 64 · **language:** Python · **license:** MIT · **last_push:** 2026-10-09  
- **relation:** writeup / index  
- **include_recommend:** **yes**  
- **slug:** `awesome-ai-reverse`  
- **titles:** EN *Awesome AI Reverse Engineering (lists REA)* / ZH *AI 辅助逆向精选清单（收录 REA）*

#### C3. morluto/awesome-reverse-engineering
- **stars:** 33 · **license:** CC0-1.0 · **last_push:** 2026-10-09  
- **relation:** writeup / index  
- **include_recommend:** **yes**  
- **slug:** `morluto-awesome-re`  
- **titles:** EN *Awesome Reverse Engineering (features REA)* / ZH *逆向工程精选列表（主推 REA）*

#### C4. 47thtechcorner/RayCodes_Rea-AI-Agent-Setup
- **stars:** 3 · **language:** HTML · **license:** none · **last_push:** 2026-10-09 · **homepage:** https://youtu.be/aaSQVqEa6U4  
- **relation:** demo  
- **include_recommend:** **yes** with tone control — passive browser inspection / UI study, not credential theft  
- **slug:** `raycodes-browser-ui`  
- **titles:** EN *Browser UI reconstruction demo with REA + CDP* / ZH *用 REA + CDP 做浏览器 UI 结构还原演示*

#### C5. gameworkerkim/vibe-investing (`TechDoc/Reverse/REA-Review.md`)
- **stars:** 342 · **language:** HTML · **license:** none · **last_push:** 2026-10-10  
- **relation:** writeup (embedded)  
- **include_recommend:** **maybe** — excellent Korean REA review, but host repo is unrelated trading content; extract/attribute carefully  
- **slug:** `korean-rea-review`  
- **titles:** EN *Korean deep-dive review of REA* / ZH *REA 韩语深度评测摘录*

#### C6. Discussion #1435 (Fedora notes)
- **relation:** case-study / ops writeup  
- **include_recommend:** **yes** (as showcase or blog; BRIEF already plans linux-fedora docs)  
- **slug:** `fedora-rea-notes`  
- **titles:** EN *REA on Fedora: Node 22/24/26 timings & Linux notes* / ZH *Fedora 上跑 REA：Node 版本对照与 Linux 手记*

#### C7. ImChong/Robotics_Notebooks
- **stars:** 488 · **license:** MIT  
- **relation:** writeup (wiki entity pages on rea/rea.tools)  
- **include_recommend:** **maybe** — peripheral knowledge base, not REA-primary  
- **slug:** `robotics-notebooks-rea-entry`

#### C8. BANG644/project-collection
- **stars:** 23 · **path:** `full-analysis/morluto-rea-深度调研.md`  
- **relation:** writeup  
- **include_recommend:** **maybe** — Chinese deep survey of the hot repo; verify originality before featuring  

#### C9. EstebanForge/AGENTS · sickn33/agentic-awesome-skills · VoltAgent/awesome-agent-skills · gabrielmoreira/agent-skills-mirror · flowork-os/FLOWORK-SKILLS · LMPrado-DZ23/awesome-agent-plugins · QAInsights/awesome-ai-tools
- **relation:** catalog mirrors / indexes mentioning REA skill  
- **include_recommend:** **maybe** (one aggregated “REA appears in agent skill catalogs” page beats many thin pages)  
- **slug:** `skill-catalog-mentions`

#### C10. DSH ecosystem indexes (Ericwong5021/deepseek-plugin-store, AdamPlatin123/dsh-plugin-radar, 0xsline/awesome-deepseek-harness, bruc3van/awesome-dsh-plugin, bradeGithub/DSH-Plugins-Marketplace, leenkcool/Blue-Whale-Harness, like-study1/Oh-My-DSH, unStone/dsh-xray, awesome-deepseekharness/…)
- **relation:** catalog (REA as `dsh-plugin` topic member)  
- **include_recommend:** **maybe** as a single “REA in DSH plugin directories” roundup; **no** as individual showcase clones of each store  
- **slug:** `dsh-plugin-directories`

#### C11. TensorBlock/awesome-mcp-servers · linny006/mcp-servers-live · sivolko/sec-radar · stevengonsalvez/cerebro-vault · yiGmMk/producthunt · antonkomarev/github-trending-archive · cxyfreedom/website-hot-hub · aneasystone/github-trending
- **relation:** index / archive  
- **include_recommend:** **no** for showcase (metadata-only mentions) — optional footnote in SEO/backlink plan only

---

### D. Related reconstruction family (`maybe`)

These are strong RE culture / N0zoM1z0 ecosystem; REA mention is weak or historical-tooling rather than primary.

| Repo | ★ | Relation | include | Note |
|------|--:|----------|---------|------|
| N0zoM1z0/th08 | 103 | case-study family | maybe | Flagship Touhou reconstruction; README emphasizes semantic reconstruction, not REA by name |
| N0zoM1z0/th03 | 1 | case-study family | maybe | Shares Factory/Ghidra tooling with th04 |
| N0zoM1z0/touhou-reconstruction-factory | 2 | wrapper / control-plane | maybe | Evidence-first multi-game control plane |
| N0zoM1z0/th07, th09, th095, th10, th105, th20, … | varies | family | maybe/no | Catalog as “Touhou reconstruction constellation”; only promote if REA Evidence trail is documented |
| N0zoM1z0/siglusengine-reverse-engineering | 7 | case-study | maybe | Evidence-first VN engine notes — confirm REA usage before showcase |
| Lewdwig-V/reschema | 0 | adjacent harness | maybe | Verification harness; researches agentic RE including REA notes — not a REA dependent |
| siaginw/minecraftrust | 2 | adjacent | maybe | Research doc mentions REA setup for Rustcraft assessment |

**Suggested constellation slug (one page):** `touhou-reconstruction-constellation` — attribution to N0zoM1z0 + link existing `th04` showcase; avoid DRM/Steamless how-to for commercial modern titles (e.g. th20 README mentions Steamless — compliance skip or heavy caveat).

---

### E. Exclude / `no` (summary)

| Pattern | Examples | Reason |
|---------|----------|--------|
| Empty / lagging forks | `shijianzhong/rea` (701★, 0 ahead / 646 behind), thousands of 0★ forks | No unique content |
| Unofficial full copies (not marked fork) | `NabilRFG12/Reverse-Engineer-anything` (39★), `Wjb20043/rea`, `glaxxen/reverse_eng_tool`, `Kasyang233/rea`, `bameroncerry/revenany`, `maclve/rea`, `wukongtime/rea-backup` | Mirror of upstream tree; risk of stale/confused attribution |
| Upstream docs sites | rea.tools, morluto.github.io/rea | Explicitly not showcase copy targets |
| Own site repo | `ylwl1997/rea-run` | Operator site, not a third-party showcase subject |
| Red-team / malware frameworks wrapping REA | `grisuno/LazyOwn` (`lazyaddons/rea.yaml`) | C2/rootkit framing; compliance **no** |
| Commercial unauthorized ask threads | Discussions #693 traework, #1115 CANoe | Signal for legal FAQ only — never how-to showcase |
| Unrelated name collisions | Resource-Event-Agent (django-rea), ReAct agents tutorials, “real-estate agents”, openai-realtime-agents | False positives from `rea-agents` string search |
| Hot-list scrapers | website-hot-hub, github-trending archives | Mention without original REA work |
| WeChat / closed commercial RE notes | `N0zoM1z0/wechat-reverse-engineering` | High compliance risk for showcase |
| Vague “clone anything” without Evidence ethics | treat carefully; RayCodes kept as **yes** only with passive/authorized framing |

---

## Discussions / issues for polite community participation

**Do not post from this task.** For a separate backlink plan (helpful answers that can later mention rea.run guides):

### High value (answer-shaped, lawful)

| Thread | Why participate |
|--------|-----------------|
| [Discussion #1435](https://github.com/morluto/rea/discussions/1435) — Fedora / Node timings | Share complementary Linux install notes; natural link to `/docs/linux-fedora/` & TMPDIR FAQ once published |
| [Discussion #1406](https://github.com/morluto/rea/discussions/1406) — own Next.js audit | Congratulate Evidence style; point to Windows×Ghidra / JS timeout guides; no service spam |
| [Discussion #1343](https://github.com/morluto/rea/discussions/1343) — NOOP / WHOOP | Teach **authorized / clean-room / open companion** boundary; link `/compliance/` & `/faq/legal-boundary/` — **do not** write WHOOP reverse steps |
| [Issue #1484](https://github.com/morluto/rea/issues/1484) — MCP schema size vs Moonshot | Empathize + point to compact-schema FAQ when ready |
| [Issue #1462](https://github.com/morluto/rea/issues/1462) — JS analysis blocks MCP ping | Point to Electron/ASAR timeout guidance |
| [Issue #1451](https://github.com/morluto/rea/issues/1451) — droidasc Android | Productive feature discussion; Android analysis docs |
| [Issue #1431](https://github.com/morluto/rea/issues/1431) — HarmonyOS/Ark | Same pattern: capability matrix FAQ |
| [Issue #1416](https://github.com/morluto/rea/issues/1416) — Hex-Rays IDA MCP provider | Provider matrix / IDA guide cross-link |
| Open `fix(native|browser|firmware|…)` hygiene PRs/issues | Helpful reproduction notes; low controversy |

### Do **not** turn into tutorials

| Thread | Handling |
|--------|----------|
| [Discussion #693](https://github.com/morluto/rea/discussions/693) traework | Legal-boundary FAQ only |
| [Discussion #1115](https://github.com/morluto/rea/discussions/1115) CANoe | Legal-boundary FAQ only |
| [Discussion #831](https://github.com/morluto/rea/discussions/831) 88API vendor outreach | Skip or neutral “providers are user-chosen” |

---

## Search coverage notes

**Hit well:** exact `rea-agents` code, README Showcases, Discussion show-and-tell, topic `rea-showcase`, homebrew formula, skill catalogs, N0zoM1z0 reconstructions, OpenBattlefield2 wrapper script, rea-jev plugin.

**Noisy:** repo search for `rea-agents` (matches “realtime agents”, “ReAct”, Resource-Event-Agent). Prefer code search + README “Reverse Engineer Anything”.

**Incomplete due to GitHub code-search 403 mid-run:** further `package.json` dependents, `from "rea-agents"` imports. Re-run later:

```bash
gh search code 'rea-agents' --filename package.json --limit 100
gh search code 'npx -y rea-agents' --limit 50
gh search code 'REA_ANALYSIS_PROVIDER' --limit 50
```

**Fork volume:** API lists 10k+ forks; almost all empty mirrors. Only treat forks with unique commits/README as candidates.

---

## Suggested bilingual showcase drafting checklist (dshbase-like)

For each `yes` row when writing `/showcase/<slug>/`:

1. **Title + one-line summary** (EN/ZH)  
2. **Tags:** e.g. `case-study`, `ghidra`, `mcp`, `wrapper`, `packaging`, `authorized`, `historical-game`, `clean-room`  
3. **Stars / license / language / last_push** (snapshot dated)  
4. **What it does** (features + how it uses REA: CLI, MCP, skill, Evidence)  
5. **Evaluation / notes** (quality, reproducibility, caveats, version pin of `rea-agents`)  
6. **Attribution footnotes** (GitHub primary; blogs/YouTube/discussions secondary)  
7. **Compliance sentence** (own/authorized/historical; no crack/DRM)  
8. Cards link **only** to `/showcase/<id>/` (and `/zh/showcase/<id>/`)

---

## Counts (final)

| | |
|--|--:|
| Found / reviewed distinct projects+threads | **48** (+ discussions 6; issues sampled) |
| Recommended **yes** | **12** |
| Recommended **maybe** | **14** |
| Recommended **no** / exclude | **22** (+ mass empty forks) |
| Immediate showcase top list | **15** (incl. 3 already live) |
| Full catalog path | `/workspace/rea-run/GH-REA-PROJECTS-CATALOG-2026-10-10.md` |

