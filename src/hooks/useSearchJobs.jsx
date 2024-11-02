import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { JobContext } from "../context/JobContextProvider";

const useSearchJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  const { setSearch, searchData, setSearchValue } = useContext(JobContext);

  const searchDetails = {
    input: searchInput,
    location: searchLocation,
    type: fullTime,
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearchLocation = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleFullTime = (e) => {
    setFullTime(e.target.checked);
  };

  const search = () => {
    setSearchValue(searchDetails);

    setSearch(!searchData);
  };

  return [
    handleSearchInput,
    searchInput,
    search,
    handleFullTime,
    fullTime,
    handleSearchLocation,
    searchLocation,
  ];
};

export default useSearchJobs;
