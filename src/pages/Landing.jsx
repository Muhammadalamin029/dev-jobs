import React from "react";
import { Link, NavLink } from "react-router-dom";
import Hero from "../components/landingComponents/Hero";
import "../dark.css";
import Categories from "../components/landingComponents/Categories";
import Work from "../components/landingComponents/Work";
import CTA from "../components/landingComponents/CTA";
import LandingFooter from "../components/landingComponents/LandingFooter";

const Landing = () => {
  return (
    <section>
      <div
        className="navbar navbar-expand-lg nav sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            devjobs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/add-job">
                  About Us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/add-job">
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/add-job">
                  Get Started
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Hero />
      <Categories />
      <Work />
      <CTA />
      <LandingFooter />
    </section>
  );
};

export default Landing;
