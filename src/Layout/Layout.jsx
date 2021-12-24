import React from "react";
import { SideBar } from "./index";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        Header
        <Header />
      </div>
      <SideBar />
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
