/// <reference types="Cypress" />

import Homepage from './pages/homepage'

describe('Verification of product page', () => {
    const homepagelocators = new Homepage()

    beforeEach(() => {
        cy.visit('https://prego.ua/uk/new-products')
        cy.fixture('eshop_text.json').as('text')
    })

    it('Open the sneaker product page', () => {
        cy.get('@text').then((text) => {
        homepagelocators.searchInput().click().type(text.search_text_for_boots)
        cy.get('div.a_discount span').eq(0).invoke('val').then(sometext => cy.log(sometext));
        cy.get('div.a_discount span').should(($txt) => {
            expect($txt.get(0).innerText).to.match(/\d/g)
        })
        cy.get('div.search-result:nth-child(1)').click()
        cy.url().should('include', 'https://prego.ua/uk/')
        cy.get('div.new-price-red').should('be.visible').contains('ціна')
        // mai page of product is visible
        cy.get('img.image').should('be.visible')
    })
    })  
})