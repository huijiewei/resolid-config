import typescript from "typescript-eslint";
import javascript from "./eslint.javascript.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default typescript.config({
  files: ["**/*.ts", "**/*.tsx"],
  extends: [javascript, typescript.configs.recommended],
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
