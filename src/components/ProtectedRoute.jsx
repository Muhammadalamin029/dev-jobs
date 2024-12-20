import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedRoute;
