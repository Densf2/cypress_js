import { text_data } from "../text/text";
import GeneralElements from "./pages/auto.ria/general.elements";

describe("Open main page and verify functionality", () => {
  const generalElements = new GeneralElements();

  context("verification of FE", () => {
    beforeEach(() => {
      cy.visit("https://auto.ria.com/uk/");
    });
    it("check text in header", () => {
      cy.get(".container-header a.button-add").should(
        "contain",
        text_data.text_sell_button
      );
      generalElements.linkInHeader().eq(0).should("contain", "Вживані авто");
      generalElements.linkInHeader().eq(1).should("contain", "Нові авто");
      generalElements.linkInHeader().eq(2).should("contain", "Новини");
      generalElements.linkInHeader().eq(3).should("contain", "Все для авто");
      cy.get("h2.showcase-head").should("be.visible");
      cy.get("nav.transport-type > a.item-tt.active > span").should(
        "contain",
        "Легкові б/у"
      );
    });

    it("check search", () => {
      cy.get("div.form-search").should("be.visible");
      cy.get('label[for="forYear"]').eq(0).click();
      cy.get("select#yearFrom").select("2015");
      cy.get("select#yearTo").select("2020");
      cy.get("div.footer-form button.full").click({ force: true });
      cy.url().should(
        "include",
        "search/?categories.main.id=1&indexName=auto,order_auto,newauto_search&year[0].gte=2015&year[0].lte=2020&size=20"
      );
      cy.get("section.ticket-item").should("have.length", 21);
    });
  });

  context("functionality", () => {
    beforeEach(() => {
      cy.visit("https://auto.ria.com/uk/");
    });
    it("check redirect to details page", () => {
      cy.get("div.mhide a").eq(3).click();
      cy.get("h1.auto-head_title").should("contain", /\w+/g);
      generalElements.siteLogoInHeader().should("have.css", "opacity", "0");
    });

    it("check news page", () => {
      cy.get('a[data-type="news"]', { timeout: 3000 }).click();
      cy.url().should("include", "/news/");
      generalElements.siteLogoInHeader().should("have.css", "opacity", "0");
      cy.get("input#fieldTextSearch").should("be.visible");
    });
  });
});
