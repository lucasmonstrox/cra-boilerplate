import * as faker from 'faker';
import todos from '../fixtures/todoList';
import makeTodo from '../support/mocks/todo';
import {
  getTodoNameInput,
  getTodoNameError,
  getAddButton,
  getTodo,
} from '../support/po/home.po';

beforeEach(() => {
  cy.mockGql('GetTodos', { todos });
  cy.visit('/');
  cy.wait('@GetTodos');
});

it('should appear an error of todo name when form is submitted empty', () => {
  getAddButton().click();
  getTodoNameError().should('be.visible');
});

it('should appear an error of todo name when field has less than 6 characters', () => {
  getTodoNameInput().type(faker.random.words(1).substring(0, 4));
  getAddButton().click();
  getTodoNameError().should('be.visible');
});

it('should appear an error of todo name when field has more than 20 characters', () => {
  getTodoNameInput().type(faker.random.words(6).substring(0, 21));
  getAddButton().click();
  getTodoNameError().should('be.visible');
});

it('should create a new todo when form is submitted correctly', () => {
  const createTodo = makeTodo({ done: false });
  cy.mockGql('CreateTodo', { createTodo });
  cy.mockGql('GetTodos', { todos: [createTodo, ...todos] });
  getTodoNameInput().type(createTodo.name);
  getAddButton().click();
  cy.wait('@CreateTodo');
  getTodo(createTodo.id).should('exist');
});

it('should complete todo when toggle button is clicked', () => {
  const [firstTodo, secondTodo] = todos;
  const updateTodo = { ...firstTodo, done: true };
  cy.mockGql('UpdateTodo', { updateTodo });
  cy.mockGql('GetTodos', { todos: [updateTodo, secondTodo] });
  getTodo(firstTodo.id).contains('Completar').click();
  cy.wait(['@UpdateTodo', '@GetTodos']);
  getTodo(firstTodo.id).should('have.css', 'opacity', '0.5');
});

it('should reactivate todo when toggle button is clicked', () => {
  const [firstTodo, secondTodo] = todos;
  const updateTodo = { ...secondTodo, done: false };
  cy.mockGql('UpdateTodo', { updateTodo });
  cy.mockGql('GetTodos', { todos: [firstTodo, updateTodo] });
  getTodo(secondTodo.id).contains('Reativar').click();
  cy.wait(['@UpdateTodo', '@GetTodos']);
  getTodo(secondTodo.id).should('have.css', 'opacity', '1');
});

it('should delete todo when delete button is clicked', () => {
  cy.mockGql('DeleteTodo', { deleteTodo: true });
  cy.mockGql('GetTodos', { todos: [todos[1]] });
  const [firstTodo] = todos;
  getTodo(firstTodo.id).contains('Apagar').click();
  cy.wait(['@DeleteTodo', '@GetTodos']);
  getTodo(firstTodo.id).should('not.exist');
});
