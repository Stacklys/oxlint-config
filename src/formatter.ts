import { defineConfig } from 'oxfmt';

import { INDENT, MAX_LINE_LENGTH, defaultFormatter } from '@src/global/constant/default_option';
import { IGNORE } from '@src/global/constant/ignore';

import type { FormatterOption } from '@src/global/type/config_option';
import type { OxfmtConfig } from 'oxfmt';

const oxfmtConfig = (options: FormatterOption = defaultFormatter, extraOptions?: OxfmtConfig) => {
  const config = defineConfig({
    printWidth: MAX_LINE_LENGTH,
    tabWidth: INDENT,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    arrowParens: 'always',
    ignorePatterns: [...IGNORE, '**/*.css', '**/*.scss'],
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
        'side_effect_style',
        'side_effect',
        'index',
        'sibling',
        'parent',
        'subpath',
        'external',
        'internal',
        'builtin',
        'import',
        'type',
        'style'
      ]
    },
    svelte: Boolean(options.svelte),
    vueIndentScriptAndStyle: true,
    ...extraOptions
  });

  return config;
};

export { oxfmtConfig };