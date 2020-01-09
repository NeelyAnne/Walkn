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

  function signUp(username, password, cb) {
    axios.post("/api/signUp", {
      username: "Finn",
      password: "Williams"
    });
  }

  function logOut() {
    localStorage.removeItem("token");
    loggedIn = false;
    window.location.reload(false);
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
