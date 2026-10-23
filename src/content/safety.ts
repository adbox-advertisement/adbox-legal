import { company as c } from '../config/company';
import { type Doc, note, ol, p, table, ul } from './types';

export const safety: Doc = {
  slug: 'safety',
  title: 'Safety centre',
  summary: 'Tools and advice to stay safe on Adbox, and where to get help.',
  group: 'Safety & help',
  updated: '2026-10-19',
  intro:
    'You decide who can reach you on Adbox. Here are the tools you have, and what to do if something goes wrong.',
  sections: [
    {
      id: 'emergency',
      heading: 'If you are in danger',
      blocks: [
        note(
          'If you or someone else is in immediate danger, call **112** (national emergency) or the police on **191**. Ambulance: **193**.',
          'warning',
        ),
        table(
          ['Help', 'Contact'],
          ['National emergency', '112'],
          ['Ghana Police Service', '191'],
          ['National Ambulance Service', '193'],
          ['Domestic Violence and Victim Support Unit (DOVVSU)', 'Any police station'],
          ['Cyber Security Authority (online fraud, sextortion, hacking)', 'Call or text 292'],
          ['Your campus', 'Your school’s counselling or welfare office, or hall tutor'],
        ),
      ],
    },
    {
      id: 'tools',
      heading: 'Your safety tools',
      blocks: [
        ul(
          '**Block**: from a profile or chat. Blocked people cannot message or follow you or see your posts. They are not told.',
          '**Report**: from the ⋯ menu on any post, comment, Glance, profile, message or ad.',
          '**Message requests**: a first message from someone you don’t follow waits in Requests. They are not told you saw it unless you accept.',
          '**Glance audience**: share a Glance with Everyone or Followers only. You can see who viewed each one, and delete it any time.',
          '**Hide posts**: tap ⋯ › Hide to remove a post from your feed.',
          '**Suggest me in Discover**: switch off in Edit profile and you are left out of People suggestions, trending people and search, unless someone types your exact username.',
          '**Mute and archive chats** so they stop notifying you.',
        ),
      ],
    },
    {
      id: 'scams',
      heading: 'Spotting scams',
      blocks: [
        p('Be careful if someone:'),
        ul(
          'promises a job, scholarship, admission or visa in return for money;',
          'offers cheap gold bars, or asks you to pay them instead of buying gold in the app;',
          'asks for your password, a verification code, or your Mobile Money PIN;',
          'pressures you to move the conversation to another app quickly;',
          'asks for intimate photos, or threatens to share photos unless you pay.',
        ),
        note(`${c.brand} will never ask for your password or a verification code in a message.`),
        p(
          'If someone threatens to share intimate images of you: do not pay, stop replying, keep the evidence, report and block them, and contact the Cyber Security Authority on 292. It is not your fault.',
        ),
      ],
    },
    {
      id: 'meeting',
      heading: 'Meeting people from Adbox',
      blocks: [
        ul(
          'Meet in a busy public place on campus, in daylight.',
          'Tell a friend where you are going and who you are meeting.',
          'Arrange your own transport.',
          'Leave if anything feels wrong. You do not owe anyone an explanation.',
        ),
      ],
    },
    {
      id: 'wellbeing',
      heading: 'Looking after yourself',
      blocks: [
        p(
          'Comparing yourself to other people’s best moments is hard. Take breaks, mute what drains you, and talk to someone you trust. Your school’s counselling service is free and confidential.',
        ),
      ],
    },
    {
      id: 'account',
      heading: 'Keeping your account secure',
      blocks: [
        ol(
          'Use a password you do not use anywhere else.',
          'Verify your email in Settings › Security & privacy, so you can recover your account.',
          'Link a second way to sign in (Google, Apple or Facebook) in Settings › Account › Connected accounts, in case you lose access to one.',
          'If we ask "Was this you?" about a new sign-in and it was not, tap **No, secure my account**.',
        ),
      ],
    },
    {
      id: 'parents',
      heading: 'For parents and guardians',
      blocks: [
        p(
          `Adbox is for people aged ${c.minimumAge} and over. If you believe your child is using Adbox under that age, or you are worried about their safety, email ${c.emails.safety} and we will act quickly.`,
        ),
      ],
    },
  ],
};
