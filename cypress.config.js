const { defineConfig } = require("cypress");

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
  },
});
