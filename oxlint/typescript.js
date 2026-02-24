import { defineConfig } from "oxlint";
import javascriptConfig from "./javascript.js";

export default defineConfig({
  plugins: ["typescript"],
  rules: {
    "typescript/no-import-type-side-effects": "error",
    "typescript/prefer-function-type": "error",
    "typescript/prefer-for-of": "error",
    "typescript/consistent-type-imports": "error",
  },
  extends: [javascriptConfig],
});
