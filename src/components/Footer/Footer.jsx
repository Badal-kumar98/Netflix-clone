import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="footers-container">
          <p className="footers-text">
            Questions? Call{" "}
            <span className="footers-underline">000-800-919-1694</span>
          </p>
          <div className="footers-links">
            <div className="footers-column">
              <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div className="footers-column">
              <ul>
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div className="footers-column">
              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
            <div className="footers-column">
              <ul>
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footers-dropdown">
            <select>
              <option value="English">English</option>
              <option value="हिन्दी">हिन्दी</option>
            </select>
          </div>
          <p className="footers-text">Netflix India</p>
        </div>
      </div>
    </>
  );
}
