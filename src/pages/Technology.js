import React, { useEffect } from "react";
import Navmenu from "../components/Navmenu";
import styles from "../assets/__technology.scss";
import {
  Route,
  Switch,
  useLocation,
  NavLink,
  useHistory
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Frontendcomp from "../components/Frontendcomp";
import Backendcomp from "../components/Backendcomp";
import Productcomp from "../components/Productcomp";
import Devopscomp from "../components/Devopscomp";
import {handleTab , autoslide} from "../utils/javascript";
import enteringtech from "../utils/anime"
import exitingtech from "../utils/anime"
import "../assets/__layout.scss";
import "../assets/__technology.scss";

const Technology = ({ match }) => {
  const location = useLocation();
const history = useHistory();
  const { pathname, key } = location;
  const { path, url } = match;
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };

  useEffect(() => {
    const links = document.querySelectorAll(".techmenu-1n3A7 ul li a");
    handleTab(links);
  }, []);

  return (
    <>
      <div className="page">
        <div className={styles.techmenu}>
          <ul>
            <li>
              <NavLink to="/technologies/frontend">frontend</NavLink>
            </li>
            <li>
              <NavLink to="/technologies/backend">backend</NavLink>
            </li>
            <li>
              <NavLink to="/technologies/product">product</NavLink>
            </li>
            <li>
              <NavLink to="/technologies/devops">devops</NavLink>
            </li>
          </ul>
        </div>

        <CSSTransition
          key={currentKey}
          timeout={timeout}
        >
        <div className={styles.tabwrapper}>
          <div className={styles.tabcontainer}>
            <Switch>
              <Route path="/technologies/frontend" component={Frontendcomp} />
              <Route path="/technologies/backend" component={Backendcomp} />
              <Route path="/technologies/product" component={Productcomp} />
              <Route path="/technologies/devops" component={Devopscomp} />
            </Switch>
            {/* <Route
              path={`${path}`}
              render={({match}) => {
                <>
                <Switch location={location}>
                  <Route
                    path="/technologies/frontend"
                    component={Frontendcomp}
                  />
                  <Route path="/technologies/backend" component={Backendcomp} />
                  <Route path="/technologies/product" component={Productcomp} />
                  <Route path="/technologies/devops" component={Devopscomp} />
                </Switch>;
                </>
              }}
            /> */}
          </div>
        </div>
        </CSSTransition> 
      </div>

    </>
  );
};

export default Technology;
