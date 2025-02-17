import React from "react";
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <img src={require("../../icons_assets/Logo .svg").default} alt="" />
        </div>
        <div>
            <ul>
                <li><a href="/" target="_blank">About</a></li>
                <li><a href="/" target="_blank">Home</a></li>
                <li><a href="/" target="_blank">Services</a></li>
                <li><a href="/" target="_blank">Book a table</a></li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
