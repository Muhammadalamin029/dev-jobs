import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const user = useContext(AuthContext);

  return user ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRoute;
