import React, { FC } from 'react';
import { Box, Checkbox, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { PropsTask } from '../interfaces/task';

const Task: FC<PropsTask> = ({ task, onRemove, onToggle }: PropsTask) => {
  const toggleTaskChecked = (id: any) => {
    onToggle(id);
  };

  return (
    <ListItem className="task-item" sx={{ mb: 1 }}>
      <Checkbox
        inputProps={{ 'aria-label': 'primary checkbox' }}
        onChange={() => toggleTaskChecked(task.id)}
      />
      <ListItemText
        sx={{
          textDecoration: `${task.done && 'line-through'}`,
        }}
      >
        {task.title}
      </ListItemText>
      <Box
        data-testid="remove-task-button"
        sx={{
          cursor: 'pointer',
          ml: 'auto',
        }}
        onClick={() => onRemove(task.id)}
      >
        <DeleteIcon />
      </Box>
    </ListItem>
  );
};

export default Task;
