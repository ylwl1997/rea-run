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
  productLine: string | null;
  license: string | null;
  hosting: string | null;
  summary: string | null;
  tools: number | null;
  tasks: number | null;
  baselines: ModelScore[];
  capture: string | null;
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

export function parseNote(note: string): ParsedNote {
  const raw = note.trim();
  if (!raw) {
    return {
      productLine: null,
      license: null,
      hosting: null,
      summary: null,
      tools: null,
      tasks: null,
      baselines: [],
      capture: null,
      raw,
    };
  }

  let rest = raw;
  // Strip leading "Category · "
  const catSep = rest.indexOf(' · ');
  if (catSep > 0 && catSep < 40) {
    rest = rest.slice(catSep + 3).trim();
  }

  let productLine: string | null = null;
  let license: string | null = null;
  let hosting: string | null = null;
  let summary: string | null = null;
  let tools: number | null = null;
  let tasks: number | null = null;
  const baselines: ModelScore[] = [];
  let capture: string | null = null;

  // Capture sentence at end
  const captureMatch = rest.match(/\.\s*(Captured[^.]+)\.?\s*$/i);
  if (captureMatch) {
    capture = captureMatch[1].replace(/\.$/, '').trim();
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

  // First sentence often: "Gitea 28.1.0 (MIT), self-hosted on synthetic data."
  const firstDot = rest.indexOf('. ');
  const head = firstDot >= 0 ? rest.slice(0, firstDot) : rest;
  const tail = firstDot >= 0 ? rest.slice(firstDot + 2).trim() : '';

  const licMatch = head.match(/\(([^)]+)\)\s*,?\s*(.*)$/);
  if (licMatch) {
    license = licMatch[1].trim();
    const before = head.slice(0, head.indexOf('(')).trim();
    productLine = before || null;
    hosting = licMatch[2].replace(/^,\s*/, '').trim() || null;
  } else {
    productLine = head || null;
  }
  summary = tail || null;

  return { productLine, license, hosting, summary, tools, tasks, baselines, capture, raw };
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
