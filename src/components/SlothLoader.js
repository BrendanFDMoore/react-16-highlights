import Sloth from './Sloth';

export default new Promise((resolve) => {
  setTimeout(() => resolve(Sloth), 2000);
});
