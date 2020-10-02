import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useStateValue} from './StateProvider';
import { auth } from "./firebase";

function Navbar() {
  const [{cart, user}] = useStateValue();
  console.log(cart);
  const login=()=>{
    if (user){
      auth.signOut();
    }
  }
  return (
    <nav className="navbar">
      {/* logo */}
      <Link to="/">
        <img
          src="https://www.kindpng.com/picc/b/17/172246.png "
          alt="Logo"
          className="navbar__logo"
        />
      </Link>

      {/* search box */}
      <div className="navbar__searchitems">
        <input type="text" className="navbar__search" />
        <SearchIcon className="navbar__searchicon" />
      </div>

      {/* 3 links */}
      <div className="navbar__nav">
        <Link to={!user && "/login"} className="navbar__link">
          <div onClick = {login} className="link__options">
  <span className="optionone">hello {user?.email}</span>
            <span className="optiontwo">{user ? 'sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/ " className="navbar__link">
          <div className="link__options">
            <span className="optionone">returns</span>
            <span className="optiontwo"> & Orders </span>
          </div>
        </Link>
        <Link to="/" className="navbar__link">
          <div className="link__options">
            <span className="optionone">Your </span>
            <span className="optiontwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="navbar__link">
          <div className="link__basket">
            <span className="cart__items">{cart?.length}</span>
            <ShoppingCartIcon className="basket__icon" />
          </div>
        </Link>
      </div>
      {/* basket  */}
    </nav>
  );
}

export default Navbar;
