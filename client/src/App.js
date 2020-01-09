import React, { Component } from "react";
import axios from "axios";
import Auth from "./utils/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserContext from "./context/UserContext";
import Restaurant from "./components/Restaurant";
import All from "./components/All";
import Entertainment from "./components/Entertainment";
import Other from "./components/Other";
import Recreation from "./components/Recreation";
import "./components/css/index.css";
import SignUpPage from "./components/SignUpPage";
import AddLocation from "./components/AddLocation";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  componentDidMount() {
    if (Auth.isLoggedIn()) {
      axios
        .get("/api/me", {
          headers: {
            Authorization: `Bearer ${Auth.getToken()}`
          }
        })
        .then(res => {
          this.setUser(res.data);
        });
    }
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <UserContext.Provider
            value={{
              user: user,
              setUser: setUser
            }}
          >
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/all" component={All} />
            <ProtectedRoute exact path="/restaurant" component={Restaurant} />
            <ProtectedRoute exact path="/recreation" component={Recreation} />
            <ProtectedRoute
              exact
              path="/entertainment"
              component={Entertainment}
            />
            <ProtectedRoute exact path="/other" component={Other} />
            <ProtectedRoute exact path="/addlocation" component={AddLocation} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
