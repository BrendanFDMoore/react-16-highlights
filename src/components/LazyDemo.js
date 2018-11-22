import React, { lazy, Suspense } from 'react';
import Loader from './Loader';
// const Sloth = lazy(() => import('./SlothLoader'));
const Sloth = lazy(() => import('./Sloth'));

class LazyDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    this.setState({ show: !this.state.show })
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow} type='button'>{show ? 'Hide' : 'Show'}</button>
        <Suspense fallback={<Loader />}>
          { show ? <Sloth /> : <span>No sloth :(</span>}
        </Suspense>
      </div>
    )
  }
}

export default LazyDemo;
