import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Top from "./Top";
import About from "./About";
import Login from "./Login";
import Privacy from "./Privacy";

export default class Default extends React.Component {
  render() {
    return (
      <div>
        <header style={styles.header}>head</header>
        <main style={styles.main}>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/privacy" component={Privacy} />
            <Route render={() => <p>not found!.</p>} />
          </Switch>
        </main>
        <footer style={styles.footer}>footer</footer>
      </div>
    );
  }
}

//css
const styles = {
  header: {
    height: 100,
    background: "#ddd",
  },
  main: {
    height: 200,
  },
  footer: {
    height: 100,
    background: "#ddd",
  },
};
