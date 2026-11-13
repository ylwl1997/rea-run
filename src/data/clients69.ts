/**
 * Setup clients accepted by rea-agents@6.9.0.
 * Source: docs/getting-started/installation.md supported-agents table
 * and docs/getting-started/client-configuration.md at tag rea-agents-6.9.0.
 * Grok Bot and llama.cpp remain manual connectors (not --client rows).
 */
export type ClientRow = {
  name: string;
  id: string;
  noteEn: string;
  noteZh: string;
};

export const REA_PIN = 'rea-agents@6.9.0';
export const REA_PIN_VERSION = '6.9.0';
/** package.json engines.node at tag rea-agents-6.9.0, confirmed with npm view rea-agents@6.9.0 engines. */
export const NODE_ENGINES = '^22.23.4 || ^24.22.1 || >=26.12.1';
/**
 * 6.5.0 release: SQLite snapshots need DatabaseSync.limits on Node 24.x ≥24.15 or 26+.
 * 6.6–6.9 highlight sections reviewed for this pin do not say that gate was removed.
 */
export const SQLITE_NODE_NOTE =
  '6.5.0 said SQLite snapshots need Node 24.x ≥24.15 or 26+; Node 22 and earlier 24 cannot use that lane. Later highlight sections reviewed here do not lift that gate.';
export const MCP_REGISTRY_ID = 'io.github.morluto/rea';

export const CLIENTS_690: ClientRow[] = [
  {
    name: 'Claude Code',
    id: 'claude_code',
    noteEn: 'Setup writes MCP plus the bundled skill. Confirm the skill landed where this client loads it.',
    noteZh: 'setup 写入 MCP 与捆绑 skill。确认 skill 落在该客户端实际加载的目录。',
  },
  {
    name: 'Claude Desktop',
    id: 'claude_desktop',
    noteEn: 'Follow the setup plan, then restart the desktop app.',
    noteZh: '按 setup 计划写入后重启桌面应用。',
  },
  {
    name: 'Codex',
    id: 'codex',
    noteEn: 'Unset or empty CODEX_HOME means ~/.codex.',
    noteZh: '未设置或空的 CODEX_HOME 即 ~/.codex。',
  },
  {
    name: 'Cursor',
    id: 'cursor',
    noteEn: 'IDE MCP entry. Reconnect after setup so the tool list refreshes.',
    noteZh: 'IDE 的 MCP 条目。setup 后重连，让工具列表刷新。',
  },
  {
    name: 'CodeBuddy',
    id: 'codebuddy',
    noteEn:
      'In the 6.9.0 supported-agents table. client-configuration.md: writes ~/.codebuddy/mcp.json; loading the registration, the bundled skill, and real REA tool calls are verified.',
    noteZh:
      '在 6.9.0 受支持智能体表中。client-configuration.md：写入 ~/.codebuddy/mcp.json；登记、捆绑 skill 与真实 REA 工具调用已核验。',
  },
  {
    name: 'Cline CLI',
    id: 'cline',
    noteEn:
      'In the 6.9.0 table (#10128). setup --client cline configures the CLI only; the VS Code extension uses rea mcp add --agent cline. Acceptance tests cover setup/doctor/uninstall. That page does not state a live Cline session called an REA tool.',
    noteZh:
      '在 6.9.0 表中（#10128）。setup --client cline 只配置 CLI；VS Code 扩展用 rea mcp add --agent cline。验收测试覆盖 setup／doctor／uninstall。该页没有写 live Cline 会话调用过 REA 工具。',
  },
  {
    name: 'Gemini CLI',
    id: 'gemini_cli',
    noteEn: 'Honors a nonempty GEMINI_CLI_HOME. Untrusted workspace settings do not replace the user entry.',
    noteZh: '非空 GEMINI_CLI_HOME 会生效。不受信任的工作区设置不会替换用户条目。',
  },
  {
    name: 'Windsurf',
    id: 'windsurf',
    noteEn: 'IDE MCP entry. Reconnect after setup.',
    noteZh: 'IDE 的 MCP 条目。setup 后重连。',
  },
  {
    name: 'Devin',
    id: 'devin',
    noteEn: 'On non-Windows, config follows XDG_CONFIG_HOME for devin/mcp_config.json.',
    noteZh: '非 Windows 上，配置跟随 XDG_CONFIG_HOME 下的 devin/mcp_config.json。',
  },
  {
    name: 'OpenCode',
    id: 'opencode',
    noteEn: 'Setup honors OPENCODE_CONFIG_DIR (fixed since 6.4.0). Confirm with doctor after setup.',
    noteZh: 'setup 会遵守 OPENCODE_CONFIG_DIR（6.4.0 起已修复）。setup 后用 doctor 确认。',
  },
  {
    name: 'Antigravity',
    id: 'antigravity',
    noteEn: 'Select it in setup or pass --client antigravity.',
    noteZh: '在 setup 里勾选，或传入 --client antigravity。',
  },
  {
    name: 'GitHub Copilot CLI',
    id: 'copilot_cli',
    noteEn:
      '#1554: full schemas blocked gpt-4.1 metadata on Copilot CLI 1.0.95. From 6.8.0, input advertisements default to compact; set REA_MCP_INPUT_SCHEMA_PROFILE=full for the previous complete advertisement (#5975).',
    noteZh:
      '#1554：Copilot CLI 1.0.95 上完整 schema 会挡住 gpt-4.1 元数据。自 6.8.0 起输入广告默认为 compact；要先前的完整广告设 REA_MCP_INPUT_SCHEMA_PROFILE=full（#5975）。',
  },
  {
    name: 'Command Code',
    id: 'commandcode',
    noteEn: 'Setup client since 4.1.0. Confirm with doctor on 6.9.0.',
    noteZh: '4.1.0 起可由 setup 登记。在 6.9.0 上用 doctor 确认。',
  },
  {
    name: 'Qwen Code',
    id: 'qwen_code',
    noteEn: 'Added in 6.4.0. User settings: ~/.qwen/settings.json, or $QWEN_HOME/settings.json.',
    noteZh: '6.4.0 新增。用户设置：~/.qwen/settings.json，或 $QWEN_HOME/settings.json。',
  },
  {
    name: 'Kimi Code',
    id: 'kimi',
    noteEn:
      'Added in 6.5.0. 6.9.0 client-configuration.md: an LM Studio entry with no explicit schema profile is reported stale, as for Kimi Code. Confirm with doctor.',
    noteZh:
      '6.5.0 新增。6.9.0 client-configuration.md：没有显式 schema profile 的 LM Studio 条目会被标为过期，Kimi Code 同样。用 doctor 确认。',
  },
  {
    name: 'VS Code',
    id: 'vscode',
    noteEn: 'Select it in setup or pass --client vscode, then reload the window.',
    noteZh: '在 setup 里勾选，或传入 --client vscode，然后重载窗口。',
  },
  {
    name: 'Grok Build',
    id: 'grok_build',
    noteEn: '[mcp_servers.rea] in $GROK_HOME/config.toml, or ~/.grok/config.toml.',
    noteZh: '[mcp_servers.rea] 位于 $GROK_HOME/config.toml，或 ~/.grok/config.toml。',
  },
  {
    name: 'OMP',
    id: 'omp',
    noteEn: 'User mcp.json under ~/.omp/agent, or the profile from OMP_PROFILE / PI_PROFILE.',
    noteZh: '用户 mcp.json 在 ~/.omp/agent，或由 OMP_PROFILE／PI_PROFILE 选定的配置档。',
  },
  {
    name: 'Pi',
    id: 'pi',
    noteEn: 'Added in 6.4.0. Strict JSON at ~/.pi/agent/mcp.json, or PI_CODING_AGENT_DIR.',
    noteZh: '6.4.0 新增。严格 JSON：~/.pi/agent/mcp.json，或 PI_CODING_AGENT_DIR。',
  },
  {
    name: 'Hermes',
    id: 'hermes',
    noteEn: 'Added in 6.4.0. mcp_servers.rea in config.yaml under HERMES_HOME; active profile is followed.',
    noteZh: '6.4.0 新增。HERMES_HOME 下 config.yaml 的 mcp_servers.rea；会跟随活动配置档。',
  },
  {
    name: 'Qoder',
    id: 'qoder',
    noteEn: 'Added in 6.5.0. 6.9.0 client-configuration.md: ~/.qoder/settings.json, or QODER_CONFIG_DIR.',
    noteZh: '6.5.0 新增。6.9.0 client-configuration.md：~/.qoder/settings.json，或 QODER_CONFIG_DIR。',
  },
  {
    name: 'Factory Droid',
    id: 'droid',
    noteEn: 'Added in 6.5.0. 6.9.0 docs: ~/.factory/mcp.json, or FACTORY_HOME_OVERRIDE. Confirm with doctor.',
    noteZh: '6.5.0 新增。6.9.0 文档：~/.factory/mcp.json，或 FACTORY_HOME_OVERRIDE。用 doctor 确认。',
  },
  {
    name: 'Trae',
    id: 'trae',
    noteEn:
      'Added in 6.5.0. 6.9.0 client-configuration.md: loading this registration in Trae remains unverified.',
    noteZh: '6.5.0 新增。6.9.0 client-configuration.md：在 Trae 中加载该登记仍未核验。',
  },
  {
    name: 'WorkBuddy',
    id: 'workbuddy',
    noteEn:
      'Added in 6.5.0. 6.9.0 client-configuration.md: loading this registration and real REA tool calls through WorkBuddy are verified. Setup writes the user-level file only.',
    noteZh:
      '6.5.0 新增。6.9.0 client-configuration.md：通过 WorkBuddy 加载该登记与真实 REA 工具调用已核验。setup 只写用户级文件。',
  },
  {
    name: 'LM Studio',
    id: 'lm_studio',
    noteEn:
      'In the 6.9.0 table. installation.md: requires a release after 6.8.0. client-configuration.md: LM Studio 0.4.26 on macOS loaded the registration and a local model called an REA tool. Linux and Windows remain unverified. Setup selects compact unless a profile is already set.',
    noteZh:
      '在 6.9.0 表中。installation.md：需要 6.8.0 之后的发行。client-configuration.md：macOS 上 LM Studio 0.4.26 加载了该登记，且本地模型调用了 REA 工具。Linux 与 Windows 仍未核验。除非已有 profile，setup 选择 compact。',
  },
  {
    name: 'ZCode',
    id: 'zcode',
    noteEn: 'Added in 6.5.0. 6.9.0 docs: nested mcp.servers in ~/.zcode/cli/config.json. Confirm with doctor.',
    noteZh: '6.5.0 新增。6.9.0 文档：~/.zcode/cli/config.json 里嵌套的 mcp.servers。用 doctor 确认。',
  },
  {
    name: 'DeepSeek Harness',
    id: 'dsh',
    noteEn:
      'Included from 6.5.0. 6.9.0 client-configuration.md: native verification uses a local model fixture; live DeepSeek API compatibility remains unverified.',
    noteZh:
      '自 6.5.0 起包含。6.9.0 client-configuration.md：原生核验使用本地模型夹具；live DeepSeek API 兼容性仍未核验。',
  },
  {
    name: 'FreeBuff',
    id: 'freebuff',
    noteEn:
      'First appears in 6.8.0 (#2736). 6.8.0 and 6.9.0 docs: installed native FreeBuff loading and skill discovery remain unverified. Older releases reject --client freebuff.',
    noteZh:
      '6.8.0 首次出现（#2736）。6.8.0 与 6.9.0 文档：已安装的原生 FreeBuff 加载与 skill 发现仍未核验。更早的发行会拒绝 --client freebuff。',
  },
];
