import type { ReactNode } from 'react';
import { company, isDraft } from '../config/company';
import { ThemeToggle } from './ThemeToggle';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Adbox Legal, all pages">
          <img src="/brand/adbox-mark.svg" alt="" width="28" height="28" />
          <span>
            {company.brand} <span className="brand-sub">Legal</span>
          </span>
        </a>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-link" href="/help">
            Help
          </a>
        </div>
      </header>
      {isDraft() && (
        <div className="draft" role="status">
          Draft for review. Details shown in <mark className="placeholder">[BRACKETS]</mark> are
          still to be confirmed.
        </div>
      )}
      <main id="main">{children}</main>
      <footer className="site-footer">
        <nav aria-label="Legal">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/cookies">Cookies</a>
          <a href="/community-guidelines">Guidelines</a>
          <a href="/safety">Safety</a>
          <a href="/accessibility">Accessibility</a>
        </nav>
        <p>
          © 2026 {company.legalName}. {company.address}.
        </p>
      </footer>
    </>
  );
}
