import { useQuery } from '@apollo/client';
import React, { FC } from 'react';

import GET_USERS from '../Services/apiEndpoints'

const User: FC = () => {

    const { data } = useQuery(GET_USERS)
    
    return (
        <div>
            {data && 
                data.getUsers.map((user: any) => (
                    <p key={user.name}>{user.name}</p>
                ))
            }
        </div>
    )
    
}


export default User;