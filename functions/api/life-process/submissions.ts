import {
  LIFE_REPO,
  aggregateStats,
  fetchLifeSubmissions,
  newLifeDeepLink,
} from '../../_lib/lifeProcess';
import { oauthConfigured, readCookie, verifySession } from '../../_lib/session';

interface Env {
  GITHUB_REQUESTS_TOKEN?: string;
  GITHUB_OAUTH_CLIENT_ID?: string;
  GITHUB_OAUTH_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const items = await fetchLifeSubmissions(context.env.GITHUB_REQUESTS_TOKEN);
    return Response.json({
      ok: true,
      repo: LIFE_REPO,
      storage: 'github-issues',
      label: 'life-process',
      can_create_api: Boolean(context.env.GITHUB_REQUESTS_TOKEN),
      items,
      stats: aggregateStats(items),
    });
  } catch (e) {
    return Response.json(
      { ok: false, error: e instanceof Error ? e.message : 'list_failed', items: [], stats: null },
      { status: 502 },
    );
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  if (!oauthConfigured(env)) {
    return Response.json({ ok: false, error: 'oauth_not_configured' }, { status: 401 });
  }
  const raw = readCookie(request);
  const user = raw ? await verifySession(raw, env.SESSION_SECRET!) : null;
  if (!user) {
    return Response.json({ ok: false, error: 'login_required', login: '/api/auth/login' }, { status: 401 });
  }

  let body: {
    title?: string;
    module?: string;
    summary?: string;
    method?: string;
    citations?: string;
    repro?: string;
    limits?: string;
    agent_tools?: string;
    artifact_url?: string;
  } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const title = (body.title || '').trim().slice(0, 120);
  const module = (body.module || 'chronicle').trim();
  const summary = (body.summary || '').trim();
  const method = (body.method || '').trim();
  const citations = (body.citations || '').trim();
  const repro = (body.repro || '').trim();
  const limits = (body.limits || '').trim();
  if (!title || !summary || !method || !citations || !repro || !limits) {
    return Response.json({ ok: false, error: 'required_fields_missing' }, { status: 400 });
  }

  const deepLink = newLifeDeepLink({ title, module });
  if (!env.GITHUB_REQUESTS_TOKEN) {
    return Response.json({ ok: true, mode: 'deep_link', url: deepLink });
  }

  const issueBody = [
    `### Module`,
    module,
    '',
    `### Agent tools`,
    body.agent_tools || '_unspecified_',
    '',
    `### Summary`,
    summary,
    '',
    `### Method`,
    method,
    '',
    `### Citations`,
    citations,
    '',
    `### Repro steps`,
    repro,
    '',
    `### Limits`,
    limits,
    '',
    body.artifact_url ? `### Artifact\n${body.artifact_url}\n` : '',
    `---`,
    `Life Process submission via rea.run by @${user.login}. Public signals only. CC BY 4.0.`,
  ]
    .filter(Boolean)
    .join('\n');

  const labels = ['life-process', 'status:open'];
  if (['signal', 'arch', 'behavior', 'playbook', 'diff-prep', 'chronicle'].includes(module)) {
    labels.push(module);
  }

  const res = await fetch(`https://api.github.com/repos/${LIFE_REPO}/issues`, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${env.GITHUB_REQUESTS_TOKEN}`,
      'User-Agent': 'rea.run-community',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: `[life-process] ${title}`, body: issueBody, labels }),
  });
  if (!res.ok) {
    const text = await res.text();
    return Response.json(
      { ok: false, error: 'create_failed', fallback_url: deepLink, detail: text.slice(0, 200) },
      { status: 502 },
    );
  }
  const created = (await res.json()) as { html_url: string; number: number };
  return Response.json({ ok: true, mode: 'api', number: created.number, url: created.html_url });
};
