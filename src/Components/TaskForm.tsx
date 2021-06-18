import React, { FC } from 'react';
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
} from '@material-ui/core';
import { FormikHelpers, useFormik } from 'formik';
import validationSchema from './Validation/schema';
import { ITask, PropsTaskForm } from '../interfaces/task';

const TaskForm: FC<PropsTaskForm> = ({ onTaskAdded }: PropsTaskForm) => {
  const { handleSubmit, errors, handleChange, values, handleBlur } = useFormik<
    Pick<ITask, 'title'>
  >({
    initialValues: {
      title: '',
    },
    onSubmit: (title: ITask, { resetForm }: FormikHelpers<ITask>) => {
      onTaskAdded(title);
      resetForm();
    },
    validationSchema,
  });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="title" sx={{ mb: 1, mt: 3 }}>
          Título
        </InputLabel>
        <TextField
          id="title"
          data-testid="task-title-input"
          type="text"
          name="title"
          fullWidth
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Box data-testid="title-msg-error" sx={{ color: 'red', mt: 1 }}>
          {errors.title && <Typography>{errors.title}</Typography>}
        </Box>
        <Button
          data-testid="add-task-button"
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            mt: 1,
          }}
        >
          Adicionar tarefa
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;
