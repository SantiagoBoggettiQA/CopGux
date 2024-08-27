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
   it('compra usuario logueado credito', () => {
   
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

      cy.wait(15000)
      
      
      cy.get(':nth-child(1) > .card-home-desktop > .card-home-desktop__content > .p-0', { timeout: 22000 }).click();
      cy.get('.text-center > .col-12 > :nth-child(2)').click();
      cy.wait(1200);
      cy.get(':nth-child(1) > .card-home-lub > .card-home-lub__content > .mt-2 > .btn-green-light').click();
      cy.get('.col-7 > .btn-default').click({ force: true });
      cy.wait(8000)  
      cy.get('.col-7 > .btn-default').click({ force: true });  
      cy.get('.flex-column > :nth-child(2) > .m-3 > :nth-child(2)').click({ force: true });
      cy.get('.bg-color-white > .mt-4 > .btn-dark-blue').click();
      cy.get('.col-12 > .px-3 > .btn-default').click();
      cy.get('.col-12 > .row > :nth-child(2) > .d-flex > .col-4 > .radio-grey-color').click({ force: true });
      cy.wait(5000)
      cy.get('.bg-color-white > .col-12 > .px-3 > .btn-default').click({ force: true })
    cy.wait(12000)
    cy.origin('https://webpay3gint.transbank.cl', () => {
      cy.get('#card-number').type('370000000002032');
      cy.get('#card-exp').type('1228')
      cy.get('#card-cvv').type('1234');
      cy.wait(3000) 
      cy.get('.next')
        .click({ force: true });
      cy.wait(5000);
      cy.get('body > app-root > app-home > main-panel > main > section > right-panel > app-credit > form.payment-checkout__form.ng-untouched.ng-pristine.ng-valid > app-button-step-credito > div > button.next')
      .click({ force: true });

      cy.get('#rutClient').type('11.111.111-1');
      cy.get('#passwordClient').type('123');
      cy.wait(3000) 
      cy.get('body > div > form > table > tbody > tr:nth-child(9) > td > input[type=submit]:nth-child(1)')
        .click({ force: true });
      cy.wait(2000);
      cy.get('body > div > form > table > tbody > tr:nth-child(4) > td > input[type=submit]')
        .click({ force: true });
    });

      cy.wait(33000)
      
      cy.get('.mx-4 > .col-12').should('be.visible')
  })
 
    
  });
  