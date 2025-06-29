class Homepage {
  logoInHeader() {
    return cy.get('div.collectionHeader-logo a[aria-label="Go to ITNEXT"]');
  }
  searchIcon() {
    return cy.get("span.svgIcon--search");
  }
}

export default Homepage;
