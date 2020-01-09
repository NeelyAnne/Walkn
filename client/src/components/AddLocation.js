import React, { Component } from "react";
import Navbar from "./Navbar";

class AddLocation extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="locationBody">
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
            <Link to="/signup">
              <button className="center block">Sign Up here!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddLocation;
