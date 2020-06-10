import { AppBar, TextField, Button, Typography, Link } from '@material-ui/core';
import AuthService from '../../services/AuthService';
import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const result = AuthService.login(this.state.email, this.state.password);
    if (result) {
      console.log('logged in');
    }
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  validForm = () => {
    return this.state.email.length < 5 || this.state.password.length < 6;
  };

  render() {
    return (
      <div>
        <AppBar color="primary" className="auth-header">
          <Typography variant="h5">LOGIN</Typography>
        </AppBar>
        <form id="login" onSubmit={this.onSubmit}>
          <TextField
            id="email"
            className="form-input"
            type="email"
            label="Email"
            variant="outlined"
            onChange={this.onEmailChange}
            fullWidth
            required
          />
          <TextField
            id="password"
            className="form-input"
            type="password"
            label="Password"
            variant="outlined"
            onChange={this.onPasswordChange}
            fullWidth
            required
          />
          <div className="form-footer">
            <Button
              variant="contained"
              color="primary"
              className="form-btn"
              onClick={this.handleSubmit}
              disabled={this.validForm()}
              size="large"
            >
              Submit
            </Button>
            <Typography>
              <Link onClick={this.props.toggle} className="toggle-form">
                Create Account
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
