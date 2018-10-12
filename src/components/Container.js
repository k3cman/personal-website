import React from 'react';

const Container = props => {
  return (
    <div id={props.section}>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
