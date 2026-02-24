import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    node: true,
  },
  plugins: ["node"],
  rules: {
    "node/no-exports-assign": "error",
    "node/no-new-require": "error",
    "node/no-path-concat": "error",
    "node/no-process-env": "error",
  },
});
