import React from 'react';
import './Settings.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Profile from './Profile/Profile.js';
import Password from './Password/Password.js';
import Preference from './Preference/Preference.js';
import { Button, AppBar } from '@material-ui/core';

const SettingsHeader = () => (
  <div className='settings-header'>
    <h1>Settings</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      <Button>My profile</Button>
    </NavLink>
    <NavLink to='/password' activeClassName='is-active' exact={true}>
      <Button>Change password</Button>
    </NavLink>
    <NavLink to='/preference' activeClassName='is-active' exact={true}>
      <Button>Preferences</Button>
    </NavLink>
  </div>
);

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
