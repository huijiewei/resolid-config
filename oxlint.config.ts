import { defineConfig } from "oxlint";
import javascriptConfig from "./oxlint/javascript.js";

export default defineConfig({
  extends: [javascriptConfig],
});
