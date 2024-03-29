const esnextConfigRules = require("./esnext").rules;
const mainConfigRules = require("./guard").rules;
const indentConfigRules = require("./indent").rules;
const styleConfigRules = require("./style").rules;

const noMagicNumberRule = mainConfigRules["no-magic-numbers"];

module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "ts-guard/optimum-next",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": false,
                "minimumDescriptionLength": 5
            }
        ],
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    // Static fields
                    "private-static-field",
                    "protected-static-field",
                    "public-static-field",
                    // Static methods
                    "private-static-method",
                    "protected-static-method",
                    "public-static-method",
                    // Abstract fields
                    "private-abstract-field",
                    "protected-abstract-field",
                    "public-abstract-field",
                    // Abstract methods
                    "private-abstract-method",
                    "protected-abstract-method",
                    "public-abstract-method",
                    // Instance fields
                    "private-instance-field",
                    "protected-instance-field",
                    "public-instance-field",
                    // Constructors
                    "private-constructor",
                    "protected-constructor",
                    "public-constructor",
                    // Instance methods
                    "private-instance-method",
                    "protected-instance-method",
                    "public-instance-method",
                ]
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "variable",
                "format": ["camelCase", "UPPER_CASE"],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "property",
                "format": ["camelCase", "snake_case", "UPPER_CASE"],
                "leadingUnderscore": "allow"
            },
            {
                // Ignore property names that require quoting
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
                "selector": "property",
                "format": null,
                "filter": {
                    "regex": "[- ]",
                    "match": true
                }
            },
            {
                "selector": "typeLike",
                "format": ["PascalCase"],
            },
        ],
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                "allowWithDecorator": true
            }
        ],
        "@typescript-eslint/no-implicit-any-catch": [
            "error",
            {
                "allowExplicitAny": true
            }
        ],
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "warn",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/unified-signatures": "error",

        // Extension Rules

        "brace-style": "off",
        "@typescript-eslint/brace-style": styleConfigRules["brace-style"],

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": styleConfigRules["comma-dangle"],
      
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": styleConfigRules["comma-spacing"],

        "default-param-last": "off",
        "@typescript-eslint/default-param-last": esnextConfigRules["default-param-last"],

        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": styleConfigRules["func-call-spacing"],

        "indent": "off",
        "@typescript-eslint/indent": indentConfigRules.indent,

        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": styleConfigRules["keyword-spacing"],

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": styleConfigRules["no-array-constructor"],

        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",

        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": esnextConfigRules["no-duplicate-imports"],

        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",

        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": mainConfigRules["no-invalid-this"],

        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
      
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
      
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
            noMagicNumberRule[0],
            Object.assign(
                {
                    "ignoreNumericLiteralTypes": true,
                    "ignoreReadonlyClassProperties": true,
                    "ignoreEnums": true
                },
                noMagicNumberRule[1]
            )
        ],

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": mainConfigRules["no-shadow"],

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": mainConfigRules["no-unused-expressions"],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": mainConfigRules["no-use-before-define"],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": esnextConfigRules["no-useless-constructor"],

        "quotes": "off",
        "@typescript-eslint/quotes": styleConfigRules.quotes,

        "semi": "off",
        "@typescript-eslint/semi": styleConfigRules.semi,

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": styleConfigRules["space-before-function-paren"],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": styleConfigRules["space-infix-ops"]
    }
};
