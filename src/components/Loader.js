import React from 'react';

const Loader = () => (
  <img src={require("file-loader!../images/loader.gif")} alt="Loading"/>
);

export default Loader;
