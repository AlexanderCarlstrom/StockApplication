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
    industry.slice(0, 4).map((stock, index) => {
      if (index > 0) {
        stockString += ', ';
      }
      stockString += stock.name;

      if (index === 3) {
        stockString += '...';
      }
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
                  <ProgressBar
                    variant={'industry' + index}
                    now={(100 / this.stocks.length) * industry.stocks.length}
                    key={industry.name}
                  />
                );
              } else return;
            })}
          </ProgressBar>
        </div>
        <div id="companySummaryDiv">
          {this.industries.map((industry, index) => {
            if (industry.stocks.length > 0) {
              return (
                <div className="industrySummaryDiv" key={industry.name}>
                  <div className={'industry' + index.toString()}></div>
                  <div className="companyIndustryDiv">
                    <p className="industryText">{industry.name.toUpperCase()}</p>
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
