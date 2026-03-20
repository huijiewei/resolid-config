/**
 * @template {import('oxfmt').OxfmtConfig} T
 * @param {T} config
 * @returns {T}
 */
export function oxfmtConfig(config) {
  const { sortImports, ...rest } = config;

  return {
    ...rest,
    sortImports: {
      newlinesBetween: false,
      groups: [
        "type-import",
        ["value-builtin", "value-external"],
        "type-internal",
        "value-internal",
        ["type-parent", "type-sibling", "type-index"],
        ["value-parent", "value-sibling", "value-index"],
        { newlinesBetween: true },
        "style",
        { newlinesBetween: true },
        "unknown",
      ],
      ...sortImports,
    },
  };
}
