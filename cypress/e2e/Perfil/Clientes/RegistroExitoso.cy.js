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
  

    it('Registro exitoso', () => {
      // Función para generar una cadena aleatoria de una longitud dada
      function getRandomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }
    
      // Generar email aleatorio
      const email = `${getRandomString(8)}@gmail.com`;
    
    
    
     
      cy.get('.btn-ok').click({ force: true });
      cy.get('.btn-green-light').click({ force: true });
      cy.get(':nth-child(1) > div > span > a > u').click({ force: true });
      cy.wait(1000);
      cy.get(':nth-child(3) > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type(email, { force: true });
      cy.get(':nth-child(4) > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('USUARIO', { force: true });
      cy.get(':nth-child(5) > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('QA', { force: true });
      cy.get(':nth-child(6) > .ps-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('9oklBM1QTBcp!', { force: true });
      cy.get(':nth-child(6) > .pe-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('9oklBM1QTBcp!', { force: true });
      cy.get(':nth-child(7) > .ps-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('987654321', { force: true });
      cy.get(':nth-child(7) > .pe-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('10.382.542-3', { force: true });
      cy.get('#terms').click({ force: true });
      cy.get('.col-12 > .btn-default').click({ force: true });
      cy.get('.input-transparent').should('be.visible');
      cy.get('.col-12 > .btn-default').should('be.visible');
    });

  
    
  });
  