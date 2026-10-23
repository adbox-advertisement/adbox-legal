import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { bootScript } from './src/site/theme-boot.ts';

/** Sets the theme before the first paint, in dev and in every built page. */
const themeBoot = (): Plugin => ({
  name: 'adbox-theme-boot',
  transformIndexHtml: () => [{ tag: 'script', children: bootScript, injectTo: 'head' }],
});

export default defineConfig({
  plugins: [react(), themeBoot()],
  build: { target: 'es2022', sourcemap: false },
});
