import { company as c } from '../config/company';
import { type Doc, note, ol, p, ul } from './types';

export const terms: Doc = {
  slug: 'terms',
  title: 'Terms of service',
  summary: 'The agreement between you and Adbox when you use the app or our websites.',
  group: 'Legal',
  updated: '2026-10-19',
  intro: `These terms are the agreement between you and ${c.legalName} ("${c.brand}", "we", "us"). They apply when you use the ${c.brand} app or any site we run. Please read them. If you do not agree, do not use ${c.brand}.`,
  sections: [
    {
      id: 'who-can-use',
      heading: 'Who can use Adbox',
      blocks: [
        p(
          `You must be at least ${c.minimumAge} years old to create an account. If you are under 18, you confirm that a parent or guardian has agreed to these terms with you.`,
        ),
        ul(
          'You may only have accounts you are allowed to have. If we have removed an account of yours, you may not open another without our permission.',
          'Business accounts may only reply to messages people send them, and must follow our [Ad choices](/ad-choices) rules when they advertise.',
          'You must give accurate information about yourself, including your school and campus status, and keep it up to date.',
        ),
      ],
    },
    {
      id: 'your-account',
      heading: 'Your account',
      blocks: [
        p(
          'You can sign up with an email and password, or with Google, Apple or Facebook. You can link more than one of these to the same account in the app under Settings › Account › Connected accounts.',
        ),
        ul(
          'Keep your password and the accounts you sign in with secure. You are responsible for what happens on your account.',
          `Tell us straight away at ${c.emails.security} if you think someone else has used your account.`,
          'Your username is permanent once chosen.',
        ),
      ],
    },
    {
      id: 'your-content',
      heading: 'What you post',
      blocks: [
        p(
          'You own what you create: posts, photos, videos, Glances, surveys, comments and messages. By posting it on Adbox you give us a worldwide, non-exclusive, royalty-free licence to host, store, copy, resize, transcode, display and distribute it so Adbox can work: showing it in feeds, Shorts, Discover, search and on your profile, and to people you send it to.',
        ),
        p(
          'This licence ends when you delete the content or your account, except where the content was shared by others (for example in a quote of your post), where we must keep it by law, or for backups that are erased on a normal cycle.',
        ),
        p(
          'You confirm that you have the rights to everything you post, including music and images.',
        ),
        p(
          'Glances disappear after 24 hours. Their author can see who viewed them. Anything you share can be screenshotted by others, so think before posting.',
        ),
      ],
    },
    {
      id: 'rules',
      heading: 'Rules you agree to follow',
      blocks: [
        p(
          'You must follow our [Community guidelines](/community-guidelines). In particular you must not:',
        ),
        ul(
          'harass, threaten, bully or impersonate anyone;',
          'post sexual content involving anyone under 18, or any non-consensual intimate images;',
          'post content that is illegal in Ghana or infringes someone else’s rights;',
          'spam, run scams, sell fake engagement, or mislead people about who you are;',
          'scrape, copy or collect information from Adbox by automated means without our written permission;',
          'try to break, overload or get around the security of Adbox.',
        ),
        p(
          'We may remove content or limit, suspend or close an account that breaks these terms or the guidelines. Where it is safe and lawful, we will tell you why and how to appeal.',
        ),
      ],
    },
    {
      id: 'gold',
      heading: 'Gold bars',
      blocks: [
        p(
          'Gold bars are a virtual item you buy in the app to pay for ads on Adbox. Payments are processed by Paystack. Gold is credited only after Paystack confirms the payment.',
        ),
        ul(
          'Gold has no cash value. It cannot be withdrawn, exchanged for money, sold or transferred to another account.',
          'Gold can only be spent on Adbox ads.',
          'Purchases are final, except where the law requires a refund or we have made a mistake. If you are charged and do not receive gold, contact us within 30 days.',
          `When an ad is stopped early, the unspent gold for it is returned to your wallet as gold, not money.`,
          `**If you delete your account, any gold left in your wallet is lost and cannot be refunded.**`,
        ),
      ],
    },
    {
      id: 'ads',
      heading: 'Ads and sponsored content',
      blocks: [
        p(
          'Adbox shows ads, including boosted posts, in feeds. They are always labelled Sponsored or Boosted. See [Ad choices](/ad-choices) for why you see them.',
        ),
        p(
          'If you advertise, you are responsible for your ad and the page it links to. Ads must be truthful, lawful and follow our ad rules. We may refuse, pause or stop an ad. Reach and engagement figures are measured by us and are estimates of delivery, not a guarantee of results.',
        ),
      ],
    },
    {
      id: 'privacy',
      heading: 'Your privacy',
      blocks: [
        p(
          'Our [Privacy notice](/privacy) explains what information we collect, why, and the rights you have under Ghana’s Data Protection Act, 2012 (Act 843).',
        ),
      ],
    },
    {
      id: 'ending',
      heading: 'Disabling or deleting your account',
      blocks: [
        p(
          'You can stop using Adbox at any time. In the app, Settings › Account gives you two choices:',
        ),
        ul(
          '**Disable account**: your profile, posts and Glances are hidden and you are signed out. Signing in again turns your account back on.',
          `**Delete account**: your account is scheduled for deletion and erased after ${c.deletionGraceDays} days. Signing in during those ${c.deletionGraceDays} days cancels the deletion. After that it cannot be undone. Gold in your wallet is lost.`,
        ),
        p(
          'You can also ask us to delete your account from the web: see [Delete your account](/delete-account).',
        ),
        p(
          'We may suspend or close your account if you seriously or repeatedly break these terms, if the law requires it, or if your account creates risk for others.',
        ),
      ],
    },
    {
      id: 'service',
      heading: 'Changes to Adbox',
      blocks: [
        p(
          'Adbox is changing quickly. We may add, change or remove features. Where a change materially affects you, we will tell you in the app before it takes effect.',
        ),
      ],
    },
    {
      id: 'liability',
      heading: 'Our responsibility to you',
      blocks: [
        p(
          'We work to keep Adbox safe and available, but we provide it "as is". We do not promise it will always be available or error-free, and we are not responsible for what other people post, say or do, on or off Adbox.',
        ),
        p(
          'Nothing in these terms limits any right you have that cannot be limited by Ghanaian law. Otherwise, to the extent the law allows, we are not liable for indirect or consequential losses, and our total liability to you is limited to the greater of the amount you paid us in the 12 months before the claim and GH₵ 100.',
        ),
      ],
    },
    {
      id: 'disputes',
      heading: 'Disagreements',
      blocks: [
        ol(
          `Contact us first at ${c.emails.legal}. Most problems are resolved quickly this way.`,
          'If we cannot resolve it within 30 days, either of us may refer the matter to mediation in Ghana.',
          'These terms are governed by the laws of the Republic of Ghana, and the courts of Ghana have jurisdiction.',
        ),
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      blocks: [
        p(
          'We may update these terms. The date at the top shows when they last changed. If a change is significant we will tell you in the app at least 14 days before it applies. Continuing to use Adbox after that means you accept the new terms.',
        ),
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        p(`${c.legalName}, ${c.address}. Company number ${c.registrationNumber}.`),
        p(`Email: ${c.emails.legal}`),
        note(
          'These terms are written in plain English. If anything in them conflicts with Ghanaian law, the law wins and the rest of the terms still apply.',
        ),
      ],
    },
  ],
};
