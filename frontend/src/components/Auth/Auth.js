import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import Login from './Login';
import Register from './Register';
import React from 'react';
import './Auth.css';

class AuthPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: <Login toggle={this.showRegisterForm} />,
      login: true,
    };

    this.showLoginForm = this.showLoginForm.bind(this);
    this.showRegisterForm = this.showRegisterForm.bind(this);
  }

  showLoginForm = () => {
    this.setState({
      currentPage: <Login />,
      login: true,
    });
  };

  showRegisterForm = () => {
    this.setState({
      currentPage: <Register />,
      login: false,
    });
    console.log('hello');
  };

  toggleForm = () => {
    this.setState((prev) => {
      if (prev.login) {
        return {
          currentPage: <Register />,
          login: false,
        };
      } else {
        return {
          currentPage: <Login />,
          login: true,
        };
      }
    });
  };

  render() {
    return (
      <div id="auth-page">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Stock Application</Typography>
          </Toolbar>
        </AppBar>
        <div className="auth-form">{this.state.currentPage}</div>
      </div>
    );
  }
}

export default AuthPage;
