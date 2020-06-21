import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Button, Grid, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import "./Dashboard.css";
import Home from "./Home/Home";
import Settings from "./Settings/Settings";
import Portfolio from "./Portfolio/Portfolio";

const Dashboard = () => (
  <BrowserRouter>
    <Grid container spacing={3}>
      <div className="dashboard-nav">
        <Grid item xs={3}>
          <NavigationBar />
        </Grid>
      </div>
      <div className="content">
        <Grid item xs>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Portfolio" component={Portfolio} />
          </Switch>
        </Grid>
      </div>
    </Grid>
  </BrowserRouter>
);

const NavigationBar = () => (
  <div>
    <div>
      <h1>Stock Application</h1>
    </div>
    <div className="nav-links">
      <NavLink
        to="/"
        style={{ textDecoration: "none" }}
        activeClassName="is-active"
        exact={true}
      >
        <StyledButton disableElevation>Home</StyledButton>
      </NavLink>

      <NavLink
        to="/Settings"
        style={{ textDecoration: "none" }}
        activeClassName="is-active"
      >
        <StyledButton disableElevation>Settings</StyledButton>
      </NavLink>

      <NavLink
        to="/Portfolio"
        style={{ textDecoration: "none" }}
        activeClassName="is-active"
      >
        <StyledButton disableElevation>Portfolio</StyledButton>
      </NavLink>
    </div>
  </div>
);

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(10deg, #FFFFFF 30%, #FFFFFF 90%)",
    borderRadius: 3,
    margin: 10,
    color: "black",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)",
    width: "200px",
    padding: "20px",
  },
  selected: {
    background: "#D7D7D7",
  },
})(Button);

export default Dashboard;
