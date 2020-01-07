import axios from "axios";

function Auth() {
  let loggedIn = false;

  function logIn(username, password, cb) {
    axios
      .post("/api/authenticate", {
        username: username,
        password: password
      })
      .then(res => {
        loggedIn = true;
        localStorage.setItem("token", res.data.token);
        cb(res.data);
      });
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
    return localStorage.getItem("token") ? true : false;
  }

  return {
    isLoggedIn,
    logIn,
    logOut,
    getToken
  };
}

export default Auth();
