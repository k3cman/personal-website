import React, { Component, Fragment } from 'react';

const project1 = ['assets/dash.png'];
export default class ProjectsSection extends Component {
  render() {
    return (
      <Fragment>
        <span className="hr" />
        <div className="col-12 text-center head-title">
          <h2>Current projects</h2>
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <h4>E-Commerce Dashboard</h4>
          <img src="assets/dashthumb.png" />
          <p class="text-left">
            App for task automatization and order statistics, with data from sql
            table
          </p>
          <p className="text-primary">React/Redux/Node/Express</p>
          <a href="http://github.com/k3cman/order-tracker" target="_blank">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="30"
              width="30"
            >
              <title>Untitled-1</title>
              <path
                id="github"
                d="M10.79,1.09a10.12,10.12,0,0,1,10,10.25A10.24,10.24,0,0,1,14,21.07c-.5.1-.68-.22-.68-.49s0-1.45,0-2.82a2.5,2.5,0,0,0-.68-1.9c2.23-.25,4.56-1.12,4.56-5a4,4,0,0,0-1-2.76,3.81,3.81,0,0,0-.1-2.71s-.84-.28-2.75,1a9.4,9.4,0,0,0-5,0c-1.91-1.33-2.75-1-2.75-1a3.81,3.81,0,0,0-.1,2.71,4,4,0,0,0-1,2.76c0,3.92,2.34,4.8,4.56,5.06a2.15,2.15,0,0,0-.63,1.37,2.09,2.09,0,0,1-2.91-.85,2.13,2.13,0,0,0-1.54-1.06s-1,0-.07.63a2.65,2.65,0,0,1,1.11,1.5s.59,1.83,3.37,1.21c0,.85,0,1.66,0,1.91s-.19.58-.69.49A10.25,10.25,0,0,1,.79,11.34a10.13,10.13,0,0,1,10-10.25"
                transform="translate(-0.79 -1.09)"
              />
            </svg>
          </a>
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <h4>Job market</h4>
          <img
            onClick={() => this.setState({ lightboxIsOpen: true })}
            src="assets/jobthumb.png"
          />
          <p className="text-left">
            Job portal for showing company open jobs with apply funcionality and
            dashboard
          </p>
          <p className="text-primary">React/Redux/Slate/Node/Express</p>
          <a href="http://github.com/k3cman/job-portal" target="_blank">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="30"
              width="30"
            >
              <title>Untitled-1</title>
              <path
                id="github"
                d="M10.79,1.09a10.12,10.12,0,0,1,10,10.25A10.24,10.24,0,0,1,14,21.07c-.5.1-.68-.22-.68-.49s0-1.45,0-2.82a2.5,2.5,0,0,0-.68-1.9c2.23-.25,4.56-1.12,4.56-5a4,4,0,0,0-1-2.76,3.81,3.81,0,0,0-.1-2.71s-.84-.28-2.75,1a9.4,9.4,0,0,0-5,0c-1.91-1.33-2.75-1-2.75-1a3.81,3.81,0,0,0-.1,2.71,4,4,0,0,0-1,2.76c0,3.92,2.34,4.8,4.56,5.06a2.15,2.15,0,0,0-.63,1.37,2.09,2.09,0,0,1-2.91-.85,2.13,2.13,0,0,0-1.54-1.06s-1,0-.07.63a2.65,2.65,0,0,1,1.11,1.5s.59,1.83,3.37,1.21c0,.85,0,1.66,0,1.91s-.19.58-.69.49A10.25,10.25,0,0,1,.79,11.34a10.13,10.13,0,0,1,10-10.25"
                transform="translate(-0.79 -1.09)"
              />
            </svg>
          </a>
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <h4>Product catalogue</h4>
          <img src="assets/mobilethumb.png" />
          <p className="text-left">
            Mobile App that is designed to replace printed catalogue, with all
            product details and utilities
          </p>
          <p className="text-primary">React/React-Native/Redux/Node</p>
          <a href="http://github.com/k3cman/catalogue" target="_blank">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="30"
              width="30"
            >
              <title>Untitled-1</title>
              <path
                id="github"
                d="M10.79,1.09a10.12,10.12,0,0,1,10,10.25A10.24,10.24,0,0,1,14,21.07c-.5.1-.68-.22-.68-.49s0-1.45,0-2.82a2.5,2.5,0,0,0-.68-1.9c2.23-.25,4.56-1.12,4.56-5a4,4,0,0,0-1-2.76,3.81,3.81,0,0,0-.1-2.71s-.84-.28-2.75,1a9.4,9.4,0,0,0-5,0c-1.91-1.33-2.75-1-2.75-1a3.81,3.81,0,0,0-.1,2.71,4,4,0,0,0-1,2.76c0,3.92,2.34,4.8,4.56,5.06a2.15,2.15,0,0,0-.63,1.37,2.09,2.09,0,0,1-2.91-.85,2.13,2.13,0,0,0-1.54-1.06s-1,0-.07.63a2.65,2.65,0,0,1,1.11,1.5s.59,1.83,3.37,1.21c0,.85,0,1.66,0,1.91s-.19.58-.69.49A10.25,10.25,0,0,1,.79,11.34a10.13,10.13,0,0,1,10-10.25"
                transform="translate(-0.79 -1.09)"
              />
            </svg>
          </a>
        </div>
        <div className="col-12 text-center head-title ">
          <h2>Landing Pages</h2>
        </div>
        <div className="pb-5" />
        <div className="col-sm-12 col-md-4 text-center">
          <h4>International page</h4>
          <img src="assets/intl.png" />
          <p className="text-left">
            International page for showing available languages
          </p>
          <p className="text-primary">Custom HTML/CSS/SASS/JavaScript</p>
          <a
            className="btn btn-outline-primary"
            href="http://intl.enmongroup.com"
          >
            Visit
          </a>
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <h4>Company coming soon</h4>
          <img src="assets/laceramicathumb.png" />
          <p className="text-left">
            Coming soon landing page for upcoming company site.
          </p>
          <p className="text-primary">Bootstrap/SASS</p>
          <a className="btn btn-outline-primary" href="http://laceramica.co">
            Visit
          </a>
        </div>
        <div className="col-sm-12 col-md-4 text-center pb-5">
          <h4>Russian Landing Page</h4>
          <img src="assets/ru.png" />
          <p className="text-left">
            Showcase of companys department for Russia
          </p>
          <p className="text-primary">Bootstrap 4 / SASS</p>
          <a
            className="btn btn-outline-primary"
            href="http://ru.enmongroup.com"
          >
            Visit
          </a>
        </div>
      </Fragment>
    );
  }
}
