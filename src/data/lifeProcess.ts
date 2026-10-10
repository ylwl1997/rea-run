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
export const SIGNAL_ATLAS_COVERAGE_PCT = 12;

export const AGENT_TOOL_KEYS = ['Grok Bot', 'Dots', 'Claude', 'Codex', 'Hermes', 'Other'] as const;
