import { oxlintConfig } from "./dist/index.mjs";

const config = oxlintConfig({
  typescript: true,
  a11y: true,
  react: true,
  nextjs: true,
  unicorn: true,
  vitest: true,
  astro: true,
});

export default config;
