import React, { Component } from "react";
import axios from "axios";
import Auth from "./utils/Auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserContext from "./context/UserContext";

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
          <header>
            <nav>
              <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </nav>
          </header>

          <UserContext.Provider
            value={{
              user: user,
              setUser: setUser
            }}
          >
            <ProtectedRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
