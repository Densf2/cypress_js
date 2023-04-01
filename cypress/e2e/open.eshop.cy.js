/// <reference types="Cypress" />


import Homepage from './pages/homepage'

describe('testing eshop', () => {
    const homepagelocators = new Homepage()
    beforeEach(() => {
        cy.visit('https://prego.ua/uk/new-products')
        cy.fixture('eshop_text.json').as('text')
    })

    it('open product page', () => {
        // example of loading the selector from the file
        homepagelocators.searchInput().click().type('черевики')
        // 
        cy.get('#search-submit').click()
        cy.url().should('include', 'https://prego.ua/uk/internal/full-search-result?query')
    })

    it('search by specific request', () => {
        cy.get('@text').then((text) => {
        cy.get('input#searchFormQueryInput').click()
        cy.get('input#searchFormQueryInput').type(text.search_text_sneaker)
    })

    it('clicking on the delivery link', () => {
        cy.get('div.clearfix.header-wrap > ul.nav-top.header__left > li:nth-child(1) > a').click();
        cy.url().should('contain', '/uk/dostavka');
    })
})
}) 