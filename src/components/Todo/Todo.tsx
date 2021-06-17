import React, { FC } from 'react';
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@material-ui/core';
import { TodoProps } from './typings';

const Todo: FC<TodoProps> = ({todo, onRemove, onToggle}: TodoProps) => {
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
        <Typography
          data-testid={`todo-label-${id}`}
          component="h2"
          variant="h5"
        >
          {name}
        </Typography>
      </CardContent>
      <Stack>
        <Button          
          data-testid={`toggle-todo-${id}`}
          color="primary"
          onClick={() => onToggle(id)}
        >
          {statusLabel}
        </Button>
        <Button
          data-testid={`remove-todo-${id}`}
          color="error"
          variant="contained"
          onClick={() => onRemove(id)}
        >
          Apagar
        </Button>
      </Stack>
    </Card>
  )
};
    
export default Todo;
