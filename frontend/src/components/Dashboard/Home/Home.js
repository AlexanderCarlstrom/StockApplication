import React from 'react';
import MyShareholding from './MyShareholding/MyShareholding';
import MyProfile from './MyProfile/MyProfile';
import UserConsumer from '../../../logic/UserConsumer';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.user = props.user;
  }
  retrieveUserData = () => {
    return {
      preferredIndustries: ['Industri 1', 'Industri 2', 'Industri 3', 'Industri 4'],
      ownedShares: [
        { companyName: 'Company 1', typeOfTrade: 'Industri 1', value: 22222 },
        { companyName: 'Company 2', typeOfTrade: 'Industri 1', value: 133 },
        {
          companyName: 'Company 3',
          typeOfTrade: 'Industri 2',
          value: 4222,
        },
        { companyName: 'Company 4', typeOfTrade: 'Industri 3', value: 1321231 },
        { companyName: 'Company 5', typeOfTrade: 'Industri 4', value: 65436 },
        { companyName: 'Company 6', typeOfTrade: 'Industri 4', value: 765745 }
      ],      
      phoneNumber: '070123456',
      lastUpdate: new Date(),
    };
  };
  render() {
    return (
      <div id="homePageWrapper">
        <h1 className="pageHeaderText">Home</h1>
        <div id="welcomeMessage">
          <p className="welcomeMessageText">Welcome </p>
          <p className="welcomeMessageTextFromUserData">{this.props.user.firstname}</p>
          <p className="welcomeMessageText">! Your holdings were last updated on </p>
          <p className="welcomeMessageTextFromUserData">{this.retrieveUserData().lastUpdate.toDateString()}</p>
          <p className="welcomeMessageText">. Go check it out!</p>
        </div>
        <div id="homePageContainerDiv">
          <div id="leftDiv">
            <MyProfile getUserData={this.retrieveUserData} />
          </div>
          <div id="rightDiv">
            <MyShareholding getUserData={this.retrieveUserData} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserConsumer(Home);
