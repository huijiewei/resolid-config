import erasableSyntaxOnly from "eslint-plugin-erasable-syntax-only";
import { defineConfig } from "eslint/config";
import typescript from "typescript-eslint";
import javascript from "./eslint.javascript.js";

/** @type {import("eslint").Linter.Config[]} */
const config = defineConfig(
  javascript,
  typescript.configs.recommended,
  {
    name: "typescript/erasable-syntax-only",
    files: ["**/*.ts", "**/*.tsx"],
    ...erasableSyntaxOnly.configs.recommended,
  },
  {
    name: "resolid/typescript",
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
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
  },
);

export default config;
