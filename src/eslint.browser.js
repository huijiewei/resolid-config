import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    name: "resolid/browser",
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];

export default config;
