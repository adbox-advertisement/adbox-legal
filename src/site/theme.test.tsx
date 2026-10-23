import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { bootScript } from './theme-boot';
import { nextTheme, resolveTheme, sessionKey, storageKey } from './theme';
import { ThemeToggle } from './ThemeToggle';

function runBoot(search: string) {
  window.history.replaceState(null, '', `/terms${search}`);
  delete document.documentElement.dataset.theme;
  new Function(bootScript)();
  return document.documentElement.dataset.theme;
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  delete document.documentElement.dataset.theme;
  document.head.innerHTML = '<meta name="theme-color" content="#191d22" />';
  window.history.replaceState(null, '', '/');
});

describe('theme', () => {
  it('takes the URL, then this visit, then the saved choice, then the device', () => {
    expect(resolveTheme('', null, null)).toBe('system');
    expect(resolveTheme('', null, 'light')).toBe('light');
    expect(resolveTheme('', 'dark', 'light')).toBe('dark');
    expect(resolveTheme('?theme=light', 'dark', 'dark')).toBe('light');
    expect(resolveTheme('?theme=purple', null, 'bogus')).toBe('system');
  });

  it('cycles system, light, dark', () => {
    expect(nextTheme('system')).toBe('light');
    expect(nextTheme('light')).toBe('dark');
    expect(nextTheme('dark')).toBe('system');
  });

  it('the inline boot script agrees with resolveTheme', () => {
    expect(runBoot('')).toBe('system');
    localStorage.setItem(storageKey, 'light');
    expect(runBoot('')).toBe('light');
    // The app asks for dark; it holds for the rest of the visit.
    expect(runBoot('?theme=dark')).toBe('dark');
    expect(sessionStorage.getItem(sessionKey)).toBe('dark');
    expect(runBoot('')).toBe('dark');
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      'content',
      '#111418',
    );
  });

  it('the boot script survives blocked storage', () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(runBoot('?theme=light')).toBe('light');
    getItem.mockRestore();
  });

  it('the toggle shows the current choice, cycles, and remembers it', async () => {
    document.documentElement.dataset.theme = 'light';
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /Theme: Light/ });

    await userEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem(storageKey)).toBe('dark');
    expect(button).toHaveAccessibleName('Theme: Dark. Switch to System.');

    await userEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe('system');
  });

  it('a choice made on the page beats what the app asked for', async () => {
    sessionStorage.setItem(sessionKey, 'dark');
    document.documentElement.dataset.theme = 'dark';
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole('button'));
    expect(sessionStorage.getItem(sessionKey)).toBeNull();
    expect(localStorage.getItem(storageKey)).toBe('system');
  });
});
