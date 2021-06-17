it('should appear title error message when title input is empty', () => {
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
    cy.get('[data-testid="taskTitle"]').type('12345678901234567890123231231');
    cy.contains('Adicionar tarefa').click()
    cy.contains('O máximo de caracter é 20')
})

it('Should check if the task has added', () => {
    cy.visit('/')
    cy.get('[data-testid="taskTitle"]').type('Segunda');
    cy.contains('Adicionar tarefa').click()
    cy.contains('Tarefa adicionada com sucesso.')
})

it('Should cross off task when completed', () => {
    cy.visit('/')
    cy.get('[data-testid="btnChecked"]').click()
    cy.get('[data-testid="textChecked"]').should('have.css', 'text-decoration-line', 'line-through')
})

it('Should check if the task has been removed', () => {
    cy.visit('/')
    cy.get('[data-testid="btnRemove"]').click()
    cy.contains('Tarefa removida com sucesso.')
})

