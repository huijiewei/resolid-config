import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    name: "resolid/ignores",
    ignores: [
      "**/node_modules",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
      "**/bun.lockb",

      "**/build",
      "**/coverage",
      "**/dist",

      "**/.cache",
      "**/.changeset",
      "**/.history",
      "**/.idea",
      "**/.output",
      "**/.resolid",
      "**/.vercel",
      "**/.yarn",
      
      "**/.vite-inspect",
      "**/*.min.*",
      "**/CHANGELOG*.md",
      "**/LICENSE*",
    ],
  },
  {
    name: "resolid/javascript",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        ...globals.es2022,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
