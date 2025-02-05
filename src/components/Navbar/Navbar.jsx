import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="navbar-logo-img"
        />
      </div>
      <div className="navbar-right">
        <div className="navbar-buttons">
          <select name="" id="" className="navbar-select">
            <option value="English">English</option>
            <option value="हिंदी">हिंदी</option>
          </select>
        </div>
        <Link to="/signin" className="navbar-button">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
