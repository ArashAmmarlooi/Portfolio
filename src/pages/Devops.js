import React from "react";
import Navmenu from "../components/Navmenu";
import styles from "../assets/__layout.scss";
import Devopssvg from "../files/devopssvg.svg";
import "../assets/__layout.scss";
import "../assets/__services.scss";



const Devops = () => {
  return (
    <>
        <div className="maincontainer">
          <div className="leftcontainer">
            <div className="description">
              <p>
                Experience with Scrum system & task management tools like jira ,
                click up , wrike , Monday & Kanban flow
              </p>
              <p>
                Experience working in an agile environment ( planning sprints ,
                burndown charts )Agile methodology includes research, analysis,
                project management, design, programming, implementation,
                adaptation and maintenance. and working well with
                cross-functional teams
              </p>
              <p>
                Experience with architecting environments for deployment , Build
                , Test & production environment , hosting , ip configs , ftp ,
                ssh & web server management tools
              </p>
              <p>
                Background in continuous integration & Delivery (CI/CD) with git
                lab Confluence
              </p>
            </div>
          </div>

          <div className="rightcontainer">
            <img src={Devopssvg} className="devopssvg" />
          </div>
        {/* <div className="footer">
        Developed and deisgned by Arash Ammarlooi
      </div> */}
        </div>
    </>
  );
};

export default Devops;
