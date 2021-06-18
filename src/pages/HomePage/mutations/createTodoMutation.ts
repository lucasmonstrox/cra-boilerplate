import { gql } from '@apollo/client';

const createTodoMutation = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      name
      done
    }
  }
`;

export default createTodoMutation;
