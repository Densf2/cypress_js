/// <reference types="cypress" />

const { debuggerSupport } = require('cypress-debugger')
debuggerSupport()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })