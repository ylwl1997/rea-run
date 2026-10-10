/** Minimal body renderer: paragraphs; fenced ``` blocks; inline `code` and [links](url). */
export function renderBody(paragraphs: string[]): string {
  return paragraphs
    .map((raw) => {
      if (raw.startsWith('```')) {
        const lines = raw.split('\n');
        const lang = lines[0].slice(3).trim();
        const code = lines.slice(1).join('\n').replace(/```\s*$/, '');
        return `<pre><code class="language-${escapeAttr(lang)}">${escapeHtml(code)}</code></pre>`;
      }
      return `<p>${inline(raw)}</p>`;
    })
    .join('\n');
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
