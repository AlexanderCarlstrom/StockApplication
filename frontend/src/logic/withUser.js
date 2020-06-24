import React from 'react';
import { userContext } from './UserProvider';

const withUser = (component) => (props) => {
  <userContext.Consumer>{(user) => <component {...props} {...user} />}</userContext.Consumer>;
};

export default withUser;
