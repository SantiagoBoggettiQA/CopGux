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
  
      it('compra no logueado ANULADA', () => {

        cy.get('.btn-ok').click({ force: true })
        cy.get('.btnRight > .d-none', { timeout: 22000 }).click({ force: true })
        cy.get('#autocompletesearchdesktop', { timeout: 15000 }).should('be.visible')
          .type('Vitacura', { force: true })
          cy.wait(5000)
          cy.get('.shadow-sm > :nth-child(1) > .w-100',{ timeout: 10000 }).should('be.visible').click();
          cy.get('.justify-content-center > .row > .text-center > .btn-default',{ timeout: 10000 }).should('be.visible').click();
          cy.wait(9000)
         
    
          cy.get(':nth-child(1) > .card-home-desktop > .card-home-desktop__content > .p-0', { timeout: 22000 }).click();
          cy.get('[style="display: flex; backdrop-filter: blur(10px);"] > .flex-column > .drawer-services-form-fields > .row > .col-12 > .input-default').should('be.visible')
          .type('AA1112', { force: true });
          cy.get('[style="display: flex; backdrop-filter: blur(10px);"] > .flex-column > .drawer-services-form-fields > .m-4 > .btn-default').click({ force: true })
          cy.wait(5000)
          cy.get('[style="display: flex; backdrop-filter: blur(10px);"] > .flex-column > .drawer-services-form-fields > .align-items-center > .btn-default').click({ force: true })
          cy.wait(5000)
          cy.get(':nth-child(1) > .card-home-lub > .card-home-lub__content > .mt-2 > .btn-green-light').click({ force: true })
          cy.wait(5000)
          cy.get('.col-7 > .btn-default').click({ force: true })
          cy.get('.flex-column > :nth-child(2) > .m-3 > :nth-child(2)').click({ force: true })
          cy.wait(2000)
          cy.get('.bg-color-white > .mt-4 > .btn-dark-blue').click({ force: true })
          cy.wait(1500)
          cy.get('.col-12 > .px-3 > .btn-default').click({ force: true })
          cy.wait(1500)
          cy.get('.col-12 > .row > :nth-child(2) > .d-flex > .col-4 > .radio-grey-color',{ force: true }).click()
          cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .col > .w-100').should('be.visible')
          .type('TESTER', { force: true });
          cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .col > .w-100').should('be.visible')
          .type('169303983', { force: true });
          cy.get(':nth-child(4) > :nth-child(3) > :nth-child(1) > .col > .w-100').should('be.visible')
          .type('santi@gux.tech', { force: true });
          cy.get(':nth-child(4) > :nth-child(3) > :nth-child(2) > .col > .w-100').should('be.visible')
          .type('987654321', { force: true });
          cy.get('#terms').click({ force: true })
          cy.get(':nth-child(1) > .px-3 > .btn-default',{ force: true }).click()
          cy.wait(12000)
          cy.origin('https://webpay3gint.transbank.cl', () => {
          cy.get('.payment-footer > app-anulation > .payment-options__return > p > a').click({ force: true });
          cy.wait (6000)

          
          });
          cy.get('.d-flex > .row > .bold-300').should('be.visible')  
          
        
        })

    
  });
  