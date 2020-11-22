import React from "react";
import Home from "./Home.js";
import Menu from "./Menu.js";
import About from "./About.js";
import News from "./News.js";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
