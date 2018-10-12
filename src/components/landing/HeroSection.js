import React from 'react';

const HeroSection = props => {
  return (
    <div className="container" id="hero">
      <div className="row">
        <div className="col-sm-12 text-center avatar">
          <img src="assets/avatar.png" alt="avatar" />
          <h1 className="display-4">Front-end Developer & Designer</h1>
          <h4 className="text-primary">
            Passion for creating and fixing stuff <br />
            **under construction
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
