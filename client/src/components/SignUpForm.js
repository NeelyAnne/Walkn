import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  render() {
    return (
      <div className="signUpBody box">
        <h1 className="center"> Please fill in the information below!</h1>
        <form className="center" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            className="formElement"
            placeholder="Name: "
          />
          <br />
          <input
            type="text"
            name="address"
            className="formElement"
            placeholder="Address: "
          />
          <br />
          <input
            type="text"
            name="description"
            className="formElement"
            placeholder="Description:"
          />
          <br />
          <input
            type="text"
            name="lat"
            className="formElement"
            placeholder="Lat:"
          />
          <br />
          <input
            type="text"
            name="long"
            className="formElement"
            placeholder="Long:"
          />
          <button className="submit block">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
