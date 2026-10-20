import type { RuleMap } from '@src/global/type/rule_type';

const promiseRules: RuleMap = {
  'promise/avoid-new': 'error',
  'promise/catch-or-return': 'error',
  'promise/no-multiple-resolved': 'error',
  'promise/no-nesting': 'error',
  'promise/no-new-statics': 'error',
  'promise/no-promise-in-callback': 'error',
  'promise/no-return-wrap': 'error',
  'promise/prefer-await-to-callbacks': 'error',
  'promise/prefer-await-to-then': 'error',
  'promise/valid-params': 'error'
};

export { promiseRules };