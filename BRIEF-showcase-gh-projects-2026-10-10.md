# rea.run Showcase：收录 GitHub 上 REA 相关项目（dshbase 模式）

用户要求：把 GitHub 上有关 REA 的项目全部收录到 https://rea.run/zh/showcase/ ，丰富介绍与评价（参考 dshbase），站内详情、卡片不外跳。

**完整目录：** `/workspace/rea-run/GH-REA-PROJECTS-CATALOG-2026-10-10.md`  
**仓库：** ylwl1997/rea-run

## 硬约束
- 卡片只链 `/showcase/<id>/` 与 `/zh/showcase/<id>/`；详情站内长文；脚注可链源 GitHub。
- **禁止**主 CTA 到 morluto.github.io / rea.tools。
- 合法边界：自有/授权/开源/清洁室/历史游戏重建；MADTreasures 勿把 FL Studio 当目标；RayCodes 保持「公开 UI/被动 CDP」合规语气，不做破解教程。
- 已有 slug 勿空壳重建：`aegis-totp`, `downunderctf`, `dx-ball`, `th04`, `notes-first-investigation`, `windows-calculator-percent`, `discussion-1406-blackbox-audit`（可加深内容，可不改）。
- 双语；列表页像目录：标题、摘要、标签、星标/许可、关系类型、评价要点。
- 进 sitemap。

## dshbase 式详情模板（每页）
1. Hero：中英标题、一句话、标签（case-study / wrapper / packaging / awesome / demo）
2. Meta 条：stars、language、license、last update、GitHub 脚注链
3. 这是什么 / 与 REA 的关系
4. 亮点与工作流（可复现步骤概要，非破解）
5. 评价（质量、证据链、局限、适用谁）
6. 合规备注（如有）
7. 相关站内链（docs/faq）

## 本轮必须新增（yes，未上墙）

| slug | 源 |
|------|-----|
| openbsd-netcat-rea | https://github.com/NullLabTests/OpenBSD_netcat_REA |
| openbattlefield2 | https://github.com/Moxnatiy/OpenBattlefield2 |
| rea-jev | https://github.com/juan-viox/rea-jev |
| fr-guide-valorisa | https://github.com/valorisa/Reverse-Engineer-Anything |
| raycodes-browser-ui | https://github.com/47thtechcorner/RayCodes_Rea-AI-Agent-Setup |
| awesome-ai-reverse | https://github.com/DiscoverBox/awesome-ai-reverse |
| morluto-awesome-re | https://github.com/morluto/awesome-reverse-engineering |
| homebrew-rea-agents | https://github.com/moonfruit/homebrew-tap （Formula/rea-agents.rb） |
| agentskill-exchange-rea | https://github.com/agentskillexchange/skills |
| madtreasures-workspace | https://github.com/MADTreasures/reverse （仅 own MAD Studio 目标） |
| fedora-rea-notes | https://github.com/morluto/rea/discussions/1435 （可交叉链 /docs/linux-fedora/） |
| nix-rea-package | https://github.com/yzua/nixos-config （packages/rea/；可脚注 tdortman/dotfiles） |

## 本轮建议一并收录（maybe→yes，合规过的）

| slug | 源 | 注意 |
|------|-----|------|
| th08 | https://github.com/N0zoM1z0/th08 | 历史游戏重建家族 |
| touhou-reconstruction-factory | https://github.com/N0zoM1z0/touhou-reconstruction-factory | 同上 |
| tracebrief-rea-port | https://github.com/dany331x/tracebrief-rea-port | 先读 README 确认合法 |
| vibe-investing-techdoc | https://github.com/gameworkerkim/vibe-investing | 仅 TechDoc/韩文写作用 REA 的部分 |
| agents-skill-mirror | https://github.com/EstebanForge/AGENTS | skill 镜像 |
| awesome-jev-rea | https://github.com/AppitStudio/awesome-jev | 列 rea-jev 的索引页 |

若某 maybe 读后发现未授权商业目标或空壳，跳过并在回报里注明。

## 明确不收录
空 fork、热榜刮削、DSH 大索引单条、LazyOwn C2 包装、#693/#1115 类问询、名称撞车假阳性（见 catalog）。

## 验收
- 列表页出现新卡片；每条有中英详情 ≥ 现有 showcase 深度
- commit + CF Pages 部署 + URL 清单
