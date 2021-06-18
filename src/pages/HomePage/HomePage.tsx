import React, { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Box, Container, CssBaseline } from '@material-ui/core';
import Todo, { ITodo } from '../../components/Todo';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoListPlaceholder from '../../components/TodoListPlaceholder';
import createTodoMutation from './mutations/createTodoMutation';
import deleteTodoMutation from './mutations/deleteTodoMutation';
import updateTodoMutation from './mutations/updateTodoMutation';
import getTodosQuery from './queries/getTodos';
import { GetTodosResult } from './typings';

const HomePage: FC = () => {
  const { loading, data, refetch } = useQuery<GetTodosResult>(getTodosQuery);
  const [createTodo] = useMutation(createTodoMutation);
  const [deleteTodo] = useMutation(deleteTodoMutation);
  const [updateTodo] = useMutation(updateTodoMutation);
  const createTodoHandler = async (name: ITodo['name']) => {
    await createTodo({
      variables: {
        input: {
          name,
        },
      },
    });
    refetch();
  };
  const toggleTodoHandler = async ({ id, name, done }: ITodo) => {
    await updateTodo({
      variables: {
        id,
        input: {
          name,
          done,
        },
      },
    });
    refetch();
  };
  const deleteTodoHandler = async (todo: ITodo) => {
    await deleteTodo({ variables: { id: todo.id } });
    refetch();
  };

  if (loading) {
    return <TodoListPlaceholder />;
  }

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <TodoForm onSubmit={createTodoHandler} />
        <Box
          sx={{
            alignContent: 'flex-start',
            display: 'flex',
            flex: 'auto',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
            p: 1,
          }}
        >
          {data!.todos.map((todo: any) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={deleteTodoHandler}
              onToggle={toggleTodoHandler}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
