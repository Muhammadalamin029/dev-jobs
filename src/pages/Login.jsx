import React, { useState } from "react";
import { auth } from "../config/firebase";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Inputs are empty!!");
      return;
    }

    login(email, password);
  };

  return (
    <section className="section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="auth-form mt-5">
          <h1 className="form-header">Login</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              className="show"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Link>
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
