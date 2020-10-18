/// <reference types="Cypress" />


import Homepage from './pages/homepage'

describe('testing eshop', () => {
    const homepagelocators = new Homepage()
    beforeEach(() => {
        cy.visit('https://prego.ua')
        cy.fixture('eshop_text.json').as('text')
    })

    it('open product page', () => {
        // example of loading the selector from the file
        homepagelocators.searchInput().should('be.visible').click().type('черевики')
        // 
        // cy.get('input#searchFormQueryInput').should('be.visible').click().type('черевики')
        cy.get('#search-submit').click()
        cy.url().should('include', 'https://prego.ua/uk/internal/full-search-result?query')
    })

    it('search by specific request', () => {
        cy.get('@text').then((text) => {
        cy.get('input#searchFormQueryInput').click()
        cy.get('input#searchFormQueryInput').type(text.search_text_sneaker)
    })
})
}) 