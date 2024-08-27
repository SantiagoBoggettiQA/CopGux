/// <reference types="cypress"/>
describe('Test Suite', () => {

  beforeEach(() => {
    // Limpiar cookies y almacenamiento local antes de cada test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://copec-sa.fusionauth.io/oauth2/authorize?client_id=8ae79912-a853-499b-b9d8-fba3610295ce&redirect_uri=https%3A%2F%2Fd181ovrgz3m8vs.cloudfront.net%2Fauth%2Fcallback&response_type=code&scope=openid+profile+email+offline_access&state=d298c2282add46e29bfe9761bfdf2b07&code_challenge=YeZknTBxOZnBvx4GLE-kqZcxLx9xsLZK78weDYlZ7mc&code_challenge_method=S256&response_mode=query');

    // Verificar si existe el botón de cerrar y hacer clic en él si está presente
    cy.get('body').then(($body) => {
      if ($body.find('.close').length > 0) {
        cy.get('.close').click({ force: true });
      }
    });
  });
  
  it('Cerrar Sesion', () => {
cy.get('.row:nth-child(2)').click();
cy.get('#loginId').click();
cy.get('#loginId').type('2196joaco+admin@gmail.com');
cy.get('#password').click();
cy.get('#password').type('9oklBM1QTBcp');
cy.get('.blue').click();
cy.wait(12000);
cy.origin('https://d181ovrgz3m8vs.cloudfront.net/pedidos', () => {
  
  cy.get('.to-upper').should('be.visible');
  cy.wait(2000)
  cy.get('.col-3 > .component-menu > :nth-child(3) > .m-0 > [href="/logout"] > .color-grey-menu').click({ force: true });

 
  cy.wait(6000);

  });

  cy.get('h2').should('be.visible');

  });
  
  

});