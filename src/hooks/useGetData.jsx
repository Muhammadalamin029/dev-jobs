import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useGetData = () => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(false);
  let job = [];

  const getJobs = async (searchValue) => {
    const docRef = collection(db, "jobs");
    setLoading(true);

    try {
      const data = await getDocs(docRef);
      const filteredJobs = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const fullTimeJobs = filteredJobs.filter(
        (job) => job.contract === "Full Time"
      );
      const TitleJobs = filteredJobs.filter(
        (job) => job.position === searchValue?.searchInput
      );
      const LocationJobs = filteredJobs.filter(
        (job) => job.location === searchValue?.searchLocation
      );

      if (searchValue?.fullTime === true) {
        job = fullTimeJobs;
        console.log(job);
        setJobs(job);
      } else if (searchValue?.searchInput != "") {
        job = TitleJobs;
        console.log(job);
        setJobs(job);
      } else if (searchValue?.searchLocation != "") {
        job = LocationJobs;
        console.log(job);
        setJobs(job);
      }
      job = filteredJobs;

      setJobs(job);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);

  return [getJobs, jobs, loading];
};

export default useGetData;
