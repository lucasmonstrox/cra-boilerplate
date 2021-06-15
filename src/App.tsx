import { ApolloProvider } from '@apollo/client';
import React, { FC, useState } from 'react';

// import { CssBaseline, makeStyles, Box, Grid } from '@material-ui/core';

import Task from './Components/Task';
import apiGraphql from './Services/apiGraphql';

// const useStyles = makeStyles({
//   root: {
//     height: '100vh',
//     padding: '5rem',
//   }
// })


const App: FC = () => {

  const [tasks] = useState([{
    title: 'primeiro'
  }])

  const onRemoveTaskHandler = (task: any) => {
    console.log(task)
  }

  
  // const classes = useStyles()

  return (
    <ApolloProvider client={apiGraphql}>
      {/* <CssBaseline />
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            oi
          </Grid>
          <Grid item xs={12} sm={6}>
            ok
          </Grid>
        </Grid>
      </Box> */}
      {
        tasks.map((task: any) => (
          <Task task={task} onRemove={onRemoveTaskHandler} />
        ))  
      }
      {/* <Task /> */}
    </ApolloProvider>
  )
}

export default App;
