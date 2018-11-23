import React, { lazy } from 'react';

const timeout = ms => new Promise(res => setTimeout(res, ms));

const Sloth = () => {
  return (
    <div>
      <h3>Sloth!</h3>
      <span>I'm kinda slow.</span>
    </div>
  );
}

const LazySloth = () => {
  const LazySloth = lazy(async () => {
    await timeout(3000);
    return ({default: () => (<Sloth />)})
  });

  return (<LazySloth />);
}

export default LazySloth;
