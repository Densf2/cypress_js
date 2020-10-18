/// <reference types="Cypress" />

import Homepage from './pages/homepage'

describe('Verification of product page', () => {
    const homepagelocators = new Homepage()

    beforeEach(() => {
        cy.visit('https://prego.ua')
        cy.fixture('eshop_text.json').as('text')
    })

    it('Open the sneaker product page', () => {
        cy.get('@text').then((text) => {
        homepagelocators.searchInput().click().type(text.search_text_for_boots)
        const productCode = cy.get('div.search-result:nth-child(1) span').invoke('text')
        homepagelocators.firstSearchResultItem().click()
        // cy.get('div.search-result:nth-child(1)').click()
        cy.url().should('include', 'https://prego.ua/uk/muzhskaya-obuv/myzskie-botinki/botinki-povsednevnie/y_vo_mbo_20_831_07_n')
        // cy.get('h1 > span').should('include', productCode)
    })
    })  
})