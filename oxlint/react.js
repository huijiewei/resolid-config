import { defineConfig } from "oxlint";

export default defineConfig({
  jsPlugins: [
    {
      name: "react-hooks-js",
      specifier: "eslint-plugin-react-hooks",
    },
    {
      name: "react-you-might-not-need-an-effect-js",
      specifier: "eslint-plugin-react-you-might-not-need-an-effect",
    },
  ],
  plugins: ["react", "react-perf", "jsx-a11y"],
  rules: {
    "react-hooks-js/automatic-effect-dependencies": "off",
    "react-hooks-js/capitalized-calls": "off",
    "react-hooks-js/component-hook-factories": "error",

    // Recommended rules (from LintRulePreset.Recommended)
    "react-hooks-js/config": "error",
    "react-hooks-js/error-boundaries": "error",
    "react-hooks-js/fbt": "off",
    "react-hooks-js/fire": "off",
    "react-hooks-js/gating": "error",
    "react-hooks-js/globals": "error",
    "react-hooks-js/hooks": "off",
    "react-hooks-js/immutability": "error",
    "react-hooks-js/incompatible-library": "error",
    "react-hooks-js/invariant": "off",
    "react-hooks-js/memoized-effect-dependencies": "off",
    "react-hooks-js/no-deriving-state-in-effects": "off",
    "react-hooks-js/preserve-manual-memoization": "error",
    "react-hooks-js/purity": "error",
    "react-hooks-js/refs": "error",

    // Recommended-latest rules (from LintRulePreset.RecommendedLatest)
    "react-hooks-js/rule-suppression": "off",

    // Off rules (LintRulePreset.Off) - not enabled by default
    "react-hooks-js/set-state-in-effect": "error",
    "react-hooks-js/set-state-in-render": "error",
    "react-hooks-js/static-components": "error",
    "react-hooks-js/syntax": "off",
    "react-hooks-js/todo": "off",
    "react-hooks-js/unsupported-syntax": "error",
    "react-hooks-js/use-memo": "error",
    "react-hooks-js/void-use-memo": "error",

    "react-perf/jsx-no-jsx-as-prop": "off",
    "react-perf/jsx-no-new-array-as-prop": "off",
    "react-perf/jsx-no-new-function-as-prop": "off",
    "react-perf/jsx-no-new-object-as-prop": "off",
    "react/exhaustive-deps": ["warn", { additionalHooks: "useIsomorphicEffect" }],
    "react/jsx-max-depth": ["warn", { max: 10 }],
    "react/jsx-props-no-spreading": "off",
    "react/only-export-components": [
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
    "react/react-in-jsx-scope": "off",
  },
});
