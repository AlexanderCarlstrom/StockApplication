import React from 'react';
import { userContext } from './UserProvider';

const UserConsumer = (Component) => (props) => {
  return <userContext.Consumer>{(value) => <Component {...props} {...value} />}</userContext.Consumer>;
};

export default UserConsumer;
