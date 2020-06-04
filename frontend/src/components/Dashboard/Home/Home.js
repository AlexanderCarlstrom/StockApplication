import React from "react";
import MyShareholding from "./MyShareholding/MyShareholding";
import MyProfile from "./MyProfile/MyProfile";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="leftDiv">
          <MyProfile />
        </div>
        <div id="rightDiv">
          <MyShareholding />
        </div>
      </div>
    );
  }
}

export default Home;
