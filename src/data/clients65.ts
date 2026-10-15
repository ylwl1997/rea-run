/**
 * Setup clients accepted by rea-agents@6.5.0.
 * Source: docs/installation.md at tag rea-agents-6.5.0 (supported-agents table)
 * plus the 6.5.0 release note that Qoder, Trae, ZCode, DeepSeek Harness,
 * Kimi Code, Factory Droid, and WorkBuddy setup ship in that npm version.
 * Grok Bot remains a manual hosted connector (not a --client row).
 */
export type ClientRow = {
  name: string;
  id: string;
  noteEn: string;
  noteZh: string;
};

export const REA_PIN = 'rea-agents@6.5.0';
export const REA_PIN_VERSION = '6.5.0';
export const NODE_ENGINES = '^22.19.0 || ^24.11.0 || >=26.0.0';
/** SQLite snapshot lane needs DatabaseSync.limits (release 6.5.0). */
export const SQLITE_NODE_NOTE =
  'SQLite snapshots need Node 24.x ≥24.15 or 26+; Node 22 and earlier 24 cannot use that lane.';
export const MCP_REGISTRY_ID = 'io.github.morluto/rea';

export const CLIENTS_650: ClientRow[] = [
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
    noteEn: 'Full schemas can block gpt-4.1 metadata (#1554). Compact profile is the documented workaround.',
    noteZh: '完整 schema 可能挡住 gpt-4.1 元数据（#1554）。文档中的变通是 compact profile。',
  },
  {
    name: 'Command Code',
    id: 'commandcode',
    noteEn: 'Setup client since 4.1.0. Confirm with doctor on 6.5.0.',
    noteZh: '4.1.0 起可由 setup 登记。在 6.5.0 上用 doctor 确认。',
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
    noteEn: 'Added in 6.5.0. Confirm with setup --dry-run and doctor; compact schema profile often needed for size-capped hosts.',
    noteZh: '6.5.0 新增。用 setup --dry-run 与 doctor 确认；体量受限的主机常需 compact schema profile。',
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
    noteEn: 'Added in 6.5.0 via scoped setup. Confirm with doctor after setup.',
    noteZh: '6.5.0 起可由 scoped setup 登记。setup 后用 doctor 确认。',
  },
  {
    name: 'Factory Droid',
    id: 'droid',
    noteEn: 'Added in 6.5.0. Was pending on main after 6.4.0; confirm with doctor.',
    noteZh: '6.5.0 新增。6.4.0 之后曾只在 main；用 doctor 确认。',
  },
  {
    name: 'Trae',
    id: 'trae',
    noteEn: 'Added in 6.5.0. Live Trae API integration remains unverified upstream.',
    noteZh: '6.5.0 新增。上游注明 live Trae API 集成仍未核验。',
  },
  {
    name: 'WorkBuddy',
    id: 'workbuddy',
    noteEn: 'Added in 6.5.0. Confirm with setup --dry-run and doctor.',
    noteZh: '6.5.0 新增。用 setup --dry-run 与 doctor 确认。',
  },
  {
    name: 'ZCode',
    id: 'zcode',
    noteEn: 'Added in 6.5.0 via scoped setup. Confirm with doctor after setup.',
    noteZh: '6.5.0 起可由 scoped setup 登记。setup 后用 doctor 确认。',
  },
  {
    name: 'DeepSeek Harness',
    id: 'dsh',
    noteEn: 'Included from 6.5.0. Live DeepSeek API integration remains unverified upstream. See Cordis patch notes in client-configuration.md.',
    noteZh: '自 6.5.0 起包含。上游注明 live DeepSeek API 集成仍未核验。见 client-configuration.md 中的 Cordis 补丁说明。',
  },
];
