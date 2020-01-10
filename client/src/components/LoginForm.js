import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";
import "./css/login.css";
import { BrowserRouter as Link } from "react-router-dom";

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

  clickMe = e => {
    e.preventDefault();
    this.props.history.push("/signup");
  };

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
        <h1 className="center white">Not a member?</h1>
        <div className="center">
          <button className="center block" onClick={this.clickMe}>
            Sign Up here!
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
