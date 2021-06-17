import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import { TodoProps } from './typings';

const Todo: FC<TodoProps> = ({id, todo, onRemove, onToggle}: TodoProps) => {
  const { name, done } = todo;
  const statusLabel = done ? 'Reativar' : 'Completar';
  const opacity = done ? '0.5' : 1;

  return (
    <Card      
      data-testid={`todo-${id}`}
      key={id}
      variant="outlined"
      sx={{
        opacity,
        width: '300px',
      }}
    >
      <CardContent>
        <Typography
          data-testid={`todo-label-${id}`}
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button          
          onClick={() => onToggle(id)}
          data-testid={`toggle-todo-${id}`}
          color="primary"
        >
          { statusLabel }
        </Button>
        <Button
          onClick={() => onRemove(id)}
          data-testid={`remove-todo-${id}`}
          variant="contained"
          color="error"
        >
          Apagar
        </Button>
      </CardActions>
    </Card>
  )
};
    
export default Todo;
