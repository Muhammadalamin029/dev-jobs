import React, { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useFormSubmit = () => {
  const [publishing, setPublishing] = useState(false);
  const navigate = useNavigate();

  const addJob = async (data) => {
    try {
      setPublishing(true);
      const docRef = collection(db, "jobs");
      const post = await toast.promise(addDoc(docRef, data), {
        loading: "Posting....",
        error: "error message",
        success: "Alhamdullilah!!!",
      });
      if (post) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPublishing(false);
    }
  };
  return [addJob, publishing];
};

export default useFormSubmit;
