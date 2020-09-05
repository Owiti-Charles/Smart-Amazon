import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path='/checkout'>
          <Navbar/>
            <h2>Am in checkout</h2>
          </Route>
          <Route path="/login">
            <h2>am in login </h2>
          </Route>
          <Route path = "/">
          <Navbar/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
