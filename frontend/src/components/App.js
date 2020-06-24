import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: <Auth />,
    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
