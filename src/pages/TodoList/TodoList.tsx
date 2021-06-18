import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoItem {
  title: string;
  id: number;
  done: boolean;
}

interface MyFormValues {
  title: string;
}

const TodoList: React.FC = () => {
  const [list, setList] = useState<TodoItem[]>([]);
  const [itemFilter, setItemFilter] = useState('');
  const initialValues: MyFormValues = { title: '' };
  const formik = useFormik({
    initialValues,
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

  const handleDelete = (id: TodoItem['id']) => {
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

  const toggleTodo = (todo: TodoItem) => {
    const todoIndex = list.findIndex((currentTodo) => currentTodo.id === todo.id);
    list[todoIndex].done = !list[todoIndex].done;
    setList([...list]);
  }

  return (
    <div
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
        value={itemFilter}
        onChange={(e) => setItemFilter(e.target.value)}
        color="primary"
        label="Filtrar por título"
        data-testid="input-filter"
      />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          error={!!formik.errors.title}
          helperText={formik.errors.title}
          value={formik.values.title}
          onChange={formik.handleChange}
          color="primary"
          label="Adicionar task"
          data-testid="input-task"
          name="title"
        />
        <IconButton onClick={formik.submitForm} data-testid="add-task-button">
          <AddIcon />
        </IconButton>
      </form>
      <List>
        {handleFilter(itemFilter).map((item) => (
          <ListItem
            key={item.id}
            style={{
              display: 'flex',
              marginTop: '1em',
              backgroundColor: 'white',
            }}
          >
            <ListItemText
              primary={item.title}
              data-testid="input-task"
              onClick={() => toggleTodo(item)}
              sx={{
                color: "red",
                textDecoration: `${item.done && 'line-through'}`,
              }}
            />

            <IconButton
              onClick={() => handleDelete(item.id)}
              data-testid="exlude-task-button"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
