import { a11yRules } from '@src/module/a11y/a11y_rules';
import { eslintRules } from '@src/module/eslint/eslint';
import { importRules } from '@src/module/import/import';
import { nodeRules } from '@src/module/node/node';
import { oxcRules } from '@src/module/oxc/oxc';

import { defineConfig } from 'oxlint';

const config = defineConfig({
  plugins: ['oxc', 'jsx-a11y', 'import', 'node'],
  rules: {
    ...eslintRules,
    ...oxcRules,
    ...nodeRules,
    ...importRules,
    ...a11yRules
  },
  options: {
    typeAware: true
  }
});

export default config;