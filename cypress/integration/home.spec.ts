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

it('should not add a task with empty field', () => {
  cy.get('[data-testid="add-task-input"] input').clear();
  cy.get('[data-testid="add-task-btn"]').click();
  cy.get('[data-testid="task-item"]').should('not.exist');
  cy.get('[data-testid="add-task-input"').contains('Entrada inválida (digite de 6 a 20 caracteres)');
});

it('should not add a task with less than 6 characters', () => {
  cy.get('[data-testid="add-task-input"]').type('abcde');
  cy.get('[data-testid="add-task-btn"]').click();
  cy.get('[data-testid="task-item"]').should('not.exist');
  cy.get('[data-testid="add-task-input"').contains('Entrada inválida (digite de 6 a 20 caracteres)');
});


it('should not add a task with more than 20 characters', () => {
  cy.get('[data-testid="add-task-input"] input').clear();
  cy.get('[data-testid="add-task-input"]').type('abcdeabcdeabcdeabcdea');
  cy.get('[data-testid="add-task-btn"]').click();
  cy.get('[data-testid="task-item"]').should('not.exist');
  cy.get('[data-testid="add-task-input"').contains('Entrada inválida (digite de 6 a 20 caracteres)');
});
