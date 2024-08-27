/// <reference types="cypress"/>
describe('Test Suite', () => {

  beforeEach(() => {
    // Limpiar cookies y almacenamiento local antes de cada test
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://d2tqt7nykfmit.cloudfront.net/');

    // Verificar si existe el botón de cerrar y hacer clic en él si está presente
    cy.get('body').then(($body) => {
      if ($body.find('.close').length > 0) {
        cy.get('.close').click({ force: true });
      }
    });
  });
  
  it('Verificar que la página cargue correctamente', () => {
    cy.url().should('contain', 'd2tqt7nykfmit.cloudfront.net');
  });

  it('Aceptar cookies', () => {
    cy.get('.btn-ok').should('be.visible').click({ force: true });
  });

  it('Navegar a la página de login', () => {
    // Asegurarse de que el botón de aceptar cookies esté visible y hacer clic
    cy.get('.btn-ok').should('be.visible').click({ force: true });
    
    // Hacer clic en el botón de login
    cy.get('.btn-green-light').should('be.visible').click({ force: true });
    
    // Verificar que el título de la página de login esté visible
    cy.get('h2').should('be.visible');
  });
});