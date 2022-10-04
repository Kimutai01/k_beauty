import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/vendors"}>Vendors</Link>
        <Link to={"/cart"}>Cart</Link>
      </ul>
    </div>
  );
};

export default Navbar;
