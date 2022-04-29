import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

Given('two todo items are shown', () => {
  cy.findAllByRole('listitem', { container: Cypress.$('.todo-list') }).should(
    'have.length',
    2,
  );
});

When('the user adds the todo {string}', (todoItem: string) => {
  cy.findByPlaceholderText('What needs to be done?').type(`${todoItem}{enter}`);
});

Then('three todo items are shown', () => {
  cy.findAllByRole('listitem', { container: Cypress.$('.todo-list') })
    .as('todoItems')
    .should('have.length', 3);
});

And('the last item contains the text {string}', (todoItem) => {
  cy.get('@todoItems').last().should('have.text', todoItem);
});
