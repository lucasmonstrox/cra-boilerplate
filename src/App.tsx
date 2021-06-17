import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@material-ui/core';
import Todo, { ITodo } from './components/Todo';

const MIN_TODO_LENGTH = 6;
const MAX_TODO_LENGTH = 20;

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [inputHelper, setInputHelper] = useState<string>('Digite de 6 a 20 caracteres');
  const [inputError, setInputError] = useState<boolean>(false);

  const changeTodoNameHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(evt.target.value);
  }

  const getCurrentTimeStamp = () => new Date().getTime();

  const addTodoHandler = () => {
    const hasNewTodoAnInvalidName = newTodoName.length < MIN_TODO_LENGTH || newTodoName.length > MAX_TODO_LENGTH;
    if (hasNewTodoAnInvalidName) {
      setInputHelper('Entrada inválida (digite de 6 a 20 caracteres)');
      setInputError(true);
      return;
    } 
    const newTodo: ITodo = {
      id: getCurrentTimeStamp(),
      name: newTodoName,
      done: false,
    };
    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
    setInputHelper('Digite de 6 a 20 caracteres');
    setInputError(false);
  };

  const toggleTodoHandler = (currentTodoId: number) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === currentTodoId
      ? Object.assign(todo, {done: !todo.done}) 
      : todo);
    setTodoList(updatedTodoList);
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
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            p: 1,
          }}
        >
          <TextField
            data-testid="add-todo-input"
            sx={{
              maxWidth: '300px',
              mr: 'auto',
              width: '100%',
            }}
            error={!!inputError}
            helperText={inputHelper}
            label="Nova Tarefa"
            value={newTodoName}
            variant="filled"
            onChange={changeTodoNameHandler}
          />
          <Button
            data-testid="add-todo-btn"
            color="primary"
            variant="contained"
            onClick={addTodoHandler}
          >
            Add
          </Button>
        </Box>
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
