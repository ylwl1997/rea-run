export type LifeModule = {
  id: string;
  tag: string;
  en: { title: string; blurb: string };
  zh: { title: string; blurb: string };
};

export const LIFE_MODULES: LifeModule[] = [
  {
    id: 'signal',
    tag: 'signal',
    en: {
      title: 'Signal Atlas',
      blurb: 'Catalog public client/API-visible behavior, protocol fingerprints, and public configs.',
    },
    zh: {
      title: '信号图鉴',
      blurb: '汇总公开客户端／API 可见行为、协议指纹与公开配置。',
    },
  },
  {
    id: 'arch',
    tag: 'arch',
    en: {
      title: 'Architecture Hypotheses',
      blurb: 'Falsifiable system diagrams, data flows, and service-boundary hypotheses with agents.',
    },
    zh: {
      title: '架构假说',
      blurb: '用 agent 协作产出可证伪的系统图、数据流与服务边界假说。',
    },
  },
  {
    id: 'behavior',
    tag: 'behavior',
    en: {
      title: 'Behavior Models',
      blurb: 'Testable models of public feed, rate-limit, ranking, and auth flows.',
    },
    zh: {
      title: '行为模型',
      blurb: 'feed、限流、推荐、鉴权等公开行为的可测试模型。',
    },
  },
  {
    id: 'playbook',
    tag: 'playbook',
    en: {
      title: 'Agent Playbooks',
      blurb: 'Reusable prompts and workflows for any coding agent (Grok Bot, Dots, Claude, Codex, Hermes, …) + REA.',
    },
    zh: {
      title: 'Agent 剧本',
      blurb: '任意 coding agent（Grok Bot／Dots／Claude／Codex／Hermes 等）+ REA 的可复用 prompt 与工作流。',
    },
  },
  {
    id: 'diff-prep',
    tag: 'diff-prep',
    en: {
      title: 'Open Diff Prep',
      blurb: 'Predefine compare dimensions (modules, protocols, storage, policy) for open-source day.',
    },
    zh: {
      title: '开源差分预备',
      blurb: '预定义对照维度（模块、协议、存储、策略），开源日填空。',
    },
  },
  {
    id: 'chronicle',
    tag: 'chronicle',
    en: {
      title: 'Chronicle',
      blurb: 'Community log of milestones, failures, and turns — art documentary.',
    },
    zh: {
      title: '进程纪事',
      blurb: '社区日志、里程碑、失败与转向（艺术纪实）。',
    },
  },
];

export const LIFE_STAGES = [
  { id: 'call', en: 'Gathering', zh: '召集中' },
  { id: 'signals', en: 'Signal collecting', zh: '信号收集' },
  { id: 'hypotheses', en: 'Hypothesis convergence', zh: '假说收敛' },
  { id: 'compare', en: 'Open-source day compare', zh: '开源日对照' },
  { id: 'archive', en: 'Archive', zh: '归档' },
] as const;

/** Manual checklist coverage for Signal Atlas milestone (0–100). */
export const SIGNAL_ATLAS_COVERAGE_PCT = 18;

export const AGENT_TOOL_KEYS = ['Grok Bot', 'Dots', 'Claude', 'Codex', 'Hermes', 'Other'] as const;


export type SignalAtlasEntry = {
  id: string;
  kind: 'oss' | 'docs' | 'client' | 'api' | 'talk';
  status: 'seed' | 'partial' | 'needs-work';
  url?: string;
  en: { title: string; note: string; compliance: string };
  zh: { title: string; note: string; compliance: string };
};

/** Starter Signal Atlas rows — public/authorized sources only. */
export const SIGNAL_ATLAS_ENTRIES: SignalAtlasEntry[] = [
  {
    id: 'x-algorithm',
    kind: 'oss',
    status: 'partial',
    url: 'https://github.com/xai-org/x-algorithm',
    en: {
      title: 'xai-org/x-algorithm (For You ranking slice)',
      note: 'Partly open-sourced feed-ranking algorithm. Treat as a public code signal for ranking hypotheses — not a map of the whole X stack.',
      compliance: 'Public OSS · authorized to read/cite · not a license to probe private backends',
    },
    zh: {
      title: 'xai-org/x-algorithm（For You 排序切片）',
      note: '部分开源的信息流排序算法。当作公开代码信号，支撑排序假说——不是整站 X 架构图。',
      compliance: '公开 OSS · 可合法阅读／引用 · 不授权探测非公开后端',
    },
  },
  {
    id: 'public-api-docs',
    kind: 'docs',
    status: 'needs-work',
    url: 'https://docs.x.com/',
    en: {
      title: 'Public developer docs (docs.x.com)',
      note: 'Documented API surfaces, auth patterns, and rate-limit language visible to developers.',
      compliance: 'Public documentation only',
    },
    zh: {
      title: '公开开发者文档（docs.x.com）',
      note: '文档化的 API 面、鉴权模式与限流表述。',
      compliance: '仅公开文档',
    },
  },
  {
    id: 'client-visible-feed',
    kind: 'client',
    status: 'seed',
    en: {
      title: 'Client-visible For You / Following behavior',
      note: 'What a normal logged-in client can see: tabs, refresh, public engagement affordances. Observation ≠ scraping private APIs.',
      compliance: 'Own account · public UX observation · no unauthorized access',
    },
    zh: {
      title: '客户端可见的 For You／Following 行为',
      note: '普通登录客户端可见：标签、刷新、公开互动控件。观察 ≠ 抓取私有 API。',
      compliance: '自有账号 · 公开 UX 观察 · 禁止未授权访问',
    },
  },
  {
    id: 'public-talks',
    kind: 'talk',
    status: 'needs-work',
    en: {
      title: 'Public talks / blogs / engineering posts',
      note: 'Cited speeches and posts about scale, ranking, or infrastructure — only when URL-citable.',
      compliance: 'Public citable sources only',
    },
    zh: {
      title: '公开演讲／博客／工程博文',
      note: '关于规模、排序或基础设施的公开陈述——必须有可引用 URL。',
      compliance: '仅公开可引用源',
    },
  },
];

export type BehaviorModelSample = {
  id: string;
  en: { title: string; claim: string; test: string; limits: string };
  zh: { title: string; claim: string; test: string; limits: string };
};

/** Placeholder / seed Behavior Models — falsifiable, public-signal based. */
export const BEHAVIOR_MODEL_SAMPLES: BehaviorModelSample[] = [
  {
    id: 'fy-rank-oss-slice',
    en: {
      title: 'For You ranking uses published x-algorithm features (seed)',
      claim:
        'Hypothesis: features and stages described in the public x-algorithm repo explain a meaningful share of client-visible For You ordering differences between two refreshes on the same account.',
      test: 'Reproduce with your own account: capture two public feed refreshes, list visible posts, and map claimed features from the OSS README/code to what changed — cite commit SHA.',
      limits: 'Does not claim access to private candidate sets, ads, or non-public services. Partial OSS ≠ full product.',
    },
    zh: {
      title: 'For You 排序使用已公开的 x-algorithm 特征（种子）',
      claim:
        '假说：公开 x-algorithm 仓库描述的特征／阶段，能解释同一账号两次刷新之间客户端可见排序差异的显著部分。',
      test: '用自有账号复现：记录两次公开信息流刷新的可见帖，将 OSS README／代码中的特征映射到变化——注明 commit SHA。',
      limits: '不声称能接触私有候选集、广告或非公开服务。部分开源 ≠ 全产品。',
    },
  },
  {
    id: 'rate-limit-public',
    en: {
      title: 'Public API rate-limit envelopes (placeholder)',
      claim: 'Documented rate limits on public developer APIs are enforceable upper bounds for authorized app traffic.',
      test: 'Cite the docs URL and version date; do not exceed limits; no credential stuffing or auth bypass.',
      limits: 'Placeholder until a submission fills measured envelopes from public docs only.',
    },
    zh: {
      title: '公开 API 限流包络（占位）',
      claim: '公开开发者 API 文档中的限流，是已授权应用流量的可执行上界。',
      test: '引用文档 URL 与版本日期；不超限；不做撞库或鉴权绕过。',
      limits: '占位：等待仅基于公开文档的实测投稿填空。',
    },
  },
];

export const CONTRIBUTE_PATH = [
  {
    step: 1,
    moduleHint: 'signal' as const,
    en: {
      title: 'Pick a module',
      body: 'Signal Atlas (label signal) for sources; arch for diagrams; behavior for testable models; playbook / diff-prep / chronicle as needed.',
    },
    zh: {
      title: '选模块',
      body: '信号图鉴用 label signal；架构图用 arch；可测试模型用 behavior；剧本／差分预备／纪事按需。',
    },
  },
  {
    step: 2,
    moduleHint: 'signal',
    en: {
      title: 'Label correctly',
      body: 'GitHub Issue labels: life-process + module tag (signal | arch | behavior | playbook | diff-prep | chronicle) + status:open.',
    },
    zh: {
      title: '打对标签',
      body: 'Issues 标签：life-process + 模块子标签（signal｜arch｜behavior｜playbook｜diff-prep｜chronicle）+ status:open。',
    },
  },
  {
    step: 3,
    moduleHint: 'signal',
    en: {
      title: 'Pass the acceptance checklist',
      body: 'Summary · method · public citations · repro steps · limits · agent tools disclosed. Public signals only.',
    },
    zh: {
      title: '通过验收清单',
      body: '摘要 · 方法 · 公开引用 · 可复现步骤 · 局限 · 披露 agent 工具。仅公开信号。',
    },
  },
  {
    step: 4,
    moduleHint: 'signal',
    en: {
      title: 'Submit on rea.run',
      body: 'Sign in with GitHub → /life-process/submissions/new/ (or deep-link Issue template).',
    },
    zh: {
      title: '在 rea.run 提交',
      body: 'GitHub 登录 → /life-process/submissions/new/（或深链 Issue 模板）。',
    },
  },
] as const;

export const ACCEPTANCE_CHECKLIST = {
  en: [
    'Uses only public / authorized / citable signals (docs, OSS, client-visible UX, public talks)',
    'No unauthorized access, crack, exploit, credential theft, or private-backend probing',
    'Module label matches content (signal / arch / behavior / …)',
    'Includes summary, method, citations, repro steps, and limits',
    'Discloses agent tools (Grok Bot / Dots / Claude / Codex / Hermes / Other)',
    'Links only public gists/repos if artifacts are attached',
  ],
  zh: [
    '仅使用公开／已授权／可引用信号（文档、OSS、客户端可见 UX、公开演讲）',
    '无未授权访问、破解、exploit、窃取凭证或非公开后端探测',
    '模块标签与内容一致（signal／arch／behavior／…）',
    '含摘要、方法、引用、可复现步骤与局限',
    '披露 agent 工具（Grok Bot／Dots／Claude／Codex／Hermes／Other）',
    '若附工件，仅链到公开 gist／仓库',
  ],
} as const;

export const ARCH_DIAGRAM = {
  src: '/media/life-process/arch-hypothesis-feed-v1.svg',
  en: {
    title: 'Seed architecture hypothesis — public client → API edge → ranking slice',
    caption:
      'Gold dashed boxes are falsifiable hypotheses. Blue solid boxes are public/citable. x-algorithm is a partial OSS signal for For You ranking — open source ≠ the whole product.',
  },
  zh: {
    title: '种子架构假说 — 公开客户端 → API 边缘 → 排序切片',
    caption:
      '金色虚线框为可证伪假说；蓝色实线框为公开可引用。x-algorithm 是 For You 排序的部分 OSS 信号——开源 ≠ 整个产品。',
  },
} as const;
