import React from 'react'

interface Props {
    message: String
}

const Error = ({message}: Props) => {
    if(!message) return null
    return <p style={{color: '#f31', margin: '.5rem 0'}}>{message}</p>
}

export default Error