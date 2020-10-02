import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  // piece of code that runs on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        // user logedin
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else{
        // user loged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    });
    return () => {
      // cleanup
      unsubscribe();
    }
  }, []);
  console.log(user)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
