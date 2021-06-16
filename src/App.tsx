import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@material-ui/core';
import Task from './components/Todo/Todo';
import { Todo as ITodo } from './components/Todo/typings';

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addTask = () => {
    if (!input || input.length < 6 || input.length > 20) {
      setError('Entrada inválida (digite de 6 a 20 caracteres)');
    } else {
      setTodoList([{
        title: input,
        done: false,
      }, ...todoList])
      setError('');
    }
  };

  const changeStatus = (position: number) => {
    setTodoList(
      todoList.map((task, index) => index === position
        ? Object.assign(task, { done: !task.done })
        : task)
    )
  }

  const removeTask = (position: number) => {
    setTodoList(todoList.filter((value, index) => index !== position))
  };
  
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
            error={!!error}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            data-testid="add-task-input"
            id="filled-error-helper-text"
            label="Nova Tarefa"
            helperText={error}
            variant="filled"
          />
          <Button
            onClick={addTask}
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
              <Task 
                id={index}
                todo={todo}
                onRemove={removeTask}
                onToggle={changeStatus}
              />
            ))
          }
        </Box>
      </Container>
    </>
)};

export default App;
