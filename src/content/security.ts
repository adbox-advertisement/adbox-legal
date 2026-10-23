import { company as c } from '../config/company';
import { type Doc, note, ol, p, ul } from './types';

export const security: Doc = {
  slug: 'security',
  title: 'Security',
  summary: 'How Adbox protects your account and data, and how to report a vulnerability.',
  group: 'Safety & help',
  updated: '2026-10-19',
  sections: [
    {
      id: 'how-we-protect',
      heading: 'How we protect your data',
      blocks: [
        ul(
          '**Encryption in transit.** The app and our websites talk to our servers only over HTTPS.',
          '**Passwords are never stored readable.** We keep a one-way hash. Nobody at Adbox can see your password.',
          '**Private files stay private.** Photos in chats and data downloads are kept in private storage and reached through links that expire.',
          '**Short-lived sign-ins.** Access tokens expire after two hours and are refreshed automatically; a stolen token soon stops working.',
          '**New sign-in alerts.** We tell you when your account is used on a new device and let you secure it in one tap.',
          '**Limited access.** Only staff who need it for their job can reach personal data.',
          '**Payments by Paystack.** Card and Mobile Money details go to Paystack, not to us.',
        ),
        note(
          'Messages are protected in transit, but they are not end-to-end encrypted. Our moderators can read a conversation only when it is reported, and only the reported part.',
        ),
      ],
    },
    {
      id: 'your-part',
      heading: 'What you can do',
      blocks: [
        ul(
          'Use a unique password, and verify your email so you can recover your account.',
          'Link a second sign-in method in Settings › Account › Connected accounts.',
          'Never share a verification code. Adbox staff will never ask for it.',
          'Keep your phone’s software and the Adbox app up to date.',
        ),
      ],
    },
    {
      id: 'incidents',
      heading: 'If something goes wrong',
      blocks: [
        p(
          'If a security incident puts your personal data at risk, we will tell you without undue delay, explain what happened and what to do, and notify the Data Protection Commission and, where required under the Cybersecurity Act, 2020 (Act 1038), the Cyber Security Authority.',
        ),
      ],
    },
    {
      id: 'report',
      heading: 'Reporting a vulnerability',
      blocks: [
        p(
          `If you believe you have found a security problem in Adbox, please email ${c.emails.security}. Include:`,
        ),
        ol(
          'what you found and where;',
          'steps to reproduce it;',
          'what an attacker could do with it.',
        ),
        p('We will acknowledge your report within 3 working days and keep you updated. Please:'),
        ul(
          'give us a reasonable time to fix it before telling anyone else;',
          'only use accounts you own, and never access, change or delete other people’s data;',
          'not run tests that degrade Adbox for others (no denial of service, spam or social engineering of staff).',
        ),
        p(
          'We will not take legal action against anyone who reports in good faith and follows these rules, and we are glad to credit you in [Credits](/credits).',
        ),
      ],
    },
  ],
};
