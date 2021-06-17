import React, { FC } from 'react'

import {
    Box,
    Button,
    Container,
    InputLabel,
} from '@material-ui/core';

import { Formik, Form, Field, ErrorMessage } from 'formik'

import schema from './Validation/schema';

interface Props {
    onTaskAdded: Function
}

export interface ITask {
    title: string
}

interface IMethods {
    resetForm: Function
}

const TaskForm: FC<Props> = ({ onTaskAdded }: Props) => {

    const handleSubmitAddTask = (values: ITask, { resetForm }: IMethods) => {
        resetForm()
        onTaskAdded(values)
    }

    return (
        <Container>
            <Formik
                initialValues={{
                    title: ''
                }}
                onSubmit={handleSubmitAddTask}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <InputLabel
                            sx={{ mb: '.3rem', mt: '1rem' }}
                            htmlFor="titleTask">
                            Título
                        </InputLabel>
                        <Field
                            id="title"
                            name="title"
                            type="text"
                            style={{ width: '100%', padding: '.5rem' }}
                            data-testid="task-title-input"
                        />
                        <Box sx={{ color: 'red', mt: '.3rem' }} data-testid="title-msg-error">
                            <ErrorMessage name="title" />
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
                    </Form>
                )}
            </Formik>
        </Container>
    )
}



export default TaskForm