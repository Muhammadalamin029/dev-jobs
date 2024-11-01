import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ role, company }) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <h2 style={{ color: "#000000", fontWeight: 700, margin: 0 }}>
            {role}
          </h2>
          <p>{company}</p>
        </div>
        <Link className="button footer-btn">Apply Now</Link>
      </div>
    </footer>
  );
};

export default Footer;
