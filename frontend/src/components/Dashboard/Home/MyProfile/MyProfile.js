import React from "react";
import { Button } from "@material-ui/core";
import "./MyProfile.css";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveUserData = this.retrieveUserData.bind(this);
  }
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
    };
  };

  userData = this.retrieveUserData();
  render() {
    return (
      <div>
        <div className="containerDiv" id="headerDiv">
          My Profile
          <Button variant="contained" color="primary" id="editProfileButton">
            Edit profile
          </Button>
        </div>
        <div className="containerDiv" id="profileDiv">
          <img
            src={this.userData.profilePic}
            id="profilePicture"
            alt="Profile Picture"
          />
          <div>
            <p id="profileText">{this.userData.firstName} {this.userData.lastName}</p>
            <p className="headerText">Social Security Number/Organisation Number</p>
            <p>{this.userData.idenficationNumber}</p>
          </div>
        </div>
        <div className="containerDiv" id="preferredIndustiresDiv">
          <p className="headerText" id="preferredIndustriesText">Preferred Industires</p>
          <div id="industryCollection">
            {this.userData.preferredIndustries.map((industry) => (
              <div className="industryItem">
                <p>{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
