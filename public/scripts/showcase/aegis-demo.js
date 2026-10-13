import { generateExampleCode } from "./aegis-otp.js";

const copy = {
  en: {
    window: (start, end) => `${start}–${end} seconds`,
    aria: (seconds, block) => `${seconds} seconds, time block ${block}`,
    unavailable:
      "Interactive calculation is unavailable in this browser. The example shows the code at 59 seconds.",
    checking: "Checking…",
    passed: (passed, total) =>
      `${passed} / ${total} checks passed (six RFC 6238 SHA-1 cases, at six and eight digits).`,
    failed: "Could not run the reference checks. Try again.",
  },
  zh: {
    window: (start, end) => `${start}–${end} 秒`,
    aria: (seconds, block) => `${seconds} 秒，时间块 ${block}`,
    unavailable: "此浏览器无法进行交互计算。示例显示 59 秒时的验证码。",
    checking: "正在核对…",
    passed: (passed, total) =>
      `${passed} / ${total} 项通过（六个 RFC 6238 SHA-1 用例，各验六位与八位）。`,
    failed: "无法运行对照检查。请再试一次。",
  },
};

async function initializeAegisDemo() {
  const demo = document.querySelector("[data-aegis-demo]");
  if (demo === null) return;
  const locale = demo.getAttribute("data-locale") === "zh" ? "zh" : "en";
  const t = copy[locale];
  const clock = demo.querySelector("input[type=range]");
  if (!(clock instanceof HTMLInputElement)) return;
  const controls = demo.querySelectorAll("input, button");
  const status = demo.querySelector("[data-aegis-status]");
  let revision = 0;

  const updateTime = async (seconds) => {
    const currentRevision = ++revision;
    try {
      const code = await generateExampleCode(seconds);
      if (currentRevision !== revision) return false;
      const block = Math.floor(seconds / 30);
      demo.querySelectorAll("[data-aegis-seconds]").forEach((node) => {
        node.textContent = String(seconds);
      });
      const blockNode = demo.querySelector("[data-aegis-block]");
      const divisionNode = demo.querySelector("[data-aegis-division]");
      const windowNode = demo.querySelector("[data-aegis-window]");
      const codeNode = demo.querySelector("[data-aegis-code]");
      if (blockNode) blockNode.textContent = String(block);
      if (divisionNode) divisionNode.textContent = `floor(${seconds} / 30)`;
      if (windowNode) windowNode.textContent = t.window(block * 30, block * 30 + 29);
      if (codeNode) codeNode.textContent = code;
      clock.setAttribute("aria-valuetext", t.aria(seconds, block));
      if (status) status.textContent = "";
      return true;
    } catch {
      if (currentRevision === revision && status) status.textContent = t.unavailable;
      return false;
    }
  };

  if (!(await updateTime(Number(clock.value)))) return;
  controls.forEach((control) => {
    if (control instanceof HTMLInputElement || control instanceof HTMLButtonElement) {
      control.disabled = false;
    }
  });
  clock.addEventListener("input", async () => {
    await updateTime(Number(clock.value));
  });
  demo.querySelectorAll("[data-aegis-time]").forEach((button) => {
    button.addEventListener("click", async () => {
      const next = button.getAttribute("data-aegis-time");
      if (next == null) return;
      clock.value = next;
      await updateTime(Number(clock.value));
    });
  });

  const checkButton = demo.querySelector("[data-aegis-check]");
  const checkResult = demo.querySelector("[data-aegis-check-result]");
  if (!(checkButton instanceof HTMLButtonElement) || checkResult == null) return;
  checkButton.disabled = false;
  checkButton.addEventListener("click", async () => {
    checkButton.disabled = true;
    checkResult.textContent = t.checking;
    try {
      const response = await fetch("/media/showcase-cases/aegis/test-vectors.json");
      if (!response.ok) throw new Error("Reference data unavailable");
      const { vectors } = await response.json();
      let passed = 0;
      for (const vector of vectors) {
        for (const digits of [6, 8]) {
          const code = await generateExampleCode(vector.seconds, digits);
          if (code === vector.sha1.slice(-digits)) passed += 1;
        }
      }
      checkResult.textContent = t.passed(passed, vectors.length * 2);
    } catch {
      checkResult.textContent = t.failed;
    } finally {
      checkButton.disabled = false;
    }
  });
}

await initializeAegisDemo();
