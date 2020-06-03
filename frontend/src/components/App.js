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
    return <div className="app">{this.state.currentPage}</div>;
  }
}

export default App;
