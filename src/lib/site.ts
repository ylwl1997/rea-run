export const SITE = {
  name: 'rea.run',
  url: 'https://rea.run',
  titleDefault: 'rea.run — community guide to REA (Reverse Engineer Anything)',
  descriptionDefault:
    'Bilingual community docs for REA: install, examples, what reverse engineering means for agents, and comparisons. Legal authorized research only.',
  upstreamRepo: 'https://github.com/morluto/rea',
  upstreamNpm: 'https://www.npmjs.com/package/rea-agents',
  disclaimer:
    'Unofficial community site. Not affiliated with morluto or the REA maintainers. For legal, authorized reverse engineering and security research only. No crack, keygen, or DRM-circumvention content.',
  disclaimerZh:
    '非官方社区站点，与 morluto / REA 维护者无关联。仅面向合法、已授权的逆向与安全研究。不含破解、注册机或规避 DRM 内容。',
  gscVerification: 'zxsrPrghsvVVJ9bk7VaT1XI8xb-DNCbIvwvjTZ8UW4w',
  bingVerification: 'BAAF2C75632898C27CE0B8EF9179004C',
  ga4Id: 'G-0HSZFFGC6C',
} as const;

export type Lang = 'en' | 'zh';

export function pathFor(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'zh') {
    if (clean === '/') return '/zh/';
    return `/zh${clean.endsWith('/') ? clean : `${clean}/`}`;
  }
  if (clean === '/') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export const NAV = [
  { href: '/', labelEn: 'Home', labelZh: '首页' },
  { href: '/learn/what-is-reverse-engineering/', labelEn: 'What is RE', labelZh: '什么是逆向' },
  { href: '/examples/', labelEn: 'Examples', labelZh: '示例' },
  { href: '/showcase/', labelEn: 'Showcase', labelZh: '案例墙' },
  { href: '/docs/install/', labelEn: 'Install', labelZh: '安装' },
  { href: '/faq/', labelEn: 'FAQ', labelZh: 'FAQ' },
  { href: '/compare/', labelEn: 'Compare', labelZh: '对比' },
  { href: '/blog/', labelEn: 'Blog', labelZh: '博客' },
] as const;
