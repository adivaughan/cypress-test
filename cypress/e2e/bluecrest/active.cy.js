/// <reference types="cypress" />


describe('Visit Bluecrest Wellness website', () => {
    beforeEach(() => {
        cy.visit('https://www.bluecrestwellness.com/')
          cy.title().should('include', 'Bluecrest Wellness - Take Control Of Your Health')
          cy.wait(6000)
      })
    it('select package', () => {
        cy.get('body').then(($body) => {
          if ($body.find('div.packages-block_packageWrapper__65GKj').length > 0) {
            cy.contains('h3', 'Active') 
            .parents('div.packages-block_packageWrapper__65GKj') 
            .within(() => {
              cy.contains('button', 'Book now').click()
            })
          }
        })
        cy.wait(6000)
        cy.get('body').then(($body) => {
            cy.get('#address-search').type('BN1 6AG')
            cy.get('#address-search-btn').click()
            cy.get('#venue-62').click()
            cy.get('.btn_day').first().click()
            cy.get('.available').first().click()
       
        })
        cy.get('body').then(($body) => {
            if ($body.find('.venue-button-holder').length > 0) {
                cy.contains('button', 'Confirm').click()
            }
          })
    })
})
