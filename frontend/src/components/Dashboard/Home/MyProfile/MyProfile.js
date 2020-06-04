import React from "react";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveUserData = this.retrieveUserData.bind(this);
  }
  retrieveUserData = () => {
    return {
      preferedIndustries: [
        "industri 1",
        "Industri 2",
        "Industri 3",
        "Industri 4",
      ],
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hej14aug2010.JPG/1024px-Hej14aug2010.JPG",
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
        My Profile <br />
        {this.userData.firstName} {this.userData.lastName}
      </div>
    );
  }
}

export default MyProfile;
