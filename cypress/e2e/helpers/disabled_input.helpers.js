import DisabledInputPage from "../pages/ui_playground/disabled_input.elements";

const page = new DisabledInputPage();

export function statusShouldBe(expectedText) {
  page.statusLabel().should(($el) => {
    expect($el.text().trim()).to.eq(expectedText);
  });
}

export function waitForInputToBeEnabled(timeout = 8000) {
  page.inputField({ timeout }).should("be.enabled");
}
