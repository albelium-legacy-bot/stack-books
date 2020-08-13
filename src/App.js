import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

function App() {
  return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/privacy">PrivacyPolicy</Link></li>
          </ul>

          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/privacy" component={Privacy}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
