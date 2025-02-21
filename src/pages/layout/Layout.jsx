import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import styles from "./Layout.module.css";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
