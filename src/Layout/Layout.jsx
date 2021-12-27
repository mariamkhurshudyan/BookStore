import React from "react";
import { SideBar , Footer, Header} from "./index";
import "./Layout.css";


const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
       <div className="home-container">
        <SideBar />
        <div>{children}</div>
       </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
