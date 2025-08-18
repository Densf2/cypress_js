class Homepage {
  logoInHeader() {
    return cy.get('div.i.l > a > div > img[alt="ITNEXT"]');
  }
  searchInput() {
    return cy.get('input[data-testid="headerSearchInput"]');
  }
}

export default Homepage;
