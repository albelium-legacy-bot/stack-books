import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Default from "./pages/Default";
import Lp from "./pages/Lp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lp" component={Lp}></Route>
        <Route path="/" component={Default}></Route>
      </Switch>
    </Router>
  );
}

export default App;
