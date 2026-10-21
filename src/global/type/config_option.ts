type LinterOption = {
  readonly astro?: boolean;
  readonly typescript?: boolean;
  readonly react?: boolean;
  readonly nextjs?: boolean;
  readonly vitest?: boolean;
  readonly unicorn?: boolean;
  readonly a11y?: boolean;
};

type FormatterOption = {
  readonly astro?: boolean;
  readonly svelte?: boolean;
};

export type { LinterOption, FormatterOption };