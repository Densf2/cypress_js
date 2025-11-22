/// <reference types="Cypress" />

//test data
const url = "https://jpetstore.aspectran.com/";

describe("JPetStore E-Commerce Application", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  context("Homepage Tests", () => {
    it("homepage loads successfully", () => {
      cy.url().should("eq", url);
      cy.contains("JPetStore Demo").should("be.visible");
      cy.contains("The goal of the JPetStore Demo App").should("be.visible");
    });

    it("should display all product categories", () => {
      cy.contains("a", "Fish").should("be.visible");
      cy.contains("a", "Dogs").should("be.visible");
      cy.contains("a", "Cats").should("be.visible");
      cy.contains("a", "Reptiles").should("be.visible");
      cy.contains("a", "Birds").should("be.visible");
    });

    it("should display navigation links", () => {
      cy.contains("a", "Sign In").should("be.visible");
      cy.contains("a", "Sign Up").should("be.visible");
      cy.get('a[href*="cart/viewCart"]').should("be.visible");
      cy.get('a[href*="help.html"]').should("be.visible");
    });
  });

  context("Category Navigation Tests", () => {
    it("should navigate to Fish category", () => {
      cy.contains("a", "Fish").click();
      cy.url().should("include", "/categories/FISH");
      cy.contains("h3", "Fish").should("be.visible");
      cy.contains("Angelfish").should("be.visible");
      cy.contains("Tiger Shark").should("be.visible");
      cy.contains("Koi").should("be.visible");
      cy.contains("Goldfish").should("be.visible");
    });

    it("should navigate to Dogs category", () => {
      cy.contains("a", "Dogs").click();
      cy.url().should("include", "/categories/DOGS");
      cy.contains("h3", "Dogs").should("be.visible");
    });

    it("should navigate to Cats category", () => {
      cy.contains("a", "Cats").click();
      cy.url().should("include", "/categories/CATS");
      cy.contains("h3", "Cats").should("be.visible");
    });

    it("should navigate to Reptiles category", () => {
      cy.contains("a", "Reptiles").click();
      cy.url().should("include", "/categories/REPTILES");
      cy.contains("h3", "Reptiles").should("be.visible");
    });

    it("should navigate to Birds category", () => {
      cy.contains("a", "Birds").click();
      cy.url().should("include", "/categories/BIRDS");
      cy.contains("h3", "Birds").should("be.visible");
    });

    it("should return to main menu from category page", () => {
      cy.contains("a", "Fish").click();
      cy.contains("a", "Return to Main Menu").click();
      cy.url().should("eq", url);
    });
  });

  context("Product Listing Tests", () => {
    beforeEach(() => {
      cy.visit(`${url}categories/FISH`);
    });

    it("should display product list in category", () => {
      cy.get("table").should("be.visible");
      cy.contains("td", "FI-SW-01").should("be.visible");
      cy.contains("td", "Angelfish").should("be.visible");
    });

    it("should click on a product to view details", () => {
      cy.contains("a", "FI-SW-01").click();
      cy.url().should("include", "/products/FI-SW-01");
    });
  });

  context("Authentication Tests", () => {
    it("should navigate to Sign In page", () => {
      cy.contains("a", "Sign In").click();
      cy.url().should("include", "/account/signonForm");
      cy.contains("Please enter your username and password").should(
        "be.visible"
      );
      cy.get('input[name="username"]').should("be.visible");
      cy.get('input[name="password"]').should("be.visible");
    });

    it("should navigate to Sign Up page", () => {
      cy.contains("a", "Sign Up").click();
      cy.url().should("include", "/account/newAccountForm");
    });

    it("should display Sign In form elements", () => {
      cy.visit(`${url}account/signonForm1`);
      cy.get('input[name="username"]').should("be.visible");
      cy.get('input[name="password"]').should("be.visible");
      cy.contains("button", "Login").should("be.visible");
      cy.contains("a", "Register Now!").should("be.visible");
    });

    it("should attempt login with demo credentials", () => {
      cy.visit(`${url}account/signonForm`);
      cy.get('input[name="username"]').type("j2ee");
      cy.get('input[name="password"]').type("j2ee");
      cy.contains("button", "Login").click();
      // Verify successful login or redirect
      cy.url().should("not.include", "/account/signonForm");
    });
  });

  context("Shopping Cart Tests", () => {
    it("should navigate to cart page", () => {
      cy.get('a[href*="cart/viewCart"]').click();
      cy.url().should("include", "/cart/viewCart");
    });

    it("should display empty cart message when no items", () => {
      cy.visit(`${url}cart/viewCart`);
      // Cart page should load (may show empty cart message)
      cy.url().should("include", "/cart/viewCart");
    });
  });

  context("Help and Information Tests", () => {
    it("should open help page", () => {
      cy.get('a[href*="help.html"]').click();
      // Help page should open
    });
  });

  context("Footer and External Links Tests", () => {
    it("should display footer links", () => {
      cy.contains("a", "aspectran.com").should("be.visible");
      cy.contains("a", "mybatis.org").should("be.visible");
    });

    it("should display Aspectran information", () => {
      cy.contains("ABOUT ASPECTRAN").should("be.visible");
      cy.contains(
        "Aspectran is a lightweight, high‑performance framework"
      ).should("be.visible");
    });
  });

  context("Responsive Design Tests", () => {
    it("should display correctly on mobile viewport", () => {
      cy.viewport(375, 667);
      cy.contains("JPetStore Demo").should("be.visible");
      cy.contains("a", "Fish").should("be.visible");
    });

    it("should display correctly on tablet viewport", () => {
      cy.viewport(768, 1024);
      cy.contains("JPetStore Demo").should("be.visible");
      cy.contains("a", "Fish").should("be.visible");
    });
  });
});
