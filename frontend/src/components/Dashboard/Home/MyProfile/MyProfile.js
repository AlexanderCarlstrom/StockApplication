import React from 'react';
import { Button } from '@material-ui/core';
import UserConsumer from '../../../../logic/UserConsumer';
import './MyProfile.css';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.getUserData();
    this.user = props.user;
  }

  render() {
    return (
      <div>
        <div className="containerDiv" id="headerDiv">
          <h3 className="componentHeaderText">My Profile</h3>
          <Button variant="contained" color="primary" id="editProfileButton">
            Edit Profile
          </Button>
        </div>
        <div className="containerDiv" id="profileDiv">
          <div id="imageContainer">
            <img src={this.userData.profilePic} id="profilePicture" alt="Profile" />
          </div>
          <div id="personalInformationDiv">
            <p id="profileText">
              {this.user.firstname} {this.user.lastname}
            </p>
            <p className="headerText">Social Security Number/Organisation Number</p>
            <p>{this.user.identityNumber}</p>
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
          {/* <div className="contactInformationDiv">
            <p className="contactInformationHeader">Phone Number:</p>
            <p className="contactInformation">{this.userData.phoneNumber}</p>
          </div> */}
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">E-mail:</p>
            <p className="contactInformation">{this.user.email}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">Adress:</p>
            <p className="contactInformation">{this.user.address}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">Zip Code:</p>
            <p className="contactInformation"> {this.user.zipCode}</p>
          </div>
          <div className="contactInformationDiv">
            <p className="contactInformationHeader">City:</p>
            <p className="contactInformation">{this.user.city}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserConsumer(MyProfile);
