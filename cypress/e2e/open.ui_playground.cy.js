/// <reference types="cypress" />

import ClearInputPage from "./pages/ui_playground/clear_input.elements";
import {
  clearField,
  clearFields,
  fieldShouldBeEmpty,
  fieldShouldHaveValue,
  fillField,
  remainingFieldsShouldBe,
} from "./helpers/clear_input.helpers";
import AlertsPage from "./pages/ui_playground/alerts.elements";
import { stubAlert, stubConfirm, stubPrompt } from "./helpers/alerts.helpers";
import playgroundData from "../fixtures/ui_playground.json";

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

describe("UI Test Automation Playground - Clear Input", () => {
  const clearInputPage = new ClearInputPage();
  const { title, fields } = playgroundData.clearInput;
  const fieldNames = Object.keys(fields);

  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/clearinput");
  });

  it("page title and description are visible", () => {
    cy.url().should("include", "/clearinput");
    clearInputPage.pageTitle().should("be.visible").and("have.text", title);
    clearInputPage
      .pageDescription()
      .should("be.visible")
      .and("contain", "Clearing text from input controls");
  });

  it("all fields are displayed with labels", () => {
    clearInputPage.allFields().should("have.length", fieldNames.length);
    fieldNames.forEach((name) => {
      clearInputPage.fieldLabel(name).should("have.text", fields[name].label);
      clearInputPage.field(name).should("be.visible");
    });
  });

  it("all fields are pre-filled with initial values", () => {
    fieldNames.forEach((name) => {
      fieldShouldHaveValue(name, fields[name].value);
    });
    remainingFieldsShouldBe(fieldNames.length);
  });

  fieldNames.forEach((name) => {
    it(`clearing ${fields[name].label} leaves it empty`, () => {
      clearField(name);
      fieldShouldBeEmpty(name);
      remainingFieldsShouldBe(fieldNames.length - 1);
    });
  });

  it("clearing one field does not affect other fields", () => {
    clearField("textInput");
    fieldNames
      .filter((name) => name !== "textInput")
      .forEach((name) => fieldShouldHaveValue(name, fields[name].value));
  });

  it("status counter decreases as fields are cleared", () => {
    fieldNames.forEach((name, index) => {
      clearField(name);
      remainingFieldsShouldBe(fieldNames.length - index - 1);
    });
  });

  it("clearing all fields shows success status", () => {
    clearFields(fieldNames);
    fieldNames.forEach(fieldShouldBeEmpty);
    remainingFieldsShouldBe(0);
  });

  it("filling a cleared field increases status counter", () => {
    clearFields(fieldNames);
    remainingFieldsShouldBe(0);
    fillField("textInput", "New value");
    fieldShouldHaveValue("textInput", "New value");
    remainingFieldsShouldBe(1);
  });
});

describe("UI Test Automation Playground - Alerts", () => {
  const alertsPage = new AlertsPage();
  const {
    title,
    description,
    alertMessage,
    confirmMessage,
    confirmAcceptFollowUpAlert,
    confirmDismissFollowUpAlert,
    promptMessage,
    promptDefaultValue,
    promptCustomValue,
    promptCustomFollowUpAlert,
    promptCancelFollowUpAlert,
  } = playgroundData.alerts;

  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/alerts");
  });

  it("page title and description are visible", () => {
    cy.url().should("include", "/alerts");
    alertsPage.pageTitle().should("be.visible").and("have.text", title);
    alertsPage.pageDescription().should("be.visible").and("have.text", description);
  });

  it("clicking Alert shows a window alert with the expected message", () => {
    stubAlert();
    alertsPage.alertButton().click();
    cy.get("@alertStub").should("have.been.calledWith", alertMessage);
  });

  it("accepting the Confirm dialog shows a follow-up alert with Yes", () => {
    stubConfirm(true);
    stubAlert();
    alertsPage.confirmButton().click();
    cy.get("@confirmStub").should("have.been.calledWith", confirmMessage);
    cy.get("@alertStub").should("have.been.calledWith", confirmAcceptFollowUpAlert);
  });

  it("dismissing the Confirm dialog shows a follow-up alert with No", () => {
    stubConfirm(false);
    stubAlert();
    alertsPage.confirmButton().click();
    cy.get("@confirmStub").should("have.been.calledWith", confirmMessage);
    cy.get("@alertStub").should("have.been.calledWith", confirmDismissFollowUpAlert);
  });

  it("clicking Prompt shows a window prompt with the expected message and default value", () => {
    stubPrompt(promptDefaultValue);
    stubAlert();
    alertsPage.promptButton().click();
    cy.get("@promptStub").should(
      "have.been.calledWith",
      promptMessage,
      promptDefaultValue
    );
    cy.get("@alertStub").should(
      "have.been.calledWith",
      `User value: ${promptDefaultValue}`
    );
  });

  it("entering a custom prompt value shows a follow-up alert with that value", () => {
    stubPrompt(promptCustomValue);
    stubAlert();
    alertsPage.promptButton().click();
    cy.get("@alertStub").should("have.been.calledWith", promptCustomFollowUpAlert);
  });

  it("cancelling the Prompt dialog shows a follow-up alert with no answer", () => {
    stubPrompt(null);
    stubAlert();
    alertsPage.promptButton().click();
    cy.get("@alertStub").should("have.been.calledWith", promptCancelFollowUpAlert);
  });
});
