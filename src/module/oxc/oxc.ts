import type { RuleMap } from '@src/global/type/rule_type';

const oxcRules: RuleMap = {
  'oxc/const-comparisons': 'error',
  'oxc/double-comparisons': 'error',
  'oxc/erasing-op': 'error',
  'oxc/misrefactored-assign-op': 'error',
  'oxc/missing-throw': 'error',
  'oxc/no-accumulating-spread': 'error',
  'oxc/no-async-endpoint-handlers': 'error',
  'oxc/no-barrel-file': 'error',
  'oxc/approx-constant': 'error',
  'oxc/bad-array-method-on-arguments': 'error',
  'oxc/bad-bitwise-operator': 'error',
  'oxc/bad-char-at-comparison': 'error',
  'oxc/bad-comparison-sequence': 'error',
  'oxc/bad-match-all-arg': 'error',
  'oxc/bad-min-max-func': 'error',
  'oxc/bad-object-literal-comparison': 'error',
  'oxc/bad-replace-all-arg': 'error',
  'oxc/branches-sharing-code': 'error'
};

export { oxcRules };