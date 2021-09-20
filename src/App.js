import React, {useEffect} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Web from "./pages/Web";
import Mobile from "./pages/Mobile";
import Product from "./pages/Product";
import Devops from "./pages/devops";
import "./assets/__layout.scss";
import "./assets/__technology.scss";
import Navmenu from "./components/Navmenu";
import { Switch, Route, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { playentered, entering, exiting } from "./utils/anime"
import {autoslide, handleTab} from "./utils/javascript"

import {
  CSSTransition,
  Transition,
  TransitionGroup,
  ReactCSSTransitionGroup,
} from "react-transition-group";

const routes = [
  { path: "/web", exact: "false", name: "Web", component: Web },
  {
    path: "/mobile",
    exact: "false",
    name: "Mobile",
    component: Mobile,
  },
  { path: "/product", exact: "false", name: "Product", component: Product },
  { path: "/devops", exact: "false", name: "Devops", component: Devops },
];

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const techpath ="http://localhost:3000/technologies"
  const homepath ="http://localhost:3000/"
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };
  useEffect(() => {
    const footer = document.querySelector(".footer-1_kYo")
    clearInterval()
    // autoslide();
    

    if (window.location.href === techpath) history.push("/technologies/frontend")

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
              <Route path="/" component={Home} />
              {routes.map((route, i) => (
                <Route path={route.path} key={i} component={route.component} />
              ))}
              <Route path="/technologies/:name" component={Technology} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
