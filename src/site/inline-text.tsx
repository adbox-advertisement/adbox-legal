import { Fragment, type ReactNode } from 'react';

/**
 * The only formatting documents may use: **bold**, [label](href), bare email
 * addresses (linked), and [PLACEHOLDERS] (highlighted until filled in).
 */
const token =
  /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|(\[[A-Z][A-Z0-9 ]+\])|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(token)) {
    const index = match.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    const key = `${index}`;
    const [, bold, label, href, placeholder, email] = match;
    if (bold !== undefined) out.push(<strong key={key}>{renderInline(bold)}</strong>);
    else if (label !== undefined && href !== undefined) out.push(link(key, href, label));
    else if (placeholder !== undefined)
      out.push(
        <mark key={key} className="placeholder" title="To be confirmed before launch">
          {placeholder}
        </mark>,
      );
    else if (email !== undefined)
      out.push(
        <a key={key} href={`mailto:${email}`}>
          {email}
        </a>,
      );
    last = index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.map((node, i) => <Fragment key={i}>{node}</Fragment>);
}

function link(key: string, href: string, children: ReactNode) {
  return /^https?:/.test(href) ? (
    <a key={key} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <a key={key} href={href}>
      {children}
    </a>
  );
}
