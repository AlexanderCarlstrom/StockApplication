import React from "react";
import "./Settings.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Profile from "./Profile/Profile.js";
import Password from "./Password/Password.js";
import Preference from "./Preference/Preference.js";
import { Button, withStyles } from "@material-ui/core";

const SettingsHeader = () => (
    <div className="settings-header">
      <NavLink
        to="/dashboard/settings/"
        style={{ textDecoration: "none" }}
        activeClassName="is-active"
        exact={true}
      >
        <StyledButton>My profile</StyledButton>
      </NavLink>
      <NavLink
        to="/dashboard/settings/password"
        style={{ textDecoration: "none" }}
        activeClassName="is-active"
        exact={true}
      >
        <StyledButton>Change password</StyledButton>
      </NavLink>
      <NavLink
        to="/dashboard/settings/preference"
        style={{ textDecoration: "none" }}
        activeClassName="is-active"
        exact={true}
      >
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
  
  
  <BrowserRouter><div className="settingsPageWrapper">
  
  <h1 className="pageHeaderText">Settings</h1>
    <div className="settings">
      <SettingsHeader />
      <div className="settings-content">
        <Switch>
          <Route path="/dashboard/settings/" component={Profile} exact={true} />
          <Route path="/dashboard/settings/password" component={Password} />
          <Route path="/dashboard/settings/preference" component={Preference} />
        </Switch>
      </div>
    </div>
  </div>
  </BrowserRouter>
  
);

export default Settings;
