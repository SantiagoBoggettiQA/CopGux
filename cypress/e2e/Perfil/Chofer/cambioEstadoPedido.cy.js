/// <reference types="cypress"/>
describe('Test Suite', () => {

  beforeEach(() => {
    // Limpiar cookies y almacenamiento local antes de cada test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://copec-sa.fusionauth.io/oauth2/authorize?client_id=8ae79912-a853-499b-b9d8-fba3610295ce&redirect_uri=https%3A%2F%2Fdnb6cku4pr0m8.cloudfront.net%2Fauth%2Fcallback&response_type=code&scope=openid+profile+email+offline_access&state=78192343b3ca4d84a62ae3c3a0c650c8&code_challenge=ceTDWJpTMoQBOaDcEKsZ2u3kiRmwzkQEhLg3Wl_WWtw&code_challenge_method=S256&response_mode=query');

    // Verificar si existe el botón de cerrar y hacer clic en él si está presente
    cy.get('body').then(($body) => {
      if ($body.find('.close').length > 0) {
        cy.get('.close').click({ force: true });
      }
    });
  });
  
  it('Poner en ruta pedido', () => {
cy.get('.row:nth-child(2)').click();
cy.get('#loginId').click();
cy.get('#loginId').type('2196joaco+operador_lav_60401@gmail.com');
cy.get('#password').click();
cy.get('#password').type('9oklBM1QTBcp');
cy.get('.blue').click();
cy.wait(12000);
cy.origin('https://dnb6cku4pr0m8.cloudfront.net/', () => {
  
cy.get('.col-4 > .btn > img').should('be.visible');
cy.get(':nth-child(1) > .rs-copec-cleanable > .rs-picker-toggle > .rs-picker-toggle-value').click();
cy.get('.rs-picker-toolbar-right > .rs-btn').click();
cy.get('.mb-5 > .col-12 > .btn').click();

cy.get(':nth-child(6) > .container-fluid').should('be.visible');

cy.get(':nth-child(6) > .container-fluid > .py-3 > .col-2 > .btn-default > .bi').click();
cy.get(':nth-child(3) > .btn > .border').click();
cy.get('.row > .bold').should('be.visible');


  });


  });
  
  

});