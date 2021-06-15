import React, { FC, useState } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import Task from './components/Task';
import { TaskInterface } from './utils/Interfaces';
import useStyles from './styles/styles';

const App: FC = () => {
  const [todoList, setTodoList] = useState<TaskInterface[]>([]);
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const styles = useStyles();

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
    <div className="App">
      <header className="App-header">
        <TextField
          error={!!error}
          className={`${styles.width} ${styles.pos}`}
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
          className={`${styles.width} ${styles.pos}`}
          onClick={addTask}
          data-testid="add-task-btn"
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
      </header>
      <main className="App-content">
        {
          todoList.map((task, index) => (
            <Task 
              id={index}
              title={task.title}
              done={task.done}
              removeTask={removeTask}
              changeStatus={changeStatus}
            />
          ))
        }
      </main>
    </div>
)};

export default App;
