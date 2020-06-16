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
      <div>{this.state.currentPage}</div>
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
        
      </div>
    );
  }
}

export default App;
