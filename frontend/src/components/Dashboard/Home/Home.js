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
        "Industri 4"
      ],
      ownedShares: [
        { companyName: "Company 1", typeOfTrade: "Industri 1", value: 22222 },
        { companyName: "Company 2", typeOfTrade: "Industri 1", value: 133 },
        { companyName: "Company 3", typeOfTrade: "Industri 2", value: 2274674222 },
        { companyName: "Company 4", typeOfTrade: "Industri 3", value: 1321231 },
        { companyName: "Company 5", typeOfTrade: "Industri 4", value: 65436 },
        { companyName: "Company 6", typeOfTrade: "Industri 4", value: 765745 },
        { companyName: "Company 7", typeOfTrade: "Industri 3", value: 7574 },
        
        { companyName: "Company 7", typeOfTrade: "Industri 5", value: 7574 },
        
        { companyName: "Company 7", typeOfTrade: "Industri 6", value: 7574 },
        
        { companyName: "Company 7", typeOfTrade: "Industri 7", value: 7574 },
        
        { companyName: "Company 7", typeOfTrade: "Industri 8", value: 7574 },
        
        { companyName: "Company 7", typeOfTrade: "Industri 9", value: 7574 },
        
        { companyName: "Company 7", typeOfTrade: "Industri 10", value: 7574 },
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
