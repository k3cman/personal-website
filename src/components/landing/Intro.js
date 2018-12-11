import React, { Fragment } from "react";
import CodeIcon from "../../assets/svg/code.png";
import MobileIcon from "../../assets/svg/smartphone.png";
import EditIcon from "../../assets/svg/edit.png";
import CloudIcon from "../../assets/svg/cloud.png";
import DatabaseIcon from "../../assets/svg/database.png";
import TerminalIcon from "../../assets/svg/terminal.png";

const Intro = props => {
  return (
    <Fragment>
      <div className="col-12 pb-5 mb-5 head-title">
        <h1 style={{ marginTop: null }}>WHAT I DO</h1>
        <h4 className="text-primary">{`{*/ things I enjoy working on /*}`}</h4>
      </div>
      <div
        id="wid-item"
        className="col-sm-12 col-md-4 text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img src={CodeIcon} />
        <h5 style={{ marginTop: "25px", width: "150px" }}>
          Web Application Developement
        </h5>
        <p style={{ fontSize: "0.8em", width: "250px" }}>
          Responsive, optimized apps built with current web trends best
          practices.
        </p>
      </div>
      <div
        id="wid-item"
        className="col-sm-12 col-md-4 text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img src={MobileIcon} />
        <h5 style={{ marginTop: "25px", width: "150px" }}>
          Mobile Application Developement
        </h5>
        <p style={{ fontSize: "0.8em", width: "250px" }}>
          Cross-platform apps built with ease focusing on user experience.
        </p>
      </div>
      <div
        id="wid-item"
        className="col-sm-12 col-md-4 text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img src={EditIcon} />
        <h5 style={{ marginTop: "25px", width: "150px" }}>
          Graphic/Web Design
        </h5>
        <p style={{ fontSize: "0.8em", width: "250px" }}>
          Clean, design that has purpouse and function.
        </p>
      </div>
      <div
        id="wid-item"
        className="col-sm-12 col-md-4 text-center mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img src={CloudIcon} />
        <h5 style={{ marginTop: "25px", width: "150px" }}>Cloud Integration</h5>
        <p style={{ fontSize: "0.8em", width: "250px" }}>
          Deployment of NodeJs,ReactJs apps and databases to leading cloud
          platforms like AWS,Heroku DigitalOcean.
        </p>
      </div>
      <div
        id="wid-item"
        className="col-sm-12 col-md-4 text-center mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img src={DatabaseIcon} />
        <h5 style={{ marginTop: "25px", width: "150px" }}>Database design</h5>
        <p style={{ fontSize: "0.8em", width: "250px" }}>
          Database architecture in MySQL or MongoDB, fast migration and aiming
          for best performances.
        </p>
      </div>
      <div
        id="wid-item"
        className="col-sm-12 col-md-4 text-center mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <img src={TerminalIcon} />
        <h5 style={{ marginTop: "25px", width: "150px" }}>
          API integration & developement
        </h5>
        <p style={{ fontSize: "0.8em", width: "250px" }}>
          Rest API integration, and development with NodeJs and Express.
        </p>
      </div>
    </Fragment>
  );
};

export default Intro;
