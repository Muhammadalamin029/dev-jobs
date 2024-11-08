import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullname == "" || email == "" || password == "") {
      toast.error("input field is empty!!");
      return;
    }
    signUp(email, password, fullname);
  };

  return (
    <section className="section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="auth-form my-5">
          <h1 className="form-header">Create an account</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>
          <button className="button auth-btn">Sign Up</button>
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
