import { defineConfig, type OxlintConfig } from "oxlint";
import typescriptConfig from "./oxlint/typescript.js";

export default defineConfig({
  extends: [typescriptConfig],
}) as OxlintConfig;
