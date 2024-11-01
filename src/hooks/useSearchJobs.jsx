import React, { useState } from "react";
import toast from "react-hot-toast";
import useGetData from "./useGetData";

const useSearchJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [fullTime, setFullTime] = useState(true);

  const searchValue = {
    searchInput,
    searchLocation,
    fullTime,
  };

  const [getJobs] = useGetData();

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
    if (searchValue.searchInput === "" && searchValue.searchLocation === "") {
      toast.error("Enter a search filter");
      return;
    }

    return getJobs(searchValue);
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
