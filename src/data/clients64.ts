/**
 * Setup clients accepted by rea-agents@6.4.0.
 * Source: docs/installation.md at tag rea-agents-6.4.0 (supported-agents table)
 * plus the 6.4.0 release note that Pi, Hermes, and Qwen Code setup shipped
 * in that npm version. Factory Droid and dsh are intentionally absent.
 */
export type ClientRow = {
  name: string;
  id: string;
  noteEn: string;
  noteZh: string;
};

export const REA_PIN = 'rea-agents@6.4.0';
export const NODE_ENGINES = '^22.19.0 || ^24.11.0 || >=26.0.0';
export const MCP_REGISTRY_ID = 'io.github.morluto/rea';

export const CLIENTS_640: ClientRow[] = [
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
    noteEn: '6.4.0 setup honors OPENCODE_CONFIG_DIR. npm 6.3.0 did not.',
    noteZh: '6.4.0 的 setup 会遵守 OPENCODE_CONFIG_DIR。npm 6.3.0 不会。',
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
    noteEn: 'Setup client since 4.1.0. Still confirm with doctor on 6.4.0.',
    noteZh: '4.1.0 起可由 setup 登记。在 6.4.0 上仍用 doctor 确认。',
  },
  {
    name: 'Qwen Code',
    id: 'qwen_code',
    noteEn: 'Added in 6.4.0. User settings: ~/.qwen/settings.json, or $QWEN_HOME/settings.json.',
    noteZh: '6.4.0 新增。用户设置：~/.qwen/settings.json，或 $QWEN_HOME/settings.json。',
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
];
