import { fileURLToPath } from "node:url";

/** @type {import('prettier').Config} */
const config = {
  plugins: [fileURLToPath(import.meta.resolve("prettier-plugin-organize-imports"))],
  organizeImportsSkipDestructiveCodeActions: true,
};

export default config;
