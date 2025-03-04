import typescript from "typescript-eslint";
import javascript from "./eslint.javascript.js";

/** @type {import('eslint').Linter.Config[]} */
const config = typescript.config(javascript, typescript.configs.recommended, {
  name: "resolid/typescript",
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: typescript.parser,
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/consistent-type-imports": "error",
  },
});

export default config;
