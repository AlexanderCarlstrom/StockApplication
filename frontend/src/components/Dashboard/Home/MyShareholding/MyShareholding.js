import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
//import { Button } from "@material-ui/core";
import './MyShareholdning.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserConsumer from '../../../../logic/UserConsumer';

class MyShareholding extends React.Component {
  constructor(props) {
    super(props);
    this.stocks = props.user.stocks.sort((a, b) => (a.industry > b.industry ? 1 : -1));
    this.industries = this.getIndustries();
  }

  getIndustries = () => {
    let industries = [
      {
        name: 'construction',
        stocks: new Array(),
      },
      {
        name: 'it',
        stocks: new Array(),
      },
      {
        name: 'finance',
        stocks: new Array(),
      },
      {
        name: 'medicine',
        stocks: new Array(),
      },
      {
        name: 'currency',
        stocks: new Array(),
      },
    ];

    this.stocks.map((stock) => {
      switch (stock.industry.toLowerCase()) {
        case 'construction':
          industries[0].stocks.push(stock);
          break;
        case 'it':
          industries[1].stocks.push(stock);
          break;
        case 'finance':
          industries[2].stocks.push(stock);
          break;
        case 'medicin':
          industries[3].stocks.push(stock);
          break;
        case 'currency':
          industries[4].stocks.push(stock);
          break;
        default:
          break;
      }
    });

    return industries;
  };

  getCompanyString = (industry) => {
    let stockString = '';
    industry.map((stock, index) => {
      if (index === 5) {
        stockString += '...';
      }

      if (index > 0) {
        stockString += ', ';
      }
      stockString += stock.name;
    });
    return stockString;
  };

  getTotalIndustryValue = (industryName) => {
    const industryCompanies = this.userData.ownedShares.filter((ownedShare) => ownedShare.typeOfTrade === industryName);
    let totalValue = 0;
    industryCompanies.forEach((company) => (totalValue += company.value));
    return totalValue;
  };

  render() {
    return (
      <div>
        <div className="containerDiv" id="headerDiv">
          <h3 className="componentHeaderText">My Holdings</h3>
        </div>
        <div id="lastUpdatedAndValue">
          <h1>{this.props.totalValue.toFixed(4)} USD</h1>
        </div>
        <div id="barDiv">
          <ProgressBar>
            {this.industries.map((industry, index) => {
              if (industry.stocks.length > 0) {
                return (
                  <ProgressBar variant={'industry' + index} now={100 / industry.stocks.length} key={industry.name} />
                );
              } else return;
            })}
            {/* {this.userData.ownedShares.map((ownedShare, index) => (
              <ProgressBar
                variant={'industry' + this.industryArray.indexOf(ownedShare.typeOfTrade).toString()}
                now={100 / this.userData.ownedShares.length}
                key={index}
              />
            ))} */}
          </ProgressBar>
        </div>
        <div id="companySummaryDiv">
          {/* {this.industryArray.map((industry, index) => (
            <div className="industrySummaryDiv" key={industry}>
              <div className={'industry' + index.toString()}></div>
              <div className="companyIndustryDiv">
                <p className="industryText">{industry}</p>
                <p className="companyText">{this.getCompanyString(industry)}</p>
              </div>
              <p className="valueText">{this.numberFormatFix(this.getTotalIndustryValue(industry))} SEK</p>
            </div>
          ))} */}
          {this.industries.map((industry, index) => {
            if (industry.stocks.length > 0) {
              return (
                <div className="industrySummaryDiv" key={industry.name}>
                  <div className={'industry' + index.toString()}></div>
                  <div className="companyIndustryDiv">
                    <p className="industryText">{industry.name}</p>
                    <p className="companyText">{this.getCompanyString(industry.stocks)}</p>
                  </div>
                </div>
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    );
  }
}

export default UserConsumer(MyShareholding);
