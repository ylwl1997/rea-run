export type ShowcaseFootnote = {
  label: string;
  /** Prefer GitHub / primary project repos. Omit competitor doc sites. */
  url?: string;
};

export type ShowcaseRelation =
  | 'case-study'
  | 'wrapper'
  | 'packaging'
  | 'awesome'
  | 'demo'
  | 'writeup'
  | 'catalog';

export type ShowcaseGithubMeta = {
  url: string;
  stars?: number;
  language?: string;
  license?: string;
  /** ISO date YYYY-MM-DD (UTC snapshot) */
  updated?: string;
};

export type ShowcaseRating = {
  /** 1–5 community editorial score (rea.run opinion, not GitHub) */
  score: number;
  labelEn: string;
  labelZh: string;
  qualityEn: string;
  qualityZh: string;
  evidenceEn: string;
  evidenceZh: string;
  limitsEn: string;
  limitsZh: string;
  audienceEn: string;
  audienceZh: string;
};

export type ShowcaseRelated = { href: string; labelEn: string; labelZh: string };

/** Self-hosted media under /public (no X hotlinks). */
export type ShowcaseMediaImage = {
  src: string;
  /** Chinese-locale figure when the SVG itself contains translated labels. */
  srcZh?: string;
  altEn: string;
  altZh: string;
};

export type ShowcaseMediaVideo = {
  src: string;
  poster?: string;
  captionEn: string;
  captionZh: string;
  /** Vertical phone clips stay a column; landscape clips stay full width. */
  frame?: 'portrait';
};

export type ShowcaseMedia = {
  video?: ShowcaseMediaVideo;
  images?: ShowcaseMediaImage[];
};

export type ShowcaseCase = {
  id: string;
  date: string;
  status: 'placeholder' | 'published';
  attributionEn: string;
  attributionZh: string;
  tags: string[];
  footnotes: ShowcaseFootnote[];
  /** Optional dshbase-style directory fields */
  relation?: ShowcaseRelation;
  github?: ShowcaseGithubMeta;
  rating?: ShowcaseRating;
  complianceEn?: string;
  complianceZh?: string;
  related?: ShowcaseRelated[];
  /** Self-hosted clips / screenshots (public/media/…) */
  media?: ShowcaseMedia;
  en: {
    title: string;
    summary: string;
    lede: string;
    body: string[];
    takeaways: string[];
  };
  zh: {
    title: string;
    summary: string;
    lede: string;
    body: string[];
    takeaways: string[];
  };
};
