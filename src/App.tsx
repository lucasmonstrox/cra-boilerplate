import React, { FC } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './helpers/apolloClient';
import HomePage from './Components/HomePage';

const App: FC = () => (
  <ApolloProvider client={apolloClient}>
    <CssBaseline />
    <HomePage />
  </ApolloProvider>
);

export default App;
