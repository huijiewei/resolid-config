import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import("eslint").Linter.Config[]} */
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
            "meta",
            "links",
            "action",
            "handle",
            "headers",
            "clientAction",
            "loader",
            "clientLoader",
            "middleware",
            "clientMiddleware",
            "shouldRevalidate",
            "ErrorBoundary",
            "HydrateFallback",
            "Layout",
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
    ...reactHooks.configs.flat["recommended-latest"],
    settings: {
      "react-hooks": {
        additionalEffectHooks: "useIsomorphicEffect",
      },
    },
  },
  {
    name: "resolid/jsx-a11y",
    files: ["**/*.jsx", "**/*.tsx"],
    ...jsxA11y.flatConfigs.recommended,
  },
];

export default config;
