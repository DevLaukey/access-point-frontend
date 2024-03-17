import React from "react";
import Header from "../../components/layout/header";
import NavbarComponent from "../../components/navbar-component";

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <NavbarComponent />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
