import { defineConfig } from "cypress";

import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin.js";

export default defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    failOnStatusCode: false,
    viewportWidth: 1300,
    viewportHeight: 890,
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "report/mochawesome-report",
      owervrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
      return config;
    },
  },
});
