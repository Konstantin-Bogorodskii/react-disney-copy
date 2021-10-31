import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
