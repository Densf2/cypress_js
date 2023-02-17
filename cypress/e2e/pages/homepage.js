class Homepage {
    searchInput() {
        return cy.get('input#searchFormQueryInput')
    }

    firstSearchResultItem() {
        return cy.get('div.search-result:nth-child(1)')
    }
}

export default Homepage