import type { RuleMap } from '@src/global/type/rule_type';

const styleRules: RuleMap = {
  'arrow-body-style': ['error', 'always'],
  curly: ['error', 'all'],
  'func-style': ['error', 'expression'],
  'new-cap': ['error', {
    capIsNew: false,
    capIsNewExceptions: [
      'Immutable.Map',
      'Immutable.Set',
      'Immutable.List'
    ],
    newIsCap: true,
    newIsCapExceptions: []
  }],
  'unicode-bom': ['error', 'never'],
  'no-else-return': ['error', { allowElseIf: false }],
  'no-lonely-if': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': ['error', {
    ignoreDestructuring: false,
    ignoreExport: false,
    ignoreImport: false
  }],
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false
    }
  ],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': ['error', {
    allowNamedFunctions: false,
    allowUnboundThis: true
  }],
  'prefer-const': ['error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: true
  }],
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: { array: true, object: false },
      VariableDeclarator: { array: false, object: true }
    },
    { enforceForRenamedProperties: false }
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'func-name-matching': ['error', { considerPropertyDescriptor: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'symbol-description': 'error',
  'vars-on-top': 'error',
  'func-names': [
    'error',
    'as-needed',
    { generators: 'never' }
  ]
};

export { styleRules };