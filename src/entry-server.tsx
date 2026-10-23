import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { company } from './config/company';
import { App } from './site/App';
import { notFound, resolve, routes } from './site/routes';

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const paths = [...routes.map((route) => route.path), notFound.path];

export function render(path: string) {
  const route = path === notFound.path ? notFound : resolve(path);
  const html = renderToString(
    <StrictMode>
      <App route={route} />
    </StrictMode>,
  );
  const canonical =
    route === notFound ? '' : `${company.legalSite}${route.path === '/' ? '' : route.path}`;
  const head = [
    `<title>${escape(route.title)}</title>`,
    `<meta name="description" content="${escape(route.description)}" />`,
    `<meta property="og:title" content="${escape(route.title)}" />`,
    `<meta property="og:description" content="${escape(route.description)}" />`,
    canonical && `<link rel="canonical" href="${canonical}" />`,
  ]
    .filter(Boolean)
    .join('\n    ');
  return { html, head };
}
