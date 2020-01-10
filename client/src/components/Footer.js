import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/jumbotron.css";

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small blue pt-4">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright Steven, Neely, Charles:
          <a href="https://github.com/NeelyAnne/Walkn">GithubRepo</a>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
