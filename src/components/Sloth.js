import React from 'react';

class Sloth extends React.Component{
  render() {
    return (
      <div>
        <h3>Sloth!</h3>
        <span>I'm kinda slow.</span>
      </div>
    );
  }
}

// const Sloth = () => new Promise((resolve, reject) => {
//   setTimeout(() => resolve(Sloth), 2000);
// });

// module.exports = new Promise((resolve) => {
//   setTimeout(() => resolve(Sloth, 2000));
// });

export default Sloth;

// export default new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ default: Sloth}), 2000);
// });

// export default new Promise((resolve, reject) => {
//   setTimeout(() => resolve(Sloth), 2000);
// });

// module.exports = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('timeout fires');
//     console.log({Sloth});
//     // resolve({ default: Sloth})
//     resolve(Sloth)
//   }, 2000);
// });
