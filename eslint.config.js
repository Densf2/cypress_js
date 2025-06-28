import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginCypress from "eslint-plugin-cypress";

export default defineConfig([
  // { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  // { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  pluginCypress.configs.recommended,
  { files: ["cypress/**/*.js"] },
]);
