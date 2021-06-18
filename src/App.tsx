import React, { FC } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';
import apiGraphql from './Services/GraphClient';
import HomePage from './Components/HomePage';

const App: FC = () => (
  <ApolloProvider client={apiGraphql}>
    <CssBaseline />
    <HomePage />
  </ApolloProvider>
);

export default App;
