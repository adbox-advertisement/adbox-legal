/**
 * Everything about Adbox the business that the documents quote.
 *
 * Values in square brackets are not known yet. They are written into the
 * pages as-is, so a reader sees an honest gap rather than an invented fact,
 * and `unresolvedPlaceholders()` is what the draft banner and the
 * pre-launch test read. Fill a value here and every page picks it up.
 */
export const company = {
  brand: 'Adbox',
  legalName: '[COMPANY LEGAL NAME]',
  registrationNumber: '[COMPANY REGISTRATION NUMBER]',
  address: '[REGISTERED OFFICE ADDRESS], Ghana',
  dpcRegistration: '[DATA PROTECTION COMMISSION REGISTRATION NUMBER]',
  minimumAge: '16',
  website: 'https://adboxgh.com',
  legalSite: 'https://legal.adboxgh.com',
  emails: {
    support: '[SUPPORT EMAIL]',
    privacy: '[PRIVACY EMAIL]',
    security: '[SECURITY EMAIL]',
    safety: '[SAFETY EMAIL]',
    legal: '[LEGAL EMAIL]',
    accessibility: '[ACCESSIBILITY EMAIL]',
  },
  /** How long a deleted account waits before it is erased for good. */
  deletionGraceDays: 30,
  /** How long a data download takes to prepare, at most. */
  dataExportDays: 14,
  /** How long the download link works once it is sent. */
  dataExportLinkDays: 7,
} as const;

const placeholder = /\[[A-Z][A-Z0-9 ]+\]/g;

/** Every bracketed placeholder still present in the company details. */
export function unresolvedPlaceholders(): string[] {
  const found = new Set<string>();
  const visit = (value: unknown) => {
    if (typeof value === 'string') value.match(placeholder)?.forEach((m) => found.add(m));
    else if (value && typeof value === 'object') Object.values(value).forEach(visit);
  };
  visit(company);
  return [...found].sort();
}

export const isDraft = () => unresolvedPlaceholders().length > 0;
