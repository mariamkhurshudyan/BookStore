import React from "react";
import { SideBar , Footer, Header} from "./index";
import "./Layout.css";


const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
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
