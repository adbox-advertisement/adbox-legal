import { company as c } from '../config/company';
import { type Doc, p, ul } from './types';

export const accessibility: Doc = {
  slug: 'accessibility',
  title: 'Accessibility statement',
  summary:
    'How Adbox works for people with disabilities, what still falls short, and how to tell us.',
  group: 'About',
  updated: '2026-10-19',
  intro:
    'We want everyone to be able to use Adbox. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA in the app and on our websites. We are not there everywhere yet, and this page is honest about where we fall short.',
  sections: [
    {
      id: 'supported',
      heading: 'What works today',
      blocks: [
        ul(
          '**Larger text.** The app follows your phone’s text size, up to 200%. We test every screen at large sizes on small phones and never shrink text to make it fit.',
          '**Dark mode** follows your phone’s setting.',
          '**Screen readers.** Buttons and icons have spoken labels, and actions such as delete or mark read are available as screen-reader actions, not just swipes.',
          '**Contrast.** Text and controls are checked against WCAG contrast ratios in light and dark mode.',
          '**Reduced motion.** Decorative animations stop when your phone asks for reduced motion.',
          '**Keyboard access** on our websites and for key controls in the app.',
          '**One way back.** Every screen has the same back button in the same place, and pages can be swiped back from the left edge.',
        ),
      ],
    },
    {
      id: 'known-gaps',
      heading: 'Known gaps',
      blocks: [
        ul(
          'Videos, Shorts and Glances do not yet have captions unless the creator burns them in.',
          'Photos do not yet have alt text written by the person who posted them.',
          'Some swiping gestures, such as moving between tabs, have no button alternative on every screen.',
          'We have not yet completed a full test with TalkBack and VoiceOver users.',
        ),
        p('We are working on these and will update this page as they are fixed.'),
      ],
    },
    {
      id: 'feedback',
      heading: 'Tell us',
      blocks: [
        p(
          `If something on Adbox is hard for you to use, email ${c.emails.accessibility} or use Settings › Help & legal › Suggestions & feedback in the app. Tell us what you were trying to do and the device and assistive technology you use. We aim to reply within 5 working days.`,
        ),
      ],
    },
  ],
};
