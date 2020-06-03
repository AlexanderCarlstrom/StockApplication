import React from 'react';
import './Dashboard.css';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Portfolio from './Portfolio/Portfolio';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: <Home />,
    };
  }

  render() {
    return (
      <div className="dashboard">
        <ul>
          <li>
            <button
              onClick={() => {
                this.setState({
                  currentPage: <Home />,
                });
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              href="#"
              onClick={() => {
                this.setState({
                  currentPage: <Portfolio />,
                });
              }}
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.setState({
                  currentPage: <Settings />,
                });
              }}
            >
              Settings
            </button>
          </li>
        </ul>
        <div>{this.state.currentPage}</div>
      </div>
    );
  }
}

export default Dashboard;
