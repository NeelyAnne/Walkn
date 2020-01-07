import axios from "axios";

function Auth() {
  let loggedIn = false;

  function logIn(username, password, cb) {
    //CODE GOES HERE
  }

  function logOut(cb) {
    localStorage.removeItem("token");
    loggedIn = false;
    cb();
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function isLoggedIn() {
    return loggedIn;
  }

  return {
    isLoggedIn,
    logIn,
    logOut,
    getToken
  };
}

export default Auth();
