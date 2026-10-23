import { company as c } from '../config/company';
import { type Doc, note, ol, p, table, ul } from './types';

export const communityGuidelines: Doc = {
  slug: 'community-guidelines',
  title: 'Community guidelines',
  summary: 'What is and is not allowed on Adbox, and what happens when the rules are broken.',
  group: 'Safety & help',
  updated: '2026-10-19',
  intro:
    'Adbox is for students, alumni and creators across Ghana to share, ask, laugh and find their people. These guidelines keep it a place people want to be. They apply to everything: posts, Glances, Shorts, comments, surveys, messages, profiles and ads.',
  sections: [
    {
      id: 'respect',
      heading: 'Respect people',
      blocks: [
        ul(
          '**No harassment or bullying.** Do not target, threaten, shame or pile on anyone, including in comments and messages.',
          '**No hate.** Do not attack people for their ethnicity, tribe, nationality, religion, disability, sex, gender, or any similar characteristic.',
          '**No threats or incitement to violence**, including against schools, halls or campuses.',
          '**No impersonation.** Do not pretend to be another person, a school, a lecturer, an SRC or a brand. Parody accounts must say so clearly.',
        ),
      ],
    },
    {
      id: 'safety',
      heading: 'Keep people safe',
      blocks: [
        ul(
          '**Nothing that sexualises anyone under 18.** We remove it, close the account and report it to the authorities.',
          '**No intimate images shared without consent**, and no threats to share them.',
          '**No sharing private information**: phone numbers, home or hostel addresses, ID cards, results or exam slips of other people.',
          '**No promoting self-harm or suicide.** Talking about mental health and asking for help is welcome. See our [Safety centre](/safety).',
          '**No dangerous challenges** or content that encourages people to hurt themselves or others.',
        ),
      ],
    },
    {
      id: 'honesty',
      heading: 'Be honest',
      blocks: [
        ul(
          '**No scams.** Fake jobs, scholarships, admissions, gold deals, "double your money", Mobile Money tricks.',
          '**No spam or fake engagement.** Do not buy, sell or trade likes, follows or views, or post the same thing over and over.',
          '**No exam malpractice.** Do not sell or share leaked papers or offer to write exams or assignments for others.',
          '**No harmful false information** about health, elections or emergencies.',
          '**Surveys must be what they say.** Do not use a survey to collect passwords, ID numbers or payment details.',
        ),
      ],
    },
    {
      id: 'legal',
      heading: 'Stay within the law',
      blocks: [
        ul(
          'Do not sell or promote illegal drugs, weapons, or anything illegal in Ghana.',
          'Do not post content you do not have the rights to: other people’s photos, music or videos without permission.',
          'Gambling and betting promotions are not allowed in posts or ads.',
        ),
      ],
    },
    {
      id: 'adult',
      heading: 'Nudity and graphic content',
      blocks: [
        p(
          'Nudity and sexual content are not allowed. Graphic violence is not allowed, except in limited news or awareness contexts, where it must not be the focus and must not be shown in Glances or Shorts.',
        ),
      ],
    },
    {
      id: 'enforcement',
      heading: 'What happens when rules are broken',
      blocks: [
        table(
          ['What', 'Usually'],
          ['A first, minor problem', 'The content is removed and you are told why'],
          ['Repeated problems', 'Features such as posting or messaging are limited for a time'],
          ['Serious or continued problems', 'The account is suspended or closed'],
          [
            'Child safety, credible threats, serious scams',
            'Immediate closure, and a report to the authorities where the law requires',
          ],
        ),
        p(
          'Ads that break these rules are stopped. Gold for the undelivered part is returned to the advertiser’s wallet, except for scams.',
        ),
      ],
    },
    {
      id: 'reporting',
      heading: 'Reporting',
      blocks: [
        ol(
          'Tap ⋯ on a post, comment, Glance, profile, message or ad and choose **Report**.',
          'Pick the closest reason and add detail if it helps.',
          'We review it. The person you report is not told who reported them.',
        ),
        p(
          'You can also **block** someone: they can no longer message you, follow you or see your profile and posts.',
        ),
      ],
    },
    {
      id: 'appeals',
      heading: 'Appeals',
      blocks: [
        p(
          `If you think we got a decision wrong, reply to the notice we sent you, or email ${c.emails.safety} with your username and what was removed. A different person reviews it. We aim to answer within 7 days.`,
        ),
        note(
          'If someone is in immediate danger, contact the police on 191 or call 112 first.',
          'warning',
        ),
      ],
    },
  ],
};
