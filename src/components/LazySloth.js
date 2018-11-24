import React, { lazy } from 'react';
import Sloth from './Sloth';

const timeout = ms => new Promise(res => setTimeout(res, ms));

const LazySloth = () => {
  const LazySloth = lazy(async () => {
    await timeout(100);
    return ({default: () => (<Sloth />)})
  });

  return (<LazySloth />);
}

export default LazySloth;
