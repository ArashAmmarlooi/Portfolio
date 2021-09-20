import React from "react";
import styles from "../assets/__technology.scss"


const Devops = () => {
  return (
    <>
      <div className={styles.divBar}>
        <p>Source & version Control (GitHub ,GitLab )</p>
        <div className={styles.divSpan}>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.divBar}>
        <p>Linux (bash, scipting, debugging, tuning)</p>
        <div className={styles.divSpan}>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.divBar}>
        <p>Jira environment </p>
        <div className={styles.divSpan}>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span></span>
        </div>
      </div>

      <div className={styles.divBar}>
        <p>Web servers (apache, nginx)</p>
        <div className={styles.divSpan}>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.divBar}>
        <p>SSh (secure shell protocol) </p>
        <div className={styles.divSpan}>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.divBar}>
        <p>Ftp ( file transfer protocol )</p>
        <div className={styles.divSpan}>
          <span style={{background:"#628cf0"}}></span>
          <span style={{background:"#628cf0"}}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </>
  );
};

export default Devops;
