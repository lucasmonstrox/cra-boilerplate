import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@material-ui/core';
import { TodoProps } from './typings';

const Todo = ({ todo, onDelete, onToggle }: TodoProps) => {
  const { id, name, done } = todo;
  const statusLabel = done ? 'Reativar' : 'Completar';
  const opacity = done ? 0.5 : 1;

  return (
    <Card
      data-testid={`todo-${id}`}
      sx={{
        opacity,
        width: 300,
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography component="h2" variant="h5">
          {name}
        </Typography>
      </CardContent>
      <Stack>
        <Button color="primary" onClick={() => onToggle(id)}>
          {statusLabel}
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => onDelete(todo)}
        >
          Apagar
        </Button>
      </Stack>
    </Card>
  );
};

export default Todo;
