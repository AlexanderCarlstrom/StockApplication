import React from 'react';
import { AppBar, TextField, Button, Typography, Link, Tooltip } from '@material-ui/core';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      identityNumber: '',
      email: '',
      password: '',
      repeatPassword: '',
      address: '',
      zipCode: '',
      city: '',
      errors: {
        firstname: '',
        lastname: '',
        identityNumber: '',
        email: '',
        password: '',
        repeatPassword: '',
        address: '',
        zipCode: '',
        city: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validForm = this.validForm.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const state = this.state;

    switch (name) {
      // firstname validation
      case 'firstname':
        state.firstname = value;
        const firstnameRegex = /^[a-zA-ZäåöÄÅÖ]+$/;
        if (!firstnameRegex.test(state.firstname)) {
          state.errors.firstname = 'Please enter a valid firstname';
        } else {
          state.errors.firstname = '';
        }
        break;
      // lastname validation
      case 'lastname':
        state.lastname = value;
        const lastnameRegex = /^[a-zA-ZäåöÄÅÖ]+$/;
        if (!lastnameRegex.test(state.lastname)) {
          state.errors.lastname = 'Please enter a valid lastname';
        } else {
          state.errors.lastname = '';
        }
        break;
      // identity number validation
      case 'identity number':
        state.identityNumber = value;
        const identityNumberRegex = /[0-9]{12}/;
        const identityNumber = state.identityNumber.replace('-', '');
        if (!identityNumberRegex.test(identityNumber)) {
          state.errors.identityNumber = 'Identity number must contain 12 digits';
        } else {
          state.errors.identityNumber = '';
        }
        break;
      // email validation
      case 'email':
        state.email = value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(state.email)) {
          state.errors.email = 'Please enter a valid email address';
        } else {
          state.errors.email = '';
        }
        break;
      // password validation
      case 'password':
        state.password = value;
        const passwordRegex = new RegExp(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{6,32}$'
        );
        if (!passwordRegex.test(state.password)) {
          state.errors.password = 'Please enter a valid password';
        } else {
          state.errors.password = '';
        }
        break;
      // repeat password validation
      case 'repeat password':
        state.repeatPassword = value;
        if (state.repeatPassword !== state.password) {
          state.errors.repeatPassword = 'Passwords must match';
        } else {
          state.errors.repeatPassword = '';
        }
        break;
      // address validation
      case 'address':
        state.address = value;
        const addressRegex = /^(?=.*[0-9])(?=.*[a-zåäöA-ZÅÄÖ]).{2,100}$/;
        if (!addressRegex.test(state.address)) {
          state.errors.address = 'Please enter a valid address';
        } else {
          state.errors.address = '';
        }
        break;
      // zip code validation
      case 'zip code':
        state.zipCode = value;
        const zipCodeRegex = /[0-9]{5}/;
        if (!zipCodeRegex.test(state.zipCode)) {
          state.errors.zipCode = 'Please enter a valid zip code';
        } else {
          state.errors.zipCode = '';
        }
        break;
      // city validation
      case 'city':
        state.city = value;
        const cityRegex = /^[a-zA-ZäåöÄÅÖ]+$/;
        if (!cityRegex.test(state.city)) {
          state.errors.city = 'Please enter a valid city';
        } else {
          state.errors.city = '';
        }
        break;
      default:
        break;
    }

    this.setState(state);
  };

  validForm = () => {
    return (
      this.state.firstname.length > 0 &&
      this.state.lastname.length > 0 &&
      this.state.identityNumber.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.repeatPassword.length > 0 &&
      this.state.address.length > 0 &&
      this.state.zipCode.length > 0 &&
      this.state.city.length > 0 &&
      this.state.errors.firstname === '' &&
      this.state.errors.lastname === '' &&
      this.state.errors.identityNumber === '' &&
      this.state.errors.email === '' &&
      this.state.errors.password === '' &&
      this.state.errors.repeatPassword === '' &&
      this.state.errors.address === '' &&
      this.state.errors.zipCode === '' &&
      this.state.errors.city === ''
    );
  };

  render() {
    return (
      <div>
        <AppBar color="primary" className="auth-header">
          <Typography variant="h5">Register</Typography>
        </AppBar>
        <form id="register" onSubmit={this.onSubmit}>
          <div className="inputs">
            {/* firstname */}
            <TextField
              id="firstname"
              name="firstname"
              className="form-input"
              type="text"
              label="Firstname"
              variant="outlined"
              error={this.state.errors.firstname !== ''}
              helperText={this.state.errors.firstname}
              onChange={this.handleChange}
              required
            />
            {/* lastname */}
            <TextField
              id="lastname"
              name="lastname"
              className="form-input"
              type="text"
              label="Lastname"
              variant="outlined"
              error={this.state.errors.lastname !== ''}
              helperText={this.state.errors.lastname}
              onChange={this.handleChange}
              required
            />
            {/* identity number */}
            <TextField
              id="identity-number"
              name="identity number"
              className="form-input"
              type="text"
              label="Identity Number"
              placeholder="XXXXXXXX-YYYY"
              variant="outlined"
              error={this.state.errors.identityNumber !== ''}
              helperText={this.state.errors.identityNumber}
              onChange={this.handleChange}
              required
            />
            {/* address */}
            <TextField
              id="address"
              name="address"
              className="form-input"
              type="text"
              label="Address"
              variant="outlined"
              error={this.state.errors.address !== ''}
              helperText={this.state.errors.address}
              onChange={this.handleChange}
              required
            />
            {/* zip code */}
            <TextField
              id="zip-code"
              name="zip code"
              className="form-input"
              type="text"
              label="Zip Code"
              variant="outlined"
              error={this.state.errors.zipCode !== ''}
              helperText={this.state.errors.zipCode}
              onChange={this.handleChange}
              required
            />
            {/* city */}
            <TextField
              id="city"
              name="city"
              className="form-input"
              type="text"
              label="City"
              variant="outlined"
              error={this.state.errors.city !== ''}
              helperText={this.state.errors.city}
              onChange={this.handleChange}
              required
            />
            {/* email */}
            <TextField
              id="email"
              name="email"
              className="form-input"
              type="email"
              label="Email"
              variant="outlined"
              error={this.state.errors.email !== ''}
              helperText={this.state.errors.email}
              onChange={this.handleChange}
              required
            />
            {/* password */}
            <Tooltip
              title={
                <React.Fragment>
                  <Typography variant="subtitle2">{'Password Must Contain:'}</Typography>
                  <Typography variant="body2">
                    <ul>
                      <li>{'6 characters'}</li>
                      <li>{'one uppercase character'}</li>
                      <li>{'one lowercase character'}</li>
                      <li>{'one digit'}</li>
                      <li>{'one special character'}</li>
                    </ul>
                  </Typography>
                  <Typography variant="body2"></Typography>
                  <Typography variant="body2"></Typography>
                  <Typography variant="body2"></Typography>
                  <Typography variant="body2"></Typography>
                </React.Fragment>
              }
              placement="bottom"
              disableHoverListener
              arrow
            >
              <TextField
                id="password"
                name="password"
                className="form-input"
                type="password"
                label="Password"
                variant="outlined"
                error={this.state.errors.password !== ''}
                helperText={this.state.errors.password}
                onChange={this.handleChange}
                required
              />
            </Tooltip>
            {/* repeat password */}
            <TextField
              id="repeat-password"
              name="repeat password"
              className="form-input"
              type="password"
              label="Repeat Password"
              variant="outlined"
              error={this.state.errors.repeatPassword !== ''}
              helperText={this.state.errors.repeatPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-footer">
            <Button
              variant="contained"
              color="primary"
              className="form-btn"
              onClick={this.handleSubmit}
              disabled={!this.validForm()}
              size="large"
            >
              Submit
            </Button>
            <Typography>
              <Link onClick={this.props.toggle} className="toggle-form">
                Go to Login
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
