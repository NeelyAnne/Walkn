import React, { Component } from "react";
import "./css/navbar.css";
import { BrowserRouter as Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <a className="navbar-brand titleBar">Walkn</a>
          </Link>
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
            <span className="navbar-text">Return home to log out!</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
