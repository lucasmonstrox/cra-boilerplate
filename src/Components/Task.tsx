import React, { FC } from 'react'

interface Props {
    task: any,
    onRemove: any
}

const Task: FC<Props> = ({task, onRemove}: Props) => (
    <>
        <p>{task.title}</p>
        <button type="button" onClick={() => onRemove(task)}>Clique aqui</button>
    </>
)

export default Task