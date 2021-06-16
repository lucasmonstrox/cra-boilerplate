// it('should redirect to home page', () => {
//   cy.visit('/');
//   cy.location('pathname').should('eq', '/');
// });

// it('Should appear task name error when form is submitted empty', () => {
//     cy.visit('/');
//     cy.get('[data-testid="submit"]').click()
//     cy.get('[data-testid="taskNameError"]').should('be.visible')
// })

// it('Should create task when form is submitted correctly', () => {
//     cy.visit('/');
//     cy.get('[data-testid="task"]').type('Go to market')
//     cy.get('[data-testid="submit"]').click()
//     cy.contains('Go to market')
// });

// it('Should remove task when delete button is clicked', () => {
//     cy.visit('/');
//     cy.contains('Remover').click()
//     cy.contains('Go to shopping').should('not.exist')
// });


/**/

it('Should raise an error when the input is empty ', () => {
    cy.visit('/');
    cy.get('[data-testid="taskTitle"]').click()
    cy.contains('Adicionar tarefa').click()
    cy.contains('O título é obrigatório')
})

it('Should throw an error when the input is less than five characters', () => {
    cy.visit('/');
    cy.get('[data-testid="taskTitle"]').type('1234');
    cy.contains('Adicionar tarefa').click()
    cy.contains('O mínimo de caracter é 5')
})

it('Should generate an error when the input has more than ten characters', () => {
    cy.visit('/');
    cy.get('[data-testid="taskTitle"]').type('12345678901234567890123');
    cy.contains('Adicionar tarefa').click()
    cy.contains('O máximo de caracter é 10')
})




// it('Should raise an error when the input is empty ', () => {
//     cy.visit('/');
//     cy.get('[data-testid="taskDescription"]').click()
//     cy.contains('Adicionar tarefa').click()
//     cy.contains('A descrição é obrigatória')
// })

// it('Should throw an error when the input is less than five characters', () => {
//     cy.visit('/');
//     cy.get('[data-testid="taskDescription"]').type('1234');
//     cy.contains('Adicionar tarefa').click()
//     cy.contains('O mínimo de caracter é 10')
// })

// it.only('Should generate an error when the input has more than ten characters', () => {
//     cy.visit('/');
//     cy.get('[data-testid="taskDescription"]').type('12345678901234567890123');
//     cy.contains('Adicionar tarefa').click()
//     cy.contains('O máximo de caracter é 20')
// })

