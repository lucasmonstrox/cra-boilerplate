import {
  getInput,
  getInputField,
  getAddButton,
  getTodoItem,
  getToggleTodoButton,
  getRemoveTodoButton,
} from '../support/po/home.po';

it('should not add a task when field is empty', () => {
  cy.visit('/');
  getInputField().clear();
  getAddButton().click();
  getTodoItem().should('not.exist');
});

it('should not add a task when field has less than 6 characters', () => {
  getInput().type('abcde');
  getAddButton().click();
  getTodoItem().should('not.exist');
});


it('should not add a task when field has more than 20 characters', () => {
  getInputField().clear();
  getInput().type('abcdeabcdeabcdeabcdea');
  getAddButton().click();
  getTodoItem().should('not.exist');
});

it('should create a new task when field is valid', () => {
  getInputField().clear();
  getInput().type('Created by Cypress');
  getAddButton().click();
  getTodoItem().should('be.visible');
});

it('should complete the task when it was created', () => {
  getToggleTodoButton().click();
  getTodoItem().should('have.css', 'opacity', '0.5');
});

it('should reactivate the task when it was completed', () => {
  getToggleTodoButton().click();
  getTodoItem().should('have.css', 'opacity', '1');
});

it('should remove the task when it was created', () => {
  getRemoveTodoButton().click();
  getTodoItem().should('not.exist');
});
