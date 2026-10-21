import { correctnessRules } from '@src/module/eslint/rule/correctness';
import { strictRules } from '@src/module/eslint/rule/strict';
import { styleRules } from '@src/module/eslint/rule/style';

const eslintRules = {
  ...strictRules,
  ...styleRules,
  ...correctnessRules
};

export { eslintRules };