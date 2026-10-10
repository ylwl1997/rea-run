export type ShowcaseCase = {
  id: string;
  date: string;
  /** placeholder = format sample only; published = real community/official-adjacent case */
  status: 'placeholder' | 'published';
  source: { label: string; url: string; handle?: string };
  /** Optional secondary verifiable link (e.g. reconstruction repo) */
  secondary?: { label: string; url: string };
  attributionEn: string;
  attributionZh: string;
  tags: string[];
  en: { title: string; summary: string };
  zh: { title: string; summary: string };
};

/**
 * Public, verifiable cases. Summaries are original to rea.run — not republished pages.
 * Drop new entries here with status: 'published' when PM supplies more.
 */
export const SHOWCASE_CASES: ShowcaseCase[] = [
  {
    id: 'aegis-totp',
    date: '2026-10-09',
    status: 'published',
    source: {
      label: 'rea.tools showcase · Aegis',
      url: 'https://rea.tools/showcase/aegis/',
    },
    secondary: {
      label: 'Aegis (GPL-3.0) upstream',
      url: 'https://github.com/beemdevelopment/Aegis',
    },
    attributionEn: 'Third-party showcase (rea.tools) · target app GPL-3.0 · summarized independently on rea.run',
    attributionZh: '第三方案例页（rea.tools）· 目标应用 GPL-3.0 · rea.run 独立摘要',
    tags: ['android', 'totp', 'gpl', 'authorized'],
    en: {
      title: 'Aegis TOTP: recover the 30-second login-code rule from a release APK',
      summary:
        'A public walkthrough inspects the official Aegis Authenticator APK to locate how six-digit codes are produced from time blocks and account keys (TOTP), then checks a small reconstruction against known reference vectors. Useful as an authorized Android packaging example — not a bypass of anyone’s account security.',
    },
    zh: {
      title: 'Aegis TOTP：从发行版 APK 还原 30 秒登录码规则',
      summary:
        '公开案例检查官方 Aegis Authenticator APK，定位六位码如何由时间块与账户密钥生成（TOTP），再用小型重建对照公开参考向量。适合作为授权的 Android 打包分析示例——不是绕过他人账户安全。',
    },
  },
  {
    id: 'downunderctf',
    date: '2026-10-09',
    status: 'published',
    source: {
      label: 'rea.tools showcase · DownUnderCTF',
      url: 'https://rea.tools/showcase/ctf/',
    },
    attributionEn: 'Third-party showcase (rea.tools) · CTF / authorized challenge framing · rea.run original summary',
    attributionZh: '第三方案例页（rea.tools）· CTF／授权题目语境 · rea.run 原创摘要',
    tags: ['ctf', 'challenge', 'authorized'],
    en: {
      title: 'DownUnderCTF-style challenge: agent-assisted RE under contest rules',
      summary:
        'A third-party write-up shows using REA inside a CTF-style reverse-engineering challenge — locating the intended logic path and explaining evidence under contest constraints. Treat it as authorized lab practice; follow that event’s rules and do not import crack/DRM workflows.',
    },
    zh: {
      title: 'DownUnderCTF 风格题目：竞赛规则下的智能体辅助逆向',
      summary:
        '第三方记述展示在 CTF 类逆向题中使用 REA——在赛规约束下定位目标逻辑路径并解释证据。当作授权实验练习；遵守赛事规则，勿引入破解／DRM 流程。',
    },
  },
  {
    id: 'dx-ball',
    date: '2026-10-09',
    status: 'published',
    source: {
      label: 'rea.tools showcase · DX-Ball',
      url: 'https://rea.tools/showcase/dx-ball/',
    },
    secondary: {
      label: 'Reconstruction repo · N0zoM1z0/dx-ball',
      url: 'https://github.com/N0zoM1z0/dx-ball',
    },
    attributionEn: 'Third-party showcase + community reconstruction repo · attributed · rea.run original summary',
    attributionZh: '第三方案例页 + 社区重建仓库 · 已注明出处 · rea.run 原创摘要',
    tags: ['game', 'reconstruction', 'community'],
    en: {
      title: 'DX-Ball: community reconstruction paired with a public REA walkthrough',
      summary:
        'A showcase page documents inspecting a classic Breakout-style game with REA; a linked GitHub repo holds a community reconstruction for comparison. Good pattern: Evidence-backed explanation plus an open reconstruction readers can clone — still within authorized/ownership assumptions of the authors.',
    },
    zh: {
      title: 'DX-Ball：公开 REA 走读 + 社区重建仓库',
      summary:
        '案例页记述用 REA 检查经典打砖块类游戏；配套 GitHub 仓库提供社区重建便于对照。好模式：有 Evidence 的解释 + 可克隆的开源重建——仍以作者声明的授权／权属为前提。',
    },
  },
  {
    id: 'th04',
    date: '2026-10-09',
    status: 'published',
    source: {
      label: 'rea.tools showcase · TH04',
      url: 'https://rea.tools/showcase/th04/',
    },
    secondary: {
      label: 'Reconstruction repo · N0zoM1z0/th04',
      url: 'https://github.com/N0zoM1z0/th04',
    },
    attributionEn: 'Third-party showcase + community reconstruction repo · attributed · rea.run original summary',
    attributionZh: '第三方案例页 + 社区重建仓库 · 已注明出处 · rea.run 原创摘要',
    tags: ['game', 'reconstruction', 'community'],
    en: {
      title: 'TH04: another Evidence → reconstruction loop from the community',
      summary:
        'Similar to DX-Ball: a public showcase narrates REA-assisted inspection, while a GitHub project captures a reconstruction. rea.run only paraphrases the pattern so builders can see how write-ups and repos fit together — verify details on the linked sources.',
    },
    zh: {
      title: 'TH04：社区的又一次 Evidence → 重建闭环',
      summary:
        '与 DX-Ball 类似：公开案例讲述 REA 辅助检查，GitHub 项目承载重建。rea.run 只概括这一模式，便于建造者理解「记述 + 仓库」如何配合——细节请回链源核验。',
    },
  },
  {
    id: 'notes-first-investigation',
    date: '2026-10-09',
    status: 'published',
    source: {
      label: 'rea.tools · First investigation (Notes)',
      url: 'https://rea.tools/first-investigation/',
    },
    attributionEn: 'Third-party product narrative (rea.tools) · rea.run original summary',
    attributionZh: '第三方产品叙事（rea.tools）· rea.run 原创摘要',
    tags: ['electron', 'notes', 'intro'],
    en: {
      title: 'Notes intro: first investigation path for an Electron-style app',
      summary:
        'An orientation page walks a first REA investigation against a Notes-like desktop app — finding where a feature actually lives across UI and process boundaries. Use it as a teaching map; confirm steps and version claims on the live third-party page.',
    },
    zh: {
      title: 'Notes 入门：Electron 类应用的第一次调查路径',
      summary:
        '定向页演示对 Notes 类桌面应用的首次 REA 调查——在 UI 与进程边界之间找到功能真正所在。当作教学地图；步骤与版本声明请以第三方现网页为准。',
    },
  },
  {
    id: 'windows-calculator-percent',
    date: '2026-10-09',
    status: 'published',
    source: {
      label: 'Microsoft Calculator (open source)',
      url: 'https://github.com/microsoft/calculator',
    },
    secondary: {
      label: 'Third-party narrative context · rea.tools home',
      url: 'https://rea.tools/',
    },
    attributionEn: 'Official Microsoft repo · third-party narrative on rea.tools home · rea.run independent summary',
    attributionZh: 'Microsoft 官方仓库 · rea.tools 首页第三方叙事 · rea.run 独立摘要',
    tags: ['windows', 'native', 'opensource', 'official-source'],
    en: {
      title: 'Windows Calculator %: open-source contrast for a familiar quirk',
      summary:
        'A widely told REA demo asks why 200 + 10% yields 220: the percent handler uses different rules after + versus ×. Cross-check explanations against Microsoft’s public Calculator sources and tests — treat marketing demos as third-party narration, not a substitute for the official tree.',
    },
    zh: {
      title: 'Windows 计算器 %：用开源对照熟悉的「怪结果」',
      summary:
        '常见 REA 演示追问为何 200 + 10% 得到 220：百分号在 + 与 × 之后走不同规则。请把解释对照 Microsoft 公开的 Calculator 源码与测试——营销演示是第三方叙事，不能替代官方仓库。',
    },
  },
  {
    id: 'discussion-1406-blackbox-audit',
    date: '2026-10-10',
    status: 'published',
    source: {
      label: 'GitHub Discussions #1406 · morluto/rea',
      url: 'https://github.com/morluto/rea/discussions/1406',
      handle: '@gold567200',
    },
    attributionEn: 'Community report on upstream Discussions · third-party author · paraphrased on rea.run',
    attributionZh: '上游 Discussions 社区报告 · 第三方作者 · rea.run 改写摘要',
    tags: ['web', 'black-box', 'windows', 'community'],
    en: {
      title: 'Outside-in “leak check” of a production Next.js + Stripe app',
      summary:
        'A practitioner posted how they used REA’s browser inspection (isolated Chrome profile) on their own client portal to ask what an unauthenticated visitor can see: shipped JS, storage, redirects, and header gaps. They report no secrets in bundles, solid access checks, and one HTTP-on-tunnel-host issue later fixed — plus a perf note on analyzing Turbopack chunks. Read the discussion for primary evidence.',
    },
    zh: {
      title: '对生产 Next.js + Stripe 应用的「由外向内」泄露检查',
      summary:
        '实践者在 Discussions 分享：用 REA 浏览器检查（隔离 Chrome 配置）审计自有客户门户，问未登录访客能看到什么——下发 JS、存储、重定向与头字段缺口。其报告称包内无密钥、访问控制稳固，并发现隧道主机未强制 HTTPS（后已修），同时反馈 Turbopack 分块分析偏慢。以讨论帖为第一证据。',
    },
  },
];

export function publishedCases() {
  return SHOWCASE_CASES.filter((c) => c.status === 'published');
}

export function placeholderCases() {
  return SHOWCASE_CASES.filter((c) => c.status === 'placeholder');
}
