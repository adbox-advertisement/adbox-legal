import { company as c } from '../config/company';
import { type Doc, note, p, table, ul } from './types';

export const privacy: Doc = {
  slug: 'privacy',
  title: 'Privacy notice',
  summary: 'What information Adbox collects, why, who it is shared with, and your rights.',
  group: 'Privacy',
  updated: '2026-10-19',
  intro: `This notice explains how ${c.legalName} ("${c.brand}") handles your personal data when you use the ${c.brand} app and our websites. We are the data controller, registered with Ghana’s Data Protection Commission under number ${c.dpcRegistration}. We follow the Data Protection Act, 2012 (Act 843).`,
  sections: [
    {
      id: 'summary',
      heading: 'The short version',
      blocks: [
        ul(
          'We collect what you give us (your account, profile and posts) and what we need to run Adbox (how you use it, your device, payment records).',
          'We use it to run your account, show you a feed, keep people safe, show ads and improve Adbox.',
          '**We do not sell your personal data.** Advertisers never receive your name, contact details or messages.',
          'Messages are private between the people in a chat, but they are **not end-to-end encrypted**. We can read a message only if it is reported to us, or if the law requires it.',
          `You can see, download, correct and delete your data. Download a copy in the app under Settings › Security & privacy › Request your data. It is ready within ${c.dataExportDays} days.`,
        ),
      ],
    },
    {
      id: 'what-we-collect',
      heading: 'What we collect',
      blocks: [
        table(
          ['Kind', 'Examples', 'Where it comes from'],
          [
            'Account',
            'Email, username, password (stored scrambled, never readable), date of birth, phone number if you add one, and which of Google, Apple or Facebook you sign in with',
            'You, and the sign-in provider you choose',
          ],
          [
            'Profile',
            'Name, photo, bio, gender, school, campus, status (student, alumni, staff), level, programme, graduation year, interests, creator role',
            'You',
          ],
          [
            'Content',
            'Posts, photos, videos, Glances, surveys and answers, comments, quotes, messages and pictures in chats',
            'You and the people you interact with',
          ],
          [
            'Activity',
            'Who you follow, likes, saves, hidden posts, searches, posts you open, how long you watch a video, Glances you viewed, events you RSVP to',
            'Your use of Adbox',
          ],
          [
            'Gold and ads',
            'Gold purchases, balance and history; ads you create, their budget and measured delivery',
            'You and Paystack',
          ],
          [
            'Device and technical',
            'Device model, operating system, app version, IP address, approximate location from your IP address, push notification token, crash and error reports',
            'Your device',
          ],
          [
            'Safety',
            'Reports you make or that are made about you, blocks, moderation decisions, sign-in records',
            'You, other users and our systems',
          ],
        ),
        p(
          'We do not collect your precise GPS location. Payment card or Mobile Money details are entered with Paystack, not with us; we receive only the result and a reference.',
        ),
      ],
    },
    {
      id: 'why',
      heading: 'Why we use it, and on what basis',
      blocks: [
        p('Act 843 allows us to process personal data only with a lawful reason. Ours are:'),
        table(
          ['Purpose', 'Lawful reason'],
          [
            'Create and run your account, show your profile and posts, deliver messages',
            'Needed to provide the service you asked for',
          ],
          [
            'Process gold purchases and ad payments',
            'Needed to provide the service; legal obligations for financial records',
          ],
          [
            'Rank your feed, Shorts, Discover and search, and suggest people',
            'Our legitimate interest in a relevant app (you can switch off "Suggest me in Discover")',
          ],
          [
            'Show ads, limit how often you see each one, and measure them',
            'Our legitimate interest in funding Adbox',
          ],
          [
            'Keep Adbox safe: fight spam, scams and abuse, act on reports',
            'Our legitimate interest, and legal obligations',
          ],
          [
            'Send push notifications',
            'Your consent, which you can withdraw in Settings or your phone’s settings',
          ],
          ['Verify your email and phone', 'Needed to secure your account'],
          ['Respond to lawful requests from authorities', 'Legal obligation'],
        ),
      ],
    },
    {
      id: 'who-sees',
      heading: 'Who can see your information on Adbox',
      blocks: [
        ul(
          '**Everyone, including people without an account**: your username, name, photo, bio, school and campus, creator role, follower counts and public posts.',
          '**People you choose**: Glances set to Followers, and messages in a chat.',
          '**Authors of Glances** see the username of everyone who viewed them.',
          '**Survey creators** see the answers to their surveys. They do not see your answers next to your name unless the survey says so.',
          '**Only you**: your email, phone number, date of birth, gold balance and history, saved posts and searches.',
        ),
      ],
    },
    {
      id: 'sharing',
      heading: 'Who we share it with',
      blocks: [
        p(
          'We share personal data only with organisations that help us run Adbox, under contracts that limit what they may do with it:',
        ),
        table(
          ['Provider', 'What for'],
          [
            'Amazon Web Services',
            'Hosting, storage of photos and videos, delivery of media, some email',
          ],
          ['Paystack', 'Processing gold purchases'],
          ['Google Firebase', 'Delivering push notifications'],
          ['Twilio', 'Sending phone verification codes'],
          ['Resend', 'Sending account emails'],
          ['Google, Apple, Facebook', 'Only if you sign in with them: confirming who you are'],
        ),
        p(
          'Advertisers receive only totals (people reached, views, clicks), never who you are. We may also share data when the law requires it, to protect someone’s safety, or if Adbox is sold or reorganised, in which case this notice will still apply.',
        ),
      ],
    },
    {
      id: 'abroad',
      heading: 'Storing data outside Ghana',
      blocks: [
        p(
          'Our main servers and some of our providers are outside Ghana, including in the United States. When we transfer data abroad we make sure it is protected to the standard Act 843 requires, through contracts with our providers and the security measures described in our [Security](/security) page.',
        ),
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      blocks: [
        table(
          ['Data', 'Kept for'],
          ['Your account and content', 'Until you delete them or your account'],
          ['Glances', '24 hours on Adbox; erased from storage within a further day'],
          [
            'A deleted account',
            `${c.deletionGraceDays} days (so you can change your mind), then erased`,
          ],
          [
            'Gold and payment records',
            'Six years after the transaction, with your identity removed where possible, for tax and dispute reasons',
          ],
          [
            'Reports and moderation records',
            'As long as needed for safety, normally up to two years',
          ],
          ['Activity and technical logs', 'Up to 18 months, then deleted or made anonymous'],
          ['Backups', 'Overwritten within 35 days'],
        ),
      ],
    },
    {
      id: 'rights',
      heading: 'Your rights',
      blocks: [
        p('Under Act 843 you have the right to:'),
        ul(
          `**Access** your personal data. In the app: Settings › Security & privacy › Request your data. We send a download link within ${c.dataExportDays} days, and it works for ${c.dataExportLinkDays} days.`,
          '**Correct** it. Most of it you can edit yourself in Edit profile.',
          `**Delete** it, by deleting posts or your whole account (Settings › Account › Delete account, or [from the web](/delete-account)).`,
          '**Object** to processing that causes you unwarranted damage or distress, and to direct marketing.',
          '**Not be subject to a decision made only by automated means** that significantly affects you, and to ask for a person to review it.',
          '**Withdraw consent** where we rely on it, such as push notifications.',
          '**Complain** to the Data Protection Commission.',
        ),
        p(
          `To use any right you cannot use in the app, email ${c.emails.privacy}. We may ask you to confirm your identity. We answer within 21 days. See [Your data protection rights](/data-protection) for more detail.`,
        ),
      ],
    },
    {
      id: 'children',
      heading: 'Young people',
      blocks: [
        p(
          `Adbox is not for anyone under ${c.minimumAge}. If you are under 18, we treat your information with extra care. Ads on Adbox are aimed only by campus status (student, alumni), never by sensitive characteristics, for anyone. If we learn we hold data about someone under ${c.minimumAge}, we delete it. Parents or guardians can contact ${c.emails.privacy}.`,
        ),
      ],
    },
    {
      id: 'security',
      heading: 'How we protect it',
      blocks: [
        p(
          'Data is encrypted between the app and our servers, passwords are stored as one-way hashes, private files such as chat pictures and data downloads are kept in private storage reached through short-lived links, and access within Adbox is limited to people who need it. No system is perfectly secure; if a breach puts you at risk we will tell you and the Data Protection Commission as the law requires.',
        ),
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this notice',
      blocks: [
        p(
          'We will update this notice when our practices change. The date at the top shows the last change, and we will tell you in the app about any significant change.',
        ),
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        p(`Data protection enquiries: ${c.emails.privacy}`),
        p(`Post: ${c.legalName}, ${c.address}`),
        note(
          'You can complain to the Data Protection Commission of Ghana at any time: [dataprotection.org.gh](https://www.dataprotection.org.gh). We would appreciate the chance to put things right first.',
        ),
      ],
    },
  ],
};
