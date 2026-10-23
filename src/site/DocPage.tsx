import { ChevronLeft } from 'lucide-react';
import type { Doc } from '../content/types';
import { BlockView } from './Blocks';
import { formatDate } from './format';
import { Inline } from './Inline';

export function DocPage({ doc }: { doc: Doc }) {
  const showContents = doc.sections.length > 2;
  return (
    <article className="doc">
      <a className="back" href="/">
        <ChevronLeft size={18} aria-hidden="true" /> All pages
      </a>
      <p className="eyebrow">{doc.group}</p>
      <h1>{doc.title}</h1>
      <p className="updated">
        Last updated <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
      </p>
      {doc.intro && (
        <p className="lead">
          <Inline text={doc.intro} />
        </p>
      )}
      <div className={showContents ? 'doc-body with-contents' : 'doc-body'}>
        {showContents && (
          <nav className="contents" aria-label="On this page">
            <details open>
              <summary>On this page</summary>
              <ol>
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </details>
          </nav>
        )}
        <div className="sections">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
              <h2 id={`${section.id}-h`}>
                <a className="anchor" href={`#${section.id}`}>
                  {section.heading}
                </a>
              </h2>
              {section.blocks.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
