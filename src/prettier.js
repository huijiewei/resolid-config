import organizeImports from "prettier-plugin-organize-imports";

/** @type {import('prettier').Config} */
const config = {
  plugins: [organizeImports],
};

export default config;
