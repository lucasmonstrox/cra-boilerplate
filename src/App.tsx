import React, { FC } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import HomePage from './pages/HomePage';

const App: FC = () => (
  <>
    <CssBaseline />
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <HomePage />
    </Container>
  </>
);

export default App;
