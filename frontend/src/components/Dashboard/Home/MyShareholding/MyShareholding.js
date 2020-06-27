import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
//import { Button } from "@material-ui/core";
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

  getTotalAssetsValue = () => {
    let totalValue = 0;
    this.userData.ownedShares.map((share) => (totalValue += share.value));
    totalValue = this.numberFormatFix(totalValue);
    return totalValue.toString();
  };

  numberFormatFix = (number) => {
    number = number.toLocaleString(undefined, { minimumFractionDigits: 0 });
    return number.toString();
  };

  render() {
    return (
      <div>
        <div className="containerDiv" id="headerDiv">
          <h3 className="componentHeaderText">My Holdings</h3>
          {/*<Button variant="contained" color="primary" id="editProfileButton">
            My Portfolio
    </Button>*/}
        </div>
        <div id="lastUpdatedAndValue">
          <h1>{this.getTotalAssetsValue()} SEK</h1>
          <p id="lastUpdatedText">
            Last updated: {this.userData.lastUpdate.toDateString()}
          </p>
        </div>
        <div id="barDiv">
          <ProgressBar>
            {this.userData.ownedShares.map((ownedShare, index) => (
              <ProgressBar
                variant={
                  "industry" +
                  this.industryArray.indexOf(ownedShare.typeOfTrade).toString()
                }
                now={100 / this.userData.ownedShares.length}
                key={index}
              />
            ))}
          </ProgressBar>
        </div>
        <div id="companySummaryDiv">
          {this.industryArray.map((industry, index) => (
            <div className="industrySummaryDiv" key={industry}>
              <div className={"industry" + index.toString()}></div>
              <div className="companyIndustryDiv">
                <p className="industryText">{industry}</p>
                <p className="companyText">{this.getCompanyString(industry)}</p>
              </div>
              <p className="valueText">
                {this.numberFormatFix(this.getTotalIndustryValue(industry))} SEK
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyShareholding;
