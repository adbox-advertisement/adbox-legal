import { company as c } from '../config/company';
import { type Doc, p, table, ul } from './types';

export const cookies: Doc = {
  slug: 'cookies',
  title: 'Cookie policy',
  summary: 'The cookies and similar storage used by Adbox’s websites and the app.',
  group: 'Privacy',
  updated: '2026-10-19',
  intro:
    'Cookies are small files a website stores in your browser. Apps use similar storage on your phone. This page lists what Adbox stores and why.',
  sections: [
    {
      id: 'websites',
      heading: 'On our websites',
      blocks: [
        p(
          `${c.legalSite.replace('https://', '')} sets **no cookies** and uses no analytics or advertising trackers. Pages on our other sites that do need storage, such as the gold checkout page run by Paystack, are covered by the cookie notice on that page.`,
        ),
        p(
          'If you choose light or dark with the theme button, your browser remembers that choice on your device so the next page matches. It never leaves your device, and clearing your browser’s site data removes it.',
        ),
      ],
    },
    {
      id: 'app',
      heading: 'In the Adbox app',
      blocks: [
        p('The app does not use cookies, but stores some things on your phone so it works:'),
        table(
          ['What', 'Why', 'How long'],
          ['Sign-in tokens', 'Keep you signed in', 'Until you sign out, or the session expires'],
          [
            'Your account id and basic profile',
            'Open the app on your account straight away',
            'Until you sign out',
          ],
          [
            'Unsent messages and posts being uploaded',
            'Send them when the connection returns',
            'Until sent or removed',
          ],
          [
            'Drafts of quotes and messages',
            'Keep what you were writing',
            'Until published, discarded, or you sign out',
          ],
          ['Pictures from chats', 'Show them without downloading again', 'Up to 30 days'],
          [
            'Push notification token',
            'Deliver notifications to this phone',
            'Until you turn notifications off or sign out',
          ],
          [
            'Settings such as followed schools and the last way you signed in',
            'Remember your choices on this phone',
            'Until changed or the app is removed',
          ],
        ),
        p(
          'All of this is needed for the app to work. None of it is used to track you across other apps or websites.',
        ),
      ],
    },
    {
      id: 'sign-in',
      heading: 'Signing in with Google, Apple or Facebook',
      blocks: [
        p(
          'When you sign in with one of these, their own sign-in page may set cookies under their own policies. Adbox receives only what you agree to share with us there.',
        ),
      ],
    },
    {
      id: 'control',
      heading: 'Your choices',
      blocks: [
        ul(
          'Signing out removes your sign-in tokens and drafts from the phone.',
          'Removing the app removes everything it stored on the phone.',
          'Your browser settings let you block or delete cookies on any website.',
        ),
      ],
    },
  ],
};
