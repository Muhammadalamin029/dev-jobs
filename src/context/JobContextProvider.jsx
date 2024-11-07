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

  if (dark) {
    document.querySelector("body").style.backgroundColor = "#121712";
  } else {
    document.querySelector("body").style.backgroundColor = "#f4f6f8";
  }

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
