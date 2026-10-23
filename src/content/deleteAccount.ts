import { company as c } from '../config/company';
import { type Doc, note, ol, p, table, ul } from './types';

export const deleteAccount: Doc = {
  slug: 'delete-account',
  title: 'Delete your account',
  summary:
    'How to delete your Adbox account, from the app or without it, and what happens to your data.',
  group: 'Privacy',
  updated: '2026-10-19',
  sections: [
    {
      id: 'in-the-app',
      heading: 'In the app',
      blocks: [
        ol(
          'Open Adbox and go to your Profile.',
          'Tap ⋯ › Settings › Account › Delete account.',
          'Read what will be removed, confirm it is you, and type DELETE.',
        ),
      ],
    },
    {
      id: 'without-the-app',
      heading: 'Without the app',
      blocks: [
        p(
          `Email ${c.emails.privacy} from the email address on your account, with the subject "Delete my account" and your username. We will reply to confirm it is you, then schedule the deletion.`,
        ),
      ],
    },
    {
      id: 'what-happens',
      heading: 'What happens next',
      blocks: [
        ul(
          'You are signed out on every device, and your profile, posts, Glances and comments are hidden straight away.',
          `For **${c.deletionGraceDays} days** you can change your mind: sign in and the deletion is cancelled.`,
          `After ${c.deletionGraceDays} days your account and its content are erased. This cannot be undone.`,
          'Any running ads are stopped.',
        ),
        note(
          `**Gold in your wallet is lost when your account is deleted and cannot be refunded.** Spend it on ads first if you want to use it.`,
          'warning',
        ),
      ],
    },
    {
      id: 'what-is-kept',
      heading: 'What we keep, and why',
      blocks: [
        table(
          ['Data', 'Why', 'How long'],
          [
            'Gold purchase and payment records',
            'Tax law and payment disputes',
            'Six years, with your identity removed where possible',
          ],
          [
            'Reports and moderation decisions about the account',
            'Keeping others safe, for example from someone returning after a ban',
            'Up to two years',
          ],
          [
            'Messages you sent',
            'They are part of the other person’s conversation too. They are shown as from "Deleted account"',
            'Until the other person deletes them',
          ],
          ['Backups', 'Recovering from failures', 'Overwritten within 35 days'],
        ),
        p(
          'Want a copy of your data first? Request it in Settings › Security & privacy › Request your data before you delete.',
        ),
      ],
    },
    {
      id: 'disable-instead',
      heading: 'Just need a break?',
      blocks: [
        p(
          'Settings › Account › **Disable account** hides your profile and posts and signs you out, without deleting anything. Sign in again whenever you are ready.',
        ),
      ],
    },
  ],
};
