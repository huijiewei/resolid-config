import { defineConfig } from "oxlint";
import javascriptConfig from "./javascript.js";

export default defineConfig({
  extends: [javascriptConfig],
  plugins: ["typescript"],
  options: { typeAware: true, typeCheck: true },
  rules: {
    "typescript/adjacent-overload-signatures": "warn",
    "typescript/array-type": "warn",
    "typescript/ban-ts-comment": "error",
    "typescript/class-literal-property-style": "warn",
    "typescript/dot-notation": "error",
    "typescript/consistent-generic-constructors": ["warn", "type-annotation"],
    "typescript/consistent-indexed-object-style": ["warn", "record"],
    "typescript/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
      },
    ],
    "typescript/consistent-type-exports": [
      "warn",
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    "typescript/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],

    "typescript/no-deprecated": "warn",
    "typescript/no-empty-object-type": "error",
    "typescript/no-explicit-any": "error",
    "typescript/no-import-type-side-effects": "error",
    "typescript/no-namespace": "error",
    "typescript/no-require-imports": "error",
    "typescript/no-unnecessary-condition": "error",
    "typescript/no-unnecessary-qualifier": "error",
    "typescript/no-unnecessary-type-arguments": "error",
    "typescript/no-unnecessary-type-assertion": "error",
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/no-unnecessary-template-expression": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-useless-default-assignment": "error",

    "typescript/prefer-for-of": "error",
    "typescript/prefer-function-type": "error",
    "typescript/prefer-nullish-coalescing": "error",
    "typescript/prefer-optional-chain": "error",
  },
});
