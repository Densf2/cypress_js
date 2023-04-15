const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
    "experimentalWebKitSupport": true,
    "viewportWidth": 1000,
    "viewportHeight": 890,
    "video": false,
    "reporter": "mochawesome",
    "supportFile": false,
    "reporterOptions": {
      "reportDir": "report/mochawesome-report",
      "owervrite": false,
      "html": false,
      "json": true 
    }
}
})