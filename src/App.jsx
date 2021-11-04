import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
