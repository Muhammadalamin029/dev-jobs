import React, { createContext, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState(false);
  const [searchData, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState({
    input: "",
    location: "",
    type: false,
  });

  return (
    <JobContext.Provider
      value={{
        dark,
        setDark,
        filter,
        setFilter,
        searchData,
        setSearch,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
