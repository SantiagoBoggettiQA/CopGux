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
  
  it('cliente logueado elige ubicacion', () => {

 
    
    cy.get('.btn-ok').click({ force: true })
    cy.get('.btn-green-light').click()
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

      cy.wait(25000)
      
      cy.get('.col-9 > .align-items-start', { timeout: 20000 }).should ('be.visible').click()
     cy.get('.bg-color-white > .p-0 > :nth-child(1)', { timeout: 20000 }).should('be.visible').click()
      cy.get('#autocompletesearchdesktop', { timeout: 10000 }).should('be.visible')
      .type('Vitacura', { force: true })
      cy.wait(5000)
      cy.get('.shadow-sm > :nth-child(1) > .w-100',{ timeout: 10000 }).should('be.visible').click();
      cy.get('.justify-content-center > .row > .text-center > .btn-default',{ timeout: 10000 }).should('be.visible').click();
      cy.wait(15000)
      cy.get('[style="width: 90%;"] > .bold').should('be.visible');
  })


    
  });
  