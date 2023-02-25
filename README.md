the repo contain the example of test based on cypress & JS

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
yarn run cypress run -b chrome --headed --spec cypress/integration/open_auto_ria.js
```

docker build -t cypress-custom-base .
docker run -t cypress-custom-base:latest "./node_modules/cypress/bin/cypress run --browser chrome --headless"
