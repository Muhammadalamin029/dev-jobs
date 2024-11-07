import React, { useContext } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useSearchJobs from "../hooks/useSearchJobs";
import { JobContext } from "../context/JobContextProvider";

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

  const { filter, setFilter, dark } = useContext(JobContext);

  return (
    <div className="search-container">
      <div className={dark ? "search-bar-dark search-bar" : "search-bar"}>
        <div className="search">
          <div className="search-input">
            <FaSearch className="search-icon" />
            <input
              className={dark && "dark"}
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
              className={dark && "dark"}
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
          <Link onClick={search} className="button search-btn">
            Search
          </Link>
        </div>
      </div>
      <div className={`mobile-search-bar ${dark && "mobile-search-dark"}`}>
        <div className="mobile-filter">
          <input
            value={searchInput}
            onChange={handleSearchInput}
            className="filter-input"
            type="text"
            placeholder="Filter by title..."
          />
          <Link
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FaFilter
              onClick={() => setFilter(!filter)}
              className="filter-icon"
            />
          </Link>
          <Link onClick={search} className="button filter-btn">
            <FaSearch />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
