import React from 'react';
import { Card, Button, CardContent, Typography, CardActions } from '@material-ui/core';
import { TaskProps } from '../utils/Interfaces';
import useStyles from '../styles/styles';

const Task = ({id, title, done, changeStatus, removeTask}: TaskProps) => {
  const statusLabel = () => done ? 'Reativar' : 'Completar';
  const styles = useStyles();

  return (
    <Card
      className={`${styles.card} ${done ? styles.disabled : ''}`}
      data-testid="task-item"
      key={id}
      variant="outlined"
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
      <CardActions>
        <Button
          className={styles.toLeft}
          onClick={() => changeStatus(id)}
          data-testid="end-task-btn"
          variant="contained"
          color="primary"
        >
          { statusLabel() }
        </Button>
        <Button
          onClick={() => removeTask(id)}
          data-testid="remove-task-btn"
          variant="contained"
          color="secondary"
        >
          Apagar
        </Button>
      </CardActions>
    </Card>
  )
};
    
export default Task;
    