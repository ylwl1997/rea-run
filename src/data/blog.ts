export type BlogPost = {
  slug: string;
  date: string;
  en: { title: string; description: string; h1: string; body: string[] };
  zh: { title: string; description: string; h1: string; body: string[] };
};

export const BLOG_POSTS: BlogPost[] = [

  {
    slug: 'rea-agents-6-4-0',
    date: '2026-10-12',
    en: {
      title: 'REA 6.4.0 for operators: ADB, JEB, compact schema',
      description:
        'Operator delta for rea-agents 6.4.0: Android ADB device lane, BYO JEB MCP, REA_MCP_INPUT_SCHEMA_PROFILE=compact, large Evidence views — authorized devices only.',
      h1: 'What changed in rea-agents 6.4.0 (operator view)',
      body: [
        'Upstream published **rea-agents 6.4.0** on 2026-10-11 ([release notes](https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0)). This page is an **operator delta**, not a changelog dump. Pin the version you intend; confirm behavior with `doctor` on your host.',
        '**1. Android ADB device lane.** 6.4 adds device-oriented workflows (inspect / split-APK / logs / screenshots / lifecycle) plus Apktool resources — on **your** device or emulator. See [/docs/android-adb/](/docs/android-adb/) and the updated matrix on [/faq/what-can-i-analyze/](/faq/what-can-i-analyze/). Compliance: ADB ≠ “extract any store app DRM.”',
        '**2. JEB as caller-started MCP provider.** Bring-your-own **licensed** JEB; REA does not ship JEB. Wire it as a provider when your license and docs say so.',
        '**3. Official compact MCP schema.** Set `REA_MCP_INPUT_SCHEMA_PROFILE=compact` for Moonshot/Kimi-class clients that cap per-tool schema size. This is **first-party** upstream — upgrade [/faq/mcp-schema-size/](/faq/mcp-schema-size/). Community domain-split proxies ([/faq/mcp-domain-split/](/faq/mcp-domain-split/)) remain valid when you need curated catalogs.',
        '**4. Large analyses: summary / selected views.** Evidence, JS graphs, and dossiers can return summary or selected views so agents do not drown in tokens. Pair with [/faq/token-efficient-rea/](/faq/token-efficient-rea/) and [/faq/electron-asar-timeouts/](/faq/electron-asar-timeouts/).',
        '**5. Setup clients footnote.** Pi / Hermes / Qwen Code appear in the expanding MCP client set — confirm with `doctor --client …` on [/docs/mcp-clients/](/docs/mcp-clients/).',
        '**Community news hooks (tone, not star worship).** Public posts noted 6.4 ADB (e.g. [@Z3nlyte](https://x.com/Z3nlyte/status/2109420973027889232)) and reminded that REA wires engines you already have rather than shipping a decompiler ([@cai_smart](https://x.com/cai_smart/status/2108370877448691754)). Primary CTAs stay on rea.run docs.',
        '**Next.** [/docs/install/](/docs/install/), [/faq/setup-vs-providers/](/faq/setup-vs-providers/), [/showcase/rea-lab/](/showcase/rea-lab/).',
      ],
    },
    zh: {
      title: 'REA 6.4.0 运维指南：ADB、JEB、compact schema',
      description:
        'rea-agents 6.4.0 运维增量：Android ADB 设备通道、自备 JEB MCP、REA_MCP_INPUT_SCHEMA_PROFILE=compact、大 Evidence 视图——仅授权设备。',
      h1: 'rea-agents 6.4.0 改了什么（运维视角）',
      body: [
        '上游于 2026-10-11 发布 **rea-agents 6.4.0**（[发行说明](https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0)）。本页是**运维增量**，不是 changelog 堆砌。钉住你要用的版本；在本机用 `doctor` 确认。',
        '**1. Android ADB 设备通道。**6.4 增加面向设备的工作流（检查／分体 APK／日志／截图／生命周期）与 Apktool 资源——针对**你的**设备或模拟器。见 [/zh/docs/android-adb/](/zh/docs/android-adb/) 与 [/zh/faq/what-can-i-analyze/](/zh/faq/what-can-i-analyze/) 更新矩阵。合规：ADB ≠「抽取任意商店应用 DRM」。',
        '**2. JEB 作为调用方启动的 MCP 提供者。**自备**已授权** JEB；REA 不附带 JEB。按许可与文档接线。',
        '**3. 官方 compact MCP schema。**对有单工具 schema 上限的 Moonshot／Kimi 类客户端，设 `REA_MCP_INPUT_SCHEMA_PROFILE=compact`。这是上游**一等公民**——升级 [/zh/faq/mcp-schema-size/](/zh/faq/mcp-schema-size/)。需要精选目录时，社区按域拆分代理（[/zh/faq/mcp-domain-split/](/zh/faq/mcp-domain-split/)）仍有效。',
        '**4. 大分析：摘要／选定视图。**Evidence、JS 图与档案可返回摘要或选定视图，避免智能体被 token 淹没。配合 [/zh/faq/token-efficient-rea/](/zh/faq/token-efficient-rea/) 与 [/zh/faq/electron-asar-timeouts/](/zh/faq/electron-asar-timeouts/)。',
        '**5. setup 客户端脚注。**Pi／Hermes／Qwen Code 出现在扩大的 MCP 客户端集合——以 [/zh/docs/mcp-clients/](/zh/docs/mcp-clients/) 上 `doctor --client …` 为准。',
        '**社区新闻钩子（语气，非追星）。**公开帖提到 6.4 ADB（如 [@Z3nlyte](https://x.com/Z3nlyte/status/2109420973027889232)），并提醒 REA 是接你已有引擎、并不自带反编译器（[@cai_smart](https://x.com/cai_smart/status/2108370877448691754)）。主 CTA 留在 rea.run。',
        '**下一步。**[/zh/docs/install/](/zh/docs/install/)、[/zh/faq/setup-vs-providers/](/zh/faq/setup-vs-providers/)、[/zh/showcase/rea-lab/](/zh/showcase/rea-lab/)。',
      ],
    },
  },
  {
    slug: 'rea-linux-startup-benchmarks',
    date: '2026-10-12',
    en: {
      title: 'REA Linux startup benchmarks (community snapshot)',
      description:
        'Reproducible performance snapshot from discussion #1998: Node 22/24/26 tool-list times for 6.3.0 / 6.4.0 / main; first-job timings on OSS fixtures only.',
      h1: 'Linux startup benchmarks: a community snapshot',
      body: [
        '[@CassieFox23](https://github.com/morluto/rea/discussions/1998) published Linux **tool-list and first-job timings** across Node 22 / 24 / 26 for rea-agents **6.3.0**, **6.4.0**, and `main`. This page paraphrases the methodology for operators — cite the discussion for raw tables.',
        '**Headline patterns.** 6.4 advertises **more tools** (discussion notes ~170 vs ~139), so **tools/list can be slower** even when later Android scans improve. Treat “list latency” and “first useful job” as different metrics.',
        '**Node choice.** Match upstream-supported lines (22.19+ / 24.11+ / 26+ per README pulse). Benchmarks that mix unsupported Node versions are not comparable.',
        '**Fixtures (OSS only).** Discussion uses open fixtures such as Stretchly, a Coffee APK, and own C builds — copy that discipline. Do not substitute commercial binaries into public benches.',
        '**Caveats.** `main`-branch startup work (e.g. PR #1691) can move numbers; pin a tag for regression comparisons. First-job timings for browser / JS / Android / Ghidra depend on cold caches and host load.',
        '**Ops tips.** Prefer compact schema or domain-split when clients choke on large catalogs ([/faq/mcp-schema-size/](/faq/mcp-schema-size/)). Deepen host notes on [/docs/linux-fedora/](/docs/linux-fedora/#startup). Related showcase: Fedora community notes on the wall.',
        '**Source.** [Discussion #1998](https://github.com/morluto/rea/discussions/1998). Release: [6.4.0](https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0).',
      ],
    },
    zh: {
      title: 'REA Linux 启动基准（社区快照）',
      description:
        '来自讨论 #1998 的可复现性能快照：Node 22／24／26 在 6.3.0／6.4.0／main 上的 tool-list 耗时；仅开源夹具的首任务计时。',
      h1: 'Linux 启动基准：社区快照',
      body: [
        '[@CassieFox23](https://github.com/morluto/rea/discussions/1998) 公布了 Node 22／24／26 上 rea-agents **6.3.0**、**6.4.0** 与 `main` 的 **tool-list 与首任务计时**。本页转述运维方法——原始表格以讨论为准。',
        '**头条模式。**6.4 广告**更多工具**（讨论约 170 vs 139），因此即使后续 Android 扫描变好，**tools/list 也可能更慢**。把「列表延迟」与「第一个有用任务」当成不同指标。',
        '**Node 选择。**对齐上游支持线（README 脉动常见 22.19+／24.11+／26+）。混用不支持 Node 的基准不可比。',
        '**夹具（仅开源）。**讨论使用 Stretchly、Coffee APK、自写 C 等开源夹具——请复制该纪律。勿把商业二进制塞进公开基准。',
        '**注意。**`main` 上的启动工作（如 PR #1691）会移动数字；回归对比请钉 tag。浏览器／JS／Android／Ghidra 的首任务依赖冷缓存与宿主负载。',
        '**运维提示。**客户端被大目录卡住时，优先 compact schema 或按域拆分（[/zh/faq/mcp-schema-size/](/zh/faq/mcp-schema-size/)）。宿主笔记见 [/zh/docs/linux-fedora/](/zh/docs/linux-fedora/#startup)。',
        '**来源。**[讨论 #1998](https://github.com/morluto/rea/discussions/1998)。发行：[6.4.0](https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0)。',
      ],
    },
  },
  {
    slug: 'evaluating-rea-claims',
    date: '2026-10-12',
    en: {
      title: 'How to evaluate REA claims (Evidence, stars, dual-use)',
      description:
        'Community rewrite of insights from rea-research: Evidence contracts, local≠private, star≠install, dual-use caution — without sensational unverified media claims.',
      h1: 'Evaluating REA claims without the hype',
      body: [
        'Chinese survey work in [ringozzt/rea-research](https://github.com/ringozzt/rea-research) (2026-10-11) maps primary vs secondary sources, the npm-vs-star gap, and “not a sandbox.” This post **rewrites insights into rea.run voice** — it does not paste the report wholesale, and it drops unverified sensational media claims.',
        '**Evidence is the contract.** Prefer addresses, envelopes, and marked unknowns over vibes. Agents that skip Evidence are guessing. Align with [/blog/rea-agent-security-posture/](/blog/rea-agent-security-posture/).',
        '**Local ≠ private.** A laptop MCP still inherits host trust. Untrusted binaries belong in disposable VMs. Process capture is capability, not isolation.',
        '**Stars ≠ installs.** Social metrics and GitHub stars are discovery signals, not proof that `npx rea-agents` runs cleanly on your host. Run `doctor` and pin versions.',
        '**Dual-use caution.** Lowering the barrier for agent RE does **not** create authorization. Bank-attack sensationalism is not a how-to — keep [/faq/legal-boundary/](/faq/legal-boundary/) and [/compliance/](/compliance/) primary. Community pushback on “server-side / closed-repo” overclaims (e.g. [@0xLiquidation](https://x.com/0xLiquidation/status/2109440974858453284)) is healthy: client-only surfaces stay client-only.',
        '**Granularity limits.** Even strong demos (DX-Ball-class) have reconstruction ceilings — document what you could not recover. Don’t fully trust AI conclusions without Evidence ([@sharesfromhmf](https://x.com/sharesfromhmf/status/2109104155256348848)).',
        '**Next.** [/showcase/](/showcase/), [/life-process/](/life-process/), [/agents/](/agents/). Footnote: [rea-research](https://github.com/ringozzt/rea-research).',
      ],
    },
    zh: {
      title: '如何评估 REA 相关主张（Evidence、星标、双用途）',
      description:
        '改写 rea-research 洞见：Evidence 契约、本地≠私密、星标≠安装、双用途谨慎——不粘贴全文，不放大未核实煽情媒体。',
      h1: '去掉炒作，评估 REA 主张',
      body: [
        '[ringozzt/rea-research](https://github.com/ringozzt/rea-research)（2026-10-11）梳理一手／二手源、npm 与星标落差，以及「不是沙箱」。本帖把洞见**改写成 rea.run 口径**——不整篇粘贴报告，并去掉未核实的煽情媒体主张。',
        '**Evidence 才是契约。**地址、信封、标注未知优先于气氛。跳过 Evidence 的智能体在猜。对齐 [/zh/blog/rea-agent-security-posture/](/zh/blog/rea-agent-security-posture/)。',
        '**本地 ≠ 私密。**笔记本上的 MCP 仍继承宿主信任。不信任二进制放一次性虚拟机。进程捕获是能力，不是隔离。',
        '**星标 ≠ 安装。**社交数据与 GitHub 星标是发现信号，不是 `npx rea-agents` 在你机器上干净可跑的证明。跑 `doctor`，钉版本。',
        '**双用途谨慎。**降低智能体逆向门槛**不会**自动产生授权。银行攻击式煽情不是教程——以 [/zh/faq/legal-boundary/](/zh/faq/legal-boundary/) 与 [/zh/compliance/](/zh/compliance/) 为准。对「服务端／闭源仓」过度声称的社区回推（如 [@0xLiquidation](https://x.com/0xLiquidation/status/2109440974858453284)）是健康的：仅客户端表面就只谈客户端。',
        '**粒度上限。**再强的演示（DX-Ball 级）也有重建天花板——写下未能恢复什么。没有 Evidence 就别全信 AI 结论（[@sharesfromhmf](https://x.com/sharesfromhmf/status/2109104155256348848)）。',
        '**下一步。**[/zh/showcase/](/zh/showcase/)、[/zh/life-process/](/zh/life-process/)、[/zh/agents/](/zh/agents/)。脚注：[rea-research](https://github.com/ringozzt/rea-research)。',
      ],
    },
  },

  {
    slug: 'what-is-rea-reverse-engineer-anything',
    date: '2026-10-10',
    en: {
      title: 'What is REA? Reverse Engineer Anything explained',
      description:
        'REA is an open-source MCP server and CLI that helps coding agents inspect binaries, JS/Electron apps, and more — legally, on software you are authorized to analyze.',
      h1: 'What is REA (Reverse Engineer Anything)?',
      body: [
        '**REA** stands for **Reverse Engineer Anything**. It is an open-source project ([morluto/rea](https://github.com/morluto/rea), MIT) that exposes reverse-engineering capabilities to coding agents through the **Model Context Protocol (MCP)** and a CLI (`rea-agents` on npm).',
        'In plain language: you point your agent at a **local target you are allowed to analyze**, and REA supplies structured tools — strings, symbols, decompilation (via a native engine you already own), JavaScript/Electron static graphs, and related inventory — so the agent can explain how the software works instead of guessing from marketing pages.',
        '**What it is not.** REA is not a crack tool, not a DRM bypass, and not a substitute for owning Hopper, Ghidra, or IDA when you need deep native analysis. Native providers are **bring-your-own**. Static JavaScript inspection does not require those engines.',
        '**Who it is for.** Security researchers, malware analysts under authorization, maintainers recovering behavior of their own shipping artifacts, and developers debugging closed packages **they have rights to inspect**. Always confirm license, contract, and local law before analyzing third-party software.',
        '**Upstream sources.** Project home: [github.com/morluto/rea](https://github.com/morluto/rea). Install on this site: [/docs/install/](/docs/install/). Package: [npm rea-agents](https://www.npmjs.com/package/rea-agents).',
      ],
    },
    zh: {
      title: '什么是 REA？Reverse Engineer Anything 释义',
      description:
        'REA 是开源 MCP 服务与 CLI，帮助编程智能体在你有权分析的软件上做逆向盘点——合法授权研究，非破解工具。',
      h1: '什么是 REA（Reverse Engineer Anything）？',
      body: [
        '**REA** 全称 **Reverse Engineer Anything**。它是开源项目（[morluto/rea](https://github.com/morluto/rea)，MIT），通过 **MCP** 与 CLI（npm 包 `rea-agents`）把逆向能力交给编程智能体。',
        '通俗说：你把智能体指向**你有权分析的本地目标**，REA 提供结构化工具——字符串、符号、反编译（依赖你自备的原生引擎）、JS/Electron 静态图等——让智能体基于证据解释软件行为，而不是凭介绍页猜测。',
        '**它不是什么。**不是破解工具，不是 DRM 绕过，也不能替代你已有的 Hopper / Ghidra / IDA。原生分析是 **自备引擎**；静态 JavaScript 检查通常不需要这些引擎。',
        '**适合谁。**获授权的安全研究员、恶意软件分析人员、需要对照自有制品行为的维护者，以及有权检查闭源包的开发者。分析第三方软件前请确认许可、合同与当地法律。',
        '**上游。**项目主页：[github.com/morluto/rea](https://github.com/morluto/rea)。本站安装：[/zh/docs/install/](/zh/docs/install/)。npm：[rea-agents](https://www.npmjs.com/package/rea-agents)。',
      ],
    },
  },
  {
    slug: 'ghidra-mcp-with-rea',
    date: '2026-10-10',
    en: {
      title: 'Ghidra MCP with REA: bring-your-own setup',
      description:
        'How REA uses an existing Ghidra install as an MCP-backed native analysis provider. Paths, doctor checks, and what REA does not install for you.',
      h1: 'Using Ghidra with REA (MCP)',
      body: [
        'For **native binaries**, REA can drive an existing **Ghidra** installation as one of its analysis providers. REA does **not** download or upgrade Ghidra or Java for you — you install those outside REA, then point environment variables at absolute paths.',
        'Upstream documents a bring-your-own Ghidra path (typically Ghidra 12.1.x with a 64-bit JDK 21+) on supported Linux/macOS hosts. After exporting `GHIDRA_INSTALL_DIR` and `JAVA_HOME`, run doctor then setup, for example:',
        '```bash\nexport GHIDRA_INSTALL_DIR=/absolute/path/to/ghidra_PUBLIC\nexport JAVA_HOME=/absolute/path/to/jdk-21\nnpx -y rea-agents@latest doctor --provider ghidra --json\nnpx rea-agents@latest setup\n```',
        'Replace both paths with your installations. Restart the agent after setup so the MCP registration is loaded. If tools do not appear, reconnect the client and re-run `doctor --provider ghidra --json` — the report names the failed check.',
        '**Scope reminder.** Use Ghidra + REA only on artifacts you are authorized to reverse engineer. This site will not publish crack workflows or DRM bypasses. Full install notes: [/docs/install/](/docs/install/). Upstream: [installation](https://github.com/morluto/rea/blob/main/docs/installation.md).',
      ],
    },
    zh: {
      title: '用 REA 接 Ghidra MCP：自备安装说明',
      description:
        'REA 如何把已有 Ghidra 当作原生分析提供者；路径、doctor 检查，以及 REA 不会替你安装什么。',
      h1: '用 REA 使用 Ghidra（MCP）',
      body: [
        '分析**原生二进制**时，REA 可以把已有的 **Ghidra** 当作分析提供者之一。REA **不会**替你下载或升级 Ghidra / Java——请在站外装好，再用绝对路径环境变量指向它们。',
        '上游文档描述了自备 Ghidra（常见为 Ghidra 12.1.x + 64 位 JDK 21+）在受支持 Linux/macOS 上的接法。导出 `GHIDRA_INSTALL_DIR` 与 `JAVA_HOME` 后，先 doctor 再 setup，例如：',
        '```bash\nexport GHIDRA_INSTALL_DIR=/absolute/path/to/ghidra_PUBLIC\nexport JAVA_HOME=/absolute/path/to/jdk-21\nnpx -y rea-agents@latest doctor --provider ghidra --json\nnpx rea-agents@latest setup\n```',
        '路径请换成你的实际安装。setup 后重启智能体客户端以加载 MCP。若看不到工具，重连客户端并再跑 `doctor --provider ghidra --json`——报告会指出失败项。',
        '**范围提醒。**仅对你有权逆向的制品使用 Ghidra + REA。本站不发布破解或绕 DRM 流程。安装总览：[/zh/docs/install/](/zh/docs/install/)。上游：[installation](https://github.com/morluto/rea/blob/main/docs/installation.md)。',
      ],
    },
  },
  {
    slug: 'agent-reverse-engineering-mcp',
    date: '2026-10-10',
    en: {
      title: 'Agent reverse engineering with MCP: a practical framing',
      description:
        'How coding agents use MCP servers like REA for authorized RE workflows — evidence, approvals, and where humans stay in the loop.',
      h1: 'Agent reverse engineering with MCP',
      body: [
        '**Agent reverse engineering** means a coding agent (Cursor, Codex, Claude Code, Gemini CLI, Windsurf, Grok Build, and other MCP clients) calls local tools to inspect software, then writes explanations, diffs, or reconstruction notes for a human reviewer.',
        '**MCP** (Model Context Protocol) is the connector: the agent does not invent a private RE API — it launches a registered stdio server such as `npx -y rea-agents@latest mcp` and uses the tools that server advertises.',
        '**Good practice.** Give absolute paths, ask specific questions, require evidence (addresses, snippets, unresolved edges), and keep write/send actions behind approval. REA’s design emphasizes returning Evidence records and marking unknowns — treat those unknowns as work for you, not as permission to guess.',
        '**Boundaries.** Authorized targets only. Do not use agent RE to pirate software, strip licenses, or evade DRM. Prefer your own builds, open-source binaries under compatible licenses, or samples you have written permission to analyze.',
        '**Next steps.** [/docs/install/](/docs/install/), [what is REA](/blog/what-is-rea-reverse-engineer-anything/), [Ghidra MCP](/blog/ghidra-mcp-with-rea/), comparisons under [/compare/](/compare/).',
      ],
    },
    zh: {
      title: '用 MCP 做智能体逆向：实用框架',
      description:
        '编程智能体如何通过 REA 这类 MCP 服务做授权逆向——证据、批准，以及人要守住的环节。',
      h1: '用 MCP 做智能体逆向',
      body: [
        '**智能体逆向**指编程智能体（Cursor、Codex、Claude Code、Gemini CLI、Windsurf、Grok Build 等 MCP 客户端）调用本地工具检查软件，再为人类审阅者输出解释、对照或重建笔记。',
        '**MCP** 是连接方式：智能体不必自造私有逆向 API，而是启动已注册的 stdio 服务（如 `npx -y rea-agents@latest mcp`），使用该服务声明的工具。',
        '**好习惯。**给绝对路径、问具体问题、要求证据（地址、片段、未解析边），并把发送/改写操作放在批准之后。REA 强调返回 Evidence、标注未知——把未知交给人，而不是允许瞎猜。',
        '**边界。**仅限授权目标。不要用智能体逆向去盗版、去授权保护或规避 DRM。优先自有构建、许可兼容的开源二进制，或有书面许可的样本。',
        '**下一步。**[/zh/docs/install/](/zh/docs/install/)、[什么是 REA](/zh/blog/what-is-rea-reverse-engineer-anything/)、[Ghidra MCP](/zh/blog/ghidra-mcp-with-rea/)、[/zh/compare/](/zh/compare/)。',
      ],
    },
  },
  {
    slug: 'community-week-rea-demos',
    date: '2026-10-12',
    en: {
      title: 'Community week: what people tried with REA (authorized demos)',
      description:
        'Roundup of public tips and demos — calculator percent, DX-Ball Evidence, Node 22+ dry-run checklists — reframed for lawful, authorized targets only.',
      h1: 'What people tried with REA this week (authorized demos)',
      body: [
        'Public threads this week mixed **explainer energy** with concrete tips. Here we keep the useful parts and drop crack framing: authorize the target first, prefer own/open/clean-room demos, and treat Evidence as the product.',
        '**Setup checklist (ops).** Use Node **22+**, pin a `rea-agents` version you trust, run `setup --dry-run` before writing client configs, then reconnect the MCP host. Prefer absolute paths in the first question. Tip threads circulating mid-October 2026 (e.g. checklist posts on X) align with [/docs/install/](/docs/install/).',
        '**Calculator % rewrite.** Several explainers used Windows Calculator’s percent behavior (`200+10%` → `220` vs naive `×10%`) as a teaching rewrite. That story already lives on this site as [windows-calculator-percent](/showcase/windows-calculator-percent/) — authorized teaching, not a retail crack.',
        '**DX-Ball / Evidence narrative.** Community posts citing large Evidence suites and byte-match claims map to the existing [dx-ball](/showcase/dx-ball/) showcase. Read the Evidence + unknowns; do not treat social metrics as a substitute for your own verification.',
        '**Agent + Ghidra/IDA framing.** “REA connects Claude/Cursor to Ghidra & IDA” is accurate **only** as bring-your-own engines on targets you may analyze. See [Ghidra MCP with REA](/blog/ghidra-mcp-with-rea/) and [/faq/legal-boundary/](/faq/legal-boundary/).',
        '**New teaching layer.** For Electron/JS without native engines, start with [rea-playbook](/showcase/rea-playbook/) (Evidence → file:line → recreate on an in-repo demo).',
        '**6.4.0 + ADB (Oct 11–12 refresh).** Upstream shipped Android ADB device lanes — see [/blog/rea-agents-6-4-0/](/blog/rea-agents-6-4-0/). Public hooks (e.g. [@Z3nlyte](https://x.com/Z3nlyte/status/2109420973027889232)) are news, not star worship.',
        '**Mythbust: setup does not install decompilers.** REA wires Hopper/Ghidra/IDA you already have ([@cai_smart](https://x.com/cai_smart/status/2108370877448691754); user Qs from [@Thomas3cnl](https://x.com/Thomas3cnl/status/2109195402830573847)). Full answer: [/faq/setup-vs-providers/](/faq/setup-vs-providers/).',
        '**Sources (public).** X tips/explainers from mid-October 2026 (setup checklists, calculator %, DX-Ball Evidence, Ghidra/IDA connectors, 6.4 ADB). We keep lawful teaching URLs on rea.run; skip crypto `$REA` spam.',
      ],
    },
    zh: {
      title: '社区一周：人们用 REA 试了什么（授权演示）',
      description:
        '公开技巧与演示盘点——计算器百分号、DX-Ball Evidence、Node 22+ dry-run 清单——改写成仅限合法授权目标。',
      h1: '本周人们用 REA 试了什么（授权演示）',
      body: [
        '本周公开帖子混着**讲解热情**与具体技巧。这里只留有用部分，去掉破解口径：先授权目标，优先自有／开源／清洁室演示，把 Evidence 当产品。',
        '**安装清单（运维）。**用 Node **22+**，钉住可信的 `rea-agents` 版本，写客户端配置前先 `setup --dry-run`，再重连 MCP 宿主。首问优先绝对路径。2026 年 10 月中旬流传的清单帖与 [/zh/docs/install/](/zh/docs/install/) 一致。',
        '**计算器 % 重写。**多篇讲解用 Windows 计算器百分号行为（`200+10%` → `220`，相对朴素 `×10%`）作教学重写。本站已有 [windows-calculator-percent](/zh/showcase/windows-calculator-percent/)——授权教学，不是零售破解。',
        '**DX-Ball／Evidence 叙事。**引用大型 Evidence 套件与字节匹配声称的社区帖，对应已有 [dx-ball](/zh/showcase/dx-ball/) 案例。读 Evidence 与未知项；别把社交数据当成你自己的核验。',
        '**智能体 + Ghidra／IDA 口径。**「REA 把 Claude／Cursor 接到 Ghidra 与 IDA」**仅**在自备引擎、且对你有权分析的目标时成立。见 [用 REA 接 Ghidra MCP](/zh/blog/ghidra-mcp-with-rea/) 与 [/zh/faq/legal-boundary/](/zh/faq/legal-boundary/)。',
        '**新教学层。**不靠原生引擎的 Electron／JS，从 [rea-playbook](/zh/showcase/rea-playbook/) 开始（仓内演示上 Evidence → 文件:行号 → 重建）。',
        '**6.4.0 + ADB（10 月 11–12 日刷新）。**上游交付 Android ADB 设备通道——见 [/zh/blog/rea-agents-6-4-0/](/zh/blog/rea-agents-6-4-0/)。公开钩子（如 [@Z3nlyte](https://x.com/Z3nlyte/status/2109420973027889232)）是新闻，不是追星。',
        '**辟谣：setup 不安装反编译器。**REA 接你已有的 Hopper／Ghidra／IDA（[@cai_smart](https://x.com/cai_smart/status/2108370877448691754)；[@Thomas3cnl](https://x.com/Thomas3cnl/status/2109195402830573847) 的用户提问）。完整答案：[/zh/faq/setup-vs-providers/](/zh/faq/setup-vs-providers/)。',
        '**来源（公开）。**2026 年 10 月中旬 X 技巧／讲解（安装清单、计算器 %、DX-Ball、Ghidra／IDA、6.4 ADB）。合法教学 URL 留在 rea.run；跳过加密货币 `$REA` 垃圾帖。',
      ],
    },
  },
  {
    slug: 'rea-agent-security-posture',
    date: '2026-10-10',
    en: {
      title: 'REA agent security posture: setup surface, consent, disposable VMs',
      description:
        'How to think about REA as an agent-operated reverse-engineering MCP: setup trust, process capture is not a sandbox, dry-run, and untrusted binaries in disposable VMs.',
      h1: 'REA agent security posture (operator view)',
      body: [
        'Third-party writeups in October 2026 framed REA less as a viral “reverse anything” slogan and more as an **agent-operated tool surface**: what `setup` writes, what MCP can see, and where humans must stay in the loop.',
        '**Setup is a privileged surface.** `npx rea-agents setup` (and client registration) can write MCP configs and skill paths on the host. Prefer `--dry-run`, pin versions, and review diffs before applying. See [/docs/install/](/docs/install/) and [/docs/mcp-clients/](/docs/mcp-clients/).',
        '**Process / file capture is not a sandbox.** Agent RE that can attach, dump, or read process memory inherits the host’s trust boundary. Treat untrusted binaries in a **disposable VM** or machine you can wipe. REA does not magically isolate malware.',
        '**Consent and Evidence.** Ask for Evidence records and marked unknowns; keep send/write actions behind approval. Agents should not invent “permission” from a marketing page.',
        '**Providers stay bring-your-own.** Ghidra/Hopper/IDA paths are yours to install and point at. Misconfigured JAVA_HOME / GHIDRA_INSTALL_DIR fails closed via `doctor` — that is a safety feature, not a bug.',
        '**External framing (summarized).** Public security-oriented reviews (e.g. explainx.ai agent-security notes; OffSec-style deep dives on providers and consent) reinforce dry-run, pin, and VM hygiene. Footnote the originals; keep primary CTAs on rea.run docs, not competitor marketing sites.',
        '**Next.** [/compliance/](/compliance/), [/faq/legal-boundary/](/faq/legal-boundary/), [agent RE with MCP](/blog/agent-reverse-engineering-mcp/).',
      ],
    },
    zh: {
      title: 'REA 智能体安全姿态：setup 面、同意、一次性虚拟机',
      description:
        '把 REA 当作智能体操作的逆向 MCP：setup 信任、进程捕获不是沙箱、dry-run，以及不信任二进制放一次性虚拟机。',
      h1: 'REA 智能体安全姿态（运维视角）',
      body: [
        '2026 年 10 月的第三方文章较少把 REA 写成病毒式「逆向一切」口号，更多写成**智能体操作的工具面**：`setup` 写什么、MCP 能看到什么、人要守住哪里。',
        '**Setup 是特权面。**`npx rea-agents setup`（以及客户端注册）可能在宿主写入 MCP 配置与 skill 路径。优先 `--dry-run`、钉版本、应用前审 diff。见 [/zh/docs/install/](/zh/docs/install/) 与 [/zh/docs/mcp-clients/](/zh/docs/mcp-clients/)。',
        '**进程／文件捕获不是沙箱。**能附加、转储或读进程内存的智能体逆向，继承宿主信任边界。不信任二进制放进**一次性虚拟机**或可擦机器。REA 不会魔法隔离恶意软件。',
        '**同意与 Evidence。**要求 Evidence 记录与标注的未知；发送／写入放在批准之后。智能体不能从介绍页发明「许可」。',
        '**提供者仍自备。**Ghidra／Hopper／IDA 路径由你安装并指向。JAVA_HOME／GHIDRA_INSTALL_DIR 配错会经 `doctor` 失败关闭——这是安全特性，不是缺陷。',
        '**外部口径（摘要）。**公开的安全向评论（如 explainx.ai 的智能体安全笔记；OffSec 风格对提供者与同意的深挖）强调 dry-run、钉版本与虚拟机卫生。脚注原文；主 CTA 留在 rea.run 文档，而非竞品营销站。',
        '**下一步。**[/zh/compliance/](/zh/compliance/)、[/zh/faq/legal-boundary/](/zh/faq/legal-boundary/)、[用 MCP 做智能体逆向](/zh/blog/agent-reverse-engineering-mcp/)。',
      ],
    },
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
