import { gql } from '@apollo/client';

const getTodosQuery = gql`
  query GetTodos {
    todos {
      id
      name
      done
    }
  }
`;

export default getTodosQuery;
