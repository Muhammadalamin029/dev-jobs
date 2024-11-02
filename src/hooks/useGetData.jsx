import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { JobContext } from "../context/JobContextProvider";
import toast from "react-hot-toast";

const useGetData = () => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(null);

  const { searchValue } = useContext(JobContext);

  const getJobs = async () => {
    setLoading(true);
    const docRef = collection(db, "jobs");

    try {
      const data = await getDocs(docRef);
      const filteredJobs = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const fullTimeJobs = filteredJobs
        .filter((job) =>
          searchValue?.type ? job.contract === "Full Time" : job
        )
        .filter((titl) =>
          searchValue?.input === ""
            ? titl
            : titl.position
                .toLowerCase()
                .includes(searchValue?.input.toLowerCase())
        )
        .filter((place) =>
          searchValue?.location === ""
            ? place
            : place.location
                .toLowerCase()
                .includes(searchValue?.location.toLowerCase())
        );

      if (!fullTimeJobs) {
        toast.error("not found");
      }

      setJobs(fullTimeJobs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return [getJobs, jobs, loading];
};

export default useGetData;
