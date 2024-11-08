import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const LandingLayout = () => {
  return (
    <>
      <div
        className="navbar navbar-expand-lg na sticky-top"
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
                <NavLink className="nav-link" to="/welcome">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link">About Us</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link">Contact</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/option">
                  Get Started
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default LandingLayout;
