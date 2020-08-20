import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Top from "./pages/Top";
import Lp from "./pages/Lp";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Top}></Route>
      <Route path="/lp" component={Lp}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/privacy" component={Privacy}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
