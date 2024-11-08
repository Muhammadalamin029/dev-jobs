import React, { useContext } from "react";
import JobListings from "../components/homeComponents/JobListings";
import ReadMoreBtn from "../components/homeComponents/ReadMoreBtn";
import { JobContext } from "../context/JobContextProvider";
import FilterModal from "../components/FilterModal";

const Home = () => {
  const { filter } = useContext(JobContext);
  return (
    <section>
      {filter && <FilterModal />}
      <JobListings />
      <ReadMoreBtn />
    </section>
  );
};

export default Home;
