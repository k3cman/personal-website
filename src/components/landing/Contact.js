import React from 'react';

const Contact = props => {
  return (
    <div className="text-light text-center col-12 pt-3">
      <h2>Contact</h2>

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
          <title>Untitled-1</title>
          <path
            id="github"
            className="svglight"
            d="M10.79,1.09a10.12,10.12,0,0,1,10,10.25A10.24,10.24,0,0,1,14,21.07c-.5.1-.68-.22-.68-.49s0-1.45,0-2.82a2.5,2.5,0,0,0-.68-1.9c2.23-.25,4.56-1.12,4.56-5a4,4,0,0,0-1-2.76,3.81,3.81,0,0,0-.1-2.71s-.84-.28-2.75,1a9.4,9.4,0,0,0-5,0c-1.91-1.33-2.75-1-2.75-1a3.81,3.81,0,0,0-.1,2.71,4,4,0,0,0-1,2.76c0,3.92,2.34,4.8,4.56,5.06a2.15,2.15,0,0,0-.63,1.37,2.09,2.09,0,0,1-2.91-.85,2.13,2.13,0,0,0-1.54-1.06s-1,0-.07.63a2.65,2.65,0,0,1,1.11,1.5s.59,1.83,3.37,1.21c0,.85,0,1.66,0,1.91s-.19.58-.69.49A10.25,10.25,0,0,1,.79,11.34a10.13,10.13,0,0,1,10-10.25"
            transform="translate(-0.79 -1.09)"
          />
        </svg>
      </a>
      <h4 className="pt-3">
        Or send me an{' '}
        <a href="mailto:kecman.design@gmail.com" className="text-light">
          <u>email</u>
        </a>
        .
      </h4>
    </div>
  );
};

export default Contact;
