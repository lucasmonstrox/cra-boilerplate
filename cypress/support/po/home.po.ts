export const getTodoNameInput = () => cy.get('[data-testid="add-todo-input"]');
export const getTodoNameError = () => getTodoNameInput().find('.Mui-error');
export const getAddButton = () => cy.get('[data-testid^="add-todo-btn"]');
export const getTodo = (id) => cy.get(`[data-testid="todo-${id}`);
