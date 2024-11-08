import React from "react";
import { Link } from "react-router-dom";

const AuthOptionPage = () => {
  return (
    <section className="option">
      <h1>Create an account or Login</h1>
      <div className="buttons">
        <Link className="button" to="/login">
          Login
        </Link>
        <Link className="button" to="/signUp">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default AuthOptionPage;
