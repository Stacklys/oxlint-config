import type { RuleMap } from '@src/global/type/rule_type';

import { COMPLEXITY, MAX_DEPTH, MAX_LINE, MAX_STATEMENTS } from '@src/global/constant/default_option';

const strictRules: RuleMap = {
  'accessor-pairs': 'error',
  'array-callback-return': ['error', { allowImplicit: true }],
  'block-scoped-var': 'error',
  complexity: ['error', COMPLEXITY],
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  eqeqeq: ['error', 'always'],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'capitalized-comments': [
    'error',
    'always',
    {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true
    }
  ],
  'class-methods-use-this': 'error',
  'id-length': [
    'error',
    {
      min: 2,
      exceptions: ['id', 'i', 'j', '-', '_', '__', 'k', 'z', 'x', 'y']
    }
  ],
  'init-declarations': 'error',
  'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
  'max-classes-per-file': ['error', 1],
  'max-depth': ['error', MAX_DEPTH],
  'max-lines': ['error', { max: MAX_LINE, skipBlankLines: true, skipComments: true }],
  'max-nested-callbacks': ['error', { max: 3 }],
  'max-params': ['error', { max: 5 }],
  'max-statements': ['error', MAX_STATEMENTS],
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-console': 'error',
  'no-continue': 'error',
  'no-div-regex': 'error',
  'no-empty-function': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': ['error', { lexicalBindings: true }],
  'no-implied-eval': 'error',
  'no-inline-comments': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ignoreArrayIndexes: true }],
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-object-constructor': 'error',
  'no-param-reassign': [
    'error',
    {
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'event',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'node',
        'response',
        '$scope',
        'staticContext'
      ],
      props: true
    }
  ],
  'no-plusplus': 'error',
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-exports': 'error',
  'no-restricted-globals': [
    'error',
    { message: 'Use Number.isFinite instead', name: 'isFinite' },
    { message: 'Use Number.isNaN instead', name: 'isNaN' }
  ],
  'no-restricted-imports': 'error',
  'no-restricted-properties': [
    'error',
    { message: 'arguments.callee is deprecated', object: 'arguments', property: 'callee' },
    { message: 'Please use Number.isFinite instead', object: 'global', property: 'isFinite' },
    { message: 'Please use Number.isFinite instead', object: 'self', property: 'isFinite' },
    { message: 'Please use Number.isFinite instead', object: 'window', property: 'isFinite' },
    { message: 'Please use Number.isNaN instead', object: 'global', property: 'isNaN' },
    { message: 'Please use Number.isNaN instead', object: 'self', property: 'isNaN' },
    { message: 'Please use Number.isNaN instead', object: 'window', property: 'isNaN' },
    { message: 'Please use Object.defineProperty instead.', property: '__defineGetter__' },
    { message: 'Please use Object.defineProperty instead.', property: '__defineSetter__' },
    { message: 'Use the exponentiation operator (**) instead.', object: 'Math', property: 'pow' }
  ],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': ['error', { builtinGlobals: false, hoist: 'all', ignoreOnInitialization: false }],
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef': 'error',
  'no-undefined': 'error',
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterSuper: false,
      allowAfterThis: false,
      enforceInMethodNames: true
    }
  ],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-use-before-define': ['error', { classes: true, functions: true, variables: true }],
  'no-useless-call': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'preserve-caught-error': ['error', { requireCatchParameter: false }],
  radix: 'error',
  'require-await': 'error',
  yoda: 'error'
};

export { strictRules };