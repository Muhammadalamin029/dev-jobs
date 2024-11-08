import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="sec">
      <h2 className="sec-header">Hire Leading Tech Talent</h2>
      <p>
        Post your openings and reach thousands of qualified tech professionals
      </p>
      <button onClick={() => navigate("/signUp")} className="landing-btn">
        Sign Up
      </button>
    </section>
  );
};

export default CTA;
