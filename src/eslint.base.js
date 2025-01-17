import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "**/node_modules",
      "**/build",
      "**/dist",
      "**/package-lock.json",
      "**/pnpm-lock.yaml",
      "**/.vercel",
      "**/.changeset",
      "**/.idea",
      "**/.cache",
      "**/.output",
      "**/.resolid",
      "**/.vite-inspect",
      "**/*.min.*",
      "**/LICENSE*",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
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
