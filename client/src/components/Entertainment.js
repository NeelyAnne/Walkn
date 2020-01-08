import React, { Component } from "react";
import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";

class Entertainment extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
    );
  }
}

export default Entertainment;
