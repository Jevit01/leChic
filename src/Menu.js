import React, { Component } from "react";
import Nav from "./NavBar.js";
import FullBreakfast from "./Menus/FullBreakfast.js";
import BrunchAllDay from "./Menus/BrunchAllDay.js";
import Platter from "./Menus/Platters.js";
class Menu extends Component {
  state = {
    menu: true,
    breakfast: false,
    brunch: false,
    platters: false
  };
  handleBreakfast = () => {
    this.setState({
      breakfast: true
    });
  };
  handleBrunch = () => {
    this.setState({
      brunch: true
    });
  };
  handlePlatters = () => {
    this.setState({
      platters: true
    });
  };
  render() {
    const MenuPage = () => {
      if (this.state.platters === true) {
        return (
          <div>
            <Platter />
          </div>
        );
      } else if (this.state.breakfast === true) {
        return (
          <div>
            <FullBreakfast />
          </div>
        );
      } else if (this.state.brunch === true) {
        return (
          <div>
            <BrunchAllDay />
          </div>
        );
      } else {
        return (
          <div>
            <h1>'Menu page'</h1>
            <Nav />
            <button onClick={this.handleBreakfast}>breakfast</button>
            <button onClick={this.handleBrunch}>brunch</button>
            <button onClick={this.handlePlatters}>platters</button>
          </div>
        );
      }
    };

    return <div>{this.state.menu ? <MenuPage /> : ""}</div>;
  }
}

export default Menu;
