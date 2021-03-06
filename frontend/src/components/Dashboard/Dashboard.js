import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//import HomeIcon from '@material-ui/icons/Home';
import Portfolio from './Portfolio/Portfolio';
import Settings from './Settings/Settings';
import UserConsumer from '../../logic/UserConsumer';
import Home from './Home/Home';
import { Button, withStyles, Drawer, Toolbar, Typography, Divider, List, ListItem } from '@material-ui/core';
import React from 'react';
import './Dashboard.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

const Dashboard = (props) => {
  return (
    <BrowserRouter>
      <div id="dashBoardContainer">
        <div className="dashboard-nav">
          <div>
            <NavigationBar logout={props.actions.onLogout} history={props.history} />
          </div>
        </div>
        <div className="content">
          <div>
            <Switch>
              <Route exact path="/dashboard/" component={Home} />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

const NavigationBar = (props) => {
  const classes = useStyles();

  const logout = () => {
    props.logout();
    props.history.push('/');
  };

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
        color="primary"
      >
        <Toolbar>
          <Typography variant="h5">Stock Application</Typography>
        </Toolbar>
        <Divider />
        <div className="drawer-content">
          <List>
            <NavLink to="/dashboard/" style={{ textDecoration: 'none' }} activeClassName="is-active" exact={true}>
              <ListItem button key="home">
                <StyledButton disableElevation>Home</StyledButton>{' '}
              </ListItem>
            </NavLink>{' '}
            <NavLink to="/dashboard/settings" style={{ textDecoration: 'none' }} activeClassName="is-active">
              <ListItem button key="home">
                <StyledButton disableElevation>Settings</StyledButton>{' '}
              </ListItem>
            </NavLink>{' '}
            <NavLink to="/dashboard/portfolio" style={{ textDecoration: 'none' }} activeClassName="is-active">
              <ListItem button key="home">
                <StyledButton disableElevation>Portfolio</StyledButton>{' '}
              </ListItem>
            </NavLink>
          </List>
          <Button color="primary" size="large" variant="contained" onClick={logout} className="logout-btn">
            Logout
          </Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

const StyledButton = withStyles({
  root: {
    background: 'white',
    borderRadius: 3,
    margin: 10,
    color: 'black',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
    width: '200px',
    padding: '20px',
  },
})(Button);

export default UserConsumer(Dashboard);
