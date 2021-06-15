import React, { FC } from 'react'

interface Props {
    task: any,
    onRemove: any
}

const Task: FC<Props> = ({task, onRemove}: Props) => (
    <>
        <p>{task.title}</p>
        <button type="button" onClick={() => onRemove(task)}>Remover</button>
    </>
)

export default Task