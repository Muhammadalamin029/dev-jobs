import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import useSearchJobs from "../hooks/useSearchJobs";
import { JobContext } from "../context/JobContextProvider";
import { Link } from "react-router-dom";

const FilterModal = () => {
  const [
    handleSearchInput,
    searchInput,
    search,
    handleFullTime,
    fullTime,
    handleSearchLocation,
    searchLocation,
  ] = useSearchJobs();

  const { dark, setFilter } = useContext(JobContext);

  return (
    <section className={`mod ${dark && "mod-dark"}`}>
      <div onClick={() => setFilter(false)} className="overlay"></div>
      <div className="filter-modal">
        <div className="location-mobile d-flex align-items-center">
          <div className="search-input">
            <FaLocationDot className="search-icon" />
            <input
              className={dark && "dark"}
              value={searchLocation}
              onChange={handleSearchLocation}
              type="text"
              placeholder="Filter by location"
            />
          </div>
        </div>
        <div className="full-time-mobile d-flex align-items-center">
          <input
            className="check"
            onChange={handleFullTime}
            type="checkbox"
            checked={fullTime}
            id="check"
          />
          <label
            htmlFor="check"
            className={`check-label one ${dark && "check-label-dark"}`}
            data-text="Full time"
          >
            Full Time Only
          </label>
          <label
            htmlFor="check"
            className={`check-label two ${dark && "check-label-dark"}`}
            data-text="Full time"
          >
            Full Time
          </label>
        </div>
        <div className="btn-mobile">
          <Link onClick={search} className="button search-btn ">
            Search
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FilterModal;
