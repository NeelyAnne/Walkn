import React, { Component } from "react";
import axios from "axios";
import Auth from "./utils/Auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
            <ProtectedRoute exact path="/All" component={All} />
            <ProtectedRoute exact path="/Restaurant" component={Restaurant} />
            <ProtectedRoute exact path="/Recreation" component={Recreation} />
            <ProtectedRoute
              exact
              path="/Entertainment"
              component={Entertainment}
            />
            <ProtectedRoute exact path="/Other" component={Other} />
            <Route exact path="/login" component={LoginPage} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
