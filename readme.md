<img src="./.github/asset/illustration/wave_header.svg" width="100%" />

<h1 id="top" align="center">
  <img src="./.github/asset/icon/oxlint.svg" width="28px" align="center" />
  Oxlint config
</h1>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">🛰️ FEATURES</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<img src="./.github/asset/illustration/oxlint_cover.svg" width="100%" />

<br />

<div align="center">
  <img src="./.github/asset/illustration/oxlint_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/bun_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/typescript_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
</div>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
High-performance, zero-config configuration package for **oxlint** and **oxfmt**, built to deliver lightning-fast linting and formatting without the overhead of traditional ESLint setups.
</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="table-of-content">
  <img src="./.github/asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="20px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/satellite.svg" width="20px" align="center" /> Features](#features)
- [<img src="./.github/asset/icon/thunder.svg" width="20px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="20px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="20px" align="center" /> Usage](#usage)
- [<img src="./.github/asset/icon/gear.svg" width="20px" align="center" /> Configuration](#configuration)

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="features">
  <img src="./.github/asset/icon/satellite.svg" width="24px" align="center" />
  Features
</h2>

- **Blazing Fast:** Powered by [Oxc](https://oxc.rs/) (written in Rust) for near-instant linting and code formatting.
- **Zero-Config DX:** Out-of-the-box support for TypeScript, React, and Astro development workflows.
- **Smart Formatting:** Automated import sorting, Tailwind CSS class organization, and strict code formatting via `oxfmt`.
- **Type-Safe:** Designed specifically to integrate seamlessly with modern module bundlers and TypeScript build tools like `tsdown`.

<br />

- <img src="./.github/asset/icon/eslint.svg" width="20px" align="center" /> `Eslint` - Linter core engine.
- <img src="./.github/asset/icon/tailwind.svg" width="20px" align="center" /> `Tailwind` - Organize Tailwind CSS classes effectively.
- <img src="./.github/asset/icon/react.svg" width="20px" align="center" /> `React` - Linting support for React components.
- <img src="./.github/asset/icon/next.svg" width="20px" align="center" /> `Next.js` - Linting support for Next.js projects.
- <img src="./.github/asset/icon/astro.svg" width="20px" align="center" /> `Astro` - Awesome Astro components linting.
- <img src="./.github/asset/icon/import.svg" width="20px" align="center" /> `Import` - Manage imports effectively.
- <img src="./.github/asset/icon/typescript.svg" width="20px" align="center" /> `Typescript` - Strong type safety for TS 6.0.
- <img src="./.github/asset/icon/unicorn.svg" width="20px" align="center" /> `Unicorn` - 100+ advanced modern rules.

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="24px" align="center" />
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.4.0**
- <img src="./.github/asset/icon/oxlint.svg" width="20px" align="center" /> oxlint >= **1.89.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D @stacklys/oxlint-config
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D @stacklys/oxlint-config
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D @stacklys/oxlint-config
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D @stacklys/oxlint-config
```

<br />

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
/>

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

To use `@stacklys/oxlint-config`, extend it in your linter configuration file. For example, in your `oxlint.config.ts`:

```ts
import { oxlintConfig } from "@stacklys/oxlint-config";

const config = oxlintConfig();

export default config;
```

If you want do use the formatter you can add the following to your `oxfmt.config.ts`:

```ts
import { oxfmtConfig } from "@stacklys/oxlint-config";

const config = oxfmtConfig();

export default config;
```

<br />

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
/>

<h2 id="configuration">
  <img src="./.github/asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>

To configure `@stacklys/oxlint-config`, you can pass options to the `oxlintConfig` function in your `oxlint.config.ts`. For example:

```ts
import { oxlintConfig } from "@stacklys/oxlint-config";

const config = oxlintConfig({
  typescript: true,
  a11y: true,
  react: true,
  nextjs: true,
  unicorn: true,
  vitest: true,
  astro: true,
});

export default config;
```

For configuring the formatter, you can pass options to the `oxfmtConfig` function in your `oxfmt.config.ts`. For example:

```ts
import { oxfmtConfig } from "@stacklys/oxlint-config";

const config = oxfmtConfig({
  astro: true,
  svelte: true,
});

export default config;
```

In case you can to override or configure additional rules inside the pre-defined configuration, you can pass the object in the respective configuration functions as shown below:

```ts
import { oxlintConfig } from "@stacklys/oxlint-config";

const lintConfig = oxlintConfig(
  {
    typescript: true,
  },
  {
    options: { typeAware: true },
    rules: {
      "typescript/type-annotation-spacing": "error",
    },
  },
);

export default lintConfig;
```

The default configuration for `oxlintConfig` is the next one:

```ts
// Example of default config
import { oxlintConfig } from "@stacklys/oxlint-config";

const config = oxlintConfig({
  typescript: true,
  unicorn: true,
  vitest: true,
});

export default config;
```

For the formatter, is the next one:

```ts
import { oxfmtConfig } from "@stacklys/oxlint-config";

const config = oxfmtConfig({
  printWidth: 180,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  arrowParens: "always",
  ignorePatterns: IGNORE, // Patterns to ignore during formatting
  sortPackageJson: true,
  astro: options.astro,
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertFinalNewline: false,
  jsxSingleQuote: true,
  objectWrap: "preserve",
  proseWrap: "preserve",
  quoteProps: "as-needed",
  singleAttributePerLine: true,
  sortTailwindcss: {
    preserveDuplicates: false,
  },
  sortImports: {
    newlinesBetween: true,
    partitionByNewline: false,
    internalPattern: ["~/", "@/", "@", "#"],
    groups: [
      "type",
      "side_effect_style",
      "side_effect",
      "style",
      "index",
      "sibling",
      "parent",
      "subpath",
      "internal",
      "builtin",
      "external",
      "import",
    ],
  },
  svelte: Boolean(options.svelte),
  vueIndentScriptAndStyle: true,
});

export default config;
```

<br />

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by Luis Monsalve and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" />
