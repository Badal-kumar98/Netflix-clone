import React from "react";
import "./heroSection.css";
import Navbar from "../Navbar/Navbar";

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
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="herocontainer">
            <input
              type="text"
              className="hero-input"
              placeholder="Email address"
            />
            <button className="hero-submit-button">
              <p className="hero-button-text">Get Started</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="hero-button-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className="hero-line" />
    </>
  );
};

export default HeroSection;
