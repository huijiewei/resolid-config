import erasableSyntaxOnly from "eslint-plugin-erasable-syntax-only";
import { defineConfig } from "eslint/config";
import typescript from "typescript-eslint";
import javascript from "./eslint.javascript.js";

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig(javascript, {
  name: "resolid/typescript",
  files: ["**/*.ts", "**/*.tsx"],
  extends: [typescript.configs.recommended, erasableSyntaxOnly.configs.recommended],
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
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
});
