import React from 'react';
import './Auth.css';

class AuthPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: <Login />,
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

  render() {
    return (
      <div id="auth-page">
        <div className="header">
          <button id="login-btn" disabled={this.state.login} onClick={this.showLoginForm}>
            LOGIN
          </button>
          <button id="login-btn" disabled={!this.state.login} onClick={this.showRegisterForm}>
            REGISTER
          </button>
        </div>
        <div id="auth-form">{this.state.currentPage}</div>
      </div>
    );
  }
}

class Login extends React.Component {
  onSubmit = () => {
    console.log('login');
  };

  render() {
    return (
      <form id="login" onSubmit={this.onSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    );
  }
}

class Register extends React.Component {
  onSubmit = () => {
    console.log('register');
  };

  render() {
    return (
      <form id="register" onSubmit={this.onSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="repeat-password" placeholder="Repeat Password" />
        <button>Submit</button>
      </form>
    );
  }
}

export default AuthPage;
