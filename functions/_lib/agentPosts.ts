export const AGENT_POSTS_REPO = 'ylwl1997/rea-run';
export const AGENT_SHARE_LABEL = 'agent-share';

export type AgentPost = {
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

export function mapAgentIssue(issue: GhIssue): AgentPost | null {
  if (issue.pull_request) return null;
  const tags = labelNames(issue.labels).filter((n) => n !== AGENT_SHARE_LABEL);
  const statusLabel =
    tags.find((t) => t.startsWith('status:')) ||
    (issue.state === 'closed' ? 'status:done' : 'status:open');
  const body = (issue.body || '').replace(/\r\n/g, '\n').trim();
  return {
    number: issue.number,
    title: issue.title.replace(/^\[agent-share\]\s*/i, ''),
    html_url: issue.html_url,
    state: issue.state,
    status: statusLabel.replace(/^status:/, ''),
    tags: tags.filter((t) => !t.startsWith('status:')),
    user: issue.user?.login || 'unknown',
    avatar_url: issue.user?.avatar_url || '',
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    body_preview: body.slice(0, 240),
  };
}

export async function fetchAgentPosts(token?: string): Promise<AgentPost[]> {
  const url = new URL(`https://api.github.com/repos/${AGENT_POSTS_REPO}/issues`);
  url.searchParams.set('labels', AGENT_SHARE_LABEL);
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
  if (!res.ok) throw new Error(`github_issues_${res.status}`);
  const issues = (await res.json()) as GhIssue[];
  return issues.map(mapAgentIssue).filter((x): x is AgentPost => !!x);
}

export function newAgentShareDeepLink(opts: { title?: string }): string {
  const u = new URL(`https://github.com/${AGENT_POSTS_REPO}/issues/new`);
  u.searchParams.set('template', 'agent-share.yml');
  u.searchParams.set('labels', 'agent-share,status:open');
  if (opts.title) u.searchParams.set('title', `[agent-share] ${opts.title}`);
  return u.toString();
}
