import React from "react";
import styles from "./Nav.module.css"
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <img src={require("../../icons_assets/Logo .svg").default} alt="" />
        </div>
        <div>
            <ul className={styles.ul}>
                <li><NavLink className={styles.navLink} href="/" target="_blank">About</NavLink></li>
                <li><NavLink className={styles.navLink} href="/" target="_blank">Home</NavLink></li>
                <li><NavLink className={styles.navLink} href="/" target="_blank">Services</NavLink></li>
                <li><NavLink className={styles.navLink} href="/" target="_blank">Book a table</NavLink></li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
