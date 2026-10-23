import type { ReactElement } from 'react';
import { company } from '../config/company';
import { docBySlug, docs } from '../content';
import { DocPage } from './DocPage';
import { HomePage } from './HomePage';
import { NotFound } from './NotFound';

export type Route = {
  path: string;
  title: string;
  description: string;
  element: ReactElement;
};

const home: Route = {
  path: '/',
  title: `Legal & help · ${company.brand}`,
  description: `${company.brand}'s terms, privacy notice, community guidelines, safety centre and help.`,
  element: <HomePage />,
};

export const notFound: Route = {
  path: '/404',
  title: `Page not found · ${company.brand}`,
  description: 'This page does not exist.',
  element: <NotFound />,
};

/** Every path the build writes a page for. */
export const routes: Route[] = [
  home,
  ...docs.map((doc) => ({
    path: `/${doc.slug}`,
    title: `${doc.title} · ${company.brand}`,
    description: doc.summary,
    element: <DocPage doc={doc} />,
  })),
];

export function resolve(pathname: string): Route {
  const slug = pathname.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
  if (!slug) return home;
  const doc = docBySlug(slug);
  return doc ? routes.find((route) => route.path === `/${doc.slug}`)! : notFound;
}
