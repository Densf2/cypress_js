class DisabledInputPage {
  pageTitle() {
    return cy.get("section h3");
  }

  pageDescription() {
    return cy.get("section h3").next("p");
  }

  inputField(options) {
    return cy.get("#inputField", options);
  }

  enableButton() {
    return cy.get("#enableButton");
  }

  statusLabel() {
    return cy.get("#opstatus");
  }
}

export default DisabledInputPage;
