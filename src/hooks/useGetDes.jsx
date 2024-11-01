import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebase";

const useGetDes = (id) => {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const getJob = async () => {
    try {
      setLoading(true);
      const jobRef = doc(db, "jobs", id);
      const data = await getDoc(jobRef);
      setJob(data.data());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return [getJob, job, loading];
};

export default useGetDes;
