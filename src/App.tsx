import React, { FC } from 'react';

import './App.css';

import Button from '@material-ui/core/Button';
import Home from './pages/Home';
import ExchangeRates from './Exchange';


const App: FC = () => (
  <div className="App">
    <h2>My first Apollo app 🚀</h2>
    <input type="text" data-testid="term"/>
    <Home />
    <Button sx={{ border: '1px dashed grey' }}>Save</Button>
    <ExchangeRates />
    
  </div>
);

export default App;
