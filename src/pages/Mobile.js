import React, { useEffect } from "react";
import Mobile1 from "../files/mobile1.svg";
import Mobile2 from "../files/mobile2.svg";
// const autoslide = require("../utils/javascript");
import * as Utils from '../utils/javascript';
import "../assets/__layout.scss";
import "../assets/__services.scss";

const Mobile = () => {

  useEffect(() => {
    const images = document.querySelectorAll(".mobilesvg");
    Utils.autoSlide(images);
  }, []);
  return (
    <>
        <div className="maincontainer">
          <div className="leftcontainer">
            <div className="description">
              <p>Proficient in Javascript, React native</p>
              <p>
                Keen understanding of mobile application UI/UX design system
              </p>
              <p>
                Building and scaffolding mid-to-large scale web applications
                with React native , Styled components
              </p>
              <p>
                Building and scaffolding mid-to-large scale web applications
                with Reactjs & React native , Typescript
              </p>
              <p>
                Have a little background of java in order to use in react native
                with android modules bridges
              </p>
            </div>
          </div>

          <div className="rightcontainer">
            <img src={Mobile1} className="mobilesvg" />
            <img src={Mobile2} className="mobilesvg" />
          </div>
        </div>
        {/* <div className="footer">Developed and deisgned by Arash Ammarlooi</div> */}
    </>
  );
};

export default Mobile;
