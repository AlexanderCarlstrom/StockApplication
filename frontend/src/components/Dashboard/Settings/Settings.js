import React from 'react';
import './Settings.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Profile from './Profile/Profile.js';
import Password from './Password/Password.js';
import Preference from './Preference/Preference.js';
import { Button, withStyles } from '@material-ui/core';

const SettingsHeader = () => (
  <div className='settings-header'>
    <h1>Settings</h1>
    <NavLink to='/' style={{ textDecoration: "none" }} activeClassName='is-active' exact={true}>
      <StyledButton>My profile</StyledButton>
    </NavLink>
    <NavLink to='/password' style={{ textDecoration: "none" }} activeClassName='is-active' exact={true}>
      <StyledButton>Change password</StyledButton>
    </NavLink>
    <NavLink to='/preference' style={{ textDecoration: "none" }} activeClassName='is-active' exact={true}>
      <StyledButton>Preferences</StyledButton>
    </NavLink>
  </div>
);

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(10deg, #FFFFFF 30%, #FFFFFF 90%)",
    borderRadius: 3,
    margin: 10,
    color: "black",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)",
    width: "160px",
    padding: "10px",
  },
  focusVisible: {
    background: "#D7D7D7",
  },
})(Button);

const Settings = () => (
  <BrowserRouter>
  <div className='settings'>
  <SettingsHeader />
  <div className='settings-content'>
  <Switch>
    <Route path='/' component={Profile} exact={true} />
    <Route path='/password' component={Password} />
    <Route path='/preference' component={Preference} />
  </Switch>
  </div>
  </div>
  </BrowserRouter>
);

export default Settings;
