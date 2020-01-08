import React, { Component } from "react";
import GoogleApiWrapper from "./Map";

class Recreation extends Component {
  render() {
    return (
      <div>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
    );
  }
}

export default Recreation;
