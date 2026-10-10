(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Before / After tabs
  document.querySelectorAll('[data-demo-tabs]').forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = [...root.querySelectorAll('[data-panel]')];
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('aria-controls');
        tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
        panels.forEach((p) => {
          p.hidden = p.id !== id;
        });
      });
    });
  });

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const sel = btn.getAttribute('data-copy');
      const el = sel ? document.querySelector(sel) : null;
      const text = (el?.textContent || btn.getAttribute('data-copy-text') || '').trim();
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('is-copied');
        const prev = btn.textContent;
        btn.textContent = btn.getAttribute('data-copied-label') || 'Copied';
        setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.textContent = prev;
        }, 1400);
      } catch (_) {
        /* ignore */
      }
    });
  });

  // Retry backoff lab
  document.querySelectorAll('[data-backoff]').forEach((root) => {
    const delays = [1000, 2000, 4000];
    const labels = ['1s', '2s', '4s', 'stop'];
    const positions = [12, 38, 72, 94];
    const fill = root.querySelector('[data-backoff-fill]');
    const log = root.querySelector('[data-backoff-log]');
    const play = root.querySelector('[data-backoff-play]');
    const reset = root.querySelector('[data-backoff-reset]');
    const markers = positions.map((pct, i) => {
      const m = document.createElement('span');
      m.className = 'backoff-marker';
      m.style.left = pct + '%';
      m.title = labels[i];
      root.querySelector('[data-backoff-track]')?.appendChild(m);
      return m;
    });
    let timer = 0;
    let running = false;

    const setLog = (lines) => {
      if (log) log.innerHTML = lines.map((l) => `<div>${l}</div>`).join('');
    };

    const doReset = () => {
      running = false;
      window.clearTimeout(timer);
      if (fill) fill.style.width = '0%';
      markers.forEach((m) => m.classList.remove('is-lit'));
      setLog([root.getAttribute('data-idle-log') || 'Press play to watch exponential backoff.']);
      if (play) play.disabled = false;
    };

    const run = async () => {
      if (running || prefersReduced) {
        // Instant reveal for reduced motion
        markers.forEach((m) => m.classList.add('is-lit'));
        if (fill) fill.style.width = '94%';
        setLog([
          'attempt 0 → wait 1s',
          'attempt 1 → wait 2s',
          'attempt 2 → wait 4s',
          'attempt 3 → stop (max_attempts)',
        ]);
        return;
      }
      running = true;
      if (play) play.disabled = true;
      markers.forEach((m) => m.classList.remove('is-lit'));
      if (fill) fill.style.width = '0%';
      const lines = [];
      for (let i = 0; i < delays.length; i++) {
        markers[i].classList.add('is-lit');
        if (fill) fill.style.width = positions[i] + '%';
        lines.push(`attempt ${i} → wait ${labels[i]}`);
        setLog([...lines, '<span class="dim">…</span>']);
        await new Promise((r) => {
          timer = window.setTimeout(r, Math.min(delays[i] / 4, 700)); // sped-up demo
        });
        if (!running) return;
      }
      markers[3].classList.add('is-lit');
      if (fill) fill.style.width = '94%';
      lines.push('attempt 3 → stop (max_attempts)');
      setLog(lines);
      running = false;
      if (play) play.disabled = false;
    };

    play?.addEventListener('click', run);
    reset?.addEventListener('click', doReset);
    doReset();
  });

  // Stagger graph reveal
  document.querySelectorAll('[data-graph-demo]').forEach((root) => {
    const btn = root.querySelector('[data-graph-run]');
    const nodes = [...root.querySelectorAll('[data-node]')];
    const run = () => {
      nodes.forEach((n) => n.classList.remove('is-in', 'is-hot'));
      nodes.forEach((n, i) => {
        window.setTimeout(() => {
          n.classList.add('is-in');
          nodes.forEach((x) => x.classList.remove('is-hot'));
          n.classList.add('is-hot');
        }, prefersReduced ? 0 : i * 220);
      });
    };
    btn?.addEventListener('click', run);
    // subtle auto preview once in view
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      }, { threshold: 0.35 });
      io.observe(root);
    }
  });
})();
