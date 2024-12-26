import globals from "globals";

// noinspection JSUnusedGlobalSymbols
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
