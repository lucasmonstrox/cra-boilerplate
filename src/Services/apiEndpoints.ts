import { gql } from '@apollo/client';

const GET_USERS = gql`
    {
        getUsers {
            _id
            name
            profession
        }
    }
`;

export default GET_USERS;
