import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default Layout;
