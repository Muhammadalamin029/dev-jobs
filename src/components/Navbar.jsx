import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toogle from "/assets/icons/toogle.svg";
import sun from "/assets/icons/sun.svg";
import moon from "/assets/icons/moon.svg";
import darkToggle from "/assets/icons/toogle-dark.svg";
import { JobContext } from "../context/JobContextProvider";

const Navbar = () => {
  const { dark, setDark } = useContext(JobContext);

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          devjobs
        </Link>
        <ul className="navbar-nav nav-toggle">
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
    </nav>
  );
};

export default Navbar;
