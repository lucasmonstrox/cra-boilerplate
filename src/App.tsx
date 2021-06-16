import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@material-ui/core';
import Todo from './components/Todo/Todo';
import { Todo as ITodo } from './components/Todo/typings';

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [inputTodoError, setInputTodoError] = useState<string>('');

  const changeTodoNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(event.target.value);
  }

  const addTodoHandler = () => {
    const hasNewTodoAnInvalidName = !newTodoName || newTodoName.length < 6 || newTodoName.length > 20;
    if (hasNewTodoAnInvalidName) {
      setInputTodoError('Entrada inválida (digite de 6 a 20 caracteres)');
      return;
    } 
    const newTodo: ITodo = {
      title: newTodoName,
      done: false,
    };
    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
  };

  const changeTodoStatus = (position: number) => {
    const currentTodo = todoList[position];
    todoList[position] = { ...currentTodo, done: !currentTodo.done }
    setTodoList(todoList);
  }

  const removeTodoHandler = (position: number) => setTodoList(todoList.filter((_, index) => index !== position));
  
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          p={1}
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            sx={{
              mr: 'auto',
            }}
            error={!!inputTodoError}
            value={newTodoName}
            onChange={changeTodoNameHandler}
            data-testid="add-task-input"
            label="Nova Tarefa"
            helperText={inputTodoError}
            variant="filled"
          />
          <Button
            onClick={addTodoHandler}
            data-testid="add-task-btn"
            variant="contained"
            color="primary"
          >
            Add Task
          </Button>
        </Box>
        <Box p={1} sx={{
          flex: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          justifyContent: 'center',
          gap: 1,
        }}>
          {
            todoList.map((todo, index) => (
              <Todo
                id={index}
                todo={todo}
                onRemove={removeTodoHandler}
                onToggle={changeTodoStatus}
              />
            ))
          }
        </Box>
      </Container>
    </>
)};

export default App;
