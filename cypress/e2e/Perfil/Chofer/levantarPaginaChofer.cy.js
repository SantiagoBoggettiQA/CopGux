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
  
  it('Verificar que la página cargue correctamente', () => {
    cy.url().should('contain', 'https://copec-sa.fusionauth.io/oauth2/authorize?client_id=8ae79912-a853-499b-b9d8-fba3610295ce&redirect_uri=https%3A%2F%2Fdnb6cku4pr0m8.cloudfront.net%2Fauth%2Fcallback&response_type=code&scope=openid+profile+email+offline_access&state=78192343b3ca4d84a62ae3c3a0c650c8&code_challenge=ceTDWJpTMoQBOaDcEKsZ2u3kiRmwzkQEhLg3Wl_WWtw&code_challenge_method=S256&response_mode=query');
    cy.get('h2').should('be.visible')
  });
  
  

});