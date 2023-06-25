[![tests on Chrome](https://github.com/Densf2/cypress_js/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/Densf2/cypress_js/actions/workflows/main.yml)

the repo contain the example of test based on cypress & JS \
supported browsers: chrome, firefox, webkit

all actions performed with yarn package manager

for running tests:
- pull the repo
- run in the console: 
```
yarn run cypress open
```
running tests in headless mode
```
yarn run cypress run
```
list of params for cypress
```
yarn run cypress run -b chrome --headed --spec cypress/e2e/open_auto_ria.js
````
commad for trigger in webkit
```
cy:run -- --browser webkit --spec cypress/e2e/open_auto_ria.cy.js
```

The 'DockerfileBuild' can be used for creating new image with tests and all dependecies.
Below the steps for creating the image and usage: 
- docker build -t cypress-custom-base .
- docker run -t cypress-custom-base:latest "./node_modules/cypress/bin/cypress run --browser   chrome --headless"

The 'Dockerfile' and 'docker-compose' files can be used for running tests in parallel with different browsers.
Steps:
- docker-compose up

Added debbuger that fetch the har data from browser with network requests, video recording, and vizualization of actions.\
Data for debugging saved in the directory: dump.\
And can be opened in player by URL: https://cypress-debugger.dev
