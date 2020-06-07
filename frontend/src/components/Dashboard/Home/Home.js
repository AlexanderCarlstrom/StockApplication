import React from "react";
import MyShareholding from "./MyShareholding/MyShareholding";
import MyProfile from "./MyProfile/MyProfile";
import "./Home.css";

class Home extends React.Component {
  retrieveUserData = () => {
    return {
      preferredIndustries: [
        "Industri 1",
        "Industri 2",
        "Industri 3",
        "Industri 4",
      ],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hej14aug2010.JPG/1024px-Hej14aug2010.JPG",
      firstName: "Martin",
      lastName: "Göransson",
      idenficationNumber: "000102-0304",
      phoneNumber: "070123456",
      mail: "mail@mail.se",
      adress: "Väggatan 3",
      zipCode: "12345",
      city: "Trollhättan",
      totalValue: "827,300",
      lastUpdate: new Date(),
    };
  };
  render() {
    return (
      <div id="homePageContainerDiv">
        <div id="leftDiv">
          <MyProfile getUserData={this.retrieveUserData} />
        </div>
        <div id="rightDiv">
          <MyShareholding getUserData={this.retrieveUserData} />
        </div>
      </div>
    );
  }
}

export default Home;
