/**
 * REA → AgentEnv environments mirror catalog (HF collection earakely-scale).
 * Source of truth: ./rea-agentenv-hf-catalog.json — mirror only; no parquet/HAR on Pages.
 */
import catalogJson from './rea-agentenv-hf-catalog.json';
import { pathFor, type Lang } from '../lib/site';

export type EnvCategory =
  | 'Other'
  | 'Developer & infrastructure'
  | 'Data & analytics'
  | 'Work & publishing'
  | 'Photos & media'
  | 'Home'
  | 'Public data APIs';

export type CatalogItemRaw = {
  id: string;
  type: 'space' | 'dataset';
  title: string;
  category: string;
  note: string;
  hf_url: string;
  likes: number | null;
  downloads: number | null;
  lastModified: string;
  shortDescription?: string;
};

export type ModelScore = { model: string; score: string };

export type ParsedNote = {
  /** e.g. "Gitea 28.1.0" */
  productLine: string | null;
  /** e.g. "Gitea" (product without trailing version) */
  productName: string | null;
  /** e.g. "28.1.0" */
  version: string | null;
  license: string | null;
  hosting: string | null;
  /** One-line English scenario from HF note */
  summary: string | null;
  tools: number | null;
  tasks: number | null;
  baselines: ModelScore[];
  /** Raw capture sentence fragment from HF note */
  capture: string | null;
  /** Normalized: 'HAR' | 'capture-browser-scenario' | null */
  captureKind: 'HAR' | 'capture-browser-scenario' | null;
  raw: string;
};

export type EnvironmentEntry = {
  id: string;
  slug: string;
  type: 'space' | 'dataset';
  title: string;
  category: EnvCategory;
  note: string;
  hfUrl: string;
  likes: number | null;
  downloads: number | null;
  lastModified: string;
  shortDescription?: string;
  parsed: ParsedNote;
};

export const AGENTENV = {
  collection: 'https://huggingface.co/collections/earakely-scale/rea-environments-on-agentenv',
  space: 'https://huggingface.co/spaces/earakely-scale/rea-environments',
  /** On-site thick post path — pass through pathFor / agentenvBlogHref. */
  blogPath: '/blog/agentenv-rea/',
  /** Scale Labs original — Source/attribution only, never primary CTA. */
  blogSource: 'https://labs.scale.com/blog/introducing-agentenv',
  publisher: 'earakely-scale (Scale Labs)',
  title: (catalogJson as { title: string }).title,
  description: (catalogJson as { description: string }).description,
  attribution: (catalogJson as { attribution: string }).attribution,
} as const;

/** Language-matched on-site AgentEnv intro (primary CTA). */
export function agentenvBlogHref(lang: Lang): string {
  return pathFor(lang, AGENTENV.blogPath);
}

export const CATEGORY_ORDER: EnvCategory[] = [
  'Other',
  'Developer & infrastructure',
  'Data & analytics',
  'Work & publishing',
  'Photos & media',
  'Home',
  'Public data APIs',
];

export const CATEGORY_LABEL: Record<EnvCategory, { en: string; zh: string }> = {
  Other: { en: 'Start here / Other', zh: '入门／其它' },
  'Developer & infrastructure': { en: 'Developer & infrastructure', zh: '开发与基础设施' },
  'Data & analytics': { en: 'Data & analytics', zh: '数据与分析' },
  'Work & publishing': { en: 'Work & publishing', zh: '协作与发布' },
  'Photos & media': { en: 'Photos & media', zh: '相册与媒体' },
  Home: { en: 'Home', zh: '家庭' },
  'Public data APIs': { en: 'Public data APIs', zh: '公共数据 API' },
};

function asCategory(c: string): EnvCategory {
  if ((CATEGORY_ORDER as string[]).includes(c)) return c as EnvCategory;
  return 'Other';
}

/** Slug from HF short name, e.g. earakely-scale/GiteaEnv-REA → GiteaEnv-REA */
export function slugFromId(id: string, title: string): string {
  const short = id.includes('/') ? id.split('/').pop()! : id;
  return (short || title).replace(/[^A-Za-z0-9._-]+/g, '-');
}

/** Balanced paren spans in a string (start, end inclusive of parens content indices). */
function balancedParenSpans(s: string): { start: number; end: number }[] {
  const spans: { start: number; end: number }[] = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === '(') {
      let depth = 0;
      let closed = false;
      for (let j = i; j < s.length; j++) {
        if (s[j] === '(') depth++;
        else if (s[j] === ')') {
          depth--;
          if (depth === 0) {
            spans.push({ start: i, end: j });
            i = j + 1;
            closed = true;
            break;
          }
        }
      }
      if (!closed) break;
    } else {
      i++;
    }
  }
  return spans;
}

/**
 * Split "Product Version (License…), hosting…" using the rightmost paren group
 * that is followed by a comma (handles nested licenses + LoC "(photos)" in name).
 */
function splitProductLicenseHosting(head: string): {
  productLine: string | null;
  license: string | null;
  hosting: string | null;
} {
  const spans = balancedParenSpans(head);
  for (let k = spans.length - 1; k >= 0; k--) {
    const { start, end } = spans[k];
    const after = head.slice(end + 1).trimStart();
    if (after.startsWith(',')) {
      return {
        productLine: head.slice(0, start).trim() || null,
        license: head.slice(start + 1, end).trim() || null,
        hosting: after.slice(1).trim() || null,
      };
    }
  }
  // No license-style paren+comma — treat whole head as product
  return { productLine: head.trim() || null, license: null, hosting: null };
}


/** Index of first ". " outside parentheses (avoids splitting on "U.S. public domain"). */
function firstSentenceBreak(s: string): number {
  let depth = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const ch = s[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth = Math.max(0, depth - 1);
    else if (depth === 0 && ch === '.' && s[i + 1] === ' ') return i;
  }
  return -1;
}

/** Strip trailing version token from product line → display product name. */
export function productNameFromLine(productLine: string | null): string | null {
  if (!productLine) return null;
  const stripped = productLine.replace(/\s+(?:v?\d+(?:[./]v?\d+)*)$/i, '').trim();
  return stripped || productLine;
}

export function versionFromLine(productLine: string | null, productName: string | null): string | null {
  if (!productLine || !productName) return null;
  if (productLine === productName) return null;
  const rest = productLine.slice(productName.length).trim();
  return rest || null;
}

function normalizeCapture(capture: string | null): {
  capture: string | null;
  captureKind: ParsedNote['captureKind'];
} {
  if (!capture) return { capture: null, captureKind: null };
  const c = capture.trim();
  if (/HAR/i.test(c)) return { capture: c, captureKind: 'HAR' };
  if (/capture-browser-scenario/i.test(c)) return { capture: c, captureKind: 'capture-browser-scenario' };
  return { capture: c, captureKind: null };
}

export function parseNote(note: string): ParsedNote {
  const raw = note.trim();
  if (!raw) {
    return {
      productLine: null,
      productName: null,
      version: null,
      license: null,
      hosting: null,
      summary: null,
      tools: null,
      tasks: null,
      baselines: [],
      capture: null,
      captureKind: null,
      raw,
    };
  }

  let rest = raw;
  // Strip leading "Category · "
  const catSep = rest.indexOf(' · ');
  if (catSep > 0 && catSep < 40) {
    rest = rest.slice(catSep + 3).trim();
  }

  let tools: number | null = null;
  let tasks: number | null = null;
  const baselines: ModelScore[] = [];
  let captureRaw: string | null = null;

  // Capture sentence at end
  const captureMatch = rest.match(/\.\s*(Captured[^.]+)\.?\s*$/i);
  if (captureMatch) {
    captureRaw = captureMatch[1].replace(/\.$/, '').trim();
    rest = rest.slice(0, captureMatch.index! + 1).trim();
  }

  // Tools / tasks / baselines: allow dots in model names (e.g. GLM-5.3-Flash).
  const metricsMatch = rest.match(
    /(\d+)\s+tools?,\s*(\d+)\s+retrieval tasks?;\s*(.+?)\.?\s*$/i,
  );
  if (metricsMatch) {
    tools = Number(metricsMatch[1]);
    tasks = Number(metricsMatch[2]);
    const scoreBlob = metricsMatch[3].trim().replace(/\.$/, '');
    for (const part of scoreBlob.split(',')) {
      const m = part.trim().match(/^(.+?)\s+(\d+\/\d+)\s*$/);
      if (m) baselines.push({ model: m[1].trim(), score: m[2] });
    }
    rest = rest.slice(0, metricsMatch.index!).trim().replace(/[.;]\s*$/, '');
  }

  // First sentence = product/license/hosting; rest = scenario summary.
  // Prefer split after license+hosting block when present.
  // Do not split on periods inside parentheses (e.g. "U.S. public domain").
  let productLine: string | null = null;
  let license: string | null = null;
  let hosting: string | null = null;
  let summary: string | null = null;

  const firstDot = firstSentenceBreak(rest);
  const head = firstDot >= 0 ? rest.slice(0, firstDot) : rest;
  const tail = firstDot >= 0 ? rest.slice(firstDot + 2).trim() : '';

  const split = splitProductLicenseHosting(head);
  productLine = split.productLine;
  license = split.license;
  hosting = split.hosting;
  summary = tail || null;

  // Space / gallery notes: no license structure — keep whole note as summary
  if (!license && !tools && !productLine?.match(/\d/)) {
    // "Start here: …" style
    if (/^Start here/i.test(raw) || !split.license) {
      if (!summary && productLine && productLine.length > 60) {
        summary = productLine;
        productLine = null;
      }
    }
  }

  const productName = productNameFromLine(productLine);
  const version = versionFromLine(productLine, productName);
  const { capture, captureKind } = normalizeCapture(captureRaw);

  return {
    productLine,
    productName,
    version,
    license,
    hosting,
    summary,
    tools,
    tasks,
    baselines,
    capture,
    captureKind,
    raw,
  };
}

/**
 * Chinese one-line product scenarios (not machine paste of EN HF note).
 * Dataset ids / Env names stay English; scenario is real Chinese.
 */
export const ZH_SCENARIO: Record<string, string> = {
  'rea-environments':
    '入门画廊：了解这些 REA → AgentEnv 回放环境、基线结果与可筛选目录。',
  'GiteaEnv-REA': '自托管 Git 托管、议题与代码评审。',
  'GrafanaEnv-REA': '可观测性仪表盘、告警与数据源。',
  'SentryEnv-REA': '错误追踪与议题分诊（应用监控）。',
  'VaultEnv-REA': '密钥与身份管理（配置库、策略与身份）。',
  'NomadEnv-REA': '工作负载编排（集群调度）。',
  'RedpandaConsoleEnv-REA': '事件流（兼容 Kafka 的主题、消费组与 Schema Registry）。',
  'AirbyteEnv-REA': '数据集成流水线（ELT 连接器、连接与同步任务）。',
  'N8nEnv-REA': '工作流自动化。',
  'KeycloakEnv-REA': '身份与访问管理（IAM）。',
  'HealthchecksEnv-REA': '定时任务与心跳监控。',
  'MailpitEnv-REA': '邮件测试（SMTP 捕获与 Web 邮箱）。',
  'NetBoxEnv-REA': '网络事实源（DCIM 与 IPAM）。',
  'PocketBaseEnv-REA': '后端即服务数据库与管理控制台。',
  'MetabaseEnv-REA': '商业智能与仪表盘。',
  'UmamiEnv-REA': '注重隐私的网站分析。',
  'NocoDBEnv-REA': '无代码数据库（表格风格）。',
  'BaserowEnv-REA': '无代码数据库（表格风格）。',
  'GristEnv-REA': '表格数据库（工作区、文档、表与记录）。',
  'DirectusEnv-REA': '无头 CMS 与数据平台。',
  'MattermostEnv-REA': '团队聊天（频道、帖子与团队）。',
  'GhostEnv-REA': '发布与通讯（CMS）。',
  'BookStackEnv-REA': '团队维基与文档（书架、书、章节与页面）。',
  'ListmonkEnv-REA': '通讯与邮件列表。',
  'VikunjaEnv-REA': '任务与项目管理（待办与看板）。',
  'EspoCRMEnv-REA': '客户关系管理（CRM）。',
  'PaperlessNgxEnv-REA': '文档管理与归档。',
  'MemosEnv-REA': '笔记与微博式备忘录。',
  'LinkdingEnv-REA': '自托管书签管理。',
  'ShlinkEnv-REA': '短链与访问分析。',
  'MinifluxEnv-REA': '订阅阅读器（RSS／Atom）。',
  'WordPressEnv-REA': '博客与内容管理（CMS）。',
  'PhotoPrismEnv-REA': '相册与媒体管理。',
  'LycheeEnv-REA': '照片管理（自托管相册）。',
  'PinryEnv-REA': '视觉图钉板（图墙书签、看板与标签）。',
  'ImmichEnv-REA': '自托管照片与视频库。',
  'JellyfinEnv-REA': '媒体服务器与个人媒体库。',
  'NavidromeEnv-REA': '自托管音乐流媒体服务。',
  'KomgaEnv-REA': '漫画与电子书库服务。',
  'SonarrEnv-REA': '电视剧库管理（配置、自定义格式、标签与连接）。',
  'HomeboxEnv-REA': '家庭库存与资产管理。',
  'GrocyEnv-REA': '家庭杂货、库存与家务（家用 ERP）。',
  'MealieEnv-REA': '食谱管理与膳食计划。',
  'TandoorRecipesEnv-REA': '食谱管理与膳食计划。',
  'ArticCollectionEnv-REA': '美术馆藏品（作品、艺术家、展厅与展览）。',
  'LocPhotosEnv-REA': '历史摄影藏品（国会图书馆公共 API）。',
  'OpenFdaEnv-REA': '药品、器械与食品召回及产品目录（美国政府公共 API）。',
  'UsgsEarthquakesEnv-REA': '地震目录与实时地震事件馈送（地球科学）。',
  'NoaaTidesEnv-REA': '沿岸水位、潮汐预报与潮站元数据（公共数据 API）。',
  'FederalRegisterEnv-REA': '美国联邦规则、拟议规则、通知与总统文件。',
  'TreasuryFiscalDataEnv-REA': '联邦财政（公债、汇率、国债报表、拍卖与机构应收）。',
};

/** Fallback ZH scenario when slug missing: category-templated, still real Chinese. */
function zhScenarioFallback(e: EnvironmentEntry): string {
  const name = e.parsed.productName || e.title;
  const cat = CATEGORY_LABEL[e.category].zh;
  if (e.type === 'space') {
    return 'REA → AgentEnv 回放环境入门画廊与合集入口。';
  }
  return `${name} 场景的 AgentEnv 回放环境（分类：${cat}）。数字与许可以 HF note 快照为准。`;
}

export function scenarioFor(e: EnvironmentEntry, lang: Lang): string {
  if (lang === 'zh') {
    return ZH_SCENARIO[e.slug] || zhScenarioFallback(e);
  }
  return (
    e.parsed.summary ||
    e.shortDescription ||
    (e.type === 'space'
      ? 'Start-here gallery for REA-built AgentEnv replay environments.'
      : `${e.parsed.productName || e.title} AgentEnv replay environment.`)
  );
}

function ensureSentence(s: string): string {
  const t = s.trim();
  if (!t) return t;
  return /[.。！？!?]$/.test(t) ? t : `${t}.`;
}

export function leadFor(e: EnvironmentEntry, lang: Lang): string {
  const scenario = ensureSentence(scenarioFor(e, lang));
  const product = e.parsed.productName || e.title;
  if (e.type === 'space') {
    return lang === 'zh'
      ? `${e.title} 是 REA → AgentEnv 回放环境的入门 HF Space：${scenario} 本站只做教学镜像，不托管运行时或 parquet／HAR。`
      : `${e.title} is the start-here HF Space for REA → AgentEnv replay environments: ${scenario} This page is a teaching mirror — we do not host the runtime or parquet/HAR.`;
  }
  if (lang === 'zh') {
    return `${e.title} 是面向 ${product} 的 AgentEnv 回放环境：${scenario} 由 REA 录制、以 Hugging Face 数据集发布，经 MCP 工具练习——本页是 rea.run 上的教学镜像，不是运行时。`;
  }
  return `${e.title} is an AgentEnv replay environment for ${product}: ${scenario} Built with REA, published as a Hugging Face dataset, practiced via MCP tools — this page is a teaching mirror on rea.run, not the runtime.`;
}

export function pageTitleFor(e: EnvironmentEntry, lang: Lang): string {
  const product = e.parsed.productName || e.title;
  if (lang === 'zh') {
    return `${e.title} — ${product} AgentEnv 回放环境｜REA MCP | rea.run`;
  }
  return `${e.title} — ${product} AgentEnv replay environment | REA MCP | rea.run`;
}

export function captureLabel(kind: ParsedNote['captureKind'], lang: Lang): string {
  if (kind === 'HAR') return lang === 'zh' ? 'HAR（HTTP 归档）' : 'HAR (HTTP Archive)';
  if (kind === 'capture-browser-scenario') {
    return lang === 'zh'
      ? 'REA capture-browser-scenario'
      : "REA's capture-browser-scenario";
  }
  return lang === 'zh' ? '未在 note 中写明' : 'Not stated in HF note';
}

const rawItems = (catalogJson as { items: CatalogItemRaw[] }).items;

export const ENVIRONMENTS: EnvironmentEntry[] = rawItems.map((item) => ({
  id: item.id,
  slug: slugFromId(item.id, item.title),
  type: item.type,
  title: item.title,
  category: asCategory(item.category),
  note: item.note,
  hfUrl: item.hf_url,
  likes: item.likes,
  downloads: item.downloads,
  lastModified: item.lastModified,
  shortDescription: item.shortDescription,
  parsed: parseNote(item.note),
}));

export function getEnvironment(slug: string): EnvironmentEntry | undefined {
  return ENVIRONMENTS.find((e) => e.slug === slug);
}

export function environmentsByCategory(category?: EnvCategory | 'all'): EnvironmentEntry[] {
  if (!category || category === 'all') return ENVIRONMENTS;
  return ENVIRONMENTS.filter((e) => e.category === category);
}

export function categoryCounts(): { category: EnvCategory; count: number }[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    count: ENVIRONMENTS.filter((e) => e.category === category).length,
  })).filter((c) => c.count > 0);
}

export function formatLastModified(iso: string, lang: 'en' | 'zh'): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Shanghai',
    });
  } catch {
    return iso;
  }
}

export const CHECKLIST = {
  en: [
    'Authorize the target (own / OSS / written permission / approved lab).',
    'Capture the browser session with REA (HAR or capture-browser-scenario).',
    'Replay as AgentEnv MCP tools on Scale AgentEnv / the HF space — not on rea.run.',
  ],
  zh: [
    '先取得目标授权（自有／开源／书面许可／合规实验室）。',
    '用 REA 录制浏览器会话（HAR 或 capture-browser-scenario）。',
    '在 Scale AgentEnv／HF Space 上以 MCP 工具回放——不是在 rea.run 上跑。',
  ],
} as const;

/** Index page FAQ (EN + ZH). */
export const INDEX_FAQ: { q: { en: string; zh: string }; a: { en: string; zh: string } }[] = [
  {
    q: {
      en: 'What is a dataset environment?',
      zh: '什么是数据集环境（dataset env）？',
    },
    a: {
      en: 'A Hugging Face dataset that packages a REA-recorded app or API session as an AgentEnv replay environment: MCP tools, retrieval tasks, and published baselines. Numbers on this site are cited from the HF note / catalog snapshot — parquet and HAR stay on HF.',
      zh: '指 Hugging Face 上的数据集：把 REA 录制的应用或 API 会话打包成 AgentEnv 回放环境，含 MCP 工具、检索任务与已发布基线。本站数字引自 HF note／目录快照——parquet 与 HAR 仍留在 HF。',
    },
  },
  {
    q: {
      en: 'Why do “Open” links go to Hugging Face?',
      zh: '为什么「打开」要跳到 Hugging Face？',
    },
    a: {
      en: 'rea.run is a teaching mirror catalog. Large capture files and the AgentEnv runtime live on Hugging Face / Scale AgentEnv. We deep-link out so you always get the authoritative dataset.',
      zh: 'rea.run 是教学镜像目录。大型捕获文件与 AgentEnv 运行时在 Hugging Face／Scale AgentEnv。外链是为了让你始终打开权威数据集。',
    },
  },
  {
    q: {
      en: 'Is this an official Scale product page?',
      zh: '这是 Scale 官方产品页吗？',
    },
    a: {
      en: 'No. Environments are recorded and published on HF by earakely-scale (Scale Labs) using REA. rea.run is an independent community mirror — not affiliated with Scale Labs. Primary on-site explainer: Introducing AgentEnv.',
      zh: '不是。环境由 earakely-scale（Scale Labs）用 REA 在 HF 录制并发布。rea.run 是独立社区镜像，与 Scale Labs 无关联。站内主说明见《AgentEnv 介绍》。',
    },
  },
  {
    q: {
      en: 'How do I record my own environment?',
      zh: '如何录制自己的环境？',
    },
    a: {
      en: 'Authorize a target, capture with REA (HAR or capture-browser-scenario), then replay via AgentEnv MCP tools on Scale / HF — not on rea.run. See the checklist on this page and the install guide.',
      zh: '先取得目标授权，用 REA 捕获（HAR 或 capture-browser-scenario），再在 Scale／HF 上通过 AgentEnv MCP 工具回放——不是在 rea.run 上跑。见本页清单与安装指南。',
    },
  },
  {
    q: {
      en: 'Do you host parquet, HAR, or the RL runtime?',
      zh: '你们托管 parquet、HAR 或 RL 运行时吗？',
    },
    a: {
      en: 'No. Pages never ship parquet/HAR. Training and eval run on AgentEnv + Hugging Face. See the hosting FAQ.',
      zh: '不托管。Pages 从不附带 parquet／HAR。训练与评测在 AgentEnv + Hugging Face 上进行。见托管 FAQ。',
    },
  },
];

export const INDEX_INTRO = {
  en: {
    h1: 'REA → AgentEnv environments',
    lede: `This catalog mirrors REA-built AgentEnv replay environments published on Hugging Face by ${AGENTENV.publisher}. Each dataset env turns an authorized browser or API session into MCP tools plus retrieval tasks with published model baselines. rea.run is a community teaching mirror — not affiliated with Scale — and does not host parquet/HAR files or the RL runtime.`,
    bullets: [
      'Capture with REA → publish as HF dataset → practice as AgentEnv MCP tools.',
      'Numbers (tools, tasks, baselines, license, version) are cited from the HF note / catalog snapshot.',
      'Use the table filters by category; open HF for the authoritative files.',
    ],
  },
  zh: {
    h1: 'REA → AgentEnv 环境',
    lede: `本目录镜像 ${AGENTENV.publisher} 用 REA 在 Hugging Face 发布的 AgentEnv 回放环境。每个数据集环境把已授权的浏览器或 API 会话变成 MCP 工具与检索任务，并附带已发布的模型基线。rea.run 是社区教学镜像——与 Scale 无关联——不托管 parquet／HAR 或 RL 运行时。`,
    bullets: [
      '用 REA 录制 → 发布为 HF 数据集 → 以 AgentEnv MCP 工具练习。',
      '工具数、任务数、基线、许可与版本等数字引自 HF note／目录快照。',
      '按分类筛选表格；打开 HF 获取权威文件。',
    ],
  },
} as const;
