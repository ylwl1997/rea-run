# rea.run：从 morluto/rea Issues 落地 Top10 内容

用户：全做。站点：ylwl1997/rea-run（CF Pages + Astro 双语）。现有路由：`/` `/zh/` `/docs/install/` `/learn/` `/examples/` `/showcase/` `/compare/` `/compliance/` `/verify/`。

## 硬约束
- 自写正文，转述公开事实；脚注可链 GitHub issue/discussion/README，**不要**主 CTA 链到 morluto.github.io 或 rea.tools。
- **禁止**把 Discussion #693（traework）、#1115（CANoe）写成操作教程；只可在「合法边界 FAQ」里作为「不提供未授权商业逆向」的正面说明素材。
- Showcase 只扩自有/授权/历史游戏重建类；不新增未授权商业目标。
- 中英双语；SEO：每页独立 title/description；进 sitemap；从 docs/FAQ 导航可发现。
- 语气：合法、本地分析、编码 agent 友好；对标竞对深度但不抄。

## 优先顺序（建议实现顺序）
P0（拉新+合规）：#1 #2 #4 #8 #10  
P1（装上卡住留存）：#3 #6 #7  
P2：#5 #9（可选 showcase 扩展）

## Top 10 交付规格

### 1. MCP 客户端安装矩阵 + skill 路径坑
- 类型：FAQ 枢纽 + 短 guide（可 `/docs/mcp-clients/` 或扩 `/docs/install/` + `/faq/mcp-skills-path/`）
- 要点：`npx rea-agents setup` 支持客户端表（Claude Code/Desktop、Codex、Cursor、Gemini CLI、Qwen Code、Grok Build 等）；Claude Code skill 曾写到 `~/.agents/skills` vs 客户端读 `~/.claude/skills`；skills.sh 只装指令不注册 MCP；`doctor --client` / `--skill`
- 来源：Issue #1337、#1459；docs/installation.md；FAQ 债 #1353（`rea setup` vs `npx`）并入

### 2. Windows × Ghidra 接线指南（P0）
- 类型：guide `/docs/windows-ghidra/` 或 `/guides/windows-ghidra/`
- 要点：`GHIDRA_INSTALL_DIR` / `JAVA_HOME` / `REA_ANALYSIS_PROVIDER`；doctor/providers；只读 PE/DLL；冷启动可超默认超时、约 330s 启动窗；历史 Windows native authority 文档不一致说明
- 来源：docs/windows-ghidra-p0.md、Issue #527、installation Ghidra 节

### 3. 大二进制 Ghidra：startup deadline / 预导入
- 类型：guide + FAQ「为何永远 provider_timeout？」
- 要点：导入+自动分析压过 deadline → 首查失败拆进程；社区诉求只读已导入工程；`REA_GHIDRA_STARTUP_TIMEOUT_MS` / heap
- 来源：Issue #1048、README timeout、installation heap

### 4. TMPDIR / 隐藏目录坑
- 类型：短 FAQ
- 要点：TMPDIR 含 `.` 开头路径段时 Ghidra Headless 拒项目路径；doctor 仍可能 healthy；换无点路径
- 来源：Issue #1219、Discussion #1435

### 5. Linux / Fedora 安装验证手记
- 类型：blog 或 guide
- 要点：Node 22/24/26 对 Electron 目标；Ghidra+Temurin JDK21；`REA_BROWSER_EXECUTABLE`；pwntools venv；Chromium/keyring；Nobara unsupported_host
- 来源：Discussion #1435、Issue #1335、#1384

### 6. 大型 Electron/ASAR / JS 图：沉默超时 / MCP 卡顿
- 类型：FAQ/guide
- 要点：大 ASAR 长时间无输出；大图 RangeError；MCP 同步阻塞 ping/取消；建议先小 loader、分阶段、看 doctor
- 来源：#746 #623 #1462 #1387

### 7. MCP tools schema 体积 vs 严格模型客户端
- 类型：FAQ/blog
- 要点：全量 tools/list 极大；Moonshot/kimi 单 schema 超限导致整客户端不可用；讲紧凑 schema / 分能力发现，非绕过
- 来源：#1484 #1327 #1065

### 8. 平台能力矩阵「这台机器能分析什么」
- 类型：FAQ `/faq/what-can-i-analyze/` 或 docs 表
- 要点：native/Hopper·Ghidra·IDA、JS、.NET、Android/JADX、firmware、browser；Windows 上 Android/JADX 困惑
- 来源：README What you can analyze、#1262、docs/android-analysis.md

### 9. 合法 Showcase 扩展（可选）
- 仅当有**自有/授权/可公开验证**素材：自有 Next.js+Stripe 外审类（无密钥、非破解）、Fedora 验证笔记；站内已有 DX-Ball / TH04 / Notion clipboard / discussion-1406 等勿重复空壳
- 来源：Discussion #1406、#1435；README showcases
- 若无新公开授权案例：跳过写页，只在 FAQ 链已有 showcase

### 10. 合法使用边界 FAQ
- 类型：扩 `/compliance/` 或 `/faq/legal-boundary/`
- 要点：本地分析、需自行获授权、不背书非法用途、不上传；正面回应「能否研究商业 App」：**不提供**未授权商业软件逆向教程；可提 clean-room/开源伴侣边界（#1343），非厂商闭源 how-to
- 来源：README Disclaimer；#1343；需求信号 #693 #1115（勿 how-to）

## Backlog（本轮可不做）
Hopper 首启 demo 许可证对话框；Codex plugin #1269；IDA MCP #1416。

## 验收
- 列出新增/更新 URL（中英）
- sitemap 含新页
- 无 morluto.github.io / 无竞对文档站主 CTA
- commit hash + 部署确认
