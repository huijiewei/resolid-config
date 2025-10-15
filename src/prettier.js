/** @type {import('prettier').Config} */
const config = {
  plugins: [import.meta.resolve("prettier-plugin-organize-imports")],
  organizeImportsSkipDestructiveCodeActions: true,
};

export default config;
