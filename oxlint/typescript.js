import { defineConfig } from "oxlint";
import javascriptConfig from "./javascript.js";

export default defineConfig({
  extends: [javascriptConfig],
  plugins: ["typescript"],
  rules: {
    "typescript/ban-ts-comment": "error",
    "typescript/consistent-type-imports": "error",
    "typescript/no-empty-object-type": "error",
    "typescript/no-explicit-any": "error",
    "typescript/no-import-type-side-effects": "error",
    "typescript/no-namespace": "error",
    "typescript/no-require-imports": "error",
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/prefer-for-of": "error",
    "typescript/prefer-function-type": "error",
    "typescript/prefer-nullish-coalescing": "error",
    "typescript/prefer-optional-chain": "error",
  },
});
