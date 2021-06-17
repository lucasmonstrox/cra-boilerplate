import React, { FC, useState } from 'react';
import {
    Box,
    List,
    Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/core/Alert';
import Task from './Task';
import TaskForm, { ITask } from './TaskForm';

const HomePage: FC = () => {
    const [tasks, setTasks] = useState([{
        title: 'Tarefa 1',
        taskId: Math.random()
    }]);

    const [infoMessageModal, setInfoMessageModal] = useState('');

    const taskAddedHandler = (values: ITask) => {
        setTasks((prevState) => [
            {
                title: values.title,
                taskId: Math.random()
            },
            ...prevState
        ]);
        setInfoMessageModal('Tarefa adicionada com sucesso.')
    };

    const removeTaskHandler = (taskId: number) => {
        const newTasks = tasks.filter((task) => task.taskId !== taskId);
        setTasks(newTasks);
        setInfoMessageModal('Tarefa removida com sucesso.');
    };

    const closeModalHandler = (_: any, reason: string) => {
        if (reason === 'clickaway') {
            return;
        };
        setInfoMessageModal('');
    };

    return (
        <Box
            sx={{
                height: '100%',
                width: '50vw',
                pt: '5rem',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TaskForm onTaskAdded={taskAddedHandler} />
            <List>
                {
                    tasks.map((task: any) => (
                        <Task key={task.taskId} task={task} onRemove={removeTaskHandler} />
                    ))
                }
            </List>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={!!infoMessageModal}
                autoHideDuration={2500}
                onClose={closeModalHandler}
            >
                <MuiAlert elevation={6} variant="filled" severity="success" data-testid="modal-msg-action-task">
                    {infoMessageModal}
                </MuiAlert>
            </Snackbar>
        </Box >
    )
}


export default HomePage