import { company as c } from '../config/company';
import { type Doc, defs, note, ol, p, table, ul } from './types';

export const dataProtection: Doc = {
  slug: 'data-protection',
  title: 'Your data protection rights',
  summary:
    'Your rights under Ghana’s Data Protection Act, 2012 (Act 843), and how to use them on Adbox.',
  group: 'Privacy',
  updated: '2026-10-19',
  intro:
    'Ghana’s Data Protection Act, 2012 (Act 843) gives you control over information about you. This page explains each right in plain words and shows exactly where to use it on Adbox.',
  sections: [
    {
      id: 'the-law',
      heading: 'The law that protects you',
      blocks: [
        p(
          'Act 843 set up the Data Protection Commission and requires every organisation that handles personal data in Ghana to register with it and follow eight principles:',
        ),
        defs(
          [
            'Accountability',
            'We are responsible for how your data is handled, including by our providers.',
          ],
          ['Lawful processing', 'We need a lawful reason for everything we do with your data.'],
          [
            'Purpose specification',
            'We collect data for clear purposes and tell you what they are.',
          ],
          [
            'Compatible further use',
            'We do not use your data for something unrelated without a new lawful reason.',
          ],
          ['Quality of information', 'We keep your data accurate and let you correct it.'],
          ['Openness', 'We tell you what we do, in our [Privacy notice](/privacy).'],
          [
            'Security safeguards',
            'We protect your data against loss and misuse. See [Security](/security).',
          ],
          ['Data subject participation', 'You can take part: see, correct and delete your data.'],
        ),
        p(`${c.brand} is registered with the Commission under number ${c.dpcRegistration}.`),
        p(
          'Two other laws also apply to Adbox: the Electronic Transactions Act, 2008 (Act 772), which covers online agreements and payments, and the Cybersecurity Act, 2020 (Act 1038), which covers protecting systems and reporting cyber incidents.',
        ),
      ],
    },
    {
      id: 'rights',
      heading: 'Your rights and where to use them',
      blocks: [
        table(
          ['Right', 'What it means', 'On Adbox'],
          [
            'See your data',
            'Get a copy of the personal data we hold about you',
            `Settings › Security & privacy › Request your data. Ready within ${c.dataExportDays} days.`,
          ],
          [
            'Correct it',
            'Fix anything wrong or out of date',
            'Profile › ⋯ › Edit profile, or email us',
          ],
          [
            'Delete it',
            'Have your data erased',
            `Delete posts one by one, or Settings › Account › Delete account (erased after ${c.deletionGraceDays} days)`,
          ],
          [
            'Stop some processing',
            'Object to processing that causes you unwarranted damage or distress',
            `Email ${c.emails.privacy}`,
          ],
          [
            'Stop marketing',
            'Refuse direct marketing',
            'Notifications › settings › switch off News from Adbox',
          ],
          [
            'Human review',
            'Ask a person to look at a decision made only by a computer that significantly affects you, such as an automatic account restriction',
            `Reply to the notice, or email ${c.emails.safety}`,
          ],
          [
            'Be left out of suggestions',
            'Not be recommended to strangers',
            'Edit profile › switch off Suggest me in Discover',
          ],
          ['Complain', 'Raise a concern with the regulator', 'Data Protection Commission (below)'],
        ),
      ],
    },
    {
      id: 'download',
      heading: 'What is in your data download',
      blocks: [
        p('When you request your data you choose what to include:'),
        ul(
          '**Account history**: when the account was created, sign-ins, devices, email and phone verification, changes to your username or settings.',
          '**Your information**: profile, interests, campus details, posts, comments, surveys you made and answered, messages you sent.',
          '**Ads**: campaigns you created, their content, budget, status and measured delivery.',
          '**Gold**: every purchase, ad payment and refund, with dates and references.',
          '**Follows history**: who you follow, who follows you, and when.',
        ),
        p(
          `The file is a ZIP of readable JSON files, with a list of your photos and videos and links to download them. It is usually ready within minutes, and always within ${c.dataExportDays} days; we email you a link and it is also in the app. The link works for ${c.dataExportLinkDays} days. You can have one request in progress at a time.`,
        ),
      ],
    },
    {
      id: 'how-to-ask',
      heading: 'Asking by email',
      blocks: [
        ol(
          `Email ${c.emails.privacy} from the address on your account, and say which right you want to use.`,
          'We may ask a question to confirm it is you. We never ask for your password.',
          'We reply within 21 days. If we cannot do what you ask, we explain why.',
        ),
        p('There is no charge, unless a request is clearly excessive or repeated.'),
      ],
    },
    {
      id: 'regulator',
      heading: 'The Data Protection Commission',
      blocks: [
        p(
          'If you are unhappy with how we have handled your data, you can complain to the Data Protection Commission of Ghana. Please contact us first so we can try to put it right.',
        ),
        note(
          'Data Protection Commission: [dataprotection.org.gh](https://www.dataprotection.org.gh)',
        ),
      ],
    },
  ],
};
