import React, { FC } from 'react'
import {
    Box,
    Button,
    Container,
    InputLabel,
    TextField,
} from '@material-ui/core';
import { FormikHelpers, useFormik } from 'formik'
import schema from './Validation/schema';

interface Props {
    onTaskAdded: Function
}

export interface ITask {
    title: string
}
const TaskForm: FC<Props> = ({ onTaskAdded }: Props) => {
    const handleSubmitAddTask = (values: ITask, { resetForm }: FormikHelpers<ITask>) => {
        resetForm()
        onTaskAdded(values)
    }

    const { handleSubmit, errors, handleChange, values, handleBlur } = useFormik({
        initialValues: {
            title: ""
        },
        onSubmit: handleSubmitAddTask,
        validationSchema: schema
    })

    return (
        <Container>
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
                    style={{ width: '100%' }}
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
        </Container>
    )
}

export default TaskForm