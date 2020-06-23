import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
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
        <ul>
          <li>
            <button
              onClick={() => {
                this.setState({
                  currentPage: <Dashboard />,
                });
              }}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              href="#"
              onClick={() => {
                this.setState({
                  currentPage: <Auth />,
                });
              }}
            >
              Auth
            </button>
          </li>
        </ul>
        <userContext.Provider value={provider}>
          <div>{this.state.currentPage}</div>
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
