import React from "react";
import SearchBar from "../components/SearchBar";
import JobListings from "../components/homeComponents/JobListings";
import ReadMoreBtn from "../components/homeComponents/ReadMoreBtn";

const Home = () => {
  return (
    <section>
      <div className="section">
        <SearchBar />
      </div>
      <JobListings />
      <ReadMoreBtn />
    </section>
  );
};

export default Home;
