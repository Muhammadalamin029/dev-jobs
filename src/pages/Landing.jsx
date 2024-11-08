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
      <Hero />
      <Categories />
      <Work />
      <CTA />
      <LandingFooter />
    </section>
  );
};

export default Landing;
