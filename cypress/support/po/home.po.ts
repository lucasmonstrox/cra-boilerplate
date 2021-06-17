export const getInputs = () => cy.get('[data-testid^="add-todo-input"]');
export const getInputsFields = () => cy.get('[data-testid^="add-todo-input"] input');
export const getAddButtons = () => cy.get('[data-testid^="add-todo-btn"]');
export const getTodoItems = () => cy.get('[data-testid^="todo-"]');
export const getToggleTodoButtons = () => cy.get('[data-testid^="toggle-todo-"');
export const getRemoveTodoButtons = () => cy.get('[data-testid^="remove-todo-"');
