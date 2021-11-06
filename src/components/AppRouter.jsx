import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { privateRoutes, publicRoutes } from '../router/routes';

function AppRouter() {
  const userName = useSelector(state => state.userReducer.name);

  return userName ? (
    <Switch>
      {privateRoutes.map(route => {
        return (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Redirect to="/home" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => {
        return (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Redirect to="/login" />
    </Switch>
  );
}

export default AppRouter;
