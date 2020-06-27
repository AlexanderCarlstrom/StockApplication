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
            <NavigationBar />
          </div>
        </div>
        <div className="content">
          <div>
            <Switch>
              <Route path="/dashboard/" component={Home} exact />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

const NavigationBar = () => {
  const classes = useStyles();

  return (
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
    </Drawer>
  );
};

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(10deg, #FFFFFF 30%, #FFFFFF 90%)',
    borderRadius: 3,
    margin: 10,
    color: 'black',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
    width: '200px',
    padding: '20px',
  },
})(Button);

export default UserConsumer(Dashboard);
