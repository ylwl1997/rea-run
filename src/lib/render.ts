/** Minimal body renderer: headings, markdown tables, paragraphs; fenced ``` blocks; inline `code` and [links](url); a paragraph that is `![alt](src)` renders as an image. `!figure[caption](/path.jpg)` and `!video[caption](/path.mp4)(/poster.jpg)` render same-site media only. */
export function renderBody(paragraphs: string[]): string {
  return paragraphs
    .map((raw) => {
      const trimmed = raw.trimEnd();
      if (trimmed.startsWith('```')) {
        const lines = trimmed.split('\n');
        const lang = lines[0].slice(3).trim();
        const code = lines.slice(1).join('\n').replace(/```\s*$/, '');
        return `<pre><code class="language-${escapeAttr(lang)}">${escapeHtml(code)}</code></pre>`;
      }
      if (/^#{2,3}\s+/.test(trimmed)) {
        const level = trimmed.startsWith('###') ? 3 : 2;
        const text = trimmed.replace(/^#{2,3}\s+/, '');
        return `<h${level}>${inline(text)}</h${level}>`;
      }
      if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
        return renderTable(trimmed);
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
        return renderList(trimmed);
      }
      const video = renderVideoParagraph(trimmed);
      if (video) return video;
      const figure = renderFigureParagraph(trimmed);
      if (figure) return figure;
      const image = renderImageParagraph(trimmed);
      if (image) return image;
      return `<p>${inline(trimmed)}</p>`;
    })
    .join('\n');
}

function renderTable(raw: string): string {
  const rows = raw
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('|'));
  if (rows.length < 2) return `<p>${inline(raw)}</p>`;
  const parse = (line: string) =>
    line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => c.trim());
  const isSep = (line: string) => /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(line);
  const head = parse(rows[0]);
  let i = 1;
  if (rows[1] && isSep(rows[1])) i = 2;
  const body = rows.slice(i).map(parse);
  const th = head.map((c) => `<th>${inline(c)}</th>`).join('');
  const trs = body
    .map((cells) => `<tr>${cells.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="not-prose overflow-x-auto my-4"><table class="compare-table"><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

/** Paragraph is exactly `![alt](src)`, or starts with that pattern. Src matches the link allowlist: https? or a same-site path. */
function renderImageParagraph(raw: string): string | null {
  const trimmed = raw.trim();
  const m = /^!\[([^\]]*)\]\(([^)\s]+)\)([\s\S]*)$/.exec(trimmed);
  if (!m) return null;
  const alt = m[1];
  const src = m[2];
  if (!isSafeImgSrc(src)) return null;
  const rest = m[3].trim();
  const tag = `<img alt="${escapeAttr(alt)}" src="${escapeAttr(src)}">`;
  if (!rest) return `<p>${tag}</p>`;
  return `<p>${tag} ${inline(rest)}</p>`;
}

function isSafeImgSrc(src: string): boolean {
  if (src.startsWith('/') && !src.startsWith('//') && !src.startsWith('/\\')) return true;
  return /^https?:\/\//i.test(src);
}

/** `!figure[caption](/media/....jpg)` — same-site image as a figure. Caption is also the alt text. */
function renderFigureParagraph(raw: string): string | null {
  const m = /^!figure\[([^\]]*)\]\(([^)\s]+)\)$/.exec(raw.trim());
  if (!m) return null;
  const caption = m[1];
  const src = m[2];
  if (!isSameSiteMedia(src, ['.jpg', '.jpeg', '.png', '.webp', '.gif'])) return null;
  return `<figure class="blog-cover"><img alt="${escapeAttr(caption)}" src="${escapeAttr(src)}" decoding="async" /><figcaption>${inline(caption)}</figcaption></figure>`;
}

/** `!video[caption](/media/....mp4)(/media/....jpg)` — playable same-site video. Remote URLs are rejected. */
function renderVideoParagraph(raw: string): string | null {
  const m = /^!video\[([^\]]*)\]\(([^)\s]+)\)\(([^)\s]+)\)$/.exec(raw.trim());
  if (!m) return null;
  const caption = m[1];
  const src = m[2];
  const poster = m[3];
  if (!isSameSiteMedia(src, ['.mp4'])) return null;
  if (!isSameSiteMedia(poster, ['.jpg', '.jpeg', '.png', '.webp'])) return null;
  return `<figure class="blog-clip"><video controls playsinline preload="metadata" width="960" height="986" poster="${escapeAttr(poster)}" src="${escapeAttr(src)}"><a href="${escapeAttr(src)}">Download video</a></video><figcaption>${inline(caption)}</figcaption></figure>`;
}

function isSameSiteMedia(src: string, exts: string[]): boolean {
  if (!src.startsWith('/') || src.startsWith('//') || src.startsWith('/\\')) return false;
  if (src.includes('..') || src.includes('\\') || src.includes('?') || src.includes('#')) return false;
  const lower = src.toLowerCase();
  return exts.some((ext) => lower.endsWith(ext));
}

function renderList(raw: string): string {
  const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
  const ordered = lines[0].startsWith('1.');
  const tag = ordered ? 'ol' : 'ul';
  const items = lines
    .map((l) => l.replace(/^(-|\d+\.)\s+/, ''))
    .map((l) => `<li>${inline(l)}</li>`)
    .join('');
  return `<${tag}>${items}</${tag}>`;
}

function inline(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, '<a href="$2">$1</a>');
  return out;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s: string) {
  return escapeHtml(s).replace(/"/g, '&quot;');
}
