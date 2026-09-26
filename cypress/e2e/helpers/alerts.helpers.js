export function stubAlert(alias = "alertStub") {
  const stub = cy.stub().as(alias);
  cy.on("window:alert", stub);
  return stub;
}

export function stubConfirm(accept, alias = "confirmStub") {
  const stub = cy.stub().returns(accept).as(alias);
  cy.on("window:confirm", stub);
  return stub;
}

export function stubPrompt(returnValue, alias = "promptStub") {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns(returnValue).as(alias);
  });
}
