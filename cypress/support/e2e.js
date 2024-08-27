// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// cypress/support/index.js

// Desactivar el manejo de errores no detectados en Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar el error y evitar que falle la prueba
    if (err.message.includes('Blocked a frame with origin')) {
      return false;
    }
  });