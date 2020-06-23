import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { userContext } from '../logic/userContext';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: <Auth />,
      user: {},
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {}

  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      user: {},
    });
  };

  render() {
    const provider = {
      user: this.state.user,
      logout: this.logout,
    };

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
