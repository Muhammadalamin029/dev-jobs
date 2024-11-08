import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import toogle from "/assets/icons/toogle.svg";
import sun from "/assets/icons/sun.svg";
import moon from "/assets/icons/moon.svg";
import darkToggle from "/assets/icons/toogle-dark.svg";
import { JobContext } from "../context/JobContextProvider";
import useSignUp from "../hooks/useSignUp";

const Navbar = () => {
  const { dark, setDark, setModal } = useContext(JobContext);
  const { handleModal } = useSignUp();

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container">
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
        <div
          className="collapse navbar-collapse ms-auto"
          id="navbarSupportedContent"
        >
          <ul class="nav justify-content-center ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/add-job">
                Add Jobs
              </NavLink>
            </li>
            <li class="nav-item">
              <button onClick={() => setModal(true)} className="nav-link">
                Sign Out
              </button>
            </li>
            <li class="nav-item"></li>
          </ul>
          <ul className="navbar-nav nav-toggle ms-auto mb-2 mb-lg-0">
            <div>
              <img src={sun} alt="" className="nav-icon" />
              <img
                onClick={() => setDark(!dark)}
                src={dark ? darkToggle : toogle}
                alt=""
                className="nav-icon toogle"
              />
              <img src={moon} alt="" className="nav-icon" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
