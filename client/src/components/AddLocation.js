import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";

class AddLocation extends Component {
  state = {
    name: "",
    address: "",
    rating: 1,
    description: "",
    category: "food",
    lat: "",
    lng: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios.post("/api/addLocation", this.state);
    //alert("Location created! Head back to the map to view your new marker!");
    this.props.history.push("/all");
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="locationBody box">
          <h1 className="center"> Add your location information here!</h1>
          <form className="center" onSubmit={this.submitHandler}>
            <p>Name: </p>
            <input
              type="text"
              name="name"
              className="formElement"
              onChange={this.changeHandler}
              value={this.state.name}
            />
            <br />
            <p>Address: </p>
            <input
              type="text"
              name="address"
              className="formElement"
              onChange={this.changeHandler}
              value={this.state.address}
            />
            <br />
            <p>Rating: 1 (worst) - 4 (best)</p>
            <select
              name="rating"
              onChange={this.changeHandler}
              value={this.state.rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <br />
            <p>Description:</p>
            <input
              type="text"
              name="description"
              className="formElement"
              onChange={this.changeHandler}
              value={this.state.description}
            />
            <br />
            <p>Category:</p>
            <select
              name="category"
              onChange={this.changeHandler}
              value={this.state.category}
            >
              <option value="food">Food</option>
              <option value="entertainment">Entertainment</option>
              <option value="recreation">Recreation</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <p> Latitude:</p>
            <input
              type="text"
              name="lat"
              className="formElement"
              onChange={this.changeHandler}
              value={this.state.lat}
            />
            <br />
            <p> Longitude:</p>
            <input
              type="text"
              name="lng"
              className="formElement"
              onChange={this.changeHandler}
              value={this.state.lng}
            />
            <button className="submit block">Submit</button>
          </form>
          <Link to="/dashboard">
            <button type="button">Click Me!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(AddLocation);
