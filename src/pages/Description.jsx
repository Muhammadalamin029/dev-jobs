import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/descriptionComponents/Footer";
import useGetDes from "../hooks/useGetDes";
import Spinner from "../components/Spinner";
import { JobContext } from "../context/JobContextProvider";

const Description = () => {
  const { id } = useParams();
  const [getJob, job, loading] = useGetDes(id);
  const { dark } = useContext(JobContext);
  useEffect(() => {
    getJob();
  }, []);
  return (
    <>
      <section className="section">
        <div className={`details ${dark && "detail-dark"}`}>
          <div className="search-container">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <div className="details-header lg">
                  <div
                    style={{
                      backgroundImage: `url(${job.logo})`,
                      background: job.logoBackground,
                    }}
                    className="header-logo"
                  ></div>
                  <div className="header-details">
                    <div className="header-text">
                      <h3>{job.company}</h3>
                      <p>{job.company}.com</p>
                    </div>
                    <Link className="header-btn">Company Site</Link>
                  </div>
                </div>
                <div className="details-header sm">
                  <div className="top mobile">
                    <div className="sm-content">
                      <img className="sm-img" src={job.logo} alt="" />
                      <h3 style={{ color: "#000000", fontWeight: 700 }}>
                        {job.company}
                      </h3>
                      <p>{job.company}.com</p>
                      <Link className="header-btn">Company Site</Link>
                    </div>
                  </div>
                </div>
                <div className="details-content">
                  <div className="content">
                    <div className="top">
                      <div className="top-content">
                        <p className="duration">
                          {job.postedAt} . {job.contract}
                        </p>
                        <h2 className="section-header">{job.position}</h2>
                        <p className="location">{job.location}</p>
                      </div>
                      <Link className="button top-btn">Apply Now</Link>
                    </div>

                    <section className="details-section">
                      {job.description}
                    </section>
                    <section className="details-section">
                      <h3 className="section-subheader">Requirements</h3>
                      <p>{job.requirements?.content}</p>
                      <ul className="list">
                        {job.requirements?.items?.map((item) => {
                          return <li className="li">{item}</li>;
                        })}
                      </ul>
                    </section>
                    <section className="details-section">
                      <h3 className="section-subheader">What You Will Do</h3>
                      <p>{job.role?.content}</p>
                      <ol className="list">
                        {job.role?.items?.map((item) => {
                          return <li className="li">{item}</li>;
                        })}
                      </ol>
                    </section>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer company={job.company} role={job.position} />
    </>
  );
};

export default Description;
