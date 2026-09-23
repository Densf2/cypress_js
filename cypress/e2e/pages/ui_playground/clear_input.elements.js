const FIELD_IDS = {
  textInput: "#clearInput",
  textarea: "#clearTextarea",
  password: "#clearPassword",
  email: "#clearEmail",
  number: "#clearNumber",
  search: "#clearSearch",
  url: "#clearUrl",
  tel: "#clearTel",
  contentEditable: "#clearContentEditable",
};

class ClearInputPage {
  pageTitle() {
    return cy.get("section h3");
  }

  pageDescription() {
    return cy.get("section h3").next("p");
  }

  field(name) {
    return cy.get(FIELD_IDS[name]);
  }

  fieldLabel(name) {
    return cy.get(`label[for="${FIELD_IDS[name].slice(1)}"]`);
  }

  allFields() {
    return cy.get(".clear-target");
  }

  statusLabel() {
    return cy.get("#opstatus");
  }
}

export default ClearInputPage;
