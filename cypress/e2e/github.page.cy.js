import Homepage from "./pages/github/elements";

describe("GitHub", () => {
  const homepage = new Homepage();

  context("Security Page", () => {
    beforeEach(() => {
      cy.visit("https://github.com/features/security");
    });

    it("check logo", () => {
      homepage.logoHeader().should("be.visible");
      cy.wait(1000);
      cy.get(
        "div[data-testid='contentful-bg-image-container']"
      ).matchImageSnapshot();
    });
  });
});
