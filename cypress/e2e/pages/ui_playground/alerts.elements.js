class AlertsPage {
  pageTitle() {
    return cy.get("section h3");
  }

  pageDescription() {
    return cy.get("section h3").next("p");
  }

  alertButton() {
    return cy.get("#alertButton");
  }

  confirmButton() {
    return cy.get("#confirmButton");
  }

  promptButton() {
    return cy.get("#promptButton");
  }
}

export default AlertsPage;
