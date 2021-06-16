import React, { FC } from 'react';
import TodoList from './pages/TodoList/TodoList';
// import ExchangeRates from './Exchange';


const App: FC = () => (
    <div className="App">
      {/* <input type="text" data-testid="term"/> */}
      <TodoList/>
      {/* <ExchangeRates /> */}
    </div>
  );

export default App;
