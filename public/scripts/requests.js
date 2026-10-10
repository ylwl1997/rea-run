(function () {
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

  function statusClass(status) {
    if (status === 'done') return 'req-status is-done';
    if (status === 'planned') return 'req-status is-planned';
    return 'req-status is-open';
  }

  function statusLabel(status) {
    var map = {
      open: t('Open', '开放'),
      planned: t('Planned', '已规划'),
      done: t('Done', '已完成'),
    };
    return map[status] || status;
  }

  async function loadPlaza() {
    var root = document.querySelector('[data-requests-plaza]');
    if (!root) return;
    root.innerHTML = '<p class="text-sm text-[var(--color-muted)]">' + t('Loading…', '加载中…') + '</p>';
    try {
      var res = await fetch('/api/requests', { credentials: 'same-origin' });
      var data = await res.json();
      if (!data.ok) throw new Error(data.error || 'failed');
      if (!data.items || !data.items.length) {
        root.innerHTML =
          '<div class="card"><p class="text-sm text-[var(--color-muted)]">' +
          t(
            'No public requests yet. Be the first to submit one.',
            '暂无公开需求。来提交第一条吧。',
          ) +
          '</p></div>';
        return;
      }
      root.innerHTML = data.items
        .map(function (item) {
          var tags = (item.tags || [])
            .map(function (tag) {
              return '<span class="chip">' + esc(tag) + '</span>';
            })
            .join(' ');
          return (
            '<a class="req-card card no-underline hover:no-underline" href="' +
            esc(item.html_url) +
            '" target="_blank" rel="noopener noreferrer">' +
            '<div class="req-card-top">' +
            '<span class="' +
            statusClass(item.status) +
            '">' +
            esc(statusLabel(item.status)) +
            '</span>' +
            '<span class="req-num">#' +
            item.number +
            '</span>' +
            '</div>' +
            '<h2 class="req-title">' +
            esc(item.title) +
            '</h2>' +
            (item.body_preview
              ? '<p class="req-preview">' + esc(item.body_preview) + '</p>'
              : '') +
            '<div class="req-meta">' +
            (item.avatar_url
              ? '<img class="req-avatar" src="' + esc(item.avatar_url) + '" alt="" width="22" height="22" />'
              : '') +
            '<span>@' +
            esc(item.user) +
            '</span>' +
            '<span class="req-tags">' +
            tags +
            '</span>' +
            '</div>' +
            '</a>'
          );
        })
        .join('');
    } catch (e) {
      root.innerHTML =
        '<div class="callout"><strong>' +
        t('Could not load requests.', '无法加载需求列表。') +
        '</strong> ' +
        esc(e && e.message ? e.message : '') +
        '</div>';
    }
  }

  async function me() {
    try {
      var res = await fetch('/api/auth/me', { credentials: 'same-origin' });
      return await res.json();
    } catch (_) {
      return { user: null };
    }
  }

  async function bootNewForm() {
    var form = document.querySelector('[data-request-form]');
    if (!form) return;
    var gate = document.querySelector('[data-request-login-gate]');
    var panel = document.querySelector('[data-request-form-panel]');
    var status = document.querySelector('[data-request-status]');
    var auth = await me();
    if (!auth.user) {
      if (gate) gate.hidden = false;
      if (panel) panel.hidden = true;
      return;
    }
    if (gate) gate.hidden = true;
    if (panel) panel.hidden = false;
    var who = document.querySelector('[data-request-who]');
    if (who) who.textContent = '@' + auth.user.login;

    form.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      var fd = new FormData(form);
      var payload = {
        title: String(fd.get('title') || '').trim(),
        kind: String(fd.get('kind') || 'other').trim(),
        details: String(fd.get('details') || '').trim(),
      };
      if (status) status.textContent = t('Submitting…', '提交中…');
      try {
        var res = await fetch('/api/requests', {
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
          if (status)
            status.textContent = t(
              'Opening GitHub to finish your request…',
              '正在打开 GitHub 完成提交…',
            );
          location.href = data.url;
          return;
        }
        if (status)
          status.innerHTML =
            t('Created ', '已创建 ') +
            '<a href="' +
            esc(data.url) +
            '" target="_blank" rel="noopener noreferrer">#' +
            data.number +
            '</a>';
        form.reset();
      } catch (e) {
        if (status)
          status.textContent = t('Submit failed: ', '提交失败：') + (e && e.message ? e.message : '');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      loadPlaza();
      bootNewForm();
    });
  } else {
    loadPlaza();
    bootNewForm();
  }
})();
