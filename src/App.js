import React, {useEffect} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Web from "./pages/Web";
import Mobile from "./pages/Mobile";
import Product from "./pages/Product";
import Devops from "./pages/devops";
import Contact from "./pages/Contact";
import "./assets/__layout.scss";
import "./assets/__technology.scss";
import Navmenu from "./components/Navmenu";
import { Switch, Route, useLocation, useHistory, useRouteMatch, HashRouter  } from "react-router-dom";
import { playentered, entering, exiting } from "./utils/anime"
import {autoslide, handleTab} from "./utils/javascript"

import {
  CSSTransition,
  Transition,
  TransitionGroup,
  ReactCSSTransitionGroup,
} from "react-transition-group";

const routes = [
  { path: "/Portfolio/web", exact: "false", name: "Web", component: Web },
  {
    path: "/Portfolio/mobile",
    exact: "false",
    name: "Mobile",
    component: Mobile,
  },
  { path: "/Portfolio/product", exact: "false", name: "Product", component: Product },
  { path: "/Portfolio/devops", exact: "false", name: "Devops", component: Devops },
];

const App = () => {
  const location = useLocation();
  const history = useHistory();

  const devMode = process.env.NODE_ENV === "production";

  const techlocalpath ="http://localhost:3000/Portfolio/technologies"
  const techlivepath ="https://arashammarlooi.github.io/Portfolio/technologies"
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };

  useEffect(() => {
    const isTech = window.location.href == techlocalpath;
    if (isTech) history.push("/Portfolio/technologies/frontend")
  }, [window.location.href]);
  
  return (
    <>
      <Navmenu />
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={timeout}
          classNames="fade"
          onEntering={(node, isAppearing) => entering(node, isAppearing)}
          // onEntered={(node, isAppearing) => playentered(node, isAppearing)}
          onExiting={(node) => exiting(node)}
        >
          <div className="page">
            <Switch location={location}>
              <Route exact path="/Portfolio" component={Home} />
              {routes.map((route, i) => (
                <Route path={route.path} key={i} component={route.component} />
              ))}
              <Route path="/Portfolio/technologies/:name" component={Technology} />
              <Route path="/Portfolio/about" component={About} />
              <Route path="/Portfolio/contact" component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
