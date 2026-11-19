import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            color: "#E50914",
            fontWeight: "900",
            fontSize: "26px",
            letterSpacing: "1px",
            fontFamily: "Arial, Helvetica, sans-serif",
            textTransform: "uppercase",
          }}
        >
          NETFLIX
        </span>
        <span
          style={{
            background: "#222222",
            border: "1px solid #444444",
            color: "#aaaaaa",
            fontSize: "9px",
            padding: "2px 5px",
            borderRadius: "3px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          CLONE
        </span>
      </Link>
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
