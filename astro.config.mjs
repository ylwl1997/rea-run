import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rea.run',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-CN' },
      },
      changefreq: 'weekly',
      serialize(item) {
        const slash = (href) => {
          const url = new URL(href);
          if (url.pathname !== '/' && !url.pathname.endsWith('/')) url.pathname += '/';
          return url.href;
        };
        item.url = slash(item.url);
        item.links = item.links?.map((link) => ({ ...link, url: slash(link.url) }));
        const pathname = new URL(item.url).pathname;
        const depth = pathname.replace(/^\/zh/, '').split('/').filter(Boolean).length;
        item.priority = depth === 0 ? 1 : depth === 1 ? 0.9 : 0.8;
        // Real build time — never freeze lastmod to a past calendar stamp.
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
