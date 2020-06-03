import React from 'react';
import './Dashboard.css';
import Home from './Home/Home';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: <Home />,
    };
  }

  render() {
    return <div id="dashboard">Dashboard</div>;
  }
}

export default Dashboard;
