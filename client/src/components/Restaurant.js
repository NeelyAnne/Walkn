import React, { Component } from "react";
import GoogleApiWrapper from "./Map";

class Restuarant extends Component {
  render() {
    return (
      <div>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
    );
  }
}

export default Restuarant;
