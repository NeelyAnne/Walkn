import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";
import "./css/login.css";

class LoginForm extends Component {
  static contextType = UserContext;

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
    const { username, password } = this.state;
    if (username && password) {
      Auth.logIn(username, password, response => {
        this.context.setUser(response);
        this.props.history.push("/");
      });
    }
  };

  render() {
    return (
      <div className="loginBody">
        <h1> Please Login to continue to Walkn!</h1>
        <form className="form" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
            className="formElement"
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            className="formElement"
            placeholder="Password"
          />
          <br />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
