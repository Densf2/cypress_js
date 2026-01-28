/// <reference types="cypress" />

describe("UI Test Automation Playground", () => {
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/");
  });

  it("homepage loads successfully", () => {
    cy.url().should("include", "uitestingplayground.com");
    cy.title().should("contain", "UI Test Automation Playground");
  });

  it("navigation bar elements are visible", () => {
    cy.get("nav.navbar").should("be.visible");
    cy.get("a.navbar-brand").should("be.visible").and("contain", "UITAP");
    cy.get('a.nav-link[href="/home"]')
      .should("be.visible")
      .and("contain", "Home");
    cy.get('a.nav-link[href="/resources"]')
      .should("be.visible")
      .and("contain", "Resources");
  });

  it("main page title and description", () => {
    cy.get("h1#title")
      .should("be.visible")
      .and("contain", "UI Test Automation");
    cy.get("blockquote#citation").should("be.visible");
    cy.get("blockquote#citation p.mb-0").should(
      "contain",
      "Quality is not an act, it is a habit"
    );
    cy.get("blockquote#citation footer").should("contain", "Aristotle");
  });

  it("alert warning message is visible", () => {
    cy.get("div.alert-warning")
      .should("be.visible")
      .and(
        "contain",
        "The purpose of this website is to provide a platform for sharpening UI test automation skills"
      );
  });

  it("Dynamic ID section link is visible", () => {
    cy.get('a[href="/dynamicid"]')
      .should("be.visible")
      .and("contain", "Dynamic ID");
    cy.get('a[href="/dynamicid"]')
      .parent()
      .next("p")
      .should("contain", "Make sure you are not recording dynamic IDs");
  });

  it("Class Attribute section link is visible", () => {
    cy.get('a[href="/classattr"]')
      .should("be.visible")
      .and("contain", "Class Attribute");
  });

  it("Hidden Layers section link is visible", () => {
    cy.get('a[href="/hiddenlayers"]')
      .should("be.visible")
      .and("contain", "Hidden Layers");
  });

  it("Load Delay section link is visible", () => {
    cy.get('a[href="/loaddelay"]')
      .should("be.visible")
      .and("contain", "Load Delay");
  });

  it("AJAX Data section link is visible", () => {
    cy.get('a[href="/ajax"]').should("be.visible").and("contain", "AJAX Data");
  });

  it("Click section link is visible", () => {
    cy.get('a[href="/click"]').should("be.visible").and("contain", "Click");
  });

  it("Text Input section link is visible", () => {
    cy.get('a[href="/textinput"]')
      .should("be.visible")
      .and("contain", "Text Input");
  });

  it("Visibility section link is visible", () => {
    cy.get('a[href="/visibility"]')
      .should("be.visible")
      .and("contain", "Visibility");
  });

  it("Sample App section link is visible", () => {
    cy.get('a[href="/sampleapp"]')
      .should("be.visible")
      .and("contain", "Sample App");
  });

  it("Progress Bar section link is visible", () => {
    cy.get('a[href="/progressbar"]')
      .should("be.visible")
      .and("contain", "Progress Bar");
  });

  it("verification footer info", () => {
    cy.get("footer#footer").should("be.visible");
    cy.get("footer#footer").should("contain", "Fork the website on GitHub");
    cy.get("footer#footer").should("contain", "Inflectra Corporation");
  });

  it("redirect to Home page", () => {
    cy.get('a.nav-link[href="/home"]').click();
    cy.url().should("include", "/home");
  });

  it("redirect to Resources page", () => {
    cy.get('a.nav-link[href="/resources"]').click();
    cy.url().should("include", "/resources");
  });

  it("redirect to Dynamic ID page", () => {
    cy.get('a[href="/dynamicid"]').click();
    cy.url().should("include", "/dynamicid");
  });

  it("redirect to Sample App page", () => {
    cy.get('a[href="/sampleapp"]').click();
    cy.url().should("include", "/sampleapp");
  });

  it("rubik's cube image is visible", () => {
    cy.get("img.img-fluid")
      .should("be.visible")
      .and("have.attr", "alt", "Responsive image");
  });
});
