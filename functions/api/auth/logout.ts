import { clearSessionCookie, siteOrigin } from '../../_lib/session';

export const onRequestGet: PagesFunction = async (context) => {
  const origin = siteOrigin(context.request);
  const url = new URL(context.request.url);
  const returnTo = url.searchParams.get('return_to') || '/';
  const secure = origin.startsWith('https');
  const safeReturn = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  const headers = new Headers({ Location: `${origin}${safeReturn}` });
  headers.append('Set-Cookie', clearSessionCookie(secure));
  return new Response(null, { status: 302, headers });
};

export const onRequestPost: PagesFunction = async (context) => {
  const secure = siteOrigin(context.request).startsWith('https');
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': clearSessionCookie(secure),
    },
  });
};
