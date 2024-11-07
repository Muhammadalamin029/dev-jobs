import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import useFormSubmit from "../hooks/useFormSubmit";
import { JobContext } from "../context/JobContextProvider";

const AddJob = () => {
  const [roles, setRoles] = useState([]);
  const [res, setRes] = useState([]);
  const [register, unregister, handleSubmit, reset, errors] = useFormData();
  const [addJob, publishing] = useFormSubmit();

  const { dark } = useContext(JobContext);

  const handleRemove = (index) => {
    unregister(`role.items.${index}`);
    const newRoles = roles.filter((_, i) => i != index);
    setRoles(newRoles);
  };
  const handleResRemove = (index) => {
    unregister(`requirements.items.${index}`);
    const newRes = res.filter((_, i) => i != index);
    setRes(newRes);
  };

  const onSubmit = (data) => {
    console.log(data);
    addJob(data);
    // reset();
  };

  return (
    <section className={`auth-form my-5 ${dark && "auth-form-dark"}`}>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={`form-header ${dark && "form-header-dark"}`}>
            Add Job
          </h1>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${dark && "form-control-dark"}`}
                  id="companyName"
                  placeholder="Company Name"
                  {...register("company", { required: "Enter company name!!" })}
                />
                <label className={dark && "label-dark"} htmlFor="companyName">
                  Company Name
                </label>
                {errors.company && (
                  <p className="error">{errors.company.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${dark && "form-control-dark"}`}
                  id="companyLocation"
                  placeholder="Company Location"
                  {...register("location", {
                    required: "Enter location!!",
                  })}
                />
                <label
                  className={dark && "label-dark"}
                  htmlFor="companyLocation"
                >
                  Company Location
                </label>
                {errors.location && (
                  <p className="error">{errors.location.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${dark && "form-control-dark"}`}
                  id="websiteLink"
                  placeholder="Website Link"
                  {...register("website", {
                    required: "Enter website link!!",
                  })}
                />
                <label className={dark && "label-dark"} htmlFor="websiteLink">
                  Website Link
                </label>
                {errors.website && (
                  <p className="error">{errors.website.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${dark && "form-control-dark"}`}
                  id="applicationLink"
                  placeholder="Application Link"
                  {...register("apply", {
                    required: "Enter application link!!",
                  })}
                />
                <label
                  className={dark && "label-dark"}
                  htmlFor="applicationLink"
                >
                  Application Link
                </label>
                {errors.apply && (
                  <p className="error">{errors.apply.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${dark && "form-control-dark"}`}
                  id="jobPosition"
                  placeholder="Job Position"
                  {...register("position", {
                    required: "Enter job position!!",
                  })}
                />
                <label className={dark && "label-dark"} htmlFor="jobPosition">
                  Job Position
                </label>
                {errors.position && (
                  <p className="error">{errors.position.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <select
                  className={`form-select ${dark && "form-select-dark"}`}
                  aria-label="Floating select example"
                  id="jobContract"
                  {...register("contract", {
                    required: "Enter job contract!!",
                  })}
                >
                  <option value="">Job Contract</option>
                  <option value="Full Time">Full time</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Part Time">Part time</option>
                </select>
                <label className={dark && "label-dark"} htmlFor="jobContract">
                  Choose job contract
                </label>
                {errors.contract && (
                  <p className="error">{errors.contract.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${dark && "form-control-dark"}`}
              id="jobDescription"
              placeholder="Job Description"
              {...register("description", {
                required: "Enter job description!!",
              })}
            />
            <label className={dark && "label-dark"} htmlFor="jobDescription">
              Job Description
            </label>
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}
          </div>
          <div className={`form-section ${dark && "form-section-dark"}`}>
            <h2>Job requirements</h2>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${dark && "form-control-dark"}`}
                id="floatingReq"
                placeholder=""
                {...register("requirements.content", {
                  required: "Enter requirements!!",
                })}
              />
              <label className={dark && "label-dark"} htmlFor="floatingReq">
                Describe the requirements.......
              </label>
              {errors.requirements && (
                <p className="error">{errors.requirements.content.message}</p>
              )}
            </div>
            <div id="job-requirement">
              {res.map((_, i) => {
                return (
                  <div className="add-container" key={i}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="floatingPassword"
                      placeholder="Job responsibility"
                      {...register(`requirements.items.${i}`, {
                        required: "Enter mmm!!",
                      })}
                    />
                    <Link className="X" onClick={() => handleResRemove(i)}>
                      X
                    </Link>
                  </div>
                );
              })}
            </div>
            <Link
              onClick={() => setRes([...res, "Ameenu"])}
              className="btn add"
            >
              Add Skill
            </Link>
          </div>
          <div className={`form-section ${dark && "form-section-dark"}`}>
            <h2>Job Responsibilities</h2>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${dark && "form-control-dark"}`}
                id="floatingRole"
                placeholder="Password"
                {...register("role.content", {
                  required: "Enter role description!!",
                })}
              />
              <label className={dark && "label-dark"} htmlFor="floatingRole">
                Describe key responsibilities.......
              </label>
              {errors.role && (
                <p className="error">{errors.role.content.message}</p>
              )}
            </div>
            <div id="job-role">
              {roles.map((_, i) => {
                return (
                  <div className="add-container" key={i}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="floatingPassword"
                      placeholder="Job responsibility"
                      {...register(`role.items.${i}`)}
                    />
                    <Link className="X" onClick={() => handleRemove(i)}>
                      X
                    </Link>
                  </div>
                );
              })}
            </div>
            <Link
              onClick={() => setRoles([...roles, "Ameenu"])}
              className="btn add"
            >
              Add a role
            </Link>
          </div>
          {errors.root && <p className="error">{errors.root.message}</p>}
          <input
            disabled={publishing}
            className="button auth-btn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddJob;
