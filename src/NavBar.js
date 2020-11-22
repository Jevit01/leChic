import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <h4>
        <Link to="/">Home</Link> <Link to="/menu">Menu</Link>{" "}
        <Link to="/about">About</Link> <Link to="/news">News</Link>
      </h4>
    );
  }
}

export default Nav;
