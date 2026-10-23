/**
 * Documents are data, not markup, so every page is drawn by one renderer and
 * a test can walk all of them (links, headings, placeholders) at once.
 *
 * Strings support two inline forms and nothing else:
 *   **bold**  and  [label](href)
 * An href starting with `/` is a page on this site; `mailto:` and `https:`
 * are passed through.
 */
export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'note'; tone: 'info' | 'warning'; text: string }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'defs'; items: { term: string; text: string }[] };

export type Section = {
  /** Anchor, so the app and other pages can link to one part. */
  id: string;
  heading: string;
  blocks: Block[];
};

export type DocGroup = 'Legal' | 'Privacy' | 'Safety & help' | 'About';

export type Doc = {
  slug: string;
  title: string;
  /** One sentence for the index card and the meta description. */
  summary: string;
  group: DocGroup;
  /** ISO date the text last changed in substance. */
  updated: string;
  /** Plain-language lead shown above the sections. */
  intro?: string;
  sections: Section[];
};

export const p = (text: string): Block => ({ kind: 'p', text });
export const ul = (...items: string[]): Block => ({ kind: 'list', items });
export const ol = (...items: string[]): Block => ({ kind: 'list', items, ordered: true });
export const note = (text: string, tone: 'info' | 'warning' = 'info'): Block => ({
  kind: 'note',
  tone,
  text,
});
export const table = (head: string[], ...rows: string[][]): Block => ({
  kind: 'table',
  head,
  rows,
});
export const defs = (...items: [string, string][]): Block => ({
  kind: 'defs',
  items: items.map(([term, text]) => ({ term, text })),
});
