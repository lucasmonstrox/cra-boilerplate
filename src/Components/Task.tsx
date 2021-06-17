import React, { FC, useState } from 'react'
import {
    Box,
    Checkbox,
    ListItem,
    Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    task: {
        title: string,
        taskId: number
    },
    onRemove: Function
}

const Task: FC<Props> = ({ task, onRemove }: Props) => {
    const [taskChecked, setTaskChecked] = useState(false)

    const toggleTaskChecked = () => {
        setTaskChecked((prevState) => !prevState)
    }

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
                onClick={() => onRemove(task.taskId)}
                data-testid="button-remove-task"
            >
                <DeleteIcon />
            </Box>
        </ListItem>
    )
}

export default Task