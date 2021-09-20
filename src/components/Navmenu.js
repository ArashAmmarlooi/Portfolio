import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../components/__Navmenu.scss";

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

  useEffect(() => {
    if (pathname == "/") setState(true);
    else setState(false);
  }, [pathname]);

  return (
    <nav className={state ? styles.homenavmenu : styles.navmenu}>
      <p className={styles.titleHeader}>Arash Ammarlooi</p>

      <ul>
        <li>
          <NavLink exact activeClassName={styles.navactive} to="/">
            Home
          </NavLink>
        </li>
        <li style={{cursor:"pointer"}}>
          Services
          <span className={styles.arrow}></span>
          <div className={styles.submenu}>
            <p>
              <NavLink activeClassName={styles.navactive} to="/web">
                web
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName={styles.navactive} to="/mobile">
                mobile
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName={styles.navactive} to="/product">
                product
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName={styles.navactive} to="/devops">
                devops
              </NavLink>
            </p>
          </div>
        </li>
        <li>
          <NavLink activeClassName={styles.navactive} to="/technologies">
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
          <NavLink activeClassName={styles.navactive} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
