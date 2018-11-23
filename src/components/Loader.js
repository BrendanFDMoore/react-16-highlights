import React from 'react';

const Loader = () => (
  <img className="loader-spinner" src={require("file-loader!./loader.gif")} alt="Loading"/>
);

export default Loader;
