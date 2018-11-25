import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Goblin from './Goblin';


const Angel = () => (
  <div>I'm a perfect innocent component 👼</div>
);

const Bystander = () => (
  <div>I'm outside the error boundary 😎</div>
);

export default () => (
  <div>
    <Bystander />
    <ErrorBoundary>
      <Angel />
      <Goblin />
    </ErrorBoundary>
  </div>
);