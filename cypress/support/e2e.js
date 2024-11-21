/// <reference types="cypress" />
const {
  addMatchImageSnapshotCommand,
} = require("@simonsmith/cypress-image-snapshot/command");

addMatchImageSnapshotCommand();
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
