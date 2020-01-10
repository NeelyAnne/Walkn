import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AddLocationButton from "./AddLocationButton";
import "./css/jumbotron.css";
import Chart from "./Chart";
import LineOfDogs from "./img/line-of-dogs-smaller.jpg";

class Jumbotron extends Component {
  clickHere = e => {
    e.preventDefault();
    this.props.history.push("/all");
  };

  render() {
    return (
      <div className="jumbotron">
        <AddLocationButton></AddLocationButton>
        <button onClick={this.clickHere} className="button1">
          View the Map
        </button>
        <br />
        <br />
        <h1 className="font">What is Walkn?</h1>
        <p className="aboutInfo">
          Walkn is an app for pet lovers and socialites alike. Enjoy a day or
          night on the town with your furry friend without the worry. Walkn
          provides you with some of Atlanta's hottest spots for pets and their
          owners to socialize, grab a bite, or just hang out.
        </p>
        <p className="aboutInfo">
          Not only does Walkn allow you view pre-loaded locations in the Atlanta
          area to visit, but it also allows you to log and rate your own
          locations so you can save them for future reference. Learn all the
          best pet-friendly place in ATL and start adding to your collection
          now!
        </p>
        <br />
        <img src={LineOfDogs} alt="Line of Dogs" className="lineOfDogs"></img>
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="font">
            A glance at the number of locations by category:
          </h1>
          <Chart></Chart>
        </div>
      </div>
    );
  }
}

export default withRouter(Jumbotron);
