import React from 'react';

const Contact = props => {
  return (
    <div className="text-light text-center col-12 pt-3">
      <h2>Social networks</h2>

      <a className="iconContact" href="https://www.linkedin.com/in/k3cman/">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            id="linkedin"
            className="svglight"
            d="M6.06,20.81h-5v-13h5ZM3.5,5.73A2.46,2.46,0,1,1,6,3.27,2.45,2.45,0,0,1,3.5,5.73ZM21.06,20.81h-4v-7c0-1.92-.84-3-2.36-3s-2.64,1.12-2.64,3v7h-4v-13h4V9.27a4.84,4.84,0,0,1,4.09-2.2c2.82,0,4.91,1.73,4.91,5.3Z"
            transform="translate(-1.06 -0.81)"
          />
        </svg>
      </a>
      <a className="iconContact" href="http://github.com/k3cman">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          height="30"
          width="30"
        >
          <title>Github</title>
          <path
            id="github"
            className="svglight"
            d="M10.79,1.09a10.12,10.12,0,0,1,10,10.25A10.24,10.24,0,0,1,14,21.07c-.5.1-.68-.22-.68-.49s0-1.45,0-2.82a2.5,2.5,0,0,0-.68-1.9c2.23-.25,4.56-1.12,4.56-5a4,4,0,0,0-1-2.76,3.81,3.81,0,0,0-.1-2.71s-.84-.28-2.75,1a9.4,9.4,0,0,0-5,0c-1.91-1.33-2.75-1-2.75-1a3.81,3.81,0,0,0-.1,2.71,4,4,0,0,0-1,2.76c0,3.92,2.34,4.8,4.56,5.06a2.15,2.15,0,0,0-.63,1.37,2.09,2.09,0,0,1-2.91-.85,2.13,2.13,0,0,0-1.54-1.06s-1,0-.07.63a2.65,2.65,0,0,1,1.11,1.5s.59,1.83,3.37,1.21c0,.85,0,1.66,0,1.91s-.19.58-.69.49A10.25,10.25,0,0,1,.79,11.34a10.13,10.13,0,0,1,10-10.25"
            transform="translate(-0.79 -1.09)"
          />
        </svg>
      </a>
      <a
        className="iconContact"
        href="https://www.behance.net/kecman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          id="Layer_1"
          className="svglight"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.09 17.68"
        >
          <title>behance</title>
          <path
            id="behance"
            d="M9.23,5.87c3.33,0,5.64,1.06,5.64,4.38a3.78,3.78,0,0,1-2.4,3.69,4.28,4.28,0,0,1,3.24,4.48c0,3.47-2.84,5.13-6.24,5.13H.91V5.87ZM8.73,13c1.41,0,2.38-.63,2.38-2.1s-1.13-2-2.68-2H4.79V13ZM9,20.53c1.69,0,2.88-.63,2.88-2.33S10.78,15.67,9,15.67H4.79v4.85Zm13.93.39a2.88,2.88,0,0,0,2.78-1.66h3.09c-.88,2.75-2.71,4.29-6,4.29-4.19,0-6.54-2.89-6.54-6.71,0-9,13.43-9.34,12.76.84H19.74C19.83,19.74,20.71,20.92,22.88,20.92Zm-.22-8.19a2.74,2.74,0,0,0-2.92,2.72h5.72C25.07,13.35,24.11,12.73,22.66,12.73Zm-3.52-6h7.15v2H19.14Z"
            transform="translate(-0.91 -5.87)"
          />
        </svg>
      </a>
      <h4 className="pt-3 pb-5" style={{ paddingBottom: '30px' }}>
        Or send me an{' '}
        <a href="mailto:kecman.design@gmail.com" className="text-light">
          <u>email</u>
        </a>
        .
      </h4>
      <small className="text-light"> &copy; kecman.xyz 2018</small>
    </div>
  );
};

export default Contact;
