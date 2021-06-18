const getTaskInput = () => cy.get('[data-testid="task-input"]');
const getAddTaskButton = () => cy.get('[data-testid="add-task-button"]');
const getTaskInputError = () => getTaskInput().find('.Mui-error');
const getTaskItem = () => cy.get('.MuiListItem-root');


it('should appear label message error when form is submitted empty', () => {
  cy.visit('/');
  getAddTaskButton().click();
  getTaskInputError().should('be.visible');
});

it('should appear label message error when task title length is greater then 20 caracters', () => {
  cy.visit('/');
  getTaskInput().type('012345678901234567890');
  getAddTaskButton().click();
  getTaskInputError().should('be.visible');
});

it.only('should create task when form is submitted correctly', () => {
  const text = 'go to shopping';
  cy.visit('/');
  getTaskInput().type(`${text}{enter}`);
  getAddTaskButton().click();
  getTaskItem().contains(text);
});

it('should remove task when remove button is clicked', () => {
  cy.visit('/');
  cy.get('[data-testid="exclude-task-button"]').click();
});

it('should filter tasks by title when the filter input is filled', () => {
  cy.visit('/');
  cy.get('[data-testid="input-filter"]').type('ola');
});
