import { company, unresolvedPlaceholders } from '../config/company';
import { docBySlug, docs, groupOrder } from '.';
import type { Block, Doc } from './types';

function texts(block: Block): string[] {
  switch (block.kind) {
    case 'p':
    case 'note':
      return [block.text];
    case 'list':
      return block.items;
    case 'table':
      return [...block.head, ...block.rows.flat()];
    case 'defs':
      return block.items.flatMap((item) => [item.term, item.text]);
  }
}
const allText = (doc: Doc) => [
  doc.intro ?? '',
  ...doc.sections.flatMap((s) => s.blocks.flatMap(texts)),
];

describe('documents', () => {
  it('have unique slugs, known groups and unique section ids', () => {
    expect(new Set(docs.map((doc) => doc.slug)).size).toBe(docs.length);
    for (const doc of docs) {
      expect(groupOrder).toContain(doc.group);
      const ids = doc.sections.map((section) => section.id);
      expect(new Set(ids).size, doc.slug).toBe(ids.length);
      expect(doc.sections.length, doc.slug).toBeGreaterThan(0);
      expect(doc.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('only link to pages and sections that exist', () => {
    for (const doc of docs) {
      for (const text of allText(doc)) {
        for (const [, , href] of text.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
          if (/^(https:|mailto:)/.test(href)) continue;
          const [path, anchor] = href.split('#');
          const target = docBySlug(path.replace(/^\//, ''));
          expect(target, `${doc.slug} links to ${href}`).toBeDefined();
          if (anchor)
            expect(
              target!.sections.map((s) => s.id),
              `${doc.slug} → ${href}`,
            ).toContain(anchor);
        }
      }
    }
  });

  it('write every table row with as many cells as its header', () => {
    for (const doc of docs)
      for (const section of doc.sections)
        for (const block of section.blocks)
          if (block.kind === 'table')
            for (const row of block.rows)
              expect(row.length, `${doc.slug}#${section.id}`).toBe(block.head.length);
  });

  it('cover the pages the app opens', () => {
    // Mirrors lib/features/settings/data/legal_links.dart in the app.
    for (const slug of [
      'terms',
      'privacy',
      'data-protection',
      'cookies',
      'ad-choices',
      'delete-account',
      'community-guidelines',
      'safety',
      'security',
      'help',
      'accessibility',
      'licenses',
      'credits',
    ])
      expect(docBySlug(slug), slug).toBeDefined();
  });

  it('state the deletion, export and gold rules consistently', () => {
    const terms = allText(docBySlug('terms')!).join(' ');
    expect(terms).toContain(`erased after ${company.deletionGraceDays} days`);
    expect(terms).toMatch(/gold left in your wallet is lost/i);
    const rights = allText(docBySlug('data-protection')!).join(' ');
    for (const part of ['Account history', 'Ads', 'Gold', 'Follows history'])
      expect(rights).toContain(part);
    expect(rights).toContain(`${company.dataExportDays} days`);
  });

  it('report every placeholder still to be filled in', () => {
    // When this list is empty the site is ready to publish.
    expect(unresolvedPlaceholders()).toEqual(
      expect.arrayContaining(['[COMPANY LEGAL NAME]', '[PRIVACY EMAIL]']),
    );
  });
});
