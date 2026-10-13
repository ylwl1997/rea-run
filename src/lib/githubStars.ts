import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

/**
 * Header GitHub count.
 *
 * rea.tools fills `.nav-github-count` in assets/main.js `initializeGitHubStars()`
 * from `GET https://api.github.com/repos/morluto/rea` → `stargazers_count`,
 * formatted with `Intl.NumberFormat`. That is the ~173k figure in the header
 * (live check 2026-10-13: 173,263). npm `rea-agents` last-month downloads were
 * 134,114 — close, but not the number that header uses.
 *
 * Build embeds one fetched value (cached for the process and a short file TTL
 * so static page renders share a single request). A client script refreshes it.
 */
export const GITHUB_REPO_API = 'https://api.github.com/repos/morluto/rea';

const CACHE_PATH = join(process.cwd(), 'node_modules/.cache/rea-github-stars.json');
const TTL_MS = 10 * 60 * 1000;

type CacheFile = { stars: number; fetchedAt: number };

let memory: Promise<number | null> | undefined;

function readCache(): number | null {
  try {
    const parsed = JSON.parse(readFileSync(CACHE_PATH, 'utf8')) as CacheFile;
    if (!Number.isSafeInteger(parsed.stars) || parsed.stars < 0) return null;
    if (Date.now() - parsed.fetchedAt > TTL_MS) return null;
    return parsed.stars;
  } catch {
    return null;
  }
}

function writeCache(stars: number) {
  try {
    mkdirSync(dirname(CACHE_PATH), { recursive: true });
    const payload: CacheFile = { stars, fetchedAt: Date.now() };
    writeFileSync(CACHE_PATH, JSON.stringify(payload));
  } catch {
    /* cache is optional; the button still renders */
  }
}

async function fetchStars(): Promise<number | null> {
  const cached = readCache();
  if (cached != null) return cached;
  try {
    const res = await fetch(GITHUB_REPO_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'rea-run',
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: unknown };
    const stars = data.stargazers_count;
    if (typeof stars !== 'number' || !Number.isSafeInteger(stars) || stars < 0) return null;
    writeCache(stars);
    return stars;
  } catch {
    return null;
  }
}

export function getGithubStars(): Promise<number | null> {
  if (!memory) memory = fetchStars();
  return memory;
}

export function formatStarCount(stars: number, lang: 'en' | 'zh'): string {
  return new Intl.NumberFormat(lang === 'zh' ? 'zh-CN' : 'en-US').format(stars);
}

export function githubStarsLabel(formatted: string, lang: 'en' | 'zh'): string {
  return lang === 'zh' ? `GitHub，${formatted} 星标` : `GitHub, ${formatted} stars`;
}
