import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../../context/JobContextProvider";

const Footer = ({ role, company }) => {
  const { dark } = useContext(JobContext);

  return (
    <footer className={dark && "footer-dark"}>
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
