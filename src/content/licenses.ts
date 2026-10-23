import { type Doc, p, table } from './types';

export const licenses: Doc = {
  slug: 'licenses',
  title: 'Licences',
  summary: 'Open-source software, fonts, icons and images used in Adbox and on this site.',
  group: 'About',
  updated: '2026-10-19',
  intro:
    'Adbox is built with the help of open-source software and freely licensed content. We are grateful to the people who make it.',
  sections: [
    {
      id: 'app-software',
      heading: 'Software in the Adbox app',
      blocks: [
        p(
          'The Adbox app for iOS and Android is built with Flutter and many open-source packages. The full list, with the complete text of every licence, is in the app under Settings › System › Licences, generated from the packages the app actually ships with.',
        ),
      ],
    },
    {
      id: 'web-content',
      heading: 'Fonts, icons and images',
      blocks: [
        table(
          ['Item', 'Used in', 'Licence'],
          [
            'Manrope typeface, by Mikhail Sharanda',
            'App and websites',
            'SIL Open Font License 1.1',
          ],
          ['Material Icons, by Google', 'App', 'Apache License 2.0'],
          ['Cupertino Icons, by the Flutter authors', 'App', 'MIT License'],
          ['Lucide icons', 'Websites', 'ISC License'],
          [
            'Sample photos in Discover (food, music, sneakers, workspace)',
            'App, signed-out sample screens',
            'Unsplash License',
          ],
          [
            'Google, Apple and Facebook logos',
            'Sign-in buttons',
            'Trademarks of their owners, used under their brand guidelines',
          ],
        ),
        p(
          'The Adbox name, logo and artwork are trademarks and copyright of Adbox and may not be used without permission.',
        ),
      ],
    },
    {
      id: 'this-site',
      heading: 'This website',
      blocks: [p('This site is built with React (MIT License) and Vite (MIT License).')],
    },
  ],
};
