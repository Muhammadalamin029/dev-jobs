import React, { useContext } from "react";
import JobListings from "../components/homeComponents/JobListings";
import ReadMoreBtn from "../components/homeComponents/ReadMoreBtn";
import { JobContext } from "../context/JobContextProvider";
import FilterModal from "../components/FilterModal";
import useSignUp from "../hooks/useSignUp";
import SignOutModal from "../components/SignOutModal";

const Home = () => {
  const { filter, modal } = useContext(JobContext);

  return (
    <section>
      {filter && <FilterModal />}
      {modal && <SignOutModal />}

      <JobListings />
      <ReadMoreBtn />
    </section>
  );
};

export default Home;
