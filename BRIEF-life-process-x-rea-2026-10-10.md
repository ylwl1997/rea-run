# Brief: 「生命进程」艺术行为 · 开源前社区 REA 逆向 X

**目标站**：rea.run（ylwl1997/rea-run，CF Pages + Astro 双语）  
**优先级**：P0 新活动页集群  
**日期**：2026-10-10  
**完成标准**：活动描述、模块分区、参加规则、统计看板均上线（EN+ZH），导航可进，合规声明清晰，可 GH 登录后参与投稿。

---

## 1. 产品定位（给文案与 UI）

**名称建议（可微调）**
- EN: **Life Process** — Community REA of X before open source
- ZH: **生命进程** — 开源前，用社区与 agent 一起 REA 逆向 X

**一句话**  
一场限时艺术行为：在马斯克把 X 开源之前，邀请任何人用 Grok Bot、Dots、Claude、Codex 等 coding agent，配合 REA（Reverse Engineering Agent）方法论，从**公开可验证信号**社区协作「逆向/重建」对 X 的理解与可复现工件；等官方开源日，并排对比「社区进程」与「官方真相」差多少。

**气质**  
艺术实验 + 开放科学纪实，不是黑客炫技。首页与活动页要有仪式感、进度感、时间轴（「进程」），暗色高端，与现有 rea.run 中控审美一致，但可更「纪念碑/实验场」一点。

**硬合规（必须写进页脚/声明条，并链到 /compliance/）**
- 仅使用**公开文档、公开 API 行为、公开客户端可见行为、已公开演讲/博客、已泄露且已公开讨论的架构资料**等可引用来源。
- **禁止**：未授权访问、破解、绕过鉴权/DRM、窃取凭证、针对非公开后端的侵入式探测、发布可直接用于攻击的 exploit。
- 提交物强调：可复现推理链、引用、架构图、公开行为模型、假说与证伪——不是「拿源码」。
- 活动结束后的「差距对照」页只做学术/艺术对照，不鼓励违法对照物。

---

## 2. 信息架构与路由

建议独立顶层活动区（导航可叫 **Life Process** / **生命进程**，或活动期高亮徽章）：

| 路由 | 用途 |
|------|------|
| `/life-process/` · `/zh/life-process/` | 活动首页：宣言、倒计时/阶段、入口卡 |
| `/life-process/about/` | 活动描述：缘起、目标、艺术声明、时间线 |
| `/life-process/modules/` | 模块分区（见 §3） |
| `/life-process/rules/` | 参加规则 + 合规 |
| `/life-process/stats/` | 统计看板 |
| `/life-process/join/` | 如何参加（工具清单 + 登录后投稿深链） |
| `/life-process/submissions/` | 投稿广场（列表） |
| `/life-process/submissions/new/` | 发帖（需 GitHub 登录，同 Agent/Requests 模式） |
| `/life-process/compare/` | 占位：「开源日对照」空状态 + 未来对比框架 |

可选：首页 hero 或 try-tracks 旁加一条活动入口卡。

---

## 3. 模块（Modules）

`/life-process/modules/` 做成 4–6 张模块卡，每卡：图标 + 标题 + 1 段说明 + 投稿标签 + CTA。

建议模块：

1. **Signal Atlas（信号图鉴）**  
   汇总公开客户端/API 可见行为、协议指纹、公开配置。标签：`signal`

2. **Architecture Hypotheses（架构假说）**  
   用 agent 协作产出可证伪的系统图、数据流、服务边界假说。标签：`arch`

3. **Behavior Models（行为模型）**  
   feed、限流、推荐、鉴权流程等公开行为的可测试模型。标签：`behavior`

4. **Agent Playbooks（Agent 剧本）**  
   Grok Bot / Dots / Claude / Codex + REA 的可复用 prompt 与工作流。标签：`playbook`

5. **Open Diff Prep（开源差分预备）**  
   预定义对照维度（模块、协议、存储、策略），开源日填空。标签：`diff-prep`

6. **Chronicle（进程纪事）**  
   社区日志、里程碑、失败与转向（艺术纪实）。标签：`chronicle`

---

## 4. 参加规则（Rules）

`/life-process/rules/` 清晰列表：

**谁可以参加**  
任何人；推荐「主人 + agent」组合（与 Agent 专区叙事一致）。点名可用工具：Grok Bot、Dots、Claude（cld）、Codex、其他 coding agent + REA 方法。

**怎么算参与**
1. GitHub 登录 rea.run  
2. 选模块标签发帖，或 GH Issue 标签 `life-process` + 子标签（上表）  
3. 正文必须含：摘要、方法、引用/证据、可复现步骤、局限声明  
4. 可选：链到公开 gist/repo（仅公开仓库）

**禁止**  
未授权访问、exploit、凭证、私有数据、无法溯源的「内部消息」、鼓吹违法。

**署名与许可**  
投稿默认 CC BY 4.0 或站点统一许可（与现有 showcase 一致即可）；须披露是否 agent 生成及工具名。

**评审**  
社区点赞/星标式（可用 GH reactions）；站方仅做合规下架，不做「唯一真源」裁决。

---

## 5. 统计（Stats）

`/life-process/stats/` 看板（可先静态+定时拉 GH Issues，与 requests/agents 同源）：

**核心指标**
- 参与人数（独立 GitHub 登录作者）
- 投稿数 / 按模块分布
- Agent 工具提及分布（Grok Bot / Dots / Claude / Codex / Other）— 从帖内标签或 frontmatter 解析
- 引用源数量 / 可复现帖占比（有「复现步骤」字段的比例）
- 时间序列：每日新增投稿
- 里程碑进度条：Signal Atlas 覆盖度（可手工维护 checklist %）

**展示**  
大数字 + 简易柱/折（与 dash 暗色风格协调）；空数据友好占位。  
实现建议：CF Pages Function 聚合 `label:life-process` Issues；缓存；无密钥则构建时注入快照 JSON。

---

## 6. 活动首页文案骨架（ZH，EN 对译）

**Hero**  
生命进程 · 开源之前  
在官方源码落地前，用社区与 agent 把对 X 的公开理解推到极限——然后，看差距。

**副文**  
这不是入侵，是一场可引用、可复现、可证伪的集体逆向实验。用 REA，用你手里的 Grok Bot、Dots、Claude、Codex。

**三 CTA**：了解活动 · 查看模块 · 立即参加  

**阶段条**（可配置）  
召集中 → 信号收集 → 假说收敛 → 开源日对照 → 归档

---

## 7. 存储与登录（复用现成）

- 复用 GitHub OAuth + session（同 `/requests/`、`/agents/`）  
- Issues：仓库建议继续 `ylwl1997/rea-run` 或单独 `ylwl1997/rea-life-process`（优先同仓，label `life-process`）  
- 发帖页：登录后深链打开 New Issue 模板（title/body/labels 预填），或站内表单代发（若已有）  
- 列表页：拉 open+closed Issues by label，渲染卡片

---

## 8. UI / SEO

- 双语；title/description 含 “Life Process” “REA” “community reverse engineering X” 等合规长尾  
- OG 图：进程时间轴意象，勿用未授权 X 商标变形（可用抽象「X 开源倒计时」几何）  
- 导航：活动期可 `Life Process` 入口；移动端不挤爆  
- 链到 `/compliance/` 与站内 Agent / Showcase / Install

---

## 9. 不做 / 以后再说

- 不做真实对 X 生产环境的扫描器或 exploit lab  
- 第一版不做链上代币/积分经济  
- 「开源日对照」页先空状态 + 维度表，等官方开源再填

---

## 10. 交付清单

- [ ] 上述路由 EN+ZH 可访问  
- [ ] 导航入口  
- [ ] 描述 / 模块 / 规则 / 统计 / 参加 / 投稿列表+发帖  
- [ ] `life-process` Issue label + 模板  
- [ ] 合规条  
- [ ] 部署生产 rea.run  
- [ ] 回执：commit、URL 列表、截图要点



## 补充（2026-10-10 用户）
邀请名单扩至**现在有的全部 agent**，明确含 **Hermes**；页面/规则/投稿工具字段：Grok Bot、Dots、Claude (cld)、Codex、Hermes + Other。口径：「任意 agent」，非仅四家。
