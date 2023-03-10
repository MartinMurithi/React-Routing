import React from "react";
import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">ONLINE STORE</NavLink>
        </div>
        
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
