export const SITE = {
  name: 'rea.run',
  url: 'https://rea.run',
  titleDefault: 'rea.run — community guide to REA (Reverse Engineer Anything)',
  descriptionDefault:
    'Bilingual community docs for REA: install, examples, what reverse engineering means for agents, and comparisons. Legal authorized research only.',
  upstreamRepo: 'https://github.com/morluto/rea',
  upstreamDiscord: 'https://discord.gg/GkcryMnJDM',
  upstreamX: 'https://x.com/reatools',
  upstreamNpm: 'https://www.npmjs.com/package/rea-agents',
  /** Single subtle footer line (EN / ZH). Keep prominent UI free of Unofficial badges. */
  disclaimer:
    'Independent community guide to REA (open source). Not affiliated with morluto or the REA maintainers. For legal, authorized reverse engineering and security research only. No crack, keygen, or DRM-circumvention content.',
  disclaimerZh:
    'REA 开源项目的独立社区指南站，与 morluto / REA 维护者无关联。仅面向合法、已授权的逆向与安全研究。不含破解、注册机或规避 DRM 内容。',
  gscVerification: 'zxsrPrghsvVVJ9bk7VaT1XI8xb-DNCbIvwvjTZ8UW4w',
  bingVerification: 'BAAF2C75632898C27CE0B8EF9179004C',
  ga4Id: 'G-0HSZFFGC6C',
  /** On-site thick post (use pathFor). Scale original is agentenvBlogSource. */
  agentenvBlogPath: '/blog/agentenv-rea/',
  agentenvBlogSource: 'https://labs.scale.com/blog/introducing-agentenv',
  agentenvSpace: 'https://huggingface.co/spaces/earakely-scale/rea-environments',
  agentenvCollection: 'https://huggingface.co/collections/earakely-scale/rea-environments-on-agentenv',
  agentenvAttribution:
    'Environments recorded & published on Hugging Face by earakely-scale (Scale Labs) using REA. rea.run is a community mirror catalog; not affiliated.',
  agentenvAttributionZh:
    '环境由 earakely-scale（Scale Labs）用 REA 在 Hugging Face 录制并发布。rea.run 是社区镜像目录，与 Scale 无关联。',
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

/** Language-matched on-site AgentEnv intro blog (not the Scale Labs outbound). */
export function agentenvBlogHref(lang: Lang): string {
  return pathFor(lang, SITE.agentenvBlogPath);
}

export const NAV = [
  { href: '/', labelEn: 'Home', labelZh: '首页' },
  { href: '/learn/what-is-reverse-engineering/', labelEn: 'What is RE', labelZh: '什么是逆向' },
  { href: '/examples/', labelEn: 'Examples', labelZh: '示例' },
  { href: '/showcase/', labelEn: 'Showcase', labelZh: '案例墙' },
  { href: '/environments/', labelEn: 'Environments', labelZh: '环境' },
  { href: '/lab/', labelEn: 'Lab', labelZh: '实验室' },
  { href: '/docs/install/', labelEn: 'Install', labelZh: '安装' },
  { href: '/faq/', labelEn: 'FAQ', labelZh: 'FAQ' },
  { href: '/compare/', labelEn: 'Compare', labelZh: '对比' },
  { href: '/blog/', labelEn: 'Blog', labelZh: '博客' },
] as const;
