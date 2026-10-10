(function () {
  var REPO = 'ylwl1997/rea-run';
  var LABEL = 'life-process';
  var MODULES = ['signal', 'arch', 'behavior', 'playbook', 'diff-prep', 'chronicle'];

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

  function mapIssue(issue) {
    if (issue.pull_request) return null;
    var tags = (issue.labels || [])
      .map(function (l) { return typeof l === 'string' ? l : l.name || ''; })
      .filter(Boolean)
      .filter(function (n) { return n !== LABEL && n.indexOf('status:') !== 0; });
    var module = MODULES.find(function (m) { return tags.indexOf(m) >= 0; }) || 'chronicle';
    var body = String(issue.body || '').replace(/\r\n/g, '\n').trim();
    var tools = [];
    if (/grok\s*bot|grokbot/i.test(body)) tools.push('Grok Bot');
    if (/\bdots\b/i.test(body)) tools.push('Dots');
    if (/\bclaude\b|\bcld\b/i.test(body)) tools.push('Claude');
    if (/\bcodex\b/i.test(body)) tools.push('Codex');
    if (/\bhermes\b/i.test(body)) tools.push('Hermes');
    if (!tools.length) tools.push('Other');
    return {
      number: issue.number,
      title: String(issue.title || '').replace(/^\[life-process\]\s*/i, ''),
      html_url: issue.html_url,
      module: module,
      user: (issue.user && issue.user.login) || 'unknown',
      avatar_url: (issue.user && issue.user.avatar_url) || '',
      body_preview: body.slice(0, 220),
      created_at: issue.created_at,
      has_repro: /复现|repro|reproduce|可复现/i.test(body),
      agent_tools: tools,
      citation_count: (body.match(/https?:\/\/[^\s)]+/g) || []).length,
    };
  }

  async function fetchFromGitHub() {
    var url =
      'https://api.github.com/repos/' + REPO + '/issues?labels=' + encodeURIComponent(LABEL) +
      '&state=all&per_page=100&sort=updated';
    var res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
    if (!res.ok) throw new Error('github_' + res.status);
    return (await res.json()).map(mapIssue).filter(Boolean);
  }

  function aggregate(items) {
    var participants = {};
    var byModule = {};
    MODULES.forEach(function (m) { byModule[m] = 0; });
    var tools = { 'Grok Bot': 0, Dots: 0, Claude: 0, Codex: 0, Hermes: 0, Other: 0 };
    var daily = {};
    var citations = 0;
    var repro = 0;
    items.forEach(function (item) {
      participants[item.user] = 1;
      byModule[item.module] = (byModule[item.module] || 0) + 1;
      (item.agent_tools || []).forEach(function (tool) {
        if (tools[tool] != null) tools[tool] += 1;
        else tools.Other += 1;
      });
      var day = String(item.created_at || '').slice(0, 10);
      if (day) daily[day] = (daily[day] || 0) + 1;
      citations += item.citation_count || 0;
      if (item.has_repro) repro += 1;
    });
    var dailySeries = Object.keys(daily).sort().map(function (date) {
      return { date: date, count: daily[date] };
    });
    return {
      participants: Object.keys(participants).length,
      submissions: items.length,
      byModule: byModule,
      agentTools: tools,
      citationsTotal: citations,
      reproPct: items.length ? Math.round((repro / items.length) * 100) : 0,
      dailySeries: dailySeries,
    };
  }

  async function loadData() {
    try {
      var res = await fetch('/api/life-process/submissions', { credentials: 'same-origin' });
      var data = await res.json();
      if (data && data.ok) return { items: data.items || [], stats: data.stats };
    } catch (_) {}
    var items = await fetchFromGitHub();
    return { items: items, stats: aggregate(items) };
  }

  async function loadPlaza() {
    var root = document.querySelector('[data-lp-plaza]');
    if (!root) return;
    root.innerHTML = '<p class="lp-muted">' + t('Loading…', '加载中…') + '</p>';
    try {
      var data = await loadData();
      var items = data.items || [];
      if (!items.length) {
        root.innerHTML =
          '<div class="lp-card"><p class="lp-muted">' +
          t('No submissions yet. Be the first chronicle.', '暂无投稿。来写第一条纪事。') +
          '</p></div>';
        return;
      }
      root.innerHTML = items
        .map(function (item) {
          return (
            '<a class="lp-card lp-sub-card" href="' + esc(item.html_url) + '" target="_blank" rel="noopener noreferrer">' +
            '<div class="lp-sub-top"><span class="lp-chip">' + esc(item.module) + '</span>' +
            '<span class="lp-num">#' + item.number + '</span></div>' +
            '<h2 class="lp-sub-title">' + esc(item.title) + '</h2>' +
            (item.body_preview ? '<p class="lp-muted">' + esc(item.body_preview) + '</p>' : '') +
            '<div class="lp-sub-meta">' +
            (item.avatar_url ? '<img src="' + esc(item.avatar_url) + '" alt="" width="20" height="20" />' : '') +
            '<span>@' + esc(item.user) + '</span></div></a>'
          );
        })
        .join('');
    } catch (e) {
      root.innerHTML = '<div class="lp-card"><p class="lp-muted">' + esc(e && e.message) + '</p></div>';
    }
  }

  function barRow(label, value, max) {
    var pct = max ? Math.max(6, Math.round((value / max) * 100)) : 0;
    return (
      '<div class="lp-bar-row"><span>' + esc(label) + '</span>' +
      '<div class="lp-bar"><i style="width:' + pct + '%"></i></div><b>' + value + '</b></div>'
    );
  }

  async function loadStats() {
    var root = document.querySelector('[data-lp-stats]');
    if (!root) return;
    root.innerHTML = '<p class="lp-muted">' + t('Loading stats…', '加载统计…') + '</p>';
    try {
      var data = await loadData();
      var s = data.stats || aggregate([]);
      var modMax = Math.max.apply(null, Object.keys(s.byModule || {}).map(function (k) { return s.byModule[k]; }).concat([1]));
      var toolMax = Math.max.apply(null, Object.keys(s.agentTools || {}).map(function (k) { return s.agentTools[k]; }).concat([1]));
      var coverage = Number(root.getAttribute('data-signal-coverage') || '12');
      var series = (s.dailySeries || [])
        .map(function (d) {
          return '<li><span>' + esc(d.date) + '</span><b>+' + d.count + '</b></li>';
        })
        .join('') || '<li class="lp-muted">' + t('No daily data yet', '暂无日更数据') + '</li>';

      root.innerHTML =
        '<div class="lp-stat-grid">' +
        '<div class="lp-stat"><div class="lp-stat-n">' + s.participants + '</div><div class="lp-stat-l">' + t('Participants', '参与人数') + '</div></div>' +
        '<div class="lp-stat"><div class="lp-stat-n">' + s.submissions + '</div><div class="lp-stat-l">' + t('Submissions', '投稿数') + '</div></div>' +
        '<div class="lp-stat"><div class="lp-stat-n">' + s.reproPct + '%</div><div class="lp-stat-l">' + t('With repro steps', '含复现步骤') + '</div></div>' +
        '<div class="lp-stat"><div class="lp-stat-n">' + s.citationsTotal + '</div><div class="lp-stat-l">' + t('Citation links', '引用链接数') + '</div></div>' +
        '</div>' +
        '<div class="lp-card mt-lp"><h3>' + t('By module', '按模块') + '</h3>' +
        Object.keys(s.byModule || {}).map(function (k) { return barRow(k, s.byModule[k], modMax); }).join('') +
        '</div>' +
        '<div class="lp-card mt-lp"><h3>' + t('Agent tools', 'Agent 工具') + '</h3>' +
        Object.keys(s.agentTools || {}).map(function (k) { return barRow(k, s.agentTools[k], toolMax); }).join('') +
        '</div>' +
        '<div class="lp-card mt-lp"><h3>' + t('Signal Atlas coverage (manual)', '信号图鉴覆盖（手工）') + '</h3>' +
        '<div class="lp-progress"><i style="width:' + coverage + '%"></i></div><p class="lp-muted">' + coverage + '%</p></div>' +
        '<div class="lp-card mt-lp"><h3>' + t('Daily series', '每日新增') + '</h3><ul class="lp-daily">' + series + '</ul></div>';
    } catch (e) {
      root.innerHTML = '<div class="lp-card"><p class="lp-muted">' + esc(e && e.message) + '</p></div>';
    }
  }

  async function me() {
    try { return await (await fetch('/api/auth/me', { credentials: 'same-origin' })).json(); }
    catch (_) { return { user: null }; }
  }

  async function bootForm() {
    var form = document.querySelector('[data-lp-form]');
    if (!form) return;
    var gate = document.querySelector('[data-lp-login-gate]');
    var panel = document.querySelector('[data-lp-form-panel]');
    var status = document.querySelector('[data-lp-status]');
    var auth = await me();
    if (!auth.user) {
      if (gate) gate.hidden = false;
      if (panel) panel.hidden = true;
      return;
    }
    if (gate) gate.hidden = true;
    if (panel) panel.hidden = false;
    var who = document.querySelector('[data-lp-who]');
    if (who) who.textContent = '@' + auth.user.login;
    form.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      var fd = new FormData(form);
      var payload = {};
      fd.forEach(function (v, k) {
        if (k === 'agent_tool' || k === 'agent_other') return;
        payload[k] = String(v).trim();
      });
      var tools = [];
      form.querySelectorAll('input[name="agent_tool"]:checked').forEach(function (el) {
        if (el.value === 'Other') return;
        tools.push(el.value);
      });
      var otherBox = form.querySelector('input[name="agent_tool"][value="Other"]');
      var otherText = (form.querySelector('[name="agent_other"]') || {}).value || '';
      otherText = String(otherText).trim();
      if (otherBox && otherBox.checked) {
        tools.push(otherText ? ('Other: ' + otherText) : 'Other');
      }
      payload.agent_tools = tools.join(', ');
      if (status) status.textContent = t('Submitting…', '提交中…');
      try {
        var res = await fetch('/api/life-process/submissions', {
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
          location.href = data.url;
          return;
        }
        if (status) status.innerHTML = t('Created ', '已创建 ') + '<a href="' + esc(data.url) + '" target="_blank" rel="noopener noreferrer">#' + data.number + '</a>';
        form.reset();
      } catch (e) {
        if (status) status.textContent = t('Failed: ', '失败：') + (e && e.message ? e.message : '');
      }
    });
  }

  function boot() {
    loadPlaza();
    loadStats();
    bootForm();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
