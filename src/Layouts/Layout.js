import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main>{<Outlet />}</main>
    </>
  );
};

export default Layout;
