import type { LinterOption } from '@src/global/type/config_option';

const INDENT = 2;
const MAX_LINE_LENGTH = 120;
const COMPLEXITY = 20;
const MAX_DEPTH = 4;
const MAX_STATEMENTS = 10;
const MAX_LINE = 300;

const defaultFormatter = {
  astro: false,
  svelte: false
};

const defaultOption: LinterOption = {
  typescript: true,
  unicorn: true,
  vitest: true
};

export { INDENT, defaultOption, MAX_LINE, MAX_DEPTH, COMPLEXITY, MAX_STATEMENTS, MAX_LINE_LENGTH, defaultFormatter };