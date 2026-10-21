// oxlint-disable max-statements
import type { LinterOption } from '@src/global/type/config_option';
import type { OxlintConfig } from 'oxlint';

const pluginOption = (options: LinterOption) => {
  const plugins: NonNullable<OxlintConfig['plugins']> = ['eslint', 'oxc', 'jsx-a11y', 'import', 'node', 'promise'];

  if (options.nextjs) {
    plugins.push('nextjs');
  }

  if (options.unicorn) {
    plugins.push('unicorn');
  }

  if (options.vitest) {
    plugins.push('vitest');
  }

  if (options.typescript) {
    plugins.push('typescript');
  }

  if (options.a11y) {
    plugins.push('jsx-a11y');
  }

  return plugins;
};

export { pluginOption };