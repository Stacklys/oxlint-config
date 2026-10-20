import type { RuleMap } from '@src/global/type/rule_type';

const typescriptRules: RuleMap = {
  'typescript/consistent-type-exports': 'error',
  'typescript/consistent-type-imports': [
    'error',
    {
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports'
    }
  ],
  'typescript/method-signature-style': 'error',
  'typescript/no-deprecated': 'error',
  'typescript/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      leadingUnderscore: 'allow'
    },
    {
      selector: 'typeLike',
      format: ['PascalCase', 'UPPER_CASE', 'camelCase', 'snake_case']
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case']
    },
    {
      format: null,
      modifiers: ['requiresQuotes'],
      selector: [
        'classProperty',
        'objectLiteralProperty',
        'typeProperty',
        'classMethod',
        'objectLiteralMethod',
        'typeMethod',
        'accessor',
        'enumMember'
      ]
    }
  ],
  'typescript/no-confusing-non-null-assertion': 'error',
  'typescript/no-generated-empty-object-type': 'error',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-require-imports': 'error',
  'typescript/no-unnecessary-parameter-property-assignment': 'error',
  'typescript/no-unnecessary-qualifier': 'error',
  'typescript/no-unsafe-unary-minus': 'error',
  'typescript/no-wrapper-object-types': 'error',
  'typescript/no-var-requires': 'error',
  'typescript/no-useless-empty-export': 'error',
  'typescript/no-useless-default-assignment': 'error',
  'typescript/no-unsafe-type-assertion': 'error',
  'typescript/only-throw-error': 'error',
  'typescript/non-nullable-type-assertion-style': 'error',
  'typescript/parameter-properties': 'error',
  'typescript/prefer-find': 'error',
  'typescript/prefer-readonly': 'error',
  'typescript/prefer-regexp-exec': 'error',
  'typescript/prefer-ts-expect-error': 'error',
  'typescript/promise-function-async': 'error',
  'typescript/require-array-sort-compare': 'error',
  'typescript/related-getter-setter-pairs': 'error',
  'typescript/switch-exhaustiveness-check': 'error',
  'typescript/strict-void-return': 'error',
  'typescript/strict-boolean-expressions': 'error',
  'typescript/return-await': 'error',
  'typescript/ban-ts-comment': [
    'error',
    {
      minimumDescriptionLength: 3,
      'ts-check': false,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true
    }
  ],
  'typescript/no-duplicate-enum-values': 'error',
  'typescript/no-explicit-any': 'error',
  'typescript/no-empty-object-type': 'error',
  'typescript/no-duplicate-type-constituents': 'error',
  'typescript/no-dynamic-delete': 'error',
  'typescript/no-empty-interface': 'error',
  'typescript/no-extra-non-null-assertion': 'error',
  'typescript/no-extraneous-class': 'error',
  'typescript/no-invalid-void-type': 'error',
  'typescript/no-misused-new': 'error',
  'typescript/no-namespace': 'error',
  'typescript/no-non-null-asserted-nullish-coalescing': 'error',
  'typescript/no-non-null-asserted-optional-chain': 'error',
  'typescript/no-non-null-assertion': 'error',
  'typescript/no-this-alias': 'error',
  'typescript/no-unnecessary-type-constraint': 'error',
  'typescript/no-unsafe-declaration-merging': 'error',
  'typescript/prefer-as-const': 'error',
  'typescript/prefer-literal-enum-member': 'error',
  'typescript/triple-slash-reference': 'error',
  'typescript/unified-signatures': 'error',
  'typescript/await-thenable': 'error',
  'typescript/no-array-delete': 'error',
  'typescript/no-base-to-string': 'error',
  'typescript/no-confusing-void-expression': 'error',
  'typescript/no-floating-promises': 'error',
  'typescript/no-for-in-array': 'error',
  'typescript/no-implied-eval': 'error',
  'typescript/no-meaningless-void-operator': 'error',
  'typescript/no-misused-promises': [
    'error',
    {
      checksVoidReturn: {
        arguments: false,
        attributes: false
      }
    }
  ],
  'typescript/no-mixed-enums': 'error',
  'typescript/no-misused-spread': 'error',
  'typescript/no-redundant-type-constituents': 'error',
  'typescript/no-unnecessary-boolean-literal-compare': 'error',
  'typescript/no-unnecessary-condition': 'error',
  'typescript/no-unnecessary-template-expression': 'error',
  'typescript/no-unnecessary-type-arguments': 'error',
  'typescript/no-unnecessary-type-assertion': 'error',
  'typescript/no-unnecessary-type-parameters': 'error',
  'typescript/no-unsafe-argument': 'error',
  'typescript/no-unsafe-assignment': 'error',
  'typescript/no-unsafe-call': 'error',
  'typescript/no-unnecessary-type-conversion': 'error',
  'typescript/no-unsafe-enum-comparison': 'error',
  'typescript/no-unsafe-member-access': 'error',
  'typescript/no-unsafe-function-type': 'error',
  'typescript/no-unsafe-return': 'error',
  'typescript/prefer-includes': 'error',
  'typescript/prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true
    }
  ],
  'typescript/prefer-reduce-type-parameter': 'error',
  'typescript/prefer-return-this-type': 'error',
  'typescript/require-await': 'error',
  'typescript/restrict-plus-operands': 'error',
  'typescript/restrict-template-expressions': 'error',
  'typescript/unbound-method': 'error',
  'typescript/use-unknown-in-catch-callback-variable': 'error',
  'typescript/dot-notation': 'error',
  'typescript/prefer-nullish-coalescing': [
    'error',
    {
      ignoreConditionalTests: true,
      ignoreTernaryTests: false,
      ignoreMixedLogicalExpressions: true
    }
  ],
  'typescript/prefer-optional-chain': 'error',
  'typescript/prefer-string-starts-ends-with': 'error',
  'typescript/adjacent-overload-signatures': 'error',
  'typescript/array-type': 'error',
  'typescript/ban-tslint-comment': 'error',
  'typescript/class-literal-property-style': 'error',
  'typescript/consistent-generic-constructors': 'error',
  'typescript/consistent-indexed-object-style': 'error',
  'typescript/consistent-type-assertions': 'error',
  'typescript/consistent-type-definitions': ['error', 'type'],
  'typescript/no-inferrable-types': 'error',
  'typescript/prefer-function-type': 'error',
  'typescript/prefer-namespace-keyword': 'error'
};

export { typescriptRules };