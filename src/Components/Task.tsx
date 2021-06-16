import React, { FC } from 'react'
import { ListItem, Checkbox, makeStyles, Box } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    listItem: {
        marginBottom: '.5rem'
    },
    containerIcon: {
        marginLeft: 'auto',
        cursor: 'pointer'
    }
})

interface Props {
    task: any
}

const Task: FC<Props> = ({ task }: Props) => {


    const classes = useStyles()

    return (
    <ListItem classes={{ root: classes.listItem }}>
        <Checkbox
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <p>{task.title}</p>

        <Box className={classes.containerIcon}>
            <DeleteIcon />
        </Box>
    </ListItem>
)}

export default Task