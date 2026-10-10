export type AgentLink = {
  href: string;
  en: string;
  zh: string;
  blurbEn: string;
  blurbZh: string;
};

export const AGENT_LEARNING_PATH: AgentLink[] = [
  {
    href: '/blog/what-is-rea-reverse-engineer-anything/',
    en: 'What is REA?',
    zh: '什么是 REA？',
    blurbEn: 'Product framing: MCP + CLI for authorized local targets.',
    blurbZh: '产品口径：面向授权本地目标的 MCP + CLI。',
  },
  {
    href: '/docs/install/',
    en: 'Install & setup',
    zh: '安装与 setup',
    blurbEn: 'npx rea-agents setup, dry-run, pin versions, doctor.',
    blurbZh: 'npx rea-agents setup、dry-run、钉版本、doctor。',
  },
  {
    href: '/docs/mcp-clients/',
    en: 'MCP client matrix',
    zh: 'MCP 客户端矩阵',
    blurbEn: 'Where skills land; reconnect after setup.',
    blurbZh: 'skill 写到哪；setup 后重连。',
  },
  {
    href: '/faq/legal-boundary/',
    en: 'Legal boundary',
    zh: '合法边界',
    blurbEn: 'Authorized only; no unpaid commercial how-tos.',
    blurbZh: '仅授权；不提供未授权商业逆向教程。',
  },
  {
    href: '/faq/what-can-i-analyze/',
    en: 'Capability matrix',
    zh: '能力矩阵',
    blurbEn: 'What this host can analyze by engine/path.',
    blurbZh: '按引擎／路径看这台宿主能分析什么。',
  },
  {
    href: '/faq/mcp-schema-size/',
    en: 'MCP schema size',
    zh: 'MCP schema 体积',
    blurbEn: 'Strict clients + domain-split / curated bridges.',
    blurbZh: '严格客户端 + 按域拆分／精选桥。',
  },
  {
    href: '/showcase/',
    en: 'Showcase wall',
    zh: '案例墙',
    blurbEn: 'Community case studies — cards stay on-site.',
    blurbZh: '社区案例——卡片留在本站。',
  },
  {
    href: '/blog/rea-agent-security-posture/',
    en: 'Agent security posture',
    zh: '智能体安全姿态',
    blurbEn: 'Setup surface, consent, disposable VMs.',
    blurbZh: 'setup 面、同意、一次性虚拟机。',
  },
];

export type AgentPromptCard = {
  id: string;
  en: { title: string; body: string };
  zh: { title: string; body: string };
};

export const AGENT_PROMPT_CARDS: AgentPromptCard[] = [
  {
    id: 'system-boundary',
    en: {
      title: 'System: boundary first',
      body: 'You are helping with REA (rea-agents) on software the human is authorized to analyze. Refuse crack, DRM/license bypass, and unpaid commercial reverse-engineering how-tos. Prefer Evidence + unknowns over speculation. Absolute paths only.',
    },
    zh: {
      title: '系统：边界优先',
      body: '你在协助人类用 REA（rea-agents）分析其有权检查的软件。拒绝破解、规避 DRM／许可、未授权商业逆向教程。优先 Evidence 与未知项，少臆测。只用绝对路径。',
    },
  },
  {
    id: 'first-session',
    en: {
      title: 'Prompt: first session',
      body: 'Run npx rea-agents@latest setup --dry-run, show the plan for approval, then setup if approved. Reconnect MCP. Ask me for an absolute path to an authorized target and one specific question. Return Evidence records and mark unknowns.',
    },
    zh: {
      title: '提示：首次会话',
      body: '先跑 npx rea-agents@latest setup --dry-run，展示计划供批准，批准后再 setup。重连 MCP。向我要授权目标的绝对路径与一个具体问题。返回 Evidence 并标注未知。',
    },
  },
  {
    id: 'evidence-loop',
    en: {
      title: 'Prompt: Evidence → teach',
      body: 'On the given authorized target, collect Evidence for the named feature. Cite file:line or addresses. List unknowns explicitly. Do not invent permission from marketing pages. Do not modify files unless I approve a write.',
    },
    zh: {
      title: '提示：Evidence → 教学',
      body: '在给定授权目标上，为指定功能收集 Evidence。引用文件:行号或地址。明确列出未知。不要从介绍页发明许可。未经我批准不要改文件。',
    },
  },
];
