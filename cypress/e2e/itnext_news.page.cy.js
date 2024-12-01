/// <reference types="cypress" />

import Homepage from "./pages/homepage";

describe("Verification of product page", () => {
  const homepagelocators = new Homepage();

  beforeEach(() => {
    cy.visit("https://itnext.io");
    cy.fixture("itnext_text").as("itntext");
  });

  it("Check main page text", () => {
    cy.get("@itntext").then((itnText) => {
      cy.title().should("contain", itnText.page_title);
    });
  });

  it.skip("Check side news block", () => {
    cy.get("@aintext").then((ainText) => {
      cy.get("nav div.buttonSet li").eq(0).should("contain", "About ITNEXT");
    });
  });

  // the test below without uploadig the text from fixtures
  it.skip("Check the list of bussiness news", () => {
    cy.get("ul.main-nav__menu li a[href='/business/']").click();
    cy.url().should("include", "/business");
    cy.get("ul.widget__header_tags li a").eq(0).should("contain", "Бізнес");
    // verification that list of business news loaded
    cy.get("a.widget__content p.h2").should("have.length.greaterThan", 5);
  });

  it.skip("Check the review news", () => {
    cy.get("ul.main-nav__menu li a[href='/reviews/']").click();
    cy.url().should("include", "/reviews");
    cy.get("ul.widget__header_tags li a").eq(0).should("contain", "Огляди");
  });
});
