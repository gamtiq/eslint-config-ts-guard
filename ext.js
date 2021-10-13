const mainConfigRules = require("./guard").rules;

module.exports = {
    "extends": [
        "ts-guard",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "rules": {
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/require-array-sort-compare": [
            "error",
            {
                "ignoreStringArrays": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": [
            "error",
            {
                "checkCompoundAssignments": true
            }
        ],

        // Extension Rules

        "dot-notation": "off",
        "@typescript-eslint/dot-notation": mainConfigRules['dot-notation']
    }
};
