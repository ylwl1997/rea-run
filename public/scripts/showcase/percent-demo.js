/**
 * Dual-rule % teaching demo (operator-dependent).
 * After +/−: percent = current * previous / 100
 * After ×/÷: percent = current / 100
 * Matches the readable summary of Microsoft Calculator's IDC_PERCENT branch
 * (MIT; see microsoft/calculator scifunc.cpp). Teaching UI only — not a clone
 * of the Windows Calculator app.
 */
const copy = {
  en: {
    pressPercent: 'Press % to see what happens to 10.',
    addPercent: '10% of 200 is 20. Press = to add it.',
    mulPercent: 'For multiplication, 10 becomes 0.1. Press = to multiply.',
    result: (op, percent, result) => `200 ${op} ${percent} = ${result}.`,
  },
  zh: {
    pressPercent: '按 % 看 10 会变成什么。',
    addPercent: '200 的 10% 是 20。按 = 加上去。',
    mulPercent: '乘法时 10 变成 0.1。按 = 相乘。',
    result: (op, percent, result) => `200 ${op} ${percent} = ${result}。`,
  },
};

function initializePercentDemo(demo) {
  const locale = demo.getAttribute('data-locale') === 'zh' ? 'zh' : 'en';
  const t = copy[locale];
  const display = demo.querySelector('[data-percent-display]');
  const expression = demo.querySelector('[data-percent-expression]');
  const status = demo.querySelector('[data-percent-status]');
  const equals = demo.querySelector('[data-percent-key="equals"]');
  const operations = demo.querySelectorAll('[data-percent-operation]');
  if (!display || !expression || !status || !equals) return;

  let operation = 'add';
  let stage = 'input';

  const render = () => {
    const adding = operation === 'add';
    const previous = 200;
    const current = 10;
    const percent = adding ? (current * previous) / 100 : current / 100;
    const result = adding ? previous + percent : previous * percent;
    const operator = adding ? '+' : '×';
    expression.textContent =
      stage === 'result' ? `200 ${operator} ${percent} =` : `200 ${operator}`;
    display.textContent = String(
      stage === 'input' ? current : stage === 'percent' ? percent : result,
    );
    equals.disabled = stage !== 'percent';
    status.textContent =
      stage === 'input'
        ? t.pressPercent
        : stage === 'percent'
          ? adding
            ? t.addPercent
            : t.mulPercent
          : t.result(operator, percent, result);
  };

  operations.forEach((button) => {
    button.addEventListener('click', () => {
      operation = button.getAttribute('data-percent-operation') || 'add';
      stage = 'input';
      operations.forEach((candidate) => {
        candidate.setAttribute('aria-pressed', String(candidate === button));
      });
      render();
    });
  });

  demo.querySelectorAll('[data-percent-key]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-percent-key');
      stage = key === 'reset' ? 'input' : key === 'percent' ? 'percent' : 'result';
      render();
    });
  });

  const opRow = demo.querySelector('.percent-operation');
  const controls = demo.querySelector('.percent-controls');
  if (opRow) opRow.hidden = false;
  if (controls) controls.hidden = false;
  render();
}

document.querySelectorAll('[data-percent-demo]').forEach(initializePercentDemo);
