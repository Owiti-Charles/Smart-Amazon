import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    // login logic
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // login success and redirect
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create user , log them in and redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?w=768 "
          alt="Logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email (phone for mobile accounts)</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="login__email"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            className="login__password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button type="submit" className="login__button" onClick={login}>
            Sign In
          </button>
        </form>
      </div>
      <div className="login__newuser">
        <h4>New to Amazon?</h4>
        <button className="login__newaccount" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
