export type Example = {
  slug: string;
  en: {
    title: string;
    blurb: string;
    goal: string;
    why: string;
    prompt: string;
    steps: { title: string; body: string }[];
    note: string;
  };
  zh: {
    title: string;
    blurb: string;
    goal: string;
    why: string;
    prompt: string;
    steps: { title: string; body: string }[];
    note: string;
  };
};

export const EXAMPLES: Example[] = [
  {
    slug: 'open-source-cli-flag',
    en: {
      title: 'Trace a CLI flag in an open-source tool',
      blurb: 'Ask your agent to locate where a documented flag is parsed — on a repo you already cloned.',
      goal: 'Map flag → parser → call site with file:line evidence.',
      why: 'You want a patch and need the real control flow, not a guess from README marketing.',
      prompt:
        'Use REA on /absolute/path/to/my-clone. Find where --verbose is parsed and which functions read that setting. Cite paths and symbols. Stop after the report — do not modify files.',
      steps: [
        { title: 'Point at a local tree you may inspect', body: 'Prefer projects you own, maintain, or that are MIT/Apache licensed and already on disk.' },
        { title: 'Ask for Evidence, not vibes', body: 'Require symbols, paths, and unresolved edges. Treat unknowns as TODOs for you.' },
        { title: 'Human verifies, then edits', body: 'Open the cited files yourself before accepting a patch plan.' },
      ],
      note: 'Teaching pattern only. Always respect licenses and authorization.',
    },
    zh: {
      title: '在开源 CLI 里追踪一个参数',
      blurb: '让智能体在你已克隆的仓库里定位文档中的 flag 是在哪里解析的。',
      goal: '画出 flag → 解析器 → 调用点，并给出文件:行号证据。',
      why: '你要改代码，需要真实控制流，而不是 README 营销话术。',
      prompt:
        '用 REA 检查 /absolute/path/to/my-clone。找出 --verbose 在哪里解析、哪些函数读取该设置。给出路径与符号。只出报告，不要改文件。',
      steps: [
        { title: '指向你有权检查的本地目录', body: '优先自有仓库、你维护的项目，或已在磁盘上的 MIT/Apache 项目。' },
        { title: '要 Evidence，不要空话', body: '要求符号、路径与未解析边。把未知当成你的待办。' },
        { title: '人先核实再改', body: '打开引用的文件，确认后再接受补丁方案。' },
      ],
      note: '仅教学套路。请遵守许可与授权。',
    },
  },
  {
    slug: 'your-electron-export-path',
    en: {
      title: 'Find an export path in your Electron app',
      blurb: 'Static JS/Electron inspection on a build you ship — no native engine required.',
      goal: 'List entry modules and the function that writes the export file.',
      why: 'Support asked “where does CSV leave the app?” and you want the agent to gather the graph first.',
      prompt:
        'Use REA to inspect /absolute/path/to/our-electron-app (or the .asar we ship). Show export-related entry points, calls, and source locations. Mark anything unresolved.',
      steps: [
        { title: 'Use your own artifact', body: 'Company build, personal project, or a sample you have written permission to analyze.' },
        { title: 'Static first', body: 'JS/Electron static analysis does not need Ghidra/Hopper/IDA.' },
        { title: 'Keep writes gated', body: 'Ask for a report only; file changes stay behind your approval.' },
      ],
      note: 'Do not point REA at third-party apps you are not authorized to reverse.',
    },
    zh: {
      title: '在你自己的 Electron 应用里找导出路径',
      blurb: '对你发布的构建做静态 JS/Electron 检查——通常不需要原生引擎。',
      goal: '列出入口模块与写出导出文件的函数。',
      why: '支持问「CSV 从哪出去」，你想先让智能体收集调用图。',
      prompt:
        '用 REA 检查 /absolute/path/to/our-electron-app（或我们发布的 .asar）。给出与导出相关的入口、调用与源码位置，并标注未解析项。',
      steps: [
        { title: '用自有制品', body: '公司构建、个人项目，或有书面许可分析的样本。' },
        { title: '先静态', body: 'JS/Electron 静态分析通常不需要 Ghidra/Hopper/IDA。' },
        { title: '改写要批准', body: '先只要报告；改文件仍由你批准。' },
      ],
      note: '不要对无权逆向的第三方应用使用 REA。',
    },
  },
  {
    slug: 'ghidra-on-own-binary',
    en: {
      title: 'Native binary you built — with bring-your-own Ghidra',
      blurb: 'Wire an existing Ghidra install, then ask the agent about a symbol in your release binary.',
      goal: 'Recover the rule behind one named function with decompilation + call evidence.',
      why: 'You shipped a native tool and want an agent-readable dossier before refactoring.',
      prompt:
        'With Ghidra configured, use REA on /absolute/path/to/our-release-bin. Explain function process_batch: inputs, callees, and the main decision branch. Cite addresses. Do not patch the binary.',
      steps: [
        { title: 'Install engines outside REA', body: 'Export GHIDRA_INSTALL_DIR and JAVA_HOME, then doctor + setup (see Install).' },
        { title: 'Authorized binary only', body: 'Your build, your customer’s sample under contract, or malware in an approved lab — not piracy targets.' },
        { title: 'Read-only default', body: 'Ask for explanation first; mutations stay human-gated.' },
      ],
      note: 'rea.run will never publish crack or DRM-bypass walkthroughs.',
    },
    zh: {
      title: '自研原生二进制 — 自备 Ghidra',
      blurb: '接好已有 Ghidra，再让智能体解释你发布二进制里的某个符号。',
      goal: '用反编译与调用证据还原一个具名函数背后的规则。',
      why: '你发布了原生工具，重构前想先拿到智能体可读的卷宗。',
      prompt:
        '在已配置 Ghidra 的前提下，用 REA 检查 /absolute/path/to/our-release-bin。解释函数 process_batch：输入、被调函数、主分支。给出地址。不要打补丁。',
      steps: [
        { title: '引擎在 REA 外安装', body: '导出 GHIDRA_INSTALL_DIR 与 JAVA_HOME，再 doctor + setup（见安装页）。' },
        { title: '仅限授权二进制', body: '自有构建、合同内客户样本，或合规实验室样本——不是盗版目标。' },
        { title: '默认只读', body: '先要解释；改动仍由人批准。' },
      ],
      note: 'rea.run 永不发布破解或规避 DRM 教程。',
    },
  },
];

export function getExample(slug: string) {
  return EXAMPLES.find((e) => e.slug === slug);
}
