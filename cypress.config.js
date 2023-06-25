const { defineConfig } = require('cypress')
const { debuggerPlugin } = require('cypress-debugger')

// module.exports = defineConfig({
//     e2e: {
//     "experimentalWebKitSupport": true,
//     "viewportWidth": 1000,
//     "viewportHeight": 890,
//     "video": false,
//     "reporter": "mochawesome",
//     "supportFile": false,
//     "reporterOptions": {
//       "reportDir": "report/mochawesome-report",
//       "owervrite": false,
//       "html": false,
//       "json": true 
//     },
//     setupNodeEvents(on, config){
//       debuggerPlugin(on, {
//         meta: {
//           key: 'value'
//         },
//         callback: (path, data) => {
//           console.log({path, data})
//         }
//       })
//       return config
//     }
// }
// })

module.exports = defineConfig({
  e2e: {
    "experimentalWebKitSupport": true,
    "viewportWidth": 1000,
    "viewportHeight": 890,
    "video": false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "report/mochawesome-report",
      "owervrite": false,
      "html": false,
      "json": true 
    },
    setupNodeEvents(on, config) {
      debuggerPlugin(on, {
        meta: {
          key: 'value',
        },
        // path: abosulte path to the dump file
        // data: captured data
        callback: (path, data) => {
          console.log({
            path,
            data,
          });
        },
      });
      return config;
    },
  },
});