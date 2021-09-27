import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../components/__Navmenu.scss";
const { animatenavmenu }  = require("../utils/anime");

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { get } from "animejs";

const Navmenu = () => {
  const [state, setState] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const path = "https://arashammarlooi.github.io/Portfolio/"

  useEffect(() => {
    if ((window.location.href == path) || (pathname == "/Portfolio")) setState(true);
    else setState(false);
  }, [window.location.href, pathname]);

  useEffect(() => {
    const navli = document.querySelectorAll(".navmenu-1bbKl ul li");
    animatenavmenu(navli)
  }, []);



  return (
    <nav className={state ? styles.homenavmenu : styles.navmenu}>
      <p className={styles.titleHeader}>Arash Ammarlooi</p>

      <ul>
        <li>
          <NavLink exact activeClassName={styles.navactive} to="/Portfolio">
            Home
          </NavLink>
        </li>
        <li style={{cursor:"pointer"}}>
          Services
          <span className={styles.arrow}></span>
          <div className={styles.submenu}>
            <p>
              <NavLink activeClassName={styles.navactive} to="/Portfolio/web">
                web
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName={styles.navactive} to="/Portfolio/mobile">
                mobile
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName={styles.navactive} to="/Portfolio/product">
                product
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName={styles.navactive} to="/Portfolio/devops">
                devops
              </NavLink>
            </p>
          </div>
        </li>
        <li>
          <NavLink activeClassName={styles.navactive} to="/Portfolio/technologies">
            Technology
          </NavLink>
          {/* <div className={styles.submenu}>
                  <p>frontend</p>
                  <p>backend</p>
                  <p>product</p>
                  <p>devops</p>
                </div> */}
        </li>
        <li>
          <NavLink activeClassName={styles.navactive} to="/Portfolio/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.navactive} to="/Portfolio/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
