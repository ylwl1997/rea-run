import { oauthConfigured, siteOrigin } from '../../_lib/session';

interface Env {
  GITHUB_OAUTH_CLIENT_ID?: string;
  GITHUB_OAUTH_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = siteOrigin(request);
  const url = new URL(request.url);
  const returnTo = url.searchParams.get('return_to') || '/';

  if (!oauthConfigured(env)) {
    return Response.redirect(
      `${origin}/auth/setup/?error=oauth_not_configured`,
      302,
    );
  }

  const state = crypto.randomUUID();
  const redirectUri = `${origin}/api/auth/callback`;
  const gh = new URL('https://github.com/login/oauth/authorize');
  gh.searchParams.set('client_id', env.GITHUB_OAUTH_CLIENT_ID!);
  gh.searchParams.set('redirect_uri', redirectUri);
  gh.searchParams.set('scope', 'read:user');
  gh.searchParams.set('state', state);

  const secure = origin.startsWith('https');
  const headers = new Headers({ Location: gh.toString() });
  // Short-lived state + return_to cookies (not the session)
  headers.append(
    'Set-Cookie',
    `rea_oauth_state=${state}; Path=/; Max-Age=600; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`,
  );
  headers.append(
    'Set-Cookie',
    `rea_oauth_return=${encodeURIComponent(returnTo)}; Path=/; Max-Age=600; HttpOnly; SameSite=Lax${secure ? '; Secure' : ''}`,
  );
  return new Response(null, { status: 302, headers });
};
