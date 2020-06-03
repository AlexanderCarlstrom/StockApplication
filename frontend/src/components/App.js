import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth/Auth';
import Dashboard from './Dashboard/Dashboard';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
