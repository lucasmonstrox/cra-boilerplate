import { gql } from '@apollo/client';

const updateTodoMutation = gql`
  mutation UpdateTodo($id: ID!, $input: CreateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      name
      done
    }
  }
`;

export default updateTodoMutation;
