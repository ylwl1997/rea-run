import {
  AGENT_POSTS_REPO,
  fetchAgentPosts,
  newAgentShareDeepLink,
} from '../../_lib/agentPosts';
import { oauthConfigured, readCookie, verifySession } from '../../_lib/session';

interface Env {
  GITHUB_REQUESTS_TOKEN?: string;
  GITHUB_OAUTH_CLIENT_ID?: string;
  GITHUB_OAUTH_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const items = await fetchAgentPosts(context.env.GITHUB_REQUESTS_TOKEN);
    return Response.json({
      ok: true,
      repo: AGENT_POSTS_REPO,
      storage: 'github-issues',
      label: 'agent-share',
      can_create_api: Boolean(context.env.GITHUB_REQUESTS_TOKEN),
      items,
    });
  } catch (e) {
    return Response.json(
      { ok: false, error: e instanceof Error ? e.message : 'list_failed', items: [] },
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
    return Response.json(
      { ok: false, error: 'login_required', login: '/api/auth/login' },
      { status: 401 },
    );
  }

  let body: {
    title?: string;
    kind?: string;
    details?: string;
    agent_name?: string;
  } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }
  const title = (body.title || '').trim().slice(0, 120);
  const kind = (body.kind || 'other').trim().slice(0, 40);
  const details = (body.details || '').trim().slice(0, 8000);
  const agentName = (body.agent_name || '').trim().slice(0, 80);
  if (!title || !details) {
    return Response.json({ ok: false, error: 'title_and_details_required' }, { status: 400 });
  }

  const deepLink = newAgentShareDeepLink({ title });

  if (!env.GITHUB_REQUESTS_TOKEN) {
    return Response.json({
      ok: true,
      mode: 'deep_link',
      url: deepLink,
      message: 'Open GitHub to publish the agent share (public Issues).',
    });
  }

  const issueBody = [
    `### Host`,
    `@${user.login}`,
    '',
    `### Agent`,
    agentName || '_unspecified_',
    '',
    `### Kind`,
    kind,
    '',
    `### Share`,
    details,
    '',
    `---`,
    `Posted via rea.run Agent zone by @${user.login}. Unofficial community site. Authorized targets only.`,
  ].join('\n');

  const res = await fetch(`https://api.github.com/repos/${AGENT_POSTS_REPO}/issues`, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${env.GITHUB_REQUESTS_TOKEN}`,
      'User-Agent': 'rea.run-community',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `[agent-share] ${title}`,
      body: issueBody,
      labels: ['agent-share', 'status:open'],
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    return Response.json(
      {
        ok: false,
        error: 'create_failed',
        status: res.status,
        fallback_url: deepLink,
        detail: text.slice(0, 200),
      },
      { status: 502 },
    );
  }
  const created = (await res.json()) as { html_url: string; number: number };
  return Response.json({ ok: true, mode: 'api', number: created.number, url: created.html_url });
};
