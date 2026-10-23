import { accessibility } from './accessibility';
import { adChoices } from './adChoices';
import { communityGuidelines } from './communityGuidelines';
import { cookies } from './cookies';
import { credits } from './credits';
import { dataProtection } from './dataProtection';
import { deleteAccount } from './deleteAccount';
import { help } from './help';
import { licenses } from './licenses';
import { privacy } from './privacy';
import { safety } from './safety';
import { security } from './security';
import { terms } from './terms';
import type { Doc, DocGroup } from './types';

/**
 * Every page on the site, in the order the index shows them.
 *
 * The slugs are a contract with the app: `lib/features/settings/data/
 * legal_links.dart` opens `https://legal.adboxgh.com/<slug>`. Renaming one
 * breaks a shipped app, so add a redirect instead.
 */
export const docs: Doc[] = [
  terms,
  privacy,
  dataProtection,
  cookies,
  adChoices,
  deleteAccount,
  communityGuidelines,
  safety,
  security,
  help,
  accessibility,
  licenses,
  credits,
];

export const groupOrder: DocGroup[] = ['Legal', 'Privacy', 'Safety & help', 'About'];

export const docBySlug = (slug: string) => docs.find((doc) => doc.slug === slug);
