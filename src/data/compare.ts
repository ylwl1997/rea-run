export type ComparePage = {
  slug: string;
  en: { title: string; description: string; h1: string; lede: string; rows: [string, string, string][]; notes: string[] };
  zh: { title: string; description: string; h1: string; lede: string; rows: [string, string, string][]; notes: string[] };
};

/** Third-party orientation only — not affiliated; verify against live vendor docs. */
export const COMPARE_PAGES: ComparePage[] = [

  {
    slug: 'rea-cleanroom-ports',
    en: {
      title: 'REA ecosystem ports: fathom & CleanRoom',
      description:
        'Orientation table for clean-room / alternate ports (fathom Rust, CleanRoom Python) vs upstream REA — supply-chain alternatives, not promoted replacements. AGPL callouts.',
      h1: 'Clean-room ports vs upstream REA',
      lede:
        'Builders evaluating forks sometimes need a map. **fathom** and **CleanRoom** are community ports with different languages, licenses, and maturity. This page positions them as **ecosystem / supply-chain alternatives**, not as replacements we promote over upstream REA. Credit MIT NOTICE lineage from morluto/rea; no affiliation claimed.',
      rows: [
        ['Project', 'morluto/rea (upstream)', 'qompassai/fathom', 'Sage-is/CleanRoom'],
        ['Language', 'TypeScript / Node (rea-agents)', 'Rust (MCP/A2A)', 'Python 3.12'],
        ['License', 'MIT', 'AGPL | Apache (dual — check tree)', 'AGPL-3.0'],
        ['Maturity', 'Published npm; large community', 'SPEC-led port; early', 'Pre-release; 12 verbs'],
        ['Evidence model', 'Evidence envelopes (upstream)', 'Evidence envelopes; fail-closed policy', 'Pageable MCP/CLI verbs'],
        ['Engines', 'BYO Ghidra/Hopper/IDA/JEB/…', 'Port of provider surface — verify docs', 'Reimpl surface — verify docs'],
        ['Relation', 'Source of truth for product behavior', 'No upstream code copy (clean-room claim)', 'Reimplementation; AGPL copyleft'],
      ],
      notes: [
        'Third-party orientation for Agent / compare readers. Verify licenses and NOTICE files before redistribution — AGPL obligations differ from MIT.',
        'Do not treat ports as drop-in replacements. Prefer upstream releases for install facts; use ports when your supply-chain policy requires them.',
        'Sources: https://github.com/qompassai/fathom · https://github.com/Sage-is/CleanRoom · https://github.com/morluto/rea',
        'Legal use only on authorized targets. Primary CTAs stay on rea.run — not competitor marketing docs.',
      ],
    },
    zh: {
      title: 'REA 生态移植：fathom 与 CleanRoom',
      description:
        '清洁室／替代移植对照表（Rust fathom、Python CleanRoom）相对上游 REA——供应链备选，非主推替代。含 AGPL 提示。',
      h1: '清洁室移植 vs 上游 REA',
      lede:
        '评估 fork 的建造者需要一张地图。**fathom** 与 **CleanRoom** 是不同语言、许可与成熟度的社区移植。本页把它们定位为**生态／供应链备选**，而非我们主推以取代上游 REA 的产品。致谢 morluto/rea 的 MIT NOTICE 谱系；不声称隶属。',
      rows: [
        ['项目', 'morluto/rea（上游）', 'qompassai/fathom', 'Sage-is/CleanRoom'],
        ['语言', 'TypeScript／Node（rea-agents）', 'Rust（MCP／A2A）', 'Python 3.12'],
        ['许可', 'MIT', 'AGPL｜Apache（双许可——以树为准）', 'AGPL-3.0'],
        ['成熟度', 'npm 已发布；社区大', 'SPEC 驱动移植；早期', '预发布；12 个动词'],
        ['Evidence 模型', 'Evidence 信封（上游）', 'Evidence 信封；失败关闭策略', '可分页 MCP／CLI 动词'],
        ['引擎', '自备 Ghidra／Hopper／IDA／JEB／…', '提供者表面移植——核验文档', '重实现表面——核验文档'],
        ['关系', '产品行为真源', '声称无上游代码拷贝（清洁室）', '重实现；AGPL 传染'],
      ],
      notes: [
        '给 Agent／对比读者的第三方说明。再分发前核验许可与 NOTICE——AGPL 义务异于 MIT。',
        '勿把移植当即插即用替代。安装事实优先上游发行；仅在供应链政策要求时选用移植。',
        '来源：https://github.com/qompassai/fathom · https://github.com/Sage-is/CleanRoom · https://github.com/morluto/rea',
        '仅限授权目标。主 CTA 留在 rea.run——不以竞品营销文档作主入口。',
      ],
    },
  },

  {
    slug: 'rea-vs-ghidra',
    en: {
      title: 'REA vs Ghidra — how they relate',
      description:
        'REA is not a Ghidra replacement: it can use your existing Ghidra install as an MCP provider for coding agents. Third-party orientation.',
      h1: 'REA vs Ghidra',
      lede:
        'People searching “Ghidra MCP” often need both pieces. Ghidra is the reverse-engineering workbench; REA is the agent-facing MCP/CLI that can call a bring-your-own Ghidra (among other providers).',
      rows: [
        ['Role', 'MCP server + CLI for coding agents', 'Interactive RE platform (NSA open source)'],
        ['Installs Ghidra?', 'No — bring your own', 'You install Ghidra itself'],
        ['JS/Electron static', 'Supported without Ghidra', 'Not its primary workflow'],
        ['UI', 'Agent / terminal', 'Full desktop GUI + headless'],
        ['Best first step', 'Wire agent + doctor/setup', 'Learn Ghidra projects & scripts'],
      ],
      notes: [
        'Third-party summary for rea.run readers. Confirm versions and OS support on upstream REA and Ghidra docs before production use.',
        'Legal use only on authorized targets.',
      ],
    },
    zh: {
      title: 'REA 与 Ghidra 的关系',
      description:
        'REA 不是 Ghidra 替代品：它可以把你已有的 Ghidra 作为 MCP 提供者交给编程智能体。第三方对照说明。',
      h1: 'REA vs Ghidra',
      lede:
        '搜「Ghidra MCP」的人往往两边都要。Ghidra 是逆向工作台；REA 是面向智能体的 MCP/CLI，可调用自备 Ghidra（以及其他提供者）。',
      rows: [
        ['角色', '面向编程智能体的 MCP + CLI', '交互式逆向平台（NSA 开源）'],
        ['是否安装 Ghidra？', '否——自备', '你安装 Ghidra 本身'],
        ['JS/Electron 静态', '无需 Ghidra 即可', '非其主流程'],
        ['界面', '智能体 / 终端', '完整桌面 GUI + headless'],
        ['建议第一步', '接好智能体并跑 doctor/setup', '先学 Ghidra 工程与脚本'],
      ],
      notes: [
        'rea.run 第三方摘要。上线前请对照 REA 与 Ghidra 上游文档确认版本与系统支持。',
        '仅限授权目标。',
      ],
    },
  },
  {
    slug: 'rea-vs-rea-tools',
    en: {
      title: 'rea.run vs rea.tools (orientation)',
      description:
        'rea.run is this community docs/brand site. rea.tools is a separate third-party property. We do not claim affiliation with either morluto/rea or rea.tools.',
      h1: 'rea.run and rea.tools',
      lede:
        'The open-source REA project lives at github.com/morluto/rea (source of truth). This site (rea.run) is an unofficial bilingual community guide. rea.tools is a different domain — treat it as a separate third party until you verify ownership yourself.',
      rows: [
        ['rea.run', 'Unofficial community docs (this site)', 'Guides, install, compare, compliance'],
        ['morluto/rea', 'Upstream open-source project', 'Source of truth for product behavior'],
        ['rea.tools', 'Separate third-party domain', 'Verify independently; not operated here'],
      ],
      notes: [
        'We do not invent product claims for rea.tools. Prefer upstream GitHub releases and npm `rea-agents` for install facts.',
        'If you are the operator of another REA-related site and want a correction, open an issue on this repo.',
      ],
    },
    zh: {
      title: 'rea.run 与 rea.tools（说明）',
      description:
        'rea.run 是本社区文档/品牌站。rea.tools 是另一第三方域名。我们与 morluto/rea 或 rea.tools 均无隶属关系。',
      h1: 'rea.run 与 rea.tools',
      lede:
        '开源 REA 项目在 github.com/morluto/rea（行为以仓库为准）。本站（rea.run）是非官方中英双语社区指南。rea.tools 是不同域名——请自行核实归属，勿与本站混淆。',
      rows: [
        ['rea.run', '非官方社区文档（本站）', '中英指南、安装、对比、合规'],
        ['morluto/rea', '上游开源项目', '产品行为以它为准'],
        ['rea.tools', '独立第三方域名', '请自行核实；非本站运营'],
      ],
      notes: [
        '我们不为 rea.tools 编造产品能力。安装事实请优先看上游 GitHub 与 npm `rea-agents`。',
        '若你运营相关站点并需更正，请在本仓库提 issue。',
      ],
    },
  },
  {
    slug: 'rea-vs-ida',
    en: {
      title: 'REA vs IDA — MCP pairing notes',
      description:
        'REA can use an existing IDA MCP registration on verified Windows setups. IDA remains a separate commercial product. Third-party orientation.',
      h1: 'REA and IDA',
      lede:
        'IDA Pro is a commercial disassembler/decompiler. REA’s IDA path (per upstream docs) reuses an existing IDA MCP registration rather than replacing IDA. Linux/macOS headless IDA paths may be unverified — check upstream before relying on them.',
      rows: [
        ['License', 'REA: MIT (open source)', 'IDA: Hex-Rays commercial license'],
        ['How they connect', 'REA points at existing IDA MCP config', 'You run IDA / its MCP as usual'],
        ['Who installs IDA?', 'You (bring your own)', 'You'],
        ['Agent workflow', 'Coding agent asks REA tools', 'Analyst-driven GUI / scripts'],
      ],
      notes: [
        'Third-party summary. Follow Hex-Rays licensing and REA’s IDA connection docs exactly.',
        'Authorized targets only; no DRM circumvention content on this site.',
      ],
    },
    zh: {
      title: 'REA 与 IDA — MCP 搭配说明',
      description:
        '在上游已验证的 Windows 场景，REA 可复用已有 IDA MCP 注册。IDA 仍是独立商业产品。第三方对照。',
      h1: 'REA 与 IDA',
      lede:
        'IDA Pro 是商业反汇编/反编译产品。按上游文档，REA 的 IDA 路径是复用已有 IDA MCP 注册，而不是取代 IDA。Linux/macOS headless 可能尚未验证——依赖前请看上游。',
      rows: [
        ['许可', 'REA：MIT（开源）', 'IDA：Hex-Rays 商业许可'],
        ['如何连接', 'REA 指向已有 IDA MCP 配置', '你照常运行 IDA / 其 MCP'],
        ['谁安装 IDA？', '你（自备）', '你'],
        ['工作流', '编程智能体调用 REA 工具', '分析师驱动的 GUI / 脚本'],
      ],
      notes: [
        '第三方摘要。请严格遵守 Hex-Rays 许可与 REA 的 IDA 连接文档。',
        '仅限授权目标；本站无规避 DRM 内容。',
      ],
    },
  },
];

export function getCompare(slug: string) {
  return COMPARE_PAGES.find((p) => p.slug === slug);
}
