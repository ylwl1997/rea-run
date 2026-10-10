export const LIFE_REPO = 'ylwl1997/rea-run';
export const LIFE_LABEL = 'life-process';
export const MODULE_TAGS = ['signal', 'arch', 'behavior', 'playbook', 'diff-prep', 'chronicle'] as const;

export type LifeSubmission = {
  number: number;
  title: string;
  html_url: string;
  state: 'open' | 'closed';
  status: string;
  module: string;
  tags: string[];
  user: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  body_preview: string;
  has_repro: boolean;
  agent_tools: string[];
  citation_count: number;
};

type GhIssue = {
  number: number;
  title: string;
  html_url: string;
  state: 'open' | 'closed';
  user?: { login: string; avatar_url: string } | null;
  labels: Array<string | { name?: string }>;
  created_at: string;
  updated_at: string;
  body?: string | null;
  pull_request?: unknown;
};

function labelNames(labels: GhIssue['labels']): string[] {
  return labels.map((l) => (typeof l === 'string' ? l : l.name || '')).filter(Boolean);
}

function parseTools(body: string): string[] {
  const found: string[] = [];
  const lower = body.toLowerCase();
  const map: Array<[string, RegExp]> = [
    ['Grok Bot', /grok\s*bot|grokbot/i],
    ['Dots', /\bdots\b/i],
    ['Claude', /\bclaude\b|\bcld\b/i],
    ['Codex', /\bcodex\b/i],
    ['Hermes', /\bhermes\b/i],
  ];
  for (const [name, re] of map) {
    if (re.test(body)) found.push(name);
  }
  if (!found.length && /agent|cursor|windsurf|gemini/i.test(lower)) found.push('Other');
  if (!found.length) found.push('Other');
  return found;
}

function hasRepro(body: string): boolean {
  return /复现|repro|reproduce|steps?\s*to\s*reproduce|可复现/i.test(body);
}

function citationCount(body: string): number {
  const urls = body.match(/https?:\/\/[^\s)]+/g) || [];
  return urls.length;
}

export function mapLifeIssue(issue: GhIssue): LifeSubmission | null {
  if (issue.pull_request) return null;
  const tags = labelNames(issue.labels).filter((n) => n !== LIFE_LABEL && !n.startsWith('status:'));
  const module = MODULE_TAGS.find((m) => tags.includes(m)) || 'chronicle';
  const statusLabel =
    labelNames(issue.labels).find((t) => t.startsWith('status:')) ||
    (issue.state === 'closed' ? 'status:done' : 'status:open');
  const body = (issue.body || '').replace(/\r\n/g, '\n').trim();
  return {
    number: issue.number,
    title: issue.title.replace(/^\[life-process\]\s*/i, ''),
    html_url: issue.html_url,
    state: issue.state,
    status: statusLabel.replace(/^status:/, ''),
    module,
    tags,
    user: issue.user?.login || 'unknown',
    avatar_url: issue.user?.avatar_url || '',
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    body_preview: body.slice(0, 240),
    has_repro: hasRepro(body),
    agent_tools: parseTools(body),
    citation_count: citationCount(body),
  };
}

export async function fetchLifeSubmissions(token?: string): Promise<LifeSubmission[]> {
  const url = new URL(`https://api.github.com/repos/${LIFE_REPO}/issues`);
  url.searchParams.set('labels', LIFE_LABEL);
  url.searchParams.set('state', 'all');
  url.searchParams.set('per_page', '100');
  url.searchParams.set('sort', 'updated');
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'rea.run-community',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`github_issues_${res.status}`);
  const issues = (await res.json()) as GhIssue[];
  return issues.map(mapLifeIssue).filter((x): x is LifeSubmission => !!x);
}

export function aggregateStats(items: LifeSubmission[]) {
  const participants = new Set(items.map((i) => i.user));
  const byModule: Record<string, number> = {};
  for (const m of MODULE_TAGS) byModule[m] = 0;
  const toolDist: Record<string, number> = {
    'Grok Bot': 0,
    Dots: 0,
    Claude: 0,
    Codex: 0,
    Hermes: 0,
    Other: 0,
  };
  const daily: Record<string, number> = {};
  let citationSum = 0;
  let reproCount = 0;
  for (const item of items) {
    byModule[item.module] = (byModule[item.module] || 0) + 1;
    for (const tool of item.agent_tools) {
      if (tool in toolDist) toolDist[tool] += 1;
      else toolDist.Other += 1;
    }
    const day = item.created_at.slice(0, 10);
    daily[day] = (daily[day] || 0) + 1;
    citationSum += item.citation_count;
    if (item.has_repro) reproCount += 1;
  }
  const dailySeries = Object.keys(daily)
    .sort()
    .map((date) => ({ date, count: daily[date] }));
  return {
    participants: participants.size,
    submissions: items.length,
    byModule,
    agentTools: toolDist,
    citationsTotal: citationSum,
    reproPct: items.length ? Math.round((reproCount / items.length) * 100) : 0,
    dailySeries,
  };
}

export function newLifeDeepLink(opts: { title?: string; module?: string }): string {
  const u = new URL(`https://github.com/${LIFE_REPO}/issues/new`);
  u.searchParams.set('template', 'life-process.yml');
  const labels = ['life-process', 'status:open'];
  if (opts.module) labels.push(opts.module);
  u.searchParams.set('labels', labels.join(','));
  if (opts.title) u.searchParams.set('title', `[life-process] ${opts.title}`);
  return u.toString();
}
