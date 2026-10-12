export type FaqLink = {
  href: string;
  en: { title: string; blurb: string };
  zh: { title: string; blurb: string };
  priority: 'P0' | 'P1' | 'P2';
};

export const FAQ_LINKS: FaqLink[] = [
  {
    href: '/docs/mcp-clients/',
    priority: 'P0',
    en: { title: 'MCP client install matrix & skill paths', blurb: 'Which clients setup supports, where skills land, doctor checks.' },
    zh: { title: 'MCP 客户端安装矩阵与 skill 路径', blurb: 'setup 支持哪些客户端、skill 写到哪、doctor 怎么查。' },
  },
  {
    href: '/docs/windows-ghidra/',
    priority: 'P0',
    en: { title: 'Windows × Ghidra wiring', blurb: 'Env vars, doctor, read-only PE/DLL, cold-start windows.' },
    zh: { title: 'Windows × Ghidra 接线', blurb: '环境变量、doctor、只读 PE/DLL、冷启动窗口。' },
  },
  {
    href: '/faq/tmpdir-dot-path/',
    priority: 'P0',
    en: { title: 'TMPDIR / hidden-directory pitfalls', blurb: 'Dot-prefixed path segments can break Ghidra headless projects.' },
    zh: { title: 'TMPDIR／隐藏目录坑', blurb: '路径段以点开头时，Ghidra headless 可能拒项目路径。' },
  },
  {
    href: '/faq/what-can-i-analyze/',
    priority: 'P0',
    en: { title: 'What can this machine analyze?', blurb: 'Native, JS, .NET, Android/JADX, firmware, browser — by host.' },
    zh: { title: '这台机器能分析什么？', blurb: '原生、JS、.NET、Android/JADX、固件、浏览器——按宿主划分。' },
  },
  {
    href: '/faq/legal-boundary/',
    priority: 'P0',
    en: { title: 'Legal use boundary', blurb: 'Authorization, no unpaid commercial how-tos, clean-room vs closed apps.' },
    zh: { title: '合法使用边界', blurb: '授权、不提供未授权商业逆向教程、净室与闭源边界。' },
  },
  {
    href: '/faq/macos-ghidra-decompiler/',
    priority: 'P0',
    en: { title: 'macOS Ghidra decompiler missing', blurb: '12.1.4 PUBLIC often ships linux/win natives only; make ghidra_opt recipe.' },
    zh: { title: 'macOS Ghidra 反编译器缺失', blurb: '12.1.4 PUBLIC 常只带 linux／win；make ghidra_opt 配方。' },
  },
  {
    href: '/docs/android-adb/',
    priority: 'P0',
    en: { title: 'Android ADB device lane (6.4+)', blurb: 'Your device/emulator: inspect, split-APK, logs, screenshots.' },
    zh: { title: 'Android ADB 设备通道（6.4+）', blurb: '你的设备／模拟器：检查、分体 APK、日志、截图。' },
  },
  {
    href: '/faq/setup-vs-providers/',
    priority: 'P1',
    en: { title: 'Does setup install Ghidra/Hopper/IDA?', blurb: 'MCP registration ≠ shipping a decompiler; BYO engines.' },
    zh: { title: 'setup 会装 Ghidra／Hopper／IDA 吗？', blurb: '注册 MCP ≠ 自带反编译器；引擎自备。' },
  },
  {
    href: '/faq/token-efficient-rea/',
    priority: 'P1',
    en: { title: 'Token-efficient Evidence', blurb: 'Summaries, compact schema, bounded queries — no fabricated findings.' },
    zh: { title: '省 token 的 Evidence', blurb: '摘要、compact schema、有界提问——不编造发现。' },
  },
  {
    href: '/docs/ghidra-large-binaries/',
    priority: 'P1',
    en: { title: 'Large binaries & Ghidra startup deadlines', blurb: 'Why the first query times out; timeouts, heap, pre-import ideas.' },
    zh: { title: '大二进制与 Ghidra 启动截止', blurb: '为何首查超时；超时、堆、预导入思路。' },
  },
  {
    href: '/faq/electron-asar-timeouts/',
    priority: 'P1',
    en: { title: 'Large Electron/ASAR & JS graphs', blurb: 'Silent waits, RangeError, MCP ping blocked — stage the work.' },
    zh: { title: '大型 Electron/ASAR 与 JS 图', blurb: '长时间无输出、RangeError、MCP 卡住——分阶段做。' },
  },
  {
    href: '/faq/mcp-schema-size/',
    priority: 'P1',
    en: { title: 'MCP tool schema size vs strict clients', blurb: 'Huge tools/list payloads and providers with per-schema caps.' },
    zh: { title: 'MCP tools schema 体积与严格客户端', blurb: '巨大的 tools/list 与单 schema 上限的提供商。' },
  },
  {
    href: '/faq/mcp-domain-split/',
    priority: 'P1',
    en: { title: 'MCP domain-split proxy', blurb: 'Filter REA tools/list by domain groups via a stdio proxy.' },
    zh: { title: '按域拆分 MCP 代理', blurb: '用 stdio 过滤代理按域组裁剪 REA 的 tools/list。' },
  },
  {
    href: '/docs/linux-fedora/',
    priority: 'P2',
    en: { title: 'Linux / Fedora install notes', blurb: 'Node lines, Ghidra+JDK, browser executable, host quirks.' },
    zh: { title: 'Linux／Fedora 安装手记', blurb: 'Node 版本线、Ghidra+JDK、浏览器可执行文件、宿主差异。' },
  },
];
