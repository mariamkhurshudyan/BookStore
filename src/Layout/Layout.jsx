import React from "react";
import { SideBar } from "./index";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        Header
        <Header />
      </div>
      <SideBar />
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
