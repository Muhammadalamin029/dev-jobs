import React, { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem("theme");
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch (error) {
      console.error("Failed to parse item in local storage", error);
    }
  });
  const [filter, setFilter] = useState(false);
  const [searchData, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState({
    input: "",
    location: "",
    type: false,
  });

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  // useEffect(() => {
  //   const theme = JSON.parse(window.localStorage.getItem("theme"));

  //   if (theme === true) {
  //     setDark(true);
  //   } else {
  //     setDark(false);
  //   }
  // }, [dark]);

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
