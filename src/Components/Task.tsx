import React, { FC, useState } from 'react';
import {
    Box,
    Checkbox,
    ListItem,
    Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { PropsTask } from '../interfaces/task';

const Task: FC<PropsTask> = ({ task, onRemove }: PropsTask) => {
    const [taskChecked, setTaskChecked] = useState(false);

    const toggleTaskChecked = () => {
        setTaskChecked((prevState) => !prevState);
    };

    return (
        <ListItem sx={{ mb: 1 }} >
            <Checkbox
                data-testid="button-checked-task"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onChange={toggleTaskChecked}
            />
            <Typography
                data-testid="text-title-task"
                component="h4"
                sx={{
                    textDecoration: `${taskChecked && 'line-through'}`
                }}
            >
                {task.title}
            </Typography>
            <Box
                sx={{
                    cursor: 'pointer',
                    ml: 'auto',
                }}
                onClick={() => onRemove(task.id)}
                data-testid="button-remove-task"
            >
                <DeleteIcon />
            </Box>
        </ListItem>
    );
};

export default Task;