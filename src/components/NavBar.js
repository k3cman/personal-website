import React from "react";
import { FaBars } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = props => {
  return (
    <div className="row">
      <nav className="container navbar navbar-expand-lg bg-light fixed-top">
        <a className="navbar-brand" href="/">
          <img src="assets/logo.png" height="40" alt="Kecman.xyz" />
        </a>
        <button
          style={{ background: "none", border: "none", color: "black" }}
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <AnchorLink className="nav-link active-nav" href="#what-i-do">
                What I do
              </AnchorLink>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link disabled" href="#inactive">
                /
              </a>
            </li>

            <li className="nav-item">
              <AnchorLink className="nav-link active-nav" href="#portfolio">
                Portfolio
              </AnchorLink>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link disabled" href="#inactive">
                /
              </a>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link active-nav" href="#about-me">
                About me
              </AnchorLink>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link disabled" href="#inactive">
                /
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#inactive">
                /
              </a>
            </li> */}
            <li className="nav-item">
              <AnchorLink className="nav-link active-nav" href="#contact">
                Get in touch
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
