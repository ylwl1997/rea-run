export const REQUESTS_REPO = 'ylwl1997/rea-run';
export const REQUEST_LABEL = 'request';

export type PlazaRequest = {
  number: number;
  title: string;
  html_url: string;
  state: 'open' | 'closed';
  status: string;
  tags: string[];
  user: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  body_preview: string;
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
  return labels
    .map((l) => (typeof l === 'string' ? l : l.name || ''))
    .filter(Boolean);
}

export function mapIssue(issue: GhIssue): PlazaRequest | null {
  if (issue.pull_request) return null;
  const tags = labelNames(issue.labels).filter((n) => n !== REQUEST_LABEL);
  const statusLabel = tags.find((t) => t.startsWith('status:')) || (issue.state === 'closed' ? 'status:done' : 'status:open');
  const status = statusLabel.replace(/^status:/, '');
  const body = (issue.body || '').replace(/\r\n/g, '\n').trim();
  return {
    number: issue.number,
    title: issue.title.replace(/^\[request\]\s*/i, ''),
    html_url: issue.html_url,
    state: issue.state,
    status,
    tags: tags.filter((t) => !t.startsWith('status:')),
    user: issue.user?.login || 'unknown',
    avatar_url: issue.user?.avatar_url || '',
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    body_preview: body.slice(0, 220),
  };
}

export async function fetchRequestIssues(token?: string): Promise<PlazaRequest[]> {
  const url = new URL(`https://api.github.com/repos/${REQUESTS_REPO}/issues`);
  url.searchParams.set('labels', REQUEST_LABEL);
  url.searchParams.set('state', 'all');
  url.searchParams.set('per_page', '50');
  url.searchParams.set('sort', 'updated');
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'rea.run-community',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url.toString(), { headers });
  if (!res.ok) {
    throw new Error(`github_issues_${res.status}`);
  }
  const issues = (await res.json()) as GhIssue[];
  return issues.map(mapIssue).filter((x): x is PlazaRequest => !!x);
}

export function newIssueDeepLink(opts: {
  title?: string;
  kind?: string;
  details?: string;
}): string {
  const u = new URL(`https://github.com/${REQUESTS_REPO}/issues/new`);
  u.searchParams.set('template', 'submit-request.yml');
  u.searchParams.set('labels', 'request,status:open');
  if (opts.title) u.searchParams.set('title', `[request] ${opts.title}`);
  // GitHub issue forms don't accept body query well; title/labels help
  return u.toString();
}
