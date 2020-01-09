import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";
import "./css/login.css";

class SignUpForm extends Component {
  render() {
    return (
      <div className="loginBody">
        <h1 className="center"> Please Login to continue to Walkn!</h1>
        <form className="center" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
            className="formElement"
            placeholder="Username:"
          />
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            className="formElement"
            placeholder="Password:"
          />
          <br />
          <button className="submit block">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
