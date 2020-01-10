import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddLocationButton extends Component {
  noClickMe = e => {
    e.preventDefault();
    this.props.history.push("/addlocation");
  };

  render() {
    return (
      <>
        <button onClick={this.noClickMe} className="button">
          Add Location
        </button>
      </>
    );
  }
}

export default withRouter(AddLocationButton);
