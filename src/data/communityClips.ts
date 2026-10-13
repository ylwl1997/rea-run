import { getShowcase } from './showcase';

/**
 * Chinese install video gallery (“相关视频” on /zh/docs/install/).
 * Card copy lives here. Video src / poster / default frame come from the
 * shared showcase case (SHOWCASE_X_CASES) — do not duplicate asset paths.
 * Order is the on-page order. The toilet remote is the original card.
 */
export type ZhInstallClip = {
  caseId: string;
  kicker: string;
  title: string;
  blurb: string;
  hrefLabel: string;
  attribution: string;
  note: string;
  /** Override the case frame when the file is portrait but the case page is not. */
  frame?: 'portrait' | 'landscape';
};

export const ZH_INSTALL_VIDEO_GALLERY: ZhInstallClip[] = [
  {
    caseId: 'thinkszyg-toilet-ble',
    kicker: '社区引导视频',
    title: '状态栏马桶遥控（@thinkszyg）',
    blurb:
      '作者称用 Codex + REA 逆向微信小程序蓝牙协议，约半小时 vibe 出桌面状态栏遥控器。仅作授权／自有设备灵感。',
    hrefLabel: '打开完整案例 →',
    attribution: '来源：@thinkszyg · 指标快照约 10.9k 浏览／52 赞／47 书签（2026-10-12）',
    note: '合法边界：只分析你拥有或获准的设备与小程序资产。',
  },
  {
    caseId: 'greco-dev-tv',
    kicker: '社区引导视频',
    title: 'greco：自有电视（@greco_dev）',
    blurb:
      '@greco_dev 在葡萄牙语帖子里写「usei o rea」，并链到 GitHub 上的 REA。功能是作者自己的电视：切换应用／输入源、音量、遥控、镜像 Mac 屏幕、屏幕时间、亮度与对比度。仅作授权／自有设备灵感。',
    hrefLabel: '打开完整案例 →',
    attribution: '来源：@greco_dev · 快照 10,112 展示／379 赞／25 转发／287 书签（2026-10-13）',
    note: '合法边界：只分析你拥有或获准的电视、配套应用或固件。',
    frame: 'portrait',
  },
  {
    caseId: 'brorlandi-miscale',
    kicker: '社区引导视频',
    title: 'BrOrlandi：自有体脂秤（@BrOrlandi）',
    blurb:
      '@BrOrlandi 用一条编程智能体提示，为自有小米体脂秤做了本地蓝牙看板，并开源 miscale-dashboard。仅作自有设备灵感。',
    hrefLabel: '打开完整案例 →',
    attribution: '来源：@BrOrlandi · 快照约 55.6k 浏览／1,263 赞／494 书签（2026-10-13）',
    note: '合法边界：只分析你拥有或获准的秤。勿抓他人广播或绕过账号。',
  },
];

export function zhInstallVideoGallery() {
  return ZH_INSTALL_VIDEO_GALLERY.map((entry) => {
    const c = getShowcase(entry.caseId);
    const video = c?.media?.video;
    if (!c || c.status !== 'published' || !video?.src || !video.poster) {
      throw new Error(`ZH video gallery is missing a published self-hosted video for ${entry.caseId}`);
    }
    return {
      ...entry,
      src: video.src,
      poster: video.poster,
      frame: entry.frame ?? video.frame,
      href: `/zh/showcase/${c.id}/`,
    };
  });
}
