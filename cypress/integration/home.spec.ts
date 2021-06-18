const getTaskInput = () => cy.get('[data-testid="task-input"]');
const getAddTaskButton = () => cy.get('[data-testid="add-task-button"]');
const getTaskInputError = () => getTaskInput().find('.Mui-error');
const getFirstTaskItem = () => cy.get('.MuiListItem-root');
const getTaskByTitle = () => cy.get('[data-testid="input-task-search"]');
const getDeleteTask = () => cy.get('[data-testid="delete-task-button"]');

beforeEach(() => {
  cy.visit('/');
});

it('should appear error of task name when form is submitted empty', () => {
  getAddTaskButton().click();
  getTaskInputError().should('be.visible');
});

it('should appear error of task name when task title length is greater than 20 caracters', () => {
  getTaskInput().type('012345678901234567890');
  getAddTaskButton().click();
  getTaskInputError().should('be.visible');
});

it('should create task when form is submitted correctly', () => {
  const inputTaskText = 'go to shopping';
  getTaskInput().type(`${inputTaskText}{enter}`);
  getAddTaskButton().click();
  getFirstTaskItem().contains(inputTaskText);
});

it('should remove task when remove button is clicked', () => {
  const inputTaskText = 'go to shopping';
  getTaskInput().type(`${inputTaskText}{enter}`);
  getAddTaskButton().click();
  getDeleteTask().click();
});

it('should filter tasks by title when the filter input is filled', () => {
  const inputTaskText = 'go to shopping';
  getTaskInput().type(`${inputTaskText}{enter}`);
  getAddTaskButton().click();
  getTaskByTitle().type('go to');
  getFirstTaskItem().contains(inputTaskText);
});
