import React from 'react';
import { Card, Button, CardContent, Typography, CardActions } from '@material-ui/core';
import { TodoProps } from './typings';

const Task = ({id, todo, onRemove, onToggle}: TodoProps) => {
  const { title, done } = todo;
  const statusLabel = () => done ? 'Reativar' : 'Completar';
  const opacity = done ? '0.5' : 1;

  return (
    <Card      
      data-testid="task-item"
      key={id}
      variant="outlined"
      sx={{
        width: '300px',
        opacity,
      }}
    >
      <CardContent>
        <Typography
          data-testid="task-label"
          variant="h5"
          component="h2"
        >
          {title}
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
          data-testid="end-task-btn"
          color="primary"
        >
          { statusLabel() }
        </Button>
        <Button
          onClick={() => onRemove(id)}
          data-testid="remove-task-btn"
          variant="contained"
          color="error"
        >
          Apagar
        </Button>
      </CardActions>
    </Card>
  )
};
    
export default Task;
    