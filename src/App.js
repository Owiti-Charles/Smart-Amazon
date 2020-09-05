import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <h2>Am in checkout</h2>
          </Route>
          <Route path="/login">
            <h2>am in login </h2>
          </Route>
          <Route path = "/">
            home
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
