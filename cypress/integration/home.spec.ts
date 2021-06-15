it('should redirect to home page', () => {
  cy.visit('/');
  cy.location('pathname').should('eq', '/');
});

it('should create a new task', () => {
  cy.get('[data-testid="add-task-input"]').type('Created by Cypress');
  cy.get('[data-testid="add-task-btn"]').click();
  cy.get('[data-testid="task-item"]').its('length').should('eq', 1);
  cy.get('[data-testid="task-label"').contains('Created by Cypress');
});

it('should complete the task', () => {
  cy.get('[data-testid="end-task-btn"').click();
  cy.get('[data-testid="task-item"]').should('have.css', 'opacity', '0.5');
});

it('should reactivate the task', () => {
  cy.get('[data-testid="end-task-btn"').click();
  cy.get('[data-testid="task-item"]').should('have.css', 'opacity', '1');
});

it('should remove the task', () => {
  cy.get('[data-testid="remove-task-btn"').click();
  cy.get('[data-testid="task-item"]').should('not.exist');
});
