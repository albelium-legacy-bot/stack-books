import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <h1>Top</h1>

        <Link to="/about">About</Link>
      </div>
    );
  }
}
