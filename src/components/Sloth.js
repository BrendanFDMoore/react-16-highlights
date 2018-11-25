import React from 'react';

const Sloth = () => {
  console.log('Sloth lag start');
  let sum = 0;
  const max = 2000000000; // 2,000,000,000
  for (let i=0; i<max;i++) {
    sum+= i*i;
  }
  console.log('Sloth lag end:', sum);
  return (
    <div>
      <h3>Sloth!</h3>
      <span>I'm kinda slow.</span>
    </div>
  );
}

export default Sloth;
