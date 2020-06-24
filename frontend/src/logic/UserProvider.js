import React, { createContext } from 'react';

const userContext = createContext({});

class UserProvider extends React.Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = (email, password) => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    const { children } = this.props;

    const value = {
      isLoggedIn: this.state.isLoggedIn,
      user: this.state.user,
      actions: {
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
      },
    };

    return <userContext.Provider value={value}>{children}</userContext.Provider>;
  }
}

export { userContext };

export default UserProvider;
