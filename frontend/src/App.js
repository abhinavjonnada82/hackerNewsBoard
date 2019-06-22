import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewNews from "./component/ViewNews";

const img = require("./bg.jpg");
const divStyle = {
  width: "100%",
  height: "1000px",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover"
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" style={divStyle}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Personal News Board
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    View top 20 stories from Hacker News
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Add your own stories
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <a className="navbar-brand" href="#">
              {" "}
              ⓒ 2019 Abhinav Jonnada
            </a>
          </nav>

          <Route path="/" exact component={ViewNote} />
        </div>
      </Router>
    );
  }
}

export default App;
