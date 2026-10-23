import { company as c } from '../config/company';
import { type Doc, ol, p, ul } from './types';

export const help: Doc = {
  slug: 'help',
  title: 'Help',
  summary: 'Answers to common questions about your account, posting, gold, ads and messages.',
  group: 'Safety & help',
  updated: '2026-10-19',
  sections: [
    {
      id: 'sign-in',
      heading: 'I can’t sign in',
      blocks: [
        ul(
          'The sign-in screen shows the method you used last on that phone, for example "You last signed in with Google".',
          'Forgot your password? Tap **Forgot password** on the sign-in screen and we email you a reset link.',
          'If you signed up with Google, Apple or Facebook, use the same button. Once you are in, link the others under Settings › Account › Connected accounts so this does not happen again.',
          `Still stuck? Email ${c.emails.support} from the address on your account.`,
        ),
      ],
    },
    {
      id: 'verify-email',
      heading: 'Verifying my email',
      blocks: [
        p(
          'Settings › Security & privacy shows whether your email is verified. Tap **Verify** and enter the code we email you. A verified email is how you recover your account.',
        ),
      ],
    },
    {
      id: 'posting',
      heading: 'Posting',
      blocks: [
        ul(
          'Tap **+** to post text, up to ten photos, or a video up to 10 minutes.',
          'A video filmed upright and 90 seconds or shorter also appears in Shorts.',
          'You can keep using Adbox while your post uploads. If it fails, tap **Try again** on the upload card.',
          'Glances are photos or clips up to 30 seconds that disappear after 24 hours.',
        ),
      ],
    },
    {
      id: 'gold',
      heading: 'Gold bars',
      blocks: [
        ul(
          'Gold is bought on the Gold page with Mobile Money or card through Paystack, and spent on ads.',
          'Gold appears once Paystack confirms the payment. That is usually immediate, but can take a few minutes.',
          'Gold cannot be cashed out or transferred.',
          `Charged but no gold after an hour? Email ${c.emails.support} with the Paystack reference from your receipt.`,
        ),
      ],
    },
    {
      id: 'ads',
      heading: 'Ads',
      blocks: [
        ul(
          'Create an ad from + › Ads, or from Profile › Ads.',
          'Profile › Ads shows each campaign’s reach, views and clicks.',
          'Stopping a campaign returns its unspent gold to your wallet.',
          'Read why you see ads in [Ad choices](/ad-choices).',
        ),
      ],
    },
    {
      id: 'messages',
      heading: 'Messages',
      blocks: [
        ul(
          'Messages from people you don’t follow wait in **Requests** until you accept them.',
          'You can edit a message for 15 minutes, and delete it for everyone for 24 hours.',
          'A message that fails to send stays with a **Try again** button and sends itself when you are back online.',
        ),
      ],
    },
    {
      id: 'account',
      heading: 'My account and data',
      blocks: [
        ul(
          `**Download your data**: Settings › Security & privacy › Request your data. Ready within ${c.dataExportDays} days.`,
          '**Take a break**: Settings › Account › Disable account. Sign in again to come back.',
          `**Delete your account**: Settings › Account › Delete account. It is erased after ${c.deletionGraceDays} days; gold in your wallet is lost. [Delete from the web](/delete-account).`,
        ),
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        ol(
          'In the app: Settings › Help & legal › Suggestions & feedback, which sends us your app version too.',
          `Email: ${c.emails.support}`,
          `Safety concern: ${c.emails.safety}, or see the [Safety centre](/safety).`,
        ),
      ],
    },
  ],
};
