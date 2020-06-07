import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

class MyShareholding extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.getUserData();
  }

  tempVariants = ["success", "info", "warning", "danger"];
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
        <div>
          <ProgressBar>
            {this.userData.preferredIndustries.map((industry, index) => (
              <ProgressBar
                variant={this.tempVariants[index]}
                now={100/this.userData.preferredIndustries.length}
                key={index}
              />
            ))}
          </ProgressBar>
        </div>
      </div>
    );
  }
}

export default MyShareholding;
