import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    chromeWebSecurity: false,
    failOnStatusCode: false,
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
      return config;
    },
  },
});
