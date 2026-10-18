import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/format.ts'],
  format: ['esm'],
  splitting: false,
  clean: true,
  minify: true,
  external: ['oxfmt', 'oxlint']
});