
class GeneralElements {
    linkInHeader() {
        return cy.get('.nav-list a.elem-tab');
    }

    siteLogoInHeader() {
        return cy.get('.container-header svg.svg-logo');
    }
}

export default GeneralElements;