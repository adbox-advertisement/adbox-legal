import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderToString } from 'react-dom/server';
import { docs } from '../content';
import { App } from './App';
import { renderInline } from './inline-text';
import { resolve, routes } from './routes';

describe('inline text', () => {
  it('draws bold, links, placeholders and emails', () => {
    render(
      <p>
        {renderInline(
          '**Hi** see [Terms](/terms), [Regulator](https://example.org) [SUPPORT EMAIL] or a@b.co',
        )}
      </p>,
    );
    expect(screen.getByText('Hi').tagName).toBe('STRONG');
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms');
    const external = screen.getByRole('link', { name: 'Regulator' });
    expect(external).toHaveAttribute('target', '_blank');
    expect(external).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('[SUPPORT EMAIL]').tagName).toBe('MARK');
    expect(screen.getByRole('link', { name: 'a@b.co' })).toHaveAttribute('href', 'mailto:a@b.co');
  });
});

describe('routes', () => {
  it('resolve with or without a trailing slash, and unknown paths to not found', () => {
    expect(resolve('/terms').path).toBe('/terms');
    expect(resolve('/terms/').path).toBe('/terms');
    expect(resolve('/').path).toBe('/');
    expect(resolve('/nope').path).toBe('/404');
  });

  it('render every page on the server with one h1 and its sections', () => {
    for (const route of routes) {
      const html = renderToString(<App route={route} />);
      expect(html.match(/<h1/g)?.length, route.path).toBe(1);
    }
    const privacy = renderToString(<App route={resolve('/privacy')} />);
    expect(privacy).toContain('id="rights"');
    expect(privacy).toContain('On this page');
  });

  it('shows the draft banner while details are missing', () => {
    render(<App route={resolve('/terms')} />);
    expect(screen.getByRole('status')).toHaveTextContent('Draft for review');
  });
});

describe('index', () => {
  it('lists every page and filters by what you type', async () => {
    render(<App route={resolve('/')} />);
    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('link').length).toBe(docs.length);
    await userEvent.type(screen.getByLabelText('Search pages'), 'delete');
    const titles = within(main)
      .getAllByRole('link')
      .map((link) => link.textContent);
    expect(titles.some((t) => t?.startsWith('Delete your account'))).toBe(true);
    expect(titles.some((t) => t?.startsWith('Cookie policy'))).toBe(false);
    await userEvent.clear(screen.getByLabelText('Search pages'));
    await userEvent.type(screen.getByLabelText('Search pages'), 'zzzz');
    expect(screen.getByText(/Nothing matches/)).toBeInTheDocument();
  });
});
