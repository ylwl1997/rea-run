import { SHOWCASE_GH_PROJECTS } from './showcaseGhProjects';

export type ShowcaseFootnote = {
  label: string;
  /** Prefer GitHub / primary project repos. Omit competitor doc sites. */
  url?: string;
};

export type ShowcaseRelation =
  | 'case-study'
  | 'wrapper'
  | 'packaging'
  | 'awesome'
  | 'demo'
  | 'writeup'
  | 'catalog';

export type ShowcaseGithubMeta = {
  url: string;
  stars?: number;
  language?: string;
  license?: string;
  /** ISO date YYYY-MM-DD (UTC snapshot) */
  updated?: string;
};

export type ShowcaseRating = {
  /** 1–5 community editorial score (rea.run opinion, not GitHub) */
  score: number;
  labelEn: string;
  labelZh: string;
  qualityEn: string;
  qualityZh: string;
  evidenceEn: string;
  evidenceZh: string;
  limitsEn: string;
  limitsZh: string;
  audienceEn: string;
  audienceZh: string;
};

export type ShowcaseRelated = { href: string; labelEn: string; labelZh: string };

export type ShowcaseCase = {
  id: string;
  date: string;
  status: 'placeholder' | 'published';
  attributionEn: string;
  attributionZh: string;
  tags: string[];
  footnotes: ShowcaseFootnote[];
  /** Optional dshbase-style directory fields */
  relation?: ShowcaseRelation;
  github?: ShowcaseGithubMeta;
  rating?: ShowcaseRating;
  complianceEn?: string;
  complianceZh?: string;
  related?: ShowcaseRelated[];
  en: {
    title: string;
    summary: string;
    lede: string;
    body: string[];
    takeaways: string[];
  };
  zh: {
    title: string;
    summary: string;
    lede: string;
    body: string[];
    takeaways: string[];
  };
};

const SHOWCASE_CORE: ShowcaseCase[] = [
  {
    id: 'aegis-totp',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run write-up · target app is GPL-3.0 open source',
    attributionZh: 'rea.run 独立撰写 · 目标应用为 GPL-3.0 开源',
    tags: ['android', 'totp', 'gpl', 'authorized'],
    footnotes: [
      { label: 'Aegis Authenticator (GPL-3.0)', url: 'https://github.com/beemdevelopment/Aegis' },
      { label: 'RFC 6238 (TOTP)', url: 'https://datatracker.ietf.org/doc/html/rfc6238' },
    ],
    en: {
      title: 'Aegis TOTP: recover the 30-second login-code rule from a release APK',
      summary:
        'How a GPL authenticator turns time blocks + account keys into six-digit codes — an authorized Android packaging lab, not an account bypass.',
      lede:
        'Authenticator apps look magical until you recover the rule: time is sliced into fixed periods, mixed with a secret key, then reduced to digits. Aegis publishes under GPL-3.0, which makes it a clean teaching target for authorized APK inspection with REA.',
      body: [
        '**What you are trying to learn.** Not “break someone’s MFA,” but **name the calculation**: period length, hash family, digit count, and how the UI asks for a code at a given timestamp.',
        '**How REA helps.** Point an agent at a release APK you are allowed to analyze. Ask it to locate TOTP-related classes, follow display/copy call sites, and return Evidence (method names, defaults, decompiled snippets). The agent should mark unknowns instead of inventing crypto.',
        '**What “good” looks like.** A readable summary such as: seconds → floor division by period → HMAC with the account key → dynamic truncation → modulo 10^digits with zero-padding. Cross-check against public RFC 6238 test vectors when you rebuild a tiny demo clock.',
        '**Guardrails.** Use official or otherwise authorized builds. Do not harvest other people’s secrets from devices you do not own. Reconstructing TOTP math on GPL software is interoperability research; stealing live account seeds is not.',
      ],
      takeaways: [
        'Prefer licensed targets when teaching Android RE.',
        'Ask for Evidence + unknowns, then verify in JADX/your own rebuild.',
        'Separate “understand TOTP” from “attack an account.”',
      ],
    },
    zh: {
      title: 'Aegis TOTP：从发行版 APK 还原 30 秒登录码规则',
      summary: 'GPL 身份验证器如何把时间块与账户密钥变成六位码——授权的 Android 打包实验，不是攻破账户。',
      lede:
        '验证器应用看起来像魔法，直到你还原规则：时间被切成固定周期，与密钥混合，再收成数字。Aegis 以 GPL-3.0 发布，适合作为授权 APK 检查的教学目标。',
      body: [
        '**你要学什么。**不是「打掉别人的 MFA」，而是**叫出计算式**：周期、哈希族、位数，以及 UI 如何按时间戳要码。',
        '**REA 能帮什么。**把智能体指向你有权分析的发行版 APK。让它定位 TOTP 相关类、跟踪显示／复制调用点，返回 Evidence（方法名、默认值、反编译片段）。未知项要标出，不要编造密码学。',
        '**好结果长什么样。**可读摘要例如：秒 → 按周期向下取整 → 用账户密钥做 HMAC → 动态截断 → 对 10^位数取模并补零。重建小时钟时，可对照 RFC 6238 公开测试向量。',
        '**边界。**使用官方或其它授权构建。不要从你不拥有的设备收割他人密钥。在 GPL 软件上重建 TOTP 数学是互操作研究；偷取在用账户种子不是。',
      ],
      takeaways: [
        '教 Android 逆向时优先选有许可的目标。',
        '先要 Evidence 与未知项，再自己核实／重建。',
        '把「理解 TOTP」与「攻击账户」分开。',
      ],
    },
  },
  {
    id: 'downunderctf',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run orientation · CTF / authorized challenge framing',
    attributionZh: 'rea.run 独立定向说明 · CTF／授权题目语境',
    tags: ['ctf', 'challenge', 'authorized'],
    footnotes: [
      { label: 'DownUnderCTF (event site)', url: 'https://downunderctf.com/' },
    ],
    en: {
      title: 'DownUnderCTF-style challenge: agent-assisted RE under contest rules',
      summary:
        'Using REA inside a contest-style reverse challenge — Evidence first, rules always win.',
      lede:
        'CTF reverse tasks are a classic authorized sandbox: the organizer ships a binary or package and defines what “solve” means. Agents with REA can speed up inventory, but the contest rules still own the engagement.',
      body: [
        '**Pattern.** Download the challenge artifact from the event, keep it offline as required, and ask the agent for entry points, suspicious strings, and the function that gates the flag check — with citations.',
        '**Where humans stay.** Validate that suggested patches or keygens are in-scope. Many contests forbid sharing full solutions during the live window; your agent is a lab partner, not a broadcast channel.',
        '**What to practice.** Writing tight prompts (“show the comparison that accepts the flag”), demanding unresolved edges, and translating Evidence into a short write-up you could defend to a teammate.',
        '**Out of scope on rea.run.** We do not republish live flags, cracks, or DRM circumvention. Treat every CTF case as time-boxed authorization from the organizer.',
      ],
      takeaways: [
        'Contest rules = your authorization boundary.',
        'REA accelerates inventory; you still verify and write the story.',
        'Never launder CTF habits into attacking production software you do not own.',
      ],
    },
    zh: {
      title: 'DownUnderCTF 风格题目：竞赛规则下的智能体辅助逆向',
      summary: '在赛题式逆向中使用 REA——先 Evidence，规则永远优先。',
      lede:
        'CTF 逆向是经典的授权沙箱：主办方发放二进制或包，并定义「解出」的含义。带 REA 的智能体能加快盘点，但赛规仍是约束边界。',
      body: [
        '**套路。**按赛事要求下载题目制品，必要时离线，让智能体找入口、可疑字符串、以及卡住 flag 检查的函数——并给出引用。',
        '**人要守住什么。**确认补丁／生成器建议仍在赛规内。许多比赛在进行期间禁止公开完整题解；智能体是实验搭档，不是广播频道。',
        '**练什么。**写紧提示（「指出接受 flag 的比较」）、要求未解析边，并把 Evidence 写成能对队友交代的短文。',
        '**rea.run 不做的。**不转载进行中的 flag、破解或规避 DRM。把每道 CTF 都当作主办方限时授权。',
      ],
      takeaways: [
        '赛规 = 你的授权边界。',
        'REA 加速盘点；核实与叙事仍归你。',
        '不要把 CTF 习惯搬去打你不拥有的生产软件。',
      ],
    },
  },
  {
    id: 'dx-ball',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run write-up · community reconstruction on GitHub',
    attributionZh: 'rea.run 独立撰写 · 社区重建见 GitHub',
    tags: ['game', 'reconstruction', 'community'],
    footnotes: [
      { label: 'Community reconstruction · N0zoM1z0/dx-ball', url: 'https://github.com/N0zoM1z0/dx-ball' },
    ],
    en: {
      title: 'DX-Ball: Evidence-backed explanation paired with an open reconstruction',
      summary:
        'A Breakout-style game lab: inspect behavior, then compare against a public reconstruction repo.',
      lede:
        'Game RE shines when you can pair **what the binary does** with **a readable rebuild**. Community repos that reconstruct DX-Ball-style gameplay give builders a place to compare agent Evidence against working code.',
      body: [
        '**Workflow.** Ask REA for collision, scoring, or ball-speed rules with citations. Keep a side-by-side tab open on the reconstruction repository so claims can be falsified quickly.',
        '**Why reconstruction matters.** Decompiled snippets alone are easy to misread. A small open implementation forces the explanation to stay honest about physics constants and edge cases.',
        '**Authorization.** Only analyze copies you have rights to study, and respect the reconstruction author’s license when you fork or quote.',
        '**Teaching value.** Students see the full loop: question → Evidence → explanation → independent rebuild — without needing crack tools.',
      ],
      takeaways: [
        'Pair agent Evidence with a cloneable reconstruction.',
        'Falsify physics/constants against running code.',
        'Honor licenses on both the target and the rebuild.',
      ],
    },
    zh: {
      title: 'DX-Ball：有 Evidence 的解释 + 开源重建',
      summary: '打砖块类游戏实验：检查行为，再对照公开重建仓库。',
      lede:
        '当「二进制在做什么」能与「可读重建」对照时，游戏逆向最有说服力。重建 DX-Ball 类玩法的社区仓库，让建造者能迅速证伪智能体结论。',
      body: [
        '**流程。**让 REA 给出碰撞、计分或球速规则并带引用。旁边打开重建仓库，方便快速打假。',
        '**为何需要重建。**反编译片段容易误读。小型开源实现逼着解释对物理常数与边界情况保持诚实。',
        '**授权。**只分析你有权研究的拷贝，引用／fork 重建时遵守作者许可。',
        '**教学价值。**学生看到完整闭环：提问 → Evidence → 解释 → 独立重建——无需破解工具。',
      ],
      takeaways: [
        'Evidence 与可克隆重建成对出现。',
        '用可运行代码证伪物理／常数。',
        '目标与重建的许可都要尊重。',
      ],
    },
  },
  {
    id: 'th04',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run write-up · community reconstruction on GitHub',
    attributionZh: 'rea.run 独立撰写 · 社区重建见 GitHub',
    tags: ['game', 'reconstruction', 'community'],
    footnotes: [
      { label: 'Community reconstruction · N0zoM1z0/th04', url: 'https://github.com/N0zoM1z0/th04' },
    ],
    en: {
      title: 'TH04: another Evidence → reconstruction loop from the community',
      summary:
        'Same healthy pattern as DX-Ball: inspect, explain, rebuild in the open.',
      lede:
        'TH04 continues the community habit of publishing reconstructions beside REA-assisted inspection notes. rea.run highlights the **loop**, not a play-by-play clone of anyone else’s page.',
      body: [
        '**Reuse the checklist.** Inventory systems (input, entities, staging), demand Evidence for each claim, then map those claims onto the reconstruction’s modules.',
        '**Diff mindset.** When agent prose and repo code disagree, believe the runnable code until new Evidence appears.',
        '**Scope discipline.** Stick to mechanics you are documenting. Avoid shipping ripped assets or DRM-stripped builds as “teaching material.”',
        '**For teams.** This loop is a template for internal postmortems on your own games: agent gathers, humans decide what enters the design doc.',
      ],
      takeaways: [
        'Loops beat one-off screenshots.',
        'Runnable reconstructions arbitrate disputes.',
        'Keep assets and DRM out of the teaching pack.',
      ],
    },
    zh: {
      title: 'TH04：社区的又一次 Evidence → 重建闭环',
      summary: '与 DX-Ball 相同的健康模式：检查、解释、公开重建。',
      lede:
        'TH04 延续「REA 辅助检查笔记 + 公开重建」的社区习惯。rea.run 强调的是**闭环**，而不是逐段复制他人页面。',
      body: [
        '**复用清单。**盘点系统（输入、实体、关卡），每条主张都要 Evidence，再映射到重建仓库的模块。',
        '**对照思维。**智能体叙述与仓库代码冲突时，先信可运行代码，直到出现新 Evidence。',
        '**范围纪律。**只记录你在文档化的机制。不要把扒资源或去 DRM 构建当作「教材」。',
        '**给团队。**这条闭环可当作自研游戏复盘模板：智能体收集，人决定写进设计文档的内容。',
      ],
      takeaways: [
        '闭环胜过一次性截图。',
        '可运行重建裁决分歧。',
        '教材里不要夹带资源盗用或去 DRM。',
      ],
    },
  },
  {
    id: 'notes-first-investigation',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run teaching map · Electron / multi-process investigation pattern',
    attributionZh: 'rea.run 独立教学地图 · Electron／多进程调查模式',
    tags: ['electron', 'notes', 'intro'],
    footnotes: [
      { label: 'REA upstream repository', url: 'https://github.com/morluto/rea' },
    ],
    en: {
      title: 'Notes-style intro: first investigation across UI and process boundaries',
      summary:
        'A first-session map for Electron-like apps: find where a feature actually lives before you rewrite it.',
      lede:
        'Desktop note apps often split work across renderer, preload, and main-process code. A first REA investigation should map those boundaries so your agent does not “fix” the wrong layer.',
      body: [
        '**Starter questions.** “Where does paste land?” “Which IPC channel carries search?” “What ships inside the asar?” Demand paths and symbols in the answer.',
        '**Static before invasive.** JS/Electron static graphs frequently answer inventory questions without native engines. Reach for Ghidra only when a native helper actually matters.',
        '**Write the map.** A one-page diagram of processes + modules is the deliverable — not a speculative redesign.',
        '**Authorization.** Inspect builds you own, CI artifacts you produce, or packages you have permission to study.',
      ],
      takeaways: [
        'Name the process boundary before editing.',
        'Prefer static Electron inventory when it suffices.',
        'Ship a map, not vibes.',
      ],
    },
    zh: {
      title: 'Notes 风格入门：跨 UI 与进程边界的第一次调查',
      summary: 'Electron 类应用的首场地图：先找功能真正所在，再谈改写。',
      lede:
        '桌面笔记类应用常把工作拆在 renderer、preload 与主进程。第一次 REA 调查应画清边界，避免智能体改错层。',
      body: [
        '**起步问题。**「粘贴落在哪？」「搜索走哪条 IPC？」「asar 里有什么？」答案里要有路径与符号。',
        '**先静态。**JS／Electron 静态图常常已够做盘点；只有原生辅助真的重要时再上 Ghidra。',
        '**写出地图。**一页进程 + 模块图才是交付物——不是臆测式重设计。',
        '**授权。**检查自有构建、自己的 CI 制品，或获准研究的包。',
      ],
      takeaways: [
        '改代码前先点名进程边界。',
        '够用就做静态 Electron 盘点。',
        '交付地图，而不是感觉。',
      ],
    },
  },
  {
    id: 'windows-calculator-percent',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run summary · contrast with Microsoft’s open-source Calculator',
    attributionZh: 'rea.run 独立摘要 · 对照 Microsoft 开源 Calculator',
    tags: ['windows', 'native', 'opensource'],
    footnotes: [
      { label: 'Microsoft Calculator (open source)', url: 'https://github.com/microsoft/calculator' },
    ],
    en: {
      title: 'Windows Calculator %: open-source contrast for a familiar quirk',
      summary:
        'Why 200 + 10% can yield 220 — and how to check explanations against Microsoft’s public sources.',
      lede:
        'Percent on a calculator is a classic “brochure vs binary” puzzle: after addition, 10% often means “10% of the first operand,” while after multiply it may mean “divide by 100.” Microsoft publishes Calculator sources, so claims can be cross-checked.',
      body: [
        '**The question.** Reproduce the operator-dependent percent rule with citations (command IDs, branches, constants such as 100).',
        '**Agent loop.** Ask REA for the percent handler Evidence, then open the matching files in the official repository. Prefer named symbols from public source when aligning decompilation.',
        '**Teaching payoff.** Students learn to distrust a single numeric demo until the branch is named and matched to tests in the open tree.',
        '**Guardrails.** This is interoperability / education on an open project — not advice to tamper with licensing or OS components you are not authorized to modify.',
      ],
      takeaways: [
        'Operator context changes percent semantics.',
        'Open-source trees are the arbitration layer.',
        'Cite branches, do not meme screenshots alone.',
      ],
    },
    zh: {
      title: 'Windows 计算器 %：用开源对照熟悉的「怪结果」',
      summary: '为何 200 + 10% 可能得到 220——以及如何用 Microsoft 公开源码核对解释。',
      lede:
        '计算器上的百分号是经典的「宣传页 vs 二进制」谜题：加法后 10% 常表示「第一个操作数的 10%」，乘法后则可能是「除以 100」。Microsoft 公开了 Calculator 源码，主张可以对质。',
      body: [
        '**问题。**还原依赖运算符的百分号规则，并给出引用（命令 ID、分支、诸如 100 的常数）。',
        '**智能体循环。**让 REA 给出百分号处理 Evidence，再打开官方仓库对应文件。对齐反编译时优先用公开源码中的具名符号。',
        '**教学收益。**学生学会：在分支被点名并对照开源测试之前，不轻信单次数字演示。',
        '**边界。**这是对开源项目的互操作／教育——不是教你去改无权修改的许可或系统组件。',
      ],
      takeaways: [
        '运算符上下文会改变 % 语义。',
        '开源树是裁决层。',
        '引用分支，不要只玩截图。',
      ],
    },
  },
  {
    id: 'discussion-1406-blackbox-audit',
    date: '2026-10-10',
    status: 'published',
    attributionEn: 'Paraphrase of a community report on upstream GitHub Discussions',
    attributionZh: '改写自上游 GitHub Discussions 的社区报告',
    tags: ['web', 'black-box', 'windows', 'community'],
    footnotes: [
      {
        label: 'morluto/rea Discussions #1406 · @gold567200',
        url: 'https://github.com/morluto/rea/discussions/1406',
      },
    ],
    en: {
      title: 'Outside-in “leak check” of a production Next.js + Stripe app',
      summary:
        'A practitioner used REA browser inspection on their own portal: what can an anonymous visitor see?',
      lede:
        'Black-box product audits stay ethical when the target is yours (or explicitly authorized) and the collector only uses normal-user surfaces. A public Discussion describes exactly that pattern with REA on Windows.',
      body: [
        '**Setup.** Isolated headless Chrome profile, loopback CDP, REA page inspection — asking what scripts load, whether source maps leak, and what storage keys exist for an unauthenticated session.',
        '**Reported outcomes (paraphrased).** Bundles without secrets or internal hosts; admin routes redirecting without a session; forged cookies/webhooks rejected; one plain-HTTP issue on a tunnel host later fixed with Always Use HTTPS.',
        '**Side note from the author.** Analyzing a large Turbopack chunk directory was slow/heavy on their machine — useful maintainer feedback, not a benchmark claim from rea.run.',
        '**Why it belongs here.** It shows web REA work aimed at **defense of your own app**, with Evidence IDs feeding a client-style report — the opposite of cracking third-party DRM.',
      ],
      takeaways: [
        'Own/authorized targets only for outside-in audits.',
        'Evidence-backed “what ships to the browser” beats vibes.',
        'Fix transport gaps; do not celebrate bypass toys.',
      ],
    },
    zh: {
      title: '对生产 Next.js + Stripe 应用的「由外向内」泄露检查',
      summary: '实践者用 REA 浏览器检查自有门户：匿名访客能看到什么？',
      lede:
        '当目标是你的（或明确授权）且采集只走普通用户面时，黑盒产品审计才站得住。一篇公开 Discussion 描述了在 Windows 上用 REA 做这件事的模式。',
      body: [
        '**设置。**隔离的无头 Chrome 配置、回环 CDP、REA 页面检查——问加载了哪些脚本、sourcemap 是否泄露、未登录会话有哪些存储键。',
        '**报告结果（改写）。**包内无密钥／内网主机；管理路由无会话即重定向；伪造 cookie／webhook 被拒；隧道主机曾明文 HTTP，后以 Always Use HTTPS 修复。',
        '**作者附注。**分析大型 Turbopack 分块目录在其机器上偏慢／吃内存——对维护者有用，不是 rea.run 的基准声明。',
        '**为何收录。**展示面向**防护自有应用**的 Web REA，Evidence 进入客户风格报告——与破解第三方 DRM 相反。',
      ],
      takeaways: [
        '由外向内审计仅限自有／授权目标。',
        '有 Evidence 的「浏览器收到什么」胜过感觉。',
        '修传输缺口；不要吹绕过玩具。',
      ],
    },
  },
];

export const SHOWCASE_CASES: ShowcaseCase[] = [...SHOWCASE_CORE, ...SHOWCASE_GH_PROJECTS];

export function publishedCases() {
  return SHOWCASE_CASES.filter((c) => c.status === 'published');
}

export function placeholderCases() {
  return SHOWCASE_CASES.filter((c) => c.status === 'placeholder');
}

export function getShowcase(id: string) {
  return SHOWCASE_CASES.find((c) => c.id === id);
}
