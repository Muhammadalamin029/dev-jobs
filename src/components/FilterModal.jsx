import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import useSearchJobs from "../hooks/useSearchJobs";

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

  return (
    <section className="">
      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div
                className="search-input modal-title fs-5"
                id="exampleModalLabel"
              >
                <FaLocationDot className="search-icon" />
                <input
                  value={searchLocation}
                  onChange={handleSearchLocation}
                  type="text"
                  placeholder="Filter by location"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button onClick={search} className="button search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterModal;
