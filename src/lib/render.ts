/** Minimal body renderer: headings, markdown tables, paragraphs; fenced ``` blocks; inline `code` and [links](url). */
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
