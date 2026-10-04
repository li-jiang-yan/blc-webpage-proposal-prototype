import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/**", "dist/**", "coverage/**"] },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["*.config.mjs", "scripts/**/*.{js,mjs,cjs}", "**/*.cjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
