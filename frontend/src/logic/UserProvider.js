import React, { createContext } from 'react';
import axios from 'axios';

const userContext = createContext({});

class UserProvider extends React.Component {
  state = {
    isLoggedIn: false,
    user: {},
    totalValue: 0,
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
          this.setState(
            {
              isLoggedIn: true,
              user: data.user,
            },
            this.updateStocks
          );
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
          this.setState(
            {
              isLoggedIn: true,
              user: data.user,
            },
            this.updateStocks
          );
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

  // helper methods
  updateStocks = () => {
    const stocks = this.state.user.stocks;
    let values = [];
    let totValue = 0;

    stocks.map((stock) => {
      if (stock.currency === 'USD') {
        totValue += stock.price * stock.amount;
      } else {
        axios.get(`https://api.exchangeratesapi.io/latest?symbols=USD&base=${stock.currency}`).then((result) => {
          const value = stock.price * Object.values(result.data.rates)[0] * stock.amount;
          values.push(value);
        });
      }
    });

    values.map((value) => {
      totValue += value;
    });

    this.setState({
      totalValue: totValue,
    });
  };

  render() {
    const { children } = this.props;

    const value = {
      isLoggedIn: this.state.isLoggedIn,
      user: this.state.user,
      totalValue: this.state.totalValue,
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
