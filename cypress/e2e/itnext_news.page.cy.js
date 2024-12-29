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
    });
  });

  it("Check nav block", () => {
    cy.get("@itntext").then((itnText) => {
      cy.get("nav div.buttonSet li")
        .eq(0)
        .should("contain", itnText.about_itnext);
      cy.get("nav div.buttonSet li")
        .eq(1)
        .should("contain", itnText.write_for_itnext);
    });
  });

  // the test below without uploadig the text from fixtures
  it("Check the list of kubernetes news", () => {
    cy.get(
      "nav div.buttonSet li a[href='https://itnext.io/kubernetes/home']"
    ).click();
    cy.url().should("include", "/kubernetes/home");
    cy.get("img").eq(1).should("have.attr", "alt").and("include", "Kubernetes");
    // verification that list of kubernetes news loaded
    cy.get("h3.u-contentSansBold").should("have.length.greaterThan", 5);
  });
});
