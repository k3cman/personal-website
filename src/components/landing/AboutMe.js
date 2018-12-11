import React, { Fragment } from "react";
import myFace from "../../assets/svg/myface.png";
import html5logo from "../../assets/logos/html5.png";
import css3logo from "../../assets/logos/css3.png";
import jslogo from "../../assets/logos/javascript.jpg";
import bootstraplogo from "../../assets/logos/bootstrap.svg";
import reactlogo from "../../assets/logos/react.png";
import rnlogo from "../../assets/logos/rn.png";
import reduxlogo from "../../assets/logos/redux.png";
import materialLogo from "../../assets/logos/material-ui-logo.svg";
import nodeJs from "../../assets/logos/node.png";
import expressLogo from "../../assets/logos/express.png";
import restify from "../../assets/logos/restify.png";
import mongodb from "../../assets/logos/mongo.png";
import mysql from "../../assets/logos/mysql.png";
import digitalocean from "../../assets/logos/digitalocean.png";
import aws from "../../assets/logos/aws.png";
import heroku from "../../assets/logos/heroku.png";
import firebase from "../../assets/logos/firebase.png";

function AboutMe() {
  return (
    <Fragment>
      <div className="col-12 head-title">
        <h1 style={{ marginTop: null }}>ABOUT ME</h1>
        <h4 className="text-primary">{`{/* brace for impact */}`}</h4>
        <img src={myFace} className="mt-4 mb-4" />
        <h3>Nemanja Kecman</h3>
        <h5>ReactJs | ReactNative | NodeJs</h5>
        <p>TODO ICONS</p>
        <p>Hi there! I'm Front-end developer specialized in ReactJs.</p>
        <p>
          {" "}
          I've always had a passion for technology and product development, and
          espetialy for solving problems - even before becoming a developer.
          Having worn many hats in my career between business development,
          marketing management, 3D vizuelization, graphic design mostly for
          ceramic tile comapnys in Serbia, right now I'm trying to modernize the
          field by creating apps for the biggest tile retailer in the country. I
          use my experience to be more than just a coder, and I'm trying to at
          the same time think as UX designer, marketing specialist with
          customers needs and habits on mind.
        </p>{" "}
        <p>
          {" "}
          Because I'm a self taught, and perfectionist in some ways, I couldn't
          do things with free APIs for practice, so I learned to create Servers
          with Node. That being said I still consider myself more of a visual
          type (Front End) thand FullStack developer.
        </p>
        <p>Bellow you will find list of my skills:</p>
        <h3>FRONT END</h3>
      </div>
      <div className="col-sm-6 col-md-2 offset-md-2  mt-5 text-center">
        <img src={html5logo} />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={css3logo} height="128px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={jslogo} height="128px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={bootstraplogo} height="128px" />
      </div>
      <div className="col-sm-6 col-md-2 offset-md-2 mt-5 text-center">
        <img src={reactlogo} height="128px" />
      </div>

      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={rnlogo} height="128px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={reduxlogo} height="128px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={materialLogo} height="110px" />
      </div>
      <div className="col-12 head-title">
        <h3>BACK END</h3>
      </div>
      <div className="col-sm-6 col-md-3 offset-md-2 mt-5 text-center">
        <img src={nodeJs} height="110px" />
      </div>
      <div className="col-sm-6 col-md-3  mt-5 text-center">
        <img src={expressLogo} height="110px" />
      </div>
      <div className="col-sm-6 col-md-3  mt-5 text-center mr-5 pr-5">
        <img src={restify} height="110px" />
      </div>
      <div className="col-12 head-title">
        <h3>DATABASES/CLOUD SERVICES</h3>
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={mongodb} height="110px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={mysql} height="110px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={digitalocean} height="110px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={heroku} height="110px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={aws} height="110px" />
      </div>
      <div className="col-sm-6 col-md-2  mt-5 text-center">
        <img src={firebase} height="110px" />
      </div>
    </Fragment>
  );
}

export default AboutMe;
