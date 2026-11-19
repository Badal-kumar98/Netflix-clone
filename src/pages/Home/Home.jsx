import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Trending from "../../components/Enjoy/Trending";
import DownloadCards from "../../components/Download/DownloadCards";
import Faq from "../../components/Faq/Faq";
import { faqData } from "../../data/faqData";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Trending />
      <DownloadCards />

      <div className="home-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-cards">
          {faqData.map((item, index) => {
            const { title, desc } = item;
            return <Faq key={index} title={title} desc={desc} />;
          })}
        </div>
        <div className="home-serches">
          <p className="heropara">
            Frontend UI Clone &mdash; Built with React.js & Vite by Badal Kumar
          </p>
          <div className="herocontainer">
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <button className="hero-submit-button" type="button">
                <p className="hero-button-text home-button-text">Demo Sign In</p>
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
      <Footer />
    </div>
  );
};

export default Home;
