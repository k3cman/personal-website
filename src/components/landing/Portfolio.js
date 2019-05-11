import React, {
  Fragment
} from "react";

//images
import enmIntl from "../../assets/projects/enmIntl.jpg";
import enmRu from "../../assets/projects/enmRu.jpg";
import mobile from "../../assets/projects/mobile.jpg";
import jobs from "../../assets/projects/jobs.jpg";
import productInfo from "../../assets/projects/productInfo.jpg";
import email from "../../assets/projects/email.jpg";

import {
  GoMarkGithub,
  GoPlug
} from "react-icons/go";

function Portfolio() {
  return ( <
    Fragment >
    <
    div className = "col-12 pb-5 mb-5 head-title" >
    <
    h1 style = {
      {
        marginTop: null
      }
    } > PORTFOLIO < /h1> <
    h4 className = "text-primary" > {
      `{/* latest projects */}`
    } < /h4> < /
    div > <
    div className = "col-sm-12 col-md-4" >
    <
    div className = "card mb-4 bg-light pt-2"
    style = {
      {
        background: null
      }
    } >
    <
    img className = "card-img-top"
    alt = "project thumbnail"
    src = {
      enmIntl
    }
    /> <
    div className = "card-body" >
    <
    h5 className = "card-title" > International Landing Page < /h5> <
    p className = "card-text text-primary" > HTML / SASS / BOOTSTRAP 4 < /p> <
    div style = {
      {
        display: "flex",
        justifyContent: "space-around"
      }
    } >
    <
    a href = "https://github.com/k3cman/ENM-PROJECTS/tree/master/international-page" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    GitHub < GoMarkGithub / >
    <
    /button> < /
    a > <
    a href = "http://intl.enmongroup.com" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    Demo < GoPlug / >
    <
    /button> < /
    a > <
    /div> < /
    div > <
    /div> < /
    div > <
    div className = "col-sm-12 col-md-4" >
    <
    div className = "card mb-4 bg-light pt-2"
    style = {
      {
        background: null
      }
    } >
    <
    img className = "card-img-top"
    alt = "project thumbnail"
    src = {
      productInfo
    }
    /> <
    div className = "card-body" >
    <
    h5 className = "card-title text-center"
    style = {
      {
        paddingBottom: "20px"
      }
    } >
    Products Info <
    /h5> <
    p className = "card-text text-primary" >
    React / Redux / Node / Express / MySql <
    /p> <
    div style = {
      {
        display: "flex",
        justifyContent: "space-around"
      }
    } >
    <
    a href = "https://github.com/k3cman/MERN-items-info" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    GitHub < GoMarkGithub / >
    <
    /button> < /
    a > <
    a href = "http://apps.enmongroup.com" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    Demo < GoPlug / >
    <
    /button> < /
    a > <
    /div> < /
    div > <
    /div> < /
    div >

    <
    div className = "col-sm-12 col-md-4" >
    <
    div className = "card mb-4 bg-light pt-2"
    style = {
      {
        background: null
      }
    } >
    <
    img className = "card-img-top"
    alt = "project thumbnail"
    src = {
      mobile
    }
    /> <
    div className = "card-body" >
    <
    h5 className = "card-title text-center" >
    Catalogue Mobile Application <
    /h5> <
    p className = "card-text text-primary" > ReactNative / NodeJs / Express < /p> <
    div style = {
      {
        display: "flex",
        justifyContent: "space-around"
      }
    } >
    <
    a href = "https://github.com/k3cman/ReactNative-Catalogue" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary mt-3" >
    GitHub < GoMarkGithub / >
    <
    /button> < /
    a > <
    a href = "https://expo.io/@k3cman/expo-app" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    Demo < GoPlug / >
    <
    /button> < /
    a > <
    /div> < /
    div > <
    /div> < /
    div > <
    div className = "col-sm-12 col-md-4" >
    <
    div className = "card mb-4 bg-light pt-2"
    style = {
      {
        background: null
      }
    } >
    <
    img className = "card-img-top"
    alt = "project thumbnail"
    src = {
      email
    }
    /> <
    div className = "card-body" >
    <
    h5 className = "card-title text-center" > Email Newsletter Builder < /h5> <
    p className = "card-text text-primary" >
    React / SlateJs / Node / Express / MySql <
    /p> <
    div style = {
      {
        display: "flex",
        justifyContent: "space-around"
      }
    } >
    <
    a href = "https://github.com/k3cman/React-Slate-Email-Newsletter-Generator" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    GitHub < GoMarkGithub / >
    <
    /button> < /
    a > <
    a href = "https://dashboard.heroku.com/apps/email-newsletter-generator" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    Demo < GoPlug / >
    <
    /button> < /
    a > <
    /div> < /
    div > <
    /div> < /
    div > <
    div className = "col-sm-12 col-md-4" >
    <
    div className = "card mb-4 bg-light pt-2"
    style = {
      {
        background: null
      }
    } >
    <
    img className = "card-img-top"
    alt = "project thumbnail"
    src = {
      jobs
    }
    /> <
    div className = "card-body" >
    <
    h5 className = "card-title text-center" > Job Portal < /h5> <
    p className = "card-text text-primary" >
    React / Redux / Node / Express / MySql <
    /p> <
    div style = {
      {
        display: "flex",
        justifyContent: "space-around"
      }
    } >
    <
    a href = "https://github.com/k3cman/MERN-job-portal" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    GitHub < GoMarkGithub / >
    <
    /button> < /
    a >

    <
    /div> < /
    div > <
    /div> < /
    div >

    <
    div className = "col-sm-12 col-md-4" >
    <
    div className = "card mb-4 bg-light pt-2"
    style = {
      {
        background: null
      }
    } >
    <
    img className = "card-img-top"
    alt = "project thumbnail"
    src = {
      enmRu
    }
    /> <
    div className = "card-body" >
    <
    h5 className = "card-title text-center" > Russian Landing Page < /h5> <
    p className = "card-text text-primary" > HTML / SASS / BOOTSTRAP 4 < /p> <
    div style = {
      {
        display: "flex",
        justifyContent: "space-around"
      }
    } >
    <
    a className = "mt-3"
    href = "http://ru.enmongroup.com" >
    <
    button type = "button"
    className = "btn btn-sm btn-outline-primary" >
    Demo < GoPlug / >
    <
    /button> < /
    a > <
    /div> < /
    div > <
    /div> < /
    div > <
    /Fragment>
  );
}

export default Portfolio;