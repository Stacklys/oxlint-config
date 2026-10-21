import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/format.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  minify: true,
  deps: {
    neverBundle: ['oxlint', 'oxfmt']
  }
});