# eslint-config-ts-guard

Set of configuration files ([shareable configs](https://eslint.org/docs/developer-guide/shareable-configs))
for [ESLint](https://eslint.org) to guard/protect from problems in different areas of JavaScript and TypeScript development.

Extends [eslint-config-guard](https://github.com/gamtiq/eslint-config-guard).

Includes:

* `ts-guard` - configuration for TypeScript-related rules; extends [`guard/optimum-next`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard) and [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin);
* `ts-guard/ext` - configuration for TypeScript-related type-aware rules; extends `ts-guard` and [`plugin:@typescript-eslint/recommended-requiring-type-checking`](https://typescript-eslint.io/docs/linting/type-linting/);
  to use the configuration you should specify `parserOptions.project` in ESLint config file (see [details](https://typescript-eslint.io/docs/linting/type-linting/)).
* `ts-guard/test` - appropriate for use in tests (relaxes some rules from other configs); extends [`guard/test`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/test-jest` - appropriate for use in [Jest](https://jestjs.io/) tests; extends `ts-guard/test` and [`guard/test-jest`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/test-mocha` - appropriate for use in [Mocha](https://mochajs.org/) tests; extends `ts-guard/test` and [`guard/test-mocha`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard).

The following files re-export corresponding configs from [eslint-config-guard](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard):

* `ts-guard/guard` - re-exports [`guard`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/editor` - re-exports [`guard/editor`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/esnext` - re-exports [`guard/esnext`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/ext-style` - re-exports [`guard/ext-style`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/indent` - re-exports [`guard/indent`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/jsdoc` - re-exports [`guard/jsdoc`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/no-prettier` - re-exports [`guard/no-prettier`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/node` - re-exports [`guard/node`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/optimum` - re-exports [`guard/optimum`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/optimum-next` - re-exports [`guard/optimum-next`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/proper-arrows` - re-exports [`guard/proper-arrows`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/react` - re-exports [`guard/react`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard);
* `ts-guard/style` - re-exports [`guard/style`](https://github.com/gamtiq/eslint-config-guard#eslint-config-guard).

## Installation

Besides `eslint-config-ts-guard` you should install [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin):

    npm install eslint-config-ts-guard @typescript-eslint/eslint-plugin --save-dev

If you are going to use `ts-guard/node` you should install [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node):

    npm install eslint-plugin-node --save-dev

If you are going to use `ts-guard/proper-arrows` you should install [`@getify/eslint-plugin-proper-arrows`](https://github.com/getify/eslint-plugin-proper-arrows):

    npm install @getify/eslint-plugin-proper-arrows --save-dev

If you are going to use `ts-guard/react` you should install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react):

    npm install eslint-plugin-react --save-dev

## Usage

In a `.eslintrc.json` file:

```json
{
    "extends": [
        "ts-guard",
        "ts-guard/node"
    ]
}
```

In a `package.json`:

```json
{
    "eslintConfig": {
        "extends": [
            "ts-guard/ext",
            "ts-guard/proper-arrows",
            "ts-guard/react"
        ]
    }
}
```

## License
Copyright (c) 2020-2022 Denis Sikuler  
Licensed under the MIT license.
