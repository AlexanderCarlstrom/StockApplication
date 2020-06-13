import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "@material-ui/core";
import "./MyShareholdning.css";
import "bootstrap/dist/css/bootstrap.min.css";

class MyShareholding extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.getUserData();
    this.userData.ownedShares = this.userData.ownedShares.sort((a, b) =>
      a.typeOfTrade > b.typeOfTrade ? 1 : -1
    );
    this.industryArray = this.industries();
  }

  tempVariants = ["success", "info", "warning", "danger"];
  industries = () => {
    let industryArray = [];
    this.userData.ownedShares.forEach((ownedShare) => {
      if (!industryArray.includes(ownedShare.typeOfTrade)) {
        industryArray.push(ownedShare.typeOfTrade);
      }
    });
    return industryArray;
  };

  getCompanyString = (industryName) => {
    const industryCompanies = this.userData.ownedShares.filter(
      (ownedShare) => ownedShare.typeOfTrade === industryName
    );
    if (industryCompanies.length === 1) {
      return industryCompanies[0].companyName;
    } else if (industryCompanies.length === 2) {
      return (
        industryCompanies[0].companyName +
        ", " +
        industryCompanies[1].companyName
      );
    } else if (industryCompanies.length > 2) {
      return (
        industryCompanies[0].companyName +
        ", " +
        industryCompanies[1].companyName +
        " +" +
        (industryCompanies.length - 2).toString()
      ).toString();
    }
  };

  getTotalIndustryValue = (industryName) => {
    const industryCompanies = this.userData.ownedShares.filter(
      (ownedShare) => ownedShare.typeOfTrade === industryName
    );
    let totalValue = 0;
    industryCompanies.forEach((company) => (totalValue += company.value));
    return totalValue;
  };
  render() {
    return (
      <div>
        <div className="containerDiv" id="headerDiv">
          My Holdings
          <Button variant="contained" color="primary" id="editProfileButton">
            My Portfolio
          </Button>
        </div>
        <div>
          <h1>{this.userData.totalValue + " SEK"}</h1>
          <p>Last updated: {this.userData.lastUpdate.toDateString()}</p>
        </div>
        <div id="barDiv">
          <ProgressBar>
            {this.userData.ownedShares.map((ownedShare, index) => (
              <ProgressBar
                variant={
                  this.tempVariants[
                    this.industryArray.indexOf(ownedShare.typeOfTrade)
                  ]
                }
                now={100 / this.userData.ownedShares.length}
                key={index}
              />
            ))}
          </ProgressBar>
        </div>
        <div id="companySummaryDiv">
          {this.industryArray.map((industry, index) => (
            <div>
              <div
                key={index + 1 * 30}
                className={"industry" + index.toString()}
              ></div>
              <p key={index}>{industry}</p>,
              <p key={index + 1 * 20} className="valueText">
                {this.getTotalIndustryValue(industry)} SEK
              </p>
              <p key={index + 1 * 10}>{this.getCompanyString(industry)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyShareholding;
