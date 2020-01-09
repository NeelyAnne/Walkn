import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Auth from "../utils/Auth";
import "./css/signUp.css";

class SignUpForm extends Component {
  render() {
    return <div className="signUpBody"></div>;
  }
}

export default withRouter(SignUpForm);
