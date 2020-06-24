import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserConsumer from '../logic/UserConsumer';

const ProtectedRoute = (props) => {
  const { isLoggedIn, component, path } = props;

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  } else {
    return <Route path={path} component={component} />;
  }
};

export default UserConsumer(ProtectedRoute);
