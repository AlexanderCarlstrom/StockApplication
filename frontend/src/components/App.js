import Auth from './Auth/Auth';
import Dashboard from './Dashboard/Dashboard';
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
        <div>{this.state.currentPage}</div>
      </div>
    );
  }
}

export default App;
