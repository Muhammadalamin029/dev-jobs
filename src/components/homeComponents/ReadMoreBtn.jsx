import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../config/firebase";

const ReadMoreBtn = () => {
  return (
    <div className="read-me fixed-buttom">
      <button
        onClick={() => {
          signOut(auth);
        }}
        className="button"
      >
        Load More
      </button>
    </div>
  );
};

export default ReadMoreBtn;
