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

    function toggleTaskChecked() {
        setTaskChecked((prevState) => !prevState)
    }

    return (
        <ListItem sx={{ mb: '.5rem' }} >
            <Checkbox
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onChange={toggleTaskChecked}
                data-testid="btnChecked"
            />
            <Typography
                component="h4"
                sx={{
                    textDecoration: `${taskChecked && 'line-through'}`
                }}
                data-testid="textChecked"
            >
                {task.title}
            </Typography>
            <Box
                sx={{
                    ml: 'auto',
                    cursor: 'pointer'
                }}
                onClick={() => onRemove(task.taskId)}
                data-testid="btnRemove"
            >
                <DeleteIcon />
            </Box>
        </ListItem>
    )
}

export default Task