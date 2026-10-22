import type { OxlintOverride } from 'oxlint';

const typescriptOverrides: OxlintOverride[] = [
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/group-exports': 'off'
    }
  }
];

export { typescriptOverrides };