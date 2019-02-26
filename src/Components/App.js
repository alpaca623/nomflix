import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "Components/Home";
import TV from "Components/TV";
import Search from "Components/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={TV} />
          <Route path="/search" component={Search} />
        </>
      </Router>
    );
  }
}

export default App;
