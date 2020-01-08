import React, { Component } from "react";
import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";

class Other extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
    );
  }
}

export default Other;
