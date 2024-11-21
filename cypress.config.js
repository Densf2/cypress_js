const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("@simonsmith/cypress-image-snapshot/plugin");

module.exports = defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    viewportWidth: 1300,
    viewportHeight: 890,
    video: false,
    reporter: "mochawesome",
    supportFile: false,
    reporterOptions: {
      reportDir: "report/mochawesome-report",
      owervrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
      addMatchImageSnapshotPlugin(on);
      return config;
    },
  },
});
