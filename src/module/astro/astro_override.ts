import type { OxlintOverride } from 'oxlint';

const astroOverride: OxlintOverride[] = [
  {
    files: ['**/*.astro'],
    rules: {
      'import/unambiguous': 'off',
      'import/no-unassigned-import': 'off',
      'eslint/no-implicit-globals': 'off'
    }
  }
];

export { astroOverride };