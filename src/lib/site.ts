export const SITE = {
  name: 'rea.run',
  url: 'https://rea.run',
  titleDefault: 'rea.run — community guide to REA (Reverse Engineer Anything)',
  descriptionDefault:
    'Bilingual community docs for REA: install, Ghidra MCP setup, agent reverse engineering workflows, and comparisons. Legal authorized research only.',
  upstreamRepo: 'https://github.com/morluto/rea',
  upstreamDocs: 'https://morluto.github.io/rea/',
  upstreamNpm: 'https://www.npmjs.com/package/rea-agents',
  disclaimer:
    'Unofficial community site. Not affiliated with morluto or the REA maintainers. For legal, authorized reverse engineering and security research only. No crack, keygen, or DRM-circumvention content.',
  disclaimerZh:
    '非官方社区站点，与 morluto / REA 维护者无关联。仅面向合法、已授权的逆向与安全研究。不含破解、注册机或规避 DRM 内容。',
  /** Paste meta verification content values when PM provides them from GSC/Bing. Leave empty until then. */
  gscVerification: '',
  bingVerification: '',
  /** Optional GA4 measurement ID (e.g. G-XXXXXXXX). Empty until PM creates property. */
  ga4Id: '',
} as const;

export type Lang = 'en' | 'zh';

export function t<T>(lang: Lang, en: T, zh: T): T {
  return lang === 'zh' ? zh : en;
}

export function pathFor(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'zh') {
    if (clean === '/') return '/zh/';
    return `/zh${clean.endsWith('/') ? clean : `${clean}/`}`;
  }
  if (clean === '/') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export function switchLangPath(lang: Lang, pathWithoutLang: string): string {
  return pathFor(lang === 'en' ? 'zh' : 'en', pathWithoutLang);
}

export const NAV = [
  { href: '/', labelEn: 'Home', labelZh: '首页' },
  { href: '/docs/install/', labelEn: 'Install', labelZh: '安装' },
  { href: '/blog/', labelEn: 'Blog', labelZh: '博客' },
  { href: '/compare/', labelEn: 'Compare', labelZh: '对比' },
  { href: '/compliance/', labelEn: 'Compliance', labelZh: '合规' },
] as const;
