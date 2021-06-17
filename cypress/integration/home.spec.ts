import {
  getInputs,
  getInputsFields,
  getAddButtons,
  getTodoItems,
  getToggleTodoButtons,
  getRemoveTodoButtons,
} from '../support/po/home.po';

it('should not add a task when field is empty', () => {
  cy.visit('/');
  getInputsFields().clear();
  getAddButtons().click();
  getTodoItems().should('not.exist');
});

it('should not add a task when field has less than 6 characters', () => {
  getInputs().type('abcde');
  getAddButtons().click();
  getTodoItems().should('not.exist');
});


it('should not add a task when field has more than 20 characters', () => {
  getInputsFields().clear();
  getInputs().type('abcdeabcdeabcdeabcdea');
  getAddButtons().click();
  getTodoItems().should('not.exist');
});

it('should create a new task when field is valid', () => {
  getInputsFields().clear();
  getInputs().type('Created by Cypress');
  getAddButtons().click();
  getTodoItems().should('be.visible');
});

it('should complete the task when it was created', () => {
  getToggleTodoButtons().click();
  getTodoItems().should('have.css', 'opacity', '0.5');
});

it('should reactivate the task when it was completed', () => {
  getToggleTodoButtons().click();
  getTodoItems().should('have.css', 'opacity', '1');
});

it('should remove the task when it was created', () => {
  getRemoveTodoButtons().click();
  getTodoItems().should('not.exist');
});
