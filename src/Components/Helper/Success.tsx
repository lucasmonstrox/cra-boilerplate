import React, { useEffect, useState } from 'react'

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    containerMessage: {
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '1rem'
    }
})

const Success = () => {

    const [modalSuccessAtivo, setModalSuccessAtivo] = useState(false)
    const classes = useStyles()

    useEffect(() => {

        setModalSuccessAtivo(true)

        setTimeout(() => {
            setModalSuccessAtivo(false)
        }, 5000)
    }, [])

    return (
        <>
            {
                modalSuccessAtivo &&
                <div className={classes.containerMessage}>
                    <MuiAlert elevation={6} variant="filled" severity="success">
                        Tarefa adicionada com sucesso
                    </MuiAlert>
                </div>
            }
        </>
    )
}



export default Success