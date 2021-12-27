import React from "react";
import { SideBar, Footer, Header } from "./index";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
