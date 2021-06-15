import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  CssBaseline,
  Box,
  Grid,
  makeStyles,
  TextField,
  InputLabel,
  Button
} from '@material-ui/core';

// import Task from './Components/Task';
import apiGraphql from './Services/apiGraphql';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '5rem',
  },
  containerInputs: {
    marginBottom: '1rem'
  },
  labelInput: {
    marginBottom: '.3rem'
  },
  grid: {
    padding: '0 1rem'
  },
  textField: {
    width: '100%',
    marginBottom: '1rem'
  },
  buttonSubmited: {
    width: '100%'
  }
})


const App: FC = () => {

  // const [tasks, setTasks] = useState([{
  //   title: 'Go to shopping'
  // }])

  const classes = useStyles()

  return (
    <ApolloProvider client={apiGraphql}>
      <CssBaseline />
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.grid}>
            <form>
                <InputLabel
                  className={classes.labelInput}
                  htmlFor="titleTask">
                  Título
                </InputLabel>
                <TextField
                  id="titleTask"
                  classes={{ root: classes.textField }}
                  variant="outlined"
                />
                <InputLabel
                  className={classes.labelInput}
                  htmlFor="descriptionTask">
                  Descrição
                </InputLabel>
                <TextField
                  id="descriptionTask"
                  classes={{ root: classes.textField }}
                  variant="outlined"
                />
                <Button variant="contained" color="secondary" className={classes.buttonSubmited}>
                  Primary
                </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            ok
          </Grid>
        </Grid>
      </Box>
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
