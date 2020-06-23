import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Login from './Login';
import Register from './Register';
import React from 'react';
import './Auth.css';

class AuthPage extends React.Component {
  constructor() {
    super();

    this.login = <Login toggle={this.showRegisterForm} />;
    this.register = <Register toggle={this.showLoginForm} />;

    this.state = {
      currentPage: this.login,
      login: true,
    };

    this.showLoginForm = this.showLoginForm.bind(this);
    this.showRegisterForm = this.showRegisterForm.bind(this);
  }

  showLoginForm = () => {
    this.setState({
      currentPage: this.login,
      login: true,
    });
  };

  showRegisterForm = () => {
    this.setState({
      currentPage: this.register,
      login: false,
    });
  };

  render() {
    return (
      <div id='auth-page'>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>Stock Application</Typography>
          </Toolbar>
        </AppBar>
        <div className={this.state.login ? ' auth-form login-form' : ' auth-form register-form'}>
          {this.state.currentPage}
        </div>
      </div>
    );
  }
}

export default AuthPage;
