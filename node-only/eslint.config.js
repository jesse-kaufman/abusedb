import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const config = [
  { ignores: ["**/node_modules/*", "**/public/js/*"] },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "array-callback-return": "error",
      "capitalized-comments": [
        "warn",
        "always",
        { ignoreInlineComments: true, ignoreConsecutiveComments: true },
      ],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      "func-style": ["error", "expression"],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      // "init-declarations": ["error", "never", { ignoreForLoopInit: true }],
      "max-depth": "error",
      // eslint-disable-next-line no-magic-numbers
      "max-nested-callbacks": ["error", 3],
      "new-cap": "error",
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      "no-empty-function": "warn",
      "no-inner-declarations": "error",
      "no-invalid-this": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-magic-numbers": [
        "warn",
        { ignoreArrayIndexes: true, ignoreDefaultValues: true },
      ],
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-negated-condition": "warn",
      "no-nested-ternary": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-new": "error",
      "no-object-constructor": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "warn",
      "no-template-curly-in-string": "error",
      "no-undef-init": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unreachable-loop": "error",
      "no-unused-expressions": "warn",
      "no-use-before-define": "warn",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "operator-assignment": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-numeric-literals": "error",
      "prefer-rest-params": "error",
      "prefer-template": "error",
      "require-atomic-updates": "warn",
      "require-await": "error",
      "sort-imports": "error",
      "sort-vars": "error",
      "valid-typeof": "error",
      "vars-on-top": "error",
      //"prefer-destructuring": "error",
      //"sort-keys": "error",
      camelcase: ["warn", { properties: "never" }],
      complexity: ["warn", { max: 4 }],
      curly: "warn",
      eqeqeq: ["error", "smart"],
    },
  },
];

export default config;
