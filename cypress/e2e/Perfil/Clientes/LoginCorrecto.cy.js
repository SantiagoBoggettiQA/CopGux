/// <reference types="cypress"/>
describe('Test Suite', () => {

  beforeEach(() => {
    // Limpiar cookies y almacenamiento local antes de cada test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://d2tqt7nykfmit.cloudfront.net/')
    cy.get('body').then(($body) => {
      if ($body.find('.close').length > 0) {
        cy.get('.close').click({ force: true });
      }
    });

  });
  

  it('login correcto', () => {
     
    cy.get('.btn-ok').click({ force: true })
    cy.get('.btn-green-light').click({ force: true })
    cy.get('h2').should('be.visible')
    cy.get('.close').click()
    cy.get('.row.mb-3 > .col-12 > .input-transparent', { timeout: 10000 })
      .should('be.visible')
      .type('santiago@gux.tech', { force: true });

    cy.get('.px-3.mb-4 > .col-12 > .input-transparent', { timeout: 10000 })
      .should('be.visible')
      .type('9oklBM1QTBcp!', { force: true });

      cy.get('.col-12 > .btn-default', { timeout: 10000 })
      .should('be.visible').click();

      cy.wait(15000)
      cy.get('.col-3 > .btn > img', { timeout: 25000 })
      .should('be.visible');

  })
  
  });
  