import { defineConfig } from "cypress";

import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin";

export default defineConfig({
  e2e: {
    browser: "chrome",
    experimentalWebKitSupport: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
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
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--disable-software-rasterizer");
        }
        if (browser.name === "electron") {
          launchOptions.preferences.webPreferences = {
            ...launchOptions.preferences.webPreferences,
            webgl: false,
          };
        }
        return launchOptions;
      });
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
