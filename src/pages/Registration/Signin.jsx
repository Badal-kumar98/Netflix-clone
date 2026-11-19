import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

export default function SignIn() {
  const [email, setEmail] = useState("demo@badalkumar.dev");
  const [password, setPassword] = useState("••••••••");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="signin-container">
      <div className="signin-background">
        <div className="signin-wrapper">
          <div className="signin-box">
            <div
              style={{
                background: "rgba(229, 9, 20, 0.12)",
                border: "1px solid rgba(229, 9, 20, 0.6)",
                color: "#e5e5e5",
                padding: "10px 14px",
                borderRadius: "4px",
                marginBottom: "20px",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              <strong style={{ color: "#E50914" }}>Portfolio Demo Notice:</strong> This is a frontend UI clone created by Badal Kumar for portfolio demonstration only. Not affiliated with Netflix. No real credentials are required or stored.
            </div>

            <h2 className="signin-title">Demo Sign In</h2>

            {submitted ? (
              <div
                style={{
                  background: "rgba(46, 204, 113, 0.15)",
                  border: "1px solid #2ecc71",
                  color: "#2ecc71",
                  padding: "16px",
                  borderRadius: "4px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                  Demo Authentication Successful!
                </p>
                <p style={{ color: "#ffffff", fontSize: "13px" }}>
                  This form is a UI demonstration.
                </p>
                <Link
                  to="/"
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    background: "#E50914",
                    color: "#fff",
                    padding: "8px 20px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="signin-input-container">
                  <input
                    type="text"
                    placeholder="Demo email address"
                    className="signin-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="signin-input-container">
                  <input
                    type="password"
                    placeholder="Demo password"
                    className="signin-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="signin-button-container">
                  <button type="submit" className="signin-button">
                    Sign In (Demo Mode)
                  </button>
                </div>

                <div className="signin-or">
                  <span>OR</span>
                </div>

                <div className="signin-code-button">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <button type="button" className="signin-code">
                      Explore as Guest
                    </button>
                  </Link>
                </div>

                <div className="signin-forgot">
                  <Link to="/" className="signin-forgot-link">
                    Back to browse
                  </Link>
                </div>

                <div className="signin-options">
                  <div className="signin-remember">
                    <input
                      type="checkbox"
                      className="signin-checkbox"
                      defaultChecked
                      readOnly
                    />
                    <label className="signin-label">Remember demo session</label>
                  </div>
                </div>

                <div className="signin-signup">
                  <span className="signin-text">Exploring this portfolio?</span>
                  <Link to="/">
                    <span className="signin-link"> Browse full catalog.</span>
                  </Link>
                </div>

                <div className="signin-captcha">
                  <p className="signin-captcha-text">
                    Frontend UI Clone by Badal Kumar &mdash; Full Stack Developer.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
