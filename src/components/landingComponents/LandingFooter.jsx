import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  const date = new Date().getFullYear();
  return (
    <section className="sec footer d-flex justify-content-center align-items-center">
      <div className="social d-flex sub-sec">
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaXTwitter />
        </Link>
        <Link>
          <FaYoutube />
        </Link>
      </div>
      <div className="newsletter sub-sec"></div>
      <div className="contact sub-sec">
        <span>&copy;{`Copyright ${date} Devjobs, All rights reserved`}</span>
      </div>
    </section>
  );
};

export default LandingFooter;
