import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="section">
      <div className="form-container">
        <form className="auth-form my-5">
          <h1 className="form-header">Create an account</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Password</label>
          </div>
          <button className="button auth-btn">Login</button>
          <p className="m-0 mt-3 ">
            Already has an account?{" "}
            <Link className="text-decoration-none" to="/login">
              login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
