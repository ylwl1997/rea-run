import {
  clearSessionCookie,
  oauthConfigured,
  readCookie,
  sessionCookie,
  signSession,
  siteOrigin,
  type SessionUser,
} from '../../../_lib/session';

interface Env {
  GITHUB_OAUTH_CLIENT_ID?: string;
  GITHUB_OAUTH_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = siteOrigin(request);
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const expected = readCookie(request, 'rea_oauth_state');
  const returnRaw = readCookie(request, 'rea_oauth_return');
  const returnTo = returnRaw ? decodeURIComponent(returnRaw) : '/';
  const secure = origin.startsWith('https');

  const fail = (reason: string) => {
    const headers = new Headers({ Location: `${origin}/auth/setup/?error=${encodeURIComponent(reason)}` });
    headers.append('Set-Cookie', `rea_oauth_state=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`);
    headers.append('Set-Cookie', `rea_oauth_return=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`);
    return new Response(null, { status: 302, headers });
  };

  if (!oauthConfigured(env)) return fail('oauth_not_configured');
  if (!code || !state || !expected || state !== expected) return fail('invalid_state');

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
      redirect_uri: `${origin}/api/auth/github/callback`,
    }),
  });
  const tokenJson = (await tokenRes.json()) as { access_token?: string; error?: string };
  if (!tokenJson.access_token) return fail(tokenJson.error || 'token_exchange_failed');

  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${tokenJson.access_token}`,
      'User-Agent': 'rea.run-community',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!userRes.ok) return fail('user_fetch_failed');
  const ghUser = (await userRes.json()) as {
    id: number;
    login: string;
    avatar_url: string;
    name?: string | null;
  };

  // Drop access token after profile fetch — session cookie holds profile only.
  const user: SessionUser = {
    id: ghUser.id,
    login: ghUser.login,
    avatar_url: ghUser.avatar_url,
    name: ghUser.name ?? null,
  };
  const signed = await signSession(user, env.SESSION_SECRET!);

  const safeReturn = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  const headers = new Headers({ Location: `${origin}${safeReturn}` });
  headers.append('Set-Cookie', sessionCookie(signed, secure));
  headers.append('Set-Cookie', `rea_oauth_state=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`);
  headers.append('Set-Cookie', `rea_oauth_return=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`);
  return new Response(null, { status: 302, headers });
};
