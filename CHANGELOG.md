# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.6.0] - 2021-10-13
### Added
- [@typescript-eslint/no-non-null-asserted-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md), [@typescript-eslint/no-meaningless-void-operator](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md) and [@typescript-eslint/prefer-return-this-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-return-this-type.md) rules.

## [1.5.0] - 2021-03-31
### Changed
- Reenable [@typescript-eslint/consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md) rule.
- Update dependencies.

## [1.4.0] - 2020-11-06
### Added
- [@typescript-eslint/no-unnecessary-type-constraint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md) and [@typescript-eslint/space-infix-ops](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md) rules.

### Removed
- [@typescript-eslint/array-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md) rule.

## [1.3.0] - 2020-10-16
### Added
- Several [extension rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules).

### Changed
- Implementation of test config files.

## [1.2.0] - 2020-10-01
### Added
- New extension rules: [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md) and [@typescript-eslint/no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md).

### Changed
- Allow leading underscore for properties (modified options for [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)).

## [1.1.1] - 2020-09-04
### Changed
- Temporarily switch off [@typescript-eslint/consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md) because of conflict with `no-duplicate-imports` (see [typescript-eslint #2315](https://github.com/typescript-eslint/typescript-eslint/issues/2315)).

## [1.1.0] - 2020-09-01
### Added
- New rules in `ts-guard`: [@typescript-eslint/consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md),
[@typescript-eslint/no-implicit-any-catch](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md),
[@typescript-eslint/prefer-enum-initializers](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md).

### Changed
- Minimal version of `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` dependencies is `4.0.1`.
