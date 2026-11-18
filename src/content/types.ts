/* Gedeelde contenttypes voor kennisbank, juridische pagina's en cases. */

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string };

export type Author = "Frank Verbrugge" | "Kevin van Oosteren";

export type ArticleCta = "gesprek" | "websitecheck" | "scan";

export interface Article {
  slug: string;
  title: string;
  /** Meta description, 140 tot 160 tekens. */
  description: string;
  /** ISO-datum, bijvoorbeeld 2026-11-18. */
  date: string;
  updated?: string;
  author: Author;
  readingMinutes: number;
  primaryKeyword: string;
  intro: string;
  blocks: ContentBlock[];
  related: { href: string; label: string }[];
  cta: ArticleCta;
  /** Bronnen die in het artikel worden gebruikt. */
  sources?: { label: string; href: string }[];
}

export interface LegalDoc {
  title: string;
  description: string;
  updated: string;
  intro: string;
  blocks: ContentBlock[];
}
