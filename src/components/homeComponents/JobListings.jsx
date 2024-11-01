import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Spinner from "../Spinner";

const JobListings = () => {
  const [getJobs, jobs, loading] = useGetData();

  return (
    <section className="jobs">
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          jobs?.map((job, i) => {
            return (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="job">
                  <div
                    style={{
                      backgroundImage: `url(${job.logo})`,
                    }}
                    className="img"
                  ></div>
                  <div className="job-details">
                    <p>
                      {job.postedAt} . {job.contract}
                    </p>
                    <Link to={job.id} className="job-role">
                      {job.position}
                    </Link>
                    <p className="company-name">{job.company}</p>
                    <p className="job-location">{job.location}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default JobListings;
