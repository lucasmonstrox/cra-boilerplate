const getTaskTitleInput = () => cy.get('[data-testid="task-title-input"]');
const getAddTaskButton = () => cy.get('[data-testid="add-task-button"]');
const getTitleMsgError = () => cy.get('[data-testid="title-msg-error"]');
const getModalActionTask = () =>
  cy.get('[data-testid="modal-msg-action-task"]');
const getFirstTaskItem = () => cy.get('.task-item').first();
const getButtonCheckedTask = () => getFirstTaskItem().find('[type="checkbox"]');
const getRemoveTaskButton = () => cy.get('[data-testid="remove-task-button"]');

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

it('should mark task as completed when click on checkbox', () => {
  getButtonCheckedTask().click();
  getFirstTaskItem()
    .find('.MuiListItemText-root')
    .should('have.css', 'text-decoration-line', 'line-through');
});

it('should remove task when click on remove task button', () => {
  getRemoveTaskButton().click();
  getModalActionTask().should('be.visible');
});
