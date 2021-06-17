import React, { FC } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { ITodo } from '../Todo';
import { TodoFormProps } from './typings';
import validationSchema from '../../utils/validationSchema';
import { GET_CURRENT_TIMESTAMP, TODO_HELPER_TEXT } from '../../utils/globalVariables';

const TodoForm: FC<TodoFormProps> = ({ onSubmit }: TodoFormProps) => {

  const submitHandler = (newTodoName: string) => {
    const newTodo: ITodo = {
      id: GET_CURRENT_TIMESTAMP(),
      name: newTodoName,
      done: false,
    };
    onSubmit(newTodo);
  }

  const formik = useFormik({
    initialValues: {
      todoName: '',
    },
    onSubmit: (values) => {
      submitHandler(values.todoName);
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
          id="todoName"
          data-testid="add-todo-input"
          sx={{
            maxWidth: '300px',
            mr: 'auto',
            width: '100%',
          }}
          error={!!formik.errors.todoName}
          helperText={formik.errors.todoName || TODO_HELPER_TEXT}
          label="Nova Tarefa"
          value={formik.values.todoName}
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
    )
};
  
export default TodoForm;
