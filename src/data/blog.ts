export type BlogPost = {
  slug: string;
  date: string;
  en: { title: string; description: string; h1: string; body: string[] };
  zh: { title: string; description: string; h1: string; body: string[] };
};

export const BLOG_POSTS: BlogPost[] = [
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
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
