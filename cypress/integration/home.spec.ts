// it('should redirect to home page', () => {
//   cy.visit('/');
//   cy.location('pathname').should('eq', '/');
// });

it('should appear label message error when form is submitted empty', () => {
  cy.visit('/');
  cy.get('[data-testid="submit"]').click();
  cy.get('[data-testid="task-error"]').should('be.visible');
})

it('should appear label message error when task name length is greater then 20 caracters', () => {
  cy.visit('/');
  cy.get('[data-testid="task"]').type('012345678901234567890');
  cy.get('[data-testid="submit"]').click();
  cy.get('[data-testid="task-error"]').should('be.visible');
})

it('should create task when form is submited correctly', () => {
  cy.visit('/');
  cy.get('[data-testid="task"]').type('go to shopping');
  cy.get('[data-testid="submit"]').click();
  cy.contains('tarefa adicionada com sucesso');
})

it('should remove task when remove button is clicked', () => {
  cy.visit('/');
  cy.get('[data-testid="exclude-task-1"]').click();
  cy.contains('tarefa removida com sucesso');
})