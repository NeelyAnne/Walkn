import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Auth from "../utils/Auth";

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.loggingOut = this.loggingOut.bind(this);
  }

  loggingOut() {
    Auth.logOut();
  }

  render() {
    return (
      <>
        <button onClick={this.loggingOut}>Logout</button>
      </>
    );
  }
}

export default withRouter(LogoutButton);
