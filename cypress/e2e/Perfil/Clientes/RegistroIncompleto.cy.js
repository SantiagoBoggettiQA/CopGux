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
  
    it('registro incompleto assert aviso', () => {
    
    
      cy.get('.btn-ok').click({ force: true });
      cy.get('.btn-green-light').click({ force: true });
      cy.get(':nth-child(1) > div > span > a > u').click({ force: true });
      cy.wait(1000);
      cy.get(':nth-child(3) > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type("email@....", { force: true });
      cy.get(':nth-child(4) > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('USUARIO', { force: true });
      cy.get(':nth-child(5) > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('QA', { force: true });
      cy.get(':nth-child(6) > .ps-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('9oklBM1QTBcp!', { force: true });
      cy.get(':nth-child(6) > .pe-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('123456', { force: true });
      cy.get(':nth-child(7) > .ps-sm-0 > .col-12 > .input-transparent', { timeout: 15000 }).should('be.visible', { force: true })
        .type('987654321', { force: true });
      
     
      cy.get('.col-12 > .btn-default').click({ force: true });
      
      cy.wait(1000)
      cy.get(':nth-child(3) > .error-validations > span').should('be.visible', { force: true });
      cy.get('.ps-sm-0 > .error-validations > span').should('be.visible', { force: true });
      cy.get(':nth-child(6) > .pe-sm-0 > .error-validations > span').should('be.visible', { force: true });
      cy.get(':nth-child(7) > .pe-sm-0 > .error-validations > span').should('be.visible', { force: true });
      cy.get(':nth-child(8) > .error-validations > span').should('be.visible', { force: true });

 });

    
  });
  