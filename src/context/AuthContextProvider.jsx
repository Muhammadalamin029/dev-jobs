import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { Spinner } from "react-bootstrap";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem("auth");
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch (error) {
      console.error("Failed to parse item in local storage", error);
    }
  });

  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
