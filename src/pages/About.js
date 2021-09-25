import React from "react";
import Navmenu from "../components/Navmenu";
import { Link } from "react-router-dom";
import styles from "../assets/__layout.scss";
import "../assets/__layout.scss";
import "../assets/__services.scss";

const About = () => {
  return (
    <>
      <div className={styles.aboutwrraper}>
        <div className={styles.aboutcontainer}>
          <p>
            I am a full stack web & mobile application developer & designer . I
            have worked for about 5 years in web and mobile application
            engineering & i have exprience in developing and managing Different
            web and mobile apps . in this case i have knowledge about
            implementing the code with javascript (react js , nodejs) and
            varoius tehcnologies related to web and mobile developing . also
            experienced in designing superb user interfaces for any kind of
            software system. dou to design and develop various computer software
            applications, such as mobile apps and websites, and web applications
            , i have a great deal of creativity and speed in the field of design
            and implementing easy & clean algorithms for implementing the code .
            also i have so much willingnes and interested in working with great
            companies and also great teams. i like to be in part of path of the
            company progression and advantage, and also I am a kind of
            hardworking, committed, responsible, peace-loving, and a regular person 
            and also passionate for working in the field of software design.
          </p>
        </div>
        {/* <div className="footer">Developed and deisgned by Arash Ammarlooi</div> */}
      </div>
    </>
  );
};

export default About;
