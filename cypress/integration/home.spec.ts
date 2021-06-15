// it('should redirect to home page', () => {
//   cy.visit('/');
//   cy.location('pathname').should('eq', '/');
// });

it('Should appear task name error when form is submitted empty', () => {
    cy.visit('/');
    cy.get('[data-testid="submit"]').click()
    cy.get('[data-testid="taskNameError"]').should('be.visible')
})

it('Should create task when form is submitted correctly', () => {
    cy.visit('/');
    cy.get('[data-testid="task"]').type('Go to market')
    cy.get('[data-testid="submit"]').click()
    cy.contains('Go to market')
});

it('Should remove task when delete button is clicked', () => {
    cy.visit('/');
    cy.contains('Remover').click()
    cy.contains('Go to shopping').should('not.exist')
});