# Adbox legal site — legal.adboxgh.com

Terms, privacy notice, Ghana data-protection rights, cookie policy, ad
choices, account deletion, community guidelines, safety centre, security,
help, accessibility, licences and credits. The Adbox app opens these pages in
an in-app browser tab, so **page slugs are a contract** with the app
(`lib/features/settings/data/legal_links.dart`). Renaming one breaks shipped
apps; add a redirect instead.

## Commands

```sh
npm install
npm run dev        # http://127.0.0.1:5173
npm run check      # lint + tests + build
npm run build      # dist/: one finished HTML file per page
npm run preview
```

## How it is built

- React 19 + TypeScript + Vite, same stack as `adbox-recruitment`.
- Documents are data (`src/content/*.ts`), drawn by one renderer
  (`src/site/`). Text supports `**bold**`, `[label](/slug#anchor)`, bare
  emails, and `[PLACEHOLDERS]` (highlighted).
- `npm run build` renders every page to static HTML
  (`scripts/prerender.mjs`): `dist/terms/index.html` **and**
  `dist/terms.html`, plus `404.html`, `sitemap.xml`, `robots.txt`. Any static
  host works with no rewrite rules, and pages read in full without
  JavaScript. JavaScript only adds the index search and the theme toggle.
- No cookies, analytics or third-party requests.
- **Light and dark.** The header toggle cycles System → Light → Dark and is
  remembered in `localStorage`. `?theme=light|dark|system` overrides it for
  the rest of the visit (`sessionStorage`): the app passes its own mode so
  the in-app browser matches. An inline script (`src/site/theme-boot.ts`,
  injected by `vite.config.ts`) sets `<html data-theme>` before first paint,
  so a dark phone never flashes white. Colours are tokens in
  `src/styles/index.css`, defined for light, dark by device, and dark by
  choice.

## Before publishing

1. **Fill in `src/config/company.ts`.** While any `[PLACEHOLDER]` remains,
   every page shows a "Draft for review" banner. The test
   `report every placeholder still to be filled in` lists them.
2. **Add people to `src/config/credits.ts`** (and the app's
   `lib/features/settings/data/credits.dart`).
3. **Register with the Data Protection Commission** (Act 843 requires it)
   and put the number in `company.dpcRegistration`.
4. **Have a Ghanaian lawyer review the text.** It is a careful draft, not
   legal advice.
5. **Confirm these statements match how Adbox actually runs**. They are
   written as commitments but were not verified in code:
   - retention periods: logs 18 months, backups 35 days, moderation records
     2 years, payment records 6 years;
   - privacy requests answered within 21 days, appeals within 7, security
     reports acknowledged within 3 working days;
   - production servers in the United States (local config is `us-east-1`);
   - providers listed: AWS, Paystack, Firebase, Twilio, Resend;
   - Ghana help numbers (112, 191, 193, Cyber Security Authority 292);
   - features described as existing but **not yet built in the app**:
     in-app feedback and Sign in with Apple (needs a paid Apple Developer
     team). Everything else the pages describe is built: email
     verification, change password, blocked accounts, disable and delete
     account, request your data, Google and Facebook sign-in, Connected
     accounts and "You last signed in with …".
   - deletion erases the account's database records, but its files in S3
     (avatar, post media) are not yet deleted — a storage sweep is needed
     before `/privacy` and `/delete-account` are fully true. These are steps 2–5 of the plan; publish once they ship, or
     soften the wording.
6. Bump `updated` on any document whose meaning changes.

## Hosting

Deploy `dist/` to any static host at `legal.adboxgh.com` (S3 + CloudFront,
Netlify, Vercel, Cloudflare Pages). Point the host's 404 page at
`404.html`.
