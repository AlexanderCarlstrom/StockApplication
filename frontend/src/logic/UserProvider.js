import React, { createContext } from 'react';
import axios from 'axios';

const userContext = createContext({});

class UserProvider extends React.Component {
  state = {
    isLoggedIn: false,
    user: {},
  };

  handleLogin = (email, password) => {
    return axios
      .post('http://localhost:4000/user/login', {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        if (!data.success) {
          return {
            success: false,
            message: data.message,
          };
        } else {
          localStorage.setItem('user-token', JSON.stringify(data.token));
          this.setState({
            isLoggedIn: true,
            user: data.user,
          });
          return {
            success: true,
          };
        }
      })
      .catch((err) => console.log(err));
  };

  handleLoginWithId = (token) => {
    return axios
      .get('http://localhost:4000/user/login-with-id', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        const data = res.data;
        if (data.success) {
          this.setState({
            isLoggedIn: true,
            user: data.user,
          });
        }
        return data.success;
      })
      .catch((err) => console.log(err));
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });

    localStorage.removeItem('user-token');
  };

  updateUser = (user) => {
    const token = JSON.parse(localStorage.getItem('user-token'));

    var config = {
      method: 'post',
      url: 'http://localhost:4000/user/update',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        user,
      },
    };
    return axios(config)
      .then((res) => {
        const data = res.data;
        if (!data.success) {
          console.log(data.message);
          return false;
        } else {
          this.setState({
            user: data.user,
          });
          return true;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  updatePreferences = (user) => {
    const token = JSON.parse(localStorage.getItem('user-token'));

    var config = {
      method: 'post',
      url: 'http://localhost:4000/user/update-preferences',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        preferences: user.preferences,
      },
    };
    return axios(config)
      .then((res) => {
        const data = res.data;
        if (!data.success) {
          console.log(data.message);
          return false;
        } else {
          this.setState({
            user: data.user,
          });
          return true;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  render() {
    const { children } = this.props;

    const value = {
      isLoggedIn: this.state.isLoggedIn,
      user: this.state.user,
      actions: {
        onLogin: this.handleLogin,
        onLoginWithId: this.handleLoginWithId,
        onLogout: this.handleLogout,
        onUpdateUser: this.updateUser,
        onUpdatePreferences: this.updatePreferences,
      },
    };

    return <userContext.Provider value={value}>{children}</userContext.Provider>;
  }
}

export { userContext };

export default UserProvider;
