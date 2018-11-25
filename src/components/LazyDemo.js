import React, { lazy, Suspense } from 'react';
import Loader from './Loader';
import Sloth from './Sloth';
const LazySloth = lazy(() => import('./LazySloth'));

class LazyDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, lazy: false };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleLazy = this.toggleLazy.bind(this);
  }
  toggleShow() {
    this.setState({ show: !this.state.show })
  }
  toggleLazy() {
    this.setState({ lazy: !this.state.lazy })
  }
  render() {
    const { show, lazy } = this.state;
    return (
      <div>
        <span>{`Lazy is ${lazy ? 'ON' : 'OFF'}`}</span>
        <br />
        <button onClick={this.toggleLazy} type='button'>
          {lazy ? 'Turn Off Lazy' : 'Turn On Lazy'}
        </button>
        <br />
        <br />
        <span>{`Sloth is ${show ? 'SHOWING' : 'HIDDEN'}`}</span>
        <br />
        <button onClick={this.toggleShow} type='button'>
          {show ? 'Hide Sloth' : 'Show Sloth'}
        </button>
        <br />
        <Suspense fallback={<Loader />}>
        {
          show 
          ? ( lazy ? <LazySloth /> : <Sloth />)
          : <span>No sloth 😢</span>
        }
        </Suspense>
      </div>
    )
  }
}

export default LazyDemo;
