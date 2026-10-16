import type { ShowcaseCase } from './showcaseTypes';
import { SHOWCASE_GH_PROJECTS } from './showcaseGhProjects';
import { SHOWCASE_X_CASES } from './showcaseXCases';
import { SHOWCASE_LAB_CASES } from './showcaseLabCases';
export type {
  ShowcaseFootnote,
  ShowcaseRelation,
  ShowcaseGithubMeta,
  ShowcaseRating,
  ShowcaseRelated,
  ShowcaseCase,
  ShowcaseMedia,
  ShowcaseMediaImage,
  ShowcaseMediaVideo,
} from './showcaseTypes';

const SHOWCASE_CORE: ShowcaseCase[] = [
  ...SHOWCASE_LAB_CASES,
  {
    id: 'notes-first-investigation',
    date: '2026-10-09',
    status: 'published',
    attributionEn: 'Independent rea.run teaching map · Electron / multi-process investigation pattern',
    attributionZh: 'rea.run 独立教学地图 · Electron／多进程调查模式',
    tags: ['electron', 'notes', 'intro'],
    relation: 'writeup',
    github: { url: 'https://github.com/morluto/rea', stars: 57073, language: 'TypeScript', license: 'MIT', updated: '2026-10-10' },
    rating: {
      score: 3,
      labelEn: 'Teaching map (Electron boundaries)',
      labelZh: '教学地图（Electron 边界）',
      qualityEn: 'Useful first-session process map.',
      qualityZh: '有用的首场进程地图。',
      evidenceEn: 'Oriented to REA static Electron inventory.',
      evidenceZh: '面向 REA 静态 Electron 盘点。',
      limitsEn: 'Orientation page — not a single public case repo.',
      limitsZh: '定向页——不是单一公开案例仓。',
      audienceEn: 'First-time Electron investigators.',
      audienceZh: 'Electron 调查新手。',
    },
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
    relation: 'case-study',
    github: { url: 'https://github.com/microsoft/calculator', stars: 31075, language: 'C#', license: 'MIT', updated: '2026-10-02' },
    rating: {
      score: 4,
      labelEn: 'Open-source arbitration lab',
      labelZh: '开源裁决实验',
      qualityEn: 'Claims can be checked against Microsoft’s public sources.',
      qualityZh: '主张可对 Microsoft 公开源码核对。',
      evidenceEn: 'Official Calculator repo is the arbiter.',
      evidenceZh: '官方 Calculator 仓是裁决层。',
      limitsEn: 'rea.run summary — not a Microsoft-affiliated guide.',
      limitsZh: 'rea.run 摘要——非 Microsoft 官方指南。',
      audienceEn: 'Native/Windows teaching pairs.',
      audienceZh: '原生／Windows 教学搭档。',
    },
    footnotes: [
      { label: 'Microsoft Calculator (open source)', url: 'https://github.com/microsoft/calculator' },
      { label: 'On-site % dual-rule lab', url: '/lab/calculator-percent/' },
    ],
    related: [
      { href: '/lab/calculator-percent/', labelEn: 'Interactive % lab', labelZh: '交互 % 实验室' },
      { href: '/lab/', labelEn: 'Lab hub', labelZh: '实验室枢纽' },
      { href: '/lab/dino-speed/', labelEn: 'Dino speed lab', labelZh: '恐龙速度实验室' },
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
    relation: 'case-study',
    github: { url: 'https://github.com/morluto/rea/discussions/1406', updated: '2026-10-10' },
    rating: {
      score: 4,
      labelEn: 'Own-app black-box audit pattern',
      labelZh: '自有应用黑盒审计模式',
      qualityEn: 'Clear authorized outside-in posture.',
      qualityZh: '清晰的授权由外向内姿态。',
      evidenceEn: 'Public Discussion with Evidence-oriented report.',
      evidenceZh: '公开 Discussion，偏 Evidence 报告。',
      limitsEn: 'Paraphrase of one practitioner report — not a benchmark.',
      limitsZh: '单篇实践者报告改写——非基准。',
      audienceEn: 'Builders auditing their own web apps.',
      audienceZh: '审计自有 Web 应用的建造者。',
    },
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

export const SHOWCASE_CASES: ShowcaseCase[] = [...SHOWCASE_X_CASES, ...SHOWCASE_CORE, ...SHOWCASE_GH_PROJECTS];

export function publishedCases() {
  return SHOWCASE_CASES.filter((c) => c.status === 'published');
}

export function placeholderCases() {
  return SHOWCASE_CASES.filter((c) => c.status === 'placeholder');
}

export function getShowcase(id: string) {
  return SHOWCASE_CASES.find((c) => c.id === id);
}
