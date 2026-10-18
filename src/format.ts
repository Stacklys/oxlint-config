import type { ConfigOption } from '@src/global/type/config_option';

import { INDENT, MAX_LINE_LENGTH, defaultFormatter } from '@src/global/constant/default_option';
import { IGNORE } from '@src/global/constant/ignore';

import { defineConfig } from 'oxfmt';

const formatConfig = (options: ConfigOption = defaultFormatter) => {
  const config = defineConfig({
    printWidth: MAX_LINE_LENGTH,
    tabWidth: INDENT,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    arrowParens: 'always',
    ignorePatterns: IGNORE,
    sortPackageJson: true,
    astro: options.astro,
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    insertFinalNewline: false,
    jsxSingleQuote: true,
    objectWrap: 'preserve',
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    singleAttributePerLine: true,
    sortTailwindcss: {
      preserveDuplicates: false
    },
    sortImports: {
      newlinesBetween: true,
      partitionByNewline: false,
      internalPattern: ['~/', '@/', '@', '#'],
      groups: [
        'type',
        'side_effect_style',
        'side_effect',
        'style',
        'index',
        'sibling',
        'parent',
        'subpath',
        'internal',
        'builtin',
        'external',
        'import'
      ]
    },
    svelte: Boolean(options.svelte),
    vueIndentScriptAndStyle: true
  });

  return config;
};

export { formatConfig };