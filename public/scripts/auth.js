(function () {
  var LAB_ACTIONS =
    'https://github.com/ylwl1997/rea-run-lab/actions/workflows/demo-smoke.yml';
  var LAB_CODESPACES =
    'https://codespaces.new/ylwl1997/rea-run-lab?quickstart=1';
  var SUBMIT_CASE =
    'https://github.com/ylwl1997/rea-run/issues/new?template=submit-case.yml';

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function lang() {
    return document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  }

  function t(en, zh) {
    return lang() === 'zh' ? zh : en;
  }

  function returnPath() {
    return location.pathname + location.search + location.hash;
  }

  function setGaUser(user) {
    try {
      if (typeof gtag === 'function' && user && user.id) {
        gtag('set', { user_id: String(user.id) });
        gtag('event', 'login', { method: 'github' });
      }
    } catch (_) {}
  }

  function renderLoggedOut(root, configured) {
    var loginHref = '/api/auth/login?return_to=' + encodeURIComponent(returnPath());
    if (configured === false) {
      loginHref = lang() === 'zh' ? '/zh/auth/setup/' : '/auth/setup/';
    }
    root.innerHTML =
      '<a class="auth-login-btn no-underline hover:no-underline" href="' +
      loginHref +
      '">' +
      t('Sign in with GitHub', 'GitHub 登录') +
      '</a>';
  }

  function renderLoggedIn(root, user) {
    var name = user.login;
    root.innerHTML =
      '<div class="auth-menu" data-auth-menu>' +
      '<button type="button" class="auth-avatar-btn" data-auth-toggle aria-expanded="false" aria-haspopup="true">' +
      '<img class="auth-avatar" src="' +
      escapeAttr(user.avatar_url) +
      '" alt="" width="28" height="28" />' +
      '<span class="auth-login-label">' +
      escapeHtml(name) +
      '</span>' +
      '</button>' +
      '<div class="auth-dropdown" data-auth-dropdown hidden>' +
      '<p class="auth-dropdown-note">' +
      t(
        'Community session · rea.run',
        '社区会话 · rea.run',
      ) +
      '</p>' +
      '<a class="auth-dropdown-item" href="' +
      LAB_ACTIONS +
      '" target="_blank" rel="noopener noreferrer">' +
      t('▶ Run Actions demo', '▶ 打开 Actions 演示') +
      '</a>' +
      '<a class="auth-dropdown-item" href="' +
      LAB_CODESPACES +
      '" target="_blank" rel="noopener noreferrer">' +
      t('◈ Codespaces lab', '◈ Codespaces 试跑') +
      '</a>' +
      '<a class="auth-dropdown-item" href="' +
      SUBMIT_CASE +
      '" target="_blank" rel="noopener noreferrer">' +
      t('＋ Submit case', '＋ 提交案例') +
      '</a>' +
      '<a class="auth-dropdown-item muted" href="/api/auth/logout?return_to=' +
      encodeURIComponent(returnPath()) +
      '">' +
      t('Sign out', '退出登录') +
      '</a>' +
      '</div></div>';

    var toggle = qs('[data-auth-toggle]', root);
    var drop = qs('[data-auth-dropdown]', root);
    toggle.addEventListener('click', function () {
      var open = !drop.hasAttribute('hidden');
      if (open) {
        drop.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        drop.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
    document.addEventListener('click', function (e) {
      if (!root.contains(e.target)) {
        drop.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, '&#39;');
  }

  function strengthenTracks(user) {
    if (!user) return;
    document.querySelectorAll('.try-tracks').forEach(function (el) {
      el.classList.add('is-authed');
    });
  }

  async function boot() {
    var roots = document.querySelectorAll('[data-auth-root]');
    if (!roots.length) return;
    var data = { user: null, configured: false };
    try {
      var res = await fetch('/api/auth/me', { credentials: 'same-origin' });
      data = await res.json();
    } catch (_) {}
    roots.forEach(function (root) {
      if (data.user) renderLoggedIn(root, data.user);
      else renderLoggedOut(root, data.configured);
    });
    if (data.user) {
      setGaUser(data.user);
      strengthenTracks(data.user);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
