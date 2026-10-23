import { creditGroups } from '../config/credits';
import { type Doc, p, ul } from './types';

const filled = creditGroups.filter((group) => group.people.length > 0);

export const credits: Doc = {
  slug: 'credits',
  title: 'Credits',
  summary: 'The people who helped build Adbox.',
  group: 'About',
  updated: '2026-10-19',
  intro: 'Adbox exists because of the people below. Thank you.',
  sections: filled.length
    ? filled.map((group) => ({
        id: group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        heading: group.title,
        blocks: [
          ul(
            ...group.people.map((person) =>
              person.role ? `**${person.name}**, ${person.role}` : `**${person.name}**`,
            ),
          ),
        ],
      }))
    : [
        {
          id: 'coming-soon',
          heading: 'Coming soon',
          blocks: [
            p(
              'We are putting this list together. Open-source credits are on the [Licences](/licenses) page.',
            ),
          ],
        },
      ],
};
