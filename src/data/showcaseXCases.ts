import type { ShowcaseCase } from './showcaseTypes';

/**
 * X / community clips burned into showcase (2026-10-12).
 * Media is self-hosted under /media/x-cases/ — no x.com hotlinks.
 * Public metrics are snapshot figures from the brief; date stamped.
 */
export const SHOWCASE_X_CASES: ShowcaseCase[] = [
  {
    id: 'yurirdev-home-iot',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Community case · @YuriRDev (YuriRDev) on X · paraphrased on rea.run (not affiliated). Original post is in Portuguese, names Claude, and does not name REA.',
    attributionZh:
      '社区案例 · X 上 @YuriRDev（YuriRDev）· rea.run 改写收录（非官方合作）。原帖为葡萄牙语，点名 Claude，未点名 REA。',
    tags: ['x-case', 'own-device', 'iot', 'agent-re', 'not-rea-attributed'],
    relation: 'case-study',
    rating: {
      score: 4,
      labelEn: 'Own-home IoT with AI (REA not named)',
      labelZh: '自有家居物联网的 AI 逆向（未点名 REA）',
      qualityEn: 'Short public post plus a demo: several devices he already owns, controlled from his PC.',
      qualityZh: '短帖加演示：几件他已经拥有的设备，从自己的电脑控制。',
      evidenceEn: 'Public X post (Portuguese) plus a self-hosted ~34s clip. Author credits AI / Claude, not REA, and did not publish a repo.',
      evidenceZh: '公开 X 帖（葡萄牙语）加站内托管约 34 秒片段。作者归因于 AI／Claude，未写 REA，也没有公开仓库。',
      limitsEn: 'Not a REA session log, not an IR or camera integration recipe, and not open source.',
      limitsZh: '不是 REA 会话记录，不是红外或摄像头对接配方，也不是开源项目。',
      audienceEn: 'Builders who want an Evidence workflow on lights, cameras, or an air conditioner they own.',
      audienceZh: '想在自有灯具、摄像头或空调上走 Evidence 流程的建造者。',
    },
    footnotes: [
      {
        label: '@YuriRDev · X status 2109644135959236765 (Portuguese; names Claude, not REA)',
        url: 'https://x.com/YuriRDev/status/2109644135959236765',
      },
      {
        label: '@YuriRDev · video page on the same post',
        url: 'https://x.com/YuriRDev/status/2109644135959236765/video/1',
      },
    ],
    media: {
      video: {
        src: '/media/x-cases/yurirdev-home-iot.mp4',
        poster: '/media/x-cases/yurirdev-home-iot-poster.jpg',
        captionEn:
          'Author demo (~34s): PC control of IoT he already owns. Self-hosted from @YuriRDev’s X post; that post names Claude and does not name REA.',
        captionZh:
          '作者演示（约 34 秒）：从电脑控制他已经拥有的物联网设备。站内托管，源自 @YuriRDev 的 X 帖；该帖点名 Claude，未点名 REA。',
      },
    },
    complianceEn:
      'Lawful RE only: lights, cameras, and an air conditioner you own or are authorized to analyze. Do not reach a neighbor’s cameras, bypass vendor accounts, or treat this card as an IR, pairing, or camera-integration recipe. The author is not affiliated with rea.run.',
    complianceZh:
      '仅合法逆向：只分析你拥有或获准的灯、摄像头和空调。勿接入邻居的摄像头、绕过厂商账号，或把本卡当成红外、配对或摄像头对接配方。作者与 rea.run 无隶属关系。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/docs/install-demo/', labelEn: 'Codex install walkthrough', labelZh: 'Codex 安装跟练' },
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'REA-named BLE case', labelZh: '点名 REA 的蓝牙案例' },
      { href: '/showcase/greco-dev-tv/', labelEn: 'Own-TV case (REA named)', labelZh: '自有电视案例（点名 REA）' },
      { href: '/showcase/brorlandi-miscale/', labelEn: 'Own-device case (REA not named)', labelZh: '自有设备案例（未点名 REA）' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Own-home IoT, under 12 hours: YuriRDev’s PC controls (REA not named)',
      summary:
        '@YuriRDev wrote that the proprietary IoT already in his home was reversed with AI and is now controlled from his PC, in under 12 hours. The post names Claude and does not name REA.',
      lede:
        'YuriRDev (@YuriRDev) posted a Portuguese note: devices he already owns, previously stuck on vendor software, now driven from his computer after an AI session. rea.run credits that post and does not claim he used REA.',
      body: [
        '## Short version',
        'He says 100% of the IoT at home that used to sit on proprietary software was reversed with AI, and that he controls it from his PC. He puts the whole effort under 12 hours. Three things he names: LED strips that a proprietary infrared app used to drive; Intelbras cameras he already had; and a Media air conditioner (his wording). For the lights, he sent a photo of his room to Claude and describes a 3D model of that room as the control surface. He is explicit that he is not open-sourcing it.',
        '## Attribution (read this)',
        '**Credit:** YuriRDev, [@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765). The post **names Claude / AI** and **does not name REA.** This page must not say “built with REA.” He also writes that open-sourcing does not make sense for him: as it stands, it works for him — no login, the design he wants, his camera model, his AC model, no settings tab. That choice is his. rea.run does not republish a private app and does not fill in steps the post left out.',
        '## What the author described',
        '1. **Own devices.** LED strips previously driven by a proprietary IR app; Intelbras cameras he already owned; a Media air conditioner, in the author’s words.\n2. **Model credit.** He attributes the work to AI, and names Claude for the room photo that became a 3D model he uses to control those lights. That is not a published REA transcript.\n3. **What he says the software does.** From his PC: control the lights on that room model; open his own Intelbras cameras in one click, without the freeze he associates with the vendor app; control the air conditioner. He calls the result plug-and-play for himself.\n4. **What he did not publish.** No repository, no protocol notes, no IR codes, no camera pairing flow. This page does not add them.\n5. **Demo.** The clip above is a self-hosted copy of the attached video (~34 seconds). Full context stays on the X post.',
        '## Public metrics (snapshot 2026-10-13)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Impressions | 20,320 | Fetched from the post |\n| Likes | 610 | Same snapshot |\n| Reposts | 19 | Same snapshot |\n| Bookmarks | 209 | Same snapshot |\n| Replies | 26 | Same snapshot |\n| Source | [@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765) | Portuguese; names **Claude**, not REA |',
        '## How this relates to REA',
        'REA is the local MCP/CLI that lets a coding agent inspect software you are allowed to analyze and return Evidence plus unknowns. YuriRDev’s post is the **same lawful shape** — own devices, an assistant, a control surface that fits the person who owns the hardware — without being an REA case log. If you want that Evidence loop on a target you own, install REA and keep approval with the human.',
        '**Install.** Paste into your agent, or run it yourself: `npx rea-agents@latest setup`. Then restart the client. Walkthrough: [/docs/install/](/docs/install/) · Codex demo: [/docs/install-demo/](/docs/install-demo/).',
        '**A REA-named twin.** [@thinkszyg’s toilet BLE remote](/showcase/thinkszyg-toilet-ble/) is the nearby case where the author **does** name Codex + REA on hardware they own. [@greco_dev’s TV demo](/showcase/greco-dev-tv/) also names REA. [@BrOrlandi’s scale dashboard](/showcase/brorlandi-miscale/) is the same own-device shape, and that post does **not** name REA either.',
        '## What to copy (authorized hardware only)',
        '- [ ] The lights, cameras, and air conditioner are yours, or you have written permission\n- [ ] You do not point a listener or a client at a neighbor’s cameras or HVAC\n- [ ] You do not publish account tokens, pairing secrets, IR codes, or a method that controls someone else’s unit\n- [ ] You do not treat this page as a DRM-bypass, account-bypass, or vendor-cloud recipe\n- [ ] If you add REA, you ask for Evidence and unknowns — not a vibe-only story\n- [ ] His decision not to open-source stays his; this page is a credit, not a source drop',
      ],
      takeaways: [
        'Credit @YuriRDev: own-home IoT, reversed with AI and driven from his PC in under 12 hours. The post names Claude, not REA.',
        'He describes lights (room photo to a 3D model), his Intelbras cameras, and his Media AC — and he is not open-sourcing it.',
        'Install REA for an Evidence workflow on devices you may analyze. This page is not a camera, IR, or account-bypass guide.',
      ],
    },
    zh: {
      title: '自有家居物联网、不到 12 小时：YuriRDev 从电脑控制（未点名 REA）',
      summary:
        '@YuriRDev 写道：家里原先跑在专有软件上的物联网，用 AI 逆向之后从电脑控制，全程不到 12 小时。原帖点名 Claude，没有点名 REA。',
      lede:
        'YuriRDev（@YuriRDev）用葡萄牙语发了一条说明：已经拥有的设备，原先停在厂商软件里，经过一次 AI 会话后改由自己的电脑驱动。rea.run 按原帖署名，并不声称他使用了 REA。',
      body: [
        '## 短摘要',
        '他说家里 100% 原先使用专有软件的物联网都用 AI 做了逆向，并且现在从自己的电脑控制。他把整件事放在 12 小时以内。点名的三件东西：原先由专有红外 App 控制的灯带；他已经拥有的 Intelbras 摄像头；以及他原文里的 Media 空调。灯的部分，他把自己房间的照片发给 Claude，并描述用由此得到的房间三维模型来控制这些灯。他写明不打算开源。',
        '## 归因（先读）',
        '**署名：** YuriRDev，[@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765)。原帖**点名 Claude／AI**，**没有点名 REA。** 本页不得写成「用 REA 做的」。他还写道，开源对他没有意义：现状只为他服务——没有登录、是他喜欢的设计、对着他的摄像头型号和他的空调型号，也没有设置页。这个选择是他的。rea.run 不转载私有应用，也不补写原帖没写的步骤。',
        '## 作者描述了什么',
        '1. **自有设备。** 原先由专有红外 App 驱动的灯带；他已经拥有的 Intelbras 摄像头；作者原文中的 Media 空调。\n2. **模型署名。** 他把工作归因于 AI，并点名 Claude：房间照片变成他用来控制这些灯的三维模型。这不是一份公开的 REA 记录。\n3. **他说软件做什么。** 从他的电脑：在那个房间模型上控制灯；一键打开他自己的 Intelbras 摄像头，并且不像他印象里的厂商 App 那样卡住；控制空调。他称之为只对自己即插即用。\n4. **他没有公开的。** 没有仓库、没有协议笔记、没有红外码、没有摄像头配对流程。本页不补这些。\n5. **演示。** 上方视频是原帖附件的站内副本（约 34 秒）。完整语境以 X 原帖为准。',
        '## 公开指标（快照 2026-10-13）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 展示 | 20,320 | 抓取该帖 |\n| 赞 | 610 | 同一快照 |\n| 转发 | 19 | 同一快照 |\n| 书签 | 209 | 同一快照 |\n| 回复 | 26 | 同一快照 |\n| 来源 | [@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765) | 葡萄牙语；点名 **Claude**，未点名 REA |',
        '## 这和 REA / 安装的关系',
        'REA 是本地 MCP／CLI：让编程智能体检查你有权分析的软件，并返回 Evidence 与未知项。YuriRDev 的帖子是**同一种合法形态**——自有设备、助手、一块贴合主人的控制面——但不是一份 REA 案例日志。若你要在自有目标上走这条 Evidence 回路，先安装 REA，批准权留在人这边。',
        '**安装。** 贴进智能体，或自己执行：`npx rea-agents@latest setup`。然后重启客户端。跟练：[/zh/docs/install/](/zh/docs/install/) · Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。',
        '**点名 REA 的邻近案例。** [@thinkszyg 的马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/) 里，作者**明确**写了在自有硬件上使用 Codex + REA。[@greco_dev 的电视演示](/zh/showcase/greco-dev-tv/) 也点了 REA。[@BrOrlandi 的体脂秤看板](/zh/showcase/brorlandi-miscale/) 同属自有设备形态，那条帖子**同样没有**点名 REA。',
        '## 可以照做的边界（仅授权硬件）',
        '- [ ] 灯、摄像头和空调是你的，或有书面许可\n- [ ] 不把监听或客户端指向邻居的摄像头或暖通\n- [ ] 不公开账号令牌、配对秘密、红外码，或能控制别人设备的方法\n- [ ] 不把本页当成 DRM 绕过、账号绕过或厂商云配方\n- [ ] 若加上 REA，要 Evidence 与未知项，而不是只有 vibe\n- [ ] 他选择不开源，本页只做署名，不投放私有源码',
      ],
      takeaways: [
        '署名 @YuriRDev：自有家居物联网用 AI 逆向，不到 12 小时从电脑控制。原帖点名 Claude，未点名 REA。',
        '他描述了灯（房间照片到三维模型）、自有 Intelbras 摄像头和自有 Media 空调，并且不开源。',
        '在可分析的设备上要 Evidence，请先安装 REA。本页不是摄像头、红外或账号绕过指南。',
      ],
    },
  },
  {
    id: 'greco-dev-tv',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Community case · @greco_dev (greco) on X · paraphrased on rea.run (not affiliated). Original post is in Portuguese and explicitly names REA.',
    attributionZh:
      '社区案例 · X 上 @greco_dev（greco）· rea.run 改写收录（非官方合作）。原帖为葡萄牙语，并明确点名 REA。',
    tags: ['x-case', 'own-device', 'tv', 'rea-named', 'authorized-device'],
    relation: 'case-study',
    rating: {
      score: 5,
      labelEn: 'Own-TV demo that names REA',
      labelZh: '自有电视演示，原帖点名 REA',
      qualityEn: 'Short public post that names REA, links the repo, and shows a control-panel demo.',
      qualityZh: '短帖点名 REA、给出仓库链接，并附控制面板演示。',
      evidenceEn: 'Public X post (Portuguese) plus a self-hosted clip. Author wrote that they used REA and linked morluto/rea.',
      evidenceZh: '公开 X 帖（葡萄牙语）加站内托管片段。作者写明使用了 REA，并链接 morluto/rea。',
      limitsEn: 'Feature list is the author claim. No TV brand, no protocol write-up, and not a universal remote tutorial.',
      limitsZh: '功能列表来自作者自述。无电视品牌、无协议拆解，也不是通用遥控教程。',
      audienceEn: 'Builders who want an Evidence workflow on a television they own.',
      audienceZh: '想在自有电视上走 Evidence 流程的建造者。',
    },
    footnotes: [
      {
        label: '@greco_dev · X status 2109842197654692349 (Portuguese; names REA)',
        url: 'https://x.com/greco_dev/status/2109842197654692349',
      },
      {
        label: 'REA repository linked from the post (morluto/rea)',
        url: 'https://github.com/morluto/rea',
      },
    ],
    media: {
      video: {
        src: '/media/x-cases/greco-tv.mp4',
        poster: '/media/x-cases/greco-tv-poster.jpg',
        captionEn:
          'Author demo: a personal control panel for their own TV (self-hosted; from the @greco_dev post).',
        captionZh:
          '作者演示：为自己的电视做的控制面板（站内托管；源自 @greco_dev 帖）。',
      },
    },
    complianceEn:
      'Lawful RE only: a television, companion app, or firmware copy you own or are authorized to analyze. This card does not teach DRM bypass, account bypass, or access to someone else\u2019s set. The author is not affiliated with rea.run.',
    complianceZh:
      '仅合法逆向：只分析你拥有或获准的电视、配套应用或固件副本。本卡不教 DRM 绕过、账号绕过，也不教如何进入他人的电视。作者与 rea.run 无隶属关系。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/docs/install-demo/', labelEn: 'Codex install walkthrough', labelZh: 'Codex 安装跟练' },
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'REA-named BLE case', labelZh: '点名 REA 的蓝牙案例' },
      { href: '/showcase/brorlandi-miscale/', labelEn: 'Own-device case (REA not named)', labelZh: '自有设备案例（未点名 REA）' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Own TV, REA named: greco\u2019s remote and Mac-mirror demo',
      summary:
        '@greco_dev posted in Portuguese that they reverse engineered their own TV with REA and linked the repo. The demo covers app/input switching, volume, a remote, Mac screen mirror, screen time, and brightness/contrast controls.',
      lede:
        'greco (@greco_dev, data engineer) published an own-television reverse-engineering note that names REA and links github.com/morluto/rea. rea.run credits that post and does not add protocol steps the author did not publish.',
      body: [
        '## Short version',
        'The original post is in Portuguese. In it, greco says they reverse engineered their own TV and used REA. The features they list: switch app or input, volume, remote control, mirror a Mac screen, screen time, and general controls such as brightness and contrast. A short demo video is attached. rea.run hosts a copy of that clip and links the post.',
        '## Attribution (read this)',
        '**Credit:** greco, [@greco_dev](https://x.com/greco_dev/status/2109842197654692349). The post **explicitly names REA** (“usei o rea”) and links [github.com/morluto/rea](https://github.com/morluto/rea). Unlike own-device posts that never mention REA, this one can be described as “the author says they used REA.” It is still not a rea.run session log, and this page does not invent steps that are absent from the post.',
        '## What the author demonstrated',
        '1. **Own device.** Their television. The post does not name a brand or model.\n2. **Tool credit.** They wrote that they used REA and linked the upstream repository.\n3. **Features they listed.** Switch app/input; volume; remote control; mirror the Mac screen; screen time; general controls (brightness, contrast, and similar).\n4. **Demo.** The clip above is a self-hosted copy of the attached video: a personal control panel for that set. Full context and any later edits stay on the X post.',
        '## Public metrics (snapshot 2026-10-13)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Impressions | 10,112 | Fetched from the post |\n| Likes | 379 | Same snapshot |\n| Reposts | 25 | Same snapshot |\n| Bookmarks | 287 | Same snapshot |\n| Source | [@greco_dev](https://x.com/greco_dev/status/2109842197654692349) | Portuguese; **names REA** |',
        '## How this relates to installing REA',
        'REA is the local MCP/CLI that lets a coding agent inspect software you are allowed to analyze and return Evidence plus unknowns. This post is an own-device story that **does** name that tool. To mirror the lawful shape — not the unpublished internals — install REA, point it at a target you own, and ask for Evidence.',
        '**Install.** Paste into your agent, or run it yourself: `npx rea-agents@latest setup`. Then restart the client. Walkthrough: [/docs/install/](/docs/install/) · Codex demo: [/docs/install-demo/](/docs/install-demo/).',
        '**Nearby cases.** [@thinkszyg\u2019s toilet BLE remote](/showcase/thinkszyg-toilet-ble/) also names REA on hardware the author owns. [@BrOrlandi\u2019s scale dashboard](/showcase/brorlandi-miscale/) is the same own-device shape, and those posts do **not** name REA.',
        '## What to copy (authorized hardware only)',
        '- [ ] The television (and any app or firmware you inspect) is yours, or you have written permission\n- [ ] You ask the agent for Evidence and unknowns after setup\n- [ ] You do not publish keys, pairing secrets, or a method that controls someone else\u2019s set\n- [ ] You do not treat this page as a DRM-bypass, account-bypass, or firmware-extraction recipe\n- [ ] Screen-mirror and picture controls stay on equipment you are allowed to operate',
      ],
      takeaways: [
        'Credit @greco_dev: a Portuguese post that says they used REA on their own TV and links the repo.',
        'Listed features: app/input, volume, remote, Mac screen mirror, screen time, brightness and contrast.',
        'Install REA for an Evidence workflow on targets you may analyze. This page is not a bypass guide.',
      ],
    },
    zh: {
      title: '用 REA 逆向自己的电视：greco 的遥控与 Mac 镜像',
      summary:
        '@greco_dev 用葡萄牙语说明：对自己的电视做逆向，并写明使用 REA、附上仓库链接。演示含切换应用／输入源、音量、遥控、镜像 Mac 屏幕、屏幕时间，以及亮度与对比度。',
      lede:
        'greco（@greco_dev，数据工程师）发了一条自有电视的逆向说明。帖子直接写出用了 REA，并链接到 GitHub 上的 morluto/rea。rea.run 按原帖署名，不补写作者没有公开的协议步骤。',
      body: [
        '## 短摘要',
        '原帖是葡萄牙语。大意是：他逆向了自己的电视，用的是 REA。他列出的主要功能有：切换应用或输入源、音量、遥控器、把 Mac 屏幕镜像到电视、屏幕使用时间，以及亮度、对比度一类的通用控制。帖子附有约 29 秒演示。本站托管该视频，并链回原帖。',
        '## 归因（先读）',
        '**署名：** greco，[@greco_dev](https://x.com/greco_dev/status/2109842197654692349)。原帖**明确点名 REA**（原文 “usei o rea”），链接是 [github.com/morluto/rea](https://github.com/morluto/rea)。这和那些完全没提 REA 的自有设备帖不同：这里可以写「作者说用了 REA」。它仍然不是 rea.run 的会话记录，本页也不编造原帖里没有的步骤。',
        '## 作者演示了什么',
        '1. **自有设备。** 他自己的电视。帖子没有写品牌或型号。\n2. **工具署名。** 他写明使用了 REA，并给出上游仓库链接。\n3. **他列出的功能。** 切换应用／输入源；音量；遥控；镜像 Mac 屏幕；屏幕使用时间；通用控制（亮度、对比度等）。\n4. **演示。** 上方视频是原帖附件的站内副本：一块给他这台电视用的控制面板。完整语境和作者后来的修改，以 X 原帖为准。',
        '## 公开指标（快照 2026-10-13）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 展示 | 10,112 | 抓取该帖 |\n| 赞 | 379 | 同一快照 |\n| 转发 | 25 | 同一快照 |\n| 书签 | 287 | 同一快照 |\n| 来源 | [@greco_dev](https://x.com/greco_dev/status/2109842197654692349) | 葡萄牙语；**点名 REA** |',
        '## 这和安装 REA 的关系',
        'REA 是本地 MCP／CLI：让编程智能体检查你有权分析的软件，并返回 Evidence 与未知项。这条帖子是自有设备故事，而且**确实**点了这个工具的名。若要照着合法形态做——而不是去补原帖没写的内部细节——先安装 REA，指向你拥有的目标，再要 Evidence。',
        '**安装。** 贴进智能体，或自己执行：`npx rea-agents@latest setup`。然后重启客户端。跟练：[/zh/docs/install/](/zh/docs/install/) · Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。',
        '**邻近案例。** [@thinkszyg 的马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/) 也在自有硬件上点名了 REA。[@BrOrlandi 的体脂秤看板](/zh/showcase/brorlandi-miscale/) 同属自有设备形态，那些帖子**没有**点名 REA。',
        '## 可以照做的边界（仅授权硬件）',
        '- [ ] 电视以及你要检查的应用或固件是你的，或有书面许可\n- [ ] 安装之后向智能体要 Evidence 与未知项\n- [ ] 不公开密钥、配对秘密，或能控制别人电视的方法\n- [ ] 不把本页当成 DRM 绕过、账号绕过或固件提取配方\n- [ ] 屏幕镜像和画面控制只发生在你有权操作的设备上',
      ],
      takeaways: [
        '署名 @greco_dev：葡萄牙语原帖写明对自己的电视使用了 REA，并链接仓库。',
        '作者列出的功能：切换应用／输入源、音量、遥控、镜像 Mac 屏幕、屏幕时间、亮度与对比度。',
        '在可分析的目标上要 Evidence，请先安装 REA。本页不是绕过指南。',
      ],
    },
  },
  {
    id: 'brorlandi-miscale',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Community case · @BrOrlandi (Bruno Orlandi) on X · paraphrased on rea.run (not affiliated). Original posts do not name REA.',
    attributionZh:
      '社区案例 · X 上 @BrOrlandi（Bruno Orlandi）· rea.run 改写收录（非官方合作）。原帖未点名 REA。',
    tags: ['x-case', 'bluetooth', 'own-device', 'agent-re', 'not-rea-attributed'],
    relation: 'case-study',
    github: {
      url: 'https://github.com/BrOrlandi/miscale-dashboard',
      stars: 46,
      language: 'Python',
      license: 'MIT',
      updated: '2026-10-13',
    },
    rating: {
      score: 4,
      labelEn: 'Own-scale agent RE (REA not named)',
      labelZh: '自有体脂秤的智能体逆向（未点名 REA）',
      qualityEn: 'Public demo, open-source repo, and an explicit own-device reverse-engineering intent.',
      qualityZh: '有公开演示、开源仓库，以及明确的自有设备逆向意图。',
      evidenceEn: 'Public X post + self-hosted ~27s clip; MIT repo README. Author credits a coding-agent prompt, not REA.',
      evidenceZh: '公开 X 帖 + 站内托管约 27 秒片段；MIT 仓库 README。作者归因于编程智能体提示，未写 REA。',
      limitsEn: 'Not a REA session log and not a packet-decoder tutorial. Own scale only.',
      limitsZh: '不是 REA 会话记录，也不是报文解码教程。仅限自有秤。',
      audienceEn: 'Builders studying agent-built dashboards for a scale they own.',
      audienceZh: '研究「智能体为自有体脂秤做看板」的建造者。',
    },
    footnotes: [
      {
        label: '@BrOrlandi · demo post (one prompt, own scale)',
        url: 'https://x.com/BrOrlandi/status/2109533877744128247',
      },
      {
        label: '@BrOrlandi · reverse-engineering intent (Mi Body Composition Scale 2)',
        url: 'https://x.com/BrOrlandi/status/2109338723955736808',
      },
      {
        label: 'BrOrlandi/miscale-dashboard (MIT)',
        url: 'https://github.com/BrOrlandi/miscale-dashboard',
      },
      {
        label: 'Author promo video (YouTube)',
        url: 'https://youtu.be/ajvoJN0Qh_4',
      },
    ],
    media: {
      video: {
        src: '/media/x-cases/brorlandi-miscale.mp4',
        poster: '/media/x-cases/brorlandi-miscale-poster.jpg',
        frame: 'portrait',
        captionEn:
          'Author demo (~27s): one-prompt app for his own Mi Body Composition Scale 2. Self-hosted from @BrOrlandi’s X post; that post does not name REA. Longer promo: the YouTube link in the sources below.',
        captionZh:
          '作者演示（约 27 秒）：一条提示做出的自有小米体脂秤应用。站内托管，源自 @BrOrlandi 的 X 帖；该帖未点名 REA。更长宣传片见下方来源中的 YouTube 链接。',
      },
    },
    complianceEn:
      'Lawful RE only: a scale, watch, or app you own or are authorized to analyze. Do not capture a neighbor’s broadcasts, bypass Xiaomi accounts, or treat this card as a decoder recipe. The author is not affiliated with rea.run.',
    complianceZh:
      '仅合法逆向：只分析你拥有或获准的秤、手表或应用。勿抓邻居的广播、绕过小米账号，或把本卡当成解码配方。作者与 rea.run 无隶属关系。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/docs/install-demo/', labelEn: 'Codex install walkthrough', labelZh: 'Codex 安装跟练' },
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'REA-named BLE case', labelZh: '点名 REA 的蓝牙案例' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Own Xiaomi scale, one agent prompt: BrOrlandi’s local BLE dashboard',
      summary:
        '@BrOrlandi used a coding agent on his own Mi Body Composition Scale 2, then open-sourced miscale-dashboard. The posts do not name REA — this card says how the shape relates to installing REA.',
      lede:
        'Bruno Orlandi (@BrOrlandi) posted a public agent reverse-engineering story: a local dashboard for the Xiaomi scale he already owns, built from one coding-agent prompt, then published as MIT source. rea.run credits him and does not claim he used REA.',
      body: [
        '## Short version',
        'He wanted the scale’s readings on his own server — training context from a watch, meal ideas — without staying inside the vendor app. The follow-up demo says one prompt produced an app he preferred to the official one. The repo is a self-hosted listener: while someone stands on **his** scale, a nearby computer hears Bluetooth advertisements and the browser shows weight and body composition. No Xiaomi account and no vendor cloud in that path.',
        '## Attribution (read this)',
        '**Credit:** Bruno Orlandi, [@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247). The demo post, the earlier “I want to reverse engineer it” note, and the GitHub repo are his. **Those posts do not name REA.** This page must not say “built with REA.”',
        '## What was demonstrated',
        '1. **Own device.** Mi Body Composition Scale 2 (model called out by the author as XMTZC05HM in the repo).\n2. **Agent session.** He describes one coding-agent prompt and a few minutes for the first demo — not a published REA transcript.\n3. **What the software does.** A local dashboard matches a weigh-in to a profile, stores history, and can optionally ask a model he configures for a weekly summary of **his** numbers. The README credits body-composition formulas to public projects (openScale and related), not to a private exploit.\n4. **How he described the link.** In-thread he said the connection is Bluetooth Low Energy and that the scale’s broadcast is straightforward to receive. The README states the scale does not pair; it advertises while someone is standing on it.\n5. **Official artifacts.** Repo [BrOrlandi/miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard) (MIT, Python; 46 stars on 2026-10-13). Promo video: [YouTube](https://youtu.be/ajvoJN0Qh_4).',
        '## Public metrics (snapshot 2026-10-13)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Views | ~55.6k | Demo post |\n| Likes | 1,263 | Demo post |\n| Bookmarks | 494 | Demo post |\n| Reposts | 34 | Demo post |\n| Source | [@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247) | Does **not** name REA |\n| Repo | [miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard) | 46★ · MIT · Python |',
        '## How this relates to REA',
        'REA is the local MCP/CLI that lets a coding agent inspect software you are allowed to analyze and return Evidence plus unknowns. BrOrlandi’s posts are the **same lawful shape** — own device, agent, a rebuild you can read — without being an REA case log. If you want that Evidence loop on a target you own, install REA and keep the human in charge of approval.',
        '**Install.** Paste into your agent, or run it yourself: `npx rea-agents@latest setup`. Then restart the client. Walkthrough: [/docs/install/](/docs/install/) · Codex demo: [/docs/install-demo/](/docs/install-demo/).',
        '**A REA-named twin.** [@thinkszyg’s toilet BLE remote](/showcase/thinkszyg-toilet-ble/) is the nearby case where the author **does** name Codex + REA on hardware they own.',
        '## What to copy (authorized hardware only)',
        '- [ ] The scale is yours, or you have written permission\n- [ ] You scope the listener to your unit (the repo’s own docs warn that another scale in range can appear)\n- [ ] You do not publish secrets, account tokens, or a neighbor’s measurements\n- [ ] If you add REA, you ask for Evidence and unknowns — not a vibe-only story\n- [ ] Medical claims stay out; bioimpedance is an estimate',
      ],
      takeaways: [
        'Credit @BrOrlandi: one-prompt agent app for his own Xiaomi scale, then an MIT repo.',
        'The source posts do not name REA — do not invent that attribution.',
        'Same lawful shape as other own-device cases; install REA when you want Evidence on targets you may analyze.',
      ],
    },
    zh: {
      title: '自有小米体脂秤、一条智能体提示：BrOrlandi 的本地蓝牙看板',
      summary:
        '@BrOrlandi 用编程智能体处理自有 Mi Body Composition Scale 2，并开源 miscale-dashboard。帖子未点名 REA——本页说明它和安装 REA 的关系。',
      lede:
        'Bruno Orlandi（@BrOrlandi）公开了一条智能体逆向：为已经拥有的小米体脂秤做本地看板，一条编程智能体提示起步，再以 MIT 协议放出源码。rea.run 署名作者，并不声称他使用了 REA。',
      body: [
        '## 短摘要',
        '他想把秤的读数放到自己的服务器上——结合手表里的训练、再谈这周吃什么——而不必停在厂商 App 里。后续演示称一条提示就做出了他觉得比官方更好用的应用。仓库是自托管监听：有人站上**他的**秤时，旁边的电脑收到蓝牙广播，浏览器显示体重与体成分。这条路径不登录小米账号，也不走厂商云。',
        '## 归因（先读）',
        '**署名：** Bruno Orlandi，[@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247)。演示帖、更早的「我想逆向这台秤」说明，以及 GitHub 仓库都是他的。**这些帖子没有点名 REA。** 本页不得写成「用 REA 做的」。',
        '## 演示了什么',
        '1. **自有设备。** Mi Body Composition Scale 2（仓库中型号写为 XMTZC05HM）。\n2. **智能体会话。** 他描述第一条演示来自一条编程智能体提示、大约几分钟——不是一份公开的 REA 记录。\n3. **软件做什么。** 本地看板把一次称重对到档案、保存历史，并可选地把**他本人**的一周数字交给他配置的模型写短评。README 将体成分公式署名为公开项目（openScale 等），而不是私有破解。\n4. **他怎么描述连接。** 帖内回复写连接是蓝牙低功耗（Bluetooth Low Energy），秤的广播不难收到。README 写明秤不配对；有人站上去时才广播。\n5. **官方产物。** 仓库 [BrOrlandi/miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard)（MIT、Python；2026-10-13 快照 46 星）。宣传片：[YouTube](https://youtu.be/ajvoJN0Qh_4)。',
        '## 公开指标（快照 2026-10-13）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 浏览 | ~55.6k | 演示帖 |\n| 赞 | 1,263 | 演示帖 |\n| 书签 | 494 | 演示帖 |\n| 转发 | 34 | 演示帖 |\n| 来源 | [@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247) | **未**点名 REA |\n| 仓库 | [miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard) | 46★ · MIT · Python |',
        '## 这和 REA / 安装的关系',
        'REA 是本地 MCP／CLI：让编程智能体检查你有权分析的软件，并返回 Evidence 与未知项。BrOrlandi 的帖子是**同一种合法形态**——自有设备、智能体、可读的重建——但不是一份 REA 案例日志。若你要在自有目标上走这条 Evidence 回路，先安装 REA，批准权留在人这边。',
        '**安装。** 贴进智能体，或自己执行：`npx rea-agents@latest setup`。然后重启客户端。跟练：[/zh/docs/install/](/zh/docs/install/) · Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。',
        '**点名 REA 的邻近案例。** [@thinkszyg 的马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/) 里，作者**明确**写了在自有硬件上使用 Codex + REA。',
        '## 可以照做的边界（仅授权硬件）',
        '- [ ] 秤是你的，或有书面许可\n- [ ] 监听范围收在你自己的设备上（仓库文档提醒：范围内另一台秤也会出现）\n- [ ] 不公开密钥、账号令牌或邻居的测量\n- [ ] 若加上 REA，要 Evidence 与未知项，而不是只有 vibe\n- [ ] 不做医疗承诺；生物电阻是估计值',
      ],
      takeaways: [
        '署名 @BrOrlandi：一条提示为自有小米体脂秤做应用，随后放出 MIT 仓库。',
        '来源帖未点名 REA——不要编造这一归因。',
        '与其他自有设备案例同属合法形态；要在可分析目标上拿 Evidence 时再安装 REA。',
      ],
    },
  },
  {
    id: 'thinkszyg-toilet-ble',
    date: '2026-10-12',
    status: 'published',
    attributionEn:
      'Community case · @thinkszyg on X · paraphrased on rea.run (not affiliated)',
    attributionZh: '社区案例 · X 上 @thinkszyg · rea.run 改写收录（非官方合作）',
    tags: ['x-case', 'bluetooth', 'wechat-miniprogram', 'codex', 'authorized-device'],
    relation: 'case-study',
    rating: {
      score: 5,
      labelEn: 'REA + Codex BLE remote (own device)',
      labelZh: 'REA + Codex 蓝牙遥控器（自有设备）',
      qualityEn: 'Clear REA+Codex story with demo video on authorized hardware.',
      qualityZh: '清晰的 REA+Codex 故事，授权硬件演示视频。',
      evidenceEn: 'Public X post + self-hosted clip; ~30 min vibe remote claim by author.',
      evidenceZh: '公开 X 帖 + 站内托管片段；作者自称约半小时 vibe 遥控器。',
      limitsEn: 'One creator’s workflow — not a universal BLE tutorial or product endorsement.',
      limitsZh: '单创作者工作流——非通用蓝牙教程或产品背书。',
      audienceEn: 'Builders with own smart-home devices and authorized miniprogram assets.',
      audienceZh: '拥有自有智能家居设备与获准小程序资产的建造者。',
    },
    footnotes: [
      {
        label: '@thinkszyg · X status 2109309251533570509',
        url: 'https://x.com/thinkszyg/status/2109309251533570509',
      },
    ],
    media: {
      video: {
        src: '/media/x-cases/thinkszyg-toilet.mp4',
        poster: '/media/x-cases/thinkszyg-poster.jpg',
        captionEn:
          'Author demo: desktop status-bar remote flipping a toilet lid over BLE (self-hosted; from @thinkszyg post).',
        captionZh:
          '作者演示：电脑状态栏经蓝牙遥控马桶翻盖（站内托管；源自 @thinkszyg 帖）。',
      },
    },
    complianceEn:
      'Lawful RE only: reverse protocols on devices and miniprogram assets you own or are authorized to analyze. Do not attack third-party accounts, DRM, or neighbors’ hardware. Demo is the author’s own setup.',
    complianceZh:
      '仅合法逆向：只在你拥有或获准分析的设备／小程序资产上还原协议。勿攻第三方账户、DRM 或他人硬件。演示为作者自有环境。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
      { href: '/showcase/icanberk-ac-statusbar/', labelEn: 'Parallel vibe remote (AC)', labelZh: '并行 vibe 遥控（空调）' },
    ],
    en: {
      title: 'Status-bar toilet remote: REA + Codex on a WeChat miniprogram BLE protocol',
      summary:
        '@thinkszyg used Codex + REA to reverse a WeChat miniprogram Bluetooth toilet protocol and vibe a native status-bar remote in ~30 minutes — own device demo.',
      lede:
        'A public X post shows what “agent + REA on hardware you already own” can look like: recover the BLE control path from a WeChat miniprogram, then ship a tiny desktop remote that opens/closes the lid from the menu bar.',
      body: [
        '## Public metrics (snapshot)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Views | ~10.9k | Author post at capture |\n| Likes | 52 | Snapshot 2026-10-12 |\n| Bookmarks | 47 | Snapshot 2026-10-12 |\n| Source | [@thinkszyg](https://x.com/thinkszyg/status/2109309251533570509) | Self-hosted clip on rea.run |',
        '## What happened (paraphrase)',
        'The author describes using **Codex + REA** to reverse the Bluetooth protocol exposed by a WeChat miniprogram that controls a smart toilet, then vibing a **native status-bar remote** in about half an hour so a laptop can flip the lid without opening the phone app.',
        '## Steps you can mirror (authorized device only)',
        '1. Confirm the toilet / hub / miniprogram assets are **yours** or written-authorized.\n2. Install REA into Codex (or another MCP host): `npx rea-agents@latest setup` — see [/docs/install/](/docs/install/).\n3. Point the agent at the miniprogram package / captured BLE traffic you are allowed to keep.\n4. Ask for Evidence: GATT services, characteristic UUIDs, write payloads for open/close — mark unknowns.\n5. Rebuild a minimal native remote (status-bar / menu-bar) that only sends the recovered writes.\n6. Verify on your hardware; do not publish secrets that unlock other people’s units.',
        '## Checklist',
        '- [ ] Ownership / authorization documented\n- [ ] REA doctor green on the host\n- [ ] Evidence cites concrete UUIDs / payloads (or honest unknowns)\n- [ ] Remote scoped to your device pairing\n- [ ] No DRM / account-bypass framing',
        '## Why it is on rea.run',
        'It is a concrete, lawful “own device + agent + REA” story with a watchable demo. We host the video ourselves so the case wall does not depend on X CDN.',
      ],
      takeaways: [
        'Own-device BLE remotes are a legitimate REA teaching shape.',
        'Demand Evidence (UUIDs, payloads) before shipping vibes.',
        'Self-host community clips — never hotlink X media.',
      ],
    },
    zh: {
      title: '状态栏马桶遥控：用 REA + Codex 逆向微信小程序蓝牙协议',
      summary:
        '@thinkszyg 用 Codex + REA 逆向微信小程序蓝牙马桶协议，约半小时 vibe 出原生状态栏遥控器——自有设备演示。',
      lede:
        '一条公开 X 帖展示「智能体 + REA + 自有硬件」可以长什么样：从小程序还原蓝牙控制路径，再做出从菜单栏翻盖的桌面遥控器。',
      body: [
        '## 公开指标（快照）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 浏览 | ~10.9k | 抓取时作者帖 |\n| 赞 | 52 | 快照 2026-10-12 |\n| 书签 | 47 | 快照 2026-10-12 |\n| 来源 | [@thinkszyg](https://x.com/thinkszyg/status/2109309251533570509) | 视频由 rea.run 自托管 |',
        '## 发生了什么（改写）',
        '作者描述用 **Codex + REA** 逆向控制智能马桶的微信小程序蓝牙协议，再花约半小时 vibe 出一个**原生状态栏遥控器**，让电脑不必开手机 App 即可翻盖。',
        '## 可镜像步骤（仅授权设备）',
        '1. 确认马桶／网关／小程序资产为**自有**或书面授权。\n2. 在 Codex（或其他 MCP 宿主）安装 REA：`npx rea-agents@latest setup`——见 [/zh/docs/install/](/zh/docs/install/)。\n3. 把智能体指向你有权保留的小程序包／蓝牙抓包。\n4. 要 Evidence：GATT 服务、特征 UUID、开／关写入载荷——未知项标出。\n5. 重建极简原生遥控（状态栏／菜单栏），只发还原出的写入。\n6. 在自有硬件上核验；勿公开可解锁他人设备的密钥。',
        '## 清单',
        '- [ ] 所有权／授权已记录\n- [ ] 宿主上 REA doctor 绿灯\n- [ ] Evidence 引用具体 UUID／载荷（或诚实未知）\n- [ ] 遥控范围限于你的配对设备\n- [ ] 无 DRM／账户绕过叙事',
        '## 为何收录',
        '这是具体、合法的「自有设备 + 智能体 + REA」故事，且可观看。视频由本站托管，案例墙不依赖 X CDN。',
      ],
      takeaways: [
        '自有设备蓝牙遥控是正当的 REA 教学形态。',
        '发 vibes 前先要 Evidence（UUID、载荷）。',
        '社区片段自托管——勿热链 X 媒体。',
      ],
    },
  },
  {
    id: 'dotey-claude-slides',
    date: '2026-10-12',
    status: 'published',
    attributionEn:
      'Community case · @dotey on X · paraphrased on rea.run (not affiliated)',
    attributionZh: '社区案例 · X 上 @dotey · rea.run 改写收录（非官方合作）',
    tags: ['x-case', 'javascript', 'claude-slides', 'codex', 'obfuscation'],
    relation: 'case-study',
    rating: {
      score: 5,
      labelEn: 'REA Skill reverse of Claude Slides',
      labelZh: '用 REA Skill 逆向 Claude Slides',
      qualityEn: 'High-engagement walkthrough with clear install → reverse steps and screenshots.',
      qualityZh: '高互动图文：安装 → 逆向步骤清晰，含截图。',
      evidenceEn: 'Public X thread + four self-hosted screenshots; author names REA explicitly.',
      evidenceZh: '公开 X 帖 + 四张站内截图；作者明确点名 REA。',
      limitsEn: 'Author’s session on assets they chose to inspect — not a license to crack third-party SaaS DRM.',
      limitsZh: '作者对其选择检视之资产的会话——并非破解第三方 SaaS DRM 的许可。',
      audienceEn: 'Builders studying obfuscated front-end editors they are authorized to analyze.',
      audienceZh: '研究获准分析的混淆前端编辑器的建造者。',
    },
    footnotes: [
      {
        label: '@dotey · X status 2109151666020794711',
        url: 'https://x.com/dotey/status/2109151666020794711',
      },
    ],
    media: {
      images: [
        {
          src: '/media/x-cases/dotey-HUUy907WkAAijNk.jpg',
          altEn: 'Step context from @dotey Claude Slides reverse thread (1/4)',
          altZh: '@dotey Claude Slides 逆向帖步骤语境（1/4）',
        },
        {
          src: '/media/x-cases/dotey-HUUyueaWEAI3toM.jpg',
          altEn: 'Step context from @dotey Claude Slides reverse thread (2/4)',
          altZh: '@dotey Claude Slides 逆向帖步骤语境（2/4）',
        },
        {
          src: '/media/x-cases/dotey-HUUzbPCXkAAoJUl.jpg',
          altEn: 'Step context from @dotey Claude Slides reverse thread (3/4)',
          altZh: '@dotey Claude Slides 逆向帖步骤语境（3/4）',
        },
        {
          src: '/media/x-cases/dotey-HUU2D_4WcAAM2DJ.jpg',
          altEn: 'Step context from @dotey Claude Slides reverse thread (4/4)',
          altZh: '@dotey Claude Slides 逆向帖步骤语境（4/4）',
        },
      ],
    },
    complianceEn:
      'Lawful RE only on software and copies you are authorized to analyze. Reconstructing editor behavior for learning is not permission to pirate, bypass billing, or redistribute proprietary assets.',
    complianceZh:
      '仅对你有权分析的软件与副本做合法逆向。为学习还原编辑器行为，不等于可盗版、绕过计费或再分发专有资产。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/blog/agent-reverse-engineering-mcp/', labelEn: 'Agent + MCP overview', labelZh: '智能体 + MCP 概览' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Almost-complete Claude Slides editor: REA Skill reverse with Codex',
      summary:
        '@dotey reports using REA to reverse nearly the full Claude Slides editor — download scripts/styles, install REA via Codex, then REA Skill on obfuscated code.',
      lede:
        'A widely bookmarked X walkthrough names REA explicitly: pull the Slides front-end artifacts, wire REA into Codex, and let a REA Skill chew through obfuscated editor code toward a working reconstruction.',
      body: [
        '## Public metrics (snapshot)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Views | ~71k | Author post at capture |\n| Likes | 676 | Snapshot 2026-10-12 |\n| Bookmarks | 999 | Snapshot 2026-10-12 |\n| Reposts | 103 | Snapshot 2026-10-12 |\n| Source | [@dotey](https://x.com/dotey/status/2109151666020794711) | Four screenshots self-hosted |',
        '## Four-step flow (as described by the author)',
        '| Step | Action |\n|---|---|\n| 1 | Download the editor’s scripts and styles |\n| 2 | Install REA through Codex (`npx rea-agents… setup` pattern) |\n| 3 | Run a REA Skill against the obfuscated code |\n| 4 | Iterate until the reconstructed editor covers nearly full functionality |',
        '## Operator checklist (authorized copies only)',
        '1. Confirm you may keep and analyze the downloaded assets.\n2. Pin a reproducible `rea-agents` version after setup.\n3. Ask the agent for Evidence on module boundaries, not vibes alone.\n4. Keep proprietary blobs out of public repos unless license allows.\n5. Cross-link findings to your own rebuild tests.',
        '## Screenshots',
        'The four images below are self-hosted copies from the public thread (for case archival). See the original post for full context and any updates from the author.',
        '## Why it is on rea.run',
        'High-signal community proof that people already pair Codex + REA Skill on messy front-end packages — with steps others can audit, not a crack script dump.',
      ],
      takeaways: [
        'Author-named REA + Codex Skill path on obfuscated JS.',
        'Steps: fetch assets → setup REA → Skill reverse → verify rebuild.',
        'Authorization and redistribution limits still apply.',
      ],
    },
    zh: {
      title: '几乎完整的 Claude Slides 编辑器：Codex + REA Skill 逆向',
      summary:
        '@dotey 称用 REA 逆向出 Claude Slides 编辑器几乎完整功能——下载脚本样式、经 Codex 装 REA，再用 REA Skill 啃混淆代码。',
      lede:
        '一条高收藏 X 图文明确点名 REA：拉下 Slides 前端制品，把 REA 接进 Codex，再让 REA Skill 处理混淆编辑器代码，逼近可工作的重建。',
      body: [
        '## 公开指标（快照）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 浏览 | ~71k | 抓取时作者帖 |\n| 赞 | 676 | 快照 2026-10-12 |\n| 书签 | 999 | 快照 2026-10-12 |\n| 转发 | 103 | 快照 2026-10-12 |\n| 来源 | [@dotey](https://x.com/dotey/status/2109151666020794711) | 四张截图站内托管 |',
        '## 四步流程（按作者描述）',
        '| 步骤 | 动作 |\n|---|---|\n| 1 | 下载编辑器的脚本与样式 |\n| 2 | 经 Codex 安装 REA（`npx rea-agents… setup` 一类） |\n| 3 | 对混淆代码跑 REA Skill |\n| 4 | 迭代至重建编辑器覆盖几乎完整功能 |',
        '## 运维清单（仅授权副本）',
        '1. 确认你可以保留并分析下载资产。\n2. setup 后钉可复现的 `rea-agents` 版本。\n3. 向智能体要模块边界 Evidence，而非仅 vibes。\n4. 除非许可允许，勿把专有 blob 推进公开仓。\n5. 把发现交叉到你自己的重建测试。',
        '## 截图',
        '下方四图为公开帖的站内存档副本。完整语境与作者后续更新请看原帖。',
        '## 为何收录',
        '高信号社区证明：人们已在脏前端包上组合 Codex + REA Skill——步骤可审计，不是破解脚本倾倒。',
      ],
      takeaways: [
        '作者点名的 REA + Codex Skill 混淆 JS 路径。',
        '步骤：拉资产 → 装 REA → Skill 逆向 → 核验重建。',
        '授权与再分发限制仍然成立。',
      ],
    },
  },
  {
    id: 'icanberk-ac-statusbar',
    date: '2026-10-12',
    status: 'published',
    attributionEn:
      'Community vibe-remote case · @icanberk on X · original post does NOT name REA — parallel inspiration only',
    attributionZh:
      '社区 vibe 遥控案例 · X 上 @icanberk · 原帖未点名 REA——仅作并行灵感／同类场景',
    tags: ['x-case', 'vibe-remote', 'status-bar', 'community', 'not-rea-attributed'],
    relation: 'demo',
    rating: {
      score: 4,
      labelEn: 'Parallel vibe remote (REA not claimed)',
      labelZh: '并行 vibe 遥控（未声称 REA）',
      qualityEn: 'Huge reach status-bar AC demo; honest non-attribution to REA.',
      qualityZh: '高曝光状态栏空调演示；诚实不把功劳算给 REA。',
      evidenceEn: 'Public X post + self-hosted short clip; author did not mention REA.',
      evidenceZh: '公开 X 帖 + 站内短片；作者未提及 REA。',
      limitsEn: 'Not a REA tutorial. Do not invent “built with REA” attribution.',
      limitsZh: '不是 REA 教程。禁止伪造「用 REA 做的」归因。',
      audienceEn: 'Anyone studying status-bar remotes / own HVAC integrations.',
      audienceZh: '研究状态栏遥控／自有暖通集成的人。',
    },
    footnotes: [
      {
        label: '@icanberk · X status 2109031477484937571 (does not name REA)',
        url: 'https://x.com/icanberk/status/2109031477484937571',
      },
    ],
    media: {
      video: {
        src: '/media/x-cases/icanberk-ac.gif.mp4',
        poster: '/media/x-cases/icanberk-poster.jpg',
        captionEn:
          'Short community clip: AC status-bar remote vibe (self-hosted). Original post does not name REA.',
        captionZh:
          '社区短片：空调状态栏遥控 vibe（站内托管）。原帖未点名 REA。',
      },
    },
    complianceEn:
      'Own or authorized HVAC / IoT only. This card is social-proof of the status-bar remote pattern, not an REA success claim and not a guide to attack third-party systems.',
    complianceZh:
      '仅限自有或授权的暖通／物联网。本卡是状态栏遥控模式的社会证明，不是 REA 成功声明，也不是攻击第三方系统的指南。',
    related: [
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'REA-named BLE toilet remote', labelZh: '点名 REA 的蓝牙马桶遥控' },
      { href: '/docs/install/', labelEn: 'Install REA (if you choose it)', labelZh: '安装 REA（若你选择用）' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'AC status-bar remote: high-reach vibe demo (REA not named in source)',
      summary:
        '@icanberk’s AC status-bar clip hit ~1M views. The original post does not mention REA — we file it as parallel community inspiration for own-device remotes.',
      lede:
        'Not every viral reverse-and-vibe remote was built with REA. This card keeps the attribution honest: a popular status-bar air-conditioner control demo, hosted here as a parallel scene beside REA-named cases.',
      body: [
        '## Attribution honesty (read first)',
        'The source post **does not name REA**. rea.run must not fabricate “built with REA.” We present it as **community RE / vibe-remote inspiration** in the same product shape as other own-device status-bar remotes.',
        '## Public metrics (snapshot)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Views | ~1.07M | Author post at capture |\n| Likes | ~18.8k | Snapshot 2026-10-12 |\n| Bookmarks | ~5.9k | Snapshot 2026-10-12 |\n| Source | [@icanberk](https://x.com/icanberk/status/2109031477484937571) | Self-hosted clip; **no REA claim** |',
        '## What you can learn anyway',
        '1. Status-bar / menu-bar remotes are a sticky UX for home devices.\n2. Short silent clips travel far as social proof.\n3. When you *do* use REA on your own AC bridge / app, follow the same legal boundary as our toilet BLE case: own device, Evidence first, no third-party attacks.',
        '## If you want a REA-named twin',
        'See [@thinkszyg toilet BLE remote](/showcase/thinkszyg-toilet-ble/) where the author **does** name Codex + REA.',
        '## Compliance reminder',
        'Control only equipment you own or are authorized to automate. Do not scrape or attack vendor clouds without permission.',
      ],
      takeaways: [
        'High reach ≠ REA attribution — label sources honestly.',
        'Useful as parallel inspiration next to REA-named cases.',
        'Own-device remotes still need authorization discipline.',
      ],
    },
    zh: {
      title: '空调状态栏遥控：高曝光 vibe 演示（来源未点名 REA）',
      summary:
        '@icanberk 的空调状态栏短片约 100 万浏览。原帖未提 REA——我们收录为自有设备遥控的并行社区灵感。',
      lede:
        '并非每条爆款「逆向 + vibe 遥控」都用了 REA。本卡诚实归因：热门状态栏空调控制演示，作为与点名 REA 案例并列的同类场景托管于此。',
      body: [
        '## 归因诚实（先读）',
        '来源帖**未点名 REA**。rea.run 不得伪造「用 REA 做的」。我们将其列为**社区逆向／vibe 遥控灵感**，产品形态与其他自有设备状态栏遥控相近。',
        '## 公开指标（快照）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 浏览 | ~1.07M | 抓取时作者帖 |\n| 赞 | ~18.8k | 快照 2026-10-12 |\n| 书签 | ~5.9k | 快照 2026-10-12 |\n| 来源 | [@icanberk](https://x.com/icanberk/status/2109031477484937571) | 站内短片；**无 REA 声称** |',
        '## 仍可学到什么',
        '1. 状态栏／菜单栏遥控对家居设备很粘人。\n2. 无声短片作为社会证明传播力强。\n3. 当你**确实**对自有空调网桥／App 使用 REA 时，边界与马桶蓝牙案例相同：自有设备、先 Evidence、不攻第三方。',
        '## 若要找点名 REA 的孪生案例',
        '见 [@thinkszyg 马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/)，作者**明确**写了 Codex + REA。',
        '## 合规提醒',
        '只控制你拥有或获准自动化的设备。未经许可勿抓取或攻击厂商云。',
      ],
      takeaways: [
        '高曝光 ≠ REA 归因——来源要老实标注。',
        '可作为点名 REA 案例旁的并行灵感。',
        '自有设备遥控仍要授权纪律。',
      ],
    },
  },
];
