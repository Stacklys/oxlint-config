import type { RuleMap } from '@src/global/type/rule_type';

const nodeRules: RuleMap = {
  'node/no-path-concat': 'error',
  'node/no-new-require': 'error',
  'node/no-mixed-requires': 'error',
  'node/no-exports-assign': 'error',
  'node/handle-callback-err': 'error',
  'node/exports-style': 'error',
  'node/callback-return': 'error'
};

export { nodeRules };