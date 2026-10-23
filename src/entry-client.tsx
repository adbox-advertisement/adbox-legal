import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './site/App';
import { resolve } from './site/routes';
import './styles/index.css';

const container = document.getElementById('root')!;
const route = resolve(window.location.pathname);
const app = (
  <StrictMode>
    <App route={route} />
  </StrictMode>
);

// Built pages arrive already rendered; the dev server sends an empty shell.
if (container.firstElementChild) hydrateRoot(container, app);
else {
  document.title = route.title;
  createRoot(container).render(app);
}
