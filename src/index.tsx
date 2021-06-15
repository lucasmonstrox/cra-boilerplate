import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  ApolloProvider,
} from "@apollo/client";
import App from './App';
import apolloClient from './services/apolloClient';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
