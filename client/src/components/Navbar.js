import React, { Component } from "react";
import "./css/navbar.css";
import { withRouter } from "react-router-dom";
import AddLocationButton from "./AddLocationButton";

class Navbar extends Component {
  clickMe = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  noClickMe = e => {
    e.preventDefault();
    this.props.history.push("/addlocation");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand titleBar" onClick={this.clickMe}>
            Walkn
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">
                  Atlanta's guide to a pet friendly lifestyle.
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <AddLocationButton></AddLocationButton>
            <button onClick={this.clickMe}>Return HOME to logout!</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
