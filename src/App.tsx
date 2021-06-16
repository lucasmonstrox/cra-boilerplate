import React, { FC, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  CssBaseline,
  Box,
  Grid,
  makeStyles,
  InputLabel,
  Button,
  List
} from '@material-ui/core';


import { Formik, Form, Field } from 'formik'

import Task from './Components/Task';
import apiGraphql from './Services/apiGraphql';
import schema from './Components/Validation/schema';
import Error from './Components/Helper/Error';
// import Success from './Components/Helper/Success';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '5rem',
  },
  labelInput: {
    marginBottom: '.3rem',
    marginTop: '1rem',
  },
  grid: {
    padding: '0 1rem'
  },
  textField: {
    width: '100%',
    padding: '.5rem'
  },
  buttonSubmited: {
    width: '100%',
    marginTop: '1rem',
  }
})


const App: FC = () => {

  const [tasks] = useState([{
    title: 'Tarefa 1',
  }, {
    title: 'Tarefa 2'
  }])

  const classes = useStyles()

  const handleSubmit = (values: any, actions: any) => {

    console.log(values)
    console.log(actions)

  }

  return (
    <ApolloProvider client={apiGraphql}>
      <CssBaseline />
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.grid}>
            <Formik
              initialValues={{
                title: ''
              }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {({ errors, touched }) => (
                <Form>
                  <InputLabel
                    className={classes.labelInput}
                    htmlFor="titleTask">
                    Título
                  </InputLabel>
                  <Field
                    id="title"
                    name="title"
                    type="text"
                    className={classes.textField}
                    data-testid="taskTitle"
                  />
                  {errors.title && touched.title && (
                    <Error message={errors.title} />
                  )}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonSubmited}
                    type="submit"
                  >
                    Adicionar tarefa
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List>
              {
                tasks.map((task: any) => (
                  <Task task={task} />
                ))
              }
            </List>
          </Grid>
        </Grid>
      </Box>
      {/* <Success /> */}
      {/* <TextField name="task" data-testid="task" onChange={taskChangeHandler} />
      {
        isSubmitted && taskName === '' &&
        <div data-testid="taskNameError">
          Campo obrigatório
        </div>
      }
      <Button data-testid="submit" onClick={submitHandler}>
        Clique
      </Button>
      {
        tasks.map((task: any, index) => (
          <Task task={task} onRemove={() => onRemoveTaskHandler(index)} />
        ))
      } */}
    </ApolloProvider>
  )
}
export default App;
