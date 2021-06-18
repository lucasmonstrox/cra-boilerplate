import { useFormik } from 'formik';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import * as Yup from 'yup';

interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

interface MyFormValues {
  title: string;
}

const TodoList: React.FC = () => {
  const [list, setList] = useState<TodoItem[]>([]);
  const [itemFilter, setItemFilter] = useState('');
  const formik = useFormik<MyFormValues>({
    initialValues: { title: '' },
    onSubmit: (values, actions) => {
      const newTodo: TodoItem = {
        title: values.title,
        id: Math.random(),
        done: false,
      };
      setList((prev) => [newTodo, ...prev]);
      actions.resetForm();
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('Campo obrigatório')
        .max(20, 'O limite máximo é de 20 caracteres'),
    }),
  });

  const handleDeleteFn = (id: TodoItem['id']) => () => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFilter = (title: string) => {
    if (title.length === 0) {
      return list;
    }
    return list.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
  };

  const handleToggleTaskFn =  (todo: TodoItem) => () => {
    const todoIndex = list.findIndex(
      (currentTodo) => currentTodo.id === todo.id,
    );
    list[todoIndex].done = !list[todoIndex].done;
    setList([...list]);
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
      }}
    >
      <TextField
        data-testid="input-task-search"
        color="primary"
        label="Filtrar por título"
        value={itemFilter}
        onChange={(e) => setItemFilter(e.target.value)}
      />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          data-testid="task-input"
          color="primary"
          name="title"
          label="Adicionar task"
          error={!!formik.errors.title}
          helperText={formik.errors.title}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <IconButton onClick={formik.submitForm} data-testid="add-task-button">
          <AddIcon />
        </IconButton>
      </form>
      <List>
        {handleFilter(itemFilter).map((taskItem) => (
          <ListItem
            key={taskItem.id}
            style={{
              display: 'flex',
              marginTop: '1em',
              backgroundColor: 'white',
            }}
          >
            <ListItemText
              data-testid={`task-item-${taskItem.id}`}
              primary={taskItem.title}
              sx={{
                textDecoration: `${taskItem.done && 'line-through'}`,
              }}
              onClick={() => handleToggleTaskFn(taskItem)}
            />
            <IconButton onClick={handleDeleteFn(taskItem.id)} data-testid="delete-task-button">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
