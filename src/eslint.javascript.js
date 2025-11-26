import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
const config = [
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
      "**/.netlify",
      "**/.output",
      "**/.react-router",
      "**/.resolid",
      "**/.turbo",
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

export default config;
