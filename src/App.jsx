import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
