import React from 'react';
import { AppBar, TextField, Button, Typography, Link } from '@material-ui/core';
import AuthService from '../../services/AuthService';

class Register extends React.Component {
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
            label="Email"
            variant="outlined"
            onChange={this.onEmailChange}
            fullWidth
            required
          />
          <TextField
            id="password"
            className="form-input"
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

export default Register;
