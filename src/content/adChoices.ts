import { company as c } from '../config/company';
import { type Doc, note, p, table, ul } from './types';

export const adChoices: Doc = {
  slug: 'ad-choices',
  title: 'Ad choices',
  summary: 'Why you see the ads you see on Adbox, how they are labelled, and what you can do.',
  group: 'Privacy',
  updated: '2026-10-19',
  intro:
    'Ads keep Adbox free. This page explains how ads reach you, what information is used, and the choices you have.',
  sections: [
    {
      id: 'labels',
      heading: 'How to recognise an ad',
      blocks: [
        ul(
          '**Sponsored**: an ad made for Adbox: a picture, video, carousel, event, profile or survey.',
          '**Boosted**: an ordinary post that its author has paid to show to more people.',
        ),
        p(
          'Every ad carries one of these labels. Ads are never disguised as normal posts or messages.',
        ),
      ],
    },
    {
      id: 'why-this-ad',
      heading: 'Why you see an ad',
      blocks: [
        p('Advertisers on Adbox can choose only one thing about who sees their ad:'),
        table(
          ['Choice', 'Who sees it'],
          ['All', 'Anyone on Adbox'],
          ['Students', 'People whose profile says they are students'],
          ['Alumni', 'People whose profile says they are alumni'],
        ),
        p(
          'After that, Adbox decides who sees an ad and when, so that each campaign is spread evenly over its days. We use:',
        ),
        ul(
          'your campus status from your profile;',
          'how many times you have already seen that ad today;',
          'the campaign’s budget and how far through it is.',
        ),
        note(
          'We do **not** use your messages, your precise location, or sensitive characteristics such as religion, health, ethnicity or political views to choose ads. Advertisers cannot target individual people.',
        ),
      ],
    },
    {
      id: 'limits',
      heading: 'Limits we set',
      blocks: [
        ul(
          'You see each ad at most three times a day.',
          'Ads are spaced out in your feed: the first after a few posts, then no more than one in every nine.',
          'You never see your own ads counted as reach.',
        ),
      ],
    },
    {
      id: 'measurement',
      heading: 'What advertisers learn',
      blocks: [
        p(
          'Advertisers see totals only: how many people an ad reached, how many times it was seen, and how many clicks and interactions it got. They do not see who you are. An ad is counted as seen when at least half of it is on your screen.',
        ),
      ],
    },
    {
      id: 'your-choices',
      heading: 'What you can do',
      blocks: [
        ul(
          'Tap ⋯ on an ad and choose **Not interested** or **Hide** to see less like it.',
          'Choose **Report** if an ad is misleading, offensive or a scam. We review every report.',
          'Your campus status is in Edit profile. If it is wrong, change it there.',
        ),
      ],
    },
    {
      id: 'advertisers',
      heading: 'Advertising on Adbox',
      blocks: [
        p(
          'Ads are paid for with gold bars and must follow our [Terms of service](/terms#ads) and [Community guidelines](/community-guidelines). Ads must be truthful, must not promote anything illegal in Ghana, and must link only to secure (https) pages. We may refuse or stop any ad.',
        ),
        p(`Questions about advertising: ${c.emails.support}`),
      ],
    },
  ],
};
