import React from 'react';

const Container = props => {
  return (
    <div id={props.section} className="pt-5 pb-5 mt-5">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
