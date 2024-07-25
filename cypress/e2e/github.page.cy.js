import Homepage from "./pages/github/elements";

describe("GitHub", () => {
  const homepage = new Homepage();

  context("Homepage", () => {
    beforeEach(() => {
      cy.visit("https://github.com");
    });

    it("check logo", () => {
      homepage.logoHeader().should("be.visible");
    });
  });
});
