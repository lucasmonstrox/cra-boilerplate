import {
  getInput,
  getInputField,
  getAddButton,
  getTodo,
  getTodoRemoveButton,
  getTodoToggleButton,
} from '../support/po/home.po';

it('should redirect to home page', () => {
  cy.visit('/');
  cy.location('pathname').should('eq', '/');
});

it('should create a new task', () => {
  getInput().type('Created by Cypress');
  getAddButton().click();
  getTodo().its('length').should('eq', 1);
  cy.get('[data-testid="task-label"').contains('Created by Cypress');
});

it('should complete the task', () => {
  getTodoToggleButton().click();
  getTodo().should('have.css', 'opacity', '0.5');
});

it('should reactivate the task', () => {
  getTodoToggleButton().click();
  getTodo().should('have.css', 'opacity', '1');
});

it('should remove the task', () => {
  getTodoRemoveButton().click();
  getTodo().should('not.exist');
});

it('should not add a task with empty field', () => {
  getInputField().clear();
  getAddButton().click();
  getTodo().should('not.exist');
  getInput().contains('Entrada inválida (digite de 6 a 20 caracteres)');
});

it('should not add a task with less than 6 characters', () => {
  getInput().type('abcde');
  getAddButton().click();
  getTodo().should('not.exist');
  getInput().contains('Entrada inválida (digite de 6 a 20 caracteres)');
});


it('should not add a task with more than 20 characters', () => {
  getInputField().clear();
  getInput().type('abcdeabcdeabcdeabcdea');
  getAddButton().click();
  getTodo().should('not.exist');
  getInput().contains('Entrada inválida (digite de 6 a 20 caracteres)');
});
