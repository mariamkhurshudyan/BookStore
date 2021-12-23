import React from "react";
import { SideBar , Footer, Header} from "./index";


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
