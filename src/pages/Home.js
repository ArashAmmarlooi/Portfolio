import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const { animatebio, animatemenu } = require("../utils/anime");
// import Rectangle from "../files/Rectangle.svg";
import styles from "../assets/__home.scss";
import Webhomeimg from "../files/webhomeimg.png";
import Mobilehomeimg from "../files/mobilehomeimg.jpg";
import Producthomeimg from "../files/Producthomeimg.jpg";
import Devopshomeimg from "../files/devophomeimg.jpg";
import "../assets/__layout.scss";
import "../assets/__home.scss";

const Home = () => {
  const [isBio, setIsBio] = useState(true);
  const [isMenu, setMenu] = useState(false);

  useEffect(() => {
    animatebio();
    setTimeout(() => {
      setMenu(true);
      animatemenu();
    }, 7000);
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
                <Link to="/web">Web development</Link>
              </p>
              <img className={styles.web} src={Webhomeimg} alt="web" />
              <div className={styles.fade}></div>
            </div>

            <div className={styles.containerbox}>
              <p>
                <Link to="/mobile">mobile development</Link>
              </p>
              <img className={styles.mobile} src={Mobilehomeimg} alt="mobile" />
              <div className={styles.fade}></div>
            </div>

            <div className={styles.containerbox}>
              <p>
                <Link to="/product">Product designing</Link>
              </p>

              <img
                className={styles.product}
                src={Producthomeimg}
                alt="Product"
              />
              <div className={styles.fade}></div>
            </div>

            <div className={styles.containerbox}>
              <p>
                <Link to="/devops">Devops engineering</Link>
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
