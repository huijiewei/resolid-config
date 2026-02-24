import { defineConfig } from "oxlint";
import javascriptConfig from "./javascript.js";

export default defineConfig({
  extends: [javascriptConfig],
  plugins: ["typescript"],
  rules: {
    "typescript/consistent-generic-constructors": "off",
    "typescript/consistent-type-imports": "error",
    "typescript/consistent-type-definitions": "off",
    "typescript/no-import-type-side-effects": "error",
    "typescript/prefer-for-of": "error",
    "typescript/prefer-function-type": "error",
  },
});
