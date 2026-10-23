/**
 * People Adbox thanks publicly. The app's Credits screen shows the same
 * list (lib/features/settings/data/credits.dart), so change both together.
 *
 * Empty groups are not drawn. Add people as { name, role }.
 */
export type Credit = { name: string; role?: string };
export type CreditGroup = { title: string; people: Credit[] };

export const creditGroups: CreditGroup[] = [
  { title: 'Founders', people: [] },
  { title: 'Team', people: [] },
  { title: 'Campus representatives', people: [] },
  { title: 'Early testers', people: [] },
  { title: 'Security researchers', people: [] },
  { title: 'Special thanks', people: [] },
];
