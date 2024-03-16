import React from "react";
import Header from "../../components/layout/header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
