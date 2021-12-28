import React from "react";
import { SideBar, Footer, Header } from "./index";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.home}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
