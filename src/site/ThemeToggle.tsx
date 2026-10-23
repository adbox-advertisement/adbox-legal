import { Monitor, Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { chooseTheme, currentTheme, nextTheme, type Theme, themeLabel } from './theme';

const icons = { system: Monitor, light: Sun, dark: Moon } as const;

/** The theme lives on <html data-theme>; watch it there. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

/**
 * Cycles System → Light → Dark. The server cannot know the reader's choice,
 * so it draws "System" and React swaps in the real value after hydrating;
 * the colours themselves are already right from the inline boot script.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, currentTheme, () => 'system');
  const next = nextTheme(theme);
  const Icon = icons[theme];
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => chooseTheme(next)}
      aria-label={`Theme: ${themeLabel[theme]}. Switch to ${themeLabel[next]}.`}
    >
      <Icon size={16} aria-hidden="true" />
      <span className="theme-toggle-label">{themeLabel[theme]}</span>
    </button>
  );
}
