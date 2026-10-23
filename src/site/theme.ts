/**
 * Light, dark, or whatever the device asks for.
 *
 * Where the theme comes from, first match wins:
 *   1. `?theme=light|dark|system` on the URL. The Adbox app adds this so the
 *      in-app browser matches the app. It is kept for the rest of the visit
 *      (sessionStorage), so following a link does not flip the page back.
 *   2. The reader's own choice from the toggle (localStorage).
 *   3. The device setting.
 *
 * The same rules run twice: once in a tiny inline script in index.html, so
 * the first paint is already right (no white flash on a dark phone), and
 * here, for the toggle. Keep them in step: `bootScript` (theme-boot.ts) is
 * that inline script, and a test runs it against `resolveTheme`.
 */
import { sessionKey, storageKey } from './theme-boot';

export { sessionKey, storageKey };

export type Theme = 'system' | 'light' | 'dark';

export const themes: Theme[] = ['system', 'light', 'dark'];

export const isTheme = (value: unknown): value is Theme =>
  value === 'system' || value === 'light' || value === 'dark';

export function resolveTheme(search: string, session: string | null, stored: string | null): Theme {
  const fromUrl = new URLSearchParams(search).get('theme');
  if (isTheme(fromUrl)) return fromUrl;
  if (isTheme(session)) return session;
  if (isTheme(stored)) return stored;
  return 'system';
}

/** The next choice when the toggle is pressed. */
export const nextTheme = (theme: Theme): Theme =>
  themes[(themes.indexOf(theme) + 1) % themes.length];

export const themeLabel: Record<Theme, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};

/** Browser storage can be blocked or throw; the page must work without it. */
function read(storage: () => Storage, key: string): string | null {
  try {
    return storage().getItem(key);
  } catch {
    return null;
  }
}
function write(storage: () => Storage, key: string, value: string | null) {
  try {
    if (value === null) storage().removeItem(key);
    else storage().setItem(key, value);
  } catch {
    // Not remembered; it still applies to this page.
  }
}

export function currentTheme(): Theme {
  const applied = document.documentElement.dataset.theme;
  if (isTheme(applied)) return applied;
  return resolveTheme(
    window.location.search,
    read(() => sessionStorage, sessionKey),
    read(() => localStorage, storageKey),
  );
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  const dark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', dark ? '#111418' : '#ffffff');
}

/** The reader chose: remember it, and let it beat what the app asked for. */
export function chooseTheme(theme: Theme) {
  write(() => localStorage, storageKey, theme);
  write(() => sessionStorage, sessionKey, null);
  applyTheme(theme);
}
