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
      it('recuperar Contraseña', () => {
      
    npx
      cy.get('.btn-ok').click({ force: true })
      cy.get('.btn-green-light').click({ force: true })
      cy.get('h2').should('be.visible')
      cy.get('.close').click()
      cy.wait(1000)
      cy.get('.text-center > .color-blue-base').click()
      cy.get('.input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
      .type('santiago@gux.tech', { force: true });
      cy.wait(500)
      cy.get('.col-12 > .btn-default').click()
     
      cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')
    });

    
  });
  