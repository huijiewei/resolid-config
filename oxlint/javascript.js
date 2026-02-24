import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  env: {
    builtin: true,
    es2022: true,
  },
  plugins: ["eslint", "import"],
  ignorePatterns: [
    "**/build",
    "**/coverage",
    "**/dist",
    "**/.netlify",
    "**/.react-router",
    "**/.resolid",
    "**/.turbo",
    "**/.vercel",
    "**/.vite-inspect",
  ],
});
