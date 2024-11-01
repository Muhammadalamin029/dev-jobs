import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="section">
      <div className="form-container">
        <form className="auth-form mt-5">
          <h1 className="form-header">Login</h1>
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
            Are you a new user?{" "}
            <Link className="text-decoration-none" to="/signUp">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
