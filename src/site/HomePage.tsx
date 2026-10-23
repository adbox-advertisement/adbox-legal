import { ChevronRight, Search } from 'lucide-react';
import { useId, useState } from 'react';
import { docs, groupOrder } from '../content';
import type { Doc } from '../content/types';

function matches(doc: Doc, query: string) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const haystack = [doc.title, doc.summary, ...doc.sections.map((section) => section.heading)]
    .join(' ')
    .toLowerCase();
  return words.every((word) => haystack.includes(word));
}

export function HomePage() {
  const [query, setQuery] = useState('');
  const searchId = useId();
  const shown = docs.filter((doc) => matches(doc, query));
  return (
    <div className="home">
      <h1>Legal &amp; help</h1>
      <p className="lead">
        How Adbox works, what we do with your information, and how to stay safe. Written to be read.
      </p>
      <div className="search">
        <label htmlFor={searchId} className="visually-hidden">
          Search pages
        </label>
        <Search size={18} aria-hidden="true" />
        <input
          id={searchId}
          type="search"
          placeholder="Search, for example “delete” or “gold”"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {groupOrder.map((group) => {
        const inGroup = shown.filter((doc) => doc.group === group);
        if (!inGroup.length) return null;
        return (
          <section key={group} className="group" aria-labelledby={`g-${group}`}>
            <h2 id={`g-${group}`}>{group}</h2>
            <ul className="cards">
              {inGroup.map((doc) => (
                <li key={doc.slug}>
                  <a className="card" href={`/${doc.slug}`}>
                    <span>
                      <strong>{doc.title}</strong>
                      <span className="card-summary">{doc.summary}</span>
                    </span>
                    <ChevronRight size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {!shown.length && (
        <p className="empty" role="status">
          Nothing matches “{query}”. Try another word, or see <a href="/help">Help</a>.
        </p>
      )}
    </div>
  );
}
