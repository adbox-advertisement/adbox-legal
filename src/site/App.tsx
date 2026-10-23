import { Layout } from './Layout';
import type { Route } from './routes';

export function App({ route }: { route: Route }) {
  return <Layout>{route.element}</Layout>;
}
