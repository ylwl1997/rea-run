import { SITE, pathFor, type Lang } from './site';

export type Crumb = { name: string; path: string };

export function absUrl(lang: Lang, path: string): string {
  return new URL(pathFor(lang, path), SITE.url).href;
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/brand/logo-mark.svg`,
    },
    description: SITE.descriptionDefault,
    sameAs: [SITE.upstreamRepo, SITE.upstreamX, SITE.upstreamNpm],
  };
}

/** WebSite only — no SearchAction (site has no on-site search). */
export function websiteSchema(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
    publisher: { '@id': `${SITE.url}/#organization` },
    description: SITE.descriptionDefault,
  };
}

export function breadcrumbList(lang: Lang, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absUrl(lang, c.path),
    })),
  };
}

export function faqPageSchema(
  entities: { question: string; answer: string }[],
) {
  return {
    '@type': 'FAQPage',
    mainEntity: entities.map((e) => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: e.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  lang: Lang;
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = absUrl(opts.lang, opts.path);
  const img = opts.image
    ? new URL(opts.image, SITE.url).href
    : `${SITE.url}/brand/og-default.png`;
  return {
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@id': `${SITE.url}/#organization` },
    publisher: { '@id': `${SITE.url}/#organization` },
    image: [img],
    inLanguage: opts.lang === 'zh' ? 'zh-CN' : 'en',
    url,
  };
}

export function itemListSchema(
  lang: Lang,
  name: string,
  items: { name: string; path: string }[],
) {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: absUrl(lang, it.path),
    })),
  };
}

/** Honest SoftwareApplication — no aggregateRating / invented traffic. */
export function softwareApplicationSchema(opts: {
  lang: Lang;
  path: string;
  name: string;
  description: string;
}) {
  return {
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.lang, opts.path),
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function graphDocument(
  nodes: Record<string, unknown>[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
