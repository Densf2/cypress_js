/// <reference types="cypress" />

import Homepage from "./pages/homepage";

describe("Verification of product page", () => {
  const homepagelocators = new Homepage();

  beforeEach(() => {
    cy.visit("https://ain.ua");
    cy.fixture("ain_text").as("aintext");
  });

  it("Check main page text", () => {
    cy.get("@aintext").then((ainText) => {
      cy.get("h1.strong").should("contain", ainText.golovna_text);
    });
  });

  it("Check side news block", () => {
    cy.get("@aintext").then((ainText) => {
      cy.get("a.widget__content img").eq(0).should("be.visible");
      cy.get("ul.main-nav__menu li.current-page")
        .find("a")
        .should("contain", ainText.golovna_text);
      cy.get("ul.main-nav__menu li a")
        .filter(":contains('Технології')")
        .should("be.visible");
      cy.get("ul.main-nav__menu li a")
        .filter(":contains('Огляди')")
        .should("be.visible");
    });
  });

  // the test below without uploadig the text from fixtures
  it("Check the list of bussiness news", () => {
    cy.get("ul.main-nav__menu li a[href='/business/']").click();
    cy.url().should("include", "/business");
    cy.get("ul.widget__header_tags li a").eq(0).should("contain", "Бізнес");
    // verification that list of business news loaded
    cy.get("a.widget__content h2").should("have.length.greaterThan", 5);
  });

  it("Check the review news", () => {
    cy.get("ul.main-nav__menu li a[href='/reviews/']").click();
    cy.url().should("include", "/reviews");
    cy.get("ul.widget__header_tags li a").eq(0).should("contain", "Огляди");
    cy.matchImageSnapshot("Reviews page");
  });
});
