import React, { useContext } from "react";
import useSignUp from "../hooks/useSignUp";
import { JobContext } from "../context/JobContextProvider";

const SignOutModal = () => {
  const { logOut } = useSignUp();

  const { setModal } = useContext(JobContext);
  return (
    <div className="mod">
      <div className="overlay"></div>
      <div className="filter-modal">
        <section>
          <h2>Do you want to SignOut?</h2>
          <button onClick={logOut}>Yes</button>
          <button onClick={() => setModal(false)} className="g">
            No
          </button>
        </section>
      </div>
    </div>
  );
};

export default SignOutModal;
