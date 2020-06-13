import React from "react";
import { Button } from "@material-ui/core";
import "./MyProfile.css";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.getUserData();
  }

  render() {
    return (
      <div>
        <div className="containerDiv" id="headerDiv">
          My Profile
          <Button variant="contained" color="primary" id="editProfileButton">
            Edit Profile
          </Button>
        </div>
        <div className="containerDiv" id="profileDiv">
          <img
            src={this.userData.profilePic}
            id="profilePicture"
            alt="Profile"
          />
          <div id="personalInformationDiv">
            <p id="profileText">
              {this.userData.firstName} {this.userData.lastName}
            </p>
            <p className="headerText">
              Social Security Number/Organisation Number
            </p>
            <p>{this.userData.idenficationNumber}</p>
          </div>
        </div>
        <div className="containerDiv" id="preferredIndustriesDiv">
          <p className="headerText" id="preferredIndustriesText">
            Preferred Industries
          </p>
          <div id="industryCollection">
            {this.userData.preferredIndustries.map((industry) => (
              <div className="industryItem" key={industry}>
                <p>{industry}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="containerDiv">
          <p id="contactInformationSectionHeader">Contact information</p>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">Phone Number:</p>
            <p className="contactInformation">{this.userData.phoneNumber}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">Mail:</p>
            <p className="contactInformation">{this.userData.mail}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">Adress:</p>
            <p className="contactInformation">{this.userData.adress}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">Zip Code:</p>
            <p className="contactInformation"> {this.userData.zipCode}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">City:</p>
            <p className="contactInformation">{this.userData.city}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
