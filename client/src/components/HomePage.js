import React from "react";
import UserContext from "../context/UserContext";
import LogoutButton from "../components/LogoutButton";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const HomePage = props => (
  <>
    <div>
      <UserContext.Consumer>
        {value => (
          <>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand titleBar">Walkn</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link">
                        Atlanta's guide to a pet friendly lifestyle.
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </ul>
                  <div className="navbar-text">
                    {"....."}
                    Welcome, {value.user && value.user.username}!{"....."}
                    <LogoutButton></LogoutButton>
                  </div>
                </div>
              </nav>
              <div className="blank">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <Jumbotron></Jumbotron>
              <Footer></Footer>
            </div>
          </>
        )}
      </UserContext.Consumer>
    </div>
  </>
);

export default HomePage;
