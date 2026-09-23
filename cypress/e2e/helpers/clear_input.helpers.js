import ClearInputPage from "../pages/ui_playground/clear_input.elements";

const page = new ClearInputPage();

const isContentEditable = (name) => name === "contentEditable";

export function clearField(name) {
  page.field(name).clear();
}

export function clearFields(names) {
  names.forEach(clearField);
}

export function fillField(name, value) {
  page.field(name).clear().type(value);
}

export function fieldShouldHaveValue(name, value) {
  if (isContentEditable(name)) {
    page.field(name).should(($el) => {
      expect($el.text().trim()).to.eq(value);
    });
  } else {
    page.field(name).should("have.value", value);
  }
}

export function fieldShouldBeEmpty(name) {
  fieldShouldHaveValue(name, "");
}

export function remainingFieldsShouldBe(count) {
  const expected =
    count === 0
      ? "All fields are cleared!"
      : `Non-empty fields remaining: ${count}`;
  page.statusLabel().should("have.text", expected);
}
