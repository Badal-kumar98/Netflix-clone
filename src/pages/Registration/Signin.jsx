import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(true);
    } else {
      setError(false);
      console.log("Form Submitted", { email, password });
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-background">
        <div className="signin-wrapper">
          <div className="signin-box">
            <h2 className="signin-title">Sign In</h2>

            <form onSubmit={handleSubmit}>
              <div className="signin-input-container">
                <input
                  type="email"
                  placeholder="Email or mobile number"
                  className={`signin-input ${
                    error ? "signin-input-error" : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <p className="signin-error">
                    ⚠ Please enter a valid email address or phone number.
                  </p>
                )}
              </div>

              <div className="signin-input-container">
                <input
                  type="password"
                  placeholder="Password"
                  className="signin-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="signin-button-container">
                <button type="submit" className="signin-button">
                  Sign In
                </button>
              </div>

              <div className="signin-or">
                <span>OR</span>
              </div>

              <div className="signin-code-button">
                <button className="signin-code">Use a sign-in code</button>
              </div>

              <div className="signin-forgot">
                <Link to="/forgot-password" className="signin-forgot-link">
                  Forgot password?
                </Link>
              </div>

              <div className="signin-options">
                <div className="signin-remember">
                  <input type="checkbox" className="signin-checkbox" />
                  <label className="signin-label">Remember me</label>
                </div>
              </div>

              <div className="signin-signup">
                <span className="signin-text">New to Netflix?</span>
                <Link to="/signup">
                  <span className="signin-link"> Sign up now.</span>
                </Link>
              </div>

              <div className="signin-captcha">
                <p className="signin-captcha-text">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <span className="signin-learn-more"> Learn more.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
