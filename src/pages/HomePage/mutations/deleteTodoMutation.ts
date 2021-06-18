import { gql } from '@apollo/client';

const deleteTodoMutation = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export default deleteTodoMutation;
