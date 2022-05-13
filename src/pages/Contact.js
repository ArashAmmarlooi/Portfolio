import React from "react";
import Navmenu from "../components/Navmenu";
import { Link } from "react-router-dom";
import styles from "../assets/__Contact.scss";
import Email from "../files/Email.svg";
import Phone from "../files/Phone.svg";
import Linkedin from "../files/linkedin.svg";
import Contactsvg from "../files/contactsvg.svg";

const Contact = () => {
  return (
    <>
      <div className={styles.contactwrraper}>
        <div className={styles.contactcontainer}>
          <div className={styles.contactbox}>
            <div className={styles.phone}>
              <img src={Phone} />
              <span>
                <p>+98 912 802 46 90</p>
                <p>+98 936 252 61 39</p>
                <p>refreence number : +1 514 804 46 90</p>
                <p>skype : arashammarlooi_1</p>
              </span>
            </div>
            <div className={styles.email}>
              <img src={Email} />
              <a href="mailto:arashammarlooi@hotmail.com">
                arashammarlooi@hotmail.com
              </a>
            </div>
            <div className={styles.linkedin}>
              <img src={Linkedin} />
              <a href="https://www.linkedin.com/in/arash-ammarlooi-12372b147/">
              https://www.linkedin.com/in/arash-ammarlooi-12372b147/
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactsvgcontainer}>
          <img src={Contactsvg} />
        </div>
      </div>
    </>
  );
};

export default Contact;
