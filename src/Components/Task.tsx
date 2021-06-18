import React, { FC } from 'react';
import {
    Box,
    Checkbox,
    ListItem,
    Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { PropsTask } from '../interfaces/task';

const Task: FC<PropsTask> = ({ task, onRemove, onToggle }: PropsTask) => {

    const toggleTaskChecked = (id: any) => {
        onToggle(id);
    };

    return (
        <ListItem sx={{ mb: 1 }}>
            <Checkbox
                data-testid="button-checked-task"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onChange={() => toggleTaskChecked(task.id)}
            />
            <Typography
                data-testid="text-title-task"
                component="h4"
                sx={{
                    textDecoration: `${task.done && 'line-through'}`
                }}
            >
                {task.title}
            </Typography>
            <Box
                data-testid="button-remove-task"
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