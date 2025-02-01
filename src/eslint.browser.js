import globals from "globals";

// noinspection JSUnusedGlobalSymbols
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    name: "resolid/browser",
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
