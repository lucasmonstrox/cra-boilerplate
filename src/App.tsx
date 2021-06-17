import React, { FC, useState } from 'react';
import {
  Box,
  Container,
  CssBaseline,
} from '@material-ui/core';
import Todo, { ITodo } from './components/Todo';
import TodoForm from './components/TodoForm/TodoForm';

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodoHandler = (newTodo: ITodo) => {
    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
  };

  const toggleTodoHandler = (currentTodoId: number) => {
    const currentTodoIndex = todoList.findIndex((todo) => todo.id === currentTodoId);
    todoList[currentTodoIndex].done = !todoList[currentTodoIndex].done;
    setTodoList([...todoList]);
  };

  const removeTodoHandler = (currentTodoId: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== currentTodoId);
    setTodoList(newTodoList);
  };

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <TodoForm
          onSubmit={addTodoHandler}
        />
        <Box sx={{
          alignContent: 'flex-start',
          display: 'flex',
          flex: 'auto',
          flexWrap: 'wrap',
          gap: 1,
          justifyContent: 'center',
          p: 1,
        }}>
          {
            todoList.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onRemove={removeTodoHandler}
                onToggle={toggleTodoHandler}
              />
            ))
          }
        </Box>
      </Container>
    </>
)};

export default App;
