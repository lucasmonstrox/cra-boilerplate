import React, { FC } from 'react';
import {
    Box,
    Button,
    InputLabel,
    TextField,
} from '@material-ui/core';
import { FormikHelpers, useFormik } from 'formik';
import schema from './Validation/schema';
import { ITask, PropsTaskForm } from '../interfaces/task';

const TaskForm: FC<PropsTaskForm> = ({ onTaskAdded }: PropsTaskForm) => {
    const handleSubmitAddTask = (values: ITask, { resetForm }: FormikHelpers<ITask>) => {
        resetForm();
        onTaskAdded(values);
    };

    const { handleSubmit, errors, handleChange, values, handleBlur } = useFormik({
        initialValues: {
            title: ""
        },
        onSubmit: handleSubmitAddTask,
        validationSchema: schema
    });

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <InputLabel
                    sx={{ mb: '.3rem', mt: '1rem' }}
                    htmlFor="titleTask">
                    Título
                </InputLabel>
                <TextField
                    id="title"
                    name="title"
                    type="text"
                    fullWidth
                    data-testid="task-title-input"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Box sx={{ color: 'red', mt: '.3rem' }} data-testid="title-msg-error">
                    {
                        errors.title && <p>{errors.title}</p>
                    }
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                        mt: 2
                    }}
                    type="submit"
                    data-testid="add-task-button"
                >
                    Adicionar tarefa
                </Button>
            </form>
        </Box>
    );
};

export default TaskForm;