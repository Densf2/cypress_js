/// <reference types="cypress" />

import Homepage from "./pages/homepage";

describe("Verification of dev news site", () => {
  const homepagelocators = new Homepage();

  beforeEach(() => {
    cy.visit("https://itnext.io", {
      timeout: 10000,
      failOnStatusCode: false,
    });
    cy.fixture("itnext_text").as("itntext");
  });

  it("Check main page text", () => {
    cy.get("@itntext").then((itnText) => {
      cy.title().should("contain", itnText.page_title);
      homepagelocators.logoInHeader().should("be.visible");
      homepagelocators.searchInput().should("be.visible");
    });
  });

  it("Check nav block", () => {
    cy.get("@itntext").then((itnText) => {
      cy.get("a > p > span").eq(0).should("contain", itnText.about_itnext);
      cy.get("a > p > span").eq(1).should("contain", itnText.write_for_itnext);
    });
  });

  // the test below without uploadig the text from fixtures
  it("Check the list of kubernetes news", () => {
    cy.get("a > p > span").filter(":contains('Kubernetes')").click();
    cy.url().should("include", "subpage");
    // verification that we are on the kubernetes page
    cy.get("h2").eq(1).contains("Kubernetes");
    // verification that list of kubernetes news loaded
    cy.get('div[role="link"]').should("have.length.greaterThan", 5);
  });
});
