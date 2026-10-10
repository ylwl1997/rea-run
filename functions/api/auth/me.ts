import { oauthConfigured, readCookie, verifySession } from '../../_lib/session';

interface Env {
  GITHUB_OAUTH_CLIENT_ID?: string;
  GITHUB_OAUTH_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  if (!oauthConfigured(env)) {
    return Response.json({ user: null, configured: false }, { status: 200 });
  }
  const raw = readCookie(request);
  if (!raw) return Response.json({ user: null, configured: true });
  const user = await verifySession(raw, env.SESSION_SECRET!);
  if (!user) return Response.json({ user: null, configured: true });
  return Response.json({ user, configured: true });
};
