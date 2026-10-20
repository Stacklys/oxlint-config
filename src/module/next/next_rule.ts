import type { RuleMap } from '@src/global/type/rule_type';

const nextRules: RuleMap = {
  'nextjs/no-unwanted-polyfillio': 'error',
  'nextjs/no-typos': 'error',
  'nextjs/no-title-in-document-head': 'error',
  'nextjs/no-sync-scripts': 'error',
  'nextjs/no-styled-jsx-in-document': 'error',
  'nextjs/no-script-component-in-head': 'error',
  'nextjs/no-page-custom-font': 'error',
  'nextjs/no-html-link-for-pages': 'error',
  'nextjs/no-head-import-in-document': 'error',
  'nextjs/no-head-element': 'error',
  'nextjs/no-duplicate-head': 'error',
  'nextjs/no-document-import-in-page': 'error',
  'nextjs/no-css-tags': 'error',
  'nextjs/no-before-interactive-script-outside-document': 'error',
  'nextjs/no-async-client-component': 'error',
  'nextjs/no-assign-module-variable': 'error',
  'nextjs/next-script-for-ga': 'error',
  'nextjs/inline-script-id': 'error',
  'nextjs/google-font-preconnect': 'error',
  'nextjs/google-font-display': 'error'
};

export { nextRules };