import React, { FC, useState } from 'react';
import { Container, List, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/core/Alert';
import Task from './Task';
import TaskForm from './TaskForm';
import { ITask } from '../interfaces/task';

const TWO_SECONDS_AND_HALF = 2500;

const HomePage: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      title: 'Tarefa 1',
      id: Math.random(),
      done: false,
    },
  ]);

  const [infoMessageModal, setInfoMessageModal] = useState('');

  const taskAddedHandler = (values: ITask) => {
    setTasks((previousTasks) => [
      {
        title: values.title,
        id: Math.random(),
        done: false,
      },
      ...previousTasks,
    ]);
    setInfoMessageModal('Tarefa adicionada com sucesso.');
  };

  const removeTaskHandler = (id: ITask['id']) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    setInfoMessageModal('Tarefa removida com sucesso.');
  };

  const closeModalHandler = (_: unknown, reason: string) => {
    const isClickIngAway = reason === 'clickaway';
    if (isClickIngAway) {
      return;
    }
    setInfoMessageModal('');
  };

  const toggleTaskHandler = (id: ITask['id']) => {
    const taskIndex = tasks.findIndex((currentTask) => currentTask.id === id);
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTasks([...tasks]);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: 10,
      }}
    >
      <TaskForm onTaskAdded={taskAddedHandler} />
      <List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onRemove={removeTaskHandler}
            onToggle={toggleTaskHandler}
          />
        ))}
      </List>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!infoMessageModal}
        autoHideDuration={TWO_SECONDS_AND_HALF}
        onClose={closeModalHandler}
      >
        <MuiAlert
          data-testid="info-modal"
          variant="filled"
          severity="success"
          elevation={6}
        >
          {infoMessageModal}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default HomePage;
