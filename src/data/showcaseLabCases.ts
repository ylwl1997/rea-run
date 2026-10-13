import type { ShowcaseCase } from './showcaseTypes';

/** Inline code span for body markdown. */
function ic(s: string): string {
  return '`' + s + '`';
}

/** Fenced block. Code arguments must not contain backticks. */
function fence(lang: string, code: string): string {
  return '```' + lang + '\n' + code.replace(/^\n/, '').replace(/\n$/, '') + '\n```';
}

/**
 * Thick on-site write-ups for the five reverse-engineering labs.
 * DownUnderCTF flag choice: publish the solved 2023 historical flag with
 * archived-contest framing. The handout and organizer metadata are public;
 * the contest window is closed. The ELF itself is not rehosted.
 */
export const SHOWCASE_LAB_CASES: ShowcaseCase[] = [
  {
    id: 'aegis-totp',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Independent rea.run write-up · Aegis Authenticator is GPL-3.0 · decompiled excerpts credited to that project',
    attributionZh: 'rea.run 独立撰写 · Aegis Authenticator 为 GPL-3.0 · 反编译节选归该项目',
    tags: ['android', 'totp', 'gpl', 'authorized'],
    relation: 'case-study',
    github: {
      url: 'https://github.com/beemdevelopment/Aegis',
      stars: 13241,
      language: 'Java',
      license: 'GPL-3.0',
      updated: '2026-09-06',
    },
    rating: {
      score: 5,
      labelEn: 'GPL APK with a checked clock',
      labelZh: '带核对时钟的 GPL APK',
      qualityEn: 'Release APK, named methods, and a browser reconstruction of the same rule.',
      qualityZh: '发行版 APK、具名方法，以及同一规则的浏览器重建。',
      evidenceEn: 'REA class search, caller trace, 133 local checks, and RFC 6238 SHA-1 vectors.',
      evidenceZh: 'REA 类搜索、调用跟踪、133 项本地核对，以及 RFC 6238 SHA-1 向量。',
      limitsEn: 'Static inspection of an authorized GPL build. Not an account-bypass guide.',
      limitsZh: '对授权 GPL 构建做静态检查。不是账户绕过指南。',
      audienceEn: 'Android learners who can download the official APK and a JDK 17+.',
      audienceZh: '能下载官方 APK 并备有 JDK 17+ 的 Android 学习者。',
    },
    footnotes: [
      { label: 'Aegis Authenticator (GPL-3.0)', url: 'https://github.com/beemdevelopment/Aegis' },
      {
        label: 'Aegis 3.4.3 release APK (not mirrored here)',
        url: 'https://github.com/beemdevelopment/Aegis/releases/download/v3.4.3/aegis-v3.4.3.apk',
      },
      { label: 'rea-agents 6.4.0 (pin for this study)', url: 'https://github.com/morluto/rea/releases/tag/rea-agents-6.4.0' },
      { label: 'RFC 6238 (TOTP)', url: 'https://datatracker.ietf.org/doc/html/rfc6238' },
      {
        label: 'RFC 6238 SHA-1 vectors used by the clock',
        url: '/media/showcase-cases/aegis/test-vectors.json',
      },
      {
        label: 'jadx-headless-mcp 0.7.1 (Android analysis helper)',
        url: 'https://github.com/1013503897/jadx-headless-mcp/releases/download/v0.7.1/jadx-headless-mcp-0.7.1-all.jar',
      },
    ],
    complianceEn:
      'Use the official release or another build you are allowed to inspect. Reconstructing TOTP on GPL software is interoperability study. Harvesting live account seeds from devices you do not own is not part of this case. This page does not attach ADB to a phone that stores authenticator secrets.',
    complianceZh:
      '请使用官方发行版或其它你获准检查的构建。在 GPL 软件上重建 TOTP 是互操作研究。从你不拥有的设备收割在用账户种子不属于本案例。本页不把 ADB 接到存放验证器密钥的手机上。',
    en: {
      title: 'How an authenticator generates a login code',
      summary:
        'Aegis 3.4.3 release APK: REA narrows 3,077 classes to TotpInfo, and a clock you can move reproduces the 30-second HMAC-SHA1 code.',
      lede:
        'A six-digit login code changes every 30 seconds because time is cut into blocks, mixed with an account key, and reduced to digits. Aegis Authenticator 3.4.3 publishes that behavior in a GPL-3.0 release APK of about 6.9 MB, which makes it a clean authorized Android target. This page follows the REA queries, the decompiled calculation, and a browser clock checked against RFC 6238.',
      body: [
        '## Ask for the rule, not a bypass',
        'The question for the agent is narrow: find how this APK builds the six-digit code, explain why a new code appears every 30 seconds, and rebuild a small demo whose clock you can move. That is a packaging and cryptography-reading exercise on software you are allowed to analyze.',
        fence(
          'text',
          'Use REA to inspect aegis-v3.4.3.apk. Find how it generates the six-digit login code, explain why it changes every 30 seconds, and rebuild a small demo where I can change the time.',
        ),
        'Android analysis for this pass needs a full JDK 17 or newer (this inspection used JDK 21) selected with ' +
          ic('JAVA_HOME') +
          ' or ' +
          ic('PATH') +
          ', plus the jadx helper jar named in the footnotes. Point REA at that jar and the APK you downloaded yourself:',
        fence(
          'bash',
          'REA_JADX_MCP_JAR="$PWD/jadx-headless-mcp-0.7.1-all.jar" \\\nnpx -y rea-agents@6.4.0 inspect-android-package \\\n  ./aegis-v3.4.3.apk --format json --full-output',
        ),
        '## Pin for this study',
        'The commands on this page use **rea-agents@6.4.0** (npm latest on 2026-10-13, published 2026-10-11). Do not swap in `@latest` if you want the same tool list later. Node engines for that tarball are `^22.19.0 || ^24.11.0 || >=26.0.0`.',
        '| Piece | Pin used here |\n| --- | --- |\n| REA | `rea-agents@6.4.0` |\n| JDK | 17+ required since 5.0.0; this pass used 21 |\n| Android helper | `jadx-headless-mcp` 0.7.1, via `REA_JADX_MCP_JAR` |\n| APK | Aegis Authenticator **3.4.3** official release, GPL-3.0, about 6.9 MB |\n| Clock check | RFC 6238 appendix B SHA-1 vectors, self-hosted JSON |',
        '1. Download `aegis-v3.4.3.apk` from the project’s own release. Record `sha256sum` before you open it. This site does not mirror the APK.\n2. Select JDK 21 (or another full JDK 17+) with `JAVA_HOME`.\n3. Pin `npx -y rea-agents@6.4.0` and point `REA_JADX_MCP_JAR` at the helper jar you downloaded.\n4. Ask for the six-digit rule, not for an account bypass.\n5. Rebuild the clock and check it against the RFC vectors before you trust one screenshot.\n6. Stop if the file is not a build you are allowed to inspect.',
        'This pass is static. It does not use the 6.4.0 ADB device lane, and it does not open a live authenticator database. Device work on an emulator or handset you control is a separate guide: [/docs/android-adb/](/docs/android-adb/). A licensed JEB MCP is also optional and separate: [/docs/jeb/](/docs/jeb/). Neither is required to read `TotpInfo` with the JADX helper.',

        '## Three classes out of 3,077',
        'A package inventory names ' +
          ic('com.beemdevelopment.aegis') +
          ', version 3.4.3, and 3,077 classes. Searching for ' +
          ic('Totp') +
          ' returns three hits. Only one of them owns the calculation.',
        fence(
          'text',
          'inspect_android_package\n{"path": "aegis-v3.4.3.apk"}\n\nsearch_android_classes\n{"path": "aegis-v3.4.3.apk", "query": "Totp"}',
        ),
        fence(
          'text',
          'Package: com.beemdevelopment.aegis\nVersion: 3.4.3\nClasses: 3,077\n\nThree matches:\n  otp.TotpInfo\n  ui.views.TotpProgressBar\n  importers.TotpAuthenticatorImporter',
        ),
        ic('TotpInfo') +
          ' is the generator. ' +
          ic('TotpProgressBar') +
          ' draws the countdown. ' +
          ic('TotpAuthenticatorImporter') +
          ' brings in accounts from another authenticator. TOTP means time-based one-time password: the same key and the same time block always produce the same code.',

        '## Connect the generator to the screen',
        'Inspecting ' +
          ic('TotpInfo') +
          ' shows two ' +
          ic('getOtp') +
          ' overloads. Tracing callers of the base ' +
          ic('OtpInfo.getOtp') +
          ' lands on the list row and the copy action.',
        fence(
          'text',
          'inspect_android_class\n{"path": "aegis-v3.4.3.apk",\n "class_name": "com.beemdevelopment.aegis.otp.TotpInfo"}\n\ntrace_android_references\n{"path": "aegis-v3.4.3.apk",\n "class_name": "com.beemdevelopment.aegis.otp.OtpInfo",\n "method_name": "getOtp"}',
        ),
        fence(
          'text',
          'TotpInfo methods:\n  getOtp()      · overload 0\n  getOtp(long)  · overload 1\n\nOtpInfo.getOtp callers:\n  ui.views.EntryHolder.getOtp\n  ui.MainActivity.copyEntryCode',
        ),
        'The timestamp overload is the one the UI uses. ' +
          ic('EntryHolder.getOtp') +
          ' calls ' +
          ic('TotpInfo.getOtp(timestamp)') +
          ' when it paints a row. ' +
          ic('MainActivity.copyEntryCode') +
          ' is the copy-to-clipboard path. Class names in the result drop the shared ' +
          ic('com.beemdevelopment.aegis') +
          ' prefix; the request paths above are shortened the same way for display.',

        '## Read the calculation',
        'Constructors fix the defaults: period 30 seconds, algorithm SHA1, six digits. The timestamp method turns milliseconds into a block index and hands that block to the generator. Formatting keeps leading zeroes, so a code may start with 0.',
        fence(
          'java',
          `// TotpInfo defaults and clock
setPeriod(30);
getOtp(System.currentTimeMillis() / 1000);

// OtpInfo default algorithm and digits
this(bArr, "SHA1", 6);

// Block passed to the generator
(long) Math.floor(j / ((double) this._period))

// generateOTP → getHash
byte[] hash = getHash(bArr, str, j);

// getHash: account key + encoded block
Mac mac = Mac.getInstance(str);
mac.init(secretKeySpec);
return mac.doFinal(bArrArray);

// OTP.toString, case 0
this._code % ((int) Math.pow(10.0d, i))

// Keep leading zeroes
while (sb.length() < i) {
    sb.insert(0, "0");
}`,
        ),
        'A readable summary of the same methods:',
        fence(
          'text',
          `seconds = current_time_ms / 1000
block = floor(seconds / 30)
hash = HMAC_SHA1(account_key, big_endian_8_bytes(block))
number = select_31_bits(hash)
code = pad_with_zeroes(number % 1_000_000, 6)`,
        ),
        'Seconds 30 through 59 all share block 1. At 60 seconds the block becomes 2 and the code changes, even though the key did not. A different account key at the same timestamp produces a different code. The excerpts above are several methods, wrapped for display. Aegis itself is GPL-3.0; the diagram and the browser clock on this page are new teaching material.',

        '## Inside the generator',
        'In the release APK, ' +
          ic('generateOTP') +
          ' is placed on ' +
          ic('kotlin.ExceptionsKt') +
          '. REA follows the call from ' +
          ic('TotpInfo') +
          ' and returns the body. The matching release source names the helper ' +
          ic('HOTP') +
          '.',
        fence(
          'java',
          `public static OTP generateOTP(byte[] bArr, String str,
        int i, long j)
        throws NoSuchAlgorithmException, InvalidKeyException {
    byte[] hash = getHash(bArr, str, j);
    int i2 = hash[hash.length - 1] & 15;
    return new OTP(
        (hash[i2 + 3] & 255)
        | ((hash[i2] & 127) << 24)
        | ((hash[i2 + 1] & 255) << 16)
        | ((hash[i2 + 2] & 255) << 8), i, 0);
}`,
        ),
        'The last hash byte selects a window. Four bytes at that window become a positive 31-bit integer; formatting then reduces it to the requested digit count. The constructor’s last argument selects the formatting branch the compiler introduced. Compare that body with the matching tag in the Aegis repository when you want the original names.',

        '## Clock on this page',
        'Move the clock above across a minute. The public test key is the ASCII string from RFC 6238 appendix B (' +
          ic('12345678901234567890') +
          '), not anyone’s account. At 59 seconds the block is 1 and the six-digit code is ' +
          ic('287082') +
          '. At 60 seconds the block is 2 and the code is ' +
          ic('359152') +
          '. Sliding inside one block does not change the code.',
        '| Example time | Block | Six-digit code |\n| --- | --- | --- |\n| 30 seconds | 1 | `287082` |\n| 59 seconds | 1 | `287082` |\n| 60 seconds | 2 | `359152` |\n| 1,111,111,109 seconds | 37,037,036 | `081804` |',
        'The ' +
          ic('081804') +
          ' row is the interesting padding case: the value is shorter than six digits until leading zeroes are restored. It also sits on a block boundary worth keeping in the local suite.',

        '## What was checked',
        'Selected Java methods returned by REA were assembled into a small test program. Their output matched an independent reconstruction on 133 cases, including block boundaries and codes that begin with zero. The browser clock also matches the six published SHA-1 vectors in RFC 6238. Those vectors are eight digits; the button above checks both the eight-digit string and its last six digits. Reference rows live in ' +
          '[test-vectors.json](/media/showcase-cases/aegis/test-vectors.json)' +
          '. The APK was inspected statically. The verification runs the extracted methods and this demo, not a logged-in Aegis account.',
        'A useful next question, still inside the same authorized APK: what changes when an account asks for eight digits, or for a period other than 30 seconds? The defaults are in the constructors; the digit count and period are already parameters.',
        '## What this study does not claim',
        'The six-digit strings above are outputs of the public RFC 6238 test key on a clock you can move. They are not codes from a real account. Sliding the control does not talk to Aegis, to a phone, or to an issuer. If a later `rea-agents` minor changes Evidence field names, keep this pin until you have read [/docs/breaking/](/docs/breaking/) — `always-bump-minor` can break consumers between 6.0 and 6.4.0.',
      ],
      takeaways: [
        'Search first: three Totp classes, one generator.',
        'Period 30, HMAC-SHA1, six digits, zero-padded.',
        'Pin rea-agents@6.4.0, JDK 21, jadx-headless-mcp 0.7.1, Aegis 3.4.3.',
        'Check the rebuild on RFC 6238 before trusting a single screenshot.',
        'Official GPL APK only. No ADB against a live vault.',
      ],
    },
    zh: {
      title: '验证器如何生成登录验证码',
      summary:
        'Aegis 3.4.3 发行版 APK：REA 从 3,077 个类收到 TotpInfo，可移动的时钟复现 30 秒一块的 HMAC-SHA1 验证码。',
      lede:
        '六位登录码每 30 秒变化，是因为时间被切成块，再与账户密钥混合、收成数字。Aegis Authenticator 3.4.3 以 GPL-3.0 发布约 6.9 MB 的发行版 APK，适合作为授权的 Android 目标。本页沿 REA 查询、反编译出的计算，以及对照 RFC 6238 的浏览器时钟写下来。',
      body: [
        '## 要的是规则，不是绕过',
        '给智能体的问题要收窄：找出这个 APK 如何生成六位码，解释为什么每 30 秒出现新码，并重建一个可以改时间的小演示。这是在你获准分析的软件上做的打包与密码学阅读练习。',
        fence(
          'text',
          '用 REA 检查 aegis-v3.4.3.apk。找出六位登录验证码如何生成，解释它为什么每 30 秒变化，并重建一个我可以改时间的小演示。',
        ),
        '这一趟 Android 分析需要完整的 JDK 17 或更新（本次用 JDK 21），用 ' +
          ic('JAVA_HOME') +
          ' 或 ' +
          ic('PATH') +
          ' 选中，再加上脚注里的 jadx 辅助 JAR。把 REA 指到你自己下载的 JAR 和 APK：',
        fence(
          'bash',
          'REA_JADX_MCP_JAR="$PWD/jadx-headless-mcp-0.7.1-all.jar" \\\nnpx -y rea-agents@6.4.0 inspect-android-package \\\n  ./aegis-v3.4.3.apk --format json --full-output',
        ),
        '## 本研究的钉版本',
        '本页命令使用 **rea-agents@6.4.0**（2026-10-13 的 npm latest，2026-10-11 发布）。若以后还要同一份工具列表，不要改成 `@latest`。该 tarball 的 Node 引擎是 `^22.19.0 || ^24.11.0 || >=26.0.0`。',
        '| 部件 | 这里钉的版本 |\n| --- | --- |\n| REA | `rea-agents@6.4.0` |\n| JDK | 5.0.0 起需要 17+；这一趟用的是 21 |\n| Android 辅助 | `jadx-headless-mcp` 0.7.1，经 `REA_JADX_MCP_JAR` |\n| APK | Aegis Authenticator **3.4.3** 官方发行版，GPL-3.0，约 6.9 MB |\n| 时钟核对 | RFC 6238 附录 B 的 SHA-1 向量，JSON 放在本站 |',
        '1. 从项目自己的发行页下载 `aegis-v3.4.3.apk`。打开之前记下 `sha256sum`。本站不镜像该 APK。\n2. 用 `JAVA_HOME` 选中 JDK 21（或其它完整的 JDK 17+）。\n3. 钉 `npx -y rea-agents@6.4.0`，并把 `REA_JADX_MCP_JAR` 指到你下载的辅助 JAR。\n4. 要的是六位码的规则，不是账户绕过。\n5. 先重建时钟并用 RFC 向量核对，再相信一张截图。\n6. 若文件不是你获准检查的构建，就停。',
        '这一趟是静态的。它不用 6.4.0 的 ADB 设备通道，也不打开在用的验证器数据库。你控制的模拟器或手机是另一份指南：[/zh/docs/android-adb/](/zh/docs/android-adb/)。已获许可的 JEB MCP 也是可选且分开的：[/zh/docs/jeb/](/zh/docs/jeb/)。用 JADX 辅助读 `TotpInfo` 时，两者都不是必需的。',

        '## 3,077 个类里的三个',
        '包清单给出 ' +
          ic('com.beemdevelopment.aegis') +
          '、版本 3.4.3、3,077 个类。搜索 ' +
          ic('Totp') +
          ' 得到三个命中。其中只有一个拥有计算。',
        fence(
          'text',
          'inspect_android_package\n{"path": "aegis-v3.4.3.apk"}\n\nsearch_android_classes\n{"path": "aegis-v3.4.3.apk", "query": "Totp"}',
        ),
        fence(
          'text',
          'Package: com.beemdevelopment.aegis\nVersion: 3.4.3\nClasses: 3,077\n\nThree matches:\n  otp.TotpInfo\n  ui.views.TotpProgressBar\n  importers.TotpAuthenticatorImporter',
        ),
        ic('TotpInfo') +
          ' 是生成器。' +
          ic('TotpProgressBar') +
          ' 画倒计时。' +
          ic('TotpAuthenticatorImporter') +
          ' 从其它验证器导入账户。TOTP 是基于时间的一次性密码：同一密钥、同一时间块，总是得到同一验证码。',

        '## 把生成器接到界面上',
        '检查 ' +
          ic('TotpInfo') +
          ' 会看到两个 ' +
          ic('getOtp') +
          ' 重载。跟踪基类 ' +
          ic('OtpInfo.getOtp') +
          ' 的调用方，会落到列表行和复制动作。',
        fence(
          'text',
          'inspect_android_class\n{"path": "aegis-v3.4.3.apk",\n "class_name": "com.beemdevelopment.aegis.otp.TotpInfo"}\n\ntrace_android_references\n{"path": "aegis-v3.4.3.apk",\n "class_name": "com.beemdevelopment.aegis.otp.OtpInfo",\n "method_name": "getOtp"}',
        ),
        fence(
          'text',
          'TotpInfo methods:\n  getOtp()      · overload 0\n  getOtp(long)  · overload 1\n\nOtpInfo.getOtp callers:\n  ui.views.EntryHolder.getOtp\n  ui.MainActivity.copyEntryCode',
        ),
        '界面用的是带时间戳的重载。' +
          ic('EntryHolder.getOtp') +
          ' 画一行时调用 ' +
          ic('TotpInfo.getOtp(timestamp)') +
          '。' +
          ic('MainActivity.copyEntryCode') +
          ' 是复制到剪贴板的路径。结果里的类名省略了共同前缀 ' +
          ic('com.beemdevelopment.aegis') +
          '；上面的请求路径为便于显示也同样缩短。',

        '## 读计算',
        '构造函数把默认值定死：周期 30 秒、算法 SHA1、六位。接受时间戳的方法把毫秒变成时间块编号，再交给生成器。格式化保留前导零，所以验证码可以以 0 开头。',
        fence(
          'java',
          `// TotpInfo defaults and clock
setPeriod(30);
getOtp(System.currentTimeMillis() / 1000);

// OtpInfo default algorithm and digits
this(bArr, "SHA1", 6);

// Block passed to the generator
(long) Math.floor(j / ((double) this._period))

// generateOTP → getHash
byte[] hash = getHash(bArr, str, j);

// getHash: account key + encoded block
Mac mac = Mac.getInstance(str);
mac.init(secretKeySpec);
return mac.doFinal(bArrArray);

// OTP.toString, case 0
this._code % ((int) Math.pow(10.0d, i))

// Keep leading zeroes
while (sb.length() < i) {
    sb.insert(0, "0");
}`,
        ),
        '同一批方法的可读摘要：',
        fence(
          'text',
          `seconds = current_time_ms / 1000
block = floor(seconds / 30)
hash = HMAC_SHA1(account_key, big_endian_8_bytes(block))
number = select_31_bits(hash)
code = pad_with_zeroes(number % 1_000_000, 6)`,
        ),
        '第 30 秒到第 59 秒都属于时间块 1。到 60 秒，时间块变成 2，验证码改变，密钥并没有变。同一时刻换一把账户密钥，验证码也会不同。上面的节选来自多个方法，为显示做了换行。Aegis 本体是 GPL-3.0；本页的图示和浏览器时钟是新的教学材料。',

        '## 生成器内部',
        '发行版 APK 把 ' +
          ic('generateOTP') +
          ' 放在 ' +
          ic('kotlin.ExceptionsKt') +
          '。REA 从 ' +
          ic('TotpInfo') +
          ' 跟上调用并返回函数体。对应的发行版源码把这个辅助函数叫做 ' +
          ic('HOTP') +
          '。',
        fence(
          'java',
          `public static OTP generateOTP(byte[] bArr, String str,
        int i, long j)
        throws NoSuchAlgorithmException, InvalidKeyException {
    byte[] hash = getHash(bArr, str, j);
    int i2 = hash[hash.length - 1] & 15;
    return new OTP(
        (hash[i2 + 3] & 255)
        | ((hash[i2] & 127) << 24)
        | ((hash[i2 + 1] & 255) << 16)
        | ((hash[i2 + 2] & 255) << 8), i, 0);
}`,
        ),
        '哈希的最后一个字节选定窗口。该窗口上的四个字节组成一个正的 31 位整数；格式化再把它收成要求的位数。构造函数的最后一个参数选择编译引入的格式化分支。若要对照原始名字，打开 Aegis 仓库里对应的 tag。',

        '## 本页上的时钟',
        '把上方时钟拨过一分钟。公开测试密钥是 RFC 6238 附录 B 的 ASCII 串（' +
          ic('12345678901234567890') +
          '），不是任何人的账户。59 秒时时间块为 1，六位码是 ' +
          ic('287082') +
          '。60 秒时时间块为 2，验证码是 ' +
          ic('359152') +
          '。在同一时间块内滑动，验证码不变。',
        '| 示例时间 | 时间块 | 六位验证码 |\n| --- | --- | --- |\n| 30 秒 | 1 | `287082` |\n| 59 秒 | 1 | `287082` |\n| 60 秒 | 2 | `359152` |\n| 1,111,111,109 秒 | 37,037,036 | `081804` |',
        ic('081804') +
          ' 这一行是补零的例子：数值不足六位，要补上前导零。它也落在值得留在本地测试集里的时间块边界上。',

        '## 核对了什么',
        '把 REA 返回的若干 Java 方法装进一个小测试程序后，输出与一份独立重建在 133 个用例上一致，包括时间块边界和以零开头的验证码。浏览器时钟也符合 RFC 6238 公布的六个 SHA-1 向量。那些向量是八位；上方按钮同时核对八位串和它的后六位。对照行在 ' +
          '[test-vectors.json](/media/showcase-cases/aegis/test-vectors.json)' +
          '。APK 只做了静态检查。验证跑的是抽出的方法和这个演示，不是已登录的 Aegis 账户。',
        '仍在同一份授权 APK 里的下一个问题：账户要求八位，或周期不是 30 秒时，会变什么？默认值在构造函数里；位数和周期本来就是参数。',
        '## 本研究不声称什么',
        '上面的六位串是公开的 RFC 6238 测试密钥在可移动时钟上的输出。它们不是真实账户的验证码。拨动控件不会连接 Aegis、手机或发行方。若以后的 `rea-agents` 次版本改了 Evidence 字段名，在读完 [/zh/docs/breaking/](/zh/docs/breaking/) 之前保持这个钉版本——`always-bump-minor` 可以在 6.0 到 6.4.0 之间弄坏消费者。',
      ],
      takeaways: [
        '先搜索：三个 Totp 类，一个生成器。',
        '周期 30、HMAC-SHA1、六位、前导补零。',
        '钉 rea-agents@6.4.0、JDK 21、jadx-headless-mcp 0.7.1、Aegis 3.4.3。',
        '先用 RFC 6238 核对重建，再相信单张截图。',
        '只用官方 GPL APK。不对在用保险库使用 ADB。',
      ],
    },
  },
  {
    id: 'downunderctf',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Independent rea.run case study · archived DownUnderCTF 2023 challenge by joseph · flag printed with contest-closed framing',
    attributionZh: 'rea.run 独立案例 · joseph 的 DownUnderCTF 2023 归档题目 · 在赛事已结束的框架下写出历史 flag',
    tags: ['ctf', 'challenge', 'authorized', 'archived'],
    relation: 'case-study',
    github: {
      url: 'https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker',
    },
    rating: {
      score: 4,
      labelEn: 'Archived flag-checker case',
      labelZh: '归档 flag 检查器案例',
      qualityEn: 'Strings, masks, a Z3 script, and a process capture of Correct!.',
      qualityZh: '字符串、掩码、Z3 脚本，以及打印 Correct! 的进程捕获。',
      evidenceEn: 'Fresh static trace of the 15,248-byte ELF plus the organizer handout.',
      evidenceZh: '对 15,248 字节 ELF 的静态跟踪，加上主办方讲义。',
      limitsEn: '2023 contest is closed. Not a guide for live events or production binaries.',
      limitsZh: '2023 赛事已结束。不是进行中比赛或生产二进制的指南。',
      audienceEn: 'CTF players studying an archived, organizer-published checker.',
      audienceZh: '在研究主办方已公开的归档检查器的 CTF 选手。',
    },
    footnotes: [
      { label: 'DownUnderCTF', url: 'https://downunderctf.com/' },
      {
        label: 'masked-squares-flag-checker · joseph · Challenges_2023_Public',
        url: 'https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker',
      },
      {
        label: 'Organizer ELF (not mirrored here)',
        url: 'https://raw.githubusercontent.com/DownUnderCTF/Challenges_2023_Public/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker/publish/ms_flag_checker',
      },
      { label: 'Solver script (self-hosted)', url: '/media/showcase-cases/ctf/solve.py' },
    ],
    media: {
      images: [
        {
          src: '/media/showcase-cases/ctf/ctf-mask-equation.en.svg',
          srcZh: '/media/showcase-cases/ctf/ctf-mask-equation.zh.svg',
          altEn: 'Seventh mask selects only cell 21. Its character code is 55, so the character is 7.',
          altZh: '第七个掩码只选中第 21 格。字符码为 55，因此该字符是 7。',
        },
      ],
    },
    complianceEn:
      'DownUnderCTF 2023 is an archived contest. The historical flag below is the string the original program accepts and the string the organizers published after the event. Do not treat contest technique as permission to attack software outside the handout.',
    complianceZh:
      'DownUnderCTF 2023 是已归档赛事。下面的历史 flag 是原程序接受的字符串，也是主办方赛后公开的字符串。不要把赛题技巧当成攻击讲义之外软件的许可。',
    en: {
      title: 'Solve a CTF flag checker',
      summary:
        'DownUnderCTF 2023 masked-squares: 36 cells, 26 masks, a Z3 solve, and the original ELF printing Correct! for the archived flag.',
      lede:
        'The handout is a 15,248-byte stripped x86-64 ELF. It asks for a flag and prints Correct! or Incorrect!. REA follows the prompt to the checker, lifts 26 mask equations, and a small Python script finds an input the original program accepts. The contest is DownUnderCTF 2023, authored by joseph and published in the organizers’ challenge repository. The event is closed, so this page records the historical flag with that framing.',
      body: [
        '## Find the checking function',
        'Start with strings. The prompt, the rejection, and the acceptance message are enough to reach the code that decides.',
        fence(
          'text',
          'Use REA to analyze ms_flag_checker and find the flag. Explain how the checks work, then verify the answer with the original program.',
        ),
        fence(
          'text',
          'open_binary\n{"path": "ms_flag_checker"}\n\nsearch_strings\n{"pattern": "flag|correct|wrong|input",\n "mode": "regex", "case_sensitive": false}\n\nxrefs\n{"address": "0x102004"}\n\nresolve_containing_procedure\n{"address": "0x10126d"}',
        ),
        fence(
          'text',
          '0x102004  "What is the flag? "\n0x10201c  "Incorrect!"\n0x102027  "Correct!"\n\nPrompt referenced at: 0x10126d\nContaining function: 0x10124d',
        ),
        'The binary is stripped, so the cross-reference is the way in. Addresses are in REA’s imported image. The file on disk is the organizer ELF with SHA-256 ' +
          ic('dcd3bec4f608e11f3a12ce461100aaf5f621851ee63a1f870d7c90d4e3dd51ae') +
          '. This site does not mirror that binary; the footnote points at the organizers’ raw file.',

        '## Thirty-six characters, twenty-six sums',
        'Reading ' +
          ic('0x10124d') +
          ' plus helpers ' +
          ic('0x101189') +
          ' and ' +
          ic('0x101217') +
          ' shows two loops. The first copies 36 character codes. The second decodes a mask, sums the selected codes, and compares the sum with a stored integer.',
        fence(
          'text',
          '0x1012c1: CMP EDI, 0x24\n0x1012c6: LEA RBX, [0x1040e0]\n0x1012cd: LEA RBP, [0x104060]\n0x1012d4: LEA R13, [RBX + 0x270]\n0x1012e1: CALL 0x00101189\n0x1012ec: CALL 0x00101217\n0x1012f1: CMP dword ptr [RBP], EAX\n0x1012f4: JNZ 0x00101335\n0x1012f6: ADD RBX, 0x18',
        ),
        ic('CMP EDI, 0x24') +
          ' is the length check: 0x24 is 36. The checking loop steps ' +
          ic('RBX') +
          ' by ' +
          ic('0x18') +
          ' bytes across a ' +
          ic('0x270') +
          '-byte mask table, which is 26 masks. A mismatch jumps to ' +
          ic('Incorrect!') +
          '.',

        '## One check reveals one character',
        'The input is a 6×6 grid. A mask is stored as signed run lengths: a negative run skips cells, a positive run selects them, and zero stops. The figure above is the seventh mask, which selects a single cell.',
        'Bytes at the seventh mask and its target:',
        fence(
          'text',
          'read_bytes\n{"address": "0x1040e0", "length": 624}\n{"address": "0x104060", "length": 144}\n\nMask at 0x104170:\neb 01 f2 00  →  -21, +1, -14, stop\n\nTarget at 0x104078:\n37 00 00 00  →  55',
        ),
        ic('MOVSX') +
          ' is why ' +
          ic('eb') +
          ' means −21 rather than 235. Skip 21 cells, select one, skip 14. The selected index is 21, and the little-endian target is 55, so ' +
          ic('code[21] = 55') +
          ', the character ' +
          ic('7') +
          '. Most other masks select many cells at once. The first requires 16 character codes to sum to 1441. Overlap is what makes the system solvable.',

        '## From the summing helper to C',
        'The helper at ' +
          ic('0x101217') +
          ' walks 36 integers. ' +
          ic('ECX') +
          ' is the running total. A zero mask cell skips the character; a nonzero cell adds ' +
          ic('codes[i]') +
          '. The caller compares ' +
          ic('EAX') +
          ' with the stored target.',
        fence(
          'text',
          '0x10121c: MOV ECX, 0x0\n0x10122c: CMP dword ptr [RSI + RAX*0x1], 0x0\n0x101230: JZ 0x00101223\n0x101232: ADD ECX, dword ptr [RDI + RAX*0x1]\n0x101223: ADD RAX, 0x4\n0x1012f1: CMP dword ptr [RBP], EAX\n0x1012f4: JNZ 0x00101335',
        ),
        fence(
          'c',
          `int check_one_mask(const int codes[36],
                   const int mask[36],
                   int target) {
    int total = 0;
    for (int i = 0; i < 36; ++i) {
        if (mask[i]) total += codes[i];
    }
    return total == target;
}`,
        ),
        'The C flattens the 6×6 grid into 36 cells and uses descriptive names. It is an explanation of the helper and its caller, not a claim that the stripped binary shipped those identifiers.',

        '## Solve the 26 equations',
        'Z3 searches for character codes inside a conventional flag alphabet that satisfy every extracted sum. The prefix ' +
          ic('DUCTF{') +
          ' and a closing brace are format assumptions, checked afterwards by running the ELF. The full mask table is in the self-hosted script ' +
          '[solve.py](/media/showcase-cases/ctf/solve.py)' +
          '.',
        fence(
          'python',
          `from z3 import Int, Or, Solver, Sum, sat

codes = [Int(f"code_{i}") for i in range(36)]
solver = Solver()
alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_{}"
for code in codes:
    solver.add(Or(*[code == ord(c) for c in alphabet]))
for code, char in zip(codes, "DUCTF{"):
    solver.add(code == ord(char))
solver.add(codes[-1] == ord("}"))

for selected, target in checks:
    solver.add(Sum([codes[i] for i in selected]) == target)`,
        ),
        fence(
          'bash',
          'python3 -m venv .venv\n.venv/bin/python -m pip install z3-solver\n.venv/bin/python solve.py',
        ),
        'Solving needs Python 3 and ' +
          ic('z3-solver') +
          '. Running the original executable needs Linux x86-64. Paste the script’s candidate at the program’s prompt.',

        '## The original program answers Correct!',
        'A process capture of the organizer ELF accepts the solved input and rejects a one-character edit. Changing one selected ' +
          ic('z') +
          ' to ' +
          ic('y') +
          ' drops the first sum from 1441 to 1440, and the program prints ' +
          ic('Incorrect!') +
          ' with exit status 255.',
        '| Input | Observed output | Exit code |\n| --- | --- | --- |\n| Solver’s flag | `Correct!` | 0 |\n| One character changed | `Incorrect!` | 255 |',
        'Archived contest result, recorded after the 2023 event closed. The original program prints:',
        fence(
          'text',
          'What is the flag? DUCTF{ezzzpzzz_07bcda7bfe81faf43caa}\nCorrect!',
        ),
        'That string also matches the flag in the organizers’ published challenge metadata, compared after the binary had already been solved. Strings, functions, and constants were read from the ELF before opening the organizers’ source. The diagram and ' +
          ic('solve.py') +
          ' were built from those extracted checks.',
        'Fresh analysis and two process captures used REA 4.1.0 with Ghidra 12.1.4 on Linux x64, on 8 October 2026. Republishing this flag is limited to the archived handout. It is not a live-contest spoiler, and the same summing trick is not a method for software you were not given to solve.',
      ],
      takeaways: [
        'The prompt’s cross-reference names the checker even when symbols are gone.',
        '26 overlapping masks on 36 cells are a constraint system, not 26 independent compares.',
        'The archived flag is the one input that makes this ELF print Correct!.',
        'Contest authorization ended with the event. Leave production binaries alone.',
      ],
    },
    zh: {
      title: '分析 CTF flag 检查器',
      summary:
        'DownUnderCTF 2023 masked-squares：36 格、26 个掩码、Z3 求解，原 ELF 对归档 flag 打印 Correct!。',
      lede:
        '讲义是一个 15,248 字节、去掉符号的 x86-64 ELF。它询问 flag，然后打印 Correct! 或 Incorrect!。REA 从提示走到检查函数，抽出 26 条掩码方程，一段 Python 找出原程序接受的输入。题目来自 joseph，发表在 DownUnderCTF 2023 主办方仓库。赛事已结束，本页在这个框架下记录历史 flag。',
      body: [
        '## 找到检查函数',
        '从字符串开始。提示、拒绝和接受消息足以走到做决定的代码。',
        fence(
          'text',
          '用 REA 分析 ms_flag_checker 并找出 flag。解释检查如何工作，再用原程序验证答案。',
        ),
        fence(
          'text',
          'open_binary\n{"path": "ms_flag_checker"}\n\nsearch_strings\n{"pattern": "flag|correct|wrong|input",\n "mode": "regex", "case_sensitive": false}\n\nxrefs\n{"address": "0x102004"}\n\nresolve_containing_procedure\n{"address": "0x10126d"}',
        ),
        fence(
          'text',
          '0x102004  "What is the flag? "\n0x10201c  "Incorrect!"\n0x102027  "Correct!"\n\nPrompt referenced at: 0x10126d\nContaining function: 0x10124d',
        ),
        '二进制已去符号，所以交叉引用才是入口。地址位于 REA 导入后的映像。磁盘上的文件是主办方 ELF，SHA-256 为 ' +
          ic('dcd3bec4f608e11f3a12ce461100aaf5f621851ee63a1f870d7c90d4e3dd51ae') +
          '。本站不镜像该二进制；脚注指向主办方的原始文件。',

        '## 三十六个字符，二十六次求和',
        '阅读 ' +
          ic('0x10124d') +
          ' 以及辅助函数 ' +
          ic('0x101189') +
          '、' +
          ic('0x101217') +
          '，可以看到两个循环。第一个复制 36 个字符码。第二个解码掩码，把选中的码相加，再与存好的整数比较。',
        fence(
          'text',
          '0x1012c1: CMP EDI, 0x24\n0x1012c6: LEA RBX, [0x1040e0]\n0x1012cd: LEA RBP, [0x104060]\n0x1012d4: LEA R13, [RBX + 0x270]\n0x1012e1: CALL 0x00101189\n0x1012ec: CALL 0x00101217\n0x1012f1: CMP dword ptr [RBP], EAX\n0x1012f4: JNZ 0x00101335\n0x1012f6: ADD RBX, 0x18',
        ),
        ic('CMP EDI, 0x24') +
          ' 是长度检查：0x24 即 36。检查循环让 ' +
          ic('RBX') +
          ' 以 ' +
          ic('0x18') +
          ' 字节为步长走过 ' +
          ic('0x270') +
          ' 字节的掩码表，共 26 个掩码。不匹配就跳到 ' +
          ic('Incorrect!') +
          '。',

        '## 一次检查露出一个字符',
        '输入排成 6×6 的格子。掩码以有符号游程存储：负数跳过格子，正数选中格子，零表示停止。上方的图是第七个掩码，它只选中一格。',
        '第七个掩码及其目标和的字节：',
        fence(
          'text',
          'read_bytes\n{"address": "0x1040e0", "length": 624}\n{"address": "0x104060", "length": 144}\n\nMask at 0x104170:\neb 01 f2 00  →  -21, +1, -14, stop\n\nTarget at 0x104078:\n37 00 00 00  →  55',
        ),
        ic('MOVSX') +
          ' 解释了为什么 ' +
          ic('eb') +
          ' 是 −21 而不是 235。跳过 21 格，选中 1 格，再跳过 14 格。选中的下标是 21，小端目标和是 55，所以 ' +
          ic('code[21] = 55') +
          '，字符是 ' +
          ic('7') +
          '。其余多数掩码一次选中很多格。第一个要求 16 个字符码之和为 1441。重叠才让这个方程组可解。',

        '## 从求和辅助函数到 C',
        ic('0x101217') +
          ' 的辅助函数走过 36 个整数。' +
          ic('ECX') +
          ' 是累加和。掩码格为 0 就跳过字符；非 0 就把 ' +
          ic('codes[i]') +
          ' 加进去。调用方把 ' +
          ic('EAX') +
          ' 与存好的目标和比较。',
        fence(
          'text',
          '0x10121c: MOV ECX, 0x0\n0x10122c: CMP dword ptr [RSI + RAX*0x1], 0x0\n0x101230: JZ 0x00101223\n0x101232: ADD ECX, dword ptr [RDI + RAX*0x1]\n0x101223: ADD RAX, 0x4\n0x1012f1: CMP dword ptr [RBP], EAX\n0x1012f4: JNZ 0x00101335',
        ),
        fence(
          'c',
          `int check_one_mask(const int codes[36],
                   const int mask[36],
                   int target) {
    int total = 0;
    for (int i = 0; i < 36; ++i) {
        if (mask[i]) total += codes[i];
    }
    return total == target;
}`,
        ),
        '这段 C 把 6×6 铺成 36 格，并使用了描述性名字。它解释的是辅助函数及其调用方，不是说去符号二进制里真的带这些标识符。',

        '## 求解 26 条方程',
        'Z3 在常规 flag 字母表里搜索满足每一条抽出的和的字符码。前缀 ' +
          ic('DUCTF{') +
          ' 和结尾的花括号是格式假设，之后靠运行 ELF 来核对。完整掩码表在本站托管的 ' +
          '[solve.py](/media/showcase-cases/ctf/solve.py)' +
          '。',
        fence(
          'python',
          `from z3 import Int, Or, Solver, Sum, sat

codes = [Int(f"code_{i}") for i in range(36)]
solver = Solver()
alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_{}"
for code in codes:
    solver.add(Or(*[code == ord(c) for c in alphabet]))
for code, char in zip(codes, "DUCTF{"):
    solver.add(code == ord(char))
solver.add(codes[-1] == ord("}"))

for selected, target in checks:
    solver.add(Sum([codes[i] for i in selected]) == target)`,
        ),
        fence(
          'bash',
          'python3 -m venv .venv\n.venv/bin/python -m pip install z3-solver\n.venv/bin/python solve.py',
        ),
        '求解需要 Python 3 和 ' +
          ic('z3-solver') +
          '。运行原可执行文件需要 Linux x86-64。把脚本打印的候选粘到程序提示符处。',

        '## 原程序回答 Correct!',
        '对主办方 ELF 的进程捕获接受求解结果，并拒绝改动一个字符。把选中的某个 ' +
          ic('z') +
          ' 改成 ' +
          ic('y') +
          '，第一次求和从 1441 掉到 1440，程序打印 ' +
          ic('Incorrect!') +
          '，退出状态 255。',
        '| 输入 | 观察到的输出 | 退出码 |\n| --- | --- | --- |\n| 求解得到的 flag | `Correct!` | 0 |\n| 改动一个字符 | `Incorrect!` | 255 |',
        '这是 2023 赛事结束后记录的归档结果。原程序打印：',
        fence(
          'text',
          'What is the flag? DUCTF{ezzzpzzz_07bcda7bfe81faf43caa}\nCorrect!',
        ),
        '该字符串也与主办方赛后公开的题目元数据一致，对照发生在二进制已经解出之后。字符串、函数和常量都是在打开主办方源码之前从 ELF 读到的。图和 ' +
          ic('solve.py') +
          ' 根据这些抽出的检查写成。',
        '新的分析与两次进程捕获使用 REA 4.1.0 与 Ghidra 12.1.4，平台为 Linux x64，日期为 2026 年 10 月 8 日。公布这面 flag 仅限于这份归档讲义。它不是进行中比赛的剧透，同样的求和技巧也不是给你去解未授权软件的方法。',
      ],
      takeaways: [
        '即使符号没了，提示的交叉引用仍能指出检查函数。',
        '36 格上的 26 个重叠掩码是约束组，不是 26 次独立比较。',
        '归档 flag 是让这个 ELF 打印 Correct! 的那一个输入。',
        '赛事授权随赛事结束。生产二进制不在范围内。',
      ],
    },
  },
  {
    id: 'dx-ball',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Independent rea.run write-up · maintained C reconstruction is MIT at N0zoM1z0/dx-ball',
    attributionZh: 'rea.run 独立撰写 · 可维护的 C 重建为 MIT，见 N0zoM1z0/dx-ball',
    tags: ['game', 'reconstruction', 'community'],
    relation: 'case-study',
    github: {
      url: 'https://github.com/N0zoM1z0/dx-ball',
      stars: 13,
      language: 'Python',
      license: 'MIT',
      updated: '2026-10-10',
    },
    rating: {
      score: 5,
      labelEn: 'Sound-pan checked against the EXE',
      labelZh: '声像函数已与 EXE 核对',
      qualityEn: 'One function from a void decompile to C that matches compiled bytes.',
      qualityZh: '一个函数：从空参数反编译走到与编译字节一致的 C。',
      evidenceEn: 'Caller, three doubles, 3,205 behavior cases, 63 matching bytes.',
      evidenceZh: '调用方、三个双精度数、3,205 个行为用例、63 字节匹配。',
      limitsEn: 'Analyze only a DX-Ball copy you have rights to. Not a crack guide.',
      limitsZh: '只分析你有权持有的 DX-Ball 副本。不是破解指南。',
      audienceEn: 'People comparing a 1996 Windows game with an open reconstruction.',
      audienceZh: '在把 1996 年 Windows 游戏与公开重建对照的人。',
    },
    footnotes: [
      { label: 'Community reconstruction · N0zoM1z0/dx-ball (MIT)', url: 'https://github.com/N0zoM1z0/dx-ball' },
    ],
    related: [
      { href: '/showcase/th04/', labelEn: 'TH04 bullet-ring case', labelZh: 'TH04 环形弹幕案例' },
    ],
    media: {
      images: [
        {
          src: '/media/showcase-cases/dx-ball/sound-pan.en.svg',
          srcZh: '/media/showcase-cases/dx-ball/sound-pan.zh.svg',
          altEn: 'Sound-pan at 0x406400: screen x becomes a left/right pan through 1.5625, 500.0, and pan scale.',
          altZh: '0x406400 的声像：屏幕 x 经 1.5625、500.0 和声像缩放变成左右声像。',
        },
      ],
    },
    complianceEn:
      'Only analyze a DX-Ball copy you have rights to study. Quote or fork the reconstruction under its MIT license. This page does not ship the original game.',
    complianceZh:
      '只分析你有权研究的 DX-Ball 副本。引用或 fork 重建时遵守其 MIT 许可。本页不提供原游戏。',
    en: {
      title: "DX-Ball's sound-pan calculation",
      summary:
        'DX-Ball 1.07 function 0x406400: a brick’s screen x becomes a pan value. The recovered C matches 63 compiled bytes.',
      lede:
        'The maintained reconstruction is working toward a readable C version of the 1996 Windows game. REA supplies instructions, callers, and data reads one function at a time; the repository implements and tests them. This page is the sound-pan function at 0x406400, the routine that turns a brick’s horizontal position into a left/right audio value. The figure above is that path from executable bytes to checked C.',
      body: [
        '## Where the project stood',
        'Checkpoint 7 October 2026: 55 maintained C functions, 45,380 comparisons with original code, and 33 functions whose compiled bytes match. Recovered areas include board and resource handling, brick hits, animations, particles, and bonus production. Current builds ship inspection utilities and an analysis library. Playable ball and paddle physics, power-ups, and Windows integration are still in progress. The ledger and coverage live in the MIT repository linked below.',

        '## The first decompiler view is wrong enough to be useful',
        'When a brick is hit, its horizontal position is passed into the sound code. The question is how that screen coordinate becomes a pan value.',
        fence(
          'text',
          'Use REA to find how DX-Ball calculates sound panning. Explain the calculation and show the code.',
        ),
        'The first result for ' +
          ic('0x406400') +
          ' declared ' +
          ic('FUN_00406400(void)') +
          ' and called ' +
          ic('__ftol()') +
          '. The instruction view, in the same result, showed a stack input and floating-point arithmetic. That disagreement is the reason to keep reading.',
        fence(
          'c',
          `longlong FUN_00406400(void)
{
  longlong lVar1;
  lVar1 = __ftol();
  return lVar1;
}`,
        ),

        '## Three questions',
        '### The missing input',
        'Asking REA to analyze ' +
          ic('0x406400') +
          ' returns instructions next to the pseudocode. ' +
          ic('[EBP+8]') +
          ' is the integer the decompiler dropped.',
        fence(
          'text',
          '0x406409: MOV EAX, dword ptr [EBP + 0x8]\n0x40640c: MOV dword ptr [EBP + -0xc], EAX\n0x40640f: FILD dword ptr [EBP + -0xc]',
        ),
        ic('FILD') + ' loads that integer onto the x87 stack. The C parameter is therefore a real ' + ic('x') + ', not void.',

        '### What the caller thinks x means',
        'The same first result names the caller at ' +
          ic('0x411f40') +
          '. Preceding instructions scale ' +
          ic('tile_x') +
          ' by 30 and then add 20: the brick’s screen coordinate ' +
          ic('20 + 30 × tile_x') +
          '.',
        fence(
          'text',
          '0x411f50: MOV EAX, dword ptr [EBP + 0x8]\n0x411f53: ADD EAX, EAX\n0x411f55: LEA EAX, [EAX + EAX*0x2]\n0x411f58: LEA EAX, [EAX + EAX*0x4]\n0x411f5b: ADD EAX, 0x14\n0x411f5e: PUSH EAX\n0x411f5f: CALL 0x00406400\n0x411f64: ADD ESP, 0x4',
        ),
        ic('ADD EAX, EAX') +
          ' doubles the tile. Two ' +
          ic('LEA') +
          ' steps complete the ×30 (2 × 3 × 5). ' +
          ic('ADD EAX, 0x14') +
          ' adds the 20-pixel origin. That value is pushed for ' +
          ic('0x406400') +
          '.',

        '### The doubles behind the addresses',
        'Two ' +
          ic('read_bytes') +
          ' calls decode the constants the floating-point instructions consume. Little-endian IEEE doubles:',
        fence(
          'text',
          '{"address": "0x420068", "length": 16}\n{"address": "0x4210a0", "length": 8}\n\n000000000000f93f → 1.5625\n0000000000407f40 → 500.0\n000000000000f03f → 1.0',
        ),
        '| Address | Value | Used for |\n| --- | --- | --- |\n| `0x420068` | `1.5625` | First multiplication |\n| `0x420070` | `500.0` | Subtraction, centering on screen x = 320 |\n| `0x4210a0` | `1.0` initially | Stored pan scale `dxball_pan_scale` |',
        'Recorded with REA 4.1.0 against the hash-pinned DX-Ball 1.07 target used by the reconstruction. Subtracting 500 after multiplying by 1.5625 puts the zero pan on coordinate 320, the middle of a 640-wide playfield.',

        '## Five steps to C',
        fence(
          'text',
          '0x406409: MOV EAX, dword ptr [EBP + 0x8]\n0x40640c: MOV dword ptr [EBP + -0xc], EAX\n0x40640f: FILD dword ptr [EBP + -0xc]\n0x406415: FMUL double ptr [0x00420068]\n0x40641e: FSUB double ptr [0x00420070]\n0x406427: FMUL double ptr [0x004210a0]\n0x406430: CALL 0x0041678c\n0x40643e: RET',
        ),
        fence(
          'c',
          `DxBallInt dxball_screen_pan(DxBallInt x)
{
    double pan;
    pan = (double)x;
    pan = pan * 1.5625;
    pan = pan - 500.0;
    pan = pan * dxball_pan_scale;
    return (DxBallInt)pan;
}`,
        ),
        '1. Read ' +
          ic('[EBP+8]') +
          ' and ' +
          ic('FILD') +
          ' it. The caller establishes that ' +
          ic('x') +
          ' is a screen coordinate.\n2. ' +
          ic('FMUL') +
          ' by the double at ' +
          ic('0x420068') +
          ', which is 1.5625.\n3. ' +
          ic('FSUB') +
          ' the double at ' +
          ic('0x420070') +
          ', which is 500.0.\n4. ' +
          ic('FMUL') +
          ' the global at ' +
          ic('0x4210a0') +
          '. The maintained source names it ' +
          ic('dxball_pan_scale') +
          '; its initial value is 1.0.\n5. Call ' +
          ic('0x406430') +
          ', which reaches ' +
          ic('__ftol') +
          '. The C casts to ' +
          ic('DxBallInt') +
          '.',
        'The full instruction span, including the stores the excerpt skipped:',
        fence(
          'text',
          '0x406400: PUSH EBP\n0x406401: MOV EBP, ESP\n0x406403: SUB ESP, 0xc\n0x406406: PUSH EBX\n0x406407: PUSH ESI\n0x406408: PUSH EDI\n0x406409: MOV EAX, dword ptr [EBP + 0x8]\n0x40640c: MOV dword ptr [EBP + -0xc], EAX\n0x40640f: FILD dword ptr [EBP + -0xc]\n0x406412: FST double ptr [EBP + -0x8]\n0x406415: FMUL double ptr [0x00420068]\n0x40641b: FST double ptr [EBP + -0x8]\n0x40641e: FSUB double ptr [0x00420070]\n0x406424: FST double ptr [EBP + -0x8]\n0x406427: FMUL double ptr [0x004210a0]\n0x40642d: FST double ptr [EBP + -0x8]\n0x406430: CALL 0x0041678c\n0x406435: JMP 0x0040643a\n0x40643a: POP EDI\n0x40643b: POP ESI\n0x40643c: POP EBX\n0x40643d: LEAVE\n0x40643e: RET',
        ),

        '## Two checks on the recovered function',
        'Behavior: the tests run the original x86 function and compare its return value with the maintained C. They cover every integer position from 0 through 640 at five pan scales (0, 0.5, 1, 20, and −1). That is 641 × 5 = 3,205 cases. At scale 1 the function returns −500 at the left edge, 0 at the center, and 500 at the right edge.',
        'Bytes: the C is compiled with the pinned VC4.0 toolchain. After reviewed relocations and a check of the referenced constants, compiler replay matches the complete function: 63 bytes.',
        'The next audio task in the reconstruction is to feed that integer into the game’s sound backend. The same loop — inspect, recover state, compare with the original — is how particle updates, explosion queues, and bonus generation are being brought across.',
        'To inspect this function on a matching original target, follow the repository’s setup and run:',
        fence(
          'bash',
          'scripts/rea function original/DXBALL.EXE 0x00406400 \\\n  --snapshot .analysis/rea/dxball.snapshot.json --json',
        ),
      ],
      takeaways: [
        'A void pseudocode plus a real stack load is a reason to keep reading instructions.',
        'The caller names the input: 20 + 30 × tile_x.',
        '1.5625 and 500.0 center the pan on screen coordinate 320.',
        '3,205 return-value cases and 63 matching bytes close the loop.',
      ],
    },
    zh: {
      title: 'DX-Ball 的声像计算',
      summary: 'DX-Ball 1.07 的函数 0x406400：砖块的屏幕 x 变成声像值。还原出的 C 与 63 个编译字节一致。',
      lede:
        '维护中的重建正走向这款 1996 年 Windows 游戏的可读 C 版本。REA 一次提供一个函数的指令、调用方和数据读取；仓库负责实现并测试。本页是 0x406400 的声像函数，它把砖块的横坐标变成左右声道的值。上方的图就是从可执行字节到经过核对的 C 的这条路径。',
      body: [
        '## 项目当时的进度',
        '2026 年 10 月 7 日的检查点：55 个可维护的 C 函数，与原始代码比较 45,380 次，33 个函数的编译字节匹配。已经还原的部分包括关卡与资源处理、砖块碰撞、动画、粒子和奖励生成。当前构建提供检查工具和分析库。可玩的球与挡板物理、道具，以及 Windows 集成仍在进行。进度和覆盖率在下方链接的 MIT 仓库里。',

        '## 第一眼反编译错得刚好有用',
        '砖块被击中时，横坐标会传进声音代码。问题是这个屏幕坐标如何变成声像值。',
        fence('text', '用 REA 找出 DX-Ball 如何计算声音的左右位置。解释计算过程并给出代码。'),
        'REA 对 ' +
          ic('0x406400') +
          ' 的第一次结果声明了 ' +
          ic('FUN_00406400(void)') +
          ' 并调用 ' +
          ic('__ftol()') +
          '。同一结果里的指令却有栈上的输入和浮点运算。这个分歧就是继续读下去的理由。',
        fence(
          'c',
          `longlong FUN_00406400(void)
{
  longlong lVar1;
  lVar1 = __ftol();
  return lVar1;
}`,
        ),

        '## 三个问题',
        '### 缺失的输入',
        '让 REA 分析 ' + ic('0x406400') + '，指令和伪代码一起返回。' + ic('[EBP+8]') + ' 就是反编译丢掉的那个整数。',
        fence(
          'text',
          '0x406409: MOV EAX, dword ptr [EBP + 0x8]\n0x40640c: MOV dword ptr [EBP + -0xc], EAX\n0x40640f: FILD dword ptr [EBP + -0xc]',
        ),
        ic('FILD') + ' 把该整数加载到 x87 栈上。因此 C 的参数是真正的 ' + ic('x') + '，不是 void。',

        '### 调用方认为 x 是什么',
        '同一次结果指出调用方在 ' +
          ic('0x411f40') +
          '。前面的指令把 ' +
          ic('tile_x') +
          ' 乘以 30 再加 20：砖块的屏幕坐标 ' +
          ic('20 + 30 × tile_x') +
          '。',
        fence(
          'text',
          '0x411f50: MOV EAX, dword ptr [EBP + 0x8]\n0x411f53: ADD EAX, EAX\n0x411f55: LEA EAX, [EAX + EAX*0x2]\n0x411f58: LEA EAX, [EAX + EAX*0x4]\n0x411f5b: ADD EAX, 0x14\n0x411f5e: PUSH EAX\n0x411f5f: CALL 0x00406400\n0x411f64: ADD ESP, 0x4',
        ),
        ic('ADD EAX, EAX') +
          ' 把格子坐标加倍。两次 ' +
          ic('LEA') +
          ' 凑成 ×30（2 × 3 × 5）。' +
          ic('ADD EAX, 0x14') +
          ' 加上 20 像素的原点。这个值被压栈，交给 ' +
          ic('0x406400') +
          '。',

        '### 地址后面的双精度数',
        '两次 ' + ic('read_bytes') + ' 解出浮点指令用到的常量。小端 IEEE 双精度：',
        fence(
          'text',
          '{"address": "0x420068", "length": 16}\n{"address": "0x4210a0", "length": 8}\n\n000000000000f93f → 1.5625\n0000000000407f40 → 500.0\n000000000000f03f → 1.0',
        ),
        '| 地址 | 数值 | 用途 |\n| --- | --- | --- |\n| `0x420068` | `1.5625` | 第一次乘法 |\n| `0x420070` | `500.0` | 减法，把中心放在屏幕 x = 320 |\n| `0x4210a0` | 初始 `1.0` | 存好的声像缩放 `dxball_pan_scale` |',
        '用 REA 4.1.0 记录，目标是重建仓库用哈希钉住的 DX-Ball 1.07。乘以 1.5625 再减去 500，把零声像放在坐标 320，也就是 640 宽场地的中线。',

        '## 五步到 C',
        fence(
          'text',
          '0x406409: MOV EAX, dword ptr [EBP + 0x8]\n0x40640c: MOV dword ptr [EBP + -0xc], EAX\n0x40640f: FILD dword ptr [EBP + -0xc]\n0x406415: FMUL double ptr [0x00420068]\n0x40641e: FSUB double ptr [0x00420070]\n0x406427: FMUL double ptr [0x004210a0]\n0x406430: CALL 0x0041678c\n0x40643e: RET',
        ),
        fence(
          'c',
          `DxBallInt dxball_screen_pan(DxBallInt x)
{
    double pan;
    pan = (double)x;
    pan = pan * 1.5625;
    pan = pan - 500.0;
    pan = pan * dxball_pan_scale;
    return (DxBallInt)pan;
}`,
        ),
        '1. 读取 ' +
          ic('[EBP+8]') +
          ' 并用 ' +
          ic('FILD') +
          ' 加载。调用方说明 ' +
          ic('x') +
          ' 是屏幕坐标。\n2. ' +
          ic('FMUL') +
          ' 地址 ' +
          ic('0x420068') +
          ' 的双精度数，即 1.5625。\n3. ' +
          ic('FSUB') +
          ' 地址 ' +
          ic('0x420070') +
          ' 的双精度数，即 500.0。\n4. ' +
          ic('FMUL') +
          ' 全局量 ' +
          ic('0x4210a0') +
          '。维护中的源码把它命名为 ' +
          ic('dxball_pan_scale') +
          '；初值是 1.0。\n5. 调用 ' +
          ic('0x406430') +
          '，到达 ' +
          ic('__ftol') +
          '。C 将其转换为 ' +
          ic('DxBallInt') +
          '。',
        '完整指令跨度，包括节选里略去的存储：',
        fence(
          'text',
          '0x406400: PUSH EBP\n0x406401: MOV EBP, ESP\n0x406403: SUB ESP, 0xc\n0x406406: PUSH EBX\n0x406407: PUSH ESI\n0x406408: PUSH EDI\n0x406409: MOV EAX, dword ptr [EBP + 0x8]\n0x40640c: MOV dword ptr [EBP + -0xc], EAX\n0x40640f: FILD dword ptr [EBP + -0xc]\n0x406412: FST double ptr [EBP + -0x8]\n0x406415: FMUL double ptr [0x00420068]\n0x40641b: FST double ptr [EBP + -0x8]\n0x40641e: FSUB double ptr [0x00420070]\n0x406424: FST double ptr [EBP + -0x8]\n0x406427: FMUL double ptr [0x004210a0]\n0x40642d: FST double ptr [EBP + -0x8]\n0x406430: CALL 0x0041678c\n0x406435: JMP 0x0040643a\n0x40643a: POP EDI\n0x40643b: POP ESI\n0x40643c: POP EBX\n0x40643d: LEAVE\n0x40643e: RET',
        ),

        '## 对还原函数的两项检查',
        '行为：测试执行原始 x86 函数，并把返回值与维护中的 C 比较。覆盖 0 到 640 的每个整数位置，以及五个声像缩放（0、0.5、1、20、−1）。即 641 × 5 = 3,205 个用例。缩放为 1 时，左边缘返回 −500，中心返回 0，右边缘返回 500。',
        '字节：C 用钉住的 VC4.0 工具链编译。经过已复查的重定位并核对引用的常量后，编译回放与整个函数一致：63 字节。',
        '重建里下一步的音频工作，是把这个整数送进游戏的声音后端。同一条循环——检查、还原状态、与原版比较——也用于把粒子更新、爆炸队列和奖励生成迁过来。',
        '若要在匹配的原始目标上检查这个函数，先按仓库的说明准备环境，然后运行：',
        fence(
          'bash',
          'scripts/rea function original/DXBALL.EXE 0x00406400 \\\n  --snapshot .analysis/rea/dxball.snapshot.json --json',
        ),
      ],
      takeaways: [
        '伪代码写成 void，指令里却有栈加载，就该继续读指令。',
        '调用方给输入命名：20 + 30 × tile_x。',
        '1.5625 与 500.0 把零声像放在屏幕坐标 320。',
        '3,205 个返回值用例和 63 个匹配字节把闭环收住。',
      ],
    },
  },
  {
    id: 'th04',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Independent rea.run write-up · maintained reconstruction is MIT at N0zoM1z0/th04, checkpoint 0d72e980',
    attributionZh: 'rea.run 独立撰写 · 维护中的重建为 MIT，见 N0zoM1z0/th04，检查点 0d72e980',
    tags: ['game', 'reconstruction', 'community'],
    relation: 'case-study',
    github: {
      url: 'https://github.com/N0zoM1z0/th04',
      stars: 16,
      language: 'Python',
      license: 'MIT',
      updated: '2026-10-10',
    },
    rating: {
      score: 5,
      labelEn: 'Bullet ring checked in bytes',
      labelZh: '环形弹幕已按字节核对',
      qualityEn: 'DOS helper, readable C++, and a compiler match on the bullet-add section.',
      qualityZh: 'DOS 辅助函数、可读 C++，以及弹幕生成段的编译器匹配。',
      evidenceEn: 'Verified DOS MZ image, aim sequence, 2,139 matching bytes.',
      evidenceZh: '已验证的 DOS MZ 映像、瞄准序列、2,139 个匹配字节。',
      limitsEn: 'Historical reconstruction. Not a modern DRM-strip guide.',
      limitsZh: '历史重建。不是现代去 DRM 指南。',
      audienceEn: 'Readers of PC-98 bullet code and the open TH04 reconstruction.',
      audienceZh: '在读 PC-98 弹幕代码和公开 TH04 重建的人。',
    },
    footnotes: [
      { label: 'Community reconstruction · N0zoM1z0/th04 (MIT)', url: 'https://github.com/N0zoM1z0/th04' },
      {
        label: 'Checkpoint 0d72e980',
        url: 'https://github.com/N0zoM1z0/th04/tree/0d72e980',
      },
    ],
    related: [
      { href: '/showcase/dx-ball/', labelEn: 'DX-Ball sound-pan case', labelZh: 'DX-Ball 声像案例' },
    ],
    media: {
      images: [
        {
          src: '/media/showcase-cases/th04/bullet-ring.en.svg',
          srcZh: '/media/showcase-cases/th04/bullet-ring.zh.svg',
          altEn: 'Aimed ring of 16 bullets: index spaced by 16 angle units, plus player direction 40.',
          altZh: '16 颗子弹的自机狙环：下标每隔 16 个角度单位，再加上玩家方向 40。',
        },
      ],
    },
    complianceEn:
      'Historical game reconstruction of mechanics, with compiler checks against a pinned executable. This page does not strip modern DRM or redistribute the original game.',
    complianceZh:
      '对机制做历史游戏重建，并用编译器检查对照钉住的可执行文件。本页不剥离现代 DRM，也不再分发原游戏。',
    en: {
      title: 'How TH04 aims a ring of bullets',
      summary:
        'PC-98 MAIN.EXE helper 0x2cfc8 spaces a ring by (index × 256) / count, then adds an iatan2 aim. 2,139 compiled bytes match.',
      lede:
        'A ring of bullets starts as a short angle calculation. TH04 stores one clockwise turn in 256 angle units. For 16 bullets each index adds 16 units: 0, 16, 32, …, 240. Adding the player’s direction rotates the whole ring together. REA reads that helper from the DOS executable; the MIT reconstruction supplies the maintained C++ and the compiler checks. The figure above draws count 16, player direction 40, and template rotation 0.',
      body: [
        '## The firing template',
        'Elly’s attack asks for an aimed ring whose initial count is 16. The same helper can also face a fixed direction. These lines select the pattern before difficulty tuning:',
        fence(
          'cpp',
          `bullet_template.angle = 0;
bullet_template.group = BG_RING_AIMED;
bullet_template.count = 16;
bullet_template_tune();`,
        ),
        fence(
          'text',
          'Use REA to find how TH04 creates a ring of bullets and aims it at the player. Explain the calculation and show the code.',
        ),
        'The function under inspection is ' +
          ic('bullet_velocity_and_angle_set()') +
          ', which sets each bullet’s velocity and angle. REA returns its instructions, pseudocode, and references. Three slices of that result explain the ring.',

        '## Check the DOS image first',
        'Before trusting addresses, confirm the loaded image is the file you opened.',
        fence(
          'text',
          'open_binary\n{"path": "MAIN.EXE"}\n\ninspect_native_load_image\n{}\n\nstatus: "verified"\nformat: "dos-mz"\nload_segment: 4096\nheader_bytes: 6144\nmodule_bytes: 150114',
        ),
        'Load segment 4096 is ' +
          ic('0x1000') +
          '. Header plus module is 6,144 + 150,114 = 156,258 bytes, the size of this ' +
          ic('MAIN.EXE') +
          '. The check ties code and relocation records to that executable. The path above is shortened for display.',

        '## Space the ring, then aim',
        'Analyze ' +
          ic('0x2cfc8') +
          '. ' +
          ic('SI') +
          ' holds the bullet index. ' +
          ic('SHL AX, 8') +
          ' multiplies by 256. The count is read from ' +
          ic('DS:53AF') +
          ', which the maintained source calls ' +
          ic('bullet_template.count') +
          ', zero-extended, and used as the ' +
          ic('IDIV') +
          ' divisor.',
        fence(
          'text',
          '0x2d0eb: MOV AX, SI\n0x2d0ed: SHL AX, 0x8\n0x2d0f0: MOV DL, byte ptr [0x53af]\n0x2d0f9: IDIV BX',
        ),
        'For count 16, index 0 stays 0, index 1 becomes 16, index 15 becomes 240. The aim excerpt then subtracts origin from player and calls a direction helper:',
        fence(
          'text',
          '0x2d190: SUB AX, word ptr [0x53a6]\n0x2d198: SUB AX, word ptr [0x53a4]\n0x2d19d: CALLF 0x1000:1da8\n0x2d1a2: ADD word ptr [BP + -0x2], AX',
        ),
        fence(
          'cpp',
          `group_angle_offset += iatan2(
  player_pos.cur.y - bullet_template.origin.y,
  player_pos.cur.x - bullet_template.origin.x
);`,
        ),
        'The two subtractions are player-minus-origin coordinates. ' +
          ic('iatan2') +
          ' returns an angle in the same 256-unit circle. Adding it turns every bullet in the ring toward the player. Source names make the addresses readable; the instructions are what REA checks them against.',

        '## Assembly and a readable summary',
        'This listing is the aimed-ring path: index, spacing, aim, template rotation, and the byte store. The full function also handles spreads, stacks, and random patterns. REA reports 503 body bytes in two ranges across a 517-byte span; the instructions below sit in those ranges. File offset of the helper entry, from ' +
          ic('address_to_file_offset') +
          ', is ' +
          ic('0x1e7c8') +
          '.',
        fence(
          'text',
          '0x2cfcf: MOV SI, word ptr [BP + 0x4]\n0x2d0eb: MOV AX, SI\n0x2d0ed: SHL AX, 0x8\n0x2d0f0: MOV DL, byte ptr [0x53af]\n0x2d0f4: MOV DH, 0x0\n0x2d0f6: PUSH DX\n0x2d0f7: CWD\n0x2d0f8: POP BX\n0x2d0f9: IDIV BX\n0x2d0fb: MOV word ptr [BP + -0x2], AX\n0x2d18d: MOV AX, [0x4650]\n0x2d190: SUB AX, word ptr [0x53a6]\n0x2d194: PUSH AX\n0x2d195: MOV AX, [0x464e]\n0x2d198: SUB AX, word ptr [0x53a4]\n0x2d19c: PUSH AX\n0x2d19d: CALLF 0x1000:1da8\n0x2d1a2: ADD word ptr [BP + -0x2], AX\n0x2d1b9: MOV AL, byte ptr [BP + -0x2]\n0x2d1bc: ADD AL, byte ptr [0x53ad]\n0x2d1c0: MOV [0xbcc8], AL',
        ),
        fence(
          'cpp',
          `unsigned char aimed_ring_angle(
    int index, int count,
    int player_direction,
    unsigned char rotation)
{
    int angle = index;
    angle = (angle * 256) / count;
    angle += player_direction;
    angle += rotation;
    return (unsigned char)angle;
}`,
        ),
        '1. The stack argument lands in ' +
          ic('SI') +
          '. In a 16-bullet ring the index runs from 0 through 15.\n2. ' +
          ic('SHL AX, 8') +
          ' then ' +
          ic('IDIV') +
          ' by the count spaces one full turn. Count 16 advances 16 units per index.\n3. Player-minus-origin goes to the direction helper; its ' +
          ic('AX') +
          ' is added to the relative ring angle.\n4. ' +
          ic('ADD AL, [0x53ad]') +
          ' adds the template angle. Elly’s initial template sets it to zero.\n5. The store writes ' +
          ic('AL') +
          ' to the spawn-angle field. Values wrap after 255, matching the unsigned-byte cast. Surrounding code turns that angle plus speed into a velocity.',

        '## Maintained source, not only the summary',
        'The C++ above is a reading aid. Compiler checks apply to the maintained source. Ring spacing in that tree:',
        fence(
          'cpp',
          `angle_offset = (i * BULLET_ANGLE_FULL_TURN) / count;
if (i >= (count - 1)) {
    group_complete = true;
}
goto aim_or_no_aim;`,
        ),
        fence(
          'cpp',
          `aim:
    group_angle_offset += iatan2(
        (player_pos.cur.y - bullet_template.origin.y),
        (player_pos.cur.x - bullet_template.origin.x)
    );

no_aim:
    vector2_near(
        bullet_template.velocity,
        (group_angle_offset + bullet_template.angle),
        speed
    );
    bullet_spawn_angle = (group_angle_offset + bullet_template.angle);`,
        ),
        ic('BULLET_ANGLE_FULL_TURN') +
          ' is 256. The ' +
          ic('no_aim') +
          ' label is how a fixed ring skips ' +
          ic('iatan2') +
          ' and still stores ' +
          ic('bullet_spawn_angle') +
          '.',

        '## 2,139 matching bytes',
        'The project’s recorded checks compile the bullet-generation code, including this helper, with the pinned Turbo C++ 4.0J toolchain. The compiled section matches 2,139 bytes of the original executable. Two separate builds produce the same bytes, and the recorded input hashes match the maintained source at checkpoint ' +
          ic('0d72e980') +
          '. Those checks were recorded on 3 October 2026. They cover the whole bullet-add section, its MAP contribution, and an overlapping relocation.',
        '| Field | Value |\n| --- | --- |\n| Original target | `MAIN.EXE`, 156,258 bytes, DOS MZ |\n| Helper entry | `0x2cfc8` in REA’s loaded image |\n| File offset | `0x1e7c8` |\n| Code inspection | REA 4.1.0 · 7 October 2026 |',
        'Source names and compiler checks come from that checkpoint. Earlier reconstruction notes used the project’s own scripts; this page adds a fresh REA inspection of the same pinned target. The repository manifest pins which game file was studied. Independent pristine-dump provenance is still open, which is a limit of the identity claim, not of the byte match itself.',
        'The figure illustrates the angle math only. Full-game controls, timing, and PC-98 hardware behavior have their own runtime checks in the reconstruction. Beyond bullet generation, that tree builds the game’s four DOS products and covers stages, bosses, rendering, input, menus, endings, and score handling.',
      ],
      takeaways: [
        'One clockwise turn is 256 units; 16 bullets step by 16.',
        'Aim is iatan2 of player-minus-origin, added to the whole ring.',
        'Verify the DOS MZ image before arguing about addresses.',
        '2,139 matching bytes belong to the maintained bullet-add section, not to a DRM bypass.',
      ],
    },
    zh: {
      title: 'TH04 如何把环形弹幕对准玩家',
      summary:
        'PC-98 MAIN.EXE 的辅助函数 0x2cfc8 用 (index × 256) / count 给环等分，再加上 iatan2 瞄准。2,139 个编译字节匹配。',
      lede:
        '一圈弹幕从一段很短的角度计算开始。TH04 用 256 个角度单位表示顺时针一整圈。16 颗子弹时，每个下标增加 16 个单位：0、16、32、……、240。再加上玩家方向，整圈一起旋转。REA 从 DOS 可执行文件读出这个辅助函数；MIT 重建提供维护中的 C++ 和编译器检查。上方的图画的是数量 16、玩家方向 40、模板旋转角 0。',
      body: [
        '## 发射模板',
        'Elly 的攻击请求一个初始数量为 16 的自机狙环。同一个辅助函数也可以朝向固定方向。这几行在难度调整之前选定模式：',
        fence(
          'cpp',
          `bullet_template.angle = 0;
bullet_template.group = BG_RING_AIMED;
bullet_template.count = 16;
bullet_template_tune();`,
        ),
        fence(
          'text',
          '用 REA 找出 TH04 如何生成一圈子弹并把它对准玩家。解释计算并给出代码。',
        ),
        '检查的函数是 ' +
          ic('bullet_velocity_and_angle_set()') +
          '，它设置每颗子弹的速度和角度。REA 返回指令、伪代码和引用。其中三段解释这个环。',

        '## 先核对 DOS 映像',
        '在争论地址之前，先确认加载的映像就是你打开的文件。',
        fence(
          'text',
          'open_binary\n{"path": "MAIN.EXE"}\n\ninspect_native_load_image\n{}\n\nstatus: "verified"\nformat: "dos-mz"\nload_segment: 4096\nheader_bytes: 6144\nmodule_bytes: 150114',
        ),
        '加载段 4096 即 ' +
          ic('0x1000') +
          '。文件头加模块体为 6,144 + 150,114 = 156,258 字节，与这份 ' +
          ic('MAIN.EXE') +
          ' 的大小一致。这项检查把代码和重定位记录钉在该可执行文件上。上面的路径为显示而缩短。',

        '## 先等分，再瞄准',
        '分析 ' +
          ic('0x2cfc8') +
          '。' +
          ic('SI') +
          ' 保存子弹下标。' +
          ic('SHL AX, 8') +
          ' 乘以 256。数量从 ' +
          ic('DS:53AF') +
          ' 读出，维护中的源码称其为 ' +
          ic('bullet_template.count') +
          '，零扩展后作为 ' +
          ic('IDIV') +
          ' 的除数。',
        fence(
          'text',
          '0x2d0eb: MOV AX, SI\n0x2d0ed: SHL AX, 0x8\n0x2d0f0: MOV DL, byte ptr [0x53af]\n0x2d0f9: IDIV BX',
        ),
        '数量为 16 时，下标 0 仍是 0，下标 1 变成 16，下标 15 变成 240。瞄准片段随后用玩家坐标减去原点，并调用方向辅助函数：',
        fence(
          'text',
          '0x2d190: SUB AX, word ptr [0x53a6]\n0x2d198: SUB AX, word ptr [0x53a4]\n0x2d19d: CALLF 0x1000:1da8\n0x2d1a2: ADD word ptr [BP + -0x2], AX',
        ),
        fence(
          'cpp',
          `group_angle_offset += iatan2(
  player_pos.cur.y - bullet_template.origin.y,
  player_pos.cur.x - bullet_template.origin.x
);`,
        ),
        '两次减法是玩家坐标减去原点。' +
          ic('iatan2') +
          ' 在同一个 256 单位的圆上返回角度。把它加上去，环上的每颗子弹都转向玩家。源码名字让地址可读；REA 核对的是这些名字背后的指令。',

        '## 汇编与可读摘要',
        '下面列出的是自机狙路径：下标、等分、瞄准、模板旋转，以及按字节存储。完整函数还处理散射、叠层和随机模式。REA 报告在 517 字节跨度内的两段代码共 503 字节；下面的指令落在这些范围内。辅助函数入口的文件偏移，来自 ' +
          ic('address_to_file_offset') +
          '，是 ' +
          ic('0x1e7c8') +
          '。',
        fence(
          'text',
          '0x2cfcf: MOV SI, word ptr [BP + 0x4]\n0x2d0eb: MOV AX, SI\n0x2d0ed: SHL AX, 0x8\n0x2d0f0: MOV DL, byte ptr [0x53af]\n0x2d0f4: MOV DH, 0x0\n0x2d0f6: PUSH DX\n0x2d0f7: CWD\n0x2d0f8: POP BX\n0x2d0f9: IDIV BX\n0x2d0fb: MOV word ptr [BP + -0x2], AX\n0x2d18d: MOV AX, [0x4650]\n0x2d190: SUB AX, word ptr [0x53a6]\n0x2d194: PUSH AX\n0x2d195: MOV AX, [0x464e]\n0x2d198: SUB AX, word ptr [0x53a4]\n0x2d19c: PUSH AX\n0x2d19d: CALLF 0x1000:1da8\n0x2d1a2: ADD word ptr [BP + -0x2], AX\n0x2d1b9: MOV AL, byte ptr [BP + -0x2]\n0x2d1bc: ADD AL, byte ptr [0x53ad]\n0x2d1c0: MOV [0xbcc8], AL',
        ),
        fence(
          'cpp',
          `unsigned char aimed_ring_angle(
    int index, int count,
    int player_direction,
    unsigned char rotation)
{
    int angle = index;
    angle = (angle * 256) / count;
    angle += player_direction;
    angle += rotation;
    return (unsigned char)angle;
}`,
        ),
        '1. 栈参数进入 ' +
          ic('SI') +
          '。16 颗子弹的环里，下标从 0 到 15。\n2. ' +
          ic('SHL AX, 8') +
          ' 再 ' +
          ic('IDIV') +
          ' 以数量为除数，把一整圈等分。数量 16 时每个下标前进 16 个单位。\n3. 玩家减原点交给方向辅助函数；它的 ' +
          ic('AX') +
          ' 加到相对环形角上。\n4. ' +
          ic('ADD AL, [0x53ad]') +
          ' 加上模板角度。Elly 的初始模板把它设为 0。\n5. 存储指令把 ' +
          ic('AL') +
          ' 写入生成角度字段。超过 255 后回绕，与无符号字节转换一致。周围的代码再把这个角度加上速率变成速度。',

        '## 维护中的源码，不只是摘要',
        '上面的 C++ 是阅读辅助。编译器检查针对的是维护中的源码。那棵树里的环等分：',
        fence(
          'cpp',
          `angle_offset = (i * BULLET_ANGLE_FULL_TURN) / count;
if (i >= (count - 1)) {
    group_complete = true;
}
goto aim_or_no_aim;`,
        ),
        fence(
          'cpp',
          `aim:
    group_angle_offset += iatan2(
        (player_pos.cur.y - bullet_template.origin.y),
        (player_pos.cur.x - bullet_template.origin.x)
    );

no_aim:
    vector2_near(
        bullet_template.velocity,
        (group_angle_offset + bullet_template.angle),
        speed
    );
    bullet_spawn_angle = (group_angle_offset + bullet_template.angle);`,
        ),
        ic('BULLET_ANGLE_FULL_TURN') +
          ' 是 256。' +
          ic('no_aim') +
          ' 标签让固定方向的环跳过 ' +
          ic('iatan2') +
          '，仍然写入 ' +
          ic('bullet_spawn_angle') +
          '。',

        '## 2,139 个匹配字节',
        '项目记录的检查用钉住的 Turbo C++ 4.0J 工具链编译弹幕生成代码，包括这个辅助函数。编译出的段与原可执行文件的 2,139 字节一致。两次独立构建得到相同字节，记录的输入哈希与检查点 ' +
          ic('0d72e980') +
          ' 的维护源码一致。这些检查记录于 2026 年 10 月 3 日。它们覆盖整个弹幕添加段、它在 MAP 文件中的贡献，以及一处重叠的重定位。',
        '| 字段 | 值 |\n| --- | --- |\n| 原始目标 | `MAIN.EXE`，156,258 字节，DOS MZ |\n| 辅助函数入口 | REA 加载映像中的 `0x2cfc8` |\n| 文件偏移 | `0x1e7c8` |\n| 代码检查 | REA 4.1.0 · 2026 年 10 月 7 日 |',
        '源码名字和编译器检查来自该检查点。更早的重建笔记用的是项目自己的脚本；本页补上一次对同一钉住目标的 REA 检查。仓库清单钉住了所研究的游戏文件。独立的原始转储来源仍然开放，这限制的是身份声明，不是字节匹配本身。',
        '图只说明角度数学。完整游戏的操控、时序和 PC-98 硬件行为在重建里另有运行时检查。除了弹幕生成，那棵树还构建游戏的四个 DOS 程序，并覆盖关卡、Boss、渲染、输入、菜单、结局和分数处理。',
      ],
      takeaways: [
        '顺时针一整圈是 256 个单位；16 颗子弹每步 16。',
        '瞄准是玩家减原点的 iatan2，再加到整圈上。',
        '争论地址之前先验证 DOS MZ 映像。',
        '2,139 个匹配字节属于维护中的弹幕添加段，不是 DRM 绕过。',
      ],
    },
  },
  {
    id: 'notion-clipboard',
    date: '2026-10-13',
    status: 'published',
    attributionEn:
      'Independent rea.run write-up · static Electron IPC teaching on a desktop package you are authorized to inspect · not a Notion-affiliated guide',
    attributionZh:
      'rea.run 独立撰写 · 在你获准检查的桌面包上做 Electron IPC 静态教学 · 不是 Notion 官方指南',
    tags: ['electron', 'clipboard', 'ipc', 'authorized'],
    relation: 'case-study',
    rating: {
      score: 4,
      labelEn: 'Clipboard bridge, static only',
      labelZh: '剪贴板桥，仅静态',
      qualityEn: 'Four short excerpts connect the page API to Electron clipboard.write.',
      qualityZh: '四段短节选把页面 API 接到 Electron 的 clipboard.write。',
      evidenceEn: 'Preload positions from REA, then the matching main-process receiver.',
      evidenceZh: 'REA 给出的 preload 位置，以及主进程里匹配的接收函数。',
      limitsEn: 'Teaching inventory. Not a vault dump, not an exploit, not a product affiliation.',
      limitsZh: '教学盘点。不是保险库导出，不是利用，也不是产品隶属关系。',
      audienceEn: 'People mapping IPC in an Electron app they are allowed to open.',
      audienceZh: '在自己获准打开的 Electron 应用里画 IPC 的人。',
    },
    footnotes: [
      {
        label: 'Electron clipboard.write',
        url: 'https://www.electronjs.org/docs/latest/api/clipboard',
      },
    ],
    related: [
      {
        href: '/showcase/notes-first-investigation/',
        labelEn: 'First-session Electron process map',
        labelZh: '首场 Electron 进程地图',
      },
    ],
    media: {
      images: [
        {
          src: '/media/showcase-cases/notion/clipboard-bridge.en.svg',
          srcZh: '/media/showcase-cases/notion/clipboard-bridge.zh.svg',
          altEn: 'Page API, preload invoke, main-process handler, then Electron clipboard.write on notion:clipboard:write.',
          altZh: '页面 API、preload invoke、主进程处理函数，再经 notion:clipboard:write 调用 Electron clipboard.write。',
        },
      ],
    },
    complianceEn:
      'Inspect a desktop package you are authorized to study: your own license, a corporate device policy that allows it, or another explicit permission. This page is a static IPC inventory. It is not a guide to scraping someone else’s workspace or bypassing account controls.',
    complianceZh:
      '只检查你获准研究的桌面包：你自己的许可、允许这样做的公司设备政策，或其它明确授权。本页是静态 IPC 盘点。它不是抓取他人工作区或绕过账户控制的指南。',
    en: {
      title: 'How Notion copies text and HTML',
      summary:
        'Notion Desktop 7.6.1: page API to preload IPC to main-process clipboard.write, plus the HTML marker that keeps block structure.',
      lede:
        'Copy in the desktop app looks like one method on the page. It is four hops. The preload exposes clipboard.write, a wrapper calls ipcRenderer.invoke, the main process registers ipcMain.handle on the same channel, and Electron writes the text and HTML. The channel both sides share is notion:clipboard:write. The figure above is that bridge. Nothing here is a Notion product guide; it is a static reading of a package you are allowed to inspect.',
      body: [
        '## Where a copy goes',
        'The page calls ' +
          ic('clipboard.write') +
          '. In the tab preload that method is a wrapper. The useful question is which channel the wrapper sends, and which function receives it.',
        fence(
          'text',
          'Use REA to trace how Notion copies text and HTML to the system clipboard. Show the code at each step.',
        ),
        'Analyzing the tab preload with REA locates the API exposed to the page and the IPC invoke. Both come back with source ranges in the minified bundle. Positions are line and zero-based column in that bundle, recorded with REA 4.1.0 on Notion Desktop 7.6.1’s ' +
          ic('app.asar') +
          '.',
        fence(
          'text',
          'Exposed page API\napi_key: "__electronApi"\napi_status: "dynamic"\nsource: preload.js:1:22764–22828\n\nRenderer IPC call\noperation: "invoke"\nchannel_expression: "e"\nsource: preload.js:1:6486–6522',
        ),
        'Open those ranges, find the clipboard member inside the assembled API, and read ' +
          ic('invokerInMain') +
          '. Its call site passes ' +
          ic('notion:clipboard:write') +
          '. That string is what to search for in ' +
          ic('main/index.js') +
          '.',

        '## Four short pieces of code',
        'The excerpts below are simplified from the packaged JavaScript: variable names expanded, unrelated members omitted. They are a reading of the package, not a formatted source drop.',
        '### 1. The API the page sees',
        fence(
          'js',
          `const clipboardApi = {
  write: invokerInMain("notion:clipboard:write")
};

// Included in the API exposed through contextBridge:
// window.__electronApi.clipboard`,
        ),
        'This member is the channel name. ' + ic('invokerInMain') + ' is how the request leaves the renderer.',
        '### 2. The preload wrapper',
        fence(
          'js',
          `function invokerInMain(channel) {
  return (...args) => invokeInMainAndReturnResult(channel, ...args);
}

function invokeInMainAndReturnResult(channel, ...args) {
  return ipcRenderer.invoke(channel, ...args);
}`,
        ),
        'The returned function forwards every argument through Electron’s request-and-response IPC. The main process can now be searched for the same channel string.',
        '### 3. How the receiver is registered',
        fence(
          'js',
          `const handleRequestFromRenderer = {
  addListener(channel, handler) {
    ipcMain.handle(channel, handler);
  }
};`,
        ),
        'The main process hides ' +
          ic('ipcMain.handle') +
          ' behind ' +
          ic('addListener') +
          '. Finding the wrapper matters: a search that only looks for ' +
          ic('ipcMain.handle("notion:clipboard:write"') +
          ' can miss the registration.',
        '### 4. The write and the sender check',
        fence(
          'js',
          `handleRequestFromRenderer.addListener(
  "notion:clipboard:write",
  (event, data) =>
    isNotionWebContents(event.sender)
      ? clipboard.write(data)
      : undefined
);`,
        ),
        'This is the destination. ' +
          ic('isNotionWebContents(event.sender)') +
          ' refuses the write when the sender is not a Notion web contents. When the check passes, ' +
          ic('clipboard.write(data)') +
          ' receives the text and HTML the page supplied. The channel plus the two wrappers are the whole bridge.',

        '## How a copied block keeps its structure',
        'The web editor sends text and HTML through ' +
          ic('electronApi.clipboard.write') +
          '. Block structure does not live in the system clipboard as a private format the OS understands. It stays in a local store, and the HTML carries an id that points back at that store.',
        fence(
          'text',
          'Sent to the system clipboard\ntext: "Project notes"\nhtml: "<p>Project notes</p>"\n    + "<!-- notionvc: <copy-id> -->"\n\nSaved locally\nid: <copy-id>\nmimeTypes:\n  text/_notion-blocks-v3-production\n    → structured block data',
        ),
        'On paste, the editor reads the HTML comment, looks up the same id locally, and restores block data when the ids match. A stale entry returns only the plain text and HTML. The id in the snippet is illustrative. The shape was recorded from web assets cached on 13 July 2026, including modules ' +
          ic('747001') +
          ', ' +
          ic('58169') +
          ', ' +
          ic('736810') +
          ', and ' +
          ic('422457') +
          '. Those assets have their own version, separate from desktop 7.6.1. Saved probes executed extracted modules and small harnesses; they describe those probes, not a captured click-through of the desktop UI.',

        '## A second example: Markdown tables',
        'The same block model shows up when Markdown is parsed. Module ' +
          ic('422457') +
          ' turns a table into a header row plus data rows. Saved module tests show that both the page filter and the chat filter keep this table. Paste/import, structured Markdown, and AI/chat parsers have separate entry points and intermediate formats, so a trace of one parser does not automatically describe the others.',
        fence(
          'text',
          'Markdown input\n| A | B |\n| - | - |\n| 1 | 2 |\n\nStructured parser output\ntable · headerRow: true\n  table_row\n    cells: ["A"], ["B"]\n  table_row\n    cells: ["1"], ["2"]',
        ),

        '## A side path: offline SQLite',
        'Copy is not the only IPC handoff worth naming. The renderer requests ' +
          ic('getSqliteMeta') +
          '. The main process creates a message channel, gives one port to the renderer, and the other to a SQLite utility process. Later statement batches and results travel on that port. Following only the first IPC request misses the rest of the conversation. Knowing which process owns the database work is the point of the inventory.',

        '## How to read this page',
        'The clipboard bridge is from Notion Desktop 7.6.1’s ' +
          ic('app.asar') +
          ': tab preload and ' +
          ic('main/index.js') +
          '. REA’s focused preload analysis locates the exposed API and the invoke. Connecting the clipboard member to the receiver is then ordinary reading of those two wrappers. Use it as a map of process boundaries the next time you open an Electron package you are authorized to study — including the shorter process map linked under related cases.',
      ],
      takeaways: [
        'One channel, notion:clipboard:write, joins preload and main.',
        'The sender check sits in front of clipboard.write.',
        'Block structure rides an HTML comment id, not a secret clipboard format.',
        'Static reading of an authorized package. Not a vault export.',
      ],
    },
    zh: {
      title: 'Notion 如何复制文本和 HTML',
      summary:
        'Notion Desktop 7.6.1：页面 API 到 preload IPC，再到主进程的 clipboard.write，以及保住块结构的 HTML 标记。',
      lede:
        '桌面应用里的复制看起来像页面上的一个方法。它实际是四跳。preload 暴露 clipboard.write，包装函数调用 ipcRenderer.invoke，主进程在同一通道上注册 ipcMain.handle，Electron 写入文本和 HTML。两侧共用的通道是 notion:clipboard:write。上方的图就是这座桥。这里不是 Notion 的产品指南，而是对你获准检查的安装包所做的静态阅读。',
      body: [
        '## 一次复制去了哪里',
        '页面调用 ' +
          ic('clipboard.write') +
          '。在标签页 preload 里，这个方法是包装函数。有用的问题是包装函数发出哪条通道，以及哪个函数接收它。',
        fence(
          'text',
          '用 REA 跟踪 Notion 如何把文本和 HTML 复制到系统剪贴板。每一步都给出代码。',
        ),
        '用 REA 分析标签页 preload，可以定位暴露给页面的 API 和 IPC invoke。两者都带回压缩包里的源码范围。位置是该包中的行号和从零开始的列号，用 REA 4.1.0 记录自 Notion Desktop 7.6.1 的 ' +
          ic('app.asar') +
          '。',
        fence(
          'text',
          'Exposed page API\napi_key: "__electronApi"\napi_status: "dynamic"\nsource: preload.js:1:22764–22828\n\nRenderer IPC call\noperation: "invoke"\nchannel_expression: "e"\nsource: preload.js:1:6486–6522',
        ),
        '打开这些范围，在组装好的 API 里找到剪贴板成员，再读 ' +
          ic('invokerInMain') +
          '。调用处传入 ' +
          ic('notion:clipboard:write') +
          '。这个字符串就是到 ' +
          ic('main/index.js') +
          ' 里要搜的名字。',

        '## 四段短代码',
        '下面的节选从打包的 JavaScript 简化而来：变量名已展开，无关成员已省略。它们是对安装包的阅读，不是格式化后的源码投放。',
        '### 1. 页面看到的 API',
        fence(
          'js',
          `const clipboardApi = {
  write: invokerInMain("notion:clipboard:write")
};

// Included in the API exposed through contextBridge:
// window.__electronApi.clipboard`,
        ),
        '这个成员就是通道名。' + ic('invokerInMain') + ' 决定请求如何离开渲染进程。',
        '### 2. preload 的包装函数',
        fence(
          'js',
          `function invokerInMain(channel) {
  return (...args) => invokeInMainAndReturnResult(channel, ...args);
}

function invokeInMainAndReturnResult(channel, ...args) {
  return ipcRenderer.invoke(channel, ...args);
}`,
        ),
        '返回的函数把每个参数经 Electron 的请求／响应 IPC 转发出去。接下来可以在主进程里搜索同一个通道字符串。',
        '### 3. 接收函数如何注册',
        fence(
          'js',
          `const handleRequestFromRenderer = {
  addListener(channel, handler) {
    ipcMain.handle(channel, handler);
  }
};`,
        ),
        '主进程把 ' +
          ic('ipcMain.handle') +
          ' 藏在 ' +
          ic('addListener') +
          ' 后面。找到包装函数是有意义的：如果只搜 ' +
          ic('ipcMain.handle("notion:clipboard:write"') +
          '，会漏掉真正的注册点。',
        '### 4. 写入与发送方检查',
        fence(
          'js',
          `handleRequestFromRenderer.addListener(
  "notion:clipboard:write",
  (event, data) =>
    isNotionWebContents(event.sender)
      ? clipboard.write(data)
      : undefined
);`,
        ),
        '这是终点。' +
          ic('isNotionWebContents(event.sender)') +
          ' 在发送方不是 Notion 网页内容时拒绝写入。检查通过后，' +
          ic('clipboard.write(data)') +
          ' 收到页面提供的文本和 HTML。通道加上两个包装函数，就是整座桥。',

        '## 复制的块如何保住结构',
        '网页编辑器经 ' +
          ic('electronApi.clipboard.write') +
          ' 发送文本和 HTML。块结构并不以操作系统认识的私有格式躺在系统剪贴板里。它留在本地存储中，HTML 里带一个指回该存储的 id。',
        fence(
          'text',
          'Sent to the system clipboard\ntext: "Project notes"\nhtml: "<p>Project notes</p>"\n    + "<!-- notionvc: <copy-id> -->"\n\nSaved locally\nid: <copy-id>\nmimeTypes:\n  text/_notion-blocks-v3-production\n    → structured block data',
        ),
        '粘贴时，编辑器读取 HTML 注释，在本地查找同一个 id，id 一致就恢复块数据。条目过期时只返回纯文本和 HTML。片段里的 id 是示意。这个形状记录自 2026 年 7 月 13 日缓存的网页资源，包括模块 ' +
          ic('747001') +
          '、' +
          ic('58169') +
          '、' +
          ic('736810') +
          ' 和 ' +
          ic('422457') +
          '。这些资源有自己的版本，与桌面版 7.6.1 分开。保存的探针执行的是抽出的模块和小测试架；它们描述的是这些探针，不是桌面界面的一次点击录像。',

        '## 另一个例子：Markdown 表格',
        '解析 Markdown 时会出现同一套块模型。模块 ' +
          ic('422457') +
          ' 把表格变成表头行加数据行。保存的模块测试显示，页面过滤器和聊天过滤器都会保留这张表。粘贴／导入、结构化 Markdown 和 AI／聊天解析器各有入口和中间格式，所以跟踪一个解析器并不能自动描述另外几个。',
        fence(
          'text',
          'Markdown input\n| A | B |\n| - | - |\n| 1 | 2 |\n\nStructured parser output\ntable · headerRow: true\n  table_row\n    cells: ["A"], ["B"]\n  table_row\n    cells: ["1"], ["2"]',
        ),

        '## 一条旁路：离线 SQLite',
        '复制不是唯一值得单独写下来的 IPC 交接。渲染进程请求 ' +
          ic('getSqliteMeta') +
          '。主进程创建消息通道，把一个端口交给渲染进程，另一个交给 SQLite 工具进程。之后的语句批次和结果走这个端口。只跟着第一条 IPC 会漏掉后续对话。知道数据库工作在哪个进程，才是这次盘点的目的。',

        '## 如何阅读本页',
        '剪贴板桥来自 Notion Desktop 7.6.1 的 ' +
          ic('app.asar') +
          '：标签页 preload 和 ' +
          ic('main/index.js') +
          '。REA 对 preload 的专项分析定位暴露的 API 和 invoke。把剪贴板成员接到接收函数，接下来就是阅读这两个包装函数。下一次你打开获准研究的 Electron 包时，可以把它当作进程边界的地图——包括相关案例里那份更短的进程地图。',
      ],
      takeaways: [
        '一条通道 notion:clipboard:write 连接 preload 和主进程。',
        '发送方检查挡在 clipboard.write 前面。',
        '块结构靠 HTML 注释里的 id，不是某种秘密剪贴板格式。',
        '对授权安装包做静态阅读。不是保险库导出。',
      ],
    },
  },
];
