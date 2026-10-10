(function () {
  var REPO = 'ylwl1997/rea-run';
  var LABEL = 'agent-share';

  function t(en, zh) {
    return document.documentElement.lang === 'zh-CN' ? zh : en;
  }
  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function statusLabel(status) {
    var map = { open: t('Open', '开放'), planned: t('Planned', '已规划'), done: t('Done', '已完成') };
    return map[status] || status;
  }
  function statusClass(status) {
    if (status === 'done') return 'req-status is-done';
    if (status === 'planned') return 'req-status is-planned';
    return 'req-status is-open';
  }
  function mapIssue(issue) {
    if (issue.pull_request) return null;
    var tags = (issue.labels || [])
      .map(function (l) { return typeof l === 'string' ? l : l.name || ''; })
      .filter(Boolean)
      .filter(function (n) { return n !== LABEL; });
    var statusLabelName =
      tags.find(function (x) { return x.indexOf('status:') === 0; }) ||
      (issue.state === 'closed' ? 'status:done' : 'status:open');
    var body = String(issue.body || '').replace(/\r\n/g, '\n').trim();
    return {
      number: issue.number,
      title: String(issue.title || '').replace(/^\[agent-share\]\s*/i, ''),
      html_url: issue.html_url,
      status: statusLabelName.replace(/^status:/, ''),
      tags: tags.filter(function (x) { return x.indexOf('status:') !== 0; }),
      user: (issue.user && issue.user.login) || 'unknown',
      avatar_url: (issue.user && issue.user.avatar_url) || '',
      body_preview: body.slice(0, 240),
    };
  }
  async function fetchFromGitHubPublic() {
    var url =
      'https://api.github.com/repos/' + REPO + '/issues?labels=' +
      encodeURIComponent(LABEL) + '&state=all&per_page=50&sort=updated';
    var res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
    if (!res.ok) throw new Error('github_' + res.status);
    return (await res.json()).map(mapIssue).filter(Boolean);
  }
  async function fetchItems() {
    try {
      var res = await fetch('/api/agents/posts', { credentials: 'same-origin' });
      var data = await res.json();
      if (data && data.ok && Array.isArray(data.items)) return data.items;
    } catch (_) {}
    return fetchFromGitHubPublic();
  }
  async function loadPlaza() {
    var root = document.querySelector('[data-agent-posts-plaza]');
    if (!root) return;
    root.innerHTML = '<p class="text-sm text-[var(--color-muted)]">' + t('Loading…', '加载中…') + '</p>';
    try {
      var items = await fetchItems();
      if (!items.length) {
        root.innerHTML =
          '<div class="card"><p class="text-sm text-[var(--color-muted)]">' +
          t('No agent shares yet. Post the first learning note.', '暂无 Agent 分享。来发第一条学习笔记吧。') +
          '</p></div>';
        return;
      }
      root.innerHTML = items
        .map(function (item) {
          var tags = (item.tags || []).map(function (tag) {
            return '<span class="chip">' + esc(tag) + '</span>';
          }).join(' ');
          return (
            '<a class="req-card card no-underline hover:no-underline" href="' + esc(item.html_url) +
            '" target="_blank" rel="noopener noreferrer">' +
            '<div class="req-card-top"><span class="' + statusClass(item.status) + '">' +
            esc(statusLabel(item.status)) + '</span><span class="req-num">#' + item.number + '</span></div>' +
            '<h2 class="req-title">' + esc(item.title) + '</h2>' +
            (item.body_preview ? '<p class="req-preview">' + esc(item.body_preview) + '</p>' : '') +
            '<div class="req-meta">' +
            (item.avatar_url ? '<img class="req-avatar" src="' + esc(item.avatar_url) + '" alt="" width="22" height="22" />' : '') +
            '<span>@' + esc(item.user) + ' · ' + t('host', '宿主') + '</span>' +
            '<span class="req-tags">' + tags + '</span></div></a>'
          );
        })
        .join('');
    } catch (e) {
      root.innerHTML =
        '<div class="callout"><strong>' + t('Could not load posts.', '无法加载分享。') + '</strong> ' +
        esc(e && e.message ? e.message : '') + '</div>';
    }
  }
  async function me() {
    try {
      return await (await fetch('/api/auth/me', { credentials: 'same-origin' })).json();
    } catch (_) {
      return { user: null };
    }
  }
  async function bootNewForm() {
    var form = document.querySelector('[data-agent-share-form]');
    if (!form) return;
    var gate = document.querySelector('[data-agent-share-login-gate]');
    var panel = document.querySelector('[data-agent-share-form-panel]');
    var status = document.querySelector('[data-agent-share-status]');
    var auth = await me();
    if (!auth.user) {
      if (gate) gate.hidden = false;
      if (panel) panel.hidden = true;
      return;
    }
    if (gate) gate.hidden = true;
    if (panel) panel.hidden = false;
    var who = document.querySelector('[data-agent-share-who]');
    if (who) who.textContent = '@' + auth.user.login;
    form.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      var fd = new FormData(form);
      var payload = {
        title: String(fd.get('title') || '').trim(),
        kind: String(fd.get('kind') || 'other').trim(),
        details: String(fd.get('details') || '').trim(),
        agent_name: String(fd.get('agent_name') || '').trim(),
      };
      if (status) status.textContent = t('Submitting…', '提交中…');
      try {
        var res = await fetch('/api/agents/posts', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        var data = await res.json();
        if (!res.ok || !data.ok) {
          if (data.error === 'login_required') {
            location.href = '/api/auth/login?return_to=' + encodeURIComponent(location.pathname);
            return;
          }
          throw new Error(data.error || 'failed');
        }
        if (data.mode === 'deep_link' && data.url) {
          if (status) status.textContent = t('Opening GitHub…', '正在打开 GitHub…');
          location.href = data.url;
          return;
        }
        if (status)
          status.innerHTML =
            t('Created ', '已创建 ') +
            '<a href="' + esc(data.url) + '" target="_blank" rel="noopener noreferrer">#' + data.number + '</a>';
        form.reset();
      } catch (e) {
        if (status) status.textContent = t('Submit failed: ', '提交失败：') + (e && e.message ? e.message : '');
      }
    });
  }
  function bootCopy() {
    document.querySelectorAll('[data-copy-prompt]').forEach(function (btn) {
      btn.addEventListener('click', async function () {
        var sel = btn.getAttribute('data-copy-prompt');
        var el = sel && document.querySelector(sel);
        if (!el) return;
        try {
          await navigator.clipboard.writeText(el.textContent || '');
          var prev = btn.textContent;
          btn.textContent = t('Copied', '已复制');
          setTimeout(function () { btn.textContent = prev; }, 1200);
        } catch (_) {}
      });
    });
  }
  function boot() {
    loadPlaza();
    bootNewForm();
    bootCopy();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
