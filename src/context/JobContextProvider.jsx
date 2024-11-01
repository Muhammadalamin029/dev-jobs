import React, { createContext, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <JobContext.Provider value={{ dark, setDark }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
