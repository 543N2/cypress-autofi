// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('log', (originalFn, message, options) => {
    const logMessage = `[Log] ${message}`;
  
    cy.readFile('cypress/fixtures/logs.txt').then((existingContent) => {
      const updatedContent = existingContent + logMessage + '\n';
  
      cy.writeFile('cypress/fixtures/logs.txt', updatedContent);
    });
  
    originalFn(message, options);
  });
  