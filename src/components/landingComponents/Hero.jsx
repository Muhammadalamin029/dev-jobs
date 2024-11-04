import React from "react";

function Hero() {
  return (
    <header
      id="hero"
      className="header d-flex justify-content-center align-items-center"
    >
      <div className="over"></div>
      <div className="header-content">
        <h1>Find Your Dream Tech Job</h1>
        <p>
          Join a community of tech ethusiasts and find roles with top companies
          in development, data science, and more!.
        </p>
        <div className="cta">
          <button className="landing-btn">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
