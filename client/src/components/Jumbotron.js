import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AddLocationButton from "./AddLocationButton";
import "./css/jumbotron.css";
import Chart from "./Chart";

class Jumbotron extends Component {
  clickHere = e => {
    e.preventDefault();
    this.props.history.push("/all");
  };

  render() {
    return (
      <div className="jumbotron">
        <AddLocationButton></AddLocationButton>
        <button onClick={this.clickHere}>View the Map</button>
        <div className="contanier">
          <Chart></Chart>
        </div>
      </div>
    );
  }
}

export default withRouter(Jumbotron);
