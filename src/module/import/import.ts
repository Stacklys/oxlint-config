import type { RuleMap } from '@src/global/type/rule_type';

const importRules: RuleMap = {
  'import/unambiguous': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-unassigned-import': 'error',
  'import/no-self-import': 'error',
  'import/no-namespace': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-amd': 'error',
  'import/no-cycle': 'error',
  'import/group-exports': 'error',
  'import/first': 'error',
  'import/default': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/no-anonymous-default-export': [
    'error',
    {
      allowCallExpression: false
    }
  ]
};

export { importRules };