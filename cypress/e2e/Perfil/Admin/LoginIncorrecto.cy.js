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
  
  it('Login Incorrecto', () => {
    cy.visit('https://copec-sa.fusionauth.io/oauth2/authorize?client_id=8ae79912-a853-499b-b9d8-fba3610295ce&redirect_uri=https%3A%2F%2Fd181ovrgz3m8vs.cloudfront.net%2Fauth%2Fcallback&response_type=code&scope=openid+profile+email+offline_access&state=d298c2282add46e29bfe9761bfdf2b07&code_challenge=YeZknTBxOZnBvx4GLE-kqZcxLx9xsLZK78weDYlZ7mc&code_challenge_method=S256&response_mode=query');
cy.get('.row:nth-child(1)').click();
cy.get('#loginId').click();
cy.get('#loginId').type('santiago@gux.tech');
cy.get('#password').type('123456');
cy.get('.blue').click();
cy.url().should('contains', 'https://copec-sa.fusionauth.io/oauth2/authorize');
cy.get('p').should('be.visible');


  });
  
  

});