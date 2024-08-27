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
  

    it('Ir a preguntas frecuentes desde usuario no logueado', () => {
  
      cy.get('.btn-ok').click({ force: true })
      cy.get('.mx-3').click({ force: true })
      cy.get('.title').should('be.visible')
    })
  
    
  });
  