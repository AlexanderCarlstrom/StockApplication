// packages
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';

// components
import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
import ProtectedRoute from './ProtectedRoute';
import UserConsumer from '../logic/UserConsumer';

class App extends React.Component {
  history = createBrowserHistory();

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      const token = JSON.parse(localStorage.getItem('user-token'));
      if (token) {
        this.props.actions.onLoginWithId(token).then((result) => {
          if (result) {
            this.history.push('/dashboard');
          }
        });
      }
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <Router history={this.history}>
            <Switch>
              <Route exact path="/" component={Auth} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default UserConsumer(App);
