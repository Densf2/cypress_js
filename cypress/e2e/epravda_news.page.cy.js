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

    it('Check the main news block', () => {
        cy.get('@epravdatext').then((epravdaText) => {
        cy.get('img.article__img').eq(0).should('be.visible')
        cy.get('div.block_top_stories__title').should('contain', epravdaText.main_news_title)
        cy.get('div.block_top_stories div.article').should('have.length', 3)
        })
    })
     
})