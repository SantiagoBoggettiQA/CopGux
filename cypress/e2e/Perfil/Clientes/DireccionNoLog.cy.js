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
 
  it('ingresa direccion no logueado', () => {
 

      cy.get('.btn-ok').click({ force: true })
    cy.get('.btnRight > .d-none', { timeout: 22000 }).click()
    cy.get('#autocompletesearchdesktop', { timeout: 15000 }).should('be.visible', { force: true })
      .type('Vitacura', { force: true })
      cy.wait(5000)
      cy.get('.shadow-sm > :nth-child(1) > .w-100',{ timeout: 10000 }).should('be.visible').click();
      cy.get('.justify-content-center > .row > .text-center > .btn-default',{ timeout: 10000 }).should('be.visible').click();
      cy.wait(15000)
      cy.get('[style="width: 90%;"] > .bold').should('be.visible');

  })
 
    
  });
  