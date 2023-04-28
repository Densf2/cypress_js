/// <reference types="Cypress" />

import Homepage from './pages/homepage'

describe('Verification of product page', () => {
    const homepagelocators = new Homepage()

    beforeEach(() => {
        cy.visit('https://www.epravda.com.ua')
        cy.fixture('epravda_text.json').as('epravdatext')
    })

    it('Check that page loaded correctly', () => {
        cy.get('@epravdatext').then((epravdaText) => {
        cy.title().should('eq', epravdaText.title_of_entry_page_news)
        })
    })

     
})