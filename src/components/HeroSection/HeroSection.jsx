import React from "react";
import "./heroSection.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <Navbar />
        <div className="heroheader">
          <h1 className="heroheading">
            Unlimited movies, TV
            <br />
            shows, and more.
          </h1>
          <h4 className="heroheading2">Starts at ₹149. Cancel at any time.</h4>
          <p className="heropara">
            Frontend UI Clone by Badal Kumar &mdash; Explore movies, trending shows, and UI cards.
          </p>
          <div className="herocontainer">
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <button className="hero-submit-button" type="button">
                <p className="hero-button-text">Explore Demo</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hero-button-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="hero-line" />
    </>
  );
};

export default HeroSection;
