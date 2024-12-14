import Homepage from "./pages/github/elements";

describe("GitHub", () => {
  const homepage = new Homepage();

  context("Docs Page", () => {
    beforeEach(() => {
      cy.visit("https://docs.github.com/en");
    });

    it("check logo", () => {
      homepage.logoHeader().should("be.visible");
    });
  });
});
