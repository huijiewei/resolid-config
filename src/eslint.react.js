import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    name: "resolid/react",
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      react: react,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/prop-types": "off",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          allowExportNames: [
            "clientAction",
            "clientLoader",
            "ErrorBoundary",
            "HydrateFallback",
            "Layout",
            "action",
            "loader",
            "handle",
            "links",
            "meta",
            "shouldRevalidate",
          ],
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    name: "resolid/react-hook",
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "react-hooks": reactHooks,
      "react-compiler": reactCompiler,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": [
        "warn",
        {
          additionalHooks: "(useIsomorphicEffect|useEffectEvent)",
        },
      ],
      "react-compiler/react-compiler": "warn",
    },
  },
  {
    name: "resolid/jsx-a11y",
    files: ["**/*.jsx", "**/*.tsx"],
    ...jsxA11y.flatConfigs.recommended,
  },
];

export default config;
