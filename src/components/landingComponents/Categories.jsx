import React from "react";
import {
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaShieldAlt,
} from "react-icons/fa";

const Categories = () => {
  return (
    <section className="sec">
      <h2 className="sec-header">Explore Tech Roles</h2>
      <p className="section-description">
        Find jobs across all tech specialties, from development to project
        management
      </p>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="categories-container d-flex justify-content-center align-items-center">
            <FaShieldAlt className="categories-icon" />
            Cyber Security
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categories-container d-flex justify-content-center align-items-center">
            <FaCode className="categories-icon" />
            Software Development
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categories-container d-flex justify-content-center align-items-center">
            <FaDatabase className="categories-icon" />
            Data Science & Al
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categories-container d-flex justify-content-center align-items-center">
            <FaProjectDiagram className="categories-icon" />
            Product Managemanet
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
