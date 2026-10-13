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
      'Community case · @YuriRDev (YuriRDev) on X · paraphrased on rea.run (not affiliated). Original post is in Portuguese.',
    attributionZh:
      '社区案例 · X 上 @YuriRDev（YuriRDev）· rea.run 改写收录（非官方合作）。原帖为葡萄牙语。',
    tags: ['x-case', 'own-device', 'iot', 'agent-re', 'home'],
    relation: 'case-study',
    rating: {
      score: 4,
      labelEn: 'Own-home IoT with AI',
      labelZh: '自有家居物联网的 AI 逆向',
      qualityEn: 'Short public post plus a demo: several devices he already owns, controlled from his PC.',
      qualityZh: '短帖加演示：几件他已经拥有的设备，从自己的电脑控制。',
      evidenceEn: 'Public X post (Portuguese) plus a self-hosted ~34s clip. Author describes an AI session and did not publish a repo.',
      evidenceZh: '公开 X 帖（葡萄牙语）加站内托管约 34 秒片段。作者描述一次 AI 会话，也没有公开仓库。',
      limitsEn: 'Not an IR or camera integration recipe, and not open source.',
      limitsZh: '不是红外或摄像头对接配方，也不是开源项目。',
      audienceEn: 'Builders who want an Evidence workflow on lights, cameras, or an air conditioner they own.',
      audienceZh: '想在自有灯具、摄像头或空调上走 Evidence 流程的建造者。',
    },
    footnotes: [
      {
        label: '@YuriRDev · X status 2109644135959236765 (Portuguese)',
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
          'Author demo (~34s): PC control of IoT he already owns. Self-hosted from @YuriRDev’s X post.',
        captionZh:
          '作者演示（约 34 秒）：从电脑控制他已经拥有的物联网设备。站内托管，源自 @YuriRDev 的 X 帖。',
      },
    },
    complianceEn:
      'Lawful RE only: lights, cameras, and an air conditioner you own or are authorized to analyze. Do not reach a neighbor’s cameras, bypass vendor accounts, or treat this card as an IR, pairing, or camera-integration recipe. The author is not affiliated with rea.run.',
    complianceZh:
      '仅合法逆向：只分析你拥有或获准的灯、摄像头和空调。勿接入邻居的摄像头、绕过厂商账号，或把本卡当成红外、配对或摄像头对接配方。作者与 rea.run 无隶属关系。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/docs/install-demo/', labelEn: 'Codex install walkthrough', labelZh: 'Codex 安装跟练' },
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'BLE toilet remote', labelZh: '蓝牙马桶遥控' },
      { href: '/showcase/greco-dev-tv/', labelEn: 'Own-TV remote', labelZh: '自有电视遥控' },
      { href: '/showcase/brorlandi-miscale/', labelEn: 'Own-scale dashboard', labelZh: '自有体脂秤看板' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Own-home IoT, under 12 hours: YuriRDev’s PC controls',
      summary:
        '@YuriRDev wrote that the proprietary IoT already in his home was reversed with AI and is now controlled from his PC, in under 12 hours.',
      lede:
        'YuriRDev (@YuriRDev) posted a Portuguese note: devices he already owns, previously stuck on vendor software, now driven from his computer after an AI session. rea.run credits that post.',
      body: [
        '## Short version',
        'He says 100% of the IoT at home that used to sit on proprietary software was reversed with AI, and that he controls it from his PC. He puts the whole effort under 12 hours. Three things he lists: LED strips that a proprietary infrared app used to drive; Intelbras cameras he already had; and a Media air conditioner (his wording). For the lights, he sent a photo of his room to Claude and describes a 3D model of that room as the control surface. He is explicit that he is not open-sourcing it.',
        '## Attribution (read this)',
        '**Credit:** YuriRDev, [@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765). He writes that open-sourcing does not make sense for him: as it stands, it works for him — no login, the design he wants, his camera model, his AC model, no settings tab. That choice is his. rea.run does not republish a private app and does not fill in steps the post left out.',
        '## What the author described',
        '1. **Own devices.** LED strips previously driven by a proprietary IR app; Intelbras cameras he already owned; a Media air conditioner, in the author’s words.\n2. **Model credit.** He attributes the work to AI. A photo of his room, sent to Claude, became a 3D model he uses to control those lights.\n3. **What he says the software does.** From his PC: control the lights on that room model; open his own Intelbras cameras in one click, without the freeze he associates with the vendor app; control the air conditioner. He calls the result plug-and-play for himself.\n4. **What he did not publish.** No repository, no protocol notes, no IR codes, no camera pairing flow. This page does not add them.\n5. **Demo.** The clip above is a self-hosted copy of the attached video (~34 seconds). Full context stays on the X post.',
        '## Public metrics (snapshot 2026-10-13)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Impressions | 20,320 | Fetched from the post |\n| Likes | 610 | Same snapshot |\n| Reposts | 19 | Same snapshot |\n| Bookmarks | 209 | Same snapshot |\n| Replies | 26 | Same snapshot |\n| Source | [@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765) | Portuguese |',
        '## How this relates to REA',
        'REA is the local MCP/CLI that lets a coding agent inspect software you are allowed to analyze and return Evidence plus unknowns. YuriRDev’s post is the **same lawful shape** — own devices, an assistant, a control surface that fits the person who owns the hardware. If you want that Evidence loop on a target you own, install REA and keep approval with the human.',
        '**Install.** Paste into your agent, or run it yourself: `npx rea-agents@latest setup`. Then restart the client. Walkthrough: [/docs/install/](/docs/install/) · Codex demo: [/docs/install-demo/](/docs/install-demo/).',
        '**Nearby cases.** [@thinkszyg’s toilet BLE remote](/showcase/thinkszyg-toilet-ble/), [@greco_dev’s TV demo](/showcase/greco-dev-tv/), and [@BrOrlandi’s scale dashboard](/showcase/brorlandi-miscale/) are other own-device stories on the same wall.',
        '## What to copy (authorized hardware only)',
        '- [ ] The lights, cameras, and air conditioner are yours, or you have written permission\n- [ ] You do not point a listener or a client at a neighbor’s cameras or HVAC\n- [ ] You do not publish account tokens, pairing secrets, IR codes, or a method that controls someone else’s unit\n- [ ] You do not treat this page as a DRM-bypass, account-bypass, or vendor-cloud recipe\n- [ ] If you add REA, you ask for Evidence and unknowns — not a vibe-only story\n- [ ] His decision not to open-source stays his; this page is a credit, not a source drop',
      ],
      takeaways: [
        'Credit @YuriRDev: own-home IoT, reversed with AI and driven from his PC in under 12 hours.',
        'He describes lights (room photo to a 3D model), his Intelbras cameras, and his Media AC — and he is not open-sourcing it.',
        'Install REA for an Evidence workflow on devices you may analyze. This page is not a camera, IR, or account-bypass guide.',
      ],
    },
    zh: {
      title: '自有家居物联网、不到 12 小时：YuriRDev 从电脑控制',
      summary:
        '@YuriRDev 写道：家里原先跑在专有软件上的物联网，用 AI 逆向之后从电脑控制，全程不到 12 小时。',
      lede:
        'YuriRDev（@YuriRDev）用葡萄牙语发了一条说明：已经拥有的设备，原先停在厂商软件里，经过一次 AI 会话后改由自己的电脑驱动。rea.run 按原帖署名。',
      body: [
        '## 短摘要',
        '他说家里 100% 原先使用专有软件的物联网都用 AI 做了逆向，并且现在从自己的电脑控制。他把整件事放在 12 小时以内。他写到三件东西：原先由专有红外 App 控制的灯带；他已经拥有的 Intelbras 摄像头；以及他原文里的 Media 空调。灯的部分，他把自己房间的照片发给 Claude，并描述用由此得到的房间三维模型来控制这些灯。他写明不打算开源。',
        '## 归因（先读）',
        '**署名：** YuriRDev，[@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765)。他还写道，开源对他没有意义：现状只为他服务——没有登录、是他喜欢的设计、对着他的摄像头型号和他的空调型号，也没有设置页。这个选择是他的。rea.run 不转载私有应用，也不补写原帖没写的步骤。',
        '## 作者描述了什么',
        '1. **自有设备。** 原先由专有红外 App 驱动的灯带；他已经拥有的 Intelbras 摄像头；作者原文中的 Media 空调。\n2. **模型署名。** 他把工作归因于 AI。房间照片发给 Claude 之后，变成他用来控制这些灯的三维模型。\n3. **他说软件做什么。** 从他的电脑：在那个房间模型上控制灯；一键打开他自己的 Intelbras 摄像头，并且不像他印象里的厂商 App 那样卡住；控制空调。他称之为只对自己即插即用。\n4. **他没有公开的。** 没有仓库、没有协议笔记、没有红外码、没有摄像头配对流程。本页不补这些。\n5. **演示。** 上方视频是原帖附件的站内副本（约 34 秒）。完整语境以 X 原帖为准。',
        '## 公开指标（快照 2026-10-13）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 展示 | 20,320 | 抓取该帖 |\n| 赞 | 610 | 同一快照 |\n| 转发 | 19 | 同一快照 |\n| 书签 | 209 | 同一快照 |\n| 回复 | 26 | 同一快照 |\n| 来源 | [@YuriRDev](https://x.com/YuriRDev/status/2109644135959236765) | 葡萄牙语 |',
        '## 这和 REA / 安装的关系',
        'REA 是本地 MCP／CLI：让编程智能体检查你有权分析的软件，并返回 Evidence 与未知项。YuriRDev 的帖子是**同一种合法形态**——自有设备、助手、一块贴合主人的控制面。若你要在自有目标上走这条 Evidence 回路，先安装 REA，批准权留在人这边。',
        '**安装。** 贴进智能体，或自己执行：`npx rea-agents@latest setup`。然后重启客户端。跟练：[/zh/docs/install/](/zh/docs/install/) · Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。',
        '**邻近案例。** [@thinkszyg 的马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/)、[@greco_dev 的电视演示](/zh/showcase/greco-dev-tv/) 和 [@BrOrlandi 的体脂秤看板](/zh/showcase/brorlandi-miscale/) 都是同一面墙上的自有设备故事。',
        '## 可以照做的边界（仅授权硬件）',
        '- [ ] 灯、摄像头和空调是你的，或有书面许可\n- [ ] 不把监听或客户端指向邻居的摄像头或暖通\n- [ ] 不公开账号令牌、配对秘密、红外码，或能控制别人设备的方法\n- [ ] 不把本页当成 DRM 绕过、账号绕过或厂商云配方\n- [ ] 若加上 REA，要 Evidence 与未知项，而不是只有 vibe\n- [ ] 他选择不开源，本页只做署名，不投放私有源码',
      ],
      takeaways: [
        '署名 @YuriRDev：自有家居物联网用 AI 逆向，不到 12 小时从电脑控制。',
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
      'Community case · @greco_dev (greco) on X · paraphrased on rea.run (not affiliated). Original post is in Portuguese.',
    attributionZh:
      '社区案例 · X 上 @greco_dev（greco）· rea.run 改写收录（非官方合作）。原帖为葡萄牙语。',
    tags: ['x-case', 'own-device', 'tv', 'remote', 'authorized-device'],
    relation: 'case-study',
    rating: {
      score: 5,
      labelEn: 'Own-TV remote demo',
      labelZh: '自有电视遥控演示',
      qualityEn: 'Short public post that links the repo and shows a control-panel demo.',
      qualityZh: '短帖给出仓库链接，并附控制面板演示。',
      evidenceEn: 'Public X post (Portuguese) plus a self-hosted clip. Author wrote that they used REA and linked morluto/rea.',
      evidenceZh: '公开 X 帖（葡萄牙语）加站内托管片段。作者写明使用了 REA，并链接 morluto/rea。',
      limitsEn: 'Feature list is the author claim. No TV brand, no protocol write-up, and not a universal remote tutorial.',
      limitsZh: '功能列表来自作者自述。无电视品牌、无协议拆解，也不是通用遥控教程。',
      audienceEn: 'Builders who want an Evidence workflow on a television they own.',
      audienceZh: '想在自有电视上走 Evidence 流程的建造者。',
    },
    footnotes: [
      {
        label: '@greco_dev · X status 2109842197654692349 (Portuguese)',
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
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'BLE toilet remote', labelZh: '蓝牙马桶遥控' },
      { href: '/showcase/brorlandi-miscale/', labelEn: 'Own-scale dashboard', labelZh: '自有体脂秤看板' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Own TV with REA: greco\u2019s remote and Mac-mirror demo',
      summary:
        '@greco_dev posted in Portuguese that they reverse engineered their own TV with REA and linked the repo. The demo covers app/input switching, volume, a remote, Mac screen mirror, screen time, and brightness/contrast controls.',
      lede:
        'greco (@greco_dev, data engineer) published an own-television reverse-engineering note, used REA, and linked github.com/morluto/rea. rea.run credits that post and does not add protocol steps the author did not publish.',
      body: [
        '## Short version',
        'The original post is in Portuguese. In it, greco says they reverse engineered their own TV and used REA. The features they list: switch app or input, volume, remote control, mirror a Mac screen, screen time, and general controls such as brightness and contrast. A short demo video is attached. rea.run hosts a copy of that clip and links the post.',
        '## Attribution (read this)',
        '**Credit:** greco, [@greco_dev](https://x.com/greco_dev/status/2109842197654692349). The post says they used REA (“usei o rea”) and links [github.com/morluto/rea](https://github.com/morluto/rea). It is still not a rea.run session log, and this page does not invent steps that are absent from the post.',
        '## What the author demonstrated',
        '1. **Own device.** Their television. The post does not name a brand or model.\n2. **Tool credit.** They wrote that they used REA and linked the upstream repository.\n3. **Features they listed.** Switch app/input; volume; remote control; mirror the Mac screen; screen time; general controls (brightness, contrast, and similar).\n4. **Demo.** The clip above is a self-hosted copy of the attached video: a personal control panel for that set. Full context and any later edits stay on the X post.',
        '## Public metrics (snapshot 2026-10-13)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Impressions | 10,112 | Fetched from the post |\n| Likes | 379 | Same snapshot |\n| Reposts | 25 | Same snapshot |\n| Bookmarks | 287 | Same snapshot |\n| Source | [@greco_dev](https://x.com/greco_dev/status/2109842197654692349) | Portuguese |',
        '## How this relates to installing REA',
        'REA is the local MCP/CLI that lets a coding agent inspect software you are allowed to analyze and return Evidence plus unknowns. This post is an own-device story that uses that tool. To mirror the lawful shape — not the unpublished internals — install REA, point it at a target you own, and ask for Evidence.',
        '**Install.** Paste into your agent, or run it yourself: `npx rea-agents@latest setup`. Then restart the client. Walkthrough: [/docs/install/](/docs/install/) · Codex demo: [/docs/install-demo/](/docs/install-demo/).',
        '**Nearby cases.** [@thinkszyg\u2019s toilet BLE remote](/showcase/thinkszyg-toilet-ble/) and [@BrOrlandi\u2019s scale dashboard](/showcase/brorlandi-miscale/) are other own-device stories on the same wall.',
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
        '**署名：** greco，[@greco_dev](https://x.com/greco_dev/status/2109842197654692349)。原帖写了使用 REA（原文 “usei o rea”），链接是 [github.com/morluto/rea](https://github.com/morluto/rea)。它仍然不是 rea.run 的会话记录，本页也不编造原帖里没有的步骤。',
        '## 作者演示了什么',
        '1. **自有设备。** 他自己的电视。帖子没有写品牌或型号。\n2. **工具署名。** 他写明使用了 REA，并给出上游仓库链接。\n3. **他列出的功能。** 切换应用／输入源；音量；遥控；镜像 Mac 屏幕；屏幕使用时间；通用控制（亮度、对比度等）。\n4. **演示。** 上方视频是原帖附件的站内副本：一块给他这台电视用的控制面板。完整语境和作者后来的修改，以 X 原帖为准。',
        '## 公开指标（快照 2026-10-13）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 展示 | 10,112 | 抓取该帖 |\n| 赞 | 379 | 同一快照 |\n| 转发 | 25 | 同一快照 |\n| 书签 | 287 | 同一快照 |\n| 来源 | [@greco_dev](https://x.com/greco_dev/status/2109842197654692349) | 葡萄牙语 |',
        '## 这和安装 REA 的关系',
        'REA 是本地 MCP／CLI：让编程智能体检查你有权分析的软件，并返回 Evidence 与未知项。这条帖子是自有设备故事，而且用了这个工具。若要照着合法形态做——而不是去补原帖没写的内部细节——先安装 REA，指向你拥有的目标，再要 Evidence。',
        '**安装。** 贴进智能体，或自己执行：`npx rea-agents@latest setup`。然后重启客户端。跟练：[/zh/docs/install/](/zh/docs/install/) · Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。',
        '**邻近案例。** [@thinkszyg 的马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/) 和 [@BrOrlandi 的体脂秤看板](/zh/showcase/brorlandi-miscale/) 都是同一面墙上的自有设备故事。',
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
      'Community case · @BrOrlandi (Bruno Orlandi) on X · paraphrased on rea.run (not affiliated).',
    attributionZh:
      '社区案例 · X 上 @BrOrlandi（Bruno Orlandi）· rea.run 改写收录（非官方合作）。',
    tags: ['x-case', 'bluetooth', 'own-device', 'agent-re', 'scale'],
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
      labelEn: 'Own-scale agent dashboard',
      labelZh: '自有体脂秤的智能体逆向',
      qualityEn: 'Public demo, open-source repo, and an explicit own-device reverse-engineering intent.',
      qualityZh: '有公开演示、开源仓库，以及明确的自有设备逆向意图。',
      evidenceEn: 'Public X post + self-hosted ~27s clip; MIT repo README. Author describes a coding-agent prompt.',
      evidenceZh: '公开 X 帖 + 站内托管约 27 秒片段；MIT 仓库 README。作者描述一条编程智能体提示。',
      limitsEn: 'Not a packet-decoder tutorial. Own scale only.',
      limitsZh: '不是报文解码教程。仅限自有秤。',
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
          'Author demo (~27s): one-prompt app for his own Mi Body Composition Scale 2. Self-hosted from @BrOrlandi’s X post. Longer promo: the YouTube link in the sources below.',
        captionZh:
          '作者演示（约 27 秒）：一条提示做出的自有小米体脂秤应用。站内托管，源自 @BrOrlandi 的 X 帖。更长宣传片见下方来源中的 YouTube 链接。',
      },
    },
    complianceEn:
      'Lawful RE only: a scale, watch, or app you own or are authorized to analyze. Do not capture a neighbor’s broadcasts, bypass Xiaomi accounts, or treat this card as a decoder recipe. The author is not affiliated with rea.run.',
    complianceZh:
      '仅合法逆向：只分析你拥有或获准的秤、手表或应用。勿抓邻居的广播、绕过小米账号，或把本卡当成解码配方。作者与 rea.run 无隶属关系。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/docs/install-demo/', labelEn: 'Codex install walkthrough', labelZh: 'Codex 安装跟练' },
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'BLE toilet remote', labelZh: '蓝牙马桶遥控' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'Own Xiaomi scale, one agent prompt: BrOrlandi’s local BLE dashboard',
      summary:
        '@BrOrlandi used a coding agent on his own Mi Body Composition Scale 2, then open-sourced miscale-dashboard. This card shows that own-device shape and how it relates to installing REA.',
      lede:
        'Bruno Orlandi (@BrOrlandi) posted a public agent reverse-engineering story: a local dashboard for the Xiaomi scale he already owns, built from one coding-agent prompt, then published as MIT source. rea.run credits him and the open-source dashboard.',
      body: [
        '## Short version',
        'He wanted the scale’s readings on his own server — training context from a watch, meal ideas — without staying inside the vendor app. The follow-up demo says one prompt produced an app he preferred to the official one. The repo is a self-hosted listener: while someone stands on **his** scale, a nearby computer hears Bluetooth advertisements and the browser shows weight and body composition. No Xiaomi account and no vendor cloud in that path.',
        '## Attribution (read this)',
        '**Credit:** Bruno Orlandi, [@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247). The demo post, the earlier “I want to reverse engineer it” note, and the GitHub repo are his.',
        '## What was demonstrated',
        '1. **Own device.** Mi Body Composition Scale 2 (model called out by the author as XMTZC05HM in the repo).\n2. **Agent session.** He describes one coding-agent prompt and a few minutes for the first demo.\n3. **What the software does.** A local dashboard matches a weigh-in to a profile, stores history, and can optionally ask a model he configures for a weekly summary of **his** numbers. The README credits body-composition formulas to public projects (openScale and related), not to a private exploit.\n4. **How he described the link.** In-thread he said the connection is Bluetooth Low Energy and that the scale’s broadcast is straightforward to receive. The README states the scale does not pair; it advertises while someone is standing on it.\n5. **Official artifacts.** Repo [BrOrlandi/miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard) (MIT, Python; 46 stars on 2026-10-13). Promo video: [YouTube](https://youtu.be/ajvoJN0Qh_4).',
        '## Public metrics (snapshot 2026-10-13)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Views | ~55.6k | Demo post |\n| Likes | 1,263 | Demo post |\n| Bookmarks | 494 | Demo post |\n| Reposts | 34 | Demo post |\n| Source | [@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247) | Demo post |\n| Repo | [miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard) | 46★ · MIT · Python |',
        '## How this relates to REA',
        'REA is the local MCP/CLI that lets a coding agent inspect software you are allowed to analyze and return Evidence plus unknowns. BrOrlandi’s posts are the **same lawful shape** — own device, agent, a rebuild you can read. If you want that Evidence loop on a target you own, install REA and keep the human in charge of approval.',
        '**Install.** Paste into your agent, or run it yourself: `npx rea-agents@latest setup`. Then restart the client. Walkthrough: [/docs/install/](/docs/install/) · Codex demo: [/docs/install-demo/](/docs/install-demo/).',
        '**Nearby case.** [@thinkszyg’s toilet BLE remote](/showcase/thinkszyg-toilet-ble/) is another own-device remote on the same wall.',
        '## What to copy (authorized hardware only)',
        '- [ ] The scale is yours, or you have written permission\n- [ ] You scope the listener to your unit (the repo’s own docs warn that another scale in range can appear)\n- [ ] You do not publish secrets, account tokens, or a neighbor’s measurements\n- [ ] If you add REA, you ask for Evidence and unknowns — not a vibe-only story\n- [ ] Medical claims stay out; bioimpedance is an estimate',
      ],
      takeaways: [
        'Credit @BrOrlandi: one-prompt agent app for his own Xiaomi scale, then an MIT repo.',
        'Local BLE dashboard for a scale he owns, published as an MIT repo.',
        'Same lawful shape as other own-device cases; install REA when you want Evidence on targets you may analyze.',
      ],
    },
    zh: {
      title: '自有小米体脂秤、一条智能体提示：BrOrlandi 的本地蓝牙看板',
      summary:
        '@BrOrlandi 用编程智能体处理自有 Mi Body Composition Scale 2，并开源 miscale-dashboard。本页说明这个自有设备形态和安装 REA 的关系。',
      lede:
        'Bruno Orlandi（@BrOrlandi）公开了一条智能体逆向：为已经拥有的小米体脂秤做本地看板，一条编程智能体提示起步，再以 MIT 协议放出源码。rea.run 署名作者与开源看板。',
      body: [
        '## 短摘要',
        '他想把秤的读数放到自己的服务器上——结合手表里的训练、再谈这周吃什么——而不必停在厂商 App 里。后续演示称一条提示就做出了他觉得比官方更好用的应用。仓库是自托管监听：有人站上**他的**秤时，旁边的电脑收到蓝牙广播，浏览器显示体重与体成分。这条路径不登录小米账号，也不走厂商云。',
        '## 归因（先读）',
        '**署名：** Bruno Orlandi，[@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247)。演示帖、更早的「我想逆向这台秤」说明，以及 GitHub 仓库都是他的。',
        '## 演示了什么',
        '1. **自有设备。** Mi Body Composition Scale 2（仓库中型号写为 XMTZC05HM）。\n2. **智能体会话。** 他描述第一条演示来自一条编程智能体提示、大约几分钟。\n3. **软件做什么。** 本地看板把一次称重对到档案、保存历史，并可选地把**他本人**的一周数字交给他配置的模型写短评。README 将体成分公式署名为公开项目（openScale 等），而不是私有破解。\n4. **他怎么描述连接。** 帖内回复写连接是蓝牙低功耗（Bluetooth Low Energy），秤的广播不难收到。README 写明秤不配对；有人站上去时才广播。\n5. **官方产物。** 仓库 [BrOrlandi/miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard)（MIT、Python；2026-10-13 快照 46 星）。宣传片：[YouTube](https://youtu.be/ajvoJN0Qh_4)。',
        '## 公开指标（快照 2026-10-13）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 浏览 | ~55.6k | 演示帖 |\n| 赞 | 1,263 | 演示帖 |\n| 书签 | 494 | 演示帖 |\n| 转发 | 34 | 演示帖 |\n| 来源 | [@BrOrlandi](https://x.com/BrOrlandi/status/2109533877744128247) | 演示帖 |\n| 仓库 | [miscale-dashboard](https://github.com/BrOrlandi/miscale-dashboard) | 46★ · MIT · Python |',
        '## 这和 REA / 安装的关系',
        'REA 是本地 MCP／CLI：让编程智能体检查你有权分析的软件，并返回 Evidence 与未知项。BrOrlandi 的帖子是**同一种合法形态**——自有设备、智能体、可读的重建。若你要在自有目标上走这条 Evidence 回路，先安装 REA，批准权留在人这边。',
        '**安装。** 贴进智能体，或自己执行：`npx rea-agents@latest setup`。然后重启客户端。跟练：[/zh/docs/install/](/zh/docs/install/) · Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。',
        '**邻近案例。** [@thinkszyg 的马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/) 是同一面墙上的另一条自有设备遥控。',
        '## 可以照做的边界（仅授权硬件）',
        '- [ ] 秤是你的，或有书面许可\n- [ ] 监听范围收在你自己的设备上（仓库文档提醒：范围内另一台秤也会出现）\n- [ ] 不公开密钥、账号令牌或邻居的测量\n- [ ] 若加上 REA，要 Evidence 与未知项，而不是只有 vibe\n- [ ] 不做医疗承诺；生物电阻是估计值',
      ],
      takeaways: [
        '署名 @BrOrlandi：一条提示为自有小米体脂秤做应用，随后放出 MIT 仓库。',
        '自有秤上的本地蓝牙看板，以 MIT 仓库发布。',
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
      evidenceEn: 'Public X thread + four self-hosted screenshots of a REA Skill session.',
      evidenceZh: '公开 X 帖 + 四张站内截图，记录一次 REA Skill 会话。',
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
        'A widely bookmarked X walkthrough: pull the Slides front-end artifacts, wire REA into Codex, and let a REA Skill chew through obfuscated editor code toward a working reconstruction.',
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
        'REA + Codex Skill path on obfuscated JS.',
        'Steps: fetch assets → setup REA → Skill reverse → verify rebuild.',
        'Authorization and redistribution limits still apply.',
      ],
    },
    zh: {
      title: '几乎完整的 Claude Slides 编辑器：Codex + REA Skill 逆向',
      summary:
        '@dotey 称用 REA 逆向出 Claude Slides 编辑器几乎完整功能——下载脚本样式、经 Codex 装 REA，再用 REA Skill 啃混淆代码。',
      lede:
        '一条高收藏 X 图文：拉下 Slides 前端制品，把 REA 接进 Codex，再让 REA Skill 处理混淆编辑器代码，逼近可工作的重建。',
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
        'REA + Codex Skill 的混淆 JS 路径。',
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
      'Community case · @icanberk on X · paraphrased on rea.run (not affiliated).',
    attributionZh:
      '社区案例 · X 上 @icanberk · rea.run 改写收录（非官方合作）。',
    tags: ['x-case', 'vibe-remote', 'status-bar', 'community', 'hvac'],
    relation: 'demo',
    rating: {
      score: 4,
      labelEn: 'Status-bar AC remote',
      labelZh: '状态栏空调遥控',
      qualityEn: 'Huge-reach status-bar AC demo with a self-hosted clip.',
      qualityZh: '高曝光状态栏空调演示，站内托管短片。',
      evidenceEn: 'Public X post + self-hosted short clip.',
      evidenceZh: '公开 X 帖 + 站内短片。',
      limitsEn: 'Not a protocol tutorial. Own or authorized HVAC only.',
      limitsZh: '不是协议教程。仅限自有或授权暖通。',
      audienceEn: 'Anyone studying status-bar remotes / own HVAC integrations.',
      audienceZh: '研究状态栏遥控／自有暖通集成的人。',
    },
    footnotes: [
      {
        label: '@icanberk · X status 2109031477484937571',
        url: 'https://x.com/icanberk/status/2109031477484937571',
      },
    ],
    media: {
      video: {
        src: '/media/x-cases/icanberk-ac.gif.mp4',
        poster: '/media/x-cases/icanberk-poster.jpg',
        captionEn:
          'Short community clip: AC status-bar remote vibe (self-hosted).',
        captionZh:
          '社区短片：空调状态栏遥控 vibe（站内托管）。',
      },
    },
    complianceEn:
      'Own or authorized HVAC / IoT only. This card is a status-bar remote demo, not a guide to attack third-party systems.',
    complianceZh:
      '仅限自有或授权的暖通／物联网。本卡是状态栏遥控演示，不是攻击第三方系统的指南。',
    related: [
      { href: '/showcase/thinkszyg-toilet-ble/', labelEn: 'BLE toilet remote', labelZh: '蓝牙马桶遥控' },
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    en: {
      title: 'AC status-bar remote: high-reach vibe demo',
      summary:
        '@icanberk’s AC status-bar clip hit ~1M views. rea.run hosts it as a community own-device remote demo.',
      lede:
        'A popular status-bar air-conditioner control demo, hosted here beside other own-device remotes on the showcase wall.',
      body: [
        '## Credit',
        'Credit [@icanberk](https://x.com/icanberk/status/2109031477484937571). rea.run hosts a copy of the clip as a community own-device status-bar remote.',
        '## Public metrics (snapshot)',
        '| Metric | Figure | Note |\n|---|---|---|\n| Views | ~1.07M | Author post at capture |\n| Likes | ~18.8k | Snapshot 2026-10-12 |\n| Bookmarks | ~5.9k | Snapshot 2026-10-12 |\n| Source | [@icanberk](https://x.com/icanberk/status/2109031477484937571) | Self-hosted clip |',
        '## What the clip shows',
        '1. Status-bar / menu-bar remotes are a sticky UX for home devices.\n2. Short silent clips travel far as social proof.\n3. On your own AC bridge or app, follow the same legal boundary as the toilet BLE case: own device, Evidence first, no third-party attacks.',
        '## Nearby case',
        'See [@thinkszyg’s toilet BLE remote](/showcase/thinkszyg-toilet-ble/) for another own-device status-bar remote.',
        '## Compliance reminder',
        'Control only equipment you own or are authorized to automate. Do not scrape or attack vendor clouds without permission.',
      ],
      takeaways: [
        'Short clips travel as social proof for own-device remotes.',
        'Useful next to other status-bar remote cases on the wall.',
        'Own-device remotes still need authorization discipline.',
      ],
    },
    zh: {
      title: '空调状态栏遥控：高曝光 vibe 演示',
      summary:
        '@icanberk 的空调状态栏短片约 100 万浏览。rea.run 将其作为自有设备遥控的社区演示收录。',
      lede:
        '热门状态栏空调控制演示，与案例墙上其他自有设备遥控放在一起。',
      body: [
        '## 署名',
        '署名 [@icanberk](https://x.com/icanberk/status/2109031477484937571)。rea.run 托管该短片，作为社区里的自有设备状态栏遥控。',
        '## 公开指标（快照）',
        '| 指标 | 数字 | 说明 |\n|---|---|---|\n| 浏览 | ~1.07M | 抓取时作者帖 |\n| 赞 | ~18.8k | 快照 2026-10-12 |\n| 书签 | ~5.9k | 快照 2026-10-12 |\n| 来源 | [@icanberk](https://x.com/icanberk/status/2109031477484937571) | 站内短片 |',
        '## 短片在展示什么',
        '1. 状态栏／菜单栏遥控对家居设备很粘人。\n2. 无声短片作为社会证明传播力强。\n3. 对自有空调网桥或 App，边界与马桶蓝牙案例相同：自有设备、先 Evidence、不攻第三方。',
        '## 邻近案例',
        '见 [@thinkszyg 马桶蓝牙遥控](/zh/showcase/thinkszyg-toilet-ble/)，另一条自有设备状态栏遥控。',
        '## 合规提醒',
        '只控制你拥有或获准自动化的设备。未经许可勿抓取或攻击厂商云。',
      ],
      takeaways: [
        '短片可以作为自有设备遥控的社会证明。',
        '与案例墙上其他状态栏遥控放在一起看。',
        '自有设备遥控仍要授权纪律。',
      ],
    },
  },
  {
    id: 'contra-notion-rea-lab',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Independent rea.run case study · authorized REA Evidence workflow.',
    attributionZh: '独立 rea.run 案例研究 · 授权范围内的 REA Evidence 工作流。',
    tags: ['evidence', 'game', 'editor', 'web', 'authorized'],
    relation: 'case-study',
    rating: {
      score: 4,
      labelEn: 'Two Evidence labs, gaps left open',
      labelZh: '两场 Evidence 实验，缺口留着',
      qualityEn:
        'Two timed labs with a scope table, findings boards, a playable web demo, and an explicit taste gap.',
      qualityZh: '两场计时实验：范围表、发现看板、可玩网页演示，以及写明的品味缺口。',
      evidenceEn:
        'Boards separate confirmed rules from unknowns. The 30-life sequence is from the local Evidence ledger, not a web guide.',
      evidenceZh: '看板把已确认规则和未知项分开。30 条命序列来自本地 Evidence 账本，不是网上攻略。',
      limitsEn:
        'Not a ROM pack and not a Notion clone recipe. The 80% and 70% figures are session estimates. UI polish stays human work.',
      limitsZh:
        '不是 ROM 包，也不是 Notion 克隆配方。80% 和 70% 是会话自评。UI 质感仍要人来打磨。',
      audienceEn:
        'Builders who want an Evidence workflow on a ROM they may study, or on their own editor after authorized analysis.',
      audienceZh: '想在获准研究的 ROM 上做 Evidence，或在授权分析之后升级自有编辑器的人。',
    },
    footnotes: [{ label: 'REA repository (morluto/rea)', url: 'https://github.com/morluto/rea' }],
    complianceEn:
      'Lawful RE only: software you own, open-source the license allows, or a system you have written permission to study. The Contra lab is a teaching Evidence demo on a ROM the operator is allowed to study. This page does not distribute that ROM, does not teach piracy, and does not bypass DRM. The editor lab upgrades the operator’s own Mac text editor after authorized analysis of a desktop app they are allowed to inspect. Learn mechanism ideas, then rewrite clean code in your own tree. Do not copy proprietary source or assets, and do not treat this page as a recipe for cloning a commercial product or breaking its terms.',
    complianceZh:
      '仅合法逆向：只分析你拥有的软件、许可允许的开源，或已有书面许可的系统。《魂斗罗》实验是在操作者获准研究的 ROM 上做的 Evidence 教学。本页不分发该 ROM，不教盗版，也不绕过 DRM。编辑器实验是在获准检查的桌面应用上做授权分析之后，升级操作者自己的 Mac 文本编辑器。先学机制思路，再在自己的代码树里重写干净实现。不要复制专有源码或素材，也不要把本页当成克隆商业产品或违反其条款的配方。',
    related: [
      { href: '/docs/install/', labelEn: 'Install REA', labelZh: '安装 REA' },
      { href: '/docs/install-demo/', labelEn: 'Codex install walkthrough', labelZh: 'Codex 安装跟练' },
      {
        href: '/showcase/windows-calculator-percent/',
        labelEn: 'Calculator percent quirk',
        labelZh: '计算器百分号',
      },
      { href: '/showcase/th04/', labelEn: 'TH04 256-angle bullet ring', labelZh: 'TH04 的 256 角度弹幕环' },
      { href: '/showcase/notion-clipboard/', labelEn: 'Notion clipboard bridge', labelZh: 'Notion 剪贴板桥' },
      { href: '/showcase/dx-ball/', labelEn: 'DX-Ball sound-pan case', labelZh: 'DX-Ball 声像案例' },
      { href: '/faq/legal-boundary/', labelEn: 'Legal boundary', labelZh: '合法边界' },
    ],
    media: {
      video: {
        src: '/media/x-cases/contra-notion-demo.mp4',
        poster: '/media/x-cases/contra-notion-demo-poster.jpg',
        captionEn: 'Playable first-stage Contra remake in the browser (~20s). Self-hosted on rea.run.',
        captionZh: '浏览器里可玩的《魂斗罗》第一关前段复刻（约 20 秒）。站内托管。',
      },
      images: [
        {
          src: '/media/x-cases/contra-notion-cover.jpg',
          altEn:
            'Diagram: forward development follows a written recipe; reverse engineering infers the recipe from the finished dish.',
          altZh: '示意图：正向开发照着写好的菜谱做；逆向工程从已经端上的菜反推配方。',
        },
        {
          src: '/media/x-cases/contra-notion-img01.jpg',
          altEn:
            'Session header: a browser Contra remake beside an editor slash menu, with the two lab claims side by side.',
          altZh: '会话题图：浏览器里的魂斗罗复刻与编辑器斜杠菜单并排，旁边是两场实验的主张。',
        },
        {
          src: '/media/x-cases/contra-notion-img02.jpg',
          altEn:
            'Opening card that frames REA as a local tool a coding agent can call. Promotional tone; the lab table is what this page stands behind.',
          altZh: '开场卡片：把 REA 说成本地工具，编程智能体可以调用。语气偏宣传；本页认的是实验表里的数字。',
        },
        {
          src: '/media/x-cases/contra-notion-img03.jpg',
          altEn:
            'Card on the old threshold: specialist tools, nameless symbols, and a chat window that cannot hold a whole desktop package.',
          altZh: '卡片：旧门槛是专业工具、没有名字的符号，以及装不下一整个桌面包的对话窗口。',
        },
        {
          src: '/media/x-cases/contra-notion-img04.jpg',
          altEn: 'Three-step loop for this session: ask in plain language, pull Evidence through REA, then explain or rewrite.',
          altZh: '这场会话的三步：用大白话提问，经 REA 取 Evidence，再讲清楚或重写。',
        },
        {
          src: '/media/x-cases/contra-notion-img05.jpg',
          altEn: 'Warm-up card: Windows Calculator percent branches, and TH04 storing a full circle as 256 angle units.',
          altZh: '热身卡片：Windows 计算器的百分号分支，以及 TH04 把一整圈定为 256 个角度单位。',
        },
        {
          src: '/media/x-cases/contra-notion-img06.jpg',
          altEn:
            'Lab A prompt: REA on the local Contra ROM, no original-ROM playback, first third of stage 1 as a standalone web page.',
          altZh: '实验 A 提示：用 REA 处理本地魂斗罗 ROM，不跑原版 ROM，只做第一关前三分之一的独立网页。',
        },
        {
          src: '/media/x-cases/contra-notion-img07.jpg',
          altEn: 'Findings board, part 1: run and jump, weapons, and level rules marked confirmed or still open.',
          altZh: '发现看板（上）：跑跳、武器和关卡规则，已确认与仍开放的项分开写。',
        },
        {
          src: '/media/x-cases/contra-notion-img08.jpg',
          altEn: 'Findings board, part 2: level data, bullet limits, and unknowns that were not written up as facts.',
          altZh: '发现看板（下）：关卡数据、子弹上限，以及没有被写成既成事实的未知项。',
        },
        {
          src: '/media/x-cases/contra-notion-img09.jpg',
          altEn: 'Stage 1 opening map from the session: terrain, platforms, and the bridge section used by the web remake.',
          altZh: '会话里的第一关前段地图：地形、高台，以及网页复刻用到的断桥段。',
        },
        {
          src: '/media/x-cases/contra-notion-img10.jpg',
          altEn: 'Playtest notes: about 80% core feel; death animation and the weapon-capsule pickup still incomplete.',
          altZh: '试玩记录：核心手感大约 80%；死亡动作和武器胶囊拾取仍不完整。',
        },
        {
          src: '/media/x-cases/contra-notion-img11.jpg',
          altEn:
            'Title-screen sequence from the Evidence ledger: up up down down left right left right B A, then Start; spare lives change from 2 to 29.',
          altZh: 'Evidence 账本里的标题画面序列：上上下下左右左右 B A，再按 Start；备用生命从 2 改为 29。',
        },
        {
          src: '/media/x-cases/contra-notion-img13.jpg',
          altEn:
            'Dual-track clipboard already on rea.run: full block tree in memory, clean HTML on the system clipboard, hidden id comment.',
          altZh: 'rea.run 已写过的双轨剪贴板：内存里留完整块树，系统剪贴板只放干净 HTML，并藏一行 id 注释。',
        },
        {
          src: '/media/x-cases/contra-notion-img14.jpg',
          altEn:
            'One-page brief: an authorized desktop-app study compared with the operator’s own Mac editor, naming four upgrade levers.',
          altZh: '一页纸简报：获准研究的桌面应用对照操作者自己的 Mac 编辑器，写出四个升级抓手。',
        },
        {
          src: '/media/x-cases/contra-notion-img15.jpg',
          altEn:
            'Upgrade prompt: unified edit transactions, selection, shortcut formatting, and undo, keeping documents, Markdown export, and offline writing.',
          altZh: '升级提示：统一编辑事务、选区、快捷格式和撤销，并保留稿件、Markdown 导出和离线写作。',
        },
        {
          src: '/media/x-cases/contra-notion-img16.jpg',
          altEn:
            'Slash-menu comparison: the generated menu inserts blocks, but spacing, grouping, and chrome still lag product taste.',
          altZh: '斜杠菜单对比：生成的菜单能插入区块，但留白、分组和边框仍落后于产品品味。',
        },
        {
          src: '/media/x-cases/contra-notion-img17.jpg',
          altEn:
            'Motive card from the session. This page keeps only the lawful subset: own product, allowed study, clean rewrite.',
          altZh: '会话里的动机卡片。本页只保留合法子集：自有产品、获准的研究、干净重写。',
        },
        {
          src: '/media/x-cases/contra-notion-img18.jpg',
          altEn:
            'Session close: reconstructing logic is no longer the scarce part; product taste, definition, and a real data ecosystem stay human work.',
          altZh: '会话收束：把逻辑重建出来已经不是稀缺部分；产品品味、定义和真实数据生态仍是人的工作。',
        },
        {
          src: '/media/x-cases/contra-notion-img19.jpg',
          altEn:
            'Closing card: install from the REA repository, keep a question list, and separate confirmed findings from unknowns.',
          altZh: '收尾卡片：从 REA 仓库安装，留下问题清单，并把已确认项和未知项分开。',
        },
      ],
    },
    en: {
      title: 'Two REA labs: a Contra web remake, then an upgrade to your own editor',
      summary:
        'One authorized REA session rebuilt the first third of Contra stage 1 as a standalone web page in about 20 minutes (about 80% core feel), then spent about 3 hours upgrading the operator’s own Mac editor after an authorized desktop-app study (about 70% of the core).',
      lede:
        'REA (Reverse Engineer Anything) is the local MCP/CLI that lets a coding agent inspect a target you are allowed to analyze and return Evidence plus unknowns. This page records two labs from one session: a teaching remake of a ROM the operator may study, and an upgrade to an editor the operator already owns. The clip above is the playable Contra page. The grids below are the session boards. rea.run did not re-execute the ROM for this write-up.',
      body: [
        '## Short version',
        'Two labs, same rule: ask, take Evidence, rewrite clean code, and leave unknowns written down.',
        '1. **Lab A — Contra.** A local `Contra (USA).nes` (about 128KB). The agent tracked about 24,000 frames, then rewrote the first third of stage 1 as standalone JavaScript. No emulator. About 20 minutes. Session estimate of core feel: about 80%.\n2. **Lab B — own editor.** About 3 hours comparing an authorized Notion desktop study with the operator’s own Mac text editor. Session estimate of the core upgrade: about 70% (unified edit transactions, stable block ids, incremental local save, block-level merge). The generated slash menu still lags product taste.',
        '| Lab | Target | Time | Scope | Session estimate |\n|---|---|---|---|---|\n| A. Web remake | Local Contra (USA).nes, ~128KB | ~20+ minutes | Stage 1, first ~1/3 (~4 of 12 screens) | ~80% core feel |\n| B. Own editor | Operator’s Mac text editor, after an authorized desktop study | ~3 hours | Transactions, block ids, incremental save, block merge | ~70% of the core |\n| Tracking | Same ROM, REA-only pass | During lab A | ~24,000 frames | Unknowns kept on the board |',
        '![Session header: a browser Contra remake beside an editor slash menu, with the two lab claims side by side.](/media/x-cases/contra-notion-img01.jpg)',
        'The opening card is promotional. This page does not adopt its tone as a site metric. The numbers above are the session record: time, scope, frame count, and the operator’s own completion estimates.',
        '![Opening card that frames REA as a local tool a coding agent can call. Promotional tone; the lab table is what this page stands behind.](/media/x-cases/contra-notion-img02.jpg)',
        '## What REA is in this session',
        'REA is not a vibe decompiler. It is a local Evidence ledger for a coding agent. The useful loop is short: **ask in plain language → pull Evidence through REA → explain the rule or rewrite it in your tree.** If a slice is not nailed down, the board says so.',
        '![Diagram: forward development follows a written recipe; reverse engineering infers the recipe from the finished dish.](/media/x-cases/contra-notion-cover.jpg)',
        'Forward work starts from a recipe you are allowed to read: source, tests, a spec. Reverse work starts from a finished build you are allowed to study. The old threshold was real. Specialist interfaces (Ghidra and similar) show nameless symbols and machine code, and a desktop package can unpack to more text than a chat window can hold. Stuffing the whole unpack into the prompt either blows the context or invites a guess.',
        '![Card on the old threshold: specialist tools, nameless symbols, and a chat window that cannot hold a whole desktop package.](/media/x-cases/contra-notion-img03.jpg)',
        '1. **Local ledger.** The unpack stays on disk. The agent does not have to live in the disassembler UI.\n2. **Short catalog, then a slice.** A question such as “how does jump gravity work?” or “how does clipboard HTML keep block structure?” pulls the cited lines, not the whole package.\n3. **Evidence or unknown.** Every conclusion needs a source in the program. Unconfirmed spots stay unconfirmed.',
        '![Three-step loop for this session: ask in plain language, pull Evidence through REA, then explain or rewrite.](/media/x-cases/contra-notion-img04.jpg)',
        '## Warm-ups already on rea.run',
        'Before the two labs, the same shape shows up in two published cards. Read those pages for the longer Evidence; this section only points at them.',
        '1. **Windows Calculator percent.** `200 × 10%` is 20, while `200 + 10%` is 220, not 200.1. After an add or subtract, the percent key takes a percent of the first operand (tip or tax style), then applies it. Card: [Windows Calculator %](/showcase/windows-calculator-percent/). Microsoft publishes the Calculator sources, so that card can be checked against the open tree.\n2. **TH04 bullet ring.** A 1998 DOS game stores one full turn as 256 angle units, not 360 degrees. Sixteen bullets step by `256 / 16 = 16`. One byte holds 0–255 and wraps. Card: [How TH04 aims a ring of bullets](/showcase/th04/). That page is a historical reconstruction with compiler checks. It is not a modern DRM-strip guide.',
        '| Warm-up | Question | What the on-site card keeps |\n|---|---|---|\n| Calculator % | Why does `200 + 10%` equal 220? | Operator-dependent branch; arbitrate with the public sources |\n| TH04 ring | Why 256 units in a circle? | Index × 256 / count, then an aim offset; 16 bullets → step 16 |',
        '![Warm-up card: Windows Calculator percent branches, and TH04 storing a full circle as 256 angle units.](/media/x-cases/contra-notion-img05.jpg)',
        '## Lab A: Contra stage 1, first third',
        'The file in the session was a US NES Contra ROM, about 128KB, that the operator is allowed to study. The ask was a teaching remake: do not boot the original ROM in an emulator, cover only the first third of stage 1, and emit a standalone web page. This site does not host the ROM.',
        'The agent first reached for an existing Contra disassembly on GitHub. The session closed that shortcut and required a REA-only pass on the local file. That constraint is the point of the lab. A third-party dump is not Evidence for this ROM until you have checked it yourself, and it is the wrong artifact when the exercise is “read this file.”',
        '```text\nUse REA to open a project on this local Contra ROM. Do not run the original ROM. Cover only the first third of stage 1, as a standalone playable web page.\n```',
        '![Lab A prompt: REA on the local Contra ROM, no original-ROM playback, first third of stage 1 as a standalone web page.](/media/x-cases/contra-notion-img06.jpg)',
        '1. **Force the local file.** Refuse the pre-made disassembly. Point REA at the ROM on disk.\n2. **Track, then separate.** About 24,000 frames went through the local pass. Confirmed rules and still-open data were written on different parts of the board.\n3. **Rewrite.** Pure JavaScript. No emulator runtime. Run, eight-way aim, jump, shoot, prone, the opening enemies, and the bridge burst through the first third of the stage.\n4. **Play it.** The clip at the top of this page is that page, about 20 seconds, self-hosted here.',
        '![Findings board, part 1: run and jump, weapons, and level rules marked confirmed or still open.](/media/x-cases/contra-notion-img07.jpg)',
        '![Findings board, part 2: level data, bullet limits, and unknowns that were not written up as facts.](/media/x-cases/contra-notion-img08.jpg)',
        'What the board treated as confirmed for the opening of stage 1:',
        '1. **Run, jump, gravity.** Jump height, hang time, per-frame fall, what counts as landing, and the prone hitbox.\n2. **Weapons.** The default gun, the held-fire machine gun (M), and the five-way spread (S): how a shot is spawned, how many bullets may live at once, and how a hit is decided.\n3. **Stage slice.** Terrain, platforms, and the bridge section for that first third, drawn as a map the rewrite could read.',
        '![Stage 1 opening map from the session: terrain, platforms, and the bridge section used by the web remake.](/media/x-cases/contra-notion-img09.jpg)',
        'From analysis to a playable page was about 20 minutes. The session estimate after hands-on play: about 80% of the core feel (run, aim, jump, shoot, prone, the opening fight, the bridge). The other 20% was named, not waved through. Death animation is thin. The flying weapon capsule — shoot it down, collect the pickup, switch ammo — is incomplete, so weapon changes sit on a side menu. Twenty minutes is enough to stand up the spine. It is not a finished port.',
        '![Playtest notes: about 80% core feel; death animation and the weapon-capsule pickup still incomplete.](/media/x-cases/contra-notion-img10.jpg)',
        '## The 30-life sequence, from Evidence',
        'After the playtest, the session asked whether the ROM contained a cheat, and required the answer to come from the REA record rather than a web guide. The ledger had the full title-screen sequence and the branch that consumes it.',
        '| Step | What the Evidence ledger recorded |\n|---|---|\n| Where | Title screen, before Start |\n| Sequence | ↑ ↑ ↓ ↓ ← → ← → B A, then Start |\n| Write | Spare lives change from the default 2 to 29 |\n| On screen | 29 spare + the active player = 30 |\n| Not used | A web guide or a third-party FAQ |',
        'Konami-style input, read out of the program. That is the standard this page wants: a table in the binary, a branch, a number before and after. A remembered childhood code without that table would have stayed an unknown.',
        '![Title-screen sequence from the Evidence ledger: up up down down left right left right B A, then Start; spare lives change from 2 to 29.](/media/x-cases/contra-notion-img11.jpg)',
        '## Lab B: upgrade your own editor',
        'Lab A asks whether a classic game file can become a small, clean web page. Lab B is the product shape: study a mechanism you are allowed to inspect, then spend the implementation budget on **your** editor. About three hours went to an authorized look at Notion desktop, set next to the operator’s own Mac text editor. The goal was not a second Notion. Terms that forbid unauthorized decompilation still apply; this lab stays inside an inspection the operator is allowed to do, and the code that landed is new code in the operator’s tree.',
        'The narrow clipboard story is already a card on this site: [How Notion copies text and HTML](/showcase/notion-clipboard/). Copy keeps a full block tree in the app’s own memory, writes ordinary text and HTML to the system clipboard, and hides an id comment (`<!-- notionvc: id -->`) so an internal paste can restore structure while a paste into another app stays clean. Lab B used that idea as one input, then asked for a wider upgrade of the editor the operator ships.',
        '![Dual-track clipboard already on rea.run: full block tree in memory, clean HTML on the system clipboard, hidden id comment.](/media/x-cases/contra-notion-img13.jpg)',
        'The comparison came back as a one-page brief: Notion text system as a reference, the current editor as the tree that must change. Four levers, each tied to a defect already in that tree:',
        '| Lever | What the current editor was doing | Direction after the authorized study |\n|---|---|---|\n| Unified edit transaction | Bold, shortcuts, paste, and AI edits each mutated state their own way, so undo drifted | One undoable transaction, shared selection, shared undo stack |\n| Stable block ids | Async AI edits could move the cursor | A stable `blockId` on text, images, and in-flight AI edits |\n| Incremental local save | The UI sent deltas, but disk still rewrote the whole workspace | Append deltas to a local store and a pending queue |\n| Block-level merge | Whole-document overwrite | Merge per block; keep offline writing with no account, and Markdown export |',
        '![One-page brief: an authorized desktop-app study compared with the operator’s own Mac editor, naming four upgrade levers.](/media/x-cases/contra-notion-img14.jpg)',
        'The implementation prompt stayed narrow. It names the editor that already exists. It does not say “reproduce the other product.”',
        '```text\nApply that plan to the Mac text-editing stack in this project. Prioritize a unified edit transaction, selection, shortcut formatting, and undo. Keep existing documents, Markdown export, and offline writing without an account.\n```',
        '![Upgrade prompt: unified edit transactions, selection, shortcut formatting, and undo, keeping documents, Markdown export, and offline writing.](/media/x-cases/contra-notion-img15.jpg)',
        'With follow-up wiring, the upgrade sat at about three hours. The session estimate: about 70% of the core path actually runs — connector editing, split and merge of blocks, bold across paragraphs, the shortcut menu, and one undo stack. The working habit from the session is worth keeping: do not open with “copy this entire application.” Point at one mechanism (block editing, or the clipboard), read it, then change your own project. That is the pass with the highest chance of staying lawful and of landing.',
        '## The slash menu, and the taste gap',
        'The same session then opened the slash menu the model had written and put it next to the product menu. Inserts work: paragraph, headings, quote, code. The chrome does not. Heavy frame, flat hierarchy, and a blue capsule with a white “A” that reads as an old web button. The comparison menu has a rounded popover, room to breathe, quiet gray groups, small icons, and shortcut hints that line up.',
        'That gap is the model’s default UI polish. It is not a hole in the Evidence pass. REA can make the mechanism legible in a few hours and can carry a core path to a session estimate around 70%. Spacing, restraint, and the last interaction details still need a human eye. When the spine is cheap to reconstruct, taste and the data around the product are the part that stays scarce.',
        '![Slash-menu comparison: the generated menu inserts blocks, but spacing, grouping, and chrome still lag product taste.](/media/x-cases/contra-notion-img16.jpg)',
        '## What to copy',
        'One card in the session lists commercial motives: inspect small tools, absorb architecture ideas, migrate an old codebase. Treat the card as a motive list, then apply the boundary under it. The lawful subset is narrower.',
        '1. **Your product, or a study you are allowed to do.** A performance pass on your own app, an open-source project whose license allows it, or a system under written permission. Unauthorized decompilation of commercial software is out of scope even when the mechanism is interesting.\n2. **Ideas, then a clean rewrite.** “A hidden id ties clipboard HTML to an in-memory tree.” “Jump hang time is a per-frame rule.” Close the report and write new code. Do not paste proprietary source, and do not ship someone else’s assets.\n3. **A legacy tree you own or are contracted to migrate.** Evidence can become a behavior note for that tree. It is not a license to republish a third party’s install.\n4. **One feature at a time.** A single question with a ledger beats a request to clone a flagship app over a weekend.',
        '![Motive card from the session. This page keeps only the lawful subset: own product, allowed study, clean rewrite.](/media/x-cases/contra-notion-img17.jpg)',
        '![Session close: reconstructing logic is no longer the scarce part; product taste, definition, and a real data ecosystem stay human work.](/media/x-cases/contra-notion-img18.jpg)',
        '- [ ] The ROM, app, or firmware is yours, the license allows the study, or you have written permission\n- [ ] You do not redistribute the ROM or proprietary assets\n- [ ] You do not accept a third-party disassembly as a substitute for a REA pass on the local file\n- [ ] You ask for Evidence and an explicit unknown list\n- [ ] You rewrite clean code in your tree\n- [ ] You read the terms before opening a commercial desktop app\n- [ ] A core-percent estimate is not a shipped design; UI taste stays a human review\n- [ ] You do not publish a clone recipe, an account bypass, or a DRM bypass',
        '## Install',
        'Setup on this site is one command, then a client restart: `npx rea-agents@latest setup`. Walkthrough: [/docs/install/](/docs/install/). Codex demo: [/docs/install-demo/](/docs/install-demo/). The agent can also be pointed at [github.com/morluto/rea](https://github.com/morluto/rea) and asked to install from that repository. After setup, give an absolute path to a target you may analyze, and ask for Evidence plus unknowns.',
        'Nearby pages, same wall: [Calculator percent](/showcase/windows-calculator-percent/), [TH04’s 256-angle ring](/showcase/th04/), [Notion clipboard](/showcase/notion-clipboard/), [DX-Ball](/showcase/dx-ball/), and the [legal boundary](/faq/legal-boundary/).',
        '![Closing card: install from the REA repository, keep a question list, and separate confirmed findings from unknowns.](/media/x-cases/contra-notion-img19.jpg)',
      ],
      takeaways: [
        'Lab A: local Contra ROM, REA-only, first third of stage 1 as a web page in about 20 minutes, about 80% core feel, with death animation and the weapon capsule left open.',
        'The 30-life sequence (spare lives 2 → 29, plus the active player) came from the Evidence ledger, not from a web guide.',
        'Lab B: about 3 hours and about 70% of the core on the operator’s own editor. The slash menu still lags product taste. This page is not a ROM pack or a clone recipe.',
      ],
    },
    zh: {
      title: '两场 REA 实验：魂斗罗网页复刻，然后升级你自己的编辑器',
      summary:
        '一场授权范围内的 REA 会话，用大约 20 分钟把《魂斗罗》第一关前三分之一重写成独立网页（核心手感大约 80%），再用大约 3 小时，在获准检查桌面应用之后，升级操作者自己的 Mac 编辑器（核心大约 70%）。',
      lede:
        'REA（Reverse Engineer Anything，逆向一切）是本地 MCP／CLI：编程智能体检查你有权分析的目标，并返回 Evidence 与未知项。本页记录同一场会话里的两个实验：在操作者获准研究的 ROM 上做教学复刻，以及升级操作者已经拥有的编辑器。上方视频就是那个可玩的魂斗罗网页。下面的图是会话看板。rea.run 没有为这篇撰写重跑该 ROM。',
      body: [
        '## 短版本',
        '两个实验，同一条规则：提问，取 Evidence，在自己的树里重写干净代码，并把未知项写下来。',
        '1. **实验 A —《魂斗罗》。** 本地的 `Contra (USA).nes`（约 128KB）。智能体追踪了大约 24,000 帧，然后把第一关前三分之一重写成独立 JavaScript。没有模拟器。大约 20 分钟。会话对核心手感的估计：大约 80%。\n2. **实验 B — 自有编辑器。** 大约 3 小时，把一次获准的 Notion 桌面端研究，对照到操作者自己的 Mac 文本编辑器。会话对核心升级的估计：大约 70%（统一编辑事务、稳定块 id、本地增量保存、块级合并）。模型生成的斜杠菜单仍然落后于产品品味。',
        '| 实验 | 目标 | 时间 | 范围 | 会话估计 |\n|---|---|---|---|---|\n| A. 网页复刻 | 本地 Contra (USA).nes，约 128KB | 约 20 分钟以上 | 第一关前约 1/3（约 12 屏中的前 4 屏） | 核心手感约 80% |\n| B. 自有编辑器 | 操作者的 Mac 文本编辑器，在获准的桌面研究之后 | 约 3 小时 | 事务、块 id、增量保存、块合并 | 核心约 70% |\n| 追踪 | 同一 ROM，只走 REA | 实验 A 期间 | 约 24,000 帧 | 未知项留在看板上 |',
        '![会话题图：浏览器里的魂斗罗复刻与编辑器斜杠菜单并排，旁边是两场实验的主张。](/media/x-cases/contra-notion-img01.jpg)',
        '开场卡片偏宣传。本页不把那种语气当成站点指标。上面的数字是会话记录：时间、范围、帧数，以及操作者自己的完成度估计。',
        '![开场卡片：把 REA 说成本地工具，编程智能体可以调用。语气偏宣传；本页认的是实验表里的数字。](/media/x-cases/contra-notion-img02.jpg)',
        '## 这场会话里的 REA',
        'REA 不是靠感觉反编译。它是编程智能体用的本地 Evidence 账本。有用的回路很短：**用大白话提问 → 经 REA 取 Evidence → 把规则讲清楚，或在你的代码树里重写。** 某一段还没钉死，看板就照实写尚未证实。',
        '![示意图：正向开发照着写好的菜谱做；逆向工程从已经端上的菜反推配方。](/media/x-cases/contra-notion-cover.jpg)',
        '正向开发从你有权阅读的配方开始：源码、测试、规格。逆向从你有权研究的成品构建开始。旧门槛是真的。专业界面（Ghidra 一类）给的是没有名字的符号和机器码，而一个桌面包拆开之后，文本量可以大到对话窗口装不下。把整包塞进提示词，要么撑爆上下文，要么邀请模型去猜。',
        '![卡片：旧门槛是专业工具、没有名字的符号，以及装不下一整个桌面包的对话窗口。](/media/x-cases/contra-notion-img03.jpg)',
        '1. **本地账本。** 拆包留在磁盘上。智能体不必泡在反汇编界面里。\n2. **先给短目录，再抽一片。** “跳跃重力怎么算？”或“剪贴板里的 HTML 怎样保住块结构？”只抽有出处的那几行，而不是整包。\n3. **要么 Evidence，要么未知。** 每条结论都要能指回程序里的位置。没确认的地方保持未确认。',
        '![这场会话的三步：用大白话提问，经 REA 取 Evidence，再讲清楚或重写。](/media/x-cases/contra-notion-img04.jpg)',
        '## 站内已有的热身案例',
        '进入这两个实验之前，同一种形状已经在两张已发布的卡片上。细节以那两页为准；这里只作索引。',
        '1. **Windows 计算器的百分号。** `200 × 10%` 等于 20，而 `200 + 10%` 等于 220，不是 200.1。加减号之后，百分号键取的是第一个操作数的百分比（小费或含税那种算法），再加回去。卡片：[Windows 计算器 %](/zh/showcase/windows-calculator-percent/)。Microsoft 公开了 Calculator 源码，那张卡片可以对着开源树核对。\n2. **TH04 的弹幕环。** 1998 年的 DOS 游戏把一整圈存成 256 个角度单位，而不是 360 度。16 颗子弹的步长是 `256 / 16 = 16`。一个字节能装下 0–255，转过一圈自然回绕。卡片：[TH04 怎样瞄准一圈子弹](/zh/showcase/th04/)。那一页是带编译器核对的历史重建，不是现代去 DRM 指南。',
        '| 热身 | 问题 | 站内卡片留下了什么 |\n|---|---|---|\n| 计算器 % | 为什么 `200 + 10%` 等于 220？ | 依赖运算符的分支；用公开源码裁决 |\n| TH04 弹幕环 | 为什么一圈是 256 个单位？ | 下标 × 256 / 数量，再加上瞄准偏移；16 颗子弹 → 步长 16 |',
        '![热身卡片：Windows 计算器的百分号分支，以及 TH04 把一整圈定为 256 个角度单位。](/media/x-cases/contra-notion-img05.jpg)',
        '## 实验 A：《魂斗罗》第一关前三分之一',
        '会话里的文件是美版红白机《魂斗罗》ROM，约 128KB，操作者获准研究。要求是教学复刻：不要在模拟器里启动原版 ROM，只覆盖第一关前三分之一，并交出一个独立网页。本站不托管该 ROM。',
        '智能体一开始想去拉 GitHub 上已有的《魂斗罗》反汇编。会话堵上了这条近路，要求只对本地文件做 REA。这就是实验的重点。别人整理的转储，在你自己核对之前，不是这份 ROM 的 Evidence；练习本身是“读这个文件”时，它也是错误的材料。',
        '```text\n用 REA 为这份本地《魂斗罗》ROM 立项。不要跑原版 ROM。只做第一关的前三分之一，做成一个能独立玩的网页。\n```',
        '![实验 A 提示：用 REA 处理本地魂斗罗 ROM，不跑原版 ROM，只做第一关前三分之一的独立网页。](/media/x-cases/contra-notion-img06.jpg)',
        '1. **钉死本地文件。** 拒绝现成反汇编。把 REA 指到磁盘上的 ROM。\n2. **先追踪，再分开写。** 大约 24,000 帧走过本地分析。已确认的规则和仍开放的数据写在看板的不同区域。\n3. **重写。** 纯 JavaScript。没有模拟器运行时。跑动、八向瞄准、跳跃、射击、趴下、前段敌人，以及第一关前三分之一里的断桥。\n4. **玩一遍。** 本页顶部的视频就是那个网页，大约 20 秒，由本站托管。',
        '![发现看板（上）：跑跳、武器和关卡规则，已确认与仍开放的项分开写。](/media/x-cases/contra-notion-img07.jpg)',
        '![发现看板（下）：关卡数据、子弹上限，以及没有被写成既成事实的未知项。](/media/x-cases/contra-notion-img08.jpg)',
        '看板把第一关开头这些项写成已确认：',
        '1. **跑、跳、重力。** 跳多高、在空中停多久、每一帧掉多少、怎样算落地，以及趴下时的判定范围。\n2. **武器。** 默认枪、按住连发的机枪（M），以及五路散弹（S）：子弹如何生成、屏幕上同时能有几颗、怎样判定命中。\n3. **关卡切片。** 这一前三分之一的地形、高台和断桥，画成重写可以直接读的地图。',
        '![会话里的第一关前段地图：地形、高台，以及网页复刻用到的断桥段。](/media/x-cases/contra-notion-img09.jpg)',
        '从分析到可玩网页大约 20 分钟。上手试玩后的会话估计：核心手感大约 80%（跑、瞄准、跳、射击、趴下、前段战斗、断桥）。另外 20% 被写明了，没有混过去。死亡动作偏薄。天上的武器胶囊——打下来、吃掉、切换弹药——还不完整，所以换枪放在侧边菜单里。20 分钟够把脊梁立起来。它不是一个完成的移植。',
        '![试玩记录：核心手感大约 80%；死亡动作和武器胶囊拾取仍不完整。](/media/x-cases/contra-notion-img10.jpg)',
        '## 30 条命：来自 Evidence，不是攻略',
        '试玩之后，会话问这份 ROM 里有没有作弊码，并要求答案来自 REA 记录，而不是网上攻略。账本里有完整的标题画面按键序列，以及吃掉这个序列的分支。',
        '| 步骤 | Evidence 账本里记录的内容 |\n|---|---|\n| 位置 | 标题画面，按 Start 之前 |\n| 序列 | ↑ ↑ ↓ ↓ ← → ← → B A，然后 Start |\n| 写入 | 备用生命从默认的 2 改成 29 |\n| 场上 | 29 条备用 + 当前角色 = 30 |\n| 没有用到 | 网上攻略或第三方 FAQ |',
        'Konami 式输入，从程序里读出来。这是本页要的标准：二进制里的一张表、一个分支、改写前后的数字。只靠童年记忆、没有这张表，就应该继续标成未知。',
        '![Evidence 账本里的标题画面序列：上上下下左右左右 B A，再按 Start；备用生命从 2 改为 29。](/media/x-cases/contra-notion-img11.jpg)',
        '## 实验 B：升级你自己的编辑器',
        '实验 A 问的是：一份经典游戏文件能否变成一个小而干净的网页。实验 B 是产品形态：研究一个你有权检查的机制，然后把实现预算花在**你自己的**编辑器上。大约三小时用来获准查看 Notion 桌面端，并和操作者自己的 Mac 文本编辑器对照。目标不是再做一个 Notion。禁止未经授权反编译的条款仍然有效；这个实验停在操作者获准的检查之内，落下去的代码是操作者代码树里的新代码。',
        '较窄的剪贴板故事，本站已经有卡片：[Notion 如何复制文本和 HTML](/zh/showcase/notion-clipboard/)。复制时，完整块树留在应用自己的内存里，系统剪贴板只写普通文本和 HTML，并藏一行 id 注释（`<!-- notionvc: id -->`），这样内部粘贴能还原结构，贴到其他应用时仍然干净。实验 B 把它当作其中一个输入，然后要求升级操作者正在做的那个编辑器。',
        '![rea.run 已写过的双轨剪贴板：内存里留完整块树，系统剪贴板只放干净 HTML，并藏一行 id 注释。](/media/x-cases/contra-notion-img13.jpg)',
        '对照结果是一页纸简报：Notion 的文本系统作参照，当前编辑器才是要改的树。四个抓手，每一个都对着这棵树里已经存在的缺陷：',
        '| 抓手 | 当前编辑器在做什么 | 授权研究之后的方向 |\n|---|---|---|\n| 统一编辑事务 | 加粗、快捷键、粘贴和 AI 改稿各改各的状态，一撤销就漂 | 一套可撤销事务，共享选区和撤销栈 |\n| 稳定块 id | 异步 AI 修改可能带动光标 | 文本、图片和进行中的 AI 修改都绑稳定的 `blockId` |\n| 本地增量保存 | 界面传的是增量，磁盘却仍在重写整个工作区 | 把增量追加进本地存储和待提交队列 |\n| 块级合并 | 整篇覆盖 | 按块合并；保留无账号的离线写作，以及 Markdown 导出 |',
        '![一页纸简报：获准研究的桌面应用对照操作者自己的 Mac 编辑器，写出四个升级抓手。](/media/x-cases/contra-notion-img14.jpg)',
        '实现提示保持窄。它点的是已经存在的那个编辑器。它没有说“把另一个产品做出来”。',
        '```text\n按这个方案升级本项目里的 Mac 文本编辑栈。优先做统一编辑事务、选区、快捷格式和撤销。保留现有稿件、Markdown 导出，以及不登录的离线写作。\n```',
        '![升级提示：统一编辑事务、选区、快捷格式和撤销，并保留稿件、Markdown 导出和离线写作。](/media/x-cases/contra-notion-img15.jpg)',
        '加上后续联调，升级大约三小时。会话估计：核心路径大约 70% 确实跑通了——连接器编辑、区块拆并、跨段落加粗、快捷菜单，以及一套撤销栈。会话里值得留下的习惯是：不要一上来就说“把整个应用抄下来”。指着一个机制（区块编辑，或剪贴板），读懂它，再改你自己的项目。这样最有机会既合法，也能落地。',
        '## 斜杠菜单，以及品味缺口',
        '同一场会话随后打开了模型写下的斜杠菜单，并把它和产品菜单放在一起。插入是好的：正文、标题、引用、代码块。外壳不好。框重、层次平，还有一颗蓝底白字的 “A” 胶囊，看起来像很旧的网页按钮。对照菜单是圆角浮层、留得住的空白、安静的灰阶分组、小图标，以及对齐的快捷键提示。',
        '这个缺口是模型默认的 UI 打磨，不是 Evidence 这一步的洞。REA 可以在几小时内把机制讲清楚，也可以把核心路径带到大约 70% 的会话估计。留白、克制，以及最后的交互细节，仍然要人的眼睛。当脊梁变得便宜，品味和产品周围的数据就变成仍然稀缺的部分。',
        '![斜杠菜单对比：生成的菜单能插入区块，但留白、分组和边框仍落后于产品品味。](/media/x-cases/contra-notion-img16.jpg)',
        '## 可以照做的清单',
        '会话里有一张卡片列出商业动机：检查小工具、吸收架构思路、迁移旧代码库。把这张卡片当成动机清单，再套下面的边界。合法子集更窄。',
        '1. **你的产品，或你获准做的研究。** 给自己的应用做性能检查、许可允许的开源项目，或书面许可下的系统。商业软件若禁止未经授权的反编译，机制再有趣也在范围之外。\n2. **先要思路，再干净重写。** “一个藏起来的 id 把剪贴板 HTML 系到内存里的树。”“滞空时间是逐帧规则。”合上报告，写新代码。不要粘贴专有源码，也不要带上别人的素材。\n3. **你拥有或受合同委托迁移的旧树。** Evidence 可以变成那棵树的行为说明。它不是再发布第三方安装包的许可。\n4. **一次一个功能。** 一个问题加一本账本，胜过周末克隆一款旗舰应用。',
        '![会话里的动机卡片。本页只保留合法子集：自有产品、获准的研究、干净重写。](/media/x-cases/contra-notion-img17.jpg)',
        '![会话收束：把逻辑重建出来已经不是稀缺部分；产品品味、定义和真实数据生态仍是人的工作。](/media/x-cases/contra-notion-img18.jpg)',
        '- [ ] ROM、应用或固件是你的，或许可允许研究，或你有书面许可\n- [ ] 不转分发 ROM 或专有素材\n- [ ] 不拿第三方反汇编代替对本地文件的 REA 分析\n- [ ] 向智能体要 Evidence，以及一份写明的未知项清单\n- [ ] 在自己的代码树里重写干净实现\n- [ ] 打开商业桌面应用之前先读条款\n- [ ] 核心完成度估计不是已经发布的设计；UI 品味留给人审\n- [ ] 不发布克隆配方、账号绕过或 DRM 绕过',
        '## 安装',
        '本站的安装是一条命令，然后重启客户端：`npx rea-agents@latest setup`。跟练：[/zh/docs/install/](/zh/docs/install/)。Codex 演示：[/zh/docs/install-demo/](/zh/docs/install-demo/)。也可以把智能体指到 [github.com/morluto/rea](https://github.com/morluto/rea)，让它从该仓库安装。装好之后，给出你有权分析的目标的绝对路径，并要求 Evidence 与未知项。',
        '同一面墙上的邻近页面：[计算器百分号](/zh/showcase/windows-calculator-percent/)、[TH04 的 256 角度环](/zh/showcase/th04/)、[Notion 剪贴板](/zh/showcase/notion-clipboard/)、[DX-Ball](/zh/showcase/dx-ball/)，以及[合法边界](/zh/faq/legal-boundary/)。',
        '![收尾卡片：从 REA 仓库安装，留下问题清单，并把已确认项和未知项分开。](/media/x-cases/contra-notion-img19.jpg)',
      ],
      takeaways: [
        '实验 A：本地魂斗罗 ROM，只走 REA，大约 20 分钟做出第一关前三分之一的网页，核心手感大约 80%；死亡动作和武器胶囊仍开放。',
        '30 条命序列（备用生命 2 → 29，再加上当前角色）来自 Evidence 账本，不是网上攻略。',
        '实验 B：大约 3 小时，自有编辑器核心大约 70%。斜杠菜单仍落后于产品品味。本页不是 ROM 包，也不是克隆配方。',
      ],
    },
  },
];
