import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/jumbotron.css";

class AddLocationButton extends Component {
  noClickMe = e => {
    e.preventDefault();
    this.props.history.push("/addlocation");
  };

  render() {
    return (
      <>
        <button onClick={this.noClickMe} className="button1">
          Add Location
        </button>
      </>
    );
  }
}

export default withRouter(AddLocationButton);
