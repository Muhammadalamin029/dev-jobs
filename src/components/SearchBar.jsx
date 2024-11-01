import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useSearchJobs from "../hooks/useSearchJobs";
import useGetData from "../hooks/useGetData";

const SearchBar = () => {
  const [
    handleSearchInput,
    searchInput,
    search,
    handleFullTime,
    fullTime,
    handleSearchLocation,
    searchLocation,
  ] = useSearchJobs();

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search">
          <div className="search-input">
            <FaSearch className="search-icon" />
            <input
              value={searchInput}
              onChange={handleSearchInput}
              type="text"
              placeholder="Filter by title, company, expertise..."
            />
          </div>
        </div>
        <div className="search">
          <div className="search-input">
            <FaLocationDot className="search-icon" />
            <input
              value={searchLocation}
              onChange={handleSearchLocation}
              type="text"
              placeholder="Filter by location"
            />
          </div>
        </div>
        <div className="filter">
          <input
            className="check"
            onChange={handleFullTime}
            type="checkbox"
            checked={fullTime}
            id="check"
          />
          <label
            htmlFor="check"
            className="check-label one"
            data-text="Full time"
          >
            Full Time Only
          </label>
          <label
            htmlFor="check"
            className="check-label two"
            data-text="Full time"
          >
            Full Time
          </label>
          <Link onClick={search} className="button search-btn">
            Search
          </Link>
        </div>
      </div>
      <div className="mobile-search-bar">
        <div className="mobile-filter">
          <input
            className="filter-input"
            type="text"
            placeholder="Filter by title..."
          />
          <FaFilter className="filter-icon" />
          <Link className="button filter-btn">
            <FaSearch />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
