import { eslintRules } from '@src/module/eslint/eslint';

import { defineConfig } from 'oxlint';

const config = defineConfig({
  rules: {
    ...eslintRules
  },
  options: {
    typeAware: true
  }
});

export default config;