import React from "react";
import { FaArrowUp } from "react-icons/fa";

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
      <button onClick={topScroll} className="myBtn">
        <FaArrowUp />
      </button>
    </header>
  );
}

export default Hero;

let myBotton = document.querySelector(".myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTo > 20 || document.documentElement.scrollTop > 20) {
    myBotton.style.display = "block";
  } else {
    myBotton.style.display = "none";
  }
}

function topScroll() {
  document.body.scrollTo = 0;
  document.documentElement.scrollTop = 0;
}
