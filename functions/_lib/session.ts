export type SessionUser = {
  id: number;
  login: string;
  avatar_url: string;
  name?: string | null;
};

const COOKIE = 'rea_session';
const MAX_AGE = 60 * 60 * 24 * 14; // 14 days

function b64url(data: ArrayBuffer | Uint8Array | string): string {
  let bytes: Uint8Array;
  if (typeof data === 'string') {
    bytes = new TextEncoder().encode(data);
  } else if (data instanceof ArrayBuffer) {
    bytes = new Uint8Array(data);
  } else {
    bytes = data;
  }
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlToBytes(s: string): Uint8Array {
  const pad = '='.repeat((4 - (s.length % 4)) % 4);
  const b64 = (s + pad).replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

export async function signSession(user: SessionUser, secret: string): Promise<string> {
  const payload = b64url(JSON.stringify({ ...user, exp: Math.floor(Date.now() / 1000) + MAX_AGE }));
  const key = await hmacKey(secret);
  const sig = b64url(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)));
  return `${payload}.${sig}`;
}

export async function verifySession(token: string, secret: string): Promise<SessionUser | null> {
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;
  const key = await hmacKey(secret);
  const ok = await crypto.subtle.verify(
    'HMAC',
    key,
    b64urlToBytes(sig),
    new TextEncoder().encode(payload),
  );
  if (!ok) return null;
  try {
    const json = JSON.parse(new TextDecoder().decode(b64urlToBytes(payload))) as SessionUser & {
      exp?: number;
    };
    if (!json?.id || !json?.login || !json?.avatar_url) return null;
    if (json.exp && json.exp < Math.floor(Date.now() / 1000)) return null;
    return {
      id: json.id,
      login: json.login,
      avatar_url: json.avatar_url,
      name: json.name ?? null,
    };
  } catch {
    return null;
  }
}

export function sessionCookie(value: string, secure: boolean): string {
  const parts = [
    `${COOKIE}=${value}`,
    'Path=/',
    `Max-Age=${MAX_AGE}`,
    'HttpOnly',
    'SameSite=Lax',
  ];
  if (secure) parts.push('Secure');
  return parts.join('; ');
}

export function clearSessionCookie(secure: boolean): string {
  const parts = [`${COOKIE}=`, 'Path=/', 'Max-Age=0', 'HttpOnly', 'SameSite=Lax'];
  if (secure) parts.push('Secure');
  return parts.join('; ');
}

export function readCookie(request: Request, name = COOKIE): string | null {
  const raw = request.headers.get('Cookie') || '';
  for (const part of raw.split(';')) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return rest.join('=') || null;
  }
  return null;
}

export function oauthConfigured(env: {
  GITHUB_OAUTH_CLIENT_ID?: string;
  GITHUB_OAUTH_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
}): boolean {
  return Boolean(env.GITHUB_OAUTH_CLIENT_ID && env.GITHUB_OAUTH_CLIENT_SECRET && env.SESSION_SECRET);
}

export function siteOrigin(request: Request): string {
  const url = new URL(request.url);
  // Prefer public host behind CF
  const host = request.headers.get('X-Forwarded-Host') || url.host;
  const proto = request.headers.get('X-Forwarded-Proto') || url.protocol.replace(':', '');
  return `${proto}://${host}`;
}
