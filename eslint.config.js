import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginCypress from "eslint-plugin-cypress";

export default defineConfig([
  { ignores: ["cypress/plugins/index.js", "cypress/support/e2e.js"] },
  js.configs.recommended,
  pluginCypress.configs.recommended,
  { files: ["cypress/**/*.js"] },
]);
