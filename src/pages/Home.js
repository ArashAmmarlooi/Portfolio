import React, { useState, useEffect } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
const { animatebio, animatemenu } = require("../utils/anime");
// import Rectangle from "../files/Rectangle.svg";
import styles from "../assets/__home.scss";
import Webhomeimg from "../files/webhomeimg.jpg";
import Mobilehomeimg from "../files/mobilehomeimg.jpg";
import Producthomeimg from "../files/Producthomeimg.jpg";
import Devopshomeimg from "../files/devophomeimg.jpg";
import "../assets/__layout.scss";
import "../assets/__home.scss";

const Home = () => {
  const location = useLocation()
  const router = useRouteMatch()
  const {url} = router
  // const path = location.pathname.substring(0, location.pathname.length -1) 
  const {pathname} = location
  const [isBio, setIsBio] = useState(true);
  const [isMenu, setMenu] = useState(false);

  useEffect(() => {
    animatebio();
    setTimeout(() => {
      setMenu(true);
      animatemenu();
    }, 3300);
  }, [window.location.href]);

  return (
    <>
      <section className={styles.container}>
        {/* <img src={Rectangle} className={styles.rect1} />
      <img src={Rectangle} className={styles.rect2} /> */}
        {isBio && (
          <div className={styles.biocont}>
            <h1>Hi i'm Arash Ammarlooi</h1>
            <p>I'm a Fullstack javascript Web & Mobile Developer</p>
          </div>
        )}

        {isMenu && (
          <div className={styles.containermenu}>
            <div className={styles.containerbox}>
              <p>
                <Link to="/Portfolio/web">Web development</Link>
              </p>
              <img className={styles.web} src={Webhomeimg} alt={`${url}web`} />
              <div className={styles.fade}></div>
            </div>

            <div className={styles.containerbox}>
              <p>
                <Link to="/Portfolio/mobile">mobile development</Link>
              </p>
              <img className={styles.mobile} src={Mobilehomeimg} />
              <div className={styles.fade}></div>
            </div>

            <div className={styles.containerbox}>
              <p>
                <Link to="/Portfolio/product">Product designing</Link>
              </p>

              <img
                className={styles.product}
                src={Producthomeimg}
                alt="/PortfolioProduct"
              />
              <div className={styles.fade}></div>
            </div>

            <div className={styles.containerbox}>
              <p>
                <Link to="/Portfolio/devops">Devops engineering</Link>
              </p>
              <img className={styles.devops} src={Devopshomeimg} alt="Devops" />
              <div className={styles.fade}></div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
