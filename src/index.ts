import type { LinterOption } from '@src/global/type/config_option';
import type { OxlintConfig } from 'oxlint';

import { pluginOption } from '@src/global/util/plugin_option';
import { a11yRules } from '@src/module/a11y/a11y_rules';
import { astroOverride } from '@src/module/astro/astro_override';
import { eslintRules } from '@src/module/eslint/eslint';
import { importRules } from '@src/module/import/import';
import { nextRules } from '@src/module/next/next_rule';
import { nodeRules } from '@src/module/node/node';
import { oxcRules } from '@src/module/oxc/oxc';
import { promiseRules } from '@src/module/promise/promise_rules';
import { reactRules } from '@src/module/react/react_rules';
import { typescriptRules } from '@src/module/typescript/typescript_rules';
import { unicornRules } from '@src/module/unicorn/unicorn_rules';
import { vitestRules } from '@src/module/vitest/vitest_rules';

import { defineConfig } from 'oxlint';

const oxlintConfig = (options: LinterOption, extraOptions?: OxlintConfig): OxlintConfig => {
  const plugins = pluginOption(options);

  const rules = {
    ...eslintRules,
    ...oxcRules,
    ...nodeRules,
    ...importRules,
    ...promiseRules,
    ...(options.a11y && a11yRules),
    ...(options.react && reactRules),
    ...(options.typescript && typescriptRules),
    ...(options.unicorn && unicornRules),
    ...(options.nextjs && nextRules),
    ...extraOptions?.rules
  };

  const { plugins: _, rules: __, options: extraNestedOptions, ...restExtra } = extraOptions ?? {};

  return defineConfig({
    plugins,
    rules,
    globals: {
      document: 'readonly',
      window: 'readonly',
      navigator: 'readonly',
      fetch: 'readonly',
      console: 'readonly',
      ...(options.astro ? { Astro: 'readonly' } : {}),
      ...extraOptions?.globals
    },
    options: {
      typeAware: Boolean(options.typescript),
      ...extraNestedOptions
    },
    overrides: [
      ...(options.astro ? astroOverride : []),
      ...(extraOptions?.overrides ?? []),
      {
        files: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],
        rules: options.vitest ? vitestRules : {}
      }
    ],
    ...restExtra
  });
};

export { oxlintConfig };