import React from 'react';
import { AppBar, TextField, Button, Typography, Link } from '@material-ui/core';
import AuthService from '../../services/AuthService';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const result = AuthService.register(this.state.email, this.state.password);
    console.log(result.message);
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

  onRepeatPasswordChange = (e) => {
    this.setState({
      repeatPassword: e.target.value,
    });
  };

  validForm = () => {
    return (
      this.state.email.length < 5 || this.state.password.length < 6 || this.state.password !== this.state.repeatPassword
    );
  };

  render() {
    return (
      <div>
        <AppBar color="primary" className="auth-header">
          <Typography variant="h5">Register</Typography>
        </AppBar>
        <form id="register" onSubmit={this.onSubmit}>
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
          <TextField
            id="repeat-password"
            className="form-input"
            type="password"
            label="Repeat Password"
            variant="outlined"
            onChange={this.onRepeatPasswordChange}
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
                Login
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
