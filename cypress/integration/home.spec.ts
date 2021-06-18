const getTaskTitleInput = () => cy.get('[data-testid="task-title-input"]');
const getAddTaskButton = () => cy.get('[data-testid="add-task-button"]');
const getTitleMsgError = () => cy.get('[data-testid="title-msg-error"]');
const getModalActionTask = () =>
  cy.get('[data-testid="modal-msg-action-task"]');
const getButtonCheckedTask = () =>
  cy.get('[data-testid="button-checked-task"]');
const getTextTitleTask = () => cy.get('[data-testid="text-title-task"]');
const getButtonRemoveTask = () => cy.get('[data-testid="button-remove-task"]');

beforeEach(() => {
  cy.visit('/');
});

it('should appear title error message when title input is empty', () => {
  getTaskTitleInput().click();
  getAddTaskButton().click();
  getTitleMsgError().should('be.visible');
});

it('should appear error of task title when the task title input length is less than 5 characters', () => {
  getTaskTitleInput().type('1234');
  getAddTaskButton().click();
  getTitleMsgError().should('be.visible');
});

it('should appear error of task title when the task title input length is greater than 20 characters', () => {
  getTaskTitleInput().type('12345678901234567890123231231');
  getAddTaskButton().click();
  getTitleMsgError().should('be.visible');
});

it('should add new task when form is submitted correct', () => {
  getTaskTitleInput().type('Segunda');
  getAddTaskButton().click();
  getModalActionTask().should('be.visible');
});

it('Should cross off task when completed', () => {
  getButtonCheckedTask().click();
  getTextTitleTask().should('have.css', 'text-decoration-line', 'line-through');
});

it('Should check if the task has been removed', () => {
  getButtonRemoveTask().click();
  getModalActionTask().should('be.visible');
});
