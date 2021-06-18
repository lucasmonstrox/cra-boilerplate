import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@material-ui/core';
import { ITodo } from '../Todo';
import { TodoFormProps } from './typings';
import validationSchema from '../../utils/validationSchema';
import { TODO_HELPER_TEXT } from '../../utils/globalVariables';

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const submitHandler = (newTodoName: ITodo['name']) => onSubmit(newTodoName);
  const formik = useFormik<Pick<ITodo, 'name'>>({
    initialValues: {
      name: '',
    },
    onSubmit: (values, { resetForm }) => {
      submitHandler(values.name);
      resetForm();
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 1,
        }}
      >
        <TextField
          name="name"
          data-testid="add-todo-input"
          sx={{
            maxWidth: '300px',
            mr: 'auto',
            width: '100%',
          }}
          error={!!formik.errors.name}
          helperText={formik.errors.name || TODO_HELPER_TEXT}
          label="Nova Tarefa"
          value={formik.values.name}
          variant="filled"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <Button
          data-testid="add-todo-btn"
          type="submit"
          color="primary"
          variant="contained"
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoForm;
