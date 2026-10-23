// Writes one finished HTML file per page, so the site works on any static
// host with no rewrite rules: /terms is dist/terms/index.html. The browser
// then hydrates it; with JavaScript off, every page still reads in full.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssr = join(root, 'dist-ssr');

const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render, paths } = await import(pathToFileURL(join(ssr, 'entry-server.js')).href);
const site = 'https://legal.adboxgh.com';

for (const path of paths) {
  const { html, head } = render(path);
  const page = template.replace('<!--head-->', head).replace('<!--app-->', html);
  const file =
    path === '/'
      ? join(dist, 'index.html')
      : path === '/404'
        ? join(dist, '404.html')
        : join(dist, path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page);
  // Hosts differ on whether /terms means terms/index.html or terms.html;
  // writing both means a link without a trailing slash works everywhere.
  if (path !== '/' && path !== '/404') await writeFile(join(dist, `${path.slice(1)}.html`), page);
}

const pages = paths.filter((path) => path !== '/404');
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((path) => `  <url><loc>${site}${path === '/' ? '/' : path}</loc></url>`)
    .join('\n')}\n</urlset>\n`,
);
await writeFile(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`,
);
await rm(ssr, { recursive: true, force: true });
console.log(`Prerendered ${paths.length} pages.`);
