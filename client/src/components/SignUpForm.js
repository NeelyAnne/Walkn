import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class SignUpForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios.post("/api/signup", this.state);
    alert("User added! Head back to the home page to view your new marker!");
  };

  render() {
    return (
      <div className="signUpBody box">
        <h1 className="center">
          {" "}
          Welcome to Walkn, Atlanta's guide to a pet friendly lifestyle.
        </h1>
        <p className="center1">
          If you're not already a member, sign up to gain access!
        </p>
        <form className="center1" onSubmit={this.submitHandler}>
          <p className="center1">Username:</p>
          <input
            type="text"
            name="name"
            className="formElement"
            onChange={this.changeHandler}
            value={this.state.username}
          />
          <br />
          <p className="center1">Password:</p>
          <input
            type="text"
            name="address"
            className="formElement"
            onChange={this.changeHandler}
            value={this.state.password}
          />
          <br />
          <button className="submit block center">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
