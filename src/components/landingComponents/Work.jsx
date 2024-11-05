import React from "react";
import { FaPaperPlane, FaSearch, FaUserPlus } from "react-icons/fa";

const Work = () => {
  return (
    <section className="sec">
      <h2 className="sec-header">How It Works</h2>
      <p className="section-description">
        Your journey to a tech career starts here. Get started in three easy
        steps
      </p>
      <div className="row">
        <div className="col-lg-4">
          <div className="categories-container steps">
            <h3>Step one</h3>
            <FaUserPlus className="step-icon" />
            <br />
            Create an account as a job Seeker or Employer
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories-container steps">
            <h3>Step two</h3>
            <FaSearch className="step-icon" />
            <br />
            Explore oppoertunities tailored to your tech expertise
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories-container steps">
            <h3>Step three</h3>
            <FaPaperPlane className="step-icon" />
            <br />
            Directly apply to companies or post a job to find top talents
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Work;
