import { Before, Given } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  // Having an interceptor in `Before` seems to break it.
  cy.intercept('/**').as('requests');
});

Given('the user views {string}', (url: string) => {
  cy.visit(url);
});
