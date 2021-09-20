import React from "react";
import Navmenu from "./components/Navmenu.js";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/styles.scss";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Navmenu /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
