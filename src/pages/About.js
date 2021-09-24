import React from "react";
import Navmenu from "../components/Navmenu";
import {Link} from "react-router-dom"
import styles from "../assets/__layout.scss";
import "../assets/__layout.scss";
import "../assets/__services.scss";
import Email from "../files/Email.svg"
import Phone from "../files/Phone.svg"
import Linkedin from "../files/linkedin.svg"

const About = () => {
  return (
    <>
      <div className={styles.aboutwrraper}>
        <div className={styles.aboutcontainer}>
          <p>
            I am a full stack web & mobile applcation developer & designer . I
            have worked for about 5 years in web and mobile application
            engineering & i have exprience in developing and managing Different
            web and mobile apps . in this case i have knowledge about
            implementing the code with javascript (react js , nodejs) and
            varoius tehcnologies related to web and mobile developing . also
            experienced in designing superb user interfaces for any kind of
            software system. dou to design and develop various computer software
            applications, such as mobile apps and websites, and web applications
            . i have a great deal of creativity and speed in the field of design
            and implementing various algorithms for implementing the code . due
            to the the passion and interesting in working with great companies
            and also great teams. i like to be in part of path of the company
            progression and advantage, and also I am really enthusiastic in
            working with software companies and professional developing teams
            and computer Programmers .
          </p>
        </div>

        <div className={styles.contactwrraper}>
        <div className={styles.contactcontainer}>
          <div className={styles.phone}>
          <img src={Phone}/>
          <span>
            <p>+98 (903) 111 63 18</p>
            <p>+1 (514) 804 46 90 </p>
            </span>
          </div>
          <div className={styles.email}>
            <img src={Email}/>
            <a href="mailto:arashammarlooi@hotmail.com">arashammarlooi@hotmail.com</a>
          </div>
          <div className={styles.linkedin}>
            <img src={Linkedin}/>
            <a href="https://www.linkedin.com/in/arash-ammarlooi-12372b147/">https://www.linkedin.com/in/arash-ammarlooi-12372b147/</a>
          </div>
        </div>
        </div>
        {/* <div className="footer">Developed and deisgned by Arash Ammarlooi</div> */}
      </div>
    </>
  );
};

export default About;
